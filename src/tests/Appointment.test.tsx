import React from 'react';
import * as ReactDOM from 'react-dom';
import Appointment from '../components/Appointment';
import Customer from '../interfaces/Customer';

describe('Appointment component', () => {
  let container: HTMLDivElement;
  let customer: Customer = {
    firstName: '', 
    lastName: '', 
    phoneNumber: '' 
  };
  let element: (selector: string) => Element | null;
  let stylist: string;
  let salon: string;
  let notes: string;

  beforeEach(() => {
    notes = salon = stylist = '';
    container = document.createElement('div');
    element = (selector: string) => container.querySelector(selector);
  });

  const render = (component: JSX.Element) => 
    ReactDOM.render(component, container)
  ;
  const appointmentTable = () => element('#appointmentView > table');

  it('renders a table', () => {
    render(
      <Appointment
        id={0}
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
      />
    );
    expect(appointmentTable()).not.toBeNull();
  });

  it ('renders the customer first name', () => {
    customer = { firstName: 'Ashley', lastName: '', phoneNumber: '' };
    render(
      <Appointment
        id={0}
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('Ashley');
  });
  it ('renders another customer first name', () => {
    customer = {
      firstName: 'Jordan', 
      lastName: '',
      phoneNumber: '' 
    };
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('Jordan');
  });

  it('renders the customer last name', () => {
    customer = {
      firstName: '',
      lastName: 'Jackson', 
      phoneNumber: ''
    };
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('Jackson');
  });

  it('renders another customer last name', () => {
    customer = {
      firstName: '',
      lastName: 'Ferdinando',
      phoneNumber: ''
    };
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('Ferdinando');
  });

  it('renders the customer phone number', () => {
    customer = {
      firstName: '',
      lastName: '',
      phoneNumber: '09033909291'
    };
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('09033909291');
  });

  it('renders another customer phone number', () => {
    customer = {
      firstName: '',
      lastName: '',
      phoneNumber: '09032909291'
    };
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('09032909291');
  });

  it('renders the stylist name', () => {
    stylist = 'fernando';
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('fernando');
  });

  it('renders another stylist name', () => {
    stylist = 'Carola';
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('Carola');
  });

  it ('renders the salon service', () => {
    salon = 'salon 1';
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('salon 1');
  });

  it ('renders another salon service', () => {
    salon = 'salon 2';
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('salon 2');
  });

  it ('renders the notes', () => {
    notes = 'This is a note';
    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={0}
        id={0}
      />
    );
    expect(appointmentTable()?.textContent).toMatch('This is a note');
  });

  it('renders a heading with the time', () => {
    const today = new Date();
    const timestamp = today.setHours(9, 0, 0);

    render(
      <Appointment
        customer={customer}
        stylist={stylist}
        salon={salon}
        notes={notes}
        startAt={timestamp}
        id={0}
      />
    );
    expect(element('#appointmentView > h3')).not.toBeNull();
    expect(element('#appointmentView > h3')?.textContent).toEqual(`Today's appointments at 09:00`);
  });
});