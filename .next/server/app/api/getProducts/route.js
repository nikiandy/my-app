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
exports.id = "app/api/getProducts/route";
exports.ids = ["app/api/getProducts/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetProducts%2Froute&page=%2Fapi%2FgetProducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetProducts%2Froute.js&appDir=C%3A%5CUsers%5Cnikia%5COneDrive%20-%20Technological%20University%20Dublin%5CYear%203%5CSemester%201%5CRich%20Web%20Apps%5CRWA-KK%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnikia%5COneDrive%20-%20Technological%20University%20Dublin%5CYear%203%5CSemester%201%5CRich%20Web%20Apps%5CRWA-KK%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetProducts%2Froute&page=%2Fapi%2FgetProducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetProducts%2Froute.js&appDir=C%3A%5CUsers%5Cnikia%5COneDrive%20-%20Technological%20University%20Dublin%5CYear%203%5CSemester%201%5CRich%20Web%20Apps%5CRWA-KK%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnikia%5COneDrive%20-%20Technological%20University%20Dublin%5CYear%203%5CSemester%201%5CRich%20Web%20Apps%5CRWA-KK%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_nikia_OneDrive_Technological_University_Dublin_Year_3_Semester_1_Rich_Web_Apps_RWA_KK_my_app_src_app_api_getProducts_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/getProducts/route.js */ \"(rsc)/./src/app/api/getProducts/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/getProducts/route\",\n        pathname: \"/api/getProducts\",\n        filename: \"route\",\n        bundlePath: \"app/api/getProducts/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\nikia\\\\OneDrive - Technological University Dublin\\\\Year 3\\\\Semester 1\\\\Rich Web Apps\\\\RWA-KK\\\\my-app\\\\src\\\\app\\\\api\\\\getProducts\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_nikia_OneDrive_Technological_University_Dublin_Year_3_Semester_1_Rich_Web_Apps_RWA_KK_my_app_src_app_api_getProducts_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXRQcm9kdWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2V0UHJvZHVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZXRQcm9kdWN0cyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNuaWtpYSU1Q09uZURyaXZlJTIwLSUyMFRlY2hub2xvZ2ljYWwlMjBVbml2ZXJzaXR5JTIwRHVibGluJTVDWWVhciUyMDMlNUNTZW1lc3RlciUyMDElNUNSaWNoJTIwV2ViJTIwQXBwcyU1Q1JXQS1LSyU1Q215LWFwcCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDbmlraWElNUNPbmVEcml2ZSUyMC0lMjBUZWNobm9sb2dpY2FsJTIwVW5pdmVyc2l0eSUyMER1YmxpbiU1Q1llYXIlMjAzJTVDU2VtZXN0ZXIlMjAxJTVDUmljaCUyMFdlYiUyMEFwcHMlNUNSV0EtS0slNUNteS1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3FHO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxuaWtpYVxcXFxPbmVEcml2ZSAtIFRlY2hub2xvZ2ljYWwgVW5pdmVyc2l0eSBEdWJsaW5cXFxcWWVhciAzXFxcXFNlbWVzdGVyIDFcXFxcUmljaCBXZWIgQXBwc1xcXFxSV0EtS0tcXFxcbXktYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdldFByb2R1Y3RzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZXRQcm9kdWN0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dldFByb2R1Y3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZXRQcm9kdWN0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG5pa2lhXFxcXE9uZURyaXZlIC0gVGVjaG5vbG9naWNhbCBVbml2ZXJzaXR5IER1YmxpblxcXFxZZWFyIDNcXFxcU2VtZXN0ZXIgMVxcXFxSaWNoIFdlYiBBcHBzXFxcXFJXQS1LS1xcXFxteS1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZ2V0UHJvZHVjdHNcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetProducts%2Froute&page=%2Fapi%2FgetProducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetProducts%2Froute.js&appDir=C%3A%5CUsers%5Cnikia%5COneDrive%20-%20Technological%20University%20Dublin%5CYear%203%5CSemester%201%5CRich%20Web%20Apps%5CRWA-KK%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnikia%5COneDrive%20-%20Technological%20University%20Dublin%5CYear%203%5CSemester%201%5CRich%20Web%20Apps%5CRWA-KK%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/getProducts/route.js":
/*!******************************************!*\
  !*** ./src/app/api/getProducts/route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\nasync function GET(req) {\n    console.log(\"In the getProducts API route\");\n    const { MongoClient } = __webpack_require__(/*! mongodb */ \"mongodb\");\n    const url = process.env.DB_ADDRESS; // Ensure this environment variable is set in Vercel\n    const client = new MongoClient(url);\n    const dbName = \"app\"; // Name of your database\n    try {\n        // Connect to the MongoDB server\n        await client.connect();\n        console.log(\"Connected successfully to MongoDB server\");\n        // Access the database and collection\n        const db = client.db(dbName);\n        const collection = db.collection(\"products\");\n        // Query the collection\n        const products = await collection.find({}).toArray();\n        console.log(\"Found products:\", products);\n        // Return the products as a JSON response\n        return new Response(JSON.stringify(products), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        console.error(\"Error in getProducts API:\", error);\n        // Return an error response\n        return new Response(JSON.stringify({\n            error: \"Failed to fetch products\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } finally{\n        // Ensure the client is closed even if an error occurs\n        await client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXRQcm9kdWN0cy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sZUFBZUEsSUFBSUMsR0FBRztJQUMzQkMsUUFBUUMsR0FBRyxDQUFDO0lBRVosTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsd0JBQVM7SUFDekMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUUsb0RBQW9EO0lBQ3hGLE1BQU1DLFNBQVMsSUFBSU4sWUFBWUU7SUFDL0IsTUFBTUssU0FBUyxPQUFPLHdCQUF3QjtJQUU5QyxJQUFJO1FBQ0YsZ0NBQWdDO1FBQ2hDLE1BQU1ELE9BQU9FLE9BQU87UUFDcEJWLFFBQVFDLEdBQUcsQ0FBQztRQUVaLHFDQUFxQztRQUNyQyxNQUFNVSxLQUFLSCxPQUFPRyxFQUFFLENBQUNGO1FBQ3JCLE1BQU1HLGFBQWFELEdBQUdDLFVBQVUsQ0FBQztRQUVqQyx1QkFBdUI7UUFDdkIsTUFBTUMsV0FBVyxNQUFNRCxXQUFXRSxJQUFJLENBQUMsQ0FBQyxHQUFHQyxPQUFPO1FBQ2xEZixRQUFRQyxHQUFHLENBQUMsbUJBQW1CWTtRQUUvQix5Q0FBeUM7UUFDekMsT0FBTyxJQUFJRyxTQUFTQyxLQUFLQyxTQUFTLENBQUNMLFdBQVc7WUFDNUNNLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDaEQ7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZHJCLFFBQVFxQixLQUFLLENBQUMsNkJBQTZCQTtRQUUzQywyQkFBMkI7UUFDM0IsT0FBTyxJQUFJTCxTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUcsT0FBTztRQUEyQixJQUFJO1lBQ3pFRixRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBQ0YsU0FBVTtRQUNSLHNEQUFzRDtRQUN0RCxNQUFNWixPQUFPYyxLQUFLO0lBQ3BCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmlraWFcXE9uZURyaXZlIC0gVGVjaG5vbG9naWNhbCBVbml2ZXJzaXR5IER1YmxpblxcWWVhciAzXFxTZW1lc3RlciAxXFxSaWNoIFdlYiBBcHBzXFxSV0EtS0tcXG15LWFwcFxcc3JjXFxhcHBcXGFwaVxcZ2V0UHJvZHVjdHNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XHJcbiAgY29uc29sZS5sb2coXCJJbiB0aGUgZ2V0UHJvZHVjdHMgQVBJIHJvdXRlXCIpO1xyXG5cclxuICBjb25zdCB7IE1vbmdvQ2xpZW50IH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcclxuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5EQl9BRERSRVNTOyAvLyBFbnN1cmUgdGhpcyBlbnZpcm9ubWVudCB2YXJpYWJsZSBpcyBzZXQgaW4gVmVyY2VsXHJcbiAgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVybCk7XHJcbiAgY29uc3QgZGJOYW1lID0gXCJhcHBcIjsgLy8gTmFtZSBvZiB5b3VyIGRhdGFiYXNlXHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBDb25uZWN0IHRvIHRoZSBNb25nb0RCIHNlcnZlclxyXG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHN1Y2Nlc3NmdWxseSB0byBNb25nb0RCIHNlcnZlclwiKTtcclxuXHJcbiAgICAvLyBBY2Nlc3MgdGhlIGRhdGFiYXNlIGFuZCBjb2xsZWN0aW9uXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihkYk5hbWUpO1xyXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAvLyBRdWVyeSB0aGUgY29sbGVjdGlvblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoe30pLnRvQXJyYXkoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRm91bmQgcHJvZHVjdHM6XCIsIHByb2R1Y3RzKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHByb2R1Y3RzIGFzIGEgSlNPTiByZXNwb25zZVxyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShwcm9kdWN0cyksIHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0UHJvZHVjdHMgQVBJOlwiLCBlcnJvcik7XHJcblxyXG4gICAgLy8gUmV0dXJuIGFuIGVycm9yIHJlc3BvbnNlXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHByb2R1Y3RzXCIgfSksIHtcclxuICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIH0pO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICAvLyBFbnN1cmUgdGhlIGNsaWVudCBpcyBjbG9zZWQgZXZlbiBpZiBhbiBlcnJvciBvY2N1cnNcclxuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiR0VUIiwicmVxIiwiY29uc29sZSIsImxvZyIsIk1vbmdvQ2xpZW50IiwicmVxdWlyZSIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJEQl9BRERSRVNTIiwiY2xpZW50IiwiZGJOYW1lIiwiY29ubmVjdCIsImRiIiwiY29sbGVjdGlvbiIsInByb2R1Y3RzIiwiZmluZCIsInRvQXJyYXkiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJoZWFkZXJzIiwiZXJyb3IiLCJjbG9zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/getProducts/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetProducts%2Froute&page=%2Fapi%2FgetProducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetProducts%2Froute.js&appDir=C%3A%5CUsers%5Cnikia%5COneDrive%20-%20Technological%20University%20Dublin%5CYear%203%5CSemester%201%5CRich%20Web%20Apps%5CRWA-KK%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cnikia%5COneDrive%20-%20Technological%20University%20Dublin%5CYear%203%5CSemester%201%5CRich%20Web%20Apps%5CRWA-KK%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();