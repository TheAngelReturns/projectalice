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
/* harmony import */ var _components_BasicCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BasicCard */ "./components/BasicCard.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/breakpoints */ "./utils/breakpoints.ts");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-hero_alt.png */ "./assets/mods/forgotten/forgotten-hero_alt.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-logo.png */ "./assets/mods/forgotten/forgotten-logo.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/mods/forgotten/f1.png */ "./assets/mods/forgotten/f1.png");
/* harmony import */ var _assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/mods/forgotten/f2.png */ "./assets/mods/forgotten/f2.png");
/* harmony import */ var _assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/mods/forgotten/f3.png */ "./assets/mods/forgotten/f3.png");
/* harmony import */ var _assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/mods/forgotten/f4.jpg */ "./assets/mods/forgotten/f4.jpg");
/* harmony import */ var _assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/pages/mods/forgotten.tsx";







/** @jsx jsx */








var pageContentStyles =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])(Object(_utils_breakpoints__WEBPACK_IMPORTED_MODULE_7__["breakpoints"])({
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
}), "label:pageContentStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjBCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBCYXNpY0NhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNpY0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgZmFjZXBhaW50IGZyb20gJ2ZhY2VwYWludCc7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2JyZWFrcG9pbnRzJ1xuXG5cbmltcG9ydCBmb3Jnb3R0ZW5IZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4taGVyb19hbHQucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItYmcucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItbG9nby5wbmcnO1xuaW1wb3J0IGZvcmdvdHRlbkxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2ZvcmdvdHRlbi1sb2dvLnBuZyc7XG5pbXBvcnQgb3BlblNvdXJjZUZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2YxLnBuZyc7XG5pbXBvcnQgYWxpY2VPU0ZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2YyLnBuZyc7XG5pbXBvcnQgY2hhcmFjdGVyc0ZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2YzLnBuZyc7XG5pbXBvcnQgZGV2ZWxvcGVyc0ZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2Y0LmpwZyc7XG5cblxuY29uc3QgcGFnZUNvbnRlbnRTdHlsZXMgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBwYWRkaW5nVG9wOiA2NCxcbiAgcGFkZGluZ0JvdHRvbTogNjQsXG4gIHBhZGRpbmdMZWZ0OiBbMjQsIDQ4LCAxODhdLFxuICBwYWRkaW5nUmlnaHQ6IFsyNCwgNDgsIDE4OF0sXG4gICcmIGEnOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcIiNmZmNjMjJcIlxuICB9LFxuICAnJiBhOmhvdmVyJzoge1xuICAgIGNvbG9yOiBcIiNmZmRiNjRcIlxuICB9XG59KSlcblxuY29uc3QgcGFnZUdyaWRDb250YWluZXIgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBkaXNwbGF5OiBcImdyaWRcIixcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wiMWZyXCIsIFwiMWZyXCIsIFwicmVwZWF0KDIsIDFmcilcIl0sXG4gIGdyaWRBdXRvUm93czogXCIxZnJcIixcbiAgZ3JpZENvbHVtbkdhcDogMjQsXG4gIGdyaWRSb3dHYXA6IDk2LFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuXG59KSlcblxuY29uc3QgRm9yZ290dGVuUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkZvcmdvdHRlblwiPlxuICAgICAgPE1pbmlOYXZiYXJcbiAgICAgICAgdGl0bGU9XCJGb3Jnb3R0ZW5cIlxuICAgICAgICBpY29uPXsgZm9yZ290dGVuTG9nbyB9XG4gICAgICAgIGJ1dHRvblRleHQ9XCJUcnkgZGVtb1wiXG4gICAgICAgIGJ1dHRvbkxpbms9XCJodHRwczovL2dpdGh1Yi5jb20vUHJvamVjdEFsaWNlRGV2L3N0ZWluL3JlbGVhc2VzL2xhdGVzdFwiXG4gICAgICAgPlxuICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RzL3BvbGljaWVzXCI+XG4gICAgICAgICAgIDxhPlBvbGljaWVzPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9qZWN0YWxpY2VkZXYvc3RlaW5cIj5cbiAgICAgICAgICAgPGE+U291cmNlPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgIDwvTWluaU5hdmJhcj5cbiAgICAgIDxGcm9udHBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPVwiRG9uJ3QgZm9yZ2V0IHdoYXQgaGFwcGVuZWQuXCJcbiAgICAgICAgc3VidGl0bGU9XCJTZXQgYWZ0ZXIgdGhlIGV2ZW50cyBvZiBEb2tpIERva2kgTGl0ZXJhdHVyZSBDbHViISwgdGhlIExpdGVyYXR1cmUgQ2x1YiB0YWtlcyBhIGhvcnJpZmljIHR1cm4gZm9yIHRoZSB3b3JzdCBpbiBGb3Jnb3R0ZW4uIEZpbmQgb3V0IHdoYXQgaGFwcGVuZWQgdG8gTW9uaWthIGJlZm9yZSBpdCdzIHRvbyBsYXRlLlwiXG4gICAgICAgIGNhbGxUb0FjdGlvblRleHQ9XCJcIlxuICAgICAgICBjYWxsVG9BY3Rpb25MaW5rPVwiXCJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlTG9jYXRpb249eyBmb3Jnb3R0ZW5IZXJvIH1cbiAgICAgICAgZG9udFNob3dDYWxsVG9BY3Rpb25cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNzcz17IHBhZ2VDb250ZW50U3R5bGVzIH0+XG4gICAgICAgIDxkaXYgY3NzPXsgcGFnZUdyaWRDb250YWluZXIgfT5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkFuIGV4cGVyaWVuY2UgeW91IGFscmVhZHkga25vdyBhbmQgbG92ZS5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRm9yZ290dGVuIGlzIGJ1aWx0IG9uIHRvcCBvZiBBbGljZU9TLCBvdXIgcm9idXN0IGFuZCBldm9sdmluZyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgaW50ZXJhY3RpdmUgdmlzdWFsIG5vdmVsIGV4cGVyaWVuY2VzIHdpdGggb3BlcmF0aW5nIHN5c3RlbS1saWtlIGZlYXR1cmVzIHN1Y2ggYXMgbm90aWZpY2F0aW9ucyBhbmQgc2V0dXAgYXNzaXN0YW50cy4gQWxpY2VPUyBwcm92aWRlcyBhIG5ldyBsZXZlbCBvZiBpbnRlcmFjdGl2aXR5IHRvIHRoZSB0YWJsZSwgbWFraW5nIHlvdSBmZWVsIG1vcmUgaW1tZXJzZWQuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBub1NoYWRvdz17IHRydWUgfVxuICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgaW1hZ2UgPSB7IGFsaWNlT1NGZWF0dXJlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJDb21wbGV0ZWx5IG9wZW4uIFJpZ2h0IGRvd24gdG8gdGhlIHRoZSBzb3VyY2UgY29kZS5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRm9yZ290dGVuIGlzIGZyZWUgYW5kIG9wZW4tc291cmNlIHNvZnR3YXJlLCBsaWNlbnNlZCB1bmRlciB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UuIFdoZXRoZXIgaXQncyB0YWtpbmcgYSBsb29rIGF0IGhvdyBGb3Jnb3R0ZW4gaXMgbWFkZSBvciBjcmVhdGluZyBhIG5ldyBzcGlub2ZmIG9mIHRoZSBvcmlnaW5hbCBzdG9yZSwgdGhlIGNvZGUgaXMgZnJlZWx5IGF2YWlsYWJsZSBvbiBHaXRIdWIuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBub1NoYWRvdz17IHRydWUgfVxuICAgICAgICAgICAgaW1hZ2U9eyBvcGVuU291cmNlRmVhdHVyZSB9XG4gICAgICAgICAgICBzdHJpY3RQYWRkaW5nXG4gICAgICAgICAgICBpbWFnZU9uVG9wXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiQ2hhcmFjdGVycyBmcm9tIHRoZSBjb21tdW5pdHkgdG8gZmFsbCBpbiBsb3ZlIHdpdGguXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkZvcmdvdHRlbiBicmluZ3MgbmV3IGNoYXJhY3RlcnMgdGhhdCB5b3UgYWxyZWFkeSBrbm93IGFuZCBsb3ZlIHRvIHRoZSB0YWJsZS4gVGhlIHZlbmVyYWJsZSBBbGljZSBBbmdlbCBmcm9tIEJlbmN5IGFuZCB0aGUgSW5rIE1hY2hpbmUgYW5kIFNheW9uaWthIGZyb20gdGhlIFNheW9uaWthIHRlYW0gam9pbiBmb3JjZXMgdG8gaGVscCBzb2x2ZSB0aGUgbXlzdGVyeS5cIlxuICAgICAgICAgICAgY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9XG4gICAgICAgICAgICBpbWFnZT17IGNoYXJhY3RlcnNGZWF0dXJlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIGltYWdlT25Ub3BcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJBIG1vZCBkZXZlbG9wZXJzIHdpbGwgYWJzb2x1dGVseSBsb3ZlKCkuXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkRldmVsb3BlcnMgd2lsbCBsb3ZlIHRpbmtlcmluZyBhcm91bmQgd2l0aCBGb3Jnb3R0ZW4ncyBjb2RlLiBGb3Jnb3R0ZW4gc3VwcG9ydHMgU2F5b25pa2EncyBRdWlja1N0YXJ0IHNjcmlwdHMgZm9yIFRyYXZpcyBDSSBkZXBsb3ltZW50IGFuZCBpcyBvbmUgb2YgdGhlIGZpcnN0IHByb2plY3RzIHRvIGhhdmUgYnVpbGQgYW5kIHJ1biBzdXBwb3J0IHJpZ2h0IGluc2lkZSBvZiBYY29kZSwgbWVhbmluZyBkZXZlbG9wZXJzIGNhbiB0YWtlIGFkdmFudGFnZSBvZiBYY29kZSdzIGFkdmFuY2VkIGZlYXR1cmVzIHdoaWxlIHdvcmtpbmcgd2l0aCBGb3Jnb3R0ZW4uXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBpbWFnZT17IGRldmVsb3BlcnNGZWF0dXJlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3R0ZW5QYWdlXG4iXX0= */"));
var pageGridContainer =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])(Object(_utils_breakpoints__WEBPACK_IMPORTED_MODULE_7__["breakpoints"])({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 96,
  width: "100%",
  height: "100%",
  paddingBottom: 64
}), "label:pageGridContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzBCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBCYXNpY0NhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNpY0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgZmFjZXBhaW50IGZyb20gJ2ZhY2VwYWludCc7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2JyZWFrcG9pbnRzJ1xuXG5cbmltcG9ydCBmb3Jnb3R0ZW5IZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4taGVyb19hbHQucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItYmcucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItbG9nby5wbmcnO1xuaW1wb3J0IGZvcmdvdHRlbkxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2ZvcmdvdHRlbi1sb2dvLnBuZyc7XG5pbXBvcnQgb3BlblNvdXJjZUZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2YxLnBuZyc7XG5pbXBvcnQgYWxpY2VPU0ZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2YyLnBuZyc7XG5pbXBvcnQgY2hhcmFjdGVyc0ZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2YzLnBuZyc7XG5pbXBvcnQgZGV2ZWxvcGVyc0ZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2Y0LmpwZyc7XG5cblxuY29uc3QgcGFnZUNvbnRlbnRTdHlsZXMgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBwYWRkaW5nVG9wOiA2NCxcbiAgcGFkZGluZ0JvdHRvbTogNjQsXG4gIHBhZGRpbmdMZWZ0OiBbMjQsIDQ4LCAxODhdLFxuICBwYWRkaW5nUmlnaHQ6IFsyNCwgNDgsIDE4OF0sXG4gICcmIGEnOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcIiNmZmNjMjJcIlxuICB9LFxuICAnJiBhOmhvdmVyJzoge1xuICAgIGNvbG9yOiBcIiNmZmRiNjRcIlxuICB9XG59KSlcblxuY29uc3QgcGFnZUdyaWRDb250YWluZXIgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBkaXNwbGF5OiBcImdyaWRcIixcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wiMWZyXCIsIFwiMWZyXCIsIFwicmVwZWF0KDIsIDFmcilcIl0sXG4gIGdyaWRBdXRvUm93czogXCIxZnJcIixcbiAgZ3JpZENvbHVtbkdhcDogMjQsXG4gIGdyaWRSb3dHYXA6IDk2LFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuXG59KSlcblxuY29uc3QgRm9yZ290dGVuUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkZvcmdvdHRlblwiPlxuICAgICAgPE1pbmlOYXZiYXJcbiAgICAgICAgdGl0bGU9XCJGb3Jnb3R0ZW5cIlxuICAgICAgICBpY29uPXsgZm9yZ290dGVuTG9nbyB9XG4gICAgICAgIGJ1dHRvblRleHQ9XCJUcnkgZGVtb1wiXG4gICAgICAgIGJ1dHRvbkxpbms9XCJodHRwczovL2dpdGh1Yi5jb20vUHJvamVjdEFsaWNlRGV2L3N0ZWluL3JlbGVhc2VzL2xhdGVzdFwiXG4gICAgICAgPlxuICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RzL3BvbGljaWVzXCI+XG4gICAgICAgICAgIDxhPlBvbGljaWVzPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9qZWN0YWxpY2VkZXYvc3RlaW5cIj5cbiAgICAgICAgICAgPGE+U291cmNlPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgIDwvTWluaU5hdmJhcj5cbiAgICAgIDxGcm9udHBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPVwiRG9uJ3QgZm9yZ2V0IHdoYXQgaGFwcGVuZWQuXCJcbiAgICAgICAgc3VidGl0bGU9XCJTZXQgYWZ0ZXIgdGhlIGV2ZW50cyBvZiBEb2tpIERva2kgTGl0ZXJhdHVyZSBDbHViISwgdGhlIExpdGVyYXR1cmUgQ2x1YiB0YWtlcyBhIGhvcnJpZmljIHR1cm4gZm9yIHRoZSB3b3JzdCBpbiBGb3Jnb3R0ZW4uIEZpbmQgb3V0IHdoYXQgaGFwcGVuZWQgdG8gTW9uaWthIGJlZm9yZSBpdCdzIHRvbyBsYXRlLlwiXG4gICAgICAgIGNhbGxUb0FjdGlvblRleHQ9XCJcIlxuICAgICAgICBjYWxsVG9BY3Rpb25MaW5rPVwiXCJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlTG9jYXRpb249eyBmb3Jnb3R0ZW5IZXJvIH1cbiAgICAgICAgZG9udFNob3dDYWxsVG9BY3Rpb25cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNzcz17IHBhZ2VDb250ZW50U3R5bGVzIH0+XG4gICAgICAgIDxkaXYgY3NzPXsgcGFnZUdyaWRDb250YWluZXIgfT5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkFuIGV4cGVyaWVuY2UgeW91IGFscmVhZHkga25vdyBhbmQgbG92ZS5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRm9yZ290dGVuIGlzIGJ1aWx0IG9uIHRvcCBvZiBBbGljZU9TLCBvdXIgcm9idXN0IGFuZCBldm9sdmluZyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgaW50ZXJhY3RpdmUgdmlzdWFsIG5vdmVsIGV4cGVyaWVuY2VzIHdpdGggb3BlcmF0aW5nIHN5c3RlbS1saWtlIGZlYXR1cmVzIHN1Y2ggYXMgbm90aWZpY2F0aW9ucyBhbmQgc2V0dXAgYXNzaXN0YW50cy4gQWxpY2VPUyBwcm92aWRlcyBhIG5ldyBsZXZlbCBvZiBpbnRlcmFjdGl2aXR5IHRvIHRoZSB0YWJsZSwgbWFraW5nIHlvdSBmZWVsIG1vcmUgaW1tZXJzZWQuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBub1NoYWRvdz17IHRydWUgfVxuICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgaW1hZ2UgPSB7IGFsaWNlT1NGZWF0dXJlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJDb21wbGV0ZWx5IG9wZW4uIFJpZ2h0IGRvd24gdG8gdGhlIHRoZSBzb3VyY2UgY29kZS5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRm9yZ290dGVuIGlzIGZyZWUgYW5kIG9wZW4tc291cmNlIHNvZnR3YXJlLCBsaWNlbnNlZCB1bmRlciB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UuIFdoZXRoZXIgaXQncyB0YWtpbmcgYSBsb29rIGF0IGhvdyBGb3Jnb3R0ZW4gaXMgbWFkZSBvciBjcmVhdGluZyBhIG5ldyBzcGlub2ZmIG9mIHRoZSBvcmlnaW5hbCBzdG9yZSwgdGhlIGNvZGUgaXMgZnJlZWx5IGF2YWlsYWJsZSBvbiBHaXRIdWIuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBub1NoYWRvdz17IHRydWUgfVxuICAgICAgICAgICAgaW1hZ2U9eyBvcGVuU291cmNlRmVhdHVyZSB9XG4gICAgICAgICAgICBzdHJpY3RQYWRkaW5nXG4gICAgICAgICAgICBpbWFnZU9uVG9wXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiQ2hhcmFjdGVycyBmcm9tIHRoZSBjb21tdW5pdHkgdG8gZmFsbCBpbiBsb3ZlIHdpdGguXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkZvcmdvdHRlbiBicmluZ3MgbmV3IGNoYXJhY3RlcnMgdGhhdCB5b3UgYWxyZWFkeSBrbm93IGFuZCBsb3ZlIHRvIHRoZSB0YWJsZS4gVGhlIHZlbmVyYWJsZSBBbGljZSBBbmdlbCBmcm9tIEJlbmN5IGFuZCB0aGUgSW5rIE1hY2hpbmUgYW5kIFNheW9uaWthIGZyb20gdGhlIFNheW9uaWthIHRlYW0gam9pbiBmb3JjZXMgdG8gaGVscCBzb2x2ZSB0aGUgbXlzdGVyeS5cIlxuICAgICAgICAgICAgY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9XG4gICAgICAgICAgICBpbWFnZT17IGNoYXJhY3RlcnNGZWF0dXJlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIGltYWdlT25Ub3BcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJBIG1vZCBkZXZlbG9wZXJzIHdpbGwgYWJzb2x1dGVseSBsb3ZlKCkuXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkRldmVsb3BlcnMgd2lsbCBsb3ZlIHRpbmtlcmluZyBhcm91bmQgd2l0aCBGb3Jnb3R0ZW4ncyBjb2RlLiBGb3Jnb3R0ZW4gc3VwcG9ydHMgU2F5b25pa2EncyBRdWlja1N0YXJ0IHNjcmlwdHMgZm9yIFRyYXZpcyBDSSBkZXBsb3ltZW50IGFuZCBpcyBvbmUgb2YgdGhlIGZpcnN0IHByb2plY3RzIHRvIGhhdmUgYnVpbGQgYW5kIHJ1biBzdXBwb3J0IHJpZ2h0IGluc2lkZSBvZiBYY29kZSwgbWVhbmluZyBkZXZlbG9wZXJzIGNhbiB0YWtlIGFkdmFudGFnZSBvZiBYY29kZSdzIGFkdmFuY2VkIGZlYXR1cmVzIHdoaWxlIHdvcmtpbmcgd2l0aCBGb3Jnb3R0ZW4uXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBpbWFnZT17IGRldmVsb3BlcnNGZWF0dXJlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3R0ZW5QYWdlXG4iXX0= */"));

