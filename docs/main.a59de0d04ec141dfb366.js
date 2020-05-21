(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(t, n, e) { t.exports = e("zUnb") },
        crnd: function(t, n) {
            function e(t) { return Promise.resolve().then(function() { var n = new Error("Cannot find module '" + t + "'"); throw n.code = "MODULE_NOT_FOUND", n }) }
            e.keys = function() { return [] }, e.resolve = e, t.exports = e, e.id = "crnd"
        },
        zUnb: function(t, n, e) {
            "use strict";
            e.r(n);
            var r = function(t, n) {
                return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, n) { t.__proto__ = n } || function(t, n) { for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]) })(t, n)
            };

            function o(t, n) {
                function e() { this.constructor = t }
                r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
            }
            var i = function() {
                return (i = Object.assign || function(t) {
                    for (var n, e = 1, r = arguments.length; e < r; e++)
                        for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                    return t
                }).apply(this, arguments)
            };

            function l(t, n, e, r) {
                var o, i = arguments.length,
                    l = i < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, e) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, n, e, r);
                else
                    for (var u = t.length - 1; u >= 0; u--)(o = t[u]) && (l = (i < 3 ? o(l) : i > 3 ? o(n, e, l) : o(n, e)) || l);
                return i > 3 && l && Object.defineProperty(n, e, l), l
            }

            function u(t, n) { return function(e, r) { n(e, r, t) } }

            function a(t, n) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, n) }

            function s(t) {
                var n = "function" == typeof Symbol && t[Symbol.iterator],
                    e = 0;
                return n ? n.call(t) : { next: function() { return t && e >= t.length && (t = void 0), { value: t && t[e++], done: !t } } }
            }

            function c(t, n) {
                var e = "function" == typeof Symbol && t[Symbol.iterator];
                if (!e) return t;
                var r, o, i = e.call(t),
                    l = [];
                try {
                    for (;
                        (void 0 === n || n-- > 0) && !(r = i.next()).done;) l.push(r.value)
                } catch (t) { o = { error: t } } finally { try { r && !r.done && (e = i.return) && e.call(i) } finally { if (o) throw o.error } }
                return l
            }

            function p() { for (var t = [], n = 0; n < arguments.length; n++) t = t.concat(c(arguments[n])); return t }
            var h = Array.isArray || function(t) { return t && "number" == typeof t.length };

            function f(t) { return null != t && "object" == typeof t }

            function d(t) { return "function" == typeof t }
            var g, v = { e: {} };

            function y() { try { return g.apply(this, arguments) } catch (t) { return v.e = t, v } }

            function m(t) { return g = t, y }
            var b = function(t) {
                    function n(e) { var r = t.call(this, e ? e.length + " errors occurred during unsubscription:\n  " + e.map(function(t, n) { return n + 1 + ") " + t.toString() }).join("\n  ") : "") || this; return r.errors = e, r.name = "UnsubscriptionError", Object.setPrototypeOf(r, n.prototype), r }
                    return o(n, t), n
                }(Error),
                _ = function() {
                    function t(t) { this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t) }
                    var n;
                    return t.prototype.unsubscribe = function() {
                        var t, n = !1;
                        if (!this.closed) {
                            var e = this._parent,
                                r = this._parents,
                                o = this._unsubscribe,
                                i = this._subscriptions;
                            this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                            for (var l = -1, u = r ? r.length : 0; e;) e.remove(this), e = ++l < u && r[l] || null;
                            if (d(o) && m(o).call(this) === v && (n = !0, t = t || (v.e instanceof b ? w(v.e.errors) : [v.e])), h(i))
                                for (l = -1, u = i.length; ++l < u;) {
                                    var a = i[l];
                                    if (f(a) && m(a.unsubscribe).call(a) === v) {
                                        n = !0, t = t || [];
                                        var s = v.e;
                                        s instanceof b ? t = t.concat(w(s.errors)) : t.push(s)
                                    }
                                }
                            if (n) throw new b(t)
                        }
                    }, t.prototype.add = function(n) {
                        if (!n || n === t.EMPTY) return t.EMPTY;
                        if (n === this) return this;
                        var e = n;
                        switch (typeof n) {
                            case "function":
                                e = new t(n);
                            case "object":
                                if (e.closed || "function" != typeof e.unsubscribe) return e;
                                if (this.closed) return e.unsubscribe(), e;
                                if ("function" != typeof e._addParent) {
                                    var r = e;
                                    (e = new t)._subscriptions = [r]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + n + " added to Subscription.")
                        }
                        return (this._subscriptions || (this._subscriptions = [])).push(e), e._addParent(this), e
                    }, t.prototype.remove = function(t) { var n = this._subscriptions; if (n) { var e = n.indexOf(t); - 1 !== e && n.splice(e, 1) } }, t.prototype._addParent = function(t) {
                        var n = this._parent,
                            e = this._parents;
                        n && n !== t ? e ? -1 === e.indexOf(t) && e.push(t) : this._parents = [t] : this._parent = t
                    }, t.EMPTY = ((n = new t).closed = !0, n), t
                }();

            function w(t) { return t.reduce(function(t, n) { return t.concat(n instanceof b ? n.errors : n) }, []) }
            var C = !1,
                k = { Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) { C = t }, get useDeprecatedSynchronousErrorHandling() { return C } };

            function x(t) { setTimeout(function() { throw t }) }
            var E = {
                    closed: !0,
                    next: function(t) {},
                    error: function(t) {
                        if (k.useDeprecatedSynchronousErrorHandling) throw t;
                        x(t)
                    },
                    complete: function() {}
                },
                S = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("rxSubscriber") : "@@rxSubscriber",
                O = function(t) {
                    function n(n, e, r) {
                        var o, i = t.call(this) || this;
                        switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                            case 0:
                                i.destination = E;
                                break;
                            case 1:
                                if (!n) { i.destination = E; break }
                                if ("object" == typeof n) {
                                    if ((o = n) instanceof O || "syncErrorThrowable" in o && o[S]) {
                                        var l = n[S]();
                                        i.syncErrorThrowable = l.syncErrorThrowable, i.destination = l, l.add(i)
                                    } else i.syncErrorThrowable = !0, i.destination = new P(i, n);
                                    break
                                }
                            default:
                                i.syncErrorThrowable = !0, i.destination = new P(i, n, e, r)
                        }
                        return i
                    }
                    return o(n, t), n.prototype[S] = function() { return this }, n.create = function(t, e, r) { var o = new n(t, e, r); return o.syncErrorThrowable = !1, o }, n.prototype.next = function(t) { this.isStopped || this._next(t) }, n.prototype.error = function(t) { this.isStopped || (this.isStopped = !0, this._error(t)) }, n.prototype.complete = function() { this.isStopped || (this.isStopped = !0, this._complete()) }, n.prototype.unsubscribe = function() { this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this)) }, n.prototype._next = function(t) { this.destination.next(t) }, n.prototype._error = function(t) { this.destination.error(t), this.unsubscribe() }, n.prototype._complete = function() { this.destination.complete(), this.unsubscribe() }, n.prototype._unsubscribeAndRecycle = function() {
                        var t = this._parent,
                            n = this._parents;
                        return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = n, this
                    }, n
                }(_),
                P = function(t) {
                    function n(n, e, r, o) {
                        var i, l = t.call(this) || this;
                        l._parentSubscriber = n;
                        var u = l;
                        return d(e) ? i = e : e && (i = e.next, r = e.error, o = e.complete, e !== E && (d((u = Object.create(e)).unsubscribe) && l.add(u.unsubscribe.bind(u)), u.unsubscribe = l.unsubscribe.bind(l))), l._context = u, l._next = i, l._error = r, l._complete = o, l
                    }
                    return o(n, t), n.prototype.next = function(t) {
                        if (!this.isStopped && this._next) {
                            var n = this._parentSubscriber;
                            k.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? this.__tryOrSetError(n, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                        }
                    }, n.prototype.error = function(t) {
                        if (!this.isStopped) {
                            var n = this._parentSubscriber,
                                e = k.useDeprecatedSynchronousErrorHandling;
                            if (this._error) e && n.syncErrorThrowable ? (this.__tryOrSetError(n, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                            else if (n.syncErrorThrowable) e ? (n.syncErrorValue = t, n.syncErrorThrown = !0) : x(t), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), e) throw t;
                                x(t)
                            }
                        }
                    }, n.prototype.complete = function() {
                        var t = this;
                        if (!this.isStopped) {
                            var n = this._parentSubscriber;
                            if (this._complete) {
                                var e = function() { return t._complete.call(t._context) };
                                k.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? (this.__tryOrSetError(n, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, n.prototype.__tryOrUnsub = function(t, n) {
                        try { t.call(this._context, n) } catch (t) {
                            if (this.unsubscribe(), k.useDeprecatedSynchronousErrorHandling) throw t;
                            x(t)
                        }
                    }, n.prototype.__tryOrSetError = function(t, n, e) { if (!k.useDeprecatedSynchronousErrorHandling) throw new Error("bad call"); try { n.call(this._context, e) } catch (n) { return k.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = n, t.syncErrorThrown = !0, !0) : (x(n), !0) } return !1 }, n.prototype._unsubscribe = function() {
                        var t = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, t.unsubscribe()
                    }, n
                }(O),
                A = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function T() {}

            function I() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; return M(t) }

            function M(t) { return t ? 1 === t.length ? t[0] : function(n) { return t.reduce(function(t, n) { return n(t) }, n) } : T }
            var N = function() {
                function t(t) { this._isScalar = !1, t && (this._subscribe = t) }
                return t.prototype.lift = function(n) { var e = new t; return e.source = this, e.operator = n, e }, t.prototype.subscribe = function(t, n, e) {
                    var r = this.operator,
                        o = function(t, n, e) { if (t) { if (t instanceof O) return t; if (t[S]) return t[S]() } return t || n || e ? new O(t, n, e) : new O(E) }(t, n, e);
                    if (r ? r.call(o, this.source) : o.add(this.source || k.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), k.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                    return o
                }, t.prototype._trySubscribe = function(t) { try { return this._subscribe(t) } catch (n) { k.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = n), t.error(n) } }, t.prototype.forEach = function(t, n) {
                    var e = this;
                    return new(n = R(n))(function(n, r) {
                        var o;
                        o = e.subscribe(function(n) { try { t(n) } catch (t) { r(t), o && o.unsubscribe() } }, r, n)
                    })
                }, t.prototype._subscribe = function(t) { var n = this.source; return n && n.subscribe(t) }, t.prototype[A] = function() { return this }, t.prototype.pipe = function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; return 0 === t.length ? this : M(t)(this) }, t.prototype.toPromise = function(t) {
                    var n = this;
                    return new(t = R(t))(function(t, e) {
                        var r;
                        n.subscribe(function(t) { return r = t }, function(t) { return e(t) }, function() { return t(r) })
                    })
                }, t.create = function(n) { return new t(n) }, t
            }();

            function R(t) { if (t || (t = k.Promise || Promise), !t) throw new Error("no Promise impl found"); return t }
            var j = function(t) {
                    function n() { var e = t.call(this, "object unsubscribed") || this; return e.name = "ObjectUnsubscribedError", Object.setPrototypeOf(e, n.prototype), e }
                    return o(n, t), n
                }(Error),
                D = function(t) {
                    function n(n, e) { var r = t.call(this) || this; return r.subject = n, r.subscriber = e, r.closed = !1, r }
                    return o(n, t), n.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var t = this.subject,
                                n = t.observers;
                            if (this.subject = null, n && 0 !== n.length && !t.isStopped && !t.closed) { var e = n.indexOf(this.subscriber); - 1 !== e && n.splice(e, 1) }
                        }
                    }, n
                }(_),
                V = function(t) {
                    function n(n) { var e = t.call(this, n) || this; return e.destination = n, e }
                    return o(n, t), n
                }(O),
                L = function(t) {
                    function n() { var n = t.call(this) || this; return n.observers = [], n.closed = !1, n.isStopped = !1, n.hasError = !1, n.thrownError = null, n }
                    return o(n, t), n.prototype[S] = function() { return new V(this) }, n.prototype.lift = function(t) { var n = new U(this, this); return n.operator = t, n }, n.prototype.next = function(t) {
                        if (this.closed) throw new j;
                        if (!this.isStopped)
                            for (var n = this.observers, e = n.length, r = n.slice(), o = 0; o < e; o++) r[o].next(t)
                    }, n.prototype.error = function(t) {
                        if (this.closed) throw new j;
                        this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                        for (var n = this.observers, e = n.length, r = n.slice(), o = 0; o < e; o++) r[o].error(t);
                        this.observers.length = 0
                    }, n.prototype.complete = function() {
                        if (this.closed) throw new j;
                        this.isStopped = !0;
                        for (var t = this.observers, n = t.length, e = t.slice(), r = 0; r < n; r++) e[r].complete();
                        this.observers.length = 0
                    }, n.prototype.unsubscribe = function() { this.isStopped = !0, this.closed = !0, this.observers = null }, n.prototype._trySubscribe = function(n) { if (this.closed) throw new j; return t.prototype._trySubscribe.call(this, n) }, n.prototype._subscribe = function(t) { if (this.closed) throw new j; return this.hasError ? (t.error(this.thrownError), _.EMPTY) : this.isStopped ? (t.complete(), _.EMPTY) : (this.observers.push(t), new D(this, t)) }, n.prototype.asObservable = function() { var t = new N; return t.source = this, t }, n.create = function(t, n) { return new U(t, n) }, n
                }(N),
                U = function(t) {
                    function n(n, e) { var r = t.call(this) || this; return r.destination = n, r.source = e, r }
                    return o(n, t), n.prototype.next = function(t) {
                        var n = this.destination;
                        n && n.next && n.next(t)
                    }, n.prototype.error = function(t) {
                        var n = this.destination;
                        n && n.error && this.destination.error(t)
                    }, n.prototype.complete = function() {
                        var t = this.destination;
                        t && t.complete && this.destination.complete()
                    }, n.prototype._subscribe = function(t) { return this.source ? this.source.subscribe(t) : _.EMPTY }, n
                }(L);

            function H(t) { return t && "function" == typeof t.schedule }
            var F = function(t) {
                    function n(n, e, r) { var o = t.call(this) || this; return o.parent = n, o.outerValue = e, o.outerIndex = r, o.index = 0, o }
                    return o(n, t), n.prototype._next = function(t) { this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this) }, n.prototype._error = function(t) { this.parent.notifyError(t, this), this.unsubscribe() }, n.prototype._complete = function() { this.parent.notifyComplete(this), this.unsubscribe() }, n
                }(O),
                z = function(t) {
                    return function(n) {
                        for (var e = 0, r = t.length; e < r && !n.closed; e++) n.next(t[e]);
                        n.closed || n.complete()
                    }
                },
                q = function(t) { return function(n) { return t.then(function(t) { n.closed || (n.next(t), n.complete()) }, function(t) { return n.error(t) }).then(null, x), n } },
                B = function() { return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator" }(),
                G = function(t) { return function(n) { for (var e = t[B]();;) { var r = e.next(); if (r.done) { n.complete(); break } if (n.next(r.value), n.closed) break } return "function" == typeof e.return && n.add(function() { e.return && e.return() }), n } },
                W = function(t) { return function(n) { var e = t[A](); if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable"); return e.subscribe(n) } },
                K = function(t) { return t && "number" == typeof t.length && "function" != typeof t };

            function Q(t) { return t && "function" != typeof t.subscribe && "function" == typeof t.then }
            var Z = function(t) { if (t instanceof N) return function(n) { return t._isScalar ? (n.next(t.value), void n.complete()) : t.subscribe(n) }; if (t && "function" == typeof t[A]) return W(t); if (K(t)) return z(t); if (Q(t)) return q(t); if (t && "function" == typeof t[B]) return G(t); var n = f(t) ? "an invalid object" : "'" + t + "'"; throw new TypeError("You provided " + n + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.") };

            function Y(t, n, e, r) { var o = new F(t, e, r); return Z(n)(o) }
            var J = function(t) {
                function n() { return null !== t && t.apply(this, arguments) || this }
                return o(n, t), n.prototype.notifyNext = function(t, n, e, r, o) { this.destination.next(n) }, n.prototype.notifyError = function(t, n) { this.destination.error(t) }, n.prototype.notifyComplete = function(t) { this.destination.complete() }, n
            }(O);

            function $(t, n) { return function(e) { if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return e.lift(new X(t, n)) } }
            var X = function() {
                    function t(t, n) { this.project = t, this.thisArg = n }
                    return t.prototype.call = function(t, n) { return n.subscribe(new tt(t, this.project, this.thisArg)) }, t
                }(),
                tt = function(t) {
                    function n(n, e, r) { var o = t.call(this, n) || this; return o.project = e, o.count = 0, o.thisArg = r || o, o }
                    return o(n, t), n.prototype._next = function(t) {
                        var n;
                        try { n = this.project.call(this.thisArg, t, this.count++) } catch (t) { return void this.destination.error(t) }
                        this.destination.next(n)
                    }, n
                }(O);

            function nt(t, n) {
                return new N(n ? function(e) {
                    var r = new _,
                        o = 0;
                    return r.add(n.schedule(function() { o !== t.length ? (e.next(t[o++]), e.closed || r.add(this.schedule())) : e.complete() })), r
                } : z(t))
            }

            function et(t, n) {
                if (!n) return t instanceof N ? t : new N(Z(t));
                if (null != t) {
                    if (function(t) { return t && "function" == typeof t[A] }(t)) return function(t, n) {
                        return new N(n ? function(e) {
                            var r = new _;
                            return r.add(n.schedule(function() {
                                var o = t[A]();
                                r.add(o.subscribe({ next: function(t) { r.add(n.schedule(function() { return e.next(t) })) }, error: function(t) { r.add(n.schedule(function() { return e.error(t) })) }, complete: function() { r.add(n.schedule(function() { return e.complete() })) } }))
                            })), r
                        } : W(t))
                    }(t, n);
                    if (Q(t)) return function(t, n) { return new N(n ? function(e) { var r = new _; return r.add(n.schedule(function() { return t.then(function(t) { r.add(n.schedule(function() { e.next(t), r.add(n.schedule(function() { return e.complete() })) })) }, function(t) { r.add(n.schedule(function() { return e.error(t) })) }) })), r } : q(t)) }(t, n);
                    if (K(t)) return nt(t, n);
                    if (function(t) { return t && "function" == typeof t[B] }(t) || "string" == typeof t) return function(t, n) {
                        if (!t) throw new Error("Iterable cannot be null");
                        return new N(n ? function(e) {
                            var r, o = new _;
                            return o.add(function() { r && "function" == typeof r.return && r.return() }), o.add(n.schedule(function() {
                                r = t[B](), o.add(n.schedule(function() {
                                    if (!e.closed) {
                                        var t, n;
                                        try {
                                            var o = r.next();
                                            t = o.value, n = o.done
                                        } catch (t) { return void e.error(t) }
                                        n ? e.complete() : (e.next(t), this.schedule())
                                    }
                                }))
                            })), o
                        } : G(t))
                    }(t, n)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }

            function rt(t, n, e) { return void 0 === e && (e = Number.POSITIVE_INFINITY), "function" == typeof n ? function(r) { return r.pipe(rt(function(e, r) { return et(t(e, r)).pipe($(function(t, o) { return n(e, t, r, o) })) }, e)) } : ("number" == typeof n && (e = n), function(n) { return n.lift(new ot(t, e)) }) }
            var ot = function() {
                    function t(t, n) { void 0 === n && (n = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = n }
                    return t.prototype.call = function(t, n) { return n.subscribe(new it(t, this.project, this.concurrent)) }, t
                }(),
                it = function(t) {
                    function n(n, e, r) { void 0 === r && (r = Number.POSITIVE_INFINITY); var o = t.call(this, n) || this; return o.project = e, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o }
                    return o(n, t), n.prototype._next = function(t) { this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t) }, n.prototype._tryNext = function(t) {
                        var n, e = this.index++;
                        try { n = this.project(t, e) } catch (t) { return void this.destination.error(t) }
                        this.active++, this._innerSub(n, t, e)
                    }, n.prototype._innerSub = function(t, n, e) { this.add(Y(this, t, n, e)) }, n.prototype._complete = function() { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete() }, n.prototype.notifyNext = function(t, n, e, r, o) { this.destination.next(n) }, n.prototype.notifyComplete = function(t) {
                        var n = this.buffer;
                        this.remove(t), this.active--, n.length > 0 ? this._next(n.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }, n
                }(J);

            function lt(t) { return t }

            function ut(t) { return void 0 === t && (t = Number.POSITIVE_INFINITY), rt(lt, t) }

            function at() { return function(t) { return t.lift(new st(t)) } }
            var st = function() {
                    function t(t) { this.connectable = t }
                    return t.prototype.call = function(t, n) {
                        var e = this.connectable;
                        e._refCount++;
                        var r = new ct(t, e),
                            o = n.subscribe(r);
                        return r.closed || (r.connection = e.connect()), o
                    }, t
                }(),
                ct = function(t) {
                    function n(n, e) { var r = t.call(this, n) || this; return r.connectable = e, r }
                    return o(n, t), n.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var n = t._refCount;
                            if (n <= 0) this.connection = null;
                            else if (t._refCount = n - 1, n > 1) this.connection = null;
                            else {
                                var e = this.connection,
                                    r = t._connection;
                                this.connection = null, !r || e && r !== e || r.unsubscribe()
                            }
                        } else this.connection = null
                    }, n
                }(O),
                pt = function(t) {
                    function n(n, e) { var r = t.call(this) || this; return r.source = n, r.subjectFactory = e, r._refCount = 0, r._isComplete = !1, r }
                    return o(n, t), n.prototype._subscribe = function(t) { return this.getSubject().subscribe(t) }, n.prototype.getSubject = function() { var t = this._subject; return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject }, n.prototype.connect = function() { var t = this._connection; return t || (this._isComplete = !1, (t = this._connection = new _).add(this.source.subscribe(new ft(this.getSubject(), this))), t.closed ? (this._connection = null, t = _.EMPTY) : this._connection = t), t }, n.prototype.refCount = function() { return at()(this) }, n
                }(N).prototype,
                ht = { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: pt._subscribe }, _isComplete: { value: pt._isComplete, writable: !0 }, getSubject: { value: pt.getSubject }, connect: { value: pt.connect }, refCount: { value: pt.refCount } },
                ft = function(t) {
                    function n(n, e) { var r = t.call(this, n) || this; return r.connectable = e, r }
                    return o(n, t), n.prototype._error = function(n) { this._unsubscribe(), t.prototype._error.call(this, n) }, n.prototype._complete = function() { this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this) }, n.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var n = t._connection;
                            t._refCount = 0, t._subject = null, t._connection = null, n && n.unsubscribe()
                        }
                    }, n
                }(V);

            function dt() { return new L }

            function gt(t) { return { providedIn: t.providedIn || null, factory: t.factory, value: void 0 } }
            var vt = function() {
                    function t(t, n) { this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0 !== n ? gt({ providedIn: n.providedIn || "root", factory: n.factory }) : void 0 }
                    return t.prototype.toString = function() { return "InjectionToken " + this._desc }, t
                }(),
                yt = "__parameters__",
                mt = "__prop__metadata__";

            function bt(t) { return function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; if (t) { var r = t.apply(void 0, p(n)); for (var o in r) this[o] = r[o] } } }

            function _t(t, n, e) {
                var r = bt(n);

                function o() {
                    for (var t, n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                    if (this instanceof o) return r.apply(this, n), this;
                    var i = new((t = o).bind.apply(t, p([void 0], n)));
                    return l.annotation = i, l;

                    function l(t, n, e) { for (var r = t.hasOwnProperty(yt) ? t[yt] : Object.defineProperty(t, yt, { value: [] })[yt]; r.length <= e;) r.push(null); return (r[e] = r[e] || []).push(i), t }
                }
                return e && (o.prototype = Object.create(e.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
            }

            function wt(t, n, e) {
                var r = bt(n);

                function o() {
                    for (var t, n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                    if (this instanceof o) return r.apply(this, n), this;
                    var i = new((t = o).bind.apply(t, p([void 0], n)));
                    return function(t, n) {
                        var e = t.constructor,
                            r = e.hasOwnProperty(mt) ? e[mt] : Object.defineProperty(e, mt, { value: {} })[mt];
                        r[n] = r.hasOwnProperty(n) && r[n] || [], r[n].unshift(i)
                    }
                }
                return e && (o.prototype = Object.create(e.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
            }
            var Ct = new vt("AnalyzeForEntryComponents"),
                kt = _t("Attribute", function(t) { return { attributeName: t } }),
                xt = wt("Input", function(t) { return { bindingPropertyName: t } }),
                Et = wt("HostBinding", function(t) { return { hostPropertyName: t } });
            Function;
            var St = "undefined" != typeof window && window,
                Ot = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                Pt = "undefined" != typeof global && global || St || Ot,
                At = Promise.resolve(0),
                Tt = null;

            function It() {
                if (!Tt) {
                    var t = Pt.Symbol;
                    if (t && t.iterator) Tt = t.iterator;
                    else
                        for (var n = Object.getOwnPropertyNames(Map.prototype), e = 0; e < n.length; ++e) { var r = n[e]; "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Tt = r) }
                }
                return Tt
            }

            function Mt(t) { "undefined" == typeof Zone ? At.then(function() { t && t.apply(null, null) }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t) }

            function Nt(t, n) { return t === n || "number" == typeof t && "number" == typeof n && isNaN(t) && isNaN(n) }

            function Rt(t) { if ("string" == typeof t) return t; if (t instanceof Array) return "[" + t.map(Rt).join(", ") + "]"; if (null == t) return "" + t; if (t.overriddenName) return "" + t.overriddenName; if (t.name) return "" + t.name; var n = t.toString(); if (null == n) return "" + n; var e = n.indexOf("\n"); return -1 === e ? n : n.substring(0, e) }

            function jt(t) { return t.__forward_ref__ = jt, t.toString = function() { return Rt(this()) }, t }

            function Dt(t) { return "function" == typeof t && t.hasOwnProperty("__forward_ref__") && t.__forward_ref__ === jt ? t() : t }
            var Vt = _t("Inject", function(t) { return { token: t } }),
                Lt = _t("Optional"),
                Ut = _t("Self"),
                Ht = _t("SkipSelf"),
                Ft = _t("Host"),
                zt = "__source",
                qt = new Object,
                Bt = qt,
                Gt = new vt("INJECTOR"),
                Wt = function() {
                    function t() {}
                    return t.prototype.get = function(t, n) { if (void 0 === n && (n = qt), n === qt) throw new Error("NullInjectorError: No provider for " + Rt(t) + "!"); return n }, t
                }(),
                Kt = function() {
                    function t() {}
                    return t.create = function(t, n) { return Array.isArray(t) ? new rn(t, n) : new rn(t.providers, t.parent, t.name || null) }, t.THROW_IF_NOT_FOUND = qt, t.NULL = new Wt, t.ngInjectableDef = gt({ providedIn: "any", factory: function() { return cn(Gt) } }), t
                }(),
                Qt = function(t) { return t },
                Zt = [],
                Yt = Qt,
                Jt = function() { return Array.prototype.slice.call(arguments) },
                $t = {},
                Xt = function(t) {
                    for (var n in t)
                        if (t[n] === $t) return n;
                    throw Error("!prop")
                }({ provide: String, useValue: $t }),
                tn = Kt.NULL,
                nn = /\n/gm,
                en = "\u0275",
                rn = function() {
                    function t(t, n, e) {
                        void 0 === n && (n = tn), void 0 === e && (e = null), this.parent = n, this.source = e;
                        var r = this._records = new Map;
                        r.set(Kt, { token: Kt, fn: Qt, deps: Zt, value: this, useNew: !1 }), r.set(Gt, { token: Gt, fn: Qt, deps: Zt, value: this, useNew: !1 }),
                            function t(n, e) {
                                if (e)
                                    if ((e = Dt(e)) instanceof Array)
                                        for (var r = 0; r < e.length; r++) t(n, e[r]);
                                    else {
                                        if ("function" == typeof e) throw un("Function/Class not supported", e);
                                        if (!e || "object" != typeof e || !e.provide) throw un("Unexpected provider", e);
                                        var o = Dt(e.provide),
                                            i = function(t) {
                                                var n = function(t) {
                                                        var n = Zt,
                                                            e = t.deps;
                                                        if (e && e.length) {
                                                            n = [];
                                                            for (var r = 0; r < e.length; r++) {
                                                                var o = 6;
                                                                if ((a = Dt(e[r])) instanceof Array)
                                                                    for (var i = 0, l = a; i < l.length; i++) {
                                                                        var u = l[i];
                                                                        u instanceof Lt || u == Lt ? o |= 1 : u instanceof Ht || u == Ht ? o &= -3 : u instanceof Ut || u == Ut ? o &= -5 : a = u instanceof Vt ? u.token : Dt(u)
                                                                    }
                                                                n.push({ token: a, options: o })
                                                            }
                                                        } else if (t.useExisting) {
                                                            var a;
                                                            n = [{ token: a = Dt(t.useExisting), options: 6 }]
                                                        } else if (!(e || Xt in t)) throw un("'deps' required", t);
                                                        return n
                                                    }(t),
                                                    e = Qt,
                                                    r = Zt,
                                                    o = !1,
                                                    i = Dt(t.provide);
                                                if (Xt in t) r = t.useValue;
                                                else if (t.useFactory) e = t.useFactory;
                                                else if (t.useExisting);
                                                else if (t.useClass) o = !0, e = Dt(t.useClass);
                                                else {
                                                    if ("function" != typeof i) throw un("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                                                    o = !0, e = i
                                                }
                                                return { deps: n, fn: e, useNew: o, value: r }
                                            }(e);
                                        if (!0 === e.multi) {
                                            var l = n.get(o);
                                            if (l) { if (l.fn !== Jt) throw on(o) } else n.set(o, l = { token: e.provide, deps: [], useNew: !1, fn: Jt, value: Zt });
                                            l.deps.push({ token: o = e, options: 6 })
                                        }
                                        var u = n.get(o);
                                        if (u && u.fn == Jt) throw on(o);
                                        n.set(o, i)
                                    }
                            }(r, t)
                    }
                    return t.prototype.get = function(t, n, e) {
                        void 0 === e && (e = 0);
                        var r = this._records.get(t);
                        try {
                            return function t(n, e, r, o, i, l) {
                                try {
                                    return function(n, e, r, o, i, l) {
                                        var u, a;
                                        if (!e || 4 & l) 2 & l || (a = o.get(n, i, 0));
                                        else {
                                            if ((a = e.value) == Yt) throw Error(en + "Circular dependency");
                                            if (a === Zt) {
                                                e.value = Yt;
                                                var s = e.useNew,
                                                    c = e.fn,
                                                    h = e.deps,
                                                    f = Zt;
                                                if (h.length) {
                                                    f = [];
                                                    for (var d = 0; d < h.length; d++) {
                                                        var g = h[d],
                                                            v = g.options,
                                                            y = 2 & v ? r.get(g.token) : void 0;
                                                        f.push(t(g.token, y, r, y || 4 & v ? o : tn, 1 & v ? null : Kt.THROW_IF_NOT_FOUND, 0))
                                                    }
                                                }
                                                e.value = a = s ? new((u = c).bind.apply(u, p([void 0], f))) : c.apply(void 0, f)
                                            }
                                        }
                                        return a
                                    }(n, e, r, o, i, l)
                                } catch (t) { throw t instanceof Error || (t = new Error(t)), (t.ngTempTokenPath = t.ngTempTokenPath || []).unshift(n), e && e.value == Yt && (e.value = Zt), t }
                            }(t, r, this._records, this.parent, n, e)
                        } catch (n) { var o = n.ngTempTokenPath; throw t[zt] && o.unshift(t[zt]), n.message = ln("\n" + n.message, o, this.source), n.ngTokenPath = o, n.ngTempTokenPath = null, n }
                    }, t.prototype.toString = function() { var t = []; return this._records.forEach(function(n, e) { return t.push(Rt(e)) }), "StaticInjector[" + t.join(", ") + "]" }, t
                }();

            function on(t) { return un("Cannot mix multi providers and regular providers", t) }

            function ln(t, n, e) {
                void 0 === e && (e = null), t = t && "\n" === t.charAt(0) && t.charAt(1) == en ? t.substr(2) : t;
                var r = Rt(n);
                if (n instanceof Array) r = n.map(Rt).join(" -> ");
                else if ("object" == typeof n) {
                    var o = [];
                    for (var i in n)
                        if (n.hasOwnProperty(i)) {
                            var l = n[i];
                            o.push(i + ":" + ("string" == typeof l ? JSON.stringify(l) : Rt(l)))
                        }
                    r = "{" + o.join(", ") + "}"
                }
                return "StaticInjectorError" + (e ? "(" + e + ")" : "") + "[" + r + "]: " + t.replace(nn, "\n  ")
            }

            function un(t, n) { return new Error(ln(t, n)) }
            var an = void 0;

            function sn(t) { var n = an; return an = t, n }

            function cn(t, n) { if (void 0 === n && (n = 0), void 0 === an) throw new Error("inject() must be called from an injection context"); if (null === an) { var e = t.ngInjectableDef; if (e && "root" == e.providedIn) return void 0 === e.value ? e.value = e.factory() : e.value; if (8 & n) return null; throw new Error("Injector: NOT_FOUND [" + Rt(t) + "]") } return an.get(t, 8 & n ? null : void 0, n) }

            function pn(t) {
                for (var n = [], e = 0; e < t.length; e++) {
                    var r = t[e];
                    if (Array.isArray(r)) {
                        if (0 === r.length) throw new Error("Arguments array must have arguments.");
                        for (var o = void 0, i = 0, l = 0; l < r.length; l++) {
                            var u = r[l];
                            u instanceof Lt || "Optional" === u.ngMetadataName ? i |= 8 : u instanceof Ht || "SkipSelf" === u.ngMetadataName ? i |= 4 : u instanceof Ut || "Self" === u.ngMetadataName ? i |= 2 : o = u instanceof Vt ? u.token : u
                        }
                        n.push(cn(o, i))
                    } else n.push(cn(r))
                }
                return n
            }
            String;
            var hn = function(t) { return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t }({}),
                fn = new function(t) { this.full = "6.1.8", this.major = "6.1.8".split(".")[0], this.minor = "6.1.8".split(".")[1], this.patch = "6.1.8".split(".").slice(2).join(".") }("6.1.8"),
                dn = "ngDebugContext",
                gn = "ngOriginalError",
                vn = "ngErrorLogger";

            function yn(t) { return t[dn] }

            function mn(t) { return t[gn] }

            function bn(t) {
                for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                t.error.apply(t, p(n))
            }
            var _n = function() {
                    function t() { this._console = console }
                    return t.prototype.handleError = function(t) {
                        var n = this._findOriginalError(t),
                            e = this._findContext(t),
                            r = function(t) { return t[vn] || bn }(t);
                        r(this._console, "ERROR", t), n && r(this._console, "ORIGINAL ERROR", n), e && r(this._console, "ERROR CONTEXT", e)
                    }, t.prototype._findContext = function(t) { return t ? yn(t) ? yn(t) : this._findContext(mn(t)) : null }, t.prototype._findOriginalError = function(t) { for (var n = mn(t); n && mn(n);) n = mn(n); return n }, t
                }(),
                wn = new vt("The presence of this token marks an injector as being the root injector."),
                Cn = {},
                kn = {},
                xn = [],
                En = void 0;

            function Sn() { return void 0 === En && (En = new Wt), En }
            var On = function() {
                function t(t, n, e) {
                    var r = this;
                    this.parent = e, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this.destroyed = !1, Tn([t], function(t) { return r.processInjectorType(t, new Set) }), n && Tn(n, function(t) { return r.processProvider(t) }), this.records.set(Gt, An(void 0, this)), this.isRootInjector = this.records.has(wn), this.injectorDefTypes.forEach(function(t) { return r.get(t) })
                }
                return t.prototype.destroy = function() { this.assertNotDestroyed(), this.destroyed = !0; try { this.onDestroy.forEach(function(t) { return t.ngOnDestroy() }) } finally { this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear() } }, t.prototype.get = function(t, n, e) {
                    void 0 === n && (n = Bt), void 0 === e && (e = 0), this.assertNotDestroyed();
                    var r, o = sn(this);
                    try {
                        if (!(4 & e)) {
                            var i = this.records.get(t);
                            if (void 0 === i) {
                                var l = ("function" == typeof(r = t) || "object" == typeof r && r instanceof vt) && t.ngInjectableDef || void 0;
                                void 0 !== l && this.injectableDefInScope(l) && (i = Pn(t), this.records.set(t, i))
                            }
                            if (void 0 !== i) return this.hydrate(t, i)
                        }
                        return 2 & e && Sn(), this.parent.get(t, n)
                    } finally { sn(o) }
                }, t.prototype.assertNotDestroyed = function() { if (this.destroyed) throw new Error("Injector has already been destroyed.") }, t.prototype.processInjectorType = function(t, n) {
                    var e = this,
                        r = (t = Dt(t)).ngInjectorDef,
                        o = null == r && t.ngModule || void 0,
                        i = void 0 === o ? t : o,
                        l = void 0 !== o && t.providers || xn;
                    if (void 0 !== o && (r = o.ngInjectorDef), null != r) {
                        if (n.has(i)) throw new Error("Circular dependency: type " + Rt(i) + " ends up importing itself.");
                        if (this.injectorDefTypes.add(i), this.records.set(i, An(r.factory)), null != r.imports) { n.add(i); try { Tn(r.imports, function(t) { return e.processInjectorType(t, n) }) } finally { n.delete(i) } }
                        null != r.providers && Tn(r.providers, function(t) { return e.processProvider(t) }), Tn(l, function(t) { return e.processProvider(t) })
                    }
                }, t.prototype.processProvider = function(t) {
                    var n = In(t = Dt(t)) ? t : Dt(t.provide),
                        e = function(t) {
                            var n = Dt(t),
                                e = Cn,
                                r = void 0;
                            if (In(t)) return Pn(t);
                            if (n = Dt(t.provide), Xt in t) e = t.useValue;
                            else if (t.useExisting) r = function() { return cn(t.useExisting) };
                            else if (t.useFactory) r = function() { return t.useFactory.apply(t, p(pn(t.deps || []))) };
                            else {
                                var o = t.useClass || n;
                                if (!t.deps) return Pn(o);
                                r = function() { return new(o.bind.apply(o, p([void 0], pn(t.deps)))) }
                            }
                            return An(r, e)
                        }(t);
                    if (In(t) || !0 !== t.multi) { var r = this.records.get(n); if (r && void 0 !== r.multi) throw new Error("Mixed multi-provider for " + Rt(n)) } else {
                        var o = this.records.get(n);
                        if (o) { if (void 0 === o.multi) throw new Error("Mixed multi-provider for " + n + ".") } else(o = An(void 0, Cn, !0)).factory = function() { return pn(o.multi) }, this.records.set(n, o);
                        n = t, o.multi.push(t)
                    }
                    this.records.set(n, e)
                }, t.prototype.hydrate = function(t, n) { if (n.value === kn) throw new Error("Circular dep for " + Rt(t)); var e; return n.value === Cn && (n.value = kn, n.value = n.factory()), "object" == typeof n.value && n.value && "object" == typeof(e = n.value) && null != e && e.ngOnDestroy && "function" == typeof e.ngOnDestroy && this.onDestroy.add(n.value), n.value }, t.prototype.injectableDefInScope = function(t) { return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || "root" === t.providedIn && this.isRootInjector : this.injectorDefTypes.has(t.providedIn)) }, t
            }();

            function Pn(t) { var n = t.ngInjectableDef; if (void 0 === n) { if (t instanceof vt) throw new Error("Token " + Rt(t) + " is missing an ngInjectableDef definition."); return An(function() { return new t }) } return An(n.factory) }

            function An(t, n, e) { return void 0 === n && (n = Cn), void 0 === e && (e = !1), { factory: t, value: n, multi: e ? [] : void 0 } }

            function Tn(t, n) { t.forEach(function(t) { return Array.isArray(t) ? Tn(t, n) : n(t) }) }

            function In(t) { return "function" == typeof t }

            function Mn(t) { return !!t && "function" == typeof t.then }

            function Nn(t) { return !!t && "function" == typeof t.subscribe }
            var Rn = new vt("Application Initializer"),
                jn = function() {
                    function t(t) {
                        var n = this;
                        this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function(t, e) { n.resolve = t, n.reject = e })
                    }
                    return t.prototype.runInitializers = function() {
                        var t = this;
                        if (!this.initialized) {
                            var n = [],
                                e = function() { t.done = !0, t.resolve() };
                            if (this.appInits)
                                for (var r = 0; r < this.appInits.length; r++) {
                                    var o = this.appInits[r]();
                                    Mn(o) && n.push(o)
                                }
                            Promise.all(n).then(function() { e() }).catch(function(n) { t.reject(n) }), 0 === n.length && e(), this.initialized = !0
                        }
                    }, l([u(0, Vt(Rn)), u(0, Lt())], t)
                }(),
                Dn = new vt("AppId");

            function Vn() { return "" + Ln() + Ln() + Ln() }

            function Ln() { return String.fromCharCode(97 + Math.floor(25 * Math.random())) }
            var Un = new vt("Platform Initializer"),
                Hn = new vt("Platform ID"),
                Fn = new vt("appBootstrapListener"),
                zn = function() {
                    function t() {}
                    return t.prototype.log = function(t) { console.log(t) }, t.prototype.warn = function(t) { console.warn(t) }, t
                }();

            function qn() { throw new Error("Runtime compiler is not loaded") }
            var Bn = function() {
                    function t() {}
                    return t.prototype.compileModuleSync = function(t) { throw qn() }, t.prototype.compileModuleAsync = function(t) { throw qn() }, t.prototype.compileModuleAndAllComponentsSync = function(t) { throw qn() }, t.prototype.compileModuleAndAllComponentsAsync = function(t) { throw qn() }, t.prototype.clearCache = function() {}, t.prototype.clearCacheFor = function(t) {}, t.prototype.getModuleId = function(t) {}, t
                }(),
                Gn = function() {},
                Wn = function() {},
                Kn = function() {};

            function Qn(t) { var n = Error("No component factory found for " + Rt(t) + ". Did you add it to @NgModule.entryComponents?"); return n[Jn] = t, n }
            var Zn, Yn, Jn = "ngComponent",
                $n = function() {
                    function t() {}
                    return t.prototype.resolveComponentFactory = function(t) { throw Qn(t) }, t
                }(),
                Xn = function() {
                    function t() {}
                    return t.NULL = new $n, t
                }(),
                te = function() {
                    function t(t, n, e) {
                        this._parent = n, this._ngModule = e, this._factories = new Map;
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            this._factories.set(o.componentType, o)
                        }
                    }
                    return t.prototype.resolveComponentFactory = function(t) { var n = this._factories.get(t); if (!n && this._parent && (n = this._parent.resolveComponentFactory(t)), !n) throw Qn(t); return new ne(n, this._ngModule) }, t
                }(),
                ne = function(t) {
                    function n(n, e) { var r = t.call(this) || this; return r.factory = n, r.ngModule = e, r.selector = n.selector, r.componentType = n.componentType, r.ngContentSelectors = n.ngContentSelectors, r.inputs = n.inputs, r.outputs = n.outputs, r }
                    return o(n, t), n.prototype.create = function(t, n, e, r) { return this.factory.create(t, n, e, r || this.ngModule) }, n
                }(Kn),
                ee = function() {},
                re = function() {},
                oe = function() { var t = Pt.wtf; return !(!t || !(Zn = t.trace) || (Yn = Zn.events, 0)) }();

            function ie(t, n) { return null }
            var le = oe ? function(t, n) { return void 0 === n && (n = null), Yn.createScope(t, n) } : function(t, n) { return ie },
                ue = oe ? function(t, n) { return Zn.leaveScope(t, n), n } : function(t, n) { return n },
                ae = function(t) {
                    function n(n) { void 0 === n && (n = !1); var e = t.call(this) || this; return e.__isAsync = n, e }
                    return o(n, t), n.prototype.emit = function(n) { t.prototype.next.call(this, n) }, n.prototype.subscribe = function(n, e, r) {
                        var o, i = function(t) { return null },
                            l = function() { return null };
                        n && "object" == typeof n ? (o = this.__isAsync ? function(t) { setTimeout(function() { return n.next(t) }) } : function(t) { n.next(t) }, n.error && (i = this.__isAsync ? function(t) { setTimeout(function() { return n.error(t) }) } : function(t) { n.error(t) }), n.complete && (l = this.__isAsync ? function() { setTimeout(function() { return n.complete() }) } : function() { n.complete() })) : (o = this.__isAsync ? function(t) { setTimeout(function() { return n(t) }) } : function(t) { n(t) }, e && (i = this.__isAsync ? function(t) { setTimeout(function() { return e(t) }) } : function(t) { e(t) }), r && (l = this.__isAsync ? function() { setTimeout(function() { return r() }) } : function() { r() }));
                        var u = t.prototype.subscribe.call(this, o, i, l);
                        return n instanceof _ && n.add(u), u
                    }, n
                }(L),
                se = function() {
                    function t(t) {
                        var n, e = t.enableLongStackTrace,
                            r = void 0 !== e && e;
                        if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ae(!1), this.onMicrotaskEmpty = new ae(!1), this.onStable = new ae(!1), this.onError = new ae(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (n = this)._inner = n._inner.fork({ name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: function(t, e, r, o, i, l) { try { return fe(n), t.invokeTask(r, o, i, l) } finally { de(n) } }, onInvoke: function(t, e, r, o, i, l, u) { try { return fe(n), t.invoke(r, o, i, l, u) } finally { de(n) } }, onHasTask: function(t, e, r, o) { t.hasTask(r, o), e === r && ("microTask" == o.change ? (n.hasPendingMicrotasks = o.microTask, he(n)) : "macroTask" == o.change && (n.hasPendingMacrotasks = o.macroTask)) }, onHandleError: function(t, e, r, o) { return t.handleError(r, o), n.runOutsideAngular(function() { return n.onError.emit(o) }), !1 } })
                    }
                    return t.isInAngularZone = function() { return !0 === Zone.current.get("isAngularZone") }, t.assertInAngularZone = function() { if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!") }, t.assertNotInAngularZone = function() { if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!") }, t.prototype.run = function(t, n, e) { return this._inner.run(t, n, e) }, t.prototype.runTask = function(t, n, e, r) {
                        var o = this._inner,
                            i = o.scheduleEventTask("NgZoneEvent: " + r, t, pe, ce, ce);
                        try { return o.runTask(i, n, e) } finally { o.cancelTask(i) }
                    }, t.prototype.runGuarded = function(t, n, e) { return this._inner.runGuarded(t, n, e) }, t.prototype.runOutsideAngular = function(t) { return this._outer.run(t) }, t
                }();

            function ce() {}
            var pe = {};

            function he(t) { if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try { t._nesting++, t.onMicrotaskEmpty.emit(null) } finally { if (t._nesting--, !t.hasPendingMicrotasks) try { t.runOutsideAngular(function() { return t.onStable.emit(null) }) } finally { t.isStable = !0 } } }

            function fe(t) { t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null)) }

            function de(t) { t._nesting--, he(t) }
            var ge, ve = function() {
                    function t() { this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ae, this.onMicrotaskEmpty = new ae, this.onStable = new ae, this.onError = new ae }
                    return t.prototype.run = function(t) { return t() }, t.prototype.runGuarded = function(t) { return t() }, t.prototype.runOutsideAngular = function(t) { return t() }, t.prototype.runTask = function(t) { return t() }, t
                }(),
                ye = function() {
                    function t(t) {
                        var n = this;
                        this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this._watchAngularEvents(), t.run(function() { n.taskTrackingZone = Zone.current.get("TaskTrackingZone") })
                    }
                    return t.prototype._watchAngularEvents = function() {
                        var t = this;
                        this._ngZone.onUnstable.subscribe({ next: function() { t._didWork = !0, t._isZoneStable = !1 } }), this._ngZone.runOutsideAngular(function() { t._ngZone.onStable.subscribe({ next: function() { se.assertNotInAngularZone(), Mt(function() { t._isZoneStable = !0, t._runCallbacksIfReady() }) } }) })
                    }, t.prototype.increasePendingRequestCount = function() { return this._pendingCount += 1, this._didWork = !0, this._pendingCount }, t.prototype.decreasePendingRequestCount = function() { if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount }, t.prototype.isStable = function() { return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks }, t.prototype._runCallbacksIfReady = function() {
                        var t = this;
                        if (this.isStable()) Mt(function() {
                            for (; 0 !== t._callbacks.length;) {
                                var n = t._callbacks.pop();
                                clearTimeout(n.timeoutId), n.doneCb(t._didWork)
                            }
                            t._didWork = !1
                        });
                        else {
                            var n = this.getPendingTasks();
                            this._callbacks = this._callbacks.filter(function(t) { return !t.updateCb || !t.updateCb(n) || (clearTimeout(t.timeoutId), !1) }), this._didWork = !0
                        }
                    }, t.prototype.getPendingTasks = function() { return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function(t) { return { source: t.source, isPeriodic: t.data.isPeriodic, delay: t.data.delay, creationLocation: t.creationLocation, xhr: t.data.target } }) : [] }, t.prototype.addCallback = function(t, n, e) {
                        var r = this,
                            o = -1;
                        n && n > 0 && (o = setTimeout(function() { r._callbacks = r._callbacks.filter(function(t) { return t.timeoutId !== o }), t(r._didWork, r.getPendingTasks()) }, n)), this._callbacks.push({ doneCb: t, timeoutId: o, updateCb: e })
                    }, t.prototype.whenStable = function(t, n, e) {
                        if (e && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                        this.addCallback(t, n, e), this._runCallbacksIfReady()
                    }, t.prototype.getPendingRequestCount = function() { return this._pendingCount }, t.prototype.findProviders = function(t, n, e) { return [] }, t
                }(),
                me = function() {
                    function t() { this._applications = new Map, be.addToWindow(this) }
                    return t.prototype.registerApplication = function(t, n) { this._applications.set(t, n) }, t.prototype.unregisterApplication = function(t) { this._applications.delete(t) }, t.prototype.unregisterAllApplications = function() { this._applications.clear() }, t.prototype.getTestability = function(t) { return this._applications.get(t) || null }, t.prototype.getAllTestabilities = function() { return Array.from(this._applications.values()) }, t.prototype.getAllRootElements = function() { return Array.from(this._applications.keys()) }, t.prototype.findTestabilityInTree = function(t, n) { return void 0 === n && (n = !0), be.findTestabilityInTree(this, t, n) }, l([a("design:paramtypes", [])], t)
                }(),
                be = new(function() {
                    function t() {}
                    return t.prototype.addToWindow = function(t) {}, t.prototype.findTestabilityInTree = function(t, n, e) { return null }, t
                }()),
                _e = !0,
                we = !1,
                Ce = new vt("AllowMultipleToken");

            function ke() { return we = !0, _e }
            var xe = function(t, n) { this.name = t, this.token = n };

            function Ee(t, n, e) {
                void 0 === e && (e = []);
                var r = "Platform: " + n,
                    o = new vt(r);
                return function(n) {
                    void 0 === n && (n = []);
                    var i = Se();
                    if (!i || i.injector.get(Ce, !1))
                        if (t) t(e.concat(n).concat({ provide: o, useValue: !0 }));
                        else {
                            var l = e.concat(n).concat({ provide: o, useValue: !0 });
                            ! function(t) {
                                if (ge && !ge.destroyed && !ge.injector.get(Ce, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                ge = t.get(Oe);
                                var n = t.get(Un, null);
                                n && n.forEach(function(t) { return t() })
                            }(Kt.create({ providers: l, name: r }))
                        }
                    return function(t) { var n = Se(); if (!n) throw new Error("No platform exists!"); if (!n.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first."); return n }(o)
                }
            }

            function Se() { return ge && !ge.destroyed ? ge : null }
            var Oe = function() {
                function t(t) { this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1 }
                return t.prototype.bootstrapModuleFactory = function(t, n) {
                    var e, r = this,
                        o = "noop" === (e = n ? n.ngZone : void 0) ? new ve : ("zone.js" === e ? void 0 : e) || new se({ enableLongStackTrace: ke() }),
                        i = [{ provide: se, useValue: o }];
                    return o.run(function() {
                        var n = Kt.create({ providers: i, parent: r.injector, name: t.moduleType.name }),
                            e = t.create(n),
                            l = e.injector.get(_n, null);
                        if (!l) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                        return e.onDestroy(function() { return Te(r._modules, e) }), o.runOutsideAngular(function() { return o.onError.subscribe({ next: function(t) { l.handleError(t) } }) }),
                            function(t, n, o) { try { var i = ((l = e.injector.get(jn)).runInitializers(), l.donePromise.then(function() { return r._moduleDoBootstrap(e), e })); return Mn(i) ? i.catch(function(e) { throw n.runOutsideAngular(function() { return t.handleError(e) }), e }) : i } catch (e) { throw n.runOutsideAngular(function() { return t.handleError(e) }), e } var l }(l, o)
                    })
                }, t.prototype.bootstrapModule = function(t, n) {
                    var e = this;
                    void 0 === n && (n = []);
                    var r = this.injector.get(Gn),
                        o = Pe({}, n);
                    return r.createCompiler([o]).compileModuleAsync(t).then(function(t) { return e.bootstrapModuleFactory(t, o) })
                }, t.prototype._moduleDoBootstrap = function(t) {
                    var n = t.injector.get(Ae);
                    if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(function(t) { return n.bootstrap(t) });
                    else {
                        if (!t.instance.ngDoBootstrap) throw new Error("The module " + Rt(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                        t.instance.ngDoBootstrap(n)
                    }
                    this._modules.push(t)
                }, t.prototype.onDestroy = function(t) { this._destroyListeners.push(t) }, Object.defineProperty(t.prototype, "injector", { get: function() { return this._injector }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function() {
                    if (this._destroyed) throw new Error("The platform has already been destroyed!");
                    this._modules.slice().forEach(function(t) { return t.destroy() }), this._destroyListeners.forEach(function(t) { return t() }), this._destroyed = !0
                }, Object.defineProperty(t.prototype, "destroyed", { get: function() { return this._destroyed }, enumerable: !0, configurable: !0 }), t
            }();

            function Pe(t, n) { return Array.isArray(n) ? n.reduce(Pe, t) : i({}, t, n) }
            var Ae = function() {
                function t(t, n, e, r, o, i) {
                    var l = this;
                    this._zone = t, this._console = n, this._injector = e, this._exceptionHandler = r, this._componentFactoryResolver = o, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = ke(), this._zone.onMicrotaskEmpty.subscribe({ next: function() { l._zone.run(function() { l.tick() }) } });
                    var u = new N(function(t) { l._stable = l._zone.isStable && !l._zone.hasPendingMacrotasks && !l._zone.hasPendingMicrotasks, l._zone.runOutsideAngular(function() { t.next(l._stable), t.complete() }) }),
                        a = new N(function(t) {
                            var n;
                            l._zone.runOutsideAngular(function() { n = l._zone.onStable.subscribe(function() { se.assertNotInAngularZone(), Mt(function() { l._stable || l._zone.hasPendingMacrotasks || l._zone.hasPendingMicrotasks || (l._stable = !0, t.next(!0)) }) }) });
                            var e = l._zone.onUnstable.subscribe(function() { se.assertInAngularZone(), l._stable && (l._stable = !1, l._zone.runOutsideAngular(function() { t.next(!1) })) });
                            return function() { n.unsubscribe(), e.unsubscribe() }
                        });
                    this.isStable = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var e = Number.POSITIVE_INFINITY,
                            r = null,
                            o = t[t.length - 1];
                        return H(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof o && (e = t.pop()), null === r && 1 === t.length && t[0] instanceof N ? t[0] : ut(e)(nt(t, r))
                    }(u, a.pipe(function(t) {
                        return at()((n = dt, function(t) {
                            var e;
                            e = "function" == typeof n ? n : function() { return n };
                            var r = Object.create(t, ht);
                            return r.source = t, r.subjectFactory = e, r
                        })(t));
                        var n
                    }))
                }
                var n;
                return n = t, t.prototype.bootstrap = function(t, n) {
                    var e, r = this;
                    if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    e = t instanceof Kn ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(e.componentType);
                    var o = e instanceof ne ? null : this._injector.get(ee),
                        i = e.create(Kt.NULL, [], n || e.selector, o);
                    i.onDestroy(function() { r._unloadComponent(i) });
                    var l = i.injector.get(ye, null);
                    return l && i.injector.get(me).registerApplication(i.location.nativeElement, l), this._loadComponent(i), ke() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i
                }, t.prototype.tick = function() { var t = this; if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively"); var e = n._tickScope(); try { this._runningTick = !0, this._views.forEach(function(t) { return t.detectChanges() }), this._enforceNoNewChanges && this._views.forEach(function(t) { return t.checkNoChanges() }) } catch (n) { this._zone.runOutsideAngular(function() { return t._exceptionHandler.handleError(n) }) } finally { this._runningTick = !1, ue(e) } }, t.prototype.attachView = function(t) {
                    var n = t;
                    this._views.push(n), n.attachToAppRef(this)
                }, t.prototype.detachView = function(t) {
                    var n = t;
                    Te(this._views, n), n.detachFromAppRef()
                }, t.prototype._loadComponent = function(t) { this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(Fn, []).concat(this._bootstrapListeners).forEach(function(n) { return n(t) }) }, t.prototype._unloadComponent = function(t) { this.detachView(t.hostView), Te(this.components, t) }, t.prototype.ngOnDestroy = function() { this._views.slice().forEach(function(t) { return t.destroy() }) }, Object.defineProperty(t.prototype, "viewCount", { get: function() { return this._views.length }, enumerable: !0, configurable: !0 }), t._tickScope = le("ApplicationRef#tick()"), t
            }();

            function Te(t, n) {
                var e = t.indexOf(n);
                e > -1 && t.splice(e, 1)
            }
            var Ie = function() {},
                Me = function(t) { return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t }({}),
                Ne = function() {},
                Re = function(t) { this.nativeElement = t },
                je = function() {},
                De = function() {
                    function t() { this.dirty = !0, this._results = [], this.changes = new ae, this.length = 0 }
                    return t.prototype.map = function(t) { return this._results.map(t) }, t.prototype.filter = function(t) { return this._results.filter(t) }, t.prototype.find = function(t) { return this._results.find(t) }, t.prototype.reduce = function(t, n) { return this._results.reduce(t, n) }, t.prototype.forEach = function(t) { this._results.forEach(t) }, t.prototype.some = function(t) { return this._results.some(t) }, t.prototype.toArray = function() { return this._results.slice() }, t.prototype[It()] = function() { return this._results[It()]() }, t.prototype.toString = function() { return this._results.toString() }, t.prototype.reset = function(t) { this._results = function t(n) { return n.reduce(function(n, e) { var r = Array.isArray(e) ? t(e) : e; return n.concat(r) }, []) }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0] }, t.prototype.notifyOnChanges = function() { this.changes.emit(this) }, t.prototype.setDirty = function() { this.dirty = !0 }, t.prototype.destroy = function() { this.changes.complete(), this.changes.unsubscribe() }, t
                }(),
                Ve = function() {},
                Le = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
                Ue = function() {
                    function t(t, n) { this._compiler = t, this._config = n || Le }
                    return t.prototype.load = function(t) { return this._compiler instanceof Bn ? this.loadFactory(t) : this.loadAndCompile(t) }, t.prototype.loadAndCompile = function(t) {
                        var n = this,
                            r = c(t.split("#"), 2),
                            o = r[0],
                            i = r[1];
                        return void 0 === i && (i = "default"), e("crnd")(o).then(function(t) { return t[i] }).then(function(t) { return He(t, o, i) }).then(function(t) { return n._compiler.compileModuleAsync(t) })
                    }, t.prototype.loadFactory = function(t) {
                        var n = c(t.split("#"), 2),
                            r = n[0],
                            o = n[1],
                            i = "NgFactory";
                        return void 0 === o && (o = "default", i = ""), e("crnd")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function(t) { return t[o + i] }).then(function(t) { return He(t, r, o) })
                    }, l([u(1, Lt())], t)
                }();

            function He(t, n, e) { if (!t) throw new Error("Cannot find '" + e + "' in '" + n + "'"); return t }
            var Fe = function() {},
                ze = function() {},
                qe = function() {},
                Be = function() {
                    function t(t, n, e) { this._debugContext = e, this.nativeNode = t, n && n instanceof Ge ? n.addChild(this) : this.parent = null, this.listeners = [] }
                    return Object.defineProperty(t.prototype, "injector", { get: function() { return this._debugContext.injector }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentInstance", { get: function() { return this._debugContext.component }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function() { return this._debugContext.context }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "references", { get: function() { return this._debugContext.references }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "providerTokens", { get: function() { return this._debugContext.providerTokens }, enumerable: !0, configurable: !0 }), t
                }(),
                Ge = function(t) {
                    function n(n, e, r) { var o = t.call(this, n, e, r) || this; return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = n, o }
                    return o(n, t), n.prototype.addChild = function(t) { t && (this.childNodes.push(t), t.parent = this) }, n.prototype.removeChild = function(t) { var n = this.childNodes.indexOf(t); - 1 !== n && (t.parent = null, this.childNodes.splice(n, 1)) }, n.prototype.insertChildrenAfter = function(t, n) {
                        var e, r = this,
                            o = this.childNodes.indexOf(t); - 1 !== o && ((e = this.childNodes).splice.apply(e, p([o + 1, 0], n)), n.forEach(function(t) { t.parent && t.parent.removeChild(t), t.parent = r }))
                    }, n.prototype.insertBefore = function(t, n) { var e = this.childNodes.indexOf(t); - 1 === e ? this.addChild(n) : (n.parent && n.parent.removeChild(n), n.parent = this, this.childNodes.splice(e, 0, n)) }, n.prototype.query = function(t) { return this.queryAll(t)[0] || null }, n.prototype.queryAll = function(t) { var n = []; return function t(n, e, r) { n.childNodes.forEach(function(n) { n instanceof Ge && (e(n) && r.push(n), t(n, e, r)) }) }(this, t, n), n }, n.prototype.queryAllNodes = function(t) { var n = []; return function t(n, e, r) { n instanceof Ge && n.childNodes.forEach(function(n) { e(n) && r.push(n), n instanceof Ge && t(n, e, r) }) }(this, t, n), n }, Object.defineProperty(n.prototype, "children", { get: function() { return this.childNodes.filter(function(t) { return t instanceof n }) }, enumerable: !0, configurable: !0 }), n.prototype.triggerEventHandler = function(t, n) { this.listeners.forEach(function(e) { e.name == t && e.callback(n) }) }, n
                }(Be),
                We = new Map;

            function Ke(t) { return We.get(t) || null }

            function Qe(t) { We.set(t.nativeNode, t) }

            function Ze(t, n) {
                var e = $e(t),
                    r = $e(n);
                return e && r ? function(t, n, e) {
                    for (var r = t[It()](), o = n[It()]();;) {
                        var i = r.next(),
                            l = o.next();
                        if (i.done && l.done) return !0;
                        if (i.done || l.done) return !1;
                        if (!e(i.value, l.value)) return !1
                    }
                }(t, n, Ze) : !(e || !t || "object" != typeof t && "function" != typeof t || r || !n || "object" != typeof n && "function" != typeof n) || Nt(t, n)
            }
            var Ye = function() {
                    function t(t) { this.wrapped = t }
                    return t.wrap = function(n) { return new t(n) }, t.unwrap = function(n) { return t.isWrapped(n) ? n.wrapped : n }, t.isWrapped = function(n) { return n instanceof t }, t
                }(),
                Je = function() {
                    function t(t, n, e) { this.previousValue = t, this.currentValue = n, this.firstChange = e }
                    return t.prototype.isFirstChange = function() { return this.firstChange }, t
                }();

            function $e(t) { return !!Xe(t) && (Array.isArray(t) || !(t instanceof Map) && It() in t) }

            function Xe(t) { return null !== t && ("function" == typeof t || "object" == typeof t) }
            var tr = function() {
                    function t() {}
                    return t.prototype.supports = function(t) { return $e(t) }, t.prototype.create = function(t) { return new er(t) }, t
                }(),
                nr = function(t, n) { return n },
                er = function() {
                    function t(t) { this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || nr }
                    return t.prototype.forEachItem = function(t) { var n; for (n = this._itHead; null !== n; n = n._next) t(n) }, t.prototype.forEachOperation = function(t) {
                        for (var n = this._itHead, e = this._removalsHead, r = 0, o = null; n || e;) {
                            var i = !e || n && n.currentIndex < lr(e, r, o) ? n : e,
                                l = lr(i, r, o),
                                u = i.currentIndex;
                            if (i === e) r--, e = e._nextRemoved;
                            else if (n = n._next, null == i.previousIndex) r++;
                            else {
                                o || (o = []);
                                var a = l - r,
                                    s = u - r;
                                if (a != s) {
                                    for (var c = 0; c < a; c++) {
                                        var p = c < o.length ? o[c] : o[c] = 0,
                                            h = p + c;
                                        s <= h && h < a && (o[c] = p + 1)
                                    }
                                    o[i.previousIndex] = s - a
                                }
                            }
                            l !== u && t(i, l, u)
                        }
                    }, t.prototype.forEachPreviousItem = function(t) { var n; for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n) }, t.prototype.forEachAddedItem = function(t) { var n; for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n) }, t.prototype.forEachMovedItem = function(t) { var n; for (n = this._movesHead; null !== n; n = n._nextMoved) t(n) }, t.prototype.forEachRemovedItem = function(t) { var n; for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n) }, t.prototype.forEachIdentityChange = function(t) { var n; for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n) }, t.prototype.diff = function(t) { if (null == t && (t = []), !$e(t)) throw new Error("Error trying to diff '" + Rt(t) + "'. Only arrays and iterables are allowed"); return this.check(t) ? this : null }, t.prototype.onDestroy = function() {}, t.prototype.check = function(t) {
                        var n = this;
                        this._reset();
                        var e, r, o, i = this._itHead,
                            l = !1;
                        if (Array.isArray(t)) { this.length = t.length; for (var u = 0; u < this.length; u++) o = this._trackByFn(u, r = t[u]), null !== i && Nt(i.trackById, o) ? (l && (i = this._verifyReinsertion(i, r, o, u)), Nt(i.item, r) || this._addIdentityChange(i, r)) : (i = this._mismatch(i, r, o, u), l = !0), i = i._next } else e = 0,
                            function(t, n) {
                                if (Array.isArray(t))
                                    for (var e = 0; e < t.length; e++) n(t[e]);
                                else
                                    for (var r = t[It()](), o = void 0; !(o = r.next()).done;) n(o.value)
                            }(t, function(t) { o = n._trackByFn(e, t), null !== i && Nt(i.trackById, o) ? (l && (i = n._verifyReinsertion(i, t, o, e)), Nt(i.item, t) || n._addIdentityChange(i, t)) : (i = n._mismatch(i, t, o, e), l = !0), i = i._next, e++ }), this.length = e;
                        return this._truncate(i), this.collection = t, this.isDirty
                    }, Object.defineProperty(t.prototype, "isDirty", { get: function() { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead }, enumerable: !0, configurable: !0 }), t.prototype._reset = function() {
                        if (this.isDirty) {
                            var t = void 0,
                                n = void 0;
                            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = n) t.previousIndex = t.currentIndex, n = t._nextMoved;
                            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                        }
                    }, t.prototype._mismatch = function(t, n, e, r) { var o; return null === t ? o = this._itTail : (o = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(e, r)) ? (Nt(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, o, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(e, null)) ? (Nt(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, o, r)) : t = this._addAfter(new rr(n, e), o, r), t }, t.prototype._verifyReinsertion = function(t, n, e, r) { var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(e, null); return null !== o ? t = this._reinsertAfter(o, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t }, t.prototype._truncate = function(t) {
                        for (; null !== t;) {
                            var n = t._next;
                            this._addToRemovals(this._unlink(t)), t = n
                        }
                        null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                    }, t.prototype._reinsertAfter = function(t, n, e) {
                        null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                        var r = t._prevRemoved,
                            o = t._nextRemoved;
                        return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(t, n, e), this._addToMoves(t, e), t
                    }, t.prototype._moveAfter = function(t, n, e) { return this._unlink(t), this._insertAfter(t, n, e), this._addToMoves(t, e), t }, t.prototype._addAfter = function(t, n, e) { return this._insertAfter(t, n, e), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t }, t.prototype._insertAfter = function(t, n, e) { var r = null === n ? this._itHead : n._next; return t._next = r, t._prev = n, null === r ? this._itTail = t : r._prev = t, null === n ? this._itHead = t : n._next = t, null === this._linkedRecords && (this._linkedRecords = new ir), this._linkedRecords.put(t), t.currentIndex = e, t }, t.prototype._remove = function(t) { return this._addToRemovals(this._unlink(t)) }, t.prototype._unlink = function(t) {
                        null !== this._linkedRecords && this._linkedRecords.remove(t);
                        var n = t._prev,
                            e = t._next;
                        return null === n ? this._itHead = e : n._next = e, null === e ? this._itTail = n : e._prev = n, t
                    }, t.prototype._addToMoves = function(t, n) { return t.previousIndex === n ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t) }, t.prototype._addToRemovals = function(t) { return null === this._unlinkedRecords && (this._unlinkedRecords = new ir), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t }, t.prototype._addIdentityChange = function(t, n) { return t.item = n, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t }, t
                }(),
                rr = function(t, n) { this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null },
                or = function() {
                    function t() { this._head = null, this._tail = null }
                    return t.prototype.add = function(t) { null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t) }, t.prototype.get = function(t, n) {
                        var e;
                        for (e = this._head; null !== e; e = e._nextDup)
                            if ((null === n || n <= e.currentIndex) && Nt(e.trackById, t)) return e;
                        return null
                    }, t.prototype.remove = function(t) {
                        var n = t._prevDup,
                            e = t._nextDup;
                        return null === n ? this._head = e : n._nextDup = e, null === e ? this._tail = n : e._prevDup = n, null === this._head
                    }, t
                }(),
                ir = function() {
                    function t() { this.map = new Map }
                    return t.prototype.put = function(t) {
                        var n = t.trackById,
                            e = this.map.get(n);
                        e || (e = new or, this.map.set(n, e)), e.add(t)
                    }, t.prototype.get = function(t, n) { var e = this.map.get(t); return e ? e.get(t, n) : null }, t.prototype.remove = function(t) { var n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t }, Object.defineProperty(t.prototype, "isEmpty", { get: function() { return 0 === this.map.size }, enumerable: !0, configurable: !0 }), t.prototype.clear = function() { this.map.clear() }, t
                }();

            function lr(t, n, e) { var r = t.previousIndex; if (null === r) return r; var o = 0; return e && r < e.length && (o = e[r]), r + n + o }
            var ur = function() {
                    function t() {}
                    return t.prototype.supports = function(t) { return t instanceof Map || Xe(t) }, t.prototype.create = function() { return new ar }, t
                }(),
                ar = function() {
                    function t() { this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null }
                    return Object.defineProperty(t.prototype, "isDirty", { get: function() { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead }, enumerable: !0, configurable: !0 }), t.prototype.forEachItem = function(t) { var n; for (n = this._mapHead; null !== n; n = n._next) t(n) }, t.prototype.forEachPreviousItem = function(t) { var n; for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n) }, t.prototype.forEachChangedItem = function(t) { var n; for (n = this._changesHead; null !== n; n = n._nextChanged) t(n) }, t.prototype.forEachAddedItem = function(t) { var n; for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n) }, t.prototype.forEachRemovedItem = function(t) { var n; for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n) }, t.prototype.diff = function(t) { if (t) { if (!(t instanceof Map || Xe(t))) throw new Error("Error trying to diff '" + Rt(t) + "'. Only maps and objects are allowed") } else t = new Map; return this.check(t) ? this : null }, t.prototype.onDestroy = function() {}, t.prototype.check = function(t) {
                        var n = this;
                        this._reset();
                        var e = this._mapHead;
                        if (this._appendAfter = null, this._forEach(t, function(t, r) {
                                if (e && e.key === r) n._maybeAddToChanges(e, t), n._appendAfter = e, e = e._next;
                                else {
                                    var o = n._getOrCreateRecordForKey(r, t);
                                    e = n._insertBeforeOrAppend(e, o)
                                }
                            }), e) { e._prev && (e._prev._next = null), this._removalsHead = e; for (var r = e; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null }
                        return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                    }, t.prototype._insertBeforeOrAppend = function(t, n) { if (t) { var e = t._prev; return n._next = t, n._prev = e, t._prev = n, e && (e._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null }, t.prototype._getOrCreateRecordForKey = function(t, n) {
                        if (this._records.has(t)) {
                            var e = this._records.get(t);
                            this._maybeAddToChanges(e, n);
                            var r = e._prev,
                                o = e._next;
                            return r && (r._next = o), o && (o._prev = r), e._next = null, e._prev = null, e
                        }
                        var i = new sr(t);
                        return this._records.set(t, i), i.currentValue = n, this._addToAdditions(i), i
                    }, t.prototype._reset = function() {
                        if (this.isDirty) {
                            var t = void 0;
                            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                        }
                    }, t.prototype._maybeAddToChanges = function(t, n) { Nt(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)) }, t.prototype._addToAdditions = function(t) { null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t) }, t.prototype._addToChanges = function(t) { null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t) }, t.prototype._forEach = function(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(function(e) { return n(t[e], e) }) }, t
                }(),
                sr = function(t) { this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null },
                cr = function() {
                    function t(t) { this.factories = t }
                    return t.create = function(n, e) {
                        if (null != e) {
                            var r = e.factories.slice();
                            n = n.concat(r)
                        }
                        return new t(n)
                    }, t.extend = function(n) {
                        return {
                            provide: t,
                            useFactory: function(e) { if (!e) throw new Error("Cannot extend IterableDiffers without a parent injector"); return t.create(n, e) },
                            deps: [
                                [t, new Ht, new Lt]
                            ]
                        }
                    }, t.prototype.find = function(t) { var n, e = this.factories.find(function(n) { return n.supports(t) }); if (null != e) return e; throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((n = t).name || typeof n) + "'") }, t.ngInjectableDef = gt({ providedIn: "root", factory: function() { return new t([new tr]) } }), t
                }(),
                pr = function() {
                    function t(t) { this.factories = t }
                    return t.create = function(n, e) {
                        if (e) {
                            var r = e.factories.slice();
                            n = n.concat(r)
                        }
                        return new t(n)
                    }, t.extend = function(n) {
                        return {
                            provide: t,
                            useFactory: function(e) { if (!e) throw new Error("Cannot extend KeyValueDiffers without a parent injector"); return t.create(n, e) },
                            deps: [
                                [t, new Ht, new Lt]
                            ]
                        }
                    }, t.prototype.find = function(t) { var n = this.factories.find(function(n) { return n.supports(t) }); if (n) return n; throw new Error("Cannot find a differ supporting object '" + t + "'") }, t
                }(),
                hr = [new ur],
                fr = new cr([new tr]),
                dr = new pr(hr),
                gr = Ee(null, "core", [{ provide: Hn, useValue: "unknown" }, { provide: Oe, deps: [Kt] }, { provide: me, deps: [] }, { provide: zn, deps: [] }]),
                vr = new vt("LocaleId");

            function yr() { return fr }

            function mr() { return dr }

            function br(t) { return t || "en-US" }
            var _r = function(t) {},
                wr = function() {
                    function t(t) {
                        if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                            var n = this.inertDocument.createElement("html");
                            this.inertDocument.appendChild(n), this.inertBodyElement = this.inertDocument.createElement("body"), n.appendChild(this.inertBodyElement)
                        }
                        this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function() { try { return !!window.DOMParser } catch (t) { return !1 } }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                    }
                    return t.prototype.getInertBodyElement_XHR = function(t) {
                        t = "<body><remove></remove>" + t + "</body>";
                        try { t = encodeURI(t) } catch (t) { return null }
                        var n = new XMLHttpRequest;
                        n.responseType = "document", n.open("GET", "data:text/html;charset=utf-8," + t, !1), n.send(null);
                        var e = n.response.body;
                        return e.removeChild(e.firstChild), e
                    }, t.prototype.getInertBodyElement_DOMParser = function(t) { t = "<body><remove></remove>" + t + "</body>"; try { var n = (new window.DOMParser).parseFromString(t, "text/html").body; return n.removeChild(n.firstChild), n } catch (t) { return null } }, t.prototype.getInertBodyElement_InertDocument = function(t) { var n = this.inertDocument.createElement("template"); return "content" in n ? (n.innerHTML = t, n) : (this.inertBodyElement.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement) }, t.prototype.stripCustomNsAttrs = function(t) { for (var n = t.attributes, e = n.length - 1; 0 < e; e--) { var r = n.item(e).name; "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || t.removeAttribute(r) } for (var o = t.firstChild; o;) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), o = o.nextSibling }, t
                }(),
                Cr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                kr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

            function xr(t) { return (t = String(t)).match(Cr) || t.match(kr) ? t : (ke() && console.warn("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t) }

            function Er(t) { var n, e, r = {}; try { for (var o = s(t.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0 } catch (t) { n = { error: t } } finally { try { i && !i.done && (e = o.return) && e.call(o) } finally { if (n) throw n.error } } return r }

            function Sr() { for (var t, n, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; var o = {}; try { for (var i = s(e), l = i.next(); !l.done; l = i.next()) { var u = l.value; for (var a in u) u.hasOwnProperty(a) && (o[a] = !0) } } catch (n) { t = { error: n } } finally { try { l && !l.done && (n = i.return) && n.call(i) } finally { if (t) throw t.error } } return o }
            var Or, Pr = Er("area,br,col,hr,img,wbr"),
                Ar = Er("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                Tr = Er("rp,rt"),
                Ir = Sr(Tr, Ar),
                Mr = Sr(Pr, Sr(Ar, Er("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Sr(Tr, Er("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Ir),
                Nr = Er("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                Rr = Er("srcset"),
                jr = Sr(Nr, Rr, Er("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),
                Dr = function() {
                    function t() { this.sanitizedSomething = !1, this.buf = [] }
                    return t.prototype.sanitizeChildren = function(t) {
                        for (var n = t.firstChild; n;)
                            if (n.nodeType === Node.ELEMENT_NODE ? this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, n.firstChild) n = n.firstChild;
                            else
                                for (; n;) {
                                    n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                                    var e = this.checkClobberedElement(n, n.nextSibling);
                                    if (e) { n = e; break }
                                    n = this.checkClobberedElement(n, n.parentNode)
                                }
                        return this.buf.join("")
                    }, t.prototype.startElement = function(t) {
                        var n = t.nodeName.toLowerCase();
                        if (Mr.hasOwnProperty(n)) {
                            this.buf.push("<"), this.buf.push(n);
                            for (var e, r = t.attributes, o = 0; o < r.length; o++) {
                                var i = r.item(o),
                                    l = i.name,
                                    u = l.toLowerCase();
                                if (jr.hasOwnProperty(u)) {
                                    var a = i.value;
                                    Nr[u] && (a = xr(a)), Rr[u] && (e = a, a = (e = String(e)).split(",").map(function(t) { return xr(t.trim()) }).join(", ")), this.buf.push(" ", l, '="', Ur(a), '"')
                                } else this.sanitizedSomething = !0
                            }
                            this.buf.push(">")
                        } else this.sanitizedSomething = !0
                    }, t.prototype.endElement = function(t) {
                        var n = t.nodeName.toLowerCase();
                        Mr.hasOwnProperty(n) && !Pr.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"))
                    }, t.prototype.chars = function(t) { this.buf.push(Ur(t)) }, t.prototype.checkClobberedElement = function(t, n) { if (n && (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML); return n }, t
                }(),
                Vr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                Lr = /([^\#-~ |!])/g;

            function Ur(t) { return t.replace(/&/g, "&amp;").replace(Vr, function(t) { return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";" }).replace(Lr, function(t) { return "&#" + t.charCodeAt(0) + ";" }).replace(/</g, "&lt;").replace(/>/g, "&gt;") }

            function Hr(t) { return "content" in t && function(t) { return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName }(t) ? t.content : null }
            var Fr = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
                zr = /^url\(([^)]+)\)$/,
                qr = function(t) { return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t }({}),
                Br = function() {};

            function Gr(t, n, e) {
                var r = t.state,
                    o = 1792 & r;
                return o === n ? (t.state = -1793 & r | e, t.initIndex = -1, !0) : o === e
            }

            function Wr(t, n, e) { return (1792 & t.state) === n && t.initIndex <= e && (t.initIndex = e + 1, !0) }

            function Kr(t, n) { return t.nodes[n] }

            function Qr(t, n) { return t.nodes[n] }

            function Zr(t, n) { return t.nodes[n] }

            function Yr(t, n) { return t.nodes[n] }

            function Jr(t, n) { return t.nodes[n] }
            var $r = { setCurrentNode: void 0, createRootView: void 0, createEmbeddedView: void 0, createComponentView: void 0, createNgModuleRef: void 0, overrideProvider: void 0, overrideComponentView: void 0, clearOverrides: void 0, checkAndUpdateView: void 0, checkNoChangesView: void 0, destroyView: void 0, resolveDep: void 0, createDebugContext: void 0, handleEvent: void 0, updateDirectives: void 0, updateRenderer: void 0, dirtyParentQueries: void 0 };

            function Xr(t, n, e, r) {
                var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + n + "'. Current value: '" + e + "'.";
                return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
                    function(t, n) { var e = new Error(t); return to(e, n), e }(o, t)
            }

            function to(t, n) { t[dn] = n, t[vn] = n.logError.bind(n) }

            function no(t) { return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t) }
            var eo = function() {},
                ro = new Map;

            function oo(t) { var n = ro.get(t); return n || (n = Rt(t) + "_" + ro.size, ro.set(t, n)), n }
            var io = "$$undefined",
                lo = "$$empty";

            function uo(t) { return { id: io, styles: t.styles, encapsulation: t.encapsulation, data: t.data } }
            var ao = 0;

            function so(t, n, e, r) { return !(!(2 & t.state) && Nt(t.oldValues[n.bindingIndex + e], r)) }

            function co(t, n, e, r) { return !!so(t, n, e, r) && (t.oldValues[n.bindingIndex + e] = r, !0) }

            function po(t, n, e, r) { var o = t.oldValues[n.bindingIndex + e]; if (1 & t.state || !Ze(o, r)) { var i = n.bindings[e].name; throw Xr($r.createDebugContext(t, n.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & t.state)) } }

            function ho(t) { for (var n = t; n;) 2 & n.def.flags && (n.state |= 8), n = n.viewContainerParent || n.parent }

            function fo(t, n) { for (var e = t; e && e !== n;) e.state |= 64, e = e.viewContainerParent || e.parent }

            function go(t, n, e, r) { try { return ho(33554432 & t.def.nodes[n].flags ? Qr(t, n).componentView : t), $r.handleEvent(t, n, e, r) } catch (n) { t.root.errorHandler.handleError(n) } }

            function vo(t) { return t.parent ? Qr(t.parent, t.parentNodeDef.nodeIndex) : null }

            function yo(t) { return t.parent ? t.parentNodeDef.parent : null }

            function mo(t, n) {
                switch (201347067 & n.flags) {
                    case 1:
                        return Qr(t, n.nodeIndex).renderElement;
                    case 2:
                        return Kr(t, n.nodeIndex).renderText
                }
            }

            function bo(t) { return !!t.parent && !!(32768 & t.parentNodeDef.flags) }

            function _o(t) { return !(!t.parent || 32768 & t.parentNodeDef.flags) }

            function wo(t) { return 1 << t % 32 }

            function Co(t) {
                var n = {},
                    e = 0,
                    r = {};
                return t && t.forEach(function(t) {
                    var o = c(t, 2),
                        i = o[0],
                        l = o[1];
                    "number" == typeof i ? (n[i] = l, e |= wo(i)) : r[i] = l
                }), { matchedQueries: n, references: r, matchedQueryIds: e }
            }

            function ko(t, n) { return t.map(function(t) { var e, r, o; return Array.isArray(t) ? (o = (e = c(t, 2))[0], r = e[1]) : (o = 0, r = t), r && ("function" == typeof r || "object" == typeof r) && n && Object.defineProperty(r, zt, { value: n, configurable: !0 }), { flags: o, token: r, tokenKey: oo(r) } }) }

            function xo(t, n, e) { var r = e.renderParent; return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === hn.Native ? Qr(t, e.renderParent.nodeIndex).renderElement : void 0 : n }
            var Eo = new WeakMap;

            function So(t) { var n = Eo.get(t); return n || ((n = t(function() { return eo })).factory = t, Eo.set(t, n)), n }

            function Oo(t, n, e, r, o) { 3 === n && (e = t.renderer.parentNode(mo(t, t.def.lastRenderRootNode))), Po(t, n, 0, t.def.nodes.length - 1, e, r, o) }

            function Po(t, n, e, r, o, i, l) {
                for (var u = e; u <= r; u++) {
                    var a = t.def.nodes[u];
                    11 & a.flags && To(t, a, n, o, i, l), u += a.childCount
                }
            }

            function Ao(t, n, e, r, o, i) {
                for (var l = t; l && !bo(l);) l = l.parent;
                for (var u = l.parent, a = yo(l), s = a.nodeIndex + a.childCount, c = a.nodeIndex + 1; c <= s; c++) {
                    var p = u.def.nodes[c];
                    p.ngContentIndex === n && To(u, p, e, r, o, i), c += p.childCount
                }
                if (!u.parent) {
                    var h = t.root.projectableNodes[n];
                    if (h)
                        for (c = 0; c < h.length; c++) Io(t, h[c], e, r, o, i)
                }
            }

            function To(t, n, e, r, o, i) {
                if (8 & n.flags) Ao(t, n.ngContent.index, e, r, o, i);
                else {
                    var l = mo(t, n);
                    if (3 === e && 33554432 & n.flags && 48 & n.bindingFlags ? (16 & n.bindingFlags && Io(t, l, e, r, o, i), 32 & n.bindingFlags && Io(Qr(t, n.nodeIndex).componentView, l, e, r, o, i)) : Io(t, l, e, r, o, i), 16777216 & n.flags)
                        for (var u = Qr(t, n.nodeIndex).viewContainer._embeddedViews, a = 0; a < u.length; a++) Oo(u[a], e, r, o, i);
                    1 & n.flags && !n.element.name && Po(t, e, n.nodeIndex + 1, n.nodeIndex + n.childCount, r, o, i)
                }
            }

            function Io(t, n, e, r, o, i) {
                var l = t.renderer;
                switch (e) {
                    case 1:
                        l.appendChild(r, n);
                        break;
                    case 2:
                        l.insertBefore(r, n, o);
                        break;
                    case 3:
                        l.removeChild(r, n);
                        break;
                    case 0:
                        i.push(n)
                }
            }
            var Mo = /^:([^:]+):(.+)$/;

            function No(t) { if (":" === t[0]) { var n = t.match(Mo); return [n[1], n[2]] } return ["", t] }

            function Ro(t) { for (var n = 0, e = 0; e < t.length; e++) n |= t[e].flags; return n }

            function jo(t, n, e, r, o, i, l, u, a, s, p, h) {
                var f;
                void 0 === l && (l = []), s || (s = eo);
                var d = Co(e),
                    g = d.matchedQueries,
                    v = d.references,
                    y = d.matchedQueryIds,
                    m = null,
                    b = null;
                i && (m = (f = c(No(i), 2))[0], b = f[1]), u = u || [];
                for (var _ = new Array(u.length), w = 0; w < u.length; w++) {
                    var C = c(u[w], 3),
                        k = C[0],
                        x = C[2],
                        E = c(No(C[1]), 2),
                        S = E[0],
                        O = E[1],
                        P = void 0,
                        A = void 0;
                    switch (15 & k) {
                        case 4:
                            A = x;
                            break;
                        case 1:
                        case 8:
                            P = x
                    }
                    _[w] = { flags: k, ns: S, name: O, nonMinifiedName: O, securityContext: P, suffix: A }
                }
                a = a || [];
                var T = new Array(a.length);
                for (w = 0; w < a.length; w++) {
                    var I = c(a[w], 2);
                    T[w] = { type: 0, target: I[0], eventName: I[1], propName: null }
                }
                var M = (l = l || []).map(function(t) {
                    var n = c(t, 2),
                        e = n[1],
                        r = c(No(n[0]), 2);
                    return [r[0], r[1], e]
                });
                return h = function(t) {
                    if (t && t.id === io) {
                        var n = null != t.encapsulation && t.encapsulation !== hn.None || t.styles.length || Object.keys(t.data).length;
                        t.id = n ? "c" + ao++ : lo
                    }
                    return t && t.id === lo && (t = null), t || null
                }(h), p && (n |= 33554432), { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: n |= 1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: g, matchedQueryIds: y, references: v, ngContentIndex: r, childCount: o, bindings: _, bindingFlags: Ro(_), outputs: T, element: { ns: m, name: b, attrs: M, template: null, componentProvider: null, componentView: p || null, componentRendererType: h, publicProviders: null, allProviders: null, handleEvent: s || eo }, provider: null, text: null, query: null, ngContent: null }
            }

            function Do(t, n, e) {
                var r, o = e.element,
                    i = t.root.selectorOrNode,
                    l = t.renderer;
                if (t.parent || !i) {
                    r = o.name ? l.createElement(o.name, o.ns) : l.createComment("");
                    var u = xo(t, n, e);
                    u && l.appendChild(u, r)
                } else r = l.selectRootElement(i);
                if (o.attrs)
                    for (var a = 0; a < o.attrs.length; a++) {
                        var s = c(o.attrs[a], 3);
                        l.setAttribute(r, s[1], s[2], s[0])
                    }
                return r
            }

            function Vo(t, n, e, r) {
                for (var o = 0; o < e.outputs.length; o++) {
                    var i = e.outputs[o],
                        l = Lo(t, e.nodeIndex, (p = i.eventName, (c = i.target) ? c + ":" + p : p)),
                        u = i.target,
                        a = t;
                    "component" === i.target && (u = null, a = n);
                    var s = a.renderer.listen(u || r, i.eventName, l);
                    t.disposables[e.outputIndex + o] = s
                }
                var c, p
            }

            function Lo(t, n, e) { return function(r) { return go(t, n, e, r) } }

            function Uo(t, n, e, r) {
                if (!co(t, n, e, r)) return !1;
                var o = n.bindings[e],
                    i = Qr(t, n.nodeIndex),
                    l = i.renderElement,
                    u = o.name;
                switch (15 & o.flags) {
                    case 1:
                        ! function(t, n, e, r, o, i) {
                            var l = n.securityContext,
                                u = l ? t.root.sanitizer.sanitize(l, i) : i;
                            u = null != u ? u.toString() : null;
                            var a = t.renderer;
                            null != i ? a.setAttribute(e, o, u, r) : a.removeAttribute(e, o, r)
                        }(t, o, l, o.ns, u, r);
                        break;
                    case 2:
                        ! function(t, n, e, r) {
                            var o = t.renderer;
                            r ? o.addClass(n, e) : o.removeClass(n, e)
                        }(t, l, u, r);
                        break;
                    case 4:
                        ! function(t, n, e, r, o) {
                            var i = t.root.sanitizer.sanitize(qr.STYLE, o);
                            if (null != i) {
                                i = i.toString();
                                var l = n.suffix;
                                null != l && (i += l)
                            } else i = null;
                            var u = t.renderer;
                            null != i ? u.setStyle(e, r, i) : u.removeStyle(e, r)
                        }(t, o, l, u, r);
                        break;
                    case 8:
                        ! function(t, n, e, r, o) {
                            var i = n.securityContext,
                                l = i ? t.root.sanitizer.sanitize(i, o) : o;
                            t.renderer.setProperty(e, r, l)
                        }(33554432 & n.flags && 32 & o.flags ? i.componentView : t, o, l, u, r)
                }
                return !0
            }
            var Ho = new Object,
                Fo = oo(Kt),
                zo = oo(Gt),
                qo = oo(ee);

            function Bo(t, n, e, r) { return e = Dt(e), { index: -1, deps: ko(r, Rt(n)), flags: t, token: n, value: e } }

            function Go(t, n, e) {
                void 0 === e && (e = Kt.THROW_IF_NOT_FOUND);
                var r, o, i = sn(t);
                try {
                    if (8 & n.flags) return n.token;
                    if (2 & n.flags && (e = null), 1 & n.flags) return t._parent.get(n.token, e);
                    var l = n.tokenKey;
                    switch (l) {
                        case Fo:
                        case zo:
                        case qo:
                            return t
                    }
                    var u = t._def.providersByKey[l];
                    if (u) { var a = t._providers[u.index]; return void 0 === a && (a = t._providers[u.index] = Wo(t, u)), a === Ho ? void 0 : a }
                    if (n.token.ngInjectableDef && (r = t, null != (o = n.token.ngInjectableDef).providedIn && (function(t, n) { return t._def.modules.indexOf(o.providedIn) > -1 }(r) || "root" === o.providedIn && r._def.isRoot))) { var s = t._providers.length; return t._def.providersByKey[n.tokenKey] = { flags: 5120, value: n.token.ngInjectableDef.factory, deps: [], index: s, token: n.token }, t._providers[s] = Ho, t._providers[s] = Wo(t, t._def.providersByKey[n.tokenKey]) }
                    return 4 & n.flags ? e : t._parent.get(n.token, e)
                } finally { sn(i) }
            }

            function Wo(t, n) {
                var e;
                switch (201347067 & n.flags) {
                    case 512:
                        e = function(t, n, e) {
                            var r = e.length;
                            switch (r) {
                                case 0:
                                    return new n;
                                case 1:
                                    return new n(Go(t, e[0]));
                                case 2:
                                    return new n(Go(t, e[0]), Go(t, e[1]));
                                case 3:
                                    return new n(Go(t, e[0]), Go(t, e[1]), Go(t, e[2]));
                                default:
                                    for (var o = new Array(r), i = 0; i < r; i++) o[i] = Go(t, e[i]);
                                    return new(n.bind.apply(n, p([void 0], o)))
                            }
                        }(t, n.value, n.deps);
                        break;
                    case 1024:
                        e = function(t, n, e) {
                            var r = e.length;
                            switch (r) {
                                case 0:
                                    return n();
                                case 1:
                                    return n(Go(t, e[0]));
                                case 2:
                                    return n(Go(t, e[0]), Go(t, e[1]));
                                case 3:
                                    return n(Go(t, e[0]), Go(t, e[1]), Go(t, e[2]));
                                default:
                                    for (var o = Array(r), i = 0; i < r; i++) o[i] = Go(t, e[i]);
                                    return n.apply(void 0, p(o))
                            }
                        }(t, n.value, n.deps);
                        break;
                    case 2048:
                        e = Go(t, n.deps[0]);
                        break;
                    case 256:
                        e = n.value
                }
                return e === Ho || null == e || "object" != typeof e || 131072 & n.flags || "function" != typeof e.ngOnDestroy || (n.flags |= 131072), void 0 === e ? Ho : e
            }

            function Ko(t, n) { var e = t.viewContainer._embeddedViews; if ((null == n || n >= e.length) && (n = e.length - 1), n < 0) return null; var r = e[n]; return r.viewContainerParent = null, Jo(e, n), $r.dirtyParentQueries(r), Zo(r), r }

            function Qo(t, n, e) {
                var r = n ? mo(n, n.def.lastRenderRootNode) : t.renderElement;
                Oo(e, 2, e.renderer.parentNode(r), e.renderer.nextSibling(r), void 0)
            }

            function Zo(t) { Oo(t, 3, null, null, void 0) }

            function Yo(t, n, e) { n >= t.length ? t.push(e) : t.splice(n, 0, e) }

            function Jo(t, n) { n >= t.length - 1 ? t.pop() : t.splice(n, 1) }
            var $o = new Object;

            function Xo(t, n, e, r, o, i) { return new ti(t, n, e, r, o, i) }
            var ti = function(t) {
                    function n(n, e, r, o, i, l) { var u = t.call(this) || this; return u.selector = n, u.componentType = e, u._inputs = o, u._outputs = i, u.ngContentSelectors = l, u.viewDefFactory = r, u }
                    return o(n, t), Object.defineProperty(n.prototype, "inputs", {
                        get: function() {
                            var t = [],
                                n = this._inputs;
                            for (var e in n) t.push({ propName: e, templateName: n[e] });
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "outputs", { get: function() { var t = []; for (var n in this._outputs) t.push({ propName: n, templateName: this._outputs[n] }); return t }, enumerable: !0, configurable: !0 }), n.prototype.create = function(t, n, e, r) {
                        if (!r) throw new Error("ngModule should be provided");
                        var o = So(this.viewDefFactory),
                            i = o.nodes[0].element.componentProvider.nodeIndex,
                            l = $r.createRootView(t, n || [], e, o, r, $o),
                            u = Zr(l, i).instance;
                        return e && l.renderer.setAttribute(Qr(l, 0).renderElement, "ng-version", fn.full), new ni(l, new ii(l), u)
                    }, n
                }(Kn),
                ni = function(t) {
                    function n(n, e, r) { var o = t.call(this) || this; return o._view = n, o._viewRef = e, o._component = r, o._elDef = o._view.def.nodes[0], o.hostView = e, o.changeDetectorRef = e, o.instance = r, o }
                    return o(n, t), Object.defineProperty(n.prototype, "location", { get: function() { return new Re(Qr(this._view, this._elDef.nodeIndex).renderElement) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "injector", { get: function() { return new si(this._view, this._elDef) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "componentType", { get: function() { return this._component.constructor }, enumerable: !0, configurable: !0 }), n.prototype.destroy = function() { this._viewRef.destroy() }, n.prototype.onDestroy = function(t) { this._viewRef.onDestroy(t) }, n
                }(Wn);

            function ei(t, n, e) { return new ri(t, n, e) }
            var ri = function() {
                function t(t, n, e) { this._view = t, this._elDef = n, this._data = e, this._embeddedViews = [] }
                return Object.defineProperty(t.prototype, "element", { get: function() { return new Re(this._data.renderElement) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "injector", { get: function() { return new si(this._view, this._elDef) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parentInjector", { get: function() { for (var t = this._view, n = this._elDef.parent; !n && t;) n = yo(t), t = t.parent; return t ? new si(t, n) : new si(this._view, null) }, enumerable: !0, configurable: !0 }), t.prototype.clear = function() {
                    for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
                        var n = Ko(this._data, t);
                        $r.destroyView(n)
                    }
                }, t.prototype.get = function(t) { var n = this._embeddedViews[t]; if (n) { var e = new ii(n); return e.attachToViewContainerRef(this), e } return null }, Object.defineProperty(t.prototype, "length", { get: function() { return this._embeddedViews.length }, enumerable: !0, configurable: !0 }), t.prototype.createEmbeddedView = function(t, n, e) { var r = t.createEmbeddedView(n || {}); return this.insert(r, e), r }, t.prototype.createComponent = function(t, n, e, r, o) {
                    var i = e || this.parentInjector;
                    o || t instanceof ne || (o = i.get(ee));
                    var l = t.create(i, r, void 0, o);
                    return this.insert(l.hostView, n), l
                }, t.prototype.insert = function(t, n) {
                    if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                    var e, r, o, i, l = t;
                    return o = l._view, i = (e = this._data).viewContainer._embeddedViews, null !== (r = n) && void 0 !== r || (r = i.length), o.viewContainerParent = this._view, Yo(i, r, o),
                        function(t, n) {
                            var e = vo(n);
                            if (e && e !== t && !(16 & n.state)) {
                                n.state |= 16;
                                var r = e.template._projectedViews;
                                r || (r = e.template._projectedViews = []), r.push(n),
                                    function(t, e) { if (!(4 & e.flags)) { n.parent.def.nodeFlags |= 4, e.flags |= 4; for (var r = e.parent; r;) r.childFlags |= 4, r = r.parent } }(0, n.parentNodeDef)
                            }
                        }(e, o), $r.dirtyParentQueries(o), Qo(e, r > 0 ? i[r - 1] : null, o), l.attachToViewContainerRef(this), t
                }, t.prototype.move = function(t, n) { if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!"); var e, r, o, i, l, u = this._embeddedViews.indexOf(t._view); return o = n, l = (i = (e = this._data).viewContainer._embeddedViews)[r = u], Jo(i, r), null == o && (o = i.length), Yo(i, o, l), $r.dirtyParentQueries(l), Zo(l), Qo(e, o > 0 ? i[o - 1] : null, l), t }, t.prototype.indexOf = function(t) { return this._embeddedViews.indexOf(t._view) }, t.prototype.remove = function(t) {
                    var n = Ko(this._data, t);
                    n && $r.destroyView(n)
                }, t.prototype.detach = function(t) { var n = Ko(this._data, t); return n ? new ii(n) : null }, t
            }();

            function oi(t) { return new ii(t) }
            var ii = function() {
                function t(t) { this._view = t, this._viewContainerRef = null, this._appRef = null }
                return Object.defineProperty(t.prototype, "rootNodes", { get: function() { return Oo(this._view, 0, void 0, void 0, t = []), t; var t }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function() { return this._view.context }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "destroyed", { get: function() { return 0 != (128 & this._view.state) }, enumerable: !0, configurable: !0 }), t.prototype.markForCheck = function() { ho(this._view) }, t.prototype.detach = function() { this._view.state &= -5 }, t.prototype.detectChanges = function() {
                    var t = this._view.root.rendererFactory;
                    t.begin && t.begin();
                    try { $r.checkAndUpdateView(this._view) } finally { t.end && t.end() }
                }, t.prototype.checkNoChanges = function() { $r.checkNoChangesView(this._view) }, t.prototype.reattach = function() { this._view.state |= 4 }, t.prototype.onDestroy = function(t) { this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t) }, t.prototype.destroy = function() { this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), $r.destroyView(this._view) }, t.prototype.detachFromAppRef = function() { this._appRef = null, Zo(this._view), $r.dirtyParentQueries(this._view) }, t.prototype.attachToAppRef = function(t) {
                    if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = t
                }, t.prototype.attachToViewContainerRef = function(t) {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._viewContainerRef = t
                }, t
            }();

            function li(t, n) { return new ui(t, n) }
            var ui = function(t) {
                function n(n, e) { var r = t.call(this) || this; return r._parentView = n, r._def = e, r }
                return o(n, t), n.prototype.createEmbeddedView = function(t) { return new ii($r.createEmbeddedView(this._parentView, this._def, this._def.element.template, t)) }, Object.defineProperty(n.prototype, "elementRef", { get: function() { return new Re(Qr(this._parentView, this._def.nodeIndex).renderElement) }, enumerable: !0, configurable: !0 }), n
            }(Fe);

            function ai(t, n) { return new si(t, n) }
            var si = function() {
                function t(t, n) { this.view = t, this.elDef = n }
                return t.prototype.get = function(t, n) { return void 0 === n && (n = Kt.THROW_IF_NOT_FOUND), $r.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: t, tokenKey: oo(t) }, n) }, t
            }();

            function ci(t, n) { var e = t.def.nodes[n]; if (1 & e.flags) { var r = Qr(t, e.nodeIndex); return e.element.template ? r.template : r.renderElement } if (2 & e.flags) return Kr(t, e.nodeIndex).renderText; if (20240 & e.flags) return Zr(t, e.nodeIndex).instance; throw new Error("Illegal state: read nodeValue for node index " + n) }

            function pi(t) { return new hi(t.renderer) }
            var hi = function() {
                function t(t) { this.delegate = t }
                return t.prototype.selectRootElement = function(t) { return this.delegate.selectRootElement(t) }, t.prototype.createElement = function(t, n) {
                    var e = c(No(n), 2),
                        r = this.delegate.createElement(e[1], e[0]);
                    return t && this.delegate.appendChild(t, r), r
                }, t.prototype.createViewRoot = function(t) { return t }, t.prototype.createTemplateAnchor = function(t) { var n = this.delegate.createComment(""); return t && this.delegate.appendChild(t, n), n }, t.prototype.createText = function(t, n) { var e = this.delegate.createText(n); return t && this.delegate.appendChild(t, e), e }, t.prototype.projectNodes = function(t, n) { for (var e = 0; e < n.length; e++) this.delegate.appendChild(t, n[e]) }, t.prototype.attachViewAfter = function(t, n) { for (var e = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), o = 0; o < n.length; o++) this.delegate.insertBefore(e, n[o], r) }, t.prototype.detachView = function(t) {
                    for (var n = 0; n < t.length; n++) {
                        var e = t[n],
                            r = this.delegate.parentNode(e);
                        this.delegate.removeChild(r, e)
                    }
                }, t.prototype.destroyView = function(t, n) { for (var e = 0; e < n.length; e++) this.delegate.destroyNode(n[e]) }, t.prototype.listen = function(t, n, e) { return this.delegate.listen(t, n, e) }, t.prototype.listenGlobal = function(t, n, e) { return this.delegate.listen(t, n, e) }, t.prototype.setElementProperty = function(t, n, e) { this.delegate.setProperty(t, n, e) }, t.prototype.setElementAttribute = function(t, n, e) {
                    var r = c(No(n), 2),
                        o = r[0],
                        i = r[1];
                    null != e ? this.delegate.setAttribute(t, i, e, o) : this.delegate.removeAttribute(t, i, o)
                }, t.prototype.setBindingDebugInfo = function(t, n, e) {}, t.prototype.setElementClass = function(t, n, e) { e ? this.delegate.addClass(t, n) : this.delegate.removeClass(t, n) }, t.prototype.setElementStyle = function(t, n, e) { null != e ? this.delegate.setStyle(t, n, e) : this.delegate.removeStyle(t, n) }, t.prototype.invokeElementMethod = function(t, n, e) { t[n].apply(t, e) }, t.prototype.setText = function(t, n) { this.delegate.setValue(t, n) }, t.prototype.animate = function() { throw new Error("Renderer.animate is no longer supported!") }, t
            }();

            function fi(t, n, e, r) { return new di(t, n, e, r) }
            var di = function() {
                    function t(t, n, e, r) {
                        this._moduleType = t, this._parent = n, this._bootstrapComponents = e, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this,
                            function(t) {
                                for (var n = t._def, e = t._providers = new Array(n.providers.length), r = 0; r < n.providers.length; r++) {
                                    var o = n.providers[r];
                                    4096 & o.flags || void 0 === e[r] && (e[r] = Wo(t, o))
                                }
                            }(this)
                    }
                    return t.prototype.get = function(t, n, e) { void 0 === n && (n = Kt.THROW_IF_NOT_FOUND), void 0 === e && (e = 0); var r = 0; return 4 & e ? r |= 1 : 2 & e && (r |= 4), Go(this, { token: t, tokenKey: oo(t), flags: r }, n) }, Object.defineProperty(t.prototype, "instance", { get: function() { return this.get(this._moduleType) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentFactoryResolver", { get: function() { return this.get(Xn) }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function() {
                        if (this._destroyed) throw new Error("The ng module " + Rt(this.instance.constructor) + " has already been destroyed.");
                        this._destroyed = !0,
                            function(t, n) {
                                for (var e = t._def, r = new Set, o = 0; o < e.providers.length; o++)
                                    if (131072 & e.providers[o].flags) { var i = t._providers[o]; if (i && i !== Ho) { var l = i.ngOnDestroy; "function" != typeof l || r.has(i) || (l.apply(i), r.add(i)) } }
                            }(this), this._destroyListeners.forEach(function(t) { return t() })
                    }, t.prototype.onDestroy = function(t) { this._destroyListeners.push(t) }, t
                }(),
                gi = oo(function() {}),
                vi = oo(Ne),
                yi = oo(Re),
                mi = oo(ze),
                bi = oo(Fe),
                _i = oo(qe),
                wi = oo(Kt),
                Ci = oo(Gt);

            function ki(t, n, e, r, o, i, l, u) {
                var a = [];
                if (l)
                    for (var s in l) {
                        var p = c(l[s], 2);
                        a[p[0]] = { flags: 8, name: s, nonMinifiedName: p[1], ns: null, securityContext: null, suffix: null }
                    }
                var h = [];
                if (u)
                    for (var f in u) h.push({ type: 1, propName: f, target: null, eventName: u[f] });
                return Ei(t, n |= 16384, e, r, o, o, i, a, h)
            }

            function xi(t, n, e, r, o) { return Ei(-1, t, n, 0, e, r, o) }

            function Ei(t, n, e, r, o, i, l, u, a) {
                var s = Co(e),
                    c = s.matchedQueries,
                    p = s.references,
                    h = s.matchedQueryIds;
                a || (a = []), u || (u = []), i = Dt(i);
                var f = ko(l, Rt(o));
                return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: n, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: c, matchedQueryIds: h, references: p, ngContentIndex: -1, childCount: r, bindings: u, bindingFlags: Ro(u), outputs: a, element: null, provider: { token: o, value: i, deps: f }, text: null, query: null, ngContent: null }
            }

            function Si(t, n) { return Ti(t, n) }

            function Oi(t, n) { for (var e = t; e.parent && !bo(e);) e = e.parent; return Ii(e.parent, yo(e), !0, n.provider.value, n.provider.deps) }

            function Pi(t, n) {
                var e = Ii(t, n.parent, (32768 & n.flags) > 0, n.provider.value, n.provider.deps);
                if (n.outputs.length)
                    for (var r = 0; r < n.outputs.length; r++) {
                        var o = n.outputs[r],
                            i = e[o.propName].subscribe(Ai(t, n.parent.nodeIndex, o.eventName));
                        t.disposables[n.outputIndex + r] = i.unsubscribe.bind(i)
                    }
                return e
            }

            function Ai(t, n, e) { return function(r) { return go(t, n, e, r) } }

            function Ti(t, n) {
                var e = (8192 & n.flags) > 0,
                    r = n.provider;
                switch (201347067 & n.flags) {
                    case 512:
                        return Ii(t, n.parent, e, r.value, r.deps);
                    case 1024:
                        return function(t, n, e, r, o) {
                            var i = o.length;
                            switch (i) {
                                case 0:
                                    return r();
                                case 1:
                                    return r(Ni(t, n, e, o[0]));
                                case 2:
                                    return r(Ni(t, n, e, o[0]), Ni(t, n, e, o[1]));
                                case 3:
                                    return r(Ni(t, n, e, o[0]), Ni(t, n, e, o[1]), Ni(t, n, e, o[2]));
                                default:
                                    for (var l = Array(i), u = 0; u < i; u++) l[u] = Ni(t, n, e, o[u]);
                                    return r.apply(void 0, p(l))
                            }
                        }(t, n.parent, e, r.value, r.deps);
                    case 2048:
                        return Ni(t, n.parent, e, r.deps[0]);
                    case 256:
                        return r.value
                }
            }

            function Ii(t, n, e, r, o) {
                var i = o.length;
                switch (i) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(Ni(t, n, e, o[0]));
                    case 2:
                        return new r(Ni(t, n, e, o[0]), Ni(t, n, e, o[1]));
                    case 3:
                        return new r(Ni(t, n, e, o[0]), Ni(t, n, e, o[1]), Ni(t, n, e, o[2]));
                    default:
                        for (var l = new Array(i), u = 0; u < i; u++) l[u] = Ni(t, n, e, o[u]);
                        return new(r.bind.apply(r, p([void 0], l)))
                }
            }
            var Mi = {};

            function Ni(t, n, e, r, o) {
                if (void 0 === o && (o = Kt.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
                var i = t;
                2 & r.flags && (o = null);
                var l = r.tokenKey;
                l === _i && (e = !(!n || !n.element.componentView)), n && 1 & r.flags && (e = !1, n = n.parent);
                for (var u = t; u;) {
                    if (n) switch (l) {
                        case gi:
                            return pi(Ri(u, n, e));
                        case vi:
                            return Ri(u, n, e).renderer;
                        case yi:
                            return new Re(Qr(u, n.nodeIndex).renderElement);
                        case mi:
                            return Qr(u, n.nodeIndex).viewContainer;
                        case bi:
                            if (n.element.template) return Qr(u, n.nodeIndex).template;
                            break;
                        case _i:
                            return oi(Ri(u, n, e));
                        case wi:
                        case Ci:
                            return ai(u, n);
                        default:
                            var a = (e ? n.element.allProviders : n.element.publicProviders)[l];
                            if (a) { var s = Zr(u, a.nodeIndex); return s || (s = { instance: Ti(u, a) }, u.nodes[a.nodeIndex] = s), s.instance }
                    }
                    e = bo(u), n = yo(u), u = u.parent, 4 & r.flags && (u = null)
                }
                var c = i.root.injector.get(r.token, Mi);
                return c !== Mi || o === Mi ? c : i.root.ngModule.injector.get(r.token, o)
            }

            function Ri(t, n, e) {
                var r;
                if (e) r = Qr(t, n.nodeIndex).componentView;
                else
                    for (r = t; r.parent && !bo(r);) r = r.parent;
                return r
            }

            function ji(t, n, e, r, o, i) {
                if (32768 & e.flags) {
                    var l = Qr(t, e.parent.nodeIndex).componentView;
                    2 & l.def.flags && (l.state |= 8)
                }
                if (n.instance[e.bindings[r].name] = o, 524288 & e.flags) {
                    i = i || {};
                    var u = Ye.unwrap(t.oldValues[e.bindingIndex + r]);
                    i[e.bindings[r].nonMinifiedName] = new Je(u, o, 0 != (2 & t.state))
                }
                return t.oldValues[e.bindingIndex + r] = o, i
            }

            function Di(t, n) {
                if (t.def.nodeFlags & n)
                    for (var e = t.def.nodes, r = 0, o = 0; o < e.length; o++) {
                        var i = e[o],
                            l = i.parent;
                        for (!l && i.flags & n && Li(t, o, i.flags & n, r++), 0 == (i.childFlags & n) && (o += i.childCount); l && 1 & l.flags && o === l.nodeIndex + l.childCount;) l.directChildFlags & n && (r = Vi(t, l, n, r)), l = l.parent
                    }
            }

            function Vi(t, n, e, r) {
                for (var o = n.nodeIndex + 1; o <= n.nodeIndex + n.childCount; o++) {
                    var i = t.def.nodes[o];
                    i.flags & e && Li(t, o, i.flags & e, r++), o += i.childCount
                }
                return r
            }

            function Li(t, n, e, r) {
                var o = Zr(t, n);
                if (o) {
                    var i = o.instance;
                    i && ($r.setCurrentNode(t, n), 1048576 & e && Wr(t, 512, r) && i.ngAfterContentInit(), 2097152 & e && i.ngAfterContentChecked(), 4194304 & e && Wr(t, 768, r) && i.ngAfterViewInit(), 8388608 & e && i.ngAfterViewChecked(), 131072 & e && i.ngOnDestroy())
                }
            }

            function Ui(t, n, e) { var r = []; for (var o in e) r.push({ propName: o, bindingType: e[o] }); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: -1, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, ngContentIndex: -1, matchedQueries: {}, matchedQueryIds: 0, references: {}, childCount: 0, bindings: [], bindingFlags: 0, outputs: [], element: null, provider: null, text: null, query: { id: n, filterId: wo(n), bindings: r }, ngContent: null } }

            function Hi(t) {
                for (var n = t.def.nodeMatchedQueries; t.parent && _o(t);) {
                    var e = t.parentNodeDef;
                    t = t.parent;
                    for (var r = e.nodeIndex + e.childCount, o = 0; o <= r; o++) 67108864 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & n) === i.query.filterId && Jr(t, o).setDirty(), !(1 & i.flags && o + i.childCount < e.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount)
                }
                if (134217728 & t.def.nodeFlags)
                    for (o = 0; o < t.def.nodes.length; o++) {
                        var i;
                        134217728 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && Jr(t, o).setDirty(), o += i.childCount
                    }
            }

            function Fi(t, n) {
                var e = Jr(t, n.nodeIndex);
                if (e.dirty) {
                    var r, o = void 0;
                    if (67108864 & n.flags) {
                        var i = n.parent.parent;
                        o = zi(t, i.nodeIndex, i.nodeIndex + i.childCount, n.query, []), r = Zr(t, n.parent.nodeIndex).instance
                    } else 134217728 & n.flags && (o = zi(t, 0, t.def.nodes.length - 1, n.query, []), r = t.component);
                    e.reset(o);
                    for (var l = n.query.bindings, u = !1, a = 0; a < l.length; a++) {
                        var s = l[a],
                            c = void 0;
                        switch (s.bindingType) {
                            case 0:
                                c = e.first;
                                break;
                            case 1:
                                c = e, u = !0
                        }
                        r[s.propName] = c
                    }
                    u && e.notifyOnChanges()
                }
            }

            function zi(t, n, e, r, o) {
                for (var i = n; i <= e; i++) {
                    var l = t.def.nodes[i],
                        u = l.matchedQueries[r.id];
                    if (null != u && o.push(qi(t, l, u)), 1 & l.flags && l.element.template && (l.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                        var a = Qr(t, i);
                        if ((l.childMatchedQueries & r.filterId) === r.filterId && (zi(t, i + 1, i + l.childCount, r, o), i += l.childCount), 16777216 & l.flags)
                            for (var s = a.viewContainer._embeddedViews, c = 0; c < s.length; c++) {
                                var p = s[c],
                                    h = vo(p);
                                h && h === a && zi(p, 0, p.def.nodes.length - 1, r, o)
                            }
                        var f = a.template._projectedViews;
                        if (f)
                            for (c = 0; c < f.length; c++) {
                                var d = f[c];
                                zi(d, 0, d.def.nodes.length - 1, r, o)
                            }
                    }(l.childMatchedQueries & r.filterId) !== r.filterId && (i += l.childCount)
                }
                return o
            }

            function qi(t, n, e) {
                if (null != e) switch (e) {
                    case 1:
                        return Qr(t, n.nodeIndex).renderElement;
                    case 0:
                        return new Re(Qr(t, n.nodeIndex).renderElement);
                    case 2:
                        return Qr(t, n.nodeIndex).template;
                    case 3:
                        return Qr(t, n.nodeIndex).viewContainer;
                    case 4:
                        return Zr(t, n.nodeIndex).instance
                }
            }

            function Bi(t, n, e) {
                var r = xo(t, n, e);
                r && Ao(t, e.ngContent.index, 1, r, null, void 0)
            }

            function Gi(t, n) {
                return function(t, n, e) {
                    for (var r = new Array(e.length), o = 0; o < e.length; o++) {
                        var i = e[o];
                        r[o] = { flags: 8, name: i, ns: null, nonMinifiedName: i, securityContext: null, suffix: null }
                    }
                    return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: n, flags: 32, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: -1, childCount: 0, bindings: r, bindingFlags: Ro(r), outputs: [], element: null, provider: null, text: null, query: null, ngContent: null }
                }(0, t, new Array(n))
            }

            function Wi(t, n, e) { for (var r = new Array(e.length - 1), o = 1; o < e.length; o++) r[o - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: e[o] }; return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: 2, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: n, childCount: 0, bindings: r, bindingFlags: 8, outputs: [], element: null, provider: null, text: { prefix: e[0] }, query: null, ngContent: null } }

            function Ki(t, n, e) {
                var r, o = t.renderer;
                r = o.createText(e.text.prefix);
                var i = xo(t, n, e);
                return i && o.appendChild(i, r), { renderText: r }
            }

            function Qi(t, n) { return (null != t ? t.toString() : "") + n.suffix }

            function Zi(t, n, e, r) {
                for (var o = 0, i = 0, l = 0, u = 0, a = 0, s = null, c = null, p = !1, h = !1, f = null, d = 0; d < n.length; d++) {
                    var g = n[d];
                    if (g.nodeIndex = d, g.parent = s, g.bindingIndex = o, g.outputIndex = i, g.renderParent = c, l |= g.flags, a |= g.matchedQueryIds, g.element) {
                        var v = g.element;
                        v.publicProviders = s ? s.element.publicProviders : Object.create(null), v.allProviders = v.publicProviders, p = !1, h = !1, g.element.template && (a |= g.element.template.nodeMatchedQueries)
                    }
                    if (Ji(s, g, n.length), o += g.bindings.length, i += g.outputs.length, !c && 3 & g.flags && (f = g), 20224 & g.flags) {
                        p || (p = !0, s.element.publicProviders = Object.create(s.element.publicProviders), s.element.allProviders = s.element.publicProviders);
                        var y = 0 != (32768 & g.flags);
                        0 == (8192 & g.flags) || y ? s.element.publicProviders[oo(g.provider.token)] = g : (h || (h = !0, s.element.allProviders = Object.create(s.element.publicProviders)), s.element.allProviders[oo(g.provider.token)] = g), y && (s.element.componentProvider = g)
                    }
                    if (s ? (s.childFlags |= g.flags, s.directChildFlags |= g.flags, s.childMatchedQueries |= g.matchedQueryIds, g.element && g.element.template && (s.childMatchedQueries |= g.element.template.nodeMatchedQueries)) : u |= g.flags, g.childCount > 0) s = g, Yi(g) || (c = g);
                    else
                        for (; s && d === s.nodeIndex + s.childCount;) {
                            var m = s.parent;
                            m && (m.childFlags |= s.childFlags, m.childMatchedQueries |= s.childMatchedQueries), c = (s = m) && Yi(s) ? s.renderParent : s
                        }
                }
                return { factory: null, nodeFlags: l, rootNodeFlags: u, nodeMatchedQueries: a, flags: t, nodes: n, updateDirectives: e || eo, updateRenderer: r || eo, handleEvent: function(t, e, r, o) { return n[e].element.handleEvent(t, r, o) }, bindingCount: o, outputCount: i, lastRenderRootNode: f }
            }

            function Yi(t) { return 0 != (1 & t.flags) && null === t.element.name }

            function Ji(t, n, e) { var r = n.element && n.element.template; if (r) { if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!"); if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + n.nodeIndex + "!") } if (20224 & n.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + n.nodeIndex + "!"); if (n.query) { if (67108864 & n.flags && (!t || 0 == (16384 & t.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + n.nodeIndex + "!"); if (134217728 & n.flags && t) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + n.nodeIndex + "!") } if (n.childCount) { var o = t ? t.nodeIndex + t.childCount : e - 1; if (n.nodeIndex <= o && n.nodeIndex + n.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + n.nodeIndex + "!") } }

            function $i(t, n, e, r) { var o = nl(t.root, t.renderer, t, n, e); return el(o, t.component, r), rl(o), o }

            function Xi(t, n, e) { var r = nl(t, t.renderer, null, null, n); return el(r, e, e), rl(r), r }

            function tl(t, n, e, r) { var o, i = n.element.componentRendererType; return o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer, nl(t.root, o, t, n.element.componentProvider, e) }

            function nl(t, n, e, r, o) {
                var i = new Array(o.nodes.length),
                    l = o.outputCount ? new Array(o.outputCount) : null;
                return { def: o, parent: e, viewContainerParent: null, parentNodeDef: r, context: null, component: null, nodes: i, state: 13, root: t, renderer: n, oldValues: new Array(o.bindingCount), disposables: l, initIndex: -1 }
            }

            function el(t, n, e) { t.component = n, t.context = e }

            function rl(t) {
                var n;
                bo(t) && (n = Qr(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
                for (var e = t.def, r = t.nodes, o = 0; o < e.nodes.length; o++) {
                    var i = e.nodes[o];
                    $r.setCurrentNode(t, o);
                    var l = void 0;
                    switch (201347067 & i.flags) {
                        case 1:
                            var u = Do(t, n, i),
                                a = void 0;
                            if (33554432 & i.flags) {
                                var s = So(i.element.componentView);
                                a = $r.createComponentView(t, i, s, u)
                            }
                            Vo(t, a, i, u), l = { renderElement: u, componentView: a, viewContainer: null, template: i.element.template ? li(t, i) : void 0 }, 16777216 & i.flags && (l.viewContainer = ei(t, i, l));
                            break;
                        case 2:
                            l = Ki(t, n, i);
                            break;
                        case 512:
                        case 1024:
                        case 2048:
                        case 256:
                            (l = r[o]) || 4096 & i.flags || (l = { instance: Si(t, i) });
                            break;
                        case 16:
                            l = { instance: Oi(t, i) };
                            break;
                        case 16384:
                            (l = r[o]) || (l = { instance: Pi(t, i) }), 32768 & i.flags && el(Qr(t, i.parent.nodeIndex).componentView, l.instance, l.instance);
                            break;
                        case 32:
                        case 64:
                        case 128:
                            l = { value: void 0 };
                            break;
                        case 67108864:
                        case 134217728:
                            l = new De;
                            break;
                        case 8:
                            Bi(t, n, i), l = void 0
                    }
                    r[o] = l
                }
                hl(t, pl.CreateViewNodes), vl(t, 201326592, 268435456, 0)
            }

            function ol(t) { ul(t), $r.updateDirectives(t, 1), fl(t, pl.CheckNoChanges), $r.updateRenderer(t, 1), hl(t, pl.CheckNoChanges), t.state &= -97 }

            function il(t) {
                1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, Gr(t, 0, 256), ul(t), $r.updateDirectives(t, 0), fl(t, pl.CheckAndUpdate), vl(t, 67108864, 536870912, 0);
                var n = Gr(t, 256, 512);
                Di(t, 2097152 | (n ? 1048576 : 0)), $r.updateRenderer(t, 0), hl(t, pl.CheckAndUpdate), vl(t, 134217728, 536870912, 0), Di(t, 8388608 | ((n = Gr(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, Gr(t, 768, 1024)
            }

            function ll(t, n, e, r, o, i, l, u, a, s, c, h, f) {
                return 0 === e ? function(t, n, e, r, o, i, l, u, a, s, c, p) {
                    switch (201347067 & n.flags) {
                        case 1:
                            return function(t, n, e, r, o, i, l, u, a, s, c, p) {
                                var h = n.bindings.length,
                                    f = !1;
                                return h > 0 && Uo(t, n, 0, e) && (f = !0), h > 1 && Uo(t, n, 1, r) && (f = !0), h > 2 && Uo(t, n, 2, o) && (f = !0), h > 3 && Uo(t, n, 3, i) && (f = !0), h > 4 && Uo(t, n, 4, l) && (f = !0), h > 5 && Uo(t, n, 5, u) && (f = !0), h > 6 && Uo(t, n, 6, a) && (f = !0), h > 7 && Uo(t, n, 7, s) && (f = !0), h > 8 && Uo(t, n, 8, c) && (f = !0), h > 9 && Uo(t, n, 9, p) && (f = !0), f
                            }(t, n, e, r, o, i, l, u, a, s, c, p);
                        case 2:
                            return function(t, n, e, r, o, i, l, u, a, s, c, p) {
                                var h = !1,
                                    f = n.bindings,
                                    d = f.length;
                                if (d > 0 && co(t, n, 0, e) && (h = !0), d > 1 && co(t, n, 1, r) && (h = !0), d > 2 && co(t, n, 2, o) && (h = !0), d > 3 && co(t, n, 3, i) && (h = !0), d > 4 && co(t, n, 4, l) && (h = !0), d > 5 && co(t, n, 5, u) && (h = !0), d > 6 && co(t, n, 6, a) && (h = !0), d > 7 && co(t, n, 7, s) && (h = !0), d > 8 && co(t, n, 8, c) && (h = !0), d > 9 && co(t, n, 9, p) && (h = !0), h) {
                                    var g = n.text.prefix;
                                    d > 0 && (g += Qi(e, f[0])), d > 1 && (g += Qi(r, f[1])), d > 2 && (g += Qi(o, f[2])), d > 3 && (g += Qi(i, f[3])), d > 4 && (g += Qi(l, f[4])), d > 5 && (g += Qi(u, f[5])), d > 6 && (g += Qi(a, f[6])), d > 7 && (g += Qi(s, f[7])), d > 8 && (g += Qi(c, f[8])), d > 9 && (g += Qi(p, f[9]));
                                    var v = Kr(t, n.nodeIndex).renderText;
                                    t.renderer.setValue(v, g)
                                }
                                return h
                            }(t, n, e, r, o, i, l, u, a, s, c, p);
                        case 16384:
                            return function(t, n, e, r, o, i, l, u, a, s, c, p) {
                                var h = Zr(t, n.nodeIndex),
                                    f = h.instance,
                                    d = !1,
                                    g = void 0,
                                    v = n.bindings.length;
                                return v > 0 && so(t, n, 0, e) && (d = !0, g = ji(t, h, n, 0, e, g)), v > 1 && so(t, n, 1, r) && (d = !0, g = ji(t, h, n, 1, r, g)), v > 2 && so(t, n, 2, o) && (d = !0, g = ji(t, h, n, 2, o, g)), v > 3 && so(t, n, 3, i) && (d = !0, g = ji(t, h, n, 3, i, g)), v > 4 && so(t, n, 4, l) && (d = !0, g = ji(t, h, n, 4, l, g)), v > 5 && so(t, n, 5, u) && (d = !0, g = ji(t, h, n, 5, u, g)), v > 6 && so(t, n, 6, a) && (d = !0, g = ji(t, h, n, 6, a, g)), v > 7 && so(t, n, 7, s) && (d = !0, g = ji(t, h, n, 7, s, g)), v > 8 && so(t, n, 8, c) && (d = !0, g = ji(t, h, n, 8, c, g)), v > 9 && so(t, n, 9, p) && (d = !0, g = ji(t, h, n, 9, p, g)), g && f.ngOnChanges(g), 65536 & n.flags && Wr(t, 256, n.nodeIndex) && f.ngOnInit(), 262144 & n.flags && f.ngDoCheck(), d
                            }(t, n, e, r, o, i, l, u, a, s, c, p);
                        case 32:
                        case 64:
                        case 128:
                            return function(t, n, e, r, o, i, l, u, a, s, c, p) {
                                var h = n.bindings,
                                    f = !1,
                                    d = h.length;
                                if (d > 0 && co(t, n, 0, e) && (f = !0), d > 1 && co(t, n, 1, r) && (f = !0), d > 2 && co(t, n, 2, o) && (f = !0), d > 3 && co(t, n, 3, i) && (f = !0), d > 4 && co(t, n, 4, l) && (f = !0), d > 5 && co(t, n, 5, u) && (f = !0), d > 6 && co(t, n, 6, a) && (f = !0), d > 7 && co(t, n, 7, s) && (f = !0), d > 8 && co(t, n, 8, c) && (f = !0), d > 9 && co(t, n, 9, p) && (f = !0), f) {
                                    var g = Yr(t, n.nodeIndex),
                                        v = void 0;
                                    switch (201347067 & n.flags) {
                                        case 32:
                                            v = new Array(h.length), d > 0 && (v[0] = e), d > 1 && (v[1] = r), d > 2 && (v[2] = o), d > 3 && (v[3] = i), d > 4 && (v[4] = l), d > 5 && (v[5] = u), d > 6 && (v[6] = a), d > 7 && (v[7] = s), d > 8 && (v[8] = c), d > 9 && (v[9] = p);
                                            break;
                                        case 64:
                                            v = {}, d > 0 && (v[h[0].name] = e), d > 1 && (v[h[1].name] = r), d > 2 && (v[h[2].name] = o), d > 3 && (v[h[3].name] = i), d > 4 && (v[h[4].name] = l), d > 5 && (v[h[5].name] = u), d > 6 && (v[h[6].name] = a), d > 7 && (v[h[7].name] = s), d > 8 && (v[h[8].name] = c), d > 9 && (v[h[9].name] = p);
                                            break;
                                        case 128:
                                            var y = e;
                                            switch (d) {
                                                case 1:
                                                    v = y.transform(e);
                                                    break;
                                                case 2:
                                                    v = y.transform(r);
                                                    break;
                                                case 3:
                                                    v = y.transform(r, o);
                                                    break;
                                                case 4:
                                                    v = y.transform(r, o, i);
                                                    break;
                                                case 5:
                                                    v = y.transform(r, o, i, l);
                                                    break;
                                                case 6:
                                                    v = y.transform(r, o, i, l, u);
                                                    break;
                                                case 7:
                                                    v = y.transform(r, o, i, l, u, a);
                                                    break;
                                                case 8:
                                                    v = y.transform(r, o, i, l, u, a, s);
                                                    break;
                                                case 9:
                                                    v = y.transform(r, o, i, l, u, a, s, c);
                                                    break;
                                                case 10:
                                                    v = y.transform(r, o, i, l, u, a, s, c, p)
                                            }
                                    }
                                    g.value = v
                                }
                                return f
                            }(t, n, e, r, o, i, l, u, a, s, c, p);
                        default:
                            throw "unreachable"
                    }
                }(t, n, r, o, i, l, u, a, s, c, h, f) : function(t, n, e) {
                    switch (201347067 & n.flags) {
                        case 1:
                            return function(t, n, e) { for (var r = !1, o = 0; o < e.length; o++) Uo(t, n, o, e[o]) && (r = !0); return r }(t, n, e);
                        case 2:
                            return function(t, n, e) {
                                for (var r = n.bindings, o = !1, i = 0; i < e.length; i++) co(t, n, i, e[i]) && (o = !0);
                                if (o) {
                                    var l = "";
                                    for (i = 0; i < e.length; i++) l += Qi(e[i], r[i]);
                                    l = n.text.prefix + l;
                                    var u = Kr(t, n.nodeIndex).renderText;
                                    t.renderer.setValue(u, l)
                                }
                                return o
                            }(t, n, e);
                        case 16384:
                            return function(t, n, e) { for (var r = Zr(t, n.nodeIndex), o = r.instance, i = !1, l = void 0, u = 0; u < e.length; u++) so(t, n, u, e[u]) && (i = !0, l = ji(t, r, n, u, e[u], l)); return l && o.ngOnChanges(l), 65536 & n.flags && Wr(t, 256, n.nodeIndex) && o.ngOnInit(), 262144 & n.flags && o.ngDoCheck(), i }(t, n, e);
                        case 32:
                        case 64:
                        case 128:
                            return function(t, n, e) {
                                for (var r = n.bindings, o = !1, i = 0; i < e.length; i++) co(t, n, i, e[i]) && (o = !0);
                                if (o) {
                                    var l = Yr(t, n.nodeIndex),
                                        u = void 0;
                                    switch (201347067 & n.flags) {
                                        case 32:
                                            u = e;
                                            break;
                                        case 64:
                                            for (u = {}, i = 0; i < e.length; i++) u[r[i].name] = e[i];
                                            break;
                                        case 128:
                                            var a = e[0],
                                                s = e.slice(1);
                                            u = a.transform.apply(a, p(s))
                                    }
                                    l.value = u
                                }
                                return o
                            }(t, n, e);
                        default:
                            throw "unreachable"
                    }
                }(t, n, r)
            }

            function ul(t) {
                var n = t.def;
                if (4 & n.nodeFlags)
                    for (var e = 0; e < n.nodes.length; e++) {
                        var r = n.nodes[e];
                        if (4 & r.flags) {
                            var o = Qr(t, e).template._projectedViews;
                            if (o)
                                for (var i = 0; i < o.length; i++) {
                                    var l = o[i];
                                    l.state |= 32, fo(l, t)
                                }
                        } else 0 == (4 & r.childFlags) && (e += r.childCount)
                    }
            }

            function al(t, n, e, r, o, i, l, u, a, s, c, p, h) {
                return 0 === e ? function(t, n, e, r, o, i, l, u, a, s, c, p) {
                    var h = n.bindings.length;
                    h > 0 && po(t, n, 0, e), h > 1 && po(t, n, 1, r), h > 2 && po(t, n, 2, o), h > 3 && po(t, n, 3, i), h > 4 && po(t, n, 4, l), h > 5 && po(t, n, 5, u), h > 6 && po(t, n, 6, a), h > 7 && po(t, n, 7, s), h > 8 && po(t, n, 8, c), h > 9 && po(t, n, 9, p)
                }(t, n, r, o, i, l, u, a, s, c, p, h) : function(t, n, e) { for (var r = 0; r < e.length; r++) po(t, n, r, e[r]) }(t, n, r), !1
            }

            function sl(t, n) { if (Jr(t, n.nodeIndex).dirty) throw Xr($r.createDebugContext(t, n.nodeIndex), "Query " + n.query.id + " not dirty", "Query " + n.query.id + " dirty", 0 != (1 & t.state)) }

            function cl(t) {
                if (!(128 & t.state)) {
                    if (fl(t, pl.Destroy), hl(t, pl.Destroy), Di(t, 131072), t.disposables)
                        for (var n = 0; n < t.disposables.length; n++) t.disposables[n]();
                    ! function(t) {
                        if (16 & t.state) {
                            var n = vo(t);
                            if (n) {
                                var e = n.template._projectedViews;
                                e && (Jo(e, e.indexOf(t)), $r.dirtyParentQueries(t))
                            }
                        }
                    }(t), t.renderer.destroyNode && function(t) {
                        for (var n = t.def.nodes.length, e = 0; e < n; e++) {
                            var r = t.def.nodes[e];
                            1 & r.flags ? t.renderer.destroyNode(Qr(t, e).renderElement) : 2 & r.flags ? t.renderer.destroyNode(Kr(t, e).renderText) : (67108864 & r.flags || 134217728 & r.flags) && Jr(t, e).destroy()
                        }
                    }(t), bo(t) && t.renderer.destroy(), t.state |= 128
                }
            }
            var pl = function(t) { return t[t.CreateViewNodes = 0] = "CreateViewNodes", t[t.CheckNoChanges = 1] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate = 3] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", t[t.Destroy = 5] = "Destroy", t }({});

            function hl(t, n) {
                var e = t.def;
                if (33554432 & e.nodeFlags)
                    for (var r = 0; r < e.nodes.length; r++) {
                        var o = e.nodes[r];
                        33554432 & o.flags ? dl(Qr(t, r).componentView, n) : 0 == (33554432 & o.childFlags) && (r += o.childCount)
                    }
            }

            function fl(t, n) {
                var e = t.def;
                if (16777216 & e.nodeFlags)
                    for (var r = 0; r < e.nodes.length; r++) {
                        var o = e.nodes[r];
                        if (16777216 & o.flags)
                            for (var i = Qr(t, r).viewContainer._embeddedViews, l = 0; l < i.length; l++) dl(i[l], n);
                        else 0 == (16777216 & o.childFlags) && (r += o.childCount)
                    }
            }

            function dl(t, n) {
                var e = t.state;
                switch (n) {
                    case pl.CheckNoChanges:
                        0 == (128 & e) && (12 == (12 & e) ? ol(t) : 64 & e && gl(t, pl.CheckNoChangesProjectedViews));
                        break;
                    case pl.CheckNoChangesProjectedViews:
                        0 == (128 & e) && (32 & e ? ol(t) : 64 & e && gl(t, n));
                        break;
                    case pl.CheckAndUpdate:
                        0 == (128 & e) && (12 == (12 & e) ? il(t) : 64 & e && gl(t, pl.CheckAndUpdateProjectedViews));
                        break;
                    case pl.CheckAndUpdateProjectedViews:
                        0 == (128 & e) && (32 & e ? il(t) : 64 & e && gl(t, n));
                        break;
                    case pl.Destroy:
                        cl(t);
                        break;
                    case pl.CreateViewNodes:
                        rl(t)
                }
            }

            function gl(t, n) { fl(t, n), hl(t, n) }

            function vl(t, n, e, r) {
                if (t.def.nodeFlags & n && t.def.nodeFlags & e)
                    for (var o = t.def.nodes.length, i = 0; i < o; i++) {
                        var l = t.def.nodes[i];
                        if (l.flags & n && l.flags & e) switch ($r.setCurrentNode(t, l.nodeIndex), r) {
                            case 0:
                                Fi(t, l);
                                break;
                            case 1:
                                sl(t, l)
                        }
                        l.childFlags & n && l.childFlags & e || (i += l.childCount)
                    }
            }
            var yl = !1;

            function ml(t, n, e, r, o, i) { return Xi(_l(t, o, o.injector.get(Ie), n, e), r, i) }

            function bl(t, n, e, r, o, i) {
                var l = o.injector.get(Ie),
                    u = _l(t, o, new tu(l), n, e),
                    a = Tl(r);
                return $l(Ul.create, Xi, null, [u, a, i])
            }

            function _l(t, n, e, r, o) {
                var i = n.injector.get(Br),
                    l = n.injector.get(_n);
                return { ngModule: n, injector: t, projectableNodes: r, selectorOrNode: o, sanitizer: i, rendererFactory: e, renderer: e.createRenderer(null, null), errorHandler: l }
            }

            function wl(t, n, e, r) { var o = Tl(e); return $l(Ul.create, $i, null, [t, n, o, r]) }

            function Cl(t, n, e, r) { return e = Sl.get(n.element.componentProvider.provider.token) || Tl(e), $l(Ul.create, tl, null, [t, n, e, r]) }

            function kl(t, n, e, r) {
                return fi(t, n, e, function(t) {
                    var n = function(t) {
                            var n = !1,
                                e = !1;
                            return 0 === xl.size ? { hasOverrides: n, hasDeprecatedOverrides: e } : (t.providers.forEach(function(t) {
                                var r = xl.get(t.token);
                                3840 & t.flags && r && (n = !0, e = e || r.deprecatedBehavior)
                            }), t.modules.forEach(function(t) { El.forEach(function(r, o) { o.ngInjectableDef.providedIn === t && (n = !0, e = e || r.deprecatedBehavior) }) }), { hasOverrides: n, hasDeprecatedOverrides: e })
                        }(t),
                        e = n.hasDeprecatedOverrides;
                    return n.hasOverrides ? (function(t) {
                        for (var n = 0; n < t.providers.length; n++) {
                            var r = t.providers[n];
                            e && (r.flags |= 4096);
                            var o = xl.get(r.token);
                            o && (r.flags = -3841 & r.flags | o.flags, r.deps = ko(o.deps), r.value = o.value)
                        }
                        if (El.size > 0) {
                            var i = new Set(t.modules);
                            El.forEach(function(n, r) {
                                if (i.has(r.ngInjectableDef.providedIn)) {
                                    var o = { token: r, flags: n.flags | (e ? 4096 : 0), deps: ko(n.deps), value: n.value, index: t.providers.length };
                                    t.providers.push(o), t.providersByKey[oo(r)] = o
                                }
                            })
                        }
                    }(t = t.factory(function() { return eo })), t) : t
                }(r))
            }
            var xl = new Map,
                El = new Map,
                Sl = new Map;

            function Ol(t) { xl.set(t.token, t), "function" == typeof t.token && t.token.ngInjectableDef && "function" == typeof t.token.ngInjectableDef.providedIn && El.set(t.token, t) }

            function Pl(t, n) {
                var e = So(So(n.viewDefFactory).nodes[0].element.componentView);
                Sl.set(t, e)
            }

            function Al() { xl.clear(), El.clear(), Sl.clear() }

            function Tl(t) {
                if (0 === xl.size) return t;
                var n = function(t) {
                    for (var n = [], e = null, r = 0; r < t.nodes.length; r++) {
                        var o = t.nodes[r];
                        1 & o.flags && (e = o), e && 3840 & o.flags && xl.has(o.provider.token) && (n.push(e.nodeIndex), e = null)
                    }
                    return n
                }(t);
                if (0 === n.length) return t;
                t = t.factory(function() { return eo });
                for (var e = 0; e < n.length; e++) r(t, n[e]);
                return t;

                function r(t, n) {
                    for (var e = n + 1; e < t.nodes.length; e++) {
                        var r = t.nodes[e];
                        if (1 & r.flags) return;
                        if (3840 & r.flags) {
                            var o = r.provider,
                                i = xl.get(o.token);
                            i && (r.flags = -3841 & r.flags | i.flags, o.deps = ko(i.deps), o.value = i.value)
                        }
                    }
                }
            }

            function Il(t, n, e, r, o, i, l, u, a, s, c, p, h) { var f = t.def.nodes[n]; return ll(t, f, e, r, o, i, l, u, a, s, c, p, h), 224 & f.flags ? Yr(t, n).value : void 0 }

            function Ml(t, n, e, r, o, i, l, u, a, s, c, p, h) { var f = t.def.nodes[n]; return al(t, f, e, r, o, i, l, u, a, s, c, p, h), 224 & f.flags ? Yr(t, n).value : void 0 }

            function Nl(t) { return $l(Ul.detectChanges, il, null, [t]) }

            function Rl(t) { return $l(Ul.checkNoChanges, ol, null, [t]) }

            function jl(t) { return $l(Ul.destroy, cl, null, [t]) }
            var Dl, Vl, Ll, Ul = function(t) { return t[t.create = 0] = "create", t[t.detectChanges = 1] = "detectChanges", t[t.checkNoChanges = 2] = "checkNoChanges", t[t.destroy = 3] = "destroy", t[t.handleEvent = 4] = "handleEvent", t }({});

            function Hl(t, n) { Vl = t, Ll = n }

            function Fl(t, n, e, r) { return Hl(t, n), $l(Ul.handleEvent, t.def.handleEvent, null, [t, n, e, r]) }

            function zl(t, n) { if (128 & t.state) throw no(Ul[Dl]); return Hl(t, Ql(t, 0)), t.def.updateDirectives(function(t, e, r) { for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i]; var l = t.def.nodes[e]; return 0 === n ? Bl(t, l, r, o) : Gl(t, l, r, o), 16384 & l.flags && Hl(t, Ql(t, e)), 224 & l.flags ? Yr(t, l.nodeIndex).value : void 0 }, t) }

            function ql(t, n) { if (128 & t.state) throw no(Ul[Dl]); return Hl(t, Zl(t, 0)), t.def.updateRenderer(function(t, e, r) { for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i]; var l = t.def.nodes[e]; return 0 === n ? Bl(t, l, r, o) : Gl(t, l, r, o), 3 & l.flags && Hl(t, Zl(t, e)), 224 & l.flags ? Yr(t, l.nodeIndex).value : void 0 }, t) }

            function Bl(t, n, e, r) {
                if (ll.apply(void 0, p([t, n, e], r))) {
                    var o = 1 === e ? r[0] : r;
                    if (16384 & n.flags) {
                        for (var i = {}, l = 0; l < n.bindings.length; l++) {
                            var u = n.bindings[l],
                                a = o[l];
                            8 & u.flags && (i[(f = u.nonMinifiedName, "ng-reflect-" + (f = f.replace(/[$@]/g, "_").replace(Wl, function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; return "-" + t[1].toLowerCase() })))] = Kl(a))
                        }
                        var s = n.parent,
                            c = Qr(t, s.nodeIndex).renderElement;
                        if (s.element.name)
                            for (var h in i) null != (a = i[h]) ? t.renderer.setAttribute(c, h, a) : t.renderer.removeAttribute(c, h);
                        else t.renderer.setValue(c, "bindings=" + JSON.stringify(i, null, 2))
                    }
                }
                var f
            }

            function Gl(t, n, e, r) { al.apply(void 0, p([t, n, e], r)) }
            var Wl = /([A-Z])/g;

            function Kl(t) { try { return null != t ? t.toString().slice(0, 30) : t } catch (t) { return "[ERROR] Exception while trying to serialize the value" } }

            function Ql(t, n) { for (var e = n; e < t.def.nodes.length; e++) { var r = t.def.nodes[e]; if (16384 & r.flags && r.bindings && r.bindings.length) return e } return null }

            function Zl(t, n) { for (var e = n; e < t.def.nodes.length; e++) { var r = t.def.nodes[e]; if (3 & r.flags && r.bindings && r.bindings.length) return e } return null }
            var Yl = function() {
                function t(t, n) {
                    this.view = t, this.nodeIndex = n, null == n && (this.nodeIndex = n = 0), this.nodeDef = t.def.nodes[n];
                    for (var e = this.nodeDef, r = t; e && 0 == (1 & e.flags);) e = e.parent;
                    if (!e)
                        for (; !e && r;) e = yo(r), r = r.parent;
                    this.elDef = e, this.elView = r
                }
                return Object.defineProperty(t.prototype, "elOrCompView", { get: function() { return Qr(this.elView, this.elDef.nodeIndex).componentView || this.view }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "injector", { get: function() { return ai(this.elView, this.elDef) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "component", { get: function() { return this.elOrCompView.component }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function() { return this.elOrCompView.context }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "providerTokens", {
                    get: function() {
                        var t = [];
                        if (this.elDef)
                            for (var n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
                                var e = this.elView.def.nodes[n];
                                20224 & e.flags && t.push(e.provider.token), n += e.childCount
                            }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "references", {
                    get: function() {
                        var t = {};
                        if (this.elDef) {
                            Jl(this.elView, this.elDef, t);
                            for (var n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
                                var e = this.elView.def.nodes[n];
                                20224 & e.flags && Jl(this.elView, e, t), n += e.childCount
                            }
                        }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "componentRenderElement", { get: function() { var t = function(t) { for (; t && !bo(t);) t = t.parent; return t.parent ? Qr(t.parent, yo(t).nodeIndex) : null }(this.elOrCompView); return t ? t.renderElement : void 0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "renderNode", { get: function() { return 2 & this.nodeDef.flags ? mo(this.view, this.nodeDef) : mo(this.elView, this.elDef) }, enumerable: !0, configurable: !0 }), t.prototype.logError = function(t) {
                    for (var n, e, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                    2 & this.nodeDef.flags ? (n = this.view.def, e = this.nodeDef.nodeIndex) : (n = this.elView.def, e = this.elDef.nodeIndex);
                    var i = function(t, n) { for (var e = -1, r = 0; r <= n; r++) 3 & t.nodes[r].flags && e++; return e }(n, e),
                        l = -1;
                    n.factory(function() { var n; return ++l === i ? (n = t.error).bind.apply(n, p([t], r)) : eo }), l < i && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, p(r)))
                }, t
            }();

            function Jl(t, n, e) { for (var r in n.references) e[r] = qi(t, n, n.references[r]) }

            function $l(t, n, e, r) {
                var o = Dl,
                    i = Vl,
                    l = Ll;
                try { Dl = t; var u = n.apply(e, r); return Vl = i, Ll = l, Dl = o, u } catch (t) {
                    if (yn(t) || !Vl) throw t;
                    throw

                    function(t, n) { return t instanceof Error || (t = new Error(t.toString())), to(t, n), t }(t, Xl())
                }
            }

            function Xl() { return Vl ? new Yl(Vl, Ll) : null }
            var tu = function() {
                    function t(t) { this.delegate = t }
                    return t.prototype.createRenderer = function(t, n) { return new nu(this.delegate.createRenderer(t, n)) }, t.prototype.begin = function() { this.delegate.begin && this.delegate.begin() }, t.prototype.end = function() { this.delegate.end && this.delegate.end() }, t.prototype.whenRenderingDone = function() { return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null) }, t
                }(),
                nu = function() {
                    function t(t) { this.delegate = t, this.data = this.delegate.data }
                    return t.prototype.destroyNode = function(t) {! function(t) { We.delete(t.nativeNode) }(Ke(t)), this.delegate.destroyNode && this.delegate.destroyNode(t) }, t.prototype.destroy = function() { this.delegate.destroy() }, t.prototype.createElement = function(t, n) {
                        var e = this.delegate.createElement(t, n),
                            r = Xl();
                        if (r) {
                            var o = new Ge(e, null, r);
                            o.name = t, Qe(o)
                        }
                        return e
                    }, t.prototype.createComment = function(t) {
                        var n = this.delegate.createComment(t),
                            e = Xl();
                        return e && Qe(new Be(n, null, e)), n
                    }, t.prototype.createText = function(t) {
                        var n = this.delegate.createText(t),
                            e = Xl();
                        return e && Qe(new Be(n, null, e)), n
                    }, t.prototype.appendChild = function(t, n) {
                        var e = Ke(t),
                            r = Ke(n);
                        e && r && e instanceof Ge && e.addChild(r), this.delegate.appendChild(t, n)
                    }, t.prototype.insertBefore = function(t, n, e) {
                        var r = Ke(t),
                            o = Ke(n),
                            i = Ke(e);
                        r && o && r instanceof Ge && r.insertBefore(i, o), this.delegate.insertBefore(t, n, e)
                    }, t.prototype.removeChild = function(t, n) {
                        var e = Ke(t),
                            r = Ke(n);
                        e && r && e instanceof Ge && e.removeChild(r), this.delegate.removeChild(t, n)
                    }, t.prototype.selectRootElement = function(t) {
                        var n = this.delegate.selectRootElement(t),
                            e = Xl();
                        return e && Qe(new Ge(n, null, e)), n
                    }, t.prototype.setAttribute = function(t, n, e, r) {
                        var o = Ke(t);
                        o && o instanceof Ge && (o.attributes[r ? r + ":" + n : n] = e), this.delegate.setAttribute(t, n, e, r)
                    }, t.prototype.removeAttribute = function(t, n, e) {
                        var r = Ke(t);
                        r && r instanceof Ge && (r.attributes[e ? e + ":" + n : n] = null), this.delegate.removeAttribute(t, n, e)
                    }, t.prototype.addClass = function(t, n) {
                        var e = Ke(t);
                        e && e instanceof Ge && (e.classes[n] = !0), this.delegate.addClass(t, n)
                    }, t.prototype.removeClass = function(t, n) {
                        var e = Ke(t);
                        e && e instanceof Ge && (e.classes[n] = !1), this.delegate.removeClass(t, n)
                    }, t.prototype.setStyle = function(t, n, e, r) {
                        var o = Ke(t);
                        o && o instanceof Ge && (o.styles[n] = e), this.delegate.setStyle(t, n, e, r)
                    }, t.prototype.removeStyle = function(t, n, e) {
                        var r = Ke(t);
                        r && r instanceof Ge && (r.styles[n] = null), this.delegate.removeStyle(t, n, e)
                    }, t.prototype.setProperty = function(t, n, e) {
                        var r = Ke(t);
                        r && r instanceof Ge && (r.properties[n] = e), this.delegate.setProperty(t, n, e)
                    }, t.prototype.listen = function(t, n, e) {
                        if ("string" != typeof t) {
                            var r = Ke(t);
                            r && r.listeners.push(new function(t, n) { this.name = t, this.callback = n }(n, e))
                        }
                        return this.delegate.listen(t, n, e)
                    }, t.prototype.parentNode = function(t) { return this.delegate.parentNode(t) }, t.prototype.nextSibling = function(t) { return this.delegate.nextSibling(t) }, t.prototype.setValue = function(t, n) { return this.delegate.setValue(t, n) }, t
                }(),
                eu = function(t) {
                    function n(n, e, r) { var o = t.call(this) || this; return o.moduleType = n, o._bootstrapComponents = e, o._ngModuleDefFactory = r, o }
                    return o(n, t), n.prototype.create = function(t) {
                        ! function() {
                            if (!yl) {
                                yl = !0;
                                var t = ke() ? { setCurrentNode: Hl, createRootView: bl, createEmbeddedView: wl, createComponentView: Cl, createNgModuleRef: kl, overrideProvider: Ol, overrideComponentView: Pl, clearOverrides: Al, checkAndUpdateView: Nl, checkNoChangesView: Rl, destroyView: jl, createDebugContext: function(t, n) { return new Yl(t, n) }, handleEvent: Fl, updateDirectives: zl, updateRenderer: ql } : { setCurrentNode: function() {}, createRootView: ml, createEmbeddedView: $i, createComponentView: tl, createNgModuleRef: fi, overrideProvider: eo, overrideComponentView: eo, clearOverrides: eo, checkAndUpdateView: il, checkNoChangesView: ol, destroyView: cl, createDebugContext: function(t, n) { return new Yl(t, n) }, handleEvent: function(t, n, e, r) { return t.def.handleEvent(t, n, e, r) }, updateDirectives: function(t, n) { return t.def.updateDirectives(0 === n ? Il : Ml, t) }, updateRenderer: function(t, n) { return t.def.updateRenderer(0 === n ? Il : Ml, t) } };
                                $r.setCurrentNode = t.setCurrentNode, $r.createRootView = t.createRootView, $r.createEmbeddedView = t.createEmbeddedView, $r.createComponentView = t.createComponentView, $r.createNgModuleRef = t.createNgModuleRef, $r.overrideProvider = t.overrideProvider, $r.overrideComponentView = t.overrideComponentView, $r.clearOverrides = t.clearOverrides, $r.checkAndUpdateView = t.checkAndUpdateView, $r.checkNoChangesView = t.checkNoChangesView, $r.destroyView = t.destroyView, $r.resolveDep = Ni, $r.createDebugContext = t.createDebugContext, $r.handleEvent = t.handleEvent, $r.updateDirectives = t.updateDirectives, $r.updateRenderer = t.updateRenderer, $r.dirtyParentQueries = Hi
                            }
                        }();
                        var n = function(t) {
                            var n = Array.from(t.providers),
                                e = Array.from(t.modules),
                                r = {};
                            for (var o in t.providersByKey) r[o] = t.providersByKey[o];
                            return { factory: t.factory, isRoot: t.isRoot, providers: n, modules: e, providersByKey: r }
                        }(So(this._ngModuleDefFactory));
                        return $r.createNgModuleRef(this.moduleType, t || Kt.NULL, this._bootstrapComponents, n)
                    }, n
                }(re),
                ru = 16,
                ou = 0,
                iu = 1,
                lu = 2,
                uu = 3,
                au = 4,
                su = 5,
                cu = 6,
                pu = 7,
                hu = 8,
                fu = 9,
                du = 10,
                gu = 11,
                vu = 14;

            function yu(t, n, e) { t.afterContentInit && (n.contentHooks || (n.contentHooks = [])).push(e, t.afterContentInit), t.afterContentChecked && ((n.contentHooks || (n.contentHooks = [])).push(e, t.afterContentChecked), (n.contentCheckHooks || (n.contentCheckHooks = [])).push(e, t.afterContentChecked)) }

            function mu(t, n, e) { t.afterViewInit && (n.viewHooks || (n.viewHooks = [])).push(e, t.afterViewInit), t.afterViewChecked && ((n.viewHooks || (n.viewHooks = [])).push(e, t.afterViewChecked), (n.viewCheckHooks || (n.viewCheckHooks = [])).push(e, t.afterViewChecked)) }

            function bu(t, n, e) { null != t.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(e, t.onDestroy) }

            function _u(t, n, e) { 16 & t[au] && (wu(t[pu], n.initHooks, n.checkHooks, e), t[au] &= -17) }

            function wu(t, n, e, r) {
                var o = r ? n : e;
                o && Cu(t, o)
            }

            function Cu(t, n) { for (var e = 0; e < n.length; e += 2) n[e + 1].call(t[n[e]]) }
            var ku = 0,
                xu = 4,
                Eu = "ngProjectAs";

            function Su(t) { return !!t.listen }
            var Ou = { createRenderer: function(t, n) { return document } };

            function Pu(t) { return Array.isArray(t) ? t[0] : t }

            function Au(t) { if (2 === t.tNode.type) { var n = t.data; return n[lu] ? n[lu][su] : null } return t.tNode.next ? t.view[t.tNode.next.index] : null }

            function Tu(t) { return t.tNode.child ? Pu((2 === t.tNode.type ? t.data : t.view)[t.tNode.child.index]) : null }

            function Iu(t) { if (-1 === t.tNode.index && 2 === t.tNode.type) { var n = t.data[vu]; return -1 === n ? null : t.view[n].dynamicLContainerNode } var e = t.tNode.parent; return Pu(e ? t.view[e.index] : t.view[su]) }
            var Mu = [];

            function Nu(t) { for (var n = t[su]; 2 === n.tNode.type;) n = (t = t[iu])[su]; return n }

            function Ru(t, n, e, r, o) { 0 === t ? Su(n) ? n.insertBefore(e, r, o) : e.insertBefore(r, o, !0) : 1 === t ? Su(n) ? n.removeChild(e, r) : e.removeChild(r) : 2 === t && n.destroyNode(r) }

            function ju(t) { if (-1 === t[ou].childIndex) return null; var n = t[t[ou].childIndex]; return n.data ? n.data : n.dynamicLContainerNode.data }

            function Du(t, n) { var e; return (e = t[su]) && 2 === e.tNode.type ? Iu(e).data : t[iu] === n ? null : t[iu] }

            function Vu(t) {
                if (t[ou]) {
                    var n = t;
                    ! function(t) {
                        var n = t[ou].cleanup;
                        if (null != n) {
                            for (var e = 0; e < n.length - 1; e += 2) "string" == typeof n[e] ? (Pu(t[n[e + 1]]).native.removeEventListener(n[e], t[hu][n[e + 2]], n[e + 3]), e += 2) : "number" == typeof n[e] ? (0, t[hu][n[e]])() : n[e].call(t[hu][n[e + 1]]);
                            t[hu] = null
                        }
                    }(n),
                    function(t) {
                        var n, e = t[ou];
                        null != e && null != (n = e.destroyHooks) && Cu(t[pu], n)
                    }(n), (r = (e = n)[ou] && e[ou].pipeDestroyHooks) && Cu(e, r), -1 === n[ou].id && Su(n[gu]) && n[gu].destroy()
                }
                var e, r
            }
            var Lu, Uu, Hu, Fu, zu, qu, Bu, Gu, Wu, Ku = "__ngHostLNode__",
                Qu = Promise.resolve(null),
                Zu = [0, 0],
                Yu = new Array(ru).fill(null),
                Ju = !1,
                $u = !0;

            function Xu(t, n) { var e = Gu; return Wu = t && t[pu], zu = t && t[ou], Bu = t && 1 == (1 & t[au]), $u = t && zu.firstTemplatePass, Lu = t && t[gu], null != n && (Hu = n, Fu = !0), Gu = t, qu = t && t[uu], e }

            function ta(t, n) { n || (Ju || wu(Wu, zu.viewHooks, zu.viewCheckHooks, Bu), Gu[au] &= -6), Gu[au] |= 16, Gu[cu] = -1, Xu(t, null) }

            function na() {
                Ju || _u(Gu, zu, Bu),
                    function(t) {
                        for (var n = ju(Gu); null !== n; n = n[lu])
                            if (n.length < ru && null === n[ku])
                                for (var e = n, r = 0; r < e[xu].length; r++) {
                                    var o = e[xu][r],
                                        i = o.data;
                                    ia(o, i[ou], i[fu], 2)
                                }
                    }(), Ju || wu(Wu, zu.contentHooks, zu.contentCheckHooks, Bu), zu.firstTemplatePass = $u = !1, ea(zu.hostBindings),
                    function(t) {
                        if (null != t.contentQueries)
                            for (var n = 0; n < t.contentQueries.length; n += 2) {
                                var e = t.contentQueries[n];
                                t.directives[e].contentQueriesRefresh(e, t.contentQueries[n + 1])
                            }
                    }(zu),
                    function(t) {
                        if (null != t)
                            for (var n = 0; n < t.length; n += 2) fa(t[n], t[n + 1])
                    }(zu.components)
            }

            function ea(t) {
                if (null != t)
                    for (var n = zu.directives, e = 0; e < t.length; e += 2) {
                        var r = t[e],
                            o = n[r];
                        o.hostBindings && o.hostBindings(r, t[e + 1])
                    }
            }

            function ra(t, n, e, r, o) { return [n, Gu, null, null, 25 | r, null, -1, null, null, e, Gu && Gu[du], t, o || null, null, -1, null] }

            function oa(t, n, e, r, o, i) {
                var l = Fu ? Hu : Hu && Iu(Hu),
                    u = l && l.view === Gu ? l.tNode : null,
                    a = (Fu ? qu : Hu && Hu.queries) || l && l.queries && l.queries.child(),
                    s = null != i,
                    c = function(t, n, e, r, o, i) { return { native: r, view: Gu, nodeInjector: e ? e.nodeInjector : null, data: o, queries: i, tNode: null, dynamicLContainerNode: null } }(0, 0, l, e, s ? i : null, a);
                if (-1 === t || 2 === n) c.tNode = (i ? i[ou].node : null) || ha(n, t, null, null, u, null);
                else {
                    var p = t + ru,
                        h = zu.data;
                    if (Gu[p] = c, p >= h.length) {
                        var f = h[p] = ha(n, p, r, o, u, null);
                        if (!Fu && Hu) {
                            var d = Hu.tNode;
                            d.next = f, d.dynamicContainerNode && (d.dynamicContainerNode.next = f)
                        }
                    }
                    c.tNode = h[p], Fu && (qu = null, (null == Hu.tNode.child && Hu.view === Gu || 2 === Hu.tNode.type) && (Hu.tNode.child = c.tNode))
                }
                if (2 == (2 & n) && s) {
                    var g = i;
                    g[su] = c, $u && (g[ou].node = c.tNode)
                }
                return Hu = c, Fu = !0, c
            }

            function ia(t, n, e, r) {
                var o, i = Fu,
                    l = Hu;
                if (null == t.data[iu] && t.data[fu] && !n.template) ga(t.data[fu]);
                else try { Fu = !0, Hu = null, o = Xu(t.data, t), sa(), n.template(r, e), 2 & r ? na() : t.data[ou].firstTemplatePass = $u = !1 } finally { ta(o, 1 == (1 & r)), Fu = i, Hu = l }
                return t
            }

            function la(t, n, e, r) { var o = Xu(n, t); try { Uu.begin && Uu.begin(), r ? (sa(), r(ua(n), e), na()) : (Ju || (_u(Gu, zu, Bu), wu(Wu, zu.contentHooks, zu.contentCheckHooks, Bu)), ea(Zu), fa(0, ru)) } finally { Uu.end && Uu.end(), ta(o) } }

            function ua(t) { return 1 & t[au] ? 3 : 2 }
            var aa = null;

            function sa() { aa = null }

            function ca(t, n, e, r, o) { return { id: t, template: n, viewQuery: o, node: null, data: Yu.slice(), childIndex: -1, bindingStartIndex: -1, directives: null, firstTemplatePass: !0, initHooks: null, checkHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, pipeDestroyHooks: null, cleanup: null, hostBindings: null, contentQueries: null, components: null, directiveRegistry: "function" == typeof e ? e() : e, pipeRegistry: "function" == typeof r ? r() : r, currentMatches: null } }

            function pa(t, n) { Uu = t; var e = t.createRenderer(null, null); return "string" == typeof n ? Su(e) ? e.selectRootElement(n) : e.querySelector(n) : n }

            function ha(t, n, e, r, o, i) { return { type: t, index: n, flags: 0, tagName: e, attrs: r, localNames: null, initialInputs: void 0, inputs: void 0, outputs: void 0, tViews: i, next: null, child: null, parent: o, dynamicContainerNode: null, detached: null, stylingTemplate: null, projection: null } }

            function fa(t, n) {
                var e = Gu[n],
                    r = e.data;
                da(r) && 6 & r[au] && ma(r, e, Wu[t])
            }

            function da(t) { return 8 == (8 & t[au]) }

            function ga(t) {
                for (var n = 0; n < t.components.length; n++) {
                    var e = t.components[n];
                    la(ba(e), va(e), e)
                }
            }

            function va(t) { for (var n = ba(t).view; n[iu];) n = n[iu]; return n }

            function ya(t) {
                var n = ba(t);
                ma(n.data, n, t)
            }

            function ma(t, n, e) {
                var r = Xu(t, n),
                    o = t[ou],
                    i = o.template,
                    l = o.viewQuery;
                try {
                    sa(),
                        function(n, e, r) { n && 1 & t[au] && n(1, r) }(l, 0, e), i(ua(t), e), na(),
                        function(t, n) { t && t(2, n) }(l, e)
                } finally { ta(r) }
            }

            function ba(t) { return t[Ku] }
            var _a = Qu;

            function wa(t) { return { components: [], scheduler: t, clean: _a } }
            var Ca = function() {
                    function t(t, n) { this._view = t, this._appRef = null, this._viewContainerRef = null, this._lViewNode = null, this.context = n }
                    return t.prototype._setComponentContext = function(t, n) { this._view = t, this.context = n }, Object.defineProperty(t.prototype, "destroyed", { get: function() { return 32 == (32 & this._view[au]) }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function() {
                        var t, n;
                        this._viewContainerRef && da(this._view) && (this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), this._viewContainerRef = null), Su(n = (t = this._view)[gu]) && n.destroyNode && function(n, e, r, o, i, l) {
                                for (var u = t[su], a = -1; u;) {
                                    var s = null,
                                        c = u.tNode.type;
                                    if (3 === c) Ru(2, o, null, u.native, l), u.dynamicLContainerNode && Ru(2, o, null, u.dynamicLContainerNode.native, l);
                                    else if (0 === c) {
                                        Ru(2, o, null, u.native, l);
                                        var p = u,
                                            h = p.dynamicLContainerNode ? p.dynamicLContainerNode.data : p.data;
                                        (s = h[xu].length ? Tu(h[xu][0]) : null) && (l = p.dynamicLContainerNode ? p.dynamicLContainerNode.native : p.native)
                                    } else if (1 === c) {
                                        var f = Nu(u.view),
                                            d = f.tNode.projection[u.tNode.projection];
                                        Mu[++a] = u, s = d ? f.data[iu][d.index] : null
                                    } else s = Tu(u);
                                    if (null === s)
                                        for (null === (s = Au(u)) && 8192 & u.tNode.flags && (s = Au(Mu[a--])); u && !s;) {
                                            if (null === (u = Iu(u)) || u === e) return null;
                                            u.tNode.next || 0 !== c || (l = u.native), s = Au(u)
                                        }
                                    u = s
                                }
                            }(0, t[su], 0, n),
                            function(t) {
                                if (-1 === t[ou].childIndex) return Vu(t);
                                for (var n = ju(t); n;) {
                                    var e = null;
                                    if (n.length >= ru ? n[ou].childIndex > -1 && (e = ju(n)) : n[xu].length && (e = n[xu][0].data), null == e) {
                                        for (; n && !n[lu] && n !== t;) Vu(n), n = Du(n, t);
                                        Vu(n || t), e = n && n[lu]
                                    }
                                    n = e
                                }
                            }(t), t[au] |= 32
                    }, t.prototype.onDestroy = function(t) {
                        var n, e;
                        e = t,
                            function(t) { return t[hu] || (t[hu] = []) }(n = this._view).push(e), n[ou].firstTemplatePass && function(t) { return t[ou].cleanup || (t[ou].cleanup = []) }(n).push(n[hu].length - 1, null)
                    }, t.prototype.markForCheck = function() {
                        ! function(t) {
                            for (var n = t; null != n[iu];) n[au] |= 4, n = n[iu];
                            var e, r;
                            n[au] |= 4, (e = n[fu]).clean == Qu && (e.clean = new Promise(function(t) { return r = t }), e.scheduler(function() { ga(e), r(null), e.clean = Qu }))
                        }(this._view)
                    }, t.prototype.detach = function() { this._view[au] &= -9 }, t.prototype.reattach = function() { this._view[au] |= 8 }, t.prototype.detectChanges = function() { ya(this.context) }, t.prototype.checkNoChanges = function() {! function(t) { Ju = !0; try { ya(t) } finally { Ju = !1 } }(this.context) }, t.prototype.attachToViewContainerRef = function(t) { this._viewContainerRef = t }, t.prototype.detachFromAppRef = function() { this._appRef = null }, t.prototype.attachToAppRef = function(t) { this._appRef = t }, t
                }(),
                ka = function(t) {
                    function n() { return null !== t && t.apply(this, arguments) || this }
                    return o(n, t), n.prototype.resolveComponentFactory = function(t) { return new Oa(t.ngComponentDef) }, n
                }(Xn);

            function xa(t) { var n = []; for (var e in t) t.hasOwnProperty(e) && n.push({ propName: t[e], templateName: e }); return n }
            var Ea = new vt("ROOT_CONTEXT_TOKEN", { providedIn: "root", factory: function() { return wa(cn(Sa)) } }),
                Sa = new vt("SCHEDULER_TOKEN", { providedIn: "root", factory: function() { return requestAnimationFrame.bind(window) } }),
                Oa = function(t) {
                    function n(n) { var e = t.call(this) || this; return e.componentDef = n, e.componentType = n.type, e.selector = n.selectors[0][0], e.ngContentSelectors = [], e }
                    return o(n, t), Object.defineProperty(n.prototype, "inputs", { get: function() { return xa(this.componentDef.inputs) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "outputs", { get: function() { return xa(this.componentDef.outputs) }, enumerable: !0, configurable: !0 }), n.prototype.create = function(t, n, e, r) {
                        var o, i, l = void 0 === e,
                            u = r ? r.injector.get(Ie) : Ou,
                            a = l ? (o = this.selector, Su(i = u.createRenderer(null, this.componentDef.rendererType) || Lu) ? i.createElement(o, aa) : null === aa ? i.createElement(o) : i.createElementNS(aa, o)) : pa(u, e),
                            s = r && !l ? r.injector.get(Ea) : wa(requestAnimationFrame.bind(window)),
                            c = ra(u.createRenderer(a, this.componentDef.rendererType), ca(-1, null, null, null, null), s, this.componentDef.onPush ? 4 : 2);
                        c[du] = r && r.injector || null;
                        var p, h, f = Xu(c, null);
                        try {
                            if (u.begin && u.begin(), h = function(t, n, e, r) { Fu = !1, Hu = null; var o, i = oa(0, 3, n, null, null, ra(Lu, (o = e.template).ngPrivateData || (o.ngPrivateData = ca(-1, o, e.directiveDefs, e.pipeDefs, e.viewQuery)), null, e.onPush ? 4 : 2, r)); return $u && (i.tNode.flags = 4096, e.diPublic && e.diPublic(e), zu.directives = [e]), i }(0, a, this.componentDef), s.components.push(p = function(t, n, e) {
                                    if (Object.defineProperty(n, Ku, { enumerable: !1, value: Hu }), null == Wu && (Gu[pu] = Wu = []), Wu[t] = n, $u) {
                                        var r = Hu.tNode.flags;
                                        0 == (4095 & r) ? Hu.tNode.flags = t << 14 | 4096 & r | 1 : Hu.tNode.flags++
                                    } else {
                                        var o = e.diPublic;
                                        o && o(e)
                                    }
                                    return null != e.attributes && 3 == Hu.tNode.type && function(t, n) {
                                        for (var e = Su(Lu), r = 0; r < n.length;) {
                                            var o = n[r];
                                            if (1 === o) break;
                                            if (o === Eu) r += 2;
                                            else if (0 === o) {
                                                var i = n[r + 1],
                                                    l = n[r + 2],
                                                    u = n[r + 3];
                                                e ? Lu.setAttribute(t, l, u, i) : t.setAttributeNS(i, l, u), r += 4
                                            } else u = n[r + 1], e ? Lu.setAttribute(t, o, u) : t.setAttribute(o, u), r += 2
                                        }
                                    }(Hu.native, e.attributes), n
                                }(0, this.componentDef.factory(), this.componentDef)), function(t, n, e) { t && null != t.changeDetectorRef && t.changeDetectorRef._setComponentContext(h.data, p) }(h.nodeInjector), function(t, n) {
                                    var e = ba(t),
                                        r = e.view[ou];
                                    (function(t, n, e, r) { n && (r.initHooks || (r.initHooks = [])).push(0, n), e && ((r.initHooks || (r.initHooks = [])).push(0, e), (r.checkHooks || (r.checkHooks = [])).push(0, e)) })(0, n.onInit, n.doCheck, r),
                                    function(t, n) {
                                        if (n.firstTemplatePass)
                                            for (var e = t >> 14, r = e + (4095 & t), o = e; o < r; o++) {
                                                var i = n.directives[o];
                                                yu(i, n, o), mu(i, n, o), bu(i, n, o)
                                            }
                                    }(e.tNode.flags, r)
                                }(p, this.componentDef), n)
                                for (var d = 0, g = h.tNode.projection = [], v = 0; v < n.length; v++) {
                                    for (var y = n[v], m = null, b = null, _ = 0; _ < y.length; _++) {
                                        var w = oa(++d, 3, y[_], null, null);
                                        b ? b.next = w.tNode : m = w.tNode, b = w.tNode
                                    }
                                    g.push(m)
                                }
                            ia(h, h.data[ou], p, 1), h.data[au] &= -2
                        } finally { Xu(f, null), u.end && u.end() }
                        var C = new Pa(this.componentType, p, c, t, a);
                        return l && (C.hostView._lViewNode.tNode.child = h.tNode), C
                    }, n
                }(Kn),
                Pa = function(t) {
                    function n(n, e, r, o, i) { var l = t.call(this) || this; return l.destroyCbs = [], l.instance = e, l.hostView = l.changeDetectorRef = new Ca(r, e), l.hostView._lViewNode = oa(-1, 2, null, null, null, r), l.injector = o, l.location = new Re(i), l.componentType = n, l }
                    return o(n, t), n.prototype.destroy = function() { this.destroyCbs.forEach(function(t) { return t() }), this.destroyCbs = null }, n.prototype.onDestroy = function(t) { this.destroyCbs.push(t) }, n
                }(Wn),
                Aa = { provide: Xn, useFactory: function() { return new ka }, deps: [] },
                Ta = function(t) {
                    function n(n, e) { var r = t.call(this) || this; return r._bootstrapComponents = [], r.destroyCbs = [], r._bootstrapComponents = n.ngModuleDef.bootstrap, r.injector = function(t, n, e) { return void 0 === n && (n = null), void 0 === e && (e = null), n = n || Sn(), new On(t, e, n) }(n, e, [Aa, { provide: ee, useValue: r }]), r.instance = r.injector.get(n), r.componentFactoryResolver = new ka, r }
                    return o(n, t), n.prototype.destroy = function() { this.destroyCbs.forEach(function(t) { return t() }), this.destroyCbs = null }, n.prototype.onDestroy = function(t) { this.destroyCbs.push(t) }, n
                }(ee);
            ! function(t) {
                function n(n) { var e = t.call(this) || this; return e.moduleType = n, e }
                o(n, t), n.prototype.create = function(t) { return new Ta(this.moduleType, t) }
            }(re);
            var Ia = function() {},
                Ma = function() { this.title = "Agartuu" },
                Na = new N(function(t) { return t.complete() });

            function Ra(t) { return t ? function(t) { return new N(function(n) { return t.schedule(function() { return n.complete() }) }) }(t) : Na }

            function ja() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var e, r, o = t[t.length - 1];
                switch (H(o) ? t.pop() : o = void 0, t.length) {
                    case 0:
                        return Ra(o);
                    case 1:
                        return o ? nt(t, o) : (e = t[0], (r = new N(function(t) { t.next(e), t.complete() }))._isScalar = !0, r.value = e, r);
                    default:
                        return nt(t, o)
                }
            }
            var Da = function(t) {
                    function n() { var e = t.call(this, "no elements in sequence") || this; return e.name = "EmptyError", Object.setPrototypeOf(e, n.prototype), e }
                    return o(n, t), n
                }(Error),
                Va = function(t) {
                    function n(n) { var e = t.call(this) || this; return e._value = n, e }
                    return o(n, t), Object.defineProperty(n.prototype, "value", { get: function() { return this.getValue() }, enumerable: !0, configurable: !0 }), n.prototype._subscribe = function(n) { var e = t.prototype._subscribe.call(this, n); return e && !e.closed && n.next(this._value), e }, n.prototype.getValue = function() { if (this.hasError) throw this.thrownError; if (this.closed) throw new j; return this._value }, n.prototype.next = function(n) { t.prototype.next.call(this, this._value = n) }, n
                }(L);

            function La() { return ut(1) }

            function Ua(t, n) { return function(e) { return e.lift(new Ha(t, n)) } }
            var Ha = function() {
                    function t(t, n) { this.predicate = t, this.thisArg = n }
                    return t.prototype.call = function(t, n) { return n.subscribe(new Fa(t, this.predicate, this.thisArg)) }, t
                }(),
                Fa = function(t) {
                    function n(n, e, r) { var o = t.call(this, n) || this; return o.predicate = e, o.thisArg = r, o.count = 0, o }
                    return o(n, t), n.prototype._next = function(t) {
                        var n;
                        try { n = this.predicate.call(this.thisArg, t, this.count++) } catch (t) { return void this.destination.error(t) }
                        n && this.destination.next(t)
                    }, n
                }(O),
                za = function(t) {
                    function n() { var e = t.call(this, "argument out of range") || this; return e.name = "ArgumentOutOfRangeError", Object.setPrototypeOf(e, n.prototype), e }
                    return o(n, t), n
                }(Error);

            function qa(t) { return function(n) { return 0 === t ? Ra() : n.lift(new Ba(t)) } }
            var Ba = function() {
                    function t(t) { if (this.total = t, this.total < 0) throw new za }
                    return t.prototype.call = function(t, n) { return n.subscribe(new Ga(t, this.total)) }, t
                }(),
                Ga = function(t) {
                    function n(n, e) { var r = t.call(this, n) || this; return r.total = e, r.ring = new Array, r.count = 0, r }
                    return o(n, t), n.prototype._next = function(t) {
                        var n = this.ring,
                            e = this.total,
                            r = this.count++;
                        n.length < e ? n.push(t) : n[r % e] = t
                    }, n.prototype._complete = function() {
                        var t = this.destination,
                            n = this.count;
                        if (n > 0)
                            for (var e = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < e; o++) {
                                var i = n++ % e;
                                t.next(r[i])
                            }
                        t.complete()
                    }, n
                }(O),
                Wa = function() {
                    function t(t, n, e) { this.nextOrObserver = t, this.error = n, this.complete = e }
                    return t.prototype.call = function(t, n) { return n.subscribe(new Ka(t, this.nextOrObserver, this.error, this.complete)) }, t
                }(),
                Ka = function(t) {
                    function n(n, e, r, o) { var i = t.call(this, n) || this; return i._tapNext = T, i._tapError = T, i._tapComplete = T, i._tapError = r || T, i._tapComplete = o || T, d(e) ? (i._context = i, i._tapNext = e) : e && (i._context = e, i._tapNext = e.next || T, i._tapError = e.error || T, i._tapComplete = e.complete || T), i }
                    return o(n, t), n.prototype._next = function(t) {
                        try { this._tapNext.call(this._context, t) } catch (t) { return void this.destination.error(t) }
                        this.destination.next(t)
                    }, n.prototype._error = function(t) {
                        try { this._tapError.call(this._context, t) } catch (t) { return void this.destination.error(t) }
                        this.destination.error(t)
                    }, n.prototype._complete = function() { try { this._tapComplete.call(this._context) } catch (t) { return void this.destination.error(t) } return this.destination.complete() }, n
                }(O),
                Qa = function(t) {
                    return void 0 === t && (t = Za), n = { hasValue: !1, next: function() { this.hasValue = !0 }, complete: function() { if (!this.hasValue) throw t() } },
                        function(t) { return t.lift(new Wa(n, void 0, void 0)) };
                    var n
                };

            function Za() { return new Da }

            function Ya(t) {
                return void 0 === t && (t = null),
                    function(n) { return n.lift(new Ja(t)) }
            }
            var Ja = function() {
                    function t(t) { this.defaultValue = t }
                    return t.prototype.call = function(t, n) { return n.subscribe(new $a(t, this.defaultValue)) }, t
                }(),
                $a = function(t) {
                    function n(n, e) { var r = t.call(this, n) || this; return r.defaultValue = e, r.isEmpty = !0, r }
                    return o(n, t), n.prototype._next = function(t) { this.isEmpty = !1, this.destination.next(t) }, n.prototype._complete = function() { this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete() }, n
                }(O);

            function Xa(t, n) { var e = arguments.length >= 2; return function(r) { return r.pipe(t ? Ua(function(n, e) { return t(n, e, r) }) : lt, qa(1), e ? Ya(n) : Qa(function() { return new Da })) } }

            function ts(t, n) { return function(e) { return e.lift(new ns(t, n, e)) } }
            var ns = function() {
                    function t(t, n, e) { this.predicate = t, this.thisArg = n, this.source = e }
                    return t.prototype.call = function(t, n) { return n.subscribe(new es(t, this.predicate, this.thisArg, this.source)) }, t
                }(),
                es = function(t) {
                    function n(n, e, r, o) { var i = t.call(this, n) || this; return i.predicate = e, i.thisArg = r, i.source = o, i.index = 0, i.thisArg = r || i, i }
                    return o(n, t), n.prototype.notifyComplete = function(t) { this.destination.next(t), this.destination.complete() }, n.prototype._next = function(t) {
                        var n = !1;
                        try { n = this.predicate.call(this.thisArg, t, this.index++, this.source) } catch (t) { return void this.destination.error(t) }
                        n || this.notifyComplete(!1)
                    }, n.prototype._complete = function() { this.notifyComplete(!0) }, n
                }(O);

            function rs(t) {
                return function(n) {
                    var e = new os(t),
                        r = n.lift(e);
                    return e.caught = r
                }
            }
            var os = function() {
                    function t(t) { this.selector = t }
                    return t.prototype.call = function(t, n) { return n.subscribe(new is(t, this.selector, this.caught)) }, t
                }(),
                is = function(t) {
                    function n(n, e, r) { var o = t.call(this, n) || this; return o.selector = e, o.caught = r, o }
                    return o(n, t), n.prototype.error = function(n) {
                        if (!this.isStopped) {
                            var e = void 0;
                            try { e = this.selector(n, this.caught) } catch (n) { return void t.prototype.error.call(this, n) }
                            this._unsubscribeAndRecycle(), this.add(Y(this, e))
                        }
                    }, n
                }(J),
                ls = function() {
                    function t(t) { if (this.total = t, this.total < 0) throw new za }
                    return t.prototype.call = function(t, n) { return n.subscribe(new us(t, this.total)) }, t
                }(),
                us = function(t) {
                    function n(n, e) { var r = t.call(this, n) || this; return r.total = e, r.count = 0, r }
                    return o(n, t), n.prototype._next = function(t) {
                        var n = this.total,
                            e = ++this.count;
                        e <= n && (this.destination.next(t), e === n && (this.destination.complete(), this.unsubscribe()))
                    }, n
                }(O);

            function as(t, n) { var e = arguments.length >= 2; return function(r) { return r.pipe(t ? Ua(function(n, e) { return t(n, e, r) }) : lt, function(t) { return t.lift(new ls(1)) }, e ? Ya(n) : Qa(function() { return new Da })) } }

            function ss(t, n) { return rt(t, n, 1) }

            function cs(t, n) {
                var e = !1;
                return arguments.length >= 2 && (e = !0),
                    function(r) { return r.lift(new ps(t, n, e)) }
            }
            var ps = function() {
                    function t(t, n, e) { void 0 === e && (e = !1), this.accumulator = t, this.seed = n, this.hasSeed = e }
                    return t.prototype.call = function(t, n) { return n.subscribe(new hs(t, this.accumulator, this.seed, this.hasSeed)) }, t
                }(),
                hs = function(t) {
                    function n(n, e, r, o) { var i = t.call(this, n) || this; return i.accumulator = e, i._seed = r, i.hasSeed = o, i.index = 0, i }
                    return o(n, t), Object.defineProperty(n.prototype, "seed", { get: function() { return this._seed }, set: function(t) { this.hasSeed = !0, this._seed = t }, enumerable: !0, configurable: !0 }), n.prototype._next = function(t) {
                        if (this.hasSeed) return this._tryNext(t);
                        this.seed = t, this.destination.next(t)
                    }, n.prototype._tryNext = function(t) {
                        var n, e = this.index++;
                        try { n = this.accumulator(this.seed, t, e) } catch (t) { this.destination.error(t) }
                        this.seed = n, this.destination.next(n)
                    }, n
                }(O),
                fs = function() {},
                ds = new vt("Location Initialized"),
                gs = function() {},
                vs = new vt("appBaseHref"),
                ys = function() {
                    function t(t) {
                        var e = this;
                        this._subject = new ae, this._platformStrategy = t;
                        var r = this._platformStrategy.getBaseHref();
                        this._baseHref = n.stripTrailingSlash(ms(r)), this._platformStrategy.onPopState(function(t) { e._subject.emit({ url: e.path(!0), pop: !0, state: t.state, type: t.type }) })
                    }
                    var n;
                    return n = t, t.prototype.path = function(t) { return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t)) }, t.prototype.isCurrentPathEqualTo = function(t, e) { return void 0 === e && (e = ""), this.path() == this.normalize(t + n.normalizeQueryParams(e)) }, t.prototype.normalize = function(t) { return n.stripTrailingSlash(function(t, n) { return t && n.startsWith(t) ? n.substring(t.length) : n }(this._baseHref, ms(t))) }, t.prototype.prepareExternalUrl = function(t) { return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t) }, t.prototype.go = function(t, n, e) { void 0 === n && (n = ""), void 0 === e && (e = null), this._platformStrategy.pushState(e, "", t, n) }, t.prototype.replaceState = function(t, n, e) { void 0 === n && (n = ""), void 0 === e && (e = null), this._platformStrategy.replaceState(e, "", t, n) }, t.prototype.forward = function() { this._platformStrategy.forward() }, t.prototype.back = function() { this._platformStrategy.back() }, t.prototype.subscribe = function(t, n, e) { return this._subject.subscribe({ next: t, error: n, complete: e }) }, t.normalizeQueryParams = function(t) { return t && "?" !== t[0] ? "?" + t : t }, t.joinWithSlash = function(t, n) { if (0 == t.length) return n; if (0 == n.length) return t; var e = 0; return t.endsWith("/") && e++, n.startsWith("/") && e++, 2 == e ? t + n.substring(1) : 1 == e ? t + n : t + "/" + n }, t.stripTrailingSlash = function(t) {
                        var n = t.match(/#|\?|$/),
                            e = n && n.index || t.length;
                        return t.slice(0, e - ("/" === t[e - 1] ? 1 : 0)) + t.slice(e)
                    }, t
                }();

            function ms(t) { return t.replace(/\/index.html$/, "") }
            var bs = function(t) {
                    function n(n, e) { var r = t.call(this) || this; return r._platformLocation = n, r._baseHref = "", null != e && (r._baseHref = e), r }
                    return o(n, t), n.prototype.onPopState = function(t) { this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t) }, n.prototype.getBaseHref = function() { return this._baseHref }, n.prototype.path = function(t) { void 0 === t && (t = !1); var n = this._platformLocation.hash; return null == n && (n = "#"), n.length > 0 ? n.substring(1) : n }, n.prototype.prepareExternalUrl = function(t) { var n = ys.joinWithSlash(this._baseHref, t); return n.length > 0 ? "#" + n : n }, n.prototype.pushState = function(t, n, e, r) {
                        var o = this.prepareExternalUrl(e + ys.normalizeQueryParams(r));
                        0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, n, o)
                    }, n.prototype.replaceState = function(t, n, e, r) {
                        var o = this.prepareExternalUrl(e + ys.normalizeQueryParams(r));
                        0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, n, o)
                    }, n.prototype.forward = function() { this._platformLocation.forward() }, n.prototype.back = function() { this._platformLocation.back() }, l([u(1, Lt()), u(1, Vt(vs))], n)
                }(gs),
                _s = function(t) {
                    function n(n, e) { var r = t.call(this) || this; if (r._platformLocation = n, null == e && (e = r._platformLocation.getBaseHrefFromDOM()), null == e) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."); return r._baseHref = e, r }
                    return o(n, t), n.prototype.onPopState = function(t) { this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t) }, n.prototype.getBaseHref = function() { return this._baseHref }, n.prototype.prepareExternalUrl = function(t) { return ys.joinWithSlash(this._baseHref, t) }, n.prototype.path = function(t) {
                        void 0 === t && (t = !1);
                        var n = this._platformLocation.pathname + ys.normalizeQueryParams(this._platformLocation.search),
                            e = this._platformLocation.hash;
                        return e && t ? "" + n + e : n
                    }, n.prototype.pushState = function(t, n, e, r) {
                        var o = this.prepareExternalUrl(e + ys.normalizeQueryParams(r));
                        this._platformLocation.pushState(t, n, o)
                    }, n.prototype.replaceState = function(t, n, e, r) {
                        var o = this.prepareExternalUrl(e + ys.normalizeQueryParams(r));
                        this._platformLocation.replaceState(t, n, o)
                    }, n.prototype.forward = function() { this._platformLocation.forward() }, n.prototype.back = function() { this._platformLocation.back() }, l([u(1, Lt()), u(1, Vt(vs))], n)
                }(gs),
                ws = void 0,
                Cs = ["en", [
                        ["a", "p"],
                        ["AM", "PM"], ws
                    ],
                    [
                        ["AM", "PM"], ws, ws
                    ],
                    [
                        ["S", "M", "T", "W", "T", "F", "S"],
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    ], ws, [
                        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    ], ws, [
                        ["B", "A"],
                        ["BC", "AD"],
                        ["Before Christ", "Anno Domini"]
                    ], 0, [6, 0],
                    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                    ["{1}, {0}", ws, "{1} 'at' {0}", ws],
                    [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {},
                    function(t) {
                        var n = Math.floor(Math.abs(t)),
                            e = t.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === n && 0 === e ? 1 : 5
                    }
                ],
                ks = {},
                xs = function(t) { return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t }({}),
                Es = new vt("UseV4Plurals"),
                Ss = function() {},
                Os = function(t) {
                    function n(n, e) { var r = t.call(this) || this; return r.locale = n, r.deprecatedPluralFn = e, r }
                    return o(n, t), n.prototype.getPluralCategory = function(t, n) {
                        switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(n || this.locale, t) : function(t) {
                            return function(t) {
                                var n = t.toLowerCase().replace(/_/g, "-"),
                                    e = ks[n];
                                if (e) return e;
                                var r = n.split("-")[0];
                                if (e = ks[r]) return e;
                                if ("en" === r) return Cs;
                                throw new Error('Missing locale data for the locale "' + t + '".')
                            }(t)[18]
                        }(n || this.locale)(t)) {
                            case xs.Zero:
                                return "zero";
                            case xs.One:
                                return "one";
                            case xs.Two:
                                return "two";
                            case xs.Few:
                                return "few";
                            case xs.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }, l([u(0, Vt(vr)), u(1, Lt()), u(1, Vt(Es))], n)
                }(Ss),
                Ps = function() {},
                As = new vt("DocumentToken"),
                Ts = "server",
                Is = function() {
                    function t() {}
                    return t.ngInjectableDef = gt({ providedIn: "root", factory: function() { return new Ms(cn(As), window) } }), t
                }(),
                Ms = function() {
                    function t(t, n) { this.document = t, this.window = n, this.offset = function() { return [0, 0] } }
                    return t.prototype.setOffset = function(t) { this.offset = Array.isArray(t) ? function() { return t } : t }, t.prototype.getScrollPosition = function() { return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0] }, t.prototype.scrollToPosition = function(t) { this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]) }, t.prototype.scrollToAnchor = function(t) { if (this.supportScrollRestoration()) { var n = this.document.querySelector("#" + t); if (n) return void this.scrollToElement(n); var e = this.document.querySelector("[name='" + t + "']"); if (e) return void this.scrollToElement(e) } }, t.prototype.setHistoryScrollRestoration = function(t) {
                        if (this.supportScrollRestoration()) {
                            var n = this.window.history;
                            n && n.scrollRestoration && (n.scrollRestoration = t)
                        }
                    }, t.prototype.scrollToElement = function(t) {
                        var n = t.getBoundingClientRect(),
                            e = n.left + this.window.pageXOffset,
                            r = n.top + this.window.pageYOffset,
                            o = this.offset();
                        this.window.scrollTo(e - o[0], r - o[1])
                    }, t.prototype.supportScrollRestoration = function() { try { return !!this.window && !!this.window.scrollTo } catch (t) { return !1 } }, t
                }(),
                Ns = null;

            function Rs() { return Ns }
            var js, Ds = { class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" },
                Vs = { "\b": "Backspace", "\t": "Tab", "\x7f": "Delete", "\x1b": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" },
                Ls = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "\x90": "NumLock" };
            Pt.Node && (js = Pt.Node.prototype.contains || function(t) { return !!(16 & this.compareDocumentPosition(t)) });
            var Us, Hs = function(t) {
                    function n() { return null !== t && t.apply(this, arguments) || this }
                    return o(n, t), n.prototype.parse = function(t) { throw new Error("parse not implemented") }, n.makeCurrent = function() {
                        var t;
                        t = new n, Ns || (Ns = t)
                    }, n.prototype.hasProperty = function(t, n) { return n in t }, n.prototype.setProperty = function(t, n, e) { t[n] = e }, n.prototype.getProperty = function(t, n) { return t[n] }, n.prototype.invoke = function(t, n, e) {
                        var r;
                        (r = t)[n].apply(r, p(e))
                    }, n.prototype.logError = function(t) { window.console && (console.error ? console.error(t) : console.log(t)) }, n.prototype.log = function(t) { window.console && window.console.log && window.console.log(t) }, n.prototype.logGroup = function(t) { window.console && window.console.group && window.console.group(t) }, n.prototype.logGroupEnd = function() { window.console && window.console.groupEnd && window.console.groupEnd() }, Object.defineProperty(n.prototype, "attrToPropMap", { get: function() { return Ds }, enumerable: !0, configurable: !0 }), n.prototype.contains = function(t, n) { return js.call(t, n) }, n.prototype.querySelector = function(t, n) { return t.querySelector(n) }, n.prototype.querySelectorAll = function(t, n) { return t.querySelectorAll(n) }, n.prototype.on = function(t, n, e) { t.addEventListener(n, e, !1) }, n.prototype.onAndCancel = function(t, n, e) {
                        return t.addEventListener(n, e, !1),
                            function() { t.removeEventListener(n, e, !1) }
                    }, n.prototype.dispatchEvent = function(t, n) { t.dispatchEvent(n) }, n.prototype.createMouseEvent = function(t) { var n = this.getDefaultDocument().createEvent("MouseEvent"); return n.initEvent(t, !0, !0), n }, n.prototype.createEvent = function(t) { var n = this.getDefaultDocument().createEvent("Event"); return n.initEvent(t, !0, !0), n }, n.prototype.preventDefault = function(t) { t.preventDefault(), t.returnValue = !1 }, n.prototype.isPrevented = function(t) { return t.defaultPrevented || null != t.returnValue && !t.returnValue }, n.prototype.getInnerHTML = function(t) { return t.innerHTML }, n.prototype.getTemplateContent = function(t) { return "content" in t && this.isTemplateElement(t) ? t.content : null }, n.prototype.getOuterHTML = function(t) { return t.outerHTML }, n.prototype.nodeName = function(t) { return t.nodeName }, n.prototype.nodeValue = function(t) { return t.nodeValue }, n.prototype.type = function(t) { return t.type }, n.prototype.content = function(t) { return this.hasProperty(t, "content") ? t.content : t }, n.prototype.firstChild = function(t) { return t.firstChild }, n.prototype.nextSibling = function(t) { return t.nextSibling }, n.prototype.parentElement = function(t) { return t.parentNode }, n.prototype.childNodes = function(t) { return t.childNodes }, n.prototype.childNodesAsList = function(t) { for (var n = t.childNodes, e = new Array(n.length), r = 0; r < n.length; r++) e[r] = n[r]; return e }, n.prototype.clearNodes = function(t) { for (; t.firstChild;) t.removeChild(t.firstChild) }, n.prototype.appendChild = function(t, n) { t.appendChild(n) }, n.prototype.removeChild = function(t, n) { t.removeChild(n) }, n.prototype.replaceChild = function(t, n, e) { t.replaceChild(n, e) }, n.prototype.remove = function(t) { return t.parentNode && t.parentNode.removeChild(t), t }, n.prototype.insertBefore = function(t, n, e) { t.insertBefore(e, n) }, n.prototype.insertAllBefore = function(t, n, e) { e.forEach(function(e) { return t.insertBefore(e, n) }) }, n.prototype.insertAfter = function(t, n, e) { t.insertBefore(e, n.nextSibling) }, n.prototype.setInnerHTML = function(t, n) { t.innerHTML = n }, n.prototype.getText = function(t) { return t.textContent }, n.prototype.setText = function(t, n) { t.textContent = n }, n.prototype.getValue = function(t) { return t.value }, n.prototype.setValue = function(t, n) { t.value = n }, n.prototype.getChecked = function(t) { return t.checked }, n.prototype.setChecked = function(t, n) { t.checked = n }, n.prototype.createComment = function(t) { return this.getDefaultDocument().createComment(t) }, n.prototype.createTemplate = function(t) { var n = this.getDefaultDocument().createElement("template"); return n.innerHTML = t, n }, n.prototype.createElement = function(t, n) { return (n = n || this.getDefaultDocument()).createElement(t) }, n.prototype.createElementNS = function(t, n, e) { return (e = e || this.getDefaultDocument()).createElementNS(t, n) }, n.prototype.createTextNode = function(t, n) { return (n = n || this.getDefaultDocument()).createTextNode(t) }, n.prototype.createScriptTag = function(t, n, e) { var r = (e = e || this.getDefaultDocument()).createElement("SCRIPT"); return r.setAttribute(t, n), r }, n.prototype.createStyleElement = function(t, n) { var e = (n = n || this.getDefaultDocument()).createElement("style"); return this.appendChild(e, this.createTextNode(t, n)), e }, n.prototype.createShadowRoot = function(t) { return t.createShadowRoot() }, n.prototype.getShadowRoot = function(t) { return t.shadowRoot }, n.prototype.getHost = function(t) { return t.host }, n.prototype.clone = function(t) { return t.cloneNode(!0) }, n.prototype.getElementsByClassName = function(t, n) { return t.getElementsByClassName(n) }, n.prototype.getElementsByTagName = function(t, n) { return t.getElementsByTagName(n) }, n.prototype.classList = function(t) { return Array.prototype.slice.call(t.classList, 0) }, n.prototype.addClass = function(t, n) { t.classList.add(n) }, n.prototype.removeClass = function(t, n) { t.classList.remove(n) }, n.prototype.hasClass = function(t, n) { return t.classList.contains(n) }, n.prototype.setStyle = function(t, n, e) { t.style[n] = e }, n.prototype.removeStyle = function(t, n) { t.style[n] = "" }, n.prototype.getStyle = function(t, n) { return t.style[n] }, n.prototype.hasStyle = function(t, n, e) { var r = this.getStyle(t, n) || ""; return e ? r == e : r.length > 0 }, n.prototype.tagName = function(t) { return t.tagName }, n.prototype.attributeMap = function(t) {
                        for (var n = new Map, e = t.attributes, r = 0; r < e.length; r++) {
                            var o = e.item(r);
                            n.set(o.name, o.value)
                        }
                        return n
                    }, n.prototype.hasAttribute = function(t, n) { return t.hasAttribute(n) }, n.prototype.hasAttributeNS = function(t, n, e) { return t.hasAttributeNS(n, e) }, n.prototype.getAttribute = function(t, n) { return t.getAttribute(n) }, n.prototype.getAttributeNS = function(t, n, e) { return t.getAttributeNS(n, e) }, n.prototype.setAttribute = function(t, n, e) { t.setAttribute(n, e) }, n.prototype.setAttributeNS = function(t, n, e, r) { t.setAttributeNS(n, e, r) }, n.prototype.removeAttribute = function(t, n) { t.removeAttribute(n) }, n.prototype.removeAttributeNS = function(t, n, e) { t.removeAttributeNS(n, e) }, n.prototype.templateAwareRoot = function(t) { return this.isTemplateElement(t) ? this.content(t) : t }, n.prototype.createHtmlDocument = function() { return document.implementation.createHTMLDocument("fakeTitle") }, n.prototype.getDefaultDocument = function() { return document }, n.prototype.getBoundingClientRect = function(t) { try { return t.getBoundingClientRect() } catch (t) { return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } } }, n.prototype.getTitle = function(t) { return t.title }, n.prototype.setTitle = function(t, n) { t.title = n || "" }, n.prototype.elementMatches = function(t, n) { return !!this.isElementNode(t) && (t.matches && t.matches(n) || t.msMatchesSelector && t.msMatchesSelector(n) || t.webkitMatchesSelector && t.webkitMatchesSelector(n)) }, n.prototype.isTemplateElement = function(t) { return this.isElementNode(t) && "TEMPLATE" === t.nodeName }, n.prototype.isTextNode = function(t) { return t.nodeType === Node.TEXT_NODE }, n.prototype.isCommentNode = function(t) { return t.nodeType === Node.COMMENT_NODE }, n.prototype.isElementNode = function(t) { return t.nodeType === Node.ELEMENT_NODE }, n.prototype.hasShadowRoot = function(t) { return null != t.shadowRoot && t instanceof HTMLElement }, n.prototype.isShadowRoot = function(t) { return t instanceof DocumentFragment }, n.prototype.importIntoDoc = function(t) { return document.importNode(this.templateAwareRoot(t), !0) }, n.prototype.adoptNode = function(t) { return document.adoptNode(t) }, n.prototype.getHref = function(t) { return t.getAttribute("href") }, n.prototype.getEventKey = function(t) {
                        var n = t.key;
                        if (null == n) {
                            if (null == (n = t.keyIdentifier)) return "Unidentified";
                            n.startsWith("U+") && (n = String.fromCharCode(parseInt(n.substring(2), 16)), 3 === t.location && Ls.hasOwnProperty(n) && (n = Ls[n]))
                        }
                        return Vs[n] || n
                    }, n.prototype.getGlobalEventTarget = function(t, n) { return "window" === n ? window : "document" === n ? t : "body" === n ? t.body : null }, n.prototype.getHistory = function() { return window.history }, n.prototype.getLocation = function() { return window.location }, n.prototype.getBaseHref = function(t) { var n, e = Fs || (Fs = document.querySelector("base")) ? Fs.getAttribute("href") : null; return null == e ? null : (n = e, Us || (Us = document.createElement("a")), Us.setAttribute("href", n), "/" === Us.pathname.charAt(0) ? Us.pathname : "/" + Us.pathname) }, n.prototype.resetBaseElement = function() { Fs = null }, n.prototype.getUserAgent = function() { return window.navigator.userAgent }, n.prototype.setData = function(t, n, e) { this.setAttribute(t, "data-" + n, e) }, n.prototype.getData = function(t, n) { return this.getAttribute(t, "data-" + n) }, n.prototype.getComputedStyle = function(t) { return getComputedStyle(t) }, n.prototype.supportsWebAnimation = function() { return "function" == typeof Element.prototype.animate }, n.prototype.performanceNow = function() { return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime() }, n.prototype.supportsCookies = function() { return !0 }, n.prototype.getCookie = function(t) {
                        return function(t, n) {
                            var e, r;
                            n = encodeURIComponent(n);
                            try {
                                for (var o = s(t.split(";")), i = o.next(); !i.done; i = o.next()) {
                                    var l = i.value,
                                        u = l.indexOf("="),
                                        a = c(-1 == u ? [l, ""] : [l.slice(0, u), l.slice(u + 1)], 2),
                                        p = a[1];
                                    if (a[0].trim() === n) return decodeURIComponent(p)
                                }
                            } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } }
                            return null
                        }(document.cookie, t)
                    }, n.prototype.setCookie = function(t, n) { document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(n) }, n
                }(function(t) {
                    function n() {
                        var n = t.call(this) || this;
                        n._animationPrefix = null, n._transitionEnd = null;
                        try {
                            var e = n.createElement("div", document);
                            if (null != n.getStyle(e, "animationName")) n._animationPrefix = "";
                            else
                                for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++)
                                    if (null != n.getStyle(e, r[o] + "AnimationName")) { n._animationPrefix = "-" + r[o].toLowerCase() + "-"; break } var i = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                            Object.keys(i).forEach(function(t) { null != n.getStyle(e, t) && (n._transitionEnd = i[t]) })
                        } catch (t) { n._animationPrefix = null, n._transitionEnd = null }
                        return n
                    }
                    return o(n, t), n.prototype.getDistributedNodes = function(t) { return t.getDistributedNodes() }, n.prototype.resolveAndSetHref = function(t, n, e) { t.href = null == e ? n : n + "/../" + e }, n.prototype.supportsDOMEvents = function() { return !0 }, n.prototype.supportsNativeShadowDOM = function() { return "function" == typeof document.body.createShadowRoot }, n.prototype.getAnimationPrefix = function() { return this._animationPrefix ? this._animationPrefix : "" }, n.prototype.getTransitionEnd = function() { return this._transitionEnd ? this._transitionEnd : "" }, n.prototype.supportsAnimation = function() { return null != this._animationPrefix && null != this._transitionEnd }, n
                }(function() {
                    function t() { this.resourceLoaderType = null }
                    return Object.defineProperty(t.prototype, "attrToPropMap", { get: function() { return this._attrToPropMap }, set: function(t) { this._attrToPropMap = t }, enumerable: !0, configurable: !0 }), t
                }())),
                Fs = null,
                zs = As;

            function qs() { return !!window.history.pushState }
            var Bs = function(t) {
                    function n(n) { var e = t.call(this) || this; return e._doc = n, e._init(), e }
                    return o(n, t), n.prototype._init = function() { this.location = Rs().getLocation(), this._history = Rs().getHistory() }, n.prototype.getBaseHrefFromDOM = function() { return Rs().getBaseHref(this._doc) }, n.prototype.onPopState = function(t) { Rs().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1) }, n.prototype.onHashChange = function(t) { Rs().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1) }, Object.defineProperty(n.prototype, "pathname", { get: function() { return this.location.pathname }, set: function(t) { this.location.pathname = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "search", { get: function() { return this.location.search }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "hash", { get: function() { return this.location.hash }, enumerable: !0, configurable: !0 }), n.prototype.pushState = function(t, n, e) { qs() ? this._history.pushState(t, n, e) : this.location.hash = e }, n.prototype.replaceState = function(t, n, e) { qs() ? this._history.replaceState(t, n, e) : this.location.hash = e }, n.prototype.forward = function() { this._history.forward() }, n.prototype.back = function() { this._history.back() }, l([u(0, Vt(zs)), a("design:paramtypes", [Object])], n)
                }(fs),
                Gs = new vt("TRANSITION_ID"),
                Ws = [{
                    provide: Rn,
                    useFactory: function(t, n, e) {
                        return function() {
                            e.get(jn).donePromise.then(function() {
                                var e = Rs();
                                Array.prototype.slice.apply(e.querySelectorAll(n, "style[ng-transition]")).filter(function(n) { return e.getAttribute(n, "ng-transition") === t }).forEach(function(t) { return e.remove(t) })
                            })
                        }
                    },
                    deps: [Gs, zs, Kt],
                    multi: !0
                }],
                Ks = function() {
                    function t() {}
                    return t.init = function() {
                        var n;
                        n = new t, be = n
                    }, t.prototype.addToWindow = function(t) {
                        Pt.getAngularTestability = function(n, e) { void 0 === e && (e = !0); var r = t.findTestabilityInTree(n, e); if (null == r) throw new Error("Could not find testability for element."); return r }, Pt.getAllAngularTestabilities = function() { return t.getAllTestabilities() }, Pt.getAllAngularRootElements = function() { return t.getAllRootElements() }, Pt.frameworkStabilizers || (Pt.frameworkStabilizers = []), Pt.frameworkStabilizers.push(function(t) {
                            var n = Pt.getAllAngularTestabilities(),
                                e = n.length,
                                r = !1,
                                o = function(n) { r = r || n, 0 == --e && t(r) };
                            n.forEach(function(t) { t.whenStable(o) })
                        })
                    }, t.prototype.findTestabilityInTree = function(t, n, e) { if (null == n) return null; var r = t.getTestability(n); return null != r ? r : e ? Rs().isShadowRoot(n) ? this.findTestabilityInTree(t, Rs().getHost(n), !0) : this.findTestabilityInTree(t, Rs().parentElement(n), !0) : null }, t
                }();

            function Qs(t, n) { "undefined" != typeof COMPILED && COMPILED || ((Pt.ng = Pt.ng || {})[t] = n) }
            var Zs = { ApplicationRef: Ae, NgZone: se };

            function Ys(t) { return Ke(t) }
            var Js = new vt("EventManagerPlugins"),
                $s = function() {
                    function t(t, n) {
                        var e = this;
                        this._zone = n, this._eventNameToPlugin = new Map, t.forEach(function(t) { return t.manager = e }), this._plugins = t.slice().reverse()
                    }
                    return t.prototype.addEventListener = function(t, n, e) { return this._findPluginFor(n).addEventListener(t, n, e) }, t.prototype.addGlobalEventListener = function(t, n, e) { return this._findPluginFor(n).addGlobalEventListener(t, n, e) }, t.prototype.getZone = function() { return this._zone }, t.prototype._findPluginFor = function(t) { var n = this._eventNameToPlugin.get(t); if (n) return n; for (var e = this._plugins, r = 0; r < e.length; r++) { var o = e[r]; if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o } throw new Error("No event manager plugin found for event " + t) }, l([u(0, Vt(Js))], t)
                }(),
                Xs = function() {
                    function t(t) { this._doc = t }
                    return t.prototype.addGlobalEventListener = function(t, n, e) { var r = Rs().getGlobalEventTarget(this._doc, t); if (!r) throw new Error("Unsupported event target " + r + " for event " + n); return this.addEventListener(r, n, e) }, t
                }(),
                tc = function() {
                    function t() { this._stylesSet = new Set }
                    return t.prototype.addStyles = function(t) {
                        var n = this,
                            e = new Set;
                        t.forEach(function(t) { n._stylesSet.has(t) || (n._stylesSet.add(t), e.add(t)) }), this.onStylesAdded(e)
                    }, t.prototype.onStylesAdded = function(t) {}, t.prototype.getAllStyles = function() { return Array.from(this._stylesSet) }, t
                }(),
                nc = function(t) {
                    function n(n) { var e = t.call(this) || this; return e._doc = n, e._hostNodes = new Set, e._styleNodes = new Set, e._hostNodes.add(n.head), e }
                    return o(n, t), n.prototype._addStylesToHost = function(t, n) {
                        var e = this;
                        t.forEach(function(t) {
                            var r = e._doc.createElement("style");
                            r.textContent = t, e._styleNodes.add(n.appendChild(r))
                        })
                    }, n.prototype.addHost = function(t) { this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t) }, n.prototype.removeHost = function(t) { this._hostNodes.delete(t) }, n.prototype.onStylesAdded = function(t) {
                        var n = this;
                        this._hostNodes.forEach(function(e) { return n._addStylesToHost(t, e) })
                    }, n.prototype.ngOnDestroy = function() { this._styleNodes.forEach(function(t) { return Rs().remove(t) }) }, l([u(0, Vt(zs))], n)
                }(tc),
                ec = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
                rc = /%COMP%/g,
                oc = "_nghost-%COMP%",
                ic = "_ngcontent-%COMP%";

            function lc(t, n, e) {
                for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    Array.isArray(o) ? lc(t, o, e) : (o = o.replace(rc, t), e.push(o))
                }
                return e
            }

            function uc(t) { return function(n) {!1 === t(n) && (n.preventDefault(), n.returnValue = !1) } }
            var ac = function() {
                    function t(t, n) { this.eventManager = t, this.sharedStylesHost = n, this.rendererByCompId = new Map, this.defaultRenderer = new sc(t) }
                    return t.prototype.createRenderer = function(t, n) {
                        if (!t || !n) return this.defaultRenderer;
                        switch (n.encapsulation) {
                            case hn.Emulated:
                                var e = this.rendererByCompId.get(n.id);
                                return e || (e = new fc(this.eventManager, this.sharedStylesHost, n), this.rendererByCompId.set(n.id, e)), e.applyToHost(t), e;
                            case hn.Native:
                            case hn.ShadowDom:
                                return new dc(this.eventManager, this.sharedStylesHost, t, n);
                            default:
                                if (!this.rendererByCompId.has(n.id)) {
                                    var r = lc(n.id, n.styles, []);
                                    this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(n.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }, t.prototype.begin = function() {}, t.prototype.end = function() {}, t
                }(),
                sc = function() {
                    function t(t) { this.eventManager = t, this.data = Object.create(null) }
                    return t.prototype.destroy = function() {}, t.prototype.createElement = function(t, n) { return n ? document.createElementNS(ec[n], t) : document.createElement(t) }, t.prototype.createComment = function(t) { return document.createComment(t) }, t.prototype.createText = function(t) { return document.createTextNode(t) }, t.prototype.appendChild = function(t, n) { t.appendChild(n) }, t.prototype.insertBefore = function(t, n, e) { t && t.insertBefore(n, e) }, t.prototype.removeChild = function(t, n) { t && t.removeChild(n) }, t.prototype.selectRootElement = function(t) { var n = "string" == typeof t ? document.querySelector(t) : t; if (!n) throw new Error('The selector "' + t + '" did not match any elements'); return n.textContent = "", n }, t.prototype.parentNode = function(t) { return t.parentNode }, t.prototype.nextSibling = function(t) { return t.nextSibling }, t.prototype.setAttribute = function(t, n, e, r) {
                        if (r) {
                            n = r + ":" + n;
                            var o = ec[r];
                            o ? t.setAttributeNS(o, n, e) : t.setAttribute(n, e)
                        } else t.setAttribute(n, e)
                    }, t.prototype.removeAttribute = function(t, n, e) {
                        if (e) {
                            var r = ec[e];
                            r ? t.removeAttributeNS(r, n) : t.removeAttribute(e + ":" + n)
                        } else t.removeAttribute(n)
                    }, t.prototype.addClass = function(t, n) { t.classList.add(n) }, t.prototype.removeClass = function(t, n) { t.classList.remove(n) }, t.prototype.setStyle = function(t, n, e, r) { r & Me.DashCase ? t.style.setProperty(n, e, r & Me.Important ? "important" : "") : t.style[n] = e }, t.prototype.removeStyle = function(t, n, e) { e & Me.DashCase ? t.style.removeProperty(n) : t.style[n] = "" }, t.prototype.setProperty = function(t, n, e) { pc(n, "property"), t[n] = e }, t.prototype.setValue = function(t, n) { t.nodeValue = n }, t.prototype.listen = function(t, n, e) { return pc(n, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, n, uc(e)) : this.eventManager.addEventListener(t, n, uc(e)) }, t
                }(),
                cc = "@".charCodeAt(0);

            function pc(t, n) { if (t.charCodeAt(0) === cc) throw new Error("Found the synthetic " + n + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.') }
            var hc, fc = function(t) {
                    function n(n, e, r) {
                        var o = t.call(this, n) || this;
                        o.component = r;
                        var i = lc(r.id, r.styles, []);
                        return e.addStyles(i), o.contentAttr = ic.replace(rc, r.id), o.hostAttr = oc.replace(rc, r.id), o
                    }
                    return o(n, t), n.prototype.applyToHost = function(n) { t.prototype.setAttribute.call(this, n, this.hostAttr, "") }, n.prototype.createElement = function(n, e) { var r = t.prototype.createElement.call(this, n, e); return t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r }, n
                }(sc),
                dc = function(t) {
                    function n(n, e, r, o) {
                        var i = t.call(this, n) || this;
                        i.sharedStylesHost = e, i.hostEl = r, i.component = o, i.shadowRoot = o.encapsulation === hn.ShadowDom ? r.attachShadow({ mode: "open" }) : r.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot);
                        for (var l = lc(o.id, o.styles, []), u = 0; u < l.length; u++) {
                            var a = document.createElement("style");
                            a.textContent = l[u], i.shadowRoot.appendChild(a)
                        }
                        return i
                    }
                    return o(n, t), n.prototype.nodeOrShadowRoot = function(t) { return t === this.hostEl ? this.shadowRoot : t }, n.prototype.destroy = function() { this.sharedStylesHost.removeHost(this.shadowRoot) }, n.prototype.appendChild = function(n, e) { return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(n), e) }, n.prototype.insertBefore = function(n, e, r) { return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(n), e, r) }, n.prototype.removeChild = function(n, e) { return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(n), e) }, n.prototype.parentNode = function(n) { return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(n))) }, n
                }(sc),
                gc = "undefined" != typeof Zone && Zone.__symbol__ || function(t) { return "__zone_symbol__" + t },
                vc = gc("addEventListener"),
                yc = gc("removeEventListener"),
                mc = {},
                bc = "__zone_symbol__propagationStopped";
            "undefined" != typeof Zone && Zone[gc("BLACK_LISTED_EVENTS")] && (hc = {});
            var _c = function(t) { return !!hc && hc.hasOwnProperty(t) },
                wc = function(t) {
                    var n = mc[t.type];
                    if (n) {
                        var e = this[n];
                        if (e) {
                            var r = [t];
                            if (1 === e.length) return (l = e[0]).zone !== Zone.current ? l.zone.run(l.handler, this, r) : l.handler.apply(this, r);
                            for (var o = e.slice(), i = 0; i < o.length && !0 !== t[bc]; i++) {
                                var l;
                                (l = o[i]).zone !== Zone.current ? l.zone.run(l.handler, this, r) : l.handler.apply(this, r)
                            }
                        }
                    }
                },
                Cc = function(t) {
                    function n(n, e, r) { var o = t.call(this, n) || this; return o.ngZone = e, r && function(t) { return t === Ts }(r) || o.patchEvent(), o }
                    return o(n, t), n.prototype.patchEvent = function() {
                        if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                            var t = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                            Event.prototype.stopImmediatePropagation = function() { this && (this[bc] = !0), t && t.apply(this, arguments) }
                        }
                    }, n.prototype.supports = function(t) { return !0 }, n.prototype.addEventListener = function(t, n, e) {
                        var r = this,
                            o = e;
                        if (!t[vc] || se.isInAngularZone() && !_c(n)) t.addEventListener(n, o, !1);
                        else {
                            var i = mc[n];
                            i || (i = mc[n] = gc("ANGULAR" + n + "FALSE"));
                            var l = t[i],
                                u = l && l.length > 0;
                            l || (l = t[i] = []);
                            var a = _c(n) ? Zone.root : Zone.current;
                            if (0 === l.length) l.push({ zone: a, handler: o });
                            else {
                                for (var s = !1, c = 0; c < l.length; c++)
                                    if (l[c].handler === o) { s = !0; break }
                                s || l.push({ zone: a, handler: o })
                            }
                            u || t[vc](n, wc, !1)
                        }
                        return function() { return r.removeEventListener(t, n, o) }
                    }, n.prototype.removeEventListener = function(t, n, e) {
                        var r = t[yc];
                        if (!r) return t.removeEventListener.apply(t, [n, e, !1]);
                        var o = mc[n],
                            i = o && t[o];
                        if (!i) return t.removeEventListener.apply(t, [n, e, !1]);
                        for (var l = !1, u = 0; u < i.length; u++)
                            if (i[u].handler === e) { l = !0, i.splice(u, 1); break }
                        l ? 0 === i.length && r.apply(t, [n, wc, !1]) : t.removeEventListener.apply(t, [n, e, !1])
                    }, l([u(0, Vt(zs)), u(2, Lt()), u(2, Vt(Hn))], n)
                }(Xs),
                kc = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0 },
                xc = new vt("HammerGestureConfig"),
                Ec = new vt("HammerLoader"),
                Sc = function() {
                    function t() { this.events = [], this.overrides = {} }
                    return t.prototype.buildHammer = function(t) { var n = new Hammer(t, this.options); for (var e in n.get("pinch").set({ enable: !0 }), n.get("rotate").set({ enable: !0 }), this.overrides) n.get(e).set(this.overrides[e]); return n }, t
                }(),
                Oc = function(t) {
                    function n(n, e, r, o) { var i = t.call(this, n) || this; return i._config = e, i.console = r, i.loader = o, i }
                    return o(n, t), n.prototype.supports = function(t) { return !(!kc.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t) || !window.Hammer && !this.loader && (this.console.warn('The "' + t + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1)) }, n.prototype.addEventListener = function(t, n, e) {
                        var r = this,
                            o = this.manager.getZone();
                        if (n = n.toLowerCase(), !window.Hammer && this.loader) {
                            var i = !1,
                                l = function() { i = !0 };
                            return this.loader().then(function() {
                                    if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void(l = function() {});
                                    i || (l = r.addEventListener(t, n, e))
                                }).catch(function() { r.console.warn('The "' + n + '" event cannot be bound because the custom Hammer.JS loader failed.'), l = function() {} }),
                                function() { l() }
                        }
                        return o.runOutsideAngular(function() {
                            var i = r._config.buildHammer(t),
                                l = function(t) { o.runGuarded(function() { e(t) }) };
                            return i.on(n, l),
                                function() { return i.off(n, l) }
                        })
                    }, n.prototype.isCustomEvent = function(t) { return this._config.events.indexOf(t) > -1 }, l([u(0, Vt(zs)), u(1, Vt(xc)), u(3, Lt()), u(3, Vt(Ec))], n)
                }(Xs),
                Pc = ["alt", "control", "meta", "shift"],
                Ac = { alt: function(t) { return t.altKey }, control: function(t) { return t.ctrlKey }, meta: function(t) { return t.metaKey }, shift: function(t) { return t.shiftKey } },
                Tc = function(t) {
                    function n(n) { return t.call(this, n) || this }
                    var e;
                    return o(n, t), e = n, n.prototype.supports = function(t) { return null != e.parseEventName(t) }, n.prototype.addEventListener = function(t, n, r) {
                        var o = e.parseEventName(n),
                            i = e.eventCallback(o.fullKey, r, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(function() { return Rs().onAndCancel(t, o.domEventName, i) })
                    }, n.parseEventName = function(t) {
                        var n = t.toLowerCase().split("."),
                            r = n.shift();
                        if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
                        var o = e._normalizeKey(n.pop()),
                            i = "";
                        if (Pc.forEach(function(t) {
                                var e = n.indexOf(t);
                                e > -1 && (n.splice(e, 1), i += t + ".")
                            }), i += o, 0 != n.length || 0 === o.length) return null;
                        var l = {};
                        return l.domEventName = r, l.fullKey = i, l
                    }, n.getEventFullKey = function(t) {
                        var n = "",
                            e = Rs().getEventKey(t);
                        return " " === (e = e.toLowerCase()) ? e = "space" : "." === e && (e = "dot"), Pc.forEach(function(r) { r != e && (0, Ac[r])(t) && (n += r + ".") }), n += e
                    }, n.eventCallback = function(t, n, r) { return function(o) { e.getEventFullKey(o) === t && r.runGuarded(function() { return n(o) }) } }, n._normalizeKey = function(t) {
                        switch (t) {
                            case "esc":
                                return "escape";
                            default:
                                return t
                        }
                    }, e = l([u(0, Vt(zs))], n)
                }(Xs),
                Ic = function() {},
                Mc = function(t) {
                    function n(n) { var e = t.call(this) || this; return e._doc = n, e }
                    return o(n, t), n.prototype.sanitize = function(t, n) {
                        if (null == n) return null;
                        switch (t) {
                            case qr.NONE:
                                return n;
                            case qr.HTML:
                                return n instanceof Rc ? n.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(n, "HTML"), function(t, n) {
                                    var e = null;
                                    try {
                                        Or = Or || new wr(t);
                                        var r = n ? String(n) : "";
                                        e = Or.getInertBodyElement(r);
                                        var o = 5,
                                            i = r;
                                        do {
                                            if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                                            o--, r = i, i = e.innerHTML, e = Or.getInertBodyElement(r)
                                        } while (r !== i);
                                        var l = new Dr,
                                            u = l.sanitizeChildren(Hr(e) || e);
                                        return ke() && l.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), u
                                    } finally {
                                        if (e)
                                            for (var a = Hr(e) || e; a.firstChild;) a.removeChild(a.firstChild)
                                    }
                                }(this._doc, String(n)));
                            case qr.STYLE:
                                return n instanceof jc ? n.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(n, "Style"), function(t) { if (!(t = String(t).trim())) return ""; var n = t.match(zr); return n && xr(n[1]) === n[1] || t.match(Fr) && function(t) { for (var n = !0, e = !0, r = 0; r < t.length; r++) { var o = t.charAt(r); "'" === o && e ? n = !n : '"' === o && n && (e = !e) } return n && e }(t) ? t : (ke() && console.warn("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe") }(n));
                            case qr.SCRIPT:
                                if (n instanceof Dc) return n.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(n, "Script"), new Error("unsafe value used in a script context");
                            case qr.URL:
                                return n instanceof Lc || n instanceof Vc ? n.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(n, "URL"), xr(String(n)));
                            case qr.RESOURCE_URL:
                                if (n instanceof Lc) return n.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(n, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                            default:
                                throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)")
                        }
                    }, n.prototype.checkNotSafeValue = function(t, n) { if (t instanceof Nc) throw new Error("Required a safe " + n + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)") }, n.prototype.bypassSecurityTrustHtml = function(t) { return new Rc(t) }, n.prototype.bypassSecurityTrustStyle = function(t) { return new jc(t) }, n.prototype.bypassSecurityTrustScript = function(t) { return new Dc(t) }, n.prototype.bypassSecurityTrustUrl = function(t) { return new Vc(t) }, n.prototype.bypassSecurityTrustResourceUrl = function(t) { return new Lc(t) }, l([u(0, Vt(zs))], n)
                }(Ic),
                Nc = function() {
                    function t(t) { this.changingThisBreaksApplicationSecurity = t }
                    return t.prototype.toString = function() { return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)" }, t
                }(),
                Rc = function(t) {
                    function n() { return null !== t && t.apply(this, arguments) || this }
                    return o(n, t), n.prototype.getTypeName = function() { return "HTML" }, n
                }(Nc),
                jc = function(t) {
                    function n() { return null !== t && t.apply(this, arguments) || this }
                    return o(n, t), n.prototype.getTypeName = function() { return "Style" }, n
                }(Nc),
                Dc = function(t) {
                    function n() { return null !== t && t.apply(this, arguments) || this }
                    return o(n, t), n.prototype.getTypeName = function() { return "Script" }, n
                }(Nc),
                Vc = function(t) {
                    function n() { return null !== t && t.apply(this, arguments) || this }
                    return o(n, t), n.prototype.getTypeName = function() { return "URL" }, n
                }(Nc),
                Lc = function(t) {
                    function n() { return null !== t && t.apply(this, arguments) || this }
                    return o(n, t), n.prototype.getTypeName = function() { return "ResourceURL" }, n
                }(Nc),
                Uc = Ee(gr, "browser", [{ provide: Hn, useValue: "browser" }, { provide: Un, useValue: function() { Hs.makeCurrent(), Ks.init() }, multi: !0 }, { provide: fs, useClass: Bs, deps: [zs] }, { provide: zs, useFactory: function() { return document }, deps: [] }]);

            function Hc() { return new _n }
            var Fc = function() {
                function t(t) { if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.") }
                var n;
                return n = t, t.withServerTransition = function(t) { return { ngModule: n, providers: [{ provide: Dn, useValue: t.appId }, { provide: Gs, useExisting: Dn }, Ws] } }, n = l([u(0, Lt()), u(0, Ht()), u(0, Vt(n))], t)
            }();
            "undefined" != typeof window && window;
            var zc = function(t, n) { this.id = t, this.url = n },
                qc = function(t) {
                    function n(n, e, r, o) { void 0 === r && (r = "imperative"), void 0 === o && (o = null); var i = t.call(this, n, e) || this; return i.navigationTrigger = r, i.restoredState = o, i }
                    return o(n, t), n.prototype.toString = function() { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')" }, n
                }(zc),
                Bc = function(t) {
                    function n(n, e, r) { var o = t.call(this, n, e) || this; return o.urlAfterRedirects = r, o }
                    return o(n, t), n.prototype.toString = function() { return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')" }, n
                }(zc),
                Gc = function(t) {
                    function n(n, e, r) { var o = t.call(this, n, e) || this; return o.reason = r, o }
                    return o(n, t), n.prototype.toString = function() { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')" }, n
                }(zc),
                Wc = function(t) {
                    function n(n, e, r) { var o = t.call(this, n, e) || this; return o.error = r, o }
                    return o(n, t), n.prototype.toString = function() { return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")" }, n
                }(zc),
                Kc = function(t) {
                    function n(n, e, r, o) { var i = t.call(this, n, e) || this; return i.urlAfterRedirects = r, i.state = o, i }
                    return o(n, t), n.prototype.toString = function() { return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")" }, n
                }(zc),
                Qc = function(t) {
                    function n(n, e, r, o) { var i = t.call(this, n, e) || this; return i.urlAfterRedirects = r, i.state = o, i }
                    return o(n, t), n.prototype.toString = function() { return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")" }, n
                }(zc),
                Zc = function(t) {
                    function n(n, e, r, o, i) { var l = t.call(this, n, e) || this; return l.urlAfterRedirects = r, l.state = o, l.shouldActivate = i, l }
                    return o(n, t), n.prototype.toString = function() { return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")" }, n
                }(zc),
                Yc = function(t) {
                    function n(n, e, r, o) { var i = t.call(this, n, e) || this; return i.urlAfterRedirects = r, i.state = o, i }
                    return o(n, t), n.prototype.toString = function() { return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")" }, n
                }(zc),
                Jc = function(t) {
                    function n(n, e, r, o) { var i = t.call(this, n, e) || this; return i.urlAfterRedirects = r, i.state = o, i }
                    return o(n, t), n.prototype.toString = function() { return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")" }, n
                }(zc),
                $c = function() {
                    function t(t) { this.route = t }
                    return t.prototype.toString = function() { return "RouteConfigLoadStart(path: " + this.route.path + ")" }, t
                }(),
                Xc = function() {
                    function t(t) { this.route = t }
                    return t.prototype.toString = function() { return "RouteConfigLoadEnd(path: " + this.route.path + ")" }, t
                }(),
                tp = function() {
                    function t(t) { this.snapshot = t }
                    return t.prototype.toString = function() { return "ChildActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')" }, t
                }(),
                np = function() {
                    function t(t) { this.snapshot = t }
                    return t.prototype.toString = function() { return "ChildActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')" }, t
                }(),
                ep = function() {
                    function t(t) { this.snapshot = t }
                    return t.prototype.toString = function() { return "ActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')" }, t
                }(),
                rp = function() {
                    function t(t) { this.snapshot = t }
                    return t.prototype.toString = function() { return "ActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')" }, t
                }(),
                op = function() {
                    function t(t, n, e) { this.routerEvent = t, this.position = n, this.anchor = e }
                    return t.prototype.toString = function() { return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ", " + this.position[1] : null) + "')" }, t
                }(),
                ip = function() {},
                lp = "primary",
                up = function() {
                    function t(t) { this.params = t || {} }
                    return t.prototype.has = function(t) { return this.params.hasOwnProperty(t) }, t.prototype.get = function(t) { if (this.has(t)) { var n = this.params[t]; return Array.isArray(n) ? n[0] : n } return null }, t.prototype.getAll = function(t) { if (this.has(t)) { var n = this.params[t]; return Array.isArray(n) ? n : [n] } return [] }, Object.defineProperty(t.prototype, "keys", { get: function() { return Object.keys(this.params) }, enumerable: !0, configurable: !0 }), t
                }();

            function ap(t) { return new up(t) }

            function sp(t, n, e) {
                var r = e.path.split("/");
                if (r.length > t.length) return null;
                if ("full" === e.pathMatch && (n.hasChildren() || r.length < t.length)) return null;
                for (var o = {}, i = 0; i < r.length; i++) {
                    var l = r[i],
                        u = t[i];
                    if (l.startsWith(":")) o[l.substring(1)] = u;
                    else if (l !== u.path) return null
                }
                return { consumed: t.slice(0, r.length), posParams: o }
            }
            var cp = function(t, n) { this.routes = t, this.module = n };

            function pp(t, n) {
                void 0 === n && (n = "");
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    hp(r, fp(n, r))
                }
            }

            function hp(t, n) {
                if (!t) throw new Error("\n      Invalid configuration of route '" + n + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
                if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + n + "': Array cannot be specified");
                if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== lp) throw new Error("Invalid configuration of route '" + n + "': a componentless route without children or loadChildren cannot have a named outlet set");
                if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '" + n + "': redirectTo and children cannot be used together");
                if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '" + n + "': redirectTo and loadChildren cannot be used together");
                if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '" + n + "': children and loadChildren cannot be used together");
                if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '" + n + "': redirectTo and component cannot be used together");
                if (t.path && t.matcher) throw new Error("Invalid configuration of route '" + n + "': path and matcher cannot be used together");
                if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error("Invalid configuration of route '" + n + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
                if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '" + n + "': routes must have either a path or a matcher specified");
                if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '" + n + "': path cannot start with a slash");
                if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error("Invalid configuration of route '{path: \"" + n + '", redirectTo: "' + t.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
                if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '" + n + "': pathMatch can only be set to 'prefix' or 'full'");
                t.children && pp(t.children, n)
            }

            function fp(t, n) { return n ? t || n.path ? t && !n.path ? t + "/" : !t && n.path ? n.path : t + "/" + n.path : "" : t }

            function dp(t) {
                var n = t.children && t.children.map(dp),
                    e = n ? i({}, t, { children: n }) : i({}, t);
                return !e.component && (n || e.loadChildren) && e.outlet && e.outlet !== lp && (e.component = ip), e
            }

            function gp(t, n) {
                var e, r = Object.keys(t),
                    o = Object.keys(n);
                if (r.length != o.length) return !1;
                for (var i = 0; i < r.length; i++)
                    if (t[e = r[i]] !== n[e]) return !1;
                return !0
            }

            function vp(t) { return Array.prototype.concat.apply([], t) }

            function yp(t) { return t.length > 0 ? t[t.length - 1] : null }

            function mp(t, n) { for (var e in t) t.hasOwnProperty(e) && n(t[e], e) }

            function bp(t) { return t.pipe(ut(), ts(function(t) { return !0 === t })) }

            function _p(t) { return Nn(t) ? t : Mn(t) ? et(Promise.resolve(t)) : ja(t) }

            function wp(t, n, e) {
                return e ? function(t, n) { return gp(t, n) }(t.queryParams, n.queryParams) && function t(n, e) { if (!Ep(n.segments, e.segments)) return !1; if (n.numberOfChildren !== e.numberOfChildren) return !1; for (var r in e.children) { if (!n.children[r]) return !1; if (!t(n.children[r], e.children[r])) return !1 } return !0 }(t.root, n.root) : function(t, n) { return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every(function(e) { return n[e] === t[e] }) }(t.queryParams, n.queryParams) && function t(n, e) {
                    return function n(e, r, o) {
                        if (e.segments.length > o.length) return !!Ep(l = e.segments.slice(0, o.length), o) && !r.hasChildren();
                        if (e.segments.length === o.length) { if (!Ep(e.segments, o)) return !1; for (var i in r.children) { if (!e.children[i]) return !1; if (!t(e.children[i], r.children[i])) return !1 } return !0 }
                        var l = o.slice(0, e.segments.length),
                            u = o.slice(e.segments.length);
                        return !!Ep(e.segments, l) && !!e.children[lp] && n(e.children[lp], r, u)
                    }(n, e, e.segments)
                }(t.root, n.root)
            }
            var Cp = function() {
                    function t(t, n, e) { this.root = t, this.queryParams = n, this.fragment = e }
                    return Object.defineProperty(t.prototype, "queryParamMap", { get: function() { return this._queryParamMap || (this._queryParamMap = ap(this.queryParams)), this._queryParamMap }, enumerable: !0, configurable: !0 }), t.prototype.toString = function() { return Ap.serialize(this) }, t
                }(),
                kp = function() {
                    function t(t, n) {
                        var e = this;
                        this.segments = t, this.children = n, this.parent = null, mp(n, function(t, n) { return t.parent = e })
                    }
                    return t.prototype.hasChildren = function() { return this.numberOfChildren > 0 }, Object.defineProperty(t.prototype, "numberOfChildren", { get: function() { return Object.keys(this.children).length }, enumerable: !0, configurable: !0 }), t.prototype.toString = function() { return Tp(this) }, t
                }(),
                xp = function() {
                    function t(t, n) { this.path = t, this.parameters = n }
                    return Object.defineProperty(t.prototype, "parameterMap", { get: function() { return this._parameterMap || (this._parameterMap = ap(this.parameters)), this._parameterMap }, enumerable: !0, configurable: !0 }), t.prototype.toString = function() { return Dp(this) }, t
                }();

            function Ep(t, n) { return t.length === n.length && t.every(function(t, e) { return t.path === n[e].path }) }

            function Sp(t, n) { var e = []; return mp(t.children, function(t, r) { r === lp && (e = e.concat(n(t, r))) }), mp(t.children, function(t, r) { r !== lp && (e = e.concat(n(t, r))) }), e }
            var Op = function() {},
                Pp = function() {
                    function t() {}
                    return t.prototype.parse = function(t) { var n = new Fp(t); return new Cp(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment()) }, t.prototype.serialize = function(t) {
                        var n, e;
                        return "/" + function t(n, e) {
                            if (!n.hasChildren()) return Tp(n);
                            if (e) {
                                var r = n.children[lp] ? t(n.children[lp], !1) : "",
                                    o = [];
                                return mp(n.children, function(n, e) { e !== lp && o.push(e + ":" + t(n, !1)) }), o.length > 0 ? r + "(" + o.join("//") + ")" : r
                            }
                            var i = Sp(n, function(e, r) { return r === lp ? [t(n.children[lp], !1)] : [r + ":" + t(e, !1)] });
                            return Tp(n) + "/(" + i.join("//") + ")"
                        }(t.root, !0) + (n = t.queryParams, (e = Object.keys(n).map(function(t) { var e = n[t]; return Array.isArray(e) ? e.map(function(n) { return Mp(t) + "=" + Mp(n) }).join("&") : Mp(t) + "=" + Mp(e) })).length ? "?" + e.join("&") : "") + ("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : "")
                    }, t
                }(),
                Ap = new Pp;

            function Tp(t) { return t.segments.map(function(t) { return Dp(t) }).join("/") }

            function Ip(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",") }

            function Mp(t) { return Ip(t).replace(/%3B/gi, ";") }

            function Np(t) { return Ip(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&") }

            function Rp(t) { return decodeURIComponent(t) }

            function jp(t) { return Rp(t.replace(/\+/g, "%20")) }

            function Dp(t) { return "" + Np(t.path) + (n = t.parameters, Object.keys(n).map(function(t) { return ";" + Np(t) + "=" + Np(n[t]) }).join("")); var n }
            var Vp = /^[^\/()?;=#]+/;

            function Lp(t) { var n = t.match(Vp); return n ? n[0] : "" }
            var Up = /^[^=?&#]+/,
                Hp = /^[^?&#]+/,
                Fp = function() {
                    function t(t) { this.url = t, this.remaining = t }
                    return t.prototype.parseRootSegment = function() { return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new kp([], {}) : new kp([], this.parseChildren()) }, t.prototype.parseQueryParams = function() {
                        var t = {};
                        if (this.consumeOptional("?"))
                            do { this.parseQueryParam(t) } while (this.consumeOptional("&"));
                        return t
                    }, t.prototype.parseFragment = function() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null }, t.prototype.parseChildren = function() {
                        if ("" === this.remaining) return {};
                        this.consumeOptional("/");
                        var t = [];
                        for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
                        var n = {};
                        this.peekStartsWith("/(") && (this.capture("/"), n = this.parseParens(!0));
                        var e = {};
                        return this.peekStartsWith("(") && (e = this.parseParens(!1)), (t.length > 0 || Object.keys(n).length > 0) && (e[lp] = new kp(t, n)), e
                    }, t.prototype.parseSegment = function() { var t = Lp(this.remaining); if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'."); return this.capture(t), new xp(Rp(t), this.parseMatrixParams()) }, t.prototype.parseMatrixParams = function() { for (var t = {}; this.consumeOptional(";");) this.parseParam(t); return t }, t.prototype.parseParam = function(t) {
                        var n = Lp(this.remaining);
                        if (n) {
                            this.capture(n);
                            var e = "";
                            if (this.consumeOptional("=")) {
                                var r = Lp(this.remaining);
                                r && this.capture(e = r)
                            }
                            t[Rp(n)] = Rp(e)
                        }
                    }, t.prototype.parseQueryParam = function(t) {
                        var n, e = (n = this.remaining.match(Up)) ? n[0] : "";
                        if (e) {
                            this.capture(e);
                            var r = "";
                            if (this.consumeOptional("=")) {
                                var o = function(t) { var n = t.match(Hp); return n ? n[0] : "" }(this.remaining);
                                o && this.capture(r = o)
                            }
                            var i = jp(e),
                                l = jp(r);
                            if (t.hasOwnProperty(i)) {
                                var u = t[i];
                                Array.isArray(u) || (t[i] = u = [u]), u.push(l)
                            } else t[i] = l
                        }
                    }, t.prototype.parseParens = function(t) {
                        var n = {};
                        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                            var e = Lp(this.remaining),
                                r = this.remaining[e.length];
                            if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '" + this.url + "'");
                            var o = void 0;
                            e.indexOf(":") > -1 ? (o = e.substr(0, e.indexOf(":")), this.capture(o), this.capture(":")) : t && (o = lp);
                            var i = this.parseChildren();
                            n[o] = 1 === Object.keys(i).length ? i[lp] : new kp([], i), this.consumeOptional("//")
                        }
                        return n
                    }, t.prototype.peekStartsWith = function(t) { return this.remaining.startsWith(t) }, t.prototype.consumeOptional = function(t) { return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0) }, t.prototype.capture = function(t) { if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".') }, t
                }(),
                zp = function(t) { this.segmentGroup = t || null },
                qp = function(t) { this.urlTree = t };

            function Bp(t) { return new N(function(n) { return n.error(new zp(t)) }) }

            function Gp(t) { return new N(function(n) { return n.error(new qp(t)) }) }

            function Wp(t) { return new N(function(n) { return n.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'")) }) }
            var Kp = function() {
                function t(t, n, e, r, o) { this.configLoader = n, this.urlSerializer = e, this.urlTree = r, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(ee) }
                return t.prototype.apply = function() { var t = this; return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, lp).pipe($(function(n) { return t.createUrlTree(n, t.urlTree.queryParams, t.urlTree.fragment) })).pipe(rs(function(n) { if (n instanceof qp) return t.allowRedirects = !1, t.match(n.urlTree); if (n instanceof zp) throw t.noMatchError(n); throw n })) }, t.prototype.match = function(t) { var n = this; return this.expandSegmentGroup(this.ngModule, this.config, t.root, lp).pipe($(function(e) { return n.createUrlTree(e, t.queryParams, t.fragment) })).pipe(rs(function(t) { if (t instanceof zp) throw n.noMatchError(t); throw t })) }, t.prototype.noMatchError = function(t) { return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'") }, t.prototype.createUrlTree = function(t, n, e) { var r, o = t.segments.length > 0 ? new kp([], ((r = {})[lp] = t, r)) : t; return new Cp(o, n, e) }, t.prototype.expandSegmentGroup = function(t, n, e, r) { return 0 === e.segments.length && e.hasChildren() ? this.expandChildren(t, n, e).pipe($(function(t) { return new kp([], t) })) : this.expandSegment(t, e, n, e.segments, r, !0) }, t.prototype.expandChildren = function(t, n, e) {
                    var r = this;
                    return function(e, o) {
                        if (0 === Object.keys(e).length) return ja({});
                        var i = [],
                            l = [],
                            u = {};
                        return mp(e, function(e, o) {
                            var a, s, c = (a = o, s = e, r.expandSegmentGroup(t, n, s, a)).pipe($(function(t) { return u[o] = t }));
                            o === lp ? i.push(c) : l.push(c)
                        }), ja.apply(null, i.concat(l)).pipe(La(), Xa(), $(function() { return u }))
                    }(e.children)
                }, t.prototype.expandSegment = function(t, n, e, r, o, i) { var l = this; return ja.apply(void 0, p(e)).pipe($(function(u) { return l.expandSegmentAgainstRoute(t, n, e, u, r, o, i).pipe(rs(function(t) { if (t instanceof zp) return ja(null); throw t })) }), La(), as(function(t) { return !!t }), rs(function(t, e) { if (t instanceof Da || "EmptyError" === t.name) { if (l.noLeftoversInUrl(n, r, o)) return ja(new kp([], {})); throw new zp(n) } throw t })) }, t.prototype.noLeftoversInUrl = function(t, n, e) { return 0 === n.length && !t.children[e] }, t.prototype.expandSegmentAgainstRoute = function(t, n, e, r, o, i, l) { return Jp(r) !== i ? Bp(n) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, n, r, o) : l && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, n, e, r, o, i) : Bp(n) }, t.prototype.expandSegmentAgainstRouteUsingRedirect = function(t, n, e, r, o, i) { return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, n, e, r, o, i) }, t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(t, n, e, r) {
                    var o = this,
                        i = this.applyRedirectCommands([], e.redirectTo, {});
                    return e.redirectTo.startsWith("/") ? Gp(i) : this.lineralizeSegments(e, i).pipe(rt(function(e) { var i = new kp(e, {}); return o.expandSegment(t, i, n, e, r, !1) }))
                }, t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(t, n, e, r, o, i) {
                    var l = this,
                        u = Qp(n, r, o),
                        a = u.consumedSegments,
                        s = u.lastChild,
                        c = u.positionalParamSegments;
                    if (!u.matched) return Bp(n);
                    var p = this.applyRedirectCommands(a, r.redirectTo, c);
                    return r.redirectTo.startsWith("/") ? Gp(p) : this.lineralizeSegments(r, p).pipe(rt(function(r) { return l.expandSegment(t, n, e, r.concat(o.slice(s)), i, !1) }))
                }, t.prototype.matchSegmentAgainstRoute = function(t, n, e, r) {
                    var o = this;
                    if ("**" === e.path) return e.loadChildren ? this.configLoader.load(t.injector, e).pipe($(function(t) { return e._loadedConfig = t, new kp(r, {}) })) : ja(new kp(r, {}));
                    var l = Qp(n, e, r),
                        u = l.consumedSegments,
                        a = l.lastChild;
                    if (!l.matched) return Bp(n);
                    var c = r.slice(a);
                    return this.getChildConfig(t, e).pipe(rt(function(t) {
                        var e = t.module,
                            r = t.routes,
                            l = function(t, n, e, r) {
                                return e.length > 0 && function(t, n, e) { return r.some(function(e) { return Yp(t, n, e) && Jp(e) !== lp }) }(t, e) ? {
                                    segmentGroup: Zp(new kp(n, function(t, n) {
                                        var e, r, o = {};
                                        o[lp] = n;
                                        try { for (var i = s(t), l = i.next(); !l.done; l = i.next()) { var u = l.value; "" === u.path && Jp(u) !== lp && (o[Jp(u)] = new kp([], {})) } } catch (t) { e = { error: t } } finally { try { l && !l.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } }
                                        return o
                                    }(r, new kp(e, t.children)))),
                                    slicedSegments: []
                                } : 0 === e.length && function(t, n, e) { return r.some(function(e) { return Yp(t, n, e) }) }(t, e) ? {
                                    segmentGroup: Zp(new kp(t.segments, function(t, n, e, r) {
                                        var o, l, u = {};
                                        try {
                                            for (var a = s(e), c = a.next(); !c.done; c = a.next()) {
                                                var p = c.value;
                                                Yp(t, n, p) && !r[Jp(p)] && (u[Jp(p)] = new kp([], {}))
                                            }
                                        } catch (t) { o = { error: t } } finally { try { c && !c.done && (l = a.return) && l.call(a) } finally { if (o) throw o.error } }
                                        return i({}, r, u)
                                    }(t, e, r, t.children))),
                                    slicedSegments: e
                                } : { segmentGroup: t, slicedSegments: e }
                            }(n, u, c, r),
                            a = l.segmentGroup,
                            p = l.slicedSegments;
                        return 0 === p.length && a.hasChildren() ? o.expandChildren(e, r, a).pipe($(function(t) { return new kp(u, t) })) : 0 === r.length && 0 === p.length ? ja(new kp(u, {})) : o.expandSegment(e, a, r, p, lp, !0).pipe($(function(t) { return new kp(u.concat(t.segments), t.children) }))
                    }))
                }, t.prototype.getChildConfig = function(t, n) { var e = this; return n.children ? ja(new cp(n.children, t)) : n.loadChildren ? void 0 !== n._loadedConfig ? ja(n._loadedConfig) : function(t, n) { var e = n.canLoad; return e && 0 !== e.length ? bp(et(e).pipe($(function(e) { var r = t.get(e); return _p(r.canLoad ? r.canLoad(n) : r(n)) }))) : ja(!0) }(t.injector, n).pipe(rt(function(r) { return r ? e.configLoader.load(t.injector, n).pipe($(function(t) { return n._loadedConfig = t, t })) : function(t) { return new N(function(n) { return n.error(((e = Error("NavigationCancelingError: Cannot load children because the guard of the route \"path: '" + t.path + "'\" returned false")).ngNavigationCancelingError = !0, e)); var e }) }(n) })) : ja(new cp([], t)) }, t.prototype.lineralizeSegments = function(t, n) {
                    for (var e = [], r = n.root;;) {
                        if (e = e.concat(r.segments), 0 === r.numberOfChildren) return ja(e);
                        if (r.numberOfChildren > 1 || !r.children[lp]) return Wp(t.redirectTo);
                        r = r.children[lp]
                    }
                }, t.prototype.applyRedirectCommands = function(t, n, e) { return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), t, e) }, t.prototype.applyRedirectCreatreUrlTree = function(t, n, e, r) { var o = this.createSegmentGroup(t, n.root, e, r); return new Cp(o, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment) }, t.prototype.createQueryParams = function(t, n) {
                    var e = {};
                    return mp(t, function(t, r) {
                        if ("string" == typeof t && t.startsWith(":")) {
                            var o = t.substring(1);
                            e[r] = n[o]
                        } else e[r] = t
                    }), e
                }, t.prototype.createSegmentGroup = function(t, n, e, r) {
                    var o = this,
                        i = this.createSegments(t, n.segments, e, r),
                        l = {};
                    return mp(n.children, function(n, i) { l[i] = o.createSegmentGroup(t, n, e, r) }), new kp(i, l)
                }, t.prototype.createSegments = function(t, n, e, r) { var o = this; return n.map(function(n) { return n.path.startsWith(":") ? o.findPosParam(t, n, r) : o.findOrReturn(n, e) }) }, t.prototype.findPosParam = function(t, n, e) { var r = e[n.path.substring(1)]; if (!r) throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + n.path + "'."); return r }, t.prototype.findOrReturn = function(t, n) {
                    var e, r, o = 0;
                    try {
                        for (var i = s(n), l = i.next(); !l.done; l = i.next()) {
                            var u = l.value;
                            if (u.path === t.path) return n.splice(o), u;
                            o++
                        }
                    } catch (t) { e = { error: t } } finally { try { l && !l.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } }
                    return t
                }, t
            }();

            function Qp(t, n, e) { if ("" === n.path) return "full" === n.pathMatch && (t.hasChildren() || e.length > 0) ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }; var r = (n.matcher || sp)(e, t, n); return r ? { matched: !0, consumedSegments: r.consumed, lastChild: r.consumed.length, positionalParamSegments: r.posParams } : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } }

            function Zp(t) { if (1 === t.numberOfChildren && t.children[lp]) { var n = t.children[lp]; return new kp(t.segments.concat(n.segments), n.children) } return t }

            function Yp(t, n, e) { return (!(t.hasChildren() || n.length > 0) || "full" !== e.pathMatch) && "" === e.path && void 0 !== e.redirectTo }

            function Jp(t) { return t.outlet || lp }
            var $p = function() {
                function t(t) { this._root = t }
                return Object.defineProperty(t.prototype, "root", { get: function() { return this._root.value }, enumerable: !0, configurable: !0 }), t.prototype.parent = function(t) { var n = this.pathFromRoot(t); return n.length > 1 ? n[n.length - 2] : null }, t.prototype.children = function(t) { var n = Xp(t, this._root); return n ? n.children.map(function(t) { return t.value }) : [] }, t.prototype.firstChild = function(t) { var n = Xp(t, this._root); return n && n.children.length > 0 ? n.children[0].value : null }, t.prototype.siblings = function(t) { var n = th(t, this._root); return n.length < 2 ? [] : n[n.length - 2].children.map(function(t) { return t.value }).filter(function(n) { return n !== t }) }, t.prototype.pathFromRoot = function(t) { return th(t, this._root).map(function(t) { return t.value }) }, t
            }();

            function Xp(t, n) { var e, r; if (t === n.value) return n; try { for (var o = s(n.children), i = o.next(); !i.done; i = o.next()) { var l = Xp(t, i.value); if (l) return l } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } return null }

            function th(t, n) { var e, r; if (t === n.value) return [n]; try { for (var o = s(n.children), i = o.next(); !i.done; i = o.next()) { var l = th(t, i.value); if (l.length) return l.unshift(n), l } } catch (t) { e = { error: t } } finally { try { i && !i.done && (r = o.return) && r.call(o) } finally { if (e) throw e.error } } return [] }
            var nh = function() {
                function t(t, n) { this.value = t, this.children = n }
                return t.prototype.toString = function() { return "TreeNode(" + this.value + ")" }, t
            }();

            function eh(t) { var n = {}; return t && t.children.forEach(function(t) { return n[t.value.outlet] = t }), n }
            var rh = function(t) {
                function n(n, e) { var r = t.call(this, n) || this; return r.snapshot = e, sh(r, n), r }
                return o(n, t), n.prototype.toString = function() { return this.snapshot.toString() }, n
            }($p);

            function oh(t, n) {
                var e = function(t, n) { var e = new uh([], {}, {}, "", {}, lp, n, null, t.root, -1, {}); return new ah("", new nh(e, [])) }(t, n),
                    r = new Va([new xp("", {})]),
                    o = new Va({}),
                    i = new Va({}),
                    l = new Va({}),
                    u = new Va(""),
                    a = new ih(r, o, l, u, i, lp, n, e.root);
                return a.snapshot = e.root, new rh(new nh(a, []), e)
            }
            var ih = function() {
                function t(t, n, e, r, o, i, l, u) { this.url = t, this.params = n, this.queryParams = e, this.fragment = r, this.data = o, this.outlet = i, this.component = l, this._futureSnapshot = u }
                return Object.defineProperty(t.prototype, "routeConfig", { get: function() { return this._futureSnapshot.routeConfig }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "root", { get: function() { return this._routerState.root }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parent", { get: function() { return this._routerState.parent(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "firstChild", { get: function() { return this._routerState.firstChild(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "children", { get: function() { return this._routerState.children(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pathFromRoot", { get: function() { return this._routerState.pathFromRoot(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "paramMap", { get: function() { return this._paramMap || (this._paramMap = this.params.pipe($(function(t) { return ap(t) }))), this._paramMap }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "queryParamMap", { get: function() { return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe($(function(t) { return ap(t) }))), this._queryParamMap }, enumerable: !0, configurable: !0 }), t.prototype.toString = function() { return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")" }, t
            }();

            function lh(t, n) {
                void 0 === n && (n = "emptyOnly");
                var e = t.pathFromRoot,
                    r = 0;
                if ("always" !== n)
                    for (r = e.length - 1; r >= 1;) {
                        var o = e[r],
                            l = e[r - 1];
                        if (o.routeConfig && "" === o.routeConfig.path) r--;
                        else {
                            if (l.component) break;
                            r--
                        }
                    }
                return function(t) { return t.reduce(function(t, n) { return { params: i({}, t.params, n.params), data: i({}, t.data, n.data), resolve: i({}, t.resolve, n._resolvedData) } }, { params: {}, data: {}, resolve: {} }) }(e.slice(r))
            }
            var uh = function() {
                    function t(t, n, e, r, o, i, l, u, a, s, c) { this.url = t, this.params = n, this.queryParams = e, this.fragment = r, this.data = o, this.outlet = i, this.component = l, this.routeConfig = u, this._urlSegment = a, this._lastPathIndex = s, this._resolve = c }
                    return Object.defineProperty(t.prototype, "root", { get: function() { return this._routerState.root }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parent", { get: function() { return this._routerState.parent(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "firstChild", { get: function() { return this._routerState.firstChild(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "children", { get: function() { return this._routerState.children(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pathFromRoot", { get: function() { return this._routerState.pathFromRoot(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "paramMap", { get: function() { return this._paramMap || (this._paramMap = ap(this.params)), this._paramMap }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "queryParamMap", { get: function() { return this._queryParamMap || (this._queryParamMap = ap(this.queryParams)), this._queryParamMap }, enumerable: !0, configurable: !0 }), t.prototype.toString = function() { return "Route(url:'" + this.url.map(function(t) { return t.toString() }).join("/") + "', path:'" + (this.routeConfig ? this.routeConfig.path : "") + "')" }, t
                }(),
                ah = function(t) {
                    function n(n, e) { var r = t.call(this, e) || this; return r.url = n, sh(r, e), r }
                    return o(n, t), n.prototype.toString = function() { return ch(this._root) }, n
                }($p);

            function sh(t, n) { n.value._routerState = t, n.children.forEach(function(n) { return sh(t, n) }) }

            function ch(t) { var n = t.children.length > 0 ? " { " + t.children.map(ch).join(", ") + " } " : ""; return "" + t.value + n }

            function ph(t) {
                if (t.snapshot) {
                    var n = t.snapshot,
                        e = t._futureSnapshot;
                    t.snapshot = e, gp(n.queryParams, e.queryParams) || t.queryParams.next(e.queryParams), n.fragment !== e.fragment && t.fragment.next(e.fragment), gp(n.params, e.params) || t.params.next(e.params),
                        function(t, n) {
                            if (t.length !== n.length) return !1;
                            for (var e = 0; e < t.length; ++e)
                                if (!gp(t[e], n[e])) return !1;
                            return !0
                        }(n.url, e.url) || t.url.next(e.url), gp(n.data, e.data) || t.data.next(e.data)
                } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
            }

            function hh(t, n) { var e, r; return gp(t.params, n.params) && Ep(e = t.url, r = n.url) && e.every(function(t, n) { return gp(t.parameters, r[n].parameters) }) && !(!t.parent != !n.parent) && (!t.parent || hh(t.parent, n.parent)) }

            function fh(t) { return "object" == typeof t && null != t && !t.outlets && !t.segmentPath }

            function dh(t, n, e, r, o) { var i = {}; return r && mp(r, function(t, n) { i[n] = Array.isArray(t) ? t.map(function(t) { return "" + t }) : "" + t }), new Cp(e.root === t ? n : function t(n, e, r) { var o = {}; return mp(n.children, function(n, i) { o[i] = n === e ? r : t(n, e, r) }), new kp(n.segments, o) }(e.root, t, n), i, o) }
            var gh = function() {
                    function t(t, n, e) { if (this.isAbsolute = t, this.numberOfDoubleDots = n, this.commands = e, t && e.length > 0 && fh(e[0])) throw new Error("Root segment cannot have matrix parameters"); var r = e.find(function(t) { return "object" == typeof t && null != t && t.outlets }); if (r && r !== yp(e)) throw new Error("{outlets:{}} has to be the last command") }
                    return t.prototype.toRoot = function() { return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0] }, t
                }(),
                vh = function(t, n, e) { this.segmentGroup = t, this.processChildren = n, this.index = e };

            function yh(t) { return "object" == typeof t && null != t && t.outlets ? t.outlets[lp] : "" + t }

            function mh(t, n, e) {
                if (t || (t = new kp([], {})), 0 === t.segments.length && t.hasChildren()) return bh(t, n, e);
                var r = function(t, n, e) {
                        for (var r = 0, o = n, i = { match: !1, pathIndex: 0, commandIndex: 0 }; o < t.segments.length;) {
                            if (r >= e.length) return i;
                            var l = t.segments[o],
                                u = yh(e[r]),
                                a = r < e.length - 1 ? e[r + 1] : null;
                            if (o > 0 && void 0 === u) break;
                            if (u && a && "object" == typeof a && void 0 === a.outlets) {
                                if (!kh(u, a, l)) return i;
                                r += 2
                            } else {
                                if (!kh(u, {}, l)) return i;
                                r++
                            }
                            o++
                        }
                        return { match: !0, pathIndex: o, commandIndex: r }
                    }(t, n, e),
                    o = e.slice(r.commandIndex);
                if (r.match && r.pathIndex < t.segments.length) { var i = new kp(t.segments.slice(0, r.pathIndex), {}); return i.children[lp] = new kp(t.segments.slice(r.pathIndex), t.children), bh(i, 0, o) }
                return r.match && 0 === o.length ? new kp(t.segments, {}) : r.match && !t.hasChildren() ? _h(t, n, e) : r.match ? bh(t, 0, o) : _h(t, n, e)
            }

            function bh(t, n, e) {
                if (0 === e.length) return new kp(t.segments, {});
                var r = function(t) { var n, e; return "object" != typeof t[0] ? ((n = {})[lp] = t, n) : void 0 === t[0].outlets ? ((e = {})[lp] = t, e) : t[0].outlets }(e),
                    o = {};
                return mp(r, function(e, r) { null !== e && (o[r] = mh(t.children[r], n, e)) }), mp(t.children, function(t, n) { void 0 === r[n] && (o[n] = t) }), new kp(t.segments, o)
            }

            function _h(t, n, e) {
                for (var r = t.segments.slice(0, n), o = 0; o < e.length;) {
                    if ("object" == typeof e[o] && void 0 !== e[o].outlets) { var i = wh(e[o].outlets); return new kp(r, i) }
                    if (0 === o && fh(e[0])) r.push(new xp(t.segments[n].path, e[0])), o++;
                    else {
                        var l = yh(e[o]),
                            u = o < e.length - 1 ? e[o + 1] : null;
                        l && u && fh(u) ? (r.push(new xp(l, Ch(u))), o += 2) : (r.push(new xp(l, {})), o++)
                    }
                }
                return new kp(r, {})
            }

            function wh(t) { var n = {}; return mp(t, function(t, e) { null !== t && (n[e] = _h(new kp([], {}), 0, t)) }), n }

            function Ch(t) { var n = {}; return mp(t, function(t, e) { return n[e] = "" + t }), n }

            function kh(t, n, e) { return t == e.path && gp(n, e.parameters) }
            var xh = function(t) { this.path = t, this.route = this.path[this.path.length - 1] },
                Eh = function(t, n) { this.component = t, this.route = n },
                Sh = function() {
                    function t(t, n, e, r) { this.future = t, this.curr = n, this.moduleInjector = e, this.forwardEvent = r, this.canActivateChecks = [], this.canDeactivateChecks = [] }
                    return t.prototype.initialize = function(t) {
                        var n = this.future._root;
                        this.setupChildRouteGuards(n, this.curr ? this.curr._root : null, t, [n.value])
                    }, t.prototype.checkGuards = function() { var t = this; return this.isDeactivating() || this.isActivating() ? this.runCanDeactivateChecks().pipe(rt(function(n) { return n ? t.runCanActivateChecks() : ja(!1) })) : ja(!0) }, t.prototype.resolveData = function(t) { var n = this; return this.isActivating() ? et(this.canActivateChecks).pipe(ss(function(e) { return n.runResolve(e.route, t) }), function(t, n) { return arguments.length >= 2 ? function(e) { return I(cs(t, n), qa(1), Ya(n))(e) } : function(n) { return I(cs(function(n, e, r) { return t(n, e, r + 1) }), qa(1))(n) } }(function(t, n) { return t })) : ja(null) }, t.prototype.isDeactivating = function() { return 0 !== this.canDeactivateChecks.length }, t.prototype.isActivating = function() { return 0 !== this.canActivateChecks.length }, t.prototype.setupChildRouteGuards = function(t, n, e, r) {
                        var o = this,
                            i = eh(n);
                        t.children.forEach(function(t) { o.setupRouteGuards(t, i[t.value.outlet], e, r.concat([t.value])), delete i[t.value.outlet] }), mp(i, function(t, n) { return o.deactivateRouteAndItsChildren(t, e.getContext(n)) })
                    }, t.prototype.setupRouteGuards = function(t, n, e, r) {
                        var o = t.value,
                            i = n ? n.value : null,
                            l = e ? e.getContext(t.value.outlet) : null;
                        if (i && o.routeConfig === i.routeConfig) {
                            var u = this.shouldRunGuardsAndResolvers(i, o, o.routeConfig.runGuardsAndResolvers);
                            u ? this.canActivateChecks.push(new xh(r)) : (o.data = i.data, o._resolvedData = i._resolvedData), this.setupChildRouteGuards(t, n, o.component ? l ? l.children : null : e, r), u && this.canDeactivateChecks.push(new Eh(l.outlet.component, i))
                        } else i && this.deactivateRouteAndItsChildren(n, l), this.canActivateChecks.push(new xh(r)), this.setupChildRouteGuards(t, null, o.component ? l ? l.children : null : e, r)
                    }, t.prototype.shouldRunGuardsAndResolvers = function(t, n, e) {
                        switch (e) {
                            case "always":
                                return !0;
                            case "paramsOrQueryParamsChange":
                                return !hh(t, n) || !gp(t.queryParams, n.queryParams);
                            case "paramsChange":
                            default:
                                return !hh(t, n)
                        }
                    }, t.prototype.deactivateRouteAndItsChildren = function(t, n) {
                        var e = this,
                            r = eh(t),
                            o = t.value;
                        mp(r, function(t, r) { e.deactivateRouteAndItsChildren(t, o.component ? n ? n.children.getContext(r) : null : n) }), this.canDeactivateChecks.push(new Eh(o.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null, o))
                    }, t.prototype.runCanDeactivateChecks = function() { var t = this; return et(this.canDeactivateChecks).pipe(rt(function(n) { return t.runCanDeactivate(n.component, n.route) }), ts(function(t) { return !0 === t })) }, t.prototype.runCanActivateChecks = function() { var t = this; return et(this.canActivateChecks).pipe(ss(function(n) { return bp(et([t.fireChildActivationStart(n.route.parent), t.fireActivationStart(n.route), t.runCanActivateChild(n.path), t.runCanActivate(n.route)])) }), ts(function(t) { return !0 === t })) }, t.prototype.fireActivationStart = function(t) { return null !== t && this.forwardEvent && this.forwardEvent(new ep(t)), ja(!0) }, t.prototype.fireChildActivationStart = function(t) { return null !== t && this.forwardEvent && this.forwardEvent(new tp(t)), ja(!0) }, t.prototype.runCanActivate = function(t) {
                        var n = this,
                            e = t.routeConfig ? t.routeConfig.canActivate : null;
                        return e && 0 !== e.length ? bp(et(e).pipe($(function(e) { var r = n.getToken(e, t); return _p(r.canActivate ? r.canActivate(t, n.future) : r(t, n.future)).pipe(as()) }))) : ja(!0)
                    }, t.prototype.runCanActivateChild = function(t) {
                        var n = this,
                            e = t[t.length - 1];
                        return bp(et(t.slice(0, t.length - 1).reverse().map(function(t) { return n.extractCanActivateChild(t) }).filter(function(t) { return null !== t })).pipe($(function(t) { return bp(et(t.guards).pipe($(function(r) { var o = n.getToken(r, t.node); return _p(o.canActivateChild ? o.canActivateChild(e, n.future) : o(e, n.future)).pipe(as()) }))) })))
                    }, t.prototype.extractCanActivateChild = function(t) { var n = t.routeConfig ? t.routeConfig.canActivateChild : null; return n && 0 !== n.length ? { node: t, guards: n } : null }, t.prototype.runCanDeactivate = function(t, n) {
                        var e = this,
                            r = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
                        return r && 0 !== r.length ? et(r).pipe(rt(function(r) { var o = e.getToken(r, n); return _p(o.canDeactivate ? o.canDeactivate(t, n, e.curr, e.future) : o(t, n, e.curr, e.future)).pipe(as()) })).pipe(ts(function(t) { return !0 === t })) : ja(!0)
                    }, t.prototype.runResolve = function(t, n) { return this.resolveNode(t._resolve, t).pipe($(function(e) { return t._resolvedData = e, t.data = i({}, t.data, lh(t, n).resolve), null })) }, t.prototype.resolveNode = function(t, n) {
                        var e = this,
                            r = Object.keys(t);
                        if (0 === r.length) return ja({});
                        if (1 === r.length) { var o = r[0]; return this.getResolver(t[o], n).pipe($(function(t) { var n; return (n = {})[o] = t, n })) }
                        var i = {};
                        return et(r).pipe(rt(function(r) { return e.getResolver(t[r], n).pipe($(function(t) { return i[r] = t, t })) })).pipe(Xa(), $(function() { return i }))
                    }, t.prototype.getResolver = function(t, n) { var e = this.getToken(t, n); return _p(e.resolve ? e.resolve(n, this.future) : e(n, this.future)) }, t.prototype.getToken = function(t, n) { var e = function(t) { if (!t) return null; for (var n = t.parent; n; n = n.parent) { var e = n.routeConfig; if (e && e._loadedConfig) return e._loadedConfig } return null }(n); return (e ? e.module.injector : this.moduleInjector).get(t) }, t
                }(),
                Oh = function() {},
                Ph = function() {
                    function t(t, n, e, r, o, i) { this.rootComponentType = t, this.config = n, this.urlTree = e, this.url = r, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = i }
                    return t.prototype.recognize = function() {
                        try {
                            var t = Ih(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                                n = this.processSegmentGroup(this.config, t, lp),
                                e = new uh([], Object.freeze({}), Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, lp, this.rootComponentType, null, this.urlTree.root, -1, {}),
                                r = new nh(e, n),
                                o = new ah(this.url, r);
                            return this.inheritParamsAndData(o._root), ja(o)
                        } catch (t) { return new N(function(n) { return n.error(t) }) }
                    }, t.prototype.inheritParamsAndData = function(t) {
                        var n = this,
                            e = t.value,
                            r = lh(e, this.paramsInheritanceStrategy);
                        e.params = Object.freeze(r.params), e.data = Object.freeze(r.data), t.children.forEach(function(t) { return n.inheritParamsAndData(t) })
                    }, t.prototype.processSegmentGroup = function(t, n, e) { return 0 === n.segments.length && n.hasChildren() ? this.processChildren(t, n) : this.processSegment(t, n, n.segments, e) }, t.prototype.processChildren = function(t, n) {
                        var e, r = this,
                            o = Sp(n, function(n, e) { return r.processSegmentGroup(t, n, e) });
                        return e = {}, o.forEach(function(t) {
                            var n = e[t.value.outlet];
                            if (n) {
                                var r = n.url.map(function(t) { return t.toString() }).join("/"),
                                    o = t.value.url.map(function(t) { return t.toString() }).join("/");
                                throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.")
                            }
                            e[t.value.outlet] = t.value
                        }), o.sort(function(t, n) { return t.value.outlet === lp ? -1 : n.value.outlet === lp ? 1 : t.value.outlet.localeCompare(n.value.outlet) }), o
                    }, t.prototype.processSegment = function(t, n, e, r) { var o, i; try { for (var l = s(t), u = l.next(); !u.done; u = l.next()) { var a = u.value; try { return this.processSegmentAgainstRoute(a, n, e, r) } catch (t) { if (!(t instanceof Oh)) throw t } } } catch (t) { o = { error: t } } finally { try { u && !u.done && (i = l.return) && i.call(l) } finally { if (o) throw o.error } } if (this.noLeftoversInUrl(n, e, r)) return []; throw new Oh }, t.prototype.noLeftoversInUrl = function(t, n, e) { return 0 === n.length && !t.children[e] }, t.prototype.processSegmentAgainstRoute = function(t, n, e, r) {
                        if (t.redirectTo) throw new Oh;
                        if ((t.outlet || lp) !== r) throw new Oh;
                        var o, l = [],
                            u = [];
                        if ("**" === t.path) {
                            var a = e.length > 0 ? yp(e).parameters : {};
                            o = new uh(e, a, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Rh(t), r, t.component, t, Ah(n), Th(n) + e.length, jh(t))
                        } else {
                            var s = function(t, n, e) {
                                if ("" === n.path) { if ("full" === n.pathMatch && (t.hasChildren() || e.length > 0)) throw new Oh; return { consumedSegments: [], lastChild: 0, parameters: {} } }
                                var r = (n.matcher || sp)(e, t, n);
                                if (!r) throw new Oh;
                                var o = {};
                                mp(r.posParams, function(t, n) { o[n] = t.path });
                                var l = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
                                return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: l }
                            }(n, t, e);
                            l = s.consumedSegments, u = e.slice(s.lastChild), o = new uh(l, s.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Rh(t), r, t.component, t, Ah(n), Th(n) + l.length, jh(t))
                        }
                        var c = function(t) { return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [] }(t),
                            p = Ih(n, l, u, c, this.relativeLinkResolution),
                            h = p.segmentGroup,
                            f = p.slicedSegments;
                        if (0 === f.length && h.hasChildren()) { var d = this.processChildren(c, h); return [new nh(o, d)] }
                        if (0 === c.length && 0 === f.length) return [new nh(o, [])];
                        var g = this.processSegment(c, h, f, lp);
                        return [new nh(o, g)]
                    }, t
                }();

            function Ah(t) { for (var n = t; n._sourceSegment;) n = n._sourceSegment; return n }

            function Th(t) { for (var n = t, e = n._segmentIndexShift ? n._segmentIndexShift : 0; n._sourceSegment;) e += (n = n._sourceSegment)._segmentIndexShift ? n._segmentIndexShift : 0; return e - 1 }

            function Ih(t, n, e, r, o) {
                if (e.length > 0 && function(t, n, e) { return r.some(function(e) { return Mh(t, n, e) && Nh(e) !== lp }) }(t, e)) {
                    var l = new kp(n, function(t, n, e, r) {
                        var o, i, l = {};
                        l[lp] = r, r._sourceSegment = t, r._segmentIndexShift = n.length;
                        try {
                            for (var u = s(e), a = u.next(); !a.done; a = u.next()) {
                                var c = a.value;
                                if ("" === c.path && Nh(c) !== lp) {
                                    var p = new kp([], {});
                                    p._sourceSegment = t, p._segmentIndexShift = n.length, l[Nh(c)] = p
                                }
                            }
                        } catch (t) { o = { error: t } } finally { try { a && !a.done && (i = u.return) && i.call(u) } finally { if (o) throw o.error } }
                        return l
                    }(t, n, r, new kp(e, t.children)));
                    return l._sourceSegment = t, l._segmentIndexShift = n.length, { segmentGroup: l, slicedSegments: [] }
                }
                if (0 === e.length && function(t, n, e) { return r.some(function(e) { return Mh(t, n, e) }) }(t, e)) {
                    var u = new kp(t.segments, function(t, n, e, r, o, l) {
                        var u, a, c = {};
                        try {
                            for (var p = s(r), h = p.next(); !h.done; h = p.next()) {
                                var f = h.value;
                                if (Mh(t, e, f) && !o[Nh(f)]) {
                                    var d = new kp([], {});
                                    d._sourceSegment = t, d._segmentIndexShift = "legacy" === l ? t.segments.length : n.length, c[Nh(f)] = d
                                }
                            }
                        } catch (t) { u = { error: t } } finally { try { h && !h.done && (a = p.return) && a.call(p) } finally { if (u) throw u.error } }
                        return i({}, o, c)
                    }(t, n, e, r, t.children, o));
                    return u._sourceSegment = t, u._segmentIndexShift = n.length, { segmentGroup: u, slicedSegments: e }
                }
                var a = new kp(t.segments, t.children);
                return a._sourceSegment = t, a._segmentIndexShift = n.length, { segmentGroup: a, slicedSegments: e }
            }

            function Mh(t, n, e) { return (!(t.hasChildren() || n.length > 0) || "full" !== e.pathMatch) && "" === e.path && void 0 === e.redirectTo }

            function Nh(t) { return t.outlet || lp }

            function Rh(t) { return t.data || {} }

            function jh(t) { return t.resolve || {} }
            var Dh = function() {},
                Vh = function() {
                    function t() {}
                    return t.prototype.shouldDetach = function(t) { return !1 }, t.prototype.store = function(t, n) {}, t.prototype.shouldAttach = function(t) { return !1 }, t.prototype.retrieve = function(t) { return null }, t.prototype.shouldReuseRoute = function(t, n) { return t.routeConfig === n.routeConfig }, t
                }(),
                Lh = new vt("ROUTES"),
                Uh = function() {
                    function t(t, n, e, r) { this.loader = t, this.compiler = n, this.onLoadStartListener = e, this.onLoadEndListener = r }
                    return t.prototype.load = function(t, n) { var e = this; return this.onLoadStartListener && this.onLoadStartListener(n), this.loadModuleFactory(n.loadChildren).pipe($(function(r) { e.onLoadEndListener && e.onLoadEndListener(n); var o = r.create(t); return new cp(vp(o.injector.get(Lh)).map(dp), o) })) }, t.prototype.loadModuleFactory = function(t) { var n = this; return "string" == typeof t ? et(this.loader.load(t)) : _p(t()).pipe(rt(function(t) { return t instanceof re ? ja(t) : et(n.compiler.compileModuleAsync(t)) })) }, t
                }(),
                Hh = function() {},
                Fh = function() {
                    function t() {}
                    return t.prototype.shouldProcessUrl = function(t) { return !0 }, t.prototype.extract = function(t) { return t }, t.prototype.merge = function(t, n) { return t }, t
                }();

            function zh(t) { throw t }

            function qh(t, n, e) { return n.parse("/") }

            function Bh(t, n) { return ja(null) }
            var Gh = function() {
                    function t(t, n, e, r, o, i, l, u) {
                        var a = this;
                        this.rootComponentType = t, this.urlSerializer = n, this.rootContexts = e, this.location = r, this.config = u, this.navigations = new Va(null), this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new L, this.errorHandler = zh, this.malformedUriErrorHandler = qh, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = { beforePreactivation: Bh, afterPreactivation: Bh }, this.urlHandlingStrategy = new Fh, this.routeReuseStrategy = new Vh, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(ee), this.console = o.get(zn);
                        var s = o.get(se);
                        this.isNgZoneEnabled = s instanceof se, this.resetConfig(u), this.currentUrlTree = new Cp(new kp([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.configLoader = new Uh(i, l, function(t) { return a.triggerEvent(new $c(t)) }, function(t) { return a.triggerEvent(new Xc(t)) }), this.routerState = oh(this.currentUrlTree, this.rootComponentType), this.processNavigations()
                    }
                    return t.prototype.resetRootComponentType = function(t) { this.rootComponentType = t, this.routerState.root.component = this.rootComponentType }, t.prototype.initialNavigation = function() { this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 }) }, t.prototype.setUpLocationChangeListener = function() {
                        var t = this;
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe(function(n) {
                            var e = t.parseUrl(n.url),
                                r = "popstate" === n.type ? "popstate" : "hashchange",
                                o = n.state && n.state.navigationId ? { navigationId: n.state.navigationId } : null;
                            setTimeout(function() { t.scheduleNavigation(e, r, o, { replaceUrl: !0 }) }, 0)
                        }))
                    }, Object.defineProperty(t.prototype, "url", { get: function() { return this.serializeUrl(this.currentUrlTree) }, enumerable: !0, configurable: !0 }), t.prototype.triggerEvent = function(t) { this.events.next(t) }, t.prototype.resetConfig = function(t) { pp(t), this.config = t.map(dp), this.navigated = !1, this.lastSuccessfulId = -1 }, t.prototype.ngOnDestroy = function() { this.dispose() }, t.prototype.dispose = function() { this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null) }, t.prototype.createUrlTree = function(t, n) {
                        void 0 === n && (n = {});
                        var e = n.relativeTo,
                            r = n.queryParams,
                            o = n.fragment,
                            l = n.preserveQueryParams,
                            u = n.queryParamsHandling,
                            a = n.preserveFragment;
                        ke() && l && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                        var s = e || this.routerState.root,
                            c = a ? this.currentUrlTree.fragment : o,
                            h = null;
                        if (u) switch (u) {
                            case "merge":
                                h = i({}, this.currentUrlTree.queryParams, r);
                                break;
                            case "preserve":
                                h = this.currentUrlTree.queryParams;
                                break;
                            default:
                                h = r || null
                        } else h = l ? this.currentUrlTree.queryParams : r || null;
                        return null !== h && (h = this.removeEmptyProps(h)),
                            function(t, n, e, r, o) {
                                if (0 === e.length) return dh(n.root, n.root, n, r, o);
                                var i = function(t) {
                                    if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new gh(!0, 0, t);
                                    var n = 0,
                                        e = !1,
                                        r = t.reduce(function(t, r, o) { if ("object" == typeof r && null != r) { if (r.outlets) { var i = {}; return mp(r.outlets, function(t, n) { i[n] = "string" == typeof t ? t.split("/") : t }), p(t, [{ outlets: i }]) } if (r.segmentPath) return p(t, [r.segmentPath]) } return "string" != typeof r ? p(t, [r]) : 0 === o ? (r.split("/").forEach(function(r, o) { 0 == o && "." === r || (0 == o && "" === r ? e = !0 : ".." === r ? n++ : "" != r && t.push(r)) }), t) : p(t, [r]) }, []);
                                    return new gh(e, n, r)
                                }(e);
                                if (i.toRoot()) return dh(n.root, new kp([], {}), n, r, o);
                                var l = function(t, e, r) {
                                        if (t.isAbsolute) return new vh(n.root, !0, 0);
                                        if (-1 === r.snapshot._lastPathIndex) return new vh(r.snapshot._urlSegment, !0, 0);
                                        var o = fh(t.commands[0]) ? 0 : 1;
                                        return function(n, e, i) {
                                            for (var l = r.snapshot._urlSegment, u = r.snapshot._lastPathIndex + o, a = t.numberOfDoubleDots; a > u;) {
                                                if (a -= u, !(l = l.parent)) throw new Error("Invalid number of '../'");
                                                u = l.segments.length
                                            }
                                            return new vh(l, !1, u - a)
                                        }()
                                    }(i, 0, t),
                                    u = l.processChildren ? bh(l.segmentGroup, l.index, i.commands) : mh(l.segmentGroup, l.index, i.commands);
                                return dh(l.segmentGroup, u, n, r, o)
                            }(s, this.currentUrlTree, t, h, c)
                    }, t.prototype.navigateByUrl = function(t, n) {
                        void 0 === n && (n = { skipLocationChange: !1 }), ke() && this.isNgZoneEnabled && !se.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                        var e = t instanceof Cp ? t : this.parseUrl(t),
                            r = this.urlHandlingStrategy.merge(e, this.rawUrlTree);
                        return this.scheduleNavigation(r, "imperative", null, n)
                    }, t.prototype.navigate = function(t, n) {
                        return void 0 === n && (n = { skipLocationChange: !1 }),
                            function(t) { for (var n = 0; n < t.length; n++) { var e = t[n]; if (null == e) throw new Error("The requested path contains " + e + " segment at index " + n) } }(t), this.navigateByUrl(this.createUrlTree(t, n), n)
                    }, t.prototype.serializeUrl = function(t) { return this.urlSerializer.serialize(t) }, t.prototype.parseUrl = function(t) { var n; try { n = this.urlSerializer.parse(t) } catch (e) { n = this.malformedUriErrorHandler(e, this.urlSerializer, t) } return n }, t.prototype.isActive = function(t, n) { if (t instanceof Cp) return wp(this.currentUrlTree, t, n); var e = this.parseUrl(t); return wp(this.currentUrlTree, e, n) }, t.prototype.removeEmptyProps = function(t) { return Object.keys(t).reduce(function(n, e) { var r = t[e]; return null !== r && void 0 !== r && (n[e] = r), n }, {}) }, t.prototype.processNavigations = function() {
                        var t = this;
                        this.navigations.pipe(ss(function(n) { return n ? (t.executeScheduledNavigation(n), n.promise.catch(function() {})) : ja(null) })).subscribe(function() {})
                    }, t.prototype.scheduleNavigation = function(t, n, e, r) {
                        var o = this.navigations.value;
                        if (o && "imperative" !== n && "imperative" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        if (o && "hashchange" == n && "popstate" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        if (o && "popstate" == n && "hashchange" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        var i = null,
                            l = null,
                            u = new Promise(function(t, n) { i = t, l = n }),
                            a = ++this.navigationId;
                        return this.navigations.next({ id: a, source: n, state: e, rawUrl: t, extras: r, resolve: i, reject: l, promise: u }), u.catch(function(t) { return Promise.reject(t) })
                    }, t.prototype.executeScheduledNavigation = function(t) {
                        var n = this,
                            e = t.id,
                            r = t.rawUrl,
                            o = t.extras,
                            i = t.resolve,
                            l = t.reject,
                            u = t.source,
                            a = t.state,
                            s = this.urlHandlingStrategy.extract(r),
                            c = !this.navigated || s.toString() !== this.currentUrlTree.toString();
                        ("reload" === this.onSameUrlNavigation || c) && this.urlHandlingStrategy.shouldProcessUrl(r) ? ("eager" !== this.urlUpdateStrategy || o.skipLocationChange || this.setBrowserUrl(r, !!o.replaceUrl, e), this.events.next(new qc(e, this.serializeUrl(s), u, a)), Promise.resolve().then(function(t) { return n.runNavigate(s, r, !!o.skipLocationChange, !!o.replaceUrl, e, null) }).then(i, l)) : c && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree) ? (this.events.next(new qc(e, this.serializeUrl(s), u, a)), Promise.resolve().then(function(t) { return n.runNavigate(s, r, !1, !1, e, oh(s, n.rootComponentType).snapshot) }).then(i, l)) : (this.rawUrlTree = r, i(null))
                    }, t.prototype.runNavigate = function(t, n, e, r, o, i) {
                        var l = this;
                        return o !== this.navigationId ? (this.events.next(new Gc(o, this.serializeUrl(t), "Navigation ID " + o + " is not equal to the current navigation id " + this.navigationId)), Promise.resolve(!1)) : new Promise(function(u, a) {
                            var c, p = (i ? ja({ appliedUrl: t, snapshot: i }) : new Kp(l.ngModule.injector, l.configLoader, l.urlSerializer, t, l.config).apply().pipe(rt(function(n) { return function(t, n, e, r, o, i) { return void 0 === o && (o = "emptyOnly"), void 0 === i && (i = "legacy"), new Ph(t, n, e, r, o, i).recognize() }(l.rootComponentType, l.config, n, l.serializeUrl(n), l.paramsInheritanceStrategy, l.relativeLinkResolution).pipe($(function(e) { return l.events.next(new Kc(o, l.serializeUrl(t), l.serializeUrl(n), e)), { appliedUrl: n, snapshot: e } })) }))).pipe(rt(function(i) { return "boolean" == typeof i ? ja(i) : l.hooks.beforePreactivation(i.snapshot, { navigationId: o, appliedUrlTree: t, rawUrlTree: n, skipLocationChange: e, replaceUrl: r }).pipe($(function() { return i })) })).pipe($(function(t) {
                                if ("boolean" == typeof t) return t;
                                var n = t.appliedUrl,
                                    e = t.snapshot;
                                return (c = new Sh(e, l.routerState.snapshot, l.ngModule.injector, function(t) { return l.triggerEvent(t) })).initialize(l.rootContexts), { appliedUrl: n, snapshot: e }
                            })).pipe(rt(function(n) {
                                if ("boolean" == typeof n || l.navigationId !== o) return ja(!1);
                                var e = n.appliedUrl,
                                    r = n.snapshot;
                                return l.triggerEvent(new Qc(o, l.serializeUrl(t), l.serializeUrl(e), r)), c.checkGuards().pipe($(function(n) { return l.triggerEvent(new Zc(o, l.serializeUrl(t), l.serializeUrl(e), r, n)), { appliedUrl: e, snapshot: r, shouldActivate: n } }))
                            })).pipe(rt(function(n) { return "boolean" == typeof n || l.navigationId !== o ? ja(!1) : n.shouldActivate && c.isActivating() ? (l.triggerEvent(new Yc(o, l.serializeUrl(t), l.serializeUrl(n.appliedUrl), n.snapshot)), c.resolveData(l.paramsInheritanceStrategy).pipe($(function() { return l.triggerEvent(new Jc(o, l.serializeUrl(t), l.serializeUrl(n.appliedUrl), n.snapshot)), n }))) : ja(n) })).pipe(rt(function(i) { return "boolean" == typeof i || l.navigationId !== o ? ja(!1) : l.hooks.afterPreactivation(i.snapshot, { navigationId: o, appliedUrlTree: t, rawUrlTree: n, skipLocationChange: e, replaceUrl: r }).pipe($(function() { return i })) })).pipe($(function(t) {
                                if ("boolean" == typeof t || l.navigationId !== o) return !1;
                                var n, e, r, i = t.appliedUrl,
                                    u = t.shouldActivate;
                                return u ? {
                                    appliedUrl: i,
                                    state: (r = function t(n, e, r) {
                                        if (r && n.shouldReuseRoute(e.value, r.value.snapshot)) {
                                            (a = r.value)._futureSnapshot = e.value;
                                            var o = function(n, e, r) { return e.children.map(function(e) { var o, i; try { for (var l = s(r.children), u = l.next(); !u.done; u = l.next()) { var a = u.value; if (n.shouldReuseRoute(a.value.snapshot, e.value)) return t(n, e, a) } } catch (t) { o = { error: t } } finally { try { u && !u.done && (i = l.return) && i.call(l) } finally { if (o) throw o.error } } return t(n, e) }) }(n, e, r);
                                            return new nh(a, o)
                                        }
                                        var i = n.retrieve(e.value);
                                        if (i) {
                                            var l = i.route;
                                            return function t(n, e) {
                                                if (n.value.routeConfig !== e.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                                if (n.children.length !== e.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                                e.value._futureSnapshot = n.value;
                                                for (var r = 0; r < n.children.length; ++r) t(n.children[r], e.children[r])
                                            }(e, l), l
                                        }
                                        var u, a = new ih(new Va((u = e.value).url), new Va(u.params), new Va(u.queryParams), new Va(u.fragment), new Va(u.data), u.outlet, u.component, u);
                                        return o = e.children.map(function(e) { return t(n, e) }), new nh(a, o)
                                    }(l.routeReuseStrategy, (n = t.snapshot)._root, (e = l.routerState) ? e._root : void 0), new rh(r, n)),
                                    shouldActivate: u
                                } : { appliedUrl: i, state: null, shouldActivate: u }
                            }));
                            l.activateRoutes(p, l.routerState, l.currentUrlTree, o, t, n, e, r, u, a)
                        })
                    }, t.prototype.activateRoutes = function(t, n, e, r, o, i, l, u, a, s) {
                        var c, p = this;
                        t.forEach(function(t) {
                            if ("boolean" != typeof t && t.shouldActivate && r === p.navigationId && t.state) {
                                var e = t.state;
                                p.currentUrlTree = t.appliedUrl, p.rawUrlTree = p.urlHandlingStrategy.merge(p.currentUrlTree, i), p.routerState = e, "deferred" !== p.urlUpdateStrategy || l || p.setBrowserUrl(p.rawUrlTree, u, r), new Wh(p.routeReuseStrategy, e, n, function(t) { return p.triggerEvent(t) }).activate(p.rootContexts), c = !0
                            } else c = !1
                        }).then(function() { c ? (p.navigated = !0, p.lastSuccessfulId = r, p.events.next(new Bc(r, p.serializeUrl(o), p.serializeUrl(p.currentUrlTree))), a(!0)) : (p.resetUrlToCurrentUrlTree(), p.events.next(new Gc(r, p.serializeUrl(o), "")), a(!1)) }, function(t) {
                            if ((l = t) && l.ngNavigationCancelingError) p.navigated = !0, p.resetStateAndUrl(n, e, i), p.events.next(new Gc(r, p.serializeUrl(o), t.message)), a(!1);
                            else { p.resetStateAndUrl(n, e, i), p.events.next(new Wc(r, p.serializeUrl(o), t)); try { a(p.errorHandler(t)) } catch (t) { s(t) } }
                            var l
                        })
                    }, t.prototype.setBrowserUrl = function(t, n, e) {
                        var r = this.urlSerializer.serialize(t);
                        this.location.isCurrentPathEqualTo(r) || n ? this.location.replaceState(r, "", { navigationId: e }) : this.location.go(r, "", { navigationId: e })
                    }, t.prototype.resetStateAndUrl = function(t, n, e) { this.routerState = t, this.currentUrlTree = n, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e), this.resetUrlToCurrentUrlTree() }, t.prototype.resetUrlToCurrentUrlTree = function() { this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", { navigationId: this.lastSuccessfulId }) }, t
                }(),
                Wh = function() {
                    function t(t, n, e, r) { this.routeReuseStrategy = t, this.futureState = n, this.currState = e, this.forwardEvent = r }
                    return t.prototype.activate = function(t) {
                        var n = this.futureState._root,
                            e = this.currState ? this.currState._root : null;
                        this.deactivateChildRoutes(n, e, t), ph(this.futureState.root), this.activateChildRoutes(n, e, t)
                    }, t.prototype.deactivateChildRoutes = function(t, n, e) {
                        var r = this,
                            o = eh(n);
                        t.children.forEach(function(t) {
                            var n = t.value.outlet;
                            r.deactivateRoutes(t, o[n], e), delete o[n]
                        }), mp(o, function(t, n) { r.deactivateRouteAndItsChildren(t, e) })
                    }, t.prototype.deactivateRoutes = function(t, n, e) {
                        var r = t.value,
                            o = n ? n.value : null;
                        if (r === o)
                            if (r.component) {
                                var i = e.getContext(r.outlet);
                                i && this.deactivateChildRoutes(t, n, i.children)
                            } else this.deactivateChildRoutes(t, n, e);
                        else o && this.deactivateRouteAndItsChildren(n, e)
                    }, t.prototype.deactivateRouteAndItsChildren = function(t, n) { this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, n) : this.deactivateRouteAndOutlet(t, n) }, t.prototype.detachAndStoreRouteSubtree = function(t, n) {
                        var e = n.getContext(t.value.outlet);
                        if (e && e.outlet) {
                            var r = e.outlet.detach(),
                                o = e.children.onOutletDeactivated();
                            this.routeReuseStrategy.store(t.value.snapshot, { componentRef: r, route: t, contexts: o })
                        }
                    }, t.prototype.deactivateRouteAndOutlet = function(t, n) {
                        var e = this,
                            r = n.getContext(t.value.outlet);
                        if (r) {
                            var o = eh(t),
                                i = t.value.component ? r.children : n;
                            mp(o, function(t, n) { return e.deactivateRouteAndItsChildren(t, i) }), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                        }
                    }, t.prototype.activateChildRoutes = function(t, n, e) {
                        var r = this,
                            o = eh(n);
                        t.children.forEach(function(t) { r.activateRoutes(t, o[t.value.outlet], e), r.forwardEvent(new rp(t.value.snapshot)) }), t.children.length && this.forwardEvent(new np(t.value.snapshot))
                    }, t.prototype.activateRoutes = function(t, n, e) {
                        var r = t.value,
                            o = n ? n.value : null;
                        if (ph(r), r === o)
                            if (r.component) {
                                var i = e.getOrCreateContext(r.outlet);
                                this.activateChildRoutes(t, n, i.children)
                            } else this.activateChildRoutes(t, n, e);
                        else if (r.component)
                            if (i = e.getOrCreateContext(r.outlet), this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                                var l = this.routeReuseStrategy.retrieve(r.snapshot);
                                this.routeReuseStrategy.store(r.snapshot, null), i.children.onOutletReAttached(l.contexts), i.attachRef = l.componentRef, i.route = l.route.value, i.outlet && i.outlet.attach(l.componentRef, l.route.value), Kh(l.route)
                            } else {
                                var u = function(t) { for (var n = r.snapshot.parent; n; n = n.parent) { var e = n.routeConfig; if (e && e._loadedConfig) return e._loadedConfig; if (e && e.component) return null } return null }(),
                                    a = u ? u.module.componentFactoryResolver : null;
                                i.attachRef = null, i.route = r, i.resolver = a, i.outlet && i.outlet.activateWith(r, a), this.activateChildRoutes(t, null, i.children)
                            }
                        else this.activateChildRoutes(t, null, e)
                    }, t
                }();

            function Kh(t) { ph(t.value), t.children.forEach(Kh) }
            var Qh = function() {
                function t(t, n, e) {
                    var r = this;
                    this.router = t, this.route = n, this.locationStrategy = e, this.commands = [], this.subscription = t.events.subscribe(function(t) { t instanceof Bc && r.updateTargetUrlAndHref() })
                }
                return Object.defineProperty(t.prototype, "routerLink", { set: function(t) { this.commands = null != t ? Array.isArray(t) ? t : [t] : [] }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "preserveQueryParams", { set: function(t) { ke() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t }, enumerable: !0, configurable: !0 }), t.prototype.ngOnChanges = function(t) { this.updateTargetUrlAndHref() }, t.prototype.ngOnDestroy = function() { this.subscription.unsubscribe() }, t.prototype.onClick = function(t, n, e, r) { if (0 !== t || n || e || r) return !0; if ("string" == typeof this.target && "_self" != this.target) return !0; var o = { skipLocationChange: Zh(this.skipLocationChange), replaceUrl: Zh(this.replaceUrl) }; return this.router.navigateByUrl(this.urlTree, o), !1 }, t.prototype.updateTargetUrlAndHref = function() { this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) }, Object.defineProperty(t.prototype, "urlTree", { get: function() { return this.router.createUrlTree(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment, preserveQueryParams: Zh(this.preserve), queryParamsHandling: this.queryParamsHandling, preserveFragment: Zh(this.preserveFragment) }) }, enumerable: !0, configurable: !0 }), l([Et("attr.target"), xt(), a("design:type", String)], t.prototype, "target", void 0), t
            }();

            function Zh(t) { return "" === t || !!t }
            var Yh = function() {
                    function t(t, n, e, r) {
                        var o = this;
                        this.router = t, this.element = n, this.renderer = e, this.cdr = r, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = { exact: !1 }, this.subscription = t.events.subscribe(function(t) { t instanceof Bc && o.update() })
                    }
                    return t.prototype.ngAfterContentInit = function() {
                        var t = this;
                        this.links.changes.subscribe(function(n) { return t.update() }), this.linksWithHrefs.changes.subscribe(function(n) { return t.update() }), this.update()
                    }, Object.defineProperty(t.prototype, "routerLinkActive", {
                        set: function(t) {
                            var n = Array.isArray(t) ? t : t.split(" ");
                            this.classes = n.filter(function(t) { return !!t })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngOnChanges = function(t) { this.update() }, t.prototype.ngOnDestroy = function() { this.subscription.unsubscribe() }, t.prototype.update = function() {
                        var t = this;
                        this.links && this.linksWithHrefs && this.router.navigated && Promise.resolve().then(function() {
                            var n = t.hasActiveLinks();
                            t.isActive !== n && (t.isActive = n, t.classes.forEach(function(e) { n ? t.renderer.addClass(t.element.nativeElement, e) : t.renderer.removeClass(t.element.nativeElement, e) }))
                        })
                    }, t.prototype.isLinkActive = function(t) { var n = this; return function(e) { return t.isActive(e.urlTree, n.routerLinkActiveOptions.exact) } }, t.prototype.hasActiveLinks = function() { return this.links.some(this.isLinkActive(this.router)) || this.linksWithHrefs.some(this.isLinkActive(this.router)) }, t
                }(),
                Jh = function() { return function() { this.outlet = null, this.route = null, this.resolver = null, this.children = new $h, this.attachRef = null } }(),
                $h = function() {
                    function t() { this.contexts = new Map }
                    return t.prototype.onChildOutletCreated = function(t, n) {
                        var e = this.getOrCreateContext(t);
                        e.outlet = n, this.contexts.set(t, e)
                    }, t.prototype.onChildOutletDestroyed = function(t) {
                        var n = this.getContext(t);
                        n && (n.outlet = null)
                    }, t.prototype.onOutletDeactivated = function() { var t = this.contexts; return this.contexts = new Map, t }, t.prototype.onOutletReAttached = function(t) { this.contexts = t }, t.prototype.getOrCreateContext = function(t) { var n = this.getContext(t); return n || (n = new Jh, this.contexts.set(t, n)), n }, t.prototype.getContext = function(t) { return this.contexts.get(t) || null }, t
                }(),
                Xh = function() {
                    function t(t, n, e, r, o) { this.parentContexts = t, this.location = n, this.resolver = e, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new ae, this.deactivateEvents = new ae, this.name = r || lp, t.onChildOutletCreated(this.name, this) }
                    return t.prototype.ngOnDestroy = function() { this.parentContexts.onChildOutletDestroyed(this.name) }, t.prototype.ngOnInit = function() {
                        if (!this.activated) {
                            var t = this.parentContexts.getContext(this.name);
                            t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
                        }
                    }, Object.defineProperty(t.prototype, "isActivated", { get: function() { return !!this.activated }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "component", { get: function() { if (!this.activated) throw new Error("Outlet is not activated"); return this.activated.instance }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "activatedRoute", { get: function() { if (!this.activated) throw new Error("Outlet is not activated"); return this._activatedRoute }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "activatedRouteData", { get: function() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {} }, enumerable: !0, configurable: !0 }), t.prototype.detach = function() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        this.location.detach();
                        var t = this.activated;
                        return this.activated = null, this._activatedRoute = null, t
                    }, t.prototype.attach = function(t, n) { this.activated = t, this._activatedRoute = n, this.location.insert(t.hostView) }, t.prototype.deactivate = function() {
                        if (this.activated) {
                            var t = this.component;
                            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
                        }
                    }, t.prototype.activateWith = function(t, n) {
                        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                        this._activatedRoute = t;
                        var e = (n = n || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
                            r = this.parentContexts.getOrCreateContext(this.name).children,
                            o = new tf(t, r, this.location.injector);
                        this.activated = this.location.createComponent(e, this.location.length, o), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                    }, l([u(3, kt("name"))], t)
                }(),
                tf = function() {
                    function t(t, n, e) { this.route = t, this.childContexts = n, this.parent = e }
                    return t.prototype.get = function(t, n) { return t === ih ? this.route : t === $h ? this.childContexts : this.parent.get(t, n) }, t
                }(),
                nf = function() {},
                ef = function() {
                    function t() {}
                    return t.prototype.preload = function(t, n) { return n().pipe(rs(function() { return ja(null) })) }, t
                }(),
                rf = function() {
                    function t() {}
                    return t.prototype.preload = function(t, n) { return ja(null) }, t
                }(),
                of = function() {
                    function t(t, n, e, r, o) { this.router = t, this.injector = r, this.preloadingStrategy = o, this.loader = new Uh(n, e, function(n) { return t.triggerEvent(new $c(n)) }, function(n) { return t.triggerEvent(new Xc(n)) }) }
                    return t.prototype.setUpPreloading = function() {
                        var t = this;
                        this.subscription = this.router.events.pipe(Ua(function(t) { return t instanceof Bc }), ss(function() { return t.preload() })).subscribe(function() {})
                    }, t.prototype.preload = function() { var t = this.injector.get(ee); return this.processRoutes(t, this.router.config) }, t.prototype.ngOnDestroy = function() { this.subscription.unsubscribe() }, t.prototype.processRoutes = function(t, n) {
                        var e, r, o = [];
                        try {
                            for (var i = s(n), l = i.next(); !l.done; l = i.next()) {
                                var u = l.value;
                                if (u.loadChildren && !u.canLoad && u._loadedConfig) {
                                    var a = u._loadedConfig;
                                    o.push(this.processRoutes(a.module, a.routes))
                                } else u.loadChildren && !u.canLoad ? o.push(this.preloadConfig(t, u)) : u.children && o.push(this.processRoutes(t, u.children))
                            }
                        } catch (t) { e = { error: t } } finally { try { l && !l.done && (r = i.return) && r.call(i) } finally { if (e) throw e.error } }
                        return et(o).pipe(ut(), $(function(t) {}))
                    }, t.prototype.preloadConfig = function(t, n) { var e = this; return this.preloadingStrategy.preload(n, function() { return e.loader.load(t.injector, n).pipe(rt(function(t) { return n._loadedConfig = t, e.processRoutes(t.module, t.routes) })) }) }, t
                }(),
                lf = function() {
                    function t(t, n, e) { void 0 === e && (e = {}), this.router = t, this.viewportScroller = n, this.options = e, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, e.scrollPositionRestoration = e.scrollPositionRestoration || "disabled", e.anchorScrolling = e.anchorScrolling || "disabled" }
                    return t.prototype.init = function() { "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents() }, t.prototype.createScrollEvents = function() { var t = this; return this.router.events.subscribe(function(n) { n instanceof qc ? (t.store[t.lastId] = t.viewportScroller.getScrollPosition(), t.lastSource = n.navigationTrigger, t.restoredId = n.restoredState ? n.restoredState.navigationId : 0) : n instanceof Bc && (t.lastId = n.id, t.scheduleScrollEvent(n, t.router.parseUrl(n.urlAfterRedirects).fragment)) }) }, t.prototype.consumeScrollEvents = function() { var t = this; return this.router.events.subscribe(function(n) { n instanceof op && (n.position ? "top" === t.options.scrollPositionRestoration ? t.viewportScroller.scrollToPosition([0, 0]) : "enabled" === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(n.position) : n.anchor && "enabled" === t.options.anchorScrolling ? t.viewportScroller.scrollToAnchor(n.anchor) : "disabled" !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0])) }) }, t.prototype.scheduleScrollEvent = function(t, n) { this.router.triggerEvent(new op(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, n)) }, t.prototype.ngOnDestroy = function() { this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe() }, t
                }(),
                uf = new vt("ROUTER_CONFIGURATION"),
                af = new vt("ROUTER_FORROOT_GUARD"),
                sf = [ys, { provide: Op, useClass: Pp }, {
                    provide: Gh,
                    useFactory: vf,
                    deps: [Ae, Op, $h, ys, Kt, je, Bn, Lh, uf, [Hh, new Lt],
                        [Dh, new Lt]
                    ]
                }, $h, { provide: ih, useFactory: yf, deps: [Gh] }, { provide: je, useClass: Ue }, of, rf, ef, { provide: uf, useValue: { enableTracing: !1 } }];

            function cf() { return new xe("Router", Gh) }
            var pf = function() {
                function t(t, n) {}
                var n;
                return n = t, t.forRoot = function(t, e) {
                    return {
                        ngModule: n,
                        providers: [sf, gf(t), {
                                provide: af,
                                useFactory: df,
                                deps: [
                                    [Gh, new Lt, new Ht]
                                ]
                            }, { provide: uf, useValue: e || {} }, { provide: gs, useFactory: ff, deps: [fs, [new Vt(vs), new Lt], uf] }, { provide: lf, useFactory: hf, deps: [Gh, Is, uf] }, { provide: nf, useExisting: e && e.preloadingStrategy ? e.preloadingStrategy : rf }, { provide: xe, multi: !0, useFactory: cf },
                            [mf, { provide: Rn, multi: !0, useFactory: bf, deps: [mf] }, { provide: wf, useFactory: _f, deps: [mf] }, { provide: Fn, multi: !0, useExisting: wf }]
                        ]
                    }
                }, t.forChild = function(t) { return { ngModule: n, providers: [gf(t)] } }, n = l([u(0, Lt()), u(0, Vt(af)), u(1, Lt())], t)
            }();

            function hf(t, n, e) { return e.scrollOffset && n.setOffset(e.scrollOffset), new lf(t, n, e) }

            function ff(t, n, e) { return void 0 === e && (e = {}), e.useHash ? new bs(t, n) : new _s(t, n) }

            function df(t) { if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."); return "guarded" }

            function gf(t) { return [{ provide: Ct, multi: !0, useValue: t }, { provide: Lh, multi: !0, useValue: t }] }

            function vf(t, n, e, r, o, i, l, u, a, s, c) {
                void 0 === a && (a = {});
                var p = new Gh(null, n, e, r, o, i, l, vp(u));
                if (s && (p.urlHandlingStrategy = s), c && (p.routeReuseStrategy = c), a.errorHandler && (p.errorHandler = a.errorHandler), a.malformedUriErrorHandler && (p.malformedUriErrorHandler = a.malformedUriErrorHandler), a.enableTracing) {
                    var h = Rs();
                    p.events.subscribe(function(t) { h.logGroup("Router Event: " + t.constructor.name), h.log(t.toString()), h.log(t), h.logGroupEnd() })
                }
                return a.onSameUrlNavigation && (p.onSameUrlNavigation = a.onSameUrlNavigation), a.paramsInheritanceStrategy && (p.paramsInheritanceStrategy = a.paramsInheritanceStrategy), a.urlUpdateStrategy && (p.urlUpdateStrategy = a.urlUpdateStrategy), a.relativeLinkResolution && (p.relativeLinkResolution = a.relativeLinkResolution), p
            }

            function yf(t) { return t.routerState.root }
            var mf = function() {
                function t(t) { this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new L }
                return t.prototype.appInitializer = function() {
                    var t = this;
                    return this.injector.get(ds, Promise.resolve(null)).then(function() {
                        var n = null,
                            e = new Promise(function(t) { return n = t }),
                            r = t.injector.get(Gh),
                            o = t.injector.get(uf);
                        if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) n(!0);
                        else if ("disabled" === o.initialNavigation) r.setUpLocationChangeListener(), n(!0);
                        else {
                            if ("enabled" !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
                            r.hooks.afterPreactivation = function() { return t.initNavigation ? ja(null) : (t.initNavigation = !0, n(!0), t.resultOfPreactivationDone) }, r.initialNavigation()
                        }
                        return e
                    })
                }, t.prototype.bootstrapListener = function(t) {
                    var n = this.injector.get(uf),
                        e = this.injector.get(of),
                        r = this.injector.get(lf),
                        o = this.injector.get(Gh),
                        i = this.injector.get(Ae);
                    t === i.components[0] && (this.isLegacyEnabled(n) ? o.initialNavigation() : this.isLegacyDisabled(n) && o.setUpLocationChangeListener(), e.setUpPreloading(), r.init(), o.resetRootComponentType(i.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                }, t.prototype.isLegacyEnabled = function(t) { return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation }, t.prototype.isLegacyDisabled = function(t) { return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation }, t
            }();

            function bf(t) { return t.appInitializer.bind(t) }

            function _f(t) { return t.bootstrapListener.bind(t) }
            var wf = new vt("Router Initializer"),
                Cf = uo({ encapsulation: 2, styles: [], data: {} });

            function kf(t) { return Zi(0, [(t()(), jo(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ki(1, 212992, null, 0, Xh, [$h, ze, Xn, [8, null], qe], null, null)], function(t, n) { t(n, 1, 0) }, null) }
            var xf = Xo("ng-component", ip, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "ng-component", [], null, null, null, kf, Cf)), ki(1, 49152, null, 0, ip, [], null, null)], null, null) }, {}, {}, []),
                Ef = function() {
                    function t() { this.headerTitle = "Agartuu", this.ourService = "Our Service", this.ourValue = "Our Value", this.ourMission = "Our Mission", this.ourVision = "Our Vision" }
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                Sf = uo({
                    encapsulation: 0,
                    styles: [
                        [".container[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px}"]
                    ],
                    data: {}
                });

            function Of(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 68, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 3, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(2, 0, null, null, 2, "div", [
                    ["class", "col-md-12"]
                ], null, null, null, null, null)), (t()(), jo(3, 0, null, null, 1, "h2", [
                    ["id", "mainContent"]
                ], null, null, null, null, null)), (t()(), Wi(4, null, [" ", ""])), (t()(), jo(5, 0, null, null, 5, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(6, 0, null, null, 4, "div", [
                    ["class", "col-md-12"]
                ], null, null, null, null, null)), (t()(), jo(7, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" Agartuu is main stream for collecting and distributing tech related news. Aimed to share uptodate infomration with East African people. Established and launched January 2019. Agartuu is streaming information using Eglish language and willing to include widely spoken language of East Africa like Oromo Langauge, Amharic Language and Tigrigna as well. Agartuu is run by private owner. Headquarter of Agartuu is Atlanta Georgia. "])), (t()(), jo(9, 0, null, null, 1, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Read more.."])), (t()(), jo(11, 0, null, null, 28, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(12, 0, null, null, 6, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (t()(), jo(13, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), Wi(14, null, ["", ""])), (t()(), jo(15, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(17, 0, null, null, 1, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Read more.."])), (t()(), jo(19, 0, null, null, 6, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (t()(), jo(20, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), Wi(21, null, ["", ""])), (t()(), jo(22, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(24, 0, null, null, 1, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Read more.."])), (t()(), jo(26, 0, null, null, 6, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (t()(), jo(27, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), Wi(28, null, ["", ""])), (t()(), jo(29, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(31, 0, null, null, 1, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Read more.."])), (t()(), jo(33, 0, null, null, 6, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (t()(), jo(34, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), Wi(35, null, ["", ""])), (t()(), jo(36, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(38, 0, null, null, 1, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Read more.."])), (t()(), jo(40, 0, null, null, 28, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(41, 0, null, null, 6, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (t()(), jo(42, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Sub content 1"])), (t()(), jo(44, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(46, 0, null, null, 1, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Read more.."])), (t()(), jo(48, 0, null, null, 6, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (t()(), jo(49, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Sub content 1"])), (t()(), jo(51, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(53, 0, null, null, 1, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Read more.."])), (t()(), jo(55, 0, null, null, 6, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (t()(), jo(56, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Sub content 1"])), (t()(), jo(58, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(60, 0, null, null, 1, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Read more.."])), (t()(), jo(62, 0, null, null, 6, "div", [
                    ["class", "col-md-3"]
                ], null, null, null, null, null)), (t()(), jo(63, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Sub content 1"])), (t()(), jo(65, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(67, 0, null, null, 1, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Read more.."]))], null, function(t, n) {
                    var e = n.component;
                    t(n, 4, 0, e.headerTitle), t(n, 14, 0, e.ourService), t(n, 21, 0, e.ourValue), t(n, 28, 0, e.ourMission), t(n, 35, 0, e.ourVision)
                })
            }
            var Pf = Xo("app-tech-news", Ef, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-tech-news", [], null, null, null, Of, Sf)), ki(1, 114688, null, 0, Ef, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                Af = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                Tf = uo({
                    encapsulation: 0,
                    styles: [
                        [".container[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px}"]
                    ],
                    data: {}
                });

            function If(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 4, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" Dhiifama taattee ammaaf homtuu hin jiru Yeroo biraa deebi'aa nu huubadha\n"])), (t()(), jo(3, 0, null, null, 1, "div", [], null, null, null, null, null)), (t()(), jo(4, 0, null, null, 0, "img", [
                    ["alt", "Card image cap"],
                    ["class", "image-responsive"],
                    ["src", "../../assets/dogs.jpg"],
                    ["style", "max-width: 400px ; max-height: 400px"]
                ], null, null, null, null, null))], null, null)
            }
            var Mf = Xo("app-events", Af, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-events", [], null, null, null, If, Tf)), ki(1, 114688, null, 0, Af, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                Nf = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                Rf = uo({
                    encapsulation: 0,
                    styles: [
                        [".container[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px}"]
                    ],
                    data: {}
                });

            function jf(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 19, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(2, 0, null, null, 1, "div", [
                    ["class", "col-md-6"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(4, 0, null, null, 3, "div", [
                    ["class", "col-md-6"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(6, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ki(7, 212992, null, 0, Xh, [$h, ze, Xn, [8, null], qe], null, null), (t()(), jo(8, 0, null, null, 11, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(9, 0, null, null, 1, "div", [
                    ["class", "col-md-12"]
                ], null, null, null, null, null)), (t()(), jo(10, 0, null, null, 0, "hr", [], null, null, null, null, null)), (t()(), jo(11, 0, null, null, 8, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(12, 0, null, null, 1, "div", [
                    ["class", "col-md-4"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(14, 0, null, null, 3, "div", [
                    ["class", "col-md-4"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "])), (t()(), jo(16, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ki(17, 212992, null, 0, Xh, [$h, ze, Xn, [8, null], qe], null, null), (t()(), jo(18, 0, null, null, 1, "div", [
                    ["class", "col-md-4"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, [" In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. "]))], function(t, n) { t(n, 7, 0), t(n, 17, 0) }, null)
            }
            var Df = Xo("app-eresources", Nf, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-eresources", [], null, null, null, jf, Rf)), ki(1, 114688, null, 0, Nf, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                Vf = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                Lf = uo({
                    encapsulation: 0,
                    styles: [
                        [".container[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px}"]
                    ],
                    data: {}
                });

            function Uf(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 2, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" Isin bohaarsuuf qopha'aa jirra "]))], null, null)
            }
            var Hf = Xo("app-entertainment", Vf, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-entertainment", [], null, null, null, Uf, Lf)), ki(1, 114688, null, 0, Vf, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                Ff = function(t) {
                    function n(n, e) {
                        var r = t.call(this, n) || this;
                        r.sources = e, r.completed = 0, r.haveValues = 0;
                        var o = e.length;
                        r.values = new Array(o);
                        for (var i = 0; i < o; i++) {
                            var l = Y(r, e[i], null, i);
                            l && r.add(l)
                        }
                        return r
                    }
                    return o(n, t), n.prototype.notifyNext = function(t, n, e, r, o) { this.values[e] = n, o._hasValue || (o._hasValue = !0, this.haveValues++) }, n.prototype.notifyComplete = function(t) {
                        var n = this.destination,
                            e = this.haveValues,
                            r = this.values,
                            o = r.length;
                        t._hasValue ? (this.completed++, this.completed === o && (e === o && n.next(r), n.complete())) : n.complete()
                    }, n
                }(J),
                zf = function() {
                    function t() {}
                    return Object.defineProperty(t.prototype, "value", { get: function() { return this.control ? this.control.value : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "valid", { get: function() { return this.control ? this.control.valid : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "invalid", { get: function() { return this.control ? this.control.invalid : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pending", { get: function() { return this.control ? this.control.pending : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "disabled", { get: function() { return this.control ? this.control.disabled : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "enabled", { get: function() { return this.control ? this.control.enabled : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "errors", { get: function() { return this.control ? this.control.errors : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pristine", { get: function() { return this.control ? this.control.pristine : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "dirty", { get: function() { return this.control ? this.control.dirty : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "touched", { get: function() { return this.control ? this.control.touched : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "status", { get: function() { return this.control ? this.control.status : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "untouched", { get: function() { return this.control ? this.control.untouched : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "statusChanges", { get: function() { return this.control ? this.control.statusChanges : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "valueChanges", { get: function() { return this.control ? this.control.valueChanges : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "path", { get: function() { return null }, enumerable: !0, configurable: !0 }), t.prototype.reset = function(t) { void 0 === t && (t = void 0), this.control && this.control.reset(t) }, t.prototype.hasError = function(t, n) { return !!this.control && this.control.hasError(t, n) }, t.prototype.getError = function(t, n) { return this.control ? this.control.getError(t, n) : null }, t
                }(),
                qf = function(t) {
                    function n() { return null !== t && t.apply(this, arguments) || this }
                    return o(n, t), Object.defineProperty(n.prototype, "formDirective", { get: function() { return null }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "path", { get: function() { return null }, enumerable: !0, configurable: !0 }), n
                }(zf);

            function Bf(t) { return null == t || 0 === t.length }
            var Gf = new vt("NgValidators"),
                Wf = new vt("NgAsyncValidators"),
                Kf = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
                Qf = function() {
                    function t() {}
                    return t.min = function(t) { return function(n) { if (Bf(n.value) || Bf(t)) return null; var e = parseFloat(n.value); return !isNaN(e) && e < t ? { min: { min: t, actual: n.value } } : null } }, t.max = function(t) { return function(n) { if (Bf(n.value) || Bf(t)) return null; var e = parseFloat(n.value); return !isNaN(e) && e > t ? { max: { max: t, actual: n.value } } : null } }, t.required = function(t) { return Bf(t.value) ? { required: !0 } : null }, t.requiredTrue = function(t) { return !0 === t.value ? null : { required: !0 } }, t.email = function(t) { return Bf(t.value) ? null : Kf.test(t.value) ? null : { email: !0 } }, t.minLength = function(t) { return function(n) { if (Bf(n.value)) return null; var e = n.value ? n.value.length : 0; return e < t ? { minlength: { requiredLength: t, actualLength: e } } : null } }, t.maxLength = function(t) { return function(n) { var e = n.value ? n.value.length : 0; return e > t ? { maxlength: { requiredLength: t, actualLength: e } } : null } }, t.pattern = function(n) { return n ? ("string" == typeof n ? (r = "", "^" !== n.charAt(0) && (r += "^"), r += n, "$" !== n.charAt(n.length - 1) && (r += "$"), e = new RegExp(r)) : (r = n.toString(), e = n), function(t) { if (Bf(t.value)) return null; var n = t.value; return e.test(n) ? null : { pattern: { requiredPattern: r, actualValue: n } } }) : t.nullValidator; var e, r }, t.nullValidator = function(t) { return null }, t.compose = function(t) { if (!t) return null; var n = t.filter(Zf); return 0 == n.length ? null : function(t) { return Jf(function(t, e) { return n.map(function(n) { return n(t) }) }(t)) } }, t.composeAsync = function(t) { if (!t) return null; var n = t.filter(Zf); return 0 == n.length ? null : function(t) { return function t() { for (var n, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; return "function" == typeof e[e.length - 1] && (n = e.pop()), 1 === e.length && h(e[0]) && (e = e[0]), 0 === e.length ? Na : n ? t(e).pipe($(function(t) { return n.apply(void 0, t) })) : new N(function(t) { return new Ff(t, e) }) }(function(t, e) { return n.map(function(n) { return n(t) }) }(t).map(Yf)).pipe($(Jf)) } }, t
                }();

            function Zf(t) { return null != t }

            function Yf(t) { var n = Mn(t) ? et(t) : t; if (!Nn(n)) throw new Error("Expected validator to return Promise or Observable."); return n }

            function Jf(t) { var n = t.reduce(function(t, n) { return null != n ? i({}, t, n) : t }, {}); return 0 === Object.keys(n).length ? null : n }
            var $f = new vt("NgValueAccessor"),
                Xf = function() {
                    function t(t, n) { this._renderer = t, this._elementRef = n, this.onChange = function(t) {}, this.onTouched = function() {} }
                    return t.prototype.writeValue = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "checked", t) }, t.prototype.registerOnChange = function(t) { this.onChange = t }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t
                }(),
                td = new vt("CompositionEventMode"),
                nd = function() {
                    function t(t, n, e) {
                        var r;
                        this._renderer = t, this._elementRef = n, this._compositionMode = e, this.onChange = function(t) {}, this.onTouched = function() {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = (r = Rs() ? Rs().getUserAgent() : "", !/android (\d+)/.test(r.toLowerCase())))
                    }
                    return t.prototype.writeValue = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t) }, t.prototype.registerOnChange = function(t) { this.onChange = t }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t.prototype._handleInput = function(t) {
                        (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t)
                    }, t.prototype._compositionStart = function() { this._composing = !0 }, t.prototype._compositionEnd = function(t) { this._composing = !1, this._compositionMode && this.onChange(t) }, l([u(2, Lt()), u(2, Vt(td))], t)
                }();

            function ed(t) { return t.validate ? function(n) { return t.validate(n) } : t }

            function rd(t) { return t.validate ? function(n) { return t.validate(n) } : t }
            var od = function() {
                function t(t, n) { this._renderer = t, this._elementRef = n, this.onChange = function(t) {}, this.onTouched = function() {} }
                return t.prototype.writeValue = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t) }, t.prototype.registerOnChange = function(t) { this.onChange = function(n) { t("" == n ? null : parseFloat(n)) } }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t
            }();

            function id() { throw new Error("unimplemented") }
            var ld = function(t) {
                    function n() { var n = null !== t && t.apply(this, arguments) || this; return n._parent = null, n.name = null, n.valueAccessor = null, n._rawValidators = [], n._rawAsyncValidators = [], n }
                    return o(n, t), Object.defineProperty(n.prototype, "validator", { get: function() { return id() }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "asyncValidator", { get: function() { return id() }, enumerable: !0, configurable: !0 }), n
                }(zf),
                ud = function() {
                    function t() { this._accessors = [] }
                    return t.prototype.add = function(t, n) { this._accessors.push([t, n]) }, t.prototype.remove = function(t) {
                        for (var n = this._accessors.length - 1; n >= 0; --n)
                            if (this._accessors[n][1] === t) return void this._accessors.splice(n, 1)
                    }, t.prototype.select = function(t) {
                        var n = this;
                        this._accessors.forEach(function(e) { n._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value) })
                    }, t.prototype._isSameGroup = function(t, n) { return !!t[0].control && t[0]._parent === n._control._parent && t[1].name === n.name }, t
                }(),
                ad = function() {
                    function t(t, n, e, r) { this._renderer = t, this._elementRef = n, this._registry = e, this._injector = r, this.onChange = function() {}, this.onTouched = function() {} }
                    return t.prototype.ngOnInit = function() { this._control = this._injector.get(ld), this._checkName(), this._registry.add(this._control, this) }, t.prototype.ngOnDestroy = function() { this._registry.remove(this) }, t.prototype.writeValue = function(t) { this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state) }, t.prototype.registerOnChange = function(t) {
                        var n = this;
                        this._fn = t, this.onChange = function() { t(n.value), n._registry.select(n) }
                    }, t.prototype.fireUncheck = function(t) { this.writeValue(t) }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t.prototype._checkName = function() { this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName) }, t.prototype._throwNameError = function() { throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ') }, t
                }(),
                sd = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
                cd = '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>';

            function pd(t, n) { return p(n.path, [t]) }

            function hd(t, n) {
                t || dd(n, "Cannot find control with"), n.valueAccessor || dd(n, "No value accessor for form control with"), t.validator = Qf.compose([t.validator, n.validator]), t.asyncValidator = Qf.composeAsync([t.asyncValidator, n.asyncValidator]), n.valueAccessor.writeValue(t.value),
                    function(t, n) { n.valueAccessor.registerOnChange(function(e) { t._pendingValue = e, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && fd(t, n) }) }(t, n),
                    function(t, n) { t.registerOnChange(function(t, e) { n.valueAccessor.writeValue(t), e && n.viewToModelUpdate(t) }) }(t, n),
                    function(t, n) { n.valueAccessor.registerOnTouched(function() { t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && fd(t, n), "submit" !== t.updateOn && t.markAsTouched() }) }(t, n), n.valueAccessor.setDisabledState && t.registerOnDisabledChange(function(t) { n.valueAccessor.setDisabledState(t) }), n._rawValidators.forEach(function(n) { n.registerOnValidatorChange && n.registerOnValidatorChange(function() { return t.updateValueAndValidity() }) }), n._rawAsyncValidators.forEach(function(n) { n.registerOnValidatorChange && n.registerOnValidatorChange(function() { return t.updateValueAndValidity() }) })
            }

            function fd(t, n) { t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, { emitModelToViewChange: !1 }), n.viewToModelUpdate(t._pendingValue), t._pendingChange = !1 }

            function dd(t, n) { var e; throw e = t.path.length > 1 ? "path: '" + t.path.join(" -> ") + "'" : t.path[0] ? "name: '" + t.path + "'" : "unspecified name attribute", new Error(n + " " + e) }

            function gd(t) { return null != t ? Qf.compose(t.map(ed)) : null }

            function vd(t) { return null != t ? Qf.composeAsync(t.map(rd)) : null }
            var yd = [Xf, function() {
                    function t(t, n) { this._renderer = t, this._elementRef = n, this.onChange = function(t) {}, this.onTouched = function() {} }
                    return t.prototype.writeValue = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t)) }, t.prototype.registerOnChange = function(t) { this.onChange = function(n) { t("" == n ? null : parseFloat(n)) } }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t
                }(), od, function() {
                    function t(t, n) { this._renderer = t, this._elementRef = n, this._optionMap = new Map, this._idCounter = 0, this.onChange = function(t) {}, this.onTouched = function() {}, this._compareWith = Nt }
                    return Object.defineProperty(t.prototype, "compareWith", {
                        set: function(t) {
                            if ("function" != typeof t) throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
                            this._compareWith = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.writeValue = function(t) {
                        this.value = t;
                        var n = this._getOptionId(t);
                        null == n && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
                        var e = function(t, n) { return null == t ? "" + n : (n && "object" == typeof n && (n = "Object"), (t + ": " + n).slice(0, 50)) }(n, t);
                        this._renderer.setProperty(this._elementRef.nativeElement, "value", e)
                    }, t.prototype.registerOnChange = function(t) {
                        var n = this;
                        this.onChange = function(e) { n.value = n._getOptionValue(e), t(n.value) }
                    }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t.prototype._registerOption = function() { return (this._idCounter++).toString() }, t.prototype._getOptionId = function(t) { var n, e; try { for (var r = s(Array.from(this._optionMap.keys())), o = r.next(); !o.done; o = r.next()) { var i = o.value; if (this._compareWith(this._optionMap.get(i), t)) return i } } catch (t) { n = { error: t } } finally { try { o && !o.done && (e = r.return) && e.call(r) } finally { if (n) throw n.error } } return null }, t.prototype._getOptionValue = function(t) { var n = function(t) { return t.split(":")[0] }(t); return this._optionMap.has(n) ? this._optionMap.get(n) : t }, t
                }(), function() {
                    function t(t, n) { this._renderer = t, this._elementRef = n, this._optionMap = new Map, this._idCounter = 0, this.onChange = function(t) {}, this.onTouched = function() {}, this._compareWith = Nt }
                    return Object.defineProperty(t.prototype, "compareWith", {
                        set: function(t) {
                            if ("function" != typeof t) throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
                            this._compareWith = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.writeValue = function(t) {
                        var n, e = this;
                        if (this.value = t, Array.isArray(t)) {
                            var r = t.map(function(t) { return e._getOptionId(t) });
                            n = function(t, n) { t._setSelected(r.indexOf(n.toString()) > -1) }
                        } else n = function(t, n) { t._setSelected(!1) };
                        this._optionMap.forEach(n)
                    }, t.prototype.registerOnChange = function(t) {
                        var n = this;
                        this.onChange = function(e) {
                            var r = [];
                            if (e.hasOwnProperty("selectedOptions"))
                                for (var o = e.selectedOptions, i = 0; i < o.length; i++) {
                                    var l = o.item(i),
                                        u = n._getOptionValue(l.value);
                                    r.push(u)
                                } else
                                    for (o = e.options, i = 0; i < o.length; i++)(l = o.item(i)).selected && (u = n._getOptionValue(l.value), r.push(u));
                            n.value = r, t(r)
                        }
                    }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t.prototype._registerOption = function(t) { var n = (this._idCounter++).toString(); return this._optionMap.set(n, t), n }, t.prototype._getOptionId = function(t) { var n, e; try { for (var r = s(Array.from(this._optionMap.keys())), o = r.next(); !o.done; o = r.next()) { var i = o.value; if (this._compareWith(this._optionMap.get(i)._value, t)) return i } } catch (t) { n = { error: t } } finally { try { o && !o.done && (e = r.return) && e.call(r) } finally { if (n) throw n.error } } return null }, t.prototype._getOptionValue = function(t) { var n = function(t) { return t.split(":")[0] }(t); return this._optionMap.has(n) ? this._optionMap.get(n)._value : t }, t
                }(), ad],
                md = function(t) {
                    function n() { return null !== t && t.apply(this, arguments) || this }
                    return o(n, t), n.prototype.ngOnInit = function() { this._checkParentType(), this.formDirective.addFormGroup(this) }, n.prototype.ngOnDestroy = function() { this.formDirective && this.formDirective.removeFormGroup(this) }, Object.defineProperty(n.prototype, "control", { get: function() { return this.formDirective.getFormGroup(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "path", { get: function() { return pd(this.name, this._parent) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "formDirective", { get: function() { return this._parent ? this._parent.formDirective : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "validator", { get: function() { return gd(this._validators) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "asyncValidator", { get: function() { return vd(this._asyncValidators) }, enumerable: !0, configurable: !0 }), n.prototype._checkParentType = function() {}, n
                }(qf),
                bd = function() {
                    function t(t) { this._cd = t }
                    return Object.defineProperty(t.prototype, "ngClassUntouched", { get: function() { return !!this._cd.control && this._cd.control.untouched }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassTouched", { get: function() { return !!this._cd.control && this._cd.control.touched }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassPristine", { get: function() { return !!this._cd.control && this._cd.control.pristine }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassDirty", { get: function() { return !!this._cd.control && this._cd.control.dirty }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassValid", { get: function() { return !!this._cd.control && this._cd.control.valid }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassInvalid", { get: function() { return !!this._cd.control && this._cd.control.invalid }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassPending", { get: function() { return !!this._cd.control && this._cd.control.pending }, enumerable: !0, configurable: !0 }), t
                }(),
                _d = function(t) {
                    function n(n) { return t.call(this, n) || this }
                    return o(n, t), l([u(0, Ut())], n)
                }(bd),
                wd = function(t) {
                    function n(n) { return t.call(this, n) || this }
                    return o(n, t), l([u(0, Ut())], n)
                }(bd);

            function Cd(t) { var n = xd(t) ? t.validators : t; return Array.isArray(n) ? gd(n) : n || null }

            function kd(t, n) { var e = xd(n) ? n.asyncValidators : t; return Array.isArray(e) ? vd(e) : e || null }

            function xd(t) { return null != t && !Array.isArray(t) && "object" == typeof t }
            var Ed = function() {
                    function t(t, n) { this.validator = t, this.asyncValidator = n, this._onCollectionChange = function() {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = [] }
                    return Object.defineProperty(t.prototype, "parent", { get: function() { return this._parent }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "valid", { get: function() { return "VALID" === this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "invalid", { get: function() { return "INVALID" === this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pending", { get: function() { return "PENDING" == this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "disabled", { get: function() { return "DISABLED" === this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "enabled", { get: function() { return "DISABLED" !== this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "dirty", { get: function() { return !this.pristine }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "untouched", { get: function() { return !this.touched }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "updateOn", { get: function() { return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change" }, enumerable: !0, configurable: !0 }), t.prototype.setValidators = function(t) { this.validator = Cd(t) }, t.prototype.setAsyncValidators = function(t) { this.asyncValidator = kd(t) }, t.prototype.clearValidators = function() { this.validator = null }, t.prototype.clearAsyncValidators = function() { this.asyncValidator = null }, t.prototype.markAsTouched = function(t) { void 0 === t && (t = {}), this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t) }, t.prototype.markAsUntouched = function(t) { void 0 === t && (t = {}), this.touched = !1, this._pendingTouched = !1, this._forEachChild(function(t) { t.markAsUntouched({ onlySelf: !0 }) }), this._parent && !t.onlySelf && this._parent._updateTouched(t) }, t.prototype.markAsDirty = function(t) { void 0 === t && (t = {}), this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t) }, t.prototype.markAsPristine = function(t) { void 0 === t && (t = {}), this.pristine = !0, this._pendingDirty = !1, this._forEachChild(function(t) { t.markAsPristine({ onlySelf: !0 }) }), this._parent && !t.onlySelf && this._parent._updatePristine(t) }, t.prototype.markAsPending = function(t) { void 0 === t && (t = {}), this.status = "PENDING", !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t) }, t.prototype.disable = function(t) { void 0 === t && (t = {}), this.status = "DISABLED", this.errors = null, this._forEachChild(function(n) { n.disable(i({}, t, { onlySelf: !0 })) }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(t), this._onDisabledChange.forEach(function(t) { return t(!0) }) }, t.prototype.enable = function(t) { void 0 === t && (t = {}), this.status = "VALID", this._forEachChild(function(n) { n.enable(i({}, t, { onlySelf: !0 })) }), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }), this._updateAncestors(t), this._onDisabledChange.forEach(function(t) { return t(!1) }) }, t.prototype._updateAncestors = function(t) { this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), this._parent._updatePristine(), this._parent._updateTouched()) }, t.prototype.setParent = function(t) { this._parent = t }, t.prototype.updateValueAndValidity = function(t) { void 0 === t && (t = {}), this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t) }, t.prototype._updateTreeValidity = function(t) { void 0 === t && (t = { emitEvent: !0 }), this._forEachChild(function(n) { return n._updateTreeValidity(t) }), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }) }, t.prototype._setInitialStatus = function() { this.status = this._allControlsDisabled() ? "DISABLED" : "VALID" }, t.prototype._runValidator = function() { return this.validator ? this.validator(this) : null }, t.prototype._runAsyncValidator = function(t) {
                        var n = this;
                        if (this.asyncValidator) {
                            this.status = "PENDING";
                            var e = Yf(this.asyncValidator(this));
                            this._asyncValidationSubscription = e.subscribe(function(e) { return n.setErrors(e, { emitEvent: t }) })
                        }
                    }, t.prototype._cancelExistingSubscription = function() { this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe() }, t.prototype.setErrors = function(t, n) { void 0 === n && (n = {}), this.errors = t, this._updateControlsErrors(!1 !== n.emitEvent) }, t.prototype.get = function(t) { return function(t, n, e) { return null == n ? null : (n instanceof Array || (n = n.split(".")), n instanceof Array && 0 === n.length ? null : n.reduce(function(t, n) { return t instanceof Od ? t.controls.hasOwnProperty(n) ? t.controls[n] : null : t instanceof Pd && t.at(n) || null }, t)) }(this, t) }, t.prototype.getError = function(t, n) { var e = n ? this.get(n) : this; return e && e.errors ? e.errors[t] : null }, t.prototype.hasError = function(t, n) { return !!this.getError(t, n) }, Object.defineProperty(t.prototype, "root", { get: function() { for (var t = this; t._parent;) t = t._parent; return t }, enumerable: !0, configurable: !0 }), t.prototype._updateControlsErrors = function(t) { this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t) }, t.prototype._initObservables = function() { this.valueChanges = new ae, this.statusChanges = new ae }, t.prototype._calculateStatus = function() { return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID" }, t.prototype._anyControlsHaveStatus = function(t) { return this._anyControls(function(n) { return n.status === t }) }, t.prototype._anyControlsDirty = function() { return this._anyControls(function(t) { return t.dirty }) }, t.prototype._anyControlsTouched = function() { return this._anyControls(function(t) { return t.touched }) }, t.prototype._updatePristine = function(t) { void 0 === t && (t = {}), this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t) }, t.prototype._updateTouched = function(t) { void 0 === t && (t = {}), this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t) }, t.prototype._isBoxedValue = function(t) { return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t }, t.prototype._registerOnCollectionChange = function(t) { this._onCollectionChange = t }, t.prototype._setUpdateStrategy = function(t) { xd(t) && null != t.updateOn && (this._updateOn = t.updateOn) }, t
                }(),
                Sd = function(t) {
                    function n(n, e, r) { void 0 === n && (n = null); var o = t.call(this, Cd(e), kd(r, e)) || this; return o._onChange = [], o._applyFormState(n), o._setUpdateStrategy(e), o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), o._initObservables(), o }
                    return o(n, t), n.prototype.setValue = function(t, n) {
                        var e = this;
                        void 0 === n && (n = {}), this.value = this._pendingValue = t, this._onChange.length && !1 !== n.emitModelToViewChange && this._onChange.forEach(function(t) { return t(e.value, !1 !== n.emitViewToModelChange) }), this.updateValueAndValidity(n)
                    }, n.prototype.patchValue = function(t, n) { void 0 === n && (n = {}), this.setValue(t, n) }, n.prototype.reset = function(t, n) { void 0 === t && (t = null), void 0 === n && (n = {}), this._applyFormState(t), this.markAsPristine(n), this.markAsUntouched(n), this.setValue(this.value, n), this._pendingChange = !1 }, n.prototype._updateValue = function() {}, n.prototype._anyControls = function(t) { return !1 }, n.prototype._allControlsDisabled = function() { return this.disabled }, n.prototype.registerOnChange = function(t) { this._onChange.push(t) }, n.prototype._clearChangeFns = function() { this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = function() {} }, n.prototype.registerOnDisabledChange = function(t) { this._onDisabledChange.push(t) }, n.prototype._forEachChild = function(t) {}, n.prototype._syncPendingControls = function() { return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)) }, n.prototype._applyFormState = function(t) { this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 })) : this.value = this._pendingValue = t }, n
                }(Ed),
                Od = function(t) {
                    function n(n, e, r) { var o = t.call(this, Cd(e), kd(r, e)) || this; return o.controls = n, o._initObservables(), o._setUpdateStrategy(e), o._setUpControls(), o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), o }
                    return o(n, t), n.prototype.registerControl = function(t, n) { return this.controls[t] ? this.controls[t] : (this.controls[t] = n, n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange), n) }, n.prototype.addControl = function(t, n) { this.registerControl(t, n), this.updateValueAndValidity(), this._onCollectionChange() }, n.prototype.removeControl = function(t) { this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange() }, n.prototype.setControl = function(t, n) { this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}), delete this.controls[t], n && this.registerControl(t, n), this.updateValueAndValidity(), this._onCollectionChange() }, n.prototype.contains = function(t) { return this.controls.hasOwnProperty(t) && this.controls[t].enabled }, n.prototype.setValue = function(t, n) {
                        var e = this;
                        void 0 === n && (n = {}), this._checkAllValuesPresent(t), Object.keys(t).forEach(function(r) { e._throwIfControlMissing(r), e.controls[r].setValue(t[r], { onlySelf: !0, emitEvent: n.emitEvent }) }), this.updateValueAndValidity(n)
                    }, n.prototype.patchValue = function(t, n) {
                        var e = this;
                        void 0 === n && (n = {}), Object.keys(t).forEach(function(r) { e.controls[r] && e.controls[r].patchValue(t[r], { onlySelf: !0, emitEvent: n.emitEvent }) }), this.updateValueAndValidity(n)
                    }, n.prototype.reset = function(t, n) { void 0 === t && (t = {}), void 0 === n && (n = {}), this._forEachChild(function(e, r) { e.reset(t[r], { onlySelf: !0, emitEvent: n.emitEvent }) }), this.updateValueAndValidity(n), this._updatePristine(n), this._updateTouched(n) }, n.prototype.getRawValue = function() { return this._reduceChildren({}, function(t, n, e) { return t[e] = n instanceof Sd ? n.value : n.getRawValue(), t }) }, n.prototype._syncPendingControls = function() { var t = this._reduceChildren(!1, function(t, n) { return !!n._syncPendingControls() || t }); return t && this.updateValueAndValidity({ onlySelf: !0 }), t }, n.prototype._throwIfControlMissing = function(t) { if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.controls[t]) throw new Error("Cannot find form control with name: " + t + ".") }, n.prototype._forEachChild = function(t) {
                        var n = this;
                        Object.keys(this.controls).forEach(function(e) { return t(n.controls[e], e) })
                    }, n.prototype._setUpControls = function() {
                        var t = this;
                        this._forEachChild(function(n) { n.setParent(t), n._registerOnCollectionChange(t._onCollectionChange) })
                    }, n.prototype._updateValue = function() { this.value = this._reduceValue() }, n.prototype._anyControls = function(t) {
                        var n = this,
                            e = !1;
                        return this._forEachChild(function(r, o) { e = e || n.contains(o) && t(r) }), e
                    }, n.prototype._reduceValue = function() { var t = this; return this._reduceChildren({}, function(n, e, r) { return (e.enabled || t.disabled) && (n[r] = e.value), n }) }, n.prototype._reduceChildren = function(t, n) { var e = t; return this._forEachChild(function(t, r) { e = n(e, t, r) }), e }, n.prototype._allControlsDisabled = function() {
                        var t, n;
                        try {
                            for (var e = s(Object.keys(this.controls)), r = e.next(); !r.done; r = e.next())
                                if (this.controls[r.value].enabled) return !1
                        } catch (n) { t = { error: n } } finally { try { r && !r.done && (n = e.return) && n.call(e) } finally { if (t) throw t.error } }
                        return Object.keys(this.controls).length > 0 || this.disabled
                    }, n.prototype._checkAllValuesPresent = function(t) { this._forEachChild(function(n, e) { if (void 0 === t[e]) throw new Error("Must supply a value for form control with name: '" + e + "'.") }) }, n
                }(Ed),
                Pd = function(t) {
                    function n(n, e, r) { var o = t.call(this, Cd(e), kd(r, e)) || this; return o.controls = n, o._initObservables(), o._setUpdateStrategy(e), o._setUpControls(), o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), o }
                    return o(n, t), n.prototype.at = function(t) { return this.controls[t] }, n.prototype.push = function(t) { this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange() }, n.prototype.insert = function(t, n) { this.controls.splice(t, 0, n), this._registerControl(n), this.updateValueAndValidity() }, n.prototype.removeAt = function(t) { this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}), this.controls.splice(t, 1), this.updateValueAndValidity() }, n.prototype.setControl = function(t, n) { this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}), this.controls.splice(t, 1), n && (this.controls.splice(t, 0, n), this._registerControl(n)), this.updateValueAndValidity(), this._onCollectionChange() }, Object.defineProperty(n.prototype, "length", { get: function() { return this.controls.length }, enumerable: !0, configurable: !0 }), n.prototype.setValue = function(t, n) {
                        var e = this;
                        void 0 === n && (n = {}), this._checkAllValuesPresent(t), t.forEach(function(t, r) { e._throwIfControlMissing(r), e.at(r).setValue(t, { onlySelf: !0, emitEvent: n.emitEvent }) }), this.updateValueAndValidity(n)
                    }, n.prototype.patchValue = function(t, n) {
                        var e = this;
                        void 0 === n && (n = {}), t.forEach(function(t, r) { e.at(r) && e.at(r).patchValue(t, { onlySelf: !0, emitEvent: n.emitEvent }) }), this.updateValueAndValidity(n)
                    }, n.prototype.reset = function(t, n) { void 0 === t && (t = []), void 0 === n && (n = {}), this._forEachChild(function(e, r) { e.reset(t[r], { onlySelf: !0, emitEvent: n.emitEvent }) }), this.updateValueAndValidity(n), this._updatePristine(n), this._updateTouched(n) }, n.prototype.getRawValue = function() { return this.controls.map(function(t) { return t instanceof Sd ? t.value : t.getRawValue() }) }, n.prototype._syncPendingControls = function() { var t = this.controls.reduce(function(t, n) { return !!n._syncPendingControls() || t }, !1); return t && this.updateValueAndValidity({ onlySelf: !0 }), t }, n.prototype._throwIfControlMissing = function(t) { if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.at(t)) throw new Error("Cannot find form control at index " + t) }, n.prototype._forEachChild = function(t) { this.controls.forEach(function(n, e) { t(n, e) }) }, n.prototype._updateValue = function() {
                        var t = this;
                        this.value = this.controls.filter(function(n) { return n.enabled || t.disabled }).map(function(t) { return t.value })
                    }, n.prototype._anyControls = function(t) { return this.controls.some(function(n) { return n.enabled && t(n) }) }, n.prototype._setUpControls = function() {
                        var t = this;
                        this._forEachChild(function(n) { return t._registerControl(n) })
                    }, n.prototype._checkAllValuesPresent = function(t) { this._forEachChild(function(n, e) { if (void 0 === t[e]) throw new Error("Must supply a value for form control at index: " + e + ".") }) }, n.prototype._allControlsDisabled = function() {
                        var t, n;
                        try {
                            for (var e = s(this.controls), r = e.next(); !r.done; r = e.next())
                                if (r.value.enabled) return !1
                        } catch (n) { t = { error: n } } finally { try { r && !r.done && (n = e.return) && n.call(e) } finally { if (t) throw t.error } }
                        return this.controls.length > 0 || this.disabled
                    }, n.prototype._registerControl = function(t) { t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange) }, n
                }(Ed),
                Ad = Promise.resolve(null),
                Td = function(t) {
                    function n(n, e) { var r = t.call(this) || this; return r.submitted = !1, r._directives = [], r.ngSubmit = new ae, r.form = new Od({}, gd(n), vd(e)), r }
                    return o(n, t), n.prototype.ngAfterViewInit = function() { this._setUpdateStrategy() }, Object.defineProperty(n.prototype, "formDirective", { get: function() { return this }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "control", { get: function() { return this.form }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "path", { get: function() { return [] }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "controls", { get: function() { return this.form.controls }, enumerable: !0, configurable: !0 }), n.prototype.addControl = function(t) {
                        var n = this;
                        Ad.then(function() {
                            var e = n._findContainer(t.path);
                            t.control = e.registerControl(t.name, t.control), hd(t.control, t), t.control.updateValueAndValidity({ emitEvent: !1 }), n._directives.push(t)
                        })
                    }, n.prototype.getControl = function(t) { return this.form.get(t.path) }, n.prototype.removeControl = function(t) {
                        var n = this;
                        Ad.then(function() {
                            var e, r, o = n._findContainer(t.path);
                            o && o.removeControl(t.name), (r = (e = n._directives).indexOf(t)) > -1 && e.splice(r, 1)
                        })
                    }, n.prototype.addFormGroup = function(t) {
                        var n = this;
                        Ad.then(function() {
                            var e = n._findContainer(t.path),
                                r = new Od({});
                            (function(t, n) { null == t && dd(n, "Cannot find control with"), t.validator = Qf.compose([t.validator, n.validator]), t.asyncValidator = Qf.composeAsync([t.asyncValidator, n.asyncValidator]) })(r, t), e.registerControl(t.name, r), r.updateValueAndValidity({ emitEvent: !1 })
                        })
                    }, n.prototype.removeFormGroup = function(t) {
                        var n = this;
                        Ad.then(function() {
                            var e = n._findContainer(t.path);
                            e && e.removeControl(t.name)
                        })
                    }, n.prototype.getFormGroup = function(t) { return this.form.get(t.path) }, n.prototype.updateModel = function(t, n) {
                        var e = this;
                        Ad.then(function() { e.form.get(t.path).setValue(n) })
                    }, n.prototype.setValue = function(t) { this.control.setValue(t) }, n.prototype.onSubmit = function(t) { return this.submitted = !0, n = this._directives, this.form._syncPendingControls(), n.forEach(function(t) { var n = t.control; "submit" === n.updateOn && n._pendingChange && (t.viewToModelUpdate(n._pendingValue), n._pendingChange = !1) }), this.ngSubmit.emit(t), !1; var n }, n.prototype.onReset = function() { this.resetForm() }, n.prototype.resetForm = function(t) { void 0 === t && (t = void 0), this.form.reset(t), this.submitted = !1 }, n.prototype._setUpdateStrategy = function() { this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn) }, n.prototype._findContainer = function(t) { return t.pop(), t.length ? this.form.get(t) : this.form }, l([u(0, Lt()), u(0, Ut()), u(0, Vt(Gf)), u(1, Lt()), u(1, Ut()), u(1, Vt(Wf))], n)
                }(qf),
                Id = function() {
                    function t() {}
                    return t.modelParentException = function() { throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ') }, t.formGroupNameException = function() { throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + sd + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + cd) }, t.missingNameException = function() { throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">') }, t.modelGroupParentException = function() { throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + sd + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + cd) }, t
                }(),
                Md = function(t) {
                    function n(n, e, r) { var o = t.call(this) || this; return o._parent = n, o._validators = e, o._asyncValidators = r, o }
                    var e;
                    return o(n, t), e = n, n.prototype._checkParentType = function() { this._parent instanceof e || this._parent instanceof Td || Id.modelGroupParentException() }, e = l([u(0, Ft()), u(0, Ht()), u(1, Lt()), u(1, Ut()), u(1, Vt(Gf)), u(2, Lt()), u(2, Ut()), u(2, Vt(Wf))], n)
                }(md),
                Nd = Promise.resolve(null),
                Rd = function(t) {
                    function n(n, e, r, o) {
                        var i = t.call(this) || this;
                        return i.control = new Sd, i._registered = !1, i.update = new ae, i._parent = n, i._rawValidators = e || [], i._rawAsyncValidators = r || [], i.valueAccessor = function(t, n) {
                            if (!n) return null;
                            Array.isArray(n) || dd(t, "Value accessor was not provided as an array for form control with");
                            var e = void 0,
                                r = void 0,
                                o = void 0;
                            return n.forEach(function(n) {
                                var i;
                                n.constructor === nd ? e = n : (i = n, yd.some(function(t) { return i.constructor === t }) ? (r && dd(t, "More than one built-in value accessor matches form control with"), r = n) : (o && dd(t, "More than one custom value accessor matches form control with"), o = n))
                            }), o || r || e || (dd(t, "No valid value accessor for form control with"), null)
                        }(i, o), i
                    }
                    return o(n, t), n.prototype.ngOnChanges = function(t) {
                        this._checkForErrors(), this._registered || this._setUpControl(), "isDisabled" in t && this._updateDisabled(t),
                            function(t, n) { if (!t.hasOwnProperty("model")) return !1; var e = t.model; return !!e.isFirstChange() || !Nt(n, e.currentValue) }(t, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model)
                    }, n.prototype.ngOnDestroy = function() { this.formDirective && this.formDirective.removeControl(this) }, Object.defineProperty(n.prototype, "path", { get: function() { return this._parent ? pd(this.name, this._parent) : [this.name] }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "formDirective", { get: function() { return this._parent ? this._parent.formDirective : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "validator", { get: function() { return gd(this._rawValidators) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "asyncValidator", { get: function() { return vd(this._rawAsyncValidators) }, enumerable: !0, configurable: !0 }), n.prototype.viewToModelUpdate = function(t) { this.viewModel = t, this.update.emit(t) }, n.prototype._setUpControl = function() { this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0 }, n.prototype._setUpdateStrategy = function() { this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn) }, n.prototype._isStandalone = function() { return !this._parent || !(!this.options || !this.options.standalone) }, n.prototype._setUpStandalone = function() { hd(this.control, this), this.control.updateValueAndValidity({ emitEvent: !1 }) }, n.prototype._checkForErrors = function() { this._isStandalone() || this._checkParentType(), this._checkName() }, n.prototype._checkParentType = function() {!(this._parent instanceof Md) && this._parent instanceof md ? Id.formGroupNameException() : this._parent instanceof Md || this._parent instanceof Td || Id.modelParentException() }, n.prototype._checkName = function() { this.options && this.options.name && (this.name = this.options.name), this._isStandalone() || this.name || Id.missingNameException() }, n.prototype._updateValue = function(t) {
                        var n = this;
                        Nd.then(function() { n.control.setValue(t, { emitViewToModelChange: !1 }) })
                    }, n.prototype._updateDisabled = function(t) {
                        var n = this,
                            e = t.isDisabled.currentValue,
                            r = "" === e || e && "false" !== e;
                        Nd.then(function() { r && !n.control.disabled ? n.control.disable() : !r && n.control.disabled && n.control.enable() })
                    }, l([u(0, Lt()), u(0, Ft()), u(1, Lt()), u(1, Ut()), u(1, Vt(Gf)), u(2, Lt()), u(2, Ut()), u(2, Vt(Wf)), u(3, Lt()), u(3, Ut()), u(3, Vt($f))], n)
                }(ld),
                jd = function() {},
                Dd = function() {},
                Vd = function() {},
                Ld = function() {
                    function t() {}
                    return t.prototype.onSubmit = function(t) { console.log(t) }, t.prototype.ngOnInit = function() {}, t
                }(),
                Ud = uo({
                    encapsulation: 0,
                    styles: [
                        [".container[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px}.content[_ngcontent-%COMP%]{padding-top:60px;padding-bottom:60px}*[_ngcontent-%COMP%]{box-sizing:border-box}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0;padding:0;color:#18150d;font-weight:400;font-family:Montserrat,sans-serif;text-transform:uppercase;text-rendering:optimizeLegibility}p[_ngcontent-%COMP%]{margin:0 0 10px}.widget[_ngcontent-%COMP%]{margin-bottom:10px;background-color:#f4f1ec;padding:30px;border-radius:10px}.widget-title[_ngcontent-%COMP%]{margin-bottom:20px}h3[_ngcontent-%COMP%]{font-size:18px;line-height:28px}address[_ngcontent-%COMP%]{margin-bottom:20px;font-style:normal;line-height:1.42857143;display:block}.form-control[_ngcontent-%COMP%]{transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.col-md-12[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}"]
                    ],
                    data: {}
                });

            function Hd(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 63, "div", [
                    ["class", "content"]
                ], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 1, "h3", [
                    ["style", "text-align: center; "]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Guca Kana Guutuun Nu Quunnamaa"])), (t()(), jo(3, 0, null, null, 60, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(4, 0, null, null, 59, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(5, 0, null, null, 20, "div", [
                    ["class", "col-lg-  col-md-4 col-sm-4 col-xs-12"]
                ], null, null, null, null, null)), (t()(), jo(6, 0, null, null, 19, "div", [
                    ["class", "widget widget-contact"]
                ], null, null, null, null, null)), (t()(), jo(7, 0, null, null, 1, "h3", [
                    ["class", "widget-title"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Bakka Itti Argamnu"])), (t()(), jo(9, 0, null, null, 10, "address", [], null, null, null, null, null)), (t()(), jo(10, 0, null, null, 1, "strong", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Odaa Tower"])), (t()(), jo(12, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" 1955 Bells ferry RD "])), (t()(), jo(14, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" Atlanta, GA 30066 "])), (t()(), jo(16, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), jo(17, 0, null, null, 1, "abbr", [
                    ["title", "Lakkoofsa bilbilaa"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["P:"])), (t()(), Wi(-1, null, [" (123) 456-7890 "])), (t()(), jo(20, 0, null, null, 5, "address", [], null, null, null, null, null)), (t()(), jo(21, 0, null, null, 1, "strong", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Itti gaafatamaa quunnamuuf"])), (t()(), jo(23, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), jo(24, 0, null, null, 1, "a", [
                    ["href", "mailto:#"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["yaada@Agartuu.com"])), (t()(), jo(26, 0, null, null, 37, "div", [
                    ["class", "col-lg-8 col-md-8 col-sm-8 col-xs-12"]
                ], null, null, null, null, null)), (t()(), jo(27, 0, null, null, 36, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(28, 0, null, null, 35, "div", [
                    ["class", "col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2"]
                ], null, null, null, null, null)), (t()(), jo(29, 0, null, null, 34, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngSubmit"],
                    [null, "submit"],
                    [null, "reset"]
                ], function(t, n, e) {
                    var r = !0,
                        o = t.component;
                    return "submit" === n && (r = !1 !== ci(t, 31).onSubmit(e) && r), "reset" === n && (r = !1 !== ci(t, 31).onReset() && r), "ngSubmit" === n && (r = !1 !== o.onSubmit(ci(t, 31)) && r), r
                }, null, null)), ki(30, 16384, null, 0, jd, [], null, null), ki(31, 4210688, [
                    ["myform", 4]
                ], 0, Td, [
                    [8, null],
                    [8, null]
                ], null, { ngSubmit: "ngSubmit" }), xi(2048, null, qf, null, [Td]), ki(33, 16384, null, 0, wd, [
                    [4, qf]
                ], null, null), (t()(), jo(34, 0, null, null, 27, "div", [
                    ["id", "user-data"]
                ], null, null, null, null, null)), (t()(), jo(35, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (t()(), jo(36, 0, null, null, 1, "label", [
                    ["for", "maqaa"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Maqaa "])), (t()(), jo(38, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["id", "maqaa"],
                    ["name", "maqaa"],
                    ["ngModel", ""],
                    ["type", "text"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(t, n, e) { var r = !0; return "input" === n && (r = !1 !== ci(t, 39)._handleInput(e.target.value) && r), "blur" === n && (r = !1 !== ci(t, 39).onTouched() && r), "compositionstart" === n && (r = !1 !== ci(t, 39)._compositionStart() && r), "compositionend" === n && (r = !1 !== ci(t, 39)._compositionEnd(e.target.value) && r), r }, null, null)), ki(39, 16384, null, 0, nd, [Ne, Re, [2, td]], null, null), xi(1024, null, $f, function(t) { return [t] }, [nd]), ki(41, 671744, null, 0, Rd, [
                    [2, qf],
                    [8, null],
                    [8, null],
                    [6, $f]
                ], { name: [0, "name"], model: [1, "model"] }, null), xi(2048, null, ld, null, [Rd]), ki(43, 16384, null, 0, _d, [
                    [4, ld]
                ], null, null), (t()(), jo(44, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (t()(), jo(45, 0, null, null, 1, "label", [
                    ["for", "email"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Email "])), (t()(), jo(47, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["id", "email"],
                    ["name", "email"],
                    ["ngModel", ""],
                    ["type", "text"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(t, n, e) { var r = !0; return "input" === n && (r = !1 !== ci(t, 48)._handleInput(e.target.value) && r), "blur" === n && (r = !1 !== ci(t, 48).onTouched() && r), "compositionstart" === n && (r = !1 !== ci(t, 48)._compositionStart() && r), "compositionend" === n && (r = !1 !== ci(t, 48)._compositionEnd(e.target.value) && r), r }, null, null)), ki(48, 16384, null, 0, nd, [Ne, Re, [2, td]], null, null), xi(1024, null, $f, function(t) { return [t] }, [nd]), ki(50, 671744, null, 0, Rd, [
                    [2, qf],
                    [8, null],
                    [8, null],
                    [6, $f]
                ], { name: [0, "name"], model: [1, "model"] }, null), xi(2048, null, ld, null, [Rd]), ki(52, 16384, null, 0, _d, [
                    [4, ld]
                ], null, null), (t()(), jo(53, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (t()(), jo(54, 0, null, null, 1, "label", [
                    ["for", "yaada"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Yaada Keessan "])), (t()(), jo(56, 0, null, null, 5, "textarea", [
                    ["class", "form-control"],
                    ["id", "yaada"],
                    ["name", "yaada"],
                    ["ngModel", ""],
                    ["rows", "3"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(t, n, e) { var r = !0; return "input" === n && (r = !1 !== ci(t, 57)._handleInput(e.target.value) && r), "blur" === n && (r = !1 !== ci(t, 57).onTouched() && r), "compositionstart" === n && (r = !1 !== ci(t, 57)._compositionStart() && r), "compositionend" === n && (r = !1 !== ci(t, 57)._compositionEnd(e.target.value) && r), r }, null, null)), ki(57, 16384, null, 0, nd, [Ne, Re, [2, td]], null, null), xi(1024, null, $f, function(t) { return [t] }, [nd]), ki(59, 671744, null, 0, Rd, [
                    [2, qf],
                    [8, null],
                    [8, null],
                    [6, $f]
                ], { name: [0, "name"], model: [1, "model"] }, null), xi(2048, null, ld, null, [Rd]), ki(61, 16384, null, 0, _d, [
                    [4, ld]
                ], null, null), (t()(), jo(62, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary col-md-12"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Ergi"]))], function(t, n) { t(n, 41, 0, "maqaa", ""), t(n, 50, 0, "email", ""), t(n, 59, 0, "yaada", "") }, function(t, n) { t(n, 29, 0, ci(n, 33).ngClassUntouched, ci(n, 33).ngClassTouched, ci(n, 33).ngClassPristine, ci(n, 33).ngClassDirty, ci(n, 33).ngClassValid, ci(n, 33).ngClassInvalid, ci(n, 33).ngClassPending), t(n, 38, 0, ci(n, 43).ngClassUntouched, ci(n, 43).ngClassTouched, ci(n, 43).ngClassPristine, ci(n, 43).ngClassDirty, ci(n, 43).ngClassValid, ci(n, 43).ngClassInvalid, ci(n, 43).ngClassPending), t(n, 47, 0, ci(n, 52).ngClassUntouched, ci(n, 52).ngClassTouched, ci(n, 52).ngClassPristine, ci(n, 52).ngClassDirty, ci(n, 52).ngClassValid, ci(n, 52).ngClassInvalid, ci(n, 52).ngClassPending), t(n, 56, 0, ci(n, 61).ngClassUntouched, ci(n, 61).ngClassTouched, ci(n, 61).ngClassPristine, ci(n, 61).ngClassDirty, ci(n, 61).ngClassValid, ci(n, 61).ngClassInvalid, ci(n, 61).ngClassPending) })
            }
            var Fd = Xo("app-contact", Ld, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-contact", [], null, null, null, Hd, Ud)), ki(1, 114688, null, 0, Ld, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                zd = function() {
                    function t() { this.headerTitle = "Agartuu", this.ourService = "Tajaajila", this.ourValue = "Kaka'umsa", this.ourMission = "Xiyyeefanno ", this.ourVision = "Mul'ata " }
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                qd = uo({
                    encapsulation: 0,
                    styles: [
                        ["#mainContent[_ngcontent-%COMP%]{text-align:center}p[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#000}ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:3px 0;transition:.5s}ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{padding:3px 0;margin-left:5px;font-weight:700}ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-weight:700}.featureContent[_ngcontent-%COMP%]{padding-bottom:10px;padding-top:10px;color:red}.rowPadding[_ngcontent-%COMP%]{padding-right:10px}.service-area[_ngcontent-%COMP%]{position:relative;margin-top:-10px;background-color:transparent}.service-single[_ngcontent-%COMP%]{padding:40px 0;background:#fff;border-radius:5px;text-align:center;box-shadow:0 0 8px rgba(0,0,0,.1)}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.site-section-heading[_ngcontent-%COMP%]{padding-bottom:20px;margin-bottom:50px;position:relative;font-size:2.5rem}.text-black[_ngcontent-%COMP%]{color:#000!important}.site-section-heading.text-center[_ngcontent-%COMP%]:after{-webkit-transform:translateX(-50%);transform:translateX(-50%);content:\"\";left:50%;bottom:0;position:absolute;width:100px;height:3px;background:red}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:.5s}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:'\\00bb';position:absolute;opacity:0;top:0;right:-20px;transition:.5s}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{padding-right:25px}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after{opacity:1;right:0}.courselPadding[_ngcontent-%COMP%]{margin-top:-10px}"]
                    ],
                    data: {}
                });

            function Bd(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 2, "div", [
                    ["class", "container-fluid"]
                ], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 1, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(2, 0, null, null, 0, "div", [
                    ["class", "col-md-12"]
                ], null, null, null, null, null)), (t()(), jo(3, 0, null, null, 42, "div", [
                    ["class", "carousel slide"],
                    ["data-ride", "carousel"],
                    ["id", "carouselExampleIndicators"]
                ], null, null, null, null, null)), (t()(), jo(4, 0, null, null, 4, "ol", [
                    ["class", "carousel-indicators"]
                ], null, null, null, null, null)), (t()(), jo(5, 0, null, null, 0, "li", [
                    ["class", "active"],
                    ["data-slide-to", "0"],
                    ["data-target", "#carouselExampleIndicators"]
                ], null, null, null, null, null)), (t()(), jo(6, 0, null, null, 0, "li", [
                    ["data-slide-to", "1"],
                    ["data-target", "#carouselExampleIndicators"]
                ], null, null, null, null, null)), (t()(), jo(7, 0, null, null, 0, "li", [
                    ["data-slide-to", "2"],
                    ["data-target", "#carouselExampleIndicators"]
                ], null, null, null, null, null)), (t()(), jo(8, 0, null, null, 0, "li", [
                    ["data-slide-to", "3"],
                    ["data-target", "#carouselExampleIndicators"]
                ], null, null, null, null, null)), (t()(), jo(9, 0, null, null, 28, "div", [
                    ["class", "carousel-inner courselPadding "]
                ], null, null, null, null, null)), (t()(), jo(10, 0, null, null, 6, "div", [
                    ["class", "carousel-item active"]
                ], null, null, null, null, null)), (t()(), jo(11, 0, null, null, 0, "img", [
                    ["alt", "First slide"],
                    ["class", "d-block w-100"],
                    ["src", "../../assets/hugebackground.jpg"],
                    ["style", "max-width: 100%"]
                ], null, null, null, null, null)), (t()(), jo(12, 0, null, null, 4, "div", [
                    ["class", "carousel-caption d-none d-md-block"]
                ], null, null, null, null, null)), (t()(), jo(13, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Adunyaa dorgomna"])), (t()(), jo(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Akka Adunyaatti Yaadna akka Oromiyaatti Dalagna"])), (t()(), jo(17, 0, null, null, 6, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (t()(), jo(18, 0, null, null, 0, "img", [
                    ["alt", "Second slide"],
                    ["class", "d-block w-100"],
                    ["src", "../../assets/hugemotivation.png"],
                    ["style", "max-width: 100%"]
                ], null, null, null, null, null)), (t()(), jo(19, 0, null, null, 4, "div", [
                    ["class", "carousel-caption d-none d-md-block"]
                ], null, null, null, null, null)), (t()(), jo(20, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Dhalootaaf dhamaana"])), (t()(), jo(22, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Dhaaloota boruuf Adunyaa bareedduu uumna"])), (t()(), jo(24, 0, null, null, 6, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (t()(), jo(25, 0, null, null, 0, "img", [
                    ["alt", "Third slide"],
                    ["class", "d-block w-100"],
                    ["src", "../../assets/hugeService.png"],
                    ["style", "max-width: 100%"]
                ], null, null, null, null, null)), (t()(), jo(26, 0, null, null, 4, "div", [
                    ["class", "carousel-caption d-none d-md-block"]
                ], null, null, null, null, null)), (t()(), jo(27, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Aadaaf duudha"])), (t()(), jo(29, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Aadaaf duudha qabannee Adunyaa waliin deemna"])), (t()(), jo(31, 0, null, null, 6, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (t()(), jo(32, 0, null, null, 0, "img", [
                    ["alt", "Second slide"],
                    ["class", "d-block w-100"],
                    ["src", "../../assets/hugemotivation.png"],
                    ["style", "max-width: 100%"]
                ], null, null, null, null, null)), (t()(), jo(33, 0, null, null, 4, "div", [
                    ["class", "carousel-caption d-none d-md-block"]
                ], null, null, null, null, null)), (t()(), jo(34, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Of Beekuu"])), (t()(), jo(36, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Of beekuu irraa jalqabne"])), (t()(), jo(38, 0, null, null, 3, "a", [
                    ["class", "carousel-control-prev"],
                    ["data-slide", "prev"],
                    ["href", "#carouselExampleIndicators"],
                    ["role", "button"]
                ], null, null, null, null, null)), (t()(), jo(39, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-prev-icon"]
                ], null, null, null, null, null)), (t()(), jo(40, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Previous"])), (t()(), jo(42, 0, null, null, 3, "a", [
                    ["class", "carousel-control-next"],
                    ["data-slide", "next"],
                    ["href", "#carouselExampleIndicators"],
                    ["role", "button"]
                ], null, null, null, null, null)), (t()(), jo(43, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-next-icon"]
                ], null, null, null, null, null)), (t()(), jo(44, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Next"])), (t()(), jo(46, 0, null, null, 96, "div", [
                    ["class", "service-area"]
                ], null, null, null, null, null)), (t()(), jo(47, 0, null, null, 31, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(48, 0, null, null, 30, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(49, 0, null, null, 9, "div", [
                    ["class", "col-md-4 col-sm-4 col-xs-12"]
                ], null, null, null, null, null)), (t()(), jo(50, 0, null, null, 8, "div", [
                    ["class", "service-single"]
                ], null, null, null, null, null)), (t()(), jo(51, 0, null, null, 0, "img", [
                    ["alt", "service image"],
                    ["class", "card-img-top"],
                    ["src", "../../assets/service.jpg"]
                ], null, null, null, null, null)), (t()(), jo(52, 0, null, null, 1, "h4", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Tajaajila Ammayyaa'aa"])), (t()(), jo(54, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Yeroo waliin fuulduratti"])), (t()(), jo(56, 0, null, null, 2, "a", [
                    ["class", "btn btn-primary button"],
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), jo(57, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Dabalataan dubbisi "])), (t()(), jo(59, 0, null, null, 9, "div", [
                    ["class", "col-md-4 col-sm-4 col-xs-12"]
                ], null, null, null, null, null)), (t()(), jo(60, 0, null, null, 8, "div", [
                    ["class", "service-single"]
                ], null, null, null, null, null)), (t()(), jo(61, 0, null, null, 0, "img", [
                    ["alt", "service image"],
                    ["class", "card-img-top"],
                    ["src", "../../assets/information.png"]
                ], null, null, null, null, null)), (t()(), jo(62, 0, null, null, 1, "h4", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Odeeffanoo Amanamaa"])), (t()(), jo(64, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Beekumsa fi Odeeffannoo sobaraa bilisa"])), (t()(), jo(66, 0, null, null, 2, "a", [
                    ["class", "btn btn-primary button"],
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), jo(67, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Odeefadhu "])), (t()(), jo(69, 0, null, null, 9, "div", [
                    ["class", "col-md-4 col-sm-4 col-xs-12 "]
                ], null, null, null, null, null)), (t()(), jo(70, 0, null, null, 8, "div", [
                    ["class", "service-single"]
                ], null, null, null, null, null)), (t()(), jo(71, 0, null, null, 0, "img", [
                    ["alt", "service image"],
                    ["class", "card-img-top"],
                    ["src", "../../assets/ecommerce.png"]
                ], null, null, null, null, null)), (t()(), jo(72, 0, null, null, 1, "h4", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Bittaafi Gurgurtaa"])), (t()(), jo(74, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Gatii Madaalaawaa Jiruu keessan Madaalu"])), (t()(), jo(76, 0, null, null, 2, "a", [
                    ["class", "btn btn-primary button"],
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), jo(77, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Bitadhu "])), (t()(), jo(79, 0, null, null, 56, "div", [
                    ["class", "container featureContent"]
                ], null, null, null, null, null)), (t()(), jo(80, 0, null, null, 55, "div", [
                    ["class", "row "]
                ], null, null, null, null, null)), (t()(), jo(81, 0, null, null, 6, "div", [
                    ["class", "col-md-4 col-sm-4 col-xs-4 "]
                ], null, null, null, null, null)), (t()(), jo(82, 0, null, null, 1, "h4", [
                    ["class", "featureContent"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, [" Sur-sagalee Wayitaawaa"])), (t()(), jo(84, 0, null, null, 3, "ul", [
                    ["class", "list-unstyled quick-links"]
                ], null, null, null, null, null)), (t()(), jo(85, 0, null, null, 2, "li", [], null, null, null, null, null)), (t()(), jo(86, 0, null, null, 1, "div", [
                    ["class", "embed-responsive embed-responsive-16by9"]
                ], null, null, null, null, null)), (t()(), jo(87, 0, null, null, 0, "iframe", [
                    ["allowfullscreen", ""],
                    ["class", "embed-responsive-item"],
                    ["src", "https://www.youtube.com/embed/videoseries?list=PLoo_bWn_rS1ari1uiED8_1SkWn-2NRFsR"]
                ], null, null, null, null, null)), (t()(), jo(88, 0, null, null, 23, "div", [
                    ["class", "col-md-4 col-sm-4 col-xs-4"]
                ], null, null, null, null, null)), (t()(), jo(89, 0, null, null, 1, "h4", [
                    ["class", "featureContent"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Maxxansa Wayitaawaa"])), (t()(), jo(91, 0, null, null, 20, "ul", [
                    ["class", "list-unstyled quick-links"]
                ], null, null, null, null, null)), (t()(), jo(92, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(93, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(94, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Maxxansa Wayitaawaa 1"])), (t()(), jo(96, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(97, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(98, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Maxxansa Wayitaawaa 2"])), (t()(), jo(100, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(101, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(102, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Maxxansa Wayitaawaa 3"])), (t()(), jo(104, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(105, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(106, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Maxxansa Wayitaawaa 4"])), (t()(), jo(108, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(109, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(110, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Maxxansa Wayitaawaa 5"])), (t()(), jo(112, 0, null, null, 23, "div", [
                    ["class", "col-md-4 col-sm-4 col-xs-4 "]
                ], null, null, null, null, null)), (t()(), jo(113, 0, null, null, 1, "h4", [
                    ["class", "featureContent"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Waan Haaraa"])), (t()(), jo(115, 0, null, null, 20, "ul", [
                    ["class", "list-unstyled quick-links"]
                ], null, null, null, null, null)), (t()(), jo(116, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(117, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(118, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Odeeffannoo wayitawaa teekinoloojii"])), (t()(), jo(120, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(121, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(122, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Odeeffannoo wayitawaa teekinoloojii"])), (t()(), jo(124, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(125, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(126, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Odeeffannoo wayitawaa teekinoloojii"])), (t()(), jo(128, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(129, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(130, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Odeeffannoo wayitawaa teekinoloojii "])), (t()(), jo(132, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(133, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(134, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Odeeffannoo wayitawaa teekinoloojii"])), (t()(), jo(136, 0, null, null, 6, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(137, 0, null, null, 5, "div", [
                    ["class", "row mb-5 justify-content-center"]
                ], null, null, null, null, null)), (t()(), jo(138, 0, null, null, 4, "div", [
                    ["class", "col-md-8 text-center"]
                ], null, null, null, null, null)), (t()(), jo(139, 0, null, null, 1, "h2", [
                    ["class", "text-black h1 site-section-heading text-center"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Si'achii Agartuu "])), (t()(), jo(141, 0, null, null, 1, "p", [
                    ["class", "lead"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Hojiiwwan eegalaman galmaan gahuuf ciminaafi kutannoon hojjechuun Mul'ata Keenya dhugaa gochuu"]))], null, null)
            }
            var Gd = Xo("app-home", zd, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-home", [], null, null, null, Bd, qd)), ki(1, 114688, null, 0, zd, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                Wd = function() {
                    function t() { this.headerTitle = "Agartuu", this.ourService = "Tajaajila", this.ourValue = "Kaka'umsa", this.ourMission = "Galma ", this.ourVision = "Mul'ata " }
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                Kd = uo({
                    encapsulation: 0,
                    styles: [
                        ["#mainContent[_ngcontent-%COMP%]{text-align:center}p[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}h5[_ngcontent-%COMP%]{color:red}.container[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px}"]
                    ],
                    data: {}
                });

            function Qd(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 55, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 1, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(2, 0, null, null, 0, "div", [
                    ["class", "col-md-12"]
                ], null, null, null, null, null)), (t()(), jo(3, 0, null, null, 3, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(4, 0, null, null, 2, "div", [
                    ["class", "col-md-12"]
                ], null, null, null, null, null)), (t()(), jo(5, 0, null, null, 1, "h2", [
                    ["id", "mainContent"]
                ], null, null, null, null, null)), (t()(), Wi(6, null, [" ", ""])), (t()(), jo(7, 0, null, null, 3, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(8, 0, null, null, 2, "div", [
                    ["class", "col-md-12"]
                ], null, null, null, null, null)), (t()(), jo(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Agartuu marsariitii (Website) odeeffannoo wayitawaa teekinoloojii waliin walqabate garaagaraa wallitti funanu fi qindeessuun afaan oromootti hiikuun ummata oromoof dhiheessuudha. Agartuu jechi jedhu jecha lama irraa kan ijaarame yoo ta\u2019u innis \u201cAfrikaa\u201d fi \u201cTechnology\u201d dha. Ergamni Agartuu Afaan Oromoo afaan teekinolojii taasisuufi uummata oromoo oromiyaa fi Adunyaa biraa irra jiraatu bu\u2019aalee teekinoolojii guyyaa guyyaati kalaqaman gurraa fi ija oromoo biraan gahuudha. Qeerroo fi qarree oromootti kaka\u2019umsafi xiiqii uumuudhan akkuma gama hundaan dorgomaa ta\u2019am akka gama teekinooloojiitiinis dorgoma akka ta\u2019an gochuudha. Dabalaataniis barattoota fedhii teekinooloojii qabaniif deggarsaa garaagaraa gochuun Adunyaa kanaaf akka guumaacha mataa isaanii bahan jajjabeesuudha. Kitaabollee barattootaaf barbaachisan kan biyya keessatti hin argamne biyya alaa irraa bituudha gargaarsa gochuu. Akkasumasillee Qeerroowan Software kalaqaniif akka isaan software isaanii idil Adunyaatti beeksisatan gargaaruufi yaadaan jajjabeesuudha. Agartuu toora youtube kan qabu yoo ta\u2019u toora kana irratti bu\u2019alee teekinooloojii torban torbaniin adunyaa kana irratti uumaman walitti qindeessuun sur-sagaleen (Audio & Video) dhan hordoftoota isaaf ni dhiheessa."])), (t()(), jo(11, 0, null, null, 44, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(12, 0, null, null, 16, "div", [
                    ["class", "col-md-4"]
                ], null, null, null, null, null)), (t()(), jo(13, 0, null, null, 15, "div", [
                    ["class", "card"],
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (t()(), jo(14, 0, null, null, 0, "img", [
                    ["alt", "Card image cap"],
                    ["class", "card-img-top"],
                    ["src", "../../assets/service.jpg"]
                ], null, null, null, null, null)), (t()(), jo(15, 0, null, null, 13, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (t()(), jo(16, 0, null, null, 1, "h5", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (t()(), Wi(17, null, [" ", " "])), (t()(), jo(18, 0, null, null, 10, "ul", [
                    ["class", "list-group list-group-flush"]
                ], null, null, null, null, null)), (t()(), jo(19, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Odeeffannoo wayitawaa dhiheessuu"])), (t()(), jo(21, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Muuxannoo namoota milkaayanii qooduu"])), (t()(), jo(23, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Qeerroo fi Qarreetti kaka'umsa uumuu"])), (t()(), jo(25, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Sochii gama Teekinolojiitiin ta'u deeggaruu"])), (t()(), jo(27, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Bu'aalee Teekinoolojii yeroo yerootti kalaqaman uummata Oromoo gurraan gahuu"])), (t()(), jo(29, 0, null, null, 7, "div", [
                    ["class", "col-md-4"]
                ], null, null, null, null, null)), (t()(), jo(30, 0, null, null, 6, "div", [
                    ["class", "card"],
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (t()(), jo(31, 0, null, null, 0, "img", [
                    ["alt", "Card image cap"],
                    ["class", "card-img-top"],
                    ["src", "../../assets/mission.jpg"]
                ], null, null, null, null, null)), (t()(), jo(32, 0, null, null, 4, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (t()(), jo(33, 0, null, null, 1, "h5", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (t()(), Wi(34, null, [" ", " "])), (t()(), jo(35, 0, null, null, 1, "p", [
                    ["class", "card-text"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, [" Odeeffannoo wayitaawaa teekinooloojii waliin walqabatan Idil adunaya irraa waliitti qindeessuun uummata oromo biraan gahuu. Akkasumas Qeerrofi Qarree Oromoo gama Teekinooloojiitiin hirmaannaa akka godhan cinnaa dhaabachuun Oromoo gama hundaa dorgomaa ta'ee uummuudhaan Oromiyaa irra darbanii akka Ethiopiatti akkasumas akka Afrikaatti gumaacha mataa isaanii akka gummachan gochuudha. Gama biraatiin Afaan Oromoo akka adunyaatti afaanota biroo waliin gama hundaan akka dorgomuu danda'u tattaaffii gochuudha. "])), (t()(), jo(37, 0, null, null, 18, "div", [
                    ["class", "col-md-4"]
                ], null, null, null, null, null)), (t()(), jo(38, 0, null, null, 17, "div", [
                    ["class", "card"],
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (t()(), jo(39, 0, null, null, 0, "img", [
                    ["alt", "Card image cap"],
                    ["class", "card-img-top"],
                    ["src", "../../assets/vision.jpg"]
                ], null, null, null, null, null)), (t()(), jo(40, 0, null, null, 15, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (t()(), jo(41, 0, null, null, 1, "h5", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (t()(), Wi(42, null, [" ", " "])), (t()(), jo(43, 0, null, null, 12, "ul", [
                    ["class", "list-group list-group-flush"]
                ], null, null, null, null, null)), (t()(), jo(44, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Afirikaa Oromoon boontu uumuu"])), (t()(), jo(46, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Afaan Oromoo Afaan Teekinooloojii taasisuu"])), (t()(), jo(48, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Qeerroofi Qarree Teekinooloojii kalaqu heedduu argu "])), (t()(), jo(50, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Oromiyaa Teekinooloojiin deggaramte ijaaruu"])), (t()(), jo(52, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Oromiyaa Carraa barnootaa(Scholar ship) kennitu arguu"])), (t()(), jo(54, 0, null, null, 1, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Oromiyaa handhuura Teekinoolojii Afirikaa taate arguu"]))], null, function(t, n) {
                    var e = n.component;
                    t(n, 6, 0, e.headerTitle), t(n, 17, 0, e.ourService), t(n, 34, 0, e.ourMission), t(n, 42, 0, e.ourVision)
                })
            }
            var Zd = Xo("app-about", Wd, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-about", [], null, null, null, Qd, Kd)), ki(1, 114688, null, 0, Wd, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                Yd = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                Jd = uo({
                    encapsulation: 0,
                    styles: [
                        [".container[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px}"]
                    ],
                    data: {}
                });

            function $d(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 4, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 3, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(2, 0, null, null, 2, "div", [
                    ["class", "col-md-12"]
                ], null, null, null, null, null)), (t()(), jo(3, 0, null, null, 1, "div", [
                    ["class", "embed-responsive embed-responsive-16by9"]
                ], null, null, null, null, null)), (t()(), jo(4, 0, null, null, 0, "iframe", [
                    ["allowfullscreen", ""],
                    ["class", "embed-responsive-item"],
                    ["src", "https://www.youtube.com/embed/videoseries?list=PLoo_bWn_rS1ari1uiED8_1SkWn-2NRFsR"]
                ], null, null, null, null, null))], null, null)
            }
            var Xd = Xo("app-video-component", Yd, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-video-component", [], null, null, null, $d, Jd)), ki(1, 114688, null, 0, Yd, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                tg = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                ng = uo({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function eg(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), Wi(-1, null, [" gabaan Yeroo yartuu boodaa Ni eegala, Dhiifama waliin yeroo biraa nu huubadhaa! "]))], null, null) }
            var rg = Xo("app-gabaa", tg, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-gabaa", [], null, null, null, eg, ng)), ki(1, 114688, null, 0, tg, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                og = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                ig = uo({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function lg(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Sorry page not found"]))], null, null) }
            var ug = Xo("app-error-page", og, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-error-page", [], null, null, null, lg, ig)), ki(1, 114688, null, 0, og, [], null, null)], function(t, n) { t(n, 1, 0) }, null) }, {}, {}, []),
                ag = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                sg = uo({
                    encapsulation: 0,
                    styles: [
                        ["ul.social-network[_ngcontent-%COMP%]{list-style:none;display:inline;margin-left:0!important;padding:0}ul.social-network[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;margin:0 5px}.social-network[_ngcontent-%COMP%]   a.icoRss[_ngcontent-%COMP%]:hover{background-color:#f56505}.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover{background-color:#3b5998}.social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover{background-color:#3cf}.social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover{background-color:#bd3518}.social-network[_ngcontent-%COMP%]   a.icoVimeo[_ngcontent-%COMP%]:hover{background-color:#0590b8}.social-network[_ngcontent-%COMP%]   a.icoLinkedin[_ngcontent-%COMP%]:hover{background-color:#007bb7}.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoLinkedin[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoRss[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoVimeo[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .socialHoverClass[_ngcontent-%COMP%], a.socialIcon[_ngcontent-%COMP%]:hover{color:#fff}.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;position:relative;margin:0 auto;border-radius:50%;text-align:center;width:50px;height:50px;font-size:20px}.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:0;line-height:50px;text-align:center;color:#fff}.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .triggeredHover[_ngcontent-%COMP%]{-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms--transform:rotate(360deg);transform:rotate(360deg);transition:.2s}.social-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:.8s}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{margin-right:5px}#header-color[_ngcontent-%COMP%]{background-color:#000}"]
                    ],
                    data: {}
                });

            function cg(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 1, "head", [], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 0, "link", [
                    ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"],
                    ["rel", "stylesheet"]
                ], null, null, null, null, null)), (t()(), jo(2, 0, null, null, 86, "nav", [
                    ["class", "navbar navbar-expand-lg navbar-dark"],
                    ["id", "header-color"]
                ], null, null, null, null, null)), (t()(), jo(3, 0, null, null, 6, "a", [
                    ["class", "navbar-brand"],
                    ["routerLinkActive", "router-link-active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 4).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(4, 671744, [
                    [2, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), Gi(5, 1), ki(6, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 1, { links: 1 }), Ui(603979776, 2, { linksWithHrefs: 1 }), (t()(), jo(9, 0, null, null, 0, "img", [
                    ["src", "../../assets/MyLogo.png"],
                    ["style", "max-height: 48px; max-width: 64px"]
                ], null, null, null, null, null)), (t()(), jo(10, 0, null, null, 1, "button", [
                    ["aria-controls", "navbarSupportedContent"],
                    ["aria-expanded", "false"],
                    ["aria-label", "Toggle navigation"],
                    ["class", "navbar-toggler"],
                    ["data-target", "#navbarSupportedContent"],
                    ["data-toggle", "collapse"],
                    ["type", "button"]
                ], null, null, null, null, null)), (t()(), jo(11, 0, null, null, 0, "span", [
                    ["class", "navbar-toggler-icon"]
                ], null, null, null, null, null)), (t()(), jo(12, 0, null, null, 76, "div", [
                    ["class", "collapse navbar-collapse"],
                    ["id", "navbarSupportedContent"]
                ], null, null, null, null, null)), (t()(), jo(13, 0, null, null, 64, "ul", [
                    ["class", "navbar-nav mr-auto"]
                ], null, null, null, null, null)), (t()(), jo(14, 0, null, null, 7, "li", [
                    ["class", "nav-item active"]
                ], null, null, null, null, null)), (t()(), jo(15, 0, null, null, 6, "a", [
                    ["class", "nav-link"],
                    ["routerLinkActive", "router-link-active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 16).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(16, 671744, [
                    [4, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), Gi(17, 1), ki(18, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 3, { links: 1 }), Ui(603979776, 4, { linksWithHrefs: 1 }), (t()(), Wi(-1, null, ["Wiirtuu "])), (t()(), jo(22, 0, null, null, 7, "li", [
                    ["class", "nav-item active"]
                ], null, null, null, null, null)), (t()(), jo(23, 0, null, null, 6, "a", [
                    ["class", "nav-link"],
                    ["routerLinkActive", "router-link-active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 24).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(24, 671744, [
                    [6, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), Gi(25, 1), ki(26, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 5, { links: 1 }), Ui(603979776, 6, { linksWithHrefs: 1 }), (t()(), Wi(-1, null, ["Oduu-tech "])), (t()(), jo(30, 0, null, null, 7, "li", [
                    ["class", "nav-item active"]
                ], null, null, null, null, null)), (t()(), jo(31, 0, null, null, 6, "a", [
                    ["class", "nav-link"],
                    ["routerLinkActive", "router-link-active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 32).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(32, 671744, [
                    [8, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), Gi(33, 1), ki(34, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 7, { links: 1 }), Ui(603979776, 8, { linksWithHrefs: 1 }), (t()(), Wi(-1, null, ["Gabaa "])), (t()(), jo(38, 0, null, null, 7, "li", [
                    ["class", "nav-item active"]
                ], null, null, null, null, null)), (t()(), jo(39, 0, null, null, 6, "a", [
                    ["class", "nav-link"],
                    ["routerLinkActive", "router-link-active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 40).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(40, 671744, [
                    [10, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), Gi(41, 1), ki(42, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 9, { links: 1 }), Ui(603979776, 10, { linksWithHrefs: 1 }), (t()(), Wi(-1, null, ["Suur-sagalee"])), (t()(), jo(46, 0, null, null, 7, "li", [
                    ["class", "nav-item active"]
                ], null, null, null, null, null)), (t()(), jo(47, 0, null, null, 6, "a", [
                    ["class", "nav-link"],
                    ["routerLinkActive", "router-link-active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 48).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(48, 671744, [
                    [12, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), Gi(49, 1), ki(50, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 11, { links: 1 }), Ui(603979776, 12, { linksWithHrefs: 1 }), (t()(), Wi(-1, null, ["Bohaartii "])), (t()(), jo(54, 0, null, null, 7, "li", [
                    ["class", "nav-item active"]
                ], null, null, null, null, null)), (t()(), jo(55, 0, null, null, 6, "a", [
                    ["class", "nav-link"],
                    ["routerLinkActive", "router-link-active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 56).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(56, 671744, [
                    [14, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), Gi(57, 1), ki(58, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 13, { links: 1 }), Ui(603979776, 14, { linksWithHrefs: 1 }), (t()(), Wi(-1, null, ["Taateewwan"])), (t()(), jo(62, 0, null, null, 7, "li", [
                    ["class", "nav-item active"]
                ], null, null, null, null, null)), (t()(), jo(63, 0, null, null, 6, "a", [
                    ["class", "nav-link"],
                    ["routerLinkActive", "router-link-active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 64).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(64, 671744, [
                    [16, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), Gi(65, 1), ki(66, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 15, { links: 1 }), Ui(603979776, 16, { linksWithHrefs: 1 }), (t()(), Wi(-1, null, ["Nu quunnamaa "])), (t()(), jo(70, 0, null, null, 7, "li", [
                    ["class", "nav-item active"]
                ], null, null, null, null, null)), (t()(), jo(71, 0, null, null, 6, "a", [
                    ["class", "nav-link"],
                    ["routerLinkActive", "router-link-active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 72).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(72, 671744, [
                    [18, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), Gi(73, 1), ki(74, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 17, { links: 1 }), Ui(603979776, 18, { linksWithHrefs: 1 }), (t()(), Wi(-1, null, ["Waa'ee Keenya "])), (t()(), jo(78, 0, null, null, 10, "div", [], null, null, null, null, null)), (t()(), jo(79, 0, null, null, 9, "ul", [
                    ["class", "social-network social-circle"]
                ], null, null, null, null, null)), (t()(), jo(80, 0, null, null, 2, "li", [], null, null, null, null, null)), (t()(), jo(81, 0, null, null, 1, "a", [
                    ["class", "icoFacebook"],
                    ["href", "https://www.facebook.com/africateck"],
                    ["title", "Facebook"]
                ], null, null, null, null, null)), (t()(), jo(82, 0, null, null, 0, "i", [
                    ["class", "fa fa-facebook"]
                ], null, null, null, null, null)), (t()(), jo(83, 0, null, null, 2, "li", [], null, null, null, null, null)), (t()(), jo(84, 0, null, null, 1, "a", [
                    ["class", "icoTwitter"],
                    ["href", "#"],
                    ["title", "Twitter"]
                ], null, null, null, null, null)), (t()(), jo(85, 0, null, null, 0, "i", [
                    ["class", "fa fa-twitter"]
                ], null, null, null, null, null)), (t()(), jo(86, 0, null, null, 2, "li", [], null, null, null, null, null)), (t()(), jo(87, 0, null, null, 1, "a", [
                    ["class", "icoyoutube"],
                    ["href", "https://www.youtube.com/channel/UCEYgUk8YSAlMxXlHfehuimA"],
                    ["title", "youtube"]
                ], null, null, null, null, null)), (t()(), jo(88, 0, null, null, 0, "i", [
                    ["class", "fa fa-youtube"]
                ], null, null, null, null, null))], function(t, n) { t(n, 4, 0, t(n, 5, 0, "/wiirtuu")), t(n, 6, 0, "router-link-active"), t(n, 16, 0, t(n, 17, 0, "/wiirtuu")), t(n, 18, 0, "router-link-active"), t(n, 24, 0, t(n, 25, 0, "/oduuteck")), t(n, 26, 0, "router-link-active"), t(n, 32, 0, t(n, 33, 0, "/gabaa")), t(n, 34, 0, "router-link-active"), t(n, 40, 0, t(n, 41, 0, "/suursagalee")), t(n, 42, 0, "router-link-active"), t(n, 48, 0, t(n, 49, 0, "/bohaartii")), t(n, 50, 0, "router-link-active"), t(n, 56, 0, t(n, 57, 0, "/taateewwan")), t(n, 58, 0, "router-link-active"), t(n, 64, 0, t(n, 65, 0, "/nuquunnamaa")), t(n, 66, 0, "router-link-active"), t(n, 72, 0, t(n, 73, 0, "/waayeekeenya")), t(n, 74, 0, "router-link-active") }, function(t, n) { t(n, 3, 0, ci(n, 4).target, ci(n, 4).href), t(n, 15, 0, ci(n, 16).target, ci(n, 16).href), t(n, 23, 0, ci(n, 24).target, ci(n, 24).href), t(n, 31, 0, ci(n, 32).target, ci(n, 32).href), t(n, 39, 0, ci(n, 40).target, ci(n, 40).href), t(n, 47, 0, ci(n, 48).target, ci(n, 48).href), t(n, 55, 0, ci(n, 56).target, ci(n, 56).href), t(n, 63, 0, ci(n, 64).target, ci(n, 64).href), t(n, 71, 0, ci(n, 72).target, ci(n, 72).href) })
            }
            var pg = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t
                }(),
                hg = uo({
                    encapsulation: 0,
                    styles: [
                        ["@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);section[_ngcontent-%COMP%]{padding:60px 0}section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:center;color:#007b5e;margin-bottom:50px;text-transform:uppercase}#footer[_ngcontent-%COMP%]{background:#000!important}#footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding-left:10px;border-left:3px solid #eee;padding-bottom:6px;margin-bottom:20px;color:#fff}#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none!important;background-color:transparent;-webkit-text-decoration-skip:objects}#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:3px 0}#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px;font-size:25px;transition:.5s}#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;margin-top:-10px}#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#eee}#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:3px 0;transition:.5s}#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{padding:3px 0;margin-left:5px;font-weight:700}#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-weight:700}@media (max-width:767px){#footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding-left:0;border-left:transparent;padding-bottom:0;margin-bottom:10px}}"]
                    ],
                    data: {}
                });

            function fg(t) {
                return Zi(0, [(t()(), jo(0, 0, null, null, 0, "link", [
                    ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"],
                    ["id", "bootstrap-css"],
                    ["rel", "stylesheet"]
                ], null, null, null, null, null)), (t()(), jo(1, 0, null, null, 155, "section", [
                    ["id", "footer"]
                ], null, null, null, null, null)), (t()(), jo(2, 0, null, null, 154, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), jo(3, 0, null, null, 129, "div", [
                    ["class", "row text-center text-xs-center text-sm-left text-md-left"]
                ], null, null, null, null, null)), (t()(), jo(4, 0, null, null, 43, "div", [
                    ["class", "col-xs-12 col-sm-4 col-md-4"]
                ], null, null, null, null, null)), (t()(), jo(5, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Hidhaa Gabaaboo"])), (t()(), jo(7, 0, null, null, 40, "ul", [
                    ["class", "list-unstyled quick-links"]
                ], null, null, null, null, null)), (t()(), jo(8, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(9, 0, null, null, 6, "a", [
                    ["routerLink", "/wiirtuu"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 10).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(10, 671744, [
                    [2, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(11, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 1, { links: 1 }), Ui(603979776, 2, { linksWithHrefs: 1 }), (t()(), jo(14, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Wiirtuu"])), (t()(), jo(16, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(17, 0, null, null, 6, "a", [
                    ["routerLink", "/waayeekeenya"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 18).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(18, 671744, [
                    [4, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(19, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 3, { links: 1 }), Ui(603979776, 4, { linksWithHrefs: 1 }), (t()(), jo(22, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Waa'ee Keenya"])), (t()(), jo(24, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(25, 0, null, null, 2, "a", [
                    ["href", "#"]
                ], null, null, null, null, null)), (t()(), jo(26, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Gaaffii"])), (t()(), jo(28, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(29, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(30, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Akkamin Jalqabu"])), (t()(), jo(32, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(33, 0, null, null, 6, "a", [
                    ["routerLink", "/suursagalee"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 34).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(34, 671744, [
                    [6, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(35, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 5, { links: 1 }), Ui(603979776, 6, { linksWithHrefs: 1 }), (t()(), jo(38, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Suur-sagalee"])), (t()(), jo(40, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(41, 0, null, null, 6, "a", [
                    ["routerLink", "/nuquunnamaa"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 42).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(42, 671744, [
                    [8, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(43, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 7, { links: 1 }), Ui(603979776, 8, { linksWithHrefs: 1 }), (t()(), jo(46, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Nu quunnamaa"])), (t()(), jo(48, 0, null, null, 43, "div", [
                    ["class", "col-xs-12 col-sm-4 col-md-4"]
                ], null, null, null, null, null)), (t()(), jo(49, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Hidhaa Gabaaboo"])), (t()(), jo(51, 0, null, null, 40, "ul", [
                    ["class", "list-unstyled quick-links"]
                ], null, null, null, null, null)), (t()(), jo(52, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(53, 0, null, null, 6, "a", [
                    ["routerLink", "/wiirtuu"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 54).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(54, 671744, [
                    [10, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(55, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 9, { links: 1 }), Ui(603979776, 10, { linksWithHrefs: 1 }), (t()(), jo(58, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Wiirtuu"])), (t()(), jo(60, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(61, 0, null, null, 6, "a", [
                    ["routerLink", "/waayeekeenya"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 62).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(62, 671744, [
                    [12, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(63, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 11, { links: 1 }), Ui(603979776, 12, { linksWithHrefs: 1 }), (t()(), jo(66, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Waa'ee Keenya"])), (t()(), jo(68, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(69, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(70, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Gaaffii"])), (t()(), jo(72, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(73, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(74, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Akkamin Jalqabu"])), (t()(), jo(76, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(77, 0, null, null, 6, "a", [
                    ["routerLink", "/suursagalee"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 78).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(78, 671744, [
                    [14, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(79, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 13, { links: 1 }), Ui(603979776, 14, { linksWithHrefs: 1 }), (t()(), jo(82, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Suur-sagalee"])), (t()(), jo(84, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(85, 0, null, null, 6, "a", [
                    ["routerLink", "/nuquunnamaa"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 86).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(86, 671744, [
                    [16, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(87, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 15, { links: 1 }), Ui(603979776, 16, { linksWithHrefs: 1 }), (t()(), jo(90, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Nu quunnamaa"])), (t()(), jo(92, 0, null, null, 40, "div", [
                    ["class", "col-xs-12 col-sm-4 col-md-4"]
                ], null, null, null, null, null)), (t()(), jo(93, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), Wi(-1, null, ["Hidhaa Gabaaboo"])), (t()(), jo(95, 0, null, null, 37, "ul", [
                    ["class", "list-unstyled quick-links"]
                ], null, null, null, null, null)), (t()(), jo(96, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(97, 0, null, null, 6, "a", [
                    ["routerLink", "/wiirtuu"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 98).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(98, 671744, [
                    [18, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(99, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 17, { links: 1 }), Ui(603979776, 18, { linksWithHrefs: 1 }), (t()(), jo(102, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Wiirtuu"])), (t()(), jo(104, 0, null, null, 4, "li", [], null, null, null, null, null)), (t()(), jo(105, 0, null, null, 3, "a", [
                    ["routerLink", "/waayeekeenya"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 106).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(106, 671744, null, 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), (t()(), jo(107, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Waa'ee Keenya"])), (t()(), jo(109, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(110, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(111, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Gaaffii"])), (t()(), jo(113, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), jo(114, 0, null, null, 2, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(115, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Akkamin Jalqabu"])), (t()(), jo(117, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(118, 0, null, null, 6, "a", [
                    ["routerLink", "/suursagalee"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 119).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(119, 671744, [
                    [20, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(120, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 19, { links: 1 }), Ui(603979776, 20, { linksWithHrefs: 1 }), (t()(), jo(123, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Suur-sagalee"])), (t()(), jo(125, 0, null, null, 7, "li", [], null, null, null, null, null)), (t()(), jo(126, 0, null, null, 6, "a", [
                    ["routerLink", "/nuquunnamaa"],
                    ["routerLinkActive", "active"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, n, e) { var r = !0; return "click" === n && (r = !1 !== ci(t, 127).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && r), r }, null, null)), ki(127, 671744, [
                    [22, 4]
                ], 0, Qh, [Gh, ih, gs], { routerLink: [0, "routerLink"] }, null), ki(128, 1720320, null, 2, Yh, [Gh, Re, Ne, qe], { routerLinkActive: [0, "routerLinkActive"] }, null), Ui(603979776, 21, { links: 1 }), Ui(603979776, 22, { linksWithHrefs: 1 }), (t()(), jo(131, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-double-right"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Nu quunnamaa"])), (t()(), jo(133, 0, null, null, 17, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(134, 0, null, null, 16, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5"]
                ], null, null, null, null, null)), (t()(), jo(135, 0, null, null, 15, "ul", [
                    ["class", "list-unstyled list-inline social text-center"]
                ], null, null, null, null, null)), (t()(), jo(136, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (t()(), jo(137, 0, null, null, 1, "a", [
                    ["href", "https://www.facebook.com/africateck"]
                ], null, null, null, null, null)), (t()(), jo(138, 0, null, null, 0, "i", [
                    ["class", "fa fa-facebook"]
                ], null, null, null, null, null)), (t()(), jo(139, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (t()(), jo(140, 0, null, null, 1, "a", [
                    ["href", "https://www.youtube.com/channel/UCEYgUk8YSAlMxXlHfehuimA"]
                ], null, null, null, null, null)), (t()(), jo(141, 0, null, null, 0, "i", [
                    ["class", "fa fa-youtube"]
                ], null, null, null, null, null)), (t()(), jo(142, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (t()(), jo(143, 0, null, null, 1, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(144, 0, null, null, 0, "i", [
                    ["class", "fa fa-twitter"]
                ], null, null, null, null, null)), (t()(), jo(145, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (t()(), jo(146, 0, null, null, 1, "a", [
                    ["href", "javascript:void();"]
                ], null, null, null, null, null)), (t()(), jo(147, 0, null, null, 0, "i", [
                    ["class", "fa fa-instagram"]
                ], null, null, null, null, null)), (t()(), jo(148, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (t()(), jo(149, 0, null, null, 1, "a", [
                    ["href", "javascript:void();"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (t()(), jo(150, 0, null, null, 0, "i", [
                    ["class", "fa fa-envelope"]
                ], null, null, null, null, null)), (t()(), jo(151, 0, null, null, 5, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), jo(152, 0, null, null, 4, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"]
                ], null, null, null, null, null)), (t()(), jo(153, 0, null, null, 3, "p", [
                    ["class", "h6"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["2019 Agartuu All right Reversed."])), (t()(), jo(155, 0, null, null, 1, "a", [
                    ["class", "text-green ml-2"],
                    ["href", "https://www.agartuu.com"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (t()(), Wi(-1, null, ["Agartuu"]))], function(t, n) { t(n, 10, 0, "/wiirtuu"), t(n, 11, 0, "active"), t(n, 18, 0, "/waayeekeenya"), t(n, 19, 0, "active"), t(n, 34, 0, "/suursagalee"), t(n, 35, 0, "active"), t(n, 42, 0, "/nuquunnamaa"), t(n, 43, 0, "active"), t(n, 54, 0, "/wiirtuu"), t(n, 55, 0, "active"), t(n, 62, 0, "/waayeekeenya"), t(n, 63, 0, "active"), t(n, 78, 0, "/suursagalee"), t(n, 79, 0, "active"), t(n, 86, 0, "/nuquunnamaa"), t(n, 87, 0, "active"), t(n, 98, 0, "/wiirtuu"), t(n, 99, 0, "active"), t(n, 106, 0, "/waayeekeenya"), t(n, 119, 0, "/suursagalee"), t(n, 120, 0, "active"), t(n, 127, 0, "/nuquunnamaa"), t(n, 128, 0, "active") }, function(t, n) { t(n, 9, 0, ci(n, 10).target, ci(n, 10).href), t(n, 17, 0, ci(n, 18).target, ci(n, 18).href), t(n, 33, 0, ci(n, 34).target, ci(n, 34).href), t(n, 41, 0, ci(n, 42).target, ci(n, 42).href), t(n, 53, 0, ci(n, 54).target, ci(n, 54).href), t(n, 61, 0, ci(n, 62).target, ci(n, 62).href), t(n, 77, 0, ci(n, 78).target, ci(n, 78).href), t(n, 85, 0, ci(n, 86).target, ci(n, 86).href), t(n, 97, 0, ci(n, 98).target, ci(n, 98).href), t(n, 105, 0, ci(n, 106).target, ci(n, 106).href), t(n, 118, 0, ci(n, 119).target, ci(n, 119).href), t(n, 126, 0, ci(n, 127).target, ci(n, 127).href) })
            }
            var dg = uo({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

            function gg(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-navbar-component", [], null, null, null, cg, sg)), ki(1, 114688, null, 0, ag, [], null, null), (t()(), jo(2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ki(3, 212992, null, 0, Xh, [$h, ze, Xn, [8, null], qe], null, null), (t()(), jo(4, 0, null, null, 1, "app-footer", [], null, null, null, fg, hg)), ki(5, 114688, null, 0, pg, [], null, null)], function(t, n) { t(n, 1, 0), t(n, 3, 0), t(n, 5, 0) }, null) }
            var vg = Xo("app-root", Ma, function(t) { return Zi(0, [(t()(), jo(0, 0, null, null, 1, "app-root", [], null, null, null, gg, dg)), ki(1, 49152, null, 0, Ma, [], null, null)], null, null) }, {}, {}, []),
                yg = function() {},
                mg = function(t, n, e) {
                    return new eu(Ia, [Ma], function(t) {
                        return function(t) {
                            for (var n = {}, e = [], r = !1, o = 0; o < t.length; o++) {
                                var i = t[o];
                                i.token === wn && !0 === i.value && (r = !0), 1073741824 & i.flags && e.push(i.token), i.index = o, n[oo(i.token)] = i
                            }
                            return { factory: null, providersByKey: n, providers: t, modules: e, isRoot: r }
                        }([Bo(512, Xn, te, [
                            [8, [xf, Pf, Mf, Df, Hf, Fd, Gd, Zd, Xd, rg, ug, vg]],
                            [3, Xn], ee
                        ]), Bo(5120, vr, br, [
                            [3, vr]
                        ]), Bo(4608, Ss, Os, [vr, [2, Es]]), Bo(5120, Dn, Vn, []), Bo(5120, cr, yr, []), Bo(5120, pr, mr, []), Bo(4608, Ic, Mc, [As]), Bo(6144, Br, null, [Ic]), Bo(4608, xc, Sc, []), Bo(5120, Js, function(t, n, e, r, o, i, l, u) { return [new Cc(t, n, e), new Tc(r), new Oc(o, i, l, u)] }, [As, se, Hn, As, As, xc, zn, [2, Ec]]), Bo(4608, $s, $s, [Js, se]), Bo(135680, nc, nc, [As]), Bo(4608, ac, ac, [$s, nc]), Bo(6144, Ie, null, [ac]), Bo(6144, tc, null, [nc]), Bo(4608, ye, ye, [se]), Bo(5120, ih, yf, [Gh]), Bo(4608, rf, rf, []), Bo(6144, nf, null, [rf]), Bo(135680, of, of, [Gh, je, Bn, Kt, nf]), Bo(4608, ef, ef, []), Bo(5120, lf, hf, [Gh, Is, uf]), Bo(5120, wf, _f, [mf]), Bo(5120, Fn, function(t) { return [t] }, [wf]), Bo(4608, ud, ud, []), Bo(1073742336, Ps, Ps, []), Bo(1024, _n, Hc, []), Bo(1024, xe, function() { return [cf()] }, []), Bo(512, mf, mf, [Kt]), Bo(1024, Rn, function(t, n) { return [(e = t, Qs("probe", Ys), Qs("coreTokens", i({}, Zs, (e || []).reduce(function(t, n) { return t[n.name] = n.token, t }, {}))), function() { return Ys }), bf(n)]; var e }, [
                            [2, xe], mf
                        ]), Bo(512, jn, jn, [
                            [2, Rn]
                        ]), Bo(131584, Ae, Ae, [se, zn, Kt, _n, Xn, jn]), Bo(1073742336, _r, _r, [Ae]), Bo(1073742336, Fc, Fc, [
                            [3, Fc]
                        ]), Bo(1024, af, df, [
                            [3, Gh]
                        ]), Bo(512, Op, Pp, []), Bo(512, $h, $h, []), Bo(256, uf, { scrollPositionRestoration: "enabled" }, []), Bo(1024, gs, ff, [fs, [2, vs], uf]), Bo(512, ys, ys, [gs]), Bo(512, Bn, Bn, []), Bo(512, je, Ue, [Bn, [2, Ve]]), Bo(1024, Lh, function() {
                            return [
                                [{ path: "", redirectTo: "/wiirtuu", pathMatch: "full" }, { path: "oduuteck", component: Ef }, { path: "taateewwan", component: Af }, { path: "eresources", component: Nf }, { path: "bohaartii", component: Vf }, { path: "nuquunnamaa", component: Ld }, { path: "wiirtuu", component: zd }, { path: "waayeekeenya", component: Wd }, { path: "suursagalee", component: Yd }, { path: "gabaa", component: tg }, { path: "**", component: og }]
                            ]
                        }, []), Bo(1024, Gh, vf, [Ae, Op, $h, ys, Kt, je, Bn, Lh, uf, [2, Hh],
                            [2, Dh]
                        ]), Bo(1073742336, pf, pf, [
                            [2, af],
                            [2, Gh]
                        ]), Bo(1073742336, yg, yg, []), Bo(1073742336, Dd, Dd, []), Bo(1073742336, Vd, Vd, []), Bo(1073742336, Ia, Ia, []), Bo(256, wn, !0, [])])
                    })
                }();
            (function() {
                if (we) throw new Error("Cannot enable prod mode after platform setup.");
                _e = !1
            })(), Uc().bootstrapModuleFactory(mg).catch(function(t) { return console.error(t) })
        }
    },
    [
        [0, 0]
    ]
]);