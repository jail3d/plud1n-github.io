/* @ds-bundle: {"format":3,"namespace":"Pelud1nDesignSystem_5024cb","components":[{"name":"CornerFrame","sourcePath":"components/brand/CornerFrame.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Prompt","sourcePath":"components/brand/Prompt.jsx"},{"name":"Terminal","sourcePath":"components/brand/Terminal.jsx"},{"name":"GlitchText","sourcePath":"components/chrome/GlitchText.jsx"},{"name":"Window","sourcePath":"components/chrome/Window.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/CornerFrame.jsx":"faa040f0a321","components/brand/Logo.jsx":"f197e944dbee","components/brand/Prompt.jsx":"b3078524cec4","components/brand/Terminal.jsx":"3d38d09ff313","components/chrome/GlitchText.jsx":"e3b4bd4e8a04","components/chrome/Window.jsx":"13661462714e","components/core/Badge.jsx":"a144884adbde","components/core/Button.jsx":"7ff9eda91652","components/core/Card.jsx":"522df214bea6","components/core/Input.jsx":"3b2ab7fa749a","components/navigation/Header.jsx":"da8bb42c01cc","components/navigation/Tabs.jsx":"472d91d32e6b","stream/animations.jsx":"a8d2a696abaa","stream/kit-scale.js":"327e071bee6b","ui_kits/portfolio/Arsenal.jsx":"516d67fc6fe1","ui_kits/portfolio/Contact.jsx":"25fb2a65eb02","ui_kits/portfolio/Engagements.jsx":"8c51b60f3b13","ui_kits/portfolio/Footer.jsx":"0ea0a41f6467","ui_kits/portfolio/Hero.jsx":"12628c332756","ui_kits/portfolio/StatsStrip.jsx":"5b8b6c7ce20b","ui_kits/portfolio/Writeups.jsx":"57ec84625d58"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Pelud1nDesignSystem_5024cb = window.Pelud1nDesignSystem_5024cb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/CornerFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — CornerFrame
   Standalone HUD bracket frame. Wrap imagery, stats, or any block to give it
   the targeting-reticle look. Transparent by default; optional hairline. */

const CSS = `
.pl-frame{position:relative;display:block;color:var(--blood-line);}
.pl-frame--bordered{border:1px solid var(--color-border-strong);border-radius:0;}
.pl-frame--mint{color:var(--blood-line);}
.pl-frame--violet{color:var(--bruise-line);}
.pl-frame--red{color:var(--blood-line);}
.pl-frame--neutral{color:var(--bone-300);}
.pl-frame__t{position:absolute;width:var(--tick-size);height:var(--tick-size);pointer-events:none;}
.pl-frame__t--tl{top:0;left:0;border-top:2px solid currentColor;border-left:2px solid currentColor;}
.pl-frame__t--tr{top:0;right:0;border-top:2px solid currentColor;border-right:2px solid currentColor;}
.pl-frame__t--bl{bottom:0;left:0;border-bottom:2px solid currentColor;border-left:2px solid currentColor;}
.pl-frame__t--br{bottom:0;right:0;border-bottom:2px solid currentColor;border-right:2px solid currentColor;}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-frame-css')) {
  const s = document.createElement('style');
  s.id = 'pl-frame-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function CornerFrame({
  children,
  color = 'mint',
  bordered = false,
  as = 'div',
  className = '',
  style,
  ...rest
}) {
  const Tag = as;
  const cls = ['pl-frame', `pl-frame--${color}`, bordered && 'pl-frame--bordered', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pl-frame__t pl-frame__t--tl",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-frame__t pl-frame__t--tr",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-frame__t pl-frame__t--bl",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-frame__t pl-frame__t--br",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { CornerFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CornerFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Logo
   The wordmark: "pelud" + red "1" + "n" + mint block cursor.
   Variants: wordmark (default), prompt (root@pelud1n:~#), mark (compact tile). */

const CSS = `
.pl-logo{font-family:var(--font-pixel);font-weight:var(--weight-bold);
  letter-spacing:var(--tracking-normal);color:var(--color-text);line-height:1;
  white-space:nowrap;display:inline-block;}
.pl-logo__one{color:var(--blood);}
.pl-logo__cursor{display:inline-block;width:.55em;height:.84em;background:var(--bone-pure);
  margin-left:.12em;transform:translateY(.04em);}
.pl-logo--blink .pl-logo__cursor{animation:peludin-blink 1.05s steps(1) infinite;}
.pl-logo__dim{color:var(--color-text-secondary);}
.pl-logo__host{color:var(--blood);}

.pl-logo--sm{font-size:15px;}
.pl-logo--md{font-size:21px;}
.pl-logo--lg{font-size:32px;}
.pl-logo--xl{font-size:52px;}

.pl-logo--mark{display:inline-flex;align-items:center;justify-content:center;
  background:var(--color-bg-elevated);border:1px solid var(--blood-line);
  border-radius:0;padding:.3em .42em;font-size:18px;
  box-shadow:var(--shadow-pixel-sm);}
.pl-logo--mark .pl-logo__cursor{height:.8em;margin-left:.08em;}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-logo-css')) {
  const s = document.createElement('style');
  s.id = 'pl-logo-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Logo({
  variant = 'wordmark',
  size = 'md',
  blink = false,
  cursor = true,
  as = 'span',
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = ['pl-logo', `pl-logo--${size}`, variant === 'mark' && 'pl-logo--mark', blink && 'pl-logo--blink', className].filter(Boolean).join(' ');
  const cur = cursor ? /*#__PURE__*/React.createElement("span", {
    className: "pl-logo__cursor",
    "aria-hidden": "true"
  }) : null;
  let body;
  if (variant === 'mark') {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, "p", /*#__PURE__*/React.createElement("span", {
      className: "pl-logo__one"
    }, "1"), cur);
  } else if (variant === 'prompt') {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "pl-logo__host"
    }, "root"), /*#__PURE__*/React.createElement("span", {
      className: "pl-logo__dim"
    }, "@"), "pelud", /*#__PURE__*/React.createElement("span", {
      className: "pl-logo__one"
    }, "1"), "n", /*#__PURE__*/React.createElement("span", {
      className: "pl-logo__dim"
    }, ":~#"), "\xA0", cur);
  } else {
    body = /*#__PURE__*/React.createElement(React.Fragment, null, "pelud", /*#__PURE__*/React.createElement("span", {
      className: "pl-logo__one"
    }, "1"), "n", cur);
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    role: "img",
    "aria-label": "pelud1n"
  }, rest), body);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Prompt.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Prompt
   A single terminal prompt line: user@host:path# command [block cursor].
   Defaults to root@pelud1n:~#. Use inside Terminal or inline in copy. */

