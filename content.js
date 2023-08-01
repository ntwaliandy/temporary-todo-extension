// content.js
const iframe = document.createElement("iframe");
iframe.src = chrome.runtime.getURL("build/index.html");
iframe.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: 9999999;
`;

document.body.appendChild(iframe);