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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

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

/***/ }),

/***/ "(api)/./config/firebase.ts":
/*!****************************!*\
  !*** ./config/firebase.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCYv7HtHB_zSvZIV_UIp4mkwp0DaYYy1Yg\",\n    authDomain: \"myevents-e96bc.firebaseapp.com\",\n    projectId: \"myevents-e96bc\",\n    storageBucket: \"myevents-e96bc.appspot.com\",\n    messagingSenderId: \"807612906965\",\n    appId: process.env.NEXT_PUBLIC_APP_ID,\n    measurementId: \"G-G59B715L2W\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0w7QUFDVTtBQUNKO0FBRTlDLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSxNQUFNSSxpQkFBaUI7SUFDbkJDLFFBQVFDLHlDQUErQjtJQUN2Q0csWUFBWUgsZ0NBQW1DO0lBQy9DSyxXQUFXTCxnQkFBa0M7SUFDN0NPLGVBQWVQLDRCQUFzQztJQUNyRFMsbUJBQW1CVCxjQUEyQztJQUM5RFcsT0FBT1gsUUFBUUMsR0FBRyxDQUFDVyxrQkFBa0I7SUFDckNDLGVBQWViLGNBQXNDO0FBQ3pEO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1lLE1BQU1yQiwyREFBYUEsQ0FBQ0k7QUFDbkIsTUFBTWtCLEtBQUtwQixnRUFBWUEsQ0FBQ21CLEtBQUs7QUFDN0IsTUFBTUUsT0FBT3RCLHNEQUFPQSxDQUFDb0IsS0FBSztBQUMxQixNQUFNRyxVQUFVckIsNERBQVVBLENBQUNrQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfZXZlbnRzLy4vY29uZmlnL2ZpcmViYXNlLnRzP2M5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSxcbiAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIX0RPTUFJTixcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQsXG4gICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RPUkFHRV9CVUNLRVQsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9JRCxcbiAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRCxcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfQVBQX0lEIiwibWVhc3VyZW1lbnRJZCIsIk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEIiwiYXBwIiwiZGIiLCJhdXRoIiwic3RvcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/firebase.ts\n");

/***/ }),

