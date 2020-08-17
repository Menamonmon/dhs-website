import React from 'react';
import './month.css';
import Day from '../day/day.js';

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export const MONTHS_LENGTHS = [
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]

export function MonthRow(props) {
  let [start, end] = props.range;
  let temp;
  let days = [];
  let td;
  for (let i = 0; i < 7; i++) {
    temp = start + 1;
    if (temp > end || i < props.start) { 
      td = <Day />;
    } else {
      td = <Day>{temp}</Day>;
    }
    days.push(td);
  }

  return (
    <tr className="month-row">{days}</tr>
  );
}


export function WeekdaysRow() {
  return (
    <div className="weekday-container">
      <div className="weekday">M</div>
      <div className="weekday">T</div>
      <div className="weekday">W</div>
      <div className="weekday">T</div>
      <div className="weekday">F</div>
      <div className="weekday">S</div>
      <div className="weekday">S</div>
    </div>
  );
}

export default function Month(props) {
  let { events, month, year, start } = props;
  if (month < 0 || month > 11) {
    throw new Error(`Invalid month month ${month}`);
  }
  if (0 > start || start > 7) {
    throw new Error(`Invalid start month for the month month ${start}`);
  }
  let monthlen = MONTHS_LENGTHS[month];

  if (start + monthlen > 42) {
    throw new Error(`The start number (${start}) and the month len (${monthlen}) exceed the max (35)`);
  }
  let days = new Array(start).fill(<Day empty={true} />);
  let eventDates = events.map((event) => event.startDate.getDate())
  for (let i = 0; i < monthlen; i++) {
    let eventIndex = eventDates.indexOf(i);
    days.push(<Day
      event={(eventIndex >= 0) ? events[eventIndex] : null}
    >{i + 1}</Day>)
  }

  return (
    <div className={`month-container ${start+monthlen > 35 ? "big-month": ""}`}>
      <div className="month-header">
        {props.children}
        <h3 className="month-title">{`${MONTHS[month]} ${year}`}</h3>
      </div>
      <WeekdaysRow />
      <div className="month-days">
        {days}
      </div>  
    </div>
  );
}