describe("sign in", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("sign in at homepage", () => {
    it.skip("sign in pass", () => {
      cy.contains(" Sign in").click();
      //页面跳转，DOM节点
      cy.url().should("equal", Cypress.config().baseUrl + "/#/login");
      cy.get("[placeholder='Email']").type("plumrx@qqq.com");
      cy.get("[placeholder='Password']").type("22222222");
      cy.get(".btn-primary").should("contain", " Sign in ").click();
    });

    it("email validation", () => {
      cy.visit(Cypress.config().baseUrl + "/#/login");
      cy.get("[placeholder='Email']").type("plunrx");
      cy.get("[placeholder='Password']").type("22222222");
      cy.get(".btn-primary").should("contain", " Sign in ").click();
      cy.url().should("equal", Cypress.config().baseUrl + "/#/login");
    });

    it("password validation", () => {
      cy.visit(Cypress.config().baseUrl + "/#/login");
      cy.get("[placeholder='Email']").type("plumrx@qqq.com");
      cy.get("[placeholder='Password']").type("2");
      cy.get(".btn-primary").should("contain", " Sign in ").click();
      cy.url().should("equal", Cypress.config().baseUrl + "/#/login");
      cy.get(".error-messages").should(
        "contain",
        "email or password is invalid",
      );
    });
  });

  describe("sign in at other page", () => {
    it("should redirect to homepage, when click 'Have an account?'", () => {
      cy.visit(Cypress.config().baseUrl + "/#/register");
      cy.contains(" Have an account? ")
        .click()
      cy.contains('Sign in')
    });

    it("sign in at like page", () => {
      cy.get(".ion-heart")
        .eq(0)
        .click()
        .url()
        .should("equal", Cypress.config().baseUrl + "/#/login");
    });

    it("sign in at read more comment", () => {
      cy.get(".article-preview").eq(0).contains("Read more...").click();
      cy.get(".article-page").contains(" Sign in ").click();
      cy.url().should("equal", Cypress.config().baseUrl + "/#/login");
    });

    it("sign in at read more favorite[0]", () => {
      cy.get(".article-preview").eq(0).contains("Read more...").click();
      cy.contains("Favorite Article").click();
      cy.url().should("equal", Cypress.config().baseUrl + "/#/login");
    });

    it("sign in at read more favorite[1]", () => {
      cy.get(".article-preview").eq(0).contains("Read more...").click();
      cy.get(".article-actions").within(() => {
        cy.contains("Favorite Article").click();
      });
      cy.url().should("equal", Cypress.config().baseUrl + "/#/login");
    });

    it("sign in at read more favorite follow[0]", () => {
      cy.get(".article-preview").eq(0).contains("Read more...").click();
      cy.url().should("contain", "/#/article/");

      cy.get(".author").eq(0).click();
      cy.get(".action-btn").should("contain", "Follow").click();
      cy.url().should("equal", Cypress.config().baseUrl + "/#/login");
    });

    it("sign in at read more favorite follow[1]", () => {
      cy.get(".article-preview").eq(0).contains("Read more...").click();
      cy.url().should("contain", "/#/article/");

      cy.get(".author").eq(1).click();
      cy.get(".action-btn").should("contain", "Follow").click();
      cy.url().should("equal", Cypress.config().baseUrl + "/#/login");
    });
  });
});
