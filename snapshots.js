module.exports = {
  "home-page": {
    "Homepage-banner": {
      "Homepage-footer": {
        "homepage footer": {
          "1": "<footer>\n  <div class=\"container\"><a href=\"#/\"\n      class=\"router-link-active router-link-exact-active logo-font\"\n      aria-label=\"global-feed\"\n      aria-current=\"page\"> conduit </a><span class=\"attribution\"> An interactive\n      learning project from <a href=\"https://thinkster.io\">Thinkster</a>. Code\n      &amp; design licensed under MIT. </span></div>\n  <div class=\"container\"><span class=\"attribution\"\n      style=\"margin: 0px;\"><a\n        href=\"https://github.com/mutoe/vue3-realworld-example-app\">Real world\n        app</a> implementation using Vue v3 with Typescript and Composition Api\n    </span></div>\n</footer>"
        }
      }
    }
  },
  "__version": "7.1.0",
  "sign in": {
    "sign in at homepage": {
      "sign in pass": {
        "1": "<html lang=\"en\">\n\n  <head>\n    <script type=\"text/javascript\">\n      document.domain = 'vue3-realworld-example-app-mutoe.vercel.app';\n      ! function(e) {\n        var t = {};\n\n        function n(r) {\n          if (t[r]) return t[r].exports;\n          var o = t[r] = {\n            i: r,\n            l: !1,\n            exports: {}\n          };\n          return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports\n        }\n        n.m = e, n.c = t, n.d = function(e, t, r) {\n          n.o(e, t) || Object.defineProperty(e, t, {\n            enumerable: !0,\n            get: r\n          })\n        }, n.r = function(e) {\n          \"undefined\" != typeof Symbol && Symbol.toStringTag && Object\n            .defineProperty(e, Symbol.toStringTag, {\n              value: \"Module\"\n            }), Object.defineProperty(e, \"__esModule\", {\n              value: !0\n            })\n        }, n.t = function(e, t) {\n          if (1 & t && (e = n(e)), 8 & t) return e;\n          if (4 & t && \"object\" == typeof e && e && e.__esModule) return e;\n          var r = Object.create(null);\n          if (n.r(r), Object.defineProperty(r, \"default\", {\n              enumerable: !0,\n              value: e\n            }), 2 & t && \"string\" != typeof e)\n            for (var o in e) n.d(r, o, function(t) {\n              return e[t]\n            }.bind(null, o));\n          return r\n        }, n.n = function(e) {\n          var t = e && e.__esModule ? function() {\n            return e.default\n          } : function() {\n            return e\n          };\n          return n.d(t, \"a\", t), t\n        }, n.o = function(e, t) {\n          return Object.prototype.hasOwnProperty.call(e, t)\n        }, n.p = \"\", n(n.s = 0)\n      }({\n        \"./injection/index.js\": function(e, t, n) {\n          \"use strict\";\n          n.r(t);\n          const r = window.Cypress = parent.Cypress;\n          if (!r) throw new Error(\n            \"Something went terribly wrong and we cannot proceed. We expected to find the global Cypress in the parent window but it is missing!. This should never happen and likely is a bug. Please open an issue!\"\n            );\n          const o = (() => {\n            let e, t, n, r;\n            const o = () => {\n                e = !1, t = !1, n = [], r = {}\n              },\n              i = (e, t = []) => \"function\" == typeof e ? e.apply(\n                window, t) : window.eval(e);\n            return o(), {\n              wrap: () => {\n                const o = {\n                    setTimeout: window.setTimeout,\n                    setInterval: window.setInterval,\n                    requestAnimationFrame: window\n                      .requestAnimationFrame,\n                    clearTimeout: window.clearTimeout,\n                    clearInterval: window.clearInterval\n                  },\n                  a = (e, t) => o[e].apply(window, t),\n                  s = e => n => (t && (r[n] = !0), a(e, [n])),\n                  u = t => (...r) => {\n                    let o, [s, u, ...l] = r;\n                    return o = a(t, [(...r) => {\n                      if (!e) return i(s, r);\n                      n.push({\n                        timerId: o,\n                        fnOrCode: s,\n                        params: r,\n                        type: t\n                      })\n                    }, u, ...l]), o\n                  };\n                window.setTimeout = u(\"setTimeout\"), window\n                  .setInterval = u(\"setInterval\"), window\n                  .requestAnimationFrame = u(\n                    \"requestAnimationFrame\"), window.clearTimeout =\n                  s(\"clearTimeout\"), window.clearInterval = s(\n                    \"clearInterval\")\n              },\n              reset: o,\n              pause: a => {\n                e = Boolean(a), e || (t = !0, n.forEach(e => {\n                  const {\n                    timerId: t,\n                    type: n,\n                    fnOrCode: o,\n                    params: a\n                  } = e;\n                  \"setInterval\" === n && r[t] || i(o, a)\n                }), o())\n              }\n            }\n          })();\n          r.removeAllListeners(\"app:timers:reset\"), r.removeAllListeners(\n            \"app:timers:pause\"), r.on(\"app:timers:reset\", o.reset), r.on(\n            \"app:timers:pause\", o.pause), o.wrap(), r.action(\n            \"app:window:before:load\", window)\n        },\n        0: function(e, t, n) {\n          e.exports = n(\"./injection/index.js\")\n        }\n      });\n    </script>\n    <meta charset=\"UTF-8\">\n    <title>Conduit</title>\n    <meta name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0\">\n\n    <link rel=\"icon\"\n      href=\"/favicon.ico\">\n    <link href=\"//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\"\n      rel=\"stylesheet\"\n      type=\"text/css\">\n    <link\n      href=\"//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic\"\n      rel=\"stylesheet\"\n      type=\"text/css\">\n\n    <link rel=\"stylesheet\"\n      href=\"//demo.productionready.io/main.css\">\n    <script type=\"module\"\n      crossorigin=\"\"\n      src=\"/assets/index.4ab94a0d.js\"></script>\n  </head>\n\n  <body>\n    <div id=\"app\"\n      data-v-app=\"\">\n      <nav class=\"navbar navbar-light\">\n        <div class=\"container\"><a href=\"#/\"\n            class=\"navbar-brand\"\n            aria-label=\"global-feed\"> conduit </a>\n          <ul class=\"nav navbar-nav pull-xs-right\">\n            <li class=\"nav-item\"><a href=\"#/\"\n                class=\"nav-link\"\n                aria-label=\"global-feed\">\n                <!----> Home</a></li>\n            <li class=\"nav-item\"><a href=\"#/login\"\n                class=\"active router-link-exact-active nav-link\"\n                aria-label=\"login\"\n                aria-current=\"page\">\n                <!----> Sign in</a></li>\n            <li class=\"nav-item\"><a href=\"#/register\"\n                class=\"nav-link\"\n                aria-label=\"register\">\n                <!----> Sign up</a></li>\n          </ul>\n        </div>\n      </nav>\n      <div class=\"auth-page\">\n        <div class=\"container page\">\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-xs-12\">\n              <h1 class=\"text-xs-center\"> Sign in </h1>\n              <p class=\"text-xs-center\"><a href=\"#/register\"\n                  class=\"\"\n                  aria-label=\"register\"> Need an account? </a></p>\n              <ul class=\"error-messages\"></ul>\n              <form>\n                <fieldset class=\"form-group\"\n                  aria-required=\"true\"><input\n                    class=\"form-control form-control-lg\"\n                    type=\"email\"\n                    required=\"\"\n                    placeholder=\"Email\"></fieldset>\n                <fieldset class=\" form-group\"><input\n                    class=\"form-control form-control-lg\"\n                    type=\"password\"\n                    required=\"\"\n                    placeholder=\"Password\"></fieldset><button\n                  class=\"btn btn-lg btn-primary pull-xs-right\"\n                  disabled=\"\"\n                  type=\"submit\"> Sign in </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <footer>\n        <div class=\"container\"><a href=\"#/\"\n            class=\"logo-font\"\n            aria-label=\"global-feed\"> conduit </a><span class=\"attribution\"> An\n            interactive learning project from <a\n              href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design\n            licensed under MIT. </span></div>\n        <div class=\"container\"><span class=\"attribution\"\n            style=\"margin: 0px;\"><a\n              href=\"https://github.com/mutoe/vue3-realworld-example-app\">Real\n              world app</a> implementation using Vue v3 with Typescript and\n            Composition Api </span></div>\n      </footer>\n    </div>\n\n\n\n  </body>\n\n</html>"
      }
    }
  }
}