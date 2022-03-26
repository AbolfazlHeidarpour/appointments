/// <reference types="cypress" />
import React from 'react';
import * as ReactDOM from 'react-dom';

describe('App component', () => {
  it ('visits Appointments application', () => {
    cy.visit('http://localhost:3000');
  });

  it ('clicks all appointment buttons', () => {
    cy.get('button.appointment-button').click({multiple: true});
  });

  it ('removes all apointments', () => {
    cy.get('button.appointment-delete-button').click({multiple: true});
  });
});