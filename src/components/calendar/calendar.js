import React from 'react';
import './calendar.css';
import Month from './month/month.js';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    let today = props.today;
    this.state = {
      today: today,
      currentYear: today.getFullYear(),
      currentMonth: today.getMonth(),
      monthStart: (new Date(today.getFullYear(), today.getMonth())).getDay(),
      events: props.events,
    }

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  updateCalendar() {
    this.setState((state) => {
      let year = state.currentYear;
      let month = state.currentMonth;
      return { monthStart: (new Date(year, month)).getDay() };
    })
  }

  next() {
    this.setState((state) => {
      let {currentYear, currentMonth} = state;
      currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
      currentMonth = (currentMonth + 1) % 12;
      return { currentYear, currentMonth };
    });
    this.updateCalendar();
  }

  prev() {
    this.setState((state) => {
      let {currentYear, currentMonth} = state;
      currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
      currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
      return { currentYear, currentMonth };
    });
    this.updateCalendar();
  }

  currentMonthEvents() {
    let { events, currentMonth, currentYear } = this.state;
    return events.filter((event) => {
      return event.startDate.getMonth() === currentMonth && event.startDate.getFullYear() === currentYear;
    });
  }

  render() {
    return (
      <div className="calendar-month">
        <Month
          month={this.state.currentMonth}
          year={this.state.currentYear}
          start={this.state.monthStart}
          events={this.currentMonthEvents()}
        >
          <div className="calendar-btns">
            <div className="calendar-prev-btn" onClick={this.prev}>
              <div className="left-arrow"></div>
            </div>
            <div className="calendar-next-btn" onClick={this.next}>
              <div className="right-arrow"></div>
            </div>
          </div>
        </Month>
      </div>
    )
  }
}