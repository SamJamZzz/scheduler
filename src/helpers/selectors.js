export function getAppointmentsForDay(state, day) {
  const foundDay = state.days.find(thisDay => thisDay.name === day);
  if (!foundDay) {
    return [];
  }

  const mappedData = foundDay.appointments.map(appointmentId => state.appointments[appointmentId]);
  return mappedData;
}

export function getInterviewersForDay(state, day) {
  return Object.values(state.interviewers)
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer]
  }
}