const CSS = `
.pl-prompt{font-family:var(--font-mono);font-size:var(--text-body-sm);
  line-height:var(--leading-snug);display:inline-flex;flex-wrap:wrap;align-items:baseline;gap:.45ch;
  color:var(--color-text);}
.pl-prompt__user{color:var(--blood);font-weight:var(--weight-bold);}
.pl-prompt__host{color:var(--bone-050);font-weight:var(--weight-bold);}
.pl-prompt__muted{color:var(--color-text-secondary);}
.pl-prompt__sym{color:var(--blood);font-weight:var(--weight-bold);}
.pl-prompt__cmd{color:var(--color-text);}
.pl-prompt__cursor{display:inline-block;width:.5em;height:1.05em;background:var(--bone-pure);
  transform:translateY(.16em);}
.pl-prompt--blink .pl-prompt__cursor{animation:peludin-blink 1.05s steps(1) infinite;}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-prompt-css')) {
  const s = document.createElement('style');
  s.id = 'pl-prompt-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Prompt({
  user = 'root',
  host = 'pelud1n',
  path = '~',
  symbol = '#',
  cursor = false,
  blink = false,
  children,
  className = '',
  ...rest
}) {
  const cls = ['pl-prompt', blink && 'pl-prompt--blink', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pl-prompt__user"
  }, user), /*#__PURE__*/React.createElement("span", {
    className: "pl-prompt__muted"
  }, "@"), /*#__PURE__*/React.createElement("span", {
    className: "pl-prompt__host"
  }, host), /*#__PURE__*/React.createElement("span", {
    className: "pl-prompt__muted"
  }, ":", path), /*#__PURE__*/React.createElement("span", {
    className: "pl-prompt__sym"
  }, symbol), children != null && /*#__PURE__*/React.createElement("span", {
    className: "pl-prompt__cmd"
  }, children), cursor && /*#__PURE__*/React.createElement("span", {
    className: "pl-prompt__cursor",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Prompt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Prompt.jsx", error: String((e && e.message) || e) }); }

// components/brand/Terminal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Terminal
   Console window chrome: title bar (muted dots + label + optional status)
   over a dark, faint-grid body. Compose Prompt lines / output inside. */

const CSS = `
.pl-term{background:var(--color-bg-elevated);border:1px solid var(--bone-300);
  border-radius:0;overflow:hidden;box-shadow:var(--shadow-pixel);
  font-family:var(--font-mono);}
.pl-term__bar{display:flex;align-items:center;gap:10px;padding:6px 12px;
  background:var(--color-surface);border-bottom:1px solid var(--bone-300);}
.pl-term__dots{display:flex;gap:5px;}
.pl-term__dot{width:9px;height:9px;border-radius:0;background:var(--ink-600);}
.pl-term__dot:first-child{background:var(--blood);}
.pl-term__title{font-family:var(--font-pixel);font-size:11px;letter-spacing:.04em;text-transform:uppercase;
  color:var(--bone-200);}
.pl-term__status{margin-left:auto;display:inline-flex;align-items:center;gap:6px;
  font-family:var(--font-pixel);font-size:9px;letter-spacing:var(--tracking-wider);text-transform:uppercase;
  color:var(--blood-bright);}
.pl-term__status::before{content:"";width:7px;height:7px;border-radius:0;
  background:var(--blood);animation:peludin-blink 1.1s steps(1) infinite;}
.pl-term__body{position:relative;padding:16px;display:flex;flex-direction:column;gap:7px;
  font-size:var(--text-body-sm);line-height:var(--leading-snug);color:var(--color-text);
  background-image:var(--grid-image);background-size:var(--grid-size) var(--grid-size);}
.pl-term__body::after{content:"";position:absolute;inset:0;pointer-events:none;
  background:var(--scanlines-soft);mix-blend-mode:multiply;}
.pl-term__body--plain{background-image:none;}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-term-css')) {
  const s = document.createElement('style');
  s.id = 'pl-term-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Terminal({
  title = 'root@pelud1n: ~',
  status,
  grid = true,
  children,
  className = '',
  ...rest
}) {
  const cls = ['pl-term', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "pl-term__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pl-term__dots",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pl-term__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-term__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-term__dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pl-term__title"
  }, title), status && /*#__PURE__*/React.createElement("span", {
    className: "pl-term__status"
  }, status)), /*#__PURE__*/React.createElement("div", {
    className: `pl-term__body${grid ? '' : ' pl-term__body--plain'}`
  }, children));
}
Object.assign(__ds_scope, { Terminal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Terminal.jsx", error: String((e && e.message) || e) }); }

// components/chrome/GlitchText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — GlitchText
   Channel-split glitch headline (blood + toxic offset copies behind the
   bone face). Pixel/condensed display type. Optional live animation. */

const CSS = `
.pl-glitch{position:relative;display:inline-block;font-family:var(--font-display);
  font-weight:var(--weight-black);font-style:italic;text-transform:uppercase;
  color:var(--color-text);line-height:.92;letter-spacing:var(--tracking-tight);}
.pl-glitch::before,.pl-glitch::after{content:attr(data-text);position:absolute;left:0;top:0;width:100%;
  pointer-events:none;}
.pl-glitch::before{color:var(--blood);transform:translate(-3px,0);clip-path:inset(0 0 52% 0);opacity:.92;}
.pl-glitch::after{color:var(--toxic);transform:translate(3px,0);clip-path:inset(52% 0 0 0);opacity:.92;}
.pl-glitch--live::before{animation:pl-glitch 2.2s steps(3,end) infinite;}
.pl-glitch--live::after{animation:pl-glitch 2.2s steps(3,end) infinite reverse;}
.pl-glitch--steady{font-style:normal;}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-glitch-css')) {
  const s = document.createElement('style');
  s.id = 'pl-glitch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function GlitchText({
  children,
  live = false,
  italic = true,
  as = 'span',
  className = '',
  ...rest
}) {
  const Tag = as;
  const ref = React.useRef(null);
  const initial = typeof children === 'string' ? children : '';
  const [text, setText] = React.useState(initial);
  React.useLayoutEffect(() => {
    if (ref.current && ref.current.textContent != null) setText(ref.current.textContent);
  }, [children]);
  const cls = ['pl-glitch', live && 'pl-glitch--live', !italic && 'pl-glitch--steady', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: cls,
    "data-text": text
  }, rest), children);
}
Object.assign(__ds_scope, { GlitchText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/GlitchText.jsx", error: String((e && e.message) || e) }); }

// components/chrome/Window.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Window
   Retro Win9x-style dialog chrome: pixel title bar (blood, or inert),
   close box, body with optional info icon, and a footer action row.
   The signature "takeover" container of the brand. */

const CSS = `
.pl-win{display:inline-block;background:var(--color-surface);border:1px solid var(--bone-200);
  border-radius:0;box-shadow:var(--shadow-pixel);min-width:280px;color:var(--color-text);}
.pl-win--block{display:block;width:100%;}
.pl-win__bar{display:flex;align-items:center;justify-content:space-between;gap:10px;
  padding:4px 5px 4px 9px;background:var(--blood);color:var(--bone-pure);user-select:none;}
.pl-win__bar--inert{background:var(--ink-700);color:var(--bone-200);}
.pl-win__title{font-family:var(--font-pixel);font-size:11px;text-transform:uppercase;letter-spacing:.04em;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.pl-win__x{width:17px;height:15px;flex:0 0 auto;display:grid;place-items:center;background:var(--ink-850);
  border:1px solid var(--bone-300);color:var(--bone-050);font-family:var(--font-pixel);font-size:9px;
  cursor:pointer;line-height:1;}
.pl-win__x:hover{background:var(--blood-deep);color:var(--bone-pure);}
.pl-win__body{padding:18px;font-family:var(--font-sans);font-size:var(--text-body);color:var(--color-text);
  display:flex;gap:15px;align-items:flex-start;line-height:var(--leading-snug);}
.pl-win__icon{flex:0 0 auto;width:36px;height:36px;border-radius:50%;border:2px solid var(--bone-200);
  display:grid;place-items:center;font-family:var(--font-pixel);font-size:17px;color:var(--bone-050);}
.pl-win__foot{display:flex;justify-content:flex-end;gap:8px;padding:11px 14px;
  border-top:1px solid var(--color-border);background:var(--color-bg-elevated);}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-win-css')) {
  const s = document.createElement('style');
  s.id = 'pl-win-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Window({
  title = 'PELUD1N.EXE',
  children,
  actions,
  icon,
  inert = false,
  onClose,
  block = false,
  className = '',
  ...rest
}) {
  const cls = ['pl-win', block && 'pl-win--block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: `pl-win__bar${inert ? ' pl-win__bar--inert' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "pl-win__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "pl-win__x",
    role: "button",
    "aria-label": "close",
    onClick: onClose
  }, "X")), /*#__PURE__*/React.createElement("div", {
    className: "pl-win__body"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "pl-win__icon",
    "aria-hidden": "true"
  }, icon === true ? 'i' : icon), /*#__PURE__*/React.createElement("div", null, children)), actions && /*#__PURE__*/React.createElement("div", {
    className: "pl-win__foot"
  }, actions));
}
Object.assign(__ds_scope, { Window });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/Window.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Badge
   Mono, uppercase, micro tracking. Soft tint + colored text + hairline.
   Tones: neutral, mint, violet, red, plus severity (critical→info).
   Optional leading status dot with a tiny matching glow. */

