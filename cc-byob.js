(function () {
  "use strict";
  var ve,
    k,
    _t,
    H,
    pt,
    gt,
    De,
    Ne,
    Be,
    Me,
    vt,
    ie = {},
    yt = [],
    Sr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    Fe = Array.isArray;
  function D(s, e) {
    for (var t in e) s[t] = e[t];
    return s;
  }
  function mt(s) {
    s && s.parentNode && s.parentNode.removeChild(s);
  }
  function Tr(s, e, t) {
    var r,
      n,
      i,
      o = {};
    for (i in e)
      i == "key" ? (r = e[i]) : i == "ref" ? (n = e[i]) : (o[i] = e[i]);
    if (
      (arguments.length > 2 &&
        (o.children = arguments.length > 3 ? ve.call(arguments, 2) : t),
      typeof s == "function" && s.defaultProps != null)
    )
      for (i in s.defaultProps) o[i] === void 0 && (o[i] = s.defaultProps[i]);
    return ye(s, o, r, n, null);
  }
  function ye(s, e, t, r, n) {
    var i = {
      type: s,
      props: e,
      key: t,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: n ?? ++_t,
      __i: -1,
      __u: 0,
    };
    return n == null && k.vnode != null && k.vnode(i), i;
  }
  function z(s) {
    return s.children;
  }
  function me(s, e) {
    (this.props = s), (this.context = e);
  }
  function Q(s, e) {
    if (e == null) return s.__ ? Q(s.__, s.__i + 1) : null;
    for (var t; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) return t.__e;
    return typeof s.type == "function" ? Q(s) : null;
  }
  function bt(s) {
    var e, t;
    if ((s = s.__) != null && s.__c != null) {
      for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
        if ((t = s.__k[e]) != null && t.__e != null) {
          s.__e = s.__c.base = t.__e;
          break;
        }
      return bt(s);
    }
  }
  function qe(s) {
    ((!s.__d && (s.__d = !0) && H.push(s) && !be.__r++) ||
      pt !== k.debounceRendering) &&
      ((pt = k.debounceRendering) || gt)(be);
  }
  function be() {
    var s, e, t, r, n, i, o, a;
    for (H.sort(De); (s = H.shift()); )
      s.__d &&
        ((e = H.length),
        (r = void 0),
        (i = (n = (t = s).__v).__e),
        (o = []),
        (a = []),
        t.__P &&
          (((r = D({}, n)).__v = n.__v + 1),
          k.vnode && k.vnode(r),
          He(
            t.__P,
            r,
            n,
            t.__n,
            t.__P.namespaceURI,
            32 & n.__u ? [i] : null,
            o,
            i ?? Q(n),
            !!(32 & n.__u),
            a
          ),
          (r.__v = n.__v),
          (r.__.__k[r.__i] = r),
          Et(o, r, a),
          r.__e != i && bt(r)),
        H.length > e && H.sort(De));
    be.__r = 0;
  }
  function wt(s, e, t, r, n, i, o, a, c, l, h) {
    var u,
      d,
      f,
      p,
      m,
      g = (r && r.__k) || yt,
      v = e.length;
    for (t.__d = c, Er(t, e, g), c = t.__d, u = 0; u < v; u++)
      (f = t.__k[u]) != null &&
        ((d = f.__i === -1 ? ie : g[f.__i] || ie),
        (f.__i = u),
        He(s, f, d, n, i, o, a, c, l, h),
        (p = f.__e),
        f.ref &&
          d.ref != f.ref &&
          (d.ref && ze(d.ref, null, f), h.push(f.ref, f.__c || p, f)),
        m == null && p != null && (m = p),
        65536 & f.__u || d.__k === f.__k
          ? (c = kt(f, c, s))
          : typeof f.type == "function" && f.__d !== void 0
          ? (c = f.__d)
          : p && (c = p.nextSibling),
        (f.__d = void 0),
        (f.__u &= -196609));
    (t.__d = c), (t.__e = m);
  }
  function Er(s, e, t) {
    var r,
      n,
      i,
      o,
      a,
      c = e.length,
      l = t.length,
      h = l,
      u = 0;
    for (s.__k = [], r = 0; r < c; r++)
      (n = e[r]) != null && typeof n != "boolean" && typeof n != "function"
        ? ((o = r + u),
          ((n = s.__k[r] =
            typeof n == "string" ||
            typeof n == "number" ||
            typeof n == "bigint" ||
            n.constructor == String
              ? ye(null, n, null, null, null)
              : Fe(n)
              ? ye(z, { children: n }, null, null, null)
              : n.constructor === void 0 && n.__b > 0
              ? ye(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v)
              : n).__ = s),
          (n.__b = s.__b + 1),
          (i = null),
          (a = n.__i = Pr(n, t, o, h)) !== -1 &&
            (h--, (i = t[a]) && (i.__u |= 131072)),
          i == null || i.__v === null
            ? (a == -1 && u--, typeof n.type != "function" && (n.__u |= 65536))
            : a !== o &&
              (a == o - 1
                ? u--
                : a == o + 1
                ? u++
                : (a > o ? u-- : u++, (n.__u |= 65536))))
        : (n = s.__k[r] = null);
    if (h)
      for (r = 0; r < l; r++)
        (i = t[r]) != null &&
          !(131072 & i.__u) &&
          (i.__e == s.__d && (s.__d = Q(i)), Pt(i, i));
  }
  function kt(s, e, t) {
    var r, n;
    if (typeof s.type == "function") {
      for (r = s.__k, n = 0; r && n < r.length; n++)
        r[n] && ((r[n].__ = s), (e = kt(r[n], e, t)));
      return e;
    }
    s.__e != e &&
      (e && s.type && !t.contains(e) && (e = Q(s)),
      t.insertBefore(s.__e, e || null),
      (e = s.__e));
    do e = e && e.nextSibling;
    while (e != null && e.nodeType === 8);
    return e;
  }
  function Pr(s, e, t, r) {
    var n = s.key,
      i = s.type,
      o = t - 1,
      a = t + 1,
      c = e[t];
    if (c === null || (c && n == c.key && i === c.type && !(131072 & c.__u)))
      return t;
    if (
      (typeof i != "function" || i === z || n) &&
      r > (c != null && !(131072 & c.__u) ? 1 : 0)
    )
      for (; o >= 0 || a < e.length; ) {
        if (o >= 0) {
          if ((c = e[o]) && !(131072 & c.__u) && n == c.key && i === c.type)
            return o;
          o--;
        }
        if (a < e.length) {
          if ((c = e[a]) && !(131072 & c.__u) && n == c.key && i === c.type)
            return a;
          a++;
        }
      }
    return -1;
  }
  function St(s, e, t) {
    e[0] === "-"
      ? s.setProperty(e, t ?? "")
      : (s[e] =
          t == null ? "" : typeof t != "number" || Sr.test(e) ? t : t + "px");
  }
  function we(s, e, t, r, n) {
    var i;
    e: if (e === "style")
      if (typeof t == "string") s.style.cssText = t;
      else {
        if ((typeof r == "string" && (s.style.cssText = r = ""), r))
          for (e in r) (t && e in t) || St(s.style, e, "");
        if (t) for (e in t) (r && t[e] === r[e]) || St(s.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      (i = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1"))),
        (e =
          e.toLowerCase() in s || e === "onFocusOut" || e === "onFocusIn"
            ? e.toLowerCase().slice(2)
            : e.slice(2)),
        s.l || (s.l = {}),
        (s.l[e + i] = t),
        t
          ? r
            ? (t.u = r.u)
            : ((t.u = Ne), s.addEventListener(e, i ? Me : Be, i))
          : s.removeEventListener(e, i ? Me : Be, i);
    else {
      if (n == "http://www.w3.org/2000/svg")
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        e != "width" &&
        e != "height" &&
        e != "href" &&
        e != "list" &&
        e != "form" &&
        e != "tabIndex" &&
        e != "download" &&
        e != "rowSpan" &&
        e != "colSpan" &&
        e != "role" &&
        e != "popover" &&
        e in s
      )
        try {
          s[e] = t ?? "";
          break e;
        } catch {}
      typeof t == "function" ||
        (t == null || (t === !1 && e[4] !== "-")
          ? s.removeAttribute(e)
          : s.setAttribute(e, e == "popover" && t == 1 ? "" : t));
    }
  }
  function Tt(s) {
    return function (e) {
      if (this.l) {
        var t = this.l[e.type + s];
        if (e.t == null) e.t = Ne++;
        else if (e.t < t.u) return;
        return (
          k.event && (e = k.event(e)),
          "handleEvent" in t ? t.handleEvent(e) : t(e)
        );
      }
    };
  }
  function He(s, e, t, r, n, i, o, a, c, l) {
    var h,
      u,
      d,
      f,
      p,
      m,
      g,
      v,
      w,
      O,
      P,
      j,
      ge,
      wr,
      Le,
      ft,
      U = e.type;
    if (e.constructor !== void 0) return null;
    128 & t.__u && ((c = !!(32 & t.__u)), (i = [(a = e.__e = t.__e)])),
      (h = k.__b) && h(e);
    e: if (typeof U == "function")
      try {
        if (
          ((v = e.props),
          (w = "prototype" in U && U.prototype.render),
          (O = (h = U.contextType) && r[h.__c]),
          (P = h ? (O ? O.props.value : h.__) : r),
          t.__c
            ? (g = (u = e.__c = t.__c).__ = u.__E)
            : (w
                ? (e.__c = u = new U(v, P))
                : ((e.__c = u = new me(v, P)),
                  (u.constructor = U),
                  (u.render = Or)),
              O && O.sub(u),
              (u.props = v),
              u.state || (u.state = {}),
              (u.context = P),
              (u.__n = r),
              (d = u.__d = !0),
              (u.__h = []),
              (u._sb = [])),
          w && u.__s == null && (u.__s = u.state),
          w &&
            U.getDerivedStateFromProps != null &&
            (u.__s == u.state && (u.__s = D({}, u.__s)),
            D(u.__s, U.getDerivedStateFromProps(v, u.__s))),
          (f = u.props),
          (p = u.state),
          (u.__v = e),
          d)
        )
          w &&
            U.getDerivedStateFromProps == null &&
            u.componentWillMount != null &&
            u.componentWillMount(),
            w && u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (
            (w &&
              U.getDerivedStateFromProps == null &&
              v !== f &&
              u.componentWillReceiveProps != null &&
              u.componentWillReceiveProps(v, P),
            !u.__e &&
              ((u.shouldComponentUpdate != null &&
                u.shouldComponentUpdate(v, u.__s, P) === !1) ||
                e.__v === t.__v))
          ) {
            for (
              e.__v !== t.__v &&
                ((u.props = v), (u.state = u.__s), (u.__d = !1)),
                e.__e = t.__e,
                e.__k = t.__k,
                e.__k.some(function (Ue) {
                  Ue && (Ue.__ = e);
                }),
                j = 0;
              j < u._sb.length;
              j++
            )
              u.__h.push(u._sb[j]);
            (u._sb = []), u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, P),
            w &&
              u.componentDidUpdate != null &&
              u.__h.push(function () {
                u.componentDidUpdate(f, p, m);
              });
        }
        if (
          ((u.context = P),
          (u.props = v),
          (u.__P = s),
          (u.__e = !1),
          (ge = k.__r),
          (wr = 0),
          w)
        ) {
          for (
            u.state = u.__s,
              u.__d = !1,
              ge && ge(e),
              h = u.render(u.props, u.state, u.context),
              Le = 0;
            Le < u._sb.length;
            Le++
          )
            u.__h.push(u._sb[Le]);
          u._sb = [];
        } else
          do
            (u.__d = !1),
              ge && ge(e),
              (h = u.render(u.props, u.state, u.context)),
              (u.state = u.__s);
          while (u.__d && ++wr < 25);
        (u.state = u.__s),
          u.getChildContext != null && (r = D(D({}, r), u.getChildContext())),
          w &&
            !d &&
            u.getSnapshotBeforeUpdate != null &&
            (m = u.getSnapshotBeforeUpdate(f, p)),
          wt(
            s,
            Fe(
              (ft =
                h != null && h.type === z && h.key == null
                  ? h.props.children
                  : h)
            )
              ? ft
              : [ft],
            e,
            t,
            r,
            n,
            i,
            o,
            a,
            c,
            l
          ),
          (u.base = e.__e),
          (e.__u &= -161),
          u.__h.length && o.push(u),
          g && (u.__E = u.__ = null);
      } catch (Ue) {
        if (((e.__v = null), c || i != null)) {
          for (e.__u |= c ? 160 : 128; a && a.nodeType === 8 && a.nextSibling; )
            a = a.nextSibling;
          (i[i.indexOf(a)] = null), (e.__e = a);
        } else (e.__e = t.__e), (e.__k = t.__k);
        k.__e(Ue, e, t);
      }
    else
      i == null && e.__v === t.__v
        ? ((e.__k = t.__k), (e.__e = t.__e))
        : (e.__e = $r(t.__e, e, t, r, n, i, o, c, l));
    (h = k.diffed) && h(e);
  }
  function Et(s, e, t) {
    e.__d = void 0;
    for (var r = 0; r < t.length; r++) ze(t[r], t[++r], t[++r]);
    k.__c && k.__c(e, s),
      s.some(function (n) {
        try {
          (s = n.__h),
            (n.__h = []),
            s.some(function (i) {
              i.call(n);
            });
        } catch (i) {
          k.__e(i, n.__v);
        }
      });
  }
  function $r(s, e, t, r, n, i, o, a, c) {
    var l,
      h,
      u,
      d,
      f,
      p,
      m,
      g = t.props,
      v = e.props,
      w = e.type;
    if (
      (w === "svg"
        ? (n = "http://www.w3.org/2000/svg")
        : w === "math"
        ? (n = "http://www.w3.org/1998/Math/MathML")
        : n || (n = "http://www.w3.org/1999/xhtml"),
      i != null)
    ) {
      for (l = 0; l < i.length; l++)
        if (
          (f = i[l]) &&
          "setAttribute" in f == !!w &&
          (w ? f.localName === w : f.nodeType === 3)
        ) {
          (s = f), (i[l] = null);
          break;
        }
    }
    if (s == null) {
      if (w === null) return document.createTextNode(v);
      (s = document.createElementNS(n, w, v.is && v)),
        a && (k.__m && k.__m(e, i), (a = !1)),
        (i = null);
    }
    if (w === null) g === v || (a && s.data === v) || (s.data = v);
    else {
      if (
        ((i = i && ve.call(s.childNodes)), (g = t.props || ie), !a && i != null)
      )
        for (g = {}, l = 0; l < s.attributes.length; l++)
          g[(f = s.attributes[l]).name] = f.value;
      for (l in g)
        if (((f = g[l]), l != "children")) {
          if (l == "dangerouslySetInnerHTML") u = f;
          else if (!(l in v)) {
            if (
              (l == "value" && "defaultValue" in v) ||
              (l == "checked" && "defaultChecked" in v)
            )
              continue;
            we(s, l, null, f, n);
          }
        }
      for (l in v)
        (f = v[l]),
          l == "children"
            ? (d = f)
            : l == "dangerouslySetInnerHTML"
            ? (h = f)
            : l == "value"
            ? (p = f)
            : l == "checked"
            ? (m = f)
            : (a && typeof f != "function") ||
              g[l] === f ||
              we(s, l, f, g[l], n);
      if (h)
        a ||
          (u && (h.__html === u.__html || h.__html === s.innerHTML)) ||
          (s.innerHTML = h.__html),
          (e.__k = []);
      else if (
        (u && (s.innerHTML = ""),
        wt(
          s,
          Fe(d) ? d : [d],
          e,
          t,
          r,
          w === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n,
          i,
          o,
          i ? i[0] : t.__k && Q(t, 0),
          a,
          c
        ),
        i != null)
      )
        for (l = i.length; l--; ) mt(i[l]);
      a ||
        ((l = "value"),
        w === "progress" && p == null
          ? s.removeAttribute("value")
          : p !== void 0 &&
            (p !== s[l] ||
              (w === "progress" && !p) ||
              (w === "option" && p !== g[l])) &&
            we(s, l, p, g[l], n),
        (l = "checked"),
        m !== void 0 && m !== s[l] && we(s, l, m, g[l], n));
    }
    return s;
  }
  function ze(s, e, t) {
    try {
      if (typeof s == "function") {
        var r = typeof s.__u == "function";
        r && s.__u(), (r && e == null) || (s.__u = s(e));
      } else s.current = e;
    } catch (n) {
      k.__e(n, t);
    }
  }
  function Pt(s, e, t) {
    var r, n;
    if (
      (k.unmount && k.unmount(s),
      (r = s.ref) && ((r.current && r.current !== s.__e) || ze(r, null, e)),
      (r = s.__c) != null)
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (i) {
          k.__e(i, e);
        }
      r.base = r.__P = null;
    }
    if ((r = s.__k))
      for (n = 0; n < r.length; n++)
        r[n] && Pt(r[n], e, t || typeof s.type != "function");
    t || mt(s.__e), (s.__c = s.__ = s.__e = s.__d = void 0);
  }
  function Or(s, e, t) {
    return this.constructor(s, t);
  }
  function jr(s, e, t) {
    var r, n, i, o;
    k.__ && k.__(s, e),
      (n = (r = typeof t == "function") ? null : e.__k),
      (i = []),
      (o = []),
      He(
        e,
        (s = ((!r && t) || e).__k = Tr(z, null, [s])),
        n || ie,
        ie,
        e.namespaceURI,
        !r && t ? [t] : n ? null : e.firstChild ? ve.call(e.childNodes) : null,
        i,
        !r && t ? t : n ? n.__e : e.firstChild,
        r,
        o
      ),
      Et(i, s, o);
  }
  function Ar(s, e) {
    var t = {
      __c: (e = "__cC" + vt++),
      __: s,
      Consumer: function (r, n) {
        return r.children(n);
      },
      Provider: function (r) {
        var n, i;
        return (
          this.getChildContext ||
            ((n = new Set()),
            ((i = {})[e] = this),
            (this.getChildContext = function () {
              return i;
            }),
            (this.componentWillUnmount = function () {
              n = null;
            }),
            (this.shouldComponentUpdate = function (o) {
              this.props.value !== o.value &&
                n.forEach(function (a) {
                  (a.__e = !0), qe(a);
                });
            }),
            (this.sub = function (o) {
              n.add(o);
              var a = o.componentWillUnmount;
              o.componentWillUnmount = function () {
                n && n.delete(o), a && a.call(o);
              };
            })),
          r.children
        );
      },
    };
    return (t.Provider.__ = t.Consumer.contextType = t);
  }
  (ve = yt.slice),
    (k = {
      __e: function (s, e, t, r) {
        for (var n, i, o; (e = e.__); )
          if ((n = e.__c) && !n.__)
            try {
              if (
                ((i = n.constructor) &&
                  i.getDerivedStateFromError != null &&
                  (n.setState(i.getDerivedStateFromError(s)), (o = n.__d)),
                n.componentDidCatch != null &&
                  (n.componentDidCatch(s, r || {}), (o = n.__d)),
                o)
              )
                return (n.__E = n);
            } catch (a) {
              s = a;
            }
        throw s;
      },
    }),
    (_t = 0),
    (me.prototype.setState = function (s, e) {
      var t;
      (t =
        this.__s != null && this.__s !== this.state
          ? this.__s
          : (this.__s = D({}, this.state))),
        typeof s == "function" && (s = s(D({}, t), this.props)),
        s && D(t, s),
        s != null && this.__v && (e && this._sb.push(e), qe(this));
    }),
    (me.prototype.forceUpdate = function (s) {
      this.__v && ((this.__e = !0), s && this.__h.push(s), qe(this));
    }),
    (me.prototype.render = z),
    (H = []),
    (gt =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (De = function (s, e) {
      return s.__v.__b - e.__v.__b;
    }),
    (be.__r = 0),
    (Ne = 0),
    (Be = Tt(!1)),
    (Me = Tt(!0)),
    (vt = 0);
  var Cr = 0;
  function _(s, e, t, r, n, i) {
    e || (e = {});
    var o,
      a,
      c = e;
    "ref" in e && ((o = e.ref), delete e.ref);
    var l = {
      type: s,
      props: c,
      key: t,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: --Cr,
      __i: -1,
      __u: 0,
      __source: n,
      __self: i,
    };
    if (typeof s == "function" && (o = s.defaultProps))
      for (a in o) c[a] === void 0 && (c[a] = o[a]);
    return k.vnode && k.vnode(l), l;
  }
  var oe,
    T,
    Je,
    $t,
    We = 0,
    Ot = [],
    E = k,
    jt = E.__b,
    At = E.__r,
    Ct = E.diffed,
    Rt = E.__c,
    xt = E.unmount,
    It = E.__;
  function Ke(s, e) {
    E.__h && E.__h(T, s, We || e), (We = 0);
    var t = T.__H || (T.__H = { __: [], __h: [] });
    return s >= t.__.length && t.__.push({}), t.__[s];
  }
  function N(s) {
    return (We = 1), Rr(Ut, s);
  }
  function Rr(s, e, t) {
    var r = Ke(oe++, 2);
    if (
      ((r.t = s),
      !r.__c &&
        ((r.__ = [
          Ut(void 0, e),
          function (a) {
            var c = r.__N ? r.__N[0] : r.__[0],
              l = r.t(c, a);
            c !== l && ((r.__N = [l, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = T),
        !T.u))
    ) {
      var n = function (a, c, l) {
        if (!r.__c.__H) return !0;
        var h = r.__c.__H.__.filter(function (d) {
          return !!d.__c;
        });
        if (
          h.every(function (d) {
            return !d.__N;
          })
        )
          return !i || i.call(this, a, c, l);
        var u = r.__c.props !== a;
        return (
          h.forEach(function (d) {
            if (d.__N) {
              var f = d.__[0];
              (d.__ = d.__N), (d.__N = void 0), f !== d.__[0] && (u = !0);
            }
          }),
          (i && i.call(this, a, c, l)) || u
        );
      };
      T.u = !0;
      var i = T.shouldComponentUpdate,
        o = T.componentWillUpdate;
      (T.componentWillUpdate = function (a, c, l) {
        if (this.__e) {
          var h = i;
          (i = void 0), n(a, c, l), (i = h);
        }
        o && o.call(this, a, c, l);
      }),
        (T.shouldComponentUpdate = n);
    }
    return r.__N || r.__;
  }
  function Ge(s, e) {
    var t = Ke(oe++, 3);
    !E.__s && Lr(t.__H, e) && ((t.__ = s), (t.i = e), T.__H.__h.push(t));
  }
  function ae(s) {
    var e = T.context[s.__c],
      t = Ke(oe++, 9);
    return (
      (t.c = s),
      e ? (t.__ == null && ((t.__ = !0), e.sub(T)), e.props.value) : s.__
    );
  }
  function xr() {
    for (var s; (s = Ot.shift()); )
      if (s.__P && s.__H)
        try {
          s.__H.__h.forEach(ke), s.__H.__h.forEach(Ve), (s.__H.__h = []);
        } catch (e) {
          (s.__H.__h = []), E.__e(e, s.__v);
        }
  }
  (E.__b = function (s) {
    (T = null), jt && jt(s);
  }),
    (E.__ = function (s, e) {
      s && e.__k && e.__k.__m && (s.__m = e.__k.__m), It && It(s, e);
    }),
    (E.__r = function (s) {
      At && At(s), (oe = 0);
      var e = (T = s.__c).__H;
      e &&
        (Je === T
          ? ((e.__h = []),
            (T.__h = []),
            e.__.forEach(function (t) {
              t.__N && (t.__ = t.__N), (t.i = t.__N = void 0);
            }))
          : (e.__h.forEach(ke), e.__h.forEach(Ve), (e.__h = []), (oe = 0))),
        (Je = T);
    }),
    (E.diffed = function (s) {
      Ct && Ct(s);
      var e = s.__c;
      e &&
        e.__H &&
        (e.__H.__h.length &&
          ((Ot.push(e) !== 1 && $t === E.requestAnimationFrame) ||
            (($t = E.requestAnimationFrame) || Ir)(xr)),
        e.__H.__.forEach(function (t) {
          t.i && (t.__H = t.i), (t.i = void 0);
        })),
        (Je = T = null);
    }),
    (E.__c = function (s, e) {
      e.some(function (t) {
        try {
          t.__h.forEach(ke),
            (t.__h = t.__h.filter(function (r) {
              return !r.__ || Ve(r);
            }));
        } catch (r) {
          e.some(function (n) {
            n.__h && (n.__h = []);
          }),
            (e = []),
            E.__e(r, t.__v);
        }
      }),
        Rt && Rt(s, e);
    }),
    (E.unmount = function (s) {
      xt && xt(s);
      var e,
        t = s.__c;
      t &&
        t.__H &&
        (t.__H.__.forEach(function (r) {
          try {
            ke(r);
          } catch (n) {
            e = n;
          }
        }),
        (t.__H = void 0),
        e && E.__e(e, t.__v));
    });
  var Lt = typeof requestAnimationFrame == "function";
  function Ir(s) {
    var e,
      t = function () {
        clearTimeout(r), Lt && cancelAnimationFrame(e), setTimeout(s);
      },
      r = setTimeout(t, 100);
    Lt && (e = requestAnimationFrame(t));
  }
  function ke(s) {
    var e = T,
      t = s.__c;
    typeof t == "function" && ((s.__c = void 0), t()), (T = e);
  }
  function Ve(s) {
    var e = T;
    (s.__c = s.__()), (T = e);
  }
  function Lr(s, e) {
    return (
      !s ||
      s.length !== e.length ||
      e.some(function (t, r) {
        return t !== s[r];
      })
    );
  }
  function Ut(s, e) {
    return typeof e == "function" ? e(s) : e;
  }
  const Ur = (s) => {
    let e;
    return (
      s
        ? (e = s)
        : typeof fetch > "u"
        ? (e = (...t) =>
            Promise.resolve()
              .then(() => X)
              .then(({ default: r }) => r(...t)))
        : (e = fetch),
      (...t) => e(...t)
    );
  };
  class Qe extends Error {
    constructor(e, t = "FunctionsError", r) {
      super(e), (this.name = t), (this.context = r);
    }
  }
  class Dr extends Qe {
    constructor(e) {
      super(
        "Failed to send a request to the Edge Function",
        "FunctionsFetchError",
        e
      );
    }
  }
  class Nr extends Qe {
    constructor(e) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
    }
  }
  class Br extends Qe {
    constructor(e) {
      super(
        "Edge Function returned a non-2xx status code",
        "FunctionsHttpError",
        e
      );
    }
  }
  var Ye;
  (function (s) {
    (s.Any = "any"),
      (s.ApNortheast1 = "ap-northeast-1"),
      (s.ApNortheast2 = "ap-northeast-2"),
      (s.ApSouth1 = "ap-south-1"),
      (s.ApSoutheast1 = "ap-southeast-1"),
      (s.ApSoutheast2 = "ap-southeast-2"),
      (s.CaCentral1 = "ca-central-1"),
      (s.EuCentral1 = "eu-central-1"),
      (s.EuWest1 = "eu-west-1"),
      (s.EuWest2 = "eu-west-2"),
      (s.EuWest3 = "eu-west-3"),
      (s.SaEast1 = "sa-east-1"),
      (s.UsEast1 = "us-east-1"),
      (s.UsWest1 = "us-west-1"),
      (s.UsWest2 = "us-west-2");
  })(Ye || (Ye = {}));
  var Mr = function (s, e, t, r) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(h) {
        try {
          l(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        try {
          l(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        h.done ? i(h.value) : n(h.value).then(a, c);
      }
      l((r = r.apply(s, e || [])).next());
    });
  };
  class Fr {
    constructor(
      e,
      { headers: t = {}, customFetch: r, region: n = Ye.Any } = {}
    ) {
      (this.url = e),
        (this.headers = t),
        (this.region = n),
        (this.fetch = Ur(r));
    }
    setAuth(e) {
      this.headers.Authorization = `Bearer ${e}`;
    }
    invoke(e, t = {}) {
      var r;
      return Mr(this, void 0, void 0, function* () {
        try {
          const { headers: n, method: i, body: o } = t;
          let a = {},
            { region: c } = t;
          c || (c = this.region), c && c !== "any" && (a["x-region"] = c);
          let l;
          o &&
            ((n && !Object.prototype.hasOwnProperty.call(n, "Content-Type")) ||
              !n) &&
            ((typeof Blob < "u" && o instanceof Blob) ||
            o instanceof ArrayBuffer
              ? ((a["Content-Type"] = "application/octet-stream"), (l = o))
              : typeof o == "string"
              ? ((a["Content-Type"] = "text/plain"), (l = o))
              : typeof FormData < "u" && o instanceof FormData
              ? (l = o)
              : ((a["Content-Type"] = "application/json"),
                (l = JSON.stringify(o))));
          const h = yield this.fetch(`${this.url}/${e}`, {
              method: i || "POST",
              headers: Object.assign(
                Object.assign(Object.assign({}, a), this.headers),
                n
              ),
              body: l,
            }).catch((p) => {
              throw new Dr(p);
            }),
            u = h.headers.get("x-relay-error");
          if (u && u === "true") throw new Nr(h);
          if (!h.ok) throw new Br(h);
          let d = (
              (r = h.headers.get("Content-Type")) !== null && r !== void 0
                ? r
                : "text/plain"
            )
              .split(";")[0]
              .trim(),
            f;
          return (
            d === "application/json"
              ? (f = yield h.json())
              : d === "application/octet-stream"
              ? (f = yield h.blob())
              : d === "text/event-stream"
              ? (f = h)
              : d === "multipart/form-data"
              ? (f = yield h.formData())
              : (f = yield h.text()),
            { data: f, error: null }
          );
        } catch (n) {
          return { data: null, error: n };
        }
      });
    }
  }
  var x =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function qr(s) {
    return s &&
      s.__esModule &&
      Object.prototype.hasOwnProperty.call(s, "default")
      ? s.default
      : s;
  }
  function Hr(s) {
    if (s.__esModule) return s;
    var e = s.default;
    if (typeof e == "function") {
      var t = function r() {
        return this instanceof r
          ? Reflect.construct(e, arguments, this.constructor)
          : e.apply(this, arguments);
      };
      t.prototype = e.prototype;
    } else t = {};
    return (
      Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.keys(s).forEach(function (r) {
        var n = Object.getOwnPropertyDescriptor(s, r);
        Object.defineProperty(
          t,
          r,
          n.get
            ? n
            : {
                enumerable: !0,
                get: function () {
                  return s[r];
                },
              }
        );
      }),
      t
    );
  }
  var A = {},
    Xe = {},
    Se = {},
    ce = {},
    Te = {},
    Ee = {},
    zr = function () {
      if (typeof self < "u") return self;
      if (typeof window < "u") return window;
      if (typeof global < "u") return global;
      throw new Error("unable to locate global object");
    },
    Y = zr();
  const Jr = Y.fetch,
    Dt = Y.fetch.bind(Y),
    Nt = Y.Headers,
    Wr = Y.Request,
    Kr = Y.Response,
    X = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Headers: Nt,
          Request: Wr,
          Response: Kr,
          default: Dt,
          fetch: Jr,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Gr = Hr(X);
  var Pe = {};
  Object.defineProperty(Pe, "__esModule", { value: !0 });
  class Vr extends Error {
    constructor(e) {
      super(e.message),
        (this.name = "PostgrestError"),
        (this.details = e.details),
        (this.hint = e.hint),
        (this.code = e.code);
    }
  }
  Pe.default = Vr;
  var Bt =
    (x && x.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  Object.defineProperty(Ee, "__esModule", { value: !0 });
  const Qr = Bt(Gr),
    Yr = Bt(Pe);
  let Xr = class {
    constructor(e) {
      (this.shouldThrowOnError = !1),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = e.headers),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError = e.shouldThrowOnError),
        (this.signal = e.signal),
        (this.isMaybeSingle = e.isMaybeSingle),
        e.fetch
          ? (this.fetch = e.fetch)
          : typeof fetch > "u"
          ? (this.fetch = Qr.default)
          : (this.fetch = fetch);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    setHeader(e, t) {
      return (
        (this.headers = Object.assign({}, this.headers)),
        (this.headers[e] = t),
        this
      );
    }
    then(e, t) {
      this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? (this.headers["Accept-Profile"] = this.schema)
          : (this.headers["Content-Profile"] = this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          (this.headers["Content-Type"] = "application/json");
      const r = this.fetch;
      let n = r(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (i) => {
        var o, a, c;
        let l = null,
          h = null,
          u = null,
          d = i.status,
          f = i.statusText;
        if (i.ok) {
          if (this.method !== "HEAD") {
            const v = await i.text();
            v === "" ||
              (this.headers.Accept === "text/csv" ||
              (this.headers.Accept &&
                this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
                ? (h = v)
                : (h = JSON.parse(v)));
          }
          const m =
              (o = this.headers.Prefer) === null || o === void 0
                ? void 0
                : o.match(/count=(exact|planned|estimated)/),
            g =
              (a = i.headers.get("content-range")) === null || a === void 0
                ? void 0
                : a.split("/");
          m && g && g.length > 1 && (u = parseInt(g[1])),
            this.isMaybeSingle &&
              this.method === "GET" &&
              Array.isArray(h) &&
              (h.length > 1
                ? ((l = {
                    code: "PGRST116",
                    details: `Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (h = null),
                  (u = null),
                  (d = 406),
                  (f = "Not Acceptable"))
                : h.length === 1
                ? (h = h[0])
                : (h = null));
        } else {
          const m = await i.text();
          try {
            (l = JSON.parse(m)),
              Array.isArray(l) &&
                i.status === 404 &&
                ((h = []), (l = null), (d = 200), (f = "OK"));
          } catch {
            i.status === 404 && m === ""
              ? ((d = 204), (f = "No Content"))
              : (l = { message: m });
          }
          if (
            (l &&
              this.isMaybeSingle &&
              !(
                (c = l == null ? void 0 : l.details) === null || c === void 0
              ) &&
              c.includes("0 rows") &&
              ((l = null), (d = 200), (f = "OK")),
            l && this.shouldThrowOnError)
          )
            throw new Yr.default(l);
        }
        return { error: l, data: h, count: u, status: d, statusText: f };
      });
      return (
        this.shouldThrowOnError ||
          (n = n.catch((i) => {
            var o, a, c;
            return {
              error: {
                message: `${
                  (o = i == null ? void 0 : i.name) !== null && o !== void 0
                    ? o
                    : "FetchError"
                }: ${i == null ? void 0 : i.message}`,
                details: `${
                  (a = i == null ? void 0 : i.stack) !== null && a !== void 0
                    ? a
                    : ""
                }`,
                hint: "",
                code: `${
                  (c = i == null ? void 0 : i.code) !== null && c !== void 0
                    ? c
                    : ""
                }`,
              },
              data: null,
              count: null,
              status: 0,
              statusText: "",
            };
          })),
        n.then(e, t)
      );
    }
  };
  Ee.default = Xr;
  var Zr =
    (x && x.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  Object.defineProperty(Te, "__esModule", { value: !0 });
  const es = Zr(Ee);
  let ts = class extends es.default {
    select(e) {
      let t = !1;
      const r = (e ?? "*")
        .split("")
        .map((n) => (/\s/.test(n) && !t ? "" : (n === '"' && (t = !t), n)))
        .join("");
      return (
        this.url.searchParams.set("select", r),
        this.headers.Prefer && (this.headers.Prefer += ","),
        (this.headers.Prefer += "return=representation"),
        this
      );
    }
    order(
      e,
      {
        ascending: t = !0,
        nullsFirst: r,
        foreignTable: n,
        referencedTable: i = n,
      } = {}
    ) {
      const o = i ? `${i}.order` : "order",
        a = this.url.searchParams.get(o);
      return (
        this.url.searchParams.set(
          o,
          `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${
            r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"
          }`
        ),
        this
      );
    }
    limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
      const n = typeof r > "u" ? "limit" : `${r}.limit`;
      return this.url.searchParams.set(n, `${e}`), this;
    }
    range(e, t, { foreignTable: r, referencedTable: n = r } = {}) {
      const i = typeof n > "u" ? "offset" : `${n}.offset`,
        o = typeof n > "u" ? "limit" : `${n}.limit`;
      return (
        this.url.searchParams.set(i, `${e}`),
        this.url.searchParams.set(o, `${t - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return (this.signal = e), this;
    }
    single() {
      return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? (this.headers.Accept = "application/json")
          : (this.headers.Accept = "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return (this.headers.Accept = "text/csv"), this;
    }
    geojson() {
      return (this.headers.Accept = "application/geo+json"), this;
    }
    explain({
      analyze: e = !1,
      verbose: t = !1,
      settings: r = !1,
      buffers: n = !1,
      wal: i = !1,
      format: o = "text",
    } = {}) {
      var a;
      const c = [
          e ? "analyze" : null,
          t ? "verbose" : null,
          r ? "settings" : null,
          n ? "buffers" : null,
          i ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        l =
          (a = this.headers.Accept) !== null && a !== void 0
            ? a
            : "application/json";
      return (
        (this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${l}"; options=${c};`),
        o === "json" ? this : this
      );
    }
    rollback() {
      var e;
      return (
        ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim()
          .length > 0
          ? (this.headers.Prefer += ",tx=rollback")
          : (this.headers.Prefer = "tx=rollback"),
        this
      );
    }
    returns() {
      return this;
    }
  };
  Te.default = ts;
  var rs =
    (x && x.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  Object.defineProperty(ce, "__esModule", { value: !0 });
  const ss = rs(Te);
  let ns = class extends ss.default {
    eq(e, t) {
      return this.url.searchParams.append(e, `eq.${t}`), this;
    }
    neq(e, t) {
      return this.url.searchParams.append(e, `neq.${t}`), this;
    }
    gt(e, t) {
      return this.url.searchParams.append(e, `gt.${t}`), this;
    }
    gte(e, t) {
      return this.url.searchParams.append(e, `gte.${t}`), this;
    }
    lt(e, t) {
      return this.url.searchParams.append(e, `lt.${t}`), this;
    }
    lte(e, t) {
      return this.url.searchParams.append(e, `lte.${t}`), this;
    }
    like(e, t) {
      return this.url.searchParams.append(e, `like.${t}`), this;
    }
    likeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
      );
    }
    likeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
      );
    }
    ilike(e, t) {
      return this.url.searchParams.append(e, `ilike.${t}`), this;
    }
    ilikeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
      );
    }
    ilikeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
      );
    }
    is(e, t) {
      return this.url.searchParams.append(e, `is.${t}`), this;
    }
    in(e, t) {
      const r = Array.from(new Set(t))
        .map((n) =>
          typeof n == "string" && new RegExp("[,()]").test(n)
            ? `"${n}"`
            : `${n}`
        )
        .join(",");
      return this.url.searchParams.append(e, `in.(${r})`), this;
    }
    contains(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cs.${t}`)
          : Array.isArray(t)
          ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
          : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
      );
    }
    containedBy(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cd.${t}`)
          : Array.isArray(t)
          ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
          : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
      );
    }
    rangeGt(e, t) {
      return this.url.searchParams.append(e, `sr.${t}`), this;
    }
    rangeGte(e, t) {
      return this.url.searchParams.append(e, `nxl.${t}`), this;
    }
    rangeLt(e, t) {
      return this.url.searchParams.append(e, `sl.${t}`), this;
    }
    rangeLte(e, t) {
      return this.url.searchParams.append(e, `nxr.${t}`), this;
    }
    rangeAdjacent(e, t) {
      return this.url.searchParams.append(e, `adj.${t}`), this;
    }
    overlaps(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `ov.${t}`)
          : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
        this
      );
    }
    textSearch(e, t, { config: r, type: n } = {}) {
      let i = "";
      n === "plain"
        ? (i = "pl")
        : n === "phrase"
        ? (i = "ph")
        : n === "websearch" && (i = "w");
      const o = r === void 0 ? "" : `(${r})`;
      return this.url.searchParams.append(e, `${i}fts${o}.${t}`), this;
    }
    match(e) {
      return (
        Object.entries(e).forEach(([t, r]) => {
          this.url.searchParams.append(t, `eq.${r}`);
        }),
        this
      );
    }
    not(e, t, r) {
      return this.url.searchParams.append(e, `not.${t}.${r}`), this;
    }
    or(e, { foreignTable: t, referencedTable: r = t } = {}) {
      const n = r ? `${r}.or` : "or";
      return this.url.searchParams.append(n, `(${e})`), this;
    }
    filter(e, t, r) {
      return this.url.searchParams.append(e, `${t}.${r}`), this;
    }
  };
  ce.default = ns;
  var is =
    (x && x.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  Object.defineProperty(Se, "__esModule", { value: !0 });
  const le = is(ce);
  let os = class {
    constructor(e, { headers: t = {}, schema: r, fetch: n }) {
      (this.url = e), (this.headers = t), (this.schema = r), (this.fetch = n);
    }
    select(e, { head: t = !1, count: r } = {}) {
      const n = t ? "HEAD" : "GET";
      let i = !1;
      const o = (e ?? "*")
        .split("")
        .map((a) => (/\s/.test(a) && !i ? "" : (a === '"' && (i = !i), a)))
        .join("");
      return (
        this.url.searchParams.set("select", o),
        r && (this.headers.Prefer = `count=${r}`),
        new le.default({
          method: n,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
    insert(e, { count: t, defaultToNull: r = !0 } = {}) {
      const n = "POST",
        i = [];
      if (
        (this.headers.Prefer && i.push(this.headers.Prefer),
        t && i.push(`count=${t}`),
        r || i.push("missing=default"),
        (this.headers.Prefer = i.join(",")),
        Array.isArray(e))
      ) {
        const o = e.reduce((a, c) => a.concat(Object.keys(c)), []);
        if (o.length > 0) {
          const a = [...new Set(o)].map((c) => `"${c}"`);
          this.url.searchParams.set("columns", a.join(","));
        }
      }
      return new le.default({
        method: n,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: e,
        fetch: this.fetch,
        allowEmpty: !1,
      });
    }
    upsert(
      e,
      {
        onConflict: t,
        ignoreDuplicates: r = !1,
        count: n,
        defaultToNull: i = !0,
      } = {}
    ) {
      const o = "POST",
        a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
      if (
        (t !== void 0 && this.url.searchParams.set("on_conflict", t),
        this.headers.Prefer && a.push(this.headers.Prefer),
        n && a.push(`count=${n}`),
        i || a.push("missing=default"),
        (this.headers.Prefer = a.join(",")),
        Array.isArray(e))
      ) {
        const c = e.reduce((l, h) => l.concat(Object.keys(h)), []);
        if (c.length > 0) {
          const l = [...new Set(c)].map((h) => `"${h}"`);
          this.url.searchParams.set("columns", l.join(","));
        }
      }
      return new le.default({
        method: o,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: e,
        fetch: this.fetch,
        allowEmpty: !1,
      });
    }
    update(e, { count: t } = {}) {
      const r = "PATCH",
        n = [];
      return (
        this.headers.Prefer && n.push(this.headers.Prefer),
        t && n.push(`count=${t}`),
        (this.headers.Prefer = n.join(",")),
        new le.default({
          method: r,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          body: e,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
    delete({ count: e } = {}) {
      const t = "DELETE",
        r = [];
      return (
        e && r.push(`count=${e}`),
        this.headers.Prefer && r.unshift(this.headers.Prefer),
        (this.headers.Prefer = r.join(",")),
        new le.default({
          method: t,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
  };
  Se.default = os;
  var $e = {},
    Oe = {};
  Object.defineProperty(Oe, "__esModule", { value: !0 }),
    (Oe.version = void 0),
    (Oe.version = "0.0.0-automated"),
    Object.defineProperty($e, "__esModule", { value: !0 }),
    ($e.DEFAULT_HEADERS = void 0);
  const as = Oe;
  $e.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${as.version}` };
  var Mt =
    (x && x.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  Object.defineProperty(Xe, "__esModule", { value: !0 });
  const cs = Mt(Se),
    ls = Mt(ce),
    hs = $e;
  let us = class kr {
    constructor(e, { headers: t = {}, schema: r, fetch: n } = {}) {
      (this.url = e),
        (this.headers = Object.assign(
          Object.assign({}, hs.DEFAULT_HEADERS),
          t
        )),
        (this.schemaName = r),
        (this.fetch = n);
    }
    from(e) {
      const t = new URL(`${this.url}/${e}`);
      return new cs.default(t, {
        headers: Object.assign({}, this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
      });
    }
    schema(e) {
      return new kr(this.url, {
        headers: this.headers,
        schema: e,
        fetch: this.fetch,
      });
    }
    rpc(e, t = {}, { head: r = !1, get: n = !1, count: i } = {}) {
      let o;
      const a = new URL(`${this.url}/rpc/${e}`);
      let c;
      r || n
        ? ((o = r ? "HEAD" : "GET"),
          Object.entries(t)
            .filter(([h, u]) => u !== void 0)
            .map(([h, u]) => [
              h,
              Array.isArray(u) ? `{${u.join(",")}}` : `${u}`,
            ])
            .forEach(([h, u]) => {
              a.searchParams.append(h, u);
            }))
        : ((o = "POST"), (c = t));
      const l = Object.assign({}, this.headers);
      return (
        i && (l.Prefer = `count=${i}`),
        new ls.default({
          method: o,
          url: a,
          headers: l,
          schema: this.schemaName,
          body: c,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
  };
  Xe.default = us;
  var Z =
    (x && x.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
  Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.PostgrestError =
      A.PostgrestBuilder =
      A.PostgrestTransformBuilder =
      A.PostgrestFilterBuilder =
      A.PostgrestQueryBuilder =
      A.PostgrestClient =
        void 0);
  const Ft = Z(Xe);
  A.PostgrestClient = Ft.default;
  const qt = Z(Se);
  A.PostgrestQueryBuilder = qt.default;
  const Ht = Z(ce);
  A.PostgrestFilterBuilder = Ht.default;
  const zt = Z(Te);
  A.PostgrestTransformBuilder = zt.default;
  const Jt = Z(Ee);
  A.PostgrestBuilder = Jt.default;
  const Wt = Z(Pe);
  A.PostgrestError = Wt.default;
  var ds = (A.default = {
    PostgrestClient: Ft.default,
    PostgrestQueryBuilder: qt.default,
    PostgrestFilterBuilder: Ht.default,
    PostgrestTransformBuilder: zt.default,
    PostgrestBuilder: Jt.default,
    PostgrestError: Wt.default,
  });
  const {
      PostgrestClient: fs,
      PostgrestQueryBuilder: di,
      PostgrestFilterBuilder: fi,
      PostgrestTransformBuilder: _i,
      PostgrestBuilder: pi,
    } = ds,
    _s = { "X-Client-Info": "realtime-js/2.10.7" },
    ps = "1.0.0",
    Kt = 1e4,
    gs = 1e3;
  var ee;
  (function (s) {
    (s[(s.connecting = 0)] = "connecting"),
      (s[(s.open = 1)] = "open"),
      (s[(s.closing = 2)] = "closing"),
      (s[(s.closed = 3)] = "closed");
  })(ee || (ee = {}));
  var R;
  (function (s) {
    (s.closed = "closed"),
      (s.errored = "errored"),
      (s.joined = "joined"),
      (s.joining = "joining"),
      (s.leaving = "leaving");
  })(R || (R = {}));
  var I;
  (function (s) {
    (s.close = "phx_close"),
      (s.error = "phx_error"),
      (s.join = "phx_join"),
      (s.reply = "phx_reply"),
      (s.leave = "phx_leave"),
      (s.access_token = "access_token");
  })(I || (I = {}));
  var Ze;
  (function (s) {
    s.websocket = "websocket";
  })(Ze || (Ze = {}));
  var J;
  (function (s) {
    (s.Connecting = "connecting"),
      (s.Open = "open"),
      (s.Closing = "closing"),
      (s.Closed = "closed");
  })(J || (J = {}));
  class vs {
    constructor() {
      this.HEADER_LENGTH = 1;
    }
    decode(e, t) {
      return e.constructor === ArrayBuffer
        ? t(this._binaryDecode(e))
        : t(typeof e == "string" ? JSON.parse(e) : {});
    }
    _binaryDecode(e) {
      const t = new DataView(e),
        r = new TextDecoder();
      return this._decodeBroadcast(e, t, r);
    }
    _decodeBroadcast(e, t, r) {
      const n = t.getUint8(1),
        i = t.getUint8(2);
      let o = this.HEADER_LENGTH + 2;
      const a = r.decode(e.slice(o, o + n));
      o = o + n;
      const c = r.decode(e.slice(o, o + i));
      o = o + i;
      const l = JSON.parse(r.decode(e.slice(o, e.byteLength)));
      return { ref: null, topic: a, event: c, payload: l };
    }
  }
  class Gt {
    constructor(e, t) {
      (this.callback = e),
        (this.timerCalc = t),
        (this.timer = void 0),
        (this.tries = 0),
        (this.callback = e),
        (this.timerCalc = t);
    }
    reset() {
      (this.tries = 0), clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer),
        (this.timer = setTimeout(() => {
          (this.tries = this.tries + 1), this.callback();
        }, this.timerCalc(this.tries + 1)));
    }
  }
  var S;
  (function (s) {
    (s.abstime = "abstime"),
      (s.bool = "bool"),
      (s.date = "date"),
      (s.daterange = "daterange"),
      (s.float4 = "float4"),
      (s.float8 = "float8"),
      (s.int2 = "int2"),
      (s.int4 = "int4"),
      (s.int4range = "int4range"),
      (s.int8 = "int8"),
      (s.int8range = "int8range"),
      (s.json = "json"),
      (s.jsonb = "jsonb"),
      (s.money = "money"),
      (s.numeric = "numeric"),
      (s.oid = "oid"),
      (s.reltime = "reltime"),
      (s.text = "text"),
      (s.time = "time"),
      (s.timestamp = "timestamp"),
      (s.timestamptz = "timestamptz"),
      (s.timetz = "timetz"),
      (s.tsrange = "tsrange"),
      (s.tstzrange = "tstzrange");
  })(S || (S = {}));
  const Vt = (s, e, t = {}) => {
      var r;
      const n = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
      return Object.keys(e).reduce((i, o) => ((i[o] = ys(o, s, e, n)), i), {});
    },
    ys = (s, e, t, r) => {
      const n = e.find((a) => a.name === s),
        i = n == null ? void 0 : n.type,
        o = t[s];
      return i && !r.includes(i) ? Qt(i, o) : et(o);
    },
    Qt = (s, e) => {
      if (s.charAt(0) === "_") {
        const t = s.slice(1, s.length);
        return ks(e, t);
      }
      switch (s) {
        case S.bool:
          return ms(e);
        case S.float4:
        case S.float8:
        case S.int2:
        case S.int4:
        case S.int8:
        case S.numeric:
        case S.oid:
          return bs(e);
        case S.json:
        case S.jsonb:
          return ws(e);
        case S.timestamp:
          return Ss(e);
        case S.abstime:
        case S.date:
        case S.daterange:
        case S.int4range:
        case S.int8range:
        case S.money:
        case S.reltime:
        case S.text:
        case S.time:
        case S.timestamptz:
        case S.timetz:
        case S.tsrange:
        case S.tstzrange:
          return et(e);
        default:
          return et(e);
      }
    },
    et = (s) => s,
    ms = (s) => {
      switch (s) {
        case "t":
          return !0;
        case "f":
          return !1;
        default:
          return s;
      }
    },
    bs = (s) => {
      if (typeof s == "string") {
        const e = parseFloat(s);
        if (!Number.isNaN(e)) return e;
      }
      return s;
    },
    ws = (s) => {
      if (typeof s == "string")
        try {
          return JSON.parse(s);
        } catch (e) {
          return console.log(`JSON parse error: ${e}`), s;
        }
      return s;
    },
    ks = (s, e) => {
      if (typeof s != "string") return s;
      const t = s.length - 1,
        r = s[t];
      if (s[0] === "{" && r === "}") {
        let i;
        const o = s.slice(1, t);
        try {
          i = JSON.parse("[" + o + "]");
        } catch {
          i = o ? o.split(",") : [];
        }
        return i.map((a) => Qt(e, a));
      }
      return s;
    },
    Ss = (s) => (typeof s == "string" ? s.replace(" ", "T") : s),
    Yt = (s) => {
      let e = s;
      return (
        (e = e.replace(/^ws/i, "http")),
        (e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
        e.replace(/\/+$/, "")
      );
    };
  class tt {
    constructor(e, t, r = {}, n = Kt) {
      (this.channel = e),
        (this.event = t),
        (this.payload = r),
        (this.timeout = n),
        (this.sent = !1),
        (this.timeoutTimer = void 0),
        (this.ref = ""),
        (this.receivedResp = null),
        (this.recHooks = []),
        (this.refEvent = null);
    }
    resend(e) {
      (this.timeout = e),
        this._cancelRefEvent(),
        (this.ref = ""),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1),
        this.send();
    }
    send() {
      this._hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload,
          ref: this.ref,
          join_ref: this.channel._joinRef(),
        }));
    }
    updatePayload(e) {
      this.payload = Object.assign(Object.assign({}, this.payload), e);
    }
    receive(e, t) {
      var r;
      return (
        this._hasReceived(e) &&
          t(
            (r = this.receivedResp) === null || r === void 0
              ? void 0
              : r.response
          ),
        this.recHooks.push({ status: e, callback: t }),
        this
      );
    }
    startTimeout() {
      if (this.timeoutTimer) return;
      (this.ref = this.channel.socket._makeRef()),
        (this.refEvent = this.channel._replyEventName(this.ref));
      const e = (t) => {
        this._cancelRefEvent(),
          this._cancelTimeout(),
          (this.receivedResp = t),
          this._matchReceive(t);
      };
      this.channel._on(this.refEvent, {}, e),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout));
    }
    trigger(e, t) {
      this.refEvent &&
        this.channel._trigger(this.refEvent, { status: e, response: t });
    }
    destroy() {
      this._cancelRefEvent(), this._cancelTimeout();
    }
    _cancelRefEvent() {
      this.refEvent && this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
      clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
    }
    _matchReceive({ status: e, response: t }) {
      this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(t));
    }
    _hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
  }
  var Xt;
  (function (s) {
    (s.SYNC = "sync"), (s.JOIN = "join"), (s.LEAVE = "leave");
  })(Xt || (Xt = {}));
  class he {
    constructor(e, t) {
      (this.channel = e),
        (this.state = {}),
        (this.pendingDiffs = []),
        (this.joinRef = null),
        (this.caller = {
          onJoin: () => {},
          onLeave: () => {},
          onSync: () => {},
        });
      const r = (t == null ? void 0 : t.events) || {
        state: "presence_state",
        diff: "presence_diff",
      };
      this.channel._on(r.state, {}, (n) => {
        const { onJoin: i, onLeave: o, onSync: a } = this.caller;
        (this.joinRef = this.channel._joinRef()),
          (this.state = he.syncState(this.state, n, i, o)),
          this.pendingDiffs.forEach((c) => {
            this.state = he.syncDiff(this.state, c, i, o);
          }),
          (this.pendingDiffs = []),
          a();
      }),
        this.channel._on(r.diff, {}, (n) => {
          const { onJoin: i, onLeave: o, onSync: a } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(n)
            : ((this.state = he.syncDiff(this.state, n, i, o)), a());
        }),
        this.onJoin((n, i, o) => {
          this.channel._trigger("presence", {
            event: "join",
            key: n,
            currentPresences: i,
            newPresences: o,
          });
        }),
        this.onLeave((n, i, o) => {
          this.channel._trigger("presence", {
            event: "leave",
            key: n,
            currentPresences: i,
            leftPresences: o,
          });
        }),
        this.onSync(() => {
          this.channel._trigger("presence", { event: "sync" });
        });
    }
    static syncState(e, t, r, n) {
      const i = this.cloneDeep(e),
        o = this.transformState(t),
        a = {},
        c = {};
      return (
        this.map(i, (l, h) => {
          o[l] || (c[l] = h);
        }),
        this.map(o, (l, h) => {
          const u = i[l];
          if (u) {
            const d = h.map((g) => g.presence_ref),
              f = u.map((g) => g.presence_ref),
              p = h.filter((g) => f.indexOf(g.presence_ref) < 0),
              m = u.filter((g) => d.indexOf(g.presence_ref) < 0);
            p.length > 0 && (a[l] = p), m.length > 0 && (c[l] = m);
          } else a[l] = h;
        }),
        this.syncDiff(i, { joins: a, leaves: c }, r, n)
      );
    }
    static syncDiff(e, t, r, n) {
      const { joins: i, leaves: o } = {
        joins: this.transformState(t.joins),
        leaves: this.transformState(t.leaves),
      };
      return (
        r || (r = () => {}),
        n || (n = () => {}),
        this.map(i, (a, c) => {
          var l;
          const h = (l = e[a]) !== null && l !== void 0 ? l : [];
          if (((e[a] = this.cloneDeep(c)), h.length > 0)) {
            const u = e[a].map((f) => f.presence_ref),
              d = h.filter((f) => u.indexOf(f.presence_ref) < 0);
            e[a].unshift(...d);
          }
          r(a, h, c);
        }),
        this.map(o, (a, c) => {
          let l = e[a];
          if (!l) return;
          const h = c.map((u) => u.presence_ref);
          (l = l.filter((u) => h.indexOf(u.presence_ref) < 0)),
            (e[a] = l),
            n(a, l, c),
            l.length === 0 && delete e[a];
        }),
        e
      );
    }
    static map(e, t) {
      return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
    }
    static transformState(e) {
      return (
        (e = this.cloneDeep(e)),
        Object.getOwnPropertyNames(e).reduce((t, r) => {
          const n = e[r];
          return (
            "metas" in n
              ? (t[r] = n.metas.map(
                  (i) => (
                    (i.presence_ref = i.phx_ref),
                    delete i.phx_ref,
                    delete i.phx_ref_prev,
                    i
                  )
                ))
              : (t[r] = n),
            t
          );
        }, {})
      );
    }
    static cloneDeep(e) {
      return JSON.parse(JSON.stringify(e));
    }
    onJoin(e) {
      this.caller.onJoin = e;
    }
    onLeave(e) {
      this.caller.onLeave = e;
    }
    onSync(e) {
      this.caller.onSync = e;
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
  }
  var Zt;
  (function (s) {
    (s.ALL = "*"),
      (s.INSERT = "INSERT"),
      (s.UPDATE = "UPDATE"),
      (s.DELETE = "DELETE");
  })(Zt || (Zt = {}));
  var er;
  (function (s) {
    (s.BROADCAST = "broadcast"),
      (s.PRESENCE = "presence"),
      (s.POSTGRES_CHANGES = "postgres_changes"),
      (s.SYSTEM = "system");
  })(er || (er = {}));
  var tr;
  (function (s) {
    (s.SUBSCRIBED = "SUBSCRIBED"),
      (s.TIMED_OUT = "TIMED_OUT"),
      (s.CLOSED = "CLOSED"),
      (s.CHANNEL_ERROR = "CHANNEL_ERROR");
  })(tr || (tr = {}));
  class rt {
    constructor(e, t = { config: {} }, r) {
      (this.topic = e),
        (this.params = t),
        (this.socket = r),
        (this.bindings = {}),
        (this.state = R.closed),
        (this.joinedOnce = !1),
        (this.pushBuffer = []),
        (this.subTopic = e.replace(/^realtime:/i, "")),
        (this.params.config = Object.assign(
          {
            broadcast: { ack: !1, self: !1 },
            presence: { key: "" },
            private: !1,
          },
          t.config
        )),
        (this.timeout = this.socket.timeout),
        (this.joinPush = new tt(this, I.join, this.params, this.timeout)),
        (this.rejoinTimer = new Gt(
          () => this._rejoinUntilConnected(),
          this.socket.reconnectAfterMs
        )),
        this.joinPush.receive("ok", () => {
          (this.state = R.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((n) => n.send()),
            (this.pushBuffer = []);
        }),
        this._onClose(() => {
          this.rejoinTimer.reset(),
            this.socket.log(
              "channel",
              `close ${this.topic} ${this._joinRef()}`
            ),
            (this.state = R.closed),
            this.socket._remove(this);
        }),
        this._onError((n) => {
          this._isLeaving() ||
            this._isClosed() ||
            (this.socket.log("channel", `error ${this.topic}`, n),
            (this.state = R.errored),
            this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive("timeout", () => {
          this._isJoining() &&
            (this.socket.log(
              "channel",
              `timeout ${this.topic}`,
              this.joinPush.timeout
            ),
            (this.state = R.errored),
            this.rejoinTimer.scheduleTimeout());
        }),
        this._on(I.reply, {}, (n, i) => {
          this._trigger(this._replyEventName(i), n);
        }),
        (this.presence = new he(this)),
        (this.broadcastEndpointURL =
          Yt(this.socket.endPoint) + "/api/broadcast"),
        (this.private = this.params.config.private || !1);
    }
    subscribe(e, t = this.timeout) {
      var r, n;
      if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
        throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
      {
        const {
          config: { broadcast: i, presence: o, private: a },
        } = this.params;
        this._onError((h) => e && e("CHANNEL_ERROR", h)),
          this._onClose(() => e && e("CLOSED"));
        const c = {},
          l = {
            broadcast: i,
            presence: o,
            postgres_changes:
              (n =
                (r = this.bindings.postgres_changes) === null || r === void 0
                  ? void 0
                  : r.map((h) => h.filter)) !== null && n !== void 0
                ? n
                : [],
            private: a,
          };
        this.socket.accessToken && (c.access_token = this.socket.accessToken),
          this.updateJoinPayload(Object.assign({ config: l }, c)),
          (this.joinedOnce = !0),
          this._rejoin(t),
          this.joinPush
            .receive("ok", ({ postgres_changes: h }) => {
              var u;
              if (
                (this.socket.accessToken &&
                  this.socket.setAuth(this.socket.accessToken),
                h === void 0)
              ) {
                e && e("SUBSCRIBED");
                return;
              } else {
                const d = this.bindings.postgres_changes,
                  f =
                    (u = d == null ? void 0 : d.length) !== null && u !== void 0
                      ? u
                      : 0,
                  p = [];
                for (let m = 0; m < f; m++) {
                  const g = d[m],
                    {
                      filter: { event: v, schema: w, table: O, filter: P },
                    } = g,
                    j = h && h[m];
                  if (
                    j &&
                    j.event === v &&
                    j.schema === w &&
                    j.table === O &&
                    j.filter === P
                  )
                    p.push(Object.assign(Object.assign({}, g), { id: j.id }));
                  else {
                    this.unsubscribe(),
                      e &&
                        e(
                          "CHANNEL_ERROR",
                          new Error(
                            "mismatch between server and client bindings for postgres changes"
                          )
                        );
                    return;
                  }
                }
                (this.bindings.postgres_changes = p), e && e("SUBSCRIBED");
                return;
              }
            })
            .receive("error", (h) => {
              e &&
                e(
                  "CHANNEL_ERROR",
                  new Error(
                    JSON.stringify(Object.values(h).join(", ") || "error")
                  )
                );
            })
            .receive("timeout", () => {
              e && e("TIMED_OUT");
            });
      }
      return this;
    }
    presenceState() {
      return this.presence.state;
    }
    async track(e, t = {}) {
      return await this.send(
        { type: "presence", event: "track", payload: e },
        t.timeout || this.timeout
      );
    }
    async untrack(e = {}) {
      return await this.send({ type: "presence", event: "untrack" }, e);
    }
    on(e, t, r) {
      return this._on(e, t, r);
    }
    async send(e, t = {}) {
      var r, n;
      if (!this._canPush() && e.type === "broadcast") {
        const { event: i, payload: o } = e,
          a = {
            method: "POST",
            headers: {
              Authorization: this.socket.accessToken
                ? `Bearer ${this.socket.accessToken}`
                : "",
              apikey: this.socket.apiKey ? this.socket.apiKey : "",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages: [
                {
                  topic: this.subTopic,
                  event: i,
                  payload: o,
                  private: this.private,
                },
              ],
            }),
          };
        try {
          const c = await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            a,
            (r = t.timeout) !== null && r !== void 0 ? r : this.timeout
          );
          return (
            await ((n = c.body) === null || n === void 0 ? void 0 : n.cancel()),
            c.ok ? "ok" : "error"
          );
        } catch (c) {
          return c.name === "AbortError" ? "timed out" : "error";
        }
      } else
        return new Promise((i) => {
          var o, a, c;
          const l = this._push(e.type, e, t.timeout || this.timeout);
          e.type === "broadcast" &&
            !(
              !(
                (c =
                  (a =
                    (o = this.params) === null || o === void 0
                      ? void 0
                      : o.config) === null || a === void 0
                    ? void 0
                    : a.broadcast) === null || c === void 0
              ) && c.ack
            ) &&
            i("ok"),
            l.receive("ok", () => i("ok")),
            l.receive("error", () => i("error")),
            l.receive("timeout", () => i("timed out"));
        });
    }
    updateJoinPayload(e) {
      this.joinPush.updatePayload(e);
    }
    unsubscribe(e = this.timeout) {
      this.state = R.leaving;
      const t = () => {
        this.socket.log("channel", `leave ${this.topic}`),
          this._trigger(I.close, "leave", this._joinRef());
      };
      return (
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        new Promise((r) => {
          const n = new tt(this, I.leave, {}, e);
          n
            .receive("ok", () => {
              t(), r("ok");
            })
            .receive("timeout", () => {
              t(), r("timed out");
            })
            .receive("error", () => {
              r("error");
            }),
            n.send(),
            this._canPush() || n.trigger("ok", {});
        })
      );
    }
    async _fetchWithTimeout(e, t, r) {
      const n = new AbortController(),
        i = setTimeout(() => n.abort(), r),
        o = await this.socket.fetch(
          e,
          Object.assign(Object.assign({}, t), { signal: n.signal })
        );
      return clearTimeout(i), o;
    }
    _push(e, t, r = this.timeout) {
      if (!this.joinedOnce)
        throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
      let n = new tt(this, e, t, r);
      return (
        this._canPush()
          ? n.send()
          : (n.startTimeout(), this.pushBuffer.push(n)),
        n
      );
    }
    _onMessage(e, t, r) {
      return t;
    }
    _isMember(e) {
      return this.topic === e;
    }
    _joinRef() {
      return this.joinPush.ref;
    }
    _trigger(e, t, r) {
      var n, i;
      const o = e.toLocaleLowerCase(),
        { close: a, error: c, leave: l, join: h } = I;
      if (r && [a, c, l, h].indexOf(o) >= 0 && r !== this._joinRef()) return;
      let d = this._onMessage(o, t, r);
      if (t && !d)
        throw "channel onMessage callbacks must return the payload, modified or unmodified";
      ["insert", "update", "delete"].includes(o)
        ? (n = this.bindings.postgres_changes) === null ||
          n === void 0 ||
          n
            .filter((f) => {
              var p, m, g;
              return (
                ((p = f.filter) === null || p === void 0 ? void 0 : p.event) ===
                  "*" ||
                ((g =
                  (m = f.filter) === null || m === void 0
                    ? void 0
                    : m.event) === null || g === void 0
                  ? void 0
                  : g.toLocaleLowerCase()) === o
              );
            })
            .map((f) => f.callback(d, r))
        : (i = this.bindings[o]) === null ||
          i === void 0 ||
          i
            .filter((f) => {
              var p, m, g, v, w, O;
              if (["broadcast", "presence", "postgres_changes"].includes(o))
                if ("id" in f) {
                  const P = f.id,
                    j =
                      (p = f.filter) === null || p === void 0
                        ? void 0
                        : p.event;
                  return (
                    P &&
                    ((m = t.ids) === null || m === void 0
                      ? void 0
                      : m.includes(P)) &&
                    (j === "*" ||
                      (j == null ? void 0 : j.toLocaleLowerCase()) ===
                        ((g = t.data) === null || g === void 0
                          ? void 0
                          : g.type.toLocaleLowerCase()))
                  );
                } else {
                  const P =
                    (w =
                      (v = f == null ? void 0 : f.filter) === null ||
                      v === void 0
                        ? void 0
                        : v.event) === null || w === void 0
                      ? void 0
                      : w.toLocaleLowerCase();
                  return (
                    P === "*" ||
                    P ===
                      ((O = t == null ? void 0 : t.event) === null ||
                      O === void 0
                        ? void 0
                        : O.toLocaleLowerCase())
                  );
                }
              else return f.type.toLocaleLowerCase() === o;
            })
            .map((f) => {
              if (typeof d == "object" && "ids" in d) {
                const p = d.data,
                  {
                    schema: m,
                    table: g,
                    commit_timestamp: v,
                    type: w,
                    errors: O,
                  } = p;
                d = Object.assign(
                  Object.assign(
                    {},
                    {
                      schema: m,
                      table: g,
                      commit_timestamp: v,
                      eventType: w,
                      new: {},
                      old: {},
                      errors: O,
                    }
                  ),
                  this._getPayloadRecords(p)
                );
              }
              f.callback(d, r);
            });
    }
    _isClosed() {
      return this.state === R.closed;
    }
    _isJoined() {
      return this.state === R.joined;
    }
    _isJoining() {
      return this.state === R.joining;
    }
    _isLeaving() {
      return this.state === R.leaving;
    }
    _replyEventName(e) {
      return `chan_reply_${e}`;
    }
    _on(e, t, r) {
      const n = e.toLocaleLowerCase(),
        i = { type: n, filter: t, callback: r };
      return (
        this.bindings[n] ? this.bindings[n].push(i) : (this.bindings[n] = [i]),
        this
      );
    }
    _off(e, t) {
      const r = e.toLocaleLowerCase();
      return (
        (this.bindings[r] = this.bindings[r].filter((n) => {
          var i;
          return !(
            ((i = n.type) === null || i === void 0
              ? void 0
              : i.toLocaleLowerCase()) === r && rt.isEqual(n.filter, t)
          );
        })),
        this
      );
    }
    static isEqual(e, t) {
      if (Object.keys(e).length !== Object.keys(t).length) return !1;
      for (const r in e) if (e[r] !== t[r]) return !1;
      return !0;
    }
    _rejoinUntilConnected() {
      this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin();
    }
    _onClose(e) {
      this._on(I.close, {}, e);
    }
    _onError(e) {
      this._on(I.error, {}, (t) => e(t));
    }
    _canPush() {
      return this.socket.isConnected() && this._isJoined();
    }
    _rejoin(e = this.timeout) {
      this._isLeaving() ||
        (this.socket._leaveOpenTopic(this.topic),
        (this.state = R.joining),
        this.joinPush.resend(e));
    }
    _getPayloadRecords(e) {
      const t = { new: {}, old: {} };
      return (
        (e.type === "INSERT" || e.type === "UPDATE") &&
          (t.new = Vt(e.columns, e.record)),
        (e.type === "UPDATE" || e.type === "DELETE") &&
          (t.old = Vt(e.columns, e.old_record)),
        t
      );
    }
  }
  const Ts = () => {},
    Es = typeof WebSocket < "u",
    Ps = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
  class $s {
    constructor(e, t) {
      var r;
      (this.accessToken = null),
        (this.apiKey = null),
        (this.channels = []),
        (this.endPoint = ""),
        (this.httpEndpoint = ""),
        (this.headers = _s),
        (this.params = {}),
        (this.timeout = Kt),
        (this.heartbeatIntervalMs = 3e4),
        (this.heartbeatTimer = void 0),
        (this.pendingHeartbeatRef = null),
        (this.ref = 0),
        (this.logger = Ts),
        (this.conn = null),
        (this.sendBuffer = []),
        (this.serializer = new vs()),
        (this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: [],
        }),
        (this._resolveFetch = (i) => {
          let o;
          return (
            i
              ? (o = i)
              : typeof fetch > "u"
              ? (o = (...a) =>
                  Promise.resolve()
                    .then(() => X)
                    .then(({ default: c }) => c(...a)))
              : (o = fetch),
            (...a) => o(...a)
          );
        }),
        (this.endPoint = `${e}/${Ze.websocket}`),
        (this.httpEndpoint = Yt(e)),
        t != null && t.transport
          ? (this.transport = t.transport)
          : (this.transport = null),
        t != null && t.params && (this.params = t.params),
        t != null &&
          t.headers &&
          (this.headers = Object.assign(
            Object.assign({}, this.headers),
            t.headers
          )),
        t != null && t.timeout && (this.timeout = t.timeout),
        t != null && t.logger && (this.logger = t.logger),
        t != null &&
          t.heartbeatIntervalMs &&
          (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
      const n =
        (r = t == null ? void 0 : t.params) === null || r === void 0
          ? void 0
          : r.apikey;
      if (
        (n && ((this.accessToken = n), (this.apiKey = n)),
        (this.reconnectAfterMs =
          t != null && t.reconnectAfterMs
            ? t.reconnectAfterMs
            : (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4),
        (this.encode =
          t != null && t.encode ? t.encode : (i, o) => o(JSON.stringify(i))),
        (this.decode =
          t != null && t.decode
            ? t.decode
            : this.serializer.decode.bind(this.serializer)),
        (this.reconnectTimer = new Gt(async () => {
          this.disconnect(), this.connect();
        }, this.reconnectAfterMs)),
        (this.fetch = this._resolveFetch(t == null ? void 0 : t.fetch)),
        t != null && t.worker)
      ) {
        if (typeof window < "u" && !window.Worker)
          throw new Error("Web Worker is not supported");
        (this.worker = (t == null ? void 0 : t.worker) || !1),
          (this.workerUrl = t == null ? void 0 : t.workerUrl);
      }
    }
    connect() {
      if (!this.conn) {
        if (this.transport) {
          this.conn = new this.transport(this._endPointURL(), void 0, {
            headers: this.headers,
          });
          return;
        }
        if (Es) {
          (this.conn = new WebSocket(this._endPointURL())),
            this.setupConnection();
          return;
        }
        (this.conn = new Os(this._endPointURL(), void 0, {
          close: () => {
            this.conn = null;
          },
        })),
          Promise.resolve()
            .then(() => ui)
            .then(({ default: e }) => {
              (this.conn = new e(this._endPointURL(), void 0, {
                headers: this.headers,
              })),
                this.setupConnection();
            });
      }
    }
    disconnect(e, t) {
      this.conn &&
        ((this.conn.onclose = function () {}),
        e ? this.conn.close(e, t ?? "") : this.conn.close(),
        (this.conn = null),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.reset());
    }
    getChannels() {
      return this.channels;
    }
    async removeChannel(e) {
      const t = await e.unsubscribe();
      return this.channels.length === 0 && this.disconnect(), t;
    }
    async removeAllChannels() {
      const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
      return this.disconnect(), e;
    }
    log(e, t, r) {
      this.logger(e, t, r);
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case ee.connecting:
          return J.Connecting;
        case ee.open:
          return J.Open;
        case ee.closing:
          return J.Closing;
        default:
          return J.Closed;
      }
    }
    isConnected() {
      return this.connectionState() === J.Open;
    }
    channel(e, t = { config: {} }) {
      const r = new rt(`realtime:${e}`, t, this);
      return this.channels.push(r), r;
    }
    push(e) {
      const { topic: t, event: r, payload: n, ref: i } = e,
        o = () => {
          this.encode(e, (a) => {
            var c;
            (c = this.conn) === null || c === void 0 || c.send(a);
          });
        };
      this.log("push", `${t} ${r} (${i})`, n),
        this.isConnected() ? o() : this.sendBuffer.push(o);
    }
    setAuth(e) {
      (this.accessToken = e),
        this.channels.forEach((t) => {
          e && t.updateJoinPayload({ access_token: e }),
            t.joinedOnce &&
              t._isJoined() &&
              t._push(I.access_token, { access_token: e });
        });
    }
    _makeRef() {
      let e = this.ref + 1;
      return (
        e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
      );
    }
    _leaveOpenTopic(e) {
      let t = this.channels.find(
        (r) => r.topic === e && (r._isJoined() || r._isJoining())
      );
      t &&
        (this.log("transport", `leaving duplicate topic "${e}"`),
        t.unsubscribe());
    }
    _remove(e) {
      this.channels = this.channels.filter(
        (t) => t._joinRef() !== e._joinRef()
      );
    }
    setupConnection() {
      this.conn &&
        ((this.conn.binaryType = "arraybuffer"),
        (this.conn.onopen = () => this._onConnOpen()),
        (this.conn.onerror = (e) => this._onConnError(e)),
        (this.conn.onmessage = (e) => this._onConnMessage(e)),
        (this.conn.onclose = (e) => this._onConnClose(e)));
    }
    _endPointURL() {
      return this._appendParams(
        this.endPoint,
        Object.assign({}, this.params, { vsn: ps })
      );
    }
    _onConnMessage(e) {
      this.decode(e.data, (t) => {
        let { topic: r, event: n, payload: i, ref: o } = t;
        ((o && o === this.pendingHeartbeatRef) ||
          n === (i == null ? void 0 : i.type)) &&
          (this.pendingHeartbeatRef = null),
          this.log(
            "receive",
            `${i.status || ""} ${r} ${n} ${(o && "(" + o + ")") || ""}`,
            i
          ),
          this.channels
            .filter((a) => a._isMember(r))
            .forEach((a) => a._trigger(n, i, o)),
          this.stateChangeCallbacks.message.forEach((a) => a(t));
      });
    }
    async _onConnOpen() {
      if (
        (this.log("transport", `connected to ${this._endPointURL()}`),
        this._flushSendBuffer(),
        this.reconnectTimer.reset(),
        !this.worker)
      )
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
          (this.heartbeatTimer = setInterval(
            () => this._sendHeartbeat(),
            this.heartbeatIntervalMs
          ));
      else {
        this.workerUrl
          ? this.log("worker", `starting worker for from ${this.workerUrl}`)
          : this.log("worker", "starting default worker");
        const e = this._workerObjectUrl(this.workerUrl);
        (this.workerRef = new Worker(e)),
          (this.workerRef.onerror = (t) => {
            this.log("worker", "worker error", t.message),
              this.workerRef.terminate();
          }),
          (this.workerRef.onmessage = (t) => {
            t.data.event === "keepAlive" && this._sendHeartbeat();
          }),
          this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs,
          });
      }
      this.stateChangeCallbacks.open.forEach((e) => e());
    }
    _onConnClose(e) {
      this.log("transport", "close", e),
        this._triggerChanError(),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.scheduleTimeout(),
        this.stateChangeCallbacks.close.forEach((t) => t(e));
    }
    _onConnError(e) {
      this.log("transport", e.message),
        this._triggerChanError(),
        this.stateChangeCallbacks.error.forEach((t) => t(e));
    }
    _triggerChanError() {
      this.channels.forEach((e) => e._trigger(I.error));
    }
    _appendParams(e, t) {
      if (Object.keys(t).length === 0) return e;
      const r = e.match(/\?/) ? "&" : "?",
        n = new URLSearchParams(t);
      return `${e}${r}${n}`;
    }
    _flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    _sendHeartbeat() {
      var e;
      if (this.isConnected()) {
        if (this.pendingHeartbeatRef) {
          (this.pendingHeartbeatRef = null),
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection"
            ),
            (e = this.conn) === null ||
              e === void 0 ||
              e.close(gs, "hearbeat timeout");
          return;
        }
        (this.pendingHeartbeatRef = this._makeRef()),
          this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef,
          }),
          this.setAuth(this.accessToken);
      }
    }
    _workerObjectUrl(e) {
      let t;
      if (e) t = e;
      else {
        const r = new Blob([Ps], { type: "application/javascript" });
        t = URL.createObjectURL(r);
      }
      return t;
    }
  }
  class Os {
    constructor(e, t, r) {
      (this.binaryType = "arraybuffer"),
        (this.onclose = () => {}),
        (this.onerror = () => {}),
        (this.onmessage = () => {}),
        (this.onopen = () => {}),
        (this.readyState = ee.connecting),
        (this.send = () => {}),
        (this.url = null),
        (this.url = e),
        (this.close = r.close);
    }
  }
  class st extends Error {
    constructor(e) {
      super(e), (this.__isStorageError = !0), (this.name = "StorageError");
    }
  }
  function $(s) {
    return typeof s == "object" && s !== null && "__isStorageError" in s;
  }
  class js extends st {
    constructor(e, t) {
      super(e), (this.name = "StorageApiError"), (this.status = t);
    }
    toJSON() {
      return { name: this.name, message: this.message, status: this.status };
    }
  }
  class nt extends st {
    constructor(e, t) {
      super(e), (this.name = "StorageUnknownError"), (this.originalError = t);
    }
  }
  var As = function (s, e, t, r) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(h) {
        try {
          l(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        try {
          l(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        h.done ? i(h.value) : n(h.value).then(a, c);
      }
      l((r = r.apply(s, e || [])).next());
    });
  };
  const rr = (s) => {
      let e;
      return (
        s
          ? (e = s)
          : typeof fetch > "u"
          ? (e = (...t) =>
              Promise.resolve()
                .then(() => X)
                .then(({ default: r }) => r(...t)))
          : (e = fetch),
        (...t) => e(...t)
      );
    },
    Cs = () =>
      As(void 0, void 0, void 0, function* () {
        return typeof Response > "u"
          ? (yield Promise.resolve().then(() => X)).Response
          : Response;
      }),
    it = (s) => {
      if (Array.isArray(s)) return s.map((t) => it(t));
      if (typeof s == "function" || s !== Object(s)) return s;
      const e = {};
      return (
        Object.entries(s).forEach(([t, r]) => {
          const n = t.replace(/([-_][a-z])/gi, (i) =>
            i.toUpperCase().replace(/[-_]/g, "")
          );
          e[n] = it(r);
        }),
        e
      );
    };
  var W = function (s, e, t, r) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(h) {
        try {
          l(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        try {
          l(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        h.done ? i(h.value) : n(h.value).then(a, c);
      }
      l((r = r.apply(s, e || [])).next());
    });
  };
  const ot = (s) =>
      s.msg || s.message || s.error_description || s.error || JSON.stringify(s),
    Rs = (s, e, t) =>
      W(void 0, void 0, void 0, function* () {
        const r = yield Cs();
        s instanceof r && !(t != null && t.noResolveJson)
          ? s
              .json()
              .then((n) => {
                e(new js(ot(n), s.status || 500));
              })
              .catch((n) => {
                e(new nt(ot(n), n));
              })
          : e(new nt(ot(s), s));
      }),
    xs = (s, e, t, r) => {
      const n = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
      return s === "GET"
        ? n
        : ((n.headers = Object.assign(
            { "Content-Type": "application/json" },
            e == null ? void 0 : e.headers
          )),
          r && (n.body = JSON.stringify(r)),
          Object.assign(Object.assign({}, n), t));
    };
  function ue(s, e, t, r, n, i) {
    return W(this, void 0, void 0, function* () {
      return new Promise((o, a) => {
        s(t, xs(e, r, n, i))
          .then((c) => {
            if (!c.ok) throw c;
            return r != null && r.noResolveJson ? c : c.json();
          })
          .then((c) => o(c))
          .catch((c) => Rs(c, a, r));
      });
    });
  }
  function je(s, e, t, r) {
    return W(this, void 0, void 0, function* () {
      return ue(s, "GET", e, t, r);
    });
  }
  function B(s, e, t, r, n) {
    return W(this, void 0, void 0, function* () {
      return ue(s, "POST", e, r, n, t);
    });
  }
  function Is(s, e, t, r, n) {
    return W(this, void 0, void 0, function* () {
      return ue(s, "PUT", e, r, n, t);
    });
  }
  function Ls(s, e, t, r) {
    return W(this, void 0, void 0, function* () {
      return ue(
        s,
        "HEAD",
        e,
        Object.assign(Object.assign({}, t), { noResolveJson: !0 }),
        r
      );
    });
  }
  function sr(s, e, t, r, n) {
    return W(this, void 0, void 0, function* () {
      return ue(s, "DELETE", e, r, n, t);
    });
  }
  var C = function (s, e, t, r) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(h) {
        try {
          l(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        try {
          l(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        h.done ? i(h.value) : n(h.value).then(a, c);
      }
      l((r = r.apply(s, e || [])).next());
    });
  };
  const Us = {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    },
    nr = {
      cacheControl: "3600",
      contentType: "text/plain;charset=UTF-8",
      upsert: !1,
    };
  class Ds {
    constructor(e, t = {}, r, n) {
      (this.url = e),
        (this.headers = t),
        (this.bucketId = r),
        (this.fetch = rr(n));
    }
    uploadOrUpdate(e, t, r, n) {
      return C(this, void 0, void 0, function* () {
        try {
          let i;
          const o = Object.assign(Object.assign({}, nr), n);
          let a = Object.assign(
            Object.assign({}, this.headers),
            e === "POST" && { "x-upsert": String(o.upsert) }
          );
          const c = o.metadata;
          typeof Blob < "u" && r instanceof Blob
            ? ((i = new FormData()),
              i.append("cacheControl", o.cacheControl),
              c && i.append("metadata", this.encodeMetadata(c)),
              i.append("", r))
            : typeof FormData < "u" && r instanceof FormData
            ? ((i = r),
              i.append("cacheControl", o.cacheControl),
              c && i.append("metadata", this.encodeMetadata(c)))
            : ((i = r),
              (a["cache-control"] = `max-age=${o.cacheControl}`),
              (a["content-type"] = o.contentType),
              c && (a["x-metadata"] = this.toBase64(this.encodeMetadata(c)))),
            n != null &&
              n.headers &&
              (a = Object.assign(Object.assign({}, a), n.headers));
          const l = this._removeEmptyFolders(t),
            h = this._getFinalPath(l),
            u = yield this.fetch(
              `${this.url}/object/${h}`,
              Object.assign(
                { method: e, body: i, headers: a },
                o != null && o.duplex ? { duplex: o.duplex } : {}
              )
            ),
            d = yield u.json();
          return u.ok
            ? { data: { path: l, id: d.Id, fullPath: d.Key }, error: null }
            : { data: null, error: d };
        } catch (i) {
          if ($(i)) return { data: null, error: i };
          throw i;
        }
      });
    }
    upload(e, t, r) {
      return C(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("POST", e, t, r);
      });
    }
    uploadToSignedUrl(e, t, r, n) {
      return C(this, void 0, void 0, function* () {
        const i = this._removeEmptyFolders(e),
          o = this._getFinalPath(i),
          a = new URL(this.url + `/object/upload/sign/${o}`);
        a.searchParams.set("token", t);
        try {
          let c;
          const l = Object.assign({ upsert: nr.upsert }, n),
            h = Object.assign(Object.assign({}, this.headers), {
              "x-upsert": String(l.upsert),
            });
          typeof Blob < "u" && r instanceof Blob
            ? ((c = new FormData()),
              c.append("cacheControl", l.cacheControl),
              c.append("", r))
            : typeof FormData < "u" && r instanceof FormData
            ? ((c = r), c.append("cacheControl", l.cacheControl))
            : ((c = r),
              (h["cache-control"] = `max-age=${l.cacheControl}`),
              (h["content-type"] = l.contentType));
          const u = yield this.fetch(a.toString(), {
              method: "PUT",
              body: c,
              headers: h,
            }),
            d = yield u.json();
          return u.ok
            ? { data: { path: i, fullPath: d.Key }, error: null }
            : { data: null, error: d };
        } catch (c) {
          if ($(c)) return { data: null, error: c };
          throw c;
        }
      });
    }
    createSignedUploadUrl(e, t) {
      return C(this, void 0, void 0, function* () {
        try {
          let r = this._getFinalPath(e);
          const n = Object.assign({}, this.headers);
          t != null && t.upsert && (n["x-upsert"] = "true");
          const i = yield B(
              this.fetch,
              `${this.url}/object/upload/sign/${r}`,
              {},
              { headers: n }
            ),
            o = new URL(this.url + i.url),
            a = o.searchParams.get("token");
          if (!a) throw new st("No token returned by API");
          return {
            data: { signedUrl: o.toString(), path: e, token: a },
            error: null,
          };
        } catch (r) {
          if ($(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    update(e, t, r) {
      return C(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("PUT", e, t, r);
      });
    }
    move(e, t, r) {
      return C(this, void 0, void 0, function* () {
        try {
          return {
            data: yield B(
              this.fetch,
              `${this.url}/object/move`,
              {
                bucketId: this.bucketId,
                sourceKey: e,
                destinationKey: t,
                destinationBucket: r == null ? void 0 : r.destinationBucket,
              },
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (n) {
          if ($(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    copy(e, t, r) {
      return C(this, void 0, void 0, function* () {
        try {
          return {
            data: {
              path: (yield B(
                this.fetch,
                `${this.url}/object/copy`,
                {
                  bucketId: this.bucketId,
                  sourceKey: e,
                  destinationKey: t,
                  destinationBucket: r == null ? void 0 : r.destinationBucket,
                },
                { headers: this.headers }
              )).Key,
            },
            error: null,
          };
        } catch (n) {
          if ($(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    createSignedUrl(e, t, r) {
      return C(this, void 0, void 0, function* () {
        try {
          let n = this._getFinalPath(e),
            i = yield B(
              this.fetch,
              `${this.url}/object/sign/${n}`,
              Object.assign(
                { expiresIn: t },
                r != null && r.transform ? { transform: r.transform } : {}
              ),
              { headers: this.headers }
            );
          const o =
            r != null && r.download
              ? `&download=${r.download === !0 ? "" : r.download}`
              : "";
          return (
            (i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }),
            { data: i, error: null }
          );
        } catch (n) {
          if ($(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    createSignedUrls(e, t, r) {
      return C(this, void 0, void 0, function* () {
        try {
          const n = yield B(
              this.fetch,
              `${this.url}/object/sign/${this.bucketId}`,
              { expiresIn: t, paths: e },
              { headers: this.headers }
            ),
            i =
              r != null && r.download
                ? `&download=${r.download === !0 ? "" : r.download}`
                : "";
          return {
            data: n.map((o) =>
              Object.assign(Object.assign({}, o), {
                signedUrl: o.signedURL
                  ? encodeURI(`${this.url}${o.signedURL}${i}`)
                  : null,
              })
            ),
            error: null,
          };
        } catch (n) {
          if ($(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    download(e, t) {
      return C(this, void 0, void 0, function* () {
        const n =
            typeof (t == null ? void 0 : t.transform) < "u"
              ? "render/image/authenticated"
              : "object",
          i = this.transformOptsToQueryString(
            (t == null ? void 0 : t.transform) || {}
          ),
          o = i ? `?${i}` : "";
        try {
          const a = this._getFinalPath(e);
          return {
            data: yield (yield je(this.fetch, `${this.url}/${n}/${a}${o}`, {
              headers: this.headers,
              noResolveJson: !0,
            })).blob(),
            error: null,
          };
        } catch (a) {
          if ($(a)) return { data: null, error: a };
          throw a;
        }
      });
    }
    info(e) {
      return C(this, void 0, void 0, function* () {
        const t = this._getFinalPath(e);
        try {
          const r = yield je(this.fetch, `${this.url}/object/info/${t}`, {
            headers: this.headers,
          });
          return { data: it(r), error: null };
        } catch (r) {
          if ($(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    exists(e) {
      return C(this, void 0, void 0, function* () {
        const t = this._getFinalPath(e);
        try {
          return (
            yield Ls(this.fetch, `${this.url}/object/${t}`, {
              headers: this.headers,
            }),
            { data: !0, error: null }
          );
        } catch (r) {
          if ($(r) && r instanceof nt) {
            const n = r.originalError;
            if ([400, 404].includes(n == null ? void 0 : n.status))
              return { data: !1, error: r };
          }
          throw r;
        }
      });
    }
    getPublicUrl(e, t) {
      const r = this._getFinalPath(e),
        n = [],
        i =
          t != null && t.download
            ? `download=${t.download === !0 ? "" : t.download}`
            : "";
      i !== "" && n.push(i);
      const a =
          typeof (t == null ? void 0 : t.transform) < "u"
            ? "render/image"
            : "object",
        c = this.transformOptsToQueryString(
          (t == null ? void 0 : t.transform) || {}
        );
      c !== "" && n.push(c);
      let l = n.join("&");
      return (
        l !== "" && (l = `?${l}`),
        { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${l}`) } }
      );
    }
    remove(e) {
      return C(this, void 0, void 0, function* () {
        try {
          return {
            data: yield sr(
              this.fetch,
              `${this.url}/object/${this.bucketId}`,
              { prefixes: e },
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (t) {
          if ($(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    list(e, t, r) {
      return C(this, void 0, void 0, function* () {
        try {
          const n = Object.assign(Object.assign(Object.assign({}, Us), t), {
            prefix: e || "",
          });
          return {
            data: yield B(
              this.fetch,
              `${this.url}/object/list/${this.bucketId}`,
              n,
              { headers: this.headers },
              r
            ),
            error: null,
          };
        } catch (n) {
          if ($(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    encodeMetadata(e) {
      return JSON.stringify(e);
    }
    toBase64(e) {
      return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
    }
    _getFinalPath(e) {
      return `${this.bucketId}/${e}`;
    }
    _removeEmptyFolders(e) {
      return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(e) {
      const t = [];
      return (
        e.width && t.push(`width=${e.width}`),
        e.height && t.push(`height=${e.height}`),
        e.resize && t.push(`resize=${e.resize}`),
        e.format && t.push(`format=${e.format}`),
        e.quality && t.push(`quality=${e.quality}`),
        t.join("&")
      );
    }
  }
  const Ns = { "X-Client-Info": "storage-js/2.7.1" };
  var te = function (s, e, t, r) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(h) {
        try {
          l(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        try {
          l(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        h.done ? i(h.value) : n(h.value).then(a, c);
      }
      l((r = r.apply(s, e || [])).next());
    });
  };
  class Bs {
    constructor(e, t = {}, r) {
      (this.url = e),
        (this.headers = Object.assign(Object.assign({}, Ns), t)),
        (this.fetch = rr(r));
    }
    listBuckets() {
      return te(this, void 0, void 0, function* () {
        try {
          return {
            data: yield je(this.fetch, `${this.url}/bucket`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (e) {
          if ($(e)) return { data: null, error: e };
          throw e;
        }
      });
    }
    getBucket(e) {
      return te(this, void 0, void 0, function* () {
        try {
          return {
            data: yield je(this.fetch, `${this.url}/bucket/${e}`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (t) {
          if ($(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    createBucket(e, t = { public: !1 }) {
      return te(this, void 0, void 0, function* () {
        try {
          return {
            data: yield B(
              this.fetch,
              `${this.url}/bucket`,
              {
                id: e,
                name: e,
                public: t.public,
                file_size_limit: t.fileSizeLimit,
                allowed_mime_types: t.allowedMimeTypes,
              },
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (r) {
          if ($(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    updateBucket(e, t) {
      return te(this, void 0, void 0, function* () {
        try {
          return {
            data: yield Is(
              this.fetch,
              `${this.url}/bucket/${e}`,
              {
                id: e,
                name: e,
                public: t.public,
                file_size_limit: t.fileSizeLimit,
                allowed_mime_types: t.allowedMimeTypes,
              },
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (r) {
          if ($(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    emptyBucket(e) {
      return te(this, void 0, void 0, function* () {
        try {
          return {
            data: yield B(
              this.fetch,
              `${this.url}/bucket/${e}/empty`,
              {},
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (t) {
          if ($(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    deleteBucket(e) {
      return te(this, void 0, void 0, function* () {
        try {
          return {
            data: yield sr(
              this.fetch,
              `${this.url}/bucket/${e}`,
              {},
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (t) {
          if ($(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
  }
  class Ms extends Bs {
    constructor(e, t = {}, r) {
      super(e, t, r);
    }
    from(e) {
      return new Ds(this.url, this.headers, e, this.fetch);
    }
  }
  const Fs = "2.46.1";
  let de = "";
  typeof Deno < "u"
    ? (de = "deno")
    : typeof document < "u"
    ? (de = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
    ? (de = "react-native")
    : (de = "node");
  const qs = { headers: { "X-Client-Info": `supabase-js-${de}/${Fs}` } },
    Hs = { schema: "public" },
    zs = {
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      flowType: "implicit",
    },
    Js = {};
  var Ws = function (s, e, t, r) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(h) {
        try {
          l(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        try {
          l(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        h.done ? i(h.value) : n(h.value).then(a, c);
      }
      l((r = r.apply(s, e || [])).next());
    });
  };
  const Ks = (s) => {
      let e;
      return (
        s ? (e = s) : typeof fetch > "u" ? (e = Dt) : (e = fetch),
        (...t) => e(...t)
      );
    },
    Gs = () => (typeof Headers > "u" ? Nt : Headers),
    Vs = (s, e, t) => {
      const r = Ks(t),
        n = Gs();
      return (i, o) =>
        Ws(void 0, void 0, void 0, function* () {
          var a;
          const c = (a = yield e()) !== null && a !== void 0 ? a : s;
          let l = new n(o == null ? void 0 : o.headers);
          return (
            l.has("apikey") || l.set("apikey", s),
            l.has("Authorization") || l.set("Authorization", `Bearer ${c}`),
            r(i, Object.assign(Object.assign({}, o), { headers: l }))
          );
        });
    };
  var Qs = function (s, e, t, r) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(h) {
        try {
          l(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        try {
          l(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        h.done ? i(h.value) : n(h.value).then(a, c);
      }
      l((r = r.apply(s, e || [])).next());
    });
  };
  function Ys(s) {
    return s.replace(/\/$/, "");
  }
  function Xs(s, e) {
    const { db: t, auth: r, realtime: n, global: i } = s,
      { db: o, auth: a, realtime: c, global: l } = e,
      h = {
        db: Object.assign(Object.assign({}, o), t),
        auth: Object.assign(Object.assign({}, a), r),
        realtime: Object.assign(Object.assign({}, c), n),
        global: Object.assign(Object.assign({}, l), i),
        accessToken: () =>
          Qs(this, void 0, void 0, function* () {
            return "";
          }),
      };
    return (
      s.accessToken ? (h.accessToken = s.accessToken) : delete h.accessToken, h
    );
  }
  const ir = "2.65.1",
    Zs = "http://localhost:9999",
    en = "supabase.auth.token",
    tn = { "X-Client-Info": `gotrue-js/${ir}` },
    or = 10,
    at = "X-Supabase-Api-Version",
    ar = {
      "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01",
      },
    };
  function rn(s) {
    return Math.round(Date.now() / 1e3) + s;
  }
  function sn() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (s) {
        const e = (Math.random() * 16) | 0;
        return (s == "x" ? e : (e & 3) | 8).toString(16);
      }
    );
  }
  const L = () => typeof document < "u",
    K = { tested: !1, writable: !1 },
    fe = () => {
      if (!L()) return !1;
      try {
        if (typeof globalThis.localStorage != "object") return !1;
      } catch {
        return !1;
      }
      if (K.tested) return K.writable;
      const s = `lswt-${Math.random()}${Math.random()}`;
      try {
        globalThis.localStorage.setItem(s, s),
          globalThis.localStorage.removeItem(s),
          (K.tested = !0),
          (K.writable = !0);
      } catch {
        (K.tested = !0), (K.writable = !1);
      }
      return K.writable;
    };
  function ct(s) {
    const e = {},
      t = new URL(s);
    if (t.hash && t.hash[0] === "#")
      try {
        new URLSearchParams(t.hash.substring(1)).forEach((n, i) => {
          e[i] = n;
        });
      } catch {}
    return (
      t.searchParams.forEach((r, n) => {
        e[n] = r;
      }),
      e
    );
  }
  const cr = (s) => {
      let e;
      return (
        s
          ? (e = s)
          : typeof fetch > "u"
          ? (e = (...t) =>
              Promise.resolve()
                .then(() => X)
                .then(({ default: r }) => r(...t)))
          : (e = fetch),
        (...t) => e(...t)
      );
    },
    nn = (s) =>
      typeof s == "object" &&
      s !== null &&
      "status" in s &&
      "ok" in s &&
      "json" in s &&
      typeof s.json == "function",
    lr = async (s, e, t) => {
      await s.setItem(e, JSON.stringify(t));
    },
    Ae = async (s, e) => {
      const t = await s.getItem(e);
      if (!t) return null;
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    },
    Ce = async (s, e) => {
      await s.removeItem(e);
    };
  function on(s) {
    const e =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let t = "",
      r,
      n,
      i,
      o,
      a,
      c,
      l,
      h = 0;
    for (s = s.replace("-", "+").replace("_", "/"); h < s.length; )
      (o = e.indexOf(s.charAt(h++))),
        (a = e.indexOf(s.charAt(h++))),
        (c = e.indexOf(s.charAt(h++))),
        (l = e.indexOf(s.charAt(h++))),
        (r = (o << 2) | (a >> 4)),
        (n = ((a & 15) << 4) | (c >> 2)),
        (i = ((c & 3) << 6) | l),
        (t = t + String.fromCharCode(r)),
        c != 64 && n != 0 && (t = t + String.fromCharCode(n)),
        l != 64 && i != 0 && (t = t + String.fromCharCode(i));
    return t;
  }
  class Re {
    constructor() {
      this.promise = new Re.promiseConstructor((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  }
  Re.promiseConstructor = Promise;
  function hr(s) {
    const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
      t = s.split(".");
    if (t.length !== 3)
      throw new Error("JWT is not valid: not a JWT structure");
    if (!e.test(t[1]))
      throw new Error("JWT is not valid: payload is not in base64url format");
    const r = t[1];
    return JSON.parse(on(r));
  }
  async function an(s) {
    return await new Promise((e) => {
      setTimeout(() => e(null), s);
    });
  }
  function cn(s, e) {
    return new Promise((r, n) => {
      (async () => {
        for (let i = 0; i < 1 / 0; i++)
          try {
            const o = await s(i);
            if (!e(i, null, o)) {
              r(o);
              return;
            }
          } catch (o) {
            if (!e(i, o)) {
              n(o);
              return;
            }
          }
      })();
    });
  }
  function ln(s) {
    return ("0" + s.toString(16)).substr(-2);
  }
  function hn() {
    const e = new Uint32Array(56);
    if (typeof crypto > "u") {
      const t =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
        r = t.length;
      let n = "";
      for (let i = 0; i < 56; i++) n += t.charAt(Math.floor(Math.random() * r));
      return n;
    }
    return crypto.getRandomValues(e), Array.from(e, ln).join("");
  }
  async function un(s) {
    const t = new TextEncoder().encode(s),
      r = await crypto.subtle.digest("SHA-256", t),
      n = new Uint8Array(r);
    return Array.from(n)
      .map((i) => String.fromCharCode(i))
      .join("");
  }
  function dn(s) {
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function fn(s) {
    if (
      !(
        typeof crypto < "u" &&
        typeof crypto.subtle < "u" &&
        typeof TextEncoder < "u"
      )
    )
      return (
        console.warn(
          "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
        ),
        s
      );
    const t = await un(s);
    return dn(t);
  }
  async function re(s, e, t = !1) {
    const r = hn();
    let n = r;
    t && (n += "/PASSWORD_RECOVERY"), await lr(s, `${e}-code-verifier`, n);
    const i = await fn(r);
    return [i, r === i ? "plain" : "s256"];
  }
  const _n = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
  function pn(s) {
    const e = s.headers.get(at);
    if (!e || !e.match(_n)) return null;
    try {
      return new Date(`${e}T00:00:00.0Z`);
    } catch {
      return null;
    }
  }
  class lt extends Error {
    constructor(e, t, r) {
      super(e),
        (this.__isAuthError = !0),
        (this.name = "AuthError"),
        (this.status = t),
        (this.code = r);
    }
  }
  function y(s) {
    return typeof s == "object" && s !== null && "__isAuthError" in s;
  }
  class gn extends lt {
    constructor(e, t, r) {
      super(e, t, r),
        (this.name = "AuthApiError"),
        (this.status = t),
        (this.code = r);
    }
  }
  function vn(s) {
    return y(s) && s.name === "AuthApiError";
  }
  class ur extends lt {
    constructor(e, t) {
      super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
    }
  }
  class G extends lt {
    constructor(e, t, r, n) {
      super(e, r, n), (this.name = t), (this.status = r);
    }
  }
  class M extends G {
    constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
    }
  }
  function yn(s) {
    return y(s) && s.name === "AuthSessionMissingError";
  }
  class ht extends G {
    constructor() {
      super(
        "Auth session or user missing",
        "AuthInvalidTokenResponseError",
        500,
        void 0
      );
    }
  }
  class xe extends G {
    constructor(e) {
      super(e, "AuthInvalidCredentialsError", 400, void 0);
    }
  }
  class Ie extends G {
    constructor(e, t = null) {
      super(e, "AuthImplicitGrantRedirectError", 500, void 0),
        (this.details = null),
        (this.details = t);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details,
      };
    }
  }
  class dr extends G {
    constructor(e, t = null) {
      super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        (this.details = null),
        (this.details = t);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details,
      };
    }
  }
  class ut extends G {
    constructor(e, t) {
      super(e, "AuthRetryableFetchError", t, void 0);
    }
  }
  function dt(s) {
    return y(s) && s.name === "AuthRetryableFetchError";
  }
  class fr extends G {
    constructor(e, t, r) {
      super(e, "AuthWeakPasswordError", t, "weak_password"), (this.reasons = r);
    }
  }
  var mn = function (s, e) {
    var t = {};
    for (var r in s)
      Object.prototype.hasOwnProperty.call(s, r) &&
        e.indexOf(r) < 0 &&
        (t[r] = s[r]);
    if (s != null && typeof Object.getOwnPropertySymbols == "function")
      for (var n = 0, r = Object.getOwnPropertySymbols(s); n < r.length; n++)
        e.indexOf(r[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, r[n]) &&
          (t[r[n]] = s[r[n]]);
    return t;
  };
  const V = (s) =>
      s.msg || s.message || s.error_description || s.error || JSON.stringify(s),
    bn = [502, 503, 504];
  async function _r(s) {
    var e;
    if (!nn(s)) throw new ut(V(s), 0);
    if (bn.includes(s.status)) throw new ut(V(s), s.status);
    let t;
    try {
      t = await s.json();
    } catch (i) {
      throw new ur(V(i), i);
    }
    let r;
    const n = pn(s);
    if (
      (n &&
      n.getTime() >= ar["2024-01-01"].timestamp &&
      typeof t == "object" &&
      t &&
      typeof t.code == "string"
        ? (r = t.code)
        : typeof t == "object" &&
          t &&
          typeof t.error_code == "string" &&
          (r = t.error_code),
      r)
    ) {
      if (r === "weak_password")
        throw new fr(
          V(t),
          s.status,
          ((e = t.weak_password) === null || e === void 0
            ? void 0
            : e.reasons) || []
        );
      if (r === "session_not_found") throw new M();
    } else if (
      typeof t == "object" &&
      t &&
      typeof t.weak_password == "object" &&
      t.weak_password &&
      Array.isArray(t.weak_password.reasons) &&
      t.weak_password.reasons.length &&
      t.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0)
    )
      throw new fr(V(t), s.status, t.weak_password.reasons);
    throw new gn(V(t), s.status || 500, r);
  }
  const wn = (s, e, t, r) => {
    const n = { method: s, headers: (e == null ? void 0 : e.headers) || {} };
    return s === "GET"
      ? n
      : ((n.headers = Object.assign(
          { "Content-Type": "application/json;charset=UTF-8" },
          e == null ? void 0 : e.headers
        )),
        (n.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, n), t));
  };
  async function b(s, e, t, r) {
    var n;
    const i = Object.assign({}, r == null ? void 0 : r.headers);
    i[at] || (i[at] = ar["2024-01-01"].name),
      r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
    const o =
      (n = r == null ? void 0 : r.query) !== null && n !== void 0 ? n : {};
    r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
    const a = Object.keys(o).length
        ? "?" + new URLSearchParams(o).toString()
        : "",
      c = await kn(
        s,
        e,
        t + a,
        { headers: i, noResolveJson: r == null ? void 0 : r.noResolveJson },
        {},
        r == null ? void 0 : r.body
      );
    return r != null && r.xform
      ? r == null
        ? void 0
        : r.xform(c)
      : { data: Object.assign({}, c), error: null };
  }
  async function kn(s, e, t, r, n, i) {
    const o = wn(e, r, n, i);
    let a;
    try {
      a = await s(t, Object.assign({}, o));
    } catch (c) {
      throw (console.error(c), new ut(V(c), 0));
    }
    if ((a.ok || (await _r(a)), r != null && r.noResolveJson)) return a;
    try {
      return await a.json();
    } catch (c) {
      await _r(c);
    }
  }
  function F(s) {
    var e;
    let t = null;
    Pn(s) &&
      ((t = Object.assign({}, s)),
      s.expires_at || (t.expires_at = rn(s.expires_in)));
    const r = (e = s.user) !== null && e !== void 0 ? e : s;
    return { data: { session: t, user: r }, error: null };
  }
  function pr(s) {
    const e = F(s);
    return (
      !e.error &&
        s.weak_password &&
        typeof s.weak_password == "object" &&
        Array.isArray(s.weak_password.reasons) &&
        s.weak_password.reasons.length &&
        s.weak_password.message &&
        typeof s.weak_password.message == "string" &&
        s.weak_password.reasons.reduce(
          (t, r) => t && typeof r == "string",
          !0
        ) &&
        (e.data.weak_password = s.weak_password),
      e
    );
  }
  function q(s) {
    var e;
    return {
      data: { user: (e = s.user) !== null && e !== void 0 ? e : s },
      error: null,
    };
  }
  function Sn(s) {
    return { data: s, error: null };
  }
  function Tn(s) {
    const {
        action_link: e,
        email_otp: t,
        hashed_token: r,
        redirect_to: n,
        verification_type: i,
      } = s,
      o = mn(s, [
        "action_link",
        "email_otp",
        "hashed_token",
        "redirect_to",
        "verification_type",
      ]),
      a = {
        action_link: e,
        email_otp: t,
        hashed_token: r,
        redirect_to: n,
        verification_type: i,
      },
      c = Object.assign({}, o);
    return { data: { properties: a, user: c }, error: null };
  }
  function En(s) {
    return s;
  }
  function Pn(s) {
    return s.access_token && s.refresh_token && s.expires_in;
  }
  var $n = function (s, e) {
    var t = {};
    for (var r in s)
      Object.prototype.hasOwnProperty.call(s, r) &&
        e.indexOf(r) < 0 &&
        (t[r] = s[r]);
    if (s != null && typeof Object.getOwnPropertySymbols == "function")
      for (var n = 0, r = Object.getOwnPropertySymbols(s); n < r.length; n++)
        e.indexOf(r[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, r[n]) &&
          (t[r[n]] = s[r[n]]);
    return t;
  };
  class On {
    constructor({ url: e = "", headers: t = {}, fetch: r }) {
      (this.url = e),
        (this.headers = t),
        (this.fetch = cr(r)),
        (this.mfa = {
          listFactors: this._listFactors.bind(this),
          deleteFactor: this._deleteFactor.bind(this),
        });
    }
    async signOut(e, t = "global") {
      try {
        return (
          await b(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
            headers: this.headers,
            jwt: e,
            noResolveJson: !0,
          }),
          { data: null, error: null }
        );
      } catch (r) {
        if (y(r)) return { data: null, error: r };
        throw r;
      }
    }
    async inviteUserByEmail(e, t = {}) {
      try {
        return await b(this.fetch, "POST", `${this.url}/invite`, {
          body: { email: e, data: t.data },
          headers: this.headers,
          redirectTo: t.redirectTo,
          xform: q,
        });
      } catch (r) {
        if (y(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async generateLink(e) {
      try {
        const { options: t } = e,
          r = $n(e, ["options"]),
          n = Object.assign(Object.assign({}, r), t);
        return (
          "newEmail" in r &&
            ((n.new_email = r == null ? void 0 : r.newEmail),
            delete n.newEmail),
          await b(this.fetch, "POST", `${this.url}/admin/generate_link`, {
            body: n,
            headers: this.headers,
            xform: Tn,
            redirectTo: t == null ? void 0 : t.redirectTo,
          })
        );
      } catch (t) {
        if (y(t)) return { data: { properties: null, user: null }, error: t };
        throw t;
      }
    }
    async createUser(e) {
      try {
        return await b(this.fetch, "POST", `${this.url}/admin/users`, {
          body: e,
          headers: this.headers,
          xform: q,
        });
      } catch (t) {
        if (y(t)) return { data: { user: null }, error: t };
        throw t;
      }
    }
    async listUsers(e) {
      var t, r, n, i, o, a, c;
      try {
        const l = { nextPage: null, lastPage: 0, total: 0 },
          h = await b(this.fetch, "GET", `${this.url}/admin/users`, {
            headers: this.headers,
            noResolveJson: !0,
            query: {
              page:
                (r =
                  (t = e == null ? void 0 : e.page) === null || t === void 0
                    ? void 0
                    : t.toString()) !== null && r !== void 0
                  ? r
                  : "",
              per_page:
                (i =
                  (n = e == null ? void 0 : e.perPage) === null || n === void 0
                    ? void 0
                    : n.toString()) !== null && i !== void 0
                  ? i
                  : "",
            },
            xform: En,
          });
        if (h.error) throw h.error;
        const u = await h.json(),
          d =
            (o = h.headers.get("x-total-count")) !== null && o !== void 0
              ? o
              : 0,
          f =
            (c =
              (a = h.headers.get("link")) === null || a === void 0
                ? void 0
                : a.split(",")) !== null && c !== void 0
              ? c
              : [];
        return (
          f.length > 0 &&
            (f.forEach((p) => {
              const m = parseInt(p.split(";")[0].split("=")[1].substring(0, 1)),
                g = JSON.parse(p.split(";")[1].split("=")[1]);
              l[`${g}Page`] = m;
            }),
            (l.total = parseInt(d))),
          { data: Object.assign(Object.assign({}, u), l), error: null }
        );
      } catch (l) {
        if (y(l)) return { data: { users: [] }, error: l };
        throw l;
      }
    }
    async getUserById(e) {
      try {
        return await b(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          xform: q,
        });
      } catch (t) {
        if (y(t)) return { data: { user: null }, error: t };
        throw t;
      }
    }
    async updateUserById(e, t) {
      try {
        return await b(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
          body: t,
          headers: this.headers,
          xform: q,
        });
      } catch (r) {
        if (y(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async deleteUser(e, t = !1) {
      try {
        return await b(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          body: { should_soft_delete: t },
          xform: q,
        });
      } catch (r) {
        if (y(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async _listFactors(e) {
      try {
        const { data: t, error: r } = await b(
          this.fetch,
          "GET",
          `${this.url}/admin/users/${e.userId}/factors`,
          {
            headers: this.headers,
            xform: (n) => ({ data: { factors: n }, error: null }),
          }
        );
        return { data: t, error: r };
      } catch (t) {
        if (y(t)) return { data: null, error: t };
        throw t;
      }
    }
    async _deleteFactor(e) {
      try {
        return {
          data: await b(
            this.fetch,
            "DELETE",
            `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        if (y(t)) return { data: null, error: t };
        throw t;
      }
    }
  }
  const jn = {
    getItem: (s) => (fe() ? globalThis.localStorage.getItem(s) : null),
    setItem: (s, e) => {
      fe() && globalThis.localStorage.setItem(s, e);
    },
    removeItem: (s) => {
      fe() && globalThis.localStorage.removeItem(s);
    },
  };
  function gr(s = {}) {
    return {
      getItem: (e) => s[e] || null,
      setItem: (e, t) => {
        s[e] = t;
      },
      removeItem: (e) => {
        delete s[e];
      },
    };
  }
  function An() {
    if (typeof globalThis != "object")
      try {
        Object.defineProperty(Object.prototype, "__magic__", {
          get: function () {
            return this;
          },
          configurable: !0,
        }),
          (__magic__.globalThis = __magic__),
          delete Object.prototype.__magic__;
      } catch {
        typeof self < "u" && (self.globalThis = self);
      }
  }
  const se = {
    debug: !!(
      globalThis &&
      fe() &&
      globalThis.localStorage &&
      globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") ===
        "true"
    ),
  };
  class vr extends Error {
    constructor(e) {
      super(e), (this.isAcquireTimeout = !0);
    }
  }
  class Cn extends vr {}
  async function Rn(s, e, t) {
    se.debug &&
      console.log("@supabase/gotrue-js: navigatorLock: acquire lock", s, e);
    const r = new globalThis.AbortController();
    return (
      e > 0 &&
        setTimeout(() => {
          r.abort(),
            se.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock acquire timed out",
                s
              );
        }, e),
      await globalThis.navigator.locks.request(
        s,
        e === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: r.signal },
        async (n) => {
          if (n) {
            se.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                s,
                n.name
              );
            try {
              return await t();
            } finally {
              se.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  s,
                  n.name
                );
            }
          } else {
            if (e === 0)
              throw (
                (se.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    s
                  ),
                new Cn(
                  `Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`
                ))
              );
            if (se.debug)
              try {
                const i = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(i, null, "  ")
                );
              } catch (i) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  i
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
              ),
              await t()
            );
          }
        }
      )
    );
  }
  An();
  const xn = {
      url: Zs,
      storageKey: en,
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      headers: tn,
      flowType: "implicit",
      debug: !1,
      hasCustomAuthorizationHeader: !1,
    },
    _e = 30 * 1e3,
    yr = 3;
  async function mr(s, e, t) {
    return await t();
  }
  class pe {
    constructor(e) {
      var t, r;
      (this.memoryStorage = null),
        (this.stateChangeEmitters = new Map()),
        (this.autoRefreshTicker = null),
        (this.visibilityChangedCallback = null),
        (this.refreshingDeferred = null),
        (this.initializePromise = null),
        (this.detectSessionInUrl = !0),
        (this.hasCustomAuthorizationHeader = !1),
        (this.suppressGetSessionWarning = !1),
        (this.lockAcquired = !1),
        (this.pendingInLock = []),
        (this.broadcastChannel = null),
        (this.logger = console.log),
        (this.instanceID = pe.nextInstanceID),
        (pe.nextInstanceID += 1),
        this.instanceID > 0 &&
          L() &&
          console.warn(
            "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
          );
      const n = Object.assign(Object.assign({}, xn), e);
      if (
        ((this.logDebugMessages = !!n.debug),
        typeof n.debug == "function" && (this.logger = n.debug),
        (this.persistSession = n.persistSession),
        (this.storageKey = n.storageKey),
        (this.autoRefreshToken = n.autoRefreshToken),
        (this.admin = new On({
          url: n.url,
          headers: n.headers,
          fetch: n.fetch,
        })),
        (this.url = n.url),
        (this.headers = n.headers),
        (this.fetch = cr(n.fetch)),
        (this.lock = n.lock || mr),
        (this.detectSessionInUrl = n.detectSessionInUrl),
        (this.flowType = n.flowType),
        (this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader),
        n.lock
          ? (this.lock = n.lock)
          : L() &&
            !(
              (t = globalThis == null ? void 0 : globalThis.navigator) ===
                null || t === void 0
            ) &&
            t.locks
          ? (this.lock = Rn)
          : (this.lock = mr),
        (this.mfa = {
          verify: this._verify.bind(this),
          enroll: this._enroll.bind(this),
          unenroll: this._unenroll.bind(this),
          challenge: this._challenge.bind(this),
          listFactors: this._listFactors.bind(this),
          challengeAndVerify: this._challengeAndVerify.bind(this),
          getAuthenticatorAssuranceLevel:
            this._getAuthenticatorAssuranceLevel.bind(this),
        }),
        this.persistSession
          ? n.storage
            ? (this.storage = n.storage)
            : fe()
            ? (this.storage = jn)
            : ((this.memoryStorage = {}),
              (this.storage = gr(this.memoryStorage)))
          : ((this.memoryStorage = {}),
            (this.storage = gr(this.memoryStorage))),
        L() &&
          globalThis.BroadcastChannel &&
          this.persistSession &&
          this.storageKey)
      ) {
        try {
          this.broadcastChannel = new globalThis.BroadcastChannel(
            this.storageKey
          );
        } catch (i) {
          console.error(
            "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
            i
          );
        }
        (r = this.broadcastChannel) === null ||
          r === void 0 ||
          r.addEventListener("message", async (i) => {
            this._debug(
              "received broadcast notification from other tab or client",
              i
            ),
              await this._notifyAllSubscribers(
                i.data.event,
                i.data.session,
                !1
              );
          });
      }
      this.initialize();
    }
    _debug(...e) {
      return (
        this.logDebugMessages &&
          this.logger(
            `GoTrueClient@${
              this.instanceID
            } (${ir}) ${new Date().toISOString()}`,
            ...e
          ),
        this
      );
    }
    async initialize() {
      return this.initializePromise
        ? await this.initializePromise
        : ((this.initializePromise = (async () =>
            await this._acquireLock(
              -1,
              async () => await this._initialize()
            ))()),
          await this.initializePromise);
    }
    async _initialize() {
      try {
        const e = L() ? await this._isPKCEFlow() : !1;
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", e),
          e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
        ) {
          const { data: t, error: r } = await this._getSessionFromURL(e);
          if (r)
            return (
              this._debug(
                "#_initialize()",
                "error detecting session from URL",
                r
              ),
              (r == null ? void 0 : r.code) === "identity_already_exists"
                ? { error: r }
                : (await this._removeSession(), { error: r })
            );
          const { session: n, redirectType: i } = t;
          return (
            this._debug(
              "#_initialize()",
              "detected session in URL",
              n,
              "redirect type",
              i
            ),
            await this._saveSession(n),
            setTimeout(async () => {
              i === "recovery"
                ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", n)
                : await this._notifyAllSubscribers("SIGNED_IN", n);
            }, 0),
            { error: null }
          );
        }
        return await this._recoverAndRefresh(), { error: null };
      } catch (e) {
        return y(e)
          ? { error: e }
          : { error: new ur("Unexpected error during initialization", e) };
      } finally {
        await this._handleVisibilityChange(),
          this._debug("#_initialize()", "end");
      }
    }
    async signInAnonymously(e) {
      var t, r, n;
      try {
        const i = await b(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              data:
                (r =
                  (t = e == null ? void 0 : e.options) === null || t === void 0
                    ? void 0
                    : t.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token:
                  (n = e == null ? void 0 : e.options) === null || n === void 0
                    ? void 0
                    : n.captchaToken,
              },
            },
            xform: F,
          }),
          { data: o, error: a } = i;
        if (a || !o) return { data: { user: null, session: null }, error: a };
        const c = o.session,
          l = o.user;
        return (
          o.session &&
            (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", c)),
          { data: { user: l, session: c }, error: null }
        );
      } catch (i) {
        if (y(i)) return { data: { user: null, session: null }, error: i };
        throw i;
      }
    }
    async signUp(e) {
      var t, r, n;
      try {
        let i;
        if ("email" in e) {
          const { email: h, password: u, options: d } = e;
          let f = null,
            p = null;
          this.flowType === "pkce" &&
            ([f, p] = await re(this.storage, this.storageKey)),
            (i = await b(this.fetch, "POST", `${this.url}/signup`, {
              headers: this.headers,
              redirectTo: d == null ? void 0 : d.emailRedirectTo,
              body: {
                email: h,
                password: u,
                data:
                  (t = d == null ? void 0 : d.data) !== null && t !== void 0
                    ? t
                    : {},
                gotrue_meta_security: {
                  captcha_token: d == null ? void 0 : d.captchaToken,
                },
                code_challenge: f,
                code_challenge_method: p,
              },
              xform: F,
            }));
        } else if ("phone" in e) {
          const { phone: h, password: u, options: d } = e;
          i = await b(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone: h,
              password: u,
              data:
                (r = d == null ? void 0 : d.data) !== null && r !== void 0
                  ? r
                  : {},
              channel:
                (n = d == null ? void 0 : d.channel) !== null && n !== void 0
                  ? n
                  : "sms",
              gotrue_meta_security: {
                captcha_token: d == null ? void 0 : d.captchaToken,
              },
            },
            xform: F,
          });
        } else
          throw new xe(
            "You must provide either an email or phone number and a password"
          );
        const { data: o, error: a } = i;
        if (a || !o) return { data: { user: null, session: null }, error: a };
        const c = o.session,
          l = o.user;
        return (
          o.session &&
            (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", c)),
          { data: { user: l, session: c }, error: null }
        );
      } catch (i) {
        if (y(i)) return { data: { user: null, session: null }, error: i };
        throw i;
      }
    }
    async signInWithPassword(e) {
      try {
        let t;
        if ("email" in e) {
          const { email: i, password: o, options: a } = e;
          t = await b(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                email: i,
                password: o,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: pr,
            }
          );
        } else if ("phone" in e) {
          const { phone: i, password: o, options: a } = e;
          t = await b(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                phone: i,
                password: o,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: pr,
            }
          );
        } else
          throw new xe(
            "You must provide either an email or phone number and a password"
          );
        const { data: r, error: n } = t;
        return n
          ? { data: { user: null, session: null }, error: n }
          : !r || !r.session || !r.user
          ? { data: { user: null, session: null }, error: new ht() }
          : (r.session &&
              (await this._saveSession(r.session),
              await this._notifyAllSubscribers("SIGNED_IN", r.session)),
            {
              data: Object.assign(
                { user: r.user, session: r.session },
                r.weak_password ? { weakPassword: r.weak_password } : null
              ),
              error: n,
            });
      } catch (t) {
        if (y(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    }
    async signInWithOAuth(e) {
      var t, r, n, i;
      return await this._handleProviderSignIn(e.provider, {
        redirectTo:
          (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
        scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
        queryParams:
          (n = e.options) === null || n === void 0 ? void 0 : n.queryParams,
        skipBrowserRedirect:
          (i = e.options) === null || i === void 0
            ? void 0
            : i.skipBrowserRedirect,
      });
    }
    async exchangeCodeForSession(e) {
      return (
        await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
      );
    }
    async _exchangeCodeForSession(e) {
      const t = await Ae(this.storage, `${this.storageKey}-code-verifier`),
        [r, n] = (t ?? "").split("/");
      try {
        const { data: i, error: o } = await b(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=pkce`,
          {
            headers: this.headers,
            body: { auth_code: e, code_verifier: r },
            xform: F,
          }
        );
        if ((await Ce(this.storage, `${this.storageKey}-code-verifier`), o))
          throw o;
        return !i || !i.session || !i.user
          ? {
              data: { user: null, session: null, redirectType: null },
              error: new ht(),
            }
          : (i.session &&
              (await this._saveSession(i.session),
              await this._notifyAllSubscribers("SIGNED_IN", i.session)),
            {
              data: Object.assign(Object.assign({}, i), {
                redirectType: n ?? null,
              }),
              error: o,
            });
      } catch (i) {
        if (y(i))
          return {
            data: { user: null, session: null, redirectType: null },
            error: i,
          };
        throw i;
      }
    }
    async signInWithIdToken(e) {
      try {
        const {
            options: t,
            provider: r,
            token: n,
            access_token: i,
            nonce: o,
          } = e,
          a = await b(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              body: {
                provider: r,
                id_token: n,
                access_token: i,
                nonce: o,
                gotrue_meta_security: {
                  captcha_token: t == null ? void 0 : t.captchaToken,
                },
              },
              xform: F,
            }
          ),
          { data: c, error: l } = a;
        return l
          ? { data: { user: null, session: null }, error: l }
          : !c || !c.session || !c.user
          ? { data: { user: null, session: null }, error: new ht() }
          : (c.session &&
              (await this._saveSession(c.session),
              await this._notifyAllSubscribers("SIGNED_IN", c.session)),
            { data: c, error: l });
      } catch (t) {
        if (y(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    }
    async signInWithOtp(e) {
      var t, r, n, i, o;
      try {
        if ("email" in e) {
          const { email: a, options: c } = e;
          let l = null,
            h = null;
          this.flowType === "pkce" &&
            ([l, h] = await re(this.storage, this.storageKey));
          const { error: u } = await b(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              email: a,
              data:
                (t = c == null ? void 0 : c.data) !== null && t !== void 0
                  ? t
                  : {},
              create_user:
                (r = c == null ? void 0 : c.shouldCreateUser) !== null &&
                r !== void 0
                  ? r
                  : !0,
              gotrue_meta_security: {
                captcha_token: c == null ? void 0 : c.captchaToken,
              },
              code_challenge: l,
              code_challenge_method: h,
            },
            redirectTo: c == null ? void 0 : c.emailRedirectTo,
          });
          return { data: { user: null, session: null }, error: u };
        }
        if ("phone" in e) {
          const { phone: a, options: c } = e,
            { data: l, error: h } = await b(
              this.fetch,
              "POST",
              `${this.url}/otp`,
              {
                headers: this.headers,
                body: {
                  phone: a,
                  data:
                    (n = c == null ? void 0 : c.data) !== null && n !== void 0
                      ? n
                      : {},
                  create_user:
                    (i = c == null ? void 0 : c.shouldCreateUser) !== null &&
                    i !== void 0
                      ? i
                      : !0,
                  gotrue_meta_security: {
                    captcha_token: c == null ? void 0 : c.captchaToken,
                  },
                  channel:
                    (o = c == null ? void 0 : c.channel) !== null &&
                    o !== void 0
                      ? o
                      : "sms",
                },
              }
            );
          return {
            data: {
              user: null,
              session: null,
              messageId: l == null ? void 0 : l.message_id,
            },
            error: h,
          };
        }
        throw new xe("You must provide either an email or phone number.");
      } catch (a) {
        if (y(a)) return { data: { user: null, session: null }, error: a };
        throw a;
      }
    }
    async verifyOtp(e) {
      var t, r;
      try {
        let n, i;
        "options" in e &&
          ((n =
            (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo),
          (i =
            (r = e.options) === null || r === void 0
              ? void 0
              : r.captchaToken));
        const { data: o, error: a } = await b(
          this.fetch,
          "POST",
          `${this.url}/verify`,
          {
            headers: this.headers,
            body: Object.assign(Object.assign({}, e), {
              gotrue_meta_security: { captcha_token: i },
            }),
            redirectTo: n,
            xform: F,
          }
        );
        if (a) throw a;
        if (!o) throw new Error("An error occurred on token verification.");
        const c = o.session,
          l = o.user;
        return (
          c != null &&
            c.access_token &&
            (await this._saveSession(c),
            await this._notifyAllSubscribers(
              e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
              c
            )),
          { data: { user: l, session: c }, error: null }
        );
      } catch (n) {
        if (y(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async signInWithSSO(e) {
      var t, r, n;
      try {
        let i = null,
          o = null;
        return (
          this.flowType === "pkce" &&
            ([i, o] = await re(this.storage, this.storageKey)),
          await b(this.fetch, "POST", `${this.url}/sso`, {
            body: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      {},
                      "providerId" in e ? { provider_id: e.providerId } : null
                    ),
                    "domain" in e ? { domain: e.domain } : null
                  ),
                  {
                    redirect_to:
                      (r =
                        (t = e.options) === null || t === void 0
                          ? void 0
                          : t.redirectTo) !== null && r !== void 0
                        ? r
                        : void 0,
                  }
                ),
                !(
                  (n = e == null ? void 0 : e.options) === null || n === void 0
                ) && n.captchaToken
                  ? {
                      gotrue_meta_security: {
                        captcha_token: e.options.captchaToken,
                      },
                    }
                  : null
              ),
              {
                skip_http_redirect: !0,
                code_challenge: i,
                code_challenge_method: o,
              }
            ),
            headers: this.headers,
            xform: Sn,
          })
        );
      } catch (i) {
        if (y(i)) return { data: null, error: i };
        throw i;
      }
    }
    async reauthenticate() {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
      );
    }
    async _reauthenticate() {
      try {
        return await this._useSession(async (e) => {
          const {
            data: { session: t },
            error: r,
          } = e;
          if (r) throw r;
          if (!t) throw new M();
          const { error: n } = await b(
            this.fetch,
            "GET",
            `${this.url}/reauthenticate`,
            { headers: this.headers, jwt: t.access_token }
          );
          return { data: { user: null, session: null }, error: n };
        });
      } catch (e) {
        if (y(e)) return { data: { user: null, session: null }, error: e };
        throw e;
      }
    }
    async resend(e) {
      try {
        const t = `${this.url}/resend`;
        if ("email" in e) {
          const { email: r, type: n, options: i } = e,
            { error: o } = await b(this.fetch, "POST", t, {
              headers: this.headers,
              body: {
                email: r,
                type: n,
                gotrue_meta_security: {
                  captcha_token: i == null ? void 0 : i.captchaToken,
                },
              },
              redirectTo: i == null ? void 0 : i.emailRedirectTo,
            });
          return { data: { user: null, session: null }, error: o };
        } else if ("phone" in e) {
          const { phone: r, type: n, options: i } = e,
            { data: o, error: a } = await b(this.fetch, "POST", t, {
              headers: this.headers,
              body: {
                phone: r,
                type: n,
                gotrue_meta_security: {
                  captcha_token: i == null ? void 0 : i.captchaToken,
                },
              },
            });
          return {
            data: {
              user: null,
              session: null,
              messageId: o == null ? void 0 : o.message_id,
            },
            error: a,
          };
        }
        throw new xe(
          "You must provide either an email or phone number and a type"
        );
      } catch (t) {
        if (y(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    }
    async getSession() {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () =>
          this._useSession(async (t) => t)
        )
      );
    }
    async _acquireLock(e, t) {
      this._debug("#_acquireLock", "begin", e);
      try {
        if (this.lockAcquired) {
          const r = this.pendingInLock.length
              ? this.pendingInLock[this.pendingInLock.length - 1]
              : Promise.resolve(),
            n = (async () => (await r, await t()))();
          return (
            this.pendingInLock.push(
              (async () => {
                try {
                  await n;
                } catch {}
              })()
            ),
            n
          );
        }
        return await this.lock(`lock:${this.storageKey}`, e, async () => {
          this._debug(
            "#_acquireLock",
            "lock acquired for storage key",
            this.storageKey
          );
          try {
            this.lockAcquired = !0;
            const r = t();
            for (
              this.pendingInLock.push(
                (async () => {
                  try {
                    await r;
                  } catch {}
                })()
              ),
                await r;
              this.pendingInLock.length;

            ) {
              const n = [...this.pendingInLock];
              await Promise.all(n), this.pendingInLock.splice(0, n.length);
            }
            return await r;
          } finally {
            this._debug(
              "#_acquireLock",
              "lock released for storage key",
              this.storageKey
            ),
              (this.lockAcquired = !1);
          }
        });
      } finally {
        this._debug("#_acquireLock", "end");
      }
    }
    async _useSession(e) {
      this._debug("#_useSession", "begin");
      try {
        const t = await this.__loadSession();
        return await e(t);
      } finally {
        this._debug("#_useSession", "end");
      }
    }
    async __loadSession() {
      this._debug("#__loadSession()", "begin"),
        this.lockAcquired ||
          this._debug(
            "#__loadSession()",
            "used outside of an acquired lock!",
            new Error().stack
          );
      try {
        let e = null;
        const t = await Ae(this.storage, this.storageKey);
        if (
          (this._debug("#getSession()", "session from storage", t),
          t !== null &&
            (this._isValidSession(t)
              ? (e = t)
              : (this._debug(
                  "#getSession()",
                  "session from storage is not valid"
                ),
                await this._removeSession())),
          !e)
        )
          return { data: { session: null }, error: null };
        const r = e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1;
        if (
          (this._debug(
            "#__loadSession()",
            `session has${r ? "" : " not"} expired`,
            "expires_at",
            e.expires_at
          ),
          !r)
        ) {
          if (this.storage.isServer) {
            let o = this.suppressGetSessionWarning;
            e = new Proxy(e, {
              get: (c, l, h) => (
                !o &&
                  l === "user" &&
                  (console.warn(
                    "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                  ),
                  (o = !0),
                  (this.suppressGetSessionWarning = !0)),
                Reflect.get(c, l, h)
              ),
            });
          }
          return { data: { session: e }, error: null };
        }
        const { session: n, error: i } = await this._callRefreshToken(
          e.refresh_token
        );
        return i
          ? { data: { session: null }, error: i }
          : { data: { session: n }, error: null };
      } finally {
        this._debug("#__loadSession()", "end");
      }
    }
    async getUser(e) {
      return e
        ? await this._getUser(e)
        : (await this.initializePromise,
          await this._acquireLock(-1, async () => await this._getUser()));
    }
    async _getUser(e) {
      try {
        return e
          ? await b(this.fetch, "GET", `${this.url}/user`, {
              headers: this.headers,
              jwt: e,
              xform: q,
            })
          : await this._useSession(async (t) => {
              var r, n, i;
              const { data: o, error: a } = t;
              if (a) throw a;
              return !(
                !((r = o.session) === null || r === void 0) && r.access_token
              ) && !this.hasCustomAuthorizationHeader
                ? { data: { user: null }, error: new M() }
                : await b(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt:
                      (i =
                        (n = o.session) === null || n === void 0
                          ? void 0
                          : n.access_token) !== null && i !== void 0
                        ? i
                        : void 0,
                    xform: q,
                  });
            });
      } catch (t) {
        if (y(t))
          return (
            yn(t) &&
              (await this._removeSession(),
              await Ce(this.storage, `${this.storageKey}-code-verifier`)),
            { data: { user: null }, error: t }
          );
        throw t;
      }
    }
    async updateUser(e, t = {}) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(e, t))
      );
    }
    async _updateUser(e, t = {}) {
      try {
        return await this._useSession(async (r) => {
          const { data: n, error: i } = r;
          if (i) throw i;
          if (!n.session) throw new M();
          const o = n.session;
          let a = null,
            c = null;
          this.flowType === "pkce" &&
            e.email != null &&
            ([a, c] = await re(this.storage, this.storageKey));
          const { data: l, error: h } = await b(
            this.fetch,
            "PUT",
            `${this.url}/user`,
            {
              headers: this.headers,
              redirectTo: t == null ? void 0 : t.emailRedirectTo,
              body: Object.assign(Object.assign({}, e), {
                code_challenge: a,
                code_challenge_method: c,
              }),
              jwt: o.access_token,
              xform: q,
            }
          );
          if (h) throw h;
          return (
            (o.user = l.user),
            await this._saveSession(o),
            await this._notifyAllSubscribers("USER_UPDATED", o),
            { data: { user: o.user }, error: null }
          );
        });
      } catch (r) {
        if (y(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    _decodeJWT(e) {
      return hr(e);
    }
    async setSession(e) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(e))
      );
    }
    async _setSession(e) {
      try {
        if (!e.access_token || !e.refresh_token) throw new M();
        const t = Date.now() / 1e3;
        let r = t,
          n = !0,
          i = null;
        const o = hr(e.access_token);
        if ((o.exp && ((r = o.exp), (n = r <= t)), n)) {
          const { session: a, error: c } = await this._callRefreshToken(
            e.refresh_token
          );
          if (c) return { data: { user: null, session: null }, error: c };
          if (!a) return { data: { user: null, session: null }, error: null };
          i = a;
        } else {
          const { data: a, error: c } = await this._getUser(e.access_token);
          if (c) throw c;
          (i = {
            access_token: e.access_token,
            refresh_token: e.refresh_token,
            user: a.user,
            token_type: "bearer",
            expires_in: r - t,
            expires_at: r,
          }),
            await this._saveSession(i),
            await this._notifyAllSubscribers("SIGNED_IN", i);
        }
        return { data: { user: i.user, session: i }, error: null };
      } catch (t) {
        if (y(t)) return { data: { session: null, user: null }, error: t };
        throw t;
      }
    }
    async refreshSession(e) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(e))
      );
    }
    async _refreshSession(e) {
      try {
        return await this._useSession(async (t) => {
          var r;
          if (!e) {
            const { data: o, error: a } = t;
            if (a) throw a;
            e = (r = o.session) !== null && r !== void 0 ? r : void 0;
          }
          if (!(e != null && e.refresh_token)) throw new M();
          const { session: n, error: i } = await this._callRefreshToken(
            e.refresh_token
          );
          return i
            ? { data: { user: null, session: null }, error: i }
            : n
            ? { data: { user: n.user, session: n }, error: null }
            : { data: { user: null, session: null }, error: null };
        });
      } catch (t) {
        if (y(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    }
    async _getSessionFromURL(e) {
      try {
        if (!L()) throw new Ie("No browser detected.");
        if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
          throw new Ie("Not a valid implicit grant flow url.");
        if (this.flowType == "pkce" && !e)
          throw new dr("Not a valid PKCE flow url.");
        const t = ct(window.location.href);
        if (e) {
          if (!t.code) throw new dr("No code detected.");
          const { data: w, error: O } = await this._exchangeCodeForSession(
            t.code
          );
          if (O) throw O;
          const P = new URL(window.location.href);
          return (
            P.searchParams.delete("code"),
            window.history.replaceState(window.history.state, "", P.toString()),
            { data: { session: w.session, redirectType: null }, error: null }
          );
        }
        if (t.error || t.error_description || t.error_code)
          throw new Ie(
            t.error_description ||
              "Error in URL with unspecified error_description",
            {
              error: t.error || "unspecified_error",
              code: t.error_code || "unspecified_code",
            }
          );
        const {
          provider_token: r,
          provider_refresh_token: n,
          access_token: i,
          refresh_token: o,
          expires_in: a,
          expires_at: c,
          token_type: l,
        } = t;
        if (!i || !a || !o || !l) throw new Ie("No session defined in URL");
        const h = Math.round(Date.now() / 1e3),
          u = parseInt(a);
        let d = h + u;
        c && (d = parseInt(c));
        const f = d - h;
        f * 1e3 <= _e &&
          console.warn(
            `@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`
          );
        const p = d - u;
        h - p >= 120
          ? console.warn(
              "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
              p,
              d,
              h
            )
          : h - p < 0 &&
            console.warn(
              "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
              p,
              d,
              h
            );
        const { data: m, error: g } = await this._getUser(i);
        if (g) throw g;
        const v = {
          provider_token: r,
          provider_refresh_token: n,
          access_token: i,
          expires_in: u,
          expires_at: d,
          refresh_token: o,
          token_type: l,
          user: m.user,
        };
        return (
          (window.location.hash = ""),
          this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
          { data: { session: v, redirectType: t.type }, error: null }
        );
      } catch (t) {
        if (y(t))
          return { data: { session: null, redirectType: null }, error: t };
        throw t;
      }
    }
    _isImplicitGrantFlow() {
      const e = ct(window.location.href);
      return !!(L() && (e.access_token || e.error_description));
    }
    async _isPKCEFlow() {
      const e = ct(window.location.href),
        t = await Ae(this.storage, `${this.storageKey}-code-verifier`);
      return !!(e.code && t);
    }
    async signOut(e = { scope: "global" }) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(e))
      );
    }
    async _signOut({ scope: e } = { scope: "global" }) {
      return await this._useSession(async (t) => {
        var r;
        const { data: n, error: i } = t;
        if (i) return { error: i };
        const o =
          (r = n.session) === null || r === void 0 ? void 0 : r.access_token;
        if (o) {
          const { error: a } = await this.admin.signOut(o, e);
          if (
            a &&
            !(
              vn(a) &&
              (a.status === 404 || a.status === 401 || a.status === 403)
            )
          )
            return { error: a };
        }
        return (
          e !== "others" &&
            (await this._removeSession(),
            await Ce(this.storage, `${this.storageKey}-code-verifier`)),
          { error: null }
        );
      });
    }
    onAuthStateChange(e) {
      const t = sn(),
        r = {
          id: t,
          callback: e,
          unsubscribe: () => {
            this._debug(
              "#unsubscribe()",
              "state change callback with id removed",
              t
            ),
              this.stateChangeEmitters.delete(t);
          },
        };
      return (
        this._debug("#onAuthStateChange()", "registered callback with id", t),
        this.stateChangeEmitters.set(t, r),
        (async () => (
          await this.initializePromise,
          await this._acquireLock(-1, async () => {
            this._emitInitialSession(t);
          })
        ))(),
        { data: { subscription: r } }
      );
    }
    async _emitInitialSession(e) {
      return await this._useSession(async (t) => {
        var r, n;
        try {
          const {
            data: { session: i },
            error: o,
          } = t;
          if (o) throw o;
          await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0
            ? void 0
            : r.callback("INITIAL_SESSION", i)),
            this._debug("INITIAL_SESSION", "callback id", e, "session", i);
        } catch (i) {
          await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0
            ? void 0
            : n.callback("INITIAL_SESSION", null)),
            this._debug("INITIAL_SESSION", "callback id", e, "error", i),
            console.error(i);
        }
      });
    }
    async resetPasswordForEmail(e, t = {}) {
      let r = null,
        n = null;
      this.flowType === "pkce" &&
        ([r, n] = await re(this.storage, this.storageKey, !0));
      try {
        return await b(this.fetch, "POST", `${this.url}/recover`, {
          body: {
            email: e,
            code_challenge: r,
            code_challenge_method: n,
            gotrue_meta_security: { captcha_token: t.captchaToken },
          },
          headers: this.headers,
          redirectTo: t.redirectTo,
        });
      } catch (i) {
        if (y(i)) return { data: null, error: i };
        throw i;
      }
    }
    async getUserIdentities() {
      var e;
      try {
        const { data: t, error: r } = await this.getUser();
        if (r) throw r;
        return {
          data: {
            identities:
              (e = t.user.identities) !== null && e !== void 0 ? e : [],
          },
          error: null,
        };
      } catch (t) {
        if (y(t)) return { data: null, error: t };
        throw t;
      }
    }
    async linkIdentity(e) {
      var t;
      try {
        const { data: r, error: n } = await this._useSession(async (i) => {
          var o, a, c, l, h;
          const { data: u, error: d } = i;
          if (d) throw d;
          const f = await this._getUrlForProvider(
            `${this.url}/user/identities/authorize`,
            e.provider,
            {
              redirectTo:
                (o = e.options) === null || o === void 0
                  ? void 0
                  : o.redirectTo,
              scopes:
                (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
              queryParams:
                (c = e.options) === null || c === void 0
                  ? void 0
                  : c.queryParams,
              skipBrowserRedirect: !0,
            }
          );
          return await b(this.fetch, "GET", f, {
            headers: this.headers,
            jwt:
              (h =
                (l = u.session) === null || l === void 0
                  ? void 0
                  : l.access_token) !== null && h !== void 0
                ? h
                : void 0,
          });
        });
        if (n) throw n;
        return (
          L() &&
            !(
              !((t = e.options) === null || t === void 0) &&
              t.skipBrowserRedirect
            ) &&
            window.location.assign(r == null ? void 0 : r.url),
          {
            data: { provider: e.provider, url: r == null ? void 0 : r.url },
            error: null,
          }
        );
      } catch (r) {
        if (y(r))
          return { data: { provider: e.provider, url: null }, error: r };
        throw r;
      }
    }
    async unlinkIdentity(e) {
      try {
        return await this._useSession(async (t) => {
          var r, n;
          const { data: i, error: o } = t;
          if (o) throw o;
          return await b(
            this.fetch,
            "DELETE",
            `${this.url}/user/identities/${e.identity_id}`,
            {
              headers: this.headers,
              jwt:
                (n =
                  (r = i.session) === null || r === void 0
                    ? void 0
                    : r.access_token) !== null && n !== void 0
                  ? n
                  : void 0,
            }
          );
        });
      } catch (t) {
        if (y(t)) return { data: null, error: t };
        throw t;
      }
    }
    async _refreshAccessToken(e) {
      const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
      this._debug(t, "begin");
      try {
        const r = Date.now();
        return await cn(
          async (n) => (
            n > 0 && (await an(200 * Math.pow(2, n - 1))),
            this._debug(t, "refreshing attempt", n),
            await b(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=refresh_token`,
              { body: { refresh_token: e }, headers: this.headers, xform: F }
            )
          ),
          (n, i) => {
            const o = 200 * Math.pow(2, n);
            return i && dt(i) && Date.now() + o - r < _e;
          }
        );
      } catch (r) {
        if ((this._debug(t, "error", r), y(r)))
          return { data: { session: null, user: null }, error: r };
        throw r;
      } finally {
        this._debug(t, "end");
      }
    }
    _isValidSession(e) {
      return (
        typeof e == "object" &&
        e !== null &&
        "access_token" in e &&
        "refresh_token" in e &&
        "expires_at" in e
      );
    }
    async _handleProviderSignIn(e, t) {
      const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
        redirectTo: t.redirectTo,
        scopes: t.scopes,
        queryParams: t.queryParams,
      });
      return (
        this._debug(
          "#_handleProviderSignIn()",
          "provider",
          e,
          "options",
          t,
          "url",
          r
        ),
        L() && !t.skipBrowserRedirect && window.location.assign(r),
        { data: { provider: e, url: r }, error: null }
      );
    }
    async _recoverAndRefresh() {
      var e;
      const t = "#_recoverAndRefresh()";
      this._debug(t, "begin");
      try {
        const r = await Ae(this.storage, this.storageKey);
        if (
          (this._debug(t, "session from storage", r), !this._isValidSession(r))
        ) {
          this._debug(t, "session is not valid"),
            r !== null && (await this._removeSession());
          return;
        }
        const n = Math.round(Date.now() / 1e3),
          i =
            ((e = r.expires_at) !== null && e !== void 0 ? e : 1 / 0) < n + or;
        if (
          (this._debug(
            t,
            `session has${i ? "" : " not"} expired with margin of ${or}s`
          ),
          i)
        ) {
          if (this.autoRefreshToken && r.refresh_token) {
            const { error: o } = await this._callRefreshToken(r.refresh_token);
            o &&
              (console.error(o),
              dt(o) ||
                (this._debug(
                  t,
                  "refresh failed with a non-retryable error, removing the session",
                  o
                ),
                await this._removeSession()));
          }
        } else await this._notifyAllSubscribers("SIGNED_IN", r);
      } catch (r) {
        this._debug(t, "error", r), console.error(r);
        return;
      } finally {
        this._debug(t, "end");
      }
    }
    async _callRefreshToken(e) {
      var t, r;
      if (!e) throw new M();
      if (this.refreshingDeferred) return this.refreshingDeferred.promise;
      const n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
      this._debug(n, "begin");
      try {
        this.refreshingDeferred = new Re();
        const { data: i, error: o } = await this._refreshAccessToken(e);
        if (o) throw o;
        if (!i.session) throw new M();
        await this._saveSession(i.session),
          await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
        const a = { session: i.session, error: null };
        return this.refreshingDeferred.resolve(a), a;
      } catch (i) {
        if ((this._debug(n, "error", i), y(i))) {
          const o = { session: null, error: i };
          return (
            dt(i) || (await this._removeSession()),
            (t = this.refreshingDeferred) === null ||
              t === void 0 ||
              t.resolve(o),
            o
          );
        }
        throw (
          ((r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.reject(i),
          i)
        );
      } finally {
        (this.refreshingDeferred = null), this._debug(n, "end");
      }
    }
    async _notifyAllSubscribers(e, t, r = !0) {
      const n = `#_notifyAllSubscribers(${e})`;
      this._debug(n, "begin", t, `broadcast = ${r}`);
      try {
        this.broadcastChannel &&
          r &&
          this.broadcastChannel.postMessage({ event: e, session: t });
        const i = [],
          o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
            try {
              await a.callback(e, t);
            } catch (c) {
              i.push(c);
            }
          });
        if ((await Promise.all(o), i.length > 0)) {
          for (let a = 0; a < i.length; a += 1) console.error(i[a]);
          throw i[0];
        }
      } finally {
        this._debug(n, "end");
      }
    }
    async _saveSession(e) {
      this._debug("#_saveSession()", e),
        (this.suppressGetSessionWarning = !0),
        await lr(this.storage, this.storageKey, e);
    }
    async _removeSession() {
      this._debug("#_removeSession()"),
        await Ce(this.storage, this.storageKey),
        await this._notifyAllSubscribers("SIGNED_OUT", null);
    }
    _removeVisibilityChangedCallback() {
      this._debug("#_removeVisibilityChangedCallback()");
      const e = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
        e &&
          L() &&
          window != null &&
          window.removeEventListener &&
          window.removeEventListener("visibilitychange", e);
      } catch (t) {
        console.error("removing visibilitychange callback failed", t);
      }
    }
    async _startAutoRefresh() {
      await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
      const e = setInterval(() => this._autoRefreshTokenTick(), _e);
      (this.autoRefreshTicker = e),
        e && typeof e == "object" && typeof e.unref == "function"
          ? e.unref()
          : typeof Deno < "u" &&
            typeof Deno.unrefTimer == "function" &&
            Deno.unrefTimer(e),
        setTimeout(async () => {
          await this.initializePromise, await this._autoRefreshTokenTick();
        }, 0);
    }
    async _stopAutoRefresh() {
      this._debug("#_stopAutoRefresh()");
      const e = this.autoRefreshTicker;
      (this.autoRefreshTicker = null), e && clearInterval(e);
    }
    async startAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
    }
    async stopAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
    }
    async _autoRefreshTokenTick() {
      this._debug("#_autoRefreshTokenTick()", "begin");
      try {
        await this._acquireLock(0, async () => {
          try {
            const e = Date.now();
            try {
              return await this._useSession(async (t) => {
                const {
                  data: { session: r },
                } = t;
                if (!r || !r.refresh_token || !r.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const n = Math.floor((r.expires_at * 1e3 - e) / _e);
                this._debug(
                  "#_autoRefreshTokenTick()",
                  `access token expires in ${n} ticks, a tick lasts ${_e}ms, refresh threshold is ${yr} ticks`
                ),
                  n <= yr && (await this._callRefreshToken(r.refresh_token));
              });
            } catch (t) {
              console.error(
                "Auto refresh tick failed with error. This is likely a transient error.",
                t
              );
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e.isAcquireTimeout || e instanceof vr)
          this._debug("auto refresh token tick lock not available");
        else throw e;
      }
    }
    async _handleVisibilityChange() {
      if (
        (this._debug("#_handleVisibilityChange()"),
        !L() || !(window != null && window.addEventListener))
      )
        return this.autoRefreshToken && this.startAutoRefresh(), !1;
      try {
        (this.visibilityChangedCallback = async () =>
          await this._onVisibilityChanged(!1)),
          window == null ||
            window.addEventListener(
              "visibilitychange",
              this.visibilityChangedCallback
            ),
          await this._onVisibilityChanged(!0);
      } catch (e) {
        console.error("_handleVisibilityChange", e);
      }
    }
    async _onVisibilityChanged(e) {
      const t = `#_onVisibilityChanged(${e})`;
      this._debug(t, "visibilityState", document.visibilityState),
        document.visibilityState === "visible"
          ? (this.autoRefreshToken && this._startAutoRefresh(),
            e ||
              (await this.initializePromise,
              await this._acquireLock(-1, async () => {
                if (document.visibilityState !== "visible") {
                  this._debug(
                    t,
                    "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                  );
                  return;
                }
                await this._recoverAndRefresh();
              })))
          : document.visibilityState === "hidden" &&
            this.autoRefreshToken &&
            this._stopAutoRefresh();
    }
    async _getUrlForProvider(e, t, r) {
      const n = [`provider=${encodeURIComponent(t)}`];
      if (
        (r != null &&
          r.redirectTo &&
          n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
        r != null &&
          r.scopes &&
          n.push(`scopes=${encodeURIComponent(r.scopes)}`),
        this.flowType === "pkce")
      ) {
        const [i, o] = await re(this.storage, this.storageKey),
          a = new URLSearchParams({
            code_challenge: `${encodeURIComponent(i)}`,
            code_challenge_method: `${encodeURIComponent(o)}`,
          });
        n.push(a.toString());
      }
      if (r != null && r.queryParams) {
        const i = new URLSearchParams(r.queryParams);
        n.push(i.toString());
      }
      return (
        r != null &&
          r.skipBrowserRedirect &&
          n.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
        `${e}?${n.join("&")}`
      );
    }
    async _unenroll(e) {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: n, error: i } = t;
          return i
            ? { data: null, error: i }
            : await b(
                this.fetch,
                "DELETE",
                `${this.url}/factors/${e.factorId}`,
                {
                  headers: this.headers,
                  jwt:
                    (r = n == null ? void 0 : n.session) === null ||
                    r === void 0
                      ? void 0
                      : r.access_token,
                }
              );
        });
      } catch (t) {
        if (y(t)) return { data: null, error: t };
        throw t;
      }
    }
    async _enroll(e) {
      try {
        return await this._useSession(async (t) => {
          var r, n;
          const { data: i, error: o } = t;
          if (o) return { data: null, error: o };
          const a = Object.assign(
              { friendly_name: e.friendlyName, factor_type: e.factorType },
              e.factorType === "phone"
                ? { phone: e.phone }
                : { issuer: e.issuer }
            ),
            { data: c, error: l } = await b(
              this.fetch,
              "POST",
              `${this.url}/factors`,
              {
                body: a,
                headers: this.headers,
                jwt:
                  (r = i == null ? void 0 : i.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              }
            );
          return l
            ? { data: null, error: l }
            : (e.factorType === "totp" &&
                !((n = c == null ? void 0 : c.totp) === null || n === void 0) &&
                n.qr_code &&
                (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`),
              { data: c, error: null });
        });
      } catch (t) {
        if (y(t)) return { data: null, error: t };
        throw t;
      }
    }
    async _verify(e) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (t) => {
            var r;
            const { data: n, error: i } = t;
            if (i) return { data: null, error: i };
            const { data: o, error: a } = await b(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: { code: e.code, challenge_id: e.challengeId },
                headers: this.headers,
                jwt:
                  (r = n == null ? void 0 : n.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              }
            );
            return a
              ? { data: null, error: a }
              : (await this._saveSession(
                  Object.assign(
                    { expires_at: Math.round(Date.now() / 1e3) + o.expires_in },
                    o
                  )
                ),
                await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
                { data: o, error: a });
          });
        } catch (t) {
          if (y(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    async _challenge(e) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (t) => {
            var r;
            const { data: n, error: i } = t;
            return i
              ? { data: null, error: i }
              : await b(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/challenge`,
                  {
                    body: { channel: e.channel },
                    headers: this.headers,
                    jwt:
                      (r = n == null ? void 0 : n.session) === null ||
                      r === void 0
                        ? void 0
                        : r.access_token,
                  }
                );
          });
        } catch (t) {
          if (y(t)) return { data: null, error: t };
          throw t;
        }
      });
    }
    async _challengeAndVerify(e) {
      const { data: t, error: r } = await this._challenge({
        factorId: e.factorId,
      });
      return r
        ? { data: null, error: r }
        : await this._verify({
            factorId: e.factorId,
            challengeId: t.id,
            code: e.code,
          });
    }
    async _listFactors() {
      const {
        data: { user: e },
        error: t,
      } = await this.getUser();
      if (t) return { data: null, error: t };
      const r = (e == null ? void 0 : e.factors) || [],
        n = r.filter(
          (o) => o.factor_type === "totp" && o.status === "verified"
        ),
        i = r.filter(
          (o) => o.factor_type === "phone" && o.status === "verified"
        );
      return { data: { all: r, totp: n, phone: i }, error: null };
    }
    async _getAuthenticatorAssuranceLevel() {
      return this._acquireLock(
        -1,
        async () =>
          await this._useSession(async (e) => {
            var t, r;
            const {
              data: { session: n },
              error: i,
            } = e;
            if (i) return { data: null, error: i };
            if (!n)
              return {
                data: {
                  currentLevel: null,
                  nextLevel: null,
                  currentAuthenticationMethods: [],
                },
                error: null,
              };
            const o = this._decodeJWT(n.access_token);
            let a = null;
            o.aal && (a = o.aal);
            let c = a;
            ((r =
              (t = n.user.factors) === null || t === void 0
                ? void 0
                : t.filter((u) => u.status === "verified")) !== null &&
            r !== void 0
              ? r
              : []
            ).length > 0 && (c = "aal2");
            const h = o.amr || [];
            return {
              data: {
                currentLevel: a,
                nextLevel: c,
                currentAuthenticationMethods: h,
              },
              error: null,
            };
          })
      );
    }
  }
  pe.nextInstanceID = 0;
  const In = pe;
  class Ln extends In {
    constructor(e) {
      super(e);
    }
  }
  var Un = function (s, e, t, r) {
    function n(i) {
      return i instanceof t
        ? i
        : new t(function (o) {
            o(i);
          });
    }
    return new (t || (t = Promise))(function (i, o) {
      function a(h) {
        try {
          l(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        try {
          l(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        h.done ? i(h.value) : n(h.value).then(a, c);
      }
      l((r = r.apply(s, e || [])).next());
    });
  };
  class Dn {
    constructor(e, t, r) {
      var n, i, o;
      if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
        throw new Error("supabaseUrl is required.");
      if (!t) throw new Error("supabaseKey is required.");
      const a = Ys(e);
      (this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws")),
        (this.authUrl = `${a}/auth/v1`),
        (this.storageUrl = `${a}/storage/v1`),
        (this.functionsUrl = `${a}/functions/v1`);
      const c = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
        l = {
          db: Hs,
          realtime: Js,
          auth: Object.assign(Object.assign({}, zs), { storageKey: c }),
          global: qs,
        },
        h = Xs(r ?? {}, l);
      (this.storageKey =
        (n = h.auth.storageKey) !== null && n !== void 0 ? n : ""),
        (this.headers =
          (i = h.global.headers) !== null && i !== void 0 ? i : {}),
        h.accessToken
          ? ((this.accessToken = h.accessToken),
            (this.auth = new Proxy(
              {},
              {
                get: (u, d) => {
                  throw new Error(
                    `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                      d
                    )} is not possible`
                  );
                },
              }
            )))
          : (this.auth = this._initSupabaseAuthClient(
              (o = h.auth) !== null && o !== void 0 ? o : {},
              this.headers,
              h.global.fetch
            )),
        (this.fetch = Vs(t, this._getAccessToken.bind(this), h.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          Object.assign({ headers: this.headers }, h.realtime)
        )),
        (this.rest = new fs(`${a}/rest/v1`, {
          headers: this.headers,
          schema: h.db.schema,
          fetch: this.fetch,
        })),
        h.accessToken || this._listenForAuthEvents();
    }
    get functions() {
      return new Fr(this.functionsUrl, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    get storage() {
      return new Ms(this.storageUrl, this.headers, this.fetch);
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, r = {}) {
      return this.rest.rpc(e, t, r);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
      var e, t;
      return Un(this, void 0, void 0, function* () {
        if (this.accessToken) return yield this.accessToken();
        const { data: r } = yield this.auth.getSession();
        return (t =
          (e = r.session) === null || e === void 0
            ? void 0
            : e.access_token) !== null && t !== void 0
          ? t
          : null;
      });
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: r,
        storage: n,
        storageKey: i,
        flowType: o,
        lock: a,
        debug: c,
      },
      l,
      h
    ) {
      var u;
      const d = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new Ln({
        url: this.authUrl,
        headers: Object.assign(Object.assign({}, d), l),
        storageKey: i,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: r,
        storage: n,
        flowType: o,
        lock: a,
        debug: c,
        fetch: h,
        hasCustomAuthorizationHeader:
          (u = "Authorization" in this.headers) !== null && u !== void 0
            ? u
            : !1,
      });
    }
    _initRealtimeClient(e) {
      return new $s(
        this.realtimeUrl,
        Object.assign(Object.assign({}, e), {
          params: Object.assign(
            { apikey: this.supabaseKey },
            e == null ? void 0 : e.params
          ),
        })
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((t, r) => {
        this._handleTokenChanged(
          t,
          "CLIENT",
          r == null ? void 0 : r.access_token
        );
      });
    }
    _handleTokenChanged(e, t, r) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
      this.changedAccessToken !== r
        ? (this.realtime.setAuth(r ?? null), (this.changedAccessToken = r))
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(this.supabaseKey),
          t == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  }
  const Nn = (s, e, t) => new Dn(s, e, t),
    Bn = (s) => {
      const e = /(https?:\/\/[^\s]+)/g;
      return s.match(e) || [];
    },
    Mn = (s) => {
      var n;
      const e = new URL(s),
        t = e.origin,
        r =
          (n = e.pathname
            .split("?")[0]
            .split("#")[0]
            .match(/\/products\/[^/?#]*/)) == null
            ? void 0
            : n[0];
      return r ? `${t}${r.replace(/\/+$/, "")}.js` : null;
    },
    Fn = Nn(
      "https://sqesugujbokqdacsgqxu.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZXN1Z3VqYm9rcWRhY3NncXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNzQzMjEsImV4cCI6MjA0NzY1MDMyMX0.NdG4HHj-12E1SPTYKQQ7onMsBM7vRzoFrH27T4CgsCc"
    ),
    qn = async (s, e) => {
      const { data: t, error: r } = await Fn.from("byob")
        .select("*")
        .eq("id", s)
        .eq("license", e);
      return t.length > 0 ? t[0].bundle : null;
    },
    Hn = async (s, e) => {
      for (let t = 0; t < s.length; t++) {
        const r = s[t],
          n = [],
          i = Bn(r.products);
        for (const o of i) {
          const a = await zn(o);
          a && n.push(a);
        }
        e((o) => {
          const a = [...o];
          return (a[t] = { ...a[t], name: r.name, products: n }), a;
        });
      }
    },
    zn = async (s) => {
      try {
        const e = Mn(s);
        return e ? await (await fetch(e)).json() : null;
      } catch {
        return null;
      }
    },
    ne = Ar();
  function Jn({ bundleID: s, licenseKey: e, children: t }) {
    const [r, n] = N(null),
      [i, o] = N([]),
      [a, c] = N([]);
    Ge(() => {
      (async () => {
        if (s && e) {
          const f = await qn(s, e);
          f && (n(f), Hn(f.categories, o));
        }
      })();
    }, []);
    const l = (d) => a.some((f) => f.id === d.id),
      h = (d) => {
        c([...a, d]);
      },
      u = (d) => {
        c(a.filter((f) => f.id !== d.id));
      };
    return _(ne.Provider, {
      value: {
        bundle: r,
        categories: i,
        basket: a,
        setBasket: c,
        addToBasket: h,
        removeFromBasket: u,
        isInBasket: l,
      },
      children: t,
    });
  }
  const br = (s) => Math.floor(s / 100),
    Wn = (s) => (s ? `$${s.toLocaleString()}` : ""),
    Kn = (s) => `$${s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  function Gn({ product: s }) {
    const { isInBasket: e } = ae(ne),
      [t, r] = N([]);
    return (
      Ge(() => {
        if (s.variants.length > 1) {
          const n = s.options.map((i) => i.values[0]);
          r(n);
        }
      }, []),
      _("div", {
        className: "convert-cat-byob-product-item",
        children: [
          _("img", { src: s.featured_image }),
          _("div", {
            className: "convert-cat-byob-product-item-info ",
            children: [
              _("div", {
                className: "convert-cat-byob-flow-content",
                children: [
                  _("p", {
                    className: "convert-cat-byob-product-item-title",
                    children: _("a", {
                      target: "_blank",
                      href: `/products/${s.handle}`,
                      children: _("strong", { children: s.title }),
                    }),
                  }),
                  _("p", {
                    className: "convert-cat-byob-product-item-price",
                    children: Wn(br(s.price)),
                  }),
                  !e(s) &&
                    _(Yn, {
                      product: s,
                      setSelectedVariant: r,
                      selectedVariant: t,
                    }),
                ],
              }),
              s.available
                ? _(Qn, {
                    setSelectedVariant: r,
                    selectedVariant: t,
                    product: s,
                  })
                : _(Vn, {}),
            ],
          }),
        ],
      })
    );
  }
  function Vn() {
    return _("button", {
      className:
        "convert-cat-byob-product-item-button convert-cat-byob-product-item-remove",
      children: "Sold Out",
    });
  }
  function Qn({ product: s, selectedVariant: e }) {
    const { addToBasket: t, removeFromBasket: r, isInBasket: n } = ae(ne),
      i = () => {
        var o;
        if (s.variants.length > 1) {
          const a =
            (o = s.variants.find((c) =>
              c.options.every((l, h) => l === e[h])
            )) == null
              ? void 0
              : o.id;
          a && t({ ...s, selectedVariantId: a });
        } else t({ ...s, selectedVariantId: s.variants[0].id });
      };
    return _(z, {
      children: n(s)
        ? _("button", {
            className:
              "convert-cat-byob-product-item-button convert-cat-byob-product-item-remove",
            onClick: () => r(s),
            children: "Remove",
          })
        : _("button", {
            className:
              "convert-cat-byob-product-item-button convert-cat-byob-product-item-add",
            onClick: i,
            children: "Add",
          }),
    });
  }
  function Yn({ product: s, setSelectedVariant: e, selectedVariant: t }) {
    if (s.variants.length === 1) return null;
    const r = (n, i) => {
      const o = [...t];
      (o[i] = n.target.value), e(o);
    };
    return _("div", {
      className: "convert-cat-byob-flow-content",
      children: s.options.map((n, i) =>
        _("div", {
          className: "convert-cat-select convert-cat-byob-flow-content--mini",
          children: [
            _("p", {
              className: "convert-cat-byob-select-label",
              children: n.name,
            }),
            _("select", {
              className: "convert-cat-byob-select",
              onChange: (o) => r(o, i),
              value: t[i],
              children: n.values.map((o) =>
                _("option", { value: o, children: o })
              ),
            }),
          ],
        })
      ),
    });
  }
  function Xn({ categories: s }) {
    return s.length === 0
      ? _("p", { children: "Loading..." })
      : _("div", {
          className: "convert-cat-byob-categories",
          children: s.map((e, t) =>
            _(
              "div",
              {
                children: [
                  _("p", {
                    className: "convert-cat-byob-category-name",
                    children: e.name,
                  }),
                  _("div", {
                    className: "convert-cat-byob-category",
                    children: e.products.map((r) => _(Gn, { product: r })),
                  }),
                ],
              },
              t
            )
          ),
        });
  }
  const Zn = async (s) => {
    const e = [];
    for (const t of s) e.push({ id: t.selectedVariantId, quantity: 1 });
    try {
      const r = await (
        await fetch(window.Shopify.routes.root + "cart/add.js", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: e }),
        })
      ).json();
      return !0;
    } catch (t) {
      return console.error("Error:", t), !1;
    }
  };
  function ei() {
    const { basket: s } = ae(ne),
      [e, t] = N(!1);
    return _("div", {
      children: _("button", {
        onClick: async () => {
          t(!0),
            s.length > 0
              ? (await Zn(s))
                ? (window.location.href = window.location.origin + "/cart")
                : (alert("There was an error adding to cart"), t(!1))
              : (t(!1), alert("Please select products to add to cart"));
        },
        className: "convert-cat-byob-checkout-button",
        children: e ? "ADDING..." : "CHECKOUT",
      }),
    });
  }
  function ti({ rule: s, basket: e }) {
    const [t, r] = N(0),
      [n, i] = N(s.price);
    return (
      Ge(() => {
        (() => {
          if (!e.length || e.length === 0) {
            r(5);
            return;
          }
          const a = e.reduce((l, h) => l + br(h.price), 0),
            c = Math.min((a / s.price) * 100, 100);
          r(c), i(s.price - a);
        })();
      }, [e]),
      _("div", {
        className: "convert-cat-byob-discount-progress-container",
        children: [
          _("p", {
            className: "convert-cat-byob-discount-progress-title",
            children: "Build Your Overlanding Rig",
          }),
          _("div", {
            className: "convert-cat-byob-discount-progress-content",
            children:
              t >= 100
                ? _("div", {
                    className:
                      "convert-cat-byob-discount-progress-content-unlocked",
                    children: [
                      _("p", {
                        className: "convert-cat-byob-discount-code",
                        children: s.discountCode,
                      }),
                      _("p", {
                        children: "🎉 Congrats! Use this at checkout.",
                      }),
                    ],
                  })
                : _("div", {
                    children: [
                      _("p", {
                        className:
                          "convert-cat-byob-discount-progress-subtitle",
                        children: "UNLOCK DISCOUNT",
                      }),
                      _("div", {
                        className: "convert-cat-byob-discount-progress-bar",
                        children: _("div", { style: { width: `${t}%` } }),
                      }),
                      _("p", {
                        className: "convert-cat-byob-discount-progress-text",
                        children: [
                          _("strong", {
                            className: "convert-cat-byob-price-color",
                            children: Kn(n),
                          }),
                          " ",
                          "away from unlocking secret discount.",
                        ],
                      }),
                    ],
                  }),
          }),
          _(ei, {}),
        ],
      })
    );
  }
  function ri() {
    return _("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: _("path", {
        d: "M18 6L6 18M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    });
  }
  function si() {
    return _("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: _("path", {
        d: "M18 15L12 9L6 15",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    });
  }
  function ni() {
    return _("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: _("path", {
        d: "M6 9L12 15L18 9",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    });
  }
  function ii({ title: s, children: e }) {
    const [t, r] = N(!1);
    return _("div", {
      className: "convert-cat-byob-accordion",
      children: [
        _("button", {
          className: "convert-cat-byob-accordion-button",
          onClick: () => r(!t),
          children: [
            _("strong", { children: s }),
            _("span", {
              className: "convert-cat-byob-accordion-icon ",
              children: t ? _(si, {}) : _(ni, {}),
            }),
          ],
        }),
        t &&
          _("div", {
            className: "convert-cat-byob-accordion-content",
            children: e,
          }),
      ],
    });
  }
  function oi({ basket: s }) {
    const { removeFromBasket: e } = ae(ne),
      t = (r) => {
        const n = r.selectedVariantId,
          i = r.variants.find((o) => o.id === n);
        return i ? i.options.join(" / ") : "";
      };
    return _("div", {
      className: "convert-cat-byob-basket",
      children: _(ii, {
        title: `Your Items (${s.length})`,
        children: _("div", {
          className: "convert-cat-byob-basket-items",
          children: s.map((r) =>
            _("div", {
              className: "convert-cat-byob-basket-item",
              children: [
                _("div", {
                  className: "convert-cat-byob-basket-item-image-text",
                  children: [
                    _("img", { src: r.featured_image, alt: r.title }),
                    _("div", {
                      className: "convert-cat-byob-basket-item-info",
                      children: [
                        _("p", {
                          className: "convert-cat-byob-basket-item-title",
                          children: _("strong", { children: r.title }),
                        }),
                        r.variants.length > 1 &&
                          _("p", {
                            className: "convert-cat-byob-basket-item-variant",
                            children: t(r),
                          }),
                      ],
                    }),
                  ],
                }),
                _("div", {
                  className: "convert-cat-byob-close-icon",
                  onClick: () => e(r),
                  children: _(ri, {}),
                }),
              ],
            })
          ),
        }),
      }),
    });
  }
  function ai() {
    var r;
    const { bundle: s, categories: e, basket: t } = ae(ne);
    return s
      ? _(z, {
          children: [
            _("style", {
              children: `:root {
          --convert-cat-byob-button-color: ${
            (r = s.info) != null && r.buttonColor ? s.info.buttonColor : "#000"
          };
        }`,
            }),
            _("div", {
              className: "convert-cat-byob-container",
              children: [
                _("div", {
                  style: { flexBasis: "70%" },
                  children: _(Xn, { categories: e }),
                }),
                _("div", {
                  className: "convert-cat-byob-right-container",
                  style: { flexBasis: "30%" },
                  children: [
                    _(ti, { rule: s.discountRule, basket: t }),
                    _(oi, { basket: t }),
                  ],
                }),
              ],
            }),
          ],
        })
      : _("div", { children: "Loading..." });
  }
  const ci = "convert-cat-byob";
  async function li() {
    const s = document.getElementById(ci);
    if (s) {
      const e = s.getAttribute("data-cc-byob-id"),
        t = s.getAttribute("data-cc-byob-license");
      jr(_(Jn, { bundleID: e, licenseKey: t, children: _(ai, {}) }), s);
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    li();
  });
  var hi = function () {
    throw new Error(
      "ws does not work in the browser. Browser clients must use the native WebSocket object"
    );
  };
  const ui = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: qr(hi) },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
})();
