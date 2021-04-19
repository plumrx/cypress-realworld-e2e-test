describe("sign up no account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("sign up pass", () => {
    cy.contains("Sign up").click();
    // need to mock data
    cy.get("[placeholder='Your Name']").type(" ");
    cy.should("attr", "placeholder", "Your Name").type(" ");
    cy.should("attr", "placeholder", "Your Name").type(" ");
    cy.contains("Sign up").should("attr", "type", "submit").click();

    cy.url().should("contain", "/#/");
    // mocking
    cy.get(".nav-link")
      .should("attr", "aria-label", "profile")
      .should("contain", username);
  });

  it("sign up in sign in");
});

describe("sign up have account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("sign up have account", () => {
    cy.contains("Sign up").click();
    cy.contains("Have an account?").click();
    cy.url().should("contain", "/#/login");
  });
});
