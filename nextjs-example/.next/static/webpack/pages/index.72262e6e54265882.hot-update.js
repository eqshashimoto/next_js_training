"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import fetch from \"isomorphic-unfetch\";\nconst shows = {\n    \"id\": 1,\n    \"name\": \"batman\"\n};\nconst Index = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Batman TV Shows\"\n            }, void 0, false, {\n                fileName: \"/Users/kazuyahashimoto/Documents/workspace2/next_js_training/nextjs-example/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: shows.map((show)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: show.name\n                    }, show.id, false, {\n                        fileName: \"/Users/kazuyahashimoto/Documents/workspace2/next_js_training/nextjs-example/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/kazuyahashimoto/Documents/workspace2/next_js_training/nextjs-example/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kazuyahashimoto/Documents/workspace2/next_js_training/nextjs-example/pages/index.js\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n_c = Index;\n// const Index = props => (\n//   <div>\n//     <h1>Batman TV Shows</h1>\n//     <ul>\n//       {props.shows.map(show => (\n//         <li key={show.id}>\n//           <Link href=\"/shows/[id]\" as={`/shows/${show.id}`}>\n//             <a>{show.name}</a>\n//           </Link>\n//         </li>\n//       ))}\n//     </ul>\n//   </div>\n// );\nIndex.getInitialProps = async function() {\n    const res = await fetch(\"https://api.tvmaze.com/search/shows?q=batman\");\n    const data = await res.json();\n    console.log(\"Show data fetched. Count: \".concat(data.length));\n    return {\n        shows: data.map((entry)=>entry.show)\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // const Index = () => {\n //   return <h1>Hello World</h1>;\n // };\n // export default Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFDN0IsMENBQTBDO0FBRTFDLE1BQU1DLFFBQVE7SUFDVixNQUFNO0lBQ1IsUUFBUTtBQUNWO0FBR0EsTUFBTUMsUUFBUUMsQ0FBQUEsc0JBQ1osOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0VMLE1BQU1NLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1QsOERBQUNDO2tDQUFrQkQsS0FBS0UsSUFBSTt1QkFBbkJGLEtBQUtHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7S0FMbEJUO0FBWU4sMkJBQTJCO0FBQzNCLFVBQVU7QUFDViwrQkFBK0I7QUFDL0IsV0FBVztBQUNYLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IsK0RBQStEO0FBQy9ELGlDQUFpQztBQUNqQyxvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osV0FBVztBQUNYLEtBQUs7QUFFTEEsTUFBTVUsZUFBZSxHQUFHO0lBQ3RCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtJQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0JDLFFBQVFDLEdBQUcsQ0FBQyw2QkFBeUMsT0FBWkgsS0FBS0ksTUFBTTtJQUNwRCxPQUFPO1FBQUVsQixPQUFPYyxLQUFLUixHQUFHLENBQUNhLENBQUFBLFFBQVNBLE1BQU1aLElBQUk7SUFBRTtBQUNoRDtBQUVBLCtEQUFlTixLQUFLQSxFQUFDLENBRXJCLHdCQUF3QjtDQUN4QixpQ0FBaUM7Q0FDakMsS0FBSztDQUNMLHdCQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IHNob3dzID0ge1xuICAgIFwiaWRcIjogMSxcbiAgXCJuYW1lXCI6IFwiYmF0bWFuXCIsXG59XG5cblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgPHVsPlxuICAgICAge3Nob3dzLm1hcChzaG93ID0+IChcbiAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+e3Nob3cubmFtZX08L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgPC9kaXY+XG4pO1xuXG5cbi8vIGNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuLy8gICAgIDx1bD5cbi8vICAgICAgIHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXG4vLyAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuLy8gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvd3MvW2lkXVwiIGFzPXtgL3Nob3dzLyR7c2hvdy5pZH1gfT5cbi8vICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuLy8gICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgPC9saT5cbi8vICAgICAgICkpfVxuLy8gICAgIDwvdWw+XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW5cIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuICByZXR1cm4geyBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdykgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IHtcbi8vICAgcmV0dXJuIDxoMT5IZWxsbyBXb3JsZDwvaDE+O1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJzaG93cyIsIkluZGV4IiwicHJvcHMiLCJkaXYiLCJoMSIsInVsIiwibWFwIiwic2hvdyIsImxpIiwibmFtZSIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJlbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});