const CSS = `
.pl-badge{
  display:inline-flex;align-items:center;gap:6px;
  font-family:var(--font-pixel);font-weight:var(--weight-regular);
  font-size:var(--text-pixel-xs);line-height:1;letter-spacing:0.02em;
  text-transform:uppercase;white-space:nowrap;
  padding:5px 8px;border-radius:0;border:1px solid transparent;
}
.pl-badge--pill{border-radius:var(--radius-pill);padding:5px 10px;}
.pl-badge__dot{width:7px;height:7px;border-radius:0;background:currentColor;flex:0 0 auto;}

.pl-badge--neutral{background:var(--ink-800);color:var(--bone-200);border-color:var(--color-border-strong);}
.pl-badge--mint{background:var(--blood-soft);color:var(--blood-bright);border-color:var(--blood-line);}
.pl-badge--violet{background:var(--bruise-soft);color:#9A88B0;border-color:var(--bruise-line);}
.pl-badge--red{background:var(--blood-soft);color:var(--blood-bright);border-color:var(--blood-line);}

.pl-badge--critical{background:var(--sev-critical-soft);color:var(--sev-critical);border-color:var(--blood-line);}
.pl-badge--high{background:var(--sev-high-soft);color:var(--sev-high);border-color:rgba(181,83,42,.5);}
.pl-badge--medium{background:var(--sev-medium-soft);color:var(--sev-medium);border-color:rgba(196,154,60,.5);}
.pl-badge--low{background:var(--sev-low-soft);color:var(--sev-low);border-color:var(--toxic-line);}
.pl-badge--info{background:var(--sev-info-soft);color:#9A88B0;border-color:var(--bruise-line);}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-badge-css')) {
  const s = document.createElement('style');
  s.id = 'pl-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  pill = false,
  className = '',
  ...rest
}) {
  const cls = ['pl-badge', `pl-badge--${tone}`, pill && 'pl-badge--pill', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "pl-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Button
   Mint primary, violet secondary, hairline ghost, outlined danger.
   Sharp corners, discreet neon glow on hover. Optional mono glyph slot. */

const CSS = `
.pl-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--font-pixel);font-weight:var(--weight-regular);
  font-size:var(--text-pixel-sm);line-height:1;letter-spacing:0.04em;text-transform:uppercase;
  height:var(--control-md);padding:0 18px;
  border:1px solid transparent;border-radius:0;
  background:transparent;color:var(--color-text);
  cursor:pointer;white-space:nowrap;text-decoration:none;-webkit-appearance:none;
  transition:background var(--duration-fast) var(--ease-out),
             border-color var(--duration-fast) var(--ease-out),
             box-shadow var(--duration-fast) var(--ease-out),
             color var(--duration-fast) var(--ease-out),
             transform var(--duration-fast) var(--ease-out);
}
.pl-btn:focus-visible{outline:none;box-shadow:var(--focus-ring);}
.pl-btn[disabled],.pl-btn[aria-disabled="true"]{opacity:.42;cursor:not-allowed;pointer-events:none;box-shadow:none;}
.pl-btn__glyph{font-family:var(--font-mono);font-weight:var(--weight-bold);opacity:.9;}

.pl-btn--sm{height:var(--control-sm);padding:0 12px;font-size:var(--text-pixel-xs);}
.pl-btn--lg{height:var(--control-lg);padding:0 24px;font-size:var(--text-pixel-md);}
.pl-btn--block{display:flex;width:100%;}

