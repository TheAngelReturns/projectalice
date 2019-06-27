webpackHotUpdate("static/development/pages/mods/forgotten.js",{

/***/ "./pages/mods/forgotten.tsx":
/*!**********************************!*\
  !*** ./pages/mods/forgotten.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FrontpageHero */ "./components/FrontpageHero.tsx");
/* harmony import */ var _components_MiniNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MiniNavbar */ "./components/MiniNavbar.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-hero_alt.png */ "./assets/mods/forgotten/forgotten-hero_alt.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-logo.png */ "./assets/mods/forgotten/forgotten-logo.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/pages/mods/forgotten.tsx";






/** @jsx jsx */



var policiesPageContentStyles =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["css"])(breakpoints({
  paddingTop: 64,
  paddingBottom: 64,
  paddingLeft: [24, 48, 188],
  paddingRight: [24, 48, 188],
  '& a': {
    textDecoration: "none",
    color: "#ffcc22"
  },
  '& a:hover': {
    color: "#ffdb64"
  }
}), "label:policiesPageContentStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtDIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBmYWNlcGFpbnQgZnJvbSAnZmFjZXBhaW50JztcblxuaW1wb3J0IGZvcmdvdHRlbkhlcm8gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2ZvcmdvdHRlbi1oZXJvX2FsdC5wbmcnO1xuaW1wb3J0IHRoZUFuZ2VsUmV0dXJuc0hlcm8gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvdGFyL3Rhci1iZy5wbmcnO1xuaW1wb3J0IHRoZUFuZ2VsUmV0dXJuc0xvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvdGFyL3Rhci1sb2dvLnBuZyc7XG5pbXBvcnQgZm9yZ290dGVuTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvbW9kcy9mb3Jnb3R0ZW4vZm9yZ290dGVuLWxvZ28ucG5nJztcblxuY29uc3QgcG9saWNpZXNQYWdlQ29udGVudFN0eWxlcyA9IGNzcyhicmVha3BvaW50cyh7XG4gIHBhZGRpbmdUb3A6IDY0LFxuICBwYWRkaW5nQm90dG9tOiA2NCxcbiAgcGFkZGluZ0xlZnQ6IFsyNCwgNDgsIDE4OF0sXG4gIHBhZGRpbmdSaWdodDogWzI0LCA0OCwgMTg4XSxcbiAgJyYgYSc6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6IFwiI2ZmY2MyMlwiXG4gIH0sXG4gICcmIGE6aG92ZXInOiB7XG4gICAgY29sb3I6IFwiI2ZmZGI2NFwiXG4gIH1cbn0pKVxuXG5jb25zdCBwb2xpY2llc0dyaWRDb250YWluZXIgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBkaXNwbGF5OiBcImdyaWRcIixcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wiMWZyXCIsIFwiMWZyXCIsIFwicmVwZWF0KDMsIDFmcilcIl0sXG4gIGdyaWRBdXRvUm93czogXCIxZnJcIixcbiAgZ3JpZENvbHVtbkdhcDogMjQsXG4gIGdyaWRSb3dHYXA6IDY0LFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuXG59KSlcblxuY29uc3QgRm9yZ290dGVuUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkZvcmdvdHRlblwiPlxuICAgICAgPE1pbmlOYXZiYXJcbiAgICAgICAgdGl0bGU9XCJGb3Jnb3R0ZW5cIlxuICAgICAgICBpY29uPXsgZm9yZ290dGVuTG9nbyB9XG4gICAgICAgIGJ1dHRvblRleHQ9XCJUcnkgZGVtb1wiXG4gICAgICAgIGJ1dHRvbkxpbms9XCJodHRwczovL2dpdGh1Yi5jb20vUHJvamVjdEFsaWNlRGV2L3N0ZWluL3JlbGVhc2VzL2xhdGVzdFwiXG4gICAgICAgPlxuICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RzL3BvbGljaWVzXCI+XG4gICAgICAgICAgIDxhPlBvbGljaWVzPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9qZWN0YWxpY2VkZXYvc3RlaW5cIj5cbiAgICAgICAgICAgPGE+U291cmNlPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgIDwvTWluaU5hdmJhcj5cbiAgICAgIDxGcm9udHBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPVwiRG9uJ3QgZm9yZ2V0IHdoYXQgaGFwcGVuZWQuXCJcbiAgICAgICAgc3VidGl0bGU9XCJTZXQgYWZ0ZXIgdGhlIGV2ZW50cyBvZiBEb2tpIERva2kgTGl0ZXJhdHVyZSBDbHViISwgdGhlIExpdGVyYXR1cmUgQ2x1YiB0YWtlcyBhIGhvcnJpZmljIHR1cm4gZm9yIHRoZSB3b3JzdCBpbiBGb3Jnb3R0ZW4uIEZpbmQgb3V0IHdoYXQgaGFwcGVuZWQgdG8gTW9uaWthIGJlZm9yZSBpdCdzIHRvbyBsYXRlLlwiXG4gICAgICAgIGNhbGxUb0FjdGlvblRleHQ9XCJcIlxuICAgICAgICBjYWxsVG9BY3Rpb25MaW5rPVwiXCJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlTG9jYXRpb249eyBmb3Jnb3R0ZW5IZXJvIH1cbiAgICAgICAgZG9udFNob3dDYWxsVG9BY3Rpb25cbiAgICAgIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290dGVuUGFnZVxuIl19 */"));
var policiesGridContainer =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["css"])(breakpoints({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(3, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 64,
  width: "100%",
  height: "100%",
  paddingBottom: 64
}), "label:policiesGridContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjhCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBmYWNlcGFpbnQgZnJvbSAnZmFjZXBhaW50JztcblxuaW1wb3J0IGZvcmdvdHRlbkhlcm8gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2ZvcmdvdHRlbi1oZXJvX2FsdC5wbmcnO1xuaW1wb3J0IHRoZUFuZ2VsUmV0dXJuc0hlcm8gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvdGFyL3Rhci1iZy5wbmcnO1xuaW1wb3J0IHRoZUFuZ2VsUmV0dXJuc0xvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvdGFyL3Rhci1sb2dvLnBuZyc7XG5pbXBvcnQgZm9yZ290dGVuTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvbW9kcy9mb3Jnb3R0ZW4vZm9yZ290dGVuLWxvZ28ucG5nJztcblxuY29uc3QgcG9saWNpZXNQYWdlQ29udGVudFN0eWxlcyA9IGNzcyhicmVha3BvaW50cyh7XG4gIHBhZGRpbmdUb3A6IDY0LFxuICBwYWRkaW5nQm90dG9tOiA2NCxcbiAgcGFkZGluZ0xlZnQ6IFsyNCwgNDgsIDE4OF0sXG4gIHBhZGRpbmdSaWdodDogWzI0LCA0OCwgMTg4XSxcbiAgJyYgYSc6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6IFwiI2ZmY2MyMlwiXG4gIH0sXG4gICcmIGE6aG92ZXInOiB7XG4gICAgY29sb3I6IFwiI2ZmZGI2NFwiXG4gIH1cbn0pKVxuXG5jb25zdCBwb2xpY2llc0dyaWRDb250YWluZXIgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBkaXNwbGF5OiBcImdyaWRcIixcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wiMWZyXCIsIFwiMWZyXCIsIFwicmVwZWF0KDMsIDFmcilcIl0sXG4gIGdyaWRBdXRvUm93czogXCIxZnJcIixcbiAgZ3JpZENvbHVtbkdhcDogMjQsXG4gIGdyaWRSb3dHYXA6IDY0LFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuXG59KSlcblxuY29uc3QgRm9yZ290dGVuUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkZvcmdvdHRlblwiPlxuICAgICAgPE1pbmlOYXZiYXJcbiAgICAgICAgdGl0bGU9XCJGb3Jnb3R0ZW5cIlxuICAgICAgICBpY29uPXsgZm9yZ290dGVuTG9nbyB9XG4gICAgICAgIGJ1dHRvblRleHQ9XCJUcnkgZGVtb1wiXG4gICAgICAgIGJ1dHRvbkxpbms9XCJodHRwczovL2dpdGh1Yi5jb20vUHJvamVjdEFsaWNlRGV2L3N0ZWluL3JlbGVhc2VzL2xhdGVzdFwiXG4gICAgICAgPlxuICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RzL3BvbGljaWVzXCI+XG4gICAgICAgICAgIDxhPlBvbGljaWVzPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9qZWN0YWxpY2VkZXYvc3RlaW5cIj5cbiAgICAgICAgICAgPGE+U291cmNlPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgIDwvTWluaU5hdmJhcj5cbiAgICAgIDxGcm9udHBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPVwiRG9uJ3QgZm9yZ2V0IHdoYXQgaGFwcGVuZWQuXCJcbiAgICAgICAgc3VidGl0bGU9XCJTZXQgYWZ0ZXIgdGhlIGV2ZW50cyBvZiBEb2tpIERva2kgTGl0ZXJhdHVyZSBDbHViISwgdGhlIExpdGVyYXR1cmUgQ2x1YiB0YWtlcyBhIGhvcnJpZmljIHR1cm4gZm9yIHRoZSB3b3JzdCBpbiBGb3Jnb3R0ZW4uIEZpbmQgb3V0IHdoYXQgaGFwcGVuZWQgdG8gTW9uaWthIGJlZm9yZSBpdCdzIHRvbyBsYXRlLlwiXG4gICAgICAgIGNhbGxUb0FjdGlvblRleHQ9XCJcIlxuICAgICAgICBjYWxsVG9BY3Rpb25MaW5rPVwiXCJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlTG9jYXRpb249eyBmb3Jnb3R0ZW5IZXJvIH1cbiAgICAgICAgZG9udFNob3dDYWxsVG9BY3Rpb25cbiAgICAgIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290dGVuUGFnZVxuIl19 */"));

var ForgottenPage = function ForgottenPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Forgotten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_MiniNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Forgotten",
    icon: _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    buttonText: "Try demo",
    buttonLink: "https://github.com/ProjectAliceDev/stein/releases/latest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/mods/policies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Policies")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "https://github.com/projectalicedev/stein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Source"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Don't forget what happened.",
    subtitle: "Set after the events of Doki Doki Literature Club!, the Literature Club takes a horrific turn for the worst in Forgotten. Find out what happened to Monika before it's too late.",
    callToActionText: "",
    callToActionLink: "",
    backgroundImageLocation: _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    dontShowCallToAction: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgottenPage);

/***/ })

})
//# sourceMappingURL=forgotten.js.6e10a391cc79cac50745.hot-update.js.map