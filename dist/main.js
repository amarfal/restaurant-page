/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --bg-top: #8a4b54;
  --bg-bottom: #f2a13b;
  --bg-mid: #d67055;
  --text-light: #fffdf8;
  --accent: #b94c52;
  --accent-dark: #81393c;
  --border-line: #fbead7;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    var(--bg-top),
    var(--bg-mid),
    var(--bg-bottom)
  );
  font-family: "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.topbar {
  background-color: rgba(90, 50, 50, 0.95);
  padding: 1rem 3rem;
  border-bottom: 3px solid rgba(251, 234, 215, 0.4);
}

.nav {
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  align-items: center;
  gap: 2.5rem;
}

.nav__brand {
  font-family: "Segoe Script", "Brush Script MT", cursive;
  font-size: 2.5rem;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  font-style: italic;
}

.nav__btn {
  border: none;
  background: transparent;
  color: #fff;
  font-family: "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive;
  font-size: 1.1rem;
  letter-spacing: 0.03em;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease;
  border-radius: 4px;
}

.nav__btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav__btn--active {
  background-color: rgba(255, 255, 255, 0.15);
}

#content {
  flex: 1;
  padding: 3rem 5vw 5rem;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.hero {
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  align-items: center;
  color: #fff;
}

.hero__img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.45);
}

.hero__img--left {
  justify-self: end;
  max-width: 380px;
}

.hero__img--right {
  justify-self: start;
  max-width: 380px;
}

.hero__text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  text-align: center;
}

.hero__text h1 {
  font-family: "Segoe Script", "Brush Script MT", cursive;
  font-size: 3.2rem;
  line-height: 1.2;
  margin: 0;
  font-style: italic;
  font-weight: 600;
}

.hero__text p {
  font-family: "Segoe Script", "Brush Script MT", cursive;
  font-size: 1.4rem;
  line-height: 1.6;
  max-width: 42rem;
  margin: 0;
  font-style: italic;
}

.hero__name {
  font-weight: 600;
}

.hero__cta {
  border: 3px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  font-family: "Segoe Script", "Brush Script MT", cursive;
  font-size: 1.5rem;
  padding: 0.7rem 3rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-style: italic;
  margin-top: 0.5rem;
}

.hero__cta:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