.pl-btn--primary{background:var(--blood);color:var(--bone-pure);box-shadow:var(--shadow-pixel-sm);}
.pl-btn--primary:hover{background:var(--blood-bright);transform:translate(-1px,-1px);box-shadow:3px 3px 0 0 #000;}
.pl-btn--primary:active{background:var(--blood-deep);transform:translate(2px,2px);box-shadow:none;}

.pl-btn--secondary{background:var(--bone-050);color:var(--color-text-on-bone);box-shadow:var(--shadow-pixel-sm);}
.pl-btn--secondary:hover{background:var(--bone-pure);transform:translate(-1px,-1px);box-shadow:3px 3px 0 0 #000;}
.pl-btn--secondary:active{transform:translate(2px,2px);box-shadow:none;}

.pl-btn--ghost{background:transparent;color:var(--color-text);border-color:var(--bone-300);}
.pl-btn--ghost:hover{background:var(--color-surface-hover);border-color:var(--blood);color:var(--blood-bright);}

.pl-btn--danger{background:transparent;color:var(--blood-bright);border-color:var(--blood-line);}
.pl-btn--danger:hover{background:var(--blood-soft);border-color:var(--blood);}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-btn-css')) {
  const s = document.createElement('style');
  s.id = 'pl-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  glyph,
  iconRight,
  as = 'button',
  disabled = false,
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = ['pl-btn', `pl-btn--${variant}`, size !== 'md' && `pl-btn--${size}`, block && 'pl-btn--block', className].filter(Boolean).join(' ');
  const a11y = Tag === 'button' ? {
    disabled
  } : {
    'aria-disabled': disabled || undefined,
    role: 'button',
    tabIndex: 0
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, a11y, rest), glyph && /*#__PURE__*/React.createElement("span", {
    className: "pl-btn__glyph",
    "aria-hidden": "true"
  }, glyph), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "pl-btn__glyph",
    "aria-hidden": "true"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Card
   Surface panel with hairline border + optional HUD corner ticks.
   `interactive` adds a hover lift + mint edge + faint glow (use for links/buttons).
   `accent` tints the top hairline mint | violet | red. */

const CSS = `
.pl-card{
  position:relative;
  background:var(--color-surface);
  border:1px solid var(--color-border-strong);
  border-radius:0;
  padding:var(--space-6);
  color:var(--color-text);
}
.pl-card--inset{background:var(--color-bg-elevated);}
.pl-card--pad-sm{padding:var(--space-4);}
.pl-card--pad-lg{padding:var(--space-8);}

.pl-card--interactive{cursor:pointer;text-decoration:none;display:block;
  transition:transform var(--duration-base) var(--ease-out),
             border-color var(--duration-base) var(--ease-out),
             box-shadow var(--duration-base) var(--ease-out);}
.pl-card--interactive:hover{transform:translate(-2px,-2px);border-color:var(--blood-line);
  box-shadow:var(--shadow-pixel-blood);}
.pl-card--interactive:active{transform:translate(0,0);box-shadow:var(--shadow-pixel-sm);}
.pl-card--interactive:focus-visible{outline:none;box-shadow:var(--focus-ring);}

.pl-card--accent-mint{border-top:2px solid var(--blood);}
.pl-card--accent-violet{border-top:2px solid var(--bruise);}
.pl-card--accent-red{border-top:2px solid var(--blood);}

.pl-card__tick{position:absolute;width:var(--tick-size);height:var(--tick-size);pointer-events:none;color:var(--tick-color);}
.pl-card__tick--tl{top:7px;left:7px;border-top:2px solid currentColor;border-left:2px solid currentColor;}
.pl-card__tick--tr{top:7px;right:7px;border-top:2px solid currentColor;border-right:2px solid currentColor;}
.pl-card__tick--bl{bottom:7px;left:7px;border-bottom:2px solid currentColor;border-left:2px solid currentColor;}
.pl-card__tick--br{bottom:7px;right:7px;border-bottom:2px solid currentColor;border-right:2px solid currentColor;}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-card-css')) {
  const s = document.createElement('style');
  s.id = 'pl-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  children,
  as = 'div',
  interactive = false,
  ticks = false,
  inset = false,
  accent,
  padding = 'md',
  className = '',
  ...rest
}) {
  const Tag = interactive && as === 'div' ? 'div' : as;
  const cls = ['pl-card', interactive && 'pl-card--interactive', inset && 'pl-card--inset', accent && `pl-card--accent-${accent}`, padding === 'sm' && 'pl-card--pad-sm', padding === 'lg' && 'pl-card--pad-lg', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, interactive ? {
    tabIndex: 0
  } : {}, rest), ticks && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "pl-card__tick pl-card__tick--tl",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-card__tick pl-card__tick--tr",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-card__tick pl-card__tick--bl",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pl-card__tick pl-card__tick--br",
    "aria-hidden": "true"
  })), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Input
   Terminal-grade text field. Recessed dark well, hairline border, mono text.
   Optional leading prompt glyph ($ › #) and label. Focus → mint edge + glow. */

const CSS = `
.pl-field{display:flex;flex-direction:column;gap:7px;}
.pl-field__label{
  font-family:var(--font-pixel);font-size:var(--text-pixel-xs);font-weight:var(--weight-regular);
  letter-spacing:0.04em;text-transform:uppercase;color:var(--color-text-secondary);
}
.pl-input{
  display:flex;align-items:center;gap:8px;
  height:var(--control-md);padding:0 12px;
  background:var(--color-surface-inset);
  border:1px solid var(--color-border-strong);border-radius:0;
  transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);
}
.pl-input:hover{border-color:var(--ink-500);}
.pl-input:focus-within{border-color:var(--blood);box-shadow:var(--shadow-pixel-sm);}
.pl-input__prefix{font-family:var(--font-mono);font-weight:var(--weight-bold);color:var(--blood);user-select:none;}
.pl-input__control{
  flex:1;min-width:0;background:transparent;border:0;outline:none;
  font-family:var(--font-mono);font-size:var(--text-body-sm);color:var(--color-text);
  letter-spacing:0.01em;
}
.pl-input__control::placeholder{color:var(--color-text-tertiary);}
.pl-input--lg{height:var(--control-lg);}
.pl-input--invalid{border-color:var(--blood);}
.pl-input--invalid:focus-within{box-shadow:var(--shadow-pixel-sm);}
.pl-field--disabled{opacity:.5;pointer-events:none;}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-input-css')) {
  const s = document.createElement('style');
  s.id = 'pl-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  prefix,
  size = 'md',
  invalid = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `pl-${String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined);
  const wrapCls = ['pl-field', disabled && 'pl-field--disabled', className].filter(Boolean).join(' ');
  const boxCls = ['pl-input', size === 'lg' && 'pl-input--lg', invalid && 'pl-input--invalid'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: wrapCls,
    htmlFor: inputId
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "pl-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: boxCls
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "pl-input__prefix",
    "aria-hidden": "true"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "pl-input__control",
    disabled: disabled,
    "aria-invalid": invalid || undefined
  }, rest))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Header (cabecera)
   Site/app top bar: brand wordmark + mono nav + action slot, over a
   translucent blurred bar with a hairline base. */

const CSS = `
.pl-header{display:flex;align-items:center;gap:22px;height:64px;padding:0 24px;
  background:rgba(10,10,11,.8);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  border-bottom:1px solid var(--color-border-strong);}
.pl-header--sticky{position:sticky;top:0;z-index:50;}
.pl-header__brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none;}
.pl-header__nav{display:flex;align-items:center;gap:2px;font-family:var(--font-pixel);}
.pl-header__link{color:var(--color-text-secondary);font-size:var(--text-pixel-xs);
  font-weight:var(--weight-regular);letter-spacing:.04em;text-transform:uppercase;padding:9px 12px;
  border-radius:0;text-decoration:none;
  transition:color var(--duration-fast) var(--ease-out),background var(--duration-fast) var(--ease-out);}
.pl-header__link:hover{color:var(--color-text);background:var(--color-surface-hover);}
.pl-header__link--active{color:var(--blood-bright);}
.pl-header__link--active::before{content:"> ";color:var(--blood);}
.pl-header__spacer{margin-left:auto;}
.pl-header__actions{display:inline-flex;align-items:center;gap:10px;}
@media (max-width:720px){.pl-header__nav{display:none;}}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-header-css')) {
  const s = document.createElement('style');
  s.id = 'pl-header-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Header({
  nav = [],
  actions,
  sticky = false,
  logoVariant = 'wordmark',
  brandHref = '#',
  className = '',
  ...rest
}) {
  const cls = ['pl-header', sticky && 'pl-header--sticky', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("header", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "pl-header__brand",
    href: brandHref,
    "aria-label": "pelud1n home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: logoVariant,
    size: "sm",
    cursor: true
  })), nav.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "pl-header__nav"
  }, nav.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    href: item.href || '#',
    className: `pl-header__link${item.active ? ' pl-header__link--active' : ''}`,
    "aria-current": item.active ? 'page' : undefined
  }, item.label))), /*#__PURE__*/React.createElement("span", {
    className: "pl-header__spacer"
  }), actions && /*#__PURE__*/React.createElement("div", {
    className: "pl-header__actions"
  }, actions));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pelud1n — Tabs
   Monospace segmented tabs with a mint active underline + faint glow.
   Controlled: pass `value` and `onChange`. */

