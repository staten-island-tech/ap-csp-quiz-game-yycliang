parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EpLS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DOMSelectors=void 0;var e={quizContainer:document.querySelector(".quiz-container"),submitButton:document.querySelector(".submit-btn"),resultContainer:document.querySelector(".result-container")};exports.DOMSelectors=e;
},{}],"c6xo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.qna=void 0;var e=[{question:"In The Avengers (2012), what food did Tony Stark suggest the avengers go eat after winning the battle?",choices:{a:"Falafel",b:"Shawarma",c:"Kushari",d:"Sharkaseya"},correct:"Shawarma",name:"1"},{question:"In Iron Man 3 (2013), what Mark number does the Clean Slate Protocal destroy up to?",choices:{a:42,b:33,c:45,d:38},correct:42,name:"2"},{question:"In Avengers: Age of Ultron (2015), who else could pick up Mjölnir besides Thor?",choices:{a:"Captain America",b:"Winter Soldier",c:"Vision",d:"Scarlet Witch"},correct:"Vision",name:"3"},{question:"In Captain America: Civil War (2016), which one of the avengers below was NOT on Iron Man's side?",choices:{a:"Black Widow",b:"Vision",c:"Black Panther",d:"Hawkeye"},correct:"Hawkeye",name:"4"},{question:"In Spider-Man: Homecoming (2017), what did the old Dominican lady that Peter Parker helped buy him?",choices:{a:"A Cheeseburger",b:"A Slice of Pizza",c:"A Churro",d:"A Hot Dog"},correct:"A Churro",name:"5"}];exports.qna=e;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var c=require("./dom"),n=require("./qna");console.log("connected");var e=function(){n.qna.forEach(function(n){return c.DOMSelectors.quizContainer.insertAdjacentHTML("beforeend",'<div class="question">\n          <h4 id="'.concat(n.name,'">').concat(n.question,'</h4>\n          <label for="').concat(n.choices.a,'"\n            ><input type="radio" id="').concat(n.choices.a,'" name="').concat(n.name,'" value="').concat(n.choices.a,'" />\n            ').concat(n.choices.a,'</label\n          ><br />\n          <label for="').concat(n.choices.b,'"\n            ><input type="radio" id="').concat(n.choices.b,'" name="').concat(n.name,'" value="').concat(n.choices.b,'"/>\n            ').concat(n.choices.b,'</label\n          ><br />\n          <label for="').concat(n.choices.c,'"\n            ><input type="radio" id="').concat(n.choices.c,'" name="').concat(n.name,'" value="').concat(n.choices.c,'"/>\n            ').concat(n.choices.c,'</label\n          ><br />\n          <label for="').concat(n.choices.d,'"\n            ><input type="radio" id="').concat(n.choices.a,'" name="').concat(n.name,'" value="').concat(n.choices.d,'"/>\n            ').concat(n.choices.d,"</label\n          ><br /><br />\n        </div>"))});c.DOMSelectors.submitButton.addEventListener("click",function(){var e=0;n.qna.forEach(function(o){if(document.querySelector('input[name="'.concat(o.name,'"]:checked'))){var a=document.querySelector('input[name="'.concat(o.name,'"]:checked')).value;a=="".concat(o.correct)?(e++,document.getElementById("".concat(o.name)).style.color="green"):"Shawarma"!=a&&(document.getElementById("".concat(o.name)).style.color="red"),c.DOMSelectors.resultContainer.innerHTML="<h1>Your Score is ".concat(e,"/").concat(n.qna.length,"</h1>")}})})};e();
},{"./dom":"EpLS","./qna":"c6xo"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.3962eb85.js.map