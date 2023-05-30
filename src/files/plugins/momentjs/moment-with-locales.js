!function(e, t) {

    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function () {
    "use strict";
    var e, t;

    function n() {
        return e.apply(null, arguments)
    }

    function s(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }

    function i(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function a(e) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e) if (r(e, t)) return !1;
        return !0
    }

    function o(e) {
        return void 0 === e
    }

    function u(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }

    function l(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function d(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s
    }

    function h(e, t) {
        for (var n in t) r(t, n) && (e[n] = t[n]);
        return r(t, "toString") && (e.toString = t.toString), r(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function c(e, t, n, s) {
        return xt(e, t, n, s, !0).utc()
    }

    function f(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }

    function _(e) {
        if (null == e._isValid) {
            var n = f(e), s = t.call(n.parsedDateParts, function (e) {
                    return null != e
                }),
                i = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidEra && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && s);
            if (e._strict && (i = i && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
            e._isValid = i
        }
        return e._isValid
    }

    function m(e) {
        var t = c(NaN);
        return null != e ? h(f(t), e) : f(t).userInvalidated = !0, t
    }

    t = Array.prototype.some ? Array.prototype.some : function (e) {
        var t, n = Object(this), s = n.length >>> 0;
        for (t = 0; t < s; t++) if (t in n && e.call(this, n[t], t, n)) return !0;
        return !1
    };
    var y = n.momentProperties = [], g = !1;

    function w(e, t) {
        var n, s, i;
        if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = f(t)), o(t._locale) || (e._locale = t._locale), y.length > 0) for (n = 0; n < y.length; n++) o(i = t[s = y[n]]) || (e[s] = i);
        return e
    }

    function p(e) {
        w(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === g && (g = !0, n.updateOffset(this), g = !1)
    }

    function v(e) {
        return e instanceof p || null != e && null != e._isAMomentObject
    }

    function M(e) {
        !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function k(e, t) {
        var s = !0;
        return h(function () {
            if (null != n.deprecationHandler && n.deprecationHandler(null, e), s) {
                var i, a, o, u = [];
                for (a = 0; a < arguments.length; a++) {
                    if (i = "", "object" == typeof arguments[a]) {
                        for (o in i += "\n[" + a + "] ", arguments[0]) r(arguments[0], o) && (i += o + ": " + arguments[0][o] + ", ");
                        i = i.slice(0, -2)
                    } else i = arguments[a];
                    u.push(i)
                }
                M(e + "\nArguments: " + Array.prototype.slice.call(u).join("") + "\n" + (new Error).stack), s = !1
            }
            return t.apply(this, arguments)
        }, t)
    }

    var Y, D = {};

    function S(e, t) {
        null != n.deprecationHandler && n.deprecationHandler(e, t), D[e] || (M(t), D[e] = !0)
    }

    function O(e) {
        return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function b(e, t) {
        var n, s = h({}, e);
        for (n in t) r(t, n) && (i(e[n]) && i(t[n]) ? (s[n] = {}, h(s[n], e[n]), h(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e) r(e, n) && !r(t, n) && i(e[n]) && (s[n] = h({}, s[n]));
        return s
    }

    function T(e) {
        null != e && this.set(e)
    }

    n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, Y = Object.keys ? Object.keys : function (e) {
        var t, n = [];
        for (t in e) r(e, t) && n.push(t);
        return n
    };

    function x(e, t, n) {
        var s = "" + Math.abs(e), i = t - s.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
    }

    var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        L = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, P = {}, R = {};

    function W(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function () {
            return this[s]()
        }), e && (R[e] = i), t && (R[t[0]] = function () {
            return x(i.apply(this, arguments), t[1], t[2])
        }), n && (R[n] = function () {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        })
    }

    function C(e, t) {
        return e.isValid() ? (t = H(t, e.localeData()), P[t] = P[t] || function (e) {
            var t, n, s, i = e.match(N);
            for (t = 0, n = i.length; t < n; t++) R[i[t]] ? i[t] = R[i[t]] : i[t] = (s = i[t]).match(/\[[\s\S]/) ? s.replace(/^\[|\]$/g, "") : s.replace(/\\/g, "");
            return function (t) {
                var s, r = "";
                for (s = 0; s < n; s++) r += O(i[s]) ? i[s].call(t, e) : i[s];
                return r
            }
        }(t), P[t](e)) : e.localeData().invalidDate()
    }

    function H(e, t) {
        var n = 5;

        function s(e) {
            return t.longDateFormat(e) || e
        }

        for (L.lastIndex = 0; n >= 0 && L.test(e);) e = e.replace(L, s), L.lastIndex = 0, n -= 1;
        return e
    }

    var F = {};

    function U(e, t) {
        var n = e.toLowerCase();
        F[n] = F[n + "s"] = F[t] = e
    }

    function V(e) {
        return "string" == typeof e ? F[e] || F[e.toLowerCase()] : void 0
    }

    function E(e) {
        var t, n, s = {};
        for (n in e) r(e, n) && (t = V(n)) && (s[t] = e[n]);
        return s
    }

    var G = {};

    function A(e, t) {
        G[e] = t
    }

    function I(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }

    function j(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function z(e) {
        var t = +e, n = 0;
        return 0 !== t && isFinite(t) && (n = j(t)), n
    }

    function Z(e, t) {
        return function (s) {
            return null != s ? ($(this, e, s), n.updateOffset(this, t), this) : q(this, e)
        }
    }

    function q(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }

    function $(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && I(e.year()) && 1 === e.month() && 29 === e.date() ? (n = z(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), xe(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }

    var J, B = /\d/, Q = /\d\d/, X = /\d{3}/, K = /\d{4}/, ee = /[+-]?\d{6}/, te = /\d\d?/, ne = /\d\d\d\d?/,
        se = /\d\d\d\d\d\d?/, ie = /\d{1,3}/, re = /\d{1,4}/, ae = /[+-]?\d{1,6}/, oe = /\d+/, ue = /[+-]?\d+/,
        le = /Z|[+-]\d\d:?\d\d/gi, de = /Z|[+-]\d\d(?::?\d\d)?/gi,
        he = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    function ce(e, t, n) {
        J[e] = O(t) ? t : function (e, s) {
            return e && n ? n : t
        }
    }

    function fe(e, t) {
        return r(J, e) ? J[e](t._strict, t._locale) : new RegExp(_e(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
            return t || n || s || i
        })))
    }

    function _e(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    J = {};
    var me = {};

    function ye(e, t) {
        var n, s = t;
        for ("string" == typeof e && (e = [e]), u(t) && (s = function (e, n) {
            n[t] = z(e)
        }), n = 0; n < e.length; n++) me[e[n]] = s
    }

    function ge(e, t) {
        ye(e, function (e, n, s, i) {
            s._w = s._w || {}, t(e, s._w, s, i)
        })
    }

    function we(e, t, n) {
        null != t && r(me, e) && me[e](t, n._a, n, e)
    }

    var pe, ve = 0, Me = 1, ke = 2, Ye = 3, De = 4, Se = 5, Oe = 6, be = 7, Te = 8;

    function xe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n, s = (t % (n = 12) + n) % n;
        return e += (t - s) / 12, 1 === s ? I(e) ? 29 : 28 : 31 - s % 7 % 2
    }

    pe = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1
    }, W("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), W("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e)
    }), W("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e)
    }), U("month", "M"), A("month", 8), ce("M", te), ce("MM", te, Q), ce("MMM", function (e, t) {
        return t.monthsShortRegex(e)
    }), ce("MMMM", function (e, t) {
        return t.monthsRegex(e)
    }), ye(["M", "MM"], function (e, t) {
        t[Me] = z(e) - 1
    }), ye(["MMM", "MMMM"], function (e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[Me] = i : f(n).invalidMonth = e
    });
    var Ne = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Le = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Re = he, We = he;

    function Ce(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t) if (/^\d+$/.test(t)) t = z(t); else if (!u(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), xe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
    }

    function He(e) {
        return null != e ? (Ce(this, e), n.updateOffset(this, !0), this) : q(this, "Month")
    }

    function Fe() {
        function e(e, t) {
            return t.length - e.length
        }

        var t, n, s = [], i = [], r = [];
        for (t = 0; t < 12; t++) n = c([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
        for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = _e(s[t]), i[t] = _e(i[t]);
        for (t = 0; t < 24; t++) r[t] = _e(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }

    function Ue(e) {
        return I(e) ? 366 : 365
    }

    W("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? x(e, 4) : "+" + e
    }), W(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), U("year", "y"), A("year", 1), ce("Y", ue), ce("YY", te, Q), ce("YYYY", re, K), ce("YYYYY", ae, ee), ce("YYYYYY", ae, ee), ye(["YYYYY", "YYYYYY"], ve), ye("YYYY", function (e, t) {
        t[ve] = 2 === e.length ? n.parseTwoDigitYear(e) : z(e)
    }), ye("YY", function (e, t) {
        t[ve] = n.parseTwoDigitYear(e)
    }), ye("Y", function (e, t) {
        t[ve] = parseInt(e, 10)
    }), n.parseTwoDigitYear = function (e) {
        return z(e) + (z(e) > 68 ? 1900 : 2e3)
    };
    var Ve = Z("FullYear", !0);

    function Ee(e) {
        var t, n;
        return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
    }

    function Ge(e, t, n) {
        var s = 7 + t - n;
        return -((7 + Ee(e, 0, s).getUTCDay() - t) % 7) + s - 1
    }

    function Ae(e, t, n, s, i) {
        var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ge(e, s, i);
        return o <= 0 ? a = Ue(r = e - 1) + o : o > Ue(e) ? (r = e + 1, a = o - Ue(e)) : (r = e, a = o), {
            year: r,
            dayOfYear: a
        }
    }

    function Ie(e, t, n) {
        var s, i, r = Ge(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + je(i = e.year() - 1, t, n) : a > je(e.year(), t, n) ? (s = a - je(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), {
            week: s,
            year: i
        }
    }

    function je(e, t, n) {
        var s = Ge(e, t, n), i = Ge(e + 1, t, n);
        return (Ue(e) - s + i) / 7
    }

    W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), U("week", "w"), U("isoWeek", "W"), A("week", 5), A("isoWeek", 5), ce("w", te), ce("ww", te, Q), ce("W", te), ce("WW", te, Q), ge(["w", "ww", "W", "WW"], function (e, t, n, s) {
        t[s.substr(0, 1)] = z(e)
    });

    function ze(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }

    W("d", 0, "do", "day"), W("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e)
    }), W("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e)
    }), W("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e)
    }), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), U("day", "d"), U("weekday", "e"), U("isoWeekday", "E"), A("day", 11), A("weekday", 11), A("isoWeekday", 11), ce("d", te), ce("e", te), ce("E", te), ce("dd", function (e, t) {
        return t.weekdaysMinRegex(e)
    }), ce("ddd", function (e, t) {
        return t.weekdaysShortRegex(e)
    }), ce("dddd", function (e, t) {
        return t.weekdaysRegex(e)
    }), ge(["dd", "ddd", "dddd"], function (e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i : f(n).invalidWeekday = e
    }), ge(["d", "e", "E"], function (e, t, n, s) {
        t[s] = z(e)
    });
    var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Je = he, Be = he,
        Qe = he;

    function Xe() {
        function e(e, t) {
            return t.length - e.length
        }

        var t, n, s, i, r, a = [], o = [], u = [], l = [];
        for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), s = _e(this.weekdaysMin(n, "")), i = _e(this.weekdaysShort(n, "")), r = _e(this.weekdays(n, "")), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r);
        a.sort(e), o.sort(e), u.sort(e), l.sort(e), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }

    function Ke() {
        return this.hours() % 12 || 12
    }

    function et(e, t) {
        W(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function tt(e, t) {
        return t._meridiemParse
    }

    W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, Ke), W("k", ["kk", 2], 0, function () {
        return this.hours() || 24
    }), W("hmm", 0, 0, function () {
        return "" + Ke.apply(this) + x(this.minutes(), 2)
    }), W("hmmss", 0, 0, function () {
        return "" + Ke.apply(this) + x(this.minutes(), 2) + x(this.seconds(), 2)
    }), W("Hmm", 0, 0, function () {
        return "" + this.hours() + x(this.minutes(), 2)
    }), W("Hmmss", 0, 0, function () {
        return "" + this.hours() + x(this.minutes(), 2) + x(this.seconds(), 2)
    }), et("a", !0), et("A", !1), U("hour", "h"), A("hour", 13), ce("a", tt), ce("A", tt), ce("H", te), ce("h", te), ce("k", te), ce("HH", te, Q), ce("hh", te, Q), ce("kk", te, Q), ce("hmm", ne), ce("hmmss", se), ce("Hmm", ne), ce("Hmmss", se), ye(["H", "HH"], Ye), ye(["k", "kk"], function (e, t, n) {
        var s = z(e);
        t[Ye] = 24 === s ? 0 : s
    }), ye(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), ye(["h", "hh"], function (e, t, n) {
        t[Ye] = z(e), f(n).bigHour = !0
    }), ye("hmm", function (e, t, n) {
        var s = e.length - 2;
        t[Ye] = z(e.substr(0, s)), t[De] = z(e.substr(s)), f(n).bigHour = !0
    }), ye("hmmss", function (e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[Ye] = z(e.substr(0, s)), t[De] = z(e.substr(s, 2)), t[Se] = z(e.substr(i)), f(n).bigHour = !0
    }), ye("Hmm", function (e, t, n) {
        var s = e.length - 2;
        t[Ye] = z(e.substr(0, s)), t[De] = z(e.substr(s))
    }), ye("Hmmss", function (e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[Ye] = z(e.substr(0, s)), t[De] = z(e.substr(s, 2)), t[Se] = z(e.substr(i))
    });
    var nt = Z("Hours", !0);
    var st, it = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Ne,
        monthsShort: Le,
        week: {dow: 0, doy: 6},
        weekdays: Ze,
        weekdaysMin: $e,
        weekdaysShort: qe,
        meridiemParse: /[ap]\.?m?\.?/i
    }, rt = {}, at = {};

    function ot(e, t) {
        var n, s = Math.min(e.length, t.length);
        for (n = 0; n < s; n += 1) if (e[n] !== t[n]) return n;
        return s
    }

    function ut(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function lt(e) {
        var t = null;
        if (void 0 === rt[e] && "undefined" != typeof module && module && module.exports) try {
            t = st._abbr, require("./locale/" + e), dt(t)
        } catch (t) {
            rt[e] = null
        }
        return rt[e]
    }

    function dt(e, t) {
        var n;
        return e && ((n = o(t) ? ct(e) : ht(e, t)) ? st = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), st._abbr
    }

    function ht(e, t) {
        if (null !== t) {
            var n, s = it;
            if (t.abbr = e, null != rt[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = rt[e]._config; else if (null != t.parentLocale) if (null != rt[t.parentLocale]) s = rt[t.parentLocale]._config; else {
                if (null == (n = lt(t.parentLocale))) return at[t.parentLocale] || (at[t.parentLocale] = []), at[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                s = n._config
            }
            return rt[e] = new T(b(s, t)), at[e] && at[e].forEach(function (e) {
                ht(e.name, e.config)
            }), dt(e), rt[e]
        }
        return delete rt[e], null
    }

    function ct(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return st;
        if (!s(e)) {
            if (t = lt(e)) return t;
            e = [e]
        }
        return function (e) {
            for (var t, n, s, i, r = 0; r < e.length;) {
                for (t = (i = ut(e[r]).split("-")).length, n = (n = ut(e[r + 1])) ? n.split("-") : null; t > 0;) {
                    if (s = lt(i.slice(0, t).join("-"))) return s;
                    if (n && n.length >= t && ot(i, n) >= t - 1) break;
                    t--
                }
                r++
            }
            return st
        }(e)
    }

    function ft(e) {
        var t, n = e._a;
        return n && -2 === f(e).overflow && (t = n[Me] < 0 || n[Me] > 11 ? Me : n[ke] < 1 || n[ke] > xe(n[ve], n[Me]) ? ke : n[Ye] < 0 || n[Ye] > 24 || 24 === n[Ye] && (0 !== n[De] || 0 !== n[Se] || 0 !== n[Oe]) ? Ye : n[De] < 0 || n[De] > 59 ? De : n[Se] < 0 || n[Se] > 59 ? Se : n[Oe] < 0 || n[Oe] > 999 ? Oe : -1, f(e)._overflowDayOfYear && (t < ve || t > ke) && (t = ke), f(e)._overflowWeeks && -1 === t && (t = be), f(e)._overflowWeekday && -1 === t && (t = Te), f(e).overflow = t), e
    }

    var _t = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        yt = /Z|[+-]\d\d(?::?\d\d)?/,
        gt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]],
        wt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        pt = /^\/?Date\((-?\d+)/i,
        vt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Mt = {UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480};

    function kt(e) {
        var t, n, s, i, r, a, o = e._i, u = _t.exec(o) || mt.exec(o);
        if (u) {
            for (f(e).iso = !0, t = 0, n = gt.length; t < n; t++) if (gt[t][1].exec(u[1])) {
                i = gt[t][0], s = !1 !== gt[t][2];
                break
            }
            if (null == i) return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0, n = wt.length; t < n; t++) if (wt[t][1].exec(u[3])) {
                    r = (u[2] || " ") + wt[t][0];
                    break
                }
                if (null == r) return void (e._isValid = !1)
            }
            if (!s && null != r) return void (e._isValid = !1);
            if (u[4]) {
                if (!yt.exec(u[4])) return void (e._isValid = !1);
                a = "Z"
            }
            e._f = i + (r || "") + (a || ""), bt(e)
        } else e._isValid = !1
    }

    function Yt(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
    }

    function Dt(e) {
        var t, n, s, i, r, a, o, u,
            l = vt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (l) {
            if (n = l[4], s = l[3], i = l[2], r = l[5], a = l[6], o = l[7], u = [Yt(n), Le.indexOf(s), parseInt(i, 10), parseInt(r, 10), parseInt(a, 10)], o && u.push(parseInt(o, 10)), t = u, !function (e, t, n) {
                return !e || qe.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (f(n).weekdayMismatch = !0, n._isValid = !1, !1)
            }(l[1], t, e)) return;
            e._a = t, e._tzm = function (e, t, n) {
                if (e) return Mt[e];
                if (t) return 0;
                var s = parseInt(n, 10), i = s % 100;
                return (s - i) / 100 * 60 + i
            }(l[8], l[9], l[10]), e._d = Ee.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function St(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function Ot(e) {
        var t, s, i, r, a, o = [];
        if (!e._d) {
            for (i = function (e) {
                var t = new Date(n.now());
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }(e), e._w && null == e._a[ke] && null == e._a[Me] && function (e) {
                var t, n, s, i, r, a, o, u, l;
                null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1, a = 4, n = St(t.GG, e._a[ve], Ie(Nt(), 1, 4).year), s = St(t.W, 1), ((i = St(t.E, 1)) < 1 || i > 7) && (u = !0)) : (r = e._locale._week.dow, a = e._locale._week.doy, l = Ie(Nt(), r, a), n = St(t.gg, e._a[ve], l.year), s = St(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (u = !0)) : i = r);
                s < 1 || s > je(n, r, a) ? f(e)._overflowWeeks = !0 : null != u ? f(e)._overflowWeekday = !0 : (o = Ae(n, s, i, r, a), e._a[ve] = o.year, e._dayOfYear = o.dayOfYear)
            }(e), null != e._dayOfYear && (a = St(e._a[ve], i[ve]), (e._dayOfYear > Ue(a) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), s = Ee(a, 0, e._dayOfYear), e._a[Me] = s.getUTCMonth(), e._a[ke] = s.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = i[t];
            for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[Ye] && 0 === e._a[De] && 0 === e._a[Se] && 0 === e._a[Oe] && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? Ee : function (e, t, n, s, i, r, a) {
                var o;
                return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a), o
            }).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (f(e).weekdayMismatch = !0)
        }
    }

    function bt(e) {
        if (e._f !== n.ISO_8601) if (e._f !== n.RFC_2822) {
            e._a = [], f(e).empty = !0;
            var t, s, i, r, a, o, u = "" + e._i, l = u.length, d = 0;
            for (i = H(e._f, e._locale).match(N) || [], t = 0; t < i.length; t++) r = i[t], (s = (u.match(fe(r, e)) || [])[0]) && ((a = u.substr(0, u.indexOf(s))).length > 0 && f(e).unusedInput.push(a), u = u.slice(u.indexOf(s) + s.length), d += s.length), R[r] ? (s ? f(e).empty = !1 : f(e).unusedTokens.push(r), we(r, s, e)) : e._strict && !s && f(e).unusedTokens.push(r);
            f(e).charsLeftOver = l - d, u.length > 0 && f(e).unusedInput.push(u), e._a[Ye] <= 12 && !0 === f(e).bigHour && e._a[Ye] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[Ye] = function (e, t, n) {
                var s;
                if (null == n) return t;
                return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0), t) : t
            }(e._locale, e._a[Ye], e._meridiem), null !== (o = f(e).era) && (e._a[ve] = e._locale.erasConvertYear(o, e._a[ve])), Ot(e), ft(e)
        } else Dt(e); else kt(e)
    }

    function Tt(e) {
        var t = e._i, r = e._f;
        return e._locale = e._locale || ct(e._l), null === t || void 0 === r && "" === t ? m({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new p(ft(t)) : (l(t) ? e._d = t : s(r) ? function (e) {
            var t, n, s, i, r, a, o = !1;
            if (0 === e._f.length) return f(e).invalidFormat = !0, void (e._d = new Date(NaN));
            for (i = 0; i < e._f.length; i++) r = 0, a = !1, t = w({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], bt(t), _(t) && (a = !0), r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, o ? r < s && (s = r, n = t) : (null == s || r < s || a) && (s = r, n = t, a && (o = !0));
            h(e, n || t)
        }(e) : r ? bt(e) : function (e) {
            var t = e._i;
            o(t) ? e._d = new Date(n.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function (e) {
                var t = pt.exec(e._i);
                null === t ? (kt(e), !1 === e._isValid && (delete e._isValid, Dt(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : n.createFromInputFallback(e)))) : e._d = new Date(+t[1])
            }(e) : s(t) ? (e._a = d(t.slice(0), function (e) {
                return parseInt(e, 10)
            }), Ot(e)) : i(t) ? function (e) {
                if (!e._d) {
                    var t = E(e._i), n = void 0 === t.day ? t.date : t.day;
                    e._a = d([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function (e) {
                        return e && parseInt(e, 10)
                    }), Ot(e)
                }
            }(e) : u(t) ? e._d = new Date(t) : n.createFromInputFallback(e)
        }(e), _(e) || (e._d = null), e))
    }

    function xt(e, t, n, r, o) {
        var u, l = {};
        return !0 !== t && !1 !== t || (r = t, t = void 0), !0 !== n && !1 !== n || (r = n, n = void 0), (i(e) && a(e) || s(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = n, l._i = e, l._f = t, l._strict = r, (u = new p(ft(Tt(l))))._nextDay && (u.add(1, "d"), u._nextDay = void 0), u
    }

    function Nt(e, t, n, s) {
        return xt(e, t, n, s, !1)
    }

    n.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), n.ISO_8601 = function () {
    }, n.RFC_2822 = function () {
    };
    var Lt = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = Nt.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : m()
        }),
        Pt = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var e = Nt.apply(null, arguments);
            return this.isValid() && e.isValid() ? e > this ? this : e : m()
        });

    function Rt(e, t) {
        var n, i;
        if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return Nt();
        for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
        return n
    }

    var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ct(e) {
        var t = E(e), n = t.year || 0, s = t.quarter || 0, i = t.month || 0, a = t.week || t.isoWeek || 0,
            o = t.day || 0, u = t.hour || 0, l = t.minute || 0, d = t.second || 0, h = t.millisecond || 0;
        this._isValid = function (e) {
            var t, n, s = !1;
            for (t in e) if (r(e, t) && (-1 === pe.call(Wt, t) || null != e[t] && isNaN(e[t]))) return !1;
            for (n = 0; n < Wt.length; ++n) if (e[Wt[n]]) {
                if (s) return !1;
                parseFloat(e[Wt[n]]) !== z(e[Wt[n]]) && (s = !0)
            }
            return !0
        }(t), this._milliseconds = +h + 1e3 * d + 6e4 * l + 1e3 * u * 60 * 60, this._days = +o + 7 * a, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = ct(), this._bubble()
    }

    function Ht(e) {
        return e instanceof Ct
    }

    function Ft(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }

    function Ut(e, t) {
        W(e, 0, 0, function () {
            var e = this.utcOffset(), n = "+";
            return e < 0 && (e = -e, n = "-"), n + x(~~(e / 60), 2) + t + x(~~e % 60, 2)
        })
    }

    Ut("Z", ":"), Ut("ZZ", ""), ce("Z", de), ce("ZZ", de), ye(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = !0, n._tzm = Et(de, e)
    });
    var Vt = /([\+\-]|\d\d)/gi;

    function Et(e, t) {
        var n, s, i = (t || "").match(e);
        return null === i ? null : 0 === (s = 60 * (n = ((i[i.length - 1] || []) + "").match(Vt) || ["-", 0, 0])[1] + z(n[2])) ? 0 : "+" === n[0] ? s : -s
    }

    function Gt(e, t) {
        var s, i;
        return t._isUTC ? (s = t.clone(), i = (v(e) || l(e) ? e.valueOf() : Nt(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + i), n.updateOffset(s, !1), s) : Nt(e).local()
    }

    function At(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }

    function It() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    n.updateOffset = function () {
    };
    var jt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        zt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function Zt(e, t) {
        var n, s, i, a = e, o = null;
        return Ht(e) ? a = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : u(e) || !isNaN(+e) ? (a = {}, t ? a[t] = +e : a.milliseconds = +e) : (o = jt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, a = {
            y: 0,
            d: z(o[ke]) * n,
            h: z(o[Ye]) * n,
            m: z(o[De]) * n,
            s: z(o[Se]) * n,
            ms: z(Ft(1e3 * o[Oe])) * n
        }) : (o = zt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, a = {
            y: qt(o[2], n),
            M: qt(o[3], n),
            w: qt(o[4], n),
            d: qt(o[5], n),
            h: qt(o[6], n),
            m: qt(o[7], n),
            s: qt(o[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (i = function (e, t) {
            var n;
            if (!e.isValid() || !t.isValid()) return {milliseconds: 0, months: 0};
            t = Gt(t, e), e.isBefore(t) ? n = $t(e, t) : ((n = $t(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
        }(Nt(a.from), Nt(a.to)), (a = {}).ms = i.milliseconds, a.M = i.months), s = new Ct(a), Ht(e) && r(e, "_locale") && (s._locale = e._locale), Ht(e) && r(e, "_isValid") && (s._isValid = e._isValid), s
    }

    function qt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }

    function $t(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function Jt(e, t) {
        return function (n, s) {
            var i;
            return null === s || isNaN(+s) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = s, s = i), Bt(this, Zt(n, s), e), this
        }
    }

    function Bt(e, t, s, i) {
        var r = t._milliseconds, a = Ft(t._days), o = Ft(t._months);
        e.isValid() && (i = null == i || i, o && Ce(e, q(e, "Month") + o * s), a && $(e, "Date", q(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), i && n.updateOffset(e, a || o))
    }

    Zt.fn = Ct.prototype, Zt.invalid = function () {
        return Zt(NaN)
    };
    var Qt = Jt(1, "add"), Xt = Jt(-1, "subtract");

    function Kt(e) {
        return "string" == typeof e || e instanceof String
    }

    function en(e) {
        return v(e) || l(e) || Kt(e) || u(e) || function (e) {
            var t = s(e), n = !1;
            t && (n = 0 === e.filter(function (t) {
                return !u(t) && Kt(e)
            }).length);
            return t && n
        }(e) || function (e) {
            var t, n, s = i(e) && !a(e), o = !1,
                u = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
            for (t = 0; t < u.length; t += 1) n = u[t], o = o || r(e, n);
            return s && o
        }(e) || null == e
    }

    function tn(e, t) {
        if (e.date() < t.date()) return -tn(t, e);
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), s = e.clone().add(n, "months");
        return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
    }

    function nn(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = ct(e)) && (this._locale = t), this)
    }

    n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var sn = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });

    function rn() {
        return this._locale
    }

    var an = 1e3, on = 60 * an, un = 60 * on, ln = 3506328 * un;

    function dn(e, t) {
        return (e % t + t) % t
    }

    function hn(e, t, n) {
        return e < 100 && e >= 0 ? new Date(e + 400, t, n) - ln : new Date(e, t, n).valueOf()
    }

    function cn(e, t, n) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - ln : Date.UTC(e, t, n)
    }

    function fn(e, t) {
        return t.erasAbbrRegex(e)
    }

    function _n() {
        var e, t, n = [], s = [], i = [], r = [], a = this.eras();
        for (e = 0, t = a.length; e < t; ++e) s.push(_e(a[e].name)), n.push(_e(a[e].abbr)), i.push(_e(a[e].narrow)), r.push(_e(a[e].name)), r.push(_e(a[e].abbr)), r.push(_e(a[e].narrow));
        this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function mn(e, t) {
        W(0, [e, e.length], 0, t)
    }

    function yn(e, t, n, s, i) {
        var r;
        return null == e ? Ie(this, s, i).year : (t > (r = je(e, s, i)) && (t = r), function (e, t, n, s, i) {
            var r = Ae(e, t, n, s, i), a = Ee(r.year, 0, r.dayOfYear);
            return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
        }.call(this, e, t, n, s, i))
    }

    W("N", 0, 0, "eraAbbr"), W("NN", 0, 0, "eraAbbr"), W("NNN", 0, 0, "eraAbbr"), W("NNNN", 0, 0, "eraName"), W("NNNNN", 0, 0, "eraNarrow"), W("y", ["y", 1], "yo", "eraYear"), W("y", ["yy", 2], 0, "eraYear"), W("y", ["yyy", 3], 0, "eraYear"), W("y", ["yyyy", 4], 0, "eraYear"), ce("N", fn), ce("NN", fn), ce("NNN", fn), ce("NNNN", function (e, t) {
        return t.erasNameRegex(e)
    }), ce("NNNNN", function (e, t) {
        return t.erasNarrowRegex(e)
    }), ye(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, s) {
        var i = n._locale.erasParse(e, s, n._strict);
        i ? f(n).era = i : f(n).invalidEra = e
    }), ce("y", oe), ce("yy", oe), ce("yyy", oe), ce("yyyy", oe), ce("yo", function (e, t) {
        return t._eraYearOrdinalRegex || oe
    }), ye(["y", "yy", "yyy", "yyyy"], ve), ye(["yo"], function (e, t, n, s) {
        var i;
        n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[ve] = n._locale.eraYearOrdinalParse(e, i) : t[ve] = parseInt(e, 10)
    }), W(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), W(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), mn("gggg", "weekYear"), mn("ggggg", "weekYear"), mn("GGGG", "isoWeekYear"), mn("GGGGG", "isoWeekYear"), U("weekYear", "gg"), U("isoWeekYear", "GG"), A("weekYear", 1), A("isoWeekYear", 1), ce("G", ue), ce("g", ue), ce("GG", te, Q), ce("gg", te, Q), ce("GGGG", re, K), ce("gggg", re, K), ce("GGGGG", ae, ee), ce("ggggg", ae, ee), ge(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
        t[s.substr(0, 2)] = z(e)
    }), ge(["gg", "GG"], function (e, t, s, i) {
        t[i] = n.parseTwoDigitYear(e)
    }), W("Q", 0, "Qo", "quarter"), U("quarter", "Q"), A("quarter", 7), ce("Q", B), ye("Q", function (e, t) {
        t[Me] = 3 * (z(e) - 1)
    }), W("D", ["DD", 2], "Do", "date"), U("date", "D"), A("date", 9), ce("D", te), ce("DD", te, Q), ce("Do", function (e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), ye(["D", "DD"], ke), ye("Do", function (e, t) {
        t[ke] = z(e.match(te)[0])
    });
    var gn = Z("Date", !0);
    W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), U("dayOfYear", "DDD"), A("dayOfYear", 4), ce("DDD", ie), ce("DDDD", X), ye(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = z(e)
    }), W("m", ["mm", 2], 0, "minute"), U("minute", "m"), A("minute", 14), ce("m", te), ce("mm", te, Q), ye(["m", "mm"], De);
    var wn = Z("Minutes", !1);
    W("s", ["ss", 2], 0, "second"), U("second", "s"), A("second", 15), ce("s", te), ce("ss", te, Q), ye(["s", "ss"], Se);
    var pn, vn, Mn = Z("Seconds", !1);
    for (W("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), W(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), W(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), W(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), W(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), W(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), W(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), U("millisecond", "ms"), A("millisecond", 16), ce("S", ie, B), ce("SS", ie, Q), ce("SSS", ie, X), pn = "SSSS"; pn.length <= 9; pn += "S") ce(pn, oe);

    function kn(e, t) {
        t[Oe] = z(1e3 * ("0." + e))
    }

    for (pn = "S"; pn.length <= 9; pn += "S") ye(pn, kn);
    vn = Z("Milliseconds", !1), W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
    var Yn = p.prototype;

    function Dn(e) {
        return e
    }

    Yn.add = Qt, Yn.calendar = function (e, t) {
        1 === arguments.length && (arguments[0] ? en(arguments[0]) ? (e = arguments[0], t = void 0) : function (e) {
            var t, n = i(e) && !a(e), s = !1, o = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
            for (t = 0; t < o.length; t += 1) s = s || r(e, o[t]);
            return n && s
        }(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
        var s = e || Nt(), o = Gt(s, this).startOf("day"), u = n.calendarFormat(this, o) || "sameElse",
            l = t && (O(t[u]) ? t[u].call(this, s) : t[u]);
        return this.format(l || this.localeData().calendar(u, this, Nt(s)))
    }, Yn.clone = function () {
        return new p(this)
    }, Yn.diff = function (e, t, n) {
        var s, i, r;
        if (!this.isValid()) return NaN;
        if (!(s = Gt(e, this)).isValid()) return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = V(t)) {
            case"year":
                r = tn(this, s) / 12;
                break;
            case"month":
                r = tn(this, s);
                break;
            case"quarter":
                r = tn(this, s) / 3;
                break;
            case"second":
                r = (this - s) / 1e3;
                break;
            case"minute":
                r = (this - s) / 6e4;
                break;
            case"hour":
                r = (this - s) / 36e5;
                break;
            case"day":
                r = (this - s - i) / 864e5;
                break;
            case"week":
                r = (this - s - i) / 6048e5;
                break;
            default:
                r = this - s
        }
        return n ? r : j(r)
    }, Yn.endOf = function (e) {
        var t, s;
        if (void 0 === (e = V(e)) || "millisecond" === e || !this.isValid()) return this;
        switch (s = this._isUTC ? cn : hn, e) {
            case"year":
                t = s(this.year() + 1, 0, 1) - 1;
                break;
            case"quarter":
                t = s(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case"month":
                t = s(this.year(), this.month() + 1, 1) - 1;
                break;
            case"week":
                t = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case"isoWeek":
                t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case"day":
            case"date":
                t = s(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case"hour":
                t = this._d.valueOf(), t += un - dn(t + (this._isUTC ? 0 : this.utcOffset() * on), un) - 1;
                break;
            case"minute":
                t = this._d.valueOf(), t += on - dn(t, on) - 1;
                break;
            case"second":
                t = this._d.valueOf(), t += an - dn(t, an) - 1
        }
        return this._d.setTime(t), n.updateOffset(this, !0), this
    }, Yn.format = function (e) {
        e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
        var t = C(this, e);
        return this.localeData().postformat(t)
    }, Yn.from = function (e, t) {
        return this.isValid() && (v(e) && e.isValid() || Nt(e).isValid()) ? Zt({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, Yn.fromNow = function (e) {
        return this.from(Nt(), e)
    }, Yn.to = function (e, t) {
        return this.isValid() && (v(e) && e.isValid() || Nt(e).isValid()) ? Zt({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, Yn.toNow = function (e) {
        return this.to(Nt(), e)
    }, Yn.get = function (e) {
        return O(this[e = V(e)]) ? this[e]() : this
    }, Yn.invalidAt = function () {
        return f(this).overflow
    }, Yn.isAfter = function (e, t) {
        var n = v(e) ? e : Nt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = V(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }, Yn.isBefore = function (e, t) {
        var n = v(e) ? e : Nt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = V(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }, Yn.isBetween = function (e, t, n, s) {
        var i = v(e) ? e : Nt(e), r = v(t) ? t : Nt(t);
        return !!(this.isValid() && i.isValid() && r.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
    }, Yn.isSame = function (e, t) {
        var n, s = v(e) ? e : Nt(e);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = V(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }, Yn.isSameOrAfter = function (e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }, Yn.isSameOrBefore = function (e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }, Yn.isValid = function () {
        return _(this)
    }, Yn.lang = sn, Yn.locale = nn, Yn.localeData = rn, Yn.max = Pt, Yn.min = Lt, Yn.parsingFlags = function () {
        return h({}, f(this))
    }, Yn.set = function (e, t) {
        if ("object" == typeof e) {
            var n, s = function (e) {
                var t, n = [];
                for (t in e) r(e, t) && n.push({unit: t, priority: G[t]});
                return n.sort(function (e, t) {
                    return e.priority - t.priority
                }), n
            }(e = E(e));
            for (n = 0; n < s.length; n++) this[s[n].unit](e[s[n].unit])
        } else if (O(this[e = V(e)])) return this[e](t);
        return this
    }, Yn.startOf = function (e) {
        var t, s;
        if (void 0 === (e = V(e)) || "millisecond" === e || !this.isValid()) return this;
        switch (s = this._isUTC ? cn : hn, e) {
            case"year":
                t = s(this.year(), 0, 1);
                break;
            case"quarter":
                t = s(this.year(), this.month() - this.month() % 3, 1);
                break;
            case"month":
                t = s(this.year(), this.month(), 1);
                break;
            case"week":
                t = s(this.year(), this.month(), this.date() - this.weekday());
                break;
            case"isoWeek":
                t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case"day":
            case"date":
                t = s(this.year(), this.month(), this.date());
                break;
            case"hour":
                t = this._d.valueOf(), t -= dn(t + (this._isUTC ? 0 : this.utcOffset() * on), un);
                break;
            case"minute":
                t = this._d.valueOf(), t -= dn(t, on);
                break;
            case"second":
                t = this._d.valueOf(), t -= dn(t, an)
        }
        return this._d.setTime(t), n.updateOffset(this, !0), this
    }, Yn.subtract = Xt, Yn.toArray = function () {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }, Yn.toObject = function () {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }, Yn.toDate = function () {
        return new Date(this.valueOf())
    }, Yn.toISOString = function (e) {
        if (!this.isValid()) return null;
        var t = !0 !== e, n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? C(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : O(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", C(n, "Z")) : C(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, Yn.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e, t, n, s = "moment", i = "";
        return this.isLocal() || (s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", i = "Z"), e = "[" + s + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = i + '[")]', this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
    }, "undefined" != typeof Symbol && null != Symbol.for && (Yn[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return "Moment<" + this.format() + ">"
    }), Yn.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
    }, Yn.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, Yn.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
    }, Yn.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, Yn.creationData = function () {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }, Yn.eraName = function () {
        var e, t, n, s = this.localeData().eras();
        for (e = 0, t = s.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until) return s[e].name;
            if (s[e].until <= n && n <= s[e].since) return s[e].name
        }
        return ""
    }, Yn.eraNarrow = function () {
        var e, t, n, s = this.localeData().eras();
        for (e = 0, t = s.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until) return s[e].narrow;
            if (s[e].until <= n && n <= s[e].since) return s[e].narrow
        }
        return ""
    }, Yn.eraAbbr = function () {
        var e, t, n, s = this.localeData().eras();
        for (e = 0, t = s.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until) return s[e].abbr;
            if (s[e].until <= n && n <= s[e].since) return s[e].abbr
        }
        return ""
    }, Yn.eraYear = function () {
        var e, t, s, i, r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) if (s = r[e].since <= r[e].until ? 1 : -1, i = this.clone().startOf("day").valueOf(), r[e].since <= i && i <= r[e].until || r[e].until <= i && i <= r[e].since) return (this.year() - n(r[e].since).year()) * s + r[e].offset;
        return this.year()
    }, Yn.year = Ve, Yn.isLeapYear = function () {
        return I(this.year())
    }, Yn.weekYear = function (e) {
        return yn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, Yn.isoWeekYear = function (e) {
        return yn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, Yn.quarter = Yn.quarters = function (e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, Yn.month = He, Yn.daysInMonth = function () {
        return xe(this.year(), this.month())
    }, Yn.week = Yn.weeks = function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }, Yn.isoWeek = Yn.isoWeeks = function (e) {
        var t = Ie(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }, Yn.weeksInYear = function () {
        var e = this.localeData()._week;
        return je(this.year(), e.dow, e.doy)
    }, Yn.weeksInWeekYear = function () {
        var e = this.localeData()._week;
        return je(this.weekYear(), e.dow, e.doy)
    }, Yn.isoWeeksInYear = function () {
        return je(this.year(), 1, 4)
    }, Yn.isoWeeksInISOWeekYear = function () {
        return je(this.isoWeekYear(), 1, 4)
    }, Yn.date = gn, Yn.day = Yn.days = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = function (e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }(e, this.localeData()), this.add(e - t, "d")) : t
    }, Yn.weekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }, Yn.isoWeekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            var t = function (e, t) {
                return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
            }(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
    }, Yn.dayOfYear = function (e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }, Yn.hour = Yn.hours = nt, Yn.minute = Yn.minutes = wn, Yn.second = Yn.seconds = Mn, Yn.millisecond = Yn.milliseconds = vn, Yn.utcOffset = function (e, t, s) {
        var i, r = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            if ("string" == typeof e) {
                if (null === (e = Et(de, e))) return this
            } else Math.abs(e) < 16 && !s && (e *= 60);
            return !this._isUTC && t && (i = At(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? Bt(this, Zt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? r : At(this)
    }, Yn.utc = function (e) {
        return this.utcOffset(0, e)
    }, Yn.local = function (e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(At(this), "m")), this
    }, Yn.parseZone = function () {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var e = Et(le, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }, Yn.hasAlignedHourOffset = function (e) {
        return !!this.isValid() && (e = e ? Nt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    }, Yn.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, Yn.isLocal = function () {
        return !!this.isValid() && !this._isUTC
    }, Yn.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC
    }, Yn.isUtc = It, Yn.isUTC = It, Yn.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }, Yn.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, Yn.dates = k("dates accessor is deprecated. Use date instead.", gn), Yn.months = k("months accessor is deprecated. Use month instead", He), Yn.years = k("years accessor is deprecated. Use year instead", Ve), Yn.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }), Yn.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var e, t = {};
        return w(t, this), (t = Tt(t))._a ? (e = t._isUTC ? c(t._a) : Nt(t._a), this._isDSTShifted = this.isValid() && function (e, t, n) {
            var s, i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0;
            for (s = 0; s < i; s++) (n && e[s] !== t[s] || !n && z(e[s]) !== z(t[s])) && a++;
            return a + r
        }(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
    });
    var Sn = T.prototype;

    function On(e, t, n, s) {
        var i = ct(), r = c().set(s, t);
        return i[n](r, e)
    }

    function bn(e, t, n) {
        if (u(e) && (t = e, e = void 0), e = e || "", null != t) return On(e, t, n, "month");
        var s, i = [];
        for (s = 0; s < 12; s++) i[s] = On(e, s, n, "month");
        return i
    }

    function Tn(e, t, n, s) {
        "boolean" == typeof e ? (u(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, u(t) && (n = t, t = void 0), t = t || "");
        var i, r = ct(), a = e ? r._week.dow : 0, o = [];
        if (null != n) return On(t, (n + a) % 7, s, "day");
        for (i = 0; i < 7; i++) o[i] = On(t, (i + a) % 7, s, "day");
        return o
    }

    Sn.calendar = function (e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return O(s) ? s.call(t, n) : s
    }, Sn.longDateFormat = function (e) {
        var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.match(N).map(function (e) {
            return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
        }).join(""), this._longDateFormat[e])
    }, Sn.invalidDate = function () {
        return this._invalidDate
    }, Sn.ordinal = function (e) {
        return this._ordinal.replace("%d", e)
    }, Sn.preparse = Dn, Sn.postformat = Dn, Sn.relativeTime = function (e, t, n, s) {
        var i = this._relativeTime[n];
        return O(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    }, Sn.pastFuture = function (e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return O(n) ? n(t) : n.replace(/%s/i, t)
    }, Sn.set = function (e) {
        var t, n;
        for (n in e) r(e, n) && (O(t = e[n]) ? this[n] = t : this["_" + n] = t);
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, Sn.eras = function (e, t) {
        var s, i, r, a = this._eras || ct("en")._eras;
        for (s = 0, i = a.length; s < i; ++s) {
            switch (typeof a[s].since) {
                case"string":
                    r = n(a[s].since).startOf("day"), a[s].since = r.valueOf()
            }
            switch (typeof a[s].until) {
                case"undefined":
                    a[s].until = 1 / 0;
                    break;
                case"string":
                    r = n(a[s].until).startOf("day").valueOf(), a[s].until = r.valueOf()
            }
        }
        return a
    }, Sn.erasParse = function (e, t, n) {
        var s, i, r, a, o, u = this.eras();
        for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s) if (r = u[s].name.toUpperCase(), a = u[s].abbr.toUpperCase(), o = u[s].narrow.toUpperCase(), n) switch (t) {
            case"N":
            case"NN":
            case"NNN":
                if (a === e) return u[s];
                break;
            case"NNNN":
                if (r === e) return u[s];
                break;
            case"NNNNN":
                if (o === e) return u[s]
        } else if ([r, a, o].indexOf(e) >= 0) return u[s]
    }, Sn.erasConvertYear = function (e, t) {
        var s = e.since <= e.until ? 1 : -1;
        return void 0 === t ? n(e.since).year() : n(e.since).year() + (t - e.offset) * s
    }, Sn.erasAbbrRegex = function (e) {
        return r(this, "_erasAbbrRegex") || _n.call(this), e ? this._erasAbbrRegex : this._erasRegex
    }, Sn.erasNameRegex = function (e) {
        return r(this, "_erasNameRegex") || _n.call(this), e ? this._erasNameRegex : this._erasRegex
    }, Sn.erasNarrowRegex = function (e) {
        return r(this, "_erasNarrowRegex") || _n.call(this), e ? this._erasNarrowRegex : this._erasRegex
    }, Sn.months = function (e, t) {
        return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Pe).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
    }, Sn.monthsShort = function (e, t) {
        return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Pe.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, Sn.monthsParse = function (e, t, n) {
        var s, i, r;
        if (this._monthsParseExact) return function (e, t, n) {
            var s, i, r, a = e.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = c([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (i = pe.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = pe.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = pe.call(this._shortMonthsParse, a)) ? i : -1 !== (i = pe.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = pe.call(this._longMonthsParse, a)) ? i : -1 !== (i = pe.call(this._shortMonthsParse, a)) ? i : null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
            if (i = c([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s
        }
    }, Sn.monthsRegex = function (e) {
        return this._monthsParseExact ? (r(this, "_monthsRegex") || Fe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (r(this, "_monthsRegex") || (this._monthsRegex = We), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }, Sn.monthsShortRegex = function (e) {
        return this._monthsParseExact ? (r(this, "_monthsRegex") || Fe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (r(this, "_monthsShortRegex") || (this._monthsShortRegex = Re), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, Sn.week = function (e) {
        return Ie(e, this._week.dow, this._week.doy).week
    }, Sn.firstDayOfYear = function () {
        return this._week.doy
    }, Sn.firstDayOfWeek = function () {
        return this._week.dow
    }, Sn.weekdays = function (e, t) {
        var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return !0 === e ? ze(n, this._week.dow) : e ? n[e.day()] : n
    }, Sn.weekdaysMin = function (e) {
        return !0 === e ? ze(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }, Sn.weekdaysShort = function (e) {
        return !0 === e ? ze(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }, Sn.weekdaysParse = function (e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact) return function (e, t, n) {
            var s, i, r, a = e.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = c([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (i = pe.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = pe.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = pe.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = pe.call(this._weekdaysParse, a)) ? i : -1 !== (i = pe.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = pe.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = pe.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = pe.call(this._weekdaysParse, a)) ? i : -1 !== (i = pe.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = pe.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = pe.call(this._weekdaysParse, a)) ? i : -1 !== (i = pe.call(this._shortWeekdaysParse, a)) ? i : null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (i = c([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s
        }
    }, Sn.weekdaysRegex = function (e) {
        return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (r(this, "_weekdaysRegex") || (this._weekdaysRegex = Je), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, Sn.weekdaysShortRegex = function (e) {
        return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (r(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Be), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, Sn.weekdaysMinRegex = function (e) {
        return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (r(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, Sn.isPM = function (e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, Sn.meridiem = function (e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, dt("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC"}],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
            var t = e % 10;
            return e + (1 === z(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }), n.lang = k("moment.lang is deprecated. Use moment.locale instead.", dt), n.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ct);
    var xn = Math.abs;

    function Nn(e, t, n, s) {
        var i = Zt(t, n);
        return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble()
    }

    function Ln(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function Pn(e) {
        return 4800 * e / 146097
    }

    function Rn(e) {
        return 146097 * e / 4800
    }

    function Wn(e) {
        return function () {
            return this.as(e)
        }
    }

    var Cn = Wn("ms"), Hn = Wn("s"), Fn = Wn("m"), Un = Wn("h"), Vn = Wn("d"), En = Wn("w"), Gn = Wn("M"), An = Wn("Q"),
        In = Wn("y");

    function jn(e) {
        return function () {
            return this.isValid() ? this._data[e] : NaN
        }
    }

    var zn = jn("milliseconds"), Zn = jn("seconds"), qn = jn("minutes"), $n = jn("hours"), Jn = jn("days"),
        Bn = jn("months"), Qn = jn("years");
    var Xn = Math.round, Kn = {ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11};
    var es = Math.abs;

    function ts(e) {
        return (e > 0) - (e < 0) || +e
    }

    function ns() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n, s, i, r, a, o, u = es(this._milliseconds) / 1e3, l = es(this._days), d = es(this._months),
            h = this.asSeconds();
        return h ? (e = j(u / 60), t = j(e / 60), u %= 60, e %= 60, n = j(d / 12), d %= 12, s = u ? u.toFixed(3).replace(/\.?0+$/, "") : "", i = h < 0 ? "-" : "", r = ts(this._months) !== ts(h) ? "-" : "", a = ts(this._days) !== ts(h) ? "-" : "", o = ts(this._milliseconds) !== ts(h) ? "-" : "", i + "P" + (n ? r + n + "Y" : "") + (d ? r + d + "M" : "") + (l ? a + l + "D" : "") + (t || e || u ? "T" : "") + (t ? o + t + "H" : "") + (e ? o + e + "M" : "") + (u ? o + s + "S" : "")) : "P0D"
    }

    var ss = Ct.prototype;

    function is(e, t, n) {
        return "m" === n ? t ? "минута" : "минуту" : e + " " + plural$4({
            ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
            mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            ww: "неделя_недели_недель",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
        }[n], +e)
    }

    ss.isValid = function () {
        return this._isValid
    }, ss.abs = function () {
        var e = this._data;
        return this._milliseconds = xn(this._milliseconds), this._days = xn(this._days), this._months = xn(this._months), e.milliseconds = xn(e.milliseconds), e.seconds = xn(e.seconds), e.minutes = xn(e.minutes), e.hours = xn(e.hours), e.months = xn(e.months), e.years = xn(e.years), this
    }, ss.add = function (e, t) {
        return Nn(this, e, t, 1)
    }, ss.subtract = function (e, t) {
        return Nn(this, e, t, -1)
    }, ss.as = function (e) {
        if (!this.isValid()) return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = V(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + Pn(t), e) {
            case"month":
                return n;
            case"quarter":
                return n / 3;
            case"year":
                return n / 12
        } else switch (t = this._days + Math.round(Rn(this._months)), e) {
            case"week":
                return t / 7 + s / 6048e5;
            case"day":
                return t + s / 864e5;
            case"hour":
                return 24 * t + s / 36e5;
            case"minute":
                return 1440 * t + s / 6e4;
            case"second":
                return 86400 * t + s / 1e3;
            case"millisecond":
                return Math.floor(864e5 * t) + s;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, ss.asMilliseconds = Cn, ss.asSeconds = Hn, ss.asMinutes = Fn, ss.asHours = Un, ss.asDays = Vn, ss.asWeeks = En, ss.asMonths = Gn, ss.asQuarters = An, ss.asYears = In, ss.valueOf = function () {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * z(this._months / 12) : NaN
    }, ss._bubble = function () {
        var e, t, n, s, i, r = this._milliseconds, a = this._days, o = this._months, u = this._data;
        return r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * Ln(Rn(o) + a), a = 0, o = 0), u.milliseconds = r % 1e3, e = j(r / 1e3), u.seconds = e % 60, t = j(e / 60), u.minutes = t % 60, n = j(t / 60), u.hours = n % 24, a += j(n / 24), o += i = j(Pn(a)), a -= Ln(Rn(i)), s = j(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this
    }, ss.clone = function () {
        return Zt(this)
    }, ss.get = function (e) {
        return e = V(e), this.isValid() ? this[e + "s"]() : NaN
    }, ss.milliseconds = zn, ss.seconds = Zn, ss.minutes = qn, ss.hours = $n, ss.days = Jn, ss.weeks = function () {
        return j(this.days() / 7)
    }, ss.months = Bn, ss.years = Qn, ss.humanize = function (e, t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var n, s, i = !1, r = Kn;
        return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (i = e), "object" == typeof t && (r = Object.assign({}, Kn, t), null != t.s && null == t.ss && (r.ss = t.s - 1)), s = function (e, t, n, s) {
            var i = Zt(e).abs(), r = Xn(i.as("s")), a = Xn(i.as("m")), o = Xn(i.as("h")), u = Xn(i.as("d")),
                l = Xn(i.as("M")), d = Xn(i.as("w")), h = Xn(i.as("y")),
                c = r <= n.ss && ["s", r] || r < n.s && ["ss", r] || a <= 1 && ["m"] || a < n.m && ["mm", a] || o <= 1 && ["h"] || o < n.h && ["hh", o] || u <= 1 && ["d"] || u < n.d && ["dd", u];
            return null != n.w && (c = c || d <= 1 && ["w"] || d < n.w && ["ww", d]), (c = c || l <= 1 && ["M"] || l < n.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h])[2] = t, c[3] = +e > 0, c[4] = s, function (e, t, n, s, i) {
                return i.relativeTime(t || 1, !!n, e, s)
            }.apply(null, c)
        }(this, !i, r, n = this.localeData()), i && (s = n.pastFuture(+this, s)), n.postformat(s)
    }, ss.toISOString = ns, ss.toString = ns, ss.toJSON = ns, ss.locale = nn, ss.localeData = rn, ss.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ns), ss.lang = sn, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), ce("x", ue), ce("X", /[+-]?\d+(\.\d{1,3})?/), ye("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e))
    }), ye("x", function (e, t, n) {
        n._d = new Date(z(e))
    }), n.version = "2.29.1", e = Nt, n.fn = Yn, n.min = function () {
        return Rt("isBefore", [].slice.call(arguments, 0))
    }, n.max = function () {
        return Rt("isAfter", [].slice.call(arguments, 0))
    }, n.now = function () {
        return Date.now ? Date.now() : +new Date
    }, n.utc = c, n.unix = function (e) {
        return Nt(1e3 * e)
    }, n.months = function (e, t) {
        return bn(e, t, "months")
    }, n.isDate = l, n.locale = dt, n.invalid = m, n.duration = Zt, n.isMoment = v, n.weekdays = function (e, t, n) {
        return Tn(e, t, n, "weekdays")
    }, n.parseZone = function () {
        return Nt.apply(null, arguments).parseZone()
    }, n.localeData = ct, n.isDuration = Ht, n.monthsShort = function (e, t) {
        return bn(e, t, "monthsShort")
    }, n.weekdaysMin = function (e, t, n) {
        return Tn(e, t, n, "weekdaysMin")
    }, n.defineLocale = ht, n.updateLocale = function (e, t) {
        if (null != t) {
            var n, s, i = it;
            null != rt[e] && null != rt[e].parentLocale ? rt[e].set(b(rt[e]._config, t)) : (null != (s = lt(e)) && (i = s._config), t = b(i, t), null == s && (t.abbr = e), (n = new T(t)).parentLocale = rt[e], rt[e] = n), dt(e)
        } else null != rt[e] && (null != rt[e].parentLocale ? (rt[e] = rt[e].parentLocale, e === dt() && dt(e)) : null != rt[e] && delete rt[e]);
        return rt[e]
    }, n.locales = function () {
        return Y(rt)
    }, n.weekdaysShort = function (e, t, n) {
        return Tn(e, t, n, "weekdaysShort")
    }, n.normalizeUnits = V, n.relativeTimeRounding = function (e) {
        return void 0 === e ? Xn : "function" == typeof e && (Xn = e, !0)
    }, n.relativeTimeThreshold = function (e, t) {
        return void 0 !== Kn[e] && (void 0 === t ? Kn[e] : (Kn[e] = t, "s" === e && (Kn.ss = t - 1), !0))
    }, n.calendarFormat = function (e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }, n.prototype = Yn, n.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    };
    var rs = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
    return n.defineLocale("ru", {
        months: {
            format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
            standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
        },
        monthsShort: {
            format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
            standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        },
        weekdays: {
            standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: rs,
        longMonthsParse: rs,
        shortMonthsParse: rs,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., H:mm",
            LLLL: "dddd, D MMMM YYYY г., H:mm"
        },
        calendar: {
            sameDay: "[Сегодня, в] LT",
            nextDay: "[Завтра, в] LT",
            lastDay: "[Вчера, в] LT",
            nextWeek: function (e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                switch (this.day()) {
                    case 0:
                        return "[В следующее] dddd, [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В следующий] dddd, [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В следующую] dddd, [в] LT"
                }
            },
            lastWeek: function (e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                switch (this.day()) {
                    case 0:
                        return "[В прошлое] dddd, [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В прошлый] dddd, [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В прошлую] dddd, [в] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            ss: is,
            m: is,
            mm: is,
            h: "час",
            hh: is,
            d: "день",
            dd: is,
            w: "неделя",
            ww: is,
            M: "месяц",
            MM: is,
            y: "год",
            yy: is
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
            return /^(дня|вечера)$/.test(e)
        },
        meridiem: function (e, t, n) {
            return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
            switch (t) {
                case"M":
                case"d":
                case"DDD":
                    return e + "-й";
                case"D":
                    return e + "-го";
                case"w":
                case"W":
                    return e + "-я";
                default:
                    return e
            }
        },
        week: {dow: 1, doy: 4}
    }), n.defineLocale("uz", {
        months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
        weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            ss: "%d soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil"
        },
        week: {dow: 1, doy: 7}
    }), n.locale("ru"), n
});

