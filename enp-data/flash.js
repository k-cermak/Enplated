!(function (e) {
    function t(s) {
        if (n[s]) return n[s].exports;
        var i = (n[s] = { i: s, l: !1, exports: {} });
        return e[s].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var n = {};
    (t.m = e),
        (t.c = n),
        (t.d = function (e, n, s) {
            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: s });
        }),
        (t.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 1));
})([
    function (e, t, n) {
        "use strict";
        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var i = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var s = t[n];
                        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
                    }
                }
                return function (t, n, s) {
                    return n && e(t.prototype, n), s && e(t, s), t;
                };
            })(),
            r = (function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    s(this, e), t && t.constructor === Object && ((n = t), (t = null)), (this.selector = t), (this.options = Object.assign({}, e.DEFAULT_OPTIONS, n)), (this._bag = []), this._setElement(), this._process();
                }
                return (
                    i(
                        e,
                        [
                            {
                                key: "getBag",
                                value: function () {
                                    return this._bag;
                                },
                            },
                            {
                                key: "setBag",
                                value: function (e) {
                                    return this._bag.push(e), this;
                                },
                            },
                            {
                                key: "attach",
                                value: function () {
                                    var e;
                                    return (e = this._bag).push.apply(e, arguments), this._checkLimit(), this;
                                },
                            },
                            {
                                key: "detach",
                                value: function (e) {
                                    return (
                                        (this._bag = this._bag.filter(function (t) {
                                            return e instanceof FlashMessage && t !== e;
                                        })),
                                        this
                                    );
                                },
                            },
                            {
                                key: "_setElement",
                                value: function () {
                                    !this.selector || this.selector instanceof Element || (this.selector.constructor === String && (this.selector = document.querySelectorAll(this.selector) || null));
                                },
                            },
                            {
                                key: "_process",
                                value: function () {
                                    var e = this;
                                    this.selector &&
                                        (Array.isArray(this.selector) || this.selector.constructor === NodeList
                                            ? this.selector.forEach(function (t) {
                                                  return e.setBag(new FlashMessage(t, e.options));
                                              })
                                            : this.setBag(new FlashMessage(this.selector, this.options)),
                                        this._checkLimit());
                                },
                            },
                            {
                                key: "_checkLimit",
                                value: function () {
                                    if (this.options.limit && this._bag.length > this.options.limit) for (var e = 0; e < this._bag.length - this.options.limit; ++e) this._bag[e].destroy(), this.detach(this._bag[e]);
                                },
                            },
                        ],
                        [
                            {
                                key: "create",
                                value: function () {
                                    return new e(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
                                },
                            },
                            {
                                key: "DEFAULT_OPTIONS",
                                get: function () {
                                    return { limit: 0 };
                                },
                            },
                        ]
                    ),
                    e
                );
            })();
        t.a = r;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = n(2),
            i = (n.n(s), n(0)),
            r = n(3),
            o = n(4);
        n.n(o);
        !(function (e) {
            void 0 !== e && (e.Flash || (e.Flash = i.a), e.FlashMessage || (e.FlashMessage = r.a));
        })(window),
            (t.default = { Flash: i.a, FlashMessage: r.a });
    },
    function (e, t) {
        "document" in self &&
            (("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) ||
                (function (e) {
                    "use strict";
                    if ("Element" in e) {
                        var t = "classList",
                            n = "prototype",
                            s = e.Element[n],
                            i = Object,
                            r =
                                String[n].trim ||
                                function () {
                                    return this.replace(/^\s+|\s+$/g, "");
                                },
                            o =
                                Array[n].indexOf ||
                                function (e) {
                                    for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
                                    return -1;
                                },
                            a = function (e, t) {
                                (this.name = e), (this.code = DOMException[e]), (this.message = t);
                            },
                            l = function (e, t) {
                                if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                                if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                                return o.call(e, t);
                            },
                            u = function (e) {
                                for (var t = r.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], s = 0, i = n.length; i > s; s++) this.push(n[s]);
                                this._updateClassName = function () {
                                    e.setAttribute("class", "" + this);
                                };
                            },
                            h = (u[n] = []),
                            c = function () {
                                return new u(this);
                            };
                        if (
                            ((a[n] = Error[n]),
                            (h.item = function (e) {
                                return this[e] || null;
                            }),
                            (h.contains = function (e) {
                                return (e += ""), -1 !== l(this, e);
                            }),
                            (h.add = function () {
                                var e,
                                    t = arguments,
                                    n = 0,
                                    s = t.length,
                                    i = !1;
                                do {
                                    (e = t[n] + ""), -1 === l(this, e) && (this.push(e), (i = !0));
                                } while (++n < s);
                                i && this._updateClassName();
                            }),
                            (h.remove = function () {
                                var e,
                                    t,
                                    n = arguments,
                                    s = 0,
                                    i = n.length,
                                    r = !1;
                                do {
                                    for (e = n[s] + "", t = l(this, e); -1 !== t; ) this.splice(t, 1), (r = !0), (t = l(this, e));
                                } while (++s < i);
                                r && this._updateClassName();
                            }),
                            (h.toggle = function (e, t) {
                                e += "";
                                var n = this.contains(e),
                                    s = n ? !0 !== t && "remove" : !1 !== t && "add";
                                return s && this[s](e), !0 === t || !1 === t ? t : !n;
                            }),
                            (h.toString = function () {
                                return this.join(" ");
                            }),
                            i.defineProperty)
                        ) {
                            var _ = { get: c, enumerable: !0, configurable: !0 };
                            try {
                                i.defineProperty(s, t, _);
                            } catch (e) {
                                (void 0 === e.number || -2146823252 === e.number) && ((_.enumerable = !1), i.defineProperty(s, t, _));
                            }
                        } else i[n].__defineGetter__ && s.__defineGetter__(t, c);
                    }
                })(self),
            (function () {
                "use strict";
                var e = document.createElement("_");
                if ((e.classList.add("c1", "c2"), !e.classList.contains("c2"))) {
                    var t = function (e) {
                        var t = DOMTokenList.prototype[e];
                        DOMTokenList.prototype[e] = function (e) {
                            var n,
                                s = arguments.length;
                            for (n = 0; s > n; n++) (e = arguments[n]), t.call(this, e);
                        };
                    };
                    t("add"), t("remove");
                }
                if ((e.classList.toggle("c3", !1), e.classList.contains("c3"))) {
                    var n = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function (e, t) {
                        return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e);
                    };
                }
                e = null;
            })());
    },
    function (e, t, n) {
        "use strict";
        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var i =
                (n(0),
                (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var s = t[n];
                            (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function (t, n, s) {
                        return n && e(t.prototype, n), s && e(t, s), t;
                    };
                })()),
            r = (function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e._CONSTANTS.TYPES.ERROR,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    s(this, e),
                        n.constructor === Object && ((i = n), (n = e._CONSTANTS.TYPES.ERROR)),
                        (this.$_element = null),
                        this.setOptions(i),
                        t instanceof Element ? ((this.$_element = t), this._composeMessage()) : ((this.message = t), (this.type = n)),
                        (this.$_container = document.querySelector(this.options.container) || null),
                        (this._c_timeout = null),
                        (this.$_progress = null),
                        (this._progress_value = 0),
                        (this._progress_offset = 0),
                        (this._progress_interval = null),
                        this._createContainer(),
                        this._createMessage();
                }
                return (
                    i(e, null, [
                        {
                            key: "_CONSTANTS",
                            get: function () {
                                return {
                                    TYPES: { SUCCESS: "success", WARNING: "warning", ERROR: "error", INFO: "info" },
                                    THEME: "default",
                                    CONTAINER: ".flash-container",
                                    CLASSES: { CONTAINER: "flash-container", VISIBLE: "is-visible", FLASH: "flash-message", PROGRESS: "flash-progress", PROGRESS_HIDDEN: "is-hidden" },
                                };
                            },
                        },
                        {
                            key: "DEFAULT_OPTIONS",
                            get: function () {
                                return {
                                    progress: !1,
                                    interactive: !0,
                                    timeout: 8e3,
                                    appear_delay: 200,
                                    remove_delay: 600,
                                    container: e._CONSTANTS.CONTAINER,
                                    classes: {
                                        container: e._CONSTANTS.CLASSES.CONTAINER,
                                        visible: e._CONSTANTS.CLASSES.VISIBLE,
                                        flash: e._CONSTANTS.CLASSES.FLASH,
                                        progress: e._CONSTANTS.CLASSES.PROGRESS,
                                        progress_hidden: e._CONSTANTS.CLASSES.PROGRESS_HIDDEN,
                                    },
                                    theme: e._CONSTANTS.THEME,
                                    onShow: null,
                                    onClick: null,
                                    onClose: null,
                                };
                            },
                        },
                    ]),
                    i(
                        e,
                        [
                            {
                                key: "setOptions",
                                value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return (this.options = Object.assign({}, e.DEFAULT_OPTIONS, t)), this;
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    this._close();
                                },
                            },
                            {
                                key: "_createContainer",
                                value: function () {
                                    (null !== this.$_container && document.body.contains(this.$_container)) ||
                                        ((this.$_container = document.createElement("div")),
                                        this.$_container.classList.add(this.options.classes.container),
                                        document.body.firstChild ? document.body.insertBefore(this.$_container, document.body.firstChild) : document.body.appendChild(this.$_container));
                                },
                            },
                            {
                                key: "_composeMessage",
                                value: function () {
                                    (this.message = this.$_element.dataset.message || this.$_element.innerHTML || ""),
                                        (this.type = this.$_element.dataset.type || e._CONSTANTS.TYPES.ERROR),
                                        void 0 !== this.$_element.dataset.progress && this.setOptions({ progress: !0 }),
                                        this.$_element.classList.add("flash-" + this.type);
                                },
                            },
                            {
                                key: "_createMessage",
                                value: function () {
                                    if (this.$_element) this.$_element.querySelector(".thumb") && this.$_element.classList.add("has-thumb");
                                    else {
                                        if (
                                            ((this.$_element = document.createElement("div")),
                                            this.$_element.classList.add(this.options.classes.flash, "flash-" + this.type),
                                            this.$_element.setAttribute("data-type", this.type),
                                            this.$_element.setAttribute("data-message", this.message),
                                            (this.$_element.innerHTML = this.message),
                                            this.options.thumb)
                                        ) {
                                            var e = document.createElement("img");
                                            e.classList.add("thumb"), (e.src = this.options.thumb), this.$_element.classList.add("has-thumb"), this.$_element.appendChild(e);
                                        }
                                        this._append();
                                    }
                                    this._setTheme(),
                                        this._hasProgress() && this._progressBar(),
                                        this.$_element.dataset.timeout && (this.options.timeout = parseInt(this.$_element.dataset.timeout, 10)),
                                        this._behavior(),
                                        !0 === this._isInteractive() && this._bindEvents();
                                },
                            },
                            {
                                key: "_append",
                                value: function () {
                                    this.$_container.appendChild(this.$_element);
                                },
                            },
                            {
                                key: "_behavior",
                                value: function () {
                                    var e = this;
                                    this._run(),
                                        window.setTimeout(function () {
                                            return e.$_element.classList.add(e.options.classes.visible);
                                        }, this.options.appear_delay);
                                },
                            },
                            {
                                key: "_run",
                                value: function () {
                                    var e = this;
                                    this._startProgress(),
                                        (this._c_timeout = window.setTimeout(function () {
                                            return e._close();
                                        }, this.options.timeout));
                                },
                            },
                            {
                                key: "_stop",
                                value: function () {
                                    null !== this._c_timeout && (window.clearTimeout(this._c_timeout), this._stopProgress(), (this._c_timeout = null));
                                },
                            },
                            {
                                key: "_close",
                                value: function () {
                                    var e = this;
                                    this._stopProgress(),
                                        this._isInteractive() && this._unbindEvents(),
                                        this.$_element.classList.remove(this.options.classes.visible),
                                        this.$_element.addEventListener("transitionend", function () {
                                            if (e.$_container.contains(e.$_element)) {
                                                e.$_container.removeChild(e.$_element);
                                            }
                                            e._clear();
                                        });                                        
                                },
                            },
                            {
                                key: "_clear",
                                value: function () {
                                    !this.$_container.children.length && this.$_container.parentNode.contains(this.$_container) && this.$_container.parentNode.removeChild(this.$_container);
                                },
                            },
                            {
                                key: "_bindEvents",
                                value: function () {
                                    var e = this;
                                    this._bindEvent("mouseover", function (t) {
                                        return e._stop();
                                    }),
                                        this._bindEvent("mouseleave", function (t) {
                                            return e._run();
                                        }),
                                        this._bindEvent("click", function (t) {
                                            return e._close();
                                        });
                                },
                            },
                            {
                                key: "_bindEvent",
                                value: function (e, t) {
                                    try {
                                        this.$_element.addEventListener ? this.$_element.addEventListener(e, t, !1) : this.$_element.attachEvent("on" + this._getCapitalizedEventName(e), t);
                                    } catch (e) {
                                        throw new Error("FlashMessage._bindEvent - Cannot add event on element - " + e);
                                    }
                                },
                            },
                            {
                                key: "_unbindEvents",
                                value: function () {
                                    var e = this;
                                    this._unbindEvent("mouseover", function (t) {
                                        return e._stop();
                                    }),
                                        this._unbindEvent("mouseleave", function (t) {
                                            return e._run();
                                        }),
                                        this._unbindEvent("click", function (t) {
                                            return e._close();
                                        });
                                },
                            },
                            {
                                key: "_unbindEvent",
                                value: function (e, t) {
                                    try {
                                        this.$_element.removeEventListener ? this.$_element.removeEventListener(e, t, !1) : this.$_element.detachEvent("on" + this._getCapitalizedEventName(e), t);
                                    } catch (e) {
                                        throw new Error("FlashMessage._unbindEvent - Cannot remove event on element - " + e);
                                    }
                                },
                            },
                            {
                                key: "_isInteractive",
                                value: function () {
                                    return Boolean(!0 === this.options.interactive);
                                },
                            },
                            {
                                key: "_getCapitalizedEventName",
                                value: function (e) {
                                    return e.charAt(0).toUpperCase() + e.substr(1);
                                },
                            },
                            {
                                key: "_hasProgress",
                                value: function () {
                                    return Boolean(this.options.progress);
                                },
                            },
                            {
                                key: "_progressBar",
                                value: function () {
                                    (this.$_progress = document.createElement("div")), this.$_progress.classList.add(this.options.classes.progress), this.$_element.appendChild(this.$_progress);
                                },
                            },
                            {
                                key: "_startProgress",
                                value: function () {
                                    var e = this;
                                    this._hasProgress() &&
                                        (this.$_progress || this._progressBar(),
                                        this._stopProgress(),
                                        (this._progress_offset = 0),
                                        this.$_progress.classList.remove(this.options.classes.progress_hidden),
                                        (this._progress_interval = window.setInterval(function () {
                                            return e._setProgress();
                                        }, 16)));
                                },
                            },
                            {
                                key: "_setProgress",
                                value: function () {
                                    (this.$_progress.style.width = this._progress_value + "%"),
                                        (this._progress_value = ((100 * this._progress_offset) / this.options.timeout).toFixed(2)),
                                        (this._progress_offset += 16),
                                        this._progress_value >= 100 && this._stopProgress();
                                },
                            },
                            {
                                key: "_stopProgress",
                                value: function () {
                                    this._hasProgress() && this.$_progress && (this.$_progress.classList.add("is-hidden"), window.clearInterval(this._progress_interval), (this._progress_interval = null), (this._progress_value = 0));
                                },
                            },
                            {
                                key: "_setTheme",
                                value: function () {
                                    var t = this.$_element.dataset.theme || this.options.theme || "";
                                    t.length && t !== e._CONSTANTS.THEME && this.$_element.classList.add(t + "-theme");
                                },
                            },
                        ],
                        [
                            {
                                key: "create",
                                value: function (t) {
                                    return new e(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e._CONSTANTS.TYPES.ERROR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
                                },
                            },
                            {
                                key: "success",
                                value: function (t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return new e(t, e._CONSTANTS.TYPES.SUCCESS, n);
                                },
                            },
                            {
                                key: "warning",
                                value: function (t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return new e(t, e._CONSTANTS.TYPES.WARNING, n);
                                },
                            },
                            {
                                key: "error",
                                value: function (t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return new e(t, e._CONSTANTS.TYPES.ERROR, n);
                                },
                            },
                            {
                                key: "info",
                                value: function (t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return new e(t, e._CONSTANTS.TYPES.INFO, n);
                                },
                            },
                            {
                                key: "addCustomVerbs",
                                value: function () {
                                    for (var t = arguments.length, n = Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                                    n &&
                                        n.length &&
                                        n.forEach(function (t) {
                                            e[t] ||
                                                (e[t] = function (n) {
                                                    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                    return new e(n, t, s);
                                                });
                                        });
                                },
                            },
                        ]
                    ),
                    e
                );
            })();
        t.a = r;
    },
    function (e, t) {},
]);
