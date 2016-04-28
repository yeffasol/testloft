/*! CSS-POLYFILLS - v0.1.0 - 2015-08-02 - https://github.com/FremyCompany/css-polyfills - Copyright (c) 2015 François REMY; MIT-Licensed !*/

! function () {
  "use strict";
  var a = {
      exports: {}
    },
    b = function () {
      var b = {},
        c = function (a) {
          return b[a]
        };
      return c.define = function (c) {
        b[c] = a.exports, a.exports = {}
      }, c
    }();
  ! function (a) {
    a.console || (a.console = {
      backlog: "",
      log: function (b) {
        this.backlog += b + "\n", a.debug && alert(b)
      },
      dir: function (b) {
        try {
          var c = function (a) {
              return a.innerHTML ? {
                tagName: a.tagName,
                className: a.className,
                id: a.id,
                innerHTML: a.innerHTML.substr(0, 100)
              } : {
                nodeName: a.nodeName,
                nodeValue: a.nodeValue
              }
            },
            d = function (b) {
              var d = [],
                e = JSON.stringify(b, function (b, e) {
                  if ("object" == typeof e) {
                    if (!d.indexOf(e)) return "__cycle__";
                    if (e instanceof a.Node) return c(e);
                    d.push(e)
                  }
                  return e
                });
              return e
            };
          this.log(d(b))
        } catch (e) {
          this.log(b)
        }
      },
      warn: function (a) {
        this.log(a)
      },
      error: function (a) {
        this.log("ERROR:"), this.log(a)
      }
    }, a.onerror || (a.onerror = function () {
      console.log([].slice.call(arguments, 0).join("\n"))
    })), a.cssConsole = {
      enabled: !!a.debug,
      warnEnabled: !0,
      log: function (a) {
        this.enabled && console.log(a)
      },
      dir: function (a) {
        this.enabled && console.dir(a)
      },
      warn: function (a) {
        this.warnEnabled && console.warn(a)
      },
      error: function (a) {
        console.error(a)
      }
    }
  }(window, document), b.define("../core/polyfill-dom-console.js"), void

  function () {
    for (var a = ["webkit", "moz", "ms", "o"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) {
      var c = a[b];
      window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var d = 0,
        e = [],
        f = [],
        g = function () {
          var a = +new Date,
            b = e;
          e = f;
          for (var c = 0; c < b.length; c++) b[c](a);
          d += b.length, b.length = 0, f = b, setTimeout(g, 16)
        };
      g(), window.requestAnimationFrame = function (a) {
        return d + e.push(a)
      }, window.cancelAnimationFrame = function (a) {
        a -= d, a >= 0 && a < e.length && (e[a] = function () {})
      }
    }
    window.setImmediate || (window.setImmediate = function (a) {
      return setTimeout(a, 0)
    }, window.cancelImmediate = clearTimeout)
  }(), b.define("../core/polyfill-dom-requestAnimationFrame.js"), a.exports = function () {
    function a() {
      var a = [];
      return a.toCSSString = b, a
    }

    function b(a) {
      return a ? this.map(function (a) {
        return a.toCSSString()
      }).join(a) : this.asCSSString || (this.asCSSString = this.map(function (a) {
        return a.toCSSString()
      }).join("/**/").replace(/( +\/\*\*\/ *| * | *\/\*\*\/ +)/g, " ").replace(/( +\/\*\*\/ *| * | *\/\*\*\/ +)/g, " ").replace(/(\!|\:|\;|\@|\.|\,|\*|\=|\&|\\|\/|\<|\>|\[|\{|\(|\]|\}|\)|\|)\/\*\*\//g, "$1").replace(/\/\*\*\/(\!|\:|\;|\@|\.|\,|\*|\=|\&|\\|\/|\<|\>|\[|\{|\(|\]|\}|\)|\|)/g, "$1"))
    }

    function c(a, b, c) {
      return a >= b && c >= a
    }

    function d(a) {
      return c(a, 48, 57)
    }

    function e(a) {
      return d(a) || c(a, 65, 70) || c(a, 97, 102)
    }

    function f(a) {
      return c(a, 65, 90)
    }

    function g(a) {
      return c(a, 97, 122)
    }

    function h(a) {
      return f(a) || g(a)
    }

    function i(a) {
      return a >= 128
    }

    function j(a) {
      return h(a) || i(a) || 95 == a
    }

    function k(a) {
      return j(a) || d(a) || 45 == a
    }

    function l(a) {
      return c(a, 0, 8) || 11 == a || c(a, 14, 31) || 127 == a
    }

    function m(a) {
      return 10 == a
    }

    function n(a) {
      return m(a) || 9 == a || 32 == a
    }

    function o(a) {
      this.message = a
    }

    function p(a) {
      for (var b = [], d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        if (13 == e && 10 == a.charCodeAt(d + 1) && (e = 10, d++), (13 == e || 12 == e) && (e = 10), 0 == e && (e = 65533), c(e, 55296, 56319) && c(a.charCodeAt(d + 1), 56320, 57343)) {
          var f = e - 55296,
            g = a.charCodeAt(d + 1) - 56320;
          e = Math.pow(2, 21) + f * Math.pow(2, 10) + g
        }
        b.push(e)
      }
      return b
    }

    function q(a) {
      if (65535 >= a) return String.fromCharCode(a);
      a -= Math.pow(2, 21);
      var b = Math.floor(a / Math.pow(2, 10)) + 55296,
        c = a % Math.pow(2, 10);
      return String.fromCharCode(b) + String.fromCharCode(c)
    }

    function r(b) {
      b = p(b);
      for (var c, f = -1, g = new a, h = 0, i = 0, o = 0, r = function () {
          h += 1, o = i, i = 0
        }, s = {
          line: h,
          column: i
        }, B = function (a) {
          return a >= b.length ? -1 : b[a]
        }, Q = function (a) {
          if (void 0 === a && (a = 1), a > 3) throw "Spec Error: no more than three codepoints of lookahead.";
          return B(f + a)
        }, $ = function (a) {
          return void 0 === a && (a = 1), f += a, c = B(f), m(c) ? r() : i += a, !0
        }, _ = function () {
          return f -= 1, m(c) ? (h -= 1, i = o) : i -= 1, s.line = h, s.column = i, !0
        }, ab = function (a) {
          return void 0 === a && (a = c), -1 == a
        }, bb = function () {}, cb = function () {
          return console.log("Parse error at index " + f + ", processing codepoint 0x" + c.toString(16) + "."), !0
        }, db = function () {
          if (eb(), $(), n(c)) {
            for (; n(Q());) $();
            return new v
          }
          if (34 == c) return hb();
          if (35 == c) {
            if (k(Q()) || kb(Q(1), Q(2))) {
              var a = new U;
              return mb(Q(1), Q(2), Q(3)) && (a.type = "id"), a.value = qb(), a
            }
            return new P(c)
          }
          return 36 == c ? 61 == Q() ? ($(), new L) : new P(c) : 39 == c ? hb() : 40 == c ? new G : 41 == c ? new H : 42 == c ? 61 == Q() ? ($(), new M) : new P(c) : 43 == c ? pb() ? (_(), fb()) : new P(c) : 44 == c ? new A : 45 == c ? pb() ? (_(), fb()) : 45 == Q(1) && 62 == Q(2) ? ($(2), new x) : nb() ? (_(), gb()) : new P(c) : 46 == c ? pb() ? (_(), fb()) : new P(c) : 58 == c ? new y : 59 == c ? new z : 60 == c ? 33 == Q(1) && 45 == Q(2) && 45 == Q(3) ? ($(3), new w) : new P(c) : 64 == c ? mb(Q(1), Q(2), Q(3)) ? new T(qb()) : new P(c) : 91 == c ? new E : 92 == c ? lb() ? (_(), gb()) : (cb(), new P(c)) : 93 == c ? new F : 94 == c ? 61 == Q() ? ($(), new K) : new P(c) : 123 == c ? new C : 124 == c ? 61 == Q() ? ($(), new J) : 124 == Q() ? ($(), new N) : new P(c) : 125 == c ? new D : 126 == c ? 61 == Q() ? ($(), new I) : new P(c) : d(c) ? (_(), fb()) : j(c) ? (_(), gb()) : ab() ? new O : new P(c)
        }, eb = function () {
          for (; 47 == Q(1) && 42 == Q(2);)
            for ($(2);;) {
              if ($(), 42 == c && 47 == Q()) {
                $();
                break
              }
              if (ab()) return void cb()
            }
        }, fb = function () {
          var a = rb();
          if (mb(Q(1), Q(2), Q(3))) {
            var b = new Z;
            return b.value = a.value, b.repr = a.repr, b.type = a.type, b.unit = qb(), b
          }
          if (37 == Q()) {
            $();
            var b = new Y;
            return b.value = a.value, b.repr = a.repr, b
          }
          var b = new X;
          return b.value = a.value, b.repr = a.repr, b.type = a.type, b
        }, gb = function () {
          var a = qb();
          if ("url" == a.toLowerCase() && 40 == Q()) {
            for ($(); n(Q(1)) && n(Q(2));) $();
            return 34 == Q() || 39 == Q() ? new S(a) : !n(Q()) || 34 != Q(2) && 39 != Q(2) ? ib() : new S(a)
          }
          return 40 == Q() ? ($(), new S(a)) : new R(a)
        }, hb = function (a) {
          void 0 === a && (a = c);
          for (var b = ""; $();) {
            if (c == a || ab()) return new V(b);
            if (m(c)) return cb(), _(), new t;
            92 == c ? ab(Q()) ? bb() : m(Q()) ? $() : b += q(jb()) : b += q(c)
          }
        }, ib = function () {
          for (var a = new W(""); n(Q());) $();
          if (ab(Q())) return a;
          for (; $();) {
            if (41 == c || ab()) return a;
            if (n(c)) {
              for (; n(Q());) $();
              return 41 == Q() || ab(Q()) ? ($(), a) : (tb(), new u)
            }
            if (34 == c || 39 == c || 40 == c || l(c)) return cb(), tb(), new u;
            if (92 == c) {
              if (!lb()) return cb(), tb(), new u;
              a.value += q(jb())
            } else a.value += q(c)
          }
        }, jb = function () {
          if ($(), e(c)) {
            for (var a = [c], b = 0; 5 > b && e(Q()); b++) $(), a.push(c);
            n(Q()) && $();
            var d = parseInt(a.map(function (a) {
              return String.fromCharCode(a)
            }).join(""), 16);
            return d > Eb && (d = 65533), d
          }
          return ab() ? 65533 : c
        }, kb = function (a, b) {
          return 92 != a ? !1 : m(b) ? !1 : !0
        }, lb = function () {
          return kb(c, Q())
        }, mb = function (a, b, c) {
          return 45 == a ? j(b) || 45 == b || kb(b, c) : j(a) ? !0 : 92 == a ? kb(a, b) : !1
        }, nb = function () {
          return mb(c, Q(1), Q(2))
        }, ob = function (a, b, c) {
          return 43 == a || 45 == a ? d(b) ? !0 : 46 == b && d(c) ? !0 : !1 : 46 == a ? d(b) ? !0 : !1 : d(a) ? !0 : !1
        }, pb = function () {
          return ob(c, Q(1), Q(2))
        }, qb = function () {
          for (var a = ""; $();)
            if (k(c)) a += q(c);
            else {
              if (!lb()) return _(), a;
              a += q(jb())
            }
        }, rb = function () {
          var a = "",
            b = "integer";
          for ((43 == Q() || 45 == Q()) && ($(), a += q(c)); d(Q());) $(), a += q(c);
          if (46 == Q(1) && d(Q(2)))
            for ($(), a += q(c), $(), a += q(c), b = "number"; d(Q());) $(), a += q(c);
          var e = Q(1),
            f = Q(2),
            g = Q(3);
          if (69 != e && 101 != e || !d(f)) {
            if ((69 == e || 101 == e) && (43 == f || 45 == f) && d(g))
              for ($(), a += q(c), $(), a += q(c), $(), a += q(c), b = "number"; d(Q());) $(), a += q(c)
          } else
            for ($(), a += q(c), $(), a += q(c), b = "number"; d(Q());) $(), a += q(c);
          var h = sb(a);
          return {
            type: b,
            value: h,
            repr: a
          }
        }, sb = function (a) {
          return +a
        }, tb = function () {
          for (; $();) {
            if (45 == c || ab()) return;
            lb() ? (jb(), bb()) : bb()
          }
        }, ub = 0; !ab(Q());)
        if (g.push(db()), ub++ > 2 * b.length) throw new Error("The CSS Tokenizer is infinite-looping");
      return g
    }

    function s() {
      return this
    }

    function t() {
      return this
    }

    function u() {
      return this
    }

    function v() {
      return this
    }

    function w() {
      return this
    }

    function x() {
      return this
    }

    function y() {
      return this
    }

    function z() {
      return this
    }

    function A() {
      return this
    }

    function B() {
      return this
    }

    function C() {
      return this.value = "{", this.mirror = "}", this
    }

    function D() {
      return this.value = "}", this.mirror = "{", this
    }

    function E() {
      return this.value = "[", this.mirror = "]", this
    }

    function F() {
      return this.value = "]", this.mirror = "[", this
    }

    function G() {
      return this.value = "(", this.mirror = ")", this
    }

    function H() {
      return this.value = ")", this.mirror = "(", this
    }

    function I() {
      return this
    }

    function J() {
      return this
    }

    function K() {
      return this
    }

    function L() {
      return this
    }

    function M() {
      return this
    }

    function N() {
      return this
    }

    function O() {
      return this
    }

    function P(a) {
      return this.value = q(a), this
    }

    function Q() {
      return this
    }

    function R(a) {
      this.value = a
    }

    function S(a) {
      this.value = a, this.mirror = ")"
    }

    function T(a) {
      this.value = a
    }

    function U(a) {
      this.value = a, this.type = "unrestricted"
    }

    function V(a) {
      this.value = a
    }

    function W(a) {
      this.value = a
    }

    function X() {
      this.value = null, this.type = "integer", this.repr = ""
    }

    function Y() {
      this.value = null, this.repr = ""
    }

    function Z() {
      this.value = null, this.type = "integer", this.repr = "", this.unit = ""
    }

    function $(a) {
      a = "" + a;
      for (var b = "", d = a.charCodeAt(0), e = 0; e < a.length; e++) {
        var f = a.charCodeAt(e);
        if (0 == f) throw new o("Invalid character: the input contains U+0000.");
        b += c(f, 1, 31) || 127 == f || 0 == e && c(f, 48, 57) || 1 == e && c(f, 48, 57) && 45 == d ? "\\" + f.toString(16) + " " : f >= 128 || 45 == f || 95 == f || c(f, 48, 57) || c(f, 65, 90) || c(f, 97, 122) ? a[e] : "\\" + a[e]
      }
      return b
    }

    function _(a) {
      a = "" + a;
      for (var b = "", d = (a.charCodeAt(0), 0); d < a.length; d++) {
        var e = a.charCodeAt(d);
        if (0 == e) throw new o("Invalid character: the input contains U+0000.");
        b += e >= 128 || 45 == e || 95 == e || c(e, 48, 57) || c(e, 65, 90) || c(e, 97, 122) ? a[d] : "\\" + e.toString(16) + " "
      }
      return b
    }

    function ab(a) {
      a = "" + a;
      for (var b = "", d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        if (0 == e) throw new o("Invalid character: the input contains U+0000.");
        b += c(e, 1, 31) || 127 == e ? "\\" + e.toString(16) + " " : 34 == e || 92 == e ? "\\" + a[d] : a[d]
      }
      return b
    }

    function bb(a) {
      this.tokens = a, this.i = -1
    }

    function cb(a, b) {
      return console.log("Parse error at token " + a.i + ": " + a.token + ".\n" + b), !0
    }

    function db() {
      return !0
    }

    function eb(b, c) {
      for (var d, e = new a; b.consume();)
        if (!(b.token instanceof v)) {
          if (b.token instanceof O) return e;
          if (b.token instanceof w || b.token instanceof x) {
            if ("top-level" == c) continue;
            b.reconsume(), (d = gb(b)) && e.push(d)
          } else b.token instanceof T ? (b.reconsume(), (d = fb(b)) && e.push(d)) : (b.reconsume(), (d = gb(b)) && e.push(d))
        }
    }

    function fb(a) {
      a.consume();
      for (var b = new xb(a.token.value); a.consume();) {
        if (a.token instanceof z || a.token instanceof O) return b;
        if (a.token instanceof C) return b.value = kb(a), b;
        if (a.token instanceof Ab && "{" == a.token.name) return b.value = a.token, b;
        a.reconsume(), b.prelude.push(jb(a))
      }
    }

    function gb(a) {
      for (var b = new yb; a.consume();) {
        if (a.token instanceof O) return void cb(a, "Hit EOF when trying to parse the prelude of a qualified rule.");
        if (a.token instanceof C) return b.value = kb(a), b;
        if (a.token instanceof Ab && "{" == a.token.name) return b.value = a.token, b;
        a.reconsume(), b.prelude.push(jb(a))
      }
    }

    function hb(b) {
      for (var c = new a; b.consume();)
        if (b.token instanceof v || b.token instanceof z) db();
        else {
          if (b.token instanceof O) return c;
          if (b.token instanceof T) b.reconsume(), c.push(fb(b));
          else if (b.token instanceof R) {
            for (var d = [b.token]; !(b.next() instanceof z || b.next() instanceof O);) d.push(jb(b));
            var e;
            (e = ib(new bb(d))) && c.push(e)
          } else
            for (cb(b), b.reconsume(); !(b.next() instanceof z || b.next() instanceof O);) jb(b)
        }
    }

    function ib(a) {
      a.consume();
      for (var b = new zb(a.token.value); a.next() instanceof v;) a.consume();
      if (!(a.next() instanceof y)) return void cb(a);
      for (a.consume(); !(a.next() instanceof O);) b.value.push(jb(a));
      for (var c = !1, d = b.value.length - 1; d >= 0; d--)
        if (!(b.value[d] instanceof v)) {
          if (!(b.value[d] instanceof R && b.value[d].ASCIIMatch("important"))) {
            if (c && b.value[d] instanceof P && "!" == b.value[d].value) {
              b.value.splice(d, b.value.length), b.important = !0;
              break
            }
            break
          }
          c = !0
        }
      return b
    }

    function jb(a) {
      return a.consume(), a.token instanceof C || a.token instanceof E || a.token instanceof G ? kb(a) : a.token instanceof S ? lb(a) : a.token
    }

    function kb(a) {
      for (var b = a.token.mirror, c = new Ab(a.token.value); a.consume();) {
        if (a.token instanceof O || a.token instanceof B && a.token.value == b) return c;
        a.reconsume(), c.value.push(jb(a))
      }
    }

    function lb(a) {
      for (var b = new Bb(a.token.value); a.consume();) {
        if (a.token instanceof O || a.token instanceof H) return b;
        a.reconsume(), b.value.push(jb(a))
      }
    }

    function mb(a) {
      if ("string" == typeof a) return new bb(r(a));
      if (a instanceof bb) return a;
      if (void 0 !== a.length) return new bb(a);
      throw SyntaxError(a)
    }

    function nb(a) {
      a = mb(a);
      var b = new wb;
      return b.value = eb(a, "top-level"), b
    }

    function ob(a) {
      return a = mb(a), eb(a)
    }

    function pb(a) {
      for (a = mb(a); a.next() instanceof v;) a.consume();
      if (a.next() instanceof O) throw SyntaxError();
      if (a.next() instanceof T) var b = fb(a);
      else {
        var b = gb(a);
        if (!b) throw SyntaxError()
      }
      for (; a.next() instanceof v;) a.consume();
      if (a.next() instanceof O) return b;
      throw SyntaxError()
    }

    function qb(a) {
      for (a = mb(a); a.next() instanceof v;) a.consume();
      if (!(a.next() instanceof R)) throw SyntaxError();
      var b = ib(a);
      if (!b) throw new SyntaxError;
      return b
    }

    function rb(a) {
      return a = mb(a), hb(a)
    }

    function sb(a) {
      for (a = mb(a); a.next() instanceof v;) a.consume();
      if (a.next() instanceof O) throw SyntaxError();
      var b = jb(a);
      if (!b) throw SyntaxError();
      for (; a.next() instanceof v;) a.consume();
      if (!(a.next() instanceof O)) throw new SyntaxError;
      return b
    }

    function tb(b) {
      b = mb(b);
      for (var c = new a;;) {
        var d = jb(b);
        if (d instanceof O) return c;
        c.push(d)
      }
    }

    function ub(b) {
      b = mb(b);
      for (var c = new a;;)
        for (var d = new a;;) {
          var e = jb(b);
          if (e instanceof O) return c.push(d), c;
          if (e instanceof A) {
            c.push(d);
            break
          }
          d.push(e)
        }
    }

    function vb() {
      return this
    }

    function wb() {
      return this.value = new a, this
    }

    function xb(b) {
      return this.name = b, this.prelude = new a, this.value = null, this
    }

    function yb() {
      return this.prelude = new a, this.selector = this.prelude, this.value = null, this
    }

    function zb(b) {
      return this.name = b, this.value = new a, this.important = !1, this
    }

    function Ab(b) {
      return this.name = b, this.value = new a, this
    }

    function Bb(b) {
      return this.name = b, this.value = new a, this
    }

    function Cb() {
      return this.value = new a, this
    }
    var Db = {
      tokenize: function () {},
      parse: function () {}
    };
    Db.TokenList = a, Db.TokenListToCSSString = b;
    var Eb = 1114111;
    return o.prototype = new Error, o.prototype.name = "InvalidCharacterError", s.prototype.toJSON = function () {
      return {
        token: this.tokenType
      }
    }, s.prototype.toString = function () {
      return this.tokenType
    }, s.prototype.toCSSString = function () {
      return "" + this
    }, t.prototype = new s, t.prototype.tokenType = "BADSTRING", t.prototype.toCSSString = function () {
      return "'"
    }, u.prototype = new s, u.prototype.tokenType = "BADURL", u.prototype.toCSSString = function () {
      return "url("
    }, v.prototype = new s, v.prototype.tokenType = "WHITESPACE", v.prototype.toString = function () {
      return "WS"
    }, v.prototype.toCSSString = function () {
      return " "
    }, w.prototype = new s, w.prototype.tokenType = "CDO", w.prototype.toCSSString = function () {
      return "<!--"
    }, x.prototype = new s, x.prototype.tokenType = "CDC", x.prototype.toCSSString = function () {
      return "-->"
    }, y.prototype = new s, y.prototype.tokenType = ":", z.prototype = new s, z.prototype.tokenType = ";", A.prototype = new s, A.prototype.tokenType = ",", A.prototype.value = ";", B.prototype = new s, C.prototype = new B, C.prototype.tokenType = "{", D.prototype = new B, D.prototype.tokenType = "}", E.prototype = new B, E.prototype.tokenType = "[", F.prototype = new B, F.prototype.tokenType = "]", G.prototype = new B, G.prototype.tokenType = "(", H.prototype = new B, H.prototype.tokenType = ")", I.prototype = new s, I.prototype.tokenType = "~=", J.prototype = new s, J.prototype.tokenType = "|=", K.prototype = new s, K.prototype.tokenType = "^=", L.prototype = new s, L.prototype.tokenType = "$=", M.prototype = new s, M.prototype.tokenType = "*=", N.prototype = new s, N.prototype.tokenType = "||", O.prototype = new s, O.prototype.tokenType = "EOF", O.prototype.toCSSString = function () {
      return ""
    }, P.prototype = new s, P.prototype.tokenType = "DELIM", P.prototype.toString = function () {
      return "DELIM(" + this.value + ")"
    }, P.prototype.toCSSString = function () {
      return "\\" == this.value ? "\\\n" : this.value
    }, Q.prototype = new s, Q.prototype.ASCIIMatch = function (a) {
      return this.value.toLowerCase() == a.toLowerCase()
    }, R.prototype = new Q, R.prototype.tokenType = "IDENT", R.prototype.toString = function () {
      return "IDENT(" + this.value + ")"
    }, R.prototype.toCSSString = function () {
      return $(this.value)
    }, S.prototype = new Q, S.prototype.tokenType = "FUNCTION", S.prototype.toString = function () {
      return "FUNCTION(" + this.value + ")"
    }, S.prototype.toCSSString = function () {
      return $(this.value) + "("
    }, T.prototype = new Q, T.prototype.tokenType = "AT-KEYWORD", T.prototype.toString = function () {
      return "AT(" + this.value + ")"
    }, T.prototype.toCSSString = function () {
      return "@" + $(this.value)
    }, U.prototype = new Q, U.prototype.tokenType = "HASH", U.prototype.toString = function () {
      return "HASH(" + this.value + ")"
    }, U.prototype.toCSSString = function () {
      var a = "id" == this.type ? $ : _;
      return "#" + a(this.value)
    }, V.prototype = new Q, V.prototype.tokenType = "STRING", V.prototype.toString = function () {
      return '"' + ab(this.value) + '"'
    }, W.prototype = new Q, W.prototype.tokenType = "URL", W.prototype.toString = function () {
      return "URL(" + this.value + ")"
    }, W.prototype.toCSSString = function () {
      return 'url("' + ab(this.value) + '")'
    }, X.prototype = new s, X.prototype.tokenType = "NUMBER", X.prototype.toString = function () {
      return "integer" == this.type ? "INT(" + this.value + ")" : "NUMBER(" + this.value + ")"
    }, X.prototype.toJSON = function () {
      var a = this.constructor.prototype.constructor.prototype.toJSON.call(this);
      return a.value = this.value, a.type = this.type, a.repr = this.repr, a
    }, X.prototype.toCSSString = function () {
      return this.repr
    }, Y.prototype = new s, Y.prototype.tokenType = "PERCENTAGE", Y.prototype.toString = function () {
      return "PERCENTAGE(" + this.value + ")"
    }, Y.prototype.toCSSString = function () {
      return this.repr + "%"
    }, Z.prototype = new s, Z.prototype.tokenType = "DIMENSION", Z.prototype.toString = function () {
      return "DIM(" + this.value + "," + this.unit + ")"
    }, Z.prototype.toCSSString = function () {
      var a = this.repr,
        b = $(this.unit);
      return "e" != b[0].toLowerCase() || "-" != b[1] && !c(b.charCodeAt(1), 48, 57) || (b = "\\65 " + b.slice(1, b.length)), a + b
    }, Db.tokenize = r, Db.IdentToken = R, Db.IdentifierToken = R, Db.FunctionToken = S, Db.AtKeywordToken = T, Db.HashToken = U, Db.StringToken = V, Db.BadStringToken = t, Db.URLToken = W, Db.BadURLToken = u, Db.DelimToken = P, Db.NumberToken = X, Db.PercentageToken = Y, Db.DimensionToken = Z, Db.IncludeMatchToken = I, Db.DashMatchToken = J, Db.PrefixMatchToken = K, Db.SuffixMatchToken = L, Db.SubstringMatchToken = M, Db.ColumnToken = N, Db.WhitespaceToken = v, Db.CDOToken = w, Db.CDCToken = x, Db.ColonToken = y, Db.SemicolonToken = z, Db.CommaToken = A, Db.OpenParenToken = G, Db.CloseParenToken = H, Db.OpenSquareToken = E, Db.CloseSquareToken = F, Db.OpenCurlyToken = C, Db.CloseCurlyToken = D, Db.EOFToken = O, Db.CSSParserToken = s, Db.GroupingToken = B, bb.prototype.tokenAt = function (a) {
      return a < this.tokens.length ? this.tokens[a] : new O
    }, bb.prototype.consume = function (a) {
      return void 0 === a && (a = 1), this.i += a, this.token = this.tokenAt(this.i), !0
    }, bb.prototype.next = function () {
      return this.tokenAt(this.i + 1)
    }, bb.prototype.reconsume = function () {
      this.i--
    }, vb.prototype.toString = function (a) {
      return JSON.stringify(this, null, a)
    }, wb.prototype = new vb, wb.prototype.type = "STYLESHEET", wb.prototype.toCSSString = function () {
      return this.value.toCSSString("\n")
    }, xb.prototype = new vb, xb.prototype.toCSSString = function () {
      return this.value ? "@" + $(this.name) + " " + this.prelude.toCSSString() + this.value.toCSSString() : "@" + $(this.name) + " " + this.prelude.toCSSString() + "; "
    }, xb.prototype.toStylesheet = function () {
      return this.asStylesheet || (this.asStylesheet = this.value ? nb(this.value.value) : new wb)
    }, yb.prototype = new vb, yb.prototype.type = "STYLE-RULE", yb.prototype.toCSSString = function () {
      return this.prelude.toCSSString() + this.value.toCSSString()
    }, yb.prototype.getSelector = function () {
      return this.prelude
    }, yb.prototype.getDeclarations = function () {
      if (!(this.value instanceof Ab)) return new a;
      var b = this.value.value;
      return rb(b)
    }, zb.prototype = new vb, zb.prototype.type = "DECLARATION", zb.prototype.toCSSString = function () {
      return this.name + ":" + this.value.toCSSString() + "; "
    }, Ab.prototype = new vb, Ab.prototype.type = "BLOCK", Ab.prototype.toCSSString = function () {
      switch (this.name) {
      case "(":
        return "(" + this.value.toCSSString() + ")";
      case "[":
        return "[" + this.value.toCSSString() + "]";
      case "{":
        return "{" + this.value.toCSSString() + "}";
      default:
        return this.name + this.value.toCSSString() + this.name
      }
    }, Bb.prototype = new vb, Bb.prototype.type = "FUNCTION", Bb.prototype.toCSSString = function () {
      return this.name + "(" + this.value.toCSSString() + ")"
    }, Bb.prototype.getArguments = function () {
      for (var b = new a, c = new a, d = this.value, e = 0; e < d.length; e++) "," == d[e].tokenType ? (b.push(c), c = new a) : c.push(d[e]);
      return (b.length > 0 || c.length > 0) && b.push(c), b
    }, Cb.prototype = new vb, Cb.prototype.type = "FUNCTION-ARG", Cb.prototype.toCSSString = function () {
      return this.value.toCSSString() + ", "
    }, Db.CSSParserRule = vb, Db.Stylesheet = wb, Db.AtRule = xb, Db.StyleRule = yb, Db.Declaration = zb, Db.SimpleBlock = Ab, Db.Func = Bb, Db.parseAStylesheet = nb, Db.parseAListOfRules = ob, Db.parseARule = pb, Db.parseADeclaration = qb, Db.parseAListOfDeclarations = rb, Db.parseAComponentValue = sb, Db.parseAListOfComponentValues = tb, Db.parseACommaSeparatedListOfComponentValues = ub, Db.parse = nb, Db.parseCSSValue = tb, Db
  }(), b.define("../core/css-syntax.js"), a.exports = function (a, c) {
    b("../core/polyfill-dom-console.js");
    var d = {
      cloneMouseEvent: function (a) {
        var b = c.createEvent("MouseEvent");
        return b.initMouseEvent(a.type, a.canBubble || a.bubbles, a.cancelable, a.view, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, a.button, a.relatedTarget), b
      },
      cloneKeyboardEvent: function (a) {
        return d.cloneCustomEvent(a)
      },
      cloneCustomEvent: function (a) {
        var b = c.createEvent("CustomEvent");
        b.initCustomEvent(a.type, a.canBubble || a.bubbles, a.cancelable, "detail" in a ? a.detail : a);
        for (var d in a) try {
          if (a[d] != b[d] && a[d] != a.target) try {
            b[d] = a[d]
          } catch (e) {
            Object.defineProperty(b, d, {
              get: function () {
                return a[d]
              }
            })
          }
        } catch (e) {}
        return b
      },
      cloneEvent: function (a) {
        return a instanceof MouseEvent ? d.cloneMouseEvent(a) : a instanceof KeyboardEvent ? d.cloneKeyboardEvent(a) : d.cloneCustomEvent(a)
      },
      EventTarget: {
        implementsIn: function (a, b) {
          b || "function" != typeof a || (a = a.prototype), a.dispatchEvent = d.EventTarget.prototype.dispatchEvent, a.addEventListener = d.EventTarget.prototype.addEventListener, a.removeEventListener = d.EventTarget.prototype.removeEventListener
        },
        prototype: {}
      }
    };
    return d.EventTarget.prototype.addEventListener = function (a, b) {
      this.eventListeners || (this.eventListeners = []);
      var c = this.eventListeners[a] || (this.eventListeners[a] = []); - 1 == c.indexOf(b) && c.push(b)
    }, d.EventTarget.prototype.removeEventListener = function (a, b) {
      this.eventListeners || (this.eventListeners = []);
      var c, d = this.eventListeners[a] || (this.eventListeners[a] = []); - 1 !== (c = d.indexOf(b)) && d.splice(c, 1)
    }, d.EventTarget.prototype.dispatchEvent = function (a) {
      function b(a, b, c) {
        Object.defineProperty(b, c, {
          get: function () {
            var b = a[c];
            return "function" == typeof b ? b.bind(a) : b
          },
          set: function (b) {
            a[c] = b
          }
        })
      }

      function d(a, c) {
        try {
          Object.defineProperty(a, "target", {
            get: function () {
              return c
            }
          })
        } catch (e) {} finally {
          if (a.target !== c) {
            var f = Object.create(Object.getPrototypeOf(a));
            f = d(f, c);
            for (key in a) "target" != key && b(a, f, key);
            return f
          }
          return a
        }
      }
      if (this.eventListeners || (this.eventListeners = []), "string" == typeof a) {
        if (!this.eventListeners[a] || 0 == this.eventListeners[a].length) return
      } else if (!this.eventListeners[a.type] || 0 == this.eventListeners[a.type].length) return;
      var e = a;
      if ("object" == typeof e) try {
        e = d(e, this)
      } catch (f) {} else {
        if ("string" != typeof e) throw new Error("dispatchEvent expect an Event object or a string containing the event type");
        e = c.createEvent("CustomEvent"), e.initCustomEvent(a, !0, !1, this);
        try {
          e = d(e, this)
        } catch (f) {}
      }
      for (var g = this.eventListeners[e.type] || (this.eventListeners[e.type] = []), h = g.length; h--;) try {
        g[h](e)
      } catch (f) {
        setImmediate(function () {
          throw f
        })
      }
      return e.isDefaultPrevented
    }, d
  }(window, document), b.define("../core/dom-events.js"), a.exports = function (a, b) {
    function c(a, b, c) {
      var d = this;
      b || (b = function () {}), c || (c = a);
      var e = !1,
        f = !1,
        g = !1,
        h = null,
        i = function () {
          g = !0;
          try {
            h && h(d)
          } catch (a) {
            setImmediate(function () {
              throw a
            })
          }
          g && j()
        },
        j = (this.schedule = function (b) {
          if (f) throw new Error("Cannot schedule on a disconnected event stream");
          if (e && !g) throw new Error("Cannot schedule on an already-scheduled event stream");
          h = b, g = !1, e ? c(i) : (a(i), e = !0)
        }, this.dispose = function () {
          e && (b(), d = null, i = null, h = null, e = !1, f = !0, g = !1)
        })
    }

    function d() {
      var a = 0;
      c.call(this, function (b) {
        a = requestAnimationFrame(b)
      }, function () {
        cancelAnimationFrame(a)
      })
    }

    function e(a) {
      var b = 0,
        d = "number" == typeof a ? +a : "timeout" in a ? +a.timeout : 333;
      c.call(this, function (a) {
        b = setTimeout(a, d)
      }, function () {
        clearTimeout(b)
      })
    }

    function f() {
      var b = "PointerEvent" in a ? "pointermove" : "MSPointerEvent" in a ? "MSPointerMove" : "mousemove",
        d = !1,
        e = null,
        f = function () {
          d || (a.removeEventListener(b, f, !0), d = requestAnimationFrame(e))
        };
      c.call(this, function (c) {
        e = c, a.addEventListener(b, f, !0)
      }, function () {
        a.removeEventListener(b, f, !0), cancelAnimationFrame(d), f = null, e = null, d = !1
      }, function (c) {
        e = c, d = !1, a.addEventListener(b, f, !0)
      })
    }

    function g() {
      var b = "PointerEvent" in a ? "pointerup" : "MSPointerEvent" in a ? "MSPointerUp" : "mouseup",
        d = "PointerEvent" in a ? "pointerdown" : "MSPointerEvent" in a ? "MSPointerDown" : "mousedown",
        e = !1,
        f = null,
        g = function () {
          e || (a.removeEventListener(b, g, !0), a.removeEventListener(d, g, !0), e = requestAnimationFrame(f))
        };
      c.call(this, function (c) {
        f = c, a.addEventListener(b, g, !0), a.addEventListener(d, g, !0)
      }, function () {
        a.removeEventListener(b, g, !0), a.removeEventListener(d, g, !0), cancelAnimationFrame(e), g = null, f = null, e = !1
      }, function (c) {
        f = c, e = !1, a.addEventListener(b, g, !0), a.addEventListener(d, g, !0)
      })
    }

    function h() {
      var a = null,
        d = null,
        e = !1,
        f = 0,
        g = function () {
          d == b.activeElement && e == b.hasFocus() ? setTimeout(g, 333) : (d = b.activeElement, e = b.hasFocus(), a())
        };
      c.call(this, function (b) {
        a = b, f = setTimeout(g, 500)
      }, function () {
        clearTimeout(f), g = null, a = null, f = 0
      }, function (b) {
        a = b, f = setTimeout(g, 100)
      })
    }

    function i(a, b) {
      var d = this,
        e = null,
        f = !1,
        g = !1,
        h = function (c) {
          c == a && (f = !0), c == b && (g = !0), f && g || e(d)
        };
      c.call(this, function (c) {
        e = c, a.schedule(h), b.schedule(h)
      }, function () {
        a.dispose(), b.dispose()
      }, function (c) {
        e = c, f && a.schedule(h), g && b.schedule(h), f = g = !1
      })
    }
    var j;
    return j = "MutationObserver" in a ? function (a) {
      if (a) var d = "target" in a ? a.target : b.documentElement,
        e = {
          subtree: "subtree" in a ? !!a.subtree : !0,
          attributes: "attributes" in a ? !!a.attributes : !0,
          childList: "childList" in a ? !!a.childList : !0,
          characterData: "characterData" in a ? !!a.characterData : !1
        };
      else var d = b.documentElement,
        e = {
          subtree: !0,
          attributes: !0,
          childList: !0,
          characterData: !1
        };
      var f = null;
      c.call(this, function (a) {
        e && (f = new MutationObserver(a), f.observe(d, e), d = null, e = null)
      }, function () {
        f && f.disconnect(), f = null
      }, function () {
        f.takeRecords()
      })
    } : "MutationEvent" in a ? function (a) {
      var d = !1;
      if (a) var e = "target" in a ? a.target : b.documentElement;
      else var e = b.documentElement;
      var f = null,
        g = function () {
          !d && g && (b.removeEventListener("DOMContentLoaded", g, !1), b.removeEventListener("DOMContentLoaded", g, !1), e.removeEventListener("DOMSubtreeModified", g, !1), d = requestAnimationFrame(f))
        };
      c.call(this, function (a) {
        f = a, b.addEventListener("DOMContentLoaded", g, !1), e.addEventListener("DOMSubtreeModified", g, !1)
      }, function () {
        b.removeEventListener("DOMContentLoaded", g, !1), e.removeEventListener("DOMSubtreeModified", g, !1), cancelAnimationFrame(d), g = null, f = null, d = !1
      }, function (a) {
        f = a, d = !1, e.addEventListener("DOMSubtreeModified", g, !1)
      })
    } : d, {
      EventStream: c,
      AnimationFrameEventStream: d,
      TimeoutEventStream: e,
      MouseEventStream: f,
      MouseButtonEventStream: g,
      DOMUpdateEventStream: j,
      FocusEventStream: h,
      CompositeEventStream: i
    }
  }(window, document), b.define("../core/dom-experimental-event-streams.js"), a.exports = function (a, c) {
    function d(a, b, d) {
      var e, d = d || c,
        m = [],
        n = function q(e) {
          e.schedule(q);
          for (var f = [], g = m.slice(0), h = d.querySelectorAll(a), i = f.length = h.length; i;) f.push(h[--i]);
          m = f.slice(0), h = null, g = g.filter(function (a) {
            var d = a === c.documentElement || c.documentElement.contains(a);
            if (d) return !0;
            try {
              b.onremoved && b.onremoved(a)
            } catch (e) {
              setImmediate(function () {
                throw e
              })
            }
            return !1
          });
          for (var j = g.pop(), k = f.pop(); j || k;)
            if (j === k) j = g.pop(), k = f.pop();
            else if (!k || j && 0 !== (43 & k.compareDocumentPosition(j))) {
            try {
              b.onremoved && b.onremoved(j)
            } catch (l) {
              setImmediate(function () {
                throw l
              })
            }
            j = g.pop()
          } else {
            try {
              b.onadded && b.onadded(k)
            } catch (l) {
              setImmediate(function () {
                throw l
              })
            }
            k = f.pop()
          }
        },
        o = a.replace(/:(dir|lang|root|empty|blank|nth-child|nth-last-child|first-child|last-child|only-child|nth-of-type|nth-last-of-child|fist-of-type|last-of-type|only-of-type|not|matches|default)\b/gi, "");
      if (-1 == o.indexOf(":")) e = new f({
        target: d
      });
      else if (e = new f({
          target: d
        }), f != g) {
        var p = /:(focus|active)\b/gi;
        if (p.test(o)) {
          e = new h(new i, e);
          var p = /:(focus)\b/gi;
          o = o.replace(p, "")
        }
        var p = /:(active)\b/gi;
        p.test(o) && (e = new h(new j, e), o = o.replace(p, ""));
        var p = /:(target|checked|indeterminate|valid|invalid|in-range|out-of-range|user-error)\b/gi;
        if (p.test(o)) {
          e = new h(new k(250), e), o = o.replace(p, "");
          var p = /:(any-link|link|visited|local-link|enabled|disabled|read-only|read-write|required|optional)\b/gi;
          o = o.replace(p, "")
        }
        var p = /:(any-link|link|visited|local-link|enabled|disabled|read-only|read-write|required|optional)\b/gi;
        p.test(o) && (e = new h(new k(333), e), o = o.replace(p, ""));
        var p = /:(hover)\b/gi;
        p.test(o) && (e = new h(new l, e), o = o.replace(p, "")), -1 !== o.indexOf(":") && (e = new g)
      }
      n(e)
    }
    var e = b("../core/dom-experimental-event-streams.js"),
      f = e.DOMUpdateEventStream,
      g = e.AnimationFrameEventStream,
      h = e.CompositeEventStream,
      i = e.FocusEventStream,
      j = e.MouseButtonEventStream,
      k = e.TimeoutEventStream,
      l = e.MouseEventStream;
    return d
  }(window, document), b.define("../core/dom-query-selector-live.js"), a.exports = function (a, c) {
    b("../core/polyfill-dom-console.js"), b("../core/polyfill-dom-requestAnimationFrame.js");
    var d = b("../core/css-syntax.js"),
      e = b("../core/dom-events.js"),
      f = b("../core/dom-query-selector-live.js"),
      g = {
        computeSelectorPriorityOf: function (a) {
          "string" == typeof a && (a = d.parse(a.trim() + "{}").value[0].selector);
          for (var b = 0, c = 0, e = 0, f = 0; f < a.length; f++)
            if (a[f] instanceof d.IdentifierToken) e++;
            else if (a[f] instanceof d.DelimToken) "." == a[f].value && (c++, f++);
          else if (a[f] instanceof d.ColonToken)
            if (a[++f] instanceof d.ColonToken) e++, f++;
            else if (a[f] instanceof d.Func && /^(not|matches)$/i.test(a[f].name)) {
            var g = this.computeSelectorPriorityOf(a[f].value);
            e += g % 256, g /= 256, c += g % 256, g /= 256, b += g
          } else c++;
          else a[f] instanceof d.SimpleBlock ? "[" == a[f].name && c++ : a[f] instanceof d.HashToken && b++;
          return b > 255 && (numberOfIds = 255), c > 255 && (c = 255), e > 255 && (e = 255), 256 * (256 * b + c) + e
        },
        findAllMatchingRules: function (a) {
          return this.findAllMatchingRulesWithPseudo(a)
        },
        findAllMatchingRulesWithPseudo: function (a, b) {
          b = b ? ("" + b).toLowerCase() : b;
          for (var c = [], e = function (f) {
              try {
                for (var h = f.length; h--;) {
                  var i = f[h];
                  if (!i.disabled)
                    if (i instanceof d.StyleRule)
                      for (var j = i.subRules || g.splitRule(i), k = j.length; k--;) {
                        var l = j[k].selector.toCSSString().replace(/ *(\/\*\*\/|  ) */g, " ").trim();
                        if (b) {
                          var m = l.toLowerCase(),
                            n = l.length - b.length - 1;
                          if (0 >= n) continue;
                          if (m.lastIndexOf("::" + b) == n - 1) l = l.substr(0, n - 1);
                          else {
                            if (m.lastIndexOf(":" + b) != n) continue;
                            l = l.substr(0, n)
                          }
                          0 == l.trim().length ? l = "*" : " " == l[l.length - 1] ? l += "*" : "+" == l[l.length - 1] ? l += "*" : ">" == l[l.length - 1] ? l += "*" : "~" == l[l.length - 1] && (l += "*")
                        }
                        var o = !1;
                        try {
                          if (a.matches) o = a.matches(l);
                          else if (a.matchesSelector) o = a.matchesSelector(l);
                          else if (a.oMatchesSelector) o = a.oMatchesSelector(l);
                          else if (a.msMatchesSelector) o = a.msMatchesSelector(l);
                          else if (a.mozMatchesSelector) o = a.mozMatchesSelector(l);
                          else {
                            if (!a.webkitMatchesSelector) throw new Error("no element.matches?");
                            o = a.webkitMatchesSelector(l)
                          }
                        } catch (p) {
                          setImmediate(function () {
                            throw p
                          })
                        }
                        o && c.push(j[k])
                      } else i instanceof d.AtRule && "media" == i.name && e(i.toStylesheet().value)
                }
              } catch (p) {
                setImmediate(function () {
                  throw p
                })
              }
            }, f = g.stylesheets.length; f--;) {
            var h = g.stylesheets[f];
            e(h)
          }
          return c
        },
        allCSSProperties: null,
        getAllCSSProperties: function () {
          if (this.allCSSProperties) return this.allCSSProperties;
          for (var a = getComputedStyle(c.documentElement), b = new Array(a.length), d = a.length; d--;) b[d] = a[d];
          return -1 == b.indexOf("content") && b.push("content"), -1 == b.indexOf("counter-reset") && (b.push("counter-reset"), b.push("counter-increment"), g.computationUnsafeProperties["counter-reset"] = !0), this.allCSSProperties = b
        },
        computationUnsafeProperties: {
          bottom: !0,
          direction: !0,
          display: !0,
          "font-size": !0,
          height: !0,
          left: !0,
          "line-height": !0,
          "margin-left": !0,
          "margin-right": !0,
          "margin-bottom": !0,
          "margin-top": !0,
          "max-height": !0,
          "max-width": !0,
          "min-height": !0,
          "min-width": !0,
          "padding-left": !0,
          "padding-right": !0,
          "padding-bottom": !0,
          "padding-top": !0,
          right: !0,
          "text-align": !0,
          "text-align-last": !0,
          top: !0,
          width: !0,
          __proto__: null
        },
        inheritingProperties: {
          "border-collapse": !0,
          "border-spacing": !0,
          "caption-side": !0,
          color: !0,
          cursor: !0,
          direction: !0,
          "empty-cells": !0,
          "font-family": !0,
          "font-size": !0,
          "font-style": !0,
          "font-variant": !0,
          "font-weight": !0,
          font: !0,
          "letter-spacing": !0,
          "line-height": !0,
          "list-style-image": !0,
          "list-style-position": !0,
          "list-style-type": !0,
          "list-style": !0,
          orphans: !0,
          quotes: !0,
          "text-align": !0,
          "text-indent": !0,
          "text-transform": !0,
          visibility: !0,
          "white-space": !0,
          widows: !0,
          "word-break": !0,
          "word-spacing": !0,
          "word-wrap": !0,
          __proto__: null
        },
        defaultStylesForTag: Object.create ? Object.create(null) : {},
        getDefaultStyleForTag: function (a) {
          var b = this.defaultStylesForTag[a];
          if (b) return b;
          var d = c.createElement(a),
            e = this.defaultStylesForTag[a] = getComputedStyle(d);
          return e.display ? e : (c.head.insertBefore(d, c.head.firstChild), e)
        },
        getSpecifiedStyle: function (b, e, f) {
          var h;
          if ((h = b.getAttribute("data-css-regions-fragment-of")) && (h = c.querySelector('[data-css-regions-fragment-source="' + h + '"]'))) return g.getSpecifiedStyle(h, e);
          if (b.currentStyle && !a.opera) {
            var i = b.myStyle[e] || b.currentStyle[e];
            return d.parseAListOfComponentValues(i)
          }
          try {
            if (i = b.style.getPropertyValue(e) || b.myStyle[e]) return d.parseAListOfComponentValues(i)
          } catch (j) {}
          var k = !1,
            l = 0,
            i = new d.TokenList,
            m = f || (e in g.monitoredProperties ? b.myMatchedRules || [] : g.findAllMatchingRules(b)),
            n = function (a) {
              for (var b = a.length; b--;)
                if (!a[b].disabled)
                  if (a[b] instanceof d.StyleRule) {
                    for (var c = a[b].getDeclarations(), f = c.length - 1; f >= 0; f--)
                      if ("DECLARATION" == c[f].type && c[f].name == e) {
                        var h = g.computeSelectorPriorityOf(a[b].selector);
                        k ? c[f].important && h >= l && (l = h, i = c[f].value) : c[f].important ? (k = !0, l = h, i = c[f].value) : h >= l && (l = h, i = c[f].value)
                      }
                  } else a[b] instanceof d.AtRule && "media" == a[b].name && n(a[b].toStylesheet())
            };
          return n(m), i || null
        },
        stylesheets: [],
        loadStyleSheet: function (a, b) {
          var c = d.parse(a).value;
          "undefined" != typeof b ? g.stylesheets[b] = c : b = g.stylesheets.push(c), g.startMonitoringStylesheet(c)
        },
        loadStyleSheetTag: function (a, b) {
          if (!a.hasAttribute("data-css-polyfilled")) {
            if ("LINK" == a.tagName) try {
              g.stylesheets[b] = new d.TokenList;
              var c = new XMLHttpRequest;
              c.href = a.href, c.open("GET", a.href, !0), c.ruleIndex = b, c.onreadystatechange = function () {
                4 == this.readyState && (200 == this.status || 0 == this.status ? g.loadStyleSheet(this.responseText, this.ruleIndex) : cssConsole.log("css-cascade polyfill failled to load: " + this.href))
              }, c.send()
            } catch (e) {
              cssConsole.log("css-cascade polyfill failled to load: " + a.href)
            } else g.loadStyleSheet(a.textContent, b);
            a.setAttribute("data-css-polyfilled", !0)
          }
        },
        selectorForStylesheets: "style:not([data-no-css-polyfill]):not([data-css-polyfilled]), link[rel=stylesheet]:not([data-no-css-polyfill]):not([data-css-polyfilled])",
        loadAllStyleSheets: function () {
          var a = c.head || c.documentElement,
            b = a.querySelectorAll(g.selectorForStylesheets),
            d = this.stylesheets.length;
          this.stylesheets.length += b.length;
          for (var e = b.length; e--;) {
            var f = b[e];
            g.loadStyleSheetTag(f, d + e)
          }
        },
        monitoredProperties: Object.create ? Object.create(null) : {},
        monitoredPropertiesHandler: {
          onupdate: function (a, b) {
            for (var c = g.monitoredProperties, d = b.getDeclarations(), e = d.length - 1; e >= 0; e--)
              if ("DECLARATION" == d[e].type && d[e].name in c) {
                for (var f = c[d[e].name], h = f.length; h--;) f[h].onupdate(a, b);
                break
              }
          }
        },
        startMonitoringProperties: function (a, b) {
          for (var c = a.length; c--;) {
            var d = a[c],
              e = g.monitoredProperties[d] || (g.monitoredProperties[d] = []);
            e.push(b)
          }
          for (var f = 0; f < g.stylesheets.length; f++) {
            var h = g.stylesheets[f];
            g.startMonitoringStylesheet(h)
          }
        },
        startMonitoringStylesheet: function (b) {
          for (var c = 0; c < b.length; c++)
            if (b[c] instanceof d.StyleRule) {
              if (b[c].isMonitored) continue;
              for (var e = b[c].getDeclarations(), f = e.length - 1; f >= 0; f--)
                if ("DECLARATION" == e[f].type && e[f].name in g.monitoredProperties) {
                  g.startMonitoringRule(b[c]);
                  break
                }
            } else b[c] instanceof d.AtRule && "media" == b[c].name && a.matchMedia && g.startMonitoringMedia(b[c])
        },
        startMonitoringMedia: function (b) {
          try {
            var c = a.matchMedia(b.prelude.toCSSString()),
              d = b.toStylesheet().value;
            g.updateMedia(d, !c.matches, !1), c.addListener(function (a) {
              g.updateMedia(d, !a.matches, !0)
            }), g.startMonitoringStylesheet(d)
          } catch (e) {
            setImmediate(function () {
              throw e
            })
          }
        },
        updateMedia: function (a, b, d) {
          for (var e = a.length; e--;) {
            a[e].disabled = b;
            var f = a[e].subRules;
            if (f)
              for (var h = f.length; h--;) f[h].disabled = b
          }
          if (d)
            for (var e = a.length; e--;)
              for (var i = c.querySelectorAll(a[e].selector.toCSSString()), h = i.length; h--;) g.monitoredPropertiesHandler.onupdate(i[h], a[e])
        },
        splitRule: function (a) {
          var b = [],
            c = new d.StyleRule;
          c.disabled = a.disabled;
          for (var e = 0; e < a.selector.length; e++) a.selector[e] instanceof d.DelimToken && "," == a.selector[e].value ? (c.value = a.value, b.push(c), c = new d.StyleRule, c.disabled = a.disabled) : c.selector.push(a.selector[e]);
          return c.value = a.value, b.push(c), a.subRules = b
        },
        startMonitoringRule: function (a) {
          if (!a.isMonitored) {
            a.isMonitored = !0;
            for (var b = a.subRules || g.splitRule(a), c = 0; c < b.length; c++) a = b[c], f(a.selector.toCSSString(), {
              onadded: function (b) {
                (b.myMatchedRules = b.myMatchedRules || []).unshift(a), g.monitoredPropertiesHandler.onupdate(b, a)
              },
              onremoved: function (b) {
                b.myMatchedRules && b.myMatchedRules.splice(b.myMatchedRules.indexOf(a), 1), g.monitoredPropertiesHandler.onupdate(b, a)
              }
            })
          }
        },
        toCamelCase: function (a) {
          return a.replace(/-([a-z])/g, function (a, b) {
            return b.toUpperCase()
          })
        },
        polyfillStyleInterface: function (a) {
          var b = {
              get: function () {
                try {
                  if (!this.parentElement) throw new Error("Please use the anHTMLElement.myStyle property to get polyfilled properties")
                } catch (b) {
                  return setImmediate(function () {
                    throw b
                  }), ""
                }
                try {
                  return this.clip = void 0 === this.clip ? "" : this.clip, this.parentElement.getAttribute("data-style-" + a)
                } catch (b) {
                  var c = g.getSpecifiedStyle(this.parentElement, a, void 0, !0);
                  return c && c.length > 0 ? c.toCSSString() : ""
                }
              },
              set: function (b) {
                this.clip = void 0 === this.clip ? "" : this.clip;
                try {
                  if (!this.parentElement) throw new Error("Please use the anHTMLElement.myStyle property to set polyfilled properties")
                } catch (c) {
                  return void setImmediate(function () {
                    throw c
                  })
                }
                this.parentElement.getAttribute("data-style-" + a) != b && this.parentElement.setAttribute("data-style-" + a, b)
              }
            },
            e = [];
          try {
            e.push(Object.getPrototypeOf(c.documentElement.style) || CSSStyleDeclaration)
          } catch (f) {}
          for (var h = e.length; h--;) {
            var i = e[h];
            Object.defineProperty(i, a, b), Object.defineProperty(i, g.toCamelCase(a), b)
          }
          g.startMonitoringRule(d.parse('[style*="' + a + '"]{' + a + ":attr(style)}").value[0]), g.startMonitoringRule(d.parse("[data-style-" + a + "]{" + a + ":attr(style)}").value[0]), g.getAllCSSProperties().push(a), g.computationUnsafeProperties[a] = !0
        }
      };
    return e.EventTarget.implementsIn(g), Object.defineProperty(Element.prototype, "myStyle", {
      get: function () {
        var a = this.style;
        return a.parentElement || (a.parentElement = this), a
      }
    }), "no_auto_stylesheet_detection" in a || (g.loadAllStyleSheets(), c.addEventListener("DOMContentLoaded", function () {
      g.loadAllStyleSheets(), f(g.selectorForStylesheets, {
        onadded: function (a) {
          g.loadStyleSheetTag(a), g.dispatchEvent("stylesheetadded")
        }
      })
    })), g
  }(window, document), b.define("../core/css-cascade.js"), a.exports = function () {
    function a(a) {
      var b = a.usedStyle || getComputedStyle(a);
      return b.parentElement || (b.parentElement = a), b
    }

    function b(a) {
      var b = a.cascadedStyle || a.specifiedStyle || a.currentStyle || getComputedStyle(a);
      return b.parentElement || (b.parentElement = a), b
    }

    function c(a) {
      var b = a.style;
      return b.parentElement || (b.parentElement = a), b
    }

    function d(a) {
      var b = a.style;
      return b.parentElement || (b.parentElement = a), b
    }

    function e(b, c, e) {
      var f = null,
        g = a(b).getPropertyValue(c);
      if (e instanceof Array) {
        if (e.indexOf(g) >= 0) return null;
        e = "" + e[0]
      } else e = "" + e;
      if (g != e) {
        var h = d(b);
        f = {
          value: h.getPropertyValue(c),
          priority: h.getPropertyPriority(c),
          property: c
        }, h.setProperty(c, "", ""), h.setProperty(c, "" + e, "important")
      }
      return f
    }

    function f(a, b, c) {
      var c = c || [];
      for (var d in b)
        if (b.hasOwnProperty(key)) {
          var f = e(a, d, b[d]);
          f && c.push(f)
        }
      return c
    }

    function g(a, b) {
      if (b) {
        var c = d(a);
        c.setProperty(b.property, "", ""), b.value && (c.setProperty(b.property, b.value, ""), c.setProperty(b.property, b.value, b.priority))
      }
    }

    function h(a, b) {
      if (b && b.length > 0)
        for (var c = b.length; c--;) g(a, b[c])
    }
    var i = {
      styleOf: c,
      usedStyleOf: a,
      currentStyleOf: b,
      runtimeStyleOf: d,
      enforceStyle: e,
      enforceStyles: f,
      restoreStyle: g,
      restoreStyles: h
    };
    return i
  }(window), b.define("../core/css-style.js"), a.exports = function (a, b) {
    function c() {
      var a = this || Object.create(d.prototype),
        c = b.createElement("style");
      c.id = "virtual-stylesheet-" + e++, c.setAttribute("data-no-css-polyfill", "true"), c.appendChild(b.createTextNode("")), b.querySelector(":root > head").appendChild(c);
      var f = c.sheet;
      f.cssRules || (f.cssRules = f.rules), f.removeRule = f.removeRule || function (a) {
        return f.deleteRule(a)
      }, f.addRule = f.addRule || function (a, b, c) {
        var d = a + "{" + b + "}",
          e = "number" == typeof c ? c : f.cssRules.length;
        return f.insertRule(d, e)
      };
      var g = [];
      a.stylesheets = Object.create(null), a.createStyleSheet = function (b) {
        return a.stylesheets[b] || (a.stylesheets[b] = new d(this, b))
      }, a.addRule = function (a, b, c, d) {
        a = "" + a + " ", b = "" + b + " ", g.push({
          stylesheet: c,
          selector: a,
          declarations: b,
          enabled: d
        }), d && f.addRule(a, b)
      }, a.disableAllRules = function (a) {
        for (var b = f.cssRules.length, c = g.length; c--;) {
          var d = g[c];
          d.enabled && (b--, d.stylesheet == a && (f.removeRule(b), d.enabled = !1))
        }
      }, a.enableAllRules = function (a) {
        for (var b = 0, c = 0; c < g.length; c++) {
          var d = g[c];
          d.enabled ? b++ : d.stylesheet == a && (f.addRule(d.selector, d.declarations, b), d.enabled = !0, b++)
        }
      }, a.deleteAllRules = function (a) {
        for (var b = f.cssRules.length, c = g.length; c--;) {
          var d = g[c];
          d.enabled && (b--, d.stylesheet == a && (f.removeRule(b), g.splice(c, 1)))
        }
      }
    }

    function d(a, b) {
      this.factory = a, this.name = b, this.enabled = !0
    }
    var e = 0;
    return d.prototype.addRule = function (a, b) {
      this.factory.addRule(a, b, this.name, this.enabled)
    }, d.prototype.set = function (a, b) {
      a.id || (a.id = a.uniqueID);
      var c = "#" + a.id,
        d = "";
      for (var e in b) b.hasOwnProperty(e) && (d += e + ": " + b[e] + " !important; ");
      this.addRule(c, d)
    }, d.prototype.enable = function () {
      this.factory.enableAllRules(this.name), this.enabled = !0
    }, d.prototype.disable = function () {
      this.factory.disableAllRules(this.name), this.enabled = !1
    }, d.prototype.clear = function () {
      this.factory.deleteAllRules(this.name)
    }, d.prototype.revoke = function () {
      this.clear()
    }, c.VirtualStylesheet = d, c.VirtualStylesheetFactory = c, c
  }(window, document), b.define("../core/css-virtual-stylesheet-factory.js"), void

  function () {
    if (!("uniqueID" in document.documentElement)) {
      var a = 0;
      Object.defineProperty(Element.prototype, "uniqueID", {
        get: function () {
          return this.id ? this.id : this.id = "EL__" + ++a + "__"
        }
      })
    }
  }(), b.define("../core/polyfill-dom-uniqueID.js"), a.exports = function () {
    var a = b("../core/css-style.js"),
      c = (a.usedStyleOf, a.currentStyleOf, a.enforceStyle),
      d = a.restoreStyle,
      e = {
        absoluteMinWidthOf: function (a) {
          var b = c(a.parentNode, "position", "relative"),
            e = c(a, "position", "absolute"),
            f = c(a, "width", "0px"),
            g = c(a, "min-width", "0px"),
            h = a.offsetWidth;
          return d(a, g), d(a, f), d(a, e), d(a.parentNode, b), h
        },
        minWidthOf: function (a) {
          var b = c(a.parentNode, "position", "relative"),
            e = c(a.parentNode, "width", "0px"),
            f = c(a.parentNode, "min-width", "0px"),
            g = c(a.parentNode, "max-width", "0px"),
            h = c(a, "position", "absolute"),
            i = c(a, "width", "auto"),
            j = a.offsetWidth;
          return d(a, i), d(a, h), d(a.parentNode, e), d(a.parentNode, g), d(a.parentNode, f), d(a.parentNode, b), j
        },
        maxWidthOf: function (a) {
          var b = c(a.parentNode, "position", "relative"),
            e = c(a, "position", "absolute"),
            f = c(a, "width", "auto"),
            g = a.offsetWidth;
          return d(a, f), d(a, e), d(a.parentNode, b), g
        },
        absoluteMaxWidthOf: function (a) {
          var b = c(a.parentNode, "position", "relative"),
            e = c(a.parentNode, "width", "9999px"),
            f = c(a.parentNode, "min-width", "9999px"),
            g = c(a, "position", "absolute"),
            h = c(a, "width", "auto"),
            i = a.offsetWidth;
          return d(a, h), d(a, g), d(a.parentNode, e), d(a.parentNode, f), d(a.parentNode, b), i
        }
      };
    return e
  }(window, document), b.define("../core/css-sizing.js"), a.exports = function () {
    var a = a || {};
    return a.getBox = function (a, b) {
      var c = a.offsetWidth,
        d = a.offsetHeight,
        e = getComputedStyle(a),
        f = parseFloat(e.borderLeftWidth),
        g = parseFloat(e.borderRightWidth),
        h = parseFloat(e.borderTopWidth),
        i = parseFloat(e.borderBottomWidth),
        j = parseFloat(e.paddingLeft),
        k = parseFloat(e.paddingRight),
        l = parseFloat(e.paddingTop),
        m = parseFloat(e.paddingBottom),
        n = parseFloat(e.marginLeft),
        o = parseFloat(e.marginRight),
        p = parseFloat(e.marginTop),
        q = parseFloat(e.marginBottom),
        r = {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        };
      switch (b || "border-box") {
      case "content-box":
        r.top = h + l, r.left = f + j, r.width = c - f - j - k - g, r.height = d - h - l - m - i;
        break;
      case "padding-box":
        r.top = l, r.left = j, r.width = c - f - g, r.height = d - h - i;
        break;
      case "border-box":
        r.top = 0, r.left = 0, r.width = c, r.height = d;
        break;
      case "margin-box":
        r.top = 0 - p, r.left = 0 - n, r.width = c + n + o, r.height = d + p + q;
        break;
      default:
        throw new TypeError("Invalid parameter, boxType: " + b)
      }
      return r
    }, a
  }(window, document), b.define("../core/css-box.js"), a.exports = function (a, c) {
    var d = (b("../core/css-box.js").getBox, {
      convertToPixels: function e(a, b, d) {
        if ("string" == typeof a) var f = a.match(/^\s*(-?\d+(?:\.\d+)?)(\S*)\s*$/),
          g = f ? parseFloat(f[1]) : 0,
          h = f ? f[2] : "";
        else var g = a.value,
          h = a.unit;
        var i = e.converters[h];
        if (!i) throw new Error("No suitable conversion from unit '" + h + "' to unit 'px'");
        var j = i.call(null, g, b || c.documentElement, d);
        return Math.round(20 * j) / 20
      },
      convertFromPixels: function f(a, b, d, e) {
        var g = f.converters[b];
        if (!g) throw new Error("No suitable conversion to unit '" + b + "' from unit 'px'");
        var h = g.call(null, a, d || c.documentElement, e);
        return Math.round(20 * h) / 20
      }
    });
    return d.convertToPixels.converters = {
      px: function (a) {
        return a
      },
      "in": function (a) {
        return 96 * a
      },
      cm: function (a) {
        return a / .02645833333
      },
      mm: function (a) {
        return a / .26458333333
      },
      pt: function (a) {
        return a / .75
      },
      pc: function (a) {
        return a / .0625
      },
      em: function (a, b) {
        return a * parseFloat(b ? getComputedStyle(b).fontSize : 16)
      },
      rem: function (a, b) {
        return a * parseFloat(b ? getComputedStyle(b.ownerDocument.documentElement).fontSize : 16)
      },
      vw: function (b) {
        return b / 100 * a.innerWidth
      },
      vh: function (b) {
        return b / 100 * a.innerHeight
      },
      "%": function (a, b, c) {
        c = c || {};
        var d = b ? cssUtils.getBox(b, c.boxType) : {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        };
        switch (!0) {
        case c.isRadius:
          var e = Math.sqrt(d.height * d.height + d.width * d.width) / Math.sqrt(2);
          return Math.round(a / 100 * e);
        case c.isHeightRelated:
          return a / 100 * d.height;
        case c.isWidthRelated:
        default:
          return a / 100 * d.width
        }
      }
    }, d.convertFromPixels.converters = {
      px: function (a) {
        return a
      },
      "in": function (a) {
        return a / 96
      },
      cm: function (a) {
        return .02645833333 * a
      },
      mm: function (a) {
        return .26458333333 * a
      },
      pt: function (a) {
        return .75 * a
      },
      pc: function (a) {
        return .0625 * a
      },
      em: function (a, b) {
        return a / parseFloat(b ? getComputedStyle(b).fontSize : 16)
      },
      rem: function (a, b) {
        return a / parseFloat(b ? getComputedStyle(b.ownerDocument.documentElement).fontSize : 16)
      },
      vw: function (b) {
        return 100 * b / a.innerWidth
      },
      vh: function (b) {
        return 100 * b / a.innerHeight
      },
      "%": function (a, b, c) {
        c = c || {};
        var d = b ? cssUtils.getBox(b, c.boxType) : {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        };
        switch (!0) {
        case c.isRadius:
          var e = Math.sqrt(d.height * d.height + d.width * d.width) / Math.sqrt(2);
          return Math.round(100 * a / e);
        case c.isHeightRelated:
          return 100 * a / d.height;
        case c.isWidthRelated:
        default:
          return 100 * a / d.width
        }
      }
    }, d
  }(window, document), b.define("../core/css-units.js"), a.exports = function () {
    function a() {
      this.minType = w, this.minValue = "auto", this.maxType = w, this.maxValue = "auto"
    }

    function c(a, b, c) {
      this.type = a | o, this.name = b, this.index = 0 | c
    }

    function d(a, b) {
      this.element = a, this.parentGrid = a.parentGridLayout = b, this.reset(), this.buggy = !0
    }

    function e(a) {
      this.element = a, this.element.gridLayout = this, this.items = [], this.reset(), this.isLayoutScheduled = !1
    }
    var f = b("../core/css-syntax.js"),
      g = b("../core/css-style.js"),
      h = g.usedStyleOf,
      i = g.currentStyleOf,
      j = (g.enforceStyle, g.restoreStyle, b("../core/css-virtual-stylesheet-factory.js"));
    b("../core/polyfill-dom-uniqueID.js"), b("../core/polyfill-dom-requestAnimationFrame.js");
    var k = new j,
      l = function (a, b) {
        return b && (a = (b.id || b.uniqueID) + "-" + a), k.createStyleSheet(a)
      },
      m = b("../core/css-sizing.js"),
      n = b("../core/css-units.js"),
      o = 0,
      p = 1,
      q = 2,
      r = 3,
      s = 0,
      t = 1,
      u = 2,
      v = 3,
      w = 0,
      x = 1,
      y = 2,
      z = 3,
      A = 4,
      B = 5;
    a.prototype = {
      toString: function () {
        if (this.minType != this.maxType || this.minValue != this.maxValue) {
          var a = "auto",
            b = "auto";
          switch (this.minType) {
          case w:
            a = "auto";
            break;
          case x:
            a = this.minValue + "px";
            break;
          case y:
            a = this.minValue + "fr";
            break;
          case z:
            a = this.minValue + "%";
            break;
          case A:
            a = "min-content";
            break;
          case B:
            a = "max-content"
          }
          switch (this.maxType) {
          case w:
            b = "auto";
            break;
          case x:
            b = this.maxValue + "px";
            break;
          case y:
            b = this.maxValue + "fr";
            break;
          case z:
            b = this.maxValue + "%";
            break;
          case A:
            b = "min-content";
            break;
          case B:
            b = "max-content"
          }
          return "minmax(" + a + ", " + b + ")"
        }
        switch (this.minType) {
        case w:
          return "auto";
        case x:
          return this.minValue + "px";
        case y:
          return this.minValue + "fr";
        case z:
          return this.minValue + "%";
        case A:
          return "min-content";
        case B:
          return "max-content"
        }
      },
      setValue: function (a, b) {
        this.minType = this.maxType = a, this.minValue = this.maxValue = b
      },
      setMaxValue: function (a, b) {
        this.maxType = a, this.maxValue = b
      },
      setMinValue: function (a, b) {
        this.minType = a, this.minValue = b
      }
    }, c.prototype = {
      extractXLineIndex: function () {
        throw "Not implemented"
      },
      extractYLineIndex: function () {
        throw "Not implemented"
      },
      toString: function () {}
    }, d.prototype = {
      dispose: function () {
        this.element.parentGridLayout = void 0
      },
      reset: function () {
        this.order = 0, this.minWidth = 0, this.maxWidth = 0, this.hMargins = 0, this.vMargins = 0, this.hPaddings = 0, this.vPaddings = 0, this.hBorders = 0, this.vBorders = 0, this.xStart = -1, this.xEnd = -1, this.specifiedXStart = this.specifiedXStart || new c, this.specifiedXStart.type = o, this.specifiedXStart.name = void 0, this.specifiedXStart.index = void 0, this.specifiedXEnd = this.specifiedXEnd || new c, this.specifiedXEnd.type = o, this.specifiedXEnd.name = void 0, this.specifiedXEnd.index = void 0, this.yStart = -1, this.yEnd = -1, this.specifiedYStart = this.specifiedYStart || new c, this.specifiedYStart.type = o, this.specifiedYStart.name = void 0, this.specifiedYStart.index = void 0, this.specifiedYEnd = this.specifiedYEnd || new c, this.specifiedYEnd.type = o, this.specifiedYEnd.name = void 0, this.specifiedYEnd.index = void 0, this.marginAlignX = t, this.marginAlignY = t, this.paddingAlignX = v, this.paddingAlignY = v
      },
      updateFromElement: function () {
        var a = this.element,
          b = h(a),
          c = i(a),
          d = function (a) {
            var b = c[a];
            return "undefined" == typeof b ? "" : b
          };
        if (this.reset(), this.buggy = !1, this.order = 0 | parseInt(c.order), this.minWidth = m.minWidthOf(a), this.maxWidth = m.maxWidthOf(a), this.hMargins = parseInt(b.getPropertyValue("margin-left")) + parseInt(b.getPropertyValue("margin-right")), this.vMargins = parseInt(b.getPropertyValue("margin-top")) + parseInt(b.getPropertyValue("margin-bottom")), this.hPaddings = parseInt(b.getPropertyValue("padding-left")) + parseInt(b.getPropertyValue("padding-right")), this.vPaddings = parseInt(b.getPropertyValue("padding-top")) + parseInt(b.getPropertyValue("padding-bottom")), this.hBorders = parseInt(b.getPropertyValue("border-left-width")) + parseInt(b.getPropertyValue("border-right-width")), this.vBorders = parseInt(b.getPropertyValue("border-top-width")) + parseInt(b.getPropertyValue("border-bottom-width")), c["grid-area"]) {
          var e = d("grid-area").split("/"),
            f = /^\s*([a-z][-_a-z0-9]*)\s*$/i,
            g = e[0] || "auto",
            j = e[1] || (f.test(g) ? g : "auto"),
            k = e[2] || (f.test(g) ? g : "auto"),
            l = e[3] || (f.test(j) ? j : "auto");
          this.parseLocationInstructions(this.specifiedXStart, this.specifiedXEnd, j + " / " + l), this.parseLocationInstructions(this.specifiedYStart, this.specifiedYEnd, g + " / " + k)
        }
        if (c["grid-column"] || c["grid-column-start"] || c["grid-column-end"]) {
          var e = d("grid-column").split("/"),
            n = d("grid-column-start") || e[0] || "auto",
            o = d("grid-column-end") || e[1] || e[0] || n;
          this.parseLocationInstructions(this.specifiedXStart, this.specifiedXEnd, n + " / " + o)
        }
        if (c["grid-row"] || c["grid-row-start"] || c["grid-row-end"]) {
          var e = d("grid-row").split("/"),
            n = d("grid-row-start") || e[0],
            o = d("grid-row-end") || e[1] || e[0];
          this.parseLocationInstructions(this.specifiedYStart, this.specifiedYEnd, n + " / " + o)
        }
      },
      parseLocationInstructions: function (a, b, c) {
        var d = f.parseCSSValue(c),
          e = d.filter(function (a) {
            return !(a instanceof f.WhitespaceToken)
          });
        e.toCSSString = function () {
          return d.toCSSString()
        };
        var g = 0,
          h = function (a) {
            return e[g] instanceof f.IdentifierToken ? a.name ? (console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (duplicate line name)"), this.buggy = !0, !0) : (a.name = e[g++].value, !1) : e[g] instanceof f.NumberToken ? (a.index = 0 | e[g].value, e[g].value != a.index ? (console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (non-integer number)"), this.buggy = !0, !0) : 0 == a.index ? (console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (line index can't be zero)"), this.buggy = !0, !0) : a.index <= 0 && a.type == q ? (console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (negative spans not allowed)"), this.buggy = !0, !0) : (g++, !1)) : e[g] instanceof f.DelimToken && "/" == e[g].value ? !0 : (console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (invalid token)"), this.buggy = !0, !0)
          },
          i = function (a) {
            h.call(this, a), !this.buggy && e[g] && h.call(this, a)
          };
        if (!e[g]) return console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (empty declaration)"), void(this.buggy = !0);
        for (;;) {
          if (e[g] instanceof f.IdentifierToken) {
            if ("span" == e[g].value) {
              if (!e[++g]) return console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (span is not a valid line name, more tokens expected)"), void(this.buggy = !0);
              if (a.type = q, a.name = void 0, a.index = void 0, i.call(this, a), this.buggy) return;
              break
            }
            if ("auto" == e[g].value) {
              a.type = o, a.name = void 0, a.index = void 0, g++;
              break
            }
            if (a.type = p, a.name = void 0, a.index = void 0, i.call(this, a), this.buggy) return;
            break
          }
          if (e[g] instanceof f.DelimToken && "/" == e[g].value) return console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (no token to analyze before the slash token)"), void(this.buggy = !0);
          if (a.type = p, i.call(this, a), this.buggy) return;
          break
        }
        if (e[g]) {
          if (!(e[g] instanceof f.DelimToken && "/" == e[g].value)) return console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (expected slash / or end of declaration)"), void(this.buggy = !0);
          if (!e[++g]) return console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (expected at least one more token after the slash token)"), void(this.buggy = !0)
        } else a.type == p && void 0 != a.name && void 0 == a.index ? (b.type = p, b.name = a.name, b.index = void 0) : (b.type = o, b.name = void 0, b.index = void 0);
        for (; e[g];) {
          if (!(e[g] instanceof f.IdentifierToken)) {
            if (e[g] instanceof f.DelimToken && "/" == e[g].value) return console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (no token to analyze before the slash token)"), void(this.buggy = !0);
            if (b.type = p, i.call(this, b), this.buggy) return;
            break
          }
          if ("span" != e[g].value) {
            if ("auto" == e[g].value) {
              b.type = o, b.name = void 0, b.index = void 0, g++;
              break
            }
            if (b.type = p, b.name = void 0, b.name = void 0, b.index = void 0, i.call(this, b), this.buggy) return;
            break
          }
          if (!e[++g]) return console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (span is not a valid line name, more tokens expected)"), void(this.buggy = !0);
          if (b.type = q, b.name = void 0, b.index = void 0, i.call(this, b), this.buggy) return;
          break
        }
        return e[g] ? (console.error("INVALID DECLARATION: grid-column/row: " + e.toCSSString() + " (tokens after end)"), void(this.buggy = !0)) : (b.type == q && a.type == q && (b.type = o, b.index = void 0, b.name = void 0), [a, b])
      }
    }, e.prototype = {
      reset: function () {
        this.hlPadding = 0, this.hrPadding = 0, this.vtPadding = 0, this.vbPadding = 0, this.xLines = [], this.xSizes = [], this.yLines = [], this.ySizes = [], this.growX = !1, this.growY = !0, this.growDense = !1, this.rcMatrix = [], this.specifiedXLines = [], this.specifiedXSizes = [], this.specifiedYLines = [], this.specifiedYSizes = [], this.defaultXSize = new a, this.defaultYSize = new a
      },
      R: function (a, b) {
        return this.growY ? b : a
      },
      C: function (a, b) {
        return this.growY ? a : b
      },
      dispose: function () {
        for (var a = this.items.length; a--;) {
          var b = this.items[a];
          b.dispose()
        }
        this.element.gridLayout = void 0
      },
      updateFromElement: function () {
        for (var a = this.items.length; a--;) {
          var b = this.items[a];
          b.dispose()
        }
        this.items.length = 0;
        for (var c = this.element.firstElementChild; c;) {
          var e = new d(c, this);
          e.updateFromElement(), this.items.push(e), c = c.nextElementSibling
        }
        var f = this.items.map(function (a, b) {
          return {
            item: a,
            order: a.order,
            position: b
          }
        });
        f.sort(function (a, b) {
          return a.order == b.order ? a.position - b.position : a.order > b.order ? 1 : -1
        }), this.items = f.map(function (a) {
          return a.item
        }), this.reset();
        var g = h(this.element),
          i = "";
        if ((i = g["grid-template"]) && this.parseGridTemplate(i), (i = g["grid-template-rows"]) && this.parseRowsTemplate(i), (i = g["grid-template-columns"]) && this.parseColumnsTemplate(i), (i = g["grid-template-areas"]) && this.parseAreasTemplate(i), (i = g["grid-auto-rows"]) && this.parseAutoRowsBreadth(i), (i = g["grid-auto-columns"]) && this.parseAutoColumnsBreadth(i), i = g["grid-auto-flow"]) {
          var j = i.trim().toLowerCase().split(/\s+/g);
          j.indexOf("row") >= 0 ? (this.growX = !1, this.growY = !0) : j.indexOf("column") >= 0 && (this.growX = !0, this.growY = !1), this.growDense = j.indexOf("dense") >= 0 ? !0 : !1
        }
        var k = g;
        this.hlPadding = parseInt(k.getPropertyValue("border-left-width")) + parseInt(k.getPropertyValue("padding-left")), this.hrPadding = parseInt(k.getPropertyValue("border-right-width")) + parseInt(k.getPropertyValue("padding-right")), this.vtPadding = parseInt(k.getPropertyValue("border-top-width")) + parseInt(k.getPropertyValue("padding-top")), this.vbPadding = parseInt(k.getPropertyValue("border-bottom-width")) + parseInt(k.getPropertyValue("padding-bottom"))
      },
      resetItems: function () {
        for (var a = this.items.length; a--;) {
          var b = this.items[a];
          b.xStart = b.xEnd = b.yStart = b.yEnd = -1
        }
      },
      resetLinesToSpecified: function () {
        this.xLines = this.specifiedXLines.slice(0), this.xSizes = this.specifiedXSizes.slice(0), this.yLines = this.specifiedYLines.slice(0), this.ySizes = this.specifiedYSizes.slice(0)
      },
      parseTrackBreadthToken: function (a) {
        if (a instanceof f.IdentifierToken) {
          if ("auto" == a.value) return {
            type: w,
            value: "auto"
          };
          if ("min-content" == a.value) return {
            type: A,
            value: "min-content"
          };
          if ("max-content" == a.value) return {
            type: B,
            value: "max-content"
          }
        } else {
          if (a instanceof f.DimensionToken) return "fr" == a.unit ? {
            type: y,
            value: a.value
          } : {
            type: x,
            value: n.convertToPixels(a.toCSSString(), this.element)
          };
          if (a instanceof f.PercentageToken) return {
            type: z,
            value: a.value
          }
        }
        return null
      },
      parseTrackBreadth: function (b, c) {
        var d = !1,
          e = new a,
          g = function () {
            var a = this.parseTrackBreadthToken(b[c]);
            return a ? (c++, a) : (console.error("INVALID DECLARATION: grid-template-rows/columns: " + b.toCSSString() + " (unrecognized track breadth)"), void(d = !0))
          };
        if (b[c] instanceof f.Func && "minmax" == b[c].name) {
          var h = b,
            i = c,
            j = h[i].getArguments();
          if (2 != j.length) return console.error("INVALID DECLARATION: grid-template-rows/columns: " + h.toCSSString() + " (invalid number of arguments to the minmax function)"), void(d = !0);
          b = j[0].filter(function (a) {
            return !(a instanceof f.WhitespaceToken)
          }), c = 0;
          var k = g.call(this);
          e.minType = k.type, e.minValue = k.value, b = j[1].filter(function (a) {
            return !(a instanceof f.WhitespaceToken)
          }), c = 0;
          var k = g.call(this);
          e.maxType = k.type, e.maxValue = k.value, b = h, c = i + 1
        } else {
          var k = g.call(this);
          e.minType = e.maxType = k.type, e.minValue = e.maxValue = k.value
        }
        return {
          result: e,
          I: c
        }
      },
      parseAutoRowsBreadth: function (a) {
        var b = f.parseCSSValue(a),
          c = b.filter(function (a) {
            return !(a instanceof f.WhitespaceToken)
          });
        c.toCSSString = function () {
          return b.toCSSString()
        };
        var d = this.parseTrackBreadth(c, 0);
        if (!d.result) throw "TODO: better error message";
        this.defaultYSize = d.result
      },
      parseAutoColumnsBreadth: function (a) {
        var b = f.parseCSSValue(a),
          c = b.filter(function (a) {
            return !(a instanceof f.WhitespaceToken)
          });
        c.toCSSString = function () {
          return b.toCSSString()
        };
        var d = this.parseTrackBreadth(c, 0);
        if (!d.result) throw "TODO: better error message";
        this.defaultXSize = d.result
      },
      parseGridTemplate: function (a) {
        var b = !1,
          a = a.replace(/\/\*(.*?)\*\//g, ""),
          c = a.split("/");
        if (2 == c.length) {
          if (this.parseColumnsTemplate(c[0])) return b = !0;
          a = c[1]
        } else if (c.length >= 3) return b = !0;
        if (/"|'/.test(a)) {
          var d = [];
          if (a = a.replace(/\s*("(?:.*?)"|'(?:.*?)')\s*([-_a-zA-Z0-9]*)\s*/g, function (a, b, c) {
              return d.push(b), " " + (c || "auto") + " "
            }), a = a.replace(/\)\s*\(/g, " "), this.parseRowsTemplate(a)) return b = !0;
          if (this.parseAreasTemplate(d.join(" "))) return b = !0
        } else if (this.parseRowsTemplate(a)) return b = !0;
        return b
      },
      parseAreasTemplate: function (a) {
        var b = f.parseCSSValue(a),
          c = b.filter(function (a) {
            return !(a instanceof f.WhitespaceToken)
          });
        c.toCSSString = function () {
          return b.toCSSString()
        };
        for (var d = 0, e = !1, g = /^([-_a-zA-Z0-9]+|[.]+)\s*/, h = [], i = Object.create(null); c[d];) {
          for (var j = "" + c[d++].value, k = [];
            "" !== j;) {
            var l = g.exec(j);
            if (!l || 2 != l.length) return e = !0;
            j = j.substr(l[0].length);
            var m = l[1];
            if ("." != m && "." != m[0]) {
              if (i[m] || (i[m] = {
                  xStart: k.length,
                  xEnd: k.length + 1,
                  yStart: d - 1,
                  yEnd: d
                }), i[m].xStart > k.length) return e = !0;
              if (i[m].yStart > d - 1) return e = !0;
              i[m].xEnd = Math.max(i[m].xEnd, k.length + 1), i[m].yEnd = Math.max(i[m].yEnd, d)
            }
            k.push(l[1])
          }
          h.push(k)
        }
        for (var n in i)
          for (var o = i[n], p = o.yStart; p < o.yEnd; p++)
            for (var q = o.xStart; q < o.xEnd; q++)
              if (h[p][q] != n) return e = !0;
        for (var n in i) {
          for (var o = i[n]; this.specifiedYLines.length <= o.yEnd;) this.specifiedYLines.push([]), this.specifiedYSizes.push(this.defaultYSize);
          for (this.specifiedYLines[o.yStart].push(n + "-start"), this.specifiedYLines[o.yEnd].push(n + "-end"); this.specifiedXLines.length <= o.xEnd;) this.specifiedXLines.push([]), this.specifiedXSizes.push(this.defaultXSize);
          this.specifiedXLines[o.xStart].push(n + "-start"), this.specifiedXLines[o.xEnd].push(n + "-end")
        }
      },
      parseTrackDefinitions: function (a, b, c) {
        c = c.replace(/\[/g, "(").replace(/\]/g, ")").replace(/repeat\(\s*([0-9]+)\s*\,((?:\([^()]*\)|[^()])+)\)/gi, function (a, b, c) {
          for (var d = " ", e = parseInt(b); e--;) d += c + " ";
          return d
        }), c = c.replace(/\)\s*\(/g, " ");
        var d = f.parseCSSValue(c),
          e = d.filter(function (a) {
            return !(a instanceof f.WhitespaceToken)
          });
        e.toCSSString = function () {
          return d.toCSSString()
        };
        var g = 0,
          h = !1,
          i = function () {
            var b = [];
            if (e[g] instanceof f.SimpleBlock && "(" == e[g].name) {
              for (var c = e[g].value, d = c.length; d--;)
                if (c[d] instanceof f.IdentifierToken) b.push(c[d].value);
                else if (!(c[d] instanceof f.WhitespaceToken)) return console.error("INVALID DECLARATION: grid-template-rows/columns: " + e.toCSSString() + " (unrecognized line name)"), void(h = !0);
              g++
            }
            a.push(b), b = []
          },
          j = function () {
            var a = this.parseTrackBreadth(e, g);
            b.push(a.result), g = a.I
          };
        for (i(); e[g] && (j.call(this), !h) && (i(), !h););
      },
      parseColumnsTemplate: function (a) {
        return this.parseTrackDefinitions(this.specifiedXLines, this.specifiedXSizes, a)
      },
      parseRowsTemplate: function (a) {
        return this.parseTrackDefinitions(this.specifiedYLines, this.specifiedYSizes, a)
      },
      parseTracksTemplate: function (a, b, c) {
        b && this.parseRowsTemplate(b), a && this.parseColumnsTemplate(a), c && this.parseAreasTemplate(c)
      },
      buildExplicitMatrix: function () {
        this.resetLinesToSpecified(), this.rcMatrix = [], this.growY ? (this.ensureRows(this.ySizes.length), this.ensureColumns(this.xSizes.length)) : (this.ensureColumns(this.xSizes.length), this.ensureRows(this.ySizes.length))
      },
      buildImplicitMatrix: function () {
        this.buildExplicitMatrix(), this.positionNonAutoItems(), this.positionAutoInColumnOnlyItems(), this.autoGrow()
      },
      ensureRows: function (a) {
        if (this.growY) {
          for (; this.ySizes.length < a;) this.ySizes.push(this.defaultYSize);
          for (; this.rcMatrix.length < a;) this.rcMatrix.push([])
        } else {
          for (; this.ySizes.length < a;) this.ySizes.push(this.defaultYSize);
          for (var b = this.rcMatrix.length; b--;) this.rcMatrix[b].length < a && (this.rcMatrix[b].length = a)
        }
      },
      ensureColumns: function (a) {
        if (this.growY) {
          for (; this.xSizes.length < a;) this.xSizes.push(this.defaultXSize);
          for (var b = this.rcMatrix.length; b--;) this.rcMatrix[b].length < a && (this.rcMatrix[b].length = a)
        } else {
          for (; this.xSizes.length < a;) this.xSizes.push(this.defaultXSize);
          for (; this.rcMatrix.length < a;) this.rcMatrix.push([])
        }
      },
      markAsOccupied: function (a) {
        var b = a.xStart,
          c = a.yStart,
          d = a.xEnd,
          e = a.yEnd;
        if (this.growY) {
          this.ensureRows(e);
          for (var f = c; e > f; f++) {
            this.rcMatrix[f].length < d - 1 && (this.rcMatrix[f].length = d - 1);
            for (var g = b; d > g; g++) this.rcMatrix[f][g] = a
          }
        } else {
          this.ensureColumns(d);
          for (var g = b; d > g; g++) {
            this.rcMatrix[g].length < e - 1 && (this.rcMatrix[g].length = e - 1);
            for (var f = c; e > f; f++) this.rcMatrix[g][f] = a
          }
        }
      },
      positionNonAutoItems: function () {
        for (var a = 0, b = this.items.length; b > a; a++) {
          var c = this.items[a];
          if (c.specifiedXStart.type == p && c.specifiedYStart.type == p) {
            var d = this.findXStart(c),
              e = this.findYStart(c),
              f = this.findXEnd(c),
              g = this.findYEnd(c);
            c.xStart = d, c.yStart = e, c.xEnd = f, c.yEnd = g, this.markAsOccupied(c)
          }
        }
      },
      positionAutoInColumnOnlyItems: function () {
        if (this.growY)
          for (var a = 0, b = this.items.length; b > a; a++) {
            var c = this.items[a];
            if (c.specifiedYStart.type == p && -1 == c.yStart) {
              var d = this.findYStart(c),
                e = this.findYEnd(c),
                f = 1;
              c.specifiedXEnd.type == q && (void 0 === c.specifiedXEnd.name ? f = c.specifiedXEnd.index : (f = 1, console.error("[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+"))), this.ensureRows(e);
              a: for (var g = 0;; g++) {
                for (var h = g + f - 1; h >= g; h--)
                  for (var i = d; e > i; i++)
                    if (this.rcMatrix[i][h]) continue a;
                break
              }
              var j = g,
                k = g + f;
              c.xStart = j, c.yStart = d, c.xEnd = k, c.yEnd = e, this.markAsOccupied(c)
            }
          } else
            for (var a = 0, b = this.items.length; b > a; a++) {
              var c = this.items[a];
              if (c.specifiedXStart.type == p && -1 == c.xStart) {
                var j = this.findXStart(c),
                  k = this.findXEnd(c),
                  l = 1;
                c.specifiedYEnd.type == q && (l = void 0 === c.specifiedYEnd.name ? c.specifiedYEnd.index : 1), this.ensureColumns(k);
                a: for (var m = 0;; m++) {
                  for (var i = m + l - 1; i >= m; i--)
                    for (var h = j; k > h; h++)
                      if (this.rcMatrix[h][i]) continue a;
                  break
                }
                var d = m,
                  e = m + l;
                c.xStart = j, c.yStart = d, c.xEnd = k, c.yEnd = e, this.markAsOccupied(c)
              }
            }
      },
      autoGrow: function () {
        var a = function (a) {
            for (; a >= this.xLines.length;) this.xLines.push(["*"]), this.xSizes.push(this.defaultXSize)
          },
          b = function (a) {
            for (; a >= this.yLines.length;) this.yLines.push(["*"]), this.ySizes.push(this.defaultYSize)
          };
        this.resetLinesToSpecified(), a.call(this, 1), b.call(this, 1);
        for (var c = this.items.length; c--;) {
          var d = this.items[c];
          if (d.xEnd > 0 && a.call(this, d.xEnd), d.yEnd > 0 && b.call(this, d.yEnd), !(d.xEnd > 0 && d.yEnd > 0)) {
            if (d.specifiedXEnd.type == p || d.specifiedXStart.type == p) {
              var e = (this.findXStart(d), this.findXEnd(d));
              a.call(this, e)
            }
            if (d.specifiedYEnd.type == p || d.specifiedYStart.type == p) {
              var f = this.findYStart(d),
                g = this.findYEnd(d);
              f >= g && (g = f + 1), b.call(this, g)
            }
            d.specifiedXEnd.type == q && void 0 === d.specifiedXEnd.name && a.call(this, d.specifiedXEnd.index), d.specifiedYEnd.type == q && void 0 === d.specifiedYEnd.name && b.call(this, d.specifiedYEnd.index)
          }
        }
        if (this.growY) {
          for (; this.ySizes.length > this.rcMatrix.length;) this.rcMatrix.push([]);
          for (var h = this.rcMatrix.length; h--;) this.rcMatrix[h].length = this.xSizes.length
        } else {
          for (; this.xSizes.length > this.rcMatrix.length;) this.rcMatrix.push([]);
          for (var h = this.rcMatrix.length; h--;) this.rcMatrix[h].length = this.ySizes.length
        }
      },
      scheduleRelayout: function () {
        function a() {
          for (var a = [], c = b.element; c = c.parentNode;) "scrollTop" in c && a.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
          return a
        }
        var b = this;
        b.isLayoutScheduled || (b.isLayoutScheduled = !0, requestAnimationFrame(function () {
          try {
            var c = a();
            b.revokePolyfilledStyle(), b.updateFromElement(), b.performLayout(), b.generatePolyfilledStyle(), c.forEach(function (a) {
              a.element.scrollTop = a.top, a.element.scrollLeft = a.left
            })
          } finally {
            b.isLayoutScheduled = !1
          }
        }))
      },
      performLayout: function () {
        this.buildImplicitMatrix();
        var a = {
          x: 0,
          y: 0
        };
        if (this.growY)
          for (var b = 0; b < this.items.length; b++) {
            var c = this.items[b];
            if (-1 == c.xEnd || -1 == c.yEnd)
              if (this.growDense && (a = {
                  x: 0,
                  y: 0
                }), c.specifiedXStart.type == p) {
                var d = this.findXStart(c);
                a.x > d && a.y++, a.x = d;
                var e = this.findXEnd(c);
                d >= e && (e = d + 1), c.xStart = d, c.xEnd = e;
                var f = 1;
                c.specifiedYEnd.type == q && (f = void 0 === c.specifiedYEnd.name ? c.specifiedYEnd.index : 1);
                a: for (;;) {
                  this.ensureRows(a.y + f);
                  for (var g = a.y + f - 1; g >= a.y; g--)
                    for (var h = d; e > h; h++)
                      if (this.rcMatrix[g][h]) {
                        a.y = g + 1;
                        continue a
                      }
                  break
                }
                c.xStart = d, c.xEnd = e, c.yStart = a.y, c.yEnd = a.y + f, this.markAsOccupied(c)
              } else {
                var i = 1;
                c.specifiedXEnd.type == q && (void 0 === c.specifiedXEnd.name ? i = c.specifiedXEnd.index : (i = 1, console.error("[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+")));
                var f = 1;
                c.specifiedYEnd.type == q && (f = void 0 === c.specifiedYEnd.name ? c.specifiedYEnd.index : 1);
                var j = function () {
                  return a.x++, a.x + i > this.rcMatrix[0].length && (a.y++, this.ensureRows(a.y + f), a.x = 0), !0
                };
                a: for (;;) {
                  this.ensureRows(a.y + f);
                  for (var g = a.y + f - 1; g >= a.y; g--)
                    for (var h = a.x + i - 1; h >= a.x; h--)
                      if (this.rcMatrix[g][h]) {
                        j.call(this);
                        continue a
                      }
                  break
                }
                c.xStart = a.x, c.xEnd = a.x + i, c.yStart = a.y, c.yEnd = a.y + f, this.markAsOccupied(c)
              }
          } else
            for (var b = 0; b < this.items.length; b++) {
              var c = this.items[b];
              if (-1 == c.xEnd || -1 == c.yEnd)
                if (this.growDense && (a = {
                    x: 0,
                    y: 0
                  }), c.specifiedYStart.type == p) {
                  var k = this.findYStart(c);
                  a.y > k && a.x++, a.y = k;
                  var l = this.findYEnd(c);
                  k >= l && (l = k + 1), c.yStart = k, c.yEnd = l;
                  var i = 1;
                  c.specifiedXEnd.type == q && (void 0 === c.specifiedXEnd.name ? i = c.specifiedXEnd.index : (i = 1, console.error("[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+")));
                  a: for (;;) {
                    this.ensureColumns(a.x + i);
                    for (var h = a.x + i - 1; h >= a.x; h--)
                      for (var g = k; l > g; g++)
                        if (this.rcMatrix[h][g]) {
                          a.x = h + 1;
                          continue a
                        }
                    break
                  }
                  c.yStart = k, c.yEnd = l, c.xStart = a.x, c.yEnd = a.x + i, this.markAsOccupied(c)
                } else {
                  var f = 1;
                  c.specifiedYEnd.type == q && (f = void 0 === c.specifiedYEnd.name ? c.specifiedYEnd.index : 1);
                  var i = 1;
                  c.specifiedXEnd.type == q && (void 0 === c.specifiedXEnd.name ? i = c.specifiedXEnd.index : (i = 1, console.error("[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+")));
                  var j = function () {
                    return a.y++, a.y + f > this.rcMatrix[0].length && (a.x++, this.ensureRows(a.x + i), a.y = 0), !0
                  };
                  a: for (;;) {
                    this.ensureColumns(a.x + i);
                    for (var h = a.x + i - 1; h >= a.x; h--)
                      for (var g = a.y + f - 1; g >= a.y; g--)
                        if (this.rcMatrix[h][g]) {
                          j.call(this);
                          continue a
                        }
                    break
                  }
                  c.xStart = a.x, c.xEnd = a.x + i, c.yStart = a.y, c.yEnd = a.y + f, this.markAsOccupied(c)
                }
            }
        this.computeAbsoluteTrackBreadths()
      },
      computeAbsoluteTrackBreadths: function () {
        var a = l("no-children", this.element);
        a.set(this.element, {
          border: "none",
          padding: "0px",
          "min-height": "0px"
        });
        for (var b = this.items.length; b--;) a.set(this.items[b], {
          display: "none"
        });
        var c = 1,
          d = 9999999,
          e = this.element.offsetWidth,
          f = this.element.offsetHeight;
        a.revoke();
        var g = function (a) {
            var b = 0,
              e = d;
            switch (a.minType) {
            case x:
              b = a.minValue;
              break;
            case z:
              b = a.minValue * o / 100
            }
            switch (a.maxType) {
            case x:
              e = a.minValue;
              break;
            case z:
              e = a.minValue * o / 100;
              break;
            case y:
              e = b;
              break;
            default:
              e = d
            }
            return {
              base: b,
              limit: e,
              breadth: 0,
              flags: 0 | (e == d ? c : 0)
            }
          },
          i = function (a, b, e, f, g) {
            var h = e.length,
              i = f / h;
            if ("base" == b) {
              if (g)
                for (var j = e.length; j--;) {
                  var k = e[j].x,
                    l = a[k].base + i;
                  g && a[k].flags & 0 == c && l > a[k].limit && (i -= l - a[k].limit)
                }
              for (var j = e.length; j--;) {
                var k = e[j].x;
                a[k].base += i
              }
            } else if ("limit" == b)
              for (var j = e.length; j--;) {
                var k = e[j].x;
                a[k].flags & c && a[k].limit == d ? a[k].limit = a[k].base + i : a[k].limit += i
              }
          },
          j = function (a, b, e, f, g, h) {
            for (var j = 0, k = b.length; k--;) {
              var l = !1;
              if (b[k].minType == A || b[k].minType == w)
                for (var m = this.items.length; m--;) {
                  var n = this.items[m],
                    o = g(n),
                    p = h(n);
                  o > k || k >= p || p - o != 1 || (a[k].base = Math.max(a[k].base, e(n)), j++, l = !0)
                } else if (b[k].minType == B)
                  for (var m = this.items.length; m--;) {
                    var n = this.items[m],
                      o = g(n),
                      p = h(n);
                    o > k || k >= p || p - o != 1 || (a[k].base = Math.max(a[k].base, f(n)), j++, l = !0)
                  }
              if (b[k].maxType == A)
                for (var m = this.items.length; m--;) {
                  var n = this.items[m],
                    o = g(n),
                    p = h(n);
                  o > k || k >= p || p - o != 1 || (a[k].limit = a[k].limit == d ? e(n) : Math.max(a[k].limit, e(n)), l || j++)
                } else if (b[k].maxType == B || b[k].minType == w)
                  for (var m = this.items.length; m--;) {
                    var n = this.items[m],
                      o = g(n),
                      p = h(n);
                    o > k || k >= p || p - o != 1 || (a[k].limit = a[k].limit == d ? f(n) : Math.max(a[k].limit, f(n)), l || j++)
                  }
              a[k].limit != d && (a[k].flags = a[k].flags & ~c)
            }
            for (var q = 2; j < this.items.length && q <= b.length; q++) a: for (var m = this.items.length; m--;) {
              var n = this.items[m],
                o = g(n),
                p = h(n);
              if (p - o == q) {
                for (var r = 0, s = 0, t = o; p > t; t++) {
                  if (b[t].maxType == y) continue a;
                  r += a[t].base, s += a[t].limit
                }
                s > d && (s = d);
                var u = function (c, e, f) {
                    for (;;) {
                      for (var g = c, h = o; p > h; h++) g -= a[h][e];
                      if (1 / 1024 >= g) {
                        for (var h = o; p > h; h++) a[h].limit == d && (a[h].limit = a[h].base);
                        return
                      }
                      for (var j = [], h = o; p > h; h++) j.push({
                        x: h,
                        base: a[h].base,
                        limit: a[h].limit,
                        minIsMinContent: b[h].minType == A || b[h].minType == w,
                        minIsMaxContent: b[h].minType == B,
                        maxIsMinContent: b[h].maxType == A,
                        maxIsMaxContent: b[h].maxType == B || b[h].maxType == w
                      });
                      if (j.sort(function (a, b) {
                          return a.limit - b.limit
                        }), j = j.filter(function (a) {
                          if ("base" == e) {
                            if ("min-content" == f) return a.minIsMinContent || a.minIsMaxContent;
                            if ("max-content" == f) return a.minIsMaxContent
                          } else if ("limit" == e) {
                            if ("min-content" == f) return a.maxIsMinContent || a.maxIsMaxContent;
                            if ("max-content" == f) return a.maxIsMaxContent
                          }
                          return !1
                        }), 0 == j.length) return;
                      if ("base" == e) {
                        var k = j.filter(function (a) {
                            return a.base < a.limit
                          }, 0),
                          l = k.length;
                        if (l > 0) i(a, e, k, g, !0);
                        else if ("min-content" == f) {
                          var k = j.filter(function (a) {
                              return a.maxIsMinContent || a.maxIsMaxContent
                            }, 0),
                            l = k.length;
                          l >= 1 ? i(a, e, k, g, !1) : i(a, e, j, g, !1)
                        } else if ("max-content" == f) {
                          var k = j.filter(function (a) {
                              return a.maxIsMaxContent
                            }, 0),
                            l = k.length;
                          l >= 1 ? i(a, e, k, g, !1) : i(a, e, j, g, !1)
                        }
                      } else "limit" == e && i(a, e, j, g)
                    }
                  },
                  v = function () {
                    for (var b = a.length; b--;) a[b].limit != d && (a[b].flags = a[b].flags & ~c)
                  };
                u(e(n), "base", "min-content"), v(), u(f(n), "base", "max-content"), v(), u(e(n), "limit", "min-content"), u(f(n), "limit", "max-content"), v(), j++
              }
            }
          },
          k = function (a, b, c) {
            var d = a.map(function (c, d) {
              return {
                x: d,
                base: a[d].base,
                limit: a[d].limit,
                minIsMinContent: b[d].minType == A || b[d].minType == w,
                minIsMaxContent: b[d].minType == B,
                maxIsMinContent: b[d].maxType == A,
                maxIsMaxContent: b[d].maxType == B || b[d].maxType == w
              }
            });
            for (d.sort(function (a, b) {
                return a.limit - b.limit
              });;) {
              for (var e = c, f = a.length; f--;) e -= a[f].base;
              if (1 / 1024 >= e) return;
              var g = d = d.filter(function (a) {
                  return (a.minIsMinContent || a.minIsMaxContent) && a.base < a.limit
                }, 0),
                h = g.length;
              if (0 >= h) return;
              i(a, "base", g, e, !0)
            }
          },
          m = function (a, b, c, d, e, f, g) {
            if (0 == c) {
              for (var h = 0, i = this.items.length; i--;) {
                for (var j = this.items[i], k = f(j), l = g(j), m = e(j), n = 0, o = k; l > o; o++) b[o].maxType == y ? n += b[o].maxValue : m -= a[o].base;
                m > 0 && n > 0 && (h = Math.max(h, m / n))
              }
              for (var p = a.length; p--;)
                if (b[p].maxType == y) {
                  var q = h * b[p].maxValue;
                  a[p].breadth = a[p].base < q ? q : a[p].base
                } else a[p].breadth = a[p].base
            } else {
              for (var m = c, r = [], s = 0, p = a.length; p--;) b[p].maxType == y ? (r.push(p), s += b[p].maxValue) : m -= a[p].breadth = a[p].base;
              for (; r.length > 0;) {
                for (var h = m / s, t = !1, i = r.length; i--;) {
                  var p = r[i],
                    q = h * b[p].maxValue;
                  a[p].base < q ? a[p].breadth = q : (a[p].breadth = a[p].base, s -= b[p].maxValue, r.splice(i, 1), t = !0)
                }
                t || (r.length = 0)
              }
            }
          },
          n = function (a, b, c, e, f, g, h) {
            j.call(this, a, b, e, f, g, h);
            for (var i = b.length; i--;) a[i].limit == d && (a[i].limit = a[i].base);
            k.call(this, a, b, c, e, f, g, h), m.call(this, a, b, c, e, f, g, h)
          },
          o = e,
          p = this.xSizes.map(g),
          q = function (a) {
            return a.minWidth + a.hMargins
          },
          r = function (a) {
            return a.maxWidth + a.hMargins
          },
          s = function (a) {
            return a.xStart
          },
          t = function (a) {
            return a.xEnd
          };
        n.call(this, p, this.xSizes, e, q, r, s, t);
        var u = h(this.element),
          a = l("temp-position", this.element);
        "static" == u.getPropertyValue("position") && a.set(this.element, {
          position: "relative"
        }), this.items.forEach(function (b) {
          for (var c = 0, d = b.xStart; d < b.xEnd; d++) c += p[d].breadth;
          a.set(b.element, {
            position: "absolute",
            width: "" + c + "px",
            "box-sizing": "border-box"
          })
        });
        var o = f,
          v = this.ySizes.map(g),
          C = function (a) {
            return a.element.offsetHeight + a.vMargins
          },
          D = function (a) {
            return a.element.offsetHeight + a.vMargins
          },
          E = function (a) {
            return a.yStart
          },
          F = function (a) {
            return a.yEnd
          };
        n.call(this, v, this.ySizes, f, C, D, E, F), a.revoke(), this.finalXSizes = p, this.finalYSizes = v
      },
      generateMSGridStyle: function () {
        this.element.style.setProperty("display", "-ms-grid"), this.element.style.setProperty("-ms-grid-rows", this.ySizes.join(" ")), this.element.style.setProperty("-ms-grid-columns", this.xSizes.join(" "));
        for (var a = this.items.length; a--;) {
          var b = this.items[a];
          b.element.style.setProperty("-ms-grid-row", b.yStart + 1), b.element.style.setProperty("-ms-grid-column", b.xStart + 1), b.element.style.setProperty("-ms-grid-row-span", b.yEnd - b.yStart), b.element.style.setProperty("-ms-grid-column-span", b.xEnd - b.xStart)
        }
      },
      generatePolyfilledStyle: function () {
        for (var a = h(this.element), b = l("css-grid", this.element), c = this.finalXSizes, d = this.finalYSizes, e = 0, f = 0; f < c.length; f++) e += c[f].breadth;
        for (var g = 0, i = 0; i < d.length; i++) g += d[i].breadth;
        var j = {}; - 1 == ["block", "inline-block"].indexOf(a.getPropertyValue("display")) && (j.display = "block"), "static" == a.getPropertyValue("position") && (j.position = "relative"), b.set(this.element, j);
        var k = e,
          m = g,
          n = [],
          o = [];
        n.length = o.length = this.items.length;
        for (var p = this.items.length; p--;) {
          for (var q = this.items[p], r = this.hlPadding, f = 0; f < q.xStart; f++) r += c[f].breadth;
          for (var k = 0, f = q.xStart; f < q.xEnd; f++) k += c[f].breadth;
          for (var s = this.vtPadding, i = 0; i < q.yStart; i++) s += d[i].breadth;
          for (var m = 0, i = q.yStart; i < q.yEnd; i++) m += d[i].breadth;
          b.set(q.element, {
            position: "absolute",
            "box-sizing": "border-box",
            top: "" + s + "px",
            left: "" + r + "px"
          }), n[p] = k - q.hMargins, o[p] = m - q.vMargins
        }
        for (var t = /^(SVG|MATH|IMG|VIDEO|PICTURE|OBJECT|EMBED|IFRAME)$/i, p = this.items.length; p--;) {
          var q = this.items[p],
            k = n[p];
          (q.minWidth <= k || t.test(q.element.tagName)) && b.set(q.element, {
            width: k + "px"
          })
        }
        for (var p = this.items.length; p--;) {
          var q = this.items[p],
            m = o[p];
          (q.element.offsetHeight <= m || t.test(q.element.tagName)) && b.set(q.element, {
            height: m + "px"
          })
        }
        var j = {};
        ["auto", "0px"].indexOf(a.getPropertyValue("width")) >= 0 && (j.width = e + "px"), ["auto", "0px"].indexOf(a.getPropertyValue("height")) >= 0 && (j.height = g + "px"), b.set(this.element, j)
      },
      revokePolyfilledStyle: function () {
        l("css-grid", this.element).revoke()
      },
      findXStart: function (a) {
        var b = -1;
        return a.specifiedXStart.type !== p ? 0 : (a.specifiedXStart.name ? (void 0 === a.specifiedXStart.index && (b = this.findXLine(a.specifiedXStart.name + "-start", 0, 0, !0)), -1 == b && (b = this.findXLine(a.specifiedXStart.name, 0, (a.specifiedXStart.index || 1) - 1))) : b = (a.specifiedXStart.index || 1) - 1, 0 > b && (b = 0), a.xStart = b)
      },
      findYStart: function (a) {
        var b = -1;
        return a.specifiedYStart.type !== p ? 0 : (a.specifiedYStart.name ? (void 0 === a.specifiedYStart.index && (b = this.findYLine(a.specifiedYStart.name + "-start", 0, 0, !0)), -1 == b && (b = this.findYLine(a.specifiedYStart.name, 0, (a.specifiedYStart.index || 1) - 1))) : b = (a.specifiedYStart.index || 1) - 1, 0 > b && (b = 0), a.yStart = b)
      },
      findXEnd: function (a) {
        var b = -1,
          c = a.xStart;
        switch (a.specifiedXEnd.type) {
        case p:
          a.specifiedXEnd.name ? (void 0 === a.specifiedXEnd.index && (b = this.findXLine(a.specifiedXEnd.name + "-end", 0, 0, !0)), -1 == b && (b = this.findXLine(a.specifiedXEnd.name, 0, (a.specifiedXEnd.index || 1) - 1))) : b = (a.specifiedXEnd.index || 1) - 1;
          break;
        case q:
          b = a.specifiedXEnd.name ? this.findXLine(a.specifiedXEnd.name, c + 1, (a.specifiedXEnd.index || 1) - 1) : c + (0 | a.specifiedXEnd.index || 1);
          break;
        case o:
          b = c + 1
        }
        return c >= b && (b = c + 1), a.xEnd = b
      },
      findYEnd: function (a) {
        var b = -1,
          c = a.yStart;
        switch (a.specifiedYEnd.type) {
        case p:
          a.specifiedYEnd.name ? (void 0 === a.specifiedYEnd.index && (b = this.findYLine(a.specifiedYEnd.name + "-end", 0, 0, !0)), -1 == b && (b = this.findYLine(a.specifiedYEnd.name, 0, (a.specifiedYEnd.index || 1) - 1))) : b = (a.specifiedYEnd.index || 1) - 1;
          break;
        case q:
          a.specifiedYEnd.name ? (b = this.findYLine(a.specifiedYEnd.name, c + 1, (a.specifiedYEnd.index || 1) - 1), -1 == b && (b = 0)) : b = c + (0 | a.specifiedYEnd.index || 1);
          break;
        case o:
          b = c + 1
        }
        return c >= b && (b = c + 1), a.yEnd = b
      },
      findXLine: function (a, b, c, d) {
        if (b = 0 | b, c = 0 | c, !a) return b + c < this.xLines.length ? b + c : this.xLines.length;
        for (var e = -1, f = b; f < this.xLines.length; f++)
          if (this.xLines[f].indexOf(a) >= 0 || !d && this.xLines[f].indexOf("*") >= 0) {
            if (!(c > 0)) return f;
            e = f, c--
          }
        return d || (console.warn("[CSS-GRID] Missing " + (c + 1) + ' lines named "' + a + '" after line ' + b + "."), e = this.xLines.length + c + 1, this.ensureRows(e)), e
      },
      findYLine: function (a, b, c, d) {
        if (b = 0 | b, c = 0 | c, !a) return b + c < this.yLines.length ? b + c : this.yLines.length;
        for (var e = -1, f = b; f < this.yLines.length; f++)
          if (this.yLines[f].indexOf(a) >= 0 || !d && this.yLines[f].indexOf("*") >= 0) {
            if (!(c > 0)) return f;
            e = f, c--
          }
        return d || (console.warn("[CSS-GRID] Missing " + (c + 1) + ' lines named "' + a + '" after line ' + b + "."), e = this.yLines.length + c + 1, this.ensureColumns(e)), e
      }
    };
    var C = {
      LOCATE_LINE: p,
      LOCATE_SPAN: q,
      LOCATE_AREA: r,
      LOCATE_AUTO: o,
      ALIGN_START: s,
      ALIGN_CENTER: t,
      ALIGN_END: u,
      ALIGN_FIT: v,
      TRACK_BREADTH_AUTO: w,
      TRACK_BREADTH_LENGTH: x,
      TRACK_BREADTH_FRACTION: y,
      TRACK_BREADTH_PERCENTAGE: z,
      TRACK_BREADTH_MIN_CONTENT: A,
      TRACK_BREADTH_MAX_CONTENT: B,
      GridLayout: e,
      GridItem: d,
      GridItemPosition: c,
      GridTrackBreadth: a
    };
    return C
  }(window, document), b.define("css-grid/lib/grid-layout.js"), ! function (a, c) {
    if ("gridRow" in c.body.style) return void console.warn("Polyfill skipped");
    b("../core/polyfill-dom-console.js");
    var d = b("../core/css-cascade.js"),
      e = b("css-grid/lib/grid-layout.js"),
      f = !1,
      g = function () {
        if (!f) {
          f = !0;
          for (var b = ["grid", "grid-template", "grid-template-rows", "grid-template-columns", "grid-template-areas", "grid-areas", "grid-auto-flow"], g = ["grid-area", "grid-row", "grid-column", "grid-row-start", "grid-row-end", "grid-column-start", "grid-column-end", "order"], h = b.length; h--;) d.polyfillStyleInterface(b[h]);
          for (var h = g.length; h--;) d.polyfillStyleInterface(g[h]);
          d.startMonitoringProperties(b, {
            onupdate: function (b, d) {
              if (cssConsole.dir({
                  message: "onupdate",
                  element: b,
                  selector: d.selector.toCSSString(),
                  rule: d
                }), b.gridLayout) b.gridLayout.scheduleRelayout();
              else {
                b.gridLayout = new e.GridLayout(b), b.gridLayout.scheduleRelayout(), "MutationObserver" in a ? (void
                  function () {
                    var a = new MutationObserver(function () {
                        b.gridLayout.scheduleRelayout()
                      }),
                      d = c.documentElement,
                      e = {
                        subtree: !0,
                        attributes: !1,
                        childList: !0,
                        characterData: !0
                      };
                    a.observe(d, e)
                  }(), void
                  function () {
                    new MutationObserver(function () {
                      b.gridLayout.scheduleRelayout()
                    })
                  }()) : "MutationEvent" in a && b.addEventListener("DOMSubtreeModified", function () {
                  b.gridLayout.isLayoutScheduled || b.gridLayout.scheduleRelayout()
                }, !0);
                var f = b.offsetWidth,
                  g = b.offsetHeight,
                  h = function () {
                    b.gridLayout && ((f != b.offsetWidth || g != b.offsetHeight) && (f = b.offsetWidth, g = b.offsetHeight, b.gridLayout.scheduleRelayout()), requestAnimationFrame(h))
                  };
                requestAnimationFrame(h), a.addEventListener("load", function () {
                  b.gridLayout && b.gridLayout.scheduleRelayout()
                });
                for (var i = b.querySelectorAll("img"), j = i.length; j--;) i[j].addEventListener("load", function () {
                  b.gridLayout && b.gridLayout.scheduleRelayout()
                })
              }
            }
          }), d.startMonitoringProperties(g, {
            onupdate: function (a, b) {
              cssConsole.dir({
                message: "onupdate",
                element: a,
                selector: b.selector.toCSSString(),
                rule: b
              }), a.parentGridLayout && a.parentGridLayout.scheduleRelayout()
            }
          })
        }
      };
    e.enablePolyfill = g;
    try {
      "no_auto_css_grid" in a || g()
    } catch (h) {
      setImmediate(function () {
        throw h
      })
    }
    return e
  }(window, document), b.define(" css-grid/polyfill.js"), b("css-grid/polyfill.js"), b.define("requirements.js"), window.cssPolyfills = {
    require: b
  }
}();
//# sourceMappingURL=css-polyfills.min.js.map