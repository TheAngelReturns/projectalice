webpackHotUpdate("static/development/pages/mods/forgotten.js",{

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
      '&:hover': {
        boxShadow: noShadow ? "none" : "0 8px 16px #666"
      }
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQlEiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wcm9qZWN0YWxpY2UvY29tcG9uZW50cy9CYXNpY0NhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgQmFzaWNDYXJkUHJvcHMge1xuXHR0aXRsZTogc3RyaW5nXG5cdGNhcmREZXNjcmlwdGlvbjogc3RyaW5nXG5cdGNvbG9yPzogc3RyaW5nXG5cdGRhcmtUZXh0PzogYm9vbGVhblxuXHRsaW5rPzogc3RyaW5nXG5cdGltYWdlPzogc3RyaW5nXG5cdG5vU2hhZG93PzogYm9vbGVhbjtcblx0aW1hZ2VPblRvcD86IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2ljQ2FyZFJvb3RTdHlsZXMgPSAoY29sb3I6IHN0cmluZywgZGFya1RleHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQsIG5vU2hhZG93OiBib29sZWFuIHwgdW5kZWZpbmVkKSA9PiB7XG5cdHJldHVybiBjc3Moe1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3IsXG5cdFx0Y29sb3I6IGRhcmtUZXh0PyBcIndoaXRlXCI6IFwiYmxhY2tcIixcblx0XHRwYWRkaW5nOiAzMixcblx0XHRib3JkZXJSYWRpdXM6IDYsXG5cdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA0cHggOHB4ICM2NjZcIixcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0dHJhbnNpdGlvbjogXCJib3gtc2hhZG93IDAuMTBzXCIsXG5cdFx0ZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcblx0XHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRtYXhIZWlnaHQ6IDUwMCxcblxuXG5cdFx0JyY6aG92ZXInOiB7XG5cdFx0XHRib3hTaGFkb3c6IG5vU2hhZG93PyBcIm5vbmVcIjogXCIwIDhweCAxNnB4ICM2NjZcIixcblx0XHR9XG5cdH0pXG59XG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlQ29udGFpbmVyU3R5bGVzID0gY3NzKHtcblx0cGFkZGluZ0xlZnQ6IDI0LFxuXHRwYWRkaW5nUmlnaHQ6IDI0LFxuXHRwYWRkaW5nQm90dG9tOiAyNCxcblx0cG9zaXRpb246IFwicmVsYXRpdmVcIlxuXG59KVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZVN0eWxlcyA9IGNzcyh7XG5cdHdpZHRoOiBcIjEwMCVcIixcblx0aGVpZ2h0OiBcImF1dG9cIixcblx0bWF4SGVpZ2h0OiAyNTAsXG5cdG1hcmdpbkJvdHRvbTogOCxcblx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXG59KVxuXG5jb25zdCBiYXNpY0NhcmRUaXRsZVN0eWxlcyA9IGNzcyh7XG5cdGZvbnRXZWlnaHQ6IDcwMCxcblx0Zm9udFNpemU6ICcxLjc1ZW0nLFxuXHRtYXJnaW5Cb3R0b206IDAsXG5cdG1hcmdpblRvcDogMCxcblx0ZmxleEdyb3c6IDEsXG59KVxuXG5jb25zdCBiYXNpY0NhcmREZXNjcmlwdGlvblN0eWxlcyA9IGNzcyh7XG5cdG1hcmdpblRvcDogNCxcblx0dGV4dEFsaWduOiBcImxlZnRcIixcbn0pXG5cbmNvbnN0IEJhc2ljQ2FyZDogRkM8QmFzaWNDYXJkUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBzdHlsZT17IHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH0gfT5cblx0XHQ8TGluayBocmVmPXsgcHJvcHMubGluayB9PlxuXHRcdFx0PGEgc3R5bGU9IHsgeyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfSB9PlxuXHRcdFx0XHQ8ZGl2IGlkPVwicGEtYmFzaWMtY2FyZFwiIGNzcz17IGJhc2ljQ2FyZFJvb3RTdHlsZXMocHJvcHMuY29sb3I/IHByb3BzLmNvbG9yOiBcIiNmZmZcIiwgcHJvcHMuZGFya1RleHQsIHByb3BzLm5vU2hhZG93KSB9PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2UgJiYgcHJvcHMuaW1hZ2VPblRvcD8gPGRpdiBjc3M9eyBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyB9PjxpbWcgc3JjPXsgcHJvcHMuaW1hZ2UgfSBjc3M9eyBiYXNpY0NhcmRJbWFnZVN0eWxlcyB9Lz48L2Rpdj46IG51bGwgfVxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9IHsgeyBmbGV4R3JvdzogMSwgfSB9PlxuXHRcdFx0XHRcdFx0PHAgY3NzPXsgYmFzaWNDYXJkVGl0bGVTdHlsZXMgfT57IHByb3BzLnRpdGxlIH08L3A+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmREZXNjcmlwdGlvblN0eWxlcyB9PnsgcHJvcHMuY2FyZERlc2NyaXB0aW9uIH08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eyBwcm9wcy5pbWFnZT8gPGRpdiBjc3M9eyBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyB9PjxpbWcgc3JjPXsgcHJvcHMuaW1hZ2UgfSBjc3M9eyBiYXNpY0NhcmRJbWFnZVN0eWxlcyB9Lz48L2Rpdj46IG51bGwgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvYT5cblx0XHQ8L0xpbms+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNDYXJkOyJdfQ== */")
  );
};

