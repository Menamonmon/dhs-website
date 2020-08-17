import React, { useState } from 'react';
import './day.css';

export default function Day(props) {
  let [toggled, changeToggle] = useState();
  if (toggled) {
    changeToggle(false);
  }
  let link = props.event ? props.event.link : '#';
  let eventName = props.event ? props.event.name : "No Events";

  return (
    <div
      className={`day ${props.empty ? 'day-empty' : ''}`}
      onMouseOver={() => {
        changeToggle(true);
      }}
    >
      {props.children}
      <span className="day-tooltip"><a href={link}>{eventName}</a></span>
    </div>
  );
}