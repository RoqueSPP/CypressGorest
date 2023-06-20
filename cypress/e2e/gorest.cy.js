import body from '../jsons/JsonFactory'
import bodyUpdate from '../jsons/JsonFactory02'
describe('teste de API Gorest', () => {
    const uri = 'https://gorest.co.in/public/v2/users'
    const token = 'Bearer 38455aed713c78fb528c63f350b299c108316b532a223f5e811ed0e6e74a587e'

    it("Get Gorest", () => {
        cy.GetGorest(uri, token)
            .then((response) => {
                expect(response.status).to.eql(200)
                cy.log(JSON.stringify(response.body))
                cy.log(response.body[1].id)

            });
    });

    it("Post", () => {
        cy.PostGorest(uri, token, body)
            .then((response) => {
                expect(response.status).to.eql(201)
                cy.log(JSON.stringify(response.body))
                Cypress.env('id', response.body.id)
            })
    });
    it("UpDate", () => {
        cy.PutGorest(uri, token, bodyUpdate)
            .then((response) => {
                expect(response.status).to.eql(200)
                cy.log(JSON.stringify(response.body))
            })
    });
    it("Delete", () => {
        cy.DeleteGorest(uri,token)
        .then((response) => {
            expect(response.status).to.eql(204)
            cy.log(JSON.stringify(response.body))
        })
    });

})