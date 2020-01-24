import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import { StoreRootState } from '../../reducers/root/root-reducer';
import { Spinner } from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }: any) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Fragment>
      {loading ? <Spinner /> :
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i>
            Browse and connect with developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile: any) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) :
              <h4>No profiles found...</h4>
            }
          </div>
        </Fragment>}
    </Fragment >
  );
};

Profiles.propsType = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state: StoreRootState, ownProps: any) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);