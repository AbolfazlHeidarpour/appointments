import * as React from 'react';
import convertUnixTimeStampToTimeOfDay from '../functions/convertUnixTimeStampToTimeOfDay';
import AppointmentData from '../interfaces/Appointment';

type AppointmentProps = AppointmentData;

const Appointment: React.FunctionComponent<AppointmentProps> = React.memo(
  ({
    customer,
    stylist,
    salon,
    notes,
    startAt
  }) =>
  <div 
    id='appointmentView'
    style={{
      float: 'right',
      width: 'calc(85% - 38px)',
      margin: 16,
    }}
  >
    <h3 
      style={{
        textAlign: 'left',
        paddingBottom: 25
      }}
    >
      Today's appointments at {convertUnixTimeStampToTimeOfDay(startAt)}
    </h3>
    <table>
      <tbody>
        <tr>
          <td>Customer</td>
          <td>{customer.firstName} {customer.lastName}</td>
        </tr>
        <tr>
          <td>Phone number</td>
          <td>{customer.phoneNumber}</td>
        </tr>
        <tr>
          <td>Stylist</td>
          <td>{stylist}</td>
        </tr>
        <tr>
          <td>Salon</td>
          <td>{salon}</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>{notes}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Appointment;