const CSS = `
.pl-tabs{display:flex;gap:2px;border-bottom:1px solid var(--color-border-strong);
  font-family:var(--font-pixel);overflow-x:auto;scrollbar-width:none;}
.pl-tabs::-webkit-scrollbar{display:none;}
.pl-tab{appearance:none;background:transparent;border:0;border-bottom:2px solid transparent;
  margin-bottom:-1px;color:var(--color-text-secondary);font-family:inherit;
  font-size:var(--text-pixel-xs);font-weight:var(--weight-regular);letter-spacing:.04em;text-transform:uppercase;
  padding:11px 15px;cursor:pointer;white-space:nowrap;display:inline-flex;align-items:center;gap:7px;
  transition:color var(--duration-fast) var(--ease-out),
             border-color var(--duration-fast) var(--ease-out),
             background var(--duration-fast) var(--ease-out);}
.pl-tab:hover{color:var(--color-text);background:var(--color-surface-hover);}
.pl-tab:focus-visible{outline:none;box-shadow:var(--focus-ring);border-radius:0;}
.pl-tab--active{color:var(--blood-bright);border-bottom-color:var(--blood);text-shadow:none;}
.pl-tab__glyph{font-family:var(--font-mono);font-weight:var(--weight-bold);opacity:.85;}
.pl-tab__count{font-family:var(--font-mono);font-size:var(--text-micro);color:var(--color-text-tertiary);
  border:1px solid var(--color-border-strong);border-radius:0;padding:1px 6px;}
.pl-tab--active .pl-tab__count{color:var(--blood-bright);border-color:var(--blood-line);}
`;
if (typeof document !== 'undefined' && !document.getElementById('pl-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'pl-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  const cls = ['pl-tabs', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "tablist"
  }, rest), items.map(it => {
    const active = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      role: "tab",
      "aria-selected": active,
      className: `pl-tab${active ? ' pl-tab--active' : ''}`,
      onClick: () => onChange && onChange(it.id)
    }, it.glyph && /*#__PURE__*/React.createElement("span", {
      className: "pl-tab__glyph",
      "aria-hidden": "true"
    }, it.glyph), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      className: "pl-tab__count"
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// stream/animations.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// animations.jsx — timeline engine. Exports (on window): Stage, Sprite,
//   TextSprite, ImageSprite, RectSprite, VideoSprite, PlaybackBar,
//   useTime, useTimeline, useSprite, Easing, interpolate, animate, clamp.
//
//   <Stage width={1280} height={720} duration={10} background="#f6f4ef">
//     <Sprite start={0} end={3}>
//       <TextSprite text="Hello" x={100} y={300} size={72} color="#111" />
//     </Sprite>
//     <Sprite start={2} end={8}>
//       <ImageSprite src="hero.png" x={200} y={120} width={640} height={360} kenBurns />
//     </Sprite>
//   </Stage>
//
// Stage({width,height,duration,background,fps,loop,autoplay}) — auto-scales to
//   viewport; scrubber + play/pause + ←/→ seek + space + 0-reset; persists
//   playhead. The canvas is an <svg><foreignObject>, export-ready: Share →
//   Export → Video (or the PlaybackBar's download button) renders it to .mp4.
//   Screenshot tools DOM-rerender (not pixel-capture) and unwrap this wrapper
//   so captures should work — but if one comes back black, that's a capture
//   artifact, not a render bug; trust the live preview.
// Sprite({start,end,keepMounted}) — mounts children only while playhead is in
//   [start,end]. Children read {localTime, progress, duration} via useSprite().
// useTime() → seconds; useTimeline() → {time,duration,playing,setTime,setPlaying}.
// TextSprite({text,x,y,size,color,font,weight,align,entryDur,exitDur}) — fades/scales in+out.
// ImageSprite({src,x,y,width,height,fit,radius,kenBurns,placeholder}) — same, with optional ken-burns.
// RectSprite({x,y,width,height,color,radius}) — solid box with entry/exit.
// VideoSprite({src,start,end,speed,style}) — looped <video> clip synced to the
//   timeline; its audio is mixed into the exported video.
// Easing.{linear,easeIn/Out/InOut Quad/Cubic/Quart/Quint/Expo/Back, …}
// interpolate([t0,t1,…],[v0,v1,…],ease?) → (t)=>v  — piecewise tween.
// animate({from,to,start,end,ease}) → (t)=>v  — single tween.
//
// Build scenes by composing Sprites inside Stage. Absolutely-position elements.
//
// In a .dc.html project, put your scene in a sibling my-scene.jsx (reading
// {Stage, Sprite, useTime, Easing, …} from window is safe) and mount BOTH:
//   <x-import component-from-global-scope="MyScene"
//             from="./animations.jsx ./my-scene.jsx"></x-import>
// The two files in from= load in order, so my-scene.jsx can use the globals
// animations.jsx set.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: t => t,
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // Expo
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  // Back (overshoot)
  easeOutBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: t => {
    const c1 = 1.70158,
      c2 = c1 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  // Elastic
  easeOutElastic: t => {
    const c4 = 2 * Math.PI / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return t => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? ease[i] || Easing.linear : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic
}) {
  return t => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({
  time: 0,
  duration: 10,
  playing: false
});
const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// ── Sprite ──────────────────────────────────────────────────────────────────
// Renders children only when the playhead is inside [start, end]. Provides
// a sub-context with `localTime` (seconds since start) and `progress` (0..1).
//
//   <Sprite start={2} end={5}>
//     {({ localTime, progress }) => <Thing x={progress * 100} />}
//   </Sprite>
//
// Or as a plain wrapper — children can call useSprite() themselves.

const SpriteContext = React.createContext({
  localTime: 0,
  progress: 0,
  duration: 0
});
const useSprite = () => React.useContext(SpriteContext);
function Sprite({
  start = 0,
  end = Infinity,
  children,
  keepMounted = false
}) {
  const {
    time
  } = useTimeline();
  const visible = time >= start && time <= end;
  if (!visible && !keepMounted) return null;
  const duration = end - start;
  const localTime = Math.max(0, time - start);
  const progress = duration > 0 && isFinite(duration) ? clamp(localTime / duration, 0, 1) : 0;
  const value = {
    localTime,
    progress,
    duration,
    visible
  };
  return /*#__PURE__*/React.createElement(SpriteContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
}

// ── Sample sprite components ────────────────────────────────────────────────

// TextSprite: fades/slides text in on entry, holds, then fades out on exit.
// Props: text, x, y, size, color, font, entryDur, exitDur, align
function TextSprite({
  text,
  x = 0,
  y = 0,
  size = 48,
  color = '#111',
  font = 'Inter, system-ui, sans-serif',
  weight = 600,
  entryDur = 0.45,
  exitDur = 0.35,
  entryEase = Easing.easeOutBack,
  exitEase = Easing.easeInCubic,
  align = 'left',
  letterSpacing = '-0.01em'
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let ty = 0;
  if (localTime < entryDur) {
    const t = entryEase(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    ty = (1 - t) * 16;
  } else if (localTime > exitStart) {
    const t = exitEase(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    ty = -t * 8;
  }
  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      transform: `translate(${translateX}, ${ty}px)`,
      opacity,
      fontFamily: font,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing,
      whiteSpace: 'pre',
      lineHeight: 1.1,
      willChange: 'transform, opacity'
    }
  }, text);
}

// ImageSprite: scales + fades in; optional Ken Burns drift during hold.
function ImageSprite({
  src,
  x = 0,
  y = 0,
  width = 400,
  height = 300,
  entryDur = 0.6,
  exitDur = 0.4,
  kenBurns = false,
  kenBurnsScale = 1.08,
  radius = 12,
  fit = 'cover',
  placeholder = null // {label: string} for striped placeholder
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutCubic(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    scale = 0.96 + 0.04 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = (kenBurns ? kenBurnsScale : 1) + 0.02 * t;
  } else if (kenBurns) {
    const holdSpan = exitStart - entryDur;
    const holdT = holdSpan > 0 ? (localTime - entryDur) / holdSpan : 0;
    scale = 1 + (kenBurnsScale - 1) * holdT;
  }
  const content = placeholder ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'repeating-linear-gradient(135deg, #e9e6df 0 10px, #dcd8cf 10px 20px)',
      color: '#6b6458',
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, placeholder.label || 'image') : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      borderRadius: radius,
      overflow: 'hidden',
      willChange: 'transform, opacity'
    }
  }, content);
}

// RectSprite: simple rectangle that animates position/size/color via props.
// Useful demo primitive — takes a `render` fn for per-frame customization.
function RectSprite({
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  color = '#111',
  radius = 8,
  entryDur = 0.4,
  exitDur = 0.3,
  render // optional: (ctx) => style overrides
}) {
  const spriteCtx = useSprite();
  const {
    localTime,
    duration
  } = spriteCtx;
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutBack(clamp(localTime / entryDur, 0, 1));
    opacity = clamp(localTime / entryDur, 0, 1);
    scale = 0.4 + 0.6 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInQuad(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = 1 - 0.15 * t;
  }
  const overrides = render ? render(spriteCtx) : {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      background: color,
      borderRadius: radius,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      willChange: 'transform, opacity',
      ...overrides
    }
  });
}

