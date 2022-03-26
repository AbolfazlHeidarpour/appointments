import React from "react";
import convertUnixTimeStampToTimeOfDay from "../functions/convertUnixTimeStampToTimeOfDay";
import AppointmentType from '../interfaces/Appointment';
import Appointment from "./Appointment";
import '../css/AppointmentDayView.css';
import {Icon} from '@iconify/react';
import closeBold from '@iconify/icons-ep/close-bold';
import AppointmentData from "../interfaces/Appointment";

export interface AppointmentsDayViewProps {
  appointments: Array<AppointmentType>;
  handleRemoveAppointment: (selectedAppointment: AppointmentData) => void;
}

const AppointmentsDayView: React.FunctionComponent<AppointmentsDayViewProps> = ({appointments, handleRemoveAppointment}) => {
  const [selectedAppointment, setSelectedAppointment] = React.useState<AppointmentData>(appointments[0]);

  React.useEffect(() => {
    setSelectedAppointment(prevState => {
      if (appointments.length === 0)
        return prevState;

      const index = appointments.findIndex(a => a.id === prevState.id);

      if (index >= 0)
        return prevState;

      if (index < 0) {
        if (prevState.id > appointments[appointments.length - 1].id) {
          return appointments[appointments.length - 1];
        }
      
        const index = appointments.findIndex(appointment => appointment.id > prevState.id);
        return appointments[index];
      } else return appointments[0];
    })
  }, 
    [appointments, setSelectedAppointment]
  );

  return (
    <div id='appointmentsDayView'>
      <ol>
        {appointments.map((appointment) => 
          <li key={appointment.startAt}>
            <button 
              className="appointment-delete-button"
              onClick={() => handleRemoveAppointment(appointment)}
            >
              <Icon icon={closeBold} />
            </button>
            <button
              type='button'
              className='appointment-button'
              onClick={() => setSelectedAppointment(appointment)}
            >
              {convertUnixTimeStampToTimeOfDay(appointment.startAt)}
            </button>
          </li>
        )}
      </ol>
      <section className="vertical-divider"/>
      {
        appointments.length === 0 ? 
          <p>There are no appointments scheduled for today</p>
          :
          <>
            <Appointment {...selectedAppointment} />
          </>
      }
    </div>
  );
};

export default AppointmentsDayView;