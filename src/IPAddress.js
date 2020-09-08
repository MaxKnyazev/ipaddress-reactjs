import React from 'react';
import classes from './IPAddress.module.css';

const IPAddress = ({ ip, city, country, loc, org, postal, timezone }) => {
  return (
    <>
      <div className={classes.title}>IP address :</div>
      <div className={classes.info}>{ip}</div>
      <div className={classes.title}>Timezone :</div>
      <div className={classes.info}>{timezone}</div>
      <div className={classes.title}>Country :</div>
      <div className={classes.info}>{country}</div>
      <div className={classes.title}>Postal :</div>
      <div className={classes.info}>{postal}</div>
      <div className={classes.title}>City :</div>
      <div className={classes.info}>{city}</div>
      <div className={classes.title}>Location :</div>
      <div className={classes.info}>{loc}</div>
      <div className={classes.title}>Organization :</div>
      <div className={classes.info}>{org}</div>
    </>
  );
};

export default IPAddress;