// ── Font inlining ───────────────────────────────────────────────────────────
// Copy every @font-face rule from the page into a <style> inside the svg's
// foreignObject, with font URLs rewritten to data: URLs. Makes the svg
// self-describing so serializing it alone (video export fast path) still
// renders with the right fonts. Sets data-om-fonts-inlined on the svg when
// done so the exporter can wait for it.

function useInlineFontsInto(svgRef) {
  React.useEffect(() => {
    const svg = svgRef.current;
    const host = svg && svg.querySelector('foreignObject > div');
    if (!svg || !host) return;
    let cancelled = false;
    (async () => {
      const rules = [];
      for (const ss of document.styleSheets) {
        let cssRules;
        try {
          cssRules = ss.cssRules;
        } catch {
          // Cross-origin sheet without crossorigin attr (e.g. the standard
          // fonts.googleapis.com <link>) — fetch the CSS text directly and
          // regex-extract the @font-face blocks.
          if (ss.href) {
            try {
              const txt = await fetch(ss.href).then(r => {
                if (!r.ok) throw 0;
                return r.text();
              });
              for (const ff of txt.match(/@font-face\s*{[^}]*}/g) || []) rules.push({
                css: ff,
                base: ss.href
              });
            } catch {}
          }
          continue;
        }
        if (!cssRules) continue;
        for (const r of cssRules) {
          if (r.type === CSSRule.FONT_FACE_RULE) {
            rules.push({
              css: r.cssText,
              base: ss.href || location.href
            });
          }
        }
      }
      const toDataURL = url => fetch(url).then(r => {
        if (!r.ok) throw 0;
        return r.blob();
      }).then(b => new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => res(url);
        fr.readAsDataURL(b);
      })).catch(() => url);
      const parts = await Promise.all(rules.map(async ({
        css,
        base
      }) => {
        const re = /url\((['"]?)([^'")]+)\1\)/g;
        let out = css,
          m;
        while (m = re.exec(css)) {
          const u = m[2];
          if (u.startsWith('data:')) continue;
          let abs;
          try {
            abs = new URL(u, base).href;
          } catch {
            continue;
          }
          out = out.split(m[0]).join(`url("${await toDataURL(abs)}")`);
        }
        return out;
      }));
      if (cancelled || !parts.length) {
        svg.setAttribute('data-om-fonts-inlined', 'true');
        return;
      }
      const style = document.createElement('style');
      style.textContent = parts.join('\n');
      host.insertBefore(style, host.firstChild);
      svg.setAttribute('data-om-fonts-inlined', 'true');
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  persistKey = 'animstage',
  children
}) {
  // Props arrive as strings when Stage is mounted via <x-import> (DC
  // projects) — coerce so style={{width}} gets a number React can px-ify.
  width = +width || 1280;
  height = +height || 720;
  duration = +duration || 10;
  fps = +fps || 60;
  if (typeof loop === 'string') loop = loop !== 'false';
  if (typeof autoplay === 'string') autoplay = autoplay !== 'false';
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch {
      return 0;
    }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try {
      localStorage.setItem(persistKey + ':t', String(time));
    } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(el.clientWidth / width, (el.clientHeight - barH) / height);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    const step = ts => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime(t => {
        let next = t + dt;
        if (next >= duration) {
          if (loop) next = next % duration;else {
            next = duration;
            setPlaying(false);
          }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loop]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  // Video-export protocol: the exporter dispatches this event per frame;
  // pause + sync the playhead so the capture sees exactly that timestamp.
  React.useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onSeek = e => {
      setPlaying(false);
      setTime(clamp(e.detail.time, 0, duration));
    };
    el.addEventListener('data-om-seek-to-time-frame', onSeek);
    return () => el.removeEventListener('data-om-seek-to-time-frame', onSeek);
  }, [duration]);

  // Inline @font-face rules into the svg's foreignObject so the svg is
  // self-describing — serializing it alone (for video export) then renders
  // with the right fonts. Sets data-om-fonts-inlined once done.
  useInlineFontsInto(canvasRef);
  const displayTime = hoverTime != null ? hoverTime : time;
  const ctxValue = React.useMemo(() => ({
    time: displayTime,
    duration,
    playing,
    setTime,
    setPlaying
  }), [displayTime, duration, playing]);
  return /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#0a0a0a',
      fontFamily: 'Inter, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    ref: canvasRef,
    width: width,
    height: height,
    "data-om-exportable-video-with-duration-secs": duration,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      flexShrink: 0,
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("foreignObject", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("div", {
    xmlns: "http://www.w3.org/1999/xhtml",
    style: {
      width,
      height,
      background,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
    value: ctxValue
  }, children))))), /*#__PURE__*/React.createElement(PlaybackBar, {
    time: displayTime,
    actualTime: time,
    duration: duration,
    playing: playing,
    onPlayPause: () => setPlaying(p => !p),
    onReset: () => {
      setTime(0);
    },
    onSeek: t => setTime(t),
    onHover: t => setHoverTime(t)
  }));
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({
  time,
  duration,
  playing,
  onPlayPause,
  onReset,
  onSeek,
  onHover
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const timeFromEvent = React.useCallback(e => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);
  const onTrackMove = e => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };
  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };
  const onTrackDown = e => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = e => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);
  const pct = duration > 0 ? time / duration * 100 : 0;
  const fmt = t => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor(total * 100 % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };
  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';
  return /*#__PURE__*/React.createElement("div", {
    "data-omelette-chrome": true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 16px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',
      borderRadius: 8,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onReset,
    title: "Return to start (0)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v10M12 2L5 7l7 5V2z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onPlayPause,
    title: "Play/pause (space)"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'right',
      color: '#f6f4ef'
    }
  }, fmt(time)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseMove: onTrackMove,
    onMouseLeave: onTrackLeave,
    onMouseDown: onTrackDown,
    style: {
      flex: 1,
      height: 22,
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'oklch(72% 0.12 250)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct}%`,
      top: '50%',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -6,
      background: '#fff',
      borderRadius: 6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'left',
      color: 'rgba(246,244,239,0.55)'
    }
  }, fmt(duration)), typeof VideoEncoder !== 'undefined' && /*#__PURE__*/React.createElement(IconButton, {
    title: "Export video",
    onClick: () => window.parent.postMessage({
      type: 'omelette:request-video-export'
    }, '*')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7m0 0L4 6m3 3l3-3M2 12h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
function IconButton({
  children,
  onClick,
  title
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 6,
      color: '#f6f4ef',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 120ms'
    }
  }, children);
}

