// ==UserScript==
// @name         Youtube Grayscale Thumbnails
// @version      0.1
// @description  A poc greasemonkey/tampermonkey script for desaturating all youtube thumbnails for increased productivity.
// @author       aiddun
// @match        https://youtube.com/
// @match        https://*.youtube.com/*
// ==/UserScript==

console.log("hi")

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('img, svg, paper-button.ytd-subscribe-button-renderer{ filter: grayscale(100); }');
addGlobalStyle('ytd-video-meta-block,ytd-badge-supported-renderer {display: none !important;}');
