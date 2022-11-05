export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const dayObj = state.days.find(elem => elem.name === day);
  if (!dayObj) {
    return [];
  }
  const appointmentIds = dayObj.appointments
  const result = appointmentIds.map(appointmentId => state.appointments[appointmentId]);
  return result;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const appointmentsArray = Object.values(state.appointments).filter(appointment => appointment.interview);
  let interviewObj = appointmentsArray.find(appointment => appointment.interview.student === interview.student && appointment.interview.interviewer === interview.interviewer).interview;
  if (!interviewObj) {
    return null;
  }
  const result = {student: interviewObj.student, interviewer: state.interviewers[interviewObj.interviewer]};
  return result;
}