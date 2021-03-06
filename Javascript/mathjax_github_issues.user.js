// ==UserScript==
// @name           MathJax for Github
// @namespace      http://www.mathjax.org/
// @description    Insert MathJax into Github comment pages
// @include        https://github.com/*/*/issues/*
// ==/UserScript==
//
/*
if ((window.unsafeWindow == null ? window : unsafeWindow).MathJax == null) {
  if ((document.getElementsByTagName("math").length > 0) ||
      (document.getElementsByTagNameNS == null ? false :
      (document.getElementsByTagNameNS("http://www.w3.org/1998/Math/MathML","math").length > 0))) {
    var script = document.createElement("script");
    script.src = "https://raw.githubusercontent.com/solomonxie/user_content_media/master/MathJax.js";  // put your URL here
    var config = 'MathJax.Hub.Config({' + 'extensions:["mml2jax.js"],' + 'jax:["input/MathML","output/HTML-CSS"]' + '});' + 'MathJax.Hub.Startup.onload()';
    if (window.opera) {script.innerHTML = config;} else {script.text = config;}
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}
*/


var script = document.createElement("script");
script.src = "https://raw.githubusercontent.com/solomonxie/user_content_media/master/MathJax.js";  // put your URL here
var config = 'MathJax.Hub.Config({' + 'extensions:["mml2jax.js"],' + 'jax:["input/MathML","output/HTML-CSS"]' + '});' + 'MathJax.Hub.Startup.onload()';
if (window.opera) {script.innerHTML = config;} else {script.text = config;}
document.getElementsByTagName("head")[0].appendChild(script);
