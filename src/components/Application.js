import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const setDay = day => setState({ ...state, day });
  

  useEffect(() => {
    const daysUrl = 'http://localhost:8001/api/days';
    const appointmentsUrl = 'http://localhost:8001/api/appointments';
    Promise.all([
      axios.get(daysUrl),
      axios.get(appointmentsUrl)
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data }));
    });
  }, [])

  const appointmentsArray = dailyAppointments.map(appointment => (
    <Appointment
      key={appointment.id}
      {...appointment}
    />
  ));
  appointmentsArray.push(<Appointment key="last" time="5pm" />);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={state.days}
          value={state.day}
          setDay={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentsArray}
      </section>
    </main>
  );
};