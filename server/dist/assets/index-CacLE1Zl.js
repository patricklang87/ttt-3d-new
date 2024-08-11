function Hd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function ja(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fa = { exports: {} },
  Vi = {},
  Ua = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Er = Symbol.for("react.element"),
  Wd = Symbol.for("react.portal"),
  Qd = Symbol.for("react.fragment"),
  Kd = Symbol.for("react.strict_mode"),
  qd = Symbol.for("react.profiler"),
  Yd = Symbol.for("react.provider"),
  Xd = Symbol.for("react.context"),
  Gd = Symbol.for("react.forward_ref"),
  Jd = Symbol.for("react.suspense"),
  Zd = Symbol.for("react.memo"),
  bd = Symbol.for("react.lazy"),
  ru = Symbol.iterator;
function ep(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ru && e[ru]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $a = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Va = Object.assign,
  Ha = {};
function xn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ha),
    (this.updater = n || $a);
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wa() {}
Wa.prototype = xn.prototype;
function Jl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ha),
    (this.updater = n || $a);
}
var Zl = (Jl.prototype = new Wa());
Zl.constructor = Jl;
Va(Zl, xn.prototype);
Zl.isPureReactComponent = !0;
var iu = Array.isArray,
  Qa = Object.prototype.hasOwnProperty,
  bl = { current: null },
  Ka = { key: !0, ref: !0, __self: !0, __source: !0 };
