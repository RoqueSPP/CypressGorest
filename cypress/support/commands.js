// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
//Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.add('GetGorest', (uribase, token) => {
    cy.request({
        method: 'GET',
        url: uribase,
        header: {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: { token },
            failOnStatusCode: false
        }
    })


});

Cypress.Commands.add('PostGorest', (uribase, token, body) => {
    cy.request({
        method: 'POST',
        url: uribase,
        headers: {
            authorization: token,
        },
        body: body
    })
})

Cypress.Commands.add('PutGorest', (uribase, token, body) => {
    cy.request({
        method: 'PUT',
        url: uribase + '/' + Cypress.env('id'),
        headers: {

            authorization: token,
        },
        body: body
    })
    Cypress.Commands.add('DeleteGorest', (uribase, token) => {
        cy.request({
            method: 'DELETE',
            url: uribase + '/' + Cypress.env('id'),
            headers: {

                authorization: token,
            },
        })

    })
})