.pane {
  max-width: 900px;
  width: 100%;
  background: rgba(90, 50, 50, 0.8);
  border-radius: 16px;
  padding: 2.5rem 3rem;
  color: #fff;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}

.pane h2 {
  font-family: "Segoe Script", "Brush Script MT", cursive;
  margin-top: 0;
  margin-bottom: 1.25rem;
  font-size: 2.1rem;
  font-style: italic;
}

.pane p,
.pane li {
  font-family: "Segoe Script", "Brush Script MT", cursive;
  font-size: 1.2rem;
  line-height: 1.7;
  font-style: italic;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list li {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.menu-list li:last-child {
  border-bottom: none;
}

.gallery-section {
  max-width: 1200px;
  width: 100%;
  background: rgba(90, 50, 50, 0.75);
  border-radius: 16px;
  padding: 3rem;
  color: #fff;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}

.gallery__title {
  font-family: "Segoe Script", "Brush Script MT", cursive;
  font-size: 3rem;
  font-style: italic;
  margin: 0 0 0.5rem 0;
  text-align: center;
}

.gallery__subtitle {
  font-family: "Segoe Script", "Brush Script MT", cursive;
  font-size: 1.3rem;
  font-style: italic;
  margin: 0 0 2.5rem 0;
  text-align: center;
  opacity: 0.9;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.gallery__item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 1 / 1;
}

.gallery__item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery__item:hover .gallery__img {
  transform: scale(1.05);
}

.gallery__credit {
  font-family: "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive;
  font-size: 0.9rem;
  font-style: italic;
  text-align: center;
  opacity: 0.7;
  margin: 1.5rem 0 0 0;
}

@media (max-width: 1100px) {
  .nav {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 0.8rem;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero__img--left,
  .hero__img--right {
    justify-self: center;
    max-width: 450px;
  }

  .hero__text h1 {
    font-size: 2.5rem;
  }

  .hero__text p {
    font-size: 1.2rem;
  }

  #content {
    padding-inline: 1.5rem;
  }

  .gallery__grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .gallery__title {
    font-size: 2.2rem;
  }

  .gallery__subtitle {
    font-size: 1.1rem;
  }

  .gallery-section {
    padding: 2rem 1.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --bg-top: #8a4b54;\r\n  --bg-bottom: #f2a13b;\r\n  --bg-mid: #d67055;\r\n  --text-light: #fffdf8;\r\n  --accent: #b94c52;\r\n  --accent-dark: #81393c;\r\n  --border-line: #fbead7;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--bg-top),\r\n    var(--bg-mid),\r\n    var(--bg-bottom)\r\n  );\r\n  font-family: \"Segoe Print\", \"Bradley Hand\", \"Comic Sans MS\", cursive;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.topbar {\r\n  background-color: rgba(90, 50, 50, 0.95);\r\n  padding: 1rem 3rem;\r\n  border-bottom: 3px solid rgba(251, 234, 215, 0.4);\r\n}\r\n\r\n.nav {\r\n  display: grid;\r\n  grid-template-columns: auto auto 1fr auto auto;\r\n  align-items: center;\r\n  gap: 2.5rem;\r\n}\r\n\r\n.nav__brand {\r\n  font-family: \"Segoe Script\", \"Brush Script MT\", cursive;\r\n  font-size: 2.5rem;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  font-style: italic;\r\n}\r\n\r\n.nav__btn {\r\n  border: none;\r\n  background: transparent;\r\n  color: #fff;\r\n  font-family: \"Segoe Print\", \"Bradley Hand\", \"Comic Sans MS\", cursive;\r\n  font-size: 1.1rem;\r\n  letter-spacing: 0.03em;\r\n  cursor: pointer;\r\n  padding: 0.5rem 1rem;\r\n  transition: background-color 0.2s ease;\r\n  border-radius: 4px;\r\n}\r\n\r\n.nav__btn:hover {\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.nav__btn--active {\r\n  background-color: rgba(255, 255, 255, 0.15);\r\n}\r\n\r\n#content {\r\n  flex: 1;\r\n  padding: 3rem 5vw 5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: stretch;\r\n}\r\n\r\n.hero {\r\n  max-width: 1400px;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  color: #fff;\r\n}\r\n\r\n.hero__img {\r\n  max-width: 100%;\r\n  height: auto;\r\n  border-radius: 8px;\r\n  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.hero__img--left {\r\n  justify-self: end;\r\n  max-width: 380px;\r\n}\r\n\r\n.hero__img--right {\r\n  justify-self: start;\r\n  max-width: 380px;\r\n}\r\n\r\n.hero__text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.hero__text h1 {\r\n  font-family: \"Segoe Script\", \"Brush Script MT\", cursive;\r\n  font-size: 3.2rem;\r\n  line-height: 1.2;\r\n  margin: 0;\r\n  font-style: italic;\r\n  font-weight: 600;\r\n}\r\n\r\n.hero__text p {\r\n  font-family: \"Segoe Script\", \"Brush Script MT\", cursive;\r\n  font-size: 1.4rem;\r\n  line-height: 1.6;\r\n  max-width: 42rem;\r\n  margin: 0;\r\n  font-style: italic;\r\n}\r\n\r\n.hero__name {\r\n  font-weight: 600;\r\n}\r\n\r\n.hero__cta {\r\n  border: 3px solid #ffffff;\r\n  background-color: transparent;\r\n  color: #ffffff;\r\n  font-family: \"Segoe Script\", \"Brush Script MT\", cursive;\r\n  font-size: 1.5rem;\r\n  padding: 0.7rem 3rem;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease;\r\n  font-style: italic;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.hero__cta:hover {\r\n  background-color: rgba(255, 255, 255, 0.15);\r\n  transform: scale(1.05);\r\n}\r\n\r\n.pane {\r\n  max-width: 900px;\r\n  width: 100%;\r\n  background: rgba(90, 50, 50, 0.8);\r\n  border-radius: 16px;\r\n  padding: 2.5rem 3rem;\r\n  color: #fff;\r\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.pane h2 {\r\n  font-family: \"Segoe Script\", \"Brush Script MT\", cursive;\r\n  margin-top: 0;\r\n  margin-bottom: 1.25rem;\r\n  font-size: 2.1rem;\r\n  font-style: italic;\r\n}\r\n\r\n.pane p,\r\n.pane li {\r\n  font-family: \"Segoe Script\", \"Brush Script MT\", cursive;\r\n  font-size: 1.2rem;\r\n  line-height: 1.7;\r\n  font-style: italic;\r\n}\r\n\r\n.menu-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.menu-list li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0.8rem 0;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.menu-list li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.gallery-section {\r\n  max-width: 1200px;\r\n  width: 100%;\r\n  background: rgba(90, 50, 50, 0.75);\r\n  border-radius: 16px;\r\n  padding: 3rem;\r\n  color: #fff;\r\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.gallery__title {\r\n  font-family: \"Segoe Script\", \"Brush Script MT\", cursive;\r\n  font-size: 3rem;\r\n  font-style: italic;\r\n  margin: 0 0 0.5rem 0;\r\n  text-align: center;\r\n}\r\n\r\n.gallery__subtitle {\r\n  font-family: \"Segoe Script\", \"Brush Script MT\", cursive;\r\n  font-size: 1.3rem;\r\n  font-style: italic;\r\n  margin: 0 0 2.5rem 0;\r\n  text-align: center;\r\n  opacity: 0.9;\r\n}\r\n\r\n.gallery__grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 1.5rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.gallery__item {\r\n  position: relative;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n\r\n.gallery__item:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.gallery__img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  display: block;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.gallery__item:hover .gallery__img {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.gallery__credit {\r\n  font-family: \"Segoe Print\", \"Bradley Hand\", \"Comic Sans MS\", cursive;\r\n  font-size: 0.9rem;\r\n  font-style: italic;\r\n  text-align: center;\r\n  opacity: 0.7;\r\n  margin: 1.5rem 0 0 0;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .nav {\r\n    grid-template-columns: 1fr;\r\n    justify-items: center;\r\n    gap: 0.8rem;\r\n  }\r\n\r\n  .hero {\r\n    grid-template-columns: 1fr;\r\n    gap: 2.5rem;\r\n  }\r\n\r\n  .hero__img--left,\r\n  .hero__img--right {\r\n    justify-self: center;\r\n    max-width: 450px;\r\n  }\r\n\r\n  .hero__text h1 {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  .hero__text p {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #content {\r\n    padding-inline: 1.5rem;\r\n  }\r\n\r\n  .gallery__grid {\r\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n    gap: 1rem;\r\n  }\r\n\r\n  .gallery__title {\r\n    font-size: 2.2rem;\r\n  }\r\n\r\n  .gallery__subtitle {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .gallery-section {\r\n    padding: 2rem 1.5rem;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
  const content = document.getElementById('content');
  content.textContent = '';

  const section = document.createElement('section');
  section.classList.add('pane');

  const title = document.createElement('h2');
  title.textContent = 'Visit Habibi Shawarma';

  const p1 = document.createElement('p');
  p1.textContent = '123 Fake Street, Flavor Town, Earth';

  const p2 = document.createElement('p');
  p2.textContent = 'Open daily: 9:00 AM - 10:00 PM';

  const p3 = document.createElement('p');
  p3.textContent = 'Our Number: (123)-456-7890';

  section.append(title, p1, p2, p3);
  content.appendChild(section);
}

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadGallery)
/* harmony export */ });
/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/1.jpg */ "./src/images/1.jpg");
/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/2.jpg */ "./src/images/2.jpg");
/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/3.jpg */ "./src/images/3.jpg");
/* harmony import */ var _images_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/4.jpg */ "./src/images/4.jpg");
/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/5.jpg */ "./src/images/5.jpg");
/* harmony import */ var _images_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/6.jpg */ "./src/images/6.jpg");