var ForgottenPage = function ForgottenPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Forgotten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_MiniNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Forgotten",
    icon: _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    buttonText: "Try demo",
    buttonLink: "https://github.com/ProjectAliceDev/stein/releases/latest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/mods/policies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Policies")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://github.com/projectalicedev/stein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Source"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Don't forget what happened.",
    subtitle: "Set after the events of Doki Doki Literature Club!, the Literature Club takes a horrific turn for the worst in Forgotten. Find out what happened to Monika before it's too late.",
    callToActionText: "",
    callToActionLink: "",
    backgroundImageLocation: _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    dontShowCallToAction: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: pageContentStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: pageGridContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "An experience you already know and love.",
    cardDescription: "Forgotten is built on top of AliceOS, our robust and evolving framework for developing interactive visual novel experiences with operating system-like features such as notifications and setup assistants. AliceOS provides a new level of interactivity to the table, making you feel more immersed.",
    color: "#fafafa",
    noShadow: true,
    strictPadding: true,
    image: _assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Completely open. Right down to the the source code.",
    cardDescription: "Forgotten is free and open-source software, licensed under the GNU General Public License. Whether it's taking a look at how Forgotten is made or creating a new spinoff of the original store, the code is freely available on GitHub.",
    color: "#fafafa",
    noShadow: true,
    image: _assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    strictPadding: true,
    imageOnTop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Characters from the community to fall in love with.",
    cardDescription: "Forgotten brings new characters that you already know and love to the table. The venerable Alice Angel from Bency and the Ink Machine and Sayonika from the Sayonika team join forces to help solve the mystery.",
    color: "#fafafa",
    noShadow: true,
    image: _assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    strictPadding: true,
    imageOnTop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "A mod developers will absolutely love().",
    cardDescription: "Developers will love tinkering around with Forgotten's code. Forgotten supports Sayonika's QuickStart scripts for Travis CI deployment and is one of the first projects to have build and run support right inside of Xcode, meaning developers can take advantage of Xcode's advanced features while working with Forgotten.",
    color: "#fafafa",
    image: _assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    strictPadding: true,
    noShadow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgottenPage);

/***/ })

})
//# sourceMappingURL=forgotten.js.a80aba0d6511f9b5fc6e.hot-update.js.map