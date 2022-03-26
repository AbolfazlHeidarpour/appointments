import React from 'react';
import '../css/App.css';
import Appointment from '../interfaces/Appointment';
import { sampleAppointments } from '../sampleData';
import AppointmentsDayView from './AppointmentsDayView';

function App() {
  const [appointments, setAppointments] = React.useState<Appointment[]>(sampleAppointments);

  const handleRemoveAppointment = React.useCallback(
    (selectedAppointment: Appointment) => {
      setAppointments(prevState => 
        prevState.filter((appointment) => appointment.id !== selectedAppointment.id)
      );
    }, 
    [setAppointments]
  );
  return (
    <div className="App">
      <AppointmentsDayView appointments={appointments} handleRemoveAppointment={handleRemoveAppointment}/>
    </div>
  );
}

export default App;