function qa(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Qa.call(t, r) && !Ka.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Er,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: bl.current,
  };
}
function tp(e, t) {
  return {
    $$typeof: Er,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function es(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Er;
}
function np(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ou = /\/+/g;
function ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? np("" + e.key)
    : t.toString(36);
}
function Zr(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Er:
          case Wd:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + ho(l, 0) : r),
      iu(i)
        ? ((n = ""),
          e != null && (n = e.replace(ou, "$&/") + "/"),
          Zr(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (es(i) &&
            (i = tp(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ou, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), iu(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + ho(o, s);
      l += Zr(o, t, n, u, i);
    }
  else if (((u = ep(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + ho(o, s++)), (l += Zr(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Or(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Zr(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function rp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  br = { transition: null },
  ip = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: br,
    ReactCurrentOwner: bl,
  };
function Ya() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: Or,
  forEach: function (e, t, n) {
    Or(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Or(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Or(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!es(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = xn;
z.Fragment = Qd;
z.Profiler = qd;
z.PureComponent = Jl;
z.StrictMode = Kd;
z.Suspense = Jd;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip;
z.act = Ya;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Va({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = bl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Qa.call(t, u) &&
        !Ka.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Er, type: e.type, key: i, ref: o, props: r, _owner: l };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Xd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yd, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = qa;
z.createFactory = function (e) {
  var t = qa.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Gd, render: e };
};
z.isValidElement = es;
z.lazy = function (e) {
  return { $$typeof: bd, _payload: { _status: -1, _result: e }, _init: rp };
};
z.memo = function (e, t) {
  return { $$typeof: Zd, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = br.transition;
  br.transition = {};
  try {
    e();
  } finally {
    br.transition = t;
  }
};
z.unstable_act = Ya;
z.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
z.useContext = function (e) {
  return de.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
z.useId = function () {
  return de.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return de.current.useRef(e);
};
z.useState = function (e) {
  return de.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return de.current.useTransition();
};
z.version = "18.3.1";
Ua.exports = z;
var re = Ua.exports;
const Hi = ja(re),
  lu = Hd({ __proto__: null, default: Hi }, [re]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var op = re,
  lp = Symbol.for("react.element"),
  sp = Symbol.for("react.fragment"),
  up = Object.prototype.hasOwnProperty,
  ap = op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xa(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) up.call(t, r) && !cp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: lp,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: ap.current,
  };
}
Vi.Fragment = sp;
Vi.jsx = Xa;
Vi.jsxs = Xa;
Fa.exports = Vi;
var T = Fa.exports,
  Ga = { exports: {} },
  Te = {},
  Ja = { exports: {} },
  Za = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, P) {
    var O = N.length;
    N.push(P);
    e: for (; 0 < O; ) {
      var Q = (O - 1) >>> 1,
        Z = N[Q];
      if (0 < i(Z, P)) (N[Q] = P), (N[O] = Z), (O = Q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var P = N[0],
      O = N.pop();
    if (O !== P) {
      N[0] = O;
      e: for (var Q = 0, Z = N.length, Rr = Z >>> 1; Q < Rr; ) {
        var Lt = 2 * (Q + 1) - 1,
          po = N[Lt],
          zt = Lt + 1,
          Pr = N[zt];
        if (0 > i(po, O))
          zt < Z && 0 > i(Pr, po)
            ? ((N[Q] = Pr), (N[zt] = O), (Q = zt))
            : ((N[Q] = po), (N[Lt] = O), (Q = Lt));
        else if (zt < Z && 0 > i(Pr, O)) (N[Q] = Pr), (N[zt] = O), (Q = zt);
        else break e;
      }
    }
    return P;
  }
  function i(N, P) {
    var O = N.sortIndex - P.sortIndex;
    return O !== 0 ? O : N.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    a = [],
    p = 1,
    h = null,
    m = 3,
    v = !1,
    g = !1,
    S = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(N) {
    for (var P = n(a); P !== null; ) {
      if (P.callback === null) r(a);
      else if (P.startTime <= N)
        r(a), (P.sortIndex = P.expirationTime), t(u, P);
      else break;
      P = n(a);
    }
  }
  function y(N) {
    if (((S = !1), f(N), !g))
      if (n(u) !== null) (g = !0), co(k);
      else {
        var P = n(a);
        P !== null && fo(y, P.startTime - N);
      }
  }
  function k(N, P) {
    (g = !1), S && ((S = !1), d(E), (E = -1)), (v = !0);
    var O = m;
    try {
      for (
        f(P), h = n(u);
        h !== null && (!(h.expirationTime > P) || (N && !we()));

      ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Z = Q(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(u) && r(u),
            f(P);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var Rr = !0;
      else {
        var Lt = n(a);
        Lt !== null && fo(y, Lt.startTime - P), (Rr = !1);
      }
      return Rr;
    } finally {
      (h = null), (m = O), (v = !1);
    }
  }
  var C = !1,
    _ = null,
    E = -1,
    F = 5,
    L = -1;
  function we() {
    return !(e.unstable_now() - L < F);
  }
  function Ln() {
    if (_ !== null) {
      var N = e.unstable_now();
      L = N;
      var P = !0;
      try {
        P = _(!0, N);
      } finally {
        P ? zn() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var zn;
  if (typeof c == "function")
    zn = function () {
      c(Ln);
    };
  else if (typeof MessageChannel < "u") {
    var nu = new MessageChannel(),
      Vd = nu.port2;
    (nu.port1.onmessage = Ln),
      (zn = function () {
        Vd.postMessage(null);
      });
  } else
    zn = function () {
      R(Ln, 0);
    };
  function co(N) {
    (_ = N), C || ((C = !0), zn());
  }
  function fo(N, P) {
    E = R(function () {
      N(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), co(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var O = m;
      m = P;
      try {
        return N();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, P) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var O = m;
      m = N;
      try {
        return P();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (N, P, O) {
      var Q = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? Q + O : Q))
          : (O = Q),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = O + Z),
        (N = {
          id: p++,
          callback: P,
          priorityLevel: N,
          startTime: O,
          expirationTime: Z,
          sortIndex: -1,
        }),
        O > Q
          ? ((N.sortIndex = O),
            t(a, N),
            n(u) === null &&
              N === n(a) &&
              (S ? (d(E), (E = -1)) : (S = !0), fo(y, O - Q)))
          : ((N.sortIndex = Z), t(u, N), g || v || ((g = !0), co(k))),
        N
      );
    }),
    (e.unstable_shouldYield = we),
    (e.unstable_wrapCallback = function (N) {
      var P = m;
      return function () {
        var O = m;
        m = P;
        try {
          return N.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    });
})(Za);
Ja.exports = Za;
var fp = Ja.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dp = re,
  Ce = fp;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ba = new Set(),
  rr = {};
function Yt(e, t) {
  vn(e, t), vn(e + "Capture", t);
}
function vn(e, t) {
  for (rr[e] = t, e = 0; e < t.length; e++) ba.add(t[e]);
}
var it = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qo = Object.prototype.hasOwnProperty,
  pp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  su = {},
  uu = {};
function hp(e) {
  return Qo.call(uu, e)
    ? !0
    : Qo.call(su, e)
    ? !1
    : pp.test(e)
    ? (uu[e] = !0)
    : ((su[e] = !0), !1);
}
function mp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function yp(e, t, n, r) {
  if (t === null || typeof t > "u" || mp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ts = /[\-:]([a-z])/g;
function ns(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ts, ns);
    oe[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ts, ns);
    oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ts, ns);
  oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function rs(e, t, n, r) {
  var i = oe.hasOwnProperty(t) ? oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (yp(t, n, i, r) && (n = null),
    r || i === null
      ? hp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var at = dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for("react.element"),
  Zt = Symbol.for("react.portal"),
  bt = Symbol.for("react.fragment"),
  is = Symbol.for("react.strict_mode"),
  Ko = Symbol.for("react.profiler"),
  ec = Symbol.for("react.provider"),
  tc = Symbol.for("react.context"),
  os = Symbol.for("react.forward_ref"),
  qo = Symbol.for("react.suspense"),
  Yo = Symbol.for("react.suspense_list"),
  ls = Symbol.for("react.memo"),
  ft = Symbol.for("react.lazy"),
  nc = Symbol.for("react.offscreen"),
  au = Symbol.iterator;
function An(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (au && e[au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  mo;
function Vn(e) {
  if (mo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mo = (t && t[1]) || "";
    }
  return (
    `
` +
    mo +
    e
  );
}
var yo = !1;
function vo(e, t) {
  if (!e || yo) return "";
  yo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var u =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (yo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vn(e) : "";
}
function vp(e) {
  switch (e.tag) {
    case 5:
      return Vn(e.type);
    case 16:
      return Vn("Lazy");
    case 13:
      return Vn("Suspense");
    case 19:
      return Vn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vo(e.type, !1)), e;
    case 11:
      return (e = vo(e.type.render, !1)), e;
    case 1:
      return (e = vo(e.type, !0)), e;
    default:
      return "";
  }
}
function Xo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bt:
      return "Fragment";
    case Zt:
      return "Portal";
    case Ko:
      return "Profiler";
    case is:
      return "StrictMode";
    case qo:
      return "Suspense";
    case Yo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tc:
        return (e.displayName || "Context") + ".Consumer";
      case ec:
        return (e._context.displayName || "Context") + ".Provider";
      case os:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ls:
        return (
          (t = e.displayName || null), t !== null ? t : Xo(e.type) || "Memo"
        );
      case ft:
        (t = e._payload), (e = e._init);
        try {
          return Xo(e(t));
        } catch {}
    }
  return null;
}
function gp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xo(t);
    case 8:
      return t === is ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function rc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function wp(e) {
  var t = rc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zr(e) {
  e._valueTracker || (e._valueTracker = wp(e));
}
function ic(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = rc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function pi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Go(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function oc(e, t) {
  (t = t.checked), t != null && rs(e, "checked", t, !1);
}
function Jo(e, t) {
  oc(e, t);
  var n = xt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zo(e, t.type, xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function fu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zo(e, t, n) {
  (t !== "number" || pi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hn = Array.isArray;
function fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function bo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function du(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Hn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xt(n) };
}
function lc(e, t) {
  var n = xt(t.value),
    r = xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function el(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ar,
  uc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ar = Ar || document.createElement("div"),
          Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ar.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  kp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yn).forEach(function (e) {
  kp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]);
  });
});
function ac(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
    ? ("" + t).trim()
    : t + "px";
}
function cc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ac(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Sp = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function tl(e, t) {
  if (t) {
    if (Sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function nl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var rl = null;
function ss(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var il = null,
  dn = null,
  pn = null;
function hu(e) {
  if ((e = xr(e))) {
    if (typeof il != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Yi(t)), il(e.stateNode, e.type, t));
  }
}
function fc(e) {
  dn ? (pn ? pn.push(e) : (pn = [e])) : (dn = e);
}
function dc() {
  if (dn) {
    var e = dn,
      t = pn;
    if (((pn = dn = null), hu(e), t)) for (e = 0; e < t.length; e++) hu(t[e]);
  }
}
function pc(e, t) {
  return e(t);
}
function hc() {}
var go = !1;
function mc(e, t, n) {
  if (go) return e(t, n);
  go = !0;
  try {
    return pc(e, t, n);
  } finally {
    (go = !1), (dn !== null || pn !== null) && (hc(), dc());
  }
}
function or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Yi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var ol = !1;
if (it)
  try {
    var Dn = {};
    Object.defineProperty(Dn, "passive", {
      get: function () {
        ol = !0;
      },
    }),
      window.addEventListener("test", Dn, Dn),
      window.removeEventListener("test", Dn, Dn);
  } catch {
    ol = !1;
  }
function Ep(e, t, n, r, i, o, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var Xn = !1,
  hi = null,
  mi = !1,
  ll = null,
  _p = {
    onError: function (e) {
      (Xn = !0), (hi = e);
    },
  };
function Cp(e, t, n, r, i, o, l, s, u) {
  (Xn = !1), (hi = null), Ep.apply(_p, arguments);
}
function xp(e, t, n, r, i, o, l, s, u) {
  if ((Cp.apply(this, arguments), Xn)) {
    if (Xn) {
      var a = hi;
      (Xn = !1), (hi = null);
    } else throw Error(w(198));
    mi || ((mi = !0), (ll = a));
  }
}
function Xt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function yc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mu(e) {
  if (Xt(e) !== e) throw Error(w(188));
}
function Np(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return mu(i), e;
        if (o === r) return mu(i), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function vc(e) {
  return (e = Np(e)), e !== null ? gc(e) : null;
}
function gc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wc = Ce.unstable_scheduleCallback,
  yu = Ce.unstable_cancelCallback,
  Tp = Ce.unstable_shouldYield,
  Rp = Ce.unstable_requestPaint,
  K = Ce.unstable_now,
  Pp = Ce.unstable_getCurrentPriorityLevel,
  us = Ce.unstable_ImmediatePriority,
  kc = Ce.unstable_UserBlockingPriority,
  yi = Ce.unstable_NormalPriority,
  Op = Ce.unstable_LowPriority,
  Sc = Ce.unstable_IdlePriority,
  Wi = null,
  Xe = null;
function Lp(e) {
  if (Xe && typeof Xe.onCommitFiberRoot == "function")
    try {
      Xe.onCommitFiberRoot(Wi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : Dp,
  zp = Math.log,
  Ap = Math.LN2;
function Dp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zp(e) / Ap) | 0)) | 0;
}
var Dr = 64,
  Mr = 4194304;
function Wn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function vi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = Wn(s)) : ((o &= l), o !== 0 && (r = Wn(o)));
  } else (l = n & ~i), l !== 0 ? (r = Wn(l)) : o !== 0 && (r = Wn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ve(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Mp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ip(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Ve(o),
      s = 1 << l,
      u = i[l];
    u === -1
      ? (!(s & n) || s & r) && (i[l] = Mp(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function sl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ec() {
  var e = Dr;
  return (Dr <<= 1), !(Dr & 4194240) && (Dr = 64), e;
}
function wo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _r(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ve(t)),
    (e[t] = n);
}
function Bp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ve(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function as(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var M = 0;
function _c(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Cc,
  cs,
  xc,
  Nc,
  Tc,
  ul = !1,
  Ir = [],
  vt = null,
  gt = null,
  wt = null,
  lr = new Map(),
  sr = new Map(),
  pt = [],
  jp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function vu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vt = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      wt = null;
      break;
    case "pointerover":
    case "pointerout":
      lr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sr.delete(t.pointerId);
  }
}
function Mn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = xr(t)), t !== null && cs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Fp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (vt = Mn(vt, e, t, n, r, i)), !0;
    case "dragenter":
      return (gt = Mn(gt, e, t, n, r, i)), !0;
    case "mouseover":
      return (wt = Mn(wt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return lr.set(o, Mn(lr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), sr.set(o, Mn(sr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Rc(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yc(n)), t !== null)) {
          (e.blockedOn = t),
            Tc(e.priority, function () {
              xc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ei(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (rl = r), n.target.dispatchEvent(r), (rl = null);
    } else return (t = xr(n)), t !== null && cs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function gu(e, t, n) {
  ei(e) && n.delete(t);
}
function Up() {
  (ul = !1),
    vt !== null && ei(vt) && (vt = null),
    gt !== null && ei(gt) && (gt = null),
    wt !== null && ei(wt) && (wt = null),
    lr.forEach(gu),
    sr.forEach(gu);
}
function In(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ul ||
      ((ul = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Up)));
}
function ur(e) {
  function t(i) {
    return In(i, e);
  }
  if (0 < Ir.length) {
    In(Ir[0], e);
    for (var n = 1; n < Ir.length; n++) {
      var r = Ir[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vt !== null && In(vt, e),
      gt !== null && In(gt, e),
      wt !== null && In(wt, e),
      lr.forEach(t),
      sr.forEach(t),
      n = 0;
    n < pt.length;
    n++
  )
    (r = pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pt.length && ((n = pt[0]), n.blockedOn === null); )
    Rc(n), n.blockedOn === null && pt.shift();
}
var hn = at.ReactCurrentBatchConfig,
  gi = !0;
function $p(e, t, n, r) {
  var i = M,
    o = hn.transition;
  hn.transition = null;
  try {
    (M = 1), fs(e, t, n, r);
  } finally {
    (M = i), (hn.transition = o);
  }
}
function Vp(e, t, n, r) {
  var i = M,
    o = hn.transition;
  hn.transition = null;
  try {
    (M = 4), fs(e, t, n, r);
  } finally {
    (M = i), (hn.transition = o);
  }
}
function fs(e, t, n, r) {
  if (gi) {
    var i = al(e, t, n, r);
    if (i === null) Po(e, t, r, wi, n), vu(e, r);
    else if (Fp(i, e, t, n, r)) r.stopPropagation();
    else if ((vu(e, r), t & 4 && -1 < jp.indexOf(e))) {
      for (; i !== null; ) {
        var o = xr(i);
        if (
          (o !== null && Cc(o),
          (o = al(e, t, n, r)),
          o === null && Po(e, t, r, wi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Po(e, t, r, null, n);
  }
}
var wi = null;
function al(e, t, n, r) {
  if (((wi = null), (e = ss(r)), (e = It(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = yc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (wi = e), null;
}
function Pc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Pp()) {
        case us:
          return 1;
        case kc:
          return 4;
        case yi:
        case Op:
          return 16;
        case Sc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mt = null,
  ds = null,
  ti = null;
function Oc() {
  if (ti) return ti;
  var e,
    t = ds,
    n = t.length,
    r,
    i = "value" in mt ? mt.value : mt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (ti = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ni(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Br() {
  return !0;
}
function wu() {
  return !1;
}
function Re(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Br
        : wu),
      (this.isPropagationStopped = wu),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Br));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Br));
      },
      persist: function () {},
      isPersistent: Br,
    }),
    t
  );
}
var Nn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ps = Re(Nn),
  Cr = H({}, Nn, { view: 0, detail: 0 }),
  Hp = Re(Cr),
  ko,
  So,
  Bn,
  Qi = H({}, Cr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bn &&
            (Bn && e.type === "mousemove"
              ? ((ko = e.screenX - Bn.screenX), (So = e.screenY - Bn.screenY))
              : (So = ko = 0),
            (Bn = e)),
          ko);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : So;
    },
  }),
  ku = Re(Qi),
  Wp = H({}, Qi, { dataTransfer: 0 }),
  Qp = Re(Wp),
  Kp = H({}, Cr, { relatedTarget: 0 }),
  Eo = Re(Kp),
  qp = H({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yp = Re(qp),
  Xp = H({}, Nn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Gp = Re(Xp),
  Jp = H({}, Nn, { data: 0 }),
  Su = Re(Jp),
  Zp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  bp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  eh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function th(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = eh[e]) ? !!t[e] : !1;
}
function hs() {
  return th;
}
var nh = H({}, Cr, {
    key: function (e) {
      if (e.key) {
        var t = Zp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? bp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hs,
    charCode: function (e) {
      return e.type === "keypress" ? ni(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ni(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  rh = Re(nh),
  ih = H({}, Qi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Eu = Re(ih),
  oh = H({}, Cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hs,
  }),
  lh = Re(oh),
  sh = H({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uh = Re(sh),
  ah = H({}, Qi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ch = Re(ah),
  fh = [9, 13, 27, 32],
  ms = it && "CompositionEvent" in window,
  Gn = null;
it && "documentMode" in document && (Gn = document.documentMode);
var dh = it && "TextEvent" in window && !Gn,
  Lc = it && (!ms || (Gn && 8 < Gn && 11 >= Gn)),
  _u = " ",
  Cu = !1;
function zc(e, t) {
  switch (e) {
    case "keyup":
      return fh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ac(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function ph(e, t) {
  switch (e) {
    case "compositionend":
      return Ac(t);
    case "keypress":
      return t.which !== 32 ? null : ((Cu = !0), _u);
    case "textInput":
      return (e = t.data), e === _u && Cu ? null : e;
    default:
      return null;
  }
}
function hh(e, t) {
  if (en)
    return e === "compositionend" || (!ms && zc(e, t))
      ? ((e = Oc()), (ti = ds = mt = null), (en = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Lc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mh[e.type] : t === "textarea";
}
function Dc(e, t, n, r) {
  fc(r),
    (t = ki(t, "onChange")),
    0 < t.length &&
      ((n = new ps("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Jn = null,
  ar = null;
function yh(e) {
  Qc(e, 0);
}
function Ki(e) {
  var t = rn(e);
  if (ic(t)) return e;
}
function vh(e, t) {
  if (e === "change") return t;
}
var Mc = !1;
if (it) {
  var _o;
  if (it) {
    var Co = "oninput" in document;
    if (!Co) {
      var Nu = document.createElement("div");
      Nu.setAttribute("oninput", "return;"),
        (Co = typeof Nu.oninput == "function");
    }
    _o = Co;
  } else _o = !1;
  Mc = _o && (!document.documentMode || 9 < document.documentMode);
}
function Tu() {
  Jn && (Jn.detachEvent("onpropertychange", Ic), (ar = Jn = null));
}
function Ic(e) {
  if (e.propertyName === "value" && Ki(ar)) {
    var t = [];
    Dc(t, ar, e, ss(e)), mc(yh, t);
  }
}
function gh(e, t, n) {
  e === "focusin"
    ? (Tu(), (Jn = t), (ar = n), Jn.attachEvent("onpropertychange", Ic))
    : e === "focusout" && Tu();
}
function wh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ki(ar);
}
function kh(e, t) {
  if (e === "click") return Ki(t);
}
function Sh(e, t) {
  if (e === "input" || e === "change") return Ki(t);
}
function Eh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qe = typeof Object.is == "function" ? Object.is : Eh;
function cr(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Qo.call(t, i) || !Qe(e[i], t[i])) return !1;
  }
  return !0;
}
function Ru(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Pu(e, t) {
  var n = Ru(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ru(n);
  }
}
function Bc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Bc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jc() {
  for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = pi(e.document);
  }
  return t;
}
function ys(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function _h(e) {
  var t = jc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Bc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ys(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Pu(n, o));
        var l = Pu(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ch = it && "documentMode" in document && 11 >= document.documentMode,
  tn = null,
  cl = null,
  Zn = null,
  fl = !1;
function Ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fl ||
    tn == null ||
    tn !== pi(r) ||
    ((r = tn),
    "selectionStart" in r && ys(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zn && cr(Zn, r)) ||
      ((Zn = r),
      (r = ki(cl, "onSelect")),
      0 < r.length &&
        ((t = new ps("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tn))));
}
function jr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nn = {
    animationend: jr("Animation", "AnimationEnd"),
    animationiteration: jr("Animation", "AnimationIteration"),
    animationstart: jr("Animation", "AnimationStart"),
    transitionend: jr("Transition", "TransitionEnd"),
  },
  xo = {},
  Fc = {};
it &&
  ((Fc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nn.animationend.animation,
    delete nn.animationiteration.animation,
    delete nn.animationstart.animation),
  "TransitionEvent" in window || delete nn.transitionend.transition);
function qi(e) {
  if (xo[e]) return xo[e];
  if (!nn[e]) return e;
  var t = nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fc) return (xo[e] = t[n]);
  return e;
}
var Uc = qi("animationend"),
  $c = qi("animationiteration"),
  Vc = qi("animationstart"),
  Hc = qi("transitionend"),
  Wc = new Map(),
  Lu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Rt(e, t) {
  Wc.set(e, t), Yt(t, [e]);
}
for (var No = 0; No < Lu.length; No++) {
  var To = Lu[No],
    xh = To.toLowerCase(),
    Nh = To[0].toUpperCase() + To.slice(1);
  Rt(xh, "on" + Nh);
}
Rt(Uc, "onAnimationEnd");
Rt($c, "onAnimationIteration");
Rt(Vc, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(Hc, "onTransitionEnd");
vn("onMouseEnter", ["mouseout", "mouseover"]);
vn("onMouseLeave", ["mouseout", "mouseover"]);
vn("onPointerEnter", ["pointerout", "pointerover"]);
vn("onPointerLeave", ["pointerout", "pointerover"]);
Yt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Th = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
function zu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), xp(r, t, void 0, e), (e.currentTarget = null);
}
function Qc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== o && i.isPropagationStopped())) break e;
          zu(i, s, a), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          zu(i, s, a), (o = u);
        }
    }
  }
  if (mi) throw ((e = ll), (mi = !1), (ll = null), e);
}
function B(e, t) {
  var n = t[yl];
  n === void 0 && (n = t[yl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Kc(t, e, 2, !1), n.add(r));
}
function Ro(e, t, n) {
  var r = 0;
  t && (r |= 4), Kc(n, e, r, t);
}
var Fr = "_reactListening" + Math.random().toString(36).slice(2);
function fr(e) {
  if (!e[Fr]) {
    (e[Fr] = !0),
      ba.forEach(function (n) {
        n !== "selectionchange" && (Th.has(n) || Ro(n, !1, e), Ro(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fr] || ((t[Fr] = !0), Ro("selectionchange", !1, t));
  }
}
function Kc(e, t, n, r) {
  switch (Pc(t)) {
    case 1:
      var i = $p;
      break;
    case 4:
      i = Vp;
      break;
    default:
      i = fs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Po(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = It(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  mc(function () {
    var a = o,
      p = ss(n),
      h = [];
    e: {
      var m = Wc.get(e);
      if (m !== void 0) {
        var v = ps,
          g = e;
        switch (e) {
          case "keypress":
            if (ni(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = rh;
            break;
          case "focusin":
            (g = "focus"), (v = Eo);
            break;
          case "focusout":
            (g = "blur"), (v = Eo);
            break;
          case "beforeblur":
          case "afterblur":
            v = Eo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = ku;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Qp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = lh;
            break;
          case Uc:
          case $c:
          case Vc:
            v = Yp;
            break;
          case Hc:
            v = uh;
            break;
          case "scroll":
            v = Hp;
            break;
          case "wheel":
            v = ch;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Gp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Eu;
        }
        var S = (t & 4) !== 0,
          R = !S && e === "scroll",
          d = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var y = f.stateNode;
          if (
            (f.tag === 5 &&
              y !== null &&
              ((f = y),
              d !== null && ((y = or(c, d)), y != null && S.push(dr(c, y, f)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((m = new v(m, g, null, n, p)), h.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== rl &&
            (g = n.relatedTarget || n.fromElement) &&
            (It(g) || g[ot]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = a),
              (g = g ? It(g) : null),
              g !== null &&
                ((R = Xt(g)), g !== R || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = a)),
          v !== g)
        ) {
          if (
            ((S = ku),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Eu),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (R = v == null ? m : rn(v)),
            (f = g == null ? m : rn(g)),
            (m = new S(y, c + "leave", v, n, p)),
            (m.target = R),
            (m.relatedTarget = f),
            (y = null),
            It(p) === a &&
              ((S = new S(d, c + "enter", g, n, p)),
              (S.target = f),
              (S.relatedTarget = R),
              (y = S)),
            (R = y),
            v && g)
          )
            t: {
              for (S = v, d = g, c = 0, f = S; f; f = Gt(f)) c++;
              for (f = 0, y = d; y; y = Gt(y)) f++;
              for (; 0 < c - f; ) (S = Gt(S)), c--;
              for (; 0 < f - c; ) (d = Gt(d)), f--;
              for (; c--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = Gt(S)), (d = Gt(d));
              }
              S = null;
            }
          else S = null;
          v !== null && Au(h, m, v, S, !1),
            g !== null && R !== null && Au(h, R, g, S, !0);
        }
      }
      e: {
        if (
          ((m = a ? rn(a) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var k = vh;
        else if (xu(m))
          if (Mc) k = Sh;
          else {
            k = wh;
            var C = gh;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = kh);
        if (k && (k = k(e, a))) {
          Dc(h, k, n, p);
          break e;
        }
        C && C(e, m, a),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            Zo(m, "number", m.value);
      }
      switch (((C = a ? rn(a) : window), e)) {
        case "focusin":
          (xu(C) || C.contentEditable === "true") &&
            ((tn = C), (cl = a), (Zn = null));
          break;
        case "focusout":
          Zn = cl = tn = null;
          break;
        case "mousedown":
          fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fl = !1), Ou(h, n, p);
          break;
        case "selectionchange":
          if (Ch) break;
        case "keydown":
        case "keyup":
          Ou(h, n, p);
      }
      var _;
      if (ms)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        en
          ? zc(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Lc &&
          n.locale !== "ko" &&
          (en || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && en && (_ = Oc())
            : ((mt = p),
              (ds = "value" in mt ? mt.value : mt.textContent),
              (en = !0))),
        (C = ki(a, E)),
        0 < C.length &&
          ((E = new Su(E, e, null, n, p)),
          h.push({ event: E, listeners: C }),
          _ ? (E.data = _) : ((_ = Ac(n)), _ !== null && (E.data = _)))),
        (_ = dh ? ph(e, n) : hh(e, n)) &&
          ((a = ki(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new Su("onBeforeInput", "beforeinput", null, n, p)),
            h.push({ event: p, listeners: a }),
            (p.data = _)));
    }
    Qc(h, t);
  });
}
function dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = or(e, n)),
      o != null && r.unshift(dr(e, o, i)),
      (o = or(e, t)),
      o != null && r.push(dr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Gt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Au(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      i
        ? ((u = or(n, o)), u != null && l.unshift(dr(n, u, s)))
        : i || ((u = or(n, o)), u != null && l.push(dr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Rh = /\r\n?/g,
  Ph = /\u0000|\uFFFD/g;
function Du(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rh,
      `
`
    )
    .replace(Ph, "");
}
function Ur(e, t, n) {
  if (((t = Du(t)), Du(e) !== t && n)) throw Error(w(425));
}
function Si() {}
var dl = null,
  pl = null;
function hl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ml = typeof setTimeout == "function" ? setTimeout : void 0,
  Oh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Mu = typeof Promise == "function" ? Promise : void 0,
  Lh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Mu < "u"
      ? function (e) {
          return Mu.resolve(null).then(e).catch(zh);
        }
      : ml;
function zh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Oo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ur(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ur(t);
}
function kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Iu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tn = Math.random().toString(36).slice(2),
  Ye = "__reactFiber$" + Tn,
  pr = "__reactProps$" + Tn,
  ot = "__reactContainer$" + Tn,
  yl = "__reactEvents$" + Tn,
  Ah = "__reactListeners$" + Tn,
  Dh = "__reactHandles$" + Tn;
function It(e) {
  var t = e[Ye];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ot] || n[Ye])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Iu(e); e !== null; ) {
          if ((n = e[Ye])) return n;
          e = Iu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function xr(e) {
  return (
    (e = e[Ye] || e[ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Yi(e) {
  return e[pr] || null;
}
var vl = [],
  on = -1;
function Pt(e) {
  return { current: e };
}
function j(e) {
  0 > on || ((e.current = vl[on]), (vl[on] = null), on--);
}
function I(e, t) {
  on++, (vl[on] = e.current), (e.current = t);
}
var Nt = {},
  ae = Pt(Nt),
  ye = Pt(!1),
  $t = Nt;
function gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Ei() {
  j(ye), j(ae);
}
function Bu(e, t, n) {
  if (ae.current !== Nt) throw Error(w(168));
  I(ae, t), I(ye, n);
}
function qc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(w(108, gp(e) || "Unknown", i));
  return H({}, n, r);
}
function _i(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nt),
    ($t = ae.current),
    I(ae, e),
    I(ye, ye.current),
    !0
  );
}
function ju(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = qc(e, t, $t)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      j(ye),
      j(ae),
      I(ae, e))
    : j(ye),
    I(ye, n);
}
var et = null,
  Xi = !1,
  Lo = !1;
function Yc(e) {
  et === null ? (et = [e]) : et.push(e);
}
function Mh(e) {
  (Xi = !0), Yc(e);
}
function Ot() {
  if (!Lo && et !== null) {
    Lo = !0;
    var e = 0,
      t = M;
    try {
      var n = et;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (et = null), (Xi = !1);
    } catch (i) {
      throw (et !== null && (et = et.slice(e + 1)), wc(us, Ot), i);
    } finally {
      (M = t), (Lo = !1);
    }
  }
  return null;
}
var ln = [],
  sn = 0,
  Ci = null,
  xi = 0,
  Pe = [],
  Oe = 0,
  Vt = null,
  tt = 1,
  nt = "";
function At(e, t) {
  (ln[sn++] = xi), (ln[sn++] = Ci), (Ci = e), (xi = t);
}
function Xc(e, t, n) {
  (Pe[Oe++] = tt), (Pe[Oe++] = nt), (Pe[Oe++] = Vt), (Vt = e);
  var r = tt;
  e = nt;
  var i = 32 - Ve(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ve(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (tt = (1 << (32 - Ve(t) + i)) | (n << i) | r),
      (nt = o + e);
  } else (tt = (1 << o) | (n << i) | r), (nt = e);
}
function vs(e) {
  e.return !== null && (At(e, 1), Xc(e, 1, 0));
}
function gs(e) {
  for (; e === Ci; )
    (Ci = ln[--sn]), (ln[sn] = null), (xi = ln[--sn]), (ln[sn] = null);
  for (; e === Vt; )
    (Vt = Pe[--Oe]),
      (Pe[Oe] = null),
      (nt = Pe[--Oe]),
      (Pe[Oe] = null),
      (tt = Pe[--Oe]),
      (Pe[Oe] = null);
}
var _e = null,
  Se = null,
  U = !1,
  Ue = null;
function Gc(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_e = e), (Se = kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Vt !== null ? { id: tt, overflow: nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function gl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wl(e) {
  if (U) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Fu(e, t)) {
        if (gl(e)) throw Error(w(418));
        t = kt(n.nextSibling);
        var r = _e;
        t && Fu(e, t)
          ? Gc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (_e = e));
      }
    } else {
      if (gl(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (_e = e);
    }
  }
}
function Uu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function $r(e) {
  if (e !== _e) return !1;
  if (!U) return Uu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hl(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (gl(e)) throw (Jc(), Error(w(418)));
    for (; t; ) Gc(e, t), (t = kt(t.nextSibling));
  }
  if ((Uu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = _e ? kt(e.stateNode.nextSibling) : null;
  return !0;
}
function Jc() {
  for (var e = Se; e; ) e = kt(e.nextSibling);
}
function wn() {
  (Se = _e = null), (U = !1);
}
function ws(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
var Ih = at.ReactCurrentBatchConfig;
function jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function $u(e) {
  var t = e._init;
  return t(e._payload);
}
function Zc(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function i(d, c) {
    return (d = Ct(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, f, y) {
    return c === null || c.tag !== 6
      ? ((c = jo(f, d.mode, y)), (c.return = d), c)
      : ((c = i(c, f)), (c.return = d), c);
  }
  function u(d, c, f, y) {
    var k = f.type;
    return k === bt
      ? p(d, c, f.props.children, y, f.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === ft &&
            $u(k) === c.type))
      ? ((y = i(c, f.props)), (y.ref = jn(d, c, f)), (y.return = d), y)
      : ((y = ai(f.type, f.key, f.props, null, d.mode, y)),
        (y.ref = jn(d, c, f)),
        (y.return = d),
        y);
  }
  function a(d, c, f, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = Fo(f, d.mode, y)), (c.return = d), c)
      : ((c = i(c, f.children || [])), (c.return = d), c);
  }
  function p(d, c, f, y, k) {
    return c === null || c.tag !== 7
      ? ((c = Ut(f, d.mode, y, k)), (c.return = d), c)
      : ((c = i(c, f)), (c.return = d), c);
  }
  function h(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = jo("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Lr:
          return (
            (f = ai(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = jn(d, null, c)),
            (f.return = d),
            f
          );
        case Zt:
          return (c = Fo(c, d.mode, f)), (c.return = d), c;
        case ft:
          var y = c._init;
          return h(d, y(c._payload), f);
      }
      if (Hn(c) || An(c))
        return (c = Ut(c, d.mode, f, null)), (c.return = d), c;
      Vr(d, c);
    }
    return null;
  }
  function m(d, c, f, y) {
    var k = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return k !== null ? null : s(d, c, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Lr:
          return f.key === k ? u(d, c, f, y) : null;
        case Zt:
          return f.key === k ? a(d, c, f, y) : null;
        case ft:
          return (k = f._init), m(d, c, k(f._payload), y);
      }
      if (Hn(f) || An(f)) return k !== null ? null : p(d, c, f, y, null);
      Vr(d, f);
    }
    return null;
  }
  function v(d, c, f, y, k) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (d = d.get(f) || null), s(c, d, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Lr:
          return (d = d.get(y.key === null ? f : y.key) || null), u(c, d, y, k);
        case Zt:
          return (d = d.get(y.key === null ? f : y.key) || null), a(c, d, y, k);
        case ft:
          var C = y._init;
          return v(d, c, f, C(y._payload), k);
      }
      if (Hn(y) || An(y)) return (d = d.get(f) || null), p(c, d, y, k, null);
      Vr(c, y);
    }
    return null;
  }
  function g(d, c, f, y) {
    for (
      var k = null, C = null, _ = c, E = (c = 0), F = null;
      _ !== null && E < f.length;
      E++
    ) {
      _.index > E ? ((F = _), (_ = null)) : (F = _.sibling);
      var L = m(d, _, f[E], y);
      if (L === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && L.alternate === null && t(d, _),
        (c = o(L, c, E)),
        C === null ? (k = L) : (C.sibling = L),
        (C = L),
        (_ = F);
    }
    if (E === f.length) return n(d, _), U && At(d, E), k;
    if (_ === null) {
      for (; E < f.length; E++)
        (_ = h(d, f[E], y)),
          _ !== null &&
            ((c = o(_, c, E)), C === null ? (k = _) : (C.sibling = _), (C = _));
      return U && At(d, E), k;
    }
    for (_ = r(d, _); E < f.length; E++)
      (F = v(_, d, E, f[E], y)),
        F !== null &&
          (e && F.alternate !== null && _.delete(F.key === null ? E : F.key),
          (c = o(F, c, E)),
          C === null ? (k = F) : (C.sibling = F),
          (C = F));
    return (
      e &&
        _.forEach(function (we) {
          return t(d, we);
        }),
      U && At(d, E),
      k
    );
  }
  function S(d, c, f, y) {
    var k = An(f);
    if (typeof k != "function") throw Error(w(150));
    if (((f = k.call(f)), f == null)) throw Error(w(151));
    for (
      var C = (k = null), _ = c, E = (c = 0), F = null, L = f.next();
      _ !== null && !L.done;
      E++, L = f.next()
    ) {
      _.index > E ? ((F = _), (_ = null)) : (F = _.sibling);
      var we = m(d, _, L.value, y);
      if (we === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && we.alternate === null && t(d, _),
        (c = o(we, c, E)),
        C === null ? (k = we) : (C.sibling = we),
        (C = we),
        (_ = F);
    }
    if (L.done) return n(d, _), U && At(d, E), k;
    if (_ === null) {
      for (; !L.done; E++, L = f.next())
        (L = h(d, L.value, y)),
          L !== null &&
            ((c = o(L, c, E)), C === null ? (k = L) : (C.sibling = L), (C = L));
      return U && At(d, E), k;
    }
    for (_ = r(d, _); !L.done; E++, L = f.next())
      (L = v(_, d, E, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? E : L.key),
          (c = o(L, c, E)),
          C === null ? (k = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        _.forEach(function (Ln) {
          return t(d, Ln);
        }),
      U && At(d, E),
      k
    );
  }
  function R(d, c, f, y) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === bt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Lr:
          e: {
            for (var k = f.key, C = c; C !== null; ) {
              if (C.key === k) {
                if (((k = f.type), k === bt)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (c = i(C, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === ft &&
                    $u(k) === C.type)
                ) {
                  n(d, C.sibling),
                    (c = i(C, f.props)),
                    (c.ref = jn(d, C, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            f.type === bt
              ? ((c = Ut(f.props.children, d.mode, y, f.key)),
                (c.return = d),
                (d = c))
              : ((y = ai(f.type, f.key, f.props, null, d.mode, y)),
                (y.ref = jn(d, c, f)),
                (y.return = d),
                (d = y));
          }
          return l(d);
        case Zt:
          e: {
            for (C = f.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = i(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = Fo(f, d.mode, y)), (c.return = d), (d = c);
          }
          return l(d);
        case ft:
          return (C = f._init), R(d, c, C(f._payload), y);
      }
      if (Hn(f)) return g(d, c, f, y);
      if (An(f)) return S(d, c, f, y);
      Vr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = i(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = jo(f, d.mode, y)), (c.return = d), (d = c)),
        l(d))
      : n(d, c);
  }
  return R;
}
var kn = Zc(!0),
  bc = Zc(!1),
  Ni = Pt(null),
  Ti = null,
  un = null,
  ks = null;
function Ss() {
  ks = un = Ti = null;
}
function Es(e) {
  var t = Ni.current;
  j(Ni), (e._currentValue = t);
}
function kl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mn(e, t) {
  (Ti = e),
    (ks = un = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (ks !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), un === null)) {
      if (Ti === null) throw Error(w(308));
      (un = e), (Ti.dependencies = { lanes: 0, firstContext: e });
    } else un = un.next = e;
  return t;
}
var Bt = null;
function _s(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function ef(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), _s(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    lt(e, r)
  );
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var dt = !1;
function Cs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function tf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function St(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      lt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), _s(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    lt(e, n)
  );
}
function ri(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), as(e, n);
  }
}
function Vu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ri(e, t, n, r) {
  var i = e.updateQueue;
  dt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), l === null ? (o = a) : (l.next = a), (l = u);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (s = p.lastBaseUpdate),
      s !== l &&
        (s === null ? (p.firstBaseUpdate = a) : (s.next = a),
        (p.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = i.baseState;
    (l = 0), (p = a = u = null), (s = o);
    do {
      var m = s.lane,
        v = s.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            S = s;
          switch (((m = t), (v = n), S.tag)) {
            case 1:
              if (((g = S.payload), typeof g == "function")) {
                h = g.call(v, h, m);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = S.payload),
                (m = typeof g == "function" ? g.call(v, h, m) : g),
                m == null)
              )
                break e;
              h = H({}, h, m);
              break e;
            case 2:
              dt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [s]) : m.push(s));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          p === null ? ((a = p = v), (u = h)) : (p = p.next = v),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (u = h),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Wt |= l), (e.lanes = l), (e.memoizedState = h);
  }
}
function Hu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(w(191, i));
        i.call(r);
      }
    }
}
var Nr = {},
  Ge = Pt(Nr),
  hr = Pt(Nr),
  mr = Pt(Nr);
function jt(e) {
  if (e === Nr) throw Error(w(174));
  return e;
}
function xs(e, t) {
  switch ((I(mr, t), I(hr, e), I(Ge, Nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : el(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = el(t, e));
  }
  j(Ge), I(Ge, t);
}
function Sn() {
  j(Ge), j(hr), j(mr);
}
function nf(e) {
  jt(mr.current);
  var t = jt(Ge.current),
    n = el(t, e.type);
  t !== n && (I(hr, e), I(Ge, n));
}
function Ns(e) {
  hr.current === e && (j(Ge), j(hr));
}
var $ = Pt(0);
function Pi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zo = [];
function Ts() {
  for (var e = 0; e < zo.length; e++)
    zo[e]._workInProgressVersionPrimary = null;
  zo.length = 0;
}
var ii = at.ReactCurrentDispatcher,
  Ao = at.ReactCurrentBatchConfig,
  Ht = 0,
  V = null,
  G = null,
  b = null,
  Oi = !1,
  bn = !1,
  yr = 0,
  Bh = 0;
function le() {
  throw Error(w(321));
}
function Rs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function Ps(e, t, n, r, i, o) {
  if (
    ((Ht = o),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ii.current = e === null || e.memoizedState === null ? $h : Vh),
    (e = n(r, i)),
    bn)
  ) {
    o = 0;
    do {
      if (((bn = !1), (yr = 0), 25 <= o)) throw Error(w(301));
      (o += 1),
        (b = G = null),
        (t.updateQueue = null),
        (ii.current = Hh),
        (e = n(r, i));
    } while (bn);
  }
  if (
    ((ii.current = Li),
    (t = G !== null && G.next !== null),
    (Ht = 0),
    (b = G = V = null),
    (Oi = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Os() {
  var e = yr !== 0;
  return (yr = 0), e;
}
function qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (V.memoizedState = b = e) : (b = b.next = e), b;
}
function Me() {
  if (G === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = b === null ? V.memoizedState : b.next;
  if (t !== null) (b = t), (G = e);
  else {
    if (e === null) throw Error(w(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      b === null ? (V.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function vr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Do(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = G,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      a = o;
    do {
      var p = a.lane;
      if ((Ht & p) === p)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = h), (l = r)) : (u = u.next = h),
          (V.lanes |= p),
          (Wt |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (l = r) : (u.next = s),
      Qe(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (V.lanes |= o), (Wt |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Mo(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Qe(o, t.memoizedState) || (me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function rf() {}
function of(e, t) {
  var n = V,
    r = Me(),
    i = t(),
    o = !Qe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (me = !0)),
    (r = r.queue),
    Ls(uf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      gr(9, sf.bind(null, n, r, i, t), void 0, null),
      ee === null)
    )
      throw Error(w(349));
    Ht & 30 || lf(n, t, i);
  }
  return i;
}
function lf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), af(t) && cf(e);
}
function uf(e, t, n) {
  return n(function () {
    af(t) && cf(e);
  });
}
function af(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function cf(e) {
  var t = lt(e, 1);
  t !== null && He(t, e, 1, -1);
}
function Wu(e) {
  var t = qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Uh.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ff() {
  return Me().memoizedState;
}
function oi(e, t, n, r) {
  var i = qe();
  (V.flags |= e),
    (i.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Gi(e, t, n, r) {
  var i = Me();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var l = G.memoizedState;
    if (((o = l.destroy), r !== null && Rs(r, l.deps))) {
      i.memoizedState = gr(t, n, o, r);
      return;
    }
  }
  (V.flags |= e), (i.memoizedState = gr(1 | t, n, o, r));
}
function Qu(e, t) {
  return oi(8390656, 8, e, t);
}
function Ls(e, t) {
  return Gi(2048, 8, e, t);
}
function df(e, t) {
  return Gi(4, 2, e, t);
}
function pf(e, t) {
  return Gi(4, 4, e, t);
}
function hf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Gi(4, 4, hf.bind(null, t, e), n)
  );
}
function zs() {}
function yf(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function vf(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gf(e, t, n) {
  return Ht & 21
    ? (Qe(n, t) || ((n = Ec()), (V.lanes |= n), (Wt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function jh(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ao.transition;
  Ao.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (Ao.transition = r);
  }
}
function wf() {
  return Me().memoizedState;
}
function Fh(e, t, n) {
  var r = _t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kf(e))
  )
    Sf(t, n);
  else if (((n = ef(e, t, n, r)), n !== null)) {
    var i = fe();
    He(n, e, r, i), Ef(n, t, r);
  }
}
function Uh(e, t, n) {
  var r = _t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kf(e)) Sf(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Qe(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), _s(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ef(e, t, i, r)),
      n !== null && ((i = fe()), He(n, e, r, i), Ef(n, t, r));
  }
}
function kf(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Sf(e, t) {
  bn = Oi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ef(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), as(e, n);
  }
}
var Li = {
    readContext: De,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  $h = {
    readContext: De,
    useCallback: function (e, t) {
      return (qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: Qu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        oi(4194308, 4, hf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return oi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return oi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = qe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Fh.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wu,
    useDebugValue: zs,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Wu(!1),
        t = e[0];
      return (e = jh.bind(null, e[1])), (qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        i = qe();
      if (U) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(w(349));
        Ht & 30 || lf(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Qu(uf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        gr(9, sf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qe(),
        t = ee.identifierPrefix;
      if (U) {
        var n = nt,
          r = tt;
        (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Bh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Vh = {
    readContext: De,
    useCallback: yf,
    useContext: De,
    useEffect: Ls,
    useImperativeHandle: mf,
    useInsertionEffect: df,
    useLayoutEffect: pf,
    useMemo: vf,
    useReducer: Do,
    useRef: ff,
    useState: function () {
      return Do(vr);
    },
    useDebugValue: zs,
    useDeferredValue: function (e) {
      var t = Me();
      return gf(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Do(vr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: rf,
    useSyncExternalStore: of,
    useId: wf,
    unstable_isNewReconciler: !1,
  },
  Hh = {
    readContext: De,
    useCallback: yf,
    useContext: De,
    useEffect: Ls,
    useImperativeHandle: mf,
    useInsertionEffect: df,
    useLayoutEffect: pf,
    useMemo: vf,
    useReducer: Mo,
    useRef: ff,
    useState: function () {
      return Mo(vr);
    },
    useDebugValue: zs,
    useDeferredValue: function (e) {
      var t = Me();
      return G === null ? (t.memoizedState = e) : gf(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Mo(vr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: rf,
    useSyncExternalStore: of,
    useId: wf,
    unstable_isNewReconciler: !1,
  };
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Sl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ji = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      i = _t(e),
      o = rt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = St(e, o, i)),
      t !== null && (He(t, e, i, r), ri(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      i = _t(e),
      o = rt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = St(e, o, i)),
      t !== null && (He(t, e, i, r), ri(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = _t(e),
      i = rt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = St(e, i, r)),
      t !== null && (He(t, e, r, n), ri(t, e, r));
  },
};
function Ku(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cr(n, r) || !cr(i, o)
      : !0
  );
}
function _f(e, t, n) {
  var r = !1,
    i = Nt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = De(o))
      : ((i = ve(t) ? $t : ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? gn(e, i) : Nt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ji),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function qu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ji.enqueueReplaceState(t, t.state, null);
}
function El(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Cs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = De(o))
    : ((o = ve(t) ? $t : ae.current), (i.context = gn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Sl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ji.enqueueReplaceState(i, i.state, null),
      Ri(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function En(e, t) {
  try {
    var n = "",
      r = t;
    do (n += vp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Io(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _l(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Wh = typeof WeakMap == "function" ? WeakMap : Map;
function Cf(e, t, n) {
  (n = rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ai || ((Ai = !0), (Al = r)), _l(e, t);
    }),
    n
  );
}
function xf(e, t, n) {
  (n = rt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        _l(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        _l(e, t),
          typeof r != "function" &&
            (Et === null ? (Et = new Set([this])) : Et.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Yu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wh();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = im.bind(null, e, t, n)), t.then(e, e));
}
function Xu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = rt(-1, 1)), (t.tag = 2), St(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Qh = at.ReactCurrentOwner,
  me = !1;
function ce(e, t, n, r) {
  t.child = e === null ? bc(t, null, n, r) : kn(t, e.child, n, r);
}
function Ju(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    mn(t, i),
    (r = Ps(e, t, n, r, o, i)),
    (n = Os()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        st(e, t, i))
      : (U && n && vs(t), (t.flags |= 1), ce(e, t, r, i), t.child)
  );
}
function Zu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Us(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Nf(e, t, o, r, i))
      : ((e = ai(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cr), n(l, r) && e.ref === t.ref)
    )
      return st(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Nf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (cr(o, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), st(e, t, i);
  }
  return Cl(e, t, n, r, i);
}
function Tf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(cn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(cn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(cn, ke),
        (ke |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(cn, ke),
      (ke |= r);
  return ce(e, t, i, n), t.child;
}
function Rf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cl(e, t, n, r, i) {
  var o = ve(n) ? $t : ae.current;
  return (
    (o = gn(t, o)),
    mn(t, i),
    (n = Ps(e, t, n, r, o, i)),
    (r = Os()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        st(e, t, i))
      : (U && r && vs(t), (t.flags |= 1), ce(e, t, n, i), t.child)
  );
}
function bu(e, t, n, r, i) {
  if (ve(n)) {
    var o = !0;
    _i(t);
  } else o = !1;
  if ((mn(t, i), t.stateNode === null))
    li(e, t), _f(t, n, r), El(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = De(a))
      : ((a = ve(n) ? $t : ae.current), (a = gn(t, a)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && qu(t, l, r, a)),
      (dt = !1);
    var m = t.memoizedState;
    (l.state = m),
      Ri(t, r, l, i),
      (u = t.memoizedState),
      s !== r || m !== u || ye.current || dt
        ? (typeof p == "function" && (Sl(t, n, p, r), (u = t.memoizedState)),
          (s = dt || Ku(t, n, s, r, m, u, a))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      tf(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Be(t.type, s)),
      (l.props = a),
      (h = t.pendingProps),
      (m = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = De(u))
        : ((u = ve(n) ? $t : ae.current), (u = gn(t, u)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== h || m !== u) && qu(t, l, r, u)),
      (dt = !1),
      (m = t.memoizedState),
      (l.state = m),
      Ri(t, r, l, i);
    var g = t.memoizedState;
    s !== h || m !== g || ye.current || dt
      ? (typeof v == "function" && (Sl(t, n, v, r), (g = t.memoizedState)),
        (a = dt || Ku(t, n, a, r, m, g, u) || !1)
          ? (p ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, g, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, g, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xl(e, t, n, r, o, i);
}
function xl(e, t, n, r, i, o) {
  Rf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && ju(t, n, !1), st(e, t, o);
  (r = t.stateNode), (Qh.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = kn(t, e.child, null, o)), (t.child = kn(t, null, s, o)))
      : ce(e, t, s, o),
    (t.memoizedState = r.state),
    i && ju(t, n, !0),
    t.child
  );
}
function Pf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bu(e, t.context, !1),
    xs(e, t.containerInfo);
}
function ea(e, t, n, r, i) {
  return wn(), ws(i), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var Nl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Of(e, t, n) {
  var r = t.pendingProps,
    i = $.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    I($, i & 1),
    e === null)
  )
    return (
      wl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = eo(l, r, 0, null)),
              (e = Ut(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Tl(n)),
              (t.memoizedState = Nl),
              e)
            : As(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Kh(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Ct(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Ct(s, o)) : ((o = Ut(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Tl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Nl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ct(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function As(e, t) {
  return (
    (t = eo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hr(e, t, n, r) {
  return (
    r !== null && ws(r),
    kn(t, e.child, null, n),
    (e = As(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Kh(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Io(Error(w(422)))), Hr(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = eo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Ut(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && kn(t, e.child, null, l),
        (t.child.memoizedState = Tl(l)),
        (t.memoizedState = Nl),
        o);
  if (!(t.mode & 1)) return Hr(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(w(419))), (r = Io(o, r, void 0)), Hr(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), me || s)) {
    if (((r = ee), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), lt(e, i), He(r, e, i, -1));
    }
    return Fs(), (r = Io(Error(w(421)))), Hr(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = om.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Se = kt(i.nextSibling)),
      (_e = t),
      (U = !0),
      (Ue = null),
      e !== null &&
        ((Pe[Oe++] = tt),
        (Pe[Oe++] = nt),
        (Pe[Oe++] = Vt),
        (tt = e.id),
        (nt = e.overflow),
        (Vt = t)),
      (t = As(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ta(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), kl(e.return, t, n);
}
function Bo(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Lf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ce(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ta(e, n, t);
        else if (e.tag === 19) ta(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Pi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Bo(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Pi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Bo(t, !0, n, null, o);
        break;
      case "together":
        Bo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function li(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qh(e, t, n) {
  switch (t.tag) {
    case 3:
      Pf(t), wn();
      break;
    case 5:
      nf(t);
      break;
    case 1:
      ve(t.type) && _i(t);
      break;
    case 4:
      xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      I(Ni, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Of(e, t, n)
          : (I($, $.current & 1),
            (e = st(e, t, n)),
            e !== null ? e.sibling : null);
      I($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Lf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        I($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Tf(e, t, n);
  }
  return st(e, t, n);
}
var zf, Rl, Af, Df;
zf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Rl = function () {};
Af = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), jt(Ge.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Go(e, i)), (r = Go(e, r)), (o = []);
        break;
      case "select":
        (i = H({}, i, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = bo(e, i)), (r = bo(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Si);
    }
    tl(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var s = i[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (rr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (rr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && B("scroll", e),
                  o || s === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Df = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Yh(e, t, n) {
  var r = t.pendingProps;
  switch ((gs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return se(t), null;
    case 1:
      return ve(t.type) && Ei(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Sn(),
        j(ye),
        j(ae),
        Ts(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ue !== null && (Il(Ue), (Ue = null)))),
        Rl(e, t),
        se(t),
        null
      );
    case 5:
      Ns(t);
      var i = jt(mr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Af(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return se(t), null;
        }
        if (((e = jt(Ge.current)), $r(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ye] = t), (r[pr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Qn.length; i++) B(Qn[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              cu(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              du(r, o), B("invalid", r);
          }
          tl(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : rr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              zr(r), fu(r, o, !0);
              break;
            case "textarea":
              zr(r), pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Si);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ye] = t),
            (e[pr] = r),
            zf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = nl(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Qn.length; i++) B(Qn[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                cu(e, r), (i = Go(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = H({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                du(e, r), (i = bo(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            tl(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? cc(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && uc(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && ir(e, u)
                    : typeof u == "number" && ir(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (rr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && B("scroll", e)
                      : u != null && rs(e, o, u, l));
              }
            switch (n) {
              case "input":
                zr(e), fu(e, r, !1);
                break;
              case "textarea":
                zr(e), pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? fn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Si);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) Df(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = jt(mr.current)), jt(Ge.current), $r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ye] = t),
            (o = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ur(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ur(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ye] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (j($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Se !== null && t.mode & 1 && !(t.flags & 128))
          Jc(), wn(), (t.flags |= 98560), (o = !1);
        else if (((o = $r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(w(317));
            o[Ye] = t;
          } else
            wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (o = !1);
        } else Ue !== null && (Il(Ue), (Ue = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? J === 0 && (J = 3) : Fs())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        Sn(), Rl(e, t), e === null && fr(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return Es(t.type._context), se(t), null;
    case 17:
      return ve(t.type) && Ei(), se(t), null;
    case 19:
      if ((j($), (o = t.memoizedState), o === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Fn(o, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Pi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Fn(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > _n &&
            ((t.flags |= 128), (r = !0), Fn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Pi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !U)
            )
              return se(t), null;
          } else
            2 * K() - o.renderingStartTime > _n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = $.current),
          I($, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        js(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Xh(e, t) {
  switch ((gs(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && Ei(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Sn(),
        j(ye),
        j(ae),
        Ts(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ns(t), null;
    case 13:
      if ((j($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        wn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return j($), null;
    case 4:
      return Sn(), null;
    case 10:
      return Es(t.type._context), null;
    case 22:
    case 23:
      return js(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wr = !1,
  ue = !1,
  Gh = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Pl(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var na = !1;
function Jh(e, t) {
  if (((dl = gi), (e = jc()), ys(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            a = 0,
            p = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (i !== 0 && h.nodeType !== 3) || (s = l + i),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (m = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++a === i && (s = l),
                m === o && ++p === r && (u = l),
                (v = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = v;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pl = { focusedElem: e, selectionRange: n }, gi = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (x = e);
    else
      for (; x !== null; ) {
        t = x;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var S = g.memoizedProps,
                    R = g.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Be(t.type, S),
                      R
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (y) {
          W(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (x = e);
          break;
        }
        x = t.return;
      }
  return (g = na), (na = !1), g;
}
function er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Pl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Zi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ol(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Mf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Mf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ye], delete t[pr], delete t[yl], delete t[Ah], delete t[Dh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function If(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ra(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || If(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Si));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ll(e, t, n), e = e.sibling; e !== null; ) Ll(e, t, n), (e = e.sibling);
}
function zl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zl(e, t, n), e = e.sibling; e !== null; ) zl(e, t, n), (e = e.sibling);
}
var ne = null,
  je = !1;
function ct(e, t, n) {
  for (n = n.child; n !== null; ) Bf(e, t, n), (n = n.sibling);
}
function Bf(e, t, n) {
  if (Xe && typeof Xe.onCommitFiberUnmount == "function")
    try {
      Xe.onCommitFiberUnmount(Wi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || an(n, t);
    case 6:
      var r = ne,
        i = je;
      (ne = null),
        ct(e, t, n),
        (ne = r),
        (je = i),
        ne !== null &&
          (je
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (je
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Oo(e.parentNode, n)
              : e.nodeType === 1 && Oo(e, n),
            ur(e))
          : Oo(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (i = je),
        (ne = n.stateNode.containerInfo),
        (je = !0),
        ct(e, t, n),
        (ne = r),
        (je = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Pl(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      ct(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (an(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          W(n, t, s);
        }
      ct(e, t, n);
      break;
    case 21:
      ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), ct(e, t, n), (ue = r))
        : ct(e, t, n);
      break;
    default:
      ct(e, t, n);
  }
}
function ia(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gh()),
      t.forEach(function (r) {
        var i = lm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ne = s.stateNode), (je = !1);
              break e;
            case 3:
              (ne = s.stateNode.containerInfo), (je = !0);
              break e;
            case 4:
              (ne = s.stateNode.containerInfo), (je = !0);
              break e;
          }
          s = s.return;
        }
        if (ne === null) throw Error(w(160));
        Bf(o, l, i), (ne = null), (je = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        W(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) jf(t, e), (t = t.sibling);
}
function jf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ie(t, e), Ke(e), r & 4)) {
        try {
          er(3, e, e.return), Zi(3, e);
        } catch (S) {
          W(e, e.return, S);
        }
        try {
          er(5, e, e.return);
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 1:
      Ie(t, e), Ke(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (
        (Ie(t, e),
        Ke(e),
        r & 512 && n !== null && an(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ir(i, "");
        } catch (S) {
          W(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && oc(i, o),
              nl(s, l);
            var a = nl(s, o);
            for (l = 0; l < u.length; l += 2) {
              var p = u[l],
                h = u[l + 1];
              p === "style"
                ? cc(i, h)
                : p === "dangerouslySetInnerHTML"
                ? uc(i, h)
                : p === "children"
                ? ir(i, h)
                : rs(i, p, h, a);
            }
            switch (s) {
              case "input":
                Jo(i, o);
                break;
              case "textarea":
                lc(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? fn(i, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? fn(i, !!o.multiple, o.defaultValue, !0)
                      : fn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[pr] = o;
          } catch (S) {
            W(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Ie(t, e), Ke(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Ie(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ur(t.containerInfo);
        } catch (S) {
          W(e, e.return, S);
        }
      break;
    case 4:
      Ie(t, e), Ke(e);
      break;
    case 13:
      Ie(t, e),
        Ke(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Is = K())),
        r & 4 && ia(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (a = ue) || p), Ie(t, e), (ue = a)) : Ie(t, e),
        Ke(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (x = e, p = e.child; p !== null; ) {
            for (h = x = p; x !== null; ) {
              switch (((m = x), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, m, m.return);
                  break;
                case 1:
                  an(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (S) {
                      W(r, n, S);
                    }
                  }
                  break;
                case 5:
                  an(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    la(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (x = v)) : la(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (i = h.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = ac("display", l)));
              } catch (S) {
                W(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (S) {
                W(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ie(t, e), Ke(e), r & 4 && ia(e);
      break;
    case 21:
      break;
    default:
      Ie(t, e), Ke(e);
  }
}
function Ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (If(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ir(i, ""), (r.flags &= -33));
          var o = ra(e);
          zl(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = ra(e);
          Ll(e, s, l);
          break;
        default:
          throw Error(w(161));
      }
    } catch (u) {
      W(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Zh(e, t, n) {
  (x = e), Ff(e);
}
function Ff(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var i = x,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Wr;
      if (!l) {
        var s = i.alternate,
          u = (s !== null && s.memoizedState !== null) || ue;
        s = Wr;
        var a = ue;
        if (((Wr = l), (ue = u) && !a))
          for (x = i; x !== null; )
            (l = x),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? sa(i)
                : u !== null
                ? ((u.return = l), (x = u))
                : sa(i);
        for (; o !== null; ) (x = o), Ff(o), (o = o.sibling);
        (x = i), (Wr = s), (ue = a);
      }
      oa(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (x = o)) : oa(e);
  }
}
function oa(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Zi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Hu(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hu(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && ur(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        ue || (t.flags & 512 && Ol(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function la(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function sa(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Zi(4, t);
          } catch (u) {
            W(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              W(t, i, u);
            }
          }
          var o = t.return;
          try {
            Ol(t);
          } catch (u) {
            W(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ol(t);
          } catch (u) {
            W(t, l, u);
          }
      }
    } catch (u) {
      W(t, t.return, u);
    }
    if (t === e) {
      x = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (x = s);
      break;
    }
    x = t.return;
  }
}
var bh = Math.ceil,
  zi = at.ReactCurrentDispatcher,
  Ds = at.ReactCurrentOwner,
  Ae = at.ReactCurrentBatchConfig,
  D = 0,
  ee = null,
  q = null,
  ie = 0,
  ke = 0,
  cn = Pt(0),
  J = 0,
  wr = null,
  Wt = 0,
  bi = 0,
  Ms = 0,
  tr = null,
  he = null,
  Is = 0,
  _n = 1 / 0,
  be = null,
  Ai = !1,
  Al = null,
  Et = null,
  Qr = !1,
  yt = null,
  Di = 0,
  nr = 0,
  Dl = null,
  si = -1,
  ui = 0;
function fe() {
  return D & 6 ? K() : si !== -1 ? si : (si = K());
}
function _t(e) {
  return e.mode & 1
    ? D & 2 && ie !== 0
      ? ie & -ie
      : Ih.transition !== null
      ? (ui === 0 && (ui = Ec()), ui)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pc(e.type))),
        e)
    : 1;
}
function He(e, t, n, r) {
  if (50 < nr) throw ((nr = 0), (Dl = null), Error(w(185)));
  _r(e, n, r),
    (!(D & 2) || e !== ee) &&
      (e === ee && (!(D & 2) && (bi |= n), J === 4 && ht(e, ie)),
      ge(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((_n = K() + 500), Xi && Ot()));
}
function ge(e, t) {
  var n = e.callbackNode;
  Ip(e, t);
  var r = vi(e, e === ee ? ie : 0);
  if (r === 0)
    n !== null && yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yu(n), t === 1))
      e.tag === 0 ? Mh(ua.bind(null, e)) : Yc(ua.bind(null, e)),
        Lh(function () {
          !(D & 6) && Ot();
        }),
        (n = null);
    else {
      switch (_c(r)) {
        case 1:
          n = us;
          break;
        case 4:
          n = kc;
          break;
        case 16:
          n = yi;
          break;
        case 536870912:
          n = Sc;
          break;
        default:
          n = yi;
      }
      n = qf(n, Uf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Uf(e, t) {
  if (((si = -1), (ui = 0), D & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (yn() && e.callbackNode !== n) return null;
  var r = vi(e, e === ee ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Mi(e, r);
  else {
    t = r;
    var i = D;
    D |= 2;
    var o = Vf();
    (ee !== e || ie !== t) && ((be = null), (_n = K() + 500), Ft(e, t));
    do
      try {
        nm();
        break;
      } catch (s) {
        $f(e, s);
      }
    while (!0);
    Ss(),
      (zi.current = o),
      (D = i),
      q !== null ? (t = 0) : ((ee = null), (ie = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = sl(e)), i !== 0 && ((r = i), (t = Ml(e, i)))), t === 1)
    )
      throw ((n = wr), Ft(e, 0), ht(e, r), ge(e, K()), n);
    if (t === 6) ht(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !em(i) &&
          ((t = Mi(e, r)),
          t === 2 && ((o = sl(e)), o !== 0 && ((r = o), (t = Ml(e, o)))),
          t === 1))
      )
        throw ((n = wr), Ft(e, 0), ht(e, r), ge(e, K()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Dt(e, he, be);
          break;
        case 3:
          if (
            (ht(e, r), (r & 130023424) === r && ((t = Is + 500 - K()), 10 < t))
          ) {
            if (vi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ml(Dt.bind(null, e, he, be), t);
            break;
          }
          Dt(e, he, be);
          break;
        case 4:
          if ((ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ve(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * bh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ml(Dt.bind(null, e, he, be), r);
            break;
          }
          Dt(e, he, be);
          break;
        case 5:
          Dt(e, he, be);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ge(e, K()), e.callbackNode === n ? Uf.bind(null, e) : null;
}
function Ml(e, t) {
  var n = tr;
  return (
    e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256),
    (e = Mi(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && Il(t)),
    e
  );
}
function Il(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function em(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Qe(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ht(e, t) {
  for (
    t &= ~Ms,
      t &= ~bi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ve(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ua(e) {
  if (D & 6) throw Error(w(327));
  yn();
  var t = vi(e, 0);
  if (!(t & 1)) return ge(e, K()), null;
  var n = Mi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = sl(e);
    r !== 0 && ((t = r), (n = Ml(e, r)));
  }
  if (n === 1) throw ((n = wr), Ft(e, 0), ht(e, t), ge(e, K()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dt(e, he, be),
    ge(e, K()),
    null
  );
}
function Bs(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((_n = K() + 500), Xi && Ot());
  }
}
function Qt(e) {
  yt !== null && yt.tag === 0 && !(D & 6) && yn();
  var t = D;
  D |= 1;
  var n = Ae.transition,
    r = M;
  try {
    if (((Ae.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ae.transition = n), (D = t), !(D & 6) && Ot();
  }
}
function js() {
  (ke = cn.current), j(cn);
}
function Ft(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Oh(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((gs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ei();
          break;
        case 3:
          Sn(), j(ye), j(ae), Ts();
          break;
        case 5:
          Ns(r);
          break;
        case 4:
          Sn();
          break;
        case 13:
          j($);
          break;
        case 19:
          j($);
          break;
        case 10:
          Es(r.type._context);
          break;
        case 22:
        case 23:
          js();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (q = e = Ct(e.current, null)),
    (ie = ke = t),
    (J = 0),
    (wr = null),
    (Ms = bi = Wt = 0),
    (he = tr = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((n = Bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Bt = null;
  }
  return e;
}
function $f(e, t) {
  do {
    var n = q;
    try {
      if ((Ss(), (ii.current = Li), Oi)) {
        for (var r = V.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Oi = !1;
      }
      if (
        ((Ht = 0),
        (b = G = V = null),
        (bn = !1),
        (yr = 0),
        (Ds.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (wr = t), (q = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = ie),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            p = s,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = Xu(l);
          if (v !== null) {
            (v.flags &= -257),
              Gu(v, l, s, o, t),
              v.mode & 1 && Yu(o, a, t),
              (t = v),
              (u = a);
            var g = t.updateQueue;
            if (g === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Yu(o, a, t), Fs();
              break e;
            }
            u = Error(w(426));
          }
        } else if (U && s.mode & 1) {
          var R = Xu(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Gu(R, l, s, o, t),
              ws(En(u, s));
            break e;
          }
        }
        (o = u = En(u, s)),
          J !== 4 && (J = 2),
          tr === null ? (tr = [o]) : tr.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Cf(o, u, t);
              Vu(o, d);
              break e;
            case 1:
              s = u;
              var c = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (Et === null || !Et.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = xf(o, s, t);
                Vu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Wf(n);
    } catch (k) {
      (t = k), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vf() {
  var e = zi.current;
  return (zi.current = Li), e === null ? Li : e;
}
function Fs() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || (!(Wt & 268435455) && !(bi & 268435455)) || ht(ee, ie);
}
function Mi(e, t) {
  var n = D;
  D |= 2;
  var r = Vf();
  (ee !== e || ie !== t) && ((be = null), Ft(e, t));
  do
    try {
      tm();
      break;
    } catch (i) {
      $f(e, i);
    }
  while (!0);
  if ((Ss(), (D = n), (zi.current = r), q !== null)) throw Error(w(261));
  return (ee = null), (ie = 0), J;
}
function tm() {
  for (; q !== null; ) Hf(q);
}
function nm() {
  for (; q !== null && !Tp(); ) Hf(q);
}
function Hf(e) {
  var t = Kf(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Wf(e) : (q = t),
    (Ds.current = null);
}
function Wf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Xh(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (q = null);
        return;
      }
    } else if (((n = Yh(n, t, ke)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Dt(e, t, n) {
  var r = M,
    i = Ae.transition;
  try {
    (Ae.transition = null), (M = 1), rm(e, t, n, r);
  } finally {
    (Ae.transition = i), (M = r);
  }
  return null;
}
function rm(e, t, n, r) {
  do yn();
  while (yt !== null);
  if (D & 6) throw Error(w(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Bp(e, o),
    e === ee && ((q = ee = null), (ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Qr ||
      ((Qr = !0),
      qf(yi, function () {
        return yn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ae.transition), (Ae.transition = null);
    var l = M;
    M = 1;
    var s = D;
    (D |= 4),
      (Ds.current = null),
      Jh(e, n),
      jf(n, e),
      _h(pl),
      (gi = !!dl),
      (pl = dl = null),
      (e.current = n),
      Zh(n),
      Rp(),
      (D = s),
      (M = l),
      (Ae.transition = o);
  } else e.current = n;
  if (
    (Qr && ((Qr = !1), (yt = e), (Di = i)),
    (o = e.pendingLanes),
    o === 0 && (Et = null),
    Lp(n.stateNode),
    ge(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ai) throw ((Ai = !1), (e = Al), (Al = null), e);
  return (
    Di & 1 && e.tag !== 0 && yn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Dl ? nr++ : ((nr = 0), (Dl = e))) : (nr = 0),
    Ot(),
    null
  );
}
function yn() {
  if (yt !== null) {
    var e = _c(Di),
      t = Ae.transition,
      n = M;
    try {
      if (((Ae.transition = null), (M = 16 > e ? 16 : e), yt === null))
        var r = !1;
      else {
        if (((e = yt), (yt = null), (Di = 0), D & 6)) throw Error(w(331));
        var i = D;
        for (D |= 4, x = e.current; x !== null; ) {
          var o = x,
            l = o.child;
          if (x.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (x = a; x !== null; ) {
                  var p = x;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (x = h);
                  else
                    for (; x !== null; ) {
                      p = x;
                      var m = p.sibling,
                        v = p.return;
                      if ((Mf(p), p === a)) {
                        x = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (x = m);
                        break;
                      }
                      x = v;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var R = S.sibling;
                    (S.sibling = null), (S = R);
                  } while (S !== null);
                }
              }
              x = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (x = l);
          else
            e: for (; x !== null; ) {
              if (((o = x), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    er(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (x = d);
                break e;
              }
              x = o.return;
            }
        }
        var c = e.current;
        for (x = c; x !== null; ) {
          l = x;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) (f.return = l), (x = f);
          else
            e: for (l = c; x !== null; ) {
              if (((s = x), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zi(9, s);
                  }
                } catch (k) {
                  W(s, s.return, k);
                }
              if (s === l) {
                x = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (x = y);
                break e;
              }
              x = s.return;
            }
        }
        if (
          ((D = i), Ot(), Xe && typeof Xe.onPostCommitFiberRoot == "function")
        )
          try {
            Xe.onPostCommitFiberRoot(Wi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ae.transition = t);
    }
  }
  return !1;
}
function aa(e, t, n) {
  (t = En(n, t)),
    (t = Cf(e, t, 1)),
    (e = St(e, t, 1)),
    (t = fe()),
    e !== null && (_r(e, 1, t), ge(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) aa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        aa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Et === null || !Et.has(r)))
        ) {
          (e = En(n, e)),
            (e = xf(t, e, 1)),
            (t = St(t, e, 1)),
            (e = fe()),
            t !== null && (_r(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function im(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ie & n) === n &&
      (J === 4 || (J === 3 && (ie & 130023424) === ie && 500 > K() - Is)
        ? Ft(e, 0)
        : (Ms |= n)),
    ge(e, t);
}
function Qf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Mr), (Mr <<= 1), !(Mr & 130023424) && (Mr = 4194304))
      : (t = 1));
  var n = fe();
  (e = lt(e, t)), e !== null && (_r(e, t, n), ge(e, n));
}
function om(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Qf(e, n);
}
function lm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Qf(e, n);
}
var Kf;
Kf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), qh(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), U && t.flags & 1048576 && Xc(t, xi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      li(e, t), (e = t.pendingProps);
      var i = gn(t, ae.current);
      mn(t, n), (i = Ps(null, t, r, e, i, n));
      var o = Os();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((o = !0), _i(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Cs(t),
            (i.updater = Ji),
            (t.stateNode = i),
            (i._reactInternals = t),
            El(t, r, e, n),
            (t = xl(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && vs(t), ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (li(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = um(r)),
          (e = Be(r, e)),
          i)
        ) {
          case 0:
            t = Cl(null, t, r, e, n);
            break e;
          case 1:
            t = bu(null, t, r, e, n);
            break e;
          case 11:
            t = Ju(null, t, r, e, n);
            break e;
          case 14:
            t = Zu(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        Cl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        bu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Pf(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          tf(e, t),
          Ri(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = En(Error(w(423)), t)), (t = ea(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = En(Error(w(424)), t)), (t = ea(e, t, r, n, i));
            break e;
          } else
            for (
              Se = kt(t.stateNode.containerInfo.firstChild),
                _e = t,
                U = !0,
                Ue = null,
                n = bc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wn(), r === i)) {
            t = st(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nf(t),
        e === null && wl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        hl(r, i) ? (l = null) : o !== null && hl(r, o) && (t.flags |= 32),
        Rf(e, t),
        ce(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && wl(t), null;
    case 13:
      return Of(e, t, n);
    case 4:
      return (
        xs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        Ju(e, t, r, i, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          I(Ni, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Qe(o.value, l)) {
            if (o.children === i.children && !ye.current) {
              t = st(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = rt(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (u.next = u)
                          : ((u.next = p.next), (p.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      kl(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(w(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  kl(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        mn(t, n),
        (i = De(i)),
        (r = r(i)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Be(r, t.pendingProps)),
        (i = Be(r.type, i)),
        Zu(e, t, r, i, n)
      );
    case 15:
      return Nf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        li(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), _i(t)) : (e = !1),
        mn(t, n),
        _f(t, r, i),
        El(t, r, i, n),
        xl(null, t, r, !0, e, n)
      );
    case 19:
      return Lf(e, t, n);
    case 22:
      return Tf(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function qf(e, t) {
  return wc(e, t);
}
function sm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new sm(e, t, n, r);
}
function Us(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function um(e) {
  if (typeof e == "function") return Us(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === os)) return 11;
    if (e === ls) return 14;
  }
  return 2;
}
function Ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ai(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Us(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case bt:
        return Ut(n.children, i, o, t);
      case is:
        (l = 8), (i |= 8);
        break;
      case Ko:
        return (
          (e = ze(12, n, t, i | 2)), (e.elementType = Ko), (e.lanes = o), e
        );
      case qo:
        return (e = ze(13, n, t, i)), (e.elementType = qo), (e.lanes = o), e;
      case Yo:
        return (e = ze(19, n, t, i)), (e.elementType = Yo), (e.lanes = o), e;
      case nc:
        return eo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ec:
              l = 10;
              break e;
            case tc:
              l = 9;
              break e;
            case os:
              l = 11;
              break e;
            case ls:
              l = 14;
              break e;
            case ft:
              (l = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ut(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function eo(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = nc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function jo(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function Fo(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function am(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wo(0)),
    (this.expirationTimes = wo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function $s(e, t, n, r, i, o, l, s, u) {
  return (
    (e = new am(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ze(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cs(o),
    e
  );
}
function cm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Yf(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return qc(e, n, t);
  }
  return t;
}
function Xf(e, t, n, r, i, o, l, s, u) {
  return (
    (e = $s(n, r, !0, e, i, o, l, s, u)),
    (e.context = Yf(null)),
    (n = e.current),
    (r = fe()),
    (i = _t(n)),
    (o = rt(r, i)),
    (o.callback = t ?? null),
    St(n, o, i),
    (e.current.lanes = i),
    _r(e, i, r),
    ge(e, r),
    e
  );
}
function to(e, t, n, r) {
  var i = t.current,
    o = fe(),
    l = _t(i);
  return (
    (n = Yf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = rt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = St(i, t, l)),
    e !== null && (He(e, i, l, o), ri(e, i, l)),
    l
  );
}
function Ii(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ca(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vs(e, t) {
  ca(e, t), (e = e.alternate) && ca(e, t);
}
function fm() {
  return null;
}
var Gf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hs(e) {
  this._internalRoot = e;
}
no.prototype.render = Hs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  to(e, t, null, null);
};
no.prototype.unmount = Hs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function () {
      to(null, e, null, null);
    }),
      (t[ot] = null);
  }
};
function no(e) {
  this._internalRoot = e;
}
no.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Nc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++);
    pt.splice(n, 0, e), n === 0 && Rc(e);
  }
};
function Ws(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fa() {}
function dm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Ii(l);
        o.call(a);
      };
    }
    var l = Xf(t, r, e, 0, null, !1, !1, "", fa);
    return (
      (e._reactRootContainer = l),
      (e[ot] = l.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      Qt(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Ii(u);
      s.call(a);
    };
  }
  var u = $s(e, 0, !1, null, null, !1, !1, "", fa);
  return (
    (e._reactRootContainer = u),
    (e[ot] = u.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    Qt(function () {
      to(t, u, n, r);
    }),
    u
  );
}
function io(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = Ii(l);
        s.call(u);
      };
    }
    to(t, l, e, i);
  } else l = dm(n, t, e, i, r);
  return Ii(l);
}
Cc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wn(t.pendingLanes);
        n !== 0 &&
          (as(t, n | 1), ge(t, K()), !(D & 6) && ((_n = K() + 500), Ot()));
      }
      break;
    case 13:
      Qt(function () {
        var r = lt(e, 1);
        if (r !== null) {
          var i = fe();
          He(r, e, 1, i);
        }
      }),
        Vs(e, 1);
  }
};
cs = function (e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = fe();
      He(t, e, 134217728, n);
    }
    Vs(e, 134217728);
  }
};
xc = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = lt(e, t);
    if (n !== null) {
      var r = fe();
      He(n, e, t, r);
    }
    Vs(e, t);
  }
};
Nc = function () {
  return M;
};
Tc = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
il = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Yi(r);
            if (!i) throw Error(w(90));
            ic(r), Jo(r, i);
          }
        }
      }
      break;
    case "textarea":
      lc(e, n);
      break;
    case "select":
      (t = n.value), t != null && fn(e, !!n.multiple, t, !1);
  }
};
pc = Bs;
hc = Qt;
var pm = { usingClientEntryPoint: !1, Events: [xr, rn, Yi, fc, dc, Bs] },
  Un = {
    findFiberByHostInstance: It,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  hm = {
    bundleType: Un.bundleType,
    version: Un.version,
    rendererPackageName: Un.rendererPackageName,
    rendererConfig: Un.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: at.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = vc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Un.findFiberByHostInstance || fm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kr.isDisabled && Kr.supportsFiber)
    try {
      (Wi = Kr.inject(hm)), (Xe = Kr);
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pm;
Te.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ws(t)) throw Error(w(200));
  return cm(e, t, null, n);
};
Te.createRoot = function (e, t) {
  if (!Ws(e)) throw Error(w(299));
  var n = !1,
    r = "",
    i = Gf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = $s(e, 1, !1, null, null, n, !1, r, i)),
    (e[ot] = t.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    new Hs(t)
  );
};
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = vc(t)), (e = e === null ? null : e.stateNode), e;
};
Te.flushSync = function (e) {
  return Qt(e);
};
Te.hydrate = function (e, t, n) {
  if (!ro(t)) throw Error(w(200));
  return io(null, e, t, !0, n);
};
Te.hydrateRoot = function (e, t, n) {
  if (!Ws(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Gf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Xf(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[ot] = t.current),
    fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new no(t);
};
Te.render = function (e, t, n) {
  if (!ro(t)) throw Error(w(200));
  return io(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!ro(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Qt(function () {
        io(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ot] = null);
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = Bs;
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ro(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return io(e, t, n, !1, r);
};
Te.version = "18.3.1-next-f1338f8080-20240426";
function Jf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jf);
    } catch (e) {
      console.error(e);
    }
}
Jf(), (Ga.exports = Te);
var mm = Ga.exports;
const ym = ja(mm);
var Zf = { exports: {} },
  bf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = re;
function vm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gm = typeof Object.is == "function" ? Object.is : vm,
  wm = Tr.useSyncExternalStore,
  km = Tr.useRef,
  Sm = Tr.useEffect,
  Em = Tr.useMemo,
  _m = Tr.useDebugValue;
bf.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = km(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = Em(
    function () {
      function u(v) {
        if (!a) {
          if (((a = !0), (p = v), (v = r(v)), i !== void 0 && l.hasValue)) {
            var g = l.value;
            if (i(g, v)) return (h = g);
          }
          return (h = v);
        }
        if (((g = h), gm(p, v))) return g;
        var S = r(v);
        return i !== void 0 && i(g, S) ? g : ((p = v), (h = S));
      }
      var a = !1,
        p,
        h,
        m = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        m === null
          ? void 0
          : function () {
              return u(m());
            },
      ];
    },
    [t, n, r, i]
  );
  var s = wm(e, o[0], o[1]);
  return (
    Sm(
      function () {
        (l.hasValue = !0), (l.value = s);
      },
      [s]
    ),
    _m(s),
    s
  );
};
Zf.exports = bf;
var Cm = Zf.exports,
  Ee = "default" in lu ? Hi : lu,
  da = Symbol.for("react-redux-context"),
  pa = typeof globalThis < "u" ? globalThis : {};
function xm() {
  if (!Ee.createContext) return {};
  const e = pa[da] ?? (pa[da] = new Map());
  let t = e.get(Ee.createContext);
  return t || ((t = Ee.createContext(null)), e.set(Ee.createContext, t)), t;
}
var Tt = xm(),
  Nm = () => {
    throw new Error("uSES not initialized!");
  };
function Qs(e = Tt) {
  return function () {
    return Ee.useContext(e);
  };
}
var ed = Qs(),
  td = Nm,
  Tm = (e) => {
    td = e;
  },
  Rm = (e, t) => e === t;
function Pm(e = Tt) {
  const t = e === Tt ? ed : Qs(e),
    n = (r, i = {}) => {
      const { equalityFn: o = Rm, devModeChecks: l = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: s,
          subscription: u,
          getServerState: a,
          stabilityCheck: p,
          identityFunctionCheck: h,
        } = t();
      Ee.useRef(!0);
      const m = Ee.useCallback(
          {
            [r.name](g) {
              return r(g);
            },
          }[r.name],
          [r, p, l.stabilityCheck]
        ),
        v = td(u.addNestedSub, s.getState, a || s.getState, m, o);
      return Ee.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Y = Pm();
function Om(e) {
  e();
}
function Lm() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Om(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var ha = { notify() {}, get: () => [] };
function zm(e, t) {
  let n,
    r = ha,
    i = 0,
    o = !1;
  function l(S) {
    p();
    const R = r.subscribe(S);
    let d = !1;
    return () => {
      d || ((d = !0), R(), h());
    };
  }
  function s() {
    r.notify();
  }
  function u() {
    g.onStateChange && g.onStateChange();
  }
  function a() {
    return o;
  }
  function p() {
    i++, n || ((n = e.subscribe(u)), (r = Lm()));
  }
  function h() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = ha));
  }
  function m() {
    o || ((o = !0), p());
  }
  function v() {
    o && ((o = !1), h());
  }
  const g = {
    addNestedSub: l,
    notifyNestedSubs: s,
    handleChangeWrapper: u,
    isSubscribed: a,
    trySubscribe: m,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return g;
}
var Am =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Dm = typeof navigator < "u" && navigator.product === "ReactNative",
  Mm = Am || Dm ? Ee.useLayoutEffect : Ee.useEffect;
function Im({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once",
}) {
  const l = Ee.useMemo(() => {
      const a = zm(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o,
      };
    }, [e, r, i, o]),
    s = Ee.useMemo(() => e.getState(), [e]);
  Mm(() => {
    const { subscription: a } = l;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      s !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [l, s]);
  const u = t || Tt;
  return Ee.createElement(u.Provider, { value: l }, n);
}
var Bm = Im;
function nd(e = Tt) {
  const t = e === Tt ? ed : Qs(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var jm = nd();
function Fm(e = Tt) {
  const t = e === Tt ? jm : nd(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Rn = Fm();
Tm(Cm.useSyncExternalStoreWithSelector);
function te(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Um = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  ma = Um,
  Uo = () => Math.random().toString(36).substring(7).split("").join("."),
  $m = {
    INIT: `@@redux/INIT${Uo()}`,
    REPLACE: `@@redux/REPLACE${Uo()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Uo()}`,
  },
  Bi = $m;
function Ks(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function rd(e, t, n) {
  if (typeof e != "function") throw new Error(te(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(te(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(te(1));
    return n(rd)(e, t);
  }
  let r = e,
    i = t,
    o = new Map(),
    l = o,
    s = 0,
    u = !1;
  function a() {
    l === o &&
      ((l = new Map()),
      o.forEach((R, d) => {
        l.set(d, R);
      }));
  }
  function p() {
    if (u) throw new Error(te(3));
    return i;
  }
  function h(R) {
    if (typeof R != "function") throw new Error(te(4));
    if (u) throw new Error(te(5));
    let d = !0;
    a();
    const c = s++;
    return (
      l.set(c, R),
      function () {
        if (d) {
          if (u) throw new Error(te(6));
          (d = !1), a(), l.delete(c), (o = null);
        }
      }
    );
  }
  function m(R) {
    if (!Ks(R)) throw new Error(te(7));
    if (typeof R.type > "u") throw new Error(te(8));
    if (typeof R.type != "string") throw new Error(te(17));
    if (u) throw new Error(te(9));
    try {
      (u = !0), (i = r(i, R));
    } finally {
      u = !1;
    }
    return (
      (o = l).forEach((c) => {
        c();
      }),
      R
    );
  }
  function v(R) {
    if (typeof R != "function") throw new Error(te(10));
    (r = R), m({ type: Bi.REPLACE });
  }
  function g() {
    const R = h;
    return {
      subscribe(d) {
        if (typeof d != "object" || d === null) throw new Error(te(11));
        function c() {
          const y = d;
          y.next && y.next(p());
        }
        return c(), { unsubscribe: R(c) };
      },
      [ma]() {
        return this;
      },
    };
  }
  return (
    m({ type: Bi.INIT }),
    { dispatch: m, subscribe: h, getState: p, replaceReducer: v, [ma]: g }
  );
}
function Vm(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Bi.INIT }) > "u") throw new Error(te(12));
    if (typeof n(void 0, { type: Bi.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(te(13));
  });
}
function Hm(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let i;
  try {
    Vm(n);
  } catch (o) {
    i = o;
  }
  return function (l = {}, s) {
    if (i) throw i;
    let u = !1;
    const a = {};
    for (let p = 0; p < r.length; p++) {
      const h = r[p],
        m = n[h],
        v = l[h],
        g = m(v, s);
      if (typeof g > "u") throw (s && s.type, new Error(te(14)));
      (a[h] = g), (u = u || g !== v);
    }
    return (u = u || r.length !== Object.keys(l).length), u ? a : l;
  };
}
function ji(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function Wm(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(te(15));
    };
    const l = { getState: i.getState, dispatch: (u, ...a) => o(u, ...a) },
      s = e.map((u) => u(l));
    return (o = ji(...s)(i.dispatch)), { ...i, dispatch: o };
  };
}
function Qm(e) {
  return Ks(e) && "type" in e && typeof e.type == "string";
}
var id = Symbol.for("immer-nothing"),
  ya = Symbol.for("immer-draftable"),
  xe = Symbol.for("immer-state");
function $e(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Cn = Object.getPrototypeOf;
function Kt(e) {
  return !!e && !!e[xe];
}
function ut(e) {
  var t;
  return e
    ? od(e) ||
        Array.isArray(e) ||
        !!e[ya] ||
        !!((t = e.constructor) != null && t[ya]) ||
        lo(e) ||
        so(e)
    : !1;
}
var Km = Object.prototype.constructor.toString();
function od(e) {
  if (!e || typeof e != "object") return !1;
  const t = Cn(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === Km;
}
function Fi(e, t) {
  oo(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function oo(e) {
  const t = e[xe];
  return t ? t.type_ : Array.isArray(e) ? 1 : lo(e) ? 2 : so(e) ? 3 : 0;
}
function Bl(e, t) {
  return oo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ld(e, t, n) {
  const r = oo(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function qm(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function lo(e) {
  return e instanceof Map;
}
function so(e) {
  return e instanceof Set;
}
function Mt(e) {
  return e.copy_ || e.base_;
}
function jl(e, t) {
  if (lo(e)) return new Map(e);
  if (so(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = od(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[xe];
    let i = Reflect.ownKeys(r);
    for (let o = 0; o < i.length; o++) {
      const l = i[o],
        s = r[l];
      s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
        (s.get || s.set) &&
          (r[l] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[l],
          });
    }
    return Object.create(Cn(e), r);
  } else {
    const r = Cn(e);
    if (r !== null && n) return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function qs(e, t = !1) {
  return (
    uo(e) ||
      Kt(e) ||
      !ut(e) ||
      (oo(e) > 1 && (e.set = e.add = e.clear = e.delete = Ym),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => qs(r, !0))),
    e
  );
}
function Ym() {
  $e(2);
}
function uo(e) {
  return Object.isFrozen(e);
}
var Xm = {};
function qt(e) {
  const t = Xm[e];
  return t || $e(0, e), t;
}
var kr;
function sd() {
  return kr;
}
function Gm(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function va(e, t) {
  t &&
    (qt("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Fl(e) {
  Ul(e), e.drafts_.forEach(Jm), (e.drafts_ = null);
}
function Ul(e) {
  e === kr && (kr = e.parent_);
}
function ga(e) {
  return (kr = Gm(kr, e));
}
function Jm(e) {
  const t = e[xe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function wa(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[xe].modified_ && (Fl(t), $e(4)),
        ut(e) && ((e = Ui(t, e)), t.parent_ || $i(t, e)),
        t.patches_ &&
          qt("Patches").generateReplacementPatches_(
            n[xe].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Ui(t, n, [])),
    Fl(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== id ? e : void 0
  );
}
function Ui(e, t, n) {
  if (uo(t)) return t;
  const r = t[xe];
  if (!r) return Fi(t, (i, o) => ka(e, r, t, i, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return $i(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i,
      l = !1;
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (l = !0)),
      Fi(o, (s, u) => ka(e, r, i, s, u, n, l)),
      $i(e, i, !1),
      n &&
        e.patches_ &&
        qt("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function ka(e, t, n, r, i, o, l) {
  if (Kt(i)) {
    const s =
        o && t && t.type_ !== 3 && !Bl(t.assigned_, r) ? o.concat(r) : void 0,
      u = Ui(e, i, s);
    if ((ld(n, r, u), Kt(u))) e.canAutoFreeze_ = !1;
    else return;
  } else l && n.add(i);
  if (ut(i) && !uo(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Ui(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        $i(e, i);
  }
}
function $i(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && qs(t, n);
}
function Zm(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : sd(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    o = Ys;
  n && ((i = [r]), (o = Sr));
  const { revoke: l, proxy: s } = Proxy.revocable(i, o);
  return (r.draft_ = s), (r.revoke_ = l), s;
}
var Ys = {
    get(e, t) {
      if (t === xe) return e;
      const n = Mt(e);
      if (!Bl(n, t)) return bm(e, n, t);
      const r = n[t];
      return e.finalized_ || !ut(r)
        ? r
        : r === $o(e.base_, t)
        ? (Vo(e), (e.copy_[t] = Vl(r, e)))
        : r;
    },
    has(e, t) {
      return t in Mt(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Mt(e));
    },
    set(e, t, n) {
      const r = ud(Mt(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = $o(Mt(e), t),
          o = i == null ? void 0 : i[xe];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (qm(n, i) && (n !== void 0 || Bl(e.base_, t))) return !0;
        Vo(e), $l(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        $o(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Vo(e), $l(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Mt(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      $e(11);
    },
    getPrototypeOf(e) {
      return Cn(e.base_);
    },
    setPrototypeOf() {
      $e(12);
    },
  },
  Sr = {};
Fi(Ys, (e, t) => {
  Sr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Sr.deleteProperty = function (e, t) {
  return Sr.set.call(this, e, t, void 0);
};
Sr.set = function (e, t, n) {
  return Ys.set.call(this, e[0], t, n, e[0]);
};
function $o(e, t) {
  const n = e[xe];
  return (n ? Mt(n) : e)[t];
}
function bm(e, t, n) {
  var i;
  const r = ud(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function ud(e, t) {
  if (!(t in e)) return;
  let n = Cn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Cn(n);
  }
}
function $l(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && $l(e.parent_));
}
function Vo(e) {
  e.copy_ || (e.copy_ = jl(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var ey = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const l = this;
          return function (u = o, ...a) {
            return l.produce(u, (p) => n.call(this, p, ...a));
          };
        }
        typeof n != "function" && $e(6),
          r !== void 0 && typeof r != "function" && $e(7);
        let i;
        if (ut(t)) {
          const o = ga(this),
            l = Vl(t, void 0);
          let s = !0;
          try {
            (i = n(l)), (s = !1);
          } finally {
            s ? Fl(o) : Ul(o);
          }
          return va(o, r), wa(i, o);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === id && (i = void 0),
            this.autoFreeze_ && qs(i, !0),
            r)
          ) {
            const o = [],
              l = [];
            qt("Patches").generateReplacementPatches_(t, i, o, l), r(o, l);
          }
          return i;
        } else $e(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (l, ...s) => this.produceWithPatches(l, (u) => t(u, ...s));
        let r, i;
        return [
          this.produce(t, n, (l, s) => {
            (r = l), (i = s);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ut(e) || $e(8), Kt(e) && (e = ty(e));
    const t = ga(this),
      n = Vl(e, void 0);
    return (n[xe].isManual_ = !0), Ul(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[xe];
    (!n || !n.isManual_) && $e(9);
    const { scope_: r } = n;
    return va(r, t), wa(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = qt("Patches").applyPatches_;
    return Kt(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function Vl(e, t) {
  const n = lo(e)
    ? qt("MapSet").proxyMap_(e, t)
    : so(e)
    ? qt("MapSet").proxySet_(e, t)
    : Zm(e, t);
  return (t ? t.scope_ : sd()).drafts_.push(n), n;
}
function ty(e) {
  return Kt(e) || $e(10, e), ad(e);
}
function ad(e) {
  if (!ut(e) || uo(e)) return e;
  const t = e[xe];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = jl(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = jl(e, !0);
  return (
    Fi(n, (r, i) => {
      ld(n, r, ad(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Ne = new ey(),
  cd = Ne.produce;
Ne.produceWithPatches.bind(Ne);
Ne.setAutoFreeze.bind(Ne);
Ne.setUseStrictShallowCopy.bind(Ne);
Ne.applyPatches.bind(Ne);
Ne.createDraft.bind(Ne);
Ne.finishDraft.bind(Ne);
function fd(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : i(o);
}
var ny = fd(),
  ry = fd,
  iy =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? ji
              : ji.apply(null, arguments);
        };
function Sa(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(We(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Qm(r) && r.type === e),
    n
  );
}
var dd = class Kn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Kn.prototype);
  }
  static get [Symbol.species]() {
    return Kn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Kn(...t[0].concat(this))
      : new Kn(...t.concat(this));
  }
};
function Ea(e) {
  return ut(e) ? cd(e, () => {}) : e;
}
function _a(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(We(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function oy(e) {
  return typeof e == "boolean";
}
var ly = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let l = new dd();
      return n && (oy(n) ? l.push(ny) : l.push(ry(n.extraArgument))), l;
    },
  sy = "RTK_autoBatch",
  pd = (e) => (t) => {
    setTimeout(t, e);
  },
  uy =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : pd(10),
  ay =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        o = !1,
        l = !1;
      const s = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? uy
            : e.type === "callback"
            ? e.queueNotification
            : pd(e.timeout),
        a = () => {
          (l = !1), o && ((o = !1), s.forEach((p) => p()));
        };
      return Object.assign({}, r, {
        subscribe(p) {
          const h = () => i && p(),
            m = r.subscribe(h);
          return (
            s.add(p),
            () => {
              m(), s.delete(p);
            }
          );
        },
        dispatch(p) {
          var h;
          try {
            return (
              (i = !((h = p == null ? void 0 : p.meta) != null && h[sy])),
              (o = !i),
              o && (l || ((l = !0), u(a))),
              r.dispatch(p)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  cy = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new dd(e);
      return r && i.push(ay(typeof r == "object" ? r : void 0)), i;
    };
function fy(e) {
  const t = ly(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: l = void 0,
    } = e || {};
  let s;
  if (typeof n == "function") s = n;
  else if (Ks(n)) s = Hm(n);
  else throw new Error(We(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let a = ji;
  i && (a = iy({ trace: !1, ...(typeof i == "object" && i) }));
  const p = Wm(...u),
    h = cy(p);
  let m = typeof l == "function" ? l(h) : h();
  const v = a(...m);
  return rd(s, o, v);
}
function hd(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(o, l) {
      const s = typeof o == "string" ? o : o.type;
      if (!s) throw new Error(We(28));
      if (s in t) throw new Error(We(29));
      return (t[s] = l), i;
    },
    addMatcher(o, l) {
      return n.push({ matcher: o, reducer: l }), i;
    },
    addDefaultCase(o) {
      return (r = o), i;
    },
  };
  return e(i), [t, n, r];
}
function dy(e) {
  return typeof e == "function";
}
function py(e, t) {
  let [n, r, i] = hd(t),
    o;
  if (dy(e)) o = () => Ea(e());
  else {
    const s = Ea(e);
    o = () => s;
  }
  function l(s = o(), u) {
    let a = [
      n[u.type],
      ...r.filter(({ matcher: p }) => p(u)).map(({ reducer: p }) => p),
    ];
    return (
      a.filter((p) => !!p).length === 0 && (a = [i]),
      a.reduce((p, h) => {
        if (h)
          if (Kt(p)) {
            const v = h(p, u);
            return v === void 0 ? p : v;
          } else {
            if (ut(p)) return cd(p, (m) => h(m, u));
            {
              const m = h(p, u);
              if (m === void 0) {
                if (p === null) return p;
                throw new Error(We(9));
              }
              return m;
            }
          }
        return p;
      }, s)
    );
  }
  return (l.getInitialState = o), l;
}
var hy = Symbol.for("rtk-slice-createasyncthunk");
function my(e, t) {
  return `${e}/${t}`;
}
function yy({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[hy];
  return function (i) {
    const { name: o, reducerPath: l = o } = i;
    if (!o) throw new Error(We(11));
    typeof process < "u";
    const s =
        (typeof i.reducers == "function" ? i.reducers(gy()) : i.reducers) || {},
      u = Object.keys(s),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      p = {
        addCase(f, y) {
          const k = typeof f == "string" ? f : f.type;
          if (!k) throw new Error(We(12));
          if (k in a.sliceCaseReducersByType) throw new Error(We(13));
          return (a.sliceCaseReducersByType[k] = y), p;
        },
        addMatcher(f, y) {
          return a.sliceMatchers.push({ matcher: f, reducer: y }), p;
        },
        exposeAction(f, y) {
          return (a.actionCreators[f] = y), p;
        },
        exposeCaseReducer(f, y) {
          return (a.sliceCaseReducersByName[f] = y), p;
        },
      };
    u.forEach((f) => {
      const y = s[f],
        k = {
          reducerName: f,
          type: my(o, f),
          createNotation: typeof i.reducers == "function",
        };
      ky(y) ? Ey(k, y, p, t) : wy(k, y, p);
    });
    function h() {
      const [f = {}, y = [], k = void 0] =
          typeof i.extraReducers == "function"
            ? hd(i.extraReducers)
            : [i.extraReducers],
        C = { ...f, ...a.sliceCaseReducersByType };
      return py(i.initialState, (_) => {
        for (let E in C) _.addCase(E, C[E]);
        for (let E of a.sliceMatchers) _.addMatcher(E.matcher, E.reducer);
        for (let E of y) _.addMatcher(E.matcher, E.reducer);
        k && _.addDefaultCase(k);
      });
    }
    const m = (f) => f,
      v = new Map();
    let g;
    function S(f, y) {
      return g || (g = h()), g(f, y);
    }
    function R() {
      return g || (g = h()), g.getInitialState();
    }
    function d(f, y = !1) {
      function k(_) {
        let E = _[f];
        return typeof E > "u" && y && (E = R()), E;
      }
      function C(_ = m) {
        const E = _a(v, y, { insert: () => new WeakMap() });
        return _a(E, _, {
          insert: () => {
            const F = {};
            for (const [L, we] of Object.entries(i.selectors ?? {}))
              F[L] = vy(we, _, R, y);
            return F;
          },
        });
      }
      return {
        reducerPath: f,
        getSelectors: C,
        get selectors() {
          return C(k);
        },
        selectSlice: k,
      };
    }
    const c = {
      name: o,
      reducer: S,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: R,
      ...d(l),
      injectInto(f, { reducerPath: y, ...k } = {}) {
        const C = y ?? l;
        return (
          f.inject({ reducerPath: C, reducer: S }, k), { ...c, ...d(C, !0) }
        );
      },
    };
    return c;
  };
}
function vy(e, t, n, r) {
  function i(o, ...l) {
    let s = t(o);
    return typeof s > "u" && r && (s = n()), e(s, ...l);
  }
  return (i.unwrapped = e), i;
}
var md = yy();
function gy() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function wy({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, l;
  if ("reducer" in r) {
    if (n && !Sy(r)) throw new Error(We(17));
    (o = r.reducer), (l = r.prepare);
  } else o = r;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, l ? Sa(e, l) : Sa(e));
}
function ky(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Sy(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ey({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(We(18));
  const {
      payloadCreator: o,
      fulfilled: l,
      pending: s,
      rejected: u,
      settled: a,
      options: p,
    } = n,
    h = i(e, o, p);
  r.exposeAction(t, h),
    l && r.addCase(h.fulfilled, l),
    s && r.addCase(h.pending, s),
    u && r.addCase(h.rejected, u),
    a && r.addMatcher(h.settled, a),
    r.exposeCaseReducer(t, {
      fulfilled: l || qr,
      pending: s || qr,
      rejected: u || qr,
      settled: a || qr,
    });
}
function qr() {}
function We(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const yd = md({
    name: "game",
    initialState: {
      playerOneTurn: null,
      playerNumber: null,
      roomName: "",
      winner: 0,
      gameState: [
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      ],
      rematchRequested: !1,
    },
    reducers: {
      setPlayerNumber: (e, t) => {
        e.playerNumber = t.payload;
      },
      setPlayerTurn: (e, t) => {
        e.playerOneTurn = t.payload;
      },
      setRoomName: (e, t) => {
        e.roomName = t.payload;
      },
      setGameState: (e, t) => {
        const n = t.payload.x,
          r = t.payload.y,
          i = t.payload.z,
          o = e.playerOneTurn ? 1 : 2;
        (e.gameState[n][r][i] = o), (e.playerOneTurn = !e.playerOneTurn);
      },
      setWinner: (e, t) => {
        e.winner = t.payload;
      },
      resetGame: (e) => {
        (e.playerOneTurn = null),
          (e.winner = 0),
          (e.gameState = [
            [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ],
            [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ],
            [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ],
          ]);
      },
      setRematchRequested: (e, t) => {
        e.rematchRequested = t.payload;
      },
    },
  }),
  {
    setPlayerNumber: vd,
    setPlayerTurn: gd,
    setRoomName: wd,
    setGameState: _y,
    setWinner: Cy,
    resetGame: kd,
    setRematchRequested: Ca,
  } = yd.actions,
  xy = yd.reducer,
  Ze = Object.create(null);
Ze.open = "0";
Ze.close = "1";
Ze.ping = "2";
Ze.pong = "3";
Ze.message = "4";
Ze.upgrade = "5";
Ze.noop = "6";
const ci = Object.create(null);
Object.keys(Ze).forEach((e) => {
  ci[Ze[e]] = e;
});
const Hl = { type: "error", data: "parser error" },
  Sd =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Ed = typeof ArrayBuffer == "function",
  _d = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Xs = ({ type: e, data: t }, n, r) =>
    Sd && t instanceof Blob
      ? n
        ? r(t)
        : xa(t, r)
      : Ed && (t instanceof ArrayBuffer || _d(t))
      ? n
        ? r(t)
        : xa(new Blob([t]), r)
      : r(Ze[e] + (t || "")),
  xa = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function Na(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ho;
function Ny(e, t) {
  if (Sd && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Na).then(t);
  if (Ed && (e.data instanceof ArrayBuffer || _d(e.data))) return t(Na(e.data));
  Xs(e, !1, (n) => {
    Ho || (Ho = new TextEncoder()), t(Ho.encode(n));
  });
}
const Ta = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  qn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Ta.length; e++) qn[Ta.charCodeAt(e)] = e;
const Ty = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      o,
      l,
      s,
      u;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const a = new ArrayBuffer(t),
      p = new Uint8Array(a);
    for (r = 0; r < n; r += 4)
      (o = qn[e.charCodeAt(r)]),
        (l = qn[e.charCodeAt(r + 1)]),
        (s = qn[e.charCodeAt(r + 2)]),
        (u = qn[e.charCodeAt(r + 3)]),
        (p[i++] = (o << 2) | (l >> 4)),
        (p[i++] = ((l & 15) << 4) | (s >> 2)),
        (p[i++] = ((s & 3) << 6) | (u & 63));
    return a;
  },
  Ry = typeof ArrayBuffer == "function",
  Gs = (e, t) => {
    if (typeof e != "string") return { type: "message", data: Cd(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: Py(e.substring(1), t) }
      : ci[n]
      ? e.length > 1
        ? { type: ci[n], data: e.substring(1) }
        : { type: ci[n] }
      : Hl;
  },
  Py = (e, t) => {
    if (Ry) {
      const n = Ty(e);
      return Cd(n, t);
    } else return { base64: !0, data: e };
  },
  Cd = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  xd = "",
  Oy = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let i = 0;
    e.forEach((o, l) => {
      Xs(o, !1, (s) => {
        (r[l] = s), ++i === n && t(r.join(xd));
      });
    });
  },
  Ly = (e, t) => {
    const n = e.split(xd),
      r = [];
    for (let i = 0; i < n.length; i++) {
      const o = Gs(n[i], t);
      if ((r.push(o), o.type === "error")) break;
    }
    return r;
  };
function zy() {
  return new TransformStream({
    transform(e, t) {
      Ny(e, (n) => {
        const r = n.length;
        let i;
        if (r < 126)
          (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const o = new DataView(i.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const o = new DataView(i.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n);
      });
    },
  });
}
let Wo;
function Yr(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Xr(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let i = 0; i < t; i++)
    (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function Ay(e, t) {
  Wo || (Wo = new TextDecoder());
  const n = [];
  let r = 0,
    i = -1,
    o = !1;
  return new TransformStream({
    transform(l, s) {
      for (n.push(l); ; ) {
        if (r === 0) {
          if (Yr(n) < 1) break;
          const u = Xr(n, 1);
          (o = (u[0] & 128) === 128),
            (i = u[0] & 127),
            i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (Yr(n) < 2) break;
          const u = Xr(n, 2);
          (i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (Yr(n) < 8) break;
          const u = Xr(n, 8),
            a = new DataView(u.buffer, u.byteOffset, u.length),
            p = a.getUint32(0);
          if (p > Math.pow(2, 21) - 1) {
            s.enqueue(Hl);
            break;
          }
          (i = p * Math.pow(2, 32) + a.getUint32(4)), (r = 3);
        } else {
          if (Yr(n) < i) break;
          const u = Xr(n, i);
          s.enqueue(Gs(o ? u : Wo.decode(u), t)), (r = 0);
        }
        if (i === 0 || i > e) {
          s.enqueue(Hl);
          break;
        }
      }
    },
  });
}
const Nd = 4;
function X(e) {
  if (e) return Dy(e);
}
function Dy(e) {
  for (var t in X.prototype) e[t] = X.prototype[t];
  return e;
}
X.prototype.on = X.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
X.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
X.prototype.off =
  X.prototype.removeListener =
  X.prototype.removeAllListeners =
  X.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, i = 0; i < n.length; i++)
        if (((r = n[i]), r === t || r.fn === t)) {
          n.splice(i, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
X.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
  }
  return this;
};
X.prototype.emitReserved = X.prototype.emit;
X.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
X.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const Le =
  typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Function("return this")();
function Td(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const My = Le.setTimeout,
  Iy = Le.clearTimeout;
function ao(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = My.bind(Le)), (e.clearTimeoutFn = Iy.bind(Le)))
    : ((e.setTimeoutFn = Le.setTimeout.bind(Le)),
      (e.clearTimeoutFn = Le.clearTimeout.bind(Le)));
}
const By = 1.33;
function jy(e) {
  return typeof e == "string"
    ? Fy(e)
    : Math.ceil((e.byteLength || e.size) * By);
}
function Fy(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
function Uy(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function $y(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
class Vy extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class Js extends X {
  constructor(t) {
    super(),
      (this.writable = !1),
      ao(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new Vy(t, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const n = Gs(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const n = Uy(t);
    return n.length ? "?" + n : "";
  }
}
const Rd =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      ""
    ),
  Wl = 64,
  Hy = {};
let Ra = 0,
  Gr = 0,
  Pa;
function Oa(e) {
  let t = "";
  do (t = Rd[e % Wl] + t), (e = Math.floor(e / Wl));
  while (e > 0);
  return t;
}
function Pd() {
  const e = Oa(+new Date());
  return e !== Pa ? ((Ra = 0), (Pa = e)) : e + "." + Oa(Ra++);
}
for (; Gr < Wl; Gr++) Hy[Rd[Gr]] = Gr;
let Od = !1;
try {
  Od = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const Wy = Od;
function Ld(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Wy)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new Le[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function Qy() {}
const Ky = (function () {
  return new Ld({ xdomain: !1 }).responseType != null;
})();
class qy extends Js {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < "u")) {
      const r = location.protocol === "https:";
      let i = location.port;
      i || (i = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          i !== t.port);
    }
    const n = t && t.forceBase64;
    (this.supportsBinary = Ky && !n),
      this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  poll() {
    (this.polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    Ly(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this.polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this.poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      Oy(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = Pd()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts),
      new Je(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (i, o) => {
        this.onError("xhr post error", i, o);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
class Je extends X {
  constructor(t, n) {
    super(),
      ao(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    var t;
    const n = Td(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    n.xdomain = !!this.opts.xd;
    const r = (this.xhr = new Ld(n));
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) &&
              r.setRequestHeader(i, this.opts.extraHeaders[i]);
        }
      } catch {}
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
        (r.onreadystatechange = () => {
          var i;
          r.readyState === 3 &&
            ((i = this.opts.cookieJar) === null ||
              i === void 0 ||
              i.parseCookies(r)),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this.data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this.index = Je.requestsCount++), (Je.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = Qy), t))
        try {
          this.xhr.abort();
        } catch {}
      typeof document < "u" && delete Je.requests[this.index],
        (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
}
Je.requestsCount = 0;
Je.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", La);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Le ? "pagehide" : "unload";
    addEventListener(e, La, !1);
  }
}
function La() {
  for (let e in Je.requests)
    Je.requests.hasOwnProperty(e) && Je.requests[e].abort();
}
const Zs =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  Jr = Le.WebSocket || Le.MozWebSocket,
  za = !0,
  Yy = "arraybuffer",
  Aa =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class Xy extends Js {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64);
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = Aa
        ? {}
        : Td(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = za && !Aa ? (n ? new Jr(t, n) : new Jr(t)) : new Jr(t, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      Xs(r, this.supportsBinary, (o) => {
        const l = {};
        try {
          za && this.ws.send(o);
        } catch {}
        i &&
          Zs(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = Pd()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  check() {
    return !!Jr;
  }
}
class Gy extends Js {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" &&
      ((this.transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      )),
      this.transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((t) => {
          this.onError("webtransport error", t);
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          const n = Ay(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            i = zy();
          i.readable.pipeTo(t.writable), (this.writer = i.writable.getWriter());
          const o = () => {
            r.read()
              .then(({ done: s, value: u }) => {
                s || (this.onPacket(u), o());
              })
              .catch((s) => {});
          };
          o();
          const l = { type: "open" };
          this.query.sid && (l.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(l).then(() => this.onOpen());
        });
      }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      this.writer.write(r).then(() => {
        i &&
          Zs(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const Jy = { websocket: Xy, webtransport: Gy, polling: qy },
  Zy =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  by = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function Ql(e) {
  if (e.length > 2e3) throw "URI too long";
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let i = Zy.exec(e || ""),
    o = {},
    l = 14;
  for (; l--; ) o[by[l]] = i[l] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((o.source = t),
      (o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":")),
      (o.authority = o.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (o.ipv6uri = !0)),
    (o.pathNames = e0(o, o.path)),
    (o.queryKey = t0(o, o.query)),
    o
  );
}
function e0(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function t0(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
      i && (n[i] = o);
    }),
    n
  );
}
let zd = class Jt extends X {
  constructor(t, n = {}) {
    super(),
      (this.binaryType = Yy),
      (this.writeBuffer = []),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = Ql(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = Ql(n.host).host),
      ao(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = n.transports || [
        "polling",
        "websocket",
        "webtransport",
      ]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = $y(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == "function" &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
        this.hostname !== "localhost" &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost",
            });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = Nd), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    );
    return new Jy[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      Jt.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    )
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (n) => this.onClose("transport close", n));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    Jt.priorWebsocketSuccess = !1;
    const i = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (h) => {
          if (!r)
            if (h.type === "pong" && h.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              (Jt.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (p(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const m = new Error("probe error");
              (m.transport = n.name), this.emitReserved("upgradeError", m);
            }
        }));
    };
    function o() {
      r || ((r = !0), p(), n.close(), (n = null));
    }
    const l = (h) => {
      const m = new Error("probe error: " + h);
      (m.transport = n.name), o(), this.emitReserved("upgradeError", m);
    };
    function s() {
      l("transport closed");
    }
    function u() {
      l("socket closed");
    }
    function a(h) {
      n && h.name !== n.name && o();
    }
    const p = () => {
      n.removeListener("open", i),
        n.removeListener("error", l),
        n.removeListener("close", s),
        this.off("close", u),
        this.off("upgrading", a);
    };
    n.once("open", i),
      n.once("error", l),
      n.once("close", s),
      this.once("close", u),
      this.once("upgrading", a),
      this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      (Jt.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush(),
      this.readyState === "open" && this.opts.upgrade)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t),
        this.emitReserved("heartbeat"),
        this.resetPingTimeout(),
        t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if ((i && (n += jy(i)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  sendPacket(t, n, r, i) {
    if (
      (typeof n == "function" && ((i = n), (n = void 0)),
      typeof r == "function" && ((i = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const o = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", o),
      this.writeBuffer.push(o),
      i && this.once("flush", i),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  onError(t) {
    (Jt.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t);
  }
  onClose(t, n) {
    (this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing") &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == "function" &&
        (removeEventListener(
          "beforeunload",
          this.beforeunloadEventListener,
          !1
        ),
        removeEventListener("offline", this.offlineEventListener, !1)),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const i = t.length;
    for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
zd.protocol = Nd;
function n0(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = Ql(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + o + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const r0 = typeof ArrayBuffer == "function",
  i0 = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  Ad = Object.prototype.toString,
  o0 =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Ad.call(Blob) === "[object BlobConstructor]"),
  l0 =
    typeof File == "function" ||
    (typeof File < "u" && Ad.call(File) === "[object FileConstructor]");
function bs(e) {
  return (
    (r0 && (e instanceof ArrayBuffer || i0(e))) ||
    (o0 && e instanceof Blob) ||
    (l0 && e instanceof File)
  );
}
function fi(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (fi(e[n])) return !0;
    return !1;
  }
  if (bs(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return fi(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && fi(e[n])) return !0;
  return !1;
}
function s0(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = Kl(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function Kl(e, t) {
  if (!e) return e;
  if (bs(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = Kl(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Kl(e[r], t));
    return n;
  }
  return e;
}
function u0(e, t) {
  return (e.data = ql(e.data, t)), delete e.attachments, e;
}
function ql(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = ql(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = ql(e[n], t));
  return e;
}
const a0 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  c0 = 5;
var A;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(A || (A = {}));
class f0 {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === A.EVENT || t.type === A.ACK) && fi(t)
      ? this.encodeAsBinary({
          type: t.type === A.EVENT ? A.BINARY_EVENT : A.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === A.BINARY_EVENT || t.type === A.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = s0(t),
      r = this.encodeAsString(n.packet),
      i = n.buffers;
    return i.unshift(r), i;
  }
}
function Da(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class eu extends X {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === A.BINARY_EVENT;
      r || n.type === A.BINARY_ACK
        ? ((n.type = r ? A.EVENT : A.ACK),
          (this.reconstructor = new d0(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (bs(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (A[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === A.BINARY_EVENT || r.type === A.BINARY_ACK) {
      const o = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const l = t.substring(o, n);
      if (l != Number(l) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(l);
    }
    if (t.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(o, n);
    } else r.nsp = "/";
    const i = t.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const o = n + 1;
      for (; ++n; ) {
        const l = t.charAt(n);
        if (l == null || Number(l) != l) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(o, n + 1));
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n));
      if (eu.isPayloadValid(r.type, o)) r.data = o;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case A.CONNECT:
        return Da(n);
      case A.DISCONNECT:
        return n === void 0;
      case A.CONNECT_ERROR:
        return typeof n == "string" || Da(n);
      case A.EVENT:
      case A.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && a0.indexOf(n[0]) === -1))
        );
      case A.ACK:
      case A.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class d0 {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = u0(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const p0 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: eu,
      Encoder: f0,
      get PacketType() {
        return A;
      },
      protocol: c0,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Fe(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const h0 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Dd extends X {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      Fe(t, "open", this.onopen.bind(this)),
      Fe(t, "packet", this.onpacket.bind(this)),
      Fe(t, "error", this.onerror.bind(this)),
      Fe(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    if (h0.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const r = { type: A.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const l = this.ids++,
        s = n.pop();
      this._registerAckCallback(l, s), (r.id = l);
    }
    const i =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!i || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const i =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let s = 0; s < this.sendBuffer.length; s++)
          this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
        n.call(this, new Error("operation has timed out"));
      }, i),
      l = (...s) => {
        this.io.clearTimeoutFn(o), n.apply(this, s);
      };
    (l.withError = !0), (this.acks[t] = l);
  }
  emitWithAck(t, ...n) {
    return new Promise((r, i) => {
      const o = (l, s) => (l ? i(l) : r(s));
      (o.withError = !0), n.push(o), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((i, ...o) =>
      r !== this._queue[0]
        ? void 0
        : (i !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(i))
            : (this._queue.shift(), n && n(null, ...o)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: A.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t],
          r.withError &&
            r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case A.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case A.EVENT:
        case A.BINARY_EVENT:
          this.onevent(t);
          break;
        case A.ACK:
        case A.BINARY_ACK:
          this.onack(t);
          break;
        case A.DISCONNECT:
          this.ondisconnect();
          break;
        case A.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...i) {
      r || ((r = !0), n.packet({ type: A.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" &&
      (delete this.acks[t.id],
      n.withError && t.data.unshift(null),
      n.apply(this, t.data));
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: A.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function Pn(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
Pn.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
Pn.prototype.reset = function () {
  this.attempts = 0;
};
Pn.prototype.setMin = function (e) {
  this.ms = e;
};
Pn.prototype.setMax = function (e) {
  this.max = e;
};
Pn.prototype.setJitter = function (e) {
  this.jitter = e;
};
class Yl extends X {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      ao(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new Pn({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const i = n.parser || p0;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new zd(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const i = Fe(n, "open", function () {
        r.onopen(), t && t();
      }),
      o = (s) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", s),
          t ? t(s) : this.maybeReconnectOnOpen();
      },
      l = Fe(n, "error", o);
    if (this._timeout !== !1) {
      const s = this._timeout,
        u = this.setTimeoutFn(() => {
          i(), o(new Error("timeout")), n.close();
        }, s);
      this.opts.autoUnref && u.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(u);
        });
    }
    return this.subs.push(i), this.subs.push(l), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Fe(t, "ping", this.onping.bind(this)),
      Fe(t, "data", this.ondata.bind(this)),
      Fe(t, "error", this.onerror.bind(this)),
      Fe(t, "close", this.onclose.bind(this)),
      Fe(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    Zs(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Dd(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", i))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const $n = {};
function di(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = n0(e, t.path || "/socket.io"),
    r = n.source,
    i = n.id,
    o = n.path,
    l = $n[i] && o in $n[i].nsps,
    s = t.forceNew || t["force new connection"] || t.multiplex === !1 || l;
  let u;
  return (
    s ? (u = new Yl(r, t)) : ($n[i] || ($n[i] = new Yl(r, t)), (u = $n[i])),
    n.query && !t.query && (t.query = n.queryKey),
    u.socket(n.path, t)
  );
}
Object.assign(di, { Manager: Yl, Socket: Dd, io: di, connect: di });
const Md = Hi.createContext();
function On() {
  return re.useContext(Md);
}
function m0({ children: e }) {
  const [t, n] = re.useState();
  return (
    re.useEffect(() => {
      const r = di("http://localhost:4000");
      return n(r), () => r.close();
    }, []),
    T.jsx(Md.Provider, { value: t, children: e })
  );
}
function y0({ positionValues: e }) {
  Rn();
  const t = On(),
    n = Y((v) => v.game.playerOneTurn),
    r = Y((v) => v.game.playerNumber),
    i = Y((v) => v.game.roomName),
    o = Y((v) => v.game.winner),
    l = e.x,
    s = e.y,
    u = e.z,
    a = Y((v) => v.game.gameState[l][s][u]);
  let p = "rgba(252, 252, 142, 0.671)";
  a === 1 && (p = "hotpink"), a === 2 && (p = "limegreen");
  const h = (n && r === 1) || (!n && r === 2),
    m = () => {
      a === 0 &&
        o === 0 &&
        h &&
        t.emit("squareClicked", { positionValues: e, roomName: i });
    };
  return T.jsx("div", {
    className: "Side",
    onClick: m,
    style: { backgroundColor: `${p}` },
  });
}
function v0({ positionValues: e }) {
  const t = [];
  for (let n = 0; n < 6; n++) {
    let r = e.x + e.y + e.z + n;
    t.push(T.jsx(y0, { positionValues: e }, r));
  }
  return T.jsx("div", { className: "Cube", children: t });
}
function g0({ zValue: e }) {
  let t = [];
  for (let n = 0; n < 3; n++)
    for (let r = 0; r < 3; r++) {
      const i = r + n + e,
        o = { x: r, y: n, z: e };
      t.push(T.jsx(v0, { positionValues: o }, i));
    }
  return T.jsx("div", { className: "Sheet", children: t });
}
function Id() {
  const e = Y((o) => o.game.playerOneTurn),
    t = Y((o) => o.game.winner);
  let n = "rgba(252, 252, 142)";
  t === 0 && e != null && (e === !0 ? (n = "hotpink") : (n = "limegreen"));
  const r = T.jsx("div", {
    className: "indicatorCubeSide",
    style: { backgroundColor: n },
  });
  let i = [];
  for (let o = 0; o < 6; o++) i.push(r);
  return T.jsx("div", {
    className: "indicatorCubeDiv",
    children: T.jsx("div", {
      className: "indicatorCubeWrapper",
      children: T.jsx("div", { className: "indicatorCube", children: i }),
    }),
  });
}
function w0() {
  const e = Y((l) => l.game.playerOneTurn),
    t = Y((l) => l.game.rematchRequested),
    n = Y((l) => l.game.roomName),
    r = Y((l) => l.game.winner),
    i = Y((l) => l.game.playerNumber),
    o = t
      ? "Awaiting Accept Rematch..."
      : `Room Name: ${n}. Awaiting Opponent...`;
  return T.jsxs("div", {
    className: "GameInfo",
    children: [
      T.jsx(Id, {}),
      r === 0 &&
        ((e && i === 1) || (!e && i === 2)) &&
        T.jsx("p", { children: "Your Play" }),
      e == null &&
        T.jsx("div", {
          className: "awaitingOpponent",
          children: T.jsx("p", { children: o }),
        }),
    ],
  });
}
function k0() {
  const e = Rn(),
    t = On(),
    n = Y((i) => i.game.roomName),
    r = () => {
      t.emit("requestRematch", n), e(kd());
    };
  return T.jsx("button", { onClick: r, children: "Propose Rematch" });
}
function S0() {
  const e = Rn(),
    t = On(),
    n = Y((i) => i.game.roomName),
    r = () => {
      t.emit("acceptRematch", n), e(kd());
    };
  return T.jsx("div", {
    children: T.jsx("button", { onClick: r, children: "Accept Rematch" }),
  });
}
function E0() {
  const e = Y((n) => n.game.rematchRequested),
    t = Y((n) => n.game.winner);
  return T.jsxs("div", {
    className: "ResetGame",
    children: [!e && T.jsx(k0, {}), e && t !== 0 && T.jsx(S0, {})],
  });
}
const _0 = (e) => {
  let t;
  for (let n of e) {
    for (let r of n)
      if (r[0] !== 0 && r[0] === r[1] && r[0] === r[2]) return (t = r[0]), t;
    if (
      (n[0][0] !== 0 && n[0][0] === n[1][1] && n[0][0] === n[2][2]) ||
      (n[0][2] !== 0 && n[0][2] === n[1][1] && n[0][2] === n[2][0])
    )
      return (t = n[1][1]), t;
    for (let r = 0; r < 3; r++)
      if (n[0][r] !== 0 && n[0][r] === n[1][r] && n[0][r] === n[2][r])
        return (t = n[0][r]), t;
  }
  for (let n = 0; n < 3; n++)
    for (let r = 0; r < 3; r++)
      if (
        e[0][n][r] !== 0 &&
        e[0][n][r] === e[1][n][r] &&
        e[0][n][r] === e[2][n][r]
      )
        return (t = e[0][n][r]), t;
  for (let n = 0; n < 3; n++) {
    if (
      (e[0][0][n] !== 0 &&
        e[0][0][n] === e[1][1][n] &&
        e[0][0][n] === e[2][2][n]) ||
      (e[2][0][n] !== 0 &&
        e[2][0][n] === e[1][1][n] &&
        e[2][0][n] === e[0][2][n])
    )
      return (t = e[1][1][n]), t;
    if (
      (e[0][n][0] !== 0 &&
        e[0][n][0] === e[1][n][1] &&
        e[0][n][0] === e[2][n][2]) ||
      (e[2][n][0] !== 0 &&
        e[2][n][0] === e[1][n][1] &&
        e[2][n][0] === e[0][n][2])
    )
      return (t = e[1][n][1]), t;
    if (
      (e[0][0][0] !== 0 &&
        e[0][0][0] === e[1][1][1] &&
        e[0][0][0] === e[2][2][2]) ||
      (e[0][0][2] !== 0 &&
        e[0][0][2] === e[1][1][1] &&
        e[0][0][2] === e[2][2][0]) ||
      (e[2][0][0] !== 0 &&
        e[2][0][0] === e[1][1][1] &&
        e[2][0][0] === e[0][2][2]) ||
      (e[2][0][2] !== 0 &&
        e[2][0][2] === e[1][1][1] &&
        e[2][0][0] === e[0][2][0])
    )
      return (t = e[1][1][1]), t;
  }
};
function C0() {
  const e = Rn(),
    t = On(),
    n = Y((l) => l.game.gameState),
    r = Y((l) => l.game.winner);
  re.useEffect(() => {
    if (t != null)
      return (
        t.on("gameUpdate", (l) => {
          e(_y(l));
        }),
        () => {
          t.off("gameUpdate");
        }
      );
  }, [t, e]),
    re.useEffect(() => {
      if (t != null)
        return (
          t.on("proposeRematch", () => {
            console.log("rematch Requested"), e(Ca(!0));
          }),
          () => {
            t.off("proposeRematch");
          }
        );
    }, [e, t]),
    re.useEffect(() => {
      if (t != null)
        return (
          t.on("confirmRematch", (l) => {
            e(Ca(!1)),
              e(gd(l)),
              (document.getElementsByTagName("HTML")[0].style.backgroundColor =
                "white");
          }),
          () => t.off("confirmRematch")
        );
    }, [e, t]),
    re.useEffect(() => {
      const l = _0(n);
      l && e(Cy(l));
    }, [e, n]);
  let i = [];
  for (let l = 0; l < 3; l++) i.push(T.jsx(g0, { zValue: l }, "sheet" + l));
  const o = r ? "Game winnerRotation" : "Game";
  return T.jsxs(T.Fragment, {
    children: [
      T.jsx("div", {
        className: "wrapper",
        children: T.jsx("div", { className: o, children: i }),
      }),
      r === 0 ? T.jsx(w0, {}) : T.jsx(E0, {}),
    ],
  });
}
function x0() {
  const e = Rn(),
    t = On(),
    n = () => {
      t.emit("newGame"), e(vd(1));
    };
  return (
    re.useEffect(() => {
      t != null &&
        t.on(
          "issueRoomName",
          (r) => (
            e(wd(r)),
            () => {
              t.off("issueRoomName");
            }
          )
        );
    }, [t, e]),
    T.jsx("div", {
      children: T.jsx("button", { onClick: n, children: "Create A New Game" }),
    })
  );
}
function N0() {
  const e = Rn(),
    t = On(),
    [n, r] = re.useState(""),
    [i, o] = re.useState(""),
    l = (u) => {
      r(u.target.value);
    },
    s = () => {
      t.emit("joinRoomName", n), e(vd(2));
    };
  return (
    re.useEffect(() => {
      t != null &&
        (t.on(
          "confirmJoin",
          ({ playerOneTurn: u, roomName: a }) => (
            e(gd(u)),
            e(wd(a)),
            o(""),
            () => {
              t.off("confirmJoin");
            }
          )
        ),
        t.on(
          "roomFull",
          (u) => (
            o(`Room ${u} already has two players.`),
            () => {
              t.off("roomFull");
            }
          )
        ),
        t.on(
          "noSuchRoom",
          (u) => (
            o(`Room "${u}" does not exist.`),
            () => {
              t.off("noSuchRoom");
            }
          )
        ));
    }, [t, e]),
    T.jsxs("div", {
      children: [
        T.jsx("input", {
          onChange: (u) => l(u),
          value: n,
          type: "text",
          placeholder: "Room Code",
        }),
        T.jsx("br", {}),
        T.jsx("button", { onClick: s, children: "Join A Game" }),
        i !== "" && T.jsx("p", { children: i }),
      ],
    })
  );
}
function T0() {
  return T.jsxs("div", {
    className: "Setup",
    children: [
      T.jsx(Id, {}),
      T.jsxs("div", {
        className: "setupOptions",
        children: [
          T.jsx(x0, {}),
          T.jsx("div", { children: "- OR -" }),
          T.jsx(N0, {}),
        ],
      }),
    ],
  });
}
let tu = !1,
  Bd = null,
  Xl = null,
  Gl = 0,
  jd = 0,
  Fd = !1;
const Ma = (e) => {
    let t = e.touches ? e.touches[0].clientX : e.clientX,
      n = e.touches ? e.touches[0].clientY : e.clientY;
    (Bd = t), (Xl = n);
    let r = Ud();
    (jd = r[0]), (Gl = r[1]), (tu = !0);
  },
  Ud = () => {
    let e = 0,
      t = 0,
      n = 0,
      r;
    if (
      (document.getElementsByClassName("Game")[0] &&
        ((r = document.getElementsByClassName("Game")[0].style.transform),
        console.log("ct: ", r)),
      r)
    ) {
      let i = r.split(" ")[0],
        o = r.split(" ")[1],
        l = r.split(" ")[2];
      (t = i.slice(8, i.length - 4)),
        (e = o.slice(8, o.length - 4)),
        (n = l.slice(8, l.length - 4));
    }
    return [t, e, n];
  },
  Ia = (e) => {
    let t = e.touches ? e.touches[0].clientX : e.clientX,
      n = e.touches ? e.touches[0].clientY : e.clientY;
    if (document.getElementsByClassName("Game")[0]) {
      let r = document.getElementsByClassName("Game")[0];
      if (tu === !0) {
        let i = 0,
          o = t - Bd + Number(jd),
          l;
        Fd ? (l = n - Xl + Number(Gl)) : (l = Xl - n + Number(Gl));
        let s = `rotateY(${o}deg) rotateX(${l}deg) rotateZ(${i}deg)`;
        (r.style.transform = s), console.log(s);
      }
    }
  },
  Ba = () => {
    tu = !1;
    let e = Math.abs(Number(Ud()[0]) % 360);
    Fd = e > 90 && e < 270;
  },
  R0 = () => {
    document.getElementsByTagName("HTML")[0].addEventListener("mousedown", Ma),
      document
        .getElementsByTagName("HTML")[0]
        .addEventListener("mousemove", Ia),
      document.getElementsByTagName("HTML")[0].addEventListener("mouseup", Ba),
      document
        .getElementsByTagName("HTML")[0]
        .addEventListener("touchstart", Ma),
      document
        .getElementsByTagName("HTML")[0]
        .addEventListener("touchmove", Ia),
      document.getElementsByTagName("HTML")[0].addEventListener("touchend", Ba);
  };
function P0() {
  R0();
  const e = Y((n) => n.game.roomName),
    t = Y((n) => n.game.winner);
  return (
    re.useEffect(() => {
      let n = document.getElementsByTagName("HTML")[0];
      t === 2 && (n.style.backgroundColor = "green"),
        t === 1 && (n.style.backgroundColor = "hotpink"),
        t === 0 && (n.style.backroundColor = "white");
    }, [t]),
    T.jsxs(T.Fragment, {
      children: [
        " ",
        T.jsxs("main", {
          children: [
            " ",
            T.jsx("div", {
              children: e === "" ? T.jsx(T0, {}) : T.jsx(C0, {}),
            }),
          ],
        }),
      ],
    })
  );
}
const $d = md({
  name: "view",
  initialState: { rotate: { x: 30, y: 30 }, mouseIsDown: !1, zoom: null },
  reducers: {
    setRotate: (e, t) => {
      e.rotate = { x: t.payload.x, y: t.payload.y };
    },
    setZoom: (e, t) => {
      e.zoom = t.payload;
    },
    setMouseIsDown: (e, t) => {
      e.mouseIsDown = t.payload;
    },
  },
});
$d.actions;
const O0 = $d.reducer,
  L0 = fy({ reducer: { game: xy, view: O0 } });
ym.render(
  T.jsx(Hi.StrictMode, {
    children: T.jsx(m0, {
      children: T.jsx(Bm, { store: L0, children: T.jsx(P0, {}) }),
    }),
  }),
  document.getElementById("root")
);