function loadGallery() {
  const content = document.getElementById('content');
  content.textContent = '';

  const section = document.createElement('section');
  section.classList.add('gallery-section');

  const title = document.createElement('h2');
  title.textContent = 'Gallery';
  title.classList.add('gallery__title');

  const subtitle = document.createElement('p');
  subtitle.textContent = 'A glimpse into the art of authentic shawarma';
  subtitle.classList.add('gallery__subtitle');

  const galleryGrid = document.createElement('div');
  galleryGrid.classList.add('gallery__grid');

  const images = [_images_1_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_2_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_3_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_4_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_5_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_6_jpg__WEBPACK_IMPORTED_MODULE_5__];
  
  images.forEach((imgSrc, index) => {
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('gallery__item');
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Habibi Shawarma Gallery Image ${index + 1}`;
    img.classList.add('gallery__img');
    
    imgWrapper.appendChild(img);
    galleryGrid.appendChild(imgWrapper);
  });

  const credit = document.createElement('p');
  credit.textContent = 'Supported by Unsplash - Free Images (2025)';
  credit.classList.add('gallery__credit');

  section.append(title, subtitle, galleryGrid, credit);
  content.appendChild(section);
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_wrap_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/wrap.png */ "./src/images/wrap.png");
/* harmony import */ var _images_spit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/spit.png */ "./src/images/spit.png");
// home page



function loadHome() {
  const content = document.getElementById('content');
  content.textContent = '';

  const hero = document.createElement('section');
  hero.classList.add('hero');

  // left image
  const leftImg = document.createElement('img');
  leftImg.src = _images_wrap_png__WEBPACK_IMPORTED_MODULE_0__;
  leftImg.alt = 'Shawarma wrap in hand';
  leftImg.classList.add('hero__img', 'hero__img--left');

  // center text
  const textBox = document.createElement('div');
  textBox.classList.add('hero__text');
 
  const headline = document.createElement('h1');
  headline.textContent = 'Juicy. Flame-Grilled. Authentic.';
 
  const intro = document.createElement('p');
  intro.textContent = 'An invitation to savor the art of real shawarma. At ';
 
  const strong = document.createElement('span');
  strong.textContent = 'Habibi Shawarma';
  strong.classList.add('hero__name');
 
  intro.appendChild(strong);
  intro.append(
    ', every wrap turns slowly on the spit, marinated in bold spices, grilled to perfection, and served fresh with warmth and flavor.'
  );
 
  const ctaBtn = document.createElement('button');
  ctaBtn.textContent = 'Order Now';
  ctaBtn.classList.add('hero__cta');
 
  textBox.append(headline, intro, ctaBtn);

  // right image
  const rightImg = document.createElement('img');
  rightImg.src = _images_spit_png__WEBPACK_IMPORTED_MODULE_1__;
  rightImg.alt = 'Shawarma turning on the spit';
  rightImg.classList.add('hero__img', 'hero__img--right');
 
  hero.append(leftImg, textBox, rightImg);
 
  content.appendChild(hero);
}


/***/ }),

/***/ "./src/images/1.jpg":
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6cf313522f64dae7433.jpg";

/***/ }),

/***/ "./src/images/2.jpg":
/*!**************************!*\
  !*** ./src/images/2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06f20e1274bd57751799.jpg";

/***/ }),

/***/ "./src/images/3.jpg":
/*!**************************!*\
  !*** ./src/images/3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89b73beb1681421ca0d8.jpg";

/***/ }),

/***/ "./src/images/4.jpg":
/*!**************************!*\
  !*** ./src/images/4.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c6ec02482162fd7b634.jpg";

/***/ }),

/***/ "./src/images/5.jpg":
/*!**************************!*\
  !*** ./src/images/5.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e35f6b513e31fa166be.jpg";

/***/ }),

/***/ "./src/images/6.jpg":
/*!**************************!*\
  !*** ./src/images/6.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "728614be11e3db0a76a0.jpg";

/***/ }),

/***/ "./src/images/spit.png":
/*!*****************************!*\
  !*** ./src/images/spit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc140fddf8229137d999.png";

/***/ }),

/***/ "./src/images/wrap.png":
/*!*****************************!*\
  !*** ./src/images/wrap.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "740f0e1dbb244b0829f3.png";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
  const content = document.getElementById('content');
  content.textContent = '';

  const section = document.createElement('section');
  section.classList.add('pane');

  const title = document.createElement('h2');
  title.textContent = 'Menu';

  const list = document.createElement('ul');
  list.classList.add('menu-list');

  const items = [
    ['Classic Chicken Shawarma', '$9.99'],
    ['Spicy Beef Shawarma', '$10.99'],
    ['Habibi Special Wrap', '$12.49'],
    ['Falafel Wrap (Vegan)', '$8.99'],
  ];

  items.forEach(([name, price]) => {
    const li = document.createElement('li');
    const n = document.createElement('span');
    n.textContent = name;
    const p = document.createElement('span');
    p.textContent = price;
    li.append(n, p);
    list.appendChild(li);
  });

  section.append(title, list);
  content.appendChild(section);
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery */ "./src/gallery.js");






function setActiveButton(tabName) {
  const buttons = document.querySelectorAll('.nav__btn');
  buttons.forEach((btn) => {
    btn.classList.toggle('nav__btn--active', btn.dataset.tab === tabName);
  });
}

function initNav() {
  const buttons = document.querySelectorAll('.nav__btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;

      if (tab === 'home') {
        (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
      } else if (tab === 'menu') {
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
      } else if (tab === 'contact') {
        (0,_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
      } else if (tab === 'order') {
        (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
      }

      setActiveButton(tab);
    });
  });
}

// initial page load
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();    
  setActiveButton('home');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFB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YW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tYmctdG9wOiAjOGE0YjU0O1xyXG4gIC0tYmctYm90dG9tOiAjZjJhMTNiO1xyXG4gIC0tYmctbWlkOiAjZDY3MDU1O1xyXG4gIC0tdGV4dC1saWdodDogI2ZmZmRmODtcclxuICAtLWFjY2VudDogI2I5NGM1MjtcclxuICAtLWFjY2VudC1kYXJrOiAjODEzOTNjO1xyXG4gIC0tYm9yZGVyLWxpbmU6ICNmYmVhZDc7XHJcbn1cclxuXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1iZy10b3ApLFxyXG4gICAgdmFyKC0tYmctbWlkKSxcclxuICAgIHZhcigtLWJnLWJvdHRvbSlcclxuICApO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFByaW50XCIsIFwiQnJhZGxleSBIYW5kXCIsIFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRvcGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MCwgNTAsIDUwLCAwLjk1KTtcclxuICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjUxLCAyMzQsIDIxNSwgMC40KTtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byAxZnIgYXV0byBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyLjVyZW07XHJcbn1cclxuXHJcbi5uYXZfX2JyYW5kIHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBTY3JpcHRcIiwgXCJCcnVzaCBTY3JpcHQgTVRcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5uYXZfX2J0biB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFByaW50XCIsIFwiQnJhZGxleSBIYW5kXCIsIFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLm5hdl9fYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZfX2J0bi0tYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAzcmVtIDV2dyA1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5oZXJvIHtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZXJvX19pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTZweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XHJcbn1cclxuXHJcbi5oZXJvX19pbWctLWxlZnQge1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIG1heC13aWR0aDogMzgwcHg7XHJcbn1cclxuXHJcbi5oZXJvX19pbWctLXJpZ2h0IHtcclxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gIG1heC13aWR0aDogMzgwcHg7XHJcbn1cclxuXHJcbi5oZXJvX190ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvX190ZXh0IGgxIHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBTY3JpcHRcIiwgXCJCcnVzaCBTY3JpcHQgTVRcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDMuMnJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlcm9fX3RleHQgcCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgU2NyaXB0XCIsIFwiQnJ1c2ggU2NyaXB0IE1UXCIsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBtYXgtd2lkdGg6IDQycmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5oZXJvX19uYW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVyb19fY3RhIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFNjcmlwdFwiLCBcIkJydXNoIFNjcmlwdCBNVFwiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAzcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5oZXJvX19jdGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLnBhbmUge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5MCwgNTAsIDUwLCAwLjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMi41cmVtIDNyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ucGFuZSBoMiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgU2NyaXB0XCIsIFwiQnJ1c2ggU2NyaXB0IE1UXCIsIGN1cnNpdmU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnBhbmUgcCxcclxuLnBhbmUgbGkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFNjcmlwdFwiLCBcIkJydXNoIFNjcmlwdCBNVFwiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ubWVudS1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWVudS1saXN0IGxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjhyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4ubWVudS1saXN0IGxpOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LXNlY3Rpb24ge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoOTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLmdhbGxlcnlfX3RpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBTY3JpcHRcIiwgXCJCcnVzaCBTY3JpcHQgTVRcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbGxlcnlfX3N1YnRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBTY3JpcHRcIiwgXCJCcnVzaCBTY3JpcHQgTVRcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luOiAwIDAgMi41cmVtIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmdhbGxlcnlfX2dyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmdhbGxlcnlfX2l0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcclxufVxyXG5cclxuLmdhbGxlcnlfX2l0ZW06aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5nYWxsZXJ5X19pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZ2FsbGVyeV9faXRlbTpob3ZlciAuZ2FsbGVyeV9faW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uZ2FsbGVyeV9fY3JlZGl0IHtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBQcmludFwiLCBcIkJyYWRsZXkgSGFuZFwiLCBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW46IDEuNXJlbSAwIDAgMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5uYXYge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuOHJlbTtcclxuICB9XHJcblxyXG4gIC5oZXJvIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaGVyb19faW1nLS1sZWZ0LFxyXG4gIC5oZXJvX19pbWctLXJpZ2h0IHtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICB9XHJcblxyXG4gIC5oZXJvX190ZXh0IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmhlcm9fX3RleHQgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gICNjb250ZW50IHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZ2FsbGVyeV9fZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5X190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5X19zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjs7Ozs7R0FLQztFQUNELG9FQUFvRTtFQUNwRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELGlCQUFpQjtFQUNqQixjQUFj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QUNkLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9FQUFvRTtFQUNwRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLDJEQUEyRDtJQUMzRCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJnLXRvcDogIzhhNGI1NDtcXHJcXG4gIC0tYmctYm90dG9tOiAjZjJhMTNiO1xcclxcbiAgLS1iZy1taWQ6ICNkNjcwNTU7XFxyXFxuICAtLXRleHQtbGlnaHQ6ICNmZmZkZjg7XFxyXFxuICAtLWFjY2VudDogI2I5NGM1MjtcXHJcXG4gIC0tYWNjZW50LWRhcms6ICM4MTM5M2M7XFxyXFxuICAtLWJvcmRlci1saW5lOiAjZmJlYWQ3O1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICB2YXIoLS1iZy10b3ApLFxcclxcbiAgICB2YXIoLS1iZy1taWQpLFxcclxcbiAgICB2YXIoLS1iZy1ib3R0b20pXFxyXFxuICApO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBQcmludFxcXCIsIFxcXCJCcmFkbGV5IEhhbmRcXFwiLCBcXFwiQ29taWMgU2FucyBNU1xcXCIsIGN1cnNpdmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTAsIDUwLCA1MCwgMC45NSk7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDNyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTEsIDIzNCwgMjE1LCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byAxZnIgYXV0byBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19icmFuZCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFNjcmlwdFxcXCIsIFxcXCJCcnVzaCBTY3JpcHQgTVRcXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5uYXZfX2J0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBQcmludFxcXCIsIFxcXCJCcmFkbGV5IEhhbmRcXFwiLCBcXFwiQ29taWMgU2FucyBNU1xcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X19idG4tLWFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogM3JlbSA1dncgNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxNnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2ltZy0tbGVmdCB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIG1heC13aWR0aDogMzgwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19pbWctLXJpZ2h0IHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICBtYXgtd2lkdGg6IDM4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19fdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX3RleHQgaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBTY3JpcHRcXFwiLCBcXFwiQnJ1c2ggU2NyaXB0IE1UXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX190ZXh0IHAge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBTY3JpcHRcXFwiLCBcXFwiQnJ1c2ggU2NyaXB0IE1UXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIG1heC13aWR0aDogNDJyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19uYW1lIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19jdGEge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFNjcmlwdFxcXCIsIFxcXCJCcnVzaCBTY3JpcHQgTVRcXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjdyZW0gM3JlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19jdGE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbi5wYW5lIHtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoOTAsIDUwLCA1MCwgMC44KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFuZSBoMiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFNjcmlwdFxcXCIsIFxcXCJCcnVzaCBTY3JpcHQgTVRcXFwiLCBjdXJzaXZlO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxyXFxuICBmb250LXNpemU6IDIuMXJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLnBhbmUgcCxcXHJcXG4ucGFuZSBsaSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFNjcmlwdFxcXCIsIFxcXCJCcnVzaCBTY3JpcHQgTVRcXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS43O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saXN0IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwLjhyZW0gMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpc3QgbGk6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1zZWN0aW9uIHtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDkwLCA1MCwgNTAsIDAuNzUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnlfX3RpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgU2NyaXB0XFxcIiwgXFxcIkJydXNoIFNjcmlwdCBNVFxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnlfX3N1YnRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgU2NyaXB0XFxcIiwgXFxcIkJydXNoIFNjcmlwdCBNVFxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIG1hcmdpbjogMCAwIDIuNXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeV9fZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5X19pdGVtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5X19pdGVtOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnlfX2ltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeV9faXRlbTpob3ZlciAuZ2FsbGVyeV9faW1nIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5X19jcmVkaXQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBQcmludFxcXCIsIFxcXCJCcmFkbGV5IEhhbmRcXFwiLCBcXFwiQ29taWMgU2FucyBNU1xcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG4gIG1hcmdpbjogMS41cmVtIDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAubmF2IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVybyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBnYXA6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvX19pbWctLWxlZnQsXFxyXFxuICAuaGVyb19faW1nLS1yaWdodCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlcm9fX3RleHQgaDEge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvX190ZXh0IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5nYWxsZXJ5X19ncmlkIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5nYWxsZXJ5X190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdhbGxlcnlfX3N1YnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ2FsbGVyeS1zZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdwYW5lJyk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdWaXNpdCBIYWJpYmkgU2hhd2FybWEnO1xyXG5cclxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwMS50ZXh0Q29udGVudCA9ICcxMjMgRmFrZSBTdHJlZXQsIEZsYXZvciBUb3duLCBFYXJ0aCc7XHJcblxyXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAyLnRleHRDb250ZW50ID0gJ09wZW4gZGFpbHk6IDk6MDAgQU0gLSAxMDowMCBQTSc7XHJcblxyXG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAzLnRleHRDb250ZW50ID0gJ091ciBOdW1iZXI6ICgxMjMpLTQ1Ni03ODkwJztcclxuXHJcbiAgc2VjdGlvbi5hcHBlbmQodGl0bGUsIHAxLCBwMiwgcDMpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbn0iLCJpbXBvcnQgaW1nMSBmcm9tICcuL2ltYWdlcy8xLmpwZyc7XHJcbmltcG9ydCBpbWcyIGZyb20gJy4vaW1hZ2VzLzIuanBnJztcclxuaW1wb3J0IGltZzMgZnJvbSAnLi9pbWFnZXMvMy5qcGcnO1xyXG5pbXBvcnQgaW1nNCBmcm9tICcuL2ltYWdlcy80LmpwZyc7XHJcbmltcG9ydCBpbWc1IGZyb20gJy4vaW1hZ2VzLzUuanBnJztcclxuaW1wb3J0IGltZzYgZnJvbSAnLi9pbWFnZXMvNi5qcGcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEdhbGxlcnkoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1zZWN0aW9uJyk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdHYWxsZXJ5JztcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X190aXRsZScpO1xyXG5cclxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdBIGdsaW1wc2UgaW50byB0aGUgYXJ0IG9mIGF1dGhlbnRpYyBzaGF3YXJtYSc7XHJcbiAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fc3VidGl0bGUnKTtcclxuXHJcbiAgY29uc3QgZ2FsbGVyeUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBnYWxsZXJ5R3JpZC5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19ncmlkJyk7XHJcblxyXG4gIGNvbnN0IGltYWdlcyA9IFtpbWcxLCBpbWcyLCBpbWczLCBpbWc0LCBpbWc1LCBpbWc2XTtcclxuICBcclxuICBpbWFnZXMuZm9yRWFjaCgoaW1nU3JjLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgaW1nV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1nV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19pdGVtJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IGltZ1NyYztcclxuICAgIGltZy5hbHQgPSBgSGFiaWJpIFNoYXdhcm1hIEdhbGxlcnkgSW1hZ2UgJHtpbmRleCArIDF9YDtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19pbWcnKTtcclxuICAgIFxyXG4gICAgaW1nV3JhcHBlci5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgZ2FsbGVyeUdyaWQuYXBwZW5kQ2hpbGQoaW1nV3JhcHBlcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjcmVkaXQudGV4dENvbnRlbnQgPSAnU3VwcG9ydGVkIGJ5IFVuc3BsYXNoIC0gRnJlZSBJbWFnZXMgKDIwMjUpJztcclxuICBjcmVkaXQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fY3JlZGl0Jyk7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSwgZ2FsbGVyeUdyaWQsIGNyZWRpdCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufVxyXG5cclxuIiwiLy8gaG9tZSBwYWdlXHJcbmltcG9ydCB3cmFwSW1nIGZyb20gJy4vaW1hZ2VzL3dyYXAucG5nJztcclxuaW1wb3J0IHNwaXRJbWcgZnJvbSAnLi9pbWFnZXMvc3BpdC5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xyXG5cclxuICAvLyBsZWZ0IGltYWdlXHJcbiAgY29uc3QgbGVmdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGxlZnRJbWcuc3JjID0gd3JhcEltZztcclxuICBsZWZ0SW1nLmFsdCA9ICdTaGF3YXJtYSB3cmFwIGluIGhhbmQnO1xyXG4gIGxlZnRJbWcuY2xhc3NMaXN0LmFkZCgnaGVyb19faW1nJywgJ2hlcm9fX2ltZy0tbGVmdCcpO1xyXG5cclxuICAvLyBjZW50ZXIgdGV4dFxyXG4gIGNvbnN0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoJ2hlcm9fX3RleHQnKTtcclxuIFxyXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdKdWljeS4gRmxhbWUtR3JpbGxlZC4gQXV0aGVudGljLic7XHJcbiBcclxuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBpbnRyby50ZXh0Q29udGVudCA9ICdBbiBpbnZpdGF0aW9uIHRvIHNhdm9yIHRoZSBhcnQgb2YgcmVhbCBzaGF3YXJtYS4gQXQgJztcclxuIFxyXG4gIGNvbnN0IHN0cm9uZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzdHJvbmcudGV4dENvbnRlbnQgPSAnSGFiaWJpIFNoYXdhcm1hJztcclxuICBzdHJvbmcuY2xhc3NMaXN0LmFkZCgnaGVyb19fbmFtZScpO1xyXG4gXHJcbiAgaW50cm8uYXBwZW5kQ2hpbGQoc3Ryb25nKTtcclxuICBpbnRyby5hcHBlbmQoXHJcbiAgICAnLCBldmVyeSB3cmFwIHR1cm5zIHNsb3dseSBvbiB0aGUgc3BpdCwgbWFyaW5hdGVkIGluIGJvbGQgc3BpY2VzLCBncmlsbGVkIHRvIHBlcmZlY3Rpb24sIGFuZCBzZXJ2ZWQgZnJlc2ggd2l0aCB3YXJtdGggYW5kIGZsYXZvci4nXHJcbiAgKTtcclxuIFxyXG4gIGNvbnN0IGN0YUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGN0YUJ0bi50ZXh0Q29udGVudCA9ICdPcmRlciBOb3cnO1xyXG4gIGN0YUJ0bi5jbGFzc0xpc3QuYWRkKCdoZXJvX19jdGEnKTtcclxuIFxyXG4gIHRleHRCb3guYXBwZW5kKGhlYWRsaW5lLCBpbnRybywgY3RhQnRuKTtcclxuXHJcbiAgLy8gcmlnaHQgaW1hZ2VcclxuICBjb25zdCByaWdodEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHJpZ2h0SW1nLnNyYyA9IHNwaXRJbWc7XHJcbiAgcmlnaHRJbWcuYWx0ID0gJ1NoYXdhcm1hIHR1cm5pbmcgb24gdGhlIHNwaXQnO1xyXG4gIHJpZ2h0SW1nLmNsYXNzTGlzdC5hZGQoJ2hlcm9fX2ltZycsICdoZXJvX19pbWctLXJpZ2h0Jyk7XHJcbiBcclxuICBoZXJvLmFwcGVuZChsZWZ0SW1nLCB0ZXh0Qm94LCByaWdodEltZyk7XHJcbiBcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm8pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3BhbmUnKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG5cclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBsaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xyXG5cclxuICBjb25zdCBpdGVtcyA9IFtcclxuICAgIFsnQ2xhc3NpYyBDaGlja2VuIFNoYXdhcm1hJywgJyQ5Ljk5J10sXHJcbiAgICBbJ1NwaWN5IEJlZWYgU2hhd2FybWEnLCAnJDEwLjk5J10sXHJcbiAgICBbJ0hhYmliaSBTcGVjaWFsIFdyYXAnLCAnJDEyLjQ5J10sXHJcbiAgICBbJ0ZhbGFmZWwgV3JhcCAoVmVnYW4pJywgJyQ4Ljk5J10sXHJcbiAgXTtcclxuXHJcbiAgaXRlbXMuZm9yRWFjaCgoW25hbWUsIHByaWNlXSkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG4udGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBwcmljZTtcclxuICAgIGxpLmFwcGVuZChuLCBwKTtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH0pO1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgbGlzdCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xyXG5pbXBvcnQgbG9hZEdhbGxlcnkgZnJvbSAnLi9nYWxsZXJ5JztcclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbih0YWJOYW1lKSB7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2J0bicpO1xyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnbmF2X19idG4tLWFjdGl2ZScsIGJ0bi5kYXRhc2V0LnRhYiA9PT0gdGFiTmFtZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXROYXYoKSB7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2J0bicpO1xyXG5cclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YWIgPSBidXR0b24uZGF0YXNldC50YWI7XHJcblxyXG4gICAgICBpZiAodGFiID09PSAnaG9tZScpIHtcclxuICAgICAgICBsb2FkSG9tZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ21lbnUnKSB7XHJcbiAgICAgICAgbG9hZE1lbnUoKTtcclxuICAgICAgfSBlbHNlIGlmICh0YWIgPT09ICdjb250YWN0Jykge1xyXG4gICAgICAgIGxvYWRHYWxsZXJ5KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGFiID09PSAnb3JkZXInKSB7XHJcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0QWN0aXZlQnV0dG9uKHRhYik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gaW5pdGlhbCBwYWdlIGxvYWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBpbml0TmF2KCk7XHJcbiAgbG9hZEhvbWUoKTsgICAgXHJcbiAgc2V0QWN0aXZlQnV0dG9uKCdob21lJyk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==