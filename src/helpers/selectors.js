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