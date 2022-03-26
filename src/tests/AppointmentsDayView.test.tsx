import React from 'react';
import AppointmentData from '../interfaces/Appointment';
import * as ReactDOM from 'react-dom';
import AppointmentsDayView from '../components/AppointmentsDayView';
import * as ReactTestUtils from 'react-dom/test-utils';
import App from '../components/App';

describe('AppointmentsDayView component', () => {
  let container: HTMLDivElement;
  let appointments: AppointmentData[] = [];
  const today = new Date();
  const sampleAppointments: AppointmentData[] = [{
    id: 1,
    startAt: today.setHours(12, 0),
    customer: { 
      firstName: 'Ashley',
      lastName: 'Ashleous',
      phoneNumber: '0903390234'
    },
    stylist: '',
    salon: '',
    notes: ''
  }, {
    id: 2,
    startAt: today.setHours(13, 0),
    customer: { 
      firstName: 'Jordan',
      lastName: 'Ferdinando',
      phoneNumber: '093214234214'
    },
    stylist: '',
    salon: '',
    notes: ''
  }];
  
  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component: JSX.Element) => 
    ReactDOM.render(component, container)
  ;

  it ('renders a div with the right id', () => {
    appointments = [];

    render(<AppointmentsDayView appointments={appointments} handleRemoveAppointment={() => {}}/>);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  });

  it('renders multiple appointments in an ol element', () => {
    appointments = sampleAppointments;

    render(<AppointmentsDayView appointments={appointments} handleRemoveAppointment={() => {}}/>);

    expect(container.querySelector('ol')).not.toBeNull();
    expect(container.querySelector('ol')?.children).toHaveLength(2);
  });

  it('renders each appointment in an li', () => {
    appointments = sampleAppointments;

    render(<AppointmentsDayView  appointments={appointments} handleRemoveAppointment={() => {}}/>);

    expect(
      container
      .querySelector('div#appointmentsDayView')
      ?.querySelectorAll('li')
    ).toHaveLength(2);

    expect(container
      .querySelector('div#appointmentsDayView')
      ?.querySelectorAll('li')[0]
      .textContent
    ).toEqual('12:00');

    expect(container
      .querySelector('div#appointmentsDayView')
      ?.querySelectorAll('li')[1]
      .textContent
    ).toEqual('13:00');
  });

  it('initially shows a message saying there are no appointments today', () => {
    appointments = [];

    render(<AppointmentsDayView appointments={appointments} handleRemoveAppointment={() => {}}/>);
    expect(container.textContent).toMatch(
      'There are no appointments scheduled for today'
    );
  });

  it('selects the first appointment by default', () => {
    appointments = sampleAppointments;
    render(<AppointmentsDayView appointments={appointments} handleRemoveAppointment={() => {}}/>);
  });

  it('has a select button element in each li', () => {
    appointments = sampleAppointments;
    render(<AppointmentsDayView appointments={appointments} handleRemoveAppointment={() => {}}/>);
    expect(
      container
      .querySelector('div#appointmentsDayView')
      ?.querySelectorAll('li > .appointment-button')
    ).toHaveLength(2);
    expect(
      container
      .querySelector('div#appointmentsDayView')
      ?.querySelectorAll('li > .appointment-button')[0]
      .tagName
    ).toEqual('BUTTON');
  });

  it('renders another appointment when selected', () => {
    appointments = sampleAppointments;
    render(<AppointmentsDayView appointments={appointments} handleRemoveAppointment={() => {}}/>);

    const button = container
    .querySelector('div#appointmentsDayView')
    ?.querySelectorAll('li > .appointment-button')[1];

    if (button) ReactTestUtils.Simulate.click(button);

    expect(container.textContent).toMatch('Jordan');
  });

  it ('has a delete button element in each li', () => {
    appointments = sampleAppointments;
    render(<AppointmentsDayView appointments={appointments} handleRemoveAppointment={() => {}}/>);
    expect(
      container
      .querySelector('div#appointmentsDayView')
      ?.querySelectorAll('li > .appointment-delete-button')
    ).toHaveLength(2);
  });

  it ('deletes first appointment when delete button selected', () => {
    
    render(<App />);

    const button = container
    .querySelector('div#appointmentsDayView')
    ?.querySelectorAll('li > .appointment-delete-button')[0];

    if (button) ReactTestUtils.Simulate.click(button);

    expect(
      container
        .querySelector('div#appointmentsDayView')
        ?.querySelectorAll('li')
    ).toHaveLength(8);
  });
});