// ── VideoSprite ─────────────────────────────────────────────────────────────
// Renders a <video> that loops within [start,end] of its source at `speed`,
// kept in sync with the Stage's playhead. Carries the
// data-om-exportable-video-play-* attrs so video export can mix its audio.
//
//   <VideoSprite src="clip.mp4" start={2} end={5} speed={1}
//     style={{ width: 640, height: 360 }} />

function VideoSprite({
  src,
  start = 0,
  end,
  speed = 1,
  style,
  ...rest
}) {
  start = +start || 0;
  speed = +speed || 1;
  if (end != null) end = +end || undefined;
  const t = useTime();
  const ref = React.useRef(null);
  const span = Math.max(0.001, (end ?? start + 1) - start);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || v.readyState < 1) return;
    const target = start + t * speed % span;
    if (Math.abs(v.currentTime - target) > 0.05) v.currentTime = target;
  }, [t, start, span, speed]);
  return /*#__PURE__*/React.createElement("video", _extends({
    ref: ref,
    src: src,
    muted: true,
    playsInline: true,
    preload: "auto",
    "data-om-exportable-video-play-start": start,
    "data-om-exportable-video-play-end": end ?? start + span,
    "data-om-exportable-video-play-speed": speed,
    style: {
      display: 'block',
      objectFit: 'cover',
      ...style
    }
  }, rest));
}
Object.assign(window, {
  Easing,
  interpolate,
  animate,
  clamp,
  TimelineContext,
  useTime,
  useTimeline,
  Sprite,
  SpriteContext,
  useSprite,
  TextSprite,
  ImageSprite,
  RectSprite,
  VideoSprite,
  Stage,
  PlaybackBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "stream/animations.jsx", error: String((e && e.message) || e) }); }

// stream/kit-scale.js
try { (() => {
/* pelud1n stream kit — fit a 1920×1080 .kit-canvas into any viewport.
   OBS: size the Browser Source to 1920×1080 for a 1:1 render. */
(function () {
  function fit() {
    var c = document.querySelector('.kit-canvas');
    if (!c) return;
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    c.style.transform = 'translate(-50%, -50%) scale(' + s + ')';
  }
  window.addEventListener('resize', fit);
  if (document.readyState !== 'loading') fit();else document.addEventListener('DOMContentLoaded', fit);
  window.__kitFit = fit;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "stream/kit-scale.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Arsenal.jsx
try { (() => {
/* pelud1n portfolio — Arsenal
   The toolkit, grouped by kill-chain phase. Cards of monospace tool chips. */

function Arsenal() {
  const {
    Card
  } = window.Pelud1nDesignSystem_5024cb;
  const groups = [{
    phase: 'recon',
    accent: 'mint',
    tools: ['nmap', 'ffuf', 'amass', 'httpx', 'naabu']
  }, {
    phase: 'exploitation',
    accent: 'red',
    tools: ['Burp Suite', 'sqlmap', 'metasploit', 'custom POCs']
  }, {
    phase: 'post-ex',
    accent: 'violet',
    tools: ['BloodHound', 'mimikatz', 'impacket', 'Rubeus']
  }, {
    phase: 'c2 & evasion',
    accent: 'violet',
    tools: ['Cobalt Strike', 'Sliver', 'Havoc', 'shellcode loaders']
  }, {
    phase: 'cloud',
    accent: 'mint',
    tools: ['ScoutSuite', 'Pacu', 'kube-hunter', 'trivy']
  }, {
    phase: 'reporting',
    accent: 'mint',
    tools: ['SysReptor', 'markdown', 'CVSS v4', 'PoC video']
  }];
  const dot = {
    mint: 'var(--mint)',
    red: 'var(--red)',
    violet: 'var(--violet-bright)'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "arsenal",
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--mint)',
      marginBottom: 10
    }
  }, "// 03 \xB7 arsenal"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-display-md)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-text)'
    }
  }, "Tools of the trade"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 16
    }
  }, groups.map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.phase,
    accent: g.accent,
    padding: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: dot[g.accent],
      boxShadow: `0 0 6px ${dot[g.accent]}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--color-text)'
    }
  }, g.phase)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, g.tools.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-text-secondary)',
      background: 'var(--color-surface-inset)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-sm)',
      padding: '4px 9px'
    }
  }, t)))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Arsenal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* pelud1n portfolio — Contact
   Terminal-framed contact form. Submits to a faked console response. */

function Contact() {
  const {
    Terminal,
    Prompt,
    Input,
    Button
  } = window.Pelud1nDesignSystem_5024cb;
  const [form, setForm] = React.useState({
    handle: '',
    email: '',
    msg: ''
  });
  const [sent, setSent] = React.useState(false);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '64px 24px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--mint)',
      marginBottom: 10
    }
  }, "// 04 \xB7 contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-display-md)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-text)'
    }
  }, "Establish a connection"), /*#__PURE__*/React.createElement(Terminal, {
    title: "root@pelud1n: ~/contact",
    status: sent ? 'sent' : 'open'
  }, /*#__PURE__*/React.createElement(Prompt, null, "./connect --secure"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-secondary)',
      marginBottom: 6
    }
  }, "handshake ready \xB7 PGP 0x9F2A...C41D \xB7 responses within 24h"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mint)'
    }
  }, "[ok]"), " packet received from ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--violet-bright)'
    }
  }, form.handle || 'anon')), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, "queued for triage \u2014 expect a reply at ", form.email || 'your inbox', "."), /*#__PURE__*/React.createElement(Prompt, {
    cursor: true,
    blink: true
  })) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    },
    className: "contact-row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Handle",
    prefix: "$",
    placeholder: "your alias",
    value: form.handle,
    onChange: set('handle')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    prefix: "@",
    type: "email",
    placeholder: "you@domain.tld",
    value: form.email,
    onChange: set('email')
  })), /*#__PURE__*/React.createElement("label", {
    className: "pl-field",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--color-text-secondary)'
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    rows: "4",
    placeholder: "scope, timeline, target surface\u2026",
    value: form.msg,
    onChange: set('msg'),
    style: {
      background: 'var(--color-surface-inset)',
      border: '1px solid var(--color-border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      resize: 'vertical',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-text)',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    glyph: "\u203A"
  }, "transmit")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Engagements.jsx
try { (() => {
/* pelud1n portfolio — Engagements
   Section header + filterable grid of engagement cards (Tabs + Card + Badge). */

function Engagements() {
  const {
    Tabs,
    Card,
    Badge
  } = window.Pelud1nDesignSystem_5024cb;
  const [filter, setFilter] = React.useState('all');
  const items = [{
    name: 'Fintech payments API',
    cat: 'web',
    summary: 'Auth bypass chained to full account takeover across the payments tier.',
    crit: 3,
    high: 5,
    year: '2025'
  }, {
    name: 'Hospital network',
    cat: 'network',
    summary: 'Flat internal network → domain admin in 4 hops via unconstrained delegation.',
    crit: 2,
    high: 4,
    year: '2025'
  }, {
    name: 'SaaS multi-tenant',
    cat: 'cloud',
    summary: 'IAM misconfig allowed cross-tenant S3 read and silent privilege escalation.',
    crit: 1,
    high: 6,
    year: '2024'
  }, {
    name: 'Retail red team',
    cat: 'redteam',
    summary: 'Phishing foothold to badge-cloning physical access; undetected for 9 days.',
    crit: 4,
    high: 3,
    year: '2024'
  }, {
    name: 'GraphQL platform',
    cat: 'web',
    summary: 'Introspection + batching abuse leaking PII for 1.2M records.',
    crit: 2,
    high: 7,
    year: '2024'
  }, {
    name: 'K8s cluster',
    cat: 'cloud',
    summary: 'Container breakout via hostPath mount to node-level root.',
    crit: 1,
    high: 2,
    year: '2023'
  }];
  const tabs = [{
    id: 'all',
    label: 'All',
    count: items.length
  }, {
    id: 'web',
    label: 'Web',
    glyph: '›'
  }, {
    id: 'network',
    label: 'Network'
  }, {
    id: 'cloud',
    label: 'Cloud'
  }, {
    id: 'redteam',
    label: 'Red team'
  }];
  const shown = filter === 'all' ? items : items.filter(i => i.cat === filter);
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--mint)',
      marginBottom: 10
    }
  }, "// 01 \xB7 engagements"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-display-md)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-text)'
    }
  }, "Selected operations"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: tabs,
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: 16
    }
  }, shown.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.name,
    as: "a",
    href: "#",
    interactive: true,
    ticks: true,
    padding: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 168
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-text-tertiary)'
    }
  }, it.cat, " \xB7 ", it.year), /*#__PURE__*/React.createElement(Badge, {
    tone: "mint"
  }, "delivered")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-heading)',
      color: 'var(--color-text)'
    }
  }, it.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--color-text-secondary)',
      flex: 1
    }
  }, it.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "critical"
  }, it.crit, " critical"), /*#__PURE__*/React.createElement(Badge, {
    tone: "high"
  }, it.high, " high"))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Engagements.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
/* pelud1n portfolio — Footer */

function Footer() {
  const {
    Logo
  } = window.Pelud1nDesignSystem_5024cb;
  const links = ['github', 'x', 'signal', 'pgp key'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-bg-elevated)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '36px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      color: 'var(--color-text-tertiary)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "encrypt everything \xB7 trust nothing")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-text-secondary)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      color: 'var(--color-text-tertiary)'
    }
  }, "\xA9 2026 pelud1n")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* pelud1n portfolio — Hero
   Terminal-driven intro: status badges, wordmark, tagline, CTAs, console panel.
   Reads DS components off the global namespace set by _ds_bundle.js. */

function Hero() {
  const {
    Logo,
    Button,
    Badge,
    Terminal,
    Prompt
  } = window.Pelud1nDesignSystem_5024cb;
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '88px 24px 64px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)',
      gap: 56,
      alignItems: 'center'
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "mint",
    dot: true
  }, "available for engagements"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "OSCP"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "OSEP")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "xl",
    blink: true
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 460,
      fontSize: 'var(--text-body-lg)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Offensive security operator \u2014 adversary simulation, web & network exploitation, and the write-ups to prove it. I break in, document the path, and hand you the fix."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#work",
    glyph: "\u203A"
  }, "view work"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#contact",
    variant: "ghost"
  }, "establish contact"))), /*#__PURE__*/React.createElement(Terminal, {
    title: "root@pelud1n: ~",
    status: "online"
  }, /*#__PURE__*/React.createElement(Prompt, null, "whoami"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, "pelud1n \u2014 red team / pentester"), /*#__PURE__*/React.createElement(Prompt, null, "cat ./focus.txt"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mint)'
    }
  }, "\u203A"), " web app & API exploitation", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mint)'
    }
  }, "\u203A"), " active directory / lateral movement", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mint)'
    }
  }, "\u203A"), " cloud & container breakout", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mint)'
    }
  }, "\u203A"), " social engineering & phishing"), /*#__PURE__*/React.createElement(Prompt, {
    cursor: true,
    blink: true
  })));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/StatsStrip.jsx
try { (() => {
/* pelud1n portfolio — StatsStrip
   Four HUD-bracketed figures. Restrained — only metrics that mean something. */

function StatsStrip() {
  const {
    CornerFrame
  } = window.Pelud1nDesignSystem_5024cb;
  const stats = [{
    n: '6+',
    label: 'years operating',
    color: 'mint'
  }, {
    n: '40+',
    label: 'engagements delivered',
    color: 'violet'
  }, {
    n: '11',
    label: 'CVEs credited',
    color: 'red'
  }, {
    n: '80+',
    label: 'boxes rooted',
    color: 'mint'
  }];
  const tone = {
    mint: 'var(--mint)',
    violet: 'var(--violet-bright)',
    red: 'var(--red)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '8px 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      borderTop: '1px solid var(--color-border)',
      paddingTop: 28
    },
    className: "stats-grid"
  }, stats.map(s => /*#__PURE__*/React.createElement(CornerFrame, {
    key: s.label,
    color: s.color,
    style: {
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 1,
      color: tone[s.color]
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--color-text-tertiary)'
    }
  }, s.label)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/StatsStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Writeups.jsx
try { (() => {
/* pelud1n portfolio — Writeups
   Vertical list of research / CTF write-ups as compact interactive cards. */

function Writeups() {
  const {
    Card,
    Badge
  } = window.Pelud1nDesignSystem_5024cb;
  const posts = [{
    plat: 'CVE',
    tone: 'red',
    title: 'CVE-2024-3094 — backdooring xz from the build chain',
    tags: ['supply-chain', 'reversing'],
    date: '2025-02-11',
    read: '14 min'
  }, {
    plat: 'HTB',
    tone: 'mint',
    title: 'Cascade — AD recycle-bin to domain admin',
    tags: ['active-directory', 'ldap'],
    date: '2024-11-03',
    read: '9 min'
  }, {
    plat: 'RESEARCH',
    tone: 'violet',
    title: 'Abusing OAuth device-code flow for silent phishing',
    tags: ['oauth', 'phishing'],
    date: '2024-08-20',
    read: '11 min'
  }, {
    plat: 'THM',
    tone: 'mint',
    title: 'Internal — SSRF pivot to internal Jenkins RCE',
    tags: ['ssrf', 'rce'],
    date: '2024-05-29',
    read: '7 min'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "writeups",
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--mint)',
      marginBottom: 10
    }
  }, "// 02 \xB7 writeups"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-display-md)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-text)'
    }
  }, "Field notes & research"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, posts.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    as: "a",
    href: "#",
    interactive: true,
    padding: "md",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone,
    style: {
      minWidth: 78,
      justifyContent: 'center'
    }
  }, p.plat), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-body-lg)',
      color: 'var(--color-text)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      color: 'var(--color-text-tertiary)'
    }
  }, "#", t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      color: 'var(--color-text-tertiary)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, p.date), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      color: 'var(--mint)'
    }
  }, p.read, " \u2192"))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Writeups.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CornerFrame = __ds_scope.CornerFrame;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Prompt = __ds_scope.Prompt;

__ds_ns.Terminal = __ds_scope.Terminal;

__ds_ns.GlitchText = __ds_scope.GlitchText;

__ds_ns.Window = __ds_scope.Window;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
