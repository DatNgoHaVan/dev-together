import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StoreRootState } from '../../reducers/root/root-reducer';

const Alert = ({ alerts }: any) => {
  return alerts !== null && alerts.map((alert: any) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.alertMsg}
    </div>
  ));
};

Alert.propTypes = {
  alerts: PropTypes.func.isRequired,
};

const mapStateToProps = (state: StoreRootState) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
