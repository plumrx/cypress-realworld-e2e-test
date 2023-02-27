describe("home-page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe.skip("Homepage-nav", () => {
    it("nav-brand", () => {
      cy.get(".navbar-brand")
        .should("contain", "conduit")
        //.and('have.attr','href').eq('.')
        .click();

      cy.url().should("contain", "/");
    });

    it("nav-Home", () => {
      cy.contains("Home").should("have.attr", "href", "/").click();
      cy.url().should("contain", "/");
    });

    it("nav-Sign in", () => {
      cy.contains("Sign in").should("have.attr", "href", "/login").click();

      cy.url().should("contain", "/login");

      cy.get(".btn-primary")
        .should("have.attr", "type", "submit")
        .and("contain", "Sign in");
    });

    it("nav-Sign up", () => {
      cy.contains("Sign up").should("have.attr", "href", "/register").click();

      cy.url().should("contain", "/register");

      cy.get(".btn-primary").and("contain", "Sign up");
    });
  });

  describe("Homepage-banner", () => {
    it("homepage banner", () => {
      cy.get(".banner")
        .should("contain", "conduit")
        .and("contain", "A place to share your knowledge.");
    });

    describe("Homepage-footer", () => {
      it("homepage footer", () => {
        cy.get("footer").snapshot();

        cy.get("footer").within(() => {
          cy.get(".logo-font").should("contain", "conduit").click();
          cy.url().should(
            "equal",
            "https://vue3-realworld-example-app-mutoe.vercel.app/#/",
          );

          cy.contains("Thinkster").should(
            "have.attr",
            "href",
            "https://thinkster.io",
          );

          cy.contains("Real world app").should(
            "have.attr",
            "href",
            "https://github.com/mutoe/vue3-realworld-example-app",
          );
        });
      });
    });
  });
});
