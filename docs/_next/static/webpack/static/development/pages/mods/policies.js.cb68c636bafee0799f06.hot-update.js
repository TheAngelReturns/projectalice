webpackHotUpdate("static/development/pages/mods/policies.js",{

/***/ "./components/BasicCard.tsx":
/*!**********************************!*\
  !*** ./components/BasicCard.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/components/BasicCard.tsx";


/** @jsx jsx */



var basicCardRootStyles = function basicCardRootStyles(color, darkText, noShadow) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])({
      backgroundColor: color,
      color: darkText ? "white" : "black",
      padding: 32,
      borderRadius: 6,
      boxShadow: noShadow ? "none" : "0 4px 8px #666",
      textAlign: "center",
      transition: "box-shadow 0.10s",
      display: "inline-flex",
      flexDirection: "column",
      position: "relative",
      alignSelf: "center",
      height: "100%",
      maxHeight: 500,
      marginBottom: 16,
      '&:hover': {
        boxShadow: noShadow ? "none" : "0 8px 16px #666"
      }
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlEiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wcm9qZWN0YWxpY2UvY29tcG9uZW50cy9CYXNpY0NhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgQmFzaWNDYXJkUHJvcHMge1xuXHR0aXRsZTogc3RyaW5nXG5cdGNhcmREZXNjcmlwdGlvbjogc3RyaW5nXG5cdGNvbG9yPzogc3RyaW5nXG5cdGRhcmtUZXh0PzogYm9vbGVhblxuXHRsaW5rPzogc3RyaW5nXG5cdGltYWdlPzogc3RyaW5nXG5cdG5vU2hhZG93PzogYm9vbGVhbjtcbn1cblxuY29uc3QgYmFzaWNDYXJkUm9vdFN0eWxlcyA9IChjb2xvcjogc3RyaW5nLCBkYXJrVGV4dDogYm9vbGVhbiB8IHVuZGVmaW5lZCwgbm9TaGFkb3c6IGJvb2xlYW4gfCB1bmRlZmluZWQpID0+IHtcblx0cmV0dXJuIGNzcyh7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcixcblx0XHRjb2xvcjogZGFya1RleHQ/IFwid2hpdGVcIjogXCJibGFja1wiLFxuXHRcdHBhZGRpbmc6IDMyLFxuXHRcdGJvcmRlclJhZGl1czogNixcblx0XHRib3hTaGFkb3c6IG5vU2hhZG93PyBcIm5vbmVcIjogXCIwIDRweCA4cHggIzY2NlwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImJveC1zaGFkb3cgMC4xMHNcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogNTAwLFxuXHRcdG1hcmdpbkJvdHRvbTogMTYsXG5cblxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA4cHggMTZweCAjNjY2XCIsXG5cdFx0fVxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyA9IGNzcyh7XG5cdHBhZGRpbmdMZWZ0OiAyNCxcblx0cGFkZGluZ1JpZ2h0OiAyNCxcblx0cGFkZGluZ0JvdHRvbTogMjQsXG5cdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxufSlcblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgPSBjc3Moe1xuXHR3aWR0aDogXCIxMDAlXCIsXG5cdGhlaWdodDogXCJhdXRvXCIsXG5cdG1heEhlaWdodDogMjUwLFxuXHRtYXJnaW5Cb3R0b206IDgsXG5cdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblxufSlcblxuY29uc3QgYmFzaWNDYXJkVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdGZvbnRTaXplOiAnMS43NWVtJyxcblx0bWFyZ2luQm90dG9tOiAwLFxuXHRtYXJnaW5Ub3A6IDAsXG5cdGZsZXhHcm93OiAxLFxufSlcblxuY29uc3QgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgPSBjc3Moe1xuXHRtYXJnaW5Ub3A6IDQsXG5cdHRleHRBbGlnbjogXCJsZWZ0XCIsXG59KVxuXG5jb25zdCBCYXNpY0NhcmQ6IEZDPEJhc2ljQ2FyZFByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9eyB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0+XG5cdFx0PExpbmsgaHJlZj17IHByb3BzLmxpbmsgfT5cblx0XHRcdDxhIHN0eWxlPSB7IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH0gfT5cblx0XHRcdFx0PGRpdiBpZD1cInBhLWJhc2ljLWNhcmRcIiBjc3M9eyBiYXNpY0NhcmRSb290U3R5bGVzKHByb3BzLmNvbG9yPyBwcm9wcy5jb2xvcjogXCIjZmZmXCIsIHByb3BzLmRhcmtUZXh0LCBwcm9wcy5ub1NoYWRvdykgfT5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPSB7IHsgZmxleEdyb3c6IDEsIH0gfT5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZFRpdGxlU3R5bGVzIH0+eyBwcm9wcy50aXRsZSB9PC9wPlxuXHRcdFx0XHRcdFx0PHAgY3NzPXsgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgfT57IHByb3BzLmNhcmREZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2U/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */")
  );
};

