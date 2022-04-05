import React from "react";
import { mount } from '@cypress/react';
import App from "./App";

describe('Make reservation flow', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('renders title of the page', () => {
    mount(<App />);
    cy.get('h2').contains('Booking your suite at limehouse');
  });

  it('should make a reservation', ()=> {
    cy.get('[name="numberOfGuests]').first().type('3').blur()
    cy.get('[name="personalDetails.firstName"]').first().type('john').blur()
    cy.get('[name="personalDetails.lastName"]').first().type('john').blur()
    cy.get('[name="location.billingAddress"]').first().type('john').blur()
  })
})
