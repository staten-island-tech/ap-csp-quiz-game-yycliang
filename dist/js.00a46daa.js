// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMSelectors = void 0;
var DOMSelectors = {
  quizContainer: document.querySelector(".quiz-container"),
  submitButton: document.querySelector(".submit-btn"),
  resultContainer: document.querySelector(".result-container")
};
exports.DOMSelectors = DOMSelectors;
},{}],"js/qna.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qna = void 0;
var qna = [{
  question: "In The Avengers (2012), what food did Tony Stark suggest the avengers go eat after winning the battle?",
  choices: {
    a: "Falafel",
    b: "Shawarma",
    c: "Kushari",
    d: "Sharkaseya"
  },
  correct: "Shawarma",
  name: "1"
}, {
  question: "In Iron Man 3 (2013), what Mark number does the Clean Slate Protocal destroy up to?",
  choices: {
    a: 42,
    b: 33,
    c: 45,
    d: 38
  },
  correct: 42,
  name: "2"
}, {
  question: "In Avengers: Age of Ultron (2015), who else could pick up Mjölnir besides Thor?",
  choices: {
    a: "Captain America",
    b: "Winter Soldier",
    c: "Vision",
    d: "Scarlet Witch"
  },
  correct: "Vision",
  name: "3"
}, {
  question: "In Captain America: Civil War (2016), which one of the avengers below was NOT on Iron Man's side?",
  choices: {
    a: "Black Widow",
    b: "Vision",
    c: "Black Panther",
    d: "Hawkeye"
  },
  correct: "Hawkeye",
  name: "4"
}, {
  question: "In Spider-Man: Homecoming (2017), what did the old Dominican lady that Peter Parker helped buy him?",
  choices: {
    a: "A Cheeseburger",
    b: "A Slice of Pizza",
    c: "A Churro",
    d: "A Hot Dog"
  },
  correct: "A Churro",
  name: "5"
}];
exports.qna = qna;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _dom = require("./dom");

var _qna = require("./qna");

console.log("connected");

var init = function init() {
  _qna.qna.forEach(function (item) {
    return _dom.DOMSelectors.quizContainer.insertAdjacentHTML("beforeend", "<div class=\"question\">\n          <h4 id=\"".concat(item.name, "\">").concat(item.question, "</h4>\n          <label for=\"").concat(item.choices.a, "\"\n            ><input type=\"radio\" id=\"").concat(item.choices.a, "\" name=\"").concat(item.name, "\" value=\"").concat(item.choices.a, "\" />\n            ").concat(item.choices.a, "</label\n          ><br />\n          <label for=\"").concat(item.choices.b, "\"\n            ><input type=\"radio\" id=\"").concat(item.choices.b, "\" name=\"").concat(item.name, "\" value=\"").concat(item.choices.b, "\"/>\n            ").concat(item.choices.b, "</label\n          ><br />\n          <label for=\"").concat(item.choices.c, "\"\n            ><input type=\"radio\" id=\"").concat(item.choices.c, "\" name=\"").concat(item.name, "\" value=\"").concat(item.choices.c, "\"/>\n            ").concat(item.choices.c, "</label\n          ><br />\n          <label for=\"").concat(item.choices.d, "\"\n            ><input type=\"radio\" id=\"").concat(item.choices.a, "\" name=\"").concat(item.name, "\" value=\"").concat(item.choices.d, "\"/>\n            ").concat(item.choices.d, "</label\n          ><br /><br />\n        </div>"));
  }); //make the score add 1 everytime something is correct, but dont reset it D:


  var showResults = function showResults() {
    var score = 0;

    _qna.qna.forEach(function (ques) {
      if (document.querySelector("input[name=\"".concat(ques.name, "\"]:checked"))) {
        var radioValue = document.querySelector("input[name=\"".concat(ques.name, "\"]:checked")).value;

        if (radioValue == "".concat(ques.correct)) {
          score++;
          document.getElementById("".concat(ques.name)).style.color = "green";
        } else if (radioValue != "Shawarma") {
          document.getElementById("".concat(ques.name)).style.color = "red";
        }

        _dom.DOMSelectors.resultContainer.innerHTML = "<h1>Your Score is ".concat(score, "/").concat(_qna.qna.length, "</h1>");
      }
    });
  };

  _dom.DOMSelectors.submitButton.addEventListener("click", showResults);
};

init(); //find which radio button for each set of questions is checked
//find the value of checked radio button
//find if the value is = to the correct value
//+1 if the value is equal, nothing if its not
//add text-color to that value in red if wrong, green if correct
//when it loops through all the questions, return the score
//make it loop through for all the questions
},{"./dom":"js/dom.js","./qna":"js/qna.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52767" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map