/***/ "(api)/./pages/api/user/index.ts":
/*!*********************************!*\
  !*** ./pages/api/user/index.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/firebase */ \"(api)/./config/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _config_firebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nfunction handler(req, res) {\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"users\", \"user\");\n    async function getUser() {\n        const query = req.query;\n        const { handle  } = query;\n        const doc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(docRef);\n        try {\n            return res.status(200).send(handle);\n        } catch (err) {\n            return res.status(500).send(err);\n        }\n    }\n    function createUser() {\n        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"users\", req.body.handle);\n        try {\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(docRef, {\n                presentation: \"\",\n                photoURL: req.body.photoURL\n            });\n            return res.status(200).send(\"created\");\n        } catch (err) {\n            return res.status(500).send(err);\n        }\n    }\n    function updateUser() {\n        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"users\", req.body.handle);\n        try {\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(docRef, {\n                presentation: req.body.presentation || \"\",\n                photoURL: req.body.photoURL || \"\"\n            });\n            //if user changed his handle, we delete the old one\n            if (req.body.oldHandle && req.body.oldHandle !== req.body.handle) {\n                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"users\", req.body.oldHandle));\n            }\n            return res.status(200).send(\"updated\");\n        } catch (err) {\n            return res.status(500).send(err);\n        }\n    }\n    switch(req.method){\n        case \"GET\":\n            getUser();\n            break;\n        case \"POST\":\n            createUser();\n            break;\n        case \"PUT\":\n            updateUser();\n            break;\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFHRztBQUM1QjtBQUdyQyxTQUFTSyxRQUNwQkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3RCO0lBRUUsTUFBTUMsU0FBU1IsdURBQUdBLENBQUNJLGdEQUFFQSxFQUFFLFNBQVM7SUFFaEMsZUFBZUssVUFBVTtRQUVyQixNQUFNQyxRQUFRSixJQUFJSSxLQUFLO1FBQ3ZCLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdEO1FBRW5CLE1BQU1WLE1BQU0sTUFBTUUsMERBQU1BLENBQUNNO1FBQ3pCLElBQUk7WUFDQSxPQUFPRCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtRQUNoQyxFQUNBLE9BQU9HLEtBQUs7WUFDUixPQUFPUCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDQztRQUVoQztJQUNKO0lBRUEsU0FBU0MsYUFBYTtRQUNsQixNQUFNUCxTQUFTUix1REFBR0EsQ0FBQ0ksZ0RBQUVBLEVBQUUsU0FBU0UsSUFBSVUsSUFBSSxDQUFDTCxNQUFNO1FBRS9DLElBQUk7WUFDQVYsMERBQU1BLENBQUNPLFFBQVE7Z0JBQ1hTLGNBQWM7Z0JBQ2RDLFVBQVVaLElBQUlVLElBQUksQ0FBQ0UsUUFBUTtZQUMvQjtZQUNBLE9BQU9YLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDaEMsRUFDQSxPQUFPQyxLQUFLO1lBQ1IsT0FBT1AsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0M7UUFFaEM7SUFDSjtJQUVBLFNBQVNLLGFBQWE7UUFDbEIsTUFBTVgsU0FBU1IsdURBQUdBLENBQUNJLGdEQUFFQSxFQUFFLFNBQVNFLElBQUlVLElBQUksQ0FBQ0wsTUFBTTtRQUUvQyxJQUFJO1lBQ0FWLDBEQUFNQSxDQUFDTyxRQUFRO2dCQUNYUyxjQUFjWCxJQUFJVSxJQUFJLENBQUNDLFlBQVksSUFBSTtnQkFDdkNDLFVBQVVaLElBQUlVLElBQUksQ0FBQ0UsUUFBUSxJQUFJO1lBQ25DO1lBQ0EsbURBQW1EO1lBQ25ELElBQUlaLElBQUlVLElBQUksQ0FBQ0ksU0FBUyxJQUFJZCxJQUFJVSxJQUFJLENBQUNJLFNBQVMsS0FBS2QsSUFBSVUsSUFBSSxDQUFDTCxNQUFNLEVBQUU7Z0JBQzlEUiw2REFBU0EsQ0FBQ0gsdURBQUdBLENBQUNJLGdEQUFFQSxFQUFFLFNBQVNFLElBQUlVLElBQUksQ0FBQ0ksU0FBUztZQUNqRCxDQUFDO1lBQ0QsT0FBT2IsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUNoQyxFQUNBLE9BQU9DLEtBQUs7WUFDUixPQUFPUCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDQztRQUNoQztJQUNKO0lBRUEsT0FBUVIsSUFBSWUsTUFBTTtRQUNkLEtBQUs7WUFDRFo7WUFDQSxLQUFNO1FBQ1YsS0FBSztZQUNETTtZQUNBLEtBQU07UUFDVixLQUFLO1lBQ0RJO1lBQ0EsS0FBTTtJQUNkO0FBRUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215X2V2ZW50cy8uL3BhZ2VzL2FwaS91c2VyL2luZGV4LnRzP2UxODIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VEb2N1bWVudCB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2MsIHNldERvYywgZ2V0RG9jLCBkZWxldGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9maXJlYmFzZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG5cbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwidXNlcnNcIiwgXCJ1c2VyXCIpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpIHtcblxuICAgICAgICBjb25zdCBxdWVyeSA9IHJlcS5xdWVyeTtcbiAgICAgICAgY29uc3QgeyBoYW5kbGUgfSA9IHF1ZXJ5O1xuXG4gICAgICAgIGNvbnN0IGRvYyA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoKSB7XG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJ1c2Vyc1wiLCByZXEuYm9keS5oYW5kbGUpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXREb2MoZG9jUmVmLCB7XG4gICAgICAgICAgICAgICAgcHJlc2VudGF0aW9uOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiByZXEuYm9keS5waG90b1VSTFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXCJjcmVhdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVVc2VyKCkge1xuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwidXNlcnNcIiwgcmVxLmJvZHkuaGFuZGxlKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0RG9jKGRvY1JlZiwge1xuICAgICAgICAgICAgICAgIHByZXNlbnRhdGlvbjogcmVxLmJvZHkucHJlc2VudGF0aW9uIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IHJlcS5ib2R5LnBob3RvVVJMIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9pZiB1c2VyIGNoYW5nZWQgaGlzIGhhbmRsZSwgd2UgZGVsZXRlIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBpZiAocmVxLmJvZHkub2xkSGFuZGxlICYmIHJlcS5ib2R5Lm9sZEhhbmRsZSAhPT0gcmVxLmJvZHkuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlRG9jKGRvYyhkYiwgXCJ1c2Vyc1wiLCByZXEuYm9keS5vbGRIYW5kbGUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwidXBkYXRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICBnZXRVc2VyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgICAgICAgIGNyZWF0ZVVzZXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUFVUXCI6XG4gICAgICAgICAgICB1cGRhdGVVc2VyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJkb2MiLCJzZXREb2MiLCJnZXREb2MiLCJkZWxldGVEb2MiLCJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkb2NSZWYiLCJnZXRVc2VyIiwicXVlcnkiLCJoYW5kbGUiLCJzdGF0dXMiLCJzZW5kIiwiZXJyIiwiY3JlYXRlVXNlciIsImJvZHkiLCJwcmVzZW50YXRpb24iLCJwaG90b1VSTCIsInVwZGF0ZVVzZXIiLCJvbGRIYW5kbGUiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/index.ts"));
module.exports = __webpack_exports__;

})();