describe("sign up no account", () => {
  beforeEach(() => {
    cy.intercept(/\/api\/users$/, {fixture:'logup.json'})
    cy.intercept(/\/api\/users\/login$/, {fixture:'login.json'})
    cy.visit("/");
  });

  it.only("sign up pass", () => {
    cy.contains("Sign up").click();

    cy.get("[placeholder='Your Name']").type("plumrx11");
    cy.get("[placeholder='Email']").type("plumrx11@qq.com");
    cy.get("[placeholder='Password']").type("22222222");
    cy.get('button').contains("Sign up").click();
    

    cy.url().should("contain", "/#/");

    cy.get("[aria-label='profile']")
      .should("contain", "plumrx11");
  });

  it("sign up in sign in",()=>{
    cy.contains('Sign in').click()
    cy.contains('Need an account?').click()
    cy.url().should('contain','/#/register')
  });

  it("sign up have account", () => {
    cy.contains("Sign up").click();
    cy.contains("Have an account?").click();
    cy.url().should("contain", "/#/login");
  });
});

