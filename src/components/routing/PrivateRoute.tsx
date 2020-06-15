import { connect } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { StoreRootState } from '../../reducers/root/root-reducer';
import React from 'react';
import PropTypes from 'prop-types';

interface IRouteProps {
  component: React.ComponentType<RouteProps>,
  auth: any
}

// Use FC form
// Private Route for authenticated user to pages
const PrivateRoute: React.FC<IRouteProps> = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}: IRouteProps) => {
  const routeComponent = (props: any) => (
    !isAuthenticated && !loading ?
      (<Redirect to='/login' />) : (React.createElement(Component, props))
  );
  return <Route {...rest} render={routeComponent} />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

// interface Props extends RouteProps {
//   auth: any
// }

// class PrivateRoute extends Route<Props> {
//   constructor(props: Props) {
//     super(props)
//   }
//   componentDidMount() {
//     const { isAuthenticated, loading } = this.props.auth;
//     console.log(loading)
//     !isAuthenticated && !loading && history.push('/login');
//   }
// }

const mapStateToProps = (state: StoreRootState, ownProps: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
