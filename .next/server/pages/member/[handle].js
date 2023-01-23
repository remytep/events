"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/member/[handle]";
exports.ids = ["pages/member/[handle]"];
exports.modules = {

/***/ "./config/firebase.ts":
/*!****************************!*\
  !*** ./config/firebase.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCYv7HtHB_zSvZIV_UIp4mkwp0DaYYy1Yg\",\n    authDomain: \"myevents-e96bc.firebaseapp.com\",\n    projectId: \"myevents-e96bc\",\n    storageBucket: \"myevents-e96bc.appspot.com\",\n    messagingSenderId: \"807612906965\",\n    appId: process.env.NEXT_PUBLIC_APP_ID,\n    measurementId: \"G-G59B715L2W\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0w7QUFDVTtBQUNKO0FBRTlDLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSxNQUFNSSxpQkFBaUI7SUFDbkJDLFFBQVFDLHlDQUErQjtJQUN2Q0csWUFBWUgsZ0NBQW1DO0lBQy9DSyxXQUFXTCxnQkFBa0M7SUFDN0NPLGVBQWVQLDRCQUFzQztJQUNyRFMsbUJBQW1CVCxjQUEyQztJQUM5RFcsT0FBT1gsUUFBUUMsR0FBRyxDQUFDVyxrQkFBa0I7SUFDckNDLGVBQWViLGNBQXNDO0FBQ3pEO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1lLE1BQU1yQiwyREFBYUEsQ0FBQ0k7QUFDbkIsTUFBTWtCLEtBQUtwQixnRUFBWUEsQ0FBQ21CLEtBQUs7QUFDN0IsTUFBTUUsT0FBT3RCLHNEQUFPQSxDQUFDb0IsS0FBSztBQUMxQixNQUFNRyxVQUFVckIsNERBQVVBLENBQUNrQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfZXZlbnRzLy4vY29uZmlnL2ZpcmViYXNlLnRzP2M5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSxcbiAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIX0RPTUFJTixcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQsXG4gICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RPUkFHRV9CVUNLRVQsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9JRCxcbiAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRCxcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfQVBQX0lEIiwibWVhc3VyZW1lbnRJZCIsIk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEIiwiYXBwIiwiZGIiLCJhdXRoIiwic3RvcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/firebase.ts\n");

/***/ }),

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"react-firebase-hooks/firestore\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst initialState = {\n    user: Object(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser),\n    registration: (email, password)=>{},\n    login: (email, password)=>{},\n    reload: ()=>{},\n    registerLoading: Boolean(),\n    registerError: null,\n    loginError: null\n};\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nfunction AuthProvider({ children  }) {\n    const [createUserWithEmailAndPassword, registerUser, registerLoading, registerError] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useCreateUserWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    const registration = (email, password)=>{\n        createUserWithEmailAndPassword(email, password);\n    };\n    const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useSignInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    const login = (email, password)=>{\n        return signInWithEmailAndPassword(email, password);\n    };\n    const reload = ()=>{\n        _config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser?.reload();\n    };\n    let displayName = Object(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser)?.displayName?.toString();\n    const [value, loading, error] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useDocument)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\", displayName || \"%\"), {\n        snapshotListenOptions: {\n            includeMetadataChanges: true\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user: _config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser ? Object.assign(Object(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser), value?.data()) : null,\n            registration,\n            login,\n            reload,\n            registerLoading: registerLoading,\n            registerError: Object(registerError),\n            loginError: Object(loginError)\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ruben/SPECIALISATION/events/context/AuthContext.tsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5RjtBQUNrQztBQUM3RTtBQUVlO0FBQ3BCO0FBRXpDLE1BQU1PLGVBQWU7SUFDakJDLE1BQU1DLE9BQU9OLDhEQUFnQjtJQUM3QlEsY0FBYyxDQUFDQyxPQUFlQyxXQUFxQixDQUFFO0lBQ3JEQyxPQUFPLENBQUNGLE9BQWVDLFdBQXFCLENBQUU7SUFDOUNFLFFBQVEsSUFBTSxDQUFFO0lBQ2hCQyxpQkFBaUJDO0lBQ2pCQyxlQUFlLElBQUk7SUFDbkJDLFlBQVksSUFBSTtBQUVwQjtBQUVPLE1BQU1DLDRCQUFjcEIsb0RBQWFBLENBQUNPLGNBQWM7QUFFdkQsU0FBU2MsYUFBYSxFQUFFQyxTQUFRLEVBQXlCLEVBQUU7SUFFdkQsTUFBTSxDQUNGQyxnQ0FDQUMsY0FDQVIsaUJBQ0FFLGNBQ0gsR0FBR2pCLDRGQUFpQ0EsQ0FBQ0Usa0RBQUlBO0lBRTFDLE1BQU1RLGVBQWUsQ0FBQ0MsT0FBZUMsV0FBcUI7UUFDdERVLCtCQUErQlgsT0FBT0M7SUFDMUM7SUFFQSxNQUFNLENBQ0ZZLDRCQUNBQyxXQUNBQyxjQUNBUixXQUNILEdBQUdqQix3RkFBNkJBLENBQUNDLGtEQUFJQTtJQUV0QyxNQUFNVyxRQUFRLENBQUNGLE9BQWVDLFdBQXFCO1FBQy9DLE9BQU9ZLDJCQUEyQmIsT0FBT0M7SUFDN0M7SUFFQSxNQUFNRSxTQUFTLElBQU07UUFDakJaLDhEQUFnQixFQUFFWTtJQUN0QjtJQUVBLElBQUlhLGNBQWNuQixPQUFPTiw4REFBZ0IsR0FBR3lCLGFBQWFDO0lBRXpELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBU0MsTUFBTSxHQUFHM0IsMkVBQVdBLENBQ3ZDQyx1REFBR0EsQ0FBQ0YsZ0RBQUVBLEVBQUUsU0FBU3dCLGVBQWUsTUFDaEM7UUFDSUssdUJBQXVCO1lBQUVDLHdCQUF3QixJQUFJO1FBQUM7SUFDMUQ7SUFHSixxQkFDSSw4REFBQ2QsWUFBWWUsUUFBUTtRQUFDTCxPQUFPO1lBQ3pCdEIsTUFBTUwsOERBQWdCLEdBQUdNLE9BQU8yQixNQUFNLENBQUMzQixPQUFPTiw4REFBZ0IsR0FBRzJCLE9BQU9PLFVBQVUsSUFBSTtZQUN0RjFCO1lBQ0FHO1lBQ0FDO1lBQ0FDLGlCQUFpQkE7WUFDakJFLGVBQWVULE9BQU9TO1lBQ3RCQyxZQUFZVixPQUFPVTtRQUN2QjtrQkFDS0c7Ozs7OztBQUdiO0FBQ0EsaUVBQWVELFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9ldmVudHMvLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD9mZGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFByb3BzV2l0aENoaWxkcmVuLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSwgdXNlQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLCB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9jb25maWcvZmlyZWJhc2VcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcjogT2JqZWN0KGF1dGguY3VycmVudFVzZXIpLFxuICAgIHJlZ2lzdHJhdGlvbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHsgfSxcbiAgICBsb2dpbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHsgfSxcbiAgICByZWxvYWQ6ICgpID0+IHsgfSxcbiAgICByZWdpc3RlckxvYWRpbmc6IEJvb2xlYW4oKSxcbiAgICByZWdpc3RlckVycm9yOiBudWxsLFxuICAgIGxvZ2luRXJyb3I6IG51bGwsXG5cbn07XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcblxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XG5cbiAgICBjb25zdCBbXG4gICAgICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgICAgICAgcmVnaXN0ZXJVc2VyLFxuICAgICAgICByZWdpc3RlckxvYWRpbmcsXG4gICAgICAgIHJlZ2lzdGVyRXJyb3IsXG4gICAgXSA9IHVzZUNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoKTtcblxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgfVxuXG4gICAgY29uc3QgW1xuICAgICAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgICAgICAgbG9naW5Vc2VyLFxuICAgICAgICBsb2dpbkxvYWRpbmcsXG4gICAgICAgIGxvZ2luRXJyb3IsXG4gICAgXSA9IHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgpO1xuXG4gICAgY29uc3QgbG9naW4gPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGF1dGguY3VycmVudFVzZXI/LnJlbG9hZCgpO1xuICAgIH1cblxuICAgIGxldCBkaXNwbGF5TmFtZSA9IE9iamVjdChhdXRoLmN1cnJlbnRVc2VyKT8uZGlzcGxheU5hbWU/LnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCBbdmFsdWUsIGxvYWRpbmcsIGVycm9yXSA9IHVzZURvY3VtZW50KFxuICAgICAgICBkb2MoZGIsICd1c2VycycsIGRpc3BsYXlOYW1lIHx8IFwiJVwiKSxcbiAgICAgICAge1xuICAgICAgICAgICAgc25hcHNob3RMaXN0ZW5PcHRpb25zOiB7IGluY2x1ZGVNZXRhZGF0YUNoYW5nZXM6IHRydWUgfSxcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgIHVzZXI6IGF1dGguY3VycmVudFVzZXIgPyBPYmplY3QuYXNzaWduKE9iamVjdChhdXRoLmN1cnJlbnRVc2VyKSwgdmFsdWU/LmRhdGEoKSkgOiBudWxsLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uLFxuICAgICAgICAgICAgbG9naW4sXG4gICAgICAgICAgICByZWxvYWQsXG4gICAgICAgICAgICByZWdpc3RlckxvYWRpbmc6IHJlZ2lzdGVyTG9hZGluZyxcbiAgICAgICAgICAgIHJlZ2lzdGVyRXJyb3I6IE9iamVjdChyZWdpc3RlckVycm9yKSxcbiAgICAgICAgICAgIGxvZ2luRXJyb3I6IE9iamVjdChsb2dpbkVycm9yKSxcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQXV0aFByb3ZpZGVyOyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJhdXRoIiwiZGIiLCJ1c2VEb2N1bWVudCIsImRvYyIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJPYmplY3QiLCJjdXJyZW50VXNlciIsInJlZ2lzdHJhdGlvbiIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsInJlbG9hZCIsInJlZ2lzdGVyTG9hZGluZyIsIkJvb2xlYW4iLCJyZWdpc3RlckVycm9yIiwibG9naW5FcnJvciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJyZWdpc3RlclVzZXIiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImxvZ2luVXNlciIsImxvZ2luTG9hZGluZyIsImRpc3BsYXlOYW1lIiwidG9TdHJpbmciLCJ2YWx1ZSIsImxvYWRpbmciLCJlcnJvciIsInNuYXBzaG90TGlzdGVuT3B0aW9ucyIsImluY2x1ZGVNZXRhZGF0YUNoYW5nZXMiLCJQcm92aWRlciIsImFzc2lnbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/member/[handle].tsx":
/*!***********************************!*\
  !*** ./pages/member/[handle].tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/AuthContext */ \"./context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__, _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__]);\n([axios__WEBPACK_IMPORTED_MODULE_4__, _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction User() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { handle  } = router.query;\n    const { user , reload  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.AuthContext);\n    const [userInfos, setUserInfos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (handle) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/user/\" + handle).then((res)=>{\n                setInterval(()=>{\n                    setLoading(false);\n                }, 1500);\n                setUserInfos(res.data);\n            });\n        }\n    }, [\n        handle\n    ]);\n    if (!loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: userInfos ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    margin: \"0 auto\"\n                },\n                className: \"text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.User, {\n                    size: \"xl\",\n                    className: \"nextui-user-name\",\n                    src: Object(userInfos).photoURL?.toString(),\n                    name: `@${handle}`,\n                    description: Object(userInfos).presentation?.toString()\n                }, void 0, false, {\n                    fileName: \"/home/ruben/SPECIALISATION/events/pages/member/[handle].tsx\",\n                    lineNumber: 33,\n                    columnNumber: 33\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ruben/SPECIALISATION/events/pages/member/[handle].tsx\",\n                lineNumber: 32,\n                columnNumber: 29\n            }, this)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            style: {\n                margin: \"0 auto\"\n            },\n            className: \"text-light\",\n            children: \"User not found :(\"\n        }, void 0, false, {\n            fileName: \"/home/ruben/SPECIALISATION/events/pages/member/[handle].tsx\",\n            lineNumber: 43,\n            columnNumber: 25\n        }, this)\n    }, void 0, false);\n    else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Loading, {\n        size: \"xl\",\n        css: {\n            margin: \"auto auto\"\n        }\n    }, void 0, false, {\n        fileName: \"/home/ruben/SPECIALISATION/events/pages/member/[handle].tsx\",\n        lineNumber: 50,\n        columnNumber: 13\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZW1iZXIvW2hhbmRsZV0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDaUI7QUFDYTtBQUM1QztBQUMrQjtBQUV4RCxTQUFTSyxPQUFPO0lBQ1osTUFBTUksU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsT0FBTSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDL0IsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRSxHQUFHWixpREFBVUEsQ0FBQ08sNkRBQVdBO0lBQy9DLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUE7SUFDMUMsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJUSxRQUFRO1lBQ1JILGlEQUFTLENBQUMsZUFBZUcsUUFDcEJTLElBQUksQ0FBQyxDQUFDQyxNQUFRO2dCQUNYQyxZQUFZLElBQU07b0JBQ2RKLFdBQVcsS0FBSztnQkFDcEIsR0FBRztnQkFDSEYsYUFBYUssSUFBSUUsSUFBSTtZQUN6QjtRQUNSLENBQUM7SUFDTCxHQUFHO1FBQUNaO0tBQU87SUFFWCxJQUFJLENBQUNNLFNBQ0QscUJBQ0k7a0JBRVFGLDBCQUNJO3NCQUNJLDRFQUFDUztnQkFBSUMsT0FBTztvQkFBRUMsUUFBUTtnQkFBUztnQkFBR0MsV0FBVTswQkFDeEMsNEVBQUNwQixtREFBUUE7b0JBQ0xxQixNQUFLO29CQUNMRCxXQUFVO29CQUNWRSxLQUFLQyxPQUFPZixXQUFXZ0IsUUFBUSxFQUFFQztvQkFDakNDLE1BQU0sQ0FBQyxDQUFDLEVBQUV0QixPQUFPLENBQUM7b0JBQ2xCdUIsYUFBYUosT0FBT2YsV0FBV29CLFlBQVksRUFBRUg7Ozs7Ozs7Ozs7OzBDQUt6RCw4REFBQ0k7WUFBR1gsT0FBTztnQkFBRUMsUUFBUTtZQUFTO1lBQUdDLFdBQVU7c0JBQWE7Ozs7O2dCQUFzQjs7U0FNOUYscUJBQ0ksOERBQUN0QixzREFBT0E7UUFBQ3VCLE1BQUs7UUFBS1MsS0FBSztZQUFFWCxRQUFRO1FBQVk7Ozs7OztBQUcxRDtBQUNBLGlFQUFlcEIsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215X2V2ZW50cy8uL3BhZ2VzL21lbWJlci9baGFuZGxlXS50c3g/YzcwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTG9hZGluZywgSW1hZ2UsIFVzZXIgYXMgVXNlck5leHQgfSBmcm9tICdAbmV4dHVpLW9yZy9yZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcblxuZnVuY3Rpb24gVXNlcigpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgaGFuZGxlIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCB7IHVzZXIsIHJlbG9hZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gICAgY29uc3QgW3VzZXJJbmZvcywgc2V0VXNlckluZm9zXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdXNlci8nICsgaGFuZGxlKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJJbmZvcyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW2hhbmRsZV0pXG5cbiAgICBpZiAoIWxvYWRpbmcpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckluZm9zID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIgfX0gY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlck5leHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZXh0dWktdXNlci1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17T2JqZWN0KHVzZXJJbmZvcykucGhvdG9VUkw/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgQCR7aGFuZGxlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17T2JqZWN0KHVzZXJJbmZvcykucHJlc2VudGF0aW9uPy50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luOiBcIjAgYXV0b1wiIH19IGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5Vc2VyIG5vdCBmb3VuZCA6KDwvaDI+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC8+XG5cbiAgICAgICAgKVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMb2FkaW5nIHNpemU9XCJ4bFwiIGNzcz17eyBtYXJnaW46IFwiYXV0byBhdXRvXCIgfX0gLz5cbiAgICAgICAgKVxuXG59XG5leHBvcnQgZGVmYXVsdCBVc2VyIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRpbmciLCJVc2VyIiwiVXNlck5leHQiLCJheGlvcyIsIkF1dGhDb250ZXh0Iiwicm91dGVyIiwiaGFuZGxlIiwicXVlcnkiLCJ1c2VyIiwicmVsb2FkIiwidXNlckluZm9zIiwic2V0VXNlckluZm9zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXQiLCJ0aGVuIiwicmVzIiwic2V0SW50ZXJ2YWwiLCJkYXRhIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW4iLCJjbGFzc05hbWUiLCJzaXplIiwic3JjIiwiT2JqZWN0IiwicGhvdG9VUkwiLCJ0b1N0cmluZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByZXNlbnRhdGlvbiIsImgyIiwiY3NzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/member/[handle].tsx\n");

/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react-firebase-hooks/firestore":
/*!*************************************************!*\
  !*** external "react-firebase-hooks/firestore" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/member/[handle].tsx"));
module.exports = __webpack_exports__;

})();