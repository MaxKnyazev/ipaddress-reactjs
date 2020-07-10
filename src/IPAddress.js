import React from 'react';
import classes from './IPAddress.module.css'

const IPAddress = ({ip, city, country, loc, org, postal, timezone}) => {
    return (
      <>
        <div>IP address :</div>
        <div className={classes.colorInfo}>{ip}</div>
        <div>Timezone :</div>
        <div className={classes.colorInfo}>{timezone}</div>
        <div>Country :</div>
        <div className={classes.colorInfo}>{country}</div>
        <div>Postal :</div>
        <div className={classes.colorInfo}>{postal}</div>
        <div>City :</div>
        <div className={classes.colorInfo}>{city}</div>
        <div>Location :</div>
        <div className={classes.colorInfo}>{loc}</div>
        <div>Organization :</div>
        <div className={classes.colorInfo}>{org}</div>
      </>
    );
}

export default IPAddress;