var basicCardImageContainerStyles =  false ? undefined : {
  name: "dcbvm8-basicCardImageContainerStyles",
  styles: "padding-left:24px;padding-right:24px;padding-bottom:24px;position:relative;label:basicCardImageContainerStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q3NDIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG5cdGltYWdlT25Ub3A/OiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNpY0NhcmRSb290U3R5bGVzID0gKGNvbG9yOiBzdHJpbmcsIGRhcmtUZXh0OiBib29sZWFuIHwgdW5kZWZpbmVkLCBub1NoYWRvdzogYm9vbGVhbiB8IHVuZGVmaW5lZCkgPT4ge1xuXHRyZXR1cm4gY3NzKHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuXHRcdGNvbG9yOiBkYXJrVGV4dD8gXCJ3aGl0ZVwiOiBcImJsYWNrXCIsXG5cdFx0cGFkZGluZzogMzIsXG5cdFx0Ym9yZGVyUmFkaXVzOiA2LFxuXHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgNHB4IDhweCAjNjY2XCIsXG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdHRyYW5zaXRpb246IFwiYm94LXNoYWRvdyAwLjEwc1wiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWF4SGVpZ2h0OiA1MDAsXG5cblxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA4cHggMTZweCAjNjY2XCIsXG5cdFx0fVxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyA9IGNzcyh7XG5cdHBhZGRpbmdMZWZ0OiAyNCxcblx0cGFkZGluZ1JpZ2h0OiAyNCxcblx0cGFkZGluZ0JvdHRvbTogMjQsXG5cdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxufSlcblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgPSBjc3Moe1xuXHR3aWR0aDogXCIxMDAlXCIsXG5cdGhlaWdodDogXCJhdXRvXCIsXG5cdG1heEhlaWdodDogMjUwLFxuXHRtYXJnaW5Cb3R0b206IDgsXG5cdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblxufSlcblxuY29uc3QgYmFzaWNDYXJkVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdGZvbnRTaXplOiAnMS43NWVtJyxcblx0bWFyZ2luQm90dG9tOiAwLFxuXHRtYXJnaW5Ub3A6IDAsXG5cdGZsZXhHcm93OiAxLFxufSlcblxuY29uc3QgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgPSBjc3Moe1xuXHRtYXJnaW5Ub3A6IDQsXG5cdHRleHRBbGlnbjogXCJsZWZ0XCIsXG59KVxuXG5jb25zdCBCYXNpY0NhcmQ6IEZDPEJhc2ljQ2FyZFByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9eyB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0+XG5cdFx0PExpbmsgaHJlZj17IHByb3BzLmxpbmsgfT5cblx0XHRcdDxhIHN0eWxlPSB7IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH0gfT5cblx0XHRcdFx0PGRpdiBpZD1cInBhLWJhc2ljLWNhcmRcIiBjc3M9eyBiYXNpY0NhcmRSb290U3R5bGVzKHByb3BzLmNvbG9yPyBwcm9wcy5jb2xvcjogXCIjZmZmXCIsIHByb3BzLmRhcmtUZXh0LCBwcm9wcy5ub1NoYWRvdykgfT5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlICYmIHByb3BzLmltYWdlT25Ub3A/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPSB7IHsgZmxleEdyb3c6IDEsIH0gfT5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZFRpdGxlU3R5bGVzIH0+eyBwcm9wcy50aXRsZSB9PC9wPlxuXHRcdFx0XHRcdFx0PHAgY3NzPXsgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgfT57IHByb3BzLmNhcmREZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2U/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */"
};
var basicCardImageStyles =  false ? undefined : {
  name: "afsv2z-basicCardImageStyles",
  styles: "width:100%;height:auto;max-height:250px;margin-bottom:8px;align-self:center;label:basicCardImageStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG5cdGltYWdlT25Ub3A/OiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNpY0NhcmRSb290U3R5bGVzID0gKGNvbG9yOiBzdHJpbmcsIGRhcmtUZXh0OiBib29sZWFuIHwgdW5kZWZpbmVkLCBub1NoYWRvdzogYm9vbGVhbiB8IHVuZGVmaW5lZCkgPT4ge1xuXHRyZXR1cm4gY3NzKHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuXHRcdGNvbG9yOiBkYXJrVGV4dD8gXCJ3aGl0ZVwiOiBcImJsYWNrXCIsXG5cdFx0cGFkZGluZzogMzIsXG5cdFx0Ym9yZGVyUmFkaXVzOiA2LFxuXHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgNHB4IDhweCAjNjY2XCIsXG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdHRyYW5zaXRpb246IFwiYm94LXNoYWRvdyAwLjEwc1wiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWF4SGVpZ2h0OiA1MDAsXG5cblxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA4cHggMTZweCAjNjY2XCIsXG5cdFx0fVxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyA9IGNzcyh7XG5cdHBhZGRpbmdMZWZ0OiAyNCxcblx0cGFkZGluZ1JpZ2h0OiAyNCxcblx0cGFkZGluZ0JvdHRvbTogMjQsXG5cdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxufSlcblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgPSBjc3Moe1xuXHR3aWR0aDogXCIxMDAlXCIsXG5cdGhlaWdodDogXCJhdXRvXCIsXG5cdG1heEhlaWdodDogMjUwLFxuXHRtYXJnaW5Cb3R0b206IDgsXG5cdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblxufSlcblxuY29uc3QgYmFzaWNDYXJkVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdGZvbnRTaXplOiAnMS43NWVtJyxcblx0bWFyZ2luQm90dG9tOiAwLFxuXHRtYXJnaW5Ub3A6IDAsXG5cdGZsZXhHcm93OiAxLFxufSlcblxuY29uc3QgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgPSBjc3Moe1xuXHRtYXJnaW5Ub3A6IDQsXG5cdHRleHRBbGlnbjogXCJsZWZ0XCIsXG59KVxuXG5jb25zdCBCYXNpY0NhcmQ6IEZDPEJhc2ljQ2FyZFByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9eyB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0+XG5cdFx0PExpbmsgaHJlZj17IHByb3BzLmxpbmsgfT5cblx0XHRcdDxhIHN0eWxlPSB7IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH0gfT5cblx0XHRcdFx0PGRpdiBpZD1cInBhLWJhc2ljLWNhcmRcIiBjc3M9eyBiYXNpY0NhcmRSb290U3R5bGVzKHByb3BzLmNvbG9yPyBwcm9wcy5jb2xvcjogXCIjZmZmXCIsIHByb3BzLmRhcmtUZXh0LCBwcm9wcy5ub1NoYWRvdykgfT5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlICYmIHByb3BzLmltYWdlT25Ub3A/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPSB7IHsgZmxleEdyb3c6IDEsIH0gfT5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZFRpdGxlU3R5bGVzIH0+eyBwcm9wcy50aXRsZSB9PC9wPlxuXHRcdFx0XHRcdFx0PHAgY3NzPXsgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgfT57IHByb3BzLmNhcmREZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2U/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */"
};
var basicCardTitleStyles =  false ? undefined : {
  name: "dg91ay-basicCardTitleStyles",
  styles: "font-weight:700;font-size:1.75em;margin-bottom:0;margin-top:0;flex-grow:1;label:basicCardTitleStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RDZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG5cdGltYWdlT25Ub3A/OiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNpY0NhcmRSb290U3R5bGVzID0gKGNvbG9yOiBzdHJpbmcsIGRhcmtUZXh0OiBib29sZWFuIHwgdW5kZWZpbmVkLCBub1NoYWRvdzogYm9vbGVhbiB8IHVuZGVmaW5lZCkgPT4ge1xuXHRyZXR1cm4gY3NzKHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuXHRcdGNvbG9yOiBkYXJrVGV4dD8gXCJ3aGl0ZVwiOiBcImJsYWNrXCIsXG5cdFx0cGFkZGluZzogMzIsXG5cdFx0Ym9yZGVyUmFkaXVzOiA2LFxuXHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgNHB4IDhweCAjNjY2XCIsXG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdHRyYW5zaXRpb246IFwiYm94LXNoYWRvdyAwLjEwc1wiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWF4SGVpZ2h0OiA1MDAsXG5cblxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA4cHggMTZweCAjNjY2XCIsXG5cdFx0fVxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyA9IGNzcyh7XG5cdHBhZGRpbmdMZWZ0OiAyNCxcblx0cGFkZGluZ1JpZ2h0OiAyNCxcblx0cGFkZGluZ0JvdHRvbTogMjQsXG5cdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxufSlcblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgPSBjc3Moe1xuXHR3aWR0aDogXCIxMDAlXCIsXG5cdGhlaWdodDogXCJhdXRvXCIsXG5cdG1heEhlaWdodDogMjUwLFxuXHRtYXJnaW5Cb3R0b206IDgsXG5cdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblxufSlcblxuY29uc3QgYmFzaWNDYXJkVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdGZvbnRTaXplOiAnMS43NWVtJyxcblx0bWFyZ2luQm90dG9tOiAwLFxuXHRtYXJnaW5Ub3A6IDAsXG5cdGZsZXhHcm93OiAxLFxufSlcblxuY29uc3QgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgPSBjc3Moe1xuXHRtYXJnaW5Ub3A6IDQsXG5cdHRleHRBbGlnbjogXCJsZWZ0XCIsXG59KVxuXG5jb25zdCBCYXNpY0NhcmQ6IEZDPEJhc2ljQ2FyZFByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9eyB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0+XG5cdFx0PExpbmsgaHJlZj17IHByb3BzLmxpbmsgfT5cblx0XHRcdDxhIHN0eWxlPSB7IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH0gfT5cblx0XHRcdFx0PGRpdiBpZD1cInBhLWJhc2ljLWNhcmRcIiBjc3M9eyBiYXNpY0NhcmRSb290U3R5bGVzKHByb3BzLmNvbG9yPyBwcm9wcy5jb2xvcjogXCIjZmZmXCIsIHByb3BzLmRhcmtUZXh0LCBwcm9wcy5ub1NoYWRvdykgfT5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlICYmIHByb3BzLmltYWdlT25Ub3A/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPSB7IHsgZmxleEdyb3c6IDEsIH0gfT5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZFRpdGxlU3R5bGVzIH0+eyBwcm9wcy50aXRsZSB9PC9wPlxuXHRcdFx0XHRcdFx0PHAgY3NzPXsgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgfT57IHByb3BzLmNhcmREZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2U/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */"
};
var basicCardDescriptionStyles =  false ? undefined : {
  name: "u2v68c-basicCardDescriptionStyles",
  styles: "margin-top:4px;text-align:left;label:basicCardDescriptionStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW1DIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRjYXJkRGVzY3JpcHRpb246IHN0cmluZ1xuXHRjb2xvcj86IHN0cmluZ1xuXHRkYXJrVGV4dD86IGJvb2xlYW5cblx0bGluaz86IHN0cmluZ1xuXHRpbWFnZT86IHN0cmluZ1xuXHRub1NoYWRvdz86IGJvb2xlYW47XG5cdGltYWdlT25Ub3A/OiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNpY0NhcmRSb290U3R5bGVzID0gKGNvbG9yOiBzdHJpbmcsIGRhcmtUZXh0OiBib29sZWFuIHwgdW5kZWZpbmVkLCBub1NoYWRvdzogYm9vbGVhbiB8IHVuZGVmaW5lZCkgPT4ge1xuXHRyZXR1cm4gY3NzKHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuXHRcdGNvbG9yOiBkYXJrVGV4dD8gXCJ3aGl0ZVwiOiBcImJsYWNrXCIsXG5cdFx0cGFkZGluZzogMzIsXG5cdFx0Ym9yZGVyUmFkaXVzOiA2LFxuXHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgNHB4IDhweCAjNjY2XCIsXG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdHRyYW5zaXRpb246IFwiYm94LXNoYWRvdyAwLjEwc1wiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWF4SGVpZ2h0OiA1MDAsXG5cblxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA4cHggMTZweCAjNjY2XCIsXG5cdFx0fVxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyA9IGNzcyh7XG5cdHBhZGRpbmdMZWZ0OiAyNCxcblx0cGFkZGluZ1JpZ2h0OiAyNCxcblx0cGFkZGluZ0JvdHRvbTogMjQsXG5cdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxufSlcblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgPSBjc3Moe1xuXHR3aWR0aDogXCIxMDAlXCIsXG5cdGhlaWdodDogXCJhdXRvXCIsXG5cdG1heEhlaWdodDogMjUwLFxuXHRtYXJnaW5Cb3R0b206IDgsXG5cdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblxufSlcblxuY29uc3QgYmFzaWNDYXJkVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdGZvbnRTaXplOiAnMS43NWVtJyxcblx0bWFyZ2luQm90dG9tOiAwLFxuXHRtYXJnaW5Ub3A6IDAsXG5cdGZsZXhHcm93OiAxLFxufSlcblxuY29uc3QgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgPSBjc3Moe1xuXHRtYXJnaW5Ub3A6IDQsXG5cdHRleHRBbGlnbjogXCJsZWZ0XCIsXG59KVxuXG5jb25zdCBCYXNpY0NhcmQ6IEZDPEJhc2ljQ2FyZFByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9eyB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0+XG5cdFx0PExpbmsgaHJlZj17IHByb3BzLmxpbmsgfT5cblx0XHRcdDxhIHN0eWxlPSB7IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH0gfT5cblx0XHRcdFx0PGRpdiBpZD1cInBhLWJhc2ljLWNhcmRcIiBjc3M9eyBiYXNpY0NhcmRSb290U3R5bGVzKHByb3BzLmNvbG9yPyBwcm9wcy5jb2xvcjogXCIjZmZmXCIsIHByb3BzLmRhcmtUZXh0LCBwcm9wcy5ub1NoYWRvdykgfT5cblx0XHRcdFx0XHR7IHByb3BzLmltYWdlICYmIHByb3BzLmltYWdlT25Ub3A/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPSB7IHsgZmxleEdyb3c6IDEsIH0gfT5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZFRpdGxlU3R5bGVzIH0+eyBwcm9wcy50aXRsZSB9PC9wPlxuXHRcdFx0XHRcdFx0PHAgY3NzPXsgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgfT57IHByb3BzLmNhcmREZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2U/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */"
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
  }, props.image && props.imageOnTop ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: basicCardImageContainerStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: props.image,
    css: basicCardImageStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })) : null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      flexGrow: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    css: basicCardTitleStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, props.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    css: basicCardDescriptionStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, props.cardDescription)), props.image ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: basicCardImageContainerStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: props.image,
    css: basicCardImageStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })) : null))));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicCard);

/***/ })

})
//# sourceMappingURL=forgotten.js.f13192ae943461397877.hot-update.js.map