var basicCardImageContainerStyles =  false ? undefined : {
  name: "dcbvm8-basicCardImageContainerStyles",
  styles: "padding-left:24px;padding-right:24px;padding-bottom:24px;position:relative;label:basicCardImageContainerStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q3NDIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2ljQ2FyZFJvb3RTdHlsZXMgPSAoY29sb3I6IHN0cmluZywgZGFya1RleHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQsIG5vU2hhZG93OiBib29sZWFuIHwgdW5kZWZpbmVkKSA9PiB7XG5cdHJldHVybiBjc3Moe1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3IsXG5cdFx0Y29sb3I6IGRhcmtUZXh0PyBcIndoaXRlXCI6IFwiYmxhY2tcIixcblx0XHRwYWRkaW5nOiAzMixcblx0XHRib3JkZXJSYWRpdXM6IDYsXG5cdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA0cHggOHB4ICM2NjZcIixcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0dHJhbnNpdGlvbjogXCJib3gtc2hhZG93IDAuMTBzXCIsXG5cdFx0ZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRtYXhIZWlnaHQ6IDUwMCxcblx0XHRtYXJnaW5Cb3R0b206IDE2LFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSBjc3Moe1xuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdCb3R0b206IDI0LFxuXHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5jYXJkRGVzY3JpcHRpb24gfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hPlxuXHRcdDwvTGluaz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0NhcmQ7Il19 */"
};
var basicCardImageStyles =  false ? undefined : {
  name: "afsv2z-basicCardImageStyles",
  styles: "width:100%;height:auto;max-height:250px;margin-bottom:8px;align-self:center;label:basicCardImageStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2ljQ2FyZFJvb3RTdHlsZXMgPSAoY29sb3I6IHN0cmluZywgZGFya1RleHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQsIG5vU2hhZG93OiBib29sZWFuIHwgdW5kZWZpbmVkKSA9PiB7XG5cdHJldHVybiBjc3Moe1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3IsXG5cdFx0Y29sb3I6IGRhcmtUZXh0PyBcIndoaXRlXCI6IFwiYmxhY2tcIixcblx0XHRwYWRkaW5nOiAzMixcblx0XHRib3JkZXJSYWRpdXM6IDYsXG5cdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA0cHggOHB4ICM2NjZcIixcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0dHJhbnNpdGlvbjogXCJib3gtc2hhZG93IDAuMTBzXCIsXG5cdFx0ZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRtYXhIZWlnaHQ6IDUwMCxcblx0XHRtYXJnaW5Cb3R0b206IDE2LFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSBjc3Moe1xuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdCb3R0b206IDI0LFxuXHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5jYXJkRGVzY3JpcHRpb24gfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hPlxuXHRcdDwvTGluaz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0NhcmQ7Il19 */"
};
var basicCardTitleStyles =  false ? undefined : {
  name: "dg91ay-basicCardTitleStyles",
  styles: "font-weight:700;font-size:1.75em;margin-bottom:0;margin-top:0;flex-grow:1;label:basicCardTitleStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RDZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2ljQ2FyZFJvb3RTdHlsZXMgPSAoY29sb3I6IHN0cmluZywgZGFya1RleHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQsIG5vU2hhZG93OiBib29sZWFuIHwgdW5kZWZpbmVkKSA9PiB7XG5cdHJldHVybiBjc3Moe1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3IsXG5cdFx0Y29sb3I6IGRhcmtUZXh0PyBcIndoaXRlXCI6IFwiYmxhY2tcIixcblx0XHRwYWRkaW5nOiAzMixcblx0XHRib3JkZXJSYWRpdXM6IDYsXG5cdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA0cHggOHB4ICM2NjZcIixcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0dHJhbnNpdGlvbjogXCJib3gtc2hhZG93IDAuMTBzXCIsXG5cdFx0ZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRtYXhIZWlnaHQ6IDUwMCxcblx0XHRtYXJnaW5Cb3R0b206IDE2LFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSBjc3Moe1xuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdCb3R0b206IDI0LFxuXHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5jYXJkRGVzY3JpcHRpb24gfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hPlxuXHRcdDwvTGluaz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0NhcmQ7Il19 */"
};
var basicCardDescriptionStyles =  false ? undefined : {
  name: "u2v68c-basicCardDescriptionStyles",
  styles: "margin-top:4px;text-align:left;label:basicCardDescriptionStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW1DIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2ljQ2FyZFJvb3RTdHlsZXMgPSAoY29sb3I6IHN0cmluZywgZGFya1RleHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQsIG5vU2hhZG93OiBib29sZWFuIHwgdW5kZWZpbmVkKSA9PiB7XG5cdHJldHVybiBjc3Moe1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3IsXG5cdFx0Y29sb3I6IGRhcmtUZXh0PyBcIndoaXRlXCI6IFwiYmxhY2tcIixcblx0XHRwYWRkaW5nOiAzMixcblx0XHRib3JkZXJSYWRpdXM6IDYsXG5cdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA0cHggOHB4ICM2NjZcIixcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0dHJhbnNpdGlvbjogXCJib3gtc2hhZG93IDAuMTBzXCIsXG5cdFx0ZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRtYXhIZWlnaHQ6IDUwMCxcblx0XHRtYXJnaW5Cb3R0b206IDE2LFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSBjc3Moe1xuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdCb3R0b206IDI0LFxuXHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5jYXJkRGVzY3JpcHRpb24gfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlPyA8ZGl2IGNzcz17IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzIH0+PGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGNzcz17IGJhc2ljQ2FyZEltYWdlU3R5bGVzIH0vPjwvZGl2PjogbnVsbCB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hPlxuXHRcdDwvTGluaz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0NhcmQ7Il19 */"
};

var BasicCard = function BasicCard(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      width: "100%",
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    style: {
      textDecoration: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    id: "pa-basic-card",
    css: basicCardRootStyles(props.color ? props.color : "#fff", props.darkText, props.noShadow),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      flexGrow: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    css: basicCardTitleStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, props.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    css: basicCardDescriptionStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, props.cardDescription)), props.image ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: basicCardImageContainerStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: props.image,
    css: basicCardImageStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })) : null))));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicCard);

/***/ })

})
//# sourceMappingURL=policies.js.cb68c636bafee0799f06.hot-update.js.map