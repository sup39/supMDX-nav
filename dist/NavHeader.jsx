"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavHeader = void 0;
var link_1 = require("next/link");
function NavHeader(_a) {
    var _b, _c, _d, _e, _f;
    var config = _a.config, onToggleFold = _a.onToggleFold;
    var title = config.title, subtitle = config.subtitle, icon0 = config.icon;
    var icon = typeof icon0 === 'string' ? { href: icon0 } : icon0;
    return <header>
    <link_1.default href="/" id="icon-link">
      <img className="icon" src={icon === null || icon === void 0 ? void 0 : icon.href} alt={(_b = icon === null || icon === void 0 ? void 0 : icon.alt) !== null && _b !== void 0 ? _b : 'icon'} width={(_d = (_c = icon === null || icon === void 0 ? void 0 : icon.width) !== null && _c !== void 0 ? _c : icon === null || icon === void 0 ? void 0 : icon.size) !== null && _d !== void 0 ? _d : 96} height={(_f = (_e = icon === null || icon === void 0 ? void 0 : icon.height) !== null && _e !== void 0 ? _e : icon === null || icon === void 0 ? void 0 : icon.size) !== null && _f !== void 0 ? _f : 96}/>
      <div className="icon-text">
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
    </link_1.default>
    <div className="menu-toggle" onClick={onToggleFold}/>
  </header>;
}
exports.NavHeader = NavHeader;
