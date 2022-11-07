export function getAppointmentsForDay(state, day) {
  const foundDay = state.days.find(thisDay => thisDay.name === day);
  if (!foundDay) {
    return [];
  }

  const mappedData = foundDay.appointments.map(appointmentId => state.appointments[appointmentId]);
  return mappedData;
}

export function getInterviewersForDay(state, day) {
  const foundDay = state.days.find(thisDay => thisDay.name === day);
  if (!foundDay) {
    return [];
  }

  const interviews = foundDay.appointments.map(appointmentId => state.appointments[appointmentId].interview).filter(interview => interview);
  const interviewerIds = {};
  interviews.forEach(interview => {
    if (!interviewerIds[interview.interviewer]) {
      interviewerIds[interview.interviewer] = true;
    }
  })
  const result = Object.keys(interviewerIds).map(interviewerId => state.interviewers[interviewerId]);
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