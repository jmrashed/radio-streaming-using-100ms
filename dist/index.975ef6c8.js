// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _hmsVideoStore = require("@100mslive/hms-video-store");
// Initialize HMS Store
const hmsManager = new (0, _hmsVideoStore.HMSReactiveStore)();
hmsManager.triggerOnSubscribe();
const hmsStore = hmsManager.getStore();
const hmsActions = hmsManager.getActions();
// HTML elements
const form = document.getElementById("join");
const joinBtn = document.getElementById("join-btn");
const conference = document.getElementById("conference");
const peersContainer = document.getElementById("peers-container");
const leaveBtn = document.getElementById("leave-btn");
const muteAudio = document.getElementById("mute-aud");
const muteVideo = document.getElementById("mute-vid");
const controls = document.getElementById("controls");
// store peer IDs already rendered to avoid re-render on mute/unmute
const renderedPeerIDs = new Set();
// Joining the room
joinBtn.onclick = async ()=>{
    const roomCode = document.getElementById("room-code").value;
    const userName = document.getElementById("name").value;
    const authToken = await hmsActions.getAuthTokenByRoomCode({
        roomCode
    });
    hmsActions.join({
        userName,
        authToken
    });
};
// Leaving the room
async function leaveRoom() {
    await hmsActions.leave();
    peersContainer.innerHTML = "";
}
// Cleanup if user refreshes the tab or navigates away
window.onunload = window.onbeforeunload = leaveRoom;
leaveBtn.onclick = leaveRoom;
// Helper function to create html elements
function createElementWithClass(tag, className) {
    const newElement = document.createElement(tag);
    newElement.className = className;
    return newElement;
}
// Render a single peer
function renderPeer(peer) {
    const peerTileDiv = createElementWithClass("div", "peer-tile");
    const videoElement = createElementWithClass("video", "peer-video");
    const peerTileName = createElementWithClass("div", "peer-name");
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.playsinline = true;
    peerTileName.textContent = peer.name;
    hmsStore.subscribe((track)=>{
        if (!track) return;
        if (track.enabled) hmsActions.attachVideo(track.id, videoElement);
        else hmsActions.detachVideo(track.id, videoElement);
    }, (0, _hmsVideoStore.selectVideoTrackByID)(peer.videoTrack));
    peerTileDiv.append(videoElement);
    peerTileDiv.append(peerTileName);
    renderedPeerIDs.add(peer.id);
    return peerTileDiv;
}
// display a tile for each peer in the peer list
function renderPeers() {
    const peers = hmsStore.getState((0, _hmsVideoStore.selectPeers));
    peers.forEach((peer)=>{
        if (!renderedPeerIDs.has(peer.id) && peer.videoTrack) peersContainer.append(renderPeer(peer));
    });
}
// Reactive state - renderPeers is called whenever there is a change in the peer-list
hmsStore.subscribe(renderPeers, (0, _hmsVideoStore.selectPeers));
// Mute and unmute audio
muteAudio.onclick = async ()=>{
    const audioEnabled = !hmsStore.getState((0, _hmsVideoStore.selectIsLocalAudioEnabled));
    await hmsActions.setLocalAudioEnabled(audioEnabled);
    muteAudio.textContent = audioEnabled ? "Mute" : "Unmute";
};
// Mute and unmute video
muteVideo.onclick = async ()=>{
    const videoEnabled = !hmsStore.getState((0, _hmsVideoStore.selectIsLocalVideoEnabled));
    await hmsActions.setLocalVideoEnabled(videoEnabled);
    muteVideo.textContent = videoEnabled ? "Hide" : "Unhide";
};
// Showing the required elements on connection/disconnection
function onConnection(isConnected) {
    if (isConnected) {
        form.classList.add("hide");
        conference.classList.remove("hide");
        leaveBtn.classList.remove("hide");
        controls.classList.remove("hide");
    } else {
        form.classList.remove("hide");
        conference.classList.add("hide");
        leaveBtn.classList.add("hide");
        controls.classList.add("hide");
    }
}
// Listen to the connection state
hmsStore.subscribe(onConnection, (0, _hmsVideoStore.selectIsConnectedToRoom));

},{"@100mslive/hms-video-store":"2Cso5"}],"2Cso5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BeamControllerStore", ()=>we);
parcelHelpers.export(exports, "DeviceType", ()=>(0, _hmsVideo.DeviceType));
parcelHelpers.export(exports, "HMSAudioPluginType", ()=>(0, _hmsVideo.HMSAudioPluginType));
parcelHelpers.export(exports, "HMSLogLevel", ()=>(0, _hmsVideo.HMSLogLevel));
parcelHelpers.export(exports, "HMSMessageType", ()=>Be);
parcelHelpers.export(exports, "HMSNotificationSeverity", ()=>R);
parcelHelpers.export(exports, "HMSNotificationTypes", ()=>m);
parcelHelpers.export(exports, "HMSPlaylistType", ()=>M);
parcelHelpers.export(exports, "HMSReactiveStore", ()=>L);
parcelHelpers.export(exports, "HMSRoomState", ()=>h);
parcelHelpers.export(exports, "HMSSimulcastLayer", ()=>(0, _hmsVideo.HMSSimulcastLayer));
parcelHelpers.export(exports, "HMSStats", ()=>He);
parcelHelpers.export(exports, "HMSVideoPluginCanvasContextType", ()=>(0, _hmsVideo.HMSVideoPluginCanvasContextType));
parcelHelpers.export(exports, "HMSVideoPluginType", ()=>(0, _hmsVideo.HMSVideoPluginType));
parcelHelpers.export(exports, "createDefaultStatsStore", ()=>re);
parcelHelpers.export(exports, "createDefaultStoreState", ()=>oe);
parcelHelpers.export(exports, "parsedUserAgent", ()=>(0, _hmsVideo.parsedUserAgent));
parcelHelpers.export(exports, "selectAppData", ()=>zo);
parcelHelpers.export(exports, "selectAppDataByPath", ()=>Zo);
parcelHelpers.export(exports, "selectAudioPlaylist", ()=>nt);
parcelHelpers.export(exports, "selectAudioPlaylistTrackByPeerID", ()=>ur);
parcelHelpers.export(exports, "selectAudioTrackByID", ()=>tr);
parcelHelpers.export(exports, "selectAudioTrackByPeerID", ()=>Zt);
parcelHelpers.export(exports, "selectAudioTrackVolume", ()=>Mt);
parcelHelpers.export(exports, "selectAudioVolumeByPeerID", ()=>hr);
parcelHelpers.export(exports, "selectAuxiliaryAudioByPeerID", ()=>Sr);
parcelHelpers.export(exports, "selectAuxiliaryTracksByPeerID", ()=>rr);
parcelHelpers.export(exports, "selectAvailableRoleNames", ()=>Eo);
parcelHelpers.export(exports, "selectBroadcastMessages", ()=>ts);
parcelHelpers.export(exports, "selectBroadcastMessagesUnreadCount", ()=>yr);
parcelHelpers.export(exports, "selectCameraStreamByPeerID", ()=>or);
parcelHelpers.export(exports, "selectConnectionQualities", ()=>uo);
parcelHelpers.export(exports, "selectConnectionQualityByPeerID", ()=>cr);
parcelHelpers.export(exports, "selectDegradedTracks", ()=>Po);
parcelHelpers.export(exports, "selectDevices", ()=>lo);
parcelHelpers.export(exports, "selectDidIJoinWithin", ()=>Wr);
parcelHelpers.export(exports, "selectDominantSpeaker", ()=>Ho);
parcelHelpers.export(exports, "selectErrors", ()=>Bt);
parcelHelpers.export(exports, "selectFullAppData", ()=>fe);
parcelHelpers.export(exports, "selectHLSState", ()=>No);
parcelHelpers.export(exports, "selectHMSMessages", ()=>le);
parcelHelpers.export(exports, "selectHMSMessagesCount", ()=>Je);
parcelHelpers.export(exports, "selectHMSStats", ()=>qs);
parcelHelpers.export(exports, "selectIsAllowedToPreviewMedia", ()=>_r);
parcelHelpers.export(exports, "selectIsAllowedToPublish", ()=>Or);
parcelHelpers.export(exports, "selectIsAllowedToSubscribe", ()=>bo);
parcelHelpers.export(exports, "selectIsAudioLocallyMuted", ()=>pt);
parcelHelpers.export(exports, "selectIsConnectedToRoom", ()=>G);
parcelHelpers.export(exports, "selectIsInPreview", ()=>Io);
parcelHelpers.export(exports, "selectIsLocalAudioEnabled", ()=>ho);
parcelHelpers.export(exports, "selectIsLocalAudioPluginPresent", ()=>Gr);
parcelHelpers.export(exports, "selectIsLocalScreenShared", ()=>ye);
parcelHelpers.export(exports, "selectIsLocalVideoDisplayEnabled", ()=>Qe);
parcelHelpers.export(exports, "selectIsLocalVideoEnabled", ()=>ge);
parcelHelpers.export(exports, "selectIsLocalVideoPluginPresent", ()=>jr);
parcelHelpers.export(exports, "selectIsLocallyMutedByPeerID", ()=>mr);
parcelHelpers.export(exports, "selectIsPeerAudioEnabled", ()=>Mr);
parcelHelpers.export(exports, "selectIsPeerVideoEnabled", ()=>Tr);
parcelHelpers.export(exports, "selectIsRoleAllowedToPublish", ()=>qr);
parcelHelpers.export(exports, "selectIsScreenShareLocallyMutedByPeerID", ()=>Hr);
parcelHelpers.export(exports, "selectIsSomeoneScreenSharing", ()=>fo);
parcelHelpers.export(exports, "selectLocalAudioTrackID", ()=>N);
parcelHelpers.export(exports, "selectLocalMediaSettings", ()=>$e);
parcelHelpers.export(exports, "selectLocalPeer", ()=>E);
parcelHelpers.export(exports, "selectLocalPeerID", ()=>Q);
parcelHelpers.export(exports, "selectLocalPeerName", ()=>Mo);
parcelHelpers.export(exports, "selectLocalPeerRole", ()=>de);
parcelHelpers.export(exports, "selectLocalPeerRoleName", ()=>To);
parcelHelpers.export(exports, "selectLocalTrackIDs", ()=>We);
parcelHelpers.export(exports, "selectLocalVideoTrackID", ()=>b);
parcelHelpers.export(exports, "selectMessageIDsInOrder", ()=>Fe);
parcelHelpers.export(exports, "selectMessagesByPeerID", ()=>kr);
parcelHelpers.export(exports, "selectMessagesByRole", ()=>Rr);
parcelHelpers.export(exports, "selectMessagesMap", ()=>Ge);
parcelHelpers.export(exports, "selectMessagesUnreadCountByPeerID", ()=>vr);
parcelHelpers.export(exports, "selectMessagesUnreadCountByRole", ()=>Pr);
parcelHelpers.export(exports, "selectPeerAudioByID", ()=>ar);
parcelHelpers.export(exports, "selectPeerByCondition", ()=>Fr);
parcelHelpers.export(exports, "selectPeerByID", ()=>x);
parcelHelpers.export(exports, "selectPeerCount", ()=>po);
parcelHelpers.export(exports, "selectPeerMetadata", ()=>Er);
parcelHelpers.export(exports, "selectPeerName", ()=>br);
parcelHelpers.export(exports, "selectPeerNameByID", ()=>er);
parcelHelpers.export(exports, "selectPeerScreenSharing", ()=>Ft);
parcelHelpers.export(exports, "selectPeerSharingAudio", ()=>go);
parcelHelpers.export(exports, "selectPeerSharingAudioPlaylist", ()=>Ro);
parcelHelpers.export(exports, "selectPeerSharingVideoPlaylist", ()=>ko);
parcelHelpers.export(exports, "selectPeers", ()=>V);
parcelHelpers.export(exports, "selectPeersByCondition", ()=>$r);
parcelHelpers.export(exports, "selectPeersByRole", ()=>Ir);
parcelHelpers.export(exports, "selectPeersByRoles", ()=>Dr);
parcelHelpers.export(exports, "selectPeersMap", ()=>I);
parcelHelpers.export(exports, "selectPeersScreenSharing", ()=>yo);
parcelHelpers.export(exports, "selectPeersWithAudioStatus", ()=>Lr);
parcelHelpers.export(exports, "selectPermissions", ()=>ze);
parcelHelpers.export(exports, "selectPreviewRole", ()=>Ye);
parcelHelpers.export(exports, "selectPreviewRoleName", ()=>$t);
parcelHelpers.export(exports, "selectRTMPState", ()=>Co);
parcelHelpers.export(exports, "selectRecentError", ()=>co);
parcelHelpers.export(exports, "selectRecordingState", ()=>Ao);
parcelHelpers.export(exports, "selectRemotePeers", ()=>mo);
parcelHelpers.export(exports, "selectRoleByRoleName", ()=>rs);
parcelHelpers.export(exports, "selectRoleChangeRequest", ()=>wr);
parcelHelpers.export(exports, "selectRolesMap", ()=>U);
parcelHelpers.export(exports, "selectRoom", ()=>v);
parcelHelpers.export(exports, "selectRoomID", ()=>So);
parcelHelpers.export(exports, "selectRoomStartTime", ()=>Lo);
parcelHelpers.export(exports, "selectRoomStarted", ()=>Do);
parcelHelpers.export(exports, "selectRoomState", ()=>A);
parcelHelpers.export(exports, "selectScreenAudioTrackByID", ()=>sr);
parcelHelpers.export(exports, "selectScreenShareAudioByPeerID", ()=>ut);
parcelHelpers.export(exports, "selectScreenShareByPeerID", ()=>pr);
parcelHelpers.export(exports, "selectScreenSharesByPeerId", ()=>dt);
parcelHelpers.export(exports, "selectScreenVideoTrackByID", ()=>ir);
parcelHelpers.export(exports, "selectScreenshareAudioVolumeByPeerID", ()=>fr);
parcelHelpers.export(exports, "selectSessionId", ()=>xo);
parcelHelpers.export(exports, "selectSessionMetadata", ()=>Oo);
parcelHelpers.export(exports, "selectSessionStore", ()=>Xo);
parcelHelpers.export(exports, "selectSimulcastLayerByTrack", ()=>gr);
parcelHelpers.export(exports, "selectSpeakers", ()=>qt);
parcelHelpers.export(exports, "selectTemplateAppData", ()=>wo);
parcelHelpers.export(exports, "selectTrackAudioByID", ()=>nr);
parcelHelpers.export(exports, "selectTrackByID", ()=>ue);
parcelHelpers.export(exports, "selectTracksMap", ()=>f);
parcelHelpers.export(exports, "selectUnreadHMSMessagesCount", ()=>vo);
parcelHelpers.export(exports, "selectVideoPlaylist", ()=>at);
parcelHelpers.export(exports, "selectVideoPlaylistAudioTrackByPeerID", ()=>dr);
parcelHelpers.export(exports, "selectVideoPlaylistVideoTrackByPeerID", ()=>lr);
parcelHelpers.export(exports, "selectVideoTrackByID", ()=>St);
parcelHelpers.export(exports, "selectVideoTrackByPeerID", ()=>Xt);
parcelHelpers.export(exports, "simulcastMapping", ()=>(0, _hmsVideo.simulcastMapping));
var _immer = require("immer");
var _immerDefault = parcelHelpers.interopDefault(_immer);
var _shallow = require("zustand/shallow");
var _shallowDefault = parcelHelpers.interopDefault(_shallow);
var _vanilla = require("zustand/vanilla");
var _vanillaDefault = parcelHelpers.interopDefault(_vanilla);
var _hmsVideo = require("@100mslive/hms-video");
var _eventemitter2 = require("eventemitter2");
var _reselect = require("reselect");
var Et = Object.defineProperty, bt = Object.defineProperties;
var At = Object.getOwnPropertyDescriptors;
var Ke = Object.getOwnPropertySymbols;
var Ct = Object.prototype.hasOwnProperty, Nt = Object.prototype.propertyIsEnumerable;
var Ve = (s, e, t)=>e in s ? Et(s, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : s[e] = t, O = (s, e)=>{
    for(var t in e || (e = {}))Ct.call(e, t) && Ve(s, t, e[t]);
    if (Ke) for (var t of Ke(e))Nt.call(e, t) && Ve(s, t, e[t]);
    return s;
}, J = (s, e)=>bt(s, At(e));
var xt = (s, e)=>()=>(e || s((e = {
            exports: {}
        }).exports, e), e.exports);
var c = (s, e, t)=>new Promise((i, o)=>{
        var r = (d)=>{
            try {
                a(t.next(d));
            } catch (P) {
                o(P);
            }
        }, n = (d)=>{
            try {
                a(t.throw(d));
            } catch (P) {
                o(P);
            }
        }, a = (d)=>d.done ? i(d.value) : Promise.resolve(d.value).then(r, n);
        a((t = t.apply(s, e)).next());
    });
var Dt = xt((Tc, js)=>{
    js.exports = {
        version: "0.10.3",
        license: "MIT",
        main: "dist/index.cjs.js",
        module: "dist/index.js",
        typings: "dist/index.d.ts",
        files: [
            "dist",
            "src"
        ],
        engines: {
            node: ">=12"
        },
        exports: {
            ".": {
                require: "./dist/index.cjs.js",
                import: "./dist/index.js",
                default: "./dist/index.js"
            }
        },
        scripts: {
            prestart: "rm -rf dist && yarn types:build",
            start: 'concurrently "yarn dev" "yarn types"',
            dev: "node ../../scripts/dev",
            "build:only": "node ../../scripts/build",
            build: "yarn build:only && yarn types:build",
            types: "tsc -w",
            "types:build": "tsc -p tsconfig.json",
            format: "prettier --write src/**/*.ts",
            test: "jest --maxWorkers=1",
            "test:watch": "jest --watch",
            "test:coverage": "jest --coverage",
            lint: "eslint -c ../../.eslintrc .",
            "lint:fix": "yarn lint --fix",
            prepare: "yarn build",
            size: "size-limit",
            analyze: "size-limit --why",
            docs: "rm -rf ./docs && typedoc && rm -f ./docs/README.md && mkdir ./docs/home &&mv ./docs/modules.md ./docs/home/content.md && node ../../scripts/docs-store && npx prettier --write './docs/**/*'"
        },
        name: "@100mslive/hms-video-store",
        author: "100ms",
        sideEffects: !1,
        dependencies: {
            "@100mslive/hms-video": "0.9.3",
            eventemitter2: "^6.4.7",
            immer: "^9.0.6",
            reselect: "4.0.0",
            zustand: "3.5.7"
        },
        devDependencies: {
            "ts-node": "^10.4.0",
            tslib: "^2.2.0"
        },
        description: "This is an addon to the core sdk provided by 100ms. It abstracts away the intricacies of data management and provides a flux based reactive data store where data flows in only one direction.",
        repository: {
            type: "git",
            url: "git+https://github.com/100mslive/hms-video-store.git"
        },
        keywords: [
            "video",
            "webrtc",
            "conferencing",
            "100ms"
        ],
        bugs: {
            url: "https://github.com/100mslive/hms-video-store/issues"
        },
        homepage: "https://github.com/100mslive/hms-video-store#readme",
        gitHead: "964db25173e4264322e03a949cbd739848361e14"
    };
});
var h;
(function(a) {
    a.Disconnected = "Disconnected", a.Preview = "Preview", a.Connecting = "Connecting", a.Connected = "Connected", a.Reconnecting = "Reconnecting", a.Disconnecting = "Disconnecting", a.Failed = "Failed";
})(h || (h = {}));
var oe = ()=>({
        room: {
            id: "",
            isConnected: !1,
            name: "",
            peers: [],
            localPeer: "",
            roomState: h.Disconnected,
            recording: {
                browser: {
                    running: !1
                },
                server: {
                    running: !1
                },
                hls: {
                    running: !1
                }
            },
            rtmp: {
                running: !1
            },
            hls: {
                running: !1,
                variants: []
            },
            sessionId: ""
        },
        peers: {},
        tracks: {},
        playlist: {
            audio: {
                list: {},
                selection: {
                    id: "",
                    hasPrevious: !1,
                    hasNext: !1
                },
                progress: 0,
                volume: 0,
                currentTime: 0,
                playbackRate: 1
            },
            video: {
                list: {},
                selection: {
                    id: "",
                    hasPrevious: !1,
                    hasNext: !1
                },
                progress: 0,
                volume: 0,
                currentTime: 0,
                playbackRate: 1
            }
        },
        messages: {
            byID: {},
            allIDs: []
        },
        speakers: {},
        connectionQualities: {},
        settings: {
            audioInputDeviceId: "",
            audioOutputDeviceId: "",
            videoInputDeviceId: ""
        },
        devices: {
            audioInput: [],
            audioOutput: [],
            videoInput: []
        },
        roles: {},
        roleChangeRequests: [],
        errors: [],
        sessionStore: {},
        templateAppData: {}
    }), re = ()=>({
        peerStats: {},
        remoteTrackStats: {},
        localTrackStats: {},
        localPeer: {
            id: ""
        }
    });
var Be;
(function(e) {
    e.CHAT = "chat";
})(Be || (Be = {}));
var R;
(function(t) {
    t.INFO = "info", t.ERROR = "error";
})(R || (R = {}));
var m;
(function(l) {
    l.PEER_JOINED = "PEER_JOINED", l.PEER_LEFT = "PEER_LEFT", l.PEER_LIST = "PEER_LIST", l.NEW_MESSAGE = "NEW_MESSAGE", l.ERROR = "ERROR", l.RECONNECTING = "RECONNECTING", l.RECONNECTED = "RECONNECTED", l.TRACK_ADDED = "TRACK_ADDED", l.TRACK_REMOVED = "TRACK_REMOVED", l.TRACK_MUTED = "TRACK_MUTED", l.TRACK_UNMUTED = "TRACK_UNMUTED", l.TRACK_DEGRADED = "TRACK_DEGRADED", l.TRACK_RESTORED = "TRACK_RESTORED", l.TRACK_DESCRIPTION_CHANGED = "TRACK_DESCRIPTION_CHANGED", l.ROLE_UPDATED = "ROLE_UPDATED", l.CHANGE_TRACK_STATE_REQUEST = "CHANGE_TRACK_STATE_REQUEST", l.CHANGE_MULTI_TRACK_STATE_REQUEST = "CHANGE_MULTI_TRACK_STATE_REQUEST", l.ROOM_ENDED = "ROOM_ENDED", l.REMOVED_FROM_ROOM = "REMOVED_FROM_ROOM", l.DEVICE_CHANGE_UPDATE = "DEVICE_CHANGE_UPDATE", l.PLAYLIST_TRACK_ENDED = "PLAYLIST_TRACK_ENDED", l.NAME_UPDATED = "NAME_UPDATED", l.METADATA_UPDATED = "METADATA_UPDATED";
})(m || (m = {}));
var M;
(function(t) {
    t.audio = "audio", t.video = "video";
})(M || (M = {}));
var ae = {
    [(0, _hmsVideo.HMSPeerUpdate).PEER_JOINED]: m.PEER_JOINED,
    [(0, _hmsVideo.HMSPeerUpdate).PEER_LEFT]: m.PEER_LEFT,
    [(0, _hmsVideo.HMSPeerUpdate).ROLE_UPDATED]: m.ROLE_UPDATED,
    [(0, _hmsVideo.HMSPeerUpdate).NAME_UPDATED]: m.NAME_UPDATED,
    [(0, _hmsVideo.HMSPeerUpdate).METADATA_UPDATED]: m.METADATA_UPDATED
}, ce = {
    [(0, _hmsVideo.HMSTrackUpdate).TRACK_ADDED]: m.TRACK_ADDED,
    [(0, _hmsVideo.HMSTrackUpdate).TRACK_REMOVED]: m.TRACK_REMOVED,
    [(0, _hmsVideo.HMSTrackUpdate).TRACK_MUTED]: m.TRACK_MUTED,
    [(0, _hmsVideo.HMSTrackUpdate).TRACK_UNMUTED]: m.TRACK_UNMUTED,
    [(0, _hmsVideo.HMSTrackUpdate).TRACK_DEGRADED]: m.TRACK_DEGRADED,
    [(0, _hmsVideo.HMSTrackUpdate).TRACK_RESTORED]: m.TRACK_RESTORED,
    [(0, _hmsVideo.HMSTrackUpdate).TRACK_DESCRIPTION_CHANGED]: m.TRACK_DESCRIPTION_CHANGED
};
function W(s, e) {
    let t, i;
    if (e) for (let o of e.auxiliaryTracks){
        let r = s[o];
        Vt(r) && (i = z(r) ? r : i, t = X(r) ? r : t);
    }
    return {
        video: t,
        audio: i
    };
}
function z(s) {
    return s && s.type === "audio";
}
function X(s) {
    return s && s.type === "video";
}
function Vt(s) {
    return s && s.source === "screen";
}
function Se(s) {
    return s && s.source === "audioplaylist";
}
function Z(s) {
    return s && s.source === "videoplaylist";
}
function qe(s) {
    return s ? Boolean(s == null ? void 0 : s.degraded) : !1;
}
function Y(s, e) {
    return e && s.tracks[e] ? s.tracks[e].enabled : !1;
}
function je(s, e) {
    return e && s.tracks[e] ? s.tracks[e].displayEnabled : !1;
}
function ee(s) {
    var o;
    let e = !1, t = !1, i = !1;
    return ((o = s == null ? void 0 : s.publishParams) == null ? void 0 : o.allowed) && (e = s.publishParams.allowed.includes("video"), t = s.publishParams.allowed.includes("audio"), i = s.publishParams.allowed.includes("screen")), {
        video: e,
        audio: t,
        screen: i
    };
}
var v = (s)=>s.room, Bt = (s)=>s.errors, co = (0, _reselect.createSelector)(Bt, (s)=>s.length === 0 ? null : s.at(-1)), So = (0, _reselect.createSelector)(v, (s)=>s.id), I = (s)=>s.peers, Ge = (s)=>s.messages.byID, Fe = (s)=>s.messages.allIDs, f = (s)=>s.tracks, $e = (s)=>s.settings, fe = (s)=>s.appData, lo = (s)=>s.devices, qt = (s)=>s.speakers, uo = (s)=>s.connectionQualities, G = (0, _reselect.createSelector)([
    v
], (s)=>s && s.isConnected), po = (0, _reselect.createSelector)([
    G,
    v
], (s, e)=>s ? e.peerCount !== void 0 ? e.peerCount || 1 : e.peers.length : Math.max(e.peerCount !== void 0 ? e.peerCount : e.peers.length - 1, 0)), V = (0, _reselect.createSelector)([
    v,
    I
], (s, e)=>s.peers.map((t)=>e[t])), jt = (0, _reselect.createSelector)(f, (s)=>Object.values(s)), E = (0, _reselect.createSelector)(v, I, (s, e)=>e[s.localPeer]), Q = (0, _reselect.createSelector)(v, (s)=>s.localPeer), Mo = (0, _reselect.createSelector)(E, (s)=>s == null ? void 0 : s.name), To = (0, _reselect.createSelector)(E, (s)=>s == null ? void 0 : s.roleName), N = (0, _reselect.createSelector)(E, (s)=>s == null ? void 0 : s.audioTrack), b = (0, _reselect.createSelector)(E, (s)=>s == null ? void 0 : s.videoTrack), Gt = (0, _reselect.createSelector)(E, (s)=>s == null ? void 0 : s.auxiliaryTracks), We = (0, _reselect.createSelector)([
    N,
    b,
    Gt
], (s, e, t)=>{
    let i = t ? [
        ...t
    ] : [];
    return s && i.unshift(s), e && i.unshift(e), i;
}), mo = (0, _reselect.createSelector)(V, (s)=>s.filter((e)=>!e.isLocal)), Ho = (0, _reselect.createSelector)(I, qt, (s, e)=>{
    let t = Object.entries(e).sort((i, o)=>{
        var a, d;
        let r = ((a = i[1]) == null ? void 0 : a.audioLevel) || 0;
        return (((d = o[1]) == null ? void 0 : d.audioLevel) || 0) > r ? 1 : -1;
    });
    if (t.length > 0 && t[0][1].audioLevel && t[0][1].audioLevel > 0) {
        let i = t[0][1].peerID;
        if (i in s) return s[i];
    }
    return null;
}), ho = (s)=>{
    let e = E(s);
    return Y(s, e == null ? void 0 : e.audioTrack);
}, ge = (s)=>{
    let e = E(s);
    return Y(s, e == null ? void 0 : e.videoTrack);
}, Qe = (s)=>{
    let e = E(s);
    return je(s, e == null ? void 0 : e.videoTrack);
}, ye = (0, _reselect.createSelector)(E, f, (s, e)=>{
    let { video: t , audio: i  } = W(e, s);
    return !!(t || i);
}), Ft = (0, _reselect.createSelector)(I, f, (s, e)=>{
    let t;
    for(let i in s){
        let o = s[i], { video: r , audio: n  } = W(e, o);
        if (r) return o;
        n && !t && (t = o);
    }
    return t;
}), fo = (0, _reselect.createSelector)(Ft, (s)=>!!s), go = (0, _reselect.createSelector)(I, f, (s, e)=>{
    for(let t in s){
        let i = s[t], { audio: o , video: r  } = W(e, i);
        if (!r && !!o) return i;
    }
}), yo = (0, _reselect.createSelector)(I, f, (s, e)=>{
    let t = [], i = [];
    for(let o in s){
        let r = s[o], { video: n , audio: a  } = W(e, r);
        n ? t.push(r) : a && i.push(r);
    }
    return t.concat(i);
}), ko = (0, _reselect.createSelector)(I, f, (s, e)=>{
    for(let t in e){
        let i = e[t];
        if (Z(i) && X(i) && i.peerId) return s[i.peerId];
    }
}), Ro = (0, _reselect.createSelector)(I, f, (s, e)=>{
    for(let t in e){
        let i = e[t];
        if (Se(i) && i.peerId) return s[i.peerId];
    }
}), Po = (0, _reselect.createSelector)(jt, (s)=>s.filter(qe)), Je = (0, _reselect.createSelector)(Fe, (s)=>s.length), vo = (0, _reselect.createSelector)(Ge, (s)=>Object.values(s).filter((e)=>!e.read).length), le = (0, _reselect.createSelector)(Fe, Ge, (s, e)=>{
    let t = [];
    return s.forEach((i)=>{
        t.push(e[i]);
    }), t;
}), A = (0, _reselect.createSelector)([
    v
], (s)=>s && s.roomState), Io = (0, _reselect.createSelector)(A, (s)=>s === h.Preview), Do = (0, _reselect.createSelector)(v, (s)=>s.roomState !== h.Disconnected), U = (s)=>s.roles, Eo = (0, _reselect.createSelector)([
    U
], (s)=>Object.keys(s)), de = (0, _reselect.createSelector)([
    E,
    U
], (s, e)=>(s == null ? void 0 : s.roleName) ? e[s.roleName] : null), $t = (s)=>{
    var e;
    return (e = s.preview) == null ? void 0 : e.asRole;
}, Ye = (0, _reselect.createSelector)([
    $t,
    U
], (s, e)=>s ? e[s] : null), bo = (0, _reselect.createSelector)([
    de
], (s)=>{
    var e;
    return ((e = s == null ? void 0 : s.subscribeParams) == null ? void 0 : e.subscribeToRoles) ? s.subscribeParams.subscribeToRoles.length > 0 : !1;
}), ze = (0, _reselect.createSelector)(de, (s)=>s == null ? void 0 : s.permissions), Ao = (0, _reselect.createSelector)(v, (s)=>s.recording), Co = (0, _reselect.createSelector)(v, (s)=>s.rtmp), No = (0, _reselect.createSelector)(v, (s)=>s.hls), xo = (0, _reselect.createSelector)(v, (s)=>s.sessionId), Lo = (0, _reselect.createSelector)(v, (s)=>s.startedAt), wo = (s)=>s.templateAppData, Oo = (s)=>s.sessionMetadata;
var Ze = (s = M.audio)=>(e)=>e.playlist[s].list, ke = (s = M.audio)=>(e)=>e.playlist[s].selection, et = (s = M.audio)=>(e)=>e.playlist[s].progress, tt = (s = M.audio)=>(e)=>e.playlist[s].currentTime, st = (s = M.audio)=>(e)=>e.playlist[s].playbackRate, it = (s = M.audio)=>(e)=>e.playlist[s].volume, ot = (s = M.audio)=>(0, _reselect.createSelector)(Ze(s), (e)=>Object.values(e)), rt = (s = M.audio)=>(0, _reselect.createSelector)(Ze(s), ke(s), (e, t)=>{
        if (!!t.id) return e[t.id];
    }), nt = {
    selection: ke(M.audio),
    progress: et(M.audio),
    currentTime: tt(M.audio),
    playbackRate: st(M.audio),
    volume: it(M.audio),
    list: ot(M.audio),
    selectedItem: rt(M.audio)
}, at = {
    selection: ke(M.video),
    progress: et(M.video),
    currentTime: tt(M.video),
    playbackRate: st(M.video),
    volume: it(M.video),
    list: ot(M.video),
    selectedItem: rt(M.video)
};
function p(s) {
    return (e)=>(t)=>s(t, e);
}
var te = "HMS-Store:", S = class {
    static v(e, ...t) {
        this.log((0, _hmsVideo.HMSLogLevel).VERBOSE, e, ...t);
    }
    static d(...e) {
        this.log((0, _hmsVideo.HMSLogLevel).DEBUG, ...e);
    }
    static i(...e) {
        this.log((0, _hmsVideo.HMSLogLevel).INFO, ...e);
    }
    static w(...e) {
        this.log((0, _hmsVideo.HMSLogLevel).WARN, ...e);
    }
    static e(...e) {
        this.log((0, _hmsVideo.HMSLogLevel).ERROR, ...e);
    }
    static time(e) {
        this.log((0, _hmsVideo.HMSLogLevel).TIME, "[HMSPerformanceTiming]", e);
    }
    static timeEnd(e) {
        this.log((0, _hmsVideo.HMSLogLevel).TIMEEND, "[HMSPerformanceTiming]", e, e);
    }
    static cleanUp() {
        performance.clearMarks(), performance.clearMeasures();
    }
    static log(e, ...t) {
        if (!(this.level.valueOf() > e.valueOf())) switch(e){
            case (0, _hmsVideo.HMSLogLevel).VERBOSE:
                console.log(te, ...t);
                break;
            case (0, _hmsVideo.HMSLogLevel).DEBUG:
                console.debug(te, ...t);
                break;
            case (0, _hmsVideo.HMSLogLevel).INFO:
                console.info(te, ...t);
                break;
            case (0, _hmsVideo.HMSLogLevel).WARN:
                console.warn(te, ...t);
                break;
            case (0, _hmsVideo.HMSLogLevel).ERROR:
                console.error(te, ...t);
                break;
            case (0, _hmsVideo.HMSLogLevel).TIME:
                performance.mark(t[1]);
                break;
            case (0, _hmsVideo.HMSLogLevel).TIMEEND:
                {
                    let i = t[0], o = t[1];
                    try {
                        let r = performance.measure(o, o);
                        this.log((0, _hmsVideo.HMSLogLevel).DEBUG, i, o, r == null ? void 0 : r.duration), performance.clearMarks(o), performance.clearMeasures(o);
                    } catch (r) {
                        this.log((0, _hmsVideo.HMSLogLevel).DEBUG, i, o, r);
                    }
                    break;
                }
        }
    }
};
S.level = (0, _hmsVideo.HMSLogLevel).VERBOSE;
var Re = (s, e)=>e, se = (s, e)=>e, ct = (s, e)=>e, Wt = (s, e)=>e, D = (0, _reselect.createSelector)([
    I,
    Re
], (s, e)=>e ? s[e] : null), Pe = (0, _reselect.createSelector)([
    f,
    se
], (s, e)=>e ? s[e] : null), Qt = (0, _reselect.createSelector)([
    f,
    se
], (s, e)=>{
    if (!e) return null;
    let t = s[e];
    return (t == null ? void 0 : t.type) === "video" ? t : null;
}), Jt = (0, _reselect.createSelector)([
    f,
    se
], (s, e)=>{
    if (!e) return null;
    let t = s[e];
    return (t == null ? void 0 : t.type) === "audio" ? t : null;
}), Yt = (0, _reselect.createSelector)([
    f,
    se
], (s, e)=>{
    if (!e) return null;
    let t = s[e];
    return (t == null ? void 0 : t.type) === "audio" && (t == null ? void 0 : t.source) === "screen" ? t : null;
}), zt = (0, _reselect.createSelector)([
    f,
    se
], (s, e)=>{
    if (!e) return null;
    let t = s[e];
    return (t == null ? void 0 : t.type) === "video" && (t == null ? void 0 : t.source) === "screen" ? t : null;
}), x = p(D), zo = p((0, _reselect.createSelector)([
    fe,
    Wt
], (s, e)=>{
    if (!!s) return e ? s[e] : s;
}));
function Xo(s) {
    return (e)=>{
        if (!!e.sessionStore) return s ? e.sessionStore[s] : e.sessionStore;
    };
}
var Zo = (...s)=>(0, _reselect.createSelector)([
        fe
    ], (e)=>{
        if (!!e) {
            if (s && s.length > 0) {
                let t = e;
                for (let i of s){
                    if (!i) return t;
                    t = t == null ? void 0 : t[i];
                }
                return t;
            }
            return e;
        }
    }), er = p((0, _reselect.createSelector)(D, (s)=>s == null ? void 0 : s.name)), ue = p(Pe), St = p(Qt), tr = p(Jt), sr = p(Yt), ir = p(zt), Xt = p((s, e)=>{
    let t = D(s, e);
    if (t && t.videoTrack && t.videoTrack !== "") return s.tracks[t.videoTrack];
}), Zt = p((s, e)=>{
    let t = D(s, e);
    if (t && t.audioTrack && t.audioTrack !== "") return s.tracks[t.audioTrack];
}), or = Xt, rr = p((s, e)=>{
    let t = D(s, e);
    return (t == null ? void 0 : t.auxiliaryTracks.map((i)=>s.tracks[i])) || [];
}), lt = (s, e)=>e ? s.speakers[e] : null, nr = p((0, _reselect.createSelector)(lt, (s)=>(s == null ? void 0 : s.audioLevel) || 0)), es = (s, e)=>{
    let t = Zt(e)(s);
    return lt(s, t == null ? void 0 : t.id);
}, ar = p((0, _reselect.createSelector)(es, (s)=>(s == null ? void 0 : s.audioLevel) || 0)), cr = p((s, e)=>{
    if (e) return s.connectionQualities[e];
}), Sr = p((s, e)=>{
    let t = D(s, e);
    if (t) {
        let i = t == null ? void 0 : t.auxiliaryTracks.find((o)=>z(s.tracks[o]));
        return i ? s.tracks[i] : void 0;
    }
}), lr = p((0, _reselect.createSelector)(f, D, (s, e)=>{
    let t = e == null ? void 0 : e.auxiliaryTracks.find((i)=>{
        let o = s[i];
        return Z(o) && X(o);
    });
    return t ? s[t] : void 0;
})), dr = p((0, _reselect.createSelector)(f, D, (s, e)=>{
    let t = e == null ? void 0 : e.auxiliaryTracks.find((i)=>{
        let o = s[i];
        return Z(o) && z(o);
    });
    return t ? s[t] : void 0;
})), ur = p((0, _reselect.createSelector)(f, D, (s, e)=>{
    let t = e == null ? void 0 : e.auxiliaryTracks.find((i)=>{
        let o = s[i];
        return Se(o) && z(o);
    });
    return t ? s[t] : void 0;
})), dt = p((0, _reselect.createSelector)(f, D, (s, e)=>W(s, e))), pr = (s)=>(0, _reselect.createSelector)(dt(s), (e)=>e.video), ut = (s)=>(0, _reselect.createSelector)(dt(s), (e)=>e.audio), Mr = p((s, e)=>{
    let t = D(s, e);
    return Y(s, t == null ? void 0 : t.audioTrack);
}), Tr = p((s, e)=>{
    let t = D(s, e);
    return Y(s, t == null ? void 0 : t.videoTrack);
}), pt = p((s, e)=>{
    if (e && s.tracks[e]) return s.tracks[e].volume === 0;
}), mr = p((s, e)=>{
    let t = D(s, e);
    return pt(t == null ? void 0 : t.audioTrack)(s);
}), Hr = p((s, e)=>{
    let t = ut(e)(s);
    return pt(t == null ? void 0 : t.id)(s);
}), Mt = p((s, e)=>{
    let t = Pe(s, e);
    if (t) {
        if (t.type !== "audio") {
            S.w("Please pass audio track here");
            return;
        }
        return t.volume;
    }
}), hr = p((s, e)=>{
    let t = D(s, e);
    return Mt(t == null ? void 0 : t.audioTrack)(s);
}), fr = p((s, e)=>{
    let t = ut(e)(s);
    return Mt(t == null ? void 0 : t.id)(s);
}), gr = p((s, e)=>{
    let t = Pe(s, e);
    if (t) {
        if (t.type !== "video") {
            S.w("Please pass video track here");
            return;
        }
        return t.layer;
    }
}), Tt = (0, _reselect.createSelector)([
    le,
    Q,
    Re
], (s, e, t)=>{
    if (!!t) return s.filter((i)=>{
        var o;
        return !i.recipientPeer && !((o = i.recipientRoles) == null ? void 0 : o.length) || i.sender && ![
            e,
            t
        ].includes(i.sender) ? !1 : [
            e,
            t
        ].includes(i.recipientPeer);
    });
}), mt = (0, _reselect.createSelector)([
    le,
    ct
], (s, e)=>{
    if (!!e) return s.filter((t)=>{
        var i, o;
        return ((i = t.recipientRoles) == null ? void 0 : i.length) ? (o = t.recipientRoles) == null ? void 0 : o.includes(e) : !1;
    });
}), ts = (0, _reselect.createSelector)(le, (s)=>s.filter((e)=>{
        var t;
        return !e.recipientPeer && !((t = e.recipientRoles) == null ? void 0 : t.length);
    })), ss = (0, _reselect.createSelector)([
    mt,
    ct
], (s)=>s ? s.filter((e)=>!e.read).length : 0), is = (0, _reselect.createSelector)([
    Tt,
    Re
], (s)=>s ? s.filter((e)=>!e.read).length : 0), yr = (0, _reselect.createSelector)(ts, (s)=>s.filter((e)=>!e.read).length), kr = p(Tt), Rr = p(mt), Pr = p(ss), vr = p(is), Ir = (s)=>(0, _reselect.createSelector)([
        V
    ], (e)=>e.filter((t)=>t.roleName === s)), Dr = (s)=>(0, _reselect.createSelector)([
        V
    ], (e)=>e.filter((t)=>t.roleName ? s.includes(t.roleName) : !1)), Er = (s)=>(0, _reselect.createSelector)(x(s), (e)=>{
        try {
            return (e == null ? void 0 : e.metadata) && e.metadata !== "" ? JSON.parse(e.metadata) : {};
        } catch (t) {
            return console.error("cannot parse peer metadata", t), {};
        }
    }), br = (s)=>(0, _reselect.createSelector)(x(s), (e)=>e == null ? void 0 : e.name);
var Lr = (0, _reselect.createSelector)([
    I,
    f
], (s, e)=>Object.values(s).map((i)=>{
        var o;
        return {
            peer: i,
            isAudioEnabled: i.audioTrack ? (o = e[i.audioTrack]) == null ? void 0 : o.enabled : !1
        };
    })), os = (s)=>s.roleChangeRequests[0] || null, wr = (0, _reselect.createSelector)([
    os,
    I,
    U
], (s, e, t)=>s ? {
        requestedBy: s.requestedBy ? e[s.requestedBy] : void 0,
        role: t[s.roleName],
        token: s.token
    } : null), Or = (0, _reselect.createSelector)([
    de
], (s)=>ee(s)), _r = (0, _reselect.createSelector)([
    Ye
], (s)=>ee(s));
var rs = (s)=>(0, _reselect.createSelector)([
        U
    ], (e)=>e[s]), qr = (s)=>(0, _reselect.createSelector)(rs(s), (e)=>ee(e)), ns = (0, _reselect.createSelector)([
    b,
    f
], (s, e)=>{
    let t = null;
    return s && (t = e[s]), (t == null ? void 0 : t.plugins) || [];
}), as = (0, _reselect.createSelector)([
    N,
    f
], (s, e)=>{
    let t = null;
    return s && (t = e[s]), (t == null ? void 0 : t.plugins) || [];
}), jr = (s)=>(0, _reselect.createSelector)([
        ns
    ], (e)=>e.includes(s)), Gr = (s)=>(0, _reselect.createSelector)([
        as
    ], (e)=>e.includes(s)), Fr = (s)=>(0, _reselect.createSelector)(V, (e)=>e.find(s)), $r = (s)=>(0, _reselect.createSelector)(V, (e)=>e.filter(s)), Wr = (s)=>(0, _reselect.createSelector)(v, (e)=>e.joinedAt && Date.now() - e.joinedAt.getTime() <= s);
var ve = "hmsNotification", Ie = class {
    constructor(e){
        this.id = 0;
        this.onNotification = (e, t)=>{
            let i = (o)=>{
                if (t) {
                    let r;
                    if (Array.isArray(t) ? r = t.includes(o.type) : r = t === o.type, !r) return;
                }
                e(o);
            };
            return this.eventEmitter.addListener(ve, i), ()=>{
                this.eventEmitter.removeListener(ve, i);
            };
        };
        this.store = e, this.eventEmitter = new (0, _eventemitter2.EventEmitter2)({
            maxListeners: Object.keys(m).length
        });
    }
    sendPlaylistTrackEnded(e) {
        let t = this.createNotification(m.PLAYLIST_TRACK_ENDED, e, R.INFO);
        this.emitEvent(t);
    }
    sendDeviceChange(e) {
        var i;
        let t = this.createNotification(m.DEVICE_CHANGE_UPDATE, e, e.error ? R.ERROR : R.INFO, `Selected ${e.type} device - ${(i = e.selection) == null ? void 0 : i.label}`);
        this.emitEvent(t);
    }
    sendLeaveRoom(e) {
        var o;
        let t = (o = e.requestedBy) == null ? void 0 : o.name, i = this.createNotification(e.roomEnded || !t ? m.ROOM_ENDED : m.REMOVED_FROM_ROOM, e, R.INFO, `${e.roomEnded ? "Room ended" : "Removed from room"} ${t ? `by ${t}` : ""}`);
        this.emitEvent(i);
    }
    sendPeerList(e) {
        let t = this.createNotification(m.PEER_LIST, e, R.INFO);
        this.emitEvent(t);
    }
    sendPeerUpdate(e, t) {
        let i = this.store.getState(x(t == null ? void 0 : t.id)) || t, o = ae[e];
        if (o) {
            let r = this.createNotification(o, i, R.INFO);
            this.emitEvent(r);
        }
    }
    sendTrackUpdate(e, t) {
        let i = this.store.getState(ue(t)), o = ce[e];
        if (o) {
            let r = this.createNotification(o, i, R.INFO);
            this.emitEvent(r);
        }
    }
    sendMessageReceived(e) {
        let t = this.createNotification(m.NEW_MESSAGE, e, R.INFO);
        this.emitEvent(t);
    }
    sendError(e) {
        let t = this.createNotification(m.ERROR, e, R.ERROR);
        this.emitEvent(t);
    }
    sendReconnecting(e) {
        let t = this.createNotification(m.RECONNECTING, e, R.ERROR);
        this.emitEvent(t);
    }
    sendReconnected() {
        let e = this.createNotification(m.RECONNECTED, null, R.INFO);
        this.emitEvent(e);
    }
    sendChangeTrackStateRequest(e) {
        let t = this.createNotification(m.CHANGE_TRACK_STATE_REQUEST, e, R.INFO);
        this.emitEvent(t);
    }
    sendChangeMultiTrackStateRequest(e) {
        let t = this.createNotification(m.CHANGE_MULTI_TRACK_STATE_REQUEST, e, R.INFO);
        this.emitEvent(t);
    }
    emitEvent(e) {
        this.eventEmitter.emit(ve, e);
    }
    createNotification(e, t, i, o = "") {
        return this.id++, {
            id: this.id,
            type: e,
            message: o,
            data: t,
            severity: i
        };
    }
};
function Ht(s) {
    return s instanceof (0, _hmsVideo.HMSRemoteAudioTrack) || s instanceof (0, _hmsVideo.HMSRemoteVideoTrack);
}
var ht = (s, e)=>{
    let t = Me(Object.keys(s), Object.keys(e));
    for (let i of t){
        let o = s[i], r = e[i];
        Ee(o, r) ? (K(o.auxiliaryTracks, r.auxiliaryTracks) && (r.auxiliaryTracks = o.auxiliaryTracks), Object.assign(o, r)) : be(o, r) ? delete s[i] : Ae(o, r) && (s[i] = r);
    }
}, ft = (s, e)=>{
    let t = Me(Object.keys(s), Object.keys(e));
    for (let i of t){
        let o = s[i], r = e[i];
        Ee(o, r) ? (ds(o, r), Object.assign(o, r)) : be(o, r) ? delete s[i] : Ae(o, r) && (s[i] = r);
    }
}, De = (s, e)=>{
    let t = Me(Object.keys(s), Object.keys(e));
    for (let i of t){
        let o = s[i], r = e[i];
        Ee(o, r) ? Object.assign(o, r) : be(o, r) ? delete s[i] : Ae(o, r) && (s[i] = r);
    }
}, gt = (s, e, t)=>{
    let i = t.reduce((r, n)=>(r[n.firstTrackId] = Object.values(e[n.getTrackIDBeingSent()] || {}).sort((a, d)=>!a.rid || !d.rid ? 0 : a.rid < d.rid ? -1 : 1), r), {}), o = Me(Object.keys(s), Object.keys(i));
    for (let r of o){
        if (!i[r]) {
            delete s[r];
            continue;
        }
        s[r] = i[r];
    }
}, ds = (s, e)=>{
    s.plugins && K(s.plugins, e.plugins) && (e.plugins = s.plugins), s.type === "video" && s.layerDefinitions && K(s.layerDefinitions, e.layerDefinitions) && (e.layerDefinitions = s.layerDefinitions);
}, Ee = (s, e)=>s && e, be = (s, e)=>s && !e, Ae = (s, e)=>!s && e, K = (s, e)=>{
    if (s === e || s.length === 0 && (e == null ? void 0 : e.length) === 0) return !0;
    if (!s || !e || s.length !== e.length) return !1;
    for(let t = 0; t < s.length; t++)if (s[t] !== e[t]) return !1;
    return !0;
}, Me = (s, e)=>{
    let t = new Set;
    for (let i of s)t.add(i);
    for (let i of e)t.add(i);
    return Array.from(t);
};
var T = class {
    static convertPeer(e) {
        var t, i, o;
        return {
            id: e.peerId,
            name: e.name,
            roleName: (t = e.role) == null ? void 0 : t.name,
            isLocal: e.isLocal,
            videoTrack: (i = e.videoTrack) == null ? void 0 : i.trackId,
            audioTrack: (o = e.audioTrack) == null ? void 0 : o.trackId,
            auxiliaryTracks: e.auxiliaryTracks.map((r)=>r.trackId),
            customerUserId: e.customerUserId,
            metadata: e.metadata,
            joinedAt: e.joinedAt
        };
    }
    static convertTrack(e, t) {
        let i = {
            id: e.trackId,
            source: e.source,
            type: e.type,
            enabled: e.enabled,
            displayEnabled: e.enabled,
            peerId: e.peerId || t
        };
        return this.enrichTrack(i, e), i;
    }
    static enrichTrack(e, t) {
        let i = t.getMediaTrackSettings();
        t instanceof (0, _hmsVideo.HMSRemoteAudioTrack) && (e.volume = t.getVolume() || 0), T.updateDeviceID(e, t), T.enrichLocalTrack(e, t), e.type === "video" && (e.source === "screen" ? (e.displaySurface = i.displaySurface, T.enrichScreenTrack(e, t)) : e.source === "regular" && (e.facingMode = i.facingMode), e.height = i.height, e.width = i.width, T.enrichVideoTrack(e, t)), T.enrichPluginsDetails(e, t);
    }
    static enrichLocalTrack(e, t) {
        (t instanceof (0, _hmsVideo.HMSLocalVideoTrack) || t instanceof (0, _hmsVideo.HMSLocalAudioTrack)) && (e.isPublished = t.isPublished);
    }
    static updateDeviceID(e, t) {
        var i;
        t instanceof (0, _hmsVideo.HMSLocalVideoTrack) || t instanceof (0, _hmsVideo.HMSLocalAudioTrack) ? e.deviceID = t.settings.deviceId : e.deviceID = (i = t.getMediaTrackSettings()) == null ? void 0 : i.deviceId;
    }
    static enrichVideoTrack(e, t) {
        t instanceof (0, _hmsVideo.HMSRemoteVideoTrack) && (e.layer = t.getLayer(), e.preferredLayer = t.getPreferredLayer(), e.degraded = t.degraded), (t instanceof (0, _hmsVideo.HMSRemoteVideoTrack) || t instanceof (0, _hmsVideo.HMSLocalVideoTrack)) && (K(t.getSimulcastDefinitions(), e.layerDefinitions) || (e.layerDefinitions = t.getSimulcastDefinitions()));
    }
    static enrichScreenTrack(e, t) {
        var i, o;
        if (t instanceof (0, _hmsVideo.HMSLocalVideoTrack)) {
            let r = (i = t.getCaptureHandle) == null ? void 0 : i.call(t);
            (r == null ? void 0 : r.handle) !== ((o = e.captureHandle) == null ? void 0 : o.handle) && (e.captureHandle = r), t.isCurrentTab && (e.displaySurface = "selfBrowser");
        }
    }
    static enrichPluginsDetails(e, t) {
        (t instanceof (0, _hmsVideo.HMSLocalVideoTrack) || t instanceof (0, _hmsVideo.HMSLocalAudioTrack)) && (K(t.getPlugins(), e.plugins) || (e.plugins = t.getPlugins()));
    }
    static convertRoom(e) {
        var r, n;
        let { recording: t , rtmp: i , hls: o  } = T.convertRecordingStreamingState(e == null ? void 0 : e.recording, e == null ? void 0 : e.rtmp, e == null ? void 0 : e.hls);
        return {
            id: e.id,
            name: e.name,
            localPeer: (n = (r = e.localPeer) == null ? void 0 : r.peerId) != null ? n : "",
            recording: t,
            rtmp: i,
            hls: o,
            sessionId: e.sessionId,
            startedAt: e.startedAt,
            joinedAt: e.joinedAt,
            peerCount: e.peerCount
        };
    }
    static convertMessage(e) {
        var t, i, o, r, n, a, d;
        return {
            sender: (t = e.sender) == null ? void 0 : t.peerId,
            senderName: (i = e.sender) == null ? void 0 : i.name,
            senderRole: (r = (o = e.sender) == null ? void 0 : o.role) == null ? void 0 : r.name,
            senderUserId: (n = e.sender) == null ? void 0 : n.customerUserId,
            recipientPeer: (a = e.recipientPeer) == null ? void 0 : a.peerId,
            recipientRoles: (d = e.recipientRoles) == null ? void 0 : d.map((P)=>P.name),
            time: e.time,
            type: e.type,
            message: e.message
        };
    }
    static convertRoles(e) {
        let t = {};
        return e && e.forEach((i)=>{
            t[i.name] = i;
        }), t;
    }
    static convertRoleChangeRequest(e) {
        var t;
        return {
            requestedBy: (t = e.requestedBy) == null ? void 0 : t.peerId,
            roleName: e.role.name,
            token: e.token
        };
    }
    static convertException(e) {
        return {
            code: e.code,
            action: e.action,
            name: e.name,
            message: e.message,
            description: e.description,
            isTerminal: e.isTerminal,
            nativeError: e.nativeError,
            timestamp: new Date
        };
    }
    static convertDeviceChangeUpdate(e) {
        let t = {
            devices: e.devices,
            selection: e.selection,
            type: e.type
        };
        return e.error && (t.error = this.convertException(e.error)), t;
    }
    static convertPlaylist(e) {
        let t = this.getConvertedPlaylistType(e, M.audio), i = this.getConvertedPlaylistType(e, M.video);
        return {
            audio: t,
            video: i
        };
    }
    static convertPlaylistItem(e, t) {
        let i = t.type, o = e.getCurrentSelection(i), r = e.isPlaying(i), n = t.url === (o == null ? void 0 : o.url);
        return J(O({}, t), {
            type: t.type,
            selected: n,
            playing: n && r
        });
    }
    static getConvertedPlaylistType(e, t) {
        let i = {}, o = e.getCurrentSelection(t), r = e.getCurrentProgress(t), n = e.getVolume(t), a = e.getList(t), d = e.getCurrentIndex(t);
        return e.getList(t).forEach((P)=>{
            i[P.id] = T.convertPlaylistItem(e, P);
        }), {
            list: i,
            selection: {
                id: o == null ? void 0 : o.id,
                hasPrevious: d > 0,
                hasNext: d < a.length - 1
            },
            progress: r,
            volume: n,
            currentTime: e.getCurrentTime(t),
            playbackRate: e.getPlaybackRate(t)
        };
    }
    static convertRecordingStreamingState(e, t, i) {
        var o;
        return {
            recording: {
                browser: O({
                    running: !1
                }, e == null ? void 0 : e.browser),
                server: O({
                    running: !1
                }, e == null ? void 0 : e.server),
                hls: O({
                    running: !1
                }, e == null ? void 0 : e.hls)
            },
            rtmp: O({
                running: !1
            }, t),
            hls: {
                variants: ((o = i == null ? void 0 : i.variants) == null ? void 0 : o.map((r)=>r)) || [],
                running: !!(i == null ? void 0 : i.running),
                error: i == null ? void 0 : i.error
            }
        };
    }
};
var Te = class {
    constructor(e, t, i, o){
        this.playlistManager = e;
        this.syncPlaylistState = i;
        this.store = o;
        this.type = t;
    }
    play(e) {
        return c(this, null, function*() {
            if (!e) {
                S.w("Please pass id to play");
                return;
            }
            yield this.playlistManager.setEnabled(!0, {
                id: e,
                type: this.type
            });
        });
    }
    pause() {
        return c(this, null, function*() {
            let e = this.type === M.audio ? nt : at, t = this.store.getState(e.selection);
            if (!t.id) {
                S.w("No item is currently playing to pause");
                return;
            }
            yield this.playlistManager.setEnabled(!1, {
                id: t.id,
                type: this.type
            });
        });
    }
    playNext() {
        return c(this, null, function*() {
            yield this.playlistManager.playNext(this.type);
        });
    }
    playPrevious() {
        return c(this, null, function*() {
            yield this.playlistManager.playPrevious(this.type);
        });
    }
    seek(e) {
        this.playlistManager.seek(e, this.type), this.syncPlaylistState(`seekOn${this.type}Playlist`);
    }
    seekTo(e) {
        this.playlistManager.seekTo(e, this.type), this.syncPlaylistState(`seekToOn${this.type}Playlist`);
    }
    setVolume(e) {
        this.playlistManager.setVolume(e, this.type), this.syncPlaylistState(`setVolumeOn${this.type}Playlist`);
    }
    setList(e) {
        this.playlistManager.setList(e), this.syncPlaylistState(`setListOn${this.type}Playlist`);
    }
    stop() {
        return c(this, null, function*() {
            yield this.playlistManager.stop(this.type), this.syncPlaylistState(`stop${this.type}Playlist`);
        });
    }
    setIsAutoplayOn(e) {
        this.playlistManager.setIsAutoplayOn(this.type, e);
    }
    setPlaybackRate(e) {
        this.playlistManager.setPlaybackRate(this.type, e), this.syncPlaylistState(`set${this.type}PlaybackRate`);
    }
    removeItem(e) {
        return c(this, null, function*() {
            let t = yield this.playlistManager.removeItem(e, this.type);
            return t && this.syncPlaylistState(`remove${this.type}PlaylistItem`), t;
        });
    }
    clearList() {
        return c(this, null, function*() {
            yield this.playlistManager.clearList(this.type), this.syncPlaylistState(`clear${this.type}Playlist`);
        });
    }
};
var Ne = class {
    constructor(e, t){
        this.sdk = e;
        this.setLocally = t;
    }
    get sdkSessionStore() {
        return this.sdk.getSessionStore();
    }
    set(e, t) {
        return c(this, null, function*() {
            let { value: i  } = yield this.sdkSessionStore.set(String(e), t);
            this.setLocally({
                key: e,
                value: i
            });
        });
    }
    observe(e) {
        return c(this, null, function*() {
            let t = Array.isArray(e) ? e.map((i)=>String(i)) : [
                String(e)
            ];
            yield this.sdkSessionStore.observe(t);
        });
    }
    unobserve(e) {
        return c(this, null, function*() {
            let t = Array.isArray(e) ? e.map((i)=>String(i)) : [
                String(e)
            ];
            yield this.sdkSessionStore.unobserve(t);
        });
    }
};
var xe = class {
    constructor(e, t){
        this.intervalMs = 100, this.shouldMonitor = !1, this.hasStarted = !1, this.unsubs = [], this.analysers = {}, this.store = e, this.actions = t;
    }
    start() {
        return c(this, null, function*() {
            if (this.hasStarted) return;
            this.hasStarted = !0, S.d("starting audio level monitor for remote peers", this.store);
            let e = this.store.getState(G);
            S.d("starting audio levels is connected to room", e), e && (yield this.monitorAudioLevels());
            let t = this.store.subscribe(this.monitorAudioLevels.bind(this), G);
            this.unsubs.push(t);
        });
    }
    stop() {
        return c(this, null, function*() {
            !this.hasStarted || (this.hasStarted = !1, this.shouldMonitor = !1, this.unsubs.forEach((e)=>e()), S.d("stopped audio level monitor for remote peers"));
        });
    }
    monitorAudioLevels() {
        return c(this, null, function*() {
            if (!this.store.getState(G)) {
                this.shouldMonitor && (S.i("room no longer connected, stopping audio level monitoring for remote"), this.shouldMonitor = !1);
                return;
            }
            if (this.shouldMonitor) return;
            S.i("monitoring audio levels"), this.shouldMonitor = !0;
            let t = ()=>{
                this.shouldMonitor ? (this.logAllPeersAudioLevels(), setTimeout(t, this.intervalMs)) : S.i("stopped monitoring audio levels");
            };
            setTimeout(t, 1e3);
        });
    }
    logAllPeersAudioLevels() {
        return c(this, null, function*() {
            var o;
            if (!window.__triggerBeamEvent__) return;
            let t = this.store.getState(V).filter((r)=>!!r.audioTrack), i = [];
            for (let r of t){
                let n = this.actions.hmsSDKTracks[r.audioTrack], a = (o = n == null ? void 0 : n.stream) == null ? void 0 : o.nativeStream;
                if (!!r.joinedAt && a) {
                    let d = yield this.getAudioLevel(r, a);
                    d.level > 0 && i.push(d);
                }
            }
            if (i.length > 0) {
                let r = {
                    event: "app-audio-level",
                    data: i
                };
                window.__triggerBeamEvent__(JSON.stringify(r));
            }
        });
    }
    getAudioLevel(e, t) {
        return c(this, null, function*() {
            this.analysers[t.id] || (this.analysers[t.id] = this.createAnalyserNode(t));
            let i = this.analysers[t.id], o = this.calculateAudioLevel(i);
            return {
                peerId: e.id,
                peerName: e.name,
                level: o
            };
        });
    }
    createAnalyserNode(e) {
        this.audioContext || (this.audioContext = new AudioContext);
        let t = this.audioContext.createAnalyser();
        return this.audioContext.createMediaStreamSource(e).connect(t), t;
    }
    calculateAudioLevel(e) {
        let t = new Uint8Array(e.fftSize);
        e.getByteTimeDomainData(t);
        let i = .009, o = i;
        for (let a of t)o = Math.max(o, (a - 128) / 128);
        let r = (Math.log(i) - Math.log(o)) / Math.log(i);
        return Math.ceil(Math.min(Math.max(r * 100, 0), 100));
    }
};
var Le = class {
    constructor(e, t, i){
        this.hmsSDKTracks = {};
        this.hmsSDKPeers = {};
        this.isRoomJoinCalled = !1;
        this.ignoredMessageTypes = [];
        this.setProgress = ({ type: e , progress: t  })=>{
            this.setState((i)=>{
                i.playlist[e].progress = t, i.playlist[e].currentTime = this.sdk.getPlaylistManager().getCurrentTime(e);
            }, "playlistProgress");
        };
        this.syncPlaylistState = (e)=>{
            this.setState((t)=>{
                Object.assign(t.playlist, T.convertPlaylist(this.sdk.getPlaylistManager()));
            }, e);
        };
        this.sendPeerUpdateNotification = (e, t)=>{
            let i = this.store.getState(x(t.peerId)), o = ae[e] || "peerUpdate";
            this.syncRoomState(o), i || (i = this.store.getState(x(t.peerId))), this.hmsNotifications.sendPeerUpdate(e, i);
        };
        this.setState = (e, t)=>this.store.namedSetState(e, t);
        this.store = e, this.sdk = t, this.hmsNotifications = i, this.sessionStore = new Ne(this.sdk, this.setSessionStoreValueLocally.bind(this));
    }
    refreshDevices() {
        return c(this, null, function*() {
            yield this.sdk.refreshDevices();
        });
    }
    unblockAudio() {
        return c(this, null, function*() {
            yield this.sdk.getAudioOutput().unblockAutoplay();
        });
    }
    setVolume(e, t) {
        return c(this, null, function*() {
            t ? yield this.setTrackVolume(e, t) : (yield this.sdk.getAudioOutput().setVolume(e), this.syncRoomState("setOutputVolume"));
        });
    }
    setAudioOutputDevice(e) {
        return c(this, null, function*() {
            (yield this.sdk.getAudioOutput().setDevice(e)) && this.setState((i)=>{
                i.settings.audioOutputDeviceId = e;
            }, "setAudioOutputDevice");
        });
    }
    setPreferredLayer(e, t) {
        return c(this, null, function*() {
            var o;
            let i = this.hmsSDKTracks[e];
            if (i) {
                if (i instanceof (0, _hmsVideo.HMSRemoteVideoTrack)) {
                    if (t === (0, _hmsVideo.HMSSimulcastLayer).NONE) {
                        S.d(`layer ${(0, _hmsVideo.HMSSimulcastLayer).NONE} will be ignored`);
                        return;
                    }
                    if (((o = this.store.getState(St(e))) == null ? void 0 : o.preferredLayer) === t) {
                        S.d(`preferred layer is already ${t}`);
                        return;
                    }
                    this.setState((n)=>{
                        let a = n.tracks[e];
                        a && (a.preferredLayer = t);
                    }, "setPreferredLayer"), yield i.setPreferredLayer(t);
                } else S.d(`track ${e} is not a remote video track`);
            } else this.logPossibleInconsistency(`track ${e} not present, unable to set preffer layer`);
        });
    }
    getAuthTokenByRoomCode(e, t) {
        return this.sdk.getAuthTokenByRoomCode(e, t);
    }
    preview(e) {
        return c(this, null, function*() {
            if (this.isRoomJoinCalled) {
                this.logPossibleInconsistency("attempting to call preview after join was called");
                return;
            }
            let t = this.store.getState(A);
            if (t === h.Preview || t === h.Connecting) {
                this.logPossibleInconsistency("attempting to call preview while room is in preview/connecting");
                return;
            }
            try {
                this.setState((i)=>{
                    i.room.roomState = h.Connecting;
                }, "connecting"), yield this.sdkPreviewWithListeners(e);
            } catch (i) {
                throw S.e("Cannot show preview. Failed to connect to room - ", i), i;
            }
        });
    }
    join(e) {
        return c(this, null, function*() {
            if (this.isRoomJoinCalled) {
                this.logPossibleInconsistency("room join is called again");
                return;
            }
            try {
                this.isRoomJoinCalled = !0, this.setState((t)=>{
                    t.room.roomState = h.Connecting;
                }, "join"), yield this.sdkJoinWithListeners(e);
            } catch (t) {
                throw this.isRoomJoinCalled = !1, S.e("Failed to connect to room - ", t), t;
            }
        });
    }
    leave() {
        return c(this, null, function*() {
            let e = this.store.getState(G), t = !0;
            e || (t = !1, this.logPossibleInconsistency("room leave is called when no room is connected"));
            let i = this.store.getState(A);
            return this.setState((o)=>{
                o.room.roomState = h.Disconnecting;
            }, "leaving"), this.sdk.leave(t).then(()=>{
                this.resetState("leave"), this.beamSpeakerLabelsLogger && this.beamSpeakerLabelsLogger.stop().catch(S.e), S.i("left room");
            }).catch((o)=>{
                S.e("error in leaving room - ", o), this.setState((r)=>{
                    r.room.roomState = i;
                }, "revertLeave");
            });
        });
    }
    setScreenShareEnabled(e, t) {
        return c(this, null, function*() {
            typeof t == "boolean" && (t = {
                audioOnly: t
            });
            try {
                e ? yield this.startScreenShare(t) : yield this.stopScreenShare();
            } catch (i) {
                throw this.hmsNotifications.sendError(T.convertException(i)), i;
            }
        });
    }
    addTrack(e, t = "regular") {
        return c(this, null, function*() {
            yield this.sdk.addTrack(e, t), this.syncRoomState("addTrack");
        });
    }
    removeTrack(e) {
        return c(this, null, function*() {
            yield this.sdk.removeTrack(e), this.syncRoomState("removeTrack");
        });
    }
    setLocalAudioEnabled(e) {
        return c(this, null, function*() {
            let t = this.store.getState(N);
            t && (yield this.setEnabledTrack(t, e));
        });
    }
    setLocalVideoEnabled(e) {
        return c(this, null, function*() {
            let t = this.store.getState(b);
            t && (yield this.setEnabledTrack(t, e));
        });
    }
    setEnabledTrack(e, t) {
        return c(this, null, function*() {
            var r;
            if (((r = this.store.getState().tracks[e]) == null ? void 0 : r.enabled) === t) {
                this.logPossibleInconsistency(`local track[${e}] enabled state - ${t}`);
                return;
            }
            this.setState((n)=>{
                n.tracks[e] ? n.tracks[e].displayEnabled = t : this.logPossibleInconsistency("track id not found for setEnabled");
            }, "displayEnabled");
            try {
                yield this.setEnabledSDKTrack(e, t), this.syncRoomState("setEnabled");
            } catch (n) {
                throw this.setState((a)=>{
                    a.tracks[e].displayEnabled = !t;
                }, "rollbackDisplayEnabled"), this.hmsNotifications.sendError(T.convertException(n)), n;
            }
            let o = t ? (0, _hmsVideo.HMSTrackUpdate).TRACK_UNMUTED : (0, _hmsVideo.HMSTrackUpdate).TRACK_MUTED;
            this.hmsNotifications.sendTrackUpdate(o, e);
        });
    }
    setAudioSettings(e) {
        return c(this, null, function*() {
            let t = this.store.getState(N);
            t && (yield this.setSDKLocalAudioTrackSettings(t, e), this.syncRoomState("setAudioSettings"));
        });
    }
    setVideoSettings(e) {
        return c(this, null, function*() {
            let t = this.store.getState(b);
            t && (yield this.setSDKLocalVideoTrackSettings(t, e), this.syncRoomState("setVideoSettings"));
        });
    }
    switchCamera() {
        return c(this, null, function*() {
            let e = this.store.getState(b);
            if (e) {
                let t = this.hmsSDKTracks[e];
                t && (yield t.switchCamera(), this.syncRoomState("switchCamera"));
            }
        });
    }
    sendMessage(e) {
        this.sendBroadcastMessage(e);
    }
    sendBroadcastMessage(e, t) {
        return c(this, null, function*() {
            let i = yield this.sdk.sendBroadcastMessage(e, t);
            this.updateMessageInStore(i, {
                message: e,
                type: t
            });
        });
    }
    sendGroupMessage(e, t, i) {
        return c(this, null, function*() {
            let o = this.store.getState(U), r = t.map((a)=>o[a]), n = yield this.sdk.sendGroupMessage(e, r, i);
            this.updateMessageInStore(n, {
                message: e,
                recipientRoles: t,
                type: i
            });
        });
    }
    sendDirectMessage(e, t, i) {
        return c(this, null, function*() {
            let o = this.hmsSDKPeers[t], r = yield this.sdk.sendDirectMessage(e, o, i);
            this.updateMessageInStore(r, {
                message: e,
                recipientPeer: o.peerId,
                type: i
            });
        });
    }
    updateMessageInStore(e, t) {
        if (!e) throw S.w("sendMessage", "Failed to send message", t), Error(`sendMessage Failed - ${JSON.stringify(t)}`);
        let i = T.convertMessage(e);
        return i.read = !0, i.senderName = "You", i.ignored = this.ignoredMessageTypes.includes(i.type), this.putMessageInStore(i), i;
    }
    setMessageRead(e, t) {
        this.setState((i)=>{
            t ? i.messages.byID[t] ? i.messages.byID[t].read = e : this.logPossibleInconsistency("no message with id is found") : i.messages.allIDs.forEach((o)=>{
                i.messages.byID[o].read = e;
            });
        }, "setMessageRead");
    }
    attachVideo(e, t) {
        return c(this, null, function*() {
            if (this.localAndVideoUnmuting(e)) return new Promise((i)=>{
                let o = this.store.subscribe((r)=>c(this, null, function*() {
                        r && (yield this.attachVideoInternal(e, t), o(), i());
                    }), ge);
            });
            yield this.attachVideoInternal(e, t);
        });
    }
    detachVideo(e, t) {
        return c(this, null, function*() {
            let i = this.hmsSDKTracks[e];
            (i == null ? void 0 : i.type) === "video" ? yield this.sdk.detachVideo(i, t) : (t && (t.srcObject = null), S.d("possible inconsistency detected - no video track found to remove sink"));
        });
    }
    addPluginToVideoTrack(e, t) {
        return c(this, null, function*() {
            return this.addRemoveVideoPlugin(e, "add", t);
        });
    }
    addPluginToAudioTrack(e) {
        return c(this, null, function*() {
            return this.addRemoveAudioPlugin(e, "add");
        });
    }
    validateVideoPluginSupport(e) {
        let t = {};
        if (t.isSupported = !1, !e) return S.w("no plugin passed in for checking support"), t.errMsg = "no plugin passed in for checking support", t;
        let i = this.store.getState(b);
        if (!i) return S.w("video Track not added to local peer yet"), t.errMsg = "call this function only after local peer has video track", t;
        let o = this.hmsSDKTracks[i];
        return o ? t = o.validatePlugin(e) : (S.w(`track ${i} not present, unable to validate plugin`), t.errMsg = `track ${i} not present, unable to validate plugin`), t;
    }
    validateAudioPluginSupport(e) {
        let t = {};
        if (t.isSupported = !1, !e) return S.w('no plugin passed in for checking support"'), t.errMsg = 'no plugin passed in for checking support"', t;
        let i = this.store.getState(N);
        if (!i) return S.w("audio track not added to local peer yet"), t.errMsg = "call this function only after local peer has audio track", t;
        let o = this.hmsSDKTracks[i];
        return o ? t = o.validatePlugin(e) : (S.w(`track ${i} not present, unable to validate plugin`), t.errMsg = `track ${i} not present, unable to validate plugin`), t;
    }
    removePluginFromVideoTrack(e) {
        return c(this, null, function*() {
            return this.addRemoveVideoPlugin(e, "remove");
        });
    }
    removePluginFromAudioTrack(e) {
        return c(this, null, function*() {
            return this.addRemoveAudioPlugin(e, "remove");
        });
    }
    changeRole(e, t, i = !1) {
        return c(this, null, function*() {
            let o = this.hmsSDKPeers[e];
            if (!o) {
                this.logPossibleInconsistency(`Unknown peer ID given ${e} for changerole`);
                return;
            }
            yield this.sdk.changeRoleOfPeer(o, t, i);
        });
    }
    changeRoleOfPeer(e, t, i = !1) {
        return c(this, null, function*() {
            let o = this.hmsSDKPeers[e];
            if (!o) {
                this.logPossibleInconsistency(`Unknown peer ID given ${e} for changerole`);
                return;
            }
            yield this.sdk.changeRoleOfPeer(o, t, i);
        });
    }
    changeRoleOfPeersWithRoles(e, t) {
        return c(this, null, function*() {
            let i = this.sdk.getRoles().filter((o)=>e.includes(o.name));
            yield this.sdk.changeRoleOfPeersWithRoles(i, t);
        });
    }
    acceptChangeRole(e) {
        return c(this, null, function*() {
            let t = e.requestedBy ? this.hmsSDKPeers[e.requestedBy.id] : void 0;
            t || S.w(`peer for which role change is requested no longer available - ${e.requestedBy}`);
            let i = {
                requestedBy: t,
                role: e.role,
                token: e.token
            };
            yield this.sdk.acceptChangeRole(i), this.removeRoleChangeRequest(e);
        });
    }
    initAppData(e) {
        this.setState((t)=>{
            t.appData = e;
        }, "initAppData");
    }
    setAppData(e, t, i) {
        let o = (t == null ? void 0 : t.constructor.name) === "Object";
        this.setState((r)=>{
            if (r.appData) i && o ? Object.assign(r.appData[e], t) : r.appData[e] = t;
            else {
                let n = {
                    [e]: t
                };
                r.appData = n;
            }
        }, `setAppData-${e}`);
    }
    rejectChangeRole(e) {
        this.removeRoleChangeRequest(e);
    }
    endRoom(e, t) {
        return c(this, null, function*() {
            let i = this.store.getState(ze);
            if (!(i == null ? void 0 : i.endRoom)) {
                S.w("You are not allowed to perform this action - endRoom");
                return;
            }
            let o = this.store.getState(A);
            this.setState((r)=>{
                r.room.roomState = h.Disconnecting;
            }, "endingRoom");
            try {
                yield this.sdk.endRoom(e, t), this.resetState("endRoom");
            } catch (r) {
                S.e("error in ending room - ", r), this.setState((n)=>{
                    n.room.roomState = o;
                }, "revertEndRoom");
            }
        });
    }
    removePeer(e, t) {
        return c(this, null, function*() {
            let i = this.hmsSDKPeers[e];
            if (i && !i.isLocal) yield this.sdk.removePeer(i, t);
            else {
                this.logPossibleInconsistency(`No remote peer found for peerID - ${e}`);
                return;
            }
        });
    }
    startRTMPOrRecording(e) {
        return c(this, null, function*() {
            yield this.sdk.startRTMPOrRecording(e);
        });
    }
    stopRTMPAndRecording() {
        return c(this, null, function*() {
            yield this.sdk.stopRTMPAndRecording();
        });
    }
    startHLSStreaming(e) {
        return c(this, null, function*() {
            yield this.sdk.startHLSStreaming(e);
        });
    }
    stopHLSStreaming(e) {
        return c(this, null, function*() {
            yield this.sdk.stopHLSStreaming(e);
        });
    }
    sendHLSTimedMetadata(e) {
        return c(this, null, function*() {
            yield this.sdk.sendHLSTimedMetadata(e);
        });
    }
    changeName(e) {
        return c(this, null, function*() {
            yield this.sdk.changeName(e);
        });
    }
    changeMetadata(e) {
        return c(this, null, function*() {
            typeof e != "string" && (e = JSON.stringify(e)), yield this.sdk.changeMetadata(e);
        });
    }
    setSessionMetadata(e) {
        return c(this, null, function*() {
            yield this.sdk.setSessionMetadata(e), this.setState((t)=>{
                t.sessionMetadata = e;
            }, "setSessionMetadata"), this.setSessionStoreValueLocally({
                key: "default",
                value: e
            }, "setSessionMetadata");
        });
    }
    populateSessionMetadata() {
        return c(this, null, function*() {
            let e = yield this.sdk.getSessionMetadata();
            this.setState((t)=>{
                t.sessionMetadata = e;
            }, "populateSessionMetadata"), this.setSessionStoreValueLocally({
                key: "default",
                value: e
            }, "populateSessionmetadata");
        });
    }
    setRemoteTrackEnabled(e, t) {
        return c(this, null, function*() {
            if (typeof e == "string") {
                let i = this.hmsSDKTracks[e];
                i && Ht(i) ? yield this.sdk.changeTrackState(i, t) : this.logPossibleInconsistency(`No remote track with ID ${e} found for change track state`);
            } else Array.isArray(e) && e.forEach((i)=>this.setRemoteTrackEnabled(i, t));
        });
    }
    setRemoteTracksEnabled(e) {
        return c(this, null, function*() {
            let t = {
                enabled: e.enabled,
                type: e.type,
                source: e.source
            };
            if (e.roles) {
                let i = this.store.getState(U);
                t.roles = e.roles.map((o)=>i[o]);
            }
            yield this.sdk.changeMultiTrackState(t);
        });
    }
    setLogLevel(e) {
        S.level = e, this.sdk.setLogLevel(e);
    }
    setFrameworkInfo(e) {
        this.sdk.setFrameworkInfo(e);
    }
    ignoreMessageTypes(e, t = !1) {
        if (t) this.ignoredMessageTypes = e;
        else for (let i of e)this.ignoredMessageTypes.includes(i) || this.ignoredMessageTypes.push(i);
    }
    enableBeamSpeakerLabelsLogging() {
        return c(this, null, function*() {
            this.beamSpeakerLabelsLogger || (S.i("enabling beam speaker labels logging"), this.beamSpeakerLabelsLogger = new xe(this.store, this), yield this.beamSpeakerLabelsLogger.start());
        });
    }
    resetState(e = "resetState") {
        this.isRoomJoinCalled = !1, this.hmsSDKTracks = {}, S.cleanUp(), this.setState((t)=>{
            Object.assign(t, oe());
        }, e);
    }
    sdkJoinWithListeners(e) {
        return c(this, null, function*() {
            yield this.sdk.join(e, {
                onJoin: this.onJoin.bind(this),
                onRoomUpdate: this.onRoomUpdate.bind(this),
                onPeerUpdate: this.onPeerUpdate.bind(this),
                onTrackUpdate: this.onTrackUpdate.bind(this),
                onMessageReceived: this.onMessageReceived.bind(this),
                onError: this.onError.bind(this),
                onReconnected: this.onReconnected.bind(this),
                onReconnecting: this.onReconnecting.bind(this),
                onRoleChangeRequest: this.onRoleChangeRequest.bind(this),
                onRoleUpdate: this.onRoleUpdate.bind(this),
                onDeviceChange: this.onDeviceChange.bind(this),
                onChangeTrackStateRequest: this.onChangeTrackStateRequest.bind(this),
                onChangeMultiTrackStateRequest: this.onChangeMultiTrackStateRequest.bind(this),
                onRemovedFromRoom: this.onRemovedFromRoom.bind(this),
                onNetworkQuality: this.onNetworkQuality.bind(this),
                onSessionStoreUpdate: this.onSessionStoreUpdate.bind(this)
            }), this.sdk.addAudioListener({
                onAudioLevelUpdate: this.onAudioLevelUpdate.bind(this)
            }), this.sdk.addConnectionQualityListener({
                onConnectionQualityUpdate: this.onConnectionQualityUpdate.bind(this)
            });
        });
    }
    onRemovedFromRoom(e) {
        var o;
        let t = this.store.getState(x((o = e.requestedBy) == null ? void 0 : o.peerId));
        this.hmsNotifications.sendLeaveRoom(J(O({}, e), {
            requestedBy: t || void 0
        }));
        let i = e.roomEnded || !t ? "roomEnded" : "removedFromRoom";
        S.i(`resetting state after peer removed ${i}`, e), this.resetState(i);
    }
    onDeviceChange(e) {
        let t = e.devices;
        if (!t) return;
        let i = this.store.getState(E);
        if (this.setState((o)=>{
            K(o.devices.audioInput, t.audioInput) || (o.devices.audioInput = t.audioInput), K(o.devices.videoInput, t.videoInput) || (o.devices.videoInput = t.videoInput), K(o.devices.audioOutput, t.audioOutput) || (o.devices.audioOutput = t.audioOutput), (i == null ? void 0 : i.id) && this.hmsSDKPeers[i.id] && Object.assign(o.settings, this.getMediaSettings(this.hmsSDKPeers[i.id]));
        }, "deviceChange"), e.selection) {
            let o = T.convertDeviceChangeUpdate(e);
            this.hmsNotifications.sendDeviceChange(o);
        }
    }
    sdkPreviewWithListeners(e) {
        return c(this, null, function*() {
            yield this.sdk.preview(e, {
                onPreview: this.onPreview.bind(this),
                onError: this.onError.bind(this),
                onReconnected: this.onReconnected.bind(this),
                onReconnecting: this.onReconnecting.bind(this),
                onDeviceChange: this.onDeviceChange.bind(this),
                onRoomUpdate: this.onRoomUpdate.bind(this),
                onPeerUpdate: this.onPeerUpdate.bind(this),
                onNetworkQuality: this.onNetworkQuality.bind(this)
            }), this.sdk.addAudioListener({
                onAudioLevelUpdate: this.onAudioLevelUpdate.bind(this)
            });
        });
    }
    onNetworkQuality(e) {
        this.setState((t)=>{
            var o;
            let i = t.room.localPeer || ((o = this.sdk.getLocalPeer()) == null ? void 0 : o.peerId);
            i && (t.connectionQualities[i] = {
                peerID: i,
                downlinkQuality: e
            });
        }, "ConnectionQuality");
    }
    onSessionStoreUpdate(e) {
        this.setSessionStoreValueLocally(e, "sessionStoreUpdate");
    }
    startScreenShare(e) {
        return c(this, null, function*() {
            this.store.getState(ye) ? this.logPossibleInconsistency("start screenshare is called while it's on") : (yield this.sdk.startScreenShare(()=>this.syncRoomState("screenshareStopped"), e), this.syncRoomState("startScreenShare"));
        });
    }
    stopScreenShare() {
        return c(this, null, function*() {
            this.store.getState(ye) ? (yield this.sdk.stopScreenShare(), this.syncRoomState("stopScreenShare")) : this.logPossibleInconsistency("stop screenshare is called while it's not on");
        });
    }
    attachVideoInternal(e, t) {
        return c(this, null, function*() {
            let i = this.hmsSDKTracks[e];
            i && i.type === "video" ? yield this.sdk.attachVideo(i, t) : this.logPossibleInconsistency("no video track found to add sink");
        });
    }
    syncRoomState(e) {
        e = `${e}_fullSync`, S.time(`store-sync-${e}`);
        let t = {}, i = [], o = {}, r = {}, n = {}, a, d = this.sdk.getPeers();
        for (let g of d){
            let j = T.convertPeer(g);
            t[j.id] = j, i.push(j.id), this.hmsSDKPeers[j.id] = g;
            let he = [
                g.audioTrack,
                g.videoTrack,
                ...g.auxiliaryTracks
            ];
            for (let w of he){
                if (!w) continue;
                let Ue = T.convertTrack(w);
                o[Ue.id] = Ue, r[w.trackId] = w;
            }
            if (g.isLocal) {
                let w = g;
                a = this.getPreviewFields(w), Object.assign(n, this.getMediaSettings(w));
            }
        }
        let P = this.sdk.getRecordingState(), F = this.sdk.getRTMPState(), $ = this.sdk.getHLSState();
        this.setState((g)=>{
            var w;
            g.room.peers = i;
            let j = g.peers, he = g.tracks;
            ht(j, t), ft(he, o), Object.assign(g.settings, n), this.hmsSDKTracks = r, ((w = g.preview) == null ? void 0 : w.localPeer) && (a == null ? void 0 : a.localPeer) ? Object.assign(g.preview, a) : g.preview = a, Object.assign(g.roles, T.convertRoles(this.sdk.getRoles())), Object.assign(g.playlist, T.convertPlaylist(this.sdk.getPlaylistManager())), Object.assign(g.room, T.convertRecordingStreamingState(P, F, $)), Object.assign(g.templateAppData, this.sdk.getTemplateAppData());
        }, e), S.timeEnd(`store-sync-${e}`);
    }
    onPreview(e) {
        this.setState((t)=>{
            Object.assign(t.room, T.convertRoom(e)), t.room.roomState = h.Preview;
        }, "previewStart"), this.syncRoomState("previewSync");
    }
    onJoin(e) {
        let t = this.sdk.getPlaylistManager();
        this.audioPlaylist = new Te(t, M.audio, this.syncPlaylistState.bind(this), this.store), this.videoPlaylist = new Te(t, M.video, this.syncRoomState.bind(this), this.store), this.syncRoomState("joinSync"), this.setState((i)=>{
            Object.assign(i.room, T.convertRoom(e)), i.room.isConnected = !0, i.room.roomState = h.Connected;
        }, "joined"), t.onProgress(this.setProgress), t.onNewTrackStart((i)=>{
            this.syncPlaylistState(`${i.type}PlaylistUpdate`);
        }), t.onPlaylistEnded((i)=>{
            this.syncPlaylistState(`${i}PlaylistEnded`);
        }), t.onCurrentTrackEnded((i)=>{
            this.hmsNotifications.sendPlaylistTrackEnded(T.convertPlaylistItem(t, i)), this.syncPlaylistState(`${i.type}PlaylistItemEnded`);
        });
    }
    onRoomUpdate(e, t) {
        this.setState((i)=>{
            Object.assign(i.room, T.convertRoom(t));
        }, e);
    }
    onPeerUpdate(e, t) {
        if (![
            (0, _hmsVideo.HMSPeerUpdate).BECAME_DOMINANT_SPEAKER,
            (0, _hmsVideo.HMSPeerUpdate).RESIGNED_DOMINANT_SPEAKER
        ].includes(e)) {
            if (Array.isArray(t)) {
                let i = this.store.getState(I), o = t.filter((n)=>!i[n.peerId]);
                if (this.syncRoomState("peersJoined"), this.store.getState(G)) {
                    let n = [];
                    for (let a of t){
                        let d = this.store.getState(x(a.peerId));
                        d && n.push(d);
                    }
                    this.hmsNotifications.sendPeerList(n);
                } else o.forEach((n)=>{
                    let a = this.store.getState(x(n.peerId));
                    a && this.hmsNotifications.sendPeerUpdate((0, _hmsVideo.HMSPeerUpdate).PEER_JOINED, a);
                });
                return;
            }
            this.sendPeerUpdateNotification(e, t);
        }
    }
    onTrackUpdate(e, t, i) {
        if (e === (0, _hmsVideo.HMSTrackUpdate).TRACK_REMOVED) this.hmsNotifications.sendTrackUpdate(e, t.trackId), this.handleTrackRemove(t, i);
        else {
            let o = ce[e] || "trackUpdate";
            this.syncRoomState(o), this.hmsNotifications.sendTrackUpdate(e, t.trackId);
        }
    }
    onMessageReceived(e) {
        let t = T.convertMessage(e);
        t.read = !1, t.ignored = this.ignoredMessageTypes.includes(t.type), this.putMessageInStore(t), this.hmsNotifications.sendMessageReceived(t);
    }
    putMessageInStore(e) {
        e.ignored || this.setState((t)=>{
            e.id = String(this.store.getState(Je) + 1), t.messages.byID[e.id] = e, t.messages.allIDs.push(e.id);
        }, "newMessage");
    }
    onAudioLevelUpdate(e) {
        this.setState((t)=>{
            let i = {};
            e.forEach((r)=>{
                if (!r.track || !r.peer) return;
                let n = r.track.trackId;
                i[n] = r.audioLevel, t.speakers[n] || (t.speakers[n] = {
                    audioLevel: r.audioLevel,
                    peerID: r.peer.peerId,
                    trackID: n
                });
            });
            let o = Object.entries(t.speakers);
            for (let [r, n] of o)n.audioLevel = i[r] || 0, n.audioLevel === 0 && delete t.speakers[r];
        }, "audioLevel");
    }
    onConnectionQualityUpdate(e) {
        this.setState((t)=>{
            let i = new Set;
            e.forEach((r)=>{
                let n = r.peerID;
                !n || (i.add(n), t.connectionQualities[n] ? Object.assign(t.connectionQualities[n], r) : t.connectionQualities[n] = r);
            });
            let o = Object.keys(t.connectionQualities);
            for (let r of o)i.has(r) || delete t.connectionQualities[r];
        }, "connectionQuality");
    }
    onChangeTrackStateRequest(e) {
        var r;
        let t = this.store.getState(x((r = e.requestedBy) == null ? void 0 : r.peerId)), i = this.getStoreLocalTrackIDfromSDKTrack(e.track), o = this.store.getState(ue(i));
        if (!o) return this.logPossibleInconsistency(`Not found track for which track state change was requested, ${e.track}`);
        e.enabled || this.syncRoomState("changeTrackStateRequest"), this.hmsNotifications.sendChangeTrackStateRequest({
            requestedBy: t || void 0,
            track: o,
            enabled: e.enabled
        });
    }
    onChangeMultiTrackStateRequest(e) {
        var r;
        let t = this.store.getState(x((r = e.requestedBy) == null ? void 0 : r.peerId));
        e.enabled || this.syncRoomState("changeMultiTrackStateRequest");
        let i = [], o = this.store.getState(f);
        for (let n of e.tracks){
            let a = this.getStoreLocalTrackIDfromSDKTrack(n);
            a && o[a] && i.push(o[a]);
        }
        this.hmsNotifications.sendChangeMultiTrackStateRequest({
            requestedBy: t || void 0,
            tracks: i,
            enabled: e.enabled,
            type: e.type,
            source: e.source
        });
    }
    onReconnected() {
        this.syncRoomState("reconnectedSync"), this.hmsNotifications.sendReconnected(), this.setState((e)=>{
            e.room.roomState = e.room.isConnected ? h.Connected : h.Preview;
        }, "reconnected");
    }
    onReconnecting(e) {
        let t = T.convertException(e);
        S.e("Reconnection: received error from sdk", t), this.hmsNotifications.sendReconnecting(t), this.setState((i)=>{
            i.room.roomState = h.Reconnecting, i.errors.push(t);
        }, "reconnecting");
    }
    onError(e) {
        let t = T.convertException(e);
        t.isTerminal ? (this.leave().then(()=>S.e("error from SDK, left room.")), this.setState((i)=>{
            i.room.roomState = h.Failed, i.errors.push(t);
        }, "errorTerminal")) : this.store.getState().errors.length < 50 && this.setState((o)=>{
            o.errors.push(t);
        }, "error"), this.syncRoomState("errorSync"), this.hmsNotifications.sendError(t), S.e("received error from sdk", t instanceof (0, _hmsVideo.HMSException) ? `${t}` : t);
    }
    handleTrackRemove(e, t) {
        this.setState((i)=>{
            let o = i.peers[t.peerId], r = i.tracks, n = e.trackId;
            if (this.isSameStoreSDKTrack(n, o == null ? void 0 : o.audioTrack)) o == null || delete o.audioTrack;
            else if (this.isSameStoreSDKTrack(n, o == null ? void 0 : o.videoTrack)) o == null || delete o.videoTrack;
            else {
                let a = o == null ? void 0 : o.auxiliaryTracks.indexOf(n);
                a > -1 && this.isSameStoreSDKTrack(n, o == null ? void 0 : o.auxiliaryTracks[a]) && (o == null || o.auxiliaryTracks.splice(a, 1));
            }
            delete r[n], delete this.hmsSDKTracks[n];
        }, "trackRemoved");
    }
    setEnabledSDKTrack(e, t) {
        return c(this, null, function*() {
            let i = this.hmsSDKTracks[e];
            i ? yield i.setEnabled(t) : this.logPossibleInconsistency(`track ${e} not present, unable to enabled/disable`);
        });
    }
    setSDKLocalVideoTrackSettings(e, t) {
        return c(this, null, function*() {
            let i = this.hmsSDKTracks[e];
            i ? yield i.setSettings(t) : this.logPossibleInconsistency(`local track ${e} not present, unable to set settings`);
        });
    }
    setSDKLocalAudioTrackSettings(e, t) {
        return c(this, null, function*() {
            let i = this.hmsSDKTracks[e];
            i ? yield i.setSettings(t) : this.logPossibleInconsistency(`local track ${e} not present, unable to set settings`);
        });
    }
    getMediaSettings(e) {
        var r;
        let t = this.store.getState($e), i = e.audioTrack, o = e.videoTrack;
        return {
            audioInputDeviceId: (i == null ? void 0 : i.settings.deviceId) || t.audioInputDeviceId,
            videoInputDeviceId: (o == null ? void 0 : o.settings.deviceId) || t.videoInputDeviceId,
            audioOutputDeviceId: (r = this.sdk.getAudioOutput().getDevice()) == null ? void 0 : r.deviceId
        };
    }
    getPreviewFields(e) {
        var i, o;
        if (!e.isInPreview()) return;
        let t = T.convertPeer(e);
        return {
            localPeer: t.id,
            audioTrack: t.audioTrack,
            videoTrack: t.videoTrack,
            asRole: ((i = e.asRole) == null ? void 0 : i.name) || ((o = e.role) == null ? void 0 : o.name)
        };
    }
    setTrackVolume(e, t) {
        return c(this, null, function*() {
            let i = this.hmsSDKTracks[t];
            i ? i instanceof (0, _hmsVideo.HMSAudioTrack) ? (yield i.setVolume(e), this.setState((o)=>{
                let r = o.tracks[t];
                r && r.type === "audio" && (r.volume = e);
            }, "trackVolume")) : S.w(`track ${t} is not an audio track`) : this.logPossibleInconsistency(`track ${t} not present, unable to set volume`);
        });
    }
    localAndVideoUnmuting(e) {
        let t = this.store.getState(E);
        if ((t == null ? void 0 : t.videoTrack) !== e) return !1;
        let i = this.store.getState(Qe), o = this.store.getState(ge);
        return i && !o;
    }
    logPossibleInconsistency(e) {
        S.w("possible inconsistency detected - ", e);
    }
    addRemoveVideoPlugin(e, t, i) {
        return c(this, null, function*() {
            if (!e) {
                S.w("Invalid plugin received in store");
                return;
            }
            let o = this.store.getState(b);
            if (o) {
                let r = this.hmsSDKTracks[o];
                r ? (t === "add" ? yield r.addPlugin(e, i) : t === "remove" && (yield r.removePlugin(e)), this.syncRoomState(`${t}VideoPlugin`)) : this.logPossibleInconsistency(`track ${o} not present, unable to remove plugin`);
            }
        });
    }
    addRemoveAudioPlugin(e, t) {
        return c(this, null, function*() {
            if (!e) {
                S.w("Invalid plugin received in store");
                return;
            }
            let i = this.store.getState(N);
            if (i) {
                let o = this.hmsSDKTracks[i];
                o ? (t === "add" ? yield o.addPlugin(e) : t === "remove" && (yield o.removePlugin(e)), this.syncRoomState(`${t}AudioPlugin`)) : this.logPossibleInconsistency(`track ${i} not present, unable to remove plugin`);
            }
        });
    }
    isSameStoreSDKTrack(e, t) {
        var i;
        return t ? ((i = this.hmsSDKTracks[t]) == null ? void 0 : i.trackId) === e : !1;
    }
    onRoleChangeRequest(e) {
        this.setState((t)=>{
            t.roleChangeRequests.length === 0 && t.roleChangeRequests.push(T.convertRoleChangeRequest(e));
        }, "roleChangeRequest");
    }
    removeRoleChangeRequest(e) {
        this.setState((t)=>{
            let i = t.roleChangeRequests.findIndex((o)=>o.token === e.token);
            i !== -1 && t.roleChangeRequests.splice(i, 1);
        }, "removeRoleChangeRequest");
    }
    onRoleUpdate() {
        this.syncRoomState("roleUpdate");
    }
    getStoreLocalTrackIDfromSDKTrack(e) {
        return this.store.getState(We).find((i)=>this.hmsSDKTracks[i].trackId === e.trackId);
    }
    setSessionStoreValueLocally(e, t = "setSessionStore") {
        let i = Array.isArray(e) ? e : [
            e
        ];
        this.setState((o)=>{
            i.forEach((r)=>{
                o.sessionStore[r.key] = r.value;
            });
        }, t);
    }
};
var me = (s)=>(0, _hmsVideo.isBrowser) ? `${s} ${document.title}` : s;
var we = class {
    constructor(e, t, i){
        this.store = e, this.actions = t, this.notifications = i;
    }
    getStore() {
        return this.store;
    }
    getActions() {
        return this.actions;
    }
    getNotifications() {
        return {
            onNotification: this.notifications.onNotification
        };
    }
};
var Rt = (s, e, t)=>{
    let i;
    t.getState(A) === h.Connected && (i = Pt(s, e, t)), t.subscribe((o)=>{
        [
            h.Connected,
            h.Reconnecting
        ].includes(o) ? i || (i = Pt(s, e, t)) : [
            h.Disconnected,
            h.Failed
        ].includes(o) && i && (fs(e, o), i(), i = void 0);
    }, A);
}, Pt = (s, e, t)=>{
    var r, n;
    let i = Hs(t, e);
    (r = s.getWebrtcInternals()) == null || r.start();
    let o = (n = s.getWebrtcInternals()) == null ? void 0 : n.onStatsChange((a)=>hs(e, a, t, s));
    return ()=>{
        i(), o && o();
    };
}, Hs = (s, e)=>{
    let t, i, o;
    return s.getState(Q) ? e.namedSetState((r)=>{
        r.localPeer.id = s.getState(Q);
    }, "localpeer-id") : t = s.subscribe((r)=>{
        r && e.namedSetState((n)=>{
            n.localPeer.id = r;
        }, "localpeer-id");
    }, Q), s.getState(b) ? e.namedSetState((r)=>{
        r.localPeer.videoTrack = s.getState(b);
    }, "localpeer-videotrack-id") : i = s.subscribe((r)=>{
        r && e.namedSetState((n)=>{
            n.localPeer.videoTrack = r;
        }, "localpeer-videotrack-id");
    }, b), s.getState(N) ? e.namedSetState((r)=>{
        r.localPeer.audioTrack = s.getState(N);
    }, "localpeer-audiotrack-id") : o = s.subscribe((r)=>{
        r && e.namedSetState((n)=>{
            n.localPeer.audioTrack = r;
        }, "localpeer-audiotrack-id");
    }, N), ()=>{
        t == null || t(), i == null || i(), o == null || o();
    };
}, hs = (s, e, t, i)=>{
    let o = t.getState(f);
    s.namedSetState((r)=>{
        let n = t.getState(Q), a = {}, d = Object.keys(o).filter((F)=>o[F].peerId !== n);
        for (let F of d){
            let $ = e.getRemoteTrackStats(F);
            $ && (a[F] = $);
        }
        De(r.remoteTrackStats, a);
        let P = {
            [n]: e.getLocalPeerStats()
        };
        De(r.peerStats, P), gt(r.localTrackStats, e.getLocalTrackStats(), i.store.getLocalPeerTracks());
    }, "webrtc-stats");
}, fs = (s, e = "resetState")=>{
    s.namedSetState((t)=>{
        Object.assign(t, re());
    }, e);
};
var He = class {
    constructor(e, t){
        this.hmsStore = e;
        this.sdk = t;
        this.store = L.createNewHMSStore(me("HMSStatsStore"), re), this.getState = this.store.getState, this.subscribe = this.store.subscribe, this.getPublishPeerConnection = ()=>new Promise((i)=>{
                var o, r;
                this.hmsStore.getState(A) === "Connected" ? i((r = (o = this.sdk) == null ? void 0 : o.getWebrtcInternals()) == null ? void 0 : r.getPublishPeerConnection()) : this.hmsStore.subscribe((n)=>{
                    var a, d;
                    n === "Connected" && i((d = (a = this.sdk) == null ? void 0 : a.getWebrtcInternals()) == null ? void 0 : d.getPublishPeerConnection());
                }, A);
            }), this.getSubscribePeerConnection = ()=>new Promise((i)=>{
                var o, r;
                this.hmsStore.getState(A) === "Connected" ? i((r = (o = this.sdk) == null ? void 0 : o.getWebrtcInternals()) == null ? void 0 : r.getSubscribePeerConnection()) : this.hmsStore.subscribe((n)=>{
                    var a, d;
                    n === "Connected" && i((d = (a = this.sdk) == null ? void 0 : a.getWebrtcInternals()) == null ? void 0 : d.getSubscribePeerConnection());
                }, A);
            }), !!this.sdk && Rt(this.sdk, this.store, this.hmsStore);
    }
};
var gs = (s)=>s.localPeer.id, ys = (s)=>s.localPeer.audioTrack, ks = (s)=>s.localPeer.videoTrack, Rs = (s, e)=>e, vt = (s, e)=>e, Ps = (s)=>s.remoteTrackStats, It = (s)=>s.peerStats, Oe = (s)=>s.localTrackStats, q = (0, _reselect.createSelector)([
    It,
    gs
], (s, e)=>s[e]), vs = (0, _reselect.createSelector)(q, (s)=>{
    var e;
    return (e = s == null ? void 0 : s.subscribe) == null ? void 0 : e.packetsLost;
}), Is = (0, _reselect.createSelector)(q, (s)=>{
    var e;
    return (e = s == null ? void 0 : s.subscribe) == null ? void 0 : e.jitter;
}), Ds = (0, _reselect.createSelector)(q, (s)=>{
    var e;
    return (e = s == null ? void 0 : s.publish) == null ? void 0 : e.bitrate;
}), Es = (0, _reselect.createSelector)(q, (s)=>{
    var e;
    return (e = s == null ? void 0 : s.subscribe) == null ? void 0 : e.bitrate;
}), bs = (0, _reselect.createSelector)(q, (s)=>{
    var e;
    return (e = s == null ? void 0 : s.publish) == null ? void 0 : e.availableOutgoingBitrate;
}), As = (0, _reselect.createSelector)(q, (s)=>{
    var e;
    return (e = s == null ? void 0 : s.subscribe) == null ? void 0 : e.availableIncomingBitrate;
}), Cs = (0, _reselect.createSelector)(q, (s)=>{
    var e;
    return (e = s == null ? void 0 : s.publish) == null ? void 0 : e.bytesSent;
}), Ns = (0, _reselect.createSelector)(q, (s)=>{
    var e;
    return (e = s == null ? void 0 : s.subscribe) == null ? void 0 : e.bytesReceived;
}), xs = (0, _reselect.createSelector)([
    It,
    Rs
], (s, e)=>e ? s[e] : void 0), Ls = (0, _reselect.createSelector)([
    Ps,
    vt
], (s, e)=>e ? s[e] : void 0), _e = (0, _reselect.createSelector)([
    Oe,
    vt
], (s, e)=>e ? s[e] : void 0), ws = p(xs), Os = p(Ls), _s = (0, _reselect.createSelector)([
    Oe,
    ys
], (s, e)=>{
    var t;
    return e ? (t = s[e]) == null ? void 0 : t[0] : void 0;
}), Us = p((0, _reselect.createSelector)(_e, (s)=>s == null ? void 0 : s[0])), Ks = (0, _reselect.createSelector)([
    Oe,
    ks
], (s, e)=>{
    var t;
    return e ? (t = s[e]) == null ? void 0 : t[0] : void 0;
}), Vs = p((0, _reselect.createSelector)(_e, (s)=>s)), Bs = (s)=>p((0, _reselect.createSelector)(_e, (e)=>{
        let t = Object.keys((0, _hmsVideo.simulcastMapping)).find((i)=>(0, _hmsVideo.simulcastMapping)[i] === s);
        return s && (e == null ? void 0 : e.find((i)=>i.rid === t)) || (e == null ? void 0 : e[0]);
    })), qs = {
    localPeerStats: q,
    packetsLost: vs,
    jitter: Is,
    publishBitrate: Ds,
    subscribeBitrate: Es,
    availablePublishBitrate: bs,
    availableSubscribeBitrate: As,
    totalBytesSent: Cs,
    totalBytesReceived: Ns,
    peerStatsByID: ws,
    trackStatsByID: Os,
    localAudioTrackStatsByID: Us,
    localVideoTrackStatsByID: Vs,
    localVideoTrackStatsByLayer: Bs,
    localAudioTrackStats: _s,
    localVideoTrackStats: Ks
};
var L = class {
    constructor(e, t, i){
        this.getStats = ()=>(this.stats || (this.stats = new He(this.store, this.sdk)), this.stats);
        e ? this.store = e : this.store = L.createNewHMSStore(me("HMSStore"), oe), i ? this.notifications = i : this.notifications = new Ie(this.store), t ? this.actions = t : (this.sdk = new (0, _hmsVideo.HMSSdk), this.actions = new Le(this.store, this.sdk, this.notifications)), this.actions.setFrameworkInfo({
            type: "js",
            sdkVersion: Dt().version
        }), this.initialTriggerOnSubscribe = !1, (0, _hmsVideo.isBrowser) && (window.__hms = this, window.__beam = new we(this.store, this.actions, this.notifications));
    }
    triggerOnSubscribe() {
        this.initialTriggerOnSubscribe || (L.makeStoreTriggerOnSubscribe(this.store), this.initialTriggerOnSubscribe = !0);
    }
    getStore() {
        return this.store;
    }
    getHMSActions() {
        return this.actions;
    }
    getActions() {
        return this.actions;
    }
    getNotifications() {
        return {
            onNotification: this.notifications.onNotification
        };
    }
    static createNewHMSStore(e, t) {
        let i = (0, _vanillaDefault.default)(()=>t()), o = i.setState;
        i.setState = (a)=>{
            let d = typeof a == "function" ? (0, _immerDefault.default)(a) : a;
            o(d);
        };
        let r = i.getState;
        i.getState = (a)=>a ? a(r()) : r(), L.compareWithShallowCheckInSubscribe(i);
        let n = L.setUpDevtools(i, e);
        return J(O({}, i), {
            namedSetState: n
        });
    }
    static makeStoreTriggerOnSubscribe(e) {
        let t = e.subscribe;
        e.subscribe = (i, o, r)=>(i(e.getState(o), void 0), t(i, o, r));
    }
    static compareWithShallowCheckInSubscribe(e) {
        let t = e.subscribe;
        e.subscribe = (i, o, r)=>(o || (o = (n)=>n), r = r || (0, _shallowDefault.default), t(i, o, r));
    }
    static setUpDevtools(e, t) {
        let i;
        try {
            i = window.__REDUX_DEVTOOLS_EXTENSION__ || window.top.__REDUX_DEVTOOLS_EXTENSION__;
        } catch (n) {}
        if (!i) return (n)=>{
            e.setState(n);
        };
        let o = i.connect(L.devtoolsOptions(t));
        o.prefix = t ? `${t} > ` : "";
        let r = e.setState;
        return e.setState = (n)=>{
            r(n), o.send(`${o.prefix}setState`, e.getState());
        }, o.subscribe(L.devtoolsSubscribe(o, e, r)), o.send("setUpStore", e.getState()), (n, a)=>{
            r(n);
            let d = a || `${o.prefix}action`;
            o.send(d, e.getState());
        };
    }
    static devtoolsOptions(e) {
        return {
            name: e,
            actionsBlacklist: [
                "audioLevel",
                "playlistProgress",
                "connectionQuality"
            ]
        };
    }
    static devtoolsSubscribe(e, t, i) {
        return (o)=>{
            var r, n, a, d;
            if (o.type === "DISPATCH" && o.state) [
                "JUMP_TO_ACTION",
                "JUMP_TO_STATE"
            ].includes(o.payload.type) ? i(JSON.parse(o.state)) : t.setState(JSON.parse(o.state));
            else if (o.type === "DISPATCH" && ((r = o.payload) == null ? void 0 : r.type) === "COMMIT") e.init(t.getState());
            else if (o.type === "DISPATCH" && ((n = o.payload) == null ? void 0 : n.type) === "IMPORT_STATE") {
                let P = (a = o.payload.nextLiftedState) == null ? void 0 : a.actionsById;
                (((d = o.payload.nextLiftedState) == null ? void 0 : d.computedStates) || []).forEach(({ state: $  }, g)=>{
                    let j = P[g] || `${e.prefix}setState`;
                    g === 0 ? e.init($) : (i($), e.send(j, t.getState()));
                });
            }
        };
    }
};

},{"immer":"4sfoz","zustand/shallow":"4DTir","zustand/vanilla":"2SLIN","@100mslive/hms-video":"j0n3D","eventemitter2":"j95ue","reselect":"isIsC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sfoz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Immer", ()=>un);
parcelHelpers.export(exports, "applyPatches", ()=>pn);
parcelHelpers.export(exports, "castDraft", ()=>K);
parcelHelpers.export(exports, "castImmutable", ()=>$);
parcelHelpers.export(exports, "createDraft", ()=>ln);
parcelHelpers.export(exports, "current", ()=>R);
parcelHelpers.export(exports, "enableAllPlugins", ()=>J);
parcelHelpers.export(exports, "enableES5", ()=>F);
parcelHelpers.export(exports, "enableMapSet", ()=>C);
parcelHelpers.export(exports, "enablePatches", ()=>T);
parcelHelpers.export(exports, "finishDraft", ()=>dn);
parcelHelpers.export(exports, "freeze", ()=>d);
parcelHelpers.export(exports, "immerable", ()=>L);
parcelHelpers.export(exports, "isDraft", ()=>r);
parcelHelpers.export(exports, "isDraftable", ()=>t);
parcelHelpers.export(exports, "nothing", ()=>H);
parcelHelpers.export(exports, "original", ()=>e);
parcelHelpers.export(exports, "produce", ()=>fn);
parcelHelpers.export(exports, "produceWithPatches", ()=>cn);
parcelHelpers.export(exports, "setAutoFreeze", ()=>sn);
parcelHelpers.export(exports, "setUseProxies", ()=>vn);
function n(n) {
    for(var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++)t[e - 1] = arguments[e];
    var i = Y[n], o = i ? "function" == typeof i ? i.apply(null, t) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
    throw Error("[Immer] minified error nr: " + n + (t.length ? " " + t.map(function(n) {
        return "'" + n + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n) {
    return !!n && !!n[Q];
}
function t(n) {
    var r;
    return !!n && (function(n) {
        if (!n || "object" != typeof n) return !1;
        var r = Object.getPrototypeOf(n);
        if (null === r) return !0;
        var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
        return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
    }(n) || Array.isArray(n) || !!n[L] || !!(null === (r = n.constructor) || void 0 === r ? void 0 : r[L]) || s(n) || v(n));
}
function e(t) {
    return r(t) || n(23, t), t[Q].t;
}
function i(n, r, t) {
    void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach(function(e) {
        t && "symbol" == typeof e || r(e, n[e], n);
    }) : n.forEach(function(t, e) {
        return r(e, t, n);
    });
}
function o(n) {
    var r = n[Q];
    return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
}
function u(n, r) {
    return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}
function a(n, r) {
    return 2 === o(n) ? n.get(r) : n[r];
}
function f(n, r, t) {
    var e = o(n);
    2 === e ? n.set(r, t) : 3 === e ? n.add(t) : n[r] = t;
}
function c(n, r) {
    return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
}
function s(n) {
    return X && n instanceof Map;
}
function v(n) {
    return q && n instanceof Set;
}
function p(n) {
    return n.o || n.t;
}
function l(n) {
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    var r = rn(n);
    delete r[Q];
    for(var t = nn(r), e = 0; e < t.length; e++){
        var i = t[e], o = r[i];
        !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: n[i]
        });
    }
    return Object.create(Object.getPrototypeOf(n), r);
}
function d(n, e) {
    return void 0 === e && (e = !1), y(n) || r(n) || !t(n) || (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function(n, r) {
        return d(r, !0);
    }, !0)), n;
}
function h() {
    n(2);
}
function y(n) {
    return null == n || "object" != typeof n || Object.isFrozen(n);
}
function b(r) {
    var t = tn[r];
    return t || n(18, r), t;
}
function m(n, r) {
    tn[n] || (tn[n] = r);
}
function _() {
    return U || n(0), U;
}
function j(n, r) {
    r && (b("Patches"), n.u = [], n.s = [], n.v = r);
}
function g(n) {
    O(n), n.p.forEach(S), n.p = null;
}
function O(n) {
    n === U && (U = n.l);
}
function w(n) {
    return U = {
        p: [],
        l: U,
        h: n,
        m: !0,
        _: 0
    };
}
function S(n) {
    var r = n[Q];
    0 === r.i || 1 === r.i ? r.j() : r.g = !0;
}
function P(r, e) {
    e._ = e.p.length;
    var i = e.p[0], o = void 0 !== r && r !== i;
    return e.h.O || b("ES5").S(e, r, o), o ? (i[Q].P && (g(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), g(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
}
function M(n, r, t) {
    if (y(r)) return r;
    var e = r[Q];
    if (!e) return i(r, function(i, o) {
        return A(n, e, r, i, o, t);
    }, !0), r;
    if (e.A !== n) return r;
    if (!e.P) return x(n, e.t, !0), e.t;
    if (!e.I) {
        e.I = !0, e.A._--;
        var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o, u = o, a = !1;
        3 === e.i && (u = new Set(o), o.clear(), a = !0), i(u, function(r, i) {
            return A(n, e, o, r, i, t, a);
        }), x(n, o, !1), t && n.u && b("Patches").N(e, t, n.u, n.s);
    }
    return e.o;
}
function A(e, i, o, a, c, s, v) {
    if (c === o && n(5), r(c)) {
        var p = M(e, c, s && i && 3 !== i.i && !u(i.R, a) ? s.concat(a) : void 0);
        if (f(o, a, p), !r(p)) return;
        e.m = !1;
    } else v && o.add(c);
    if (t(c) && !y(c)) {
        if (!e.h.D && e._ < 1) return;
        M(e, c), i && i.A.l || x(e, c);
    }
}
function x(n, r, t) {
    void 0 === t && (t = !1), !n.l && n.h.D && n.m && d(r, t);
}
function z(n, r) {
    var t = n[Q];
    return (t ? p(t) : n)[r];
}
function I(n, r) {
    if (r in n) for(var t = Object.getPrototypeOf(n); t;){
        var e = Object.getOwnPropertyDescriptor(t, r);
        if (e) return e;
        t = Object.getPrototypeOf(t);
    }
}
function k(n) {
    n.P || (n.P = !0, n.l && k(n.l));
}
function E(n) {
    n.o || (n.o = l(n.t));
}
function N(n, r, t) {
    var e = s(r) ? b("MapSet").F(r, t) : v(r) ? b("MapSet").T(r, t) : n.O ? function(n, r) {
        var t = Array.isArray(n), e = {
            i: t ? 1 : 0,
            A: r ? r.A : _(),
            P: !1,
            I: !1,
            R: {},
            l: r,
            t: n,
            k: null,
            o: null,
            j: null,
            C: !1
        }, i = e, o = en;
        t && (i = [
            e
        ], o = on);
        var u = Proxy.revocable(i, o), a = u.revoke, f = u.proxy;
        return e.k = f, e.j = a, f;
    }(r, t) : b("ES5").J(r, t);
    return (t ? t.A : _()).p.push(e), e;
}
function R(e) {
    return r(e) || n(22, e), function n(r) {
        if (!t(r)) return r;
        var e, u = r[Q], c = o(r);
        if (u) {
            if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
            u.I = !0, e = D(r, c), u.I = !1;
        } else e = D(r, c);
        return i(e, function(r, t) {
            u && a(u.t, r) === t || f(e, r, n(t));
        }), 3 === c ? new Set(e) : e;
    }(e);
}
function D(n, r) {
    switch(r){
        case 2:
            return new Map(n);
        case 3:
            return Array.from(n);
    }
    return l(n);
}
function F() {
    function t(n, r) {
        var t = s[n];
        return t ? t.enumerable = r : s[n] = t = {
            configurable: !0,
            enumerable: r,
            get: function() {
                var r = this[Q];
                return f(r), en.get(r, n);
            },
            set: function(r) {
                var t = this[Q];
                f(t), en.set(t, n, r);
            }
        }, t;
    }
    function e(n) {
        for(var r = n.length - 1; r >= 0; r--){
            var t = n[r][Q];
            if (!t.P) switch(t.i){
                case 5:
                    a(t) && k(t);
                    break;
                case 4:
                    o(t) && k(t);
            }
        }
    }
    function o(n) {
        for(var r = n.t, t = n.k, e = nn(t), i = e.length - 1; i >= 0; i--){
            var o = e[i];
            if (o !== Q) {
                var a = r[o];
                if (void 0 === a && !u(r, o)) return !0;
                var f = t[o], s = f && f[Q];
                if (s ? s.t !== a : !c(f, a)) return !0;
            }
        }
        var v = !!r[Q];
        return e.length !== nn(r).length + (v ? 0 : 1);
    }
    function a(n) {
        var r = n.k;
        if (r.length !== n.t.length) return !0;
        var t = Object.getOwnPropertyDescriptor(r, r.length - 1);
        if (t && !t.get) return !0;
        for(var e = 0; e < r.length; e++)if (!r.hasOwnProperty(e)) return !0;
        return !1;
    }
    function f(r) {
        r.g && n(3, JSON.stringify(p(r)));
    }
    var s = {};
    m("ES5", {
        J: function(n, r) {
            var e = Array.isArray(n), i = function(n, r) {
                if (n) {
                    for(var e = Array(r.length), i = 0; i < r.length; i++)Object.defineProperty(e, "" + i, t(i, !0));
                    return e;
                }
                var o = rn(r);
                delete o[Q];
                for(var u = nn(o), a = 0; a < u.length; a++){
                    var f = u[a];
                    o[f] = t(f, n || !!o[f].enumerable);
                }
                return Object.create(Object.getPrototypeOf(r), o);
            }(e, n), o = {
                i: e ? 5 : 4,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                R: {},
                l: r,
                t: n,
                k: i,
                o: null,
                g: !1,
                C: !1
            };
            return Object.defineProperty(i, Q, {
                value: o,
                writable: !0
            }), i;
        },
        S: function(n, t, o) {
            o ? r(t) && t[Q].A === n && e(n.p) : (n.u && function n(r) {
                if (r && "object" == typeof r) {
                    var t = r[Q];
                    if (t) {
                        var e = t.t, o = t.k, f = t.R, c = t.i;
                        if (4 === c) i(o, function(r) {
                            r !== Q && (void 0 !== e[r] || u(e, r) ? f[r] || n(o[r]) : (f[r] = !0, k(t)));
                        }), i(e, function(n) {
                            void 0 !== o[n] || u(o, n) || (f[n] = !1, k(t));
                        });
                        else if (5 === c) {
                            if (a(t) && (k(t), f.length = !0), o.length < e.length) for(var s = o.length; s < e.length; s++)f[s] = !1;
                            else for(var v = e.length; v < o.length; v++)f[v] = !0;
                            for(var p = Math.min(o.length, e.length), l = 0; l < p; l++)o.hasOwnProperty(l) || (f[l] = !0), void 0 === f[l] && n(o[l]);
                        }
                    }
                }
            }(n.p[0]), e(n.p));
        },
        K: function(n) {
            return 4 === n.i ? o(n) : a(n);
        }
    });
}
function T() {
    function e(n) {
        if (!t(n)) return n;
        if (Array.isArray(n)) return n.map(e);
        if (s(n)) return new Map(Array.from(n.entries()).map(function(n) {
            return [
                n[0],
                e(n[1])
            ];
        }));
        if (v(n)) return new Set(Array.from(n).map(e));
        var r = Object.create(Object.getPrototypeOf(n));
        for(var i in n)r[i] = e(n[i]);
        return u(n, L) && (r[L] = n[L]), r;
    }
    function f(n) {
        return r(n) ? e(n) : n;
    }
    var c = "add";
    m("Patches", {
        $: function(r, t) {
            return t.forEach(function(t) {
                for(var i = t.path, u = t.op, f = r, s = 0; s < i.length - 1; s++){
                    var v = o(f), p = i[s];
                    "string" != typeof p && "number" != typeof p && (p = "" + p), 0 !== v && 1 !== v || "__proto__" !== p && "constructor" !== p || n(24), "function" == typeof f && "prototype" === p && n(24), "object" != typeof (f = a(f, p)) && n(15, i.join("/"));
                }
                var l = o(f), d = e(t.value), h = i[i.length - 1];
                switch(u){
                    case "replace":
                        switch(l){
                            case 2:
                                return f.set(h, d);
                            case 3:
                                n(16);
                            default:
                                return f[h] = d;
                        }
                    case c:
                        switch(l){
                            case 1:
                                return "-" === h ? f.push(d) : f.splice(h, 0, d);
                            case 2:
                                return f.set(h, d);
                            case 3:
                                return f.add(d);
                            default:
                                return f[h] = d;
                        }
                    case "remove":
                        switch(l){
                            case 1:
                                return f.splice(h, 1);
                            case 2:
                                return f.delete(h);
                            case 3:
                                return f.delete(t.value);
                            default:
                                return delete f[h];
                        }
                    default:
                        n(17, u);
                }
            }), r;
        },
        N: function(n, r, t, e) {
            switch(n.i){
                case 0:
                case 4:
                case 2:
                    return function(n, r, t, e) {
                        var o = n.t, s = n.o;
                        i(n.R, function(n, i) {
                            var v = a(o, n), p = a(s, n), l = i ? u(o, n) ? "replace" : c : "remove";
                            if (v !== p || "replace" !== l) {
                                var d = r.concat(n);
                                t.push("remove" === l ? {
                                    op: l,
                                    path: d
                                } : {
                                    op: l,
                                    path: d,
                                    value: p
                                }), e.push(l === c ? {
                                    op: "remove",
                                    path: d
                                } : "remove" === l ? {
                                    op: c,
                                    path: d,
                                    value: f(v)
                                } : {
                                    op: "replace",
                                    path: d,
                                    value: f(v)
                                });
                            }
                        });
                    }(n, r, t, e);
                case 5:
                case 1:
                    return function(n, r, t, e) {
                        var i = n.t, o = n.R, u = n.o;
                        if (u.length < i.length) {
                            var a = [
                                u,
                                i
                            ];
                            i = a[0], u = a[1];
                            var s = [
                                e,
                                t
                            ];
                            t = s[0], e = s[1];
                        }
                        for(var v = 0; v < i.length; v++)if (o[v] && u[v] !== i[v]) {
                            var p = r.concat([
                                v
                            ]);
                            t.push({
                                op: "replace",
                                path: p,
                                value: f(u[v])
                            }), e.push({
                                op: "replace",
                                path: p,
                                value: f(i[v])
                            });
                        }
                        for(var l = i.length; l < u.length; l++){
                            var d = r.concat([
                                l
                            ]);
                            t.push({
                                op: c,
                                path: d,
                                value: f(u[l])
                            });
                        }
                        i.length < u.length && e.push({
                            op: "replace",
                            path: r.concat([
                                "length"
                            ]),
                            value: i.length
                        });
                    }(n, r, t, e);
                case 3:
                    return function(n, r, t, e) {
                        var i = n.t, o = n.o, u = 0;
                        i.forEach(function(n) {
                            if (!o.has(n)) {
                                var i = r.concat([
                                    u
                                ]);
                                t.push({
                                    op: "remove",
                                    path: i,
                                    value: n
                                }), e.unshift({
                                    op: c,
                                    path: i,
                                    value: n
                                });
                            }
                            u++;
                        }), u = 0, o.forEach(function(n) {
                            if (!i.has(n)) {
                                var o = r.concat([
                                    u
                                ]);
                                t.push({
                                    op: c,
                                    path: o,
                                    value: n
                                }), e.unshift({
                                    op: "remove",
                                    path: o,
                                    value: n
                                });
                            }
                            u++;
                        });
                    }(n, r, t, e);
            }
        },
        M: function(n, r, t, e) {
            t.push({
                op: "replace",
                path: [],
                value: r === H ? void 0 : r
            }), e.push({
                op: "replace",
                path: [],
                value: n
            });
        }
    });
}
function C() {
    function r(n, r) {
        function t() {
            this.constructor = n;
        }
        a(n, r), n.prototype = (t.prototype = r.prototype, new t);
    }
    function e(n) {
        n.o || (n.R = new Map, n.o = new Map(n.t));
    }
    function o(n) {
        n.o || (n.o = new Set, n.t.forEach(function(r) {
            if (t(r)) {
                var e = N(n.A.h, r, n);
                n.p.set(r, e), n.o.add(e);
            } else n.o.add(r);
        }));
    }
    function u(r) {
        r.g && n(3, JSON.stringify(p(r)));
    }
    var a = function(n, r) {
        return (a = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(n, r) {
            n.__proto__ = r;
        } || function(n, r) {
            for(var t in r)r.hasOwnProperty(t) && (n[t] = r[t]);
        })(n, r);
    }, f = function() {
        function n(n, r) {
            return this[Q] = {
                i: 2,
                l: r,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                R: void 0,
                t: n,
                k: this,
                C: !1,
                g: !1
            }, this;
        }
        r(n, Map);
        var o = n.prototype;
        return Object.defineProperty(o, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), o.has = function(n) {
            return p(this[Q]).has(n);
        }, o.set = function(n, r) {
            var t = this[Q];
            return u(t), p(t).has(n) && p(t).get(n) === r || (e(t), k(t), t.R.set(n, !0), t.o.set(n, r), t.R.set(n, !0)), this;
        }, o.delete = function(n) {
            if (!this.has(n)) return !1;
            var r = this[Q];
            return u(r), e(r), k(r), r.t.has(n) ? r.R.set(n, !1) : r.R.delete(n), r.o.delete(n), !0;
        }, o.clear = function() {
            var n = this[Q];
            u(n), p(n).size && (e(n), k(n), n.R = new Map, i(n.t, function(r) {
                n.R.set(r, !1);
            }), n.o.clear());
        }, o.forEach = function(n, r) {
            var t = this;
            p(this[Q]).forEach(function(e, i) {
                n.call(r, t.get(i), i, t);
            });
        }, o.get = function(n) {
            var r = this[Q];
            u(r);
            var i = p(r).get(n);
            if (r.I || !t(i)) return i;
            if (i !== r.t.get(n)) return i;
            var o = N(r.A.h, i, r);
            return e(r), r.o.set(n, o), o;
        }, o.keys = function() {
            return p(this[Q]).keys();
        }, o.values = function() {
            var n, r = this, t = this.keys();
            return (n = {})[V] = function() {
                return r.values();
            }, n.next = function() {
                var n = t.next();
                return n.done ? n : {
                    done: !1,
                    value: r.get(n.value)
                };
            }, n;
        }, o.entries = function() {
            var n, r = this, t = this.keys();
            return (n = {})[V] = function() {
                return r.entries();
            }, n.next = function() {
                var n = t.next();
                if (n.done) return n;
                var e = r.get(n.value);
                return {
                    done: !1,
                    value: [
                        n.value,
                        e
                    ]
                };
            }, n;
        }, o[V] = function() {
            return this.entries();
        }, n;
    }(), c = function() {
        function n(n, r) {
            return this[Q] = {
                i: 3,
                l: r,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                t: n,
                k: this,
                p: new Map,
                g: !1,
                C: !1
            }, this;
        }
        r(n, Set);
        var t = n.prototype;
        return Object.defineProperty(t, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), t.has = function(n) {
            var r = this[Q];
            return u(r), r.o ? !!r.o.has(n) || !(!r.p.has(n) || !r.o.has(r.p.get(n))) : r.t.has(n);
        }, t.add = function(n) {
            var r = this[Q];
            return u(r), this.has(n) || (o(r), k(r), r.o.add(n)), this;
        }, t.delete = function(n) {
            if (!this.has(n)) return !1;
            var r = this[Q];
            return u(r), o(r), k(r), r.o.delete(n) || !!r.p.has(n) && r.o.delete(r.p.get(n));
        }, t.clear = function() {
            var n = this[Q];
            u(n), p(n).size && (o(n), k(n), n.o.clear());
        }, t.values = function() {
            var n = this[Q];
            return u(n), o(n), n.o.values();
        }, t.entries = function() {
            var n = this[Q];
            return u(n), o(n), n.o.entries();
        }, t.keys = function() {
            return this.values();
        }, t[V] = function() {
            return this.values();
        }, t.forEach = function(n, r) {
            for(var t = this.values(), e = t.next(); !e.done;)n.call(r, e.value, e.value, this), e = t.next();
        }, n;
    }();
    m("MapSet", {
        F: function(n, r) {
            return new f(n, r);
        },
        T: function(n, r) {
            return new c(n, r);
        }
    });
}
function J() {
    F(), C(), T();
}
function K(n) {
    return n;
}
function $(n) {
    return n;
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", Y = {
    0: "Illegal state",
    1: "Immer drafts cannot have computed properties",
    2: "This object has been frozen and should not be mutated",
    3: function(n) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
    },
    4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    5: "Immer forbids circular references",
    6: "The first or second argument to `produce` must be a function",
    7: "The third argument to `produce` must be a function or undefined",
    8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
    10: "The given draft is already finalized",
    11: "Object.defineProperty() cannot be used on an Immer draft",
    12: "Object.setPrototypeOf() cannot be used on an Immer draft",
    13: "Immer only supports deleting array indices",
    14: "Immer only supports setting array indices and the 'length' property",
    15: function(n) {
        return "Cannot apply patch, path doesn't resolve: " + n;
    },
    16: 'Sets cannot have "replace" patches.',
    17: function(n) {
        return "Unsupported patch operation: " + n;
    },
    18: function(n) {
        return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
    },
    20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
    21: function(n) {
        return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
    },
    22: function(n) {
        return "'current' expects a draft, got: " + n;
    },
    23: function(n) {
        return "'original' expects a draft, got: " + n;
    },
    24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
}, Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n) {
    return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n) {
    var r = {};
    return nn(n).forEach(function(t) {
        r[t] = Object.getOwnPropertyDescriptor(n, t);
    }), r;
}, tn = {}, en = {
    get: function(n, r) {
        if (r === Q) return n;
        var e = p(n);
        if (!u(e, r)) return function(n, r, t) {
            var e, i = I(r, t);
            return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
        }(n, e, r);
        var i = e[r];
        return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = N(n.A.h, i, n)) : i;
    },
    has: function(n, r) {
        return r in p(n);
    },
    ownKeys: function(n) {
        return Reflect.ownKeys(p(n));
    },
    set: function(n, r, t) {
        var e = I(p(n), r);
        if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;
        if (!n.P) {
            var i = z(p(n), r), o = null == i ? void 0 : i[Q];
            if (o && o.t === t) return n.o[r] = t, n.R[r] = !1, !0;
            if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
            E(n), k(n);
        }
        return n.o[r] === t && (void 0 !== t || r in n.o) || Number.isNaN(t) && Number.isNaN(n.o[r]) || (n.o[r] = t, n.R[r] = !0), !0;
    },
    deleteProperty: function(n, r) {
        return void 0 !== z(n.t, r) || r in n.t ? (n.R[r] = !1, E(n), k(n)) : delete n.R[r], n.o && delete n.o[r], !0;
    },
    getOwnPropertyDescriptor: function(n, r) {
        var t = p(n), e = Reflect.getOwnPropertyDescriptor(t, r);
        return e ? {
            writable: !0,
            configurable: 1 !== n.i || "length" !== r,
            enumerable: e.enumerable,
            value: t[r]
        } : e;
    },
    defineProperty: function() {
        n(11);
    },
    getPrototypeOf: function(n) {
        return Object.getPrototypeOf(n.t);
    },
    setPrototypeOf: function() {
        n(12);
    }
}, on = {};
i(en, function(n, r) {
    on[n] = function() {
        return arguments[0] = arguments[0][0], r.apply(this, arguments);
    };
}), on.deleteProperty = function(r, t) {
    return isNaN(parseInt(t)) && n(13), on.set.call(this, r, t, void 0);
}, on.set = function(r, t, e) {
    return "length" !== t && isNaN(parseInt(t)) && n(14), en.set.call(this, r[0], t, e, r[0]);
};
var un = function() {
    function e(r) {
        var e = this;
        this.O = B, this.D = !0, this.produce = function(r, i, o) {
            if ("function" == typeof r && "function" != typeof i) {
                var u = i;
                i = r;
                var a = e;
                return function(n) {
                    var r = this;
                    void 0 === n && (n = u);
                    for(var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)e[o - 1] = arguments[o];
                    return a.produce(n, function(n) {
                        var t;
                        return (t = i).call.apply(t, [
                            r,
                            n
                        ].concat(e));
                    });
                };
            }
            var f;
            if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
                var c = w(e), s = N(e, r, void 0), v = !0;
                try {
                    f = i(s), v = !1;
                } finally{
                    v ? g(c) : O(c);
                }
                return "undefined" != typeof Promise && f instanceof Promise ? f.then(function(n) {
                    return j(c, o), P(n, c);
                }, function(n) {
                    throw g(c), n;
                }) : (j(c, o), P(f, c));
            }
            if (!r || "object" != typeof r) {
                if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.D && d(f, !0), o) {
                    var p = [], l = [];
                    b("Patches").M(r, f, p, l), o(p, l);
                }
                return f;
            }
            n(21, r);
        }, this.produceWithPatches = function(n, r) {
            if ("function" == typeof n) return function(r) {
                for(var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)i[o - 1] = arguments[o];
                return e.produceWithPatches(r, function(r) {
                    return n.apply(void 0, [
                        r
                    ].concat(i));
                });
            };
            var t, i, o = e.produce(n, r, function(n, r) {
                t = n, i = r;
            });
            return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(n) {
                return [
                    n,
                    t,
                    i
                ];
            }) : [
                o,
                t,
                i
            ];
        }, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
    }
    var i = e.prototype;
    return i.createDraft = function(e) {
        t(e) || n(8), r(e) && (e = R(e));
        var i = w(this), o = N(this, e, void 0);
        return o[Q].C = !0, O(i), o;
    }, i.finishDraft = function(r, t) {
        var e = r && r[Q];
        e && e.C || n(9), e.I && n(10);
        var i = e.A;
        return j(i, t), P(void 0, i);
    }, i.setAutoFreeze = function(n) {
        this.D = n;
    }, i.setUseProxies = function(r) {
        r && !B && n(20), this.O = r;
    }, i.applyPatches = function(n, t) {
        var e;
        for(e = t.length - 1; e >= 0; e--){
            var i = t[e];
            if (0 === i.path.length && "replace" === i.op) {
                n = i.value;
                break;
            }
        }
        e > -1 && (t = t.slice(e + 1));
        var o = b("Patches").$;
        return r(n) ? o(n, t) : this.produce(n, function(n) {
            return o(n, t);
        });
    }, e;
}(), an = new un, fn = an.produce, cn = an.produceWithPatches.bind(an), sn = an.setAutoFreeze.bind(an), vn = an.setUseProxies.bind(an), pn = an.applyPatches.bind(an), ln = an.createDraft.bind(an), dn = an.finishDraft.bind(an);
exports.default = fn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4DTir":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function shallow(objA, objB) {
    if (Object.is(objA, objB)) return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
    var keysA = Object.keys(objA);
    if (keysA.length !== Object.keys(objB).length) return false;
    for(var i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) return false;
    }
    return true;
}
exports.default = shallow;

},{}],"2SLIN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function create(createState) {
    var state;
    var listeners = new Set();
    var setState = function setState(partial, replace) {
        var nextState = typeof partial === "function" ? partial(state) : partial;
        if (nextState !== state) {
            var _previousState = state;
            state = replace ? nextState : Object.assign({}, state, nextState);
            listeners.forEach(function(listener) {
                return listener(state, _previousState);
            });
        }
    };
    var getState = function getState() {
        return state;
    };
    var subscribeWithSelector = function subscribeWithSelector(listener, selector, equalityFn) {
        if (selector === void 0) selector = getState;
        if (equalityFn === void 0) equalityFn = Object.is;
        var currentSlice = selector(state);
        function listenerToAdd() {
            var nextSlice = selector(state);
            if (!equalityFn(currentSlice, nextSlice)) {
                var _previousSlice = currentSlice;
                listener(currentSlice = nextSlice, _previousSlice);
            }
        }
        listeners.add(listenerToAdd);
        return function() {
            return listeners.delete(listenerToAdd);
        };
    };
    var subscribe = function subscribe(listener, selector, equalityFn) {
        if (selector || equalityFn) return subscribeWithSelector(listener, selector, equalityFn);
        listeners.add(listener);
        return function() {
            return listeners.delete(listener);
        };
    };
    var destroy = function destroy() {
        return listeners.clear();
    };
    var api = {
        setState: setState,
        getState: getState,
        subscribe: subscribe,
        destroy: destroy
    };
    state = createState(setState, getState, api);
    return api;
}
exports.default = create;

},{}],"j0n3D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DeviceType", ()=>wi);
parcelHelpers.export(exports, "ENV", ()=>q);
parcelHelpers.export(exports, "HMSAudioCodec", ()=>Xe);
parcelHelpers.export(exports, "HMSAudioContextHandler", ()=>pe);
parcelHelpers.export(exports, "HMSAudioPluginType", ()=>Dt);
parcelHelpers.export(exports, "HMSAudioPluginsManager", ()=>et);
parcelHelpers.export(exports, "HMSAudioTrack", ()=>Ge);
parcelHelpers.export(exports, "HMSException", ()=>T);
parcelHelpers.export(exports, "HMSFacingMode", ()=>be);
parcelHelpers.export(exports, "HMSLocalAudioTrack", ()=>He);
parcelHelpers.export(exports, "HMSLocalVideoTrack", ()=>ee);
parcelHelpers.export(exports, "HMSLogLevel", ()=>G);
parcelHelpers.export(exports, "HMSPeerUpdate", ()=>z);
parcelHelpers.export(exports, "HMSPlaylistType", ()=>I);
parcelHelpers.export(exports, "HMSPluginUnsupportedTypes", ()=>se);
parcelHelpers.export(exports, "HMSRemoteAudioTrack", ()=>Ee);
parcelHelpers.export(exports, "HMSRemoteVideoTrack", ()=>X);
parcelHelpers.export(exports, "HMSRoomUpdate", ()=>le);
parcelHelpers.export(exports, "HMSSdk", ()=>Qr);
parcelHelpers.export(exports, "HMSSimulcastLayer", ()=>F);
parcelHelpers.export(exports, "HMSTrack", ()=>Te);
parcelHelpers.export(exports, "HMSTrackType", ()=>x);
parcelHelpers.export(exports, "HMSTrackUpdate", ()=>N);
parcelHelpers.export(exports, "HMSVideoCodec", ()=>Ye);
parcelHelpers.export(exports, "HMSVideoPluginCanvasContextType", ()=>$e);
parcelHelpers.export(exports, "HMSVideoPluginType", ()=>Le);
parcelHelpers.export(exports, "HMSVideoPluginsManager", ()=>nt);
parcelHelpers.export(exports, "HMSVideoTrack", ()=>Ve);
parcelHelpers.export(exports, "HMSWebrtcInternals", ()=>yt);
parcelHelpers.export(exports, "HMSWebrtcStats", ()=>kt);
parcelHelpers.export(exports, "getAnalyticsDeviceId", ()=>yi);
parcelHelpers.export(exports, "getLocalDevices", ()=>On);
parcelHelpers.export(exports, "getLocalScreen", ()=>Nn);
parcelHelpers.export(exports, "getLocalStream", ()=>Li);
parcelHelpers.export(exports, "isBrowser", ()=>B);
parcelHelpers.export(exports, "isIOS", ()=>Ct);
parcelHelpers.export(exports, "isMobile", ()=>ki);
parcelHelpers.export(exports, "isNode", ()=>Se);
parcelHelpers.export(exports, "isPageHidden", ()=>Mi);
parcelHelpers.export(exports, "isSupported", ()=>as);
parcelHelpers.export(exports, "parsedUserAgent", ()=>ve);
parcelHelpers.export(exports, "simulcastMapping", ()=>_t);
parcelHelpers.export(exports, "validateDeviceAV", ()=>hg);
var _webrtcAdapter = require("webrtc-adapter");
var _webrtcAdapterDefault = parcelHelpers.interopDefault(_webrtcAdapter);
var _uaParserJs = require("ua-parser-js");
var _uuid = require("uuid");
var _eventemitter2 = require("eventemitter2");
var _sdpTransform = require("sdp-transform");
var _eventemitter2Default = parcelHelpers.interopDefault(_eventemitter2);
var process = require("d2a8c4373122ab8");
var mr = Object.defineProperty, gr = Object.defineProperties;
var vr = Object.getOwnPropertyDescriptors;
var qe = Object.getOwnPropertySymbols;
var Si = Object.prototype.hasOwnProperty, Ti = Object.prototype.propertyIsEnumerable;
var fi = (a, e, t)=>e in a ? mr(a, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : a[e] = t, S = (a, e)=>{
    for(var t in e || (e = {}))Si.call(e, t) && fi(a, t, e[t]);
    if (qe) for (var t of qe(e))Ti.call(e, t) && fi(a, t, e[t]);
    return a;
}, D = (a, e)=>gr(a, vr(e));
var Rt = (a, e)=>{
    var t = {};
    for(var i in a)Si.call(a, i) && e.indexOf(i) < 0 && (t[i] = a[i]);
    if (a != null && qe) for (var i of qe(a))e.indexOf(i) < 0 && Ti.call(a, i) && (t[i] = a[i]);
    return t;
};
var Sr = (a, e)=>()=>(e || a((e = {
            exports: {}
        }).exports, e), e.exports);
var c = (a, e, t)=>new Promise((i, r)=>{
        var s = (l)=>{
            try {
                d(t.next(l));
            } catch (u) {
                r(u);
            }
        }, n = (l)=>{
            try {
                d(t.throw(l));
            } catch (u) {
                r(u);
            }
        }, d = (l)=>l.done ? i(l.value) : Promise.resolve(l.value).then(s, n);
        d((t = t.apply(a, e)).next());
    });
var bi = Sr((ws, Ar)=>{
    Ar.exports = {
        name: "@100mslive/hms-video",
        version: "0.9.3",
        license: "MIT",
        main: "dist/index.cjs.js",
        typings: "dist/index.d.ts",
        module: "dist/index.js",
        files: [
            "dist",
            "src"
        ],
        engines: {
            node: ">=10"
        },
        exports: {
            ".": {
                require: "./dist/index.cjs.js",
                import: "./dist/index.js",
                default: "./dist/index.js"
            }
        },
        scripts: {
            prestart: "rm -rf dist && yarn types:build",
            start: 'concurrently "yarn dev" "yarn types"',
            dev: "node ../../scripts/dev",
            "build:only": "node ../../scripts/build",
            build: "yarn build:only && yarn types:build",
            types: "tsc -w",
            "types:build": "tsc -p tsconfig.json",
            test: "jest --maxWorkers=1",
            lint: "eslint -c ../../.eslintrc .",
            "lint:fix": "yarn lint --fix",
            prepare: "yarn build",
            size: "size-limit",
            analyze: "size-limit --why",
            format: "prettier --write src/**/*.ts"
        },
        author: "100ms <tech-common@100ms.live>",
        devDependencies: {
            "@types/dom-screen-wake-lock": "^1.0.1",
            "@types/sdp-transform": "^2.4.4",
            "@types/ua-parser-js": "^0.7.36",
            "@types/uuid": "^8.3.0",
            "jest-canvas-mock": "^2.3.1",
            tslib: "^2.2.0"
        },
        dependencies: {
            eventemitter2: "^6.4.7",
            "sdp-transform": "^2.14.1",
            "ua-parser-js": "^1.0.1",
            uuid: "^8.3.2",
            "webrtc-adapter": "^8.0.0"
        },
        gitHead: "964db25173e4264322e03a949cbd739848361e14"
    };
});
var ie = class {
    constructor(e){
        this.key = e;
        this.storage = null;
    }
    getStorage() {
        return B && !this.storage && (Ei(), this.storage = window.localStorage), this.storage;
    }
    get() {
        var i;
        let e = (i = this.getStorage()) == null ? void 0 : i.getItem(this.key);
        return e ? JSON.parse(e) : void 0;
    }
    set(e) {
        var i;
        let t = JSON.stringify(e);
        (i = this.getStorage()) == null || i.setItem(this.key, t);
    }
    clear() {
        var e;
        (e = this.getStorage()) == null || e.removeItem(this.key);
    }
};
var ve = new (0, _uaParserJs.UAParser), Ai, Se = typeof window == "undefined" && !((Ai = ve.getBrowser().name) == null ? void 0 : Ai.toLowerCase().includes("electron")), B = typeof window != "undefined", q;
(function(i) {
    i.PROD = "prod", i.QA = "qa", i.DEV = "dev";
})(q || (q = {}));
var Er = ()=>!Se, as = Er(), ki = ()=>ve.getDevice().type === "mobile", yi = ()=>{
    let a, e = new ie("hms-analytics-deviceId"), t = e.get();
    return t ? a = t : (a = (0, _uuid.v4)(), e.set(a)), a;
}, Mi = ()=>typeof document != "undefined" && document.hidden, Ct = ()=>{
    var a;
    return ((a = ve.getOS().name) == null ? void 0 : a.toLowerCase()) === "ios";
};
var Pi = class {
    constructor(){
        this.valuesMap = new Map;
    }
    getItem(e) {
        return this.valuesMap.has(e) ? String(this.valuesMap.get(e)) : null;
    }
    setItem(e, t) {
        this.valuesMap.set(e, t);
    }
    removeItem(e) {
        this.valuesMap.delete(e);
    }
    clear() {
        this.valuesMap.clear();
    }
    key(e) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.");
        return Array.from(this.valuesMap.keys())[e];
    }
    get length() {
        return this.valuesMap.size;
    }
}, Ei = ()=>{
    B && !localStorage && (window.localStorage = new Pi);
};
var G;
(function(l) {
    l[l.VERBOSE = 0] = "VERBOSE", l[l.DEBUG = 1] = "DEBUG", l[l.INFO = 2] = "INFO", l[l.WARN = 3] = "WARN", l[l.TIME = 4] = "TIME", l[l.TIMEEND = 5] = "TIMEEND", l[l.ERROR = 6] = "ERROR", l[l.NONE = 7] = "NONE";
})(G || (G = {}));
var kr = typeof window != "undefined" && typeof window.expect != "undefined", o = class {
    static v(e, ...t) {
        this.log(0, e, ...t);
    }
    static d(e, ...t) {
        this.log(1, e, ...t);
    }
    static i(e, ...t) {
        this.log(2, e, ...t);
    }
    static w(e, ...t) {
        this.log(3, e, ...t);
    }
    static e(e, ...t) {
        this.log(6, e, ...t);
    }
    static time(e) {
        this.log(4, "[HMSPerformanceTiming]", e);
    }
    static timeEnd(e) {
        this.log(5, "[HMSPerformanceTiming]", e, e);
    }
    static cleanUp() {
        performance.clearMarks(), performance.clearMeasures();
    }
    static log(e, t, ...i) {
        if (!(this.level.valueOf() > e.valueOf())) switch(e){
            case 0:
                console.log(t, ...i);
                break;
            case 1:
                console.debug(t, ...i);
                break;
            case 2:
                console.info(t, ...i);
                break;
            case 3:
                console.warn(t, ...i);
                break;
            case 6:
                console.error(t, ...i);
                break;
            case 4:
                performance.mark(i[0]);
                break;
            case 5:
                {
                    let r = i[0];
                    try {
                        let s = performance.measure(r, r);
                        this.log(1, t, r, s == null ? void 0 : s.duration), performance.clearMarks(r), performance.clearMeasures(r);
                    } catch (s) {
                        this.log(1, t, r, s);
                    }
                    break;
                }
        }
    }
};
o.level = kr ? 7 : 0;
var Ae = class {
    constructor({ sender: e , message: t , type: i = "chat" , recipientPeer: r , recipientRoles: s , time: n  }){
        this.sender = e, this.message = t, this.type = i, this.recipientPeer = r, this.recipientRoles = s, this.time = n;
    }
    toSignalParams() {
        var r, s;
        let e = (r = this.recipientRoles) == null ? void 0 : r.map((n)=>n.name), t = (s = this.recipientPeer) == null ? void 0 : s.peerId, i = {
            info: {
                message: this.message,
                type: this.type
            }
        };
        return (e == null ? void 0 : e.length) && (i.roles = e), t && (i.peer_id = t), i;
    }
    toString() {
        var e;
        return `{
      sender: ${this.sender};
      recipientPeer: ${this.recipientPeer};
      recipientRoles: ${(e = this.recipientRoles) == null ? void 0 : e.map((t)=>t.name)};
      message: ${this.message};
      time: ${this.time};
      type: ${this.type};
    }`;
    }
};
var je = class {
    constructor(e, t){
        this.id = e;
        this.store = t;
        this.recording = {
            server: {
                running: !1
            },
            browser: {
                running: !1
            },
            hls: {
                running: !1
            }
        };
        this.rtmp = {
            running: !1
        };
        this.hls = {
            running: !1,
            variants: []
        };
    }
    get localPeer() {
        return this.store.getLocalPeer();
    }
    get peers() {
        return this.store.getPeers();
    }
};
var de = class {
    constructor({ peerId: e , name: t , isLocal: i , customerUserId: r , metadata: s , role: n , joinedAt: d  }){
        this.customerUserId = "";
        this.metadata = "";
        this.auxiliaryTracks = [];
        this.name = t, this.peerId = e, this.isLocal = i, this.customerUserId = r, this.metadata = s, this.joinedAt = d, n && (this.role = n);
    }
    updateRole(e) {
        this.role = e;
    }
    updateName(e) {
        this.name = e;
    }
    updateMetadata(e) {
        this.metadata = e;
    }
    toString() {
        var e, t, i;
        return `{
      name: ${this.name};
      role: ${(e = this.role) == null ? void 0 : e.name};
      peerId: ${this.peerId};
      customerUserId: ${this.customerUserId};
      ${this.audioTrack ? `audioTrack: ${(t = this.audioTrack) == null ? void 0 : t.trackId};` : ""}
      ${this.videoTrack ? `videoTrack: ${(i = this.videoTrack) == null ? void 0 : i.trackId};` : ""}
    }`;
    }
};
var Oe = class {
};
Oe.makePeerId = ()=>(0, _uuid.v4)();
var Je = class extends de {
    constructor(e){
        super(D(S({}, e), {
            peerId: Oe.makePeerId(),
            isLocal: !0
        }));
        this.isLocal = !0;
        this.auxiliaryTracks = [];
        this.asRole = e.asRole;
    }
    isInPreview() {
        return !!this.asRole;
    }
    toString() {
        var e, t, i;
        return `{
      name: ${this.name};
      role: ${(e = this.role) == null ? void 0 : e.name};
      peerId: ${this.peerId};
      customerUserId: ${this.customerUserId};
      ${this.asRole ? `asRole: ${this.asRole.name};` : ""}
      ${this.audioTrack ? `audioTrack: ${(t = this.audioTrack) == null ? void 0 : t.trackId};` : ""}
      ${this.videoTrack ? `videoTrack: ${(i = this.videoTrack) == null ? void 0 : i.trackId};` : ""}
    }`;
    }
};
var ze = class extends de {
    constructor(e){
        super(D(S({}, e), {
            isLocal: !1
        }));
        this.isLocal = !1;
        this.auxiliaryTracks = [];
        this.fromRoomState = !1;
        this.fromRoomState = !!e.fromRoomState;
    }
};
var re;
(function(i) {
    i.CUSTOM = "CUSTOM", i.LOCAL = "LOCAL", i.HMS = "HMS";
})(re || (re = {}));
function Mr() {
    if (B && window) {
        let a = window.location.hostname;
        return a === "localhost" || a === "127.0.0.1" ? re.LOCAL : a.includes("app.100ms.live") ? re.HMS : re.CUSTOM;
    }
    return re.CUSTOM;
}
var Pe = Mr();
var Ii = bi().version;
function xe(a = q.PROD, e) {
    let t = "web", i = Pe !== re.LOCAL && a === q.PROD ? "prod" : "debug";
    if (Se) return Ri({
        os: "web_nodejs",
        os_version: process.version,
        sdk: t,
        sdk_version: Ii,
        env: i,
        domain: Pe,
        framework: "node",
        framework_version: process.version,
        framework_sdk_version: e == null ? void 0 : e.sdkVersion
    });
    let r = ve.getOS(), s = ve.getDevice(), n = ve.getBrowser(), d = wt(`web_${r.name}`), l = r.version || "", u = wt(`${n.name}_${n.version}`), h = u;
    return s.type && (h = `${wt(`${s.vendor}_${s.type}`)}/${u}`), Ri({
        os: d,
        os_version: l,
        sdk: t,
        sdk_version: Ii,
        device_model: h,
        env: i,
        domain: Pe,
        framework: e == null ? void 0 : e.type,
        framework_version: e == null ? void 0 : e.version,
        framework_sdk_version: e == null ? void 0 : e.sdkVersion
    });
}
function wt(a) {
    return a.replace(/ /g, "_");
}
var Ri = (a, e = ",")=>Object.keys(a).filter((t)=>!!a[t]).map((t)=>`${t}:${a[t]}`).join(e);
var O = class {
    constructor({ name: e , level: t , properties: i , includesPII: r , timestamp: s  }){
        this.metadata = {
            peer: {},
            userAgent: xe()
        };
        this.name = e, this.level = t, this.includesPII = r || !1, this.properties = i || {}, this.timestamp = s || new Date().getTime(), this.event_id = (0, _uuid.v4)(), this.device_id = yi();
    }
    toSignalParams() {
        return {
            name: this.name,
            info: D(S({}, this.properties), {
                timestamp: this.timestamp,
                domain: Pe
            }),
            timestamp: new Date().getTime()
        };
    }
};
var Qe;
(function(r) {
    r[r.VERBOSE = 0] = "VERBOSE", r[r.INFO = 1] = "INFO", r[r.ERROR = 2] = "ERROR", r[r.OFF = 3] = "OFF";
})(Qe || (Qe = {}));
var _;
(function(r) {
    r[r.VERBOSE = 0] = "VERBOSE", r[r.INFO = 1] = "INFO", r[r.ERROR = 2] = "ERROR", r[r.OFF = 3] = "OFF";
})(_ || (_ = {}));
var T = class extends Error {
    constructor(e, t, i, r, s, n = !1){
        super(r);
        this.code = e;
        this.name = t;
        this.message = r;
        this.description = s;
        this.isTerminal = n;
        Object.setPrototypeOf(this, T.prototype), this.action = i.toString();
    }
    toAnalyticsProperties() {
        return {
            error_name: this.name,
            error_code: this.code,
            error_message: this.message,
            error_description: this.description,
            action: this.action,
            is_terminal: this.isTerminal
        };
    }
    addNativeError(e) {
        this.nativeError = e;
    }
    toString() {
        var e;
        return `{
      code: ${this.code};
      name: ${this.name};
      action: ${this.action};
      message: ${this.message};
      description: ${this.description};
      isTerminal: ${this.isTerminal};
      nativeError: ${(e = this.nativeError) == null ? void 0 : e.message};
    }`;
    }
};
var w = class {
    static connect(e, t, i = new Date, r = new Date, s) {
        let n = this.eventNameFor("connect", e === void 0), d = e ? _.ERROR : _.INFO, l = this.getPropertiesWithError(D(S({}, t), {
            [this.KEY_REQUESTED_AT]: i == null ? void 0 : i.getTime(),
            [this.KEY_RESPONDED_AT]: r == null ? void 0 : r.getTime(),
            endpoint: s
        }), e);
        return new O({
            name: n,
            level: d,
            properties: l
        });
    }
    static disconnect(e, t) {
        let i = "disconnected", r = e ? _.ERROR : _.INFO, s = this.getPropertiesWithError(t, e);
        return new O({
            name: i,
            level: r,
            properties: s
        });
    }
    static preview(i) {
        var r = i, { error: e  } = r, t = Rt(r, [
            "error"
        ]);
        let s = this.eventNameFor("preview", e === void 0), n = e ? _.ERROR : _.INFO, d = this.getPropertiesWithError(t, e);
        return new O({
            name: s,
            level: n,
            properties: d
        });
    }
    static join(i) {
        var r = i, { error: e  } = r, t = Rt(r, [
            "error"
        ]);
        let s = this.eventNameFor("join", e === void 0), n = e ? _.ERROR : _.INFO, d = this.getPropertiesWithError(D(S({}, t), {
            is_preview_called: !!t.is_preview_called
        }), e);
        return new O({
            name: s,
            level: n,
            properties: d
        });
    }
    static publish({ devices: e , settings: t , error: i  }) {
        let r = this.eventNameFor("publish", i === void 0), s = i ? _.ERROR : _.INFO, n = this.getPropertiesWithError({
            devices: e,
            audio: t == null ? void 0 : t.audio,
            video: t == null ? void 0 : t.video
        }, i);
        return new O({
            name: r,
            level: s,
            properties: n
        });
    }
    static hlsPlayerError(e) {
        return new O({
            name: "hlsPlayerError",
            level: _.ERROR,
            properties: this.getErrorProperties(e)
        });
    }
    static subscribeFail(e) {
        let t = this.eventNameFor("subscribe", !1), i = _.ERROR, r = this.getErrorProperties(e);
        return new O({
            name: t,
            level: i,
            properties: r
        });
    }
    static leave() {
        return new O({
            name: "leave",
            level: _.INFO
        });
    }
    static autoplayError() {
        return new O({
            name: "autoplayError",
            level: _.ERROR
        });
    }
    static audioPlaybackError(e) {
        return new O({
            name: "audioPlaybackError",
            level: _.ERROR,
            properties: this.getErrorProperties(e)
        });
    }
    static deviceChange({ selection: e , type: t , devices: i , error: r  }) {
        let s = this.eventNameFor(r ? "publish" : `device.${t}`, r === void 0), n = r ? _.ERROR : _.INFO, d = this.getPropertiesWithError({
            selection: e,
            devices: i
        }, r);
        return new O({
            name: s,
            level: n,
            properties: d
        });
    }
    static performance(e) {
        let t = "perf.stats", i = _.INFO, r = e.toAnalyticsProperties();
        return new O({
            name: t,
            level: i,
            properties: r
        });
    }
    static rtcStats(e) {
        let t = "rtc.stats", i = _.INFO, r = e.toAnalyticsProperties();
        return new O({
            name: t,
            level: i,
            properties: r
        });
    }
    static degradationStats(e, t) {
        let i = "video.degradation.stats", r = _.INFO, s = {
            degradedAt: e.degradedAt,
            trackId: e.trackId
        };
        if (!t && e.degradedAt instanceof Date) {
            let n = new Date, d = n.valueOf() - e.degradedAt.valueOf();
            s = D(S({}, s), {
                duration: d,
                restoredAt: n
            });
        }
        return new O({
            name: i,
            level: r,
            properties: s
        });
    }
    static audioDetectionFail(e, t) {
        let i = this.getPropertiesWithError({
            device: t
        }, e), r = _.ERROR, s = "audiopresence.failed";
        return new O({
            name: s,
            level: r,
            properties: i
        });
    }
    static previewNetworkQuality(e) {
        return new O({
            name: "perf.networkquality.preview",
            level: e.error ? _.ERROR : _.INFO,
            properties: e
        });
    }
    static eventNameFor(e, t) {
        return `${e}.${t ? "success" : "failed"}`;
    }
    static getPropertiesWithError(e, t) {
        let i = this.getErrorProperties(t);
        return e = S(S({}, i), e), e;
    }
    static getErrorProperties(e) {
        return e ? e instanceof T ? e.toAnalyticsProperties() : {
            error_name: e.name,
            error_message: e.message,
            error_description: e.cause
        } : {};
    }
};
w.KEY_REQUESTED_AT = "requested_at", w.KEY_RESPONDED_AT = "responded_at";
var M;
(function(p) {
    p.INIT = "init_response_time", p.WEBSOCKET_CONNECT = "ws_connect_time", p.ON_POLICY_CHANGE = "on_policy_change_time", p.LOCAL_AUDIO_TRACK = "local_audio_track_time", p.LOCAL_VIDEO_TRACK = "local_video_track_time", p.JOIN = "join_time", p.PREVIEW = "preview_time", p.PEER_LIST = "peer_list_time", p.ROOM_STATE = "room_state_time", p.JOIN_RESPONSE = "join_response_time", p.GET_TOKEN = "GET_TOKEN";
})(M || (M = {}));
var br = [
    M.INIT,
    M.WEBSOCKET_CONNECT,
    M.ON_POLICY_CHANGE,
    M.LOCAL_AUDIO_TRACK,
    M.LOCAL_VIDEO_TRACK,
    M.PEER_LIST,
    M.ROOM_STATE,
    M.JOIN_RESPONSE
], Ht = class {
    constructor(){
        this.eventPerformanceMeasures = {};
    }
    start(e) {
        performance.mark(e);
    }
    end(e) {
        var t;
        try {
            this.eventPerformanceMeasures[e] = performance.measure(e, e), o.d("[HMSPerformanceTiming]", e, (t = this.eventPerformanceMeasures[e]) == null ? void 0 : t.duration);
        } catch (i) {
            o.w("[AnalyticsTimer]", `Error in measuring performance for event ${e}`, {
                error: i
            });
        }
    }
    getTimeTaken(e) {
        var t;
        return (t = this.eventPerformanceMeasures[e]) == null ? void 0 : t.duration;
    }
    getTimes(...e) {
        return [
            ...br,
            ...e
        ].reduce((t, i)=>D(S({}, t), {
                [i]: this.getTimeTaken(i)
            }), {});
    }
    cleanUp() {
        this.eventPerformanceMeasures = {};
    }
};
var E = {
    WebSocketConnectionErrors: {
        FAILED_TO_CONNECT: 1e3,
        WEBSOCKET_CONNECTION_LOST: 1003,
        ABNORMAL_CLOSE: 1006
    },
    APIErrors: {
        SERVER_ERRORS: 2e3,
        INIT_CONFIG_NOT_AVAILABLE: 2002,
        ENDPOINT_UNREACHABLE: 2003,
        INVALID_TOKEN_FORMAT: 2004
    },
    TracksErrors: {
        GENERIC_TRACK: 3e3,
        CANT_ACCESS_CAPTURE_DEVICE: 3001,
        DEVICE_NOT_AVAILABLE: 3002,
        DEVICE_IN_USE: 3003,
        DEVICE_LOST_MIDWAY: 3008,
        NOTHING_TO_RETURN: 3005,
        INVALID_VIDEO_SETTINGS: 3006,
        CODEC_CHANGE_NOT_PERMITTED: 3007,
        AUTOPLAY_ERROR: 3008,
        OVER_CONSTRAINED: 3009,
        NO_AUDIO_DETECTED: 3010,
        SYSTEM_DENIED_PERMISSION: 3011,
        CURRENT_TAB_NOT_SHARED: 3012,
        AUDIO_PLAYBACK_ERROR: 3013
    },
    WebrtcErrors: {
        CREATE_OFFER_FAILED: 4001,
        CREATE_ANSWER_FAILED: 4002,
        SET_LOCAL_DESCRIPTION_FAILED: 4003,
        SET_REMOTE_DESCRIPTION_FAILED: 4004,
        ICE_FAILURE: 4005,
        ICE_DISCONNECTED: 4006
    },
    WebsocketMethodErrors: {
        SERVER_ERRORS: 5e3,
        ALREADY_JOINED: 5001,
        CANNOT_JOIN_PREVIEW_IN_PROGRESS: 5002
    },
    GenericErrors: {
        NOT_CONNECTED: 6e3,
        SIGNALLING: 6001,
        UNKNOWN: 6002,
        NOT_READY: 6003,
        JSON_PARSING_FAILED: 6004,
        TRACK_METADATA_MISSING: 6005,
        RTC_TRACK_MISSING: 6006,
        PEER_METADATA_MISSING: 6007,
        INVALID_ROLE: 6008,
        PREVIEW_IN_PROGRESS: 6009,
        MISSING_MEDIADEVICES: 6010,
        MISSING_RTCPEERCONNECTION: 6011
    },
    PlaylistErrors: {
        NO_ENTRY_TO_PLAY: 8001,
        NO_ENTRY_IS_PLAYING: 8002
    }
};
var b;
(function(k) {
    k.JOIN = "join", k.OFFER = "offer", k.ANSWER = "answer", k.TRICKLE = "trickle", k.TRACK_UPDATE = "track-update", k.BROADCAST = "broadcast", k.ANALYTICS = "analytics", k.SERVER_ERROR = "on-error", k.SERVER_WARNING = "on-warning", k.SDK_NOTIFICATION = "sdk-notification", k.LEAVE = "leave", k.END_ROOM = "end-room", k.PING = "ping", k.ROLE_CHANGE_REQUEST = "role-change-request", k.ROLE_CHANGE = "role-change", k.TRACK_UPDATE_REQUEST = "track-update-request", k.PEER_LEAVE_REQUEST = "peer-leave-request", k.CHANGE_TRACK_MUTE_STATE_REQUEST = "change-track-mute-state-request", k.START_RTMP_OR_RECORDING_REQUEST = "rtmp-start", k.STOP_RTMP_AND_RECORDING_REQUEST = "rtmp-stop", k.UPDATE_PEER_METADATA = "peer-update", k.START_HLS_STREAMING = "hls-start", k.STOP_HLS_STREAMING = "hls-stop", k.HLS_TIMED_METADATA = "hls-timed-metadata", k.SET_METADATA = "set-metadata", k.GET_METADATA = "get-metadata", k.LISTEN_METADATA_CHANGE = "listen-metadata-change";
})(b || (b = {}));
function Lt(a) {
    switch(a){
        case b.JOIN:
            return m.JOIN;
        case b.OFFER:
            return m.PUBLISH;
        case b.ANSWER:
            return m.SUBSCRIBE;
        case b.TRACK_UPDATE:
            return m.TRACK;
        default:
            return m.NONE;
    }
}
var m;
(function(C) {
    C.NONE = "NONE", C.TRACK = "TRACK", C.INIT = "INIT", C.GET_TOKEN = "GET_TOKEN", C.PUBLISH = "PUBLISH", C.UNPUBLISH = "UNPUBLISH", C.JOIN = "JOIN", C.SUBSCRIBE = "SUBSCRIBE", C.DATA_CHANNEL_SEND = "DATA_CHANNEL_SEND", C.RESTART_ICE = "RESTART_ICE", C.VIDEO_PLUGINS = "VIDEO_PLUGINS", C.AUDIO_PLUGINS = "AUDIO_PLUGINS", C.AUTOPLAY = "AUTOPLAY", C.RECONNECT_SIGNAL = "RECONNECT_SIGNAL", C.VALIDATION = "VALIDATION", C.PLAYLIST = "PLAYLIST", C.PREVIEW = "PREVIEW";
})(m || (m = {}));
var Ir = [
    b.JOIN,
    b.OFFER,
    b.ANSWER,
    b.TRICKLE,
    m.JOIN
], g = {
    WebSocketConnectionErrors: {
        FailedToConnect (a, e = "") {
            return new T(E.WebSocketConnectionErrors.FAILED_TO_CONNECT, "WebsocketFailedToConnect", a, `[WS]: ${e}`, `[WS]: ${e}`);
        },
        WebSocketConnectionLost (a, e = "") {
            return new T(E.WebSocketConnectionErrors.WEBSOCKET_CONNECTION_LOST, "WebSocketConnectionLost", a, "Network connection lost ", e);
        },
        AbnormalClose (a, e = "") {
            return new T(E.WebSocketConnectionErrors.ABNORMAL_CLOSE, "WebSocketAbnormalClose", a, "Websocket closed abnormally", e);
        }
    },
    APIErrors: {
        ServerErrors (a, e, t = "", i = !0) {
            return new T(a, "ServerErrors", e, `[${e}]: Server error ${t}`, t, i);
        },
        EndpointUnreachable (a, e = "") {
            return new T(E.APIErrors.ENDPOINT_UNREACHABLE, "EndpointUnreachable", a, `Endpoint is not reachable - ${e}`, e);
        },
        InvalidTokenFormat (a, e = "") {
            return new T(E.APIErrors.INVALID_TOKEN_FORMAT, "InvalidTokenFormat", a, `Token is not in proper JWT format - ${e}`, e, !0);
        },
        InitConfigNotAvailable (a, e = "") {
            return new T(E.APIErrors.INIT_CONFIG_NOT_AVAILABLE, "InitError", a, `[INIT]: ${e}`, `[INIT]: ${e}`);
        }
    },
    TracksErrors: {
        GenericTrack (a, e = "") {
            return new T(E.TracksErrors.GENERIC_TRACK, "GenericTrack", a, `[TRACK]: ${e}`, `[TRACK]: ${e}`);
        },
        CantAccessCaptureDevice (a, e, t = "") {
            return new T(E.TracksErrors.CANT_ACCESS_CAPTURE_DEVICE, "CantAccessCaptureDevice", a, `User denied permission to access capture device - ${e}`, t);
        },
        DeviceNotAvailable (a, e, t = "") {
            return new T(E.TracksErrors.DEVICE_NOT_AVAILABLE, "DeviceNotAvailable", a, `[TRACK]: Capture device is no longer available - ${e}`, t);
        },
        DeviceInUse (a, e, t = "") {
            return new T(E.TracksErrors.DEVICE_IN_USE, "DeviceInUse", a, `[TRACK]: Capture device is in use by another application - ${e}`, t);
        },
        DeviceLostMidway (a, e, t = "") {
            return new T(E.TracksErrors.DEVICE_LOST_MIDWAY, "DeviceLostMidway", a, `Lost access to capture device midway - ${e}`, t);
        },
        NothingToReturn (a, e = "", t = "There is no media to return. Please select either video or audio or both.") {
            return new T(E.TracksErrors.NOTHING_TO_RETURN, "NothingToReturn", a, t, e);
        },
        InvalidVideoSettings (a, e = "") {
            return new T(E.TracksErrors.INVALID_VIDEO_SETTINGS, "InvalidVideoSettings", a, "Cannot enable simulcast when no video settings are provided", e);
        },
        AutoplayBlocked (a, e = "") {
            return new T(E.TracksErrors.AUTOPLAY_ERROR, "AutoplayBlocked", a, "Autoplay blocked because the user didn't interact with the document first", e);
        },
        CodecChangeNotPermitted (a, e = "") {
            return new T(E.TracksErrors.CODEC_CHANGE_NOT_PERMITTED, "CodecChangeNotPermitted", a, "Codec can't be changed mid call.", e);
        },
        OverConstrained (a, e, t = "") {
            return new T(E.TracksErrors.OVER_CONSTRAINED, "OverConstrained", a, `[TRACK]: Requested constraints cannot be satisfied with the device hardware - ${e}`, t);
        },
        NoAudioDetected (a, e = "Please check the mic or use another audio input") {
            return new T(E.TracksErrors.NO_AUDIO_DETECTED, "NoAudioDetected", a, "No audio input detected from microphone", e);
        },
        SystemDeniedPermission (a, e, t = "") {
            return new T(E.TracksErrors.SYSTEM_DENIED_PERMISSION, "SystemDeniedPermission", a, `Operating System denied permission to access capture device - ${e}`, t);
        },
        CurrentTabNotShared () {
            return new T(E.TracksErrors.CURRENT_TAB_NOT_SHARED, "CurrentTabNotShared", m.TRACK, "The app requires you to share the current tab", "You must screen share the current tab in order to proceed");
        },
        AudioPlaybackError (a) {
            return new T(E.TracksErrors.AUDIO_PLAYBACK_ERROR, "Audio playback error", m.TRACK, a, a);
        }
    },
    WebrtcErrors: {
        CreateOfferFailed (a, e = "") {
            return new T(E.WebrtcErrors.CREATE_OFFER_FAILED, "CreateOfferFailed", a, `[${a.toString()}]: Failed to create offer. `, e);
        },
        CreateAnswerFailed (a, e = "") {
            return new T(E.WebrtcErrors.CREATE_ANSWER_FAILED, "CreateAnswerFailed", a, `[${a.toString()}]: Failed to create answer. `, e);
        },
        SetLocalDescriptionFailed (a, e = "") {
            return new T(E.WebrtcErrors.SET_LOCAL_DESCRIPTION_FAILED, "SetLocalDescriptionFailed", a, `[${a.toString()}]: Failed to set offer. `, e);
        },
        SetRemoteDescriptionFailed (a, e = "") {
            return new T(E.WebrtcErrors.SET_REMOTE_DESCRIPTION_FAILED, "SetRemoteDescriptionFailed", a, `[${a.toString()}]: Failed to set answer. `, e, !0);
        },
        ICEFailure (a, e = "") {
            return new T(E.WebrtcErrors.ICE_FAILURE, "ICEFailure", a, `[${a.toString()}]: Ice connection state FAILED`, e);
        },
        ICEDisconnected (a, e = "") {
            return new T(E.WebrtcErrors.ICE_DISCONNECTED, "ICEDisconnected", a, `[${a.toString()}]: Ice connection state DISCONNECTED`, e);
        }
    },
    WebsocketMethodErrors: {
        ServerErrors (a, e, t) {
            return new T(a, "ServerErrors", e, t, t, Ir.includes(e));
        },
        AlreadyJoined (a, e = "") {
            return new T(E.WebsocketMethodErrors.ALREADY_JOINED, "AlreadyJoined", a, "[JOIN]: You have already joined this room.", e);
        },
        CannotJoinPreviewInProgress (a, e = "") {
            return new T(E.WebsocketMethodErrors.CANNOT_JOIN_PREVIEW_IN_PROGRESS, "CannotJoinPreviewInProgress", a, "[JOIN]: Cannot join if preview is in progress", e);
        }
    },
    GenericErrors: {
        NotConnected (a, e = "") {
            return new T(E.GenericErrors.NOT_CONNECTED, "NotConnected", a, "Client is not connected", e);
        },
        Signalling (a, e) {
            return new T(E.GenericErrors.SIGNALLING, "Signalling", a, `Unknown signalling error: ${a.toString()} ${e} `, e);
        },
        Unknown (a, e) {
            return new T(E.GenericErrors.UNKNOWN, "Unknown", a, `Unknown exception: ${e}`, e);
        },
        NotReady (a, e = "") {
            return new T(E.GenericErrors.NOT_READY, "NotReady", a, e, e);
        },
        JsonParsingFailed (a, e, t = "") {
            return new T(E.GenericErrors.JSON_PARSING_FAILED, "JsonParsingFailed", a, `Failed to parse JSON message - ${e}`, t);
        },
        TrackMetadataMissing (a, e = "") {
            return new T(E.GenericErrors.TRACK_METADATA_MISSING, "TrackMetadataMissing", a, "Track Metadata Missing", e);
        },
        RTCTrackMissing (a, e = "") {
            return new T(E.GenericErrors.RTC_TRACK_MISSING, "RTCTrackMissing", a, "RTC Track missing", e);
        },
        PeerMetadataMissing (a, e = "") {
            return new T(E.GenericErrors.PEER_METADATA_MISSING, "PeerMetadataMissing", a, "Peer Metadata Missing", e);
        },
        ValidationFailed (a, e) {
            return new T(E.GenericErrors.INVALID_ROLE, "ValidationFailed", m.VALIDATION, a, e ? JSON.stringify(e) : "");
        },
        InvalidRole (a, e) {
            return new T(E.GenericErrors.INVALID_ROLE, "InvalidRole", a, "Invalid role. Join with valid role", e, !0);
        },
        PreviewAlreadyInProgress (a, e = "") {
            return new T(E.GenericErrors.PREVIEW_IN_PROGRESS, "PreviewAlreadyInProgress", a, "[Preview]: Cannot join if preview is in progress", e);
        },
        MissingMediaDevices () {
            return new T(E.GenericErrors.MISSING_MEDIADEVICES, "MissingMediaDevices", m.JOIN, "navigator.mediaDevices is undefined. 100ms SDK won't work on this website as WebRTC is not supported on HTTP endpoints(missing navigator.mediaDevices). Please ensure you're using the SDK either on localhost or a valid HTTPS endpoint.", "", !0);
        },
        MissingRTCPeerConnection () {
            return new T(E.GenericErrors.MISSING_RTCPEERCONNECTION, "MissingRTCPeerConnection", m.JOIN, "RTCPeerConnection which is a core requirement for WebRTC call was not found, this could be due to an unsupported browser or browser extensions blocking WebRTC", "", !0);
        }
    },
    MediaPluginErrors: {
        PlatformNotSupported (a, e = "") {
            return new T(7001, "PlatformNotSupported", a, "Check HMS Docs to see the list of supported platforms", e);
        },
        InitFailed (a, e = "") {
            return new T(7002, "InitFailed", a, "Plugin init failed", e);
        },
        ProcessingFailed (a, e = "") {
            return new T(7003, "ProcessingFailed", a, "Plugin processing failed", e);
        },
        AddAlreadyInProgress (a, e = "") {
            return new T(7004, "AddAlreadyInProgress", a, "Plugin add already in progress", e);
        },
        DeviceNotSupported (a, e = "") {
            return new T(7005, "DeviceNotSupported", a, "Check HMS Docs to see the list of supported devices", e);
        }
    },
    PlaylistErrors: {
        NoEntryToPlay (a, e) {
            return new T(E.PlaylistErrors.NO_ENTRY_TO_PLAY, "NoEntryToPlay", a, "Reached end of playlist", e);
        },
        NoEntryPlaying (a, e) {
            return new T(E.PlaylistErrors.NO_ENTRY_IS_PLAYING, "NoEntryIsPlaying", a, "No entry is playing at this time", e);
        }
    }
};
var J;
(function(s) {
    s.UNKNOWN = "unknown(video or audio)", s.AUDIO = "audio", s.VIDEO = "video", s.AV = "audio, video", s.SCREEN = "screen";
})(J || (J = {}));
function Rr(a, e) {
    let t = a.toLowerCase();
    return t.includes("device not found") ? g.TracksErrors.DeviceNotAvailable(m.TRACK, e, a) : t.includes("permission denied") ? g.TracksErrors.CantAccessCaptureDevice(m.TRACK, e, a) : g.TracksErrors.GenericTrack(m.TRACK, a);
}
function Cr(a, e = "") {
    if ((0, _webrtcAdapterDefault.default).browserDetails.browser === "chrome" && a.name === "NotAllowedError" && a.message.includes("denied by system")) return g.TracksErrors.SystemDeniedPermission(m.TRACK, e, a.message);
    if ((0, _webrtcAdapterDefault.default).browserDetails.browser === "firefox" && a.name === "NotFoundError") {
        let i = g.TracksErrors.SystemDeniedPermission(m.TRACK, e, a.message);
        return i.description = `Capture device is either blocked at Operating System level or not available - ${e}`, i;
    }
    switch(a.name){
        case "OverconstrainedError":
            return g.TracksErrors.OverConstrained(m.TRACK, e, a.constraint);
        case "NotAllowedError":
            return g.TracksErrors.CantAccessCaptureDevice(m.TRACK, e, a.message);
        case "NotFoundError":
            return g.TracksErrors.DeviceNotAvailable(m.TRACK, e, a.message);
        case "NotReadableError":
            return g.TracksErrors.DeviceInUse(m.TRACK, e, a.message);
        case "TypeError":
            return g.TracksErrors.NothingToReturn(m.TRACK, a.message);
        default:
            return Rr(a.message, e);
    }
}
function te(a, e) {
    let t = Cr(a, e);
    return t.addNativeError(a), t;
}
var le;
(function(s) {
    s.RECORDING_STATE_UPDATED = "RECORDING_STATE_UPDATED", s.BROWSER_RECORDING_STATE_UPDATED = "BROWSER_RECORDING_STATE_UPDATED", s.SERVER_RECORDING_STATE_UPDATED = "SERVER_RECORDING_STATE_UPDATED", s.RTMP_STREAMING_STATE_UPDATED = "RTMP_STREAMING_STATE_UPDATED", s.HLS_STREAMING_STATE_UPDATED = "HLS_STREAMING_STATE_UPDATED";
})(le || (le = {}));
var z;
(function(v) {
    v[v.PEER_JOINED = 0] = "PEER_JOINED", v[v.PEER_LEFT = 1] = "PEER_LEFT", v[v.AUDIO_TOGGLED = 2] = "AUDIO_TOGGLED", v[v.VIDEO_TOGGLED = 3] = "VIDEO_TOGGLED", v[v.BECAME_DOMINANT_SPEAKER = 4] = "BECAME_DOMINANT_SPEAKER", v[v.RESIGNED_DOMINANT_SPEAKER = 5] = "RESIGNED_DOMINANT_SPEAKER", v[v.STARTED_SPEAKING = 6] = "STARTED_SPEAKING", v[v.STOPPED_SPEAKING = 7] = "STOPPED_SPEAKING", v[v.ROLE_UPDATED = 8] = "ROLE_UPDATED", v[v.PEER_LIST = 9] = "PEER_LIST", v[v.NAME_UPDATED = 10] = "NAME_UPDATED", v[v.METADATA_UPDATED = 11] = "METADATA_UPDATED";
})(z || (z = {}));
var N;
(function(d) {
    d[d.TRACK_ADDED = 0] = "TRACK_ADDED", d[d.TRACK_REMOVED = 1] = "TRACK_REMOVED", d[d.TRACK_MUTED = 2] = "TRACK_MUTED", d[d.TRACK_UNMUTED = 3] = "TRACK_UNMUTED", d[d.TRACK_DESCRIPTION_CHANGED = 4] = "TRACK_DESCRIPTION_CHANGED", d[d.TRACK_DEGRADED = 5] = "TRACK_DEGRADED", d[d.TRACK_RESTORED = 6] = "TRACK_RESTORED";
})(N || (N = {}));
var F;
(function(r) {
    r.NONE = "none", r.LOW = "low", r.MEDIUM = "medium", r.HIGH = "high";
})(F || (F = {}));
var _t = {
    f: F.HIGH,
    h: F.MEDIUM,
    q: F.LOW
};
var Ye;
(function(i) {
    i.VP8 = "vp8", i.VP9 = "vp9", i.H264 = "h264";
})(Ye || (Ye = {}));
var Xe;
(function(e) {
    e.OPUS = "opus";
})(Xe || (Xe = {}));
var be;
(function(r) {
    r.USER = "user", r.ENVIRONMENT = "environment", r.LEFT = "left", r.RIGHT = "right";
})(be || (be = {}));
var wi;
(function(i) {
    i.videoInput = "videoInput", i.audioInput = "audioInput", i.audioOutput = "audioOutput";
})(wi || (wi = {}));
var I;
(function(t) {
    t.audio = "audio", t.video = "video";
})(I || (I = {}));
var Z = class {
    constructor(){
        this._volume = 1;
        this._codec = Xe.OPUS;
        this._maxBitrate = 32;
        this._deviceId = "default";
        this._advanced = [
            {
                googEchoCancellation: {
                    exact: !0
                }
            },
            {
                googExperimentalEchoCancellation: {
                    exact: !0
                }
            },
            {
                autoGainControl: {
                    exact: !0
                }
            },
            {
                noiseSuppression: {
                    exact: !0
                }
            },
            {
                googHighpassFilter: {
                    exact: !0
                }
            },
            {
                googAudioMirroring: {
                    exact: !0
                }
            }
        ];
    }
    volume(e) {
        if (!(0 <= e && e <= 1)) throw Error("volume can only be in range [0.0, 1.0]");
        return this._volume = e, this;
    }
    codec(e) {
        return this._codec = e, this;
    }
    maxBitrate(e) {
        if (e && e <= 0) throw Error("maxBitrate should be >= 1");
        return this._maxBitrate = e, this;
    }
    deviceId(e) {
        return this._deviceId = e, this;
    }
    advanced(e) {
        return this._advanced = e, this;
    }
    build() {
        return new Ie(this._volume, this._codec, this._maxBitrate, this._deviceId, this._advanced);
    }
}, Ie = class {
    constructor(e, t, i, r, s){
        this.volume = e, this.codec = t, this.maxBitrate = i, this.deviceId = r, this.advanced = s;
    }
    toConstraints() {
        return {
            deviceId: this.deviceId,
            advanced: this.advanced
        };
    }
    toAnalyticsProperties() {
        return {
            audio_bitrate: this.maxBitrate,
            audio_codec: this.codec
        };
    }
};
var Y = class {
    constructor(){
        this._width = 320;
        this._height = 180;
        this._codec = Ye.VP8;
        this._maxFramerate = 30;
        this._maxBitrate = 150;
        this._advanced = [];
    }
    setWidth(e) {
        return this._width = e, this;
    }
    setHeight(e) {
        return this._height = e, this;
    }
    codec(e) {
        return this._codec = e, this;
    }
    maxFramerate(e) {
        if (e && e <= 0) throw Error("maxFramerate should be >= 1");
        return this._maxFramerate = e, this;
    }
    maxBitrate(e, t = !0) {
        if (typeof e == "number" && e <= 0) throw Error("maxBitrate should be >= 1");
        return this._maxBitrate = e, !this._maxBitrate && t && (this._maxBitrate = 15e4), this;
    }
    deviceId(e) {
        return this._deviceId = e, this;
    }
    advanced(e) {
        return this._advanced = e, this;
    }
    facingMode(e) {
        return this._facingMode = e, this;
    }
    build() {
        return new Re(this._width, this._height, this._codec, this._maxFramerate, this._deviceId, this._advanced, this._maxBitrate, this._facingMode);
    }
}, Re = class {
    constructor(e, t, i, r, s, n, d, l){
        this.width = e, this.height = t, this.codec = i, this.maxFramerate = r, this.maxBitrate = d, this.deviceId = s, this.advanced = n, this.facingMode = l;
    }
    toConstraints(e) {
        let t = "ideal";
        return e && (t = "max"), {
            width: {
                [t]: this.width
            },
            height: {
                [t]: this.height
            },
            frameRate: this.maxFramerate,
            deviceId: this.deviceId,
            facingMode: this.facingMode
        };
    }
    toAnalyticsProperties() {
        return {
            width: this.width,
            height: this.height,
            video_bitrate: this.maxBitrate,
            framerate: this.maxFramerate,
            video_codec: this.codec,
            facingMode: this.facingMode
        };
    }
};
var Ze = class {
    constructor(){
        this._video = new Y().build();
        this._audio = new Z().build();
        this._screen = new Y().build();
        this._simulcast = !1;
    }
    video(e) {
        return this._video = e, this;
    }
    audio(e) {
        return this._audio = e, this;
    }
    screen(e) {
        return this._screen = e, this;
    }
    simulcast(e) {
        return this._simulcast = e, this;
    }
    build() {
        if (this._audio === null && this._video === null) throw g.TracksErrors.NothingToReturn(m.TRACK);
        if (this._video === null && this._simulcast) throw g.TracksErrors.InvalidVideoSettings(m.TRACK, "Cannot enable simulcast when no video settings are provided");
        return new Fe(this._video, this._audio, this._simulcast, this._screen || void 0);
    }
}, Fe = class {
    constructor(e, t, i, r = null){
        this.video = e, this.audio = t, this.simulcast = i, this.screen = r;
    }
    toAnalyticsProperties() {
        let e = {
            audio_enabled: this.audio !== null,
            video_enabled: this.video !== null
        };
        return this.audio && (e = S(S({}, this.audio.toAnalyticsProperties()), e)), this.video && (e = S(S({}, this.video.toAnalyticsProperties()), e)), e;
    }
};
var Ce = class {
    constructor(e){
        this.tracks = new Array;
        this.nativeStream = e, this.id = e.id;
    }
};
var ue = (a)=>a ? `{
    trackId: ${a.id};
    kind: ${a.kind};
    enabled: ${a.enabled};
    muted: ${a.muted};
    readyState: ${a.readyState};
  }` : "";
var Te = class {
    constructor(e, t, i){
        this.logIdentifier = "";
        this.stream = e, this.nativeTrack = t, this.source = i;
    }
    get enabled() {
        return this.nativeTrack.enabled;
    }
    get trackId() {
        return this.firstTrackId || this.sdpTrackId || this.nativeTrack.id;
    }
    getMediaTrackSettings() {
        return this.nativeTrack.getSettings();
    }
    setEnabled(e) {
        return c(this, null, function*() {
            this.nativeTrack.enabled = e;
        });
    }
    setSdpTrackId(e) {
        this.sdpTrackId = e;
    }
    setFirstTrackId(e) {
        this.firstTrackId = e;
    }
    cleanup() {
        var e;
        o.d("[HMSTrack]", "Stopping track", this.toString()), (e = this.nativeTrack) == null || e.stop();
    }
    toString() {
        var e;
        return `{
      streamId: ${this.stream.id};
      peerId: ${this.peerId};
      trackId: ${this.trackId};
      mid: ${((e = this.transceiver) == null ? void 0 : e.mid) || "-"};
      logIdentifier: ${this.logIdentifier};
      source: ${this.source};
      enabled: ${this.enabled};
      nativeTrack: ${ue(this.nativeTrack)};
    }`;
    }
};
var x;
(function(t) {
    t.AUDIO = "audio", t.VIDEO = "video";
})(x || (x = {}));
var we = class extends Ce {
    constructor(e, t){
        super(e);
        this.audio = !0;
        this.video = F.NONE;
        this.connection = t;
    }
    setAudio(e, t, i) {
        return c(this, null, function*() {
            this.audio !== e && (this.audio = e, o.d(`[Remote stream] ${i || ""} 
    streamId=${this.id}
    trackId=${t}
    subscribing audio - ${this.audio}`), yield this.connection.sendOverApiDataChannelWithResponse({
                params: {
                    subscribed: this.audio,
                    track_id: t
                },
                method: "prefer-audio-track-state"
            }));
        });
    }
    setVideoLayerLocally(e, t, i) {
        this.video = e, o.d(`[Remote stream] ${t}
    streamId=${this.id}
    source: ${i}
    Setting layer field to=${e}`);
    }
    setVideoLayer(e, t, i, r) {
        return o.d(`[Remote stream] ${i} 
      streamId=${this.id}
      trackId=${t} 
      source: ${r} request ${e} layer`), this.setVideoLayerLocally(e, i, r), this.connection.sendOverApiDataChannelWithResponse({
            params: {
                max_spatial_layer: this.video,
                track_id: t
            },
            method: "prefer-video-track-state"
        });
    }
    getSimulcastLayer() {
        return this.video;
    }
    getVideoLayer() {
        return this.video;
    }
    isAudioSubscribed() {
        return this.audio;
    }
};
var Ge = class extends Te {
    constructor(e, t, i){
        super(e, t, i);
        this.type = x.AUDIO;
        this.audioElement = null;
        if (t.kind !== "audio") throw new Error("Expected 'track' kind = 'audio'");
    }
    getVolume() {
        return this.audioElement ? this.audioElement.volume * 100 : null;
    }
    setVolume(e) {
        return c(this, null, function*() {
            if (e < 0 || e > 100) throw Error("Please pass a valid number between 0-100");
            yield this.subscribeToAudio(e === 0 ? !1 : this.enabled), this.audioElement && (this.audioElement.volume = e / 100);
        });
    }
    setAudioElement(e) {
        o.d("[HMSAudioTrack]", this.logIdentifier, "adding audio element", `${this}`, e), this.audioElement = e;
    }
    getAudioElement() {
        return this.audioElement;
    }
    getOutputDevice() {
        return this.outputDevice;
    }
    cleanup() {
        super.cleanup(), this.audioElement && (this.audioElement.srcObject = null, this.audioElement.remove(), this.audioElement = null);
    }
    setOutputDevice(e) {
        return c(this, null, function*() {
            var t;
            if (!e) {
                o.d("[HMSAudioTrack]", this.logIdentifier, "device is null", `${this}`);
                return;
            }
            if (!this.audioElement) {
                o.d("[HMSAudioTrack]", this.logIdentifier, "no audio element to set output", `${this}`), this.outputDevice = e;
                return;
            }
            try {
                typeof this.audioElement.setSinkId == "function" && (yield (t = this.audioElement) == null ? void 0 : t.setSinkId(e.deviceId), this.outputDevice = e);
            } catch (i) {
                o.d("[HMSAudioTrack]", "error in setSinkId", i);
            }
        });
    }
    subscribeToAudio(e) {
        return c(this, null, function*() {
            this.stream instanceof we && (yield this.stream.setAudio(e, this.trackId, this.logIdentifier));
        });
    }
};
var Hi = class {
    constructor(){
        this.storage = new ie("hms-device-selection");
        this.remember = !1;
        this.TAG = "[HMSDeviceStorage]";
    }
    setDevices(e) {
        this.devices = e;
    }
    rememberDevices(e) {
        this.remember = e;
    }
    updateSelection(e, { deviceId: t , groupId: i  }) {
        if (!this.devices || !this.remember) return;
        let r = this.devices[e].find((n)=>this.isSame({
                deviceId: t,
                groupId: i
            }, n));
        if (!r) {
            o.w(this.TAG, `Could not find device with deviceId: ${t}, groupId: ${i}`);
            return;
        }
        let s = this.storage.get() || {};
        s[e] = r, this.storage.set(s);
    }
    getSelection() {
        if (!!this.remember) return this.storage.get();
    }
    cleanup() {
        this.remember = !1, this.devices = void 0;
    }
    isSame(e, t) {
        return e.deviceId === t.deviceId && (e.groupId === t.groupId || !e.groupId);
    }
}, Q = new Hi;
var Dt;
(function(t) {
    t.TRANSFORM = "TRANSFORM", t.ANALYZE = "ANALYZE";
})(Dt || (Dt = {}));
var se;
(function(t) {
    t.PLATFORM_NOT_SUPPORTED = "PLATFORM_NOT_SUPPORTED", t.DEVICE_NOT_SUPPORTED = "DEVICE_NOT_SUPPORTED";
})(se || (se = {}));
var he = class {
    static failure(e, t) {
        let i = "mediaPlugin.failed", r = _.ERROR, s = S({
            plugin_name: e
        }, t.toAnalyticsProperties());
        return new O({
            name: i,
            level: r,
            properties: s
        });
    }
    static audioPluginFailure(e, t, i) {
        let r = "mediaPlugin.failed", s = _.ERROR, n = S({
            plugin_name: e,
            sampleRate: t
        }, i.toAnalyticsProperties());
        return new O({
            name: r,
            level: s,
            properties: n
        });
    }
    static audioPluginStats({ pluginName: e , duration: t , loadTime: i , sampleRate: r  }) {
        let s = "mediaPlugin.stats", n = _.INFO, d = {
            plugin_name: e,
            duration: t,
            load_time: i,
            sampleRate: r
        };
        return new O({
            name: s,
            level: n,
            properties: d
        });
    }
    static stats({ pluginName: e , duration: t , loadTime: i , avgPreProcessingTime: r , avgProcessingTime: s , inputFrameRate: n , pluginFrameRate: d  }) {
        let l = "mediaPlugin.stats", u = _.INFO, h = {
            plugin_name: e,
            duration: t,
            load_time: i,
            avg_preprocessing_time: r,
            avg_processing_time: s,
            input_frame_rate: n,
            plugin_frame_rate: d
        };
        return new O({
            name: l,
            level: u,
            properties: h
        });
    }
};
var Nt = class {
    constructor(e){
        this.eventBus = e;
        this.TAG = "[AudioPluginsAnalytics]";
        this.initTime = {}, this.addedTimestamps = {}, this.pluginAdded = {}, this.pluginSampleRate = {};
    }
    added(e, t) {
        this.pluginAdded[e] = !0, this.addedTimestamps[e] = Date.now(), this.initTime[e] = 0, this.pluginSampleRate[e] = t;
    }
    removed(e) {
        if (this.pluginAdded[e]) {
            let t = {
                pluginName: e,
                duration: Math.floor((Date.now() - this.addedTimestamps[e]) / 1e3),
                loadTime: this.initTime[e],
                sampleRate: this.pluginSampleRate[e]
            };
            this.eventBus.analytics.publish(he.audioPluginStats(t)), this.clean(e);
        }
    }
    failure(e, t) {
        this.pluginAdded[e] && (this.eventBus.analytics.publish(he.audioPluginFailure(e, this.pluginSampleRate[e], t)), this.clean(e));
    }
    initWithTime(e, t) {
        return c(this, null, function*() {
            if (this.initTime[e]) {
                o.i(this.TAG, `Plugin Already loaded ${e}, time it took: ${this.initTime[e]}`);
                return;
            }
            let i;
            try {
                i = yield this.timeInMs(t), o.i(this.TAG, `Time taken for Plugin ${e} initialization : ${i}`);
            } catch (r) {
                let s = g.MediaPluginErrors.InitFailed(m.AUDIO_PLUGINS, `failed during initialization of plugin${r.message || r}`);
                throw o.e(this.TAG, s), this.failure(e, s), s;
            }
            i && (this.initTime[e] = i);
        });
    }
    timeInMs(e) {
        return c(this, null, function*() {
            let t = Date.now();
            return yield e(), Math.floor(Date.now() - t);
        });
    }
    clean(e) {
        delete this.addedTimestamps[e], delete this.initTime[e], delete this.pluginAdded[e], delete this.pluginSampleRate[e];
    }
};
var wr = 48e3, Hr = ()=>navigator.userAgent.indexOf("Firefox") !== -1, et = class {
    constructor(e, t){
        this.TAG = "[AudioPluginsManager]";
        this.pluginAddInProgress = !1;
        this.hmsTrack = e, this.pluginsMap = new Map, this.analytics = new Nt(t), this.createAudioContext();
    }
    getPlugins() {
        return Array.from(this.pluginsMap.keys());
    }
    addPlugin(e) {
        return c(this, null, function*() {
            var i;
            let t = (i = e.getName) == null ? void 0 : i.call(e);
            if (!t) {
                o.w("no name provided by the plugin");
                return;
            }
            if (this.pluginAddInProgress) {
                let r = g.MediaPluginErrors.AddAlreadyInProgress(m.AUDIO_PLUGINS, "Add Plugin is already in Progress");
                throw this.analytics.added(t, this.audioContext.sampleRate), this.analytics.failure(t, r), o.w("can't add another plugin when previous add is in progress"), r;
            }
            this.pluginAddInProgress = !0;
            try {
                yield this.addPluginInternal(e);
            } finally{
                this.pluginAddInProgress = !1;
            }
        });
    }
    addPluginInternal(e) {
        return c(this, null, function*() {
            var i;
            let t = (i = e.getName) == null ? void 0 : i.call(e);
            if (this.pluginsMap.get(t)) {
                o.w(this.TAG, `plugin - ${t} already added.`);
                return;
            }
            yield this.validateAndThrow(t, e);
            try {
                this.pluginsMap.size === 0 ? yield this.initAudioNodes() : this.prevAudioNode && this.prevAudioNode.disconnect(), this.analytics.added(t, this.audioContext.sampleRate), yield this.analytics.initWithTime(t, ()=>c(this, null, function*() {
                        return e.init();
                    })), this.pluginsMap.set(t, e), yield this.processPlugin(e), yield this.connectToDestination();
            } catch (r) {
                throw o.e(this.TAG, "failed to add plugin", r), r;
            }
        });
    }
    validatePlugin(e) {
        return e.checkSupport(this.audioContext);
    }
    validateAndThrow(e, t) {
        return c(this, null, function*() {
            let i = this.validatePlugin(t);
            if (i.isSupported) o.i(this.TAG, `plugin is supported,- ${t.getName()}`);
            else if (this.analytics.added(e, this.audioContext.sampleRate), i.errType === se.PLATFORM_NOT_SUPPORTED) {
                let r = g.MediaPluginErrors.PlatformNotSupported(m.AUDIO_PLUGINS, "platform not supported, see docs");
                throw this.analytics.failure(e, r), yield this.cleanup(), r;
            } else if (i.errType === se.DEVICE_NOT_SUPPORTED) {
                let r = g.MediaPluginErrors.DeviceNotSupported(m.AUDIO_PLUGINS, "audio device not supported, see docs");
                throw this.analytics.failure(e, r), yield this.cleanup(), r;
            }
        });
    }
    removePlugin(e) {
        return c(this, null, function*() {
            yield this.removePluginInternal(e), this.pluginsMap.size === 0 ? (yield this.cleanup(), o.i(this.TAG, "No plugins left, stopping plugins loop"), yield this.hmsTrack.setProcessedTrack(void 0)) : yield this.reprocessPlugins();
        });
    }
    cleanup() {
        return c(this, null, function*() {
            var e, t, i;
            for (let r of this.pluginsMap.values())yield this.removePluginInternal(r);
            yield this.hmsTrack.setProcessedTrack(void 0), (e = this.sourceNode) == null || e.disconnect(), (t = this.prevAudioNode) == null || t.disconnect(), (i = this.outputTrack) == null || i.stop(), this.sourceNode = void 0, this.destinationNode = void 0, this.prevAudioNode = void 0, this.outputTrack = void 0;
        });
    }
    closeContext() {
        return c(this, null, function*() {
            var e;
            (e = this.audioContext) == null || e.close(), this.audioContext = void 0;
        });
    }
    reprocessPlugins() {
        return c(this, null, function*() {
            if (this.pluginsMap.size === 0 || !this.sourceNode) return;
            let e = Array.from(this.pluginsMap.values());
            yield this.cleanup(), yield this.initAudioNodes();
            for (let t of e)yield this.addPlugin(t);
        });
    }
    initAudioNodes() {
        return c(this, null, function*() {
            if (this.audioContext) {
                if (!this.sourceNode) {
                    let e = new MediaStream([
                        this.hmsTrack.nativeTrack
                    ]);
                    this.sourceNode = this.audioContext.createMediaStreamSource(e);
                }
                if (!this.destinationNode) {
                    this.destinationNode = this.audioContext.createMediaStreamDestination(), this.outputTrack = this.destinationNode.stream.getAudioTracks()[0];
                    try {
                        yield this.hmsTrack.setProcessedTrack(this.outputTrack);
                    } catch (e) {
                        throw o.e(this.TAG, "error in setting processed track", e), e;
                    }
                }
            }
        });
    }
    processPlugin(e) {
        return c(this, null, function*() {
            try {
                let t = yield e.processAudioTrack(this.audioContext, this.prevAudioNode || this.sourceNode);
                this.prevAudioNode && this.prevAudioNode.connect(t), this.prevAudioNode = t;
            } catch (t) {
                let i = e.getName();
                o.e(this.TAG, `error in processing plugin ${i}`, t), yield this.removePluginInternal(e);
            }
        });
    }
    connectToDestination() {
        return c(this, null, function*() {
            try {
                this.prevAudioNode && this.destinationNode && this.prevAudioNode.context === this.destinationNode.context && this.prevAudioNode.connect(this.destinationNode);
            } catch (e) {
                o.e(this.TAG, "error in connecting to destination node", e);
            }
        });
    }
    removePluginInternal(e) {
        return c(this, null, function*() {
            var i;
            let t = (i = e.getName) == null ? void 0 : i.call(e);
            if (!this.pluginsMap.get(t)) {
                o.w(this.TAG, `plugin - ${t} not found to remove.`);
                return;
            }
            o.i(this.TAG, `removing plugin ${t}`), this.pluginsMap.delete(t), e.stop(), this.analytics.removed(t);
        });
    }
    createAudioContext() {
        this.audioContext || (Hr() ? this.audioContext = new AudioContext : this.audioContext = new AudioContext({
            sampleRate: wr
        }));
    }
};
function tt(a) {
    return c(this, null, function*() {
        try {
            return (yield navigator.mediaDevices.getUserMedia({
                audio: a ? a.toConstraints() : !1
            })).getAudioTracks()[0];
        } catch (e) {
            throw te(e, J.AUDIO);
        }
    });
}
function it(a) {
    return c(this, null, function*() {
        try {
            return (yield navigator.mediaDevices.getUserMedia({
                video: a ? a.toConstraints() : !1
            })).getVideoTracks()[0];
        } catch (e) {
            throw te(e, J.VIDEO);
        }
    });
}
function rt(a) {
    return "canvas" in a || a.label === "MediaStreamAudioDestinationNode" || a.label === "";
}
function Li(a) {
    return c(this, null, function*() {
        try {
            return yield navigator.mediaDevices.getUserMedia(a);
        } catch (e) {
            throw te(e, J.AV);
        }
    });
}
function Nn(a) {
    return c(this, null, function*() {
        try {
            return yield navigator.mediaDevices.getDisplayMedia({
                video: a,
                audio: !1
            });
        } catch (e) {
            throw te(e, J.SCREEN);
        }
    });
}
function On() {
    return c(this, null, function*() {
        try {
            let a = yield navigator.mediaDevices.enumerateDevices(), e = {
                audioinput: [],
                audiooutput: [],
                videoinput: []
            };
            return a.forEach((t)=>e[t.kind].push(t)), e;
        } catch (a) {
            throw te(a, J.AV);
        }
    });
}
var pe = {
    audioContext: null,
    getAudioContext () {
        return this.audioContext || (this.audioContext = new AudioContext), this.audioContext;
    },
    resumeContext () {
        return c(this, null, function*() {
            try {
                return yield this.getAudioContext().resume();
            } catch (a) {
                o.e("AudioContext", a);
            }
        });
    }
};
var fe = class {
    constructor(e = 1 / 0){
        this.capacity = e;
        this.storage = [];
    }
    size() {
        return this.storage.length;
    }
    toList() {
        return this.storage.slice(0);
    }
    enqueue(e) {
        this.size() === this.capacity && this.dequeue(), this.storage.push(e);
    }
    dequeue() {
        return this.storage.shift();
    }
    aggregate(e) {
        return e(this.storage);
    }
};
function $(a) {
    if (a < 0) throw Error("`ms` should be a positive integer");
    return new Promise((e)=>setTimeout(e, a));
}
function st(a, e = 300) {
    let t;
    return function(...i) {
        clearTimeout(t), t = void 0;
        let r = this;
        t = setTimeout(()=>{
            a.apply(r, i);
        }, e);
    };
}
var Lr = 35, _r = 5, Ot = class {
    constructor(e, t, i){
        this.track = e;
        this.audioLevelEvent = t;
        this.silenceEvent = i;
        this.TAG = "[TrackAudioLevelMonitor]";
        this.audioLevel = 0;
        this.isMonitored = !1;
        this.interval = 100;
        this.historyInterval = 700;
        this.history = new fe(this.historyInterval / this.interval);
        this.detectSilence = ()=>c(this, null, function*() {
                let e = 20, t = 50, i = 0;
                for(; this.isMonitored;){
                    if (this.track.enabled) {
                        if (this.isSilentThisInstant()) {
                            if (i++, i > t) {
                                this.silenceEvent.publish({
                                    track: this.track
                                });
                                break;
                            }
                        } else break;
                    }
                    yield $(e);
                }
            });
        try {
            let r = new MediaStream([
                this.track.nativeTrack
            ]);
            this.analyserNode = this.createAnalyserNodeForStream(r);
        } catch (r) {
            o.w(this.TAG, "Unable to initialize AudioContext", r);
        }
    }
    start() {
        this.stop(), this.isMonitored = !0, o.d(this.TAG, "Starting track Monitor", `${this.track}`), this.loop().then(()=>o.d(this.TAG, "Stopping track Monitor", `${this.track}`));
    }
    stop() {
        if (!this.analyserNode) {
            o.d(this.TAG, "AudioContext not initialized");
            return;
        }
        this.sendAudioLevel(0), this.isMonitored = !1;
    }
    loop() {
        return c(this, null, function*() {
            for(; this.isMonitored;)this.sendAudioLevel(this.getMaxAudioLevelOverPeriod()), yield $(this.interval);
        });
    }
    sendAudioLevel(e = 0) {
        if (e = e > Lr ? e : 0, Math.abs(this.audioLevel - e) > _r) {
            this.audioLevel = e;
            let i = {
                track: this.track,
                audioLevel: this.audioLevel
            };
            this.audioLevelEvent.publish(i);
        }
    }
    getMaxAudioLevelOverPeriod() {
        if (!this.analyserNode) {
            o.d(this.TAG, "AudioContext not initialized");
            return;
        }
        let e = this.calculateAudioLevel();
        return e !== void 0 && this.history.enqueue(e), this.history.aggregate((t)=>Math.max(...t));
    }
    calculateAudioLevel() {
        if (!this.analyserNode) {
            o.d(this.TAG, "AudioContext not initialized");
            return;
        }
        let e = new Uint8Array(this.analyserNode.fftSize);
        this.analyserNode.getByteTimeDomainData(e);
        let t = .009, i = t;
        for (let n of e)i = Math.max(i, (n - 128) / 128);
        let r = (Math.log(t) - Math.log(i)) / Math.log(t);
        return Math.ceil(Math.min(Math.max(r * 100, 0), 100));
    }
    isSilentThisInstant() {
        if (!this.analyserNode) {
            o.d(this.TAG, "AudioContext not initialized");
            return;
        }
        let e = new Uint8Array(this.analyserNode.fftSize);
        return this.analyserNode.getByteTimeDomainData(e), !e.some((t)=>t !== 128 && t !== 0);
    }
    createAnalyserNodeForStream(e) {
        let t = pe.getAudioContext(), i = t.createAnalyser();
        return t.createMediaStreamSource(e).connect(i), i;
    }
};
function _i(a, e) {
    return function(i) {
        return i in a && a[i] !== e[i];
    };
}
var He = class extends Ge {
    constructor(e, t, i, r, s = new Z().build()){
        super(e, t, i);
        this.eventBus = r;
        this.TAG = "[HMSLocalAudioTrack]";
        this.isPublished = !1;
        this.handleVisibilityChange = ()=>c(this, null, function*() {
                document.visibilityState === "visible" && (yield this.replaceTrackWith(this.settings));
            });
        this.handleSettingsChange = (e)=>c(this, null, function*() {
                let t = this.stream, i = _i(e, this.settings);
                i("maxBitrate") && e.maxBitrate && (yield t.setMaxBitrateAndFramerate(this)), i("advanced") && (yield this.replaceTrackWith(e));
            });
        this.handleDeviceChange = (e, t = !1)=>c(this, null, function*() {
                _i(e, this.settings)("deviceId") && (yield this.replaceTrackWith(e), t || Q.updateSelection("audioInput", {
                    deviceId: e.deviceId,
                    groupId: this.nativeTrack.getSettings().groupId
                }));
            });
        e.tracks.push(this), this.settings = s, s.deviceId !== t.getSettings().deviceId && !rt(t) && (this.settings = this.buildNewSettings({
            deviceId: t.getSettings().deviceId
        })), this.pluginsManager = new et(this, r), this.setFirstTrackId(t.id), Ct() && B && document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    replaceTrackWith(e) {
        return c(this, null, function*() {
            let t = this.nativeTrack;
            t == null || t.stop();
            let i = Boolean(this.audioLevelMonitor), r = yield tt(e);
            r.enabled = this.enabled, o.d(this.TAG, "replaceTrack, Previous track stopped", t, "newTrack", r);
            let s = this.stream;
            yield s.replaceSenderTrack(t, this.processedTrack || r), yield s.replaceStreamTrack(t, r), this.nativeTrack = r, i && this.initAudioLevelMonitor();
            try {
                yield this.pluginsManager.reprocessPlugins();
            } catch (n) {
                this.eventBus.audioPluginFailed.publish(n);
            }
        });
    }
    setEnabled(e) {
        var t = (i)=>super[i];
        return c(this, null, function*() {
            e !== this.enabled && (e && rt(this.nativeTrack) && (yield this.replaceTrackWith(this.settings)), yield t("setEnabled").call(this, e), e && (this.settings = this.buildNewSettings({
                deviceId: this.nativeTrack.getSettings().deviceId
            })), this.eventBus.localAudioEnabled.publish({
                enabled: e,
                track: this
            }));
        });
    }
    isPublishedTrackId(e) {
        return this.publishedTrackId === e;
    }
    setSettings(e, t = !1) {
        return c(this, null, function*() {
            let i = this.buildNewSettings(e);
            if (rt(this.nativeTrack)) {
                this.settings = i;
                return;
            }
            yield this.handleDeviceChange(i, t), yield this.handleSettingsChange(i), this.settings = i;
        });
    }
    getPlugins() {
        return this.pluginsManager.getPlugins();
    }
    addPlugin(e) {
        return c(this, null, function*() {
            return this.pluginsManager.addPlugin(e);
        });
    }
    removePlugin(e) {
        return c(this, null, function*() {
            return this.pluginsManager.removePlugin(e);
        });
    }
    validatePlugin(e) {
        return this.pluginsManager.validatePlugin(e);
    }
    setProcessedTrack(e) {
        return c(this, null, function*() {
            if (!e) {
                this.processedTrack && (yield this.stream.replaceSenderTrack(this.processedTrack, this.nativeTrack)), this.processedTrack = void 0;
                return;
            }
            e !== this.processedTrack && (this.processedTrack ? yield this.stream.replaceSenderTrack(this.processedTrack, e) : yield this.stream.replaceSenderTrack(this.nativeTrack, e), this.processedTrack = e);
        });
    }
    initAudioLevelMonitor() {
        this.audioLevelMonitor && this.destroyAudioLevelMonitor(), o.d(this.TAG, "Monitor Audio Level for", this, this.getMediaTrackSettings().deviceId), this.audioLevelMonitor = new Ot(this, this.eventBus.trackAudioLevelUpdate, this.eventBus.localAudioSilence), this.audioLevelMonitor.start(), this.audioLevelMonitor.detectSilence();
    }
    destroyAudioLevelMonitor() {
        var e;
        (e = this.audioLevelMonitor) == null || e.stop(), this.audioLevelMonitor = void 0;
    }
    cleanup() {
        var e = (t)=>super[t];
        return c(this, null, function*() {
            var i;
            e("cleanup").call(this), yield this.pluginsManager.cleanup(), yield this.pluginsManager.closeContext(), this.transceiver = void 0, (i = this.processedTrack) == null || i.stop(), this.isPublished = !1, this.destroyAudioLevelMonitor(), Ct() && B && document.removeEventListener("visibilitychange", this.handleVisibilityChange);
        });
    }
    getTrackIDBeingSent() {
        return this.processedTrack ? this.processedTrack.id : this.nativeTrack.id;
    }
    getTrackBeingSent() {
        return this.processedTrack || this.nativeTrack;
    }
    buildNewSettings(e) {
        let { volume: t , codec: i , maxBitrate: r , deviceId: s , advanced: n  } = S(S({}, this.settings), e);
        return new Ie(t, i, r, s, n);
    }
};
var Ee = class extends Ge {
    setEnabled(e) {
        var t = (i)=>super[i];
        return c(this, null, function*() {
            e !== this.enabled && (yield t("setEnabled").call(this, e), yield this.subscribeToAudio(e));
        });
    }
};
var Ve = class extends Te {
    constructor(e, t, i){
        super(e, t, i);
        this.type = x.VIDEO;
        this.sinkCount = 0;
        if (t.kind !== "video") throw new Error("Expected 'track' kind = 'video'");
    }
    setVideoHandler(e) {
        this.videoHandler = e;
    }
    hasSinks() {
        return this.sinkCount > 0;
    }
    getSinks() {
        return this.videoHandler.getVideoElements() || [];
    }
    attach(e) {
        this.videoHandler.addVideoElement(e);
    }
    detach(e) {
        this.videoHandler.removeVideoElement(e);
    }
    addSink(e) {
        this.addSinkInternal(e, this.nativeTrack);
    }
    removeSink(e) {
        e.srcObject !== null && (e.srcObject = null, this.sinkCount > 0 && this.sinkCount--);
    }
    cleanup() {
        super.cleanup(), this.videoHandler.cleanup();
    }
    addSinkInternal(e, t) {
        var r;
        let i = e.srcObject;
        i !== null && i instanceof MediaStream && ((r = i.getVideoTracks()[0]) == null ? void 0 : r.id) === t.id || (e.srcObject = new MediaStream([
            t
        ]), this.sinkCount++);
    }
};
var Ue = {
    [F.NONE]: -1,
    [F.LOW]: 0,
    [F.MEDIUM]: 1,
    [F.HIGH]: 2
}, Dr = .5, Di = (a, e)=>{
    let t = F.HIGH, i = e.width > e.height ? "width" : "height", r = [
        ...a
    ].sort((n, d)=>Ue[n.layer] - Ue[d.layer]), s = e[i] * ((window == null ? void 0 : window.devicePixelRatio) || 1);
    for(let n = 0; n < r.length; n++){
        let { resolution: d , layer: l  } = r[n], u = d[i];
        if (s <= u) {
            t = l;
            break;
        } else {
            let h = r[n + 1], p = h ? h.resolution[i] : Number.POSITIVE_INFINITY;
            if ((s - u) / (p - u) < Dr) {
                t = l;
                break;
            }
        }
    }
    return t;
};
var Ni = class {
    constructor(){
        this.TAG = "[HMSIntersectionObserverWrapper]";
        this.listeners = new Map;
        this.observe = (e, t)=>{
            var i;
            this.createObserver(), this.unobserve(e), (i = this.intersectionObserver) == null || i.observe(e), this.listeners.set(e, t);
        };
        this.unobserve = (e)=>{
            var t;
            (t = this.intersectionObserver) == null || t.unobserve(e), this.listeners.has(e) && this.listeners.delete(e);
        };
        this.createObserver = ()=>{
            this.isSupported() && !this.intersectionObserver && (this.intersectionObserver = new IntersectionObserver(this.handleIntersection));
        };
        this.handleIntersection = (e)=>{
            var t;
            for (let i of e)this.listeners.has(i.target) && ((t = this.listeners.get(i.target)) == null || t(i));
        };
        this.createObserver();
    }
    isSupported() {
        let e = B && typeof window.IntersectionObserver != "undefined";
        return e || o.w(this.TAG, "IntersectionObserver is not supported, fallback will be used instead"), e;
    }
}, Oi = new Ni;
var xi = class {
    constructor(){
        this.TAG = "[HMSResizeObserverWrapper]";
        this.listeners = new Map;
        this.observe = (e, t, i = {
            box: "border-box"
        })=>{
            var r;
            this.createObserver(), this.unobserve(e), (r = this.resizeObserver) == null || r.observe(e, i), this.listeners.set(e, t);
        };
        this.unobserve = (e)=>{
            var t;
            (t = this.resizeObserver) == null || t.unobserve(e), this.listeners.has(e) && this.listeners.delete(e);
        };
        this.createObserver = ()=>{
            this.isSupported() && !this.resizeObserver && (this.resizeObserver = new ResizeObserver(st(this.handleResize, 300)));
        };
        this.handleResize = (e)=>{
            var t;
            for (let i of e)this.listeners.has(i.target) && ((t = this.listeners.get(i.target)) == null || t(i));
        };
        this.createObserver();
    }
    isSupported() {
        let e = B && typeof window.ResizeObserver != "undefined";
        return e || o.w(this.TAG, "Resize Observer is not supported"), e;
    }
}, Fi = new xi;
var Be = class {
    constructor(e){
        this.track = e;
        this.TAG = "[VideoElementManager]";
        this.videoElements = new Set;
        this.entries = new Map;
        this.handleIntersection = (e)=>c(this, null, function*() {
                let t = getComputedStyle(e.target).visibility === "visible";
                this.track.enabled && (e.isIntersecting && t || !document.contains(e.target)) ? (o.d(this.TAG, "add sink intersection", this.track, this.id), yield this.track.addSink(e.target)) : (o.d(this.TAG, "remove sink intersection", this.track, this.id), yield this.track.removeSink(e.target)), this.entries.set(e.target, e.boundingClientRect), yield this.selectMaxLayer();
            });
        this.handleResize = (e)=>c(this, null, function*() {
                !this.track.enabled || !(this.track instanceof X) || (this.entries.set(e.target, e.contentRect), yield this.selectMaxLayer());
            });
        this.cleanup = ()=>{
            this.videoElements.forEach((e)=>{
                var t, i;
                e.srcObject = null, (t = this.resizeObserver) == null || t.unobserve(e), (i = this.intersectionObserver) == null || i.unobserve(e);
            }), this.videoElements.clear(), this.resizeObserver = void 0, this.intersectionObserver = void 0;
        };
        this.init(), this.id = (0, _uuid.v4)();
    }
    updateSinks() {
        for (let e of this.videoElements)this.track.enabled ? this.track.addSink(e) : this.track.removeSink(e);
    }
    addVideoElement(e) {
        return c(this, null, function*() {
            var t;
            this.videoElements.has(e) || (this.init(), o.d(this.TAG, `Adding video element: ${e} for ${this.track}`, this.id), this.videoElements.add(e), this.videoElements.size >= 10 && o.w(this.TAG, `${this.track}`, `the track is added to ${this.videoElements.size} video elements, while this may be intentional, it's likely that there is a bug leading to unnecessary creation of video elements in the UI`), ((t = this.intersectionObserver) == null ? void 0 : t.isSupported()) ? this.intersectionObserver.observe(e, this.handleIntersection) : B && (this.isElementInViewport(e) ? this.track.addSink(e) : this.track.removeSink(e)), this.resizeObserver ? this.resizeObserver.observe(e, this.handleResize) : this.track instanceof X && (yield this.track.setPreferredLayer(this.track.getPreferredLayer())));
        });
    }
    removeVideoElement(e) {
        var t, i;
        this.track.removeSink(e), this.videoElements.delete(e), this.entries.delete(e), (t = this.resizeObserver) == null || t.unobserve(e), (i = this.intersectionObserver) == null || i.unobserve(e), o.d(this.TAG, `Removing video element: ${e} for ${this.track}`);
    }
    getVideoElements() {
        return Array.from(this.videoElements);
    }
    init() {
        B && (this.resizeObserver = Fi, this.intersectionObserver = Oi);
    }
    isElementInViewport(e) {
        let t = e.offsetTop, i = e.offsetLeft, r = e.offsetWidth, s = e.offsetHeight, { hidden: n  } = e, { opacity: d , display: l  } = getComputedStyle(e);
        for(; e.offsetParent;)e = e.offsetParent, t += e.offsetTop, i += e.offsetLeft;
        return t < window.pageYOffset + window.innerHeight && i < window.pageXOffset + window.innerWidth && t + s > window.pageYOffset && i + r > window.pageXOffset && !n && (d !== "" ? parseFloat(d) > 0 : !0) && l !== "none";
    }
    selectMaxLayer() {
        return c(this, null, function*() {
            let e;
            if (this.track instanceof X) {
                for (let t of this.entries.values()){
                    let { width: i , height: r  } = t, s = Di(this.track.getSimulcastDefinitions(), {
                        width: i,
                        height: r
                    });
                    e ? e = Ue[s] > Ue[e] ? s : e : e = s;
                }
                o.d(this.TAG, `selecting max layer ${e} for the track`, `${this.track}`), yield this.track.setPreferredLayer(e);
            }
        });
    }
};
var Le;
(function(t) {
    t.TRANSFORM = "TRANSFORM", t.ANALYZE = "ANALYZE";
})(Le || (Le = {}));
var $e;
(function(t) {
    t["2D"] = "2d", t.WEBGL = "webgl", t.WEBGL2 = "webgl2";
})($e || ($e = {}));
var at = class {
    constructor(){
        this.total = 0;
        this.count = 0;
    }
    add(e) {
        this.count++, this.total += e;
    }
    getAvg() {
        return Math.floor(this.total / this.count);
    }
    reset() {
        this.total = 0, this.count = 0;
    }
};
var xt = class {
    constructor(e){
        this.eventBus = e;
        this.TAG = "[VideoPluginsAnalytics]";
        this.initTime = {}, this.preProcessingAvgs = new at, this.addedTimestamps = {}, this.processingAvgs = {}, this.pluginAdded = {}, this.pluginInputFrameRate = {}, this.pluginFrameRate = {};
    }
    added(e, t, i) {
        this.pluginAdded[e] = !0, this.addedTimestamps[e] = Date.now(), this.initTime[e] = 0, this.processingAvgs[e] = new at, this.pluginInputFrameRate[e] = t, this.pluginFrameRate[e] = i || t;
    }
    removed(e) {
        var t;
        if (this.pluginAdded[e]) {
            let i = {
                pluginName: e,
                duration: Math.floor((Date.now() - this.addedTimestamps[e]) / 1e3),
                loadTime: this.initTime[e],
                avgPreProcessingTime: this.preProcessingAvgs.getAvg(),
                avgProcessingTime: (t = this.processingAvgs[e]) == null ? void 0 : t.getAvg(),
                inputFrameRate: this.pluginInputFrameRate[e],
                pluginFrameRate: this.pluginFrameRate[e]
            };
            this.eventBus.analytics.publish(he.stats(i)), this.clean(e);
        }
    }
    failure(e, t) {
        this.pluginAdded[e] && (this.eventBus.analytics.publish(he.failure(e, t)), this.clean(e));
    }
    initWithTime(e, t) {
        return c(this, null, function*() {
            if (this.initTime[e]) {
                o.i(this.TAG, `Plugin Already loaded ${e}, time it took: ${this.initTime[e]}`);
                return;
            }
            let i;
            try {
                i = yield this.timeInMs(t), o.i(this.TAG, `Time taken for Plugin ${e} initialization : ${i}`);
            } catch (r) {
                let s = g.MediaPluginErrors.InitFailed(m.VIDEO_PLUGINS, `failed during initialization of plugin${r.message || r}`);
                throw o.e(this.TAG, s), this.failure(e, s), s;
            }
            i && (this.initTime[e] = i);
        });
    }
    preProcessWithTime(e) {
        return c(this, null, function*() {
            let t = yield this.timeInMs(e);
            this.preProcessingAvgs.add(t);
        });
    }
    processWithTime(e, t) {
        return c(this, null, function*() {
            var r;
            let i;
            try {
                i = yield this.timeInMs(t);
            } catch (s) {
                let n = g.MediaPluginErrors.ProcessingFailed(m.VIDEO_PLUGINS, `Failed during processing of plugin${s.message || s}`);
                throw o.e(this.TAG, n), this.failure(e, n), n;
            }
            i && ((r = this.processingAvgs[e]) == null || r.add(i));
        });
    }
    timeInMs(e) {
        return c(this, null, function*() {
            let t = Date.now();
            return yield e(), Math.floor(Date.now() - t);
        });
    }
    clean(e) {
        delete this.addedTimestamps[e], delete this.initTime[e], delete this.processingAvgs[e], delete this.pluginAdded[e], delete this.pluginInputFrameRate[e], delete this.pluginFrameRate[e];
    }
};
var Gi = 24, Or = 320, xr = 240, nt = class {
    constructor(e, t){
        this.TAG = "[VideoPluginsManager]";
        this.pluginsLoopRunning = !1;
        this.pluginsLoopState = "paused";
        this.pluginAddInProgress = !1;
        this.hmsTrack = e, this.pluginsMap = new Map, this.pluginNumFramesToSkip = {}, this.pluginNumFramesSkipped = {}, this.analytics = new xt(t), this.canvases = new Array;
    }
    getPlugins() {
        return Array.from(this.pluginsMap.keys());
    }
    addPlugin(e, t) {
        return c(this, null, function*() {
            var i;
            if (this.pluginAddInProgress) {
                let r = (i = e.getName) == null ? void 0 : i.call(e);
                if (!r || r === "") {
                    o.w("no name provided by the plugin");
                    return;
                }
                let s = g.MediaPluginErrors.AddAlreadyInProgress(m.VIDEO_PLUGINS, "Add Plugin is already in Progress");
                throw this.analytics.failure(r, s), o.w("can't add another plugin when previous add is in progress"), s;
            }
            this.pluginAddInProgress = !0;
            try {
                yield this.addPluginInternal(e, t);
            } finally{
                this.pluginAddInProgress = !1;
            }
        });
    }
    addPluginInternal(e, t) {
        return c(this, null, function*() {
            var n, d;
            let i = (n = e.getName) == null ? void 0 : n.call(e);
            if (!i || i === "") {
                o.w("no name provided by the plugin");
                return;
            }
            if (this.pluginsMap.has(i)) {
                o.w(this.TAG, `plugin - ${e.getName()} already added.`);
                return;
            }
            let r = this.hmsTrack.getMediaTrackSettings().frameRate || Gi, s = 0;
            t && t > 0 ? (o.i(this.TAG, `adding plugin ${e.getName()} with framerate ${t}`), t < r && (s = Math.ceil(r / t) - 1), this.analytics.added(i, r, t)) : (o.i(this.TAG, `adding plugin ${e.getName()}`), this.analytics.added(i, r)), o.i(this.TAG, "numFrames to skip processing", s), this.pluginNumFramesToSkip[i] = s, this.pluginNumFramesSkipped[i] = s, this.validateAndThrow(i, e);
            try {
                if (yield this.analytics.initWithTime(i, ()=>c(this, null, function*() {
                        return yield e.init();
                    })), this.pluginsMap.set(i, e), this.pluginsMap.size + 1 > this.canvases.length) for(let l = this.canvases.length; l <= this.pluginsMap.size; l++)this.canvases[l] = document.createElement("canvas");
                yield this.startPluginsLoop((d = e.getContextType) == null ? void 0 : d.call(e));
            } catch (l) {
                throw o.e(this.TAG, "failed to add plugin", l), yield this.removePlugin(e), l;
            }
        });
    }
    validatePlugin(e) {
        return e.checkSupport();
    }
    validateAndThrow(e, t) {
        let i = this.validatePlugin(t);
        if (i.isSupported) o.i(this.TAG, `plugin is supported,- ${t.getName()}`);
        else {
            let r;
            switch(i.errType){
                case se.PLATFORM_NOT_SUPPORTED:
                    throw r = g.MediaPluginErrors.PlatformNotSupported(m.VIDEO_PLUGINS, "platform not supported, see docs"), this.analytics.failure(e, r), r;
                case se.DEVICE_NOT_SUPPORTED:
                    throw r = g.MediaPluginErrors.DeviceNotSupported(m.VIDEO_PLUGINS, "video device not supported, see docs"), this.analytics.failure(e, r), r;
            }
        }
    }
    removePlugin(e) {
        return c(this, null, function*() {
            let t = e.getName();
            if (!this.pluginsMap.get(t)) {
                o.w(this.TAG, `plugin - ${t} not found to remove.`);
                return;
            }
            o.i(this.TAG, `removing plugin ${t}`), this.removePluginEntry(t), this.pluginsMap.size === 0 && (o.i(this.TAG, "No plugins left, stopping plugins loop"), yield this.stopPluginsLoop()), e.stop(), this.analytics.removed(t);
        });
    }
    removePluginEntry(e) {
        this.pluginsMap.delete(e), this.pluginNumFramesToSkip[e] && delete this.pluginNumFramesToSkip[e], this.pluginNumFramesSkipped[e] && delete this.pluginNumFramesSkipped[e];
    }
    waitForRestart() {
        return c(this, null, function*() {
            if (!(!this.pluginsLoopRunning || this.pluginsLoopState === "running")) for(; this.pluginsLoopState === "paused";)yield $(100);
        });
    }
    cleanup() {
        return c(this, null, function*() {
            var e;
            for (let t of this.pluginsMap.values())yield this.removePlugin(t);
            (e = this.outputTrack) == null || e.stop();
        });
    }
    initElementsAndStream(e) {
        this.inputCanvas || (this.inputCanvas = document.createElement("canvas")), this.outputCanvas = document.createElement("canvas"), this.inputVideo || (this.inputVideo = document.createElement("video")), this.inputCanvas.getContext("2d"), this.outputCanvas.getContext(e || $e["2D"]);
        let t = this.outputCanvas.captureStream();
        this.outputTrack = t.getVideoTracks()[0];
    }
    startPluginsLoop(e) {
        return c(this, null, function*() {
            if (!this.pluginsLoopRunning) {
                this.initElementsAndStream(e), this.pluginsLoopRunning = !0;
                try {
                    yield this.hmsTrack.setProcessedTrack(this.outputTrack);
                } catch (t) {
                    throw this.pluginsLoopRunning = !1, o.e(this.TAG, "error in setting processed track", t), t;
                }
                this.pluginsLoop().then(()=>{
                    o.d(this.TAG, "processLoop stopped");
                });
            }
        });
    }
    stopPluginsLoop() {
        return c(this, null, function*() {
            var e;
            this.pluginsLoopRunning = !1, yield this.hmsTrack.setProcessedTrack(void 0), this.resetCanvases(), (e = this.outputTrack) == null || e.stop(), this.inputVideo && (this.inputVideo.srcObject = null, this.inputVideo = void 0);
        });
    }
    pluginsLoop() {
        return c(this, null, function*() {
            for(; this.pluginsLoopRunning;){
                let e = this.hmsTrack.getMediaTrackSettings().frameRate || Gi, t = Math.floor(1e3 / e);
                if (!this.hmsTrack.enabled || this.hmsTrack.nativeTrack.readyState === "ended") {
                    this.pluginsLoopState === "running" && this.resetCanvases(), this.pluginsLoopState = "paused", yield $(t);
                    continue;
                }
                let i = 0;
                try {
                    yield this.analytics.preProcessWithTime(()=>c(this, null, function*() {
                            return yield this.doPreProcessing();
                        }));
                    let r = Date.now();
                    yield this.processFramesThroughPlugins(), i = Math.floor(Date.now() - r), i > t && (i = t);
                } catch (r) {
                    o.e(this.TAG, "error in plugins loop", r);
                }
                this.pluginsLoopState = "running", yield $(t - i);
            }
        });
    }
    doPreProcessing() {
        return c(this, null, function*() {
            yield this.addTrackToVideo(), yield this.updateInputCanvas();
        });
    }
    processFramesThroughPlugins() {
        return c(this, null, function*() {
            this.canvases[0] = this.inputCanvas;
            let e = 0;
            for (let t of this.pluginsMap.values()){
                let i = t.getName();
                if (!!t) {
                    try {
                        let r = this.checkIfSkipRequired(i);
                        if (t.getPluginType() === Le.TRANSFORM) {
                            let s = (n, d)=>c(this, null, function*() {
                                    try {
                                        yield t.processVideoFrame(n, d, r);
                                    } catch (l) {
                                        o.e(this.TAG, `error in processing plugin ${i}`, l);
                                    }
                                });
                            if (r) e === this.pluginsMap.size - 1 ? yield s(this.canvases[e], this.outputCanvas) : yield s(this.canvases[e], this.canvases[e + 1]);
                            else {
                                let n = this.canvases[e], d = this.canvases[e + 1];
                                e === this.pluginsMap.size - 1 ? yield this.analytics.processWithTime(i, ()=>c(this, null, function*() {
                                        return s(n, this.outputCanvas);
                                    })) : yield this.analytics.processWithTime(i, ()=>c(this, null, function*() {
                                        return s(n, d);
                                    }));
                            }
                        } else t.getPluginType() === Le.ANALYZE && !r && (yield this.analytics.processWithTime(i, ()=>c(this, null, function*() {
                                return yield t.processVideoFrame(this.inputCanvas);
                            })));
                    } catch (r) {
                        o.e(this.TAG, `error in processing plugin ${i}`, r), yield this.removePlugin(t);
                    }
                    e++;
                }
            }
        });
    }
    addTrackToVideo() {
        return c(this, null, function*() {
            var t;
            if (!this.inputVideo) return;
            let e = this.inputVideo.srcObject;
            e !== null && e instanceof MediaStream && ((t = e.getVideoTracks()[0]) == null ? void 0 : t.id) === this.hmsTrack.nativeTrack.id || (this.inputVideo.pause(), this.inputVideo.srcObject = new MediaStream([
                this.hmsTrack.nativeTrack
            ]), this.inputVideo.muted = !0, this.inputVideo.playsInline = !0, yield this.inputVideo.play());
        });
    }
    updateInputCanvas() {
        return c(this, null, function*() {
            if (!this.inputCanvas || !this.inputVideo) return;
            let { width: e = Or , height: t = xr  } = this.hmsTrack.getMediaTrackSettings();
            this.inputCanvas.height !== t && (this.inputCanvas.height = t), this.inputCanvas.width !== e && (this.inputCanvas.width = e), this.inputCanvas.getContext("2d").drawImage(this.inputVideo, 0, 0, e, t);
        });
    }
    resetCanvases() {
        if (!this.outputCanvas || !this.inputCanvas) return;
        let e = this.inputCanvas.getContext("2d");
        e && (e.fillStyle = "rgb(0, 0, 0)", e.fillRect(0, 0, this.outputCanvas.width, this.outputCanvas.height)), this.canvases = [];
    }
    checkIfSkipRequired(e) {
        let t = !1;
        return this.pluginNumFramesSkipped[e] < this.pluginNumFramesToSkip[e] ? (this.pluginNumFramesSkipped[e]++, t = !0) : (t = !1, this.pluginNumFramesSkipped[e] = 0), t;
    }
};
function Vi(a, e) {
    return function(i) {
        return i in a && a[i] !== e[i];
    };
}
var ee = class extends Ve {
    constructor(e, t, i, r, s = new Y().build()){
        super(e, t, i);
        this.eventBus = r;
        this._layerDefinitions = [];
        this.TAG = "[HMSLocalVideoTrack]";
        this.isCurrentTab = !1;
        this.isPublished = !1;
        this.buildNewSettings = (e)=>{
            let { width: t , height: i , codec: r , maxFramerate: s , maxBitrate: n , deviceId: d , advanced: l , facingMode: u  } = S(S({}, this.settings), e);
            return new Re(t, i, r, s, d, l, n, u);
        };
        this.handleSettingsChange = (e)=>c(this, null, function*() {
                let t = this.stream, i = Vi(e, this.settings);
                i("maxBitrate") && e.maxBitrate && (yield t.setMaxBitrateAndFramerate(this)), (i("width") || i("height") || i("advanced")) && (yield this.nativeTrack.applyConstraints(e.toConstraints()));
            });
        this.handleDeviceChange = (e, t = !1)=>c(this, null, function*() {
                if (Vi(e, this.settings)("deviceId") && this.source === "regular") {
                    if (this.enabled) {
                        delete e.facingMode;
                        let r = yield this.replaceTrackWith(e);
                        yield this.replaceSender(r, this.enabled), this.nativeTrack = r, this.videoHandler.updateSinks();
                    }
                    t || Q.updateSelection("videoInput", {
                        deviceId: e.deviceId,
                        groupId: this.nativeTrack.getSettings().groupId
                    });
                }
            });
        this.removeOrReplaceProcessedTrack = (e)=>c(this, null, function*() {
                e ? e !== this.processedTrack && (this.processedTrack ? yield this.stream.replaceSenderTrack(this.processedTrack, e) : yield this.stream.replaceSenderTrack(this.nativeTrack, e), this.processedTrack = e) : (this.processedTrack && (yield this.stream.replaceSenderTrack(this.processedTrack, this.nativeTrack)), this.processedTrack = void 0);
            });
        e.tracks.push(this), this.setVideoHandler(new Be(this)), this.settings = s, s.deviceId !== t.getSettings().deviceId && t.enabled && (this.settings = this.buildNewSettings({
            deviceId: t.getSettings().deviceId
        })), this.pluginsManager = new nt(this, r), this.setFirstTrackId(this.trackId);
    }
    setSimulcastDefinitons(e) {
        this._layerDefinitions = e;
    }
    getSimulcastDefinitions() {
        return this._layerDefinitions;
    }
    setEnabled(e) {
        var t = (i)=>super[i];
        return c(this, null, function*() {
            var r;
            if (e !== this.enabled) {
                if (t("setEnabled").call(this, e), this.source === "regular") {
                    let s;
                    e ? s = yield this.replaceTrackWith(this.settings) : s = yield this.replaceTrackWithBlank(), yield this.replaceSender(s, e), (r = this.nativeTrack) == null || r.stop(), this.nativeTrack = s, e && (yield this.pluginsManager.waitForRestart(), this.settings = this.buildNewSettings({
                        deviceId: s.getSettings().deviceId
                    })), this.videoHandler.updateSinks();
                }
                this.eventBus.localVideoEnabled.publish({
                    enabled: e,
                    track: this
                });
            }
        });
    }
    isPublishedTrackId(e) {
        return this.publishedTrackId === e;
    }
    addSink(e) {
        this.addSinkInternal(e, this.processedTrack || this.nativeTrack);
    }
    setSettings(e, t = !1) {
        return c(this, null, function*() {
            let i = this.buildNewSettings(e);
            if (yield this.handleDeviceChange(i, t), !this.enabled) {
                this.settings = i;
                return;
            }
            yield this.handleSettingsChange(i), this.settings = i;
        });
    }
    getPlugins() {
        return this.pluginsManager.getPlugins();
    }
    addPlugin(e, t) {
        return c(this, null, function*() {
            return this.pluginsManager.addPlugin(e, t);
        });
    }
    removePlugin(e) {
        return c(this, null, function*() {
            return this.pluginsManager.removePlugin(e);
        });
    }
    validatePlugin(e) {
        return this.pluginsManager.validatePlugin(e);
    }
    cleanup() {
        var e = (t)=>super[t];
        return c(this, null, function*() {
            var i;
            e("cleanup").call(this), this.transceiver = void 0, yield this.pluginsManager.cleanup(), (i = this.processedTrack) == null || i.stop(), this.isPublished = !1;
        });
    }
    cropTo(e) {
        return c(this, null, function*() {
            if (!!e && this.source === "screen") try {
                this.nativeTrack.cropTo && (yield this.nativeTrack.cropTo(e));
            } catch (t) {
                throw o.e(this.TAG, "failed to crop screenshare capture - ", t), g.TracksErrors.GenericTrack(m.TRACK, "failed to crop screenshare capture");
            }
        });
    }
    getCaptureHandle() {
        if (this.nativeTrack.getCaptureHandle) return this.nativeTrack.getCaptureHandle();
    }
    setProcessedTrack(e) {
        return c(this, null, function*() {
            if (!this.nativeTrack.enabled) {
                this.processedTrack = e;
                return;
            }
            yield this.removeOrReplaceProcessedTrack(e), this.videoHandler.updateSinks();
        });
    }
    getTrackIDBeingSent() {
        return this.getTrackBeingSent().id;
    }
    getTrackBeingSent() {
        return this.enabled ? this.processedTrack || this.nativeTrack : this.nativeTrack;
    }
    switchCamera() {
        return c(this, null, function*() {
            var r;
            let e = this.getMediaTrackSettings().facingMode;
            if (!e || this.source !== "regular") {
                o.d(this.TAG, "facingMode not supported");
                return;
            }
            let t = e === be.ENVIRONMENT ? be.USER : be.ENVIRONMENT;
            (r = this.nativeTrack) == null || r.stop();
            let i = yield this.replaceTrackWith(this.buildNewSettings({
                facingMode: t,
                deviceId: void 0
            }));
            yield this.replaceSender(i, this.enabled), this.nativeTrack = i, this.videoHandler.updateSinks(), this.settings = this.buildNewSettings({
                deviceId: this.nativeTrack.getSettings().deviceId,
                facingMode: t
            }), Q.updateSelection("videoInput", {
                deviceId: this.settings.deviceId,
                groupId: this.nativeTrack.getSettings().groupId
            });
        });
    }
    replaceTrackWith(e) {
        return c(this, null, function*() {
            let t = this.nativeTrack;
            t == null || t.stop();
            let i = yield it(e);
            return o.d(this.TAG, "replaceTrack, Previous track stopped", t, "newTrack", i), this.settings.deviceId === "default" && (this.settings = this.buildNewSettings({
                deviceId: this.nativeTrack.getSettings().deviceId
            })), i;
        });
    }
    replaceTrackWithBlank() {
        return c(this, null, function*() {
            let e = this.nativeTrack, t = me.getEmptyVideoTrack(e);
            return e == null || e.stop(), o.d(this.TAG, "replaceTrackWithBlank, Previous track stopped", e, "newTrack", t), t;
        });
    }
    replaceSender(e, t) {
        return c(this, null, function*() {
            let i = this.stream;
            t ? yield i.replaceSenderTrack(this.nativeTrack, this.processedTrack || e) : yield i.replaceSenderTrack(this.processedTrack || this.nativeTrack, e), yield i.replaceStreamTrack(this.nativeTrack, e);
        });
    }
};
var _e = "renegotiation-callback-id", ot = "ion-sfu", ct = 100, We = 5, Ui = 60, Bi = 12e3, $i = 3e3, Wi = 5, De = "SUBSCRIBE_ICE_CONNECTION_CALLBACK_ID", Ki = 6e4, Ft = 5e3, qi = 1e3, ji = !1, Ji = "https://event.100ms.live/v2/client/report", zi = "https://event-nonprod.100ms.live/v2/client/report", Qi = 100, W = {
    DEVICE_CHANGE: "device-change",
    LOCAL_AUDIO_ENABLED: "local-audio-enabled",
    LOCAL_VIDEO_ENABLED: "local-video-enabled",
    STATS_UPDATE: "stats-update",
    RTC_STATS_UPDATE: "rtc-stats-update",
    TRACK_DEGRADED: "track-degraded",
    TRACK_RESTORED: "track-restored",
    TRACK_AUDIO_LEVEL_UPDATE: "track-audio-level-update",
    LOCAL_AUDIO_SILENCE: "local-audio-silence",
    ANALYTICS: "analytics",
    AUDIO_PLUGIN_FAILED: "audio-plugin-failed",
    POLICY_CHANGE: "policy-change",
    LOCAL_ROLE_UPDATE: "local-role-update",
    AUDIO_TRACK_UPDATE: "audio-track-update",
    AUDIO_TRACK_ADDED: "audio-track-added",
    AUDIO_TRACK_REMOVED: "audio-track-removed",
    AUTOPLAY_ERROR: "autoplay-error",
    LEAVE: "leave"
};
var X = class extends Ve {
    constructor(e, t, i){
        super(e, t, i);
        this._degraded = !1;
        this._degradedAt = null;
        this._layerDefinitions = [];
        this.history = new Yi;
        this.preferredLayer = F.HIGH;
        this.setVideoHandler(new Be(this));
    }
    get degraded() {
        return this._degraded;
    }
    get degradedAt() {
        return this._degradedAt;
    }
    setEnabled(e) {
        var t = (i)=>super[i];
        return c(this, null, function*() {
            e !== this.enabled && (t("setEnabled").call(this, e), this.videoHandler.updateSinks());
        });
    }
    setPreferredLayer(e) {
        return c(this, null, function*() {
            if (e === F.NONE) {
                o.w(`layer ${F.NONE} will be ignored`);
                return;
            }
            if (this.preferredLayer = e, !!this.shouldSendVideoLayer(e, "preferLayer")) {
                if (!this.hasSinks()) {
                    o.d(`[Remote Track] ${this.logIdentifier}
        streamId=${this.stream.id} 
        trackId=${this.trackId}
        saving ${e}, source=${this.source}
        Track does not have any sink`);
                    return;
                }
                yield this.requestLayer(e, "preferLayer"), this.pushInHistory(`uiPreferLayer-${e}`);
            }
        });
    }
    getSimulcastLayer() {
        return this.stream.getSimulcastLayer();
    }
    getLayer() {
        return this.stream.getVideoLayer();
    }
    getPreferredLayer() {
        return this.preferredLayer;
    }
    addSink(e) {
        var t = (i)=>super[i];
        return c(this, null, function*() {
            t("addSink").call(this, e), yield this.updateLayer("addSink"), this.pushInHistory("uiSetLayer-high");
        });
    }
    removeSink(e) {
        var t = (i)=>super[i];
        return c(this, null, function*() {
            t("removeSink").call(this, e), yield this.updateLayer("removeSink"), this._degraded = !1, this.pushInHistory("uiSetLayer-none");
        });
    }
    getSimulcastDefinitions() {
        return [
            ...this._layerDefinitions
        ];
    }
    setSimulcastDefinitons(e) {
        this._layerDefinitions = e;
    }
    setLayerFromServer(e) {
        this._degraded = (e.publisher_degraded || e.subscriber_degraded) && e.current_layer === F.NONE, this._degradedAt = this._degraded ? new Date : this._degradedAt;
        let t = e.current_layer;
        return o.d(`[Remote Track] ${this.logIdentifier} 
      streamId=${this.stream.id} 
      trackId=${this.trackId}
      layer update from sfu
      currLayer=${e.current_layer}
      preferredLayer=${e.expected_layer}
      sub_degraded=${e.subscriber_degraded}
      pub_degraded=${e.publisher_degraded}
      isDegraded=${this._degraded}`), this.stream.setVideoLayerLocally(t, this.logIdentifier, "setLayerFromServer"), this.pushInHistory(`sfuLayerUpdate-${t}`), this._degraded;
    }
    setDegradedFromSdk(e) {
        this._degraded = e, this._degradedAt = e ? new Date : this._degradedAt, this.updateLayer("sdkDegradation"), this.pushInHistory(e ? "sdkDegraded-none" : "sdkRecovered-high");
    }
    updateLayer(e) {
        return c(this, null, function*() {
            let t = this.degraded || !this.hasSinks() ? F.NONE : this.preferredLayer;
            !this.shouldSendVideoLayer(t, e) || (yield this.requestLayer(t, e));
        });
    }
    pushInHistory(e) {
        ji && this.history.push({
            name: e,
            layer: this.getLayer(),
            degraded: this.degraded
        });
    }
    requestLayer(e, t) {
        return c(this, null, function*() {
            try {
                let i = yield this.stream.setVideoLayer(e, this.trackId, this.logIdentifier, t);
                return o.d(`[Remote Track] ${this.logIdentifier} 
      streamId=${this.stream.id}
      trackId=${this.trackId}
      Requested layer ${e}, source=${t}`), i;
            } catch (i) {
                throw o.d(`[Remote Track] ${this.logIdentifier} 
      streamId=${this.stream.id}
      trackId=${this.trackId}
      Failed to set layer ${e}, source=${t}
      error=${i.message}`), i;
            }
        });
    }
    shouldSendVideoLayer(e, t) {
        let i = this.getLayer();
        return this.degraded && e === F.NONE ? !0 : i === e ? (o.d(`[Remote Track] ${this.logIdentifier}`, `Not sending update, already on layer ${e}, source=${t}`), !1) : !0;
    }
}, Yi = class {
    constructor(){
        this.history = [];
    }
    push(e) {
        e.time = new Date().toISOString().split("T")[1], this.history.push(e);
    }
};
var ke = class extends Ce {
    constructor(){
        super(...arguments);
        this.TAG = "[HMSLocalStream]";
        this.connection = null;
    }
    setConnection(e) {
        this.connection = e;
    }
    addTransceiver(e, t) {
        let i = this.connection.addTransceiver(e.getTrackBeingSent(), {
            streams: [
                this.nativeStream
            ],
            direction: "sendonly",
            sendEncodings: this.getTrackEncodings(e, t)
        });
        return this.setPreferredCodec(i, e.nativeTrack.kind), e.transceiver = i, i;
    }
    setMaxBitrateAndFramerate(e) {
        return c(this, null, function*() {
            var t;
            yield (t = this.connection) == null ? void 0 : t.setMaxBitrateAndFramerate(e);
        });
    }
    setPreferredCodec(e, t) {}
    replaceStreamTrack(e, t) {
        this.nativeStream.addTrack(t), this.nativeStream.removeTrack(e), o.d(this.TAG, "Native stream tracks after replace", this.nativeStream.getAudioTracks().map(ue), `prev Track - ${ue(e)}`, `new Track - ${ue(t)}`);
    }
    replaceSenderTrack(e, t) {
        return c(this, null, function*() {
            if (!this.connection || this.connection.connectionState === "closed") {
                o.d(this.TAG, "publish connection is not initialised or closed");
                return;
            }
            let i = this.connection.getSenders().find((r)=>r.track && r.track.id === e.id);
            if (i === void 0) {
                o.w(this.TAG, `No sender found for trackId=${e.id}`);
                return;
            }
            yield i.replaceTrack(t);
        });
    }
    removeSender(e) {
        var r, s;
        if (!this.connection || this.connection.connectionState === "closed") {
            o.d(this.TAG, "publish connection is not initialised or closed");
            return;
        }
        let t = (r = e.transceiver) == null ? void 0 : r.sender;
        if (!t) {
            o.e(this.TAG, `No sender found for trackId=${e.trackId}`);
            return;
        }
        (s = this.connection) == null || s.removeTrack(t);
        let i = this.tracks.indexOf(e);
        i !== -1 ? this.tracks.splice(i, 1) : o.e(this.TAG, `Cannot find ${e.trackId} in locally stored tracks`);
    }
    getTrackEncodings(e, t) {
        let i = [];
        if (e instanceof ee) {
            if (t.length > 0) o.v(this.TAG, "Simulcast enabled with layers", t), i.push(...t);
            else {
                let r = {
                    active: this.nativeStream.active
                };
                e.settings.maxBitrate && !Se && (r.maxBitrate = e.settings.maxBitrate), i.push(r);
            }
        }
        return i;
    }
};
var Gt = {
    isAudioMuted: !1,
    isVideoMuted: !1,
    audioInputDeviceId: "default",
    audioOutputDeviceId: "default",
    videoDeviceId: "default"
}, ye, me = class {
    constructor(e, t, i, r, s){
        this.store = e;
        this.observer = t;
        this.deviceManager = i;
        this.eventBus = r;
        this.analyticsTimer = s;
        this.TAG = "[LocalTrackManager]";
        this.setScreenCaptureHandleConfig();
    }
    getTracksToPublish() {
        return c(this, arguments, function*(e = Gt) {
            let t = this.getAVTrackSettings(e);
            if (!t) return [];
            let i = !!t.audio, r = !!t.video, s = [], { videoTrack: n , audioTrack: d  } = yield this.updateCurrentLocalTrackSettings(t), l = (n == null ? void 0 : n.stream) || (d == null ? void 0 : d.stream), u = Boolean(n && this.store.getTrackById(n.trackId)), h = Boolean(d && this.store.getTrackById(d.trackId));
            if (u && h) return [];
            let p = {
                audio: i && !d && (e.isAudioMuted ? "empty" : !0),
                video: r && !n && (e.isVideoMuted ? "empty" : !0)
            };
            p.audio && this.analyticsTimer.start(M.LOCAL_AUDIO_TRACK), p.video && this.analyticsTimer.start(M.LOCAL_VIDEO_TRACK);
            try {
                o.d(this.TAG, "Init Local Tracks", {
                    fetchTrackOptions: p
                }), s = yield this.getLocalTracks(p, t, l);
            } catch (v) {
                s = yield this.retryGetLocalTracks(v, t, p, l);
            }
            return p.audio && this.analyticsTimer.end(M.LOCAL_AUDIO_TRACK), p.video && this.analyticsTimer.end(M.LOCAL_VIDEO_TRACK), n && r && !u && s.push(n), d && i && !h && s.push(d), s;
        });
    }
    getLocalTracks() {
        return c(this, arguments, function*(e = {
            audio: !0,
            video: !0
        }, t, i) {
            try {
                let r = yield this.getNativeLocalTracks(e, t);
                return this.createHMSLocalTracks(r, t, i);
            } catch (r) {
                throw this.eventBus.analytics.publish(w.publish({
                    devices: this.deviceManager.getDevices(),
                    error: r,
                    settings: t
                })), r;
            }
        });
    }
    getNativeLocalTracks() {
        return c(this, arguments, function*(e = {
            audio: !1,
            video: !1
        }, t) {
            let i = new Fe(e.video === !0 ? t.video : null, e.audio === !0 ? t.audio : null, t.simulcast), r = [];
            return (i.audio || i.video) && r.push(...yield this.getAVTracks(i)), r.push(...this.getEmptyTracks(e)), r;
        });
    }
    getLocalScreen(e) {
        return c(this, null, function*() {
            var p;
            let t = yield this.getOrDefaultScreenshareConfig(e), i = this.getScreenshareSettings(t.videoOnly), r = {
                video: D(S({}, i == null ? void 0 : i.video.toConstraints(!0)), {
                    displaySurface: t.displaySurface
                }),
                preferCurrentTab: t.preferCurrentTab,
                selfBrowserSurface: t.selfBrowserSurface,
                surfaceSwitching: t.surfaceSwitching,
                systemAudio: t.systemAudio
            };
            if (i == null ? void 0 : i.audio) {
                let v = (p = i == null ? void 0 : i.audio) == null ? void 0 : p.toConstraints();
                delete v.advanced, r.audio = D(S({}, v), {
                    autoGainControl: !1,
                    noiseSuppression: !1,
                    googAutoGainControl: !1,
                    echoCancellation: !1
                });
            }
            let s;
            try {
                o.d("retrieving screenshare with ", {
                    config: t
                }, {
                    constraints: r
                }), s = yield navigator.mediaDevices.getDisplayMedia(r);
            } catch (v) {
                o.w(this.TAG, "error in getting screenshare - ", v);
                let f = te(v, J.SCREEN);
                throw this.eventBus.analytics.publish(w.publish({
                    error: f,
                    devices: this.deviceManager.getDevices(),
                    settings: new Fe(i == null ? void 0 : i.video, i == null ? void 0 : i.audio, !1)
                })), f;
            }
            let n = [], d = new ke(s), l = s.getVideoTracks()[0], u = new ee(d, l, "screen", this.eventBus, i == null ? void 0 : i.video);
            u.setSimulcastDefinitons(this.store.getSimulcastDefinitionsForPeer(this.store.getLocalPeer(), "screen"));
            try {
                let v = this.validateCurrentTabCapture(u, t.forceCurrentTab);
                u.isCurrentTab = v, yield u.cropTo(t.cropTarget);
            } catch (v) {
                throw s.getTracks().forEach((f)=>f.stop()), v;
            }
            n.push(u);
            let h = s.getAudioTracks()[0];
            if (h) {
                let v = new He(d, h, "screen", this.eventBus, i == null ? void 0 : i.audio);
                n.push(v);
            }
            return o.v(this.TAG, "getLocalScreen", n), n;
        });
    }
    setScreenCaptureHandleConfig(e) {
        var t;
        !((t = navigator.mediaDevices) == null ? void 0 : t.setCaptureHandleConfig) || this.isInIframe() || (e = e || {}, Object.assign(e, {
            handle: (0, _uuid.v4)(),
            exposeOrigin: !1,
            permittedOrigins: [
                window.location.origin
            ]
        }), o.d("setting capture handle - ", e.handle), navigator.mediaDevices.setCaptureHandleConfig(e), this.captureHandleIdentifier = e.handle);
    }
    validateCurrentTabCapture(e, t) {
        let i = e.getCaptureHandle(), r = !!(this.captureHandleIdentifier && (i == null ? void 0 : i.handle) === this.captureHandleIdentifier);
        if (t && !r) throw o.e(this.TAG, "current tab was not shared with forceCurrentTab as true"), g.TracksErrors.CurrentTabNotShared();
        return r;
    }
    requestPermissions() {
        return c(this, null, function*() {
            try {
                (yield navigator.mediaDevices.getUserMedia({
                    audio: !0,
                    video: !0
                })).getTracks().forEach((t)=>t.stop());
            } catch (e) {
                o.e(this.TAG, e);
            }
        });
    }
    static getEmptyVideoTrack(e) {
        var l, u, h;
        let t = ((l = e == null ? void 0 : e.getSettings()) == null ? void 0 : l.width) || 320, i = ((u = e == null ? void 0 : e.getSettings()) == null ? void 0 : u.height) || 240, r = 10;
        ye || (ye = document.createElement("canvas"), ye.width = t, ye.height = i, (h = ye.getContext("2d", {
            willReadFrequently: !0
        })) == null || h.fillRect(0, 0, t, i));
        let n = ye.captureStream(r).getVideoTracks()[0], d = setInterval(()=>{
            if (n.readyState === "ended") {
                clearInterval(d);
                return;
            }
            let p = ye.getContext("2d");
            if (p) {
                let f = p.getImageData(0, 0, 1, 1).data[0] === 0 ? 1 : 0;
                p.fillStyle = `rgb(${f}, 0, 0)`, p.fillRect(0, 0, 1, 1);
            }
        }, 1e3 / r);
        return n.onended = ()=>{
            clearInterval(d);
        }, n.enabled = !1, n;
    }
    static getEmptyAudioTrack() {
        let e = pe.getAudioContext(), t = e.createOscillator(), i = e.createMediaStreamDestination();
        t.connect(i), t.start();
        let r = i.stream.getAudioTracks()[0];
        return r.enabled = !1, r;
    }
    getAVTracks(e) {
        return c(this, null, function*() {
            try {
                let t = yield navigator.mediaDevices.getUserMedia({
                    audio: e.audio ? e.audio.toConstraints() : !1,
                    video: e.video ? e.video.toConstraints() : !1
                });
                return t.getVideoTracks().concat(t.getAudioTracks());
            } catch (t) {
                yield this.deviceManager.init();
                let i = !!(!this.deviceManager.hasWebcamPermission && e.video), r = !!(!this.deviceManager.hasMicrophonePermission && e.audio), s = this.getErrorType(i, r);
                throw te(t, s);
            }
        });
    }
    getAVTrackSettings(e) {
        let t = this.getAudioSettings(e), i = this.getVideoSettings(e);
        return !t && !i ? null : new Ze().video(i).audio(t).build();
    }
    isInIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return !0;
        }
    }
    retryGetLocalTracks(e, t, i, r) {
        return c(this, null, function*() {
            if (e instanceof T && e.action === m.TRACK) {
                this.observer.onFailure(e);
                let s = e.code === E.TracksErrors.OVER_CONSTRAINED, n = e.message.includes("audio"), d = e.message.includes("video");
                if (s) {
                    let l = new Ze().video(new Re).audio(new Ie).build();
                    o.w(this.TAG, "Fetch AV Tracks failed with overconstrained error", {
                        fetchTrackOptions: i
                    }, {
                        error: e
                    });
                    try {
                        return yield this.getLocalTracks(i, l, r);
                    } catch (u) {
                        let h = u instanceof T ? u.nativeError : u, p = u;
                        if ((h == null ? void 0 : h.name) === "OverconstrainedError") {
                            let v = g.TracksErrors.GenericTrack(m.TRACK, "Overconstrained error after dropping all constraints");
                            v.addNativeError(h), p = v;
                        }
                        return yield this.retryGetLocalTracks(p, t, i, r);
                    }
                }
                i.audio = n ? "empty" : i.audio, i.video = d ? "empty" : i.video, o.w(this.TAG, "Fetch AV Tracks failed", {
                    fetchTrackOptions: i
                }, e);
                try {
                    return yield this.getLocalTracks(i, t, r);
                } catch (l) {
                    return o.w(this.TAG, "Fetch empty tacks failed", l), i.audio = i.audio && "empty", i.video = i.video && "empty", this.observer.onFailure(l), yield this.getLocalTracks(i, t, r);
                }
            } else return o.w(this.TAG, "Fetch AV Tracks failed - unknown exception", e), this.observer.onFailure(e), [];
        });
    }
    getErrorType(e, t) {
        return e && t ? J.AV : e ? J.VIDEO : t ? J.AUDIO : J.UNKNOWN;
    }
    getEmptyTracks(e) {
        let t = [];
        return e.audio === "empty" && t.push(me.getEmptyAudioTrack()), e.video === "empty" && t.push(me.getEmptyVideoTrack()), t;
    }
    updateCurrentLocalTrackSettings(e) {
        return c(this, null, function*() {
            let t = this.store.getLocalPeerTracks(), i = t.find((d)=>d.type === x.VIDEO && d.source === "regular"), r = t.find((d)=>d.type === x.AUDIO && d.source === "regular"), s = t.find((d)=>d.type === x.VIDEO && d.source === "screen");
            (e == null ? void 0 : e.video) && (yield i == null ? void 0 : i.setSettings(e.video)), (e == null ? void 0 : e.audio) && (yield r == null ? void 0 : r.setSettings(e.audio));
            let n = this.getScreenshareSettings(!0);
            return (n == null ? void 0 : n.video) && (yield s == null ? void 0 : s.setSettings(n == null ? void 0 : n.video)), {
                videoTrack: i,
                audioTrack: r
            };
        });
    }
    getAudioSettings(e) {
        var n;
        let t = this.store.getPublishParams();
        if (!t || !((n = t.allowed) == null ? void 0 : n.includes("audio"))) return null;
        let i = this.store.getLocalPeer(), r = i == null ? void 0 : i.audioTrack, s = (r == null ? void 0 : r.settings.deviceId) || e.audioInputDeviceId;
        return new Z().codec(t.audio.codec).maxBitrate(t.audio.bitRate).deviceId(s || Gt.audioInputDeviceId).build();
    }
    getVideoSettings(e) {
        var d;
        let t = this.store.getPublishParams();
        if (!t || !((d = t.allowed) == null ? void 0 : d.includes("video"))) return null;
        let i = this.store.getLocalPeer(), r = i == null ? void 0 : i.videoTrack, s = (r == null ? void 0 : r.settings.deviceId) || e.videoDeviceId, n = t.video;
        return new Y().codec(n.codec).maxBitrate(n.bitRate).maxFramerate(n.frameRate).setWidth(n.width).setHeight(n.height).deviceId(s || Gt.videoDeviceId).build();
    }
    getScreenshareSettings(e = !1) {
        var r;
        let t = this.store.getPublishParams();
        if (!t || !((r = t.allowed) == null ? void 0 : r.includes("screen"))) return null;
        let i = t.screen;
        return {
            video: new Y().maxBitrate(i.bitRate, !1).codec(i.codec).maxFramerate(i.frameRate).setWidth(i.width).setHeight(i.height).build(),
            audio: e ? void 0 : new Z().build()
        };
    }
    getOrDefaultScreenshareConfig(e) {
        return c(this, null, function*() {
            var i;
            let t = Object.assign({
                videoOnly: !1,
                audioOnly: !1,
                forceCurrentTab: !1,
                preferCurrentTab: !1,
                selfBrowserSurface: "exclude",
                surfaceSwitching: "include",
                systemAudio: "exclude",
                displaySurface: "monitor"
            }, e || {});
            return t.forceCurrentTab && (t.videoOnly = !0, t.preferCurrentTab = !0, t.selfBrowserSurface = "include", t.surfaceSwitching = "exclude"), t.preferCurrentTab && (t.selfBrowserSurface = "include", t.displaySurface = void 0), t.cropElement && ((i = window.CropTarget) == null ? void 0 : i.fromElement) && (t.cropTarget = yield window.CropTarget.fromElement(t.cropElement)), t;
        });
    }
    createHMSLocalTracks(e, t, i) {
        let r = e.find((d)=>d.kind === "video"), s = e.find((d)=>d.kind === "audio");
        i ? e.forEach((d)=>i == null ? void 0 : i.nativeStream.addTrack(d)) : i = new ke(new MediaStream(e));
        let n = [];
        if (s && (t == null ? void 0 : t.audio)) {
            let d = new He(i, s, "regular", this.eventBus, t.audio);
            n.push(d);
        }
        if (r && (t == null ? void 0 : t.video)) {
            let d = new ee(i, r, "regular", this.eventBus, t.video);
            d.setSimulcastDefinitons(this.store.getSimulcastDefinitionsForPeer(this.store.getLocalPeer(), "regular")), n.push(d);
        }
        return n;
    }
};
var Vt = class {
    constructor(e, t){
        this.eventBus = e;
        this.listener = t;
        this.TAG = "[NetworkTestManager]";
        this.controller = new AbortController;
        this.start = (e)=>c(this, null, function*() {
                var u;
                if (!e) return;
                let { url: t , timeout: i , scoreMap: r  } = e, s = this.controller.signal, n = Date.now(), d = 0, l = $(i).then(()=>{
                    this.controller.abort();
                });
                try {
                    let p = (u = (yield fetch(`${t}?${Date.now()}`, {
                        signal: s
                    })).body) == null ? void 0 : u.getReader();
                    if (!p) throw Error("unable to process request");
                    let v = ()=>c(this, null, function*() {
                            if (!!p) try {
                                let f = !1;
                                for(; !f;){
                                    let { value: H , done: j  } = yield p.read();
                                    f = j, H && (d += H.byteLength, this.sendScore({
                                        scoreMap: r,
                                        downloadedSize: d,
                                        startTime: n
                                    }));
                                }
                            } catch (f) {
                                f.name !== "AbortError" && o.d(this.TAG, f);
                            }
                        });
                    return Promise.race([
                        v(),
                        l
                    ]).then(()=>{
                        this.sendScore({
                            scoreMap: r,
                            downloadedSize: d,
                            startTime: n,
                            finished: !0
                        });
                    }).catch((f)=>{
                        o.e(this.TAG, f), this.updateScoreToListener(0), this.eventBus.analytics.publish(w.previewNetworkQuality({
                            error: f.message
                        }));
                    });
                } catch (h) {
                    h.name !== "AbortError" ? (o.d(this.TAG, h), this.updateScoreToListener(0), this.eventBus.analytics.publish(w.previewNetworkQuality({
                        error: h.message
                    }))) : o.d(this.TAG, h);
                }
            });
        this.stop = ()=>{
            this.controller.signal.aborted || this.controller.abort();
        };
        this.sendScore = ({ scoreMap: e , downloadedSize: t , startTime: i , finished: r = !1  })=>{
            let s = (Date.now() - i) / 1e3, d = t / 1024 / s * 8, l = -1;
            for(let u in e){
                let h = e[u];
                d >= h.low && (!h.high || d <= h.high) && (l = Number(u));
            }
            this.updateScoreToListener(l), r && this.eventBus.analytics.publish(w.previewNetworkQuality({
                score: l,
                downLink: d.toFixed(2)
            }));
        };
    }
    updateScoreToListener(e) {
        var t, i;
        e !== this.score && (this.score = e, (i = (t = this.listener) == null ? void 0 : t.onNetworkQuality) == null || i.call(t, e));
    }
};
var dt = class {
    constructor(e, t, i, r, s){
        this.store = e;
        this.transport = t;
        this.publish = i;
        this.removeAuxiliaryTrack = r;
        this.listener = s;
        this.handleLocalPeerRoleUpdate = (i)=>c(this, [
                i
            ], function*({ oldRole: e , newRole: t  }) {
                var s;
                let r = this.store.getLocalPeer();
                !r || (yield this.diffRolesAndPublishTracks({
                    oldRole: e,
                    newRole: t
                }), (s = this.listener) == null || s.onPeerUpdate(z.ROLE_UPDATED, r));
            });
        this.diffRolesAndPublishTracks = (i)=>c(this, [
                i
            ], function*({ oldRole: e , newRole: t  }) {
                var f, H, j, ge, C, gi, vi;
                let r = new Set(e.publishParams.allowed), s = new Set(t.publishParams.allowed), n = this.removeTrack(r, s, "video"), d = this.removeTrack(r, s, "audio"), l = this.removeTrack(r, s, "screen"), u = this.hasSimulcastDifference((f = e.publishParams.simulcast) == null ? void 0 : f.video, (H = t.publishParams.simulcast) == null ? void 0 : H.video), h = this.hasSimulcastDifference((j = e.publishParams.simulcast) == null ? void 0 : j.screen, (ge = t.publishParams.simulcast) == null ? void 0 : ge.screen), p = (gi = (C = this.store.getLocalPeer()) == null ? void 0 : C.videoTrack) == null ? void 0 : gi.enabled;
                yield this.removeAudioTrack(d), yield this.removeVideoTracks(n || u), yield this.removeScreenTracks(l || h);
                let v = ((vi = this.store.getConfig()) == null ? void 0 : vi.settings) || {
                    isAudioMuted: !0,
                    isVideoMuted: !0,
                    audioInputDeviceId: "default",
                    videoDeviceId: "default",
                    audioOutputDeviceId: "default"
                };
                u && (v.isVideoMuted = !p), yield this.publish(v);
            });
    }
    removeVideoTracks(e) {
        return c(this, null, function*() {
            var i;
            if (!e) return;
            let t = this.store.getLocalPeer();
            (t == null ? void 0 : t.videoTrack) && (t.videoTrack.isPublished ? yield this.transport.unpublish([
                t.videoTrack
            ]) : yield t.videoTrack.cleanup(), (i = this.listener) == null || i.onTrackUpdate(N.TRACK_REMOVED, t.videoTrack, t), t.videoTrack = void 0), yield this.removeAuxTracks((r)=>r.source !== "screen" && r.type === "video");
        });
    }
    removeAudioTrack(e) {
        return c(this, null, function*() {
            var i;
            if (!e) return;
            let t = this.store.getLocalPeer();
            (t == null ? void 0 : t.audioTrack) && (t.audioTrack.isPublished ? yield this.transport.unpublish([
                t.audioTrack
            ]) : yield t.audioTrack.cleanup(), (i = this.listener) == null || i.onTrackUpdate(N.TRACK_REMOVED, t.audioTrack, t), t.audioTrack = void 0), yield this.removeAuxTracks((r)=>r.source !== "screen" && r.type === "audio");
        });
    }
    removeScreenTracks(e) {
        return c(this, null, function*() {
            !e || (yield this.removeAuxTracks((t)=>t.source === "screen"));
        });
    }
    removeAuxTracks(e) {
        return c(this, null, function*() {
            let t = this.store.getLocalPeer();
            if (t == null ? void 0 : t.auxiliaryTracks) {
                let i = [
                    ...t.auxiliaryTracks
                ];
                for (let r of i)e(r) && (yield this.removeAuxiliaryTrack(r.trackId));
            }
        });
    }
    removeTrack(e, t, i) {
        return e.has(i) && !t.has(i);
    }
    hasSimulcastDifference(e, t) {
        var i, r, s;
        return !e && !t ? !1 : ((i = e == null ? void 0 : e.layers) == null ? void 0 : i.length) !== ((r = t == null ? void 0 : t.layers) == null ? void 0 : r.length) ? !0 : !!((s = e == null ? void 0 : e.layers) == null ? void 0 : s.some((n)=>{
            var l;
            let d = (l = t == null ? void 0 : t.layers) == null ? void 0 : l.find((u)=>u.rid === n.rid);
            return (d == null ? void 0 : d.maxBitrate) !== n.maxBitrate || (d == null ? void 0 : d.maxFramerate) !== n.maxFramerate;
        }));
    }
};
var Xi = class {
    constructor(){
        this.TAG = "[HTTPAnalyticsTransport]";
        this.failedEvents = new ie("client-events");
        this.isConnected = !0;
        this.env = null;
        this.websocketURL = "";
    }
    setEnv(e) {
        this.env = e, this.flushFailedEvents();
    }
    setWebsocketEndpoint(e) {
        this.websocketURL = e;
    }
    sendEvent(e) {
        if (!this.env || !this.websocketURL) {
            this.addEventToStorage(e);
            return;
        }
        let t = {
            event: e.name,
            payload: e.properties,
            event_id: String(e.timestamp),
            peer: e.metadata.peer,
            timestamp: e.timestamp,
            device_id: e.device_id,
            cluster: {
                websocket_url: this.websocketURL
            }
        }, i = this.env === q.PROD ? Ji : zi;
        fetch(i, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${e.metadata.token}`,
                user_agent_v2: e.metadata.userAgent
            },
            body: JSON.stringify(t)
        }).then((r)=>{
            if (r.status === 401) {
                this.removeFromStorage(e);
                return;
            }
            if (r.status !== 200) throw Error(r.statusText);
            this.removeFromStorage(e);
        }).catch((r)=>{
            o.v(this.TAG, "Failed to send event", r, e), this.addEventToStorage(e);
        });
    }
    flushFailedEvents() {
        let e = this.failedEvents.get();
        e == null || e.forEach((t)=>this.sendEvent(t));
    }
    addEventToStorage(e) {
        let t = this.failedEvents.get() || [];
        t.find((i)=>i.timestamp === e.timestamp) || (t.length === Qi && t.shift(), t.push(e), this.failedEvents.set(t));
    }
    removeFromStorage(e) {
        let t = this.failedEvents.get() || [], i = t.findIndex((r)=>r.timestamp === e.timestamp);
        i > -1 && (t.splice(i, 1), this.failedEvents.set(t));
    }
}, ae = new Xi;
var lt = class {
    constructor(){
        this.knownRoles = {};
        this.peers = {};
        this.tracks = new Map;
        this.peerTrackStates = {};
        this.speakers = [];
        this.roleDetailsArrived = !1;
        this.env = q.PROD;
        this.simulcastEnabled = !1;
        this.userAgent = xe(this.env);
    }
    getConfig() {
        return this.config;
    }
    setSimulcastEnabled(e) {
        this.simulcastEnabled = e;
    }
    getEnv() {
        return this.env;
    }
    getPublishParams() {
        let e = this.getLocalPeer(), t = (e == null ? void 0 : e.asRole) || (e == null ? void 0 : e.role);
        return t == null ? void 0 : t.publishParams;
    }
    getRoom() {
        return this.room;
    }
    getPolicyForRole(e) {
        return this.knownRoles[e];
    }
    getKnownRoles() {
        return this.knownRoles;
    }
    getTemplateAppData() {
        return this.templateAppData;
    }
    getLocalPeer() {
        if (this.localPeerId && this.peers[this.localPeerId]) return this.peers[this.localPeerId];
    }
    getRemotePeers() {
        return Object.values(this.peers).filter((e)=>!e.isLocal);
    }
    getPeers() {
        return Object.values(this.peers);
    }
    getPeerById(e) {
        if (this.peers[e]) return this.peers[e];
    }
    getTracksMap() {
        return this.tracks;
    }
    getTracks() {
        return Array.from(this.tracks.values());
    }
    getVideoTracks() {
        return this.getTracks().filter((e)=>e.type === x.VIDEO);
    }
    getRemoteVideoTracks() {
        return this.getTracks().filter((e)=>e instanceof X);
    }
    getAudioTracks() {
        return this.getTracks().filter((e)=>e.type === x.AUDIO);
    }
    getPeerTracks(e) {
        let t = e ? this.peers[e] : void 0, i = [];
        return (t == null ? void 0 : t.videoTrack) && i.push(t.videoTrack), (t == null ? void 0 : t.audioTrack) && i.push(t.audioTrack), i.concat((t == null ? void 0 : t.auxiliaryTracks) || []);
    }
    getLocalPeerTracks() {
        return this.getPeerTracks(this.localPeerId);
    }
    hasTrack(e) {
        return this.tracks.has(e);
    }
    getTrackById(e) {
        var r, s;
        let t = Array.from(this.tracks.values()).find((n)=>n.trackId === e);
        if (t) return t;
        let i = this.getLocalPeer();
        if (i) {
            if ((r = i.audioTrack) == null ? void 0 : r.isPublishedTrackId(e)) return i.audioTrack;
            if ((s = i.videoTrack) == null ? void 0 : s.isPublishedTrackId(e)) return i.videoTrack;
        }
    }
    getPeerByTrackId(e) {
        let t = Array.from(this.tracks.values()).find((i)=>i.trackId === e);
        return (t == null ? void 0 : t.peerId) ? this.peers[t.peerId] : void 0;
    }
    getSpeakers() {
        return this.speakers;
    }
    getSpeakerPeers() {
        return this.speakers.map((e)=>e.peer);
    }
    getUserAgent() {
        return this.userAgent;
    }
    createAndSetUserAgent(e) {
        this.userAgent = xe(this.env, e);
    }
    setRoom(e) {
        this.room = e;
    }
    setKnownRoles(e) {
        var i, r;
        if (this.knownRoles = e.known_roles, this.roleDetailsArrived = !0, this.templateAppData = e.app_data, !this.simulcastEnabled) return;
        let t = (i = this.knownRoles[e.name]) == null ? void 0 : i.publishParams;
        this.videoLayers = this.convertSimulcastLayers((r = t.simulcast) == null ? void 0 : r.video), this.updatePeersPolicy();
    }
    hasRoleDetailsArrived() {
        return this.roleDetailsArrived;
    }
    setConfig(e) {
        var t, i, r;
        if (Q.rememberDevices(Boolean(e.rememberDeviceSelection)), e.rememberDeviceSelection) {
            let s = Q.getSelection();
            s && (e.settings || (e.settings = {}), ((t = s.audioInput) == null ? void 0 : t.deviceId) && (e.settings.audioInputDeviceId = e.settings.audioInputDeviceId || s.audioInput.deviceId), ((i = s.audioOutput) == null ? void 0 : i.deviceId) && (e.settings.audioOutputDeviceId = e.settings.audioOutputDeviceId || s.audioOutput.deviceId), ((r = s.videoInput) == null ? void 0 : r.deviceId) && (e.settings.videoDeviceId = e.settings.videoDeviceId || s.videoInput.deviceId));
        }
        e.autoManageVideo = e.autoManageVideo !== !1, e.autoManageWakeLock = e.autoManageWakeLock !== !1, this.config = e, this.setEnv();
    }
    addPeer(e) {
        this.peers[e.peerId] = e, e.isLocal && (this.localPeerId = e.peerId);
    }
    addTrack(e) {
        this.tracks.set(e, e);
    }
    getTrackState(e) {
        return this.peerTrackStates[e];
    }
    setTrackState(e) {
        this.peerTrackStates[e.trackInfo.track_id] = e;
    }
    removePeer(e) {
        this.localPeerId === e && (this.localPeerId = void 0), delete this.peers[e];
    }
    removeTrack(e) {
        this.tracks.delete(e);
    }
    updateSpeakers(e) {
        this.speakers = e;
    }
    updateAudioOutputVolume(e) {
        return c(this, null, function*() {
            for (let t of this.getAudioTracks())yield t.setVolume(e);
        });
    }
    updateAudioOutputDevice(e) {
        return c(this, null, function*() {
            let t = [];
            this.getAudioTracks().forEach((i)=>{
                i instanceof Ee && t.push(i.setOutputDevice(e));
            }), yield Promise.all(t);
        });
    }
    getSimulcastLayers(e) {
        var t;
        return !this.simulcastEnabled || ![
            "screen",
            "regular"
        ].includes(e) ? [] : e === "screen" ? [] : ((t = this.videoLayers) == null ? void 0 : t.layers) || [];
    }
    convertSimulcastLayers(e) {
        if (!!e) return D(S({}, e), {
            layers: (e.layers || []).map((t)=>D(S({}, t), {
                    maxBitrate: t.maxBitrate * 1e3
                }))
        });
    }
    getSimulcastDefinitionsForPeer(e, t) {
        var d, l, u;
        if ([
            !e || !e.role,
            t === "screen",
            !this.simulcastEnabled
        ].some((h)=>!!h)) return [];
        let i = this.getPolicyForRole(e.role.name).publishParams, r, s, n;
        return t === "regular" ? (r = (d = i.simulcast) == null ? void 0 : d.video, s = i.video.width, n = i.video.height) : t === "screen" && (r = (l = i.simulcast) == null ? void 0 : l.screen, s = i.screen.width, n = i.screen.height), ((u = r == null ? void 0 : r.layers) == null ? void 0 : u.map((h)=>{
            let p = _t[h.rid], v = {
                width: s / h.scaleResolutionDownBy,
                height: n / h.scaleResolutionDownBy
            };
            return {
                layer: p,
                resolution: v
            };
        })) || [];
    }
    getErrorListener() {
        return this.errorListener;
    }
    cleanUp() {
        let e = this.getTracks();
        for (let t of e)t.cleanup();
        this.room = void 0, this.config = void 0, this.localPeerId = void 0, this.roleDetailsArrived = !1;
    }
    setErrorListener(e) {
        this.errorListener = e;
    }
    updatePeersPolicy() {
        this.getPeers().forEach((e)=>{
            var t;
            if (!e.role) {
                (t = this.errorListener) == null || t.onError(g.GenericErrors.InvalidRole(m.VALIDATION, ""));
                return;
            }
            e.role = this.getPolicyForRole(e.role.name);
        });
    }
    setEnv() {
        var r;
        let t = ((r = this.config) == null ? void 0 : r.initEndpoint).split("https://")[1], i = q.PROD;
        t.startsWith(q.PROD) ? i = q.PROD : t.startsWith(q.QA) ? i = q.QA : t.startsWith(q.DEV) && (i = q.DEV), this.env = i, ae.setEnv(i);
    }
};
var Ut = class {
    constructor(){
        this.TAG = "[WakeLockManager]";
        this.wakeLock = null;
        this.acquireLock = ()=>c(this, null, function*() {
                yield this.requestWakeLock(), document == null || document.addEventListener("visibilitychange", this.visibilityHandler);
            });
        this.cleanup = ()=>c(this, null, function*() {
                if (this.wakeLock && !this.wakeLock.released) try {
                    yield this.wakeLock.release(), o.d(this.TAG, "Wake lock released");
                } catch (e) {
                    let t = e;
                    o.e(this.TAG, "Error while releasing wake lock", `name=${t.name}, message=${t.message}`);
                }
                this.wakeLock = null;
            });
        this.visibilityHandler = ()=>c(this, null, function*() {
                (document == null ? void 0 : document.visibilityState) === "visible" && (!this.wakeLock || this.wakeLock.released) && (o.d(this.TAG, "Re-acquiring wake lock due to visibility change"), yield this.requestWakeLock());
            });
        this.requestWakeLock = ()=>c(this, null, function*() {
                try {
                    if (!("wakeLock" in navigator)) {
                        o.d(this.TAG, "Wake lock feature not supported");
                        return;
                    }
                    this.wakeLock = yield navigator.wakeLock.request("screen"), o.d(this.TAG, "Wake lock acquired");
                } catch (e) {
                    let t = e;
                    o.e(this.TAG, "Error acquiring wake lock", `name=${t.name}, message=${t.message}`);
                }
            });
    }
};
var Bt = class {
    constructor(e){
        this.store = e;
        this.bufferSize = ct;
        this.TAG = "[AnalyticsEventsService]";
        this.transport = null;
        this.pendingEvents = [];
        this.level = Qe.INFO;
    }
    setTransport(e) {
        this.transport = e;
    }
    reset() {
        this.transport = null, this.pendingEvents = [];
    }
    queue(e) {
        if (e.level >= this.level && (this.pendingEvents.push(e), this.pendingEvents.length > this.bufferSize)) {
            let t = this.pendingEvents.shift();
            o.d(this.TAG, "Max buffer size reached", "Removed event to accommodate new events", t);
        }
        return this;
    }
    flushFailedClientEvents() {
        ae.flushFailedEvents();
    }
    flush() {
        var e;
        try {
            for(; this.pendingEvents.length > 0;){
                let t = this.pendingEvents.shift();
                t && (t.metadata.peer.peer_id = (e = this.store.getLocalPeer()) == null ? void 0 : e.peerId, t.metadata.userAgent = this.store.getUserAgent(), this.transport && this.transport.transportProvider.isConnected ? this.transport.sendEvent(t) : this.sendClientEventOnHTTP(t));
            }
        } catch (t) {
            o.w(this.TAG, "Flush Failed", t);
        }
    }
    sendClientEventOnHTTP(e) {
        var r, s, n, d;
        let t = this.store.getRoom(), i = this.store.getLocalPeer();
        e.metadata.token = (r = this.store.getConfig()) == null ? void 0 : r.authToken, e.metadata.peer = {
            session_id: t == null ? void 0 : t.sessionId,
            room_id: t == null ? void 0 : t.id,
            room_name: t == null ? void 0 : t.name,
            template_id: t == null ? void 0 : t.templateId,
            joined_at: (s = t == null ? void 0 : t.joinedAt) == null ? void 0 : s.getTime(),
            session_started_at: (n = t == null ? void 0 : t.startedAt) == null ? void 0 : n.getTime(),
            role: (d = i == null ? void 0 : i.role) == null ? void 0 : d.name,
            user_name: i == null ? void 0 : i.name,
            user_data: i == null ? void 0 : i.metadata
        }, ae.sendEvent(e);
    }
};
var Zi = {
    autoplayFailed: void 0,
    initialized: !1,
    autoplayCheckPromise: void 0
}, ut = class {
    constructor(e, t, i){
        this.store = e;
        this.deviceManager = t;
        this.eventBus = i;
        this.autoPausedTracks = new Set;
        this.TAG = "[AudioSinkManager]:";
        this.volume = 100;
        this.state = S({}, Zi);
        this.handleAudioPaused = (e)=>c(this, null, function*() {
                var s;
                let i = (s = e.target.srcObject) == null ? void 0 : s.getAudioTracks()[0];
                if (!(i == null ? void 0 : i.enabled)) return;
                o.d(this.TAG, "Audio Paused", e.target.id);
                let r = this.store.getTrackById(e.target.id);
                r && (ki() ? (yield $(500), this.playAudioFor(r)) : this.autoPausedTracks.add(r));
            });
        this.handleTrackUpdate = ({ track: e  })=>{
            o.d(this.TAG, "Track updated", `${e}`);
        };
        this.handleTrackAdd = (r)=>c(this, [
                r
            ], function*({ track: e , peer: t , callListener: i = !0  }) {
                var n, d;
                let s = document.createElement("audio");
                s.style.display = "none", s.id = e.trackId, s.addEventListener("pause", this.handleAudioPaused), s.onerror = ()=>c(this, null, function*() {
                        var u, h;
                        o.e(this.TAG, "error on audio element", s.error);
                        let l = g.TracksErrors.AudioPlaybackError(`Audio playback error for track - ${e.trackId} code - ${(u = s == null ? void 0 : s.error) == null ? void 0 : u.code}`);
                        this.eventBus.analytics.publish(w.audioPlaybackError(l)), ((h = s == null ? void 0 : s.error) == null ? void 0 : h.code) === MediaError.MEDIA_ERR_DECODE && (this.removeAudioElement(s, e), yield $(500), yield this.handleTrackAdd({
                            track: e,
                            peer: t,
                            callListener: !1
                        }));
                    }), e.setAudioElement(s), e.setVolume(this.volume), o.d(this.TAG, "Audio track added", `${e}`), this.init(), (n = this.audioSink) == null || n.append(s), this.outputDevice && (yield e.setOutputDevice(this.outputDevice)), s.srcObject = new MediaStream([
                    e.nativeTrack
                ]), i && ((d = this.listener) == null || d.onTrackUpdate(N.TRACK_ADDED, e, t)), yield this.handleAutoplayError(e);
            });
        this.handleAutoplayError = (e)=>c(this, null, function*() {
                if (this.state.autoplayFailed === void 0 && (this.state.autoplayCheckPromise || (this.state.autoplayCheckPromise = new Promise((t)=>{
                    this.playAudioFor(e).then(t);
                })), yield this.state.autoplayCheckPromise), this.state.autoplayFailed) {
                    this.autoPausedTracks.add(e);
                    return;
                }
                yield this.playAudioFor(e);
            });
        this.handleAudioDeviceChange = (e)=>{
            e.error || !e.selection || e.type === "video" || this.unpauseAudioTracks();
        };
        this.handleTrackRemove = (e)=>{
            this.autoPausedTracks.delete(e);
            let t = document.getElementById(e.trackId);
            t && this.removeAudioElement(t, e), this.audioSink && this.audioSink.childElementCount === 0 && (this.state.autoplayCheckPromise = void 0, this.state.autoplayFailed = void 0), o.d(this.TAG, "Audio track removed", `${e}`);
        };
        this.unpauseAudioTracks = ()=>c(this, null, function*() {
                let e = [];
                this.autoPausedTracks.forEach((t)=>{
                    e.push(this.playAudioFor(t));
                }), yield Promise.all(e);
            });
        this.removeAudioElement = (e, t)=>{
            e && (o.d(this.TAG, "removing audio element", `${t}`), e.removeEventListener("pause", this.handleAudioPaused), e.srcObject = null, e.remove(), t.setAudioElement(null));
        };
        this.eventBus.audioTrackAdded.subscribe(this.handleTrackAdd), this.eventBus.audioTrackRemoved.subscribe(this.handleTrackRemove), this.eventBus.audioTrackUpdate.subscribe(this.handleTrackUpdate), this.eventBus.deviceChange.subscribe(this.handleAudioDeviceChange);
    }
    setListener(e) {
        this.listener = e;
    }
    get outputDevice() {
        return this.deviceManager.outputDevice;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(e) {
        return c(this, null, function*() {
            yield this.store.updateAudioOutputVolume(e), this.volume = e;
        });
    }
    unblockAutoplay() {
        return c(this, null, function*() {
            this.autoPausedTracks.size > 0 && this.unpauseAudioTracks();
        });
    }
    init(e) {
        if (this.state.initialized || this.audioSink) return;
        this.state.initialized = !0;
        let t = document.createElement("div");
        t.id = `HMS-SDK-audio-sink-${(0, _uuid.v4)()}`, (e && document.getElementById(e) || document.body).append(t), this.audioSink = t, o.d(this.TAG, "audio sink created", this.audioSink);
    }
    cleanUp() {
        var e;
        (e = this.audioSink) == null || e.remove(), this.audioSink = void 0, this.eventBus.audioTrackAdded.unsubscribe(this.handleTrackAdd), this.eventBus.audioTrackRemoved.unsubscribe(this.handleTrackRemove), this.eventBus.audioTrackUpdate.unsubscribe(this.handleTrackUpdate), this.eventBus.deviceChange.unsubscribe(this.handleAudioDeviceChange), this.autoPausedTracks = new Set, this.state = S({}, Zi);
    }
    playAudioFor(e) {
        return c(this, null, function*() {
            let t = e.getAudioElement();
            if (!t) {
                o.w(this.TAG, "No audio element found on track", e.trackId);
                return;
            }
            try {
                yield t.play(), this.state.autoplayFailed = !1, this.autoPausedTracks.delete(e), o.d(this.TAG, "Played track", `${e}`);
            } catch (i) {
                this.autoPausedTracks.add(e), o.e(this.TAG, "Failed to play track", `${e}`, i);
                let r = i;
                if (!this.state.autoplayFailed && r.name === "NotAllowedError") {
                    this.state.autoplayFailed = !0;
                    let s = g.TracksErrors.AutoplayBlocked(m.AUTOPLAY, "");
                    s.addNativeError(r), this.eventBus.analytics.publish(w.autoplayError()), this.eventBus.autoplayError.publish(s);
                }
            }
        });
    }
};
var ht = class {
    constructor(e, t){
        this.store = e;
        this.eventBus = t;
        this.audioInput = [];
        this.audioOutput = [];
        this.videoInput = [];
        this.hasWebcamPermission = !1;
        this.hasMicrophonePermission = !1;
        this.TAG = "[Device Manager]:";
        this.initialized = !1;
        this.videoInputChanged = !1;
        this.audioInputChanged = !1;
        this.updateOutputDevice = (e)=>c(this, null, function*() {
                let t = this.audioOutput.find((i)=>i.deviceId === e);
                return t && (this.outputDevice = t, yield this.store.updateAudioOutputDevice(t), Q.updateSelection("audioOutput", {
                    deviceId: t.deviceId,
                    groupId: t.groupId
                })), t;
            });
        this.getCurrentSelection = ()=>{
            var n, d;
            let e = this.store.getLocalPeer(), t = this.createIdentifier((n = e == null ? void 0 : e.audioTrack) == null ? void 0 : n.getMediaTrackSettings()), i = this.createIdentifier((d = e == null ? void 0 : e.videoTrack) == null ? void 0 : d.getMediaTrackSettings()), r = this.audioInput.find((l)=>this.createIdentifier(l) === t), s = this.videoInput.find((l)=>this.createIdentifier(l) === i);
            return {
                audioInput: r,
                videoInput: s,
                audioOutput: this.outputDevice
            };
        };
        this.computeChange = (e, t)=>e.length !== t.length ? !0 : t.some((i)=>!e.includes(this.createIdentifier(i)));
        this.enumerateDevices = ()=>c(this, null, function*() {
                try {
                    let e = yield navigator.mediaDevices.enumerateDevices(), t = this.videoInput.map(this.createIdentifier), i = this.audioInput.map(this.createIdentifier);
                    this.audioInput = [], this.audioOutput = [], this.videoInput = [], e.forEach((r)=>{
                        r.kind === "audioinput" && r.label ? (this.hasMicrophonePermission = !0, this.audioInput.push(r)) : r.kind === "audiooutput" ? this.audioOutput.push(r) : r.kind === "videoinput" && r.label && (this.hasWebcamPermission = !0, this.videoInput.push(r));
                    }), this.videoInputChanged = this.computeChange(t, this.videoInput), this.audioInputChanged = this.computeChange(i, this.audioInput), Q.setDevices({
                        videoInput: [
                            ...this.videoInput
                        ],
                        audioInput: [
                            ...this.audioInput
                        ],
                        audioOutput: [
                            ...this.audioOutput
                        ]
                    }), this.logDevices("Enumerate Devices");
                } catch (e) {
                    o.e(this.TAG, "Failed enumerating devices", e);
                }
            });
        this.handleDeviceChange = st(()=>c(this, null, function*() {
                yield this.enumerateDevices(), this.logDevices("After Device Change");
                let e = this.store.getLocalPeer();
                yield this.setOutputDevice(!0), yield this.handleAudioInputDeviceChange(e == null ? void 0 : e.audioTrack), yield this.handleVideoInputDeviceChange(e == null ? void 0 : e.videoTrack), this.eventBus.analytics.publish(w.deviceChange({
                    selection: this.getCurrentSelection(),
                    type: "change",
                    devices: this.getDevices()
                }));
            }), 500).bind(this);
        this.handleAudioInputDeviceChange = (e)=>c(this, null, function*() {
                if (!e) {
                    o.d(this.TAG, "No Audio track on local peer");
                    return;
                }
                if (!this.audioInputChanged) {
                    o.d(this.TAG, "No Change in AudioInput Device");
                    return;
                }
                let t = this.getNewAudioInputDevice();
                if (!t || !t.deviceId) {
                    this.eventBus.analytics.publish(w.deviceChange({
                        selection: {
                            audioInput: t
                        },
                        error: new Error("Audio device not found"),
                        devices: this.getDevices(),
                        type: "audioInput"
                    })), o.w(this.TAG, "Audio device not found");
                    return;
                }
                let { settings: i  } = e, r = new Z().codec(i.codec).maxBitrate(i.maxBitrate).deviceId(t.deviceId).build();
                try {
                    yield e.setSettings(r, !0), this.eventBus.deviceChange.publish({
                        devices: this.getDevices(),
                        selection: t,
                        type: "audioInput"
                    }), this.logDevices("Audio Device Change Success");
                } catch (s) {
                    o.e(this.TAG, "[Audio Device Change]", s), this.eventBus.analytics.publish(w.deviceChange({
                        selection: {
                            audioInput: t
                        },
                        devices: this.getDevices(),
                        type: "audioInput",
                        error: s
                    })), this.eventBus.deviceChange.publish({
                        error: s,
                        selection: t,
                        type: "audioInput",
                        devices: this.getDevices()
                    });
                }
            });
        this.handleVideoInputDeviceChange = (e)=>c(this, null, function*() {
                if (!e) {
                    o.d(this.TAG, "No video track on local peer");
                    return;
                }
                if (!this.videoInputChanged) {
                    o.d(this.TAG, "No Change in VideoInput Device");
                    return;
                }
                let t = this.videoInput[0];
                if (!t || !t.deviceId) {
                    this.eventBus.analytics.publish(w.deviceChange({
                        selection: {
                            videoInput: t
                        },
                        error: new Error("Video device not found"),
                        devices: this.getDevices(),
                        type: "video"
                    })), o.w(this.TAG, "Video device not found");
                    return;
                }
                let { settings: i  } = e, r = new Y().codec(i.codec).maxBitrate(i.maxBitrate).maxFramerate(i.maxFramerate).setWidth(i.width).setHeight(i.height).deviceId(t.deviceId).build();
                try {
                    yield e.setSettings(r, !0), this.eventBus.deviceChange.publish({
                        devices: this.getDevices(),
                        selection: t,
                        type: "video"
                    }), this.logDevices("Video Device Change Success");
                } catch (s) {
                    o.e(this.TAG, "[Video Device Change]", s), this.eventBus.analytics.publish(w.deviceChange({
                        selection: {
                            videoInput: t
                        },
                        devices: this.getDevices(),
                        type: "video",
                        error: s
                    })), this.eventBus.deviceChange.publish({
                        error: s,
                        type: "video",
                        selection: t,
                        devices: this.getDevices()
                    });
                }
            });
        let i = ({ enabled: r , track: s  })=>r && s.source === "regular";
        this.eventBus.localVideoEnabled.waitFor(i).then(()=>c(this, null, function*() {
                yield this.enumerateDevices(), this.videoInputChanged && this.eventBus.deviceChange.publish({
                    devices: this.getDevices()
                });
            })), this.eventBus.localAudioEnabled.waitFor(i).then(()=>c(this, null, function*() {
                yield this.enumerateDevices(), this.audioInputChanged && this.eventBus.deviceChange.publish({
                    devices: this.getDevices()
                });
            }));
    }
    init(e = !1) {
        return c(this, null, function*() {
            this.initialized && !e || (!this.initialized && navigator.mediaDevices.addEventListener("devicechange", this.handleDeviceChange), this.initialized = !0, yield this.enumerateDevices(), this.logDevices("Init"), yield this.setOutputDevice(), this.eventBus.deviceChange.publish({
                devices: this.getDevices()
            }), this.eventBus.analytics.publish(w.deviceChange({
                selection: this.getCurrentSelection(),
                type: "list",
                devices: this.getDevices()
            })));
        });
    }
    getDevices() {
        return {
            audioInput: this.audioInput,
            audioOutput: this.audioOutput,
            videoInput: this.videoInput
        };
    }
    cleanUp() {
        this.initialized = !1, this.audioInput = [], this.audioOutput = [], this.videoInput = [], this.outputDevice = void 0, navigator.mediaDevices.removeEventListener("devicechange", this.handleDeviceChange);
    }
    createIdentifier(e) {
        return e ? `${e.deviceId}${e.groupId}` : "";
    }
    getNewAudioInputDevice() {
        let e = this.audioInput.find((t)=>t.deviceId === "default");
        return e ? this.audioInput.find((i)=>i.deviceId !== "default" && e.label.includes(i.label)) : this.audioInput[0];
    }
    setOutputDevice(e = !1) {
        return c(this, null, function*() {
            let t = this.getNewAudioInputDevice(), i = this.createIdentifier(this.outputDevice);
            this.outputDevice = this.getAudioOutputDeviceMatchingInput(t), this.outputDevice || (this.outputDevice = this.audioOutput.find((r)=>this.createIdentifier(r) === i), this.outputDevice || (this.outputDevice = this.audioOutput.find((r)=>r.deviceId === "default") || this.audioOutput[0])), yield this.store.updateAudioOutputDevice(this.outputDevice), e && i !== this.createIdentifier(this.outputDevice) && (this.eventBus.analytics.publish(w.deviceChange({
                selection: {
                    audioOutput: this.outputDevice
                },
                devices: this.getDevices(),
                type: "audioOutput"
            })), this.eventBus.deviceChange.publish({
                selection: this.outputDevice,
                type: "audioOutput",
                devices: this.getDevices()
            }));
        });
    }
    getAudioOutputDeviceMatchingInput(e) {
        var r, s;
        let t = ((s = (r = this.store.getConfig()) == null ? void 0 : r.settings) == null ? void 0 : s.speakerAutoSelectionBlacklist) || [];
        if (t === "all") return;
        let i = (e == null ? void 0 : e.label.toLowerCase()) || "";
        if (!t.some((n)=>i.includes(n.toLowerCase())) && (e == null ? void 0 : e.groupId)) return this.audioOutput.find((n)=>e.deviceId !== "default" && n.label === e.label);
    }
    logDevices(e = "") {
        o.d(this.TAG, e, JSON.stringify({
            videoInput: [
                ...this.videoInput
            ],
            audioInput: [
                ...this.audioInput
            ],
            audioOutput: [
                ...this.audioOutput
            ],
            selected: this.getCurrentSelection()
        }, null, 4));
    }
};
var pt = class {
    constructor(e, t){
        this.deviceManager = e;
        this.audioSinkManager = t;
    }
    getVolume() {
        return this.audioSinkManager.getVolume();
    }
    setVolume(e) {
        if (e < 0 || e > 100) throw Error("Please pass a valid number between 0-100");
        this.audioSinkManager.setVolume(e);
    }
    getDevice() {
        return this.deviceManager.outputDevice;
    }
    setDevice(e) {
        return this.deviceManager.updateOutputDevice(e);
    }
    unblockAutoplay() {
        return c(this, null, function*() {
            yield this.audioSinkManager.unblockAutoplay(), yield pe.resumeContext();
        });
    }
};
var V = class {
    constructor(e, t){
        this.eventName = e;
        this.eventEmitter = t;
        this.publish = (e)=>{
            this.eventEmitter.emit(this.eventName, e);
        };
        this.subscribe = (e)=>{
            this.eventEmitter.on(this.eventName, e);
        };
        this.subscribeOnce = (e)=>{
            this.eventEmitter.once(this.eventName, e);
        };
        this.unsubscribe = (e)=>{
            this.eventEmitter.off(this.eventName, e);
        };
        this.waitFor = (e)=>this.eventEmitter.waitFor(this.eventName, {
                filter: e
            });
        this.removeAllListeners = ()=>{
            this.eventEmitter.removeAllListeners(this.eventName);
        };
    }
};
var $t = class {
    constructor(){
        this.eventEmitter = new (0, _eventemitter2.EventEmitter2);
        this.deviceChange = new V(W.DEVICE_CHANGE, this.eventEmitter);
        this.localAudioEnabled = new V(W.LOCAL_AUDIO_ENABLED, this.eventEmitter);
        this.localVideoEnabled = new V(W.LOCAL_VIDEO_ENABLED, this.eventEmitter);
        this.statsUpdate = new V(W.STATS_UPDATE, this.eventEmitter);
        this.trackDegraded = new V(W.TRACK_DEGRADED, this.eventEmitter);
        this.trackRestored = new V(W.TRACK_RESTORED, this.eventEmitter);
        this.trackAudioLevelUpdate = new V(W.TRACK_AUDIO_LEVEL_UPDATE, this.eventEmitter);
        this.audioPluginFailed = new V(W.AUDIO_PLUGIN_FAILED, this.eventEmitter);
        this.localAudioSilence = new V(W.LOCAL_AUDIO_SILENCE, this.eventEmitter);
        this.analytics = new V(W.ANALYTICS, this.eventEmitter);
        this.policyChange = new V(W.POLICY_CHANGE, this.eventEmitter);
        this.localRoleUpdate = new V(W.LOCAL_ROLE_UPDATE, this.eventEmitter);
        this.audioTrackUpdate = new V(W.AUDIO_TRACK_UPDATE, this.eventEmitter);
        this.audioTrackAdded = new V(W.AUDIO_TRACK_ADDED, this.eventEmitter);
        this.audioTrackRemoved = new V(W.AUDIO_TRACK_REMOVED, this.eventEmitter);
        this.autoplayError = new V(W.AUTOPLAY_ERROR, this.eventEmitter);
        this.leave = new V(W.LEAVE, this.eventEmitter);
    }
};
var Wt = class {
    constructor(e, t, i){
        this.store = e;
        this.listener = t;
        this.audioListener = i;
    }
    handleActiveSpeakers(e) {
        var s, n, d;
        let t = e["speaker-list"], i = t.map((l)=>({
                audioLevel: l.level,
                peer: this.store.getPeerById(l.peer_id),
                track: this.store.getTrackById(l.track_id)
            }));
        (s = this.audioListener) == null || s.onAudioLevelUpdate(i), this.store.updateSpeakers(i);
        let r = t[0];
        if (r) {
            let l = this.store.getPeerById(r.peer_id);
            (n = this.listener) == null || n.onPeerUpdate(z.BECAME_DOMINANT_SPEAKER, l);
        } else (d = this.listener) == null || d.onPeerUpdate(z.RESIGNED_DOMINANT_SPEAKER, null);
    }
};
var A;
(function(y) {
    y.ROOM_STATE = "room-state", y.PEER_JOIN = "on-peer-join", y.PEER_LEAVE = "on-peer-leave", y.PEER_LIST = "peer-list", y.TRACK_METADATA_ADD = "on-track-add", y.TRACK_UPDATE = "on-track-update", y.CHANGE_TRACK_MUTE_STATE_UPDATE = "on-change-track-mute-state-request", y.ACTIVE_SPEAKERS = "active-speakers", y.CONNECTION_QUALITY = "on-connection-quality-update", y.SFU_STATS = "sfu-stats", y.ON_SFU_TRACK_LAYER_UPDATE = "on-track-layer-update", y.BROADCAST = "on-broadcast", y.ROLE_CHANGE = "on-role-change", y.POLICY_CHANGE = "on-policy-change", y.ROLE_CHANGE_REQUEST = "on-role-change-request", y.TRACK_UPDATE_REQUEST = "on-track-update-request", y.PEER_UPDATE = "on-peer-update", y.PEER_LEAVE_REQUEST = "on-peer-leave-request", y.UNSUPPORTED = "unsupported", y.RTMP_START = "on-rtmp-start", y.RTMP_STOP = "on-rtmp-stop", y.RECORDING_START = "on-record-start", y.RECORDING_STOP = "on-record-stop", y.HLS_START = "on-hls-start", y.HLS_STOP = "on-hls-stop", y.METADATA_CHANGE = "on-metadata-change";
})(A || (A = {}));
var Kt = class {
    constructor(e, t){
        this.store = e;
        this.listener = t;
        this.TAG = "[BroadcastManager]";
    }
    handleNotification(e, t) {
        e === A.BROADCAST && this.handleBroadcast(t);
    }
    handleBroadcast(e) {
        var u;
        let t = e.peer, i = e.info, r = e.roles, s = this.getSender(t), n = e.private ? this.store.getLocalPeer() : void 0, d = [];
        if (r == null ? void 0 : r.length) {
            let h = this.store.getKnownRoles();
            for (let p of r)h[p] && d.push(h[p]);
        }
        let l = new Ae(D(S({}, i), {
            sender: s,
            recipientRoles: d,
            recipientPeer: n,
            time: new Date(e.timestamp)
        }));
        o.d(this.TAG, `Received Message from sender=${t == null ? void 0 : t.peer_id}: ${l}`), (u = this.listener) == null || u.onMessageReceived(l);
    }
    getSender(e) {
        let t = e ? this.store.getPeerById(e.peer_id) : void 0;
        return !t && e && (t = new de({
            peerId: e.peer_id,
            name: e.info.name,
            isLocal: !1,
            customerUserId: e.info.user_id,
            metadata: e.info.data
        })), t;
    }
};
var qt = class {
    constructor(e){
        this.listener = e;
    }
    handleQualityUpdate(e) {
        var r;
        let i = e.peers.map((s)=>({
                peerID: s.peer_id,
                downlinkQuality: s.downlink_score
            }));
        (r = this.listener) == null || r.onConnectionQualityUpdate(i);
    }
};
var jt = class {
    constructor(e, t, i, r){
        this.store = e;
        this.peerManager = t;
        this.trackManager = i;
        this.listener = r;
        this.TAG = "[PeerListManager]";
        this.handleInitialPeerList = (e)=>{
            let t = Object.values(e.peers);
            this.peerManager.handlePeerList(t);
        };
        this.handleReconnectPeerList = (e)=>{
            this.handleRepeatedPeerList(e.peers);
        };
        this.handlePreviewRoomState = (e)=>{
            if (!this.store.hasRoleDetailsArrived()) return;
            let t = e.peers;
            if (t == null) {
                e.peer_count === 0 && this.handleRepeatedPeerList({});
                return;
            }
            Object.keys(t).forEach((i)=>{
                t[i].tracks = {}, t[i].is_from_room_state = !0;
            }), this.handleRepeatedPeerList(t);
        };
        this.handleRepeatedPeerList = (e)=>{
            let t = this.store.getRemotePeers(), i = Object.values(e), r = t.filter((n)=>!e[n.peerId]);
            r.length > 0 && o.d(this.TAG, `${r}`), r.forEach((n)=>{
                var l;
                let d = {
                    peer_id: n.peerId,
                    role: ((l = n.role) == null ? void 0 : l.name) || "",
                    info: {
                        name: n.name,
                        data: n.metadata || "",
                        user_id: n.customerUserId || ""
                    },
                    tracks: {}
                };
                this.peerManager.handlePeerLeave(d);
            });
            let s = [];
            i.forEach((n)=>{
                let d = this.store.getPeerById(n.peer_id), l = Object.values(n.tracks);
                d && (this.store.getPeerTracks(d.peerId).forEach((h)=>{
                    var p;
                    n.tracks[h.trackId] || (this.removePeerTrack(d, h.trackId), (p = this.listener) == null || p.onTrackUpdate(N.TRACK_REMOVED, h, d));
                }), l.forEach((h)=>{
                    this.store.getTrackById(h.track_id) || this.store.setTrackState({
                        peerId: d.peerId,
                        trackInfo: h
                    });
                }), this.trackManager.handleTrackUpdate({
                    peer: {
                        info: n.info,
                        peer_id: n.peer_id
                    },
                    tracks: n.tracks
                }), this.peerManager.handlePeerUpdate(n)), s.push(n);
            }), s.length > 0 && this.peerManager.handlePeerList(s);
        };
    }
    handleNotification(e, t, i) {
        if (e === A.PEER_LIST) {
            let r = t;
            i ? (o.d(this.TAG, "RECONNECT_PEER_LIST event", JSON.stringify(r, null, 2)), this.handleReconnectPeerList(r)) : (o.d(this.TAG, "PEER_LIST event", JSON.stringify(r, null, 2)), this.handleInitialPeerList(r));
        } else if (e === A.ROOM_STATE) {
            let r = t;
            this.handlePreviewRoomState(r);
        }
    }
    removePeerTrack(e, t) {
        var i, r;
        if (o.d(this.TAG, `removing track - ${t} from ${e}`), ((i = e.audioTrack) == null ? void 0 : i.trackId) === t) e.audioTrack = void 0;
        else if (((r = e.videoTrack) == null ? void 0 : r.trackId) === t) e.videoTrack = void 0;
        else {
            let s = e.auxiliaryTracks.findIndex((n)=>n.trackId === t);
            s >= 0 && e.auxiliaryTracks.splice(s, 1);
        }
    }
};
var K = (a)=>a ? new Date(a) : void 0;
var Jt = class {
    constructor(e, t, i){
        this.store = e;
        this.trackManager = t;
        this.listener = i;
        this.TAG = "[PeerManager]";
        this.handlePeerList = (e)=>{
            var r, s;
            if (e.length === 0) {
                (r = this.listener) == null || r.onPeerUpdate(z.PEER_LIST, []);
                return;
            }
            let t = [], i = new Set(e.map((n)=>n.peer_id));
            this.store.getRemotePeers().forEach(({ peerId: n , fromRoomState: d  })=>{
                !i.has(n) && d && this.store.removePeer(n);
            });
            for (let n of e)t.push(this.makePeer(n));
            (s = this.listener) == null || s.onPeerUpdate(z.PEER_LIST, t), this.trackManager.processPendingTracks();
        };
        this.handlePeerJoin = (e)=>{
            var i;
            let t = this.makePeer(e);
            (i = this.listener) == null || i.onPeerUpdate(z.PEER_JOINED, t), this.trackManager.processPendingTracks();
        };
        this.handlePeerLeave = (e)=>{
            var i, r, s, n;
            let t = this.store.getPeerById(e.peer_id);
            this.store.removePeer(e.peer_id), o.d(this.TAG, "PEER_LEAVE", e.peer_id, `remainingPeers=${this.store.getPeers().length}`), !!t && (t.audioTrack && ((i = this.listener) == null || i.onTrackUpdate(N.TRACK_REMOVED, t.audioTrack, t)), t.videoTrack && ((r = this.listener) == null || r.onTrackUpdate(N.TRACK_REMOVED, t.videoTrack, t)), (s = t.auxiliaryTracks) == null || s.forEach((d)=>{
                var l;
                (l = this.listener) == null || l.onTrackUpdate(N.TRACK_REMOVED, d, t);
            }), (n = this.listener) == null || n.onPeerUpdate(z.PEER_LEFT, t));
        };
    }
    handleNotification(e, t) {
        switch(e){
            case A.PEER_JOIN:
                {
                    let i = t;
                    this.handlePeerJoin(i);
                    break;
                }
            case A.PEER_LEAVE:
                {
                    let i = t;
                    this.handlePeerLeave(i);
                    break;
                }
            case A.PEER_UPDATE:
                this.handlePeerUpdate(t);
                break;
            default:
                break;
        }
    }
    handlePeerUpdate(e) {
        var i;
        let t = this.store.getPeerById(e.peer_id);
        if (!!t) {
            if (t.role && t.role.name !== e.role) {
                let r = this.store.getPolicyForRole(e.role);
                t.updateRole(r), this.updateSimulcastLayersForPeer(t), (i = this.listener) == null || i.onPeerUpdate(z.ROLE_UPDATED, t);
            }
            this.handlePeerInfoUpdate(S({
                peer: t
            }, e.info));
        }
    }
    handlePeerInfoUpdate({ peer: e , name: t , data: i  }) {
        var r, s;
        !e || (t && e.name !== t && (e.updateName(t), (r = this.listener) == null || r.onPeerUpdate(z.NAME_UPDATED, e)), i && e.metadata !== i && (e.updateMetadata(i), (s = this.listener) == null || s.onPeerUpdate(z.METADATA_UPDATED, e)));
    }
    makePeer(e) {
        let t = this.store.getPeerById(e.peer_id);
        t || (t = new ze({
            peerId: e.peer_id,
            name: e.info.name,
            customerUserId: e.info.user_id,
            metadata: e.info.data,
            role: this.store.getPolicyForRole(e.role),
            joinedAt: K(e.joined_at),
            fromRoomState: !!e.is_from_room_state
        }), this.store.addPeer(t), o.d(this.TAG, "adding to the peerList", `${t}`));
        for(let i in e.tracks)this.store.setTrackState({
            peerId: e.peer_id,
            trackInfo: e.tracks[i]
        });
        return t;
    }
    updateSimulcastLayersForPeer(e) {
        this.store.getPeerTracks(e.peerId).forEach((t)=>{
            if (t.type === "video" && [
                "regular",
                "screen"
            ].includes(t.source)) {
                let i = t, r = this.store.getSimulcastDefinitionsForPeer(e, i.source);
                i.setSimulcastDefinitons(r);
            }
        });
    }
};
var zt = class {
    constructor(e, t){
        this.store = e;
        this.eventBus = t;
    }
    handlePolicyChange(e) {
        let t = this.store.getLocalPeer();
        if (t && !t.role) {
            let r = e.known_roles[e.name];
            t.updateRole(r);
        }
        this.store.setKnownRoles(e);
        let i = this.store.getRoom();
        if (i ? i.templateId = e.template_id : o.w("[PolicyChangeManager]", "on policy change - room not present"), (t == null ? void 0 : t.role) && t.role.name !== e.name) {
            let r = this.store.getPolicyForRole(e.name), s = t.role;
            t.updateRole(r), this.eventBus.localRoleUpdate.publish({
                oldRole: s,
                newRole: r
            });
        }
        this.eventBus.policyChange.publish(e);
    }
};
var Qt = class {
    constructor(e, t){
        this.store = e;
        this.listener = t;
    }
    handleNotification(e, t) {
        switch(e){
            case A.ROLE_CHANGE_REQUEST:
                this.handleRoleChangeRequest(t);
                break;
            case A.TRACK_UPDATE_REQUEST:
                this.handleTrackUpdateRequest(t);
                break;
            case A.CHANGE_TRACK_MUTE_STATE_UPDATE:
                this.handleChangeTrackStateRequest(t);
                break;
            default:
                return;
        }
    }
    handleRoleChangeRequest(e) {
        var i;
        let t = {
            requestedBy: e.requested_by ? this.store.getPeerById(e.requested_by) : void 0,
            role: this.store.getPolicyForRole(e.role),
            token: e.token
        };
        (i = this.listener) == null || i.onRoleChangeRequest(t);
    }
    handleTrackUpdateRequest(e) {
        let { requested_by: t , track_id: i , mute: r  } = e, s = t ? this.store.getPeerById(t) : void 0, n = this.store.getLocalPeerTracks().find((l)=>l.publishedTrackId === i);
        if (!n) return;
        let d = ()=>{
            var l;
            (l = this.listener) == null || l.onChangeTrackStateRequest({
                requestedBy: s,
                track: n,
                enabled: !r
            });
        };
        if (r) {
            if (n.enabled === !r) return;
            n.setEnabled(!r).then(d);
        } else d();
    }
    handleChangeTrackStateRequest(e) {
        var u;
        let { type: t , source: i , value: r , requested_by: s  } = e, n = s ? this.store.getPeerById(s) : void 0, d = !r, l = this.getTracksToBeUpdated({
            type: t,
            source: i,
            enabled: d
        });
        if (l.length !== 0) {
            if (d) (u = this.listener) == null || u.onChangeMultiTrackStateRequest({
                requestedBy: n,
                tracks: l,
                type: t,
                source: i,
                enabled: !0
            });
            else {
                let h = [];
                for (let p of l)h.push(p.setEnabled(!1));
                Promise.all(h).then(()=>{
                    var p;
                    (p = this.listener) == null || p.onChangeMultiTrackStateRequest({
                        requestedBy: n,
                        tracks: l,
                        enabled: !1
                    });
                });
            }
        }
    }
    getTracksToBeUpdated({ type: e , source: t , enabled: i  }) {
        let s = this.store.getLocalPeerTracks();
        return e && (s = s.filter((n)=>n.type === e)), t && (s = s.filter((n)=>n.source === t)), s.filter((n)=>n.enabled !== i);
    }
};
var Yt = class {
    constructor(e, t){
        this.store = e;
        this.listener = t;
        this.TAG = "[RoomUpdateManager]";
    }
    handleNotification(e, t) {
        switch(e){
            case A.PEER_LIST:
                this.onRoomState(t.room);
                break;
            case A.RTMP_START:
                this.onRTMPStart(t);
                break;
            case A.RTMP_STOP:
                this.onRTMPStop(t);
                break;
            case A.RECORDING_START:
                this.onRecordingStart(t);
                break;
            case A.RECORDING_STOP:
                this.onRecordingStop(t);
                break;
            case A.ROOM_STATE:
                this.handlePreviewRoomState(t);
                break;
            default:
                this.onHLS(e, t);
                break;
        }
    }
    handlePreviewRoomState(e) {
        let { room: t  } = e;
        this.onRoomState(t, e.peer_count);
    }
    onRoomState(e, t) {
        var u, h, p;
        let { recording: i , streaming: r , session_id: s , started_at: n , name: d  } = e, l = this.store.getRoom();
        if (!l) {
            o.w(this.TAG, "on room state - room not present");
            return;
        }
        l.peerCount = t, l.name = d, l.recording.server.running = !!(i == null ? void 0 : i.sfu.enabled), l.recording.browser.running = !!(i == null ? void 0 : i.browser.enabled), l.rtmp.running = !!((u = r == null ? void 0 : r.rtmp) == null ? void 0 : u.enabled), l.rtmp.startedAt = K((h = r == null ? void 0 : r.rtmp) == null ? void 0 : h.started_at), l.recording.server.startedAt = K(i == null ? void 0 : i.sfu.started_at), l.recording.browser.startedAt = K(i == null ? void 0 : i.browser.started_at), l.recording.hls = this.getPeerListHLSRecording(i), l.hls = this.convertHls(r == null ? void 0 : r.hls), l.sessionId = s, l.startedAt = K(n), (p = this.listener) == null || p.onRoomUpdate(le.RECORDING_STATE_UPDATED, l);
    }
    onRTMPStart(e) {
        var t;
        this.setRTMPStatus(!((t = e.error) == null ? void 0 : t.code), e);
    }
    onRTMPStop(e) {
        this.setRTMPStatus(!1, e);
    }
    onRecordingStart(e) {
        var t;
        this.setRecordingStatus(!((t = e.error) == null ? void 0 : t.code), e);
    }
    onRecordingStop(e) {
        this.setRecordingStatus(!1, e);
    }
    onHLS(e, t) {
        var r, s;
        if (![
            A.HLS_START,
            A.HLS_STOP
        ].includes(e)) return;
        let i = this.store.getRoom();
        if (!i) {
            o.w(this.TAG, "on hls - room not present");
            return;
        }
        t.enabled = e === A.HLS_START && !((r = t.error) == null ? void 0 : r.code), i.hls = this.convertHls(t), i.recording.hls = this.getHLSRecording(t), (s = this.listener) == null || s.onRoomUpdate(le.HLS_STREAMING_STATE_UPDATED, i);
    }
    convertHls(e) {
        var i;
        let t = {
            running: !!(e == null ? void 0 : e.enabled),
            variants: [],
            error: this.toSdkError(e == null ? void 0 : e.error)
        };
        return (i = e == null ? void 0 : e.variants) == null || i.forEach((r)=>{
            t.variants.push({
                meetingURL: r.meeting_url,
                url: r.url,
                metadata: r.metadata,
                startedAt: K(r.started_at)
            });
        }), t;
    }
    getHLSRecording(e) {
        var i, r, s;
        let t = {
            running: !1
        };
        return (e == null ? void 0 : e.hls_recording) && (t = {
            running: !!(e == null ? void 0 : e.enabled),
            singleFilePerLayer: !!((i = e.hls_recording) == null ? void 0 : i.single_file_per_layer),
            hlsVod: !!((r = e.hls_recording) == null ? void 0 : r.hls_vod),
            startedAt: K((s = e == null ? void 0 : e.variants) == null ? void 0 : s[0].started_at),
            error: this.toSdkError(e.error)
        }), t;
    }
    getPeerListHLSRecording(e) {
        var i, r;
        let t = e == null ? void 0 : e.hls;
        return {
            running: !!(t == null ? void 0 : t.enabled),
            startedAt: K(t == null ? void 0 : t.started_at),
            singleFilePerLayer: !!((i = t == null ? void 0 : t.config) == null ? void 0 : i.single_file_per_layer),
            hlsVod: !!((r = t == null ? void 0 : t.config) == null ? void 0 : r.hls_vod)
        };
    }
    setRecordingStatus(e, t) {
        var s;
        let i = this.store.getRoom();
        if (!i) {
            o.w(this.TAG, `set recording status running=${e} - room not present`);
            return;
        }
        let r;
        t.type === "sfu" ? (i.recording.server = {
            running: e,
            startedAt: e ? K(t.started_at) : void 0,
            error: this.toSdkError(t.error)
        }, r = le.SERVER_RECORDING_STATE_UPDATED) : (i.recording.browser = {
            running: e,
            startedAt: e ? K(t.started_at) : void 0,
            error: this.toSdkError(t.error)
        }, r = le.BROWSER_RECORDING_STATE_UPDATED), (s = this.listener) == null || s.onRoomUpdate(r, i);
    }
    setRTMPStatus(e, t) {
        var r;
        let i = this.store.getRoom();
        if (!i) {
            o.w(this.TAG, "on policy change - room not present");
            return;
        }
        i.rtmp = {
            running: e,
            startedAt: e ? K(t.started_at) : void 0,
            error: this.toSdkError(t.error)
        }, (r = this.listener) == null || r.onRoomUpdate(le.RTMP_STREAMING_STATE_UPDATED, i);
    }
    toSdkError(e) {
        if (!(e == null ? void 0 : e.code)) return;
        let t = e.message || "error in streaming/recording", i = new T(e.code, "ServerErrors", m.NONE, t, t);
        return o.e(this.TAG, "error in streaming/recording", i), i;
    }
};
var Xt = class {
    constructor(e, t){
        this.store = e;
        this.listener = t;
    }
    handleNotification(e, t) {
        e === A.METADATA_CHANGE && this.handleMetadataChange(t);
    }
    handleMetadataChange(e) {
        var i;
        let t = e.values.map((r)=>({
                key: r.key,
                value: r.data,
                updatedAt: K(r.updated_at),
                updatedBy: r.updated_by ? this.store.getPeerById(r.updated_by) : void 0
            }));
        (i = this.listener) == null || i.onSessionStoreUpdate(t);
    }
};
var Zt = class {
    constructor(e, t, i){
        this.store = e;
        this.eventBus = t;
        this.listener = i;
        this.TAG = "[TrackManager]";
        this.tracksToProcess = new Map;
        this.handleTrackAdd = (e)=>{
            o.d(this.TAG, "ONTRACKADD", `${e}`), this.store.addTrack(e), this.tracksToProcess.set(e.trackId, e), this.processPendingTracks();
        };
        this.handleTrackRemove = (e)=>{
            var s;
            o.d(this.TAG, "ONTRACKREMOVE", `${e}`);
            let t = this.store.getTrackState(e.trackId);
            if (!t) return;
            if (!this.store.hasTrack(e)) {
                o.d(this.TAG, "Track not found in store");
                return;
            }
            e.type === x.AUDIO && this.eventBus.audioTrackRemoved.publish(e), this.store.removeTrack(e);
            let r = this.store.getPeerById(t.peerId);
            !r || (this.removePeerTracks(r, e), (s = this.listener) == null || s.onTrackUpdate(N.TRACK_REMOVED, e, r));
        };
        this.handleTrackLayerUpdate = (e)=>{
            for(let t in e.tracks){
                let i = e.tracks[t], r = this.store.getTrackById(t);
                !r || !this.store.getPeerByTrackId(t) || r instanceof X && this.setLayer(r, i);
            }
        };
        this.handleTrackUpdate = (e)=>{
            var i, r;
            let t = this.store.getPeerById(e.peer.peer_id);
            if (!t) {
                o.d(this.TAG, "Track Update ignored - Peer not added to store");
                return;
            }
            for(let s in e.tracks){
                let n = Object.assign({}, (i = this.store.getTrackState(s)) == null ? void 0 : i.trackInfo), d = e.tracks[s], l = this.store.getTrackById(s);
                if (this.store.setTrackState({
                    peerId: e.peer.peer_id,
                    trackInfo: S(S({}, n), d)
                }), !l || this.tracksToProcess.has(s)) this.processPendingTracks();
                else {
                    l.setEnabled(!d.mute);
                    let u = this.processTrackUpdate(l, n, d);
                    u && ((r = this.listener) == null || r.onTrackUpdate(u, l, t));
                }
            }
        };
    }
    handleTrackMetadataAdd(e) {
        o.d(this.TAG, "TRACK_METADATA_ADD", JSON.stringify(e, null, 2));
        for(let t in e.tracks)this.store.setTrackState({
            peerId: e.peer.peer_id,
            trackInfo: e.tracks[t]
        });
        this.processPendingTracks();
    }
    processPendingTracks() {
        new Map(this.tracksToProcess).forEach((t)=>{
            var s;
            let i = this.store.getTrackState(t.trackId);
            if (!i) {
                o.d(this.TAG, "TrackState not added to store", `peerId - ${t.peerId}`, `trackId -${t.trackId}`);
                return;
            }
            let r = this.store.getPeerById(i.peerId);
            if (!r) {
                o.d(this.TAG, "Peer not added to store, peerId", i.peerId);
                return;
            }
            t.source = i.trackInfo.source, t.peerId = r.peerId, t.logIdentifier = r.name, t.setEnabled(!i.trackInfo.mute), this.addAudioTrack(r, t), this.addVideoTrack(r, t), t.type === x.AUDIO ? this.eventBus.audioTrackAdded.publish({
                track: t,
                peer: r
            }) : (s = this.listener) == null || s.onTrackUpdate(N.TRACK_ADDED, t, r), this.tracksToProcess.delete(t.trackId);
        });
    }
    setLayer(e, t) {
        var s, n;
        let i = this.store.getPeerByTrackId(e.trackId);
        if (!i) return;
        e.setLayerFromServer(t) ? (s = this.listener) == null || s.onTrackUpdate(N.TRACK_DEGRADED, e, i) : (n = this.listener) == null || n.onTrackUpdate(N.TRACK_RESTORED, e, i);
    }
    removePeerTracks(e, t) {
        let i = e.auxiliaryTracks.indexOf(t);
        i > -1 ? (e.auxiliaryTracks.splice(i, 1), o.d(this.TAG, "auxiliary track removed", `${t}`)) : t.type === x.AUDIO && e.audioTrack === t ? (e.audioTrack = void 0, o.d(this.TAG, "audio track removed", `${t}`)) : t.type === x.VIDEO && e.videoTrack === t && (e.videoTrack = void 0, o.d(this.TAG, "video track removed", `${t}`));
    }
    addAudioTrack(e, t) {
        var i;
        t.type === x.AUDIO && (t.source === "regular" && (!e.audioTrack || ((i = e.audioTrack) == null ? void 0 : i.trackId) === t.trackId) ? e.audioTrack = t : e.auxiliaryTracks.push(t), o.d(this.TAG, "audio track added", `${t}`));
    }
    addVideoTrack(e, t) {
        var s;
        if (t.type !== x.VIDEO) return;
        let i = t, r = this.store.getSimulcastDefinitionsForPeer(e, i.source);
        i.setSimulcastDefinitons(r), t.source === "regular" && (!e.videoTrack || ((s = e.videoTrack) == null ? void 0 : s.trackId) === t.trackId) ? e.videoTrack = i : e.auxiliaryTracks.push(i), o.d(this.TAG, "video track added", `${t}`);
    }
    processTrackUpdate(e, t, i) {
        let r;
        return t.mute !== i.mute ? (r = i.mute ? N.TRACK_MUTED : N.TRACK_UNMUTED, e.type === x.AUDIO && this.eventBus.audioTrackUpdate.publish({
            track: e,
            enabled: !i.mute
        })) : t.description !== i.description && (r = N.TRACK_DESCRIPTION_CHANGED), r;
    }
};
var mt = class {
    constructor(e, t, i, r, s){
        this.store = e;
        this.listener = i;
        this.audioListener = r;
        this.connectionQualityListener = s;
        this.TAG = "[HMSNotificationManager]";
        this.hasConsistentRoomStateArrived = !1;
        this.ignoreNotification = (e)=>{
            if (e === A.PEER_LIST) this.hasConsistentRoomStateArrived = !0;
            else if (e === A.ROOM_STATE) return this.hasConsistentRoomStateArrived;
            return !1;
        };
        this.handleTrackAdd = (e)=>{
            this.trackManager.handleTrackAdd(e);
        };
        this.handleTrackRemove = (e)=>{
            this.trackManager.handleTrackRemove(e);
        };
        this.updateLocalPeer = ({ name: e , metadata: t  })=>{
            let i = this.store.getLocalPeer();
            this.peerManager.handlePeerInfoUpdate({
                peer: i,
                name: e,
                data: t
            });
        };
        this.trackManager = new Zt(this.store, t, this.listener), this.peerManager = new Jt(this.store, this.trackManager, this.listener), this.peerListManager = new jt(this.store, this.peerManager, this.trackManager, this.listener), this.broadcastManager = new Kt(this.store, this.listener), this.policyChangeManager = new zt(this.store, t), this.requestManager = new Qt(this.store, this.listener), this.activeSpeakerManager = new Wt(this.store, this.listener, this.audioListener), this.connectionQualityManager = new qt(this.connectionQualityListener), this.roomUpdateManager = new Yt(this.store, this.listener), this.sessionMetadataManager = new Xt(this.store, this.listener);
    }
    setListener(e) {
        this.listener = e, this.trackManager.listener = e, this.peerManager.listener = e, this.peerListManager.listener = e, this.broadcastManager.listener = e, this.requestManager.listener = e, this.activeSpeakerManager.listener = e, this.roomUpdateManager.listener = e, this.sessionMetadataManager.listener = e;
    }
    setAudioListener(e) {
        this.audioListener = e, this.activeSpeakerManager.audioListener = e;
    }
    setConnectionQualityListener(e) {
        this.connectionQualityListener = e, this.connectionQualityManager.listener = e;
    }
    handleNotification(e, t = !1) {
        var s, n;
        let i = e.method, r = e.params;
        [
            A.ACTIVE_SPEAKERS,
            A.SFU_STATS,
            A.CONNECTION_QUALITY,
            void 0
        ].includes(i) || o.d(this.TAG, `Received notification - ${i}`, {
            notification: r
        }), i === A.SFU_STATS && ((s = window.HMS) == null ? void 0 : s.ON_SFU_STATS) && typeof ((n = window.HMS) == null ? void 0 : n.ON_SFU_STATS) == "function" && window.HMS.ON_SFU_STATS(e.params), !this.ignoreNotification(i) && (this.roomUpdateManager.handleNotification(i, r), this.peerManager.handleNotification(i, r), this.requestManager.handleNotification(i, r), this.peerListManager.handleNotification(i, r, t), this.broadcastManager.handleNotification(i, r), this.sessionMetadataManager.handleNotification(i, r), this.handleIsolatedMethods(i, r));
    }
    handleIsolatedMethods(e, t) {
        switch(e){
            case A.TRACK_METADATA_ADD:
                this.trackManager.handleTrackMetadataAdd(t);
                break;
            case A.TRACK_UPDATE:
                this.trackManager.handleTrackUpdate(t);
                break;
            case A.ON_SFU_TRACK_LAYER_UPDATE:
                this.trackManager.handleTrackLayerUpdate(t);
                break;
            case A.ACTIVE_SPEAKERS:
                this.activeSpeakerManager.handleActiveSpeakers(t);
                break;
            case A.CONNECTION_QUALITY:
                this.connectionQualityManager.handleQualityUpdate(t);
                break;
            case A.POLICY_CHANGE:
                this.policyChangeManager.handlePolicyChange(t);
                break;
            default:
                break;
        }
    }
};
var gt = class {
    constructor(e){
        this.type = e.type, this.source = e.source || "regular", this.description = "", e instanceof Te ? (this.mute = !e.enabled, this.track_id = e.publishedTrackId, this.stream_id = e.stream.id) : (this.mute = e.mute, this.track_id = e.track_id, this.stream_id = e.stream_id);
    }
};
var Ke = class {
    constructor(e){
        this.TAG = "[AudioContextManager]";
        this.audioContext = new AudioContext, this.source = this.audioContext.createMediaElementSource(e), this.source.connect(this.audioContext.destination);
    }
    resumeContext() {
        return c(this, null, function*() {
            this.audioContext.state === "suspended" && (yield this.audioContext.resume(), o.d(this.TAG, "AudioContext is resumed"));
        });
    }
    getAudioTrack() {
        return this.destinationNode && this.source.disconnect(this.destinationNode), this.destinationNode = this.audioContext.createMediaStreamDestination(), this.source.connect(this.destinationNode), this.destinationNode.stream.getAudioTracks()[0];
    }
    cleanup() {
        this.audioContext.state !== "closed" && this.audioContext.close().catch((e)=>{
            o.d(this.TAG, "AudioContext close error", e.message);
        });
    }
};
var Me = class extends (0, _eventemitter2.EventEmitter2) {
    on(e, t) {
        return super.on(e, t);
    }
    off(e, t) {
        return super.off(e, t);
    }
    emit(e, t) {
        return super.emit(e, t);
    }
    listeners(e) {
        return super.listeners(e);
    }
};
var ei = class extends Me {
    constructor(){
        super(...arguments);
        this.audioElement = null;
        this.TAG = "[PlaylistAudioManager]";
        this.seeked = !1;
    }
    play(e) {
        return c(this, null, function*() {
            return this.audioElement = this.getAudioElement(), new Promise((t, i)=>{
                this.audioElement = this.getAudioElement(), this.audioElement.src = e, this.seeked = !1, this.audioElement.onerror = ()=>{
                    let r = `Error loading ${e}`;
                    o.e(this.TAG, r), this.stop(), i(r);
                }, this.audioElement.oncanplaythrough = ()=>c(this, null, function*() {
                        try {
                            if (!this.audioElement) return;
                            if (this.audioContextManager.resumeContext(), this.track) this.seeked ? this.seeked = !1 : (yield this.audioElement.play(), t([
                                this.track
                            ]));
                            else {
                                yield this.audioElement.play();
                                let r = this.audioContextManager.getAudioTrack();
                                this.track = r, t([
                                    r
                                ]);
                            }
                        } catch (r) {
                            o.e(this.TAG, "Error playing audio", e, r.message), i(r);
                        }
                    }), this.audioElement.onseeked = ()=>{
                    this.seeked = !0;
                };
            });
        });
    }
    getTracks() {
        return this.track ? [
            this.track.id
        ] : [];
    }
    getElement() {
        return this.audioElement;
    }
    stop() {
        var e, t, i;
        (e = this.audioElement) == null || e.pause(), (t = this.audioElement) == null || t.removeAttribute("src"), this.audioElement = null, (i = this.audioContextManager) == null || i.cleanup(), this.track = void 0;
    }
    getAudioElement() {
        if (this.audioElement) return this.audioElement;
        let e = document.createElement("audio");
        return e.crossOrigin = "anonymous", e.addEventListener("timeupdate", (t)=>this.emit("progress", t)), e.addEventListener("ended", ()=>{
            this.emit("ended", null);
        }), this.audioContextManager = new Ke(e), e;
    }
};
var ti = class extends Me {
    constructor(){
        super(...arguments);
        this.TAG = "[PlaylistVideoManager]";
        this.videoElement = null;
        this.canvasContext = null;
        this.tracks = [];
        this.DEFAUL_FPS = 24;
        this.seeked = !1;
        this.drawImage = ()=>{
            var e, t, i;
            this.videoElement && !this.videoElement.paused && !this.videoElement.ended && ((i = this.canvasContext) == null || i.drawImage(this.videoElement, 0, 0, (e = this.canvas) == null ? void 0 : e.width, (t = this.canvas) == null ? void 0 : t.height), this.timer = setTimeout(()=>{
                this.drawImage();
            }, 1e3 / this.DEFAUL_FPS));
        };
    }
    play(e) {
        return this.videoElement = this.getVideoElement(), this.createCanvas(), new Promise((t, i)=>{
            this.videoElement = this.getVideoElement(), this.videoElement.src = e, this.seeked = !1, this.videoElement.onerror = ()=>{
                let r = `Error loading ${e}`;
                o.e(this.TAG, r), this.stop(), i(r);
            }, this.videoElement.oncanplaythrough = ()=>c(this, null, function*() {
                    var r, s, n;
                    try {
                        if (!this.videoElement) return;
                        if (this.canvas.width = this.videoElement.videoWidth, this.canvas.height = this.videoElement.videoHeight, this.tracks.length === 0) {
                            this.clearCanvasAndTracks();
                            let d = this.canvas.captureStream();
                            if (!d) {
                                o.e(this.TAG, "Browser does not support captureStream");
                                return;
                            }
                            this.videoElement.onplay = this.drawImage, yield this.audioContextManager.resumeContext(), yield this.videoElement.play();
                            let l = this.audioContextManager.getAudioTrack();
                            d.addTrack(l), d.getTracks().forEach((u)=>{
                                this.tracks.push(u);
                            }), t(this.tracks);
                        } else this.seeked ? (this.seeked = !1, (n = this.canvasContext) == null || n.drawImage(this.videoElement, 0, 0, (r = this.canvas) == null ? void 0 : r.width, (s = this.canvas) == null ? void 0 : s.height)) : (yield this.videoElement.play(), t(this.tracks));
                    } catch (d) {
                        o.e(this.TAG, "Error playing video", e, d.message), i(d);
                    }
                }), this.videoElement.onseeked = ()=>{
                this.seeked = !0;
            };
        });
    }
    getTracks() {
        return this.tracks.map((e)=>e.id);
    }
    getElement() {
        return this.videoElement;
    }
    stop() {
        var e, t, i;
        (e = this.videoElement) == null || e.pause(), (t = this.videoElement) == null || t.removeAttribute("src"), this.videoElement = null, (i = this.audioContextManager) == null || i.cleanup(), this.clearCanvasAndTracks();
    }
    clearCanvasAndTracks() {
        var e;
        this.tracks = [], (e = this.canvasContext) == null || e.clearRect(0, 0, this.canvas.width, this.canvas.height), clearTimeout(this.timer);
    }
    getVideoElement() {
        if (this.videoElement) return this.videoElement;
        let e = document.createElement("video");
        return e.crossOrigin = "anonymous", e.addEventListener("timeupdate", (t)=>this.emit("progress", t)), e.addEventListener("ended", ()=>{
            this.emit("ended", null);
        }), this.audioContextManager = new Ke(e), e;
    }
    createCanvas() {
        this.canvas || (this.canvas = document.createElement("canvas"), this.canvasContext = this.canvas.getContext("2d"));
    }
};
var vt = {
    audio: {
        list: [],
        currentIndex: -1,
        isAutoplayOn: !0
    },
    video: {
        list: [],
        currentIndex: -1,
        isAutoplayOn: !0
    }
}, St = class extends Me {
    constructor(e, t){
        super();
        this.sdk = e;
        this.eventBus = t;
        this.state = {
            audio: S({}, vt.audio),
            video: S({}, vt.video)
        };
        this.TAG = "[PlaylistManager]";
        this.handlePausePlaylist = (i)=>c(this, [
                i
            ], function*({ enabled: e , track: t  }) {
                var s;
                if (e) return;
                let r;
                t.source === "audioplaylist" && (r = I.audio), t.source === "videoplaylist" && (r = I.video), !!r && ((s = this.getElement(r)) == null || s.pause());
            });
        this.addTrack = (e, t)=>c(this, null, function*() {
                yield this.sdk.addTrack(e, t), o.d(this.TAG, "Playlist track added", ue(e));
            });
        this.removeTrack = (e)=>c(this, null, function*() {
                yield this.sdk.removeTrack(e, !0), o.d(this.TAG, "Playlist track removed", e);
            });
        this.audioManager = new ei, this.videoManager = new ti, this.addListeners();
    }
    getList(e = I.audio) {
        return this.state[e].list;
    }
    setList(e) {
        if (!e || e.length === 0) {
            o.w(this.TAG, "Please pass in a list of HMSPlaylistItem's");
            return;
        }
        e.forEach((t)=>{
            this.state[t.type].list.includes(t) || this.state[t.type].list.push(t);
        });
    }
    clearList(e) {
        return c(this, null, function*() {
            this.isPlaying(e) && (yield this.stop(e)), this.state[e].list = [];
        });
    }
    removeItem(e, t) {
        return c(this, null, function*() {
            let { list: i , currentIndex: r  } = this.state[t], s = i.findIndex((n)=>e === n.id);
            return s > -1 ? (r === s && this.isPlaying(t) && (yield this.stop(t)), i.splice(s, 1), !0) : !1;
        });
    }
    seek(e, t = I.audio) {
        let { currentIndex: i  } = this.state[t];
        if (i === -1) throw g.PlaylistErrors.NoEntryToPlay(m.PLAYLIST, "No item is currently playing");
        let r = this.getElement(t);
        if (r) {
            let s = Math.max(r.currentTime + e, 0);
            r.currentTime = Math.min(s, r.duration);
        }
    }
    seekTo(e, t = I.audio) {
        let { currentIndex: i  } = this.state[t];
        if (i === -1) throw g.PlaylistErrors.NoEntryToPlay(m.PLAYLIST, "No item is currently playing");
        if (e < 0) throw Error("value cannot be negative");
        let r = this.getElement(t);
        r && (r.currentTime = Math.min(e, r.duration));
    }
    setVolume(e, t = I.audio) {
        if (e < 0 || e > 100) throw Error("Please pass a valid number between 0-100");
        let i = this.getElement(t);
        i && (i.volume = e * .01);
    }
    getVolume(e = I.audio) {
        let t = this.getElement(e);
        return t ? t.volume * 100 : 0;
    }
    getCurrentTime(e = I.audio) {
        let t = this.getElement(e);
        return (t == null ? void 0 : t.currentTime) || 0;
    }
    getCurrentIndex(e = I.audio) {
        return this.state[e].currentIndex;
    }
    getCurrentProgress(e = I.audio) {
        var n;
        let { list: t , currentIndex: i  } = this.state[e], r = (n = t[i]) == null ? void 0 : n.url, s = this.getElement(e);
        return !r || !s ? 0 : Math.floor(100 * (s.currentTime / s.duration));
    }
    getCurrentSelection(e = I.audio) {
        let { list: t , currentIndex: i  } = this.state[e];
        if (i !== -1) return t[i];
    }
    isPlaying(e = I.audio) {
        let t = this.getElement(e);
        return !!t && !t.paused;
    }
    setIsAutoplayOn(e = I.audio, t) {
        this.state[e].isAutoplayOn = t;
    }
    getPlaybackRate(e = I.audio) {
        let t = this.getElement(e);
        return t ? t.playbackRate : 1;
    }
    setPlaybackRate(e = I.audio, t) {
        if (t < .25 || t > 2) throw Error("Please pass a value between 0.25 and 2.0");
        let i = this.getElement(e);
        i && (i.playbackRate = t);
    }
    setEnabled(r, s) {
        return c(this, arguments, function*(e, { id: t , type: i = I.audio  }) {
            let d = this.state[i].list.findIndex((u)=>u.id === t);
            if (!t || d === -1) {
                o.w(this.TAG, "Pass a valid id");
                return;
            }
            let l = this.state[i].list[d].url;
            e ? yield this.play(l, i) : yield this.pause(l, i), this.state[i].currentIndex = d, this.setDuration(i);
        });
    }
    playNext() {
        return c(this, arguments, function*(e = I.audio) {
            let { list: t , currentIndex: i  } = this.state[e];
            if (i >= t.length - 1) throw g.PlaylistErrors.NoEntryToPlay(m.PLAYLIST, "Reached end of playlist");
            yield this.play(t[i + 1].url, e), this.state[e].currentIndex = i + 1, this.setDuration(e);
        });
    }
    playPrevious() {
        return c(this, arguments, function*(e = I.audio) {
            let { list: t , currentIndex: i  } = this.state[e];
            if (i <= 0) throw g.PlaylistErrors.NoEntryToPlay(m.PLAYLIST, "Reached start of playlist");
            yield this.play(t[i - 1].url, e), this.state[e].currentIndex = i - 1, this.setDuration(e);
        });
    }
    stop() {
        return c(this, arguments, function*(e = I.audio) {
            var i;
            let t = e === I.audio ? this.audioManager : this.videoManager;
            (i = t.getElement()) == null || i.pause(), yield this.removeTracks(e), t.stop(), this.state[e].currentIndex = -1;
        });
    }
    cleanup() {
        this.state = {
            audio: S({}, vt.audio),
            video: S({}, vt.video)
        }, this.eventBus.localAudioEnabled.unsubscribe(this.handlePausePlaylist), this.eventBus.localVideoEnabled.unsubscribe(this.handlePausePlaylist), this.audioManager.stop(), this.videoManager.stop();
    }
    onProgress(e) {
        this.videoManager.on("progress", ()=>{
            try {
                e({
                    type: I.video,
                    progress: this.getCurrentProgress(I.video)
                });
            } catch (t) {
                o.e(this.TAG, "Error in onProgress callback");
            }
        }), this.audioManager.on("progress", ()=>{
            try {
                e({
                    type: I.audio,
                    progress: this.getCurrentProgress(I.audio)
                });
            } catch (t) {
                o.e(this.TAG, "Error in onProgress callback");
            }
        });
    }
    onNewTrackStart(e) {
        this.on("newTrackStart", e);
    }
    onPlaylistEnded(e) {
        this.on("playlistEnded", e);
    }
    onCurrentTrackEnded(e) {
        this.on("currentTrackEnded", e);
    }
    getElement(e = I.audio) {
        return e === I.audio ? this.audioManager.getElement() : this.videoManager.getElement();
    }
    removeTracks() {
        return c(this, arguments, function*(e = I.audio) {
            let i = (e === I.audio ? this.audioManager : this.videoManager).getTracks();
            for (let r of i)yield this.removeTrack(r);
        });
    }
    play(i) {
        return c(this, arguments, function*(e, t = I.audio) {
            let r = t === I.audio ? this.audioManager : this.videoManager, s = r.getElement();
            if (this.isItemCurrentlyPlaying(e, t)) {
                o.w(this.TAG, `The ${t} is currently playing`);
                return;
            }
            if (s == null ? void 0 : s.src.includes(e)) yield s.play();
            else {
                s == null || s.pause();
                let n = yield r.play(e);
                for (let d of n)yield this.addTrack(d, t === I.audio ? "audioplaylist" : "videoplaylist");
            }
        });
    }
    isItemCurrentlyPlaying(e, t) {
        let i = this.getElement(t);
        return !!(i && !i.paused && i.src.includes(e));
    }
    setDuration(e = I.audio) {
        let t = this.getElement(e), { list: i , currentIndex: r  } = this.state[e];
        i[r] && (i[r].duration = (t == null ? void 0 : t.duration) || 0), this.emit("newTrackStart", i[r]);
    }
    pause(i) {
        return c(this, arguments, function*(e, t = I.audio) {
            let r = this.getElement(t);
            r && !r.paused && r.src.includes(e) ? (r.pause(), o.d(this.TAG, "paused url", e)) : o.w(this.TAG, "The passed in url is not currently playing");
        });
    }
    addListeners() {
        this.audioManager.on("ended", ()=>this.handleEnded(I.audio)), this.videoManager.on("ended", ()=>this.handleEnded(I.video)), this.eventBus.localAudioEnabled.subscribe(this.handlePausePlaylist), this.eventBus.localVideoEnabled.subscribe(this.handlePausePlaylist);
    }
    handleEnded() {
        return c(this, arguments, function*(e = I.audio) {
            let { list: t , currentIndex: i , isAutoplayOn: r  } = this.state[e];
            i === t.length - 1 ? (yield this.stop(e), this.emit("playlistEnded", e)) : r ? this.playNext(e) : yield this.pause(t[i].url, e), this.emit("currentTrackEnded", t[i]);
        });
    }
};
var ii = class {
    constructor(e){
        this.transport = e;
        this.observedKeys = new Set;
    }
    get(e) {
        return c(this, null, function*() {
            let { data: t , updated_at: i  } = yield this.transport.getSessionMetadata(e);
            return {
                value: t,
                updatedAt: K(i)
            };
        });
    }
    set(e, t) {
        return c(this, null, function*() {
            let { data: i , updated_at: r  } = yield this.transport.setSessionMetadata({
                key: e,
                data: t
            }), s = K(r);
            return {
                value: i,
                updatedAt: s
            };
        });
    }
    observe(e) {
        return c(this, null, function*() {
            let t = new Set(this.observedKeys);
            if (e.forEach((i)=>this.observedKeys.add(i)), this.observedKeys.size !== t.size) try {
                yield this.transport.listenMetadataChange(Array.from(this.observedKeys));
            } catch (i) {
                throw this.observedKeys = t, i;
            }
        });
    }
    unobserve(e) {
        return c(this, null, function*() {
            let t = new Set(this.observedKeys);
            if (this.observedKeys = new Set([
                ...this.observedKeys
            ].filter((i)=>!e.includes(i))), this.observedKeys.size !== t.size) try {
                yield this.transport.listenMetadataChange(Array.from(this.observedKeys));
            } catch (i) {
                throw this.observedKeys = t, i;
            }
        });
    }
};
var ri = class {
    constructor(e, t, i = "", r = "", s = "https://prod-init.100ms.live/init", n = !1){
        this.authToken = e;
        this.peerId = t;
        this.peerName = i;
        this.data = r;
        this.endpoint = s;
        this.autoSubscribeVideo = n;
    }
};
var R;
(function(s) {
    s[s.ConnectFailed = 0] = "ConnectFailed", s[s.SignalDisconnect = 1] = "SignalDisconnect", s[s.JoinWSMessageFailed = 2] = "JoinWSMessageFailed", s[s.PublishIceConnectionFailed = 3] = "PublishIceConnectionFailed", s[s.SubscribeIceConnectionFailed = 4] = "SubscribeIceConnectionFailed";
})(R || (R = {}));
var er = {
    [0]: [],
    [1]: [],
    [2]: [
        1
    ],
    [3]: [
        1
    ],
    [4]: [
        1
    ]
};
var L;
(function(d) {
    d.Disconnected = "Disconnected", d.Connecting = "Connecting", d.Joined = "Joined", d.Preview = "Preview", d.Failed = "Failed", d.Reconnecting = "Reconnecting", d.Leaving = "Leaving";
})(L || (L = {}));
var si = class {
    constructor(e){
        this.promise = new Promise((t, i)=>{
            this.resolve = t, this.reject = i, e(t, i);
        });
    }
};
var ai = class {
    constructor(e, t){
        this.onStateChange = e;
        this.sendEvent = t;
        this.TAG = "[RetryScheduler]";
        this.inProgress = new Map;
        this.retryTaskIds = [];
    }
    schedule(d) {
        return c(this, arguments, function*({ category: e , error: t , task: i , originalState: r , maxFailedRetries: s = We , changeState: n = !0  }) {
            yield this.scheduleTask({
                category: e,
                error: t,
                changeState: n,
                task: i,
                originalState: r,
                maxFailedRetries: s
            });
        });
    }
    reset() {
        this.retryTaskIds.forEach((e)=>clearTimeout(e)), this.retryTaskIds = [], this.inProgress.clear();
    }
    isTaskInProgress(e) {
        return !!this.inProgress.get(e);
    }
    scheduleTask(l) {
        return c(this, arguments, function*({ category: e , error: t , changeState: i , task: r , originalState: s , maxFailedRetries: n = We , failedRetryCount: d = 0  }) {
            if (o.d(this.TAG, "schedule: ", {
                category: R[e],
                error: t
            }), d === 0) {
                let f = this.inProgress.get(e);
                if (f) {
                    o.d(this.TAG, `schedule: Already a task for ${R[e]} scheduled, waiting for its completion`), yield f.promise;
                    return;
                }
                let H = new si((j, ge)=>{});
                this.inProgress.set(e, H), this.sendEvent(t, e);
            }
            let u = !1, h = er[e];
            for(let f in h){
                let H = h[parseInt(f)];
                try {
                    let j = this.inProgress.get(H);
                    j && (o.d(this.TAG, `schedule: Suspending retry task of ${R[e]}, waiting for ${R[H]} to recover`), yield j.promise, o.d(this.TAG, `schedule: Resuming retry task ${R[e]} as it's dependency ${R[H]} is recovered`));
                } catch (j) {
                    o.d(this.TAG, `schedule: Stopping retry task of ${R[e]} as it's dependency ${R[H]} failed to recover`), u = !0;
                    break;
                }
            }
            if (d >= n || u) {
                if (t.description += `. [${R[e]}] Could not recover after ${d} tries`, u && (t.description += ` Could not recover all of it's required dependencies - [${h.map((f)=>R[f]).toString()}]`), t.isTerminal = !0, this.inProgress.delete(e), this.sendEvent(t, e), this.reset(), i) this.onStateChange(L.Failed, t);
                else throw t;
                return;
            }
            i && this.onStateChange(L.Reconnecting, t);
            let p = this.getDelayForRetryCount(e, d);
            o.i(this.TAG, `schedule: [${R[e]}] [failedRetryCount=${d}] Scheduling retry task in ${p}ms`);
            let v;
            try {
                v = yield this.setTimeoutPromise(r, p);
            } catch (f) {
                v = !1, o.w(this.TAG, `[${R[e]}] Un-caught exception ${f.name} in retry-task, initiating retry`, f);
            }
            if (v) {
                let f = this.inProgress.get(e);
                this.inProgress.delete(e), f == null || f.resolve(d), i && this.inProgress.size === 0 && this.onStateChange(s), o.i(this.TAG, `schedule: [${R[e]}] [failedRetryCount=${d}] Recovered \u267B\uFE0F`);
            } else yield this.scheduleTask({
                category: e,
                error: t,
                changeState: i,
                task: r,
                originalState: s,
                maxFailedRetries: n,
                failedRetryCount: d + 1
            });
        });
    }
    getBaseDelayForTask(e, t) {
        return e === R.JoinWSMessageFailed ? 2 : Math.pow(2, t);
    }
    getDelayForRetryCount(e, t) {
        let i = this.getBaseDelayForTask(e, t), r = e === R.JoinWSMessageFailed ? Math.random() * 2 : Math.random();
        return Math.round(Math.min(i + r, Ui) * 1e3);
    }
    setTimeoutPromise(e, t) {
        return c(this, null, function*() {
            return new Promise((i, r)=>{
                let s = window.setTimeout(()=>c(this, null, function*() {
                        try {
                            let n = yield e();
                            n && this.retryTaskIds.splice(this.retryTaskIds.indexOf(s), 1), i(n);
                        } catch (n) {
                            r(n);
                        }
                    }), t);
                this.retryTaskIds.push(s);
            });
        });
    }
};
var ni = class extends fe {
    constructor(){
        super(ct);
        this.localStorage = new ie("hms-analytics");
        this.localStorage.clear(), this.initLocalStorageQueue();
    }
    enqueue(e) {
        super.enqueue(e), this.localStorage.set(this.storage);
    }
    dequeue() {
        let e = super.dequeue();
        return this.localStorage.set(this.storage), e;
    }
    initLocalStorageQueue() {
        var e;
        (e = this.localStorage.get()) == null || e.forEach((t)=>{
            let i = new O(t);
            super.enqueue(i);
        });
    }
};
var oi = class {
    constructor(){
        this.TAG = "[AnalyticsTransport]";
    }
    sendEvent(e) {
        try {
            this.sendSingleEvent(e), this.flushFailedEvents();
        } catch (t) {
            o.w(this.TAG, "sendEvent failed", t);
        }
    }
    flushFailedEvents(e) {
        var t;
        try {
            for(o.d(this.TAG, "Flushing failed events", this.failedEvents); this.failedEvents.size() > 0;){
                let i = this.failedEvents.dequeue();
                i && (((t = i.metadata) == null ? void 0 : t.peer.peer_id) === e || !i.metadata.peer.peer_id ? this.sendSingleEvent(i) : ae.sendEvent(i));
            }
        } catch (i) {
            o.w(this.TAG, "flushFailedEvents failed", i);
        }
    }
    sendSingleEvent(e) {
        try {
            this.transportProvider.sendEvent(e), o.d(this.TAG, "Sent event", e.name, e);
        } catch (t) {
            throw o.w(this.TAG, `${this.transportProvider.TAG}.sendEvent failed, adding to local storage events`, {
                event: e,
                error: t
            }), this.failedEvents.enqueue(e), t;
        }
    }
};
var ci = class extends oi {
    constructor(e){
        super();
        this.transportProvider = e;
        this.failedEvents = new ni;
    }
};
var U;
(function(t) {
    t[t.Publish = 0] = "Publish", t[t.Subscribe = 1] = "Subscribe";
})(U || (U = {}));
var tr = "[VALIDATIONS]";
function ne(a) {
    return a != null;
}
var di = ()=>{
    if (!ne(RTCPeerConnection)) {
        let a = g.GenericErrors.MissingRTCPeerConnection();
        throw o.e(tr, a), a;
    }
}, li = ()=>{
    if (!ne(navigator.mediaDevices)) {
        let a = g.GenericErrors.MissingMediaDevices();
        throw o.e(tr, a), a;
    }
};
function ir(a, e) {
    var r;
    let t = (0, _sdpTransform.parse)(a.sdp);
    if (!((r = t.origin) == null ? void 0 : r.username.startsWith("mozilla"))) return a;
    let i = e ? Array.from(e.values()) : [];
    return t.media.forEach((s)=>{
        var l, u, h;
        let n = (l = s.msid) == null ? void 0 : l.split(" ")[0], d = (u = i.find((p)=>p.type === s.type && p.stream_id === n)) == null ? void 0 : u.track_id;
        d && (s.msid = (h = s.msid) == null ? void 0 : h.replace(/\s(.+)/, ` ${d}`));
    }), {
        type: a.type,
        sdp: (0, _sdpTransform.write)(t)
    };
}
function rr(a, e) {
    var s;
    if (!(a == null ? void 0 : a.sdp) || !e) return;
    let i = (0, _sdpTransform.parse)(a.sdp).media.find((n)=>ne(n.mid) && parseInt(n.mid) === parseInt(e));
    return (s = i == null ? void 0 : i.msid) == null ? void 0 : s.split(" ")[1];
}
function sr(a) {
    return a.sdp.includes("usedtx=1") ? a : {
        type: a.type,
        sdp: a.sdp.replace("useinbandfec=1", "useinbandfec=1;usedtx=1")
    };
}
var oe = "[HMSConnection]", Ne = class {
    constructor(e, t){
        this.candidates = new Array;
        this.role = e, this.signal = t;
    }
    get iceConnectionState() {
        return this.nativeConnection.iceConnectionState;
    }
    get connectionState() {
        return this.nativeConnection.connectionState;
    }
    get action() {
        return this.role === U.Publish ? m.PUBLISH : m.SUBSCRIBE;
    }
    addTransceiver(e, t) {
        return this.nativeConnection.addTransceiver(e, t);
    }
    createOffer(e, t) {
        return c(this, null, function*() {
            try {
                let i = yield this.nativeConnection.createOffer(t);
                return o.d(oe, `[role=${this.role}] createOffer offer=${JSON.stringify(i, null, 1)}`), sr(ir(i, e));
            } catch (i) {
                throw g.WebrtcErrors.CreateOfferFailed(this.action, i.message);
            }
        });
    }
    createAnswer(e) {
        return c(this, null, function*() {
            try {
                let t = yield this.nativeConnection.createAnswer(e);
                return o.d(oe, `[role=${this.role}] createAnswer answer=${JSON.stringify(t, null, 1)}`), t;
            } catch (t) {
                throw g.WebrtcErrors.CreateAnswerFailed(this.action, t.message);
            }
        });
    }
    setLocalDescription(e) {
        return c(this, null, function*() {
            try {
                o.d(oe, `[role=${this.role}] setLocalDescription description=${JSON.stringify(e, null, 1)}`), yield this.nativeConnection.setLocalDescription(e);
            } catch (t) {
                throw g.WebrtcErrors.SetLocalDescriptionFailed(this.action, t.message);
            }
        });
    }
    setRemoteDescription(e) {
        return c(this, null, function*() {
            try {
                o.d(oe, `[role=${this.role}] setRemoteDescription description=${JSON.stringify(e, null, 1)}`), yield this.nativeConnection.setRemoteDescription(e);
            } catch (t) {
                throw g.WebrtcErrors.SetRemoteDescriptionFailed(this.action, t.message);
            }
        });
    }
    addIceCandidate(e) {
        return c(this, null, function*() {
            if (this.nativeConnection.signalingState === "closed") {
                o.d(oe, `[role=${this.role}] addIceCandidate signalling state closed`);
                return;
            }
            o.d(oe, `[role=${this.role}] addIceCandidate candidate=${JSON.stringify(e, null, 1)}`), yield this.nativeConnection.addIceCandidate(e);
        });
    }
    get remoteDescription() {
        return this.nativeConnection.remoteDescription;
    }
    getSenders() {
        return this.nativeConnection.getSenders();
    }
    logSelectedIceCandidatePairs() {
        try {
            (this.role === U.Publish ? this.getSenders() : this.getReceivers()).forEach((t)=>{
                var r;
                let i = (r = t.track) == null ? void 0 : r.kind;
                if (t.transport) {
                    let s = t.transport.iceTransport, n = ()=>{
                        typeof s.getSelectedCandidatePair == "function" && (this.selectedCandidatePair = s.getSelectedCandidatePair(), o.d(oe, `${U[this.role]} connection`, `selected ${i || "unknown"} candidate pair`, JSON.stringify(this.selectedCandidatePair, null, 2)));
                    };
                    typeof s.onselectedcandidatepairchange == "function" && (s.onselectedcandidatepairchange = n), n();
                }
            });
        } catch (e) {
            o.w(oe, `Error in logging selected ice candidate pair for ${U[this.role]} connection`, e);
        }
    }
    removeTrack(e) {
        this.nativeConnection.signalingState !== "closed" && this.nativeConnection.removeTrack(e);
    }
    setMaxBitrateAndFramerate(e) {
        return c(this, null, function*() {
            let t = e.settings.maxBitrate, i = e instanceof ee && e.settings.maxFramerate, r = this.getSenders().find((s)=>{
                var n;
                return ((n = s == null ? void 0 : s.track) == null ? void 0 : n.id) === e.getTrackIDBeingSent();
            });
            if (r) {
                let s = r.getParameters();
                s.encodings.length > 0 && (t && (s.encodings[0].maxBitrate = t * 1e3), i && (s.encodings[0].maxFramerate = i)), yield r.setParameters(s);
            } else o.w(oe, `no sender found to setMaxBitrate for track - ${e.trackId}, sentTrackId - ${e.getTrackIDBeingSent()}`);
        });
    }
    getStats() {
        return c(this, null, function*() {
            return yield this.nativeConnection.getStats();
        });
    }
    close() {
        return c(this, null, function*() {
            this.nativeConnection.close();
        });
    }
    getReceivers() {
        return this.nativeConnection.getReceivers();
    }
};
var Tt = class extends Ne {
    constructor(e, t, i){
        super(U.Publish, e);
        this.TAG = "[HMSPublishConnection]";
        this.observer = i, this.nativeConnection = new RTCPeerConnection(t), this.nativeConnection.createDataChannel(ot, {
            protocol: "SCTP"
        }), this.nativeConnection.onicecandidate = ({ candidate: r  })=>{
            r && e.trickle(this.role, r);
        }, this.nativeConnection.oniceconnectionstatechange = ()=>{
            this.observer.onIceConnectionChange(this.nativeConnection.iceConnectionState);
        }, this.nativeConnection.onconnectionstatechange = ()=>{
            this.observer.onConnectionStateChange(this.nativeConnection.connectionState);
        };
    }
    initAfterJoin() {
        this.nativeConnection.onnegotiationneeded = ()=>c(this, null, function*() {
                o.d(this.TAG, "onnegotiationneeded"), yield this.observer.onRenegotiationNeeded();
            });
    }
};
var ft = class {
    constructor(e, t, i = ""){
        this.TAG = "[HMSDataChannel]";
        this.nativeChannel = e, this.observer = t, this.metadata = i, e.onmessage = (r)=>{
            this.observer.onMessage(r.data);
        };
    }
    get id() {
        return this.nativeChannel.id;
    }
    get label() {
        return this.nativeChannel.label;
    }
    get readyState() {
        return this.nativeChannel.readyState;
    }
    send(e) {
        o.d(this.TAG, `[${this.metadata}] Sending [size=${e.length}] message=${e}`), this.nativeChannel.send(e);
    }
    close() {
        this.nativeChannel.close();
    }
};
var Et = class extends Ne {
    constructor(e, t, i){
        super(U.Subscribe, e);
        this.TAG = "[HMSSubscribeConnection]";
        this.remoteStreams = new Map;
        this.MAX_RETRIES = 3;
        this.pendingMessageQueue = [];
        this.eventEmitter = new (0, _eventemitter2Default.default)({
            maxListeners: 60
        });
        this.handlePendingApiMessages = ()=>{
            this.eventEmitter.emit("open", !0), this.pendingMessageQueue.length > 0 && (o.d(this.TAG, "Found pending message queue, sending messages"), this.pendingMessageQueue.forEach((e)=>this.sendOverApiDataChannel(e)), this.pendingMessageQueue.length = 0);
        };
        this.sendMessage = (e, t)=>c(this, null, function*() {
                var r;
                ((r = this.apiChannel) == null ? void 0 : r.readyState) !== "open" && (yield this.eventEmitter.waitFor("open"));
                let i;
                for(let s = 0; s < this.MAX_RETRIES; s++){
                    this.apiChannel.send(e), i = yield this.waitForResponse(t);
                    let n = i.error;
                    if (n) {
                        if (n.code === 404) {
                            o.d(this.TAG, `Track not found ${t}`, {
                                request: e,
                                try: s + 1,
                                error: n
                            });
                            break;
                        }
                        if (o.e(this.TAG, `Failed sending ${t}`, {
                            request: e,
                            try: s + 1,
                            error: n
                        }), !(n.code / 100 == 5 || n.code === 429)) throw Error(`code=${n.code}, message=${n.message}`);
                        let l = (2 + Math.random() * 2) * 1e3;
                        yield $(l);
                    } else break;
                }
                return i;
            });
        this.waitForResponse = (e)=>c(this, null, function*() {
                let t = yield this.eventEmitter.waitFor("message", function(r) {
                    return r.includes(e);
                }), i = JSON.parse(t[0]);
                return o.d(this.TAG, `response for ${e} -`, JSON.stringify(i, null, 2)), i;
            });
        this.observer = i, this.nativeConnection = new RTCPeerConnection(t), this.initNativeConnectionCallbacks();
    }
    initNativeConnectionCallbacks() {
        this.nativeConnection.oniceconnectionstatechange = ()=>{
            this.observer.onIceConnectionChange(this.nativeConnection.iceConnectionState);
        }, this.nativeConnection.onconnectionstatechange = ()=>{
            this.observer.onConnectionStateChange(this.nativeConnection.connectionState);
        }, this.nativeConnection.ondatachannel = (e)=>{
            e.channel.label === ot && (this.apiChannel = new ft(e.channel, {
                onMessage: (t)=>{
                    this.eventEmitter.emit("message", t), this.observer.onApiChannelMessage(t);
                }
            }, `role=${this.role}`), e.channel.onopen = this.handlePendingApiMessages);
        }, this.nativeConnection.onicecandidate = (e)=>{
            e.candidate !== null && this.signal.trickle(this.role, e.candidate);
        }, this.nativeConnection.ontrack = (e)=>{
            var l;
            let t = e.streams[0], i = t.id;
            if (!this.remoteStreams.has(i)) {
                let u = new we(t, this);
                this.remoteStreams.set(i, u);
            }
            t.addEventListener("removetrack", (u)=>{
                if (u.track.id !== e.track.id) return;
                let h = r.tracks.findIndex((p)=>{
                    var v;
                    return p.nativeTrack.id === u.track.id && e.transceiver.mid === ((v = p.transceiver) == null ? void 0 : v.mid);
                });
                if (h >= 0) {
                    let p = r.tracks[h];
                    this.observer.onTrackRemove(p), r.tracks.splice(h, 1), r.tracks.length === 0 && this.remoteStreams.delete(i);
                }
            });
            let r = this.remoteStreams.get(i), s = e.track.kind === "audio" ? Ee : X, n = new s(r, e.track);
            n.transceiver = e.transceiver;
            let d = rr(this.remoteDescription, (l = e.transceiver) == null ? void 0 : l.mid);
            d && n.setSdpTrackId(d), r.tracks.push(n), this.observer.onTrackAdd(n);
        };
    }
    sendOverApiDataChannel(e) {
        this.apiChannel && this.apiChannel.readyState === "open" ? this.apiChannel.send(e) : (o.w(this.TAG, `API Data channel not ${this.apiChannel ? "open" : "present"}, queueing`, e), this.pendingMessageQueue.push(e));
    }
    sendOverApiDataChannelWithResponse(e, t) {
        return c(this, null, function*() {
            let i = (0, _uuid.v4)(), r = JSON.stringify(S({
                id: t || i,
                jsonrpc: "2.0"
            }, e));
            return this.sendMessage(r, i);
        });
    }
    close() {
        var e = (t)=>super[t];
        return c(this, null, function*() {
            var i;
            yield e("close").call(this), (i = this.apiChannel) == null || i.close();
        });
    }
};
var nr = (a, e, t)=>c(void 0, null, function*() {
        var s;
        let i, r = {};
        if (!!((s = a.transceiver) == null ? void 0 : s.sender.track)) {
            try {
                i = yield a.transceiver.sender.getStats();
                let n = {}, d = {}, l = {};
                i == null || i.forEach((u)=>{
                    switch(u.type){
                        case "outbound-rtp":
                            d[u.id] = u;
                            break;
                        case "remote-inbound-rtp":
                            l[u.ssrc] = u;
                            break;
                        case "codec":
                            n[u.id] = u.mimeType;
                            break;
                        default:
                            break;
                    }
                }), Object.keys(S({}, d)).forEach((u)=>{
                    var j;
                    let h = (j = d[u]) == null ? void 0 : j.codecId, p = h ? n[h] : void 0, v;
                    p && (v = p.substring(p.indexOf("/") + 1));
                    let f = d[u], H = l[f.ssrc];
                    r[u] = D(S({}, f), {
                        bitrate: hi("bytesSent", f, t == null ? void 0 : t[u]),
                        packetsLost: H == null ? void 0 : H.packetsLost,
                        jitter: H == null ? void 0 : H.jitter,
                        roundTripTime: H == null ? void 0 : H.roundTripTime,
                        totalRoundTripTime: H == null ? void 0 : H.totalRoundTripTime,
                        peerName: e,
                        peerID: a.peerId,
                        codec: v
                    });
                });
            } catch (n) {
                o.w("[HMSWebrtcStats]", "Error in getting local track stats", a, n, n.name);
            }
            return r;
        }
    }), or = (a, e, t)=>c(void 0, null, function*() {
        var d;
        let i;
        try {
            i = yield (d = a.transceiver) == null ? void 0 : d.receiver.getStats();
        } catch (l) {
            o.w("[HMSWebrtcStats]", "Error in getting remote track stats", a, l);
        }
        let r = Kr(i), s = hi("bytesReceived", r, t), n = pi("packetsLost", r, t);
        return (r == null ? void 0 : r.remote) && Object.assign(r.remote, {
            packetsLostRate: pi("packetsLost", r.remote, t == null ? void 0 : t.remote)
        }), r && Object.assign(r, {
            bitrate: s,
            packetsLostRate: n,
            peerId: a.peerId,
            peerName: e,
            codec: r.codec
        });
    }), Kr = (a)=>{
    let e, t, i = {};
    a == null || a.forEach((n)=>{
        switch(n.type){
            case "inbound-rtp":
                e = n;
                break;
            case "outbound-rtp":
                e = n;
                break;
            case "remote-inbound-rtp":
                t = n;
                break;
            case "codec":
                i[n.id] = n.mimeType;
                break;
            default:
                break;
        }
    });
    let r = (e == null ? void 0 : e.codecId) ? i[e.codecId] : void 0, s;
    return r && (s = r.substring(r.indexOf("/") + 1)), e && Object.assign(e, {
        remote: t,
        codec: s
    });
}, ui = (a, e, t)=>{
    let i = qr(e), r = hi(a === "publish" ? "bytesSent" : "bytesReceived", i, t && t[a]);
    return i && Object.assign(i, {
        bitrate: r
    });
}, qr = (a)=>{
    let e;
    return a == null || a.forEach((t)=>{
        t.type === "transport" && (e = a == null ? void 0 : a.get(t.selectedCandidatePairId));
    }), e || a == null || a.forEach((t)=>{
        t.type === "candidate-pair" && t.selected && (e = t);
    }), e;
}, cr = (a)=>{
    let e = {
        packetsLost: 0,
        jitter: 0
    };
    return a == null || a.forEach((t)=>{
        t.packetsLost && (e.packetsLost += t.packetsLost), t.jitter > e.jitter && (e.jitter = t.jitter);
    }), e;
}, dr = (a, e)=>Array.from(new Set(a.concat(e))), hi = (a, e, t)=>pi(a, e, t) * 8, pi = (a, e, t)=>{
    let i = e && e[a], r = t ? t[a] : null;
    return [
        e,
        t,
        ne(i),
        ne(r)
    ].every((n)=>!!n) ? mi(i, r, e == null ? void 0 : e.timestamp, t == null ? void 0 : t.timestamp) * 1e3 : 0;
}, mi = (a, e, t, i)=>ne(a) && ne(e) && t && i ? (a - e) / (t - i) : 0;
var kt = class {
    constructor(e, t){
        this.getStats = e;
        this.store = t;
        this.TAG = "[HMSWebrtcStats]";
        this.peerStats = {};
        this.remoteTrackStats = {};
        this.localTrackStats = {};
        this.getLocalPeerStats = ()=>this.peerStats[this.localPeerID];
        this.getRemoteTrackStats = (e)=>this.remoteTrackStats[e];
        this.getLocalTrackStats = ()=>this.localTrackStats;
        this.updateStats = ()=>c(this, null, function*() {
                yield this.updateLocalPeerStats(), yield this.updateLocalTrackStats(), yield this.updateRemoteTrackStats();
            });
        this.updateLocalPeerStats = ()=>c(this, null, function*() {
                var h, p, v, f, H, j;
                let e = this.getLocalPeerStats(), t;
                try {
                    t = yield (p = (h = this.getStats).publish) == null ? void 0 : p.call(h);
                } catch (ge) {
                    o.w(this.TAG, "Error in getting publish stats", ge);
                }
                let i = t && ui("publish", t, e), r;
                try {
                    r = yield (f = (v = this.getStats).subscribe) == null ? void 0 : f.call(v);
                } catch (ge) {
                    o.w(this.TAG, "Error in getting subscribe stats", ge);
                }
                let s = r && ui("subscribe", r, e), { packetsLost: n , jitter: d  } = cr(r), l = mi(n, (H = e == null ? void 0 : e.subscribe) == null ? void 0 : H.packetsLost, s == null ? void 0 : s.timestamp, (j = e == null ? void 0 : e.subscribe) == null ? void 0 : j.timestamp), u = s && Object.assign(s, {
                    packetsLostRate: l,
                    jitter: d,
                    packetsLost: n
                });
                this.peerStats[this.localPeerID] = {
                    publish: i,
                    subscribe: u
                };
            });
        this.updateRemoteTrackStats = ()=>c(this, null, function*() {
                var i;
                let e = Array.from(this.store.getTracksMap().values()).filter((r)=>r instanceof X || r instanceof Ee), t = e.map((r)=>r.trackId);
                Object.keys(this.remoteTrackStats).forEach((r)=>{
                    t.includes(r) || delete this.remoteTrackStats[r];
                });
                for (let r of e){
                    let s = r.peerId && ((i = this.store.getPeerById(r.peerId)) == null ? void 0 : i.name), n = this.getRemoteTrackStats(r.trackId), d = yield or(r, s, n);
                    d && (this.remoteTrackStats[r.trackId] = d);
                }
            });
        this.updateLocalTrackStats = ()=>c(this, null, function*() {
                var i;
                let e = this.store.getLocalPeerTracks().reduce((r, s)=>(r[s.getTrackIDBeingSent()] = s, r), {}), t = dr(Object.keys(this.localTrackStats), Object.keys(e));
                for (let r of t){
                    let s = e[r];
                    if (s) {
                        let n = (i = this.store.getLocalPeer()) == null ? void 0 : i.name, d = yield nr(s, n, this.localTrackStats[r]);
                        d && (this.localTrackStats[r] = d);
                    } else delete this.localTrackStats[r];
                }
            });
        var i;
        this.localPeerID = (i = this.store.getLocalPeer()) == null ? void 0 : i.peerId;
    }
};
var yt = class {
    constructor(e, t, i, r){
        this.store = e;
        this.eventBus = t;
        this.publishConnection = i;
        this.subscribeConnection = r;
        this.TAG = "[HMSWebrtcInternals]";
        this.interval = qi;
        this.isMonitored = !1;
        this.handleStatsUpdate = ()=>c(this, null, function*() {
                var e;
                yield (e = this.hmsStats) == null ? void 0 : e.updateStats(), this.eventBus.statsUpdate.publish(this.hmsStats);
            });
    }
    getPublishPeerConnection() {
        return this.publishConnection;
    }
    getSubscribePeerConnection() {
        return this.subscribeConnection;
    }
    getCurrentStats() {
        return this.hmsStats;
    }
    onStatsChange(e) {
        return this.eventBus.statsUpdate.subscribe(e), ()=>{
            this.eventBus.statsUpdate.unsubscribe(e);
        };
    }
    setPeerConnections({ publish: e , subscribe: t  }) {
        var i, r;
        this.publishConnection = e, this.subscribeConnection = t, this.hmsStats = new kt({
            publish: (i = this.publishConnection) == null ? void 0 : i.getStats.bind(this.publishConnection),
            subscribe: (r = this.subscribeConnection) == null ? void 0 : r.getStats.bind(this.subscribeConnection)
        }, this.store);
    }
    start() {
        return c(this, null, function*() {
            if (this.isMonitored) {
                o.d(this.TAG, "Already started");
                return;
            }
            this.stop(), this.isMonitored = !0, o.d(this.TAG, "Starting Webrtc Stats Monitor"), this.startLoop().then(()=>o.d(this.TAG, "Stopping Webrtc Stats Monitor")).catch((e)=>o.e(this.TAG, e.message));
        });
    }
    stop() {
        this.isMonitored = !1;
    }
    startLoop() {
        return c(this, null, function*() {
            for(; this.isMonitored;)yield this.handleStatsUpdate(), yield $(this.interval);
        });
    }
    cleanUp() {
        this.stop(), this.eventBus.statsUpdate.removeAllListeners();
    }
};
var Mt = "[InitService]", At = class {
    static handleError(e, t) {
        switch(e.status){
            case 404:
                throw g.APIErrors.EndpointUnreachable(m.INIT, t.message || e.statusText);
            case 200:
                break;
            default:
                throw g.APIErrors.ServerErrors(t.code || e.status, m.INIT, t.message || (e == null ? void 0 : e.statusText));
        }
    }
    static fetchInitConfig(n) {
        return c(this, arguments, function*({ token: e , peerId: t , userAgent: i , initEndpoint: r = "https://prod-init.100ms.live" , region: s = ""  }) {
            o.d(Mt, `fetchInitConfig: initEndpoint=${r} token=${e} peerId=${t} region=${s} `);
            let d = jr(r, t, i, s);
            try {
                let l = yield fetch(d, {
                    headers: {
                        Authorization: `Bearer ${e}`
                    }
                });
                try {
                    let u = yield l.clone().json();
                    return this.handleError(l, u), o.d(Mt, `config is ${JSON.stringify(u, null, 2)}`), Jr(u);
                } catch (u) {
                    let h = yield l.text();
                    throw o.e(Mt, "json error", u.message, h), g.APIErrors.ServerErrors(l.status, m.INIT, h);
                }
            } catch (l) {
                let u = l;
                throw [
                    "Failed to fetch",
                    "NetworkError",
                    "ECONNRESET"
                ].some((h)=>u.message.includes(h)) ? g.APIErrors.EndpointUnreachable(m.INIT, u.message) : u;
            }
        });
    }
};
function jr(a, e, t, i) {
    try {
        let r = new URL("/init", a);
        return i && i.trim().length > 0 && r.searchParams.set("region", i.trim()), r.searchParams.set("peer_id", e), r.searchParams.set("user_agent_v2", t), r.toString();
    } catch (r) {
        let s = r;
        throw o.e(Mt, s.name, s.message), s;
    }
}
function Jr(a) {
    var e;
    return D(S({}, a), {
        rtcConfiguration: D(S({}, a.rtcConfiguration), {
            iceServers: (e = a.rtcConfiguration) == null ? void 0 : e.ice_servers
        })
    });
}
var ce;
(function(i) {
    i.FLAG_SERVER_SUB_DEGRADATION = "subscribeDegradation", i.FLAG_SERVER_SIMULCAST = "simulcast", i.FLAG_NON_WEBRTC_DISABLE_OFFER = "nonWebRTCDisableOffer";
})(ce || (ce = {}));
var Pt = class {
    constructor(e){
        this.TAG = "[SIGNAL]: ";
        this.pongResponseTimes = new fe(Wi);
        this.isJoinCompleted = !1;
        this.pendingTrickle = [];
        this.socket = null;
        this.callbacks = new Map;
        this._isConnected = !1;
        this.id = 0;
        this.onCloseHandler = ()=>{};
        this.resolvePingOnAnyResponse = ()=>{
            this.callbacks.forEach((e, t)=>{
                var i;
                ((i = e.metadata) == null ? void 0 : i.method) === b.PING && (e.resolve({
                    timestamp: Date.now()
                }), this.callbacks.delete(t));
            });
        };
        this.offlineListener = ()=>{
            o.d(this.TAG, "Window network offline"), this.setIsConnected(!1, "Window network offline");
        };
        this.onlineListener = ()=>{
            o.d(this.TAG, "Window network online"), this.observer.onNetworkOnline();
        };
        this.observer = e, window.addEventListener("offline", this.offlineListener), window.addEventListener("online", this.onlineListener), this.onMessageHandler = this.onMessageHandler.bind(this);
    }
    get isConnected() {
        return this._isConnected;
    }
    setIsConnected(e, t = "") {
        o.d(this.TAG, `isConnected set id: ${this.id}, oldValue: ${this._isConnected}, newValue: ${e}`), this._isConnected !== e && (this._isConnected && !e ? (this._isConnected = e, this.rejectPendingCalls(t), this.observer.onOffline(t)) : !this._isConnected && e && (this._isConnected = e, this.observer.onOnline()));
    }
    getPongResponseTimes() {
        return this.pongResponseTimes.toList();
    }
    internalCall(e, t) {
        return c(this, null, function*() {
            var s;
            let i = (0, _uuid.v4)(), r = {
                method: e,
                params: t,
                id: i,
                jsonrpc: "2.0"
            };
            (s = this.socket) == null || s.send(JSON.stringify(r));
            try {
                return yield new Promise((d, l)=>{
                    this.callbacks.set(i, {
                        resolve: d,
                        reject: l,
                        metadata: {
                            method: e
                        }
                    });
                });
            } catch (n) {
                if (n instanceof T) throw n;
                let d = n;
                throw g.WebsocketMethodErrors.ServerErrors(Number(d.code), Lt(e), d.message);
            }
        });
    }
    notify(e, t) {
        var r, s;
        let i = {
            method: e,
            params: t
        };
        ((r = this.socket) == null ? void 0 : r.readyState) === WebSocket.OPEN && ((s = this.socket) == null || s.send(JSON.stringify(i)));
    }
    open(e) {
        return new Promise((t, i)=>{
            let r = !1;
            this.socket && (this.socket.close(), this.socket.removeEventListener("close", this.onCloseHandler), this.socket.removeEventListener("message", this.onMessageHandler)), this.socket = new WebSocket(e);
            let s = (d)=>{
                o.e(this.TAG, "Error from websocket", d), r = !0, i(g.WebSocketConnectionErrors.FailedToConnect(m.JOIN, "Error opening websocket connection"));
            };
            this.onCloseHandler = (d)=>{
                o.e(`Websocket closed code=${d.code}`), r ? this.setIsConnected(!1, `code: ${d.code}${d.code !== 1e3 ? ", unexpected websocket close" : ""}`) : (r = !0, i(g.WebSocketConnectionErrors.AbnormalClose(m.JOIN, `Error opening websocket connection - websocket closed unexpectedly with code=${d.code}`)));
            }, this.socket.addEventListener("error", s);
            let n = ()=>{
                var d, l;
                r = !0, t(), this.setIsConnected(!0), this.id++, (d = this.socket) == null || d.removeEventListener("open", n), (l = this.socket) == null || l.removeEventListener("error", s), this.pingPongLoop(this.id);
            };
            this.socket.addEventListener("open", n), this.socket.addEventListener("close", this.onCloseHandler), this.socket.addEventListener("message", this.onMessageHandler);
        });
    }
    close() {
        return c(this, null, function*() {
            window.removeEventListener("offline", this.offlineListener), window.removeEventListener("online", this.onlineListener), this.socket ? (this.socket.close(1e3, "Normal Close"), this.setIsConnected(!1, "code: 1000, normal websocket close"), this.socket.removeEventListener("close", this.onCloseHandler), this.socket.removeEventListener("message", this.onMessageHandler)) : this.setIsConnected(!1, "websocket not connected yet");
        });
    }
    join(e, t, i, r, s, n) {
        return c(this, null, function*() {
            if (!this.isConnected) throw g.WebSocketConnectionErrors.WebSocketConnectionLost(m.JOIN, "Failed to send join over WS connection");
            let d = {
                name: e,
                disableVidAutoSub: i,
                data: t,
                offer: n,
                server_sub_degrade: r,
                simulcast: s
            }, l = yield this.internalCall(b.JOIN, d);
            return this.isJoinCompleted = !0, this.pendingTrickle.forEach(({ target: u , candidate: h  })=>this.trickle(u, h)), this.pendingTrickle.length = 0, o.d(this.TAG, `join: response=${JSON.stringify(l, null, 1)}`), l;
        });
    }
    trickle(e, t) {
        this.isJoinCompleted ? this.notify(b.TRICKLE, {
            target: e,
            candidate: t
        }) : this.pendingTrickle.push({
            target: e,
            candidate: t
        });
    }
    offer(e, t) {
        return c(this, null, function*() {
            return yield this.call(b.OFFER, {
                desc: e,
                tracks: Object.fromEntries(t)
            });
        });
    }
    answer(e) {
        this.notify(b.ANSWER, {
            desc: e
        });
    }
    trackUpdate(e) {
        this.notify(b.TRACK_UPDATE, {
            version: "1.0",
            tracks: Object.fromEntries(e)
        });
    }
    broadcast(e) {
        return c(this, null, function*() {
            return yield this.call(b.BROADCAST, S({
                version: "1.0"
            }, e.toSignalParams()));
        });
    }
    leave() {
        this.notify(b.LEAVE, {
            version: "1.0"
        });
    }
    endRoom(e, t) {
        return c(this, null, function*() {
            yield this.call(b.END_ROOM, {
                lock: e,
                reason: t
            });
        });
    }
    sendEvent(e) {
        if (!this.isConnected) throw Error(`${this.TAG} not connected. Could not send event ${e}`);
        this.notify(b.ANALYTICS, e.toSignalParams());
    }
    ping(e) {
        let t = Date.now(), i = new Promise((s)=>{
            setTimeout(()=>{
                s(Date.now() - t);
            }, e + 1);
        }), r = this.internalCall(b.PING, {
            timestamp: t
        }).then(()=>Date.now() - t).catch(()=>Date.now() - t);
        return Promise.race([
            i,
            r
        ]);
    }
    requestRoleChange(e) {
        return c(this, null, function*() {
            yield this.call(b.ROLE_CHANGE_REQUEST, e);
        });
    }
    requestBulkRoleChange(e) {
        return c(this, null, function*() {
            yield this.call(b.ROLE_CHANGE_REQUEST, e);
        });
    }
    acceptRoleChangeRequest(e) {
        return c(this, null, function*() {
            yield this.call(b.ROLE_CHANGE, e);
        });
    }
    requestTrackStateChange(e) {
        return c(this, null, function*() {
            yield this.call(b.TRACK_UPDATE_REQUEST, e);
        });
    }
    requestMultiTrackStateChange(e) {
        return c(this, null, function*() {
            yield this.call(b.CHANGE_TRACK_MUTE_STATE_REQUEST, e);
        });
    }
    removePeer(e) {
        return c(this, null, function*() {
            yield this.call(b.PEER_LEAVE_REQUEST, e);
        });
    }
    startRTMPOrRecording(e) {
        return c(this, null, function*() {
            yield this.call(b.START_RTMP_OR_RECORDING_REQUEST, S({
                version: "1.0"
            }, e));
        });
    }
    stopRTMPAndRecording() {
        return c(this, null, function*() {
            yield this.call(b.STOP_RTMP_AND_RECORDING_REQUEST, {
                version: "1.0"
            });
        });
    }
    startHLSStreaming(e) {
        return c(this, null, function*() {
            yield this.call(b.START_HLS_STREAMING, S({
                version: "1.0"
            }, e));
        });
    }
    stopHLSStreaming(e) {
        return c(this, null, function*() {
            yield this.call(b.STOP_HLS_STREAMING, S({
                version: "1.0"
            }, e));
        });
    }
    sendHLSTimedMetadata(e) {
        return c(this, null, function*() {
            yield this.call(b.HLS_TIMED_METADATA, S({
                version: "1.0"
            }, e));
        });
    }
    updatePeer(e) {
        return c(this, null, function*() {
            yield this.call(b.UPDATE_PEER_METADATA, S({
                version: "1.0"
            }, e));
        });
    }
    setSessionMetadata(e) {
        if (!this.isConnected) throw g.WebSocketConnectionErrors.WebSocketConnectionLost(m.RECONNECT_SIGNAL, "Failed to set session store value due to network disconnection");
        return this.call(b.SET_METADATA, S({
            version: "1.1"
        }, e));
    }
    listenMetadataChange(e) {
        if (!this.isConnected) throw g.WebSocketConnectionErrors.WebSocketConnectionLost(m.RECONNECT_SIGNAL, "Failed to observe session store key due to network disconnection");
        return this.call(b.LISTEN_METADATA_CHANGE, {
            version: "1.1",
            keys: e
        });
    }
    getSessionMetadata(e) {
        if (!this.isConnected) throw g.WebSocketConnectionErrors.WebSocketConnectionLost(m.RECONNECT_SIGNAL, "Failed to set session store value due to network disconnection");
        return this.call(b.GET_METADATA, {
            key: e,
            version: "1.1"
        });
    }
    onMessageHandler(e) {
        let t = e.data, i = JSON.parse(t);
        if (this.resolvePingOnAnyResponse(), i.id) this.handleResponseWithId(i);
        else if (i.method) this.handleResponseWithMethod(i);
        else throw Error(`WebSocket message has no 'method' or 'id' field, message=${i}`);
    }
    handleResponseWithId(e) {
        let t = e, i = t.id;
        if (this.callbacks.has(i)) {
            let r = this.callbacks.get(i);
            this.callbacks.delete(i), t.result ? r.resolve(t.result) : r.reject(t.error);
        } else this.observer.onNotification(t);
    }
    handleResponseWithMethod(e) {
        switch(e.method){
            case b.OFFER:
                this.observer.onOffer(e.params);
                break;
            case b.TRICKLE:
                this.observer.onTrickle(e.params);
                break;
            case b.SERVER_ERROR:
                this.observer.onServerError(g.WebsocketMethodErrors.ServerErrors(Number(e.params.code), m.NONE, e.params.message));
                break;
            case b.SERVER_WARNING:
                o.w(this.TAG, e.params);
                break;
            default:
                this.observer.onNotification(e);
                break;
        }
    }
    rejectPendingCalls(e = "") {
        this.callbacks.forEach((t, i)=>{
            var r, s, n, d;
            ((r = t.metadata) == null ? void 0 : r.method) !== b.PING && (o.e(this.TAG, `rejecting pending callback ${(s = t.metadata) == null ? void 0 : s.method}, id=${i}`), t.reject(g.WebSocketConnectionErrors.WebSocketConnectionLost(((n = t.metadata) == null ? void 0 : n.method) ? Lt((d = t.metadata) == null ? void 0 : d.method) : m.RECONNECT_SIGNAL, e)), this.callbacks.delete(i));
        });
    }
    pingPongLoop(e) {
        return c(this, null, function*() {
            var i, r;
            let t = ((i = window.HMS) == null ? void 0 : i.PING_TIMEOUT) || Bi;
            if (this.isConnected) {
                let s = yield this.ping(t);
                this.pongResponseTimes.enqueue(s), s > t ? (o.d(this.TAG, `Pong timeout ${e}, pageHidden=${Mi()}`), this.id === e && this.setIsConnected(!1, "ping pong failure")) : setTimeout(()=>this.pingPongLoop(e), ((r = window.HMS) == null ? void 0 : r.PING_INTERVAL) || $i);
            }
        });
    }
    call(e, t) {
        return c(this, null, function*() {
            let i = 3, r = g.WebsocketMethodErrors.ServerErrors(500, e, `Default ${e} error`), s;
            for(s = 1; s <= i; s++)try {
                return o.d(this.TAG, `Try number ${s} sending ${e}`, t), yield this.internalCall(e, t);
            } catch (n) {
                if (r = n, o.e(this.TAG, `Failed sending ${e} try: ${s}`, {
                    method: e,
                    params: t,
                    error: r
                }), !(parseInt(`${r.code / 100}`) === 5 || r.code === 429)) break;
                let l = (2 + Math.random() * 2) * 1e3;
                yield $(l);
            }
            throw o.e(`Sending ${e} over WS failed after ${Math.min(s, i)} retries`, {
                method: e,
                params: t,
                error: r
            }), r;
        });
    }
};
var lr = ()=>{
    if (!B || typeof navigator.connection == "undefined") return;
    let a = navigator.connection;
    return {
        downlink: a.downlink,
        downlinkMax: a.downlinkMax,
        effectiveType: a.effectiveType,
        rtt: a.rtt,
        saveData: a.saveData,
        type: a.type
    };
};
var P = "[HMSTransport]:", bt = class {
    constructor(e, t, i, r, s, n){
        this.observer = e;
        this.deviceManager = t;
        this.store = i;
        this.eventBus = r;
        this.analyticsEventsService = s;
        this.analyticsTimer = n;
        this.state = L.Disconnected;
        this.trackStates = new Map;
        this.publishConnection = null;
        this.subscribeConnection = null;
        this.maxSubscribeBitrate = 0;
        this.joinRetryCount = 0;
        this.callbacks = new Map;
        this.signalObserver = {
            onOffer: (e)=>c(this, null, function*() {
                    try {
                        if (!this.subscribeConnection) return;
                        yield this.subscribeConnection.setRemoteDescription(e), o.d(P, `[SUBSCRIBE] Adding ${this.subscribeConnection.candidates.length} ice-candidates`, this.subscribeConnection.candidates);
                        for (let i of this.subscribeConnection.candidates)yield this.subscribeConnection.addIceCandidate(i);
                        this.subscribeConnection.candidates.length = 0;
                        let t = yield this.subscribeConnection.createAnswer();
                        yield this.subscribeConnection.setLocalDescription(t), this.signal.answer(t), o.d(P, "[role=SUBSCRIBE] onOffer renegotiation DONE ✅");
                    } catch (t) {
                        o.d(P, "[role=SUBSCRIBE] onOffer renegotiation FAILED ❌", t), this.state = L.Failed;
                        let i;
                        t instanceof T ? i = t : i = g.GenericErrors.Unknown(m.PUBLISH, t.message), this.observer.onFailure(i), this.eventBus.analytics.publish(w.subscribeFail(i));
                    }
                }),
            onTrickle: (e)=>c(this, null, function*() {
                    let t = e.target === U.Publish ? this.publishConnection : this.subscribeConnection;
                    (t == null ? void 0 : t.remoteDescription) ? yield t.addIceCandidate(e.candidate) : t == null || t.candidates.push(e.candidate);
                }),
            onNotification: (e)=>this.observer.onNotification(e),
            onServerError: (e)=>c(this, null, function*() {
                    yield this.observer.onStateChange(L.Failed, e);
                }),
            onFailure: (e)=>{
                this.joinParameters && this.retryScheduler.schedule({
                    category: R.SignalDisconnect,
                    error: e,
                    task: this.retrySignalDisconnectTask,
                    originalState: this.state
                });
            },
            onOffline: (e)=>c(this, null, function*() {
                    o.d(P, "socket offline", L[this.state]);
                    try {
                        this.state !== L.Leaving && this.joinParameters && this.retryScheduler.schedule({
                            category: R.SignalDisconnect,
                            error: g.WebSocketConnectionErrors.WebSocketConnectionLost(m.RECONNECT_SIGNAL, e),
                            task: this.retrySignalDisconnectTask,
                            originalState: this.state
                        });
                    } catch (t) {
                        console.error(t);
                    }
                }),
            onOnline: ()=>{
                var e;
                o.d(P, "socket online", L[this.state]), this.analyticsSignalTransport.flushFailedEvents((e = this.store.getLocalPeer()) == null ? void 0 : e.peerId);
            },
            onNetworkOnline: ()=>{
                this.analyticsEventsService.flushFailedClientEvents();
            }
        };
        this.signal = new Pt(this.signalObserver);
        this.analyticsSignalTransport = new ci(this.signal);
        this.publishConnectionObserver = {
            onRenegotiationNeeded: ()=>c(this, null, function*() {
                    yield this.performPublishRenegotiation();
                }),
            onIceConnectionChange: (e)=>c(this, null, function*() {
                    (e === "disconnected" ? o.w.bind(o) : o.d.bind(o))(P, `Publish ice connection state change: ${e}`);
                }),
            onConnectionStateChange: (e)=>c(this, null, function*() {
                    var i, r, s, n, d;
                    (e === "disconnected" ? o.w.bind(o) : o.d.bind(o))(P, `Publish connection state change: ${e}`), e === "connected" && ((i = this.publishConnection) == null || i.logSelectedIceCandidatePairs()), e === "disconnected" && setTimeout(()=>{
                        var l, u, h, p, v;
                        ((l = this.publishConnection) == null ? void 0 : l.connectionState) === "disconnected" && this.handleIceConnectionFailure(U.Publish, g.WebrtcErrors.ICEDisconnected(m.PUBLISH, `local candidate - ${(h = (u = this.publishConnection) == null ? void 0 : u.selectedCandidatePair) == null ? void 0 : h.local.candidate}; remote candidate - ${(v = (p = this.publishConnection) == null ? void 0 : p.selectedCandidatePair) == null ? void 0 : v.remote.candidate}`));
                    }, Ft), e === "failed" && (yield this.handleIceConnectionFailure(U.Publish, g.WebrtcErrors.ICEFailure(m.PUBLISH, `local candidate - ${(s = (r = this.publishConnection) == null ? void 0 : r.selectedCandidatePair) == null ? void 0 : s.local.candidate}; remote candidate - ${(d = (n = this.publishConnection) == null ? void 0 : n.selectedCandidatePair) == null ? void 0 : d.remote.candidate}`)));
                })
        };
        this.subscribeConnectionObserver = {
            onApiChannelMessage: (e)=>{
                this.observer.onNotification(JSON.parse(e));
            },
            onTrackAdd: (e)=>{
                o.d(P, "[Subscribe] onTrackAdd", `${e}`), this.observer.onTrackAdd(e);
            },
            onTrackRemove: (e)=>{
                o.d(P, "[Subscribe] onTrackRemove", `${e}`), this.observer.onTrackRemove(e);
            },
            onIceConnectionChange: (e)=>c(this, null, function*() {
                    if ((e === "disconnected" ? o.w.bind(o) : o.d.bind(o))(P, `Subscribe ice connection state change: ${e}`), e === "connected") {
                        let i = this.callbacks.get(De);
                        this.callbacks.delete(De), i && i.promise.resolve(!0);
                    }
                }),
            onConnectionStateChange: (e)=>c(this, null, function*() {
                    var i, r, s, n;
                    (e === "disconnected" ? o.w.bind(o) : o.d.bind(o))(P, `Subscribe connection state change: ${e}`), e === "failed" && (yield this.handleIceConnectionFailure(U.Subscribe, g.WebrtcErrors.ICEFailure(m.SUBSCRIBE, `local candidate - ${(r = (i = this.subscribeConnection) == null ? void 0 : i.selectedCandidatePair) == null ? void 0 : r.local.candidate}; remote candidate - ${(n = (s = this.subscribeConnection) == null ? void 0 : s.selectedCandidatePair) == null ? void 0 : n.remote.candidate}`))), e === "disconnected" && setTimeout(()=>{
                        var d, l, u, h, p;
                        ((d = this.subscribeConnection) == null ? void 0 : d.connectionState) === "disconnected" && this.handleIceConnectionFailure(U.Subscribe, g.WebrtcErrors.ICEDisconnected(m.SUBSCRIBE, `local candidate - ${(u = (l = this.subscribeConnection) == null ? void 0 : l.selectedCandidatePair) == null ? void 0 : u.local.candidate}; remote candidate - ${(p = (h = this.subscribeConnection) == null ? void 0 : h.selectedCandidatePair) == null ? void 0 : p.remote.candidate}`));
                    }, Ft), e === "connected" && this.handleSubscribeConnectionConnected();
                })
        };
        this.handleLocalRoleUpdate = (i)=>c(this, [
                i
            ], function*({ oldRole: e , newRole: t  }) {
                !(!this.doesRoleNeedWebRTC(e) && this.doesRoleNeedWebRTC(t)) || (o.d(P, "Local peer role updated to webrtc role, creating PeerConnections and performing inital publish negotiation ⏳"), this.createPeerConnections(), yield this.negotiateOnFirstPublish());
            });
        this.retryPublishIceFailedTask = ()=>c(this, null, function*() {
                if (this.publishConnection) {
                    let e = new Promise((t, i)=>{
                        this.callbacks.set(_e, {
                            promise: {
                                resolve: t,
                                reject: i
                            },
                            action: m.RESTART_ICE,
                            extra: {}
                        });
                    });
                    yield this.performPublishRenegotiation({
                        iceRestart: this.publishConnection.connectionState !== "connected"
                    }), yield e;
                }
                return !0;
            });
        this.retrySubscribeIceFailedTask = ()=>c(this, null, function*() {
                if (this.subscribeConnection && this.subscribeConnection.connectionState !== "connected") {
                    let e = new Promise((i, r)=>{
                        this.callbacks.set(De, {
                            promise: {
                                resolve: i,
                                reject: r
                            },
                            action: m.RESTART_ICE,
                            extra: {}
                        });
                    }), t = new Promise((i)=>{
                        setTimeout(i, Ki, !1);
                    });
                    return Promise.race([
                        e,
                        t
                    ]);
                }
                return !0;
            });
        this.retrySignalDisconnectTask = ()=>c(this, null, function*() {
                var t;
                o.d(P, "retrySignalDisconnectTask", {
                    signalConnected: this.signal.isConnected
                }), this.signal.isConnected || (yield this.internalConnect(this.joinParameters.authToken, this.joinParameters.endpoint, this.joinParameters.peerId));
                let e = ((t = this.store.getRoom()) == null ? void 0 : t.joinedAt) ? this.signal.isConnected && (yield this.retryPublishIceFailedTask()) : this.signal.isConnected;
                return this.signal.trackUpdate(this.trackStates), e;
            });
        var l, u;
        this.webrtcInternals = new yt(this.store, this.eventBus, (l = this.publishConnection) == null ? void 0 : l.nativeConnection, (u = this.subscribeConnection) == null ? void 0 : u.nativeConnection);
        let d = (h, p)=>c(this, null, function*() {
                h !== this.state && (this.state = h, yield this.observer.onStateChange(this.state, p));
            });
        this.retryScheduler = new ai(d, this.sendErrorAnalyticsEvent.bind(this)), this.eventBus.statsUpdate.subscribe((h)=>{
            var v, f;
            let p = ((f = (v = h.getLocalPeerStats()) == null ? void 0 : v.subscribe) == null ? void 0 : f.bitrate) || 0;
            this.maxSubscribeBitrate = Math.max(this.maxSubscribeBitrate, p);
        }), this.eventBus.localAudioEnabled.subscribe(({ track: h  })=>this.trackUpdate(h)), this.eventBus.localVideoEnabled.subscribe(({ track: h  })=>this.trackUpdate(h));
    }
    getWebrtcInternals() {
        return this.webrtcInternals;
    }
    isFlagEnabled(e) {
        var r;
        let t = (r = this.initConfig) == null ? void 0 : r.config;
        return ((t == null ? void 0 : t.enabledFlags) || []).includes(e);
    }
    preview(e, t, i, r, s = !1) {
        return c(this, null, function*() {
            let n = yield this.connect(e, t, i, r, s);
            return this.state = L.Preview, this.observer.onStateChange(this.state), n;
        });
    }
    join(e, t, i, r, s = !1) {
        return c(this, null, function*() {
            o.d(P, "join: started ⏰");
            try {
                (!this.signal.isConnected || !this.initConfig) && (yield this.connect(e, r, t, i, s)), this.validateNotDisconnected("connect"), this.initConfig && (yield this.waitForLocalRoleAvailability(), yield this.createConnectionsAndNegotiateJoin(i, s), yield this.initRtcStatsMonitor(), o.d(P, "✅ join: Negotiated over PUBLISH connection"));
            } catch (n) {
                o.e(P, `join: failed \u274C [token=${e}]`, n), this.state = L.Failed;
                let d = n;
                throw d.isTerminal = d.isTerminal || d.code === 500, yield this.observer.onStateChange(this.state, d), d;
            }
            o.i(P, "✅ join: successful"), this.state = L.Joined, this.observer.onStateChange(this.state);
        });
    }
    connect(e, t, i, r, s = !1) {
        return c(this, null, function*() {
            this.setTransportStateForConnect(), this.joinParameters = new ri(e, i, r.name, r.metaData, t, s);
            try {
                return yield this.internalConnect(e, t, i);
            } catch (n) {
                if (n instanceof T && ([
                    E.WebSocketConnectionErrors.WEBSOCKET_CONNECTION_LOST,
                    E.WebSocketConnectionErrors.FAILED_TO_CONNECT,
                    E.WebSocketConnectionErrors.ABNORMAL_CLOSE,
                    E.APIErrors.ENDPOINT_UNREACHABLE
                ].includes(n.code) || n.code.toString().startsWith("5") || n.code.toString().startsWith("429"))) {
                    let l = ()=>c(this, null, function*() {
                            return yield this.internalConnect(e, t, i), Boolean(this.initConfig && this.initConfig.endpoint);
                        });
                    yield this.retryScheduler.schedule({
                        category: R.ConnectFailed,
                        error: n,
                        task: l,
                        originalState: this.state,
                        maxFailedRetries: We,
                        changeState: !1
                    });
                } else throw n;
            }
        });
    }
    leave(e) {
        return c(this, null, function*() {
            var t, i, r;
            this.retryScheduler.reset(), this.joinParameters = void 0, o.d(P, "leaving in transport");
            try {
                if (this.state = L.Leaving, (t = this.webrtcInternals) == null || t.cleanUp(), yield (i = this.publishConnection) == null ? void 0 : i.close(), yield (r = this.subscribeConnection) == null ? void 0 : r.close(), e) try {
                    this.signal.leave(), o.d(P, "signal leave done");
                } catch (s) {
                    o.w(P, "failed to send leave on websocket to server", s);
                }
                this.analyticsEventsService.flushFailedClientEvents(), this.analyticsEventsService.reset(), yield this.signal.close();
            } catch (s) {
                this.eventBus.analytics.publish(w.disconnect(s)), o.e(P, "leave: FAILED ❌", s);
            } finally{
                this.state = L.Disconnected, this.observer.onStateChange(this.state);
            }
        });
    }
    publish(e) {
        return c(this, null, function*() {
            for (let t of e)try {
                yield this.publishTrack(t);
            } catch (i) {
                this.eventBus.analytics.publish(w.publish({
                    devices: this.deviceManager.getDevices(),
                    error: i
                }));
            }
        });
    }
    unpublish(e) {
        return c(this, null, function*() {
            for (let t of e)yield this.unpublishTrack(t);
        });
    }
    sendMessage(e) {
        return c(this, null, function*() {
            return yield this.signal.broadcast(e);
        });
    }
    trackUpdate(e) {
        let i = Array.from(this.trackStates.values()).find((r)=>e.type === r.type && e.source === r.source);
        if (i) {
            let r = new gt(D(S({}, i), {
                mute: !e.enabled
            }));
            this.trackStates.set(i.track_id, r), o.d(P, "Track Update", this.trackStates, e), this.signal.trackUpdate(new Map([
                [
                    i.track_id,
                    r
                ]
            ]));
        }
    }
    changeRole(e, t, i = !1) {
        return c(this, null, function*() {
            yield this.signal.requestRoleChange({
                requested_for: e.peerId,
                role: t,
                force: i
            });
        });
    }
    changeRoleOfPeer(e, t, i) {
        return c(this, null, function*() {
            yield this.signal.requestRoleChange({
                requested_for: e.peerId,
                role: t,
                force: i
            });
        });
    }
    changeRoleOfPeersWithRoles(e, t) {
        return c(this, null, function*() {
            yield this.signal.requestBulkRoleChange({
                roles: e.map((i)=>i.name),
                role: t,
                force: !0
            });
        });
    }
    acceptRoleChange(e) {
        return c(this, null, function*() {
            var t;
            yield this.signal.acceptRoleChangeRequest({
                requested_by: (t = e.requestedBy) == null ? void 0 : t.peerId,
                role: e.role.name,
                token: e.token
            });
        });
    }
    endRoom(e, t) {
        return c(this, null, function*() {
            yield this.signal.endRoom(e, t);
        });
    }
    removePeer(e, t) {
        return c(this, null, function*() {
            yield this.signal.removePeer({
                requested_for: e,
                reason: t
            });
        });
    }
    startRTMPOrRecording(e) {
        return c(this, null, function*() {
            var i;
            let t = {
                meeting_url: e.meetingURL,
                record: e.record
            };
            ((i = e.rtmpURLs) == null ? void 0 : i.length) && (t.rtmp_urls = e.rtmpURLs), e.resolution && (t.resolution = e.resolution), yield this.signal.startRTMPOrRecording(t);
        });
    }
    stopRTMPOrRecording() {
        return c(this, null, function*() {
            yield this.signal.stopRTMPAndRecording();
        });
    }
    startHLSStreaming(e) {
        return c(this, null, function*() {
            let t = {};
            e && e.variants && e.variants.length > 0 && (t.variants = e.variants.map((i)=>{
                let r = {
                    meeting_url: i.meetingURL
                };
                return i.metadata && (r.metadata = i.metadata), r;
            })), (e == null ? void 0 : e.recording) && (t.hls_recording = {
                single_file_per_layer: e.recording.singleFilePerLayer,
                hls_vod: e.recording.hlsVod
            }), yield this.signal.startHLSStreaming(t);
        });
    }
    stopHLSStreaming(e) {
        return c(this, null, function*() {
            var t;
            if (e) {
                let i = {
                    variants: (t = e == null ? void 0 : e.variants) == null ? void 0 : t.map((r)=>{
                        let s = {
                            meeting_url: r.meetingURL
                        };
                        return r.metadata && (s.metadata = r.metadata), s;
                    })
                };
                yield this.signal.stopHLSStreaming(i);
            }
            yield this.signal.stopHLSStreaming();
        });
    }
    sendHLSTimedMetadata(e) {
        return c(this, null, function*() {
            if (e.length > 0) {
                let t = {
                    metadata_objs: e
                };
                yield this.signal.sendHLSTimedMetadata(t);
            }
        });
    }
    changeName(e) {
        return c(this, null, function*() {
            let t = this.store.getLocalPeer();
            t && t.name !== e && (yield this.signal.updatePeer({
                name: e
            }));
        });
    }
    changeMetadata(e) {
        return c(this, null, function*() {
            yield this.signal.updatePeer({
                data: e
            });
        });
    }
    getSessionMetadata(e) {
        return this.signal.getSessionMetadata(e);
    }
    setSessionMetadata(e) {
        return this.signal.setSessionMetadata(e);
    }
    listenMetadataChange(e) {
        return this.signal.listenMetadataChange(e);
    }
    changeTrackState(e) {
        return c(this, null, function*() {
            yield this.signal.requestTrackStateChange(e);
        });
    }
    changeMultiTrackState(e) {
        return c(this, null, function*() {
            yield this.signal.requestMultiTrackStateChange(e);
        });
    }
    publishTrack(e) {
        return c(this, null, function*() {
            e.publishedTrackId = e.getTrackIDBeingSent(), o.d(P, `\u23F3 publishTrack: trackId=${e.trackId}, toPublishTrackId=${e.publishedTrackId}`, `${e}`), this.trackStates.set(e.publishedTrackId, new gt(e));
            let t = new Promise((s, n)=>{
                this.callbacks.set(_e, {
                    promise: {
                        resolve: s,
                        reject: n
                    },
                    action: m.PUBLISH,
                    extra: {}
                });
            }), i = e.stream;
            i.setConnection(this.publishConnection);
            let r = this.store.getSimulcastLayers(e.source);
            i.addTransceiver(e, r), o.time(`publish-${e.trackId}-${e.type}`), yield t, o.timeEnd(`publish-${e.trackId}-${e.type}`), this.store.addTrack(e), yield i.setMaxBitrateAndFramerate(e).then(()=>{
                o.d(P, `Setting maxBitrate=${e.settings.maxBitrate} kpbs${e instanceof ee ? ` and maxFramerate=${e.settings.maxFramerate}` : ""} for ${e.source} ${e.type} ${e.trackId}`);
            }).catch((s)=>o.w(P, "Failed setting maxBitrate and maxFramerate", s)), e.isPublished = !0, o.d(P, `\u2705 publishTrack: trackId=${e.trackId}`, `${e}`, this.callbacks);
        });
    }
    unpublishTrack(e) {
        return c(this, null, function*() {
            if (o.d(P, `\u23F3 unpublishTrack: trackId=${e.trackId}`, `${e}`), e.publishedTrackId && this.trackStates.has(e.publishedTrackId)) this.trackStates.delete(e.publishedTrackId);
            else {
                let s = Array.from(this.trackStates.values()).find((n)=>e.type === n.type && e.source === n.source);
                s && this.trackStates.delete(s.track_id);
            }
            let t = new Promise((r, s)=>{
                this.callbacks.set(_e, {
                    promise: {
                        resolve: r,
                        reject: s
                    },
                    action: m.UNPUBLISH,
                    extra: {}
                });
            });
            e.stream.removeSender(e), yield t, yield e.cleanup(), this.store.removeTrack(e), o.d(P, `\u2705 unpublishTrack: trackId=${e.trackId}`, this.callbacks);
        });
    }
    waitForLocalRoleAvailability() {
        if (!this.store.hasRoleDetailsArrived()) return new Promise((e)=>{
            this.eventBus.policyChange.subscribeOnce(()=>e());
        });
    }
    createConnectionsAndNegotiateJoin(e, t = !1) {
        return c(this, null, function*() {
            let i = this.doesLocalPeerNeedWebRTC();
            i && this.createPeerConnections(), this.analyticsTimer.start(M.JOIN_RESPONSE), yield this.negotiateJoinWithRetry({
                name: e.name,
                data: e.metaData,
                autoSubscribeVideo: t,
                isWebRTC: i
            }), this.analyticsTimer.end(M.JOIN_RESPONSE);
        });
    }
    createPeerConnections() {
        this.initConfig && (this.publishConnection || (this.publishConnection = new Tt(this.signal, this.initConfig.rtcConfiguration, this.publishConnectionObserver)), this.subscribeConnection || (this.subscribeConnection = new Et(this.signal, this.initConfig.rtcConfiguration, this.subscribeConnectionObserver)));
    }
    negotiateJoinWithRetry(s) {
        return c(this, arguments, function*({ name: e , data: t , autoSubscribeVideo: i , isWebRTC: r = !0  }) {
            try {
                yield this.negotiateJoin({
                    name: e,
                    data: t,
                    autoSubscribeVideo: i,
                    isWebRTC: r
                });
            } catch (n) {
                o.e(P, "Join negotiation failed ❌", n);
                let d = n instanceof T ? n : g.WebsocketMethodErrors.ServerErrors(500, m.JOIN, `Websocket join error - ${n.message}`);
                if (parseInt(`${d.code / 100}`) === 5 || [
                    E.WebSocketConnectionErrors.WEBSOCKET_CONNECTION_LOST,
                    429
                ].includes(d.code)) {
                    this.joinRetryCount = 0, d.isTerminal = !1;
                    let u = ()=>c(this, null, function*() {
                            return this.joinRetryCount++, yield this.negotiateJoin({
                                name: e,
                                data: t,
                                autoSubscribeVideo: i,
                                isWebRTC: r
                            });
                        });
                    yield this.retryScheduler.schedule({
                        category: R.JoinWSMessageFailed,
                        error: d,
                        task: u,
                        originalState: L.Joined,
                        maxFailedRetries: 3,
                        changeState: !1
                    });
                } else throw n;
            }
        });
    }
    negotiateJoin(s) {
        return c(this, arguments, function*({ name: e , data: t , autoSubscribeVideo: i , isWebRTC: r = !0  }) {
            return r ? yield this.negotiateJoinWebRTC({
                name: e,
                data: t,
                autoSubscribeVideo: i
            }) : yield this.negotiateJoinNonWebRTC({
                name: e,
                data: t,
                autoSubscribeVideo: i
            });
        });
    }
    negotiateJoinWebRTC(r) {
        return c(this, arguments, function*({ name: e , data: t , autoSubscribeVideo: i  }) {
            if (o.d(P, "⏳ join: Negotiating over PUBLISH connection"), !this.publishConnection) return o.e(P, "Publish peer connection not found, cannot negotiate"), !1;
            let s = yield this.publishConnection.createOffer();
            yield this.publishConnection.setLocalDescription(s);
            let n = this.isFlagEnabled(ce.FLAG_SERVER_SUB_DEGRADATION), d = this.isFlagEnabled(ce.FLAG_SERVER_SIMULCAST), l = yield this.signal.join(e, t, !i, n, d, s);
            yield this.publishConnection.setRemoteDescription(l);
            for (let u of this.publishConnection.candidates)yield this.publishConnection.addIceCandidate(u);
            return this.publishConnection.initAfterJoin(), !!l;
        });
    }
    negotiateJoinNonWebRTC(r) {
        return c(this, arguments, function*({ name: e , data: t , autoSubscribeVideo: i  }) {
            o.d(P, "⏳ join: Negotiating Non-WebRTC");
            let s = this.isFlagEnabled(ce.FLAG_SERVER_SUB_DEGRADATION), n = this.isFlagEnabled(ce.FLAG_SERVER_SIMULCAST);
            return !!(yield this.signal.join(e, t, !i, s, n));
        });
    }
    negotiateOnFirstPublish() {
        return c(this, null, function*() {
            if (o.d(P, "⏳ Negotiating offer over PUBLISH connection"), !this.publishConnection) return o.e(P, "Publish peer connection not found, cannot negotiate"), !1;
            let e = yield this.publishConnection.createOffer(this.trackStates);
            yield this.publishConnection.setLocalDescription(e);
            let t = yield this.signal.offer(e, this.trackStates);
            yield this.publishConnection.setRemoteDescription(t);
            for (let i of this.publishConnection.candidates)yield this.publishConnection.addIceCandidate(i);
            return this.publishConnection.initAfterJoin(), !!t;
        });
    }
    performPublishRenegotiation(e) {
        return c(this, null, function*() {
            o.d(P, "⏳ [role=PUBLISH] onRenegotiationNeeded START", this.trackStates);
            let t = this.callbacks.get(_e);
            if (!!t) {
                if (!this.publishConnection) {
                    o.e(P, "Publish peer connection not found, cannot renegotiate");
                    return;
                }
                try {
                    let i = yield this.publishConnection.createOffer(this.trackStates, e);
                    yield this.publishConnection.setLocalDescription(i), o.time("renegotiation-offer-exchange");
                    let r = yield this.signal.offer(i, this.trackStates);
                    this.callbacks.delete(_e), o.timeEnd("renegotiation-offer-exchange"), yield this.publishConnection.setRemoteDescription(r), t.promise.resolve(!0), o.d(P, "[role=PUBLISH] onRenegotiationNeeded DONE ✅");
                } catch (i) {
                    let r;
                    i instanceof T ? r = i : r = g.GenericErrors.Unknown(m.PUBLISH, i.message), t.promise.reject(r), o.d(P, "[role=PUBLISH] onRenegotiationNeeded FAILED ❌");
                }
            }
        });
    }
    handleIceConnectionFailure(e, t) {
        return c(this, null, function*() {
            this.retryScheduler.isTaskInProgress(U.Publish ? R.PublishIceConnectionFailed : R.SubscribeIceConnectionFailed) || (e === U.Publish ? this.retryScheduler.schedule({
                category: R.PublishIceConnectionFailed,
                error: t,
                task: this.retryPublishIceFailedTask,
                originalState: L.Joined
            }) : this.retryScheduler.schedule({
                category: R.SubscribeIceConnectionFailed,
                error: t,
                task: this.retrySubscribeIceFailedTask,
                originalState: L.Joined,
                maxFailedRetries: 1
            }));
        });
    }
    internalConnect(e, t, i) {
        return c(this, null, function*() {
            o.d(P, "connect: started ⏰");
            let r = new Date;
            try {
                return this.analyticsTimer.start(M.INIT), this.initConfig = yield At.fetchInitConfig({
                    token: e,
                    peerId: i,
                    userAgent: this.store.getUserAgent(),
                    initEndpoint: t
                }), this.analyticsTimer.end(M.INIT), ae.setWebsocketEndpoint(this.initConfig.endpoint), this.validateNotDisconnected("post init"), yield this.openSignal(e, i), this.store.setSimulcastEnabled(this.isFlagEnabled(ce.FLAG_SERVER_SIMULCAST)), o.d(P, "Adding Analytics Transport: JsonRpcSignal"), this.analyticsEventsService.setTransport(this.analyticsSignalTransport), this.analyticsEventsService.flush(), this.initConfig;
            } catch (s) {
                throw this.state !== L.Reconnecting && this.eventBus.analytics.publish(w.connect(s, this.getAdditionalAnalyticsProperties(), r, new Date, t)), o.e(P, "❌ internal connect: failed", s), s;
            }
        });
    }
    validateNotDisconnected(e) {
        if (this.state === L.Disconnected) throw o.w(P, "aborting join as transport state is disconnected"), g.GenericErrors.ValidationFailed(`leave called before join could complete - stage=${e}`);
    }
    openSignal(e, t) {
        return c(this, null, function*() {
            if (!this.initConfig) throw g.APIErrors.InitConfigNotAvailable(m.INIT, "Init Config not found");
            o.d(P, "⏳ internal connect: connecting to ws endpoint", this.initConfig.endpoint);
            let i = new URL(this.initConfig.endpoint);
            i.searchParams.set("peer", t), i.searchParams.set("token", e), i.searchParams.set("user_agent_v2", this.store.getUserAgent()), this.endpoint = i.toString(), this.analyticsTimer.start(M.WEBSOCKET_CONNECT), yield this.signal.open(this.endpoint), this.analyticsTimer.end(M.WEBSOCKET_CONNECT), this.analyticsTimer.start(M.ON_POLICY_CHANGE), this.analyticsTimer.start(M.ROOM_STATE), o.d(P, "✅ internal connect: connected to ws endpoint");
        });
    }
    initRtcStatsMonitor() {
        return c(this, null, function*() {
            var e, t, i;
            (i = this.webrtcInternals) == null || i.setPeerConnections({
                publish: (e = this.publishConnection) == null ? void 0 : e.nativeConnection,
                subscribe: (t = this.subscribeConnection) == null ? void 0 : t.nativeConnection
            });
        });
    }
    doesRoleNeedWebRTC(e) {
        var r, s;
        if (!this.isFlagEnabled(ce.FLAG_NON_WEBRTC_DISABLE_OFFER)) return !0;
        let t = Boolean(e.publishParams.allowed && ((r = e.publishParams.allowed) == null ? void 0 : r.length) > 0), i = Boolean(e.subscribeParams.subscribeToRoles && ((s = e.subscribeParams.subscribeToRoles) == null ? void 0 : s.length) > 0);
        return t || i;
    }
    doesLocalPeerNeedWebRTC() {
        var t;
        let e = (t = this.store.getLocalPeer()) == null ? void 0 : t.role;
        return e ? this.doesRoleNeedWebRTC(e) : !0;
    }
    handleSubscribeConnectionConnected() {
        var t;
        (t = this.subscribeConnection) == null || t.logSelectedIceCandidatePairs();
        let e = this.callbacks.get(De);
        this.callbacks.delete(De), e && e.promise.resolve(!0);
    }
    setTransportStateForConnect() {
        if (this.state === L.Failed && (this.state = L.Disconnected), this.state !== L.Disconnected && this.state !== L.Reconnecting) throw g.WebsocketMethodErrors.AlreadyJoined(m.JOIN, `Cannot join a meeting in ${this.state} state`);
        this.state === L.Disconnected && (this.state = L.Connecting, this.observer.onStateChange(this.state));
    }
    sendErrorAnalyticsEvent(e, t) {
        let i = this.getAdditionalAnalyticsProperties(), r;
        switch(t){
            case R.ConnectFailed:
                r = w.connect(e, i);
                break;
            case R.SignalDisconnect:
                r = w.disconnect(e, i);
                break;
            case R.JoinWSMessageFailed:
                r = w.join({
                    error: e,
                    time: this.analyticsTimer.getTimeTaken(M.JOIN),
                    init_response_time: this.analyticsTimer.getTimeTaken(M.INIT),
                    ws_connect_time: this.analyticsTimer.getTimeTaken(M.WEBSOCKET_CONNECT),
                    on_policy_change_time: this.analyticsTimer.getTimeTaken(M.ON_POLICY_CHANGE),
                    local_audio_track_time: this.analyticsTimer.getTimeTaken(M.LOCAL_AUDIO_TRACK),
                    local_video_track_time: this.analyticsTimer.getTimeTaken(M.LOCAL_VIDEO_TRACK),
                    retries_join: this.joinRetryCount
                });
                break;
            case R.PublishIceConnectionFailed:
                r = w.publish({
                    error: e
                });
                break;
            case R.SubscribeIceConnectionFailed:
                r = w.subscribeFail(e);
                break;
        }
        this.eventBus.analytics.publish(r);
    }
    getAdditionalAnalyticsProperties() {
        var n, d, l, u, h, p, v, f;
        let e = lr(), t = typeof document != "undefined" && document.hidden, i = this.store.getRemoteVideoTracks().filter((H)=>H.degraded).length, r = (u = (l = (d = (n = this.getWebrtcInternals()) == null ? void 0 : n.getCurrentStats()) == null ? void 0 : d.getLocalPeerStats()) == null ? void 0 : l.publish) == null ? void 0 : u.bitrate, s = (f = (v = (p = (h = this.getWebrtcInternals()) == null ? void 0 : h.getCurrentStats()) == null ? void 0 : p.getLocalPeerStats()) == null ? void 0 : v.subscribe) == null ? void 0 : f.bitrate;
        return {
            network_info: e,
            document_hidden: t,
            num_degraded_tracks: i,
            bitrate: {
                publish: r,
                subscribe: s
            },
            max_sub_bitrate: this.maxSubscribeBitrate,
            recent_pong_response_times: this.signal.getPongResponseTimes(),
            transport_state: this.state
        };
    }
};
var ur = (a, e, t)=>c(void 0, null, function*() {
        let i = 4, r = Error("something went wrong during fetch");
        for(let s = 0; s < i; s++)try {
            let n = yield fetch(a, e), d = yield n.clone().json();
            if (t && t.length && !n.ok && t.includes(d.code)) throw g.APIErrors.ServerErrors(d.code, m.GET_TOKEN, d.message, !1);
            return n;
        } catch (n) {
            r = n;
        }
        throw [
            "Failed to fetch",
            "NetworkError"
        ].some((s)=>r.message.includes(s)) ? g.APIErrors.EndpointUnreachable(m.GET_TOKEN, r.message) : r;
    });
function It(a) {
    if (!a || a.length === 0) throw g.APIErrors.InvalidTokenFormat(m.INIT, "Token cannot be an empty string or undefined or null");
    let e = a.split(".");
    if (e.length !== 3) throw g.APIErrors.InvalidTokenFormat(m.INIT, "Expected 3 '.' separate fields - header, payload and signature respectively");
    let t = atob(e[1]);
    try {
        let i = JSON.parse(t);
        return {
            roomId: i.room_id,
            userId: i.user_id,
            role: i.role
        };
    } catch (i) {
        throw g.APIErrors.InvalidTokenFormat(m.INIT, `couldn't parse to json - ${i.message}`);
    }
}
var hr = {
    published: !1,
    isInitialised: !1,
    isReconnecting: !1,
    isPreviewInProgress: !1,
    isPreviewCalled: !1,
    isJoinInProgress: !1,
    deviceManagersInitialised: !1
}, Qr = class {
    constructor(){
        this.TAG = "[HMSSdk]:";
        this.transportState = L.Disconnected;
        this.analyticsTimer = new Ht;
        this.sdkState = S({}, hr);
        this.handleAutoplayError = (e)=>{
            var t, i;
            (i = (t = this.errorListener) == null ? void 0 : t.onError) == null || i.call(t, e);
        };
        this.observer = {
            onNotification: (e)=>{
                if (e.method === A.PEER_LEAVE_REQUEST) {
                    this.handlePeerLeaveRequest(e.params);
                    return;
                }
                switch(e.method){
                    case A.POLICY_CHANGE:
                        this.analyticsTimer.end(M.ON_POLICY_CHANGE);
                        break;
                    case A.PEER_LIST:
                        this.analyticsTimer.end(M.PEER_LIST), this.sendJoinAnalyticsEvent(this.sdkState.isPreviewCalled);
                        break;
                    case A.ROOM_STATE:
                        this.analyticsTimer.end(M.ROOM_STATE);
                        break;
                    default:
                }
                this.notificationManager.handleNotification(e, this.sdkState.isReconnecting);
            },
            onTrackAdd: (e)=>{
                this.notificationManager.handleTrackAdd(e);
            },
            onTrackRemove: (e)=>{
                this.notificationManager.handleTrackRemove(e);
            },
            onFailure: (e)=>{
                var t;
                (t = this.errorListener) == null || t.onError(e);
            },
            onStateChange: (e, t)=>c(this, null, function*() {
                    var r, s;
                    let i = (n)=>c(this, null, function*() {
                            var d, l;
                            yield this.internalLeave(!0, n), !this.sdkState.isPreviewInProgress && !this.sdkState.isJoinInProgress && ((l = (d = this.errorListener) == null ? void 0 : d.onError) == null || l.call(d, n)), this.sdkState.isReconnecting = !1;
                        });
                    switch(e){
                        case L.Preview:
                        case L.Joined:
                            this.transportState === L.Reconnecting && ((r = this.listener) == null || r.onReconnected());
                            break;
                        case L.Failed:
                            yield i(t);
                            break;
                        case L.Reconnecting:
                            this.sdkState.isReconnecting = !0, (s = this.listener) == null || s.onReconnecting(t);
                            break;
                    }
                    this.transportState = e, o.d(this.TAG, "Transport State Change", this.transportState);
                })
        };
        this.handlePeerLeaveRequest = (e)=>{
            var r;
            let t = e.requested_by ? this.store.getPeerById(e.requested_by) : void 0, i = {
                roomEnded: e.room_end,
                reason: e.reason,
                requestedBy: t
            };
            (r = this.listener) == null || r.onRemovedFromRoom(i), this.internalLeave(!1);
        };
        this.handleDeviceChange = (e)=>{
            var t, i, r, s, n, d;
            if (o.d(this.TAG, "Device Change event", e), (i = (t = this.deviceChangeListener) == null ? void 0 : t.onDeviceChange) == null || i.call(t, e), e.error && e.type) {
                let l = e.type.includes("audio") ? (r = this.localPeer) == null ? void 0 : r.audioTrack : (s = this.localPeer) == null ? void 0 : s.videoTrack;
                (n = this.errorListener) == null || n.onError(e.error), [
                    E.TracksErrors.CANT_ACCESS_CAPTURE_DEVICE,
                    E.TracksErrors.DEVICE_IN_USE,
                    E.TracksErrors.DEVICE_NOT_AVAILABLE
                ].includes(e.error.code) && l && (l.setEnabled(!1), (d = this.listener) == null || d.onTrackUpdate(N.TRACK_MUTED, l, this.localPeer));
            }
        };
        this.handleAudioPluginError = (e)=>{
            var t;
            o.e(this.TAG, "Audio Plugin Error event", e), (t = this.errorListener) == null || t.onError(e);
        };
        this.handleLocalRoleUpdate = (i)=>c(this, [
                i
            ], function*({ oldRole: e , newRole: t  }) {
                var r;
                yield this.transport.handleLocalRoleUpdate({
                    oldRole: e,
                    newRole: t
                }), yield (r = this.roleChangeManager) == null ? void 0 : r.handleLocalPeerRoleUpdate({
                    oldRole: e,
                    newRole: t
                });
            });
        this.sendAudioPresenceFailed = ()=>{
            let e = g.TracksErrors.NoAudioDetected(m.PREVIEW);
            o.w(this.TAG, "Audio Presence Failure", this.transportState, e);
        };
        this.sendJoinAnalyticsEvent = (e = !1, t)=>{
            this.eventBus.analytics.publish(w.join(D(S({
                error: t
            }, this.analyticsTimer.getTimes()), {
                time: this.analyticsTimer.getTimeTaken(M.JOIN),
                is_preview_called: e,
                retries_join: this.transport.joinRetryCount
            })));
        };
        this.sendPreviewAnalyticsEvent = (e)=>{
            this.eventBus.analytics.publish(w.preview(D(S({
                error: e
            }, this.analyticsTimer.getTimes()), {
                time: this.analyticsTimer.getTimeTaken(M.PREVIEW)
            })));
        };
        this.sendAnalyticsEvent = (e)=>{
            this.analyticsEventsService.queue(e).flush();
        };
    }
    initStoreAndManagers() {
        if (this.sdkState.isInitialised) {
            this.notificationManager.setListener(this.listener), this.audioSinkManager.setListener(this.listener);
            return;
        }
        this.sdkState.isInitialised = !0, this.store = new lt, this.eventBus = new $t, this.wakeLockManager = new Ut, this.networkTestManager = new Vt(this.eventBus, this.listener), this.playlistManager = new St(this, this.eventBus), this.notificationManager = new mt(this.store, this.eventBus, this.listener, this.audioListener), this.deviceManager = new ht(this.store, this.eventBus), this.audioSinkManager = new ut(this.store, this.deviceManager, this.eventBus), this.audioOutput = new pt(this.deviceManager, this.audioSinkManager), this.audioSinkManager.setListener(this.listener), this.eventBus.autoplayError.subscribe(this.handleAutoplayError), this.localTrackManager = new me(this.store, this.observer, this.deviceManager, this.eventBus, this.analyticsTimer), this.analyticsEventsService = new Bt(this.store), this.transport = new bt(this.observer, this.deviceManager, this.store, this.eventBus, this.analyticsEventsService, this.analyticsTimer), this.sessionStore = new ii(this.transport), this.eventBus.analytics.subscribe(this.sendAnalyticsEvent), this.eventBus.deviceChange.subscribe(this.handleDeviceChange), this.eventBus.audioPluginFailed.subscribe(this.handleAudioPluginError);
    }
    validateJoined(e) {
        if (!this.localPeer) throw g.GenericErrors.NotConnected(m.VALIDATION, `Not connected - ${e}`);
    }
    sendHLSAnalytics(e) {
        this.sendAnalyticsEvent(w.hlsPlayerError(e));
    }
    refreshDevices() {
        return c(this, null, function*() {
            this.validateJoined("refreshDevices"), yield this.deviceManager.init(!0);
        });
    }
    getWebrtcInternals() {
        var e;
        return (e = this.transport) == null ? void 0 : e.getWebrtcInternals();
    }
    getSessionStore() {
        return this.sessionStore;
    }
    getPlaylistManager() {
        return this.playlistManager;
    }
    getRecordingState() {
        var e;
        return (e = this.store.getRoom()) == null ? void 0 : e.recording;
    }
    getRTMPState() {
        var e;
        return (e = this.store.getRoom()) == null ? void 0 : e.rtmp;
    }
    getHLSState() {
        var e;
        return (e = this.store.getRoom()) == null ? void 0 : e.hls;
    }
    getTemplateAppData() {
        return this.store.getTemplateAppData();
    }
    get localPeer() {
        var e;
        return (e = this.store) == null ? void 0 : e.getLocalPeer();
    }
    preview(e, t) {
        return c(this, null, function*() {
            if (li(), di(), this.sdkState.isPreviewInProgress) return Promise.reject(g.GenericErrors.PreviewAlreadyInProgress(m.PREVIEW, "Preview already called"));
            this.analyticsTimer.start(M.PREVIEW), this.setUpPreview(e, t), e.alwaysRequestPermissions && this.localTrackManager.requestPermissions().then(()=>c(this, null, function*() {
                    yield this.initDeviceManagers();
                }));
            let i = !1, r = !1, s = setTimeout(()=>{
                var n, d;
                (!i || !r) && ((d = (n = this.listener) == null ? void 0 : n.onNetworkQuality) == null || d.call(n, -1));
            }, 3e3);
            return new Promise((n, d)=>{
                let l = ()=>c(this, null, function*() {
                        var v;
                        if (this.localPeer) {
                            let f = e.asRole && this.store.getPolicyForRole(e.asRole);
                            this.localPeer.asRole = f || this.localPeer.role;
                        }
                        let h = yield this.localTrackManager.getTracksToPublish(e.settings);
                        h.forEach((f)=>this.setLocalPeerTrack(f)), ((v = this.localPeer) == null ? void 0 : v.audioTrack) && this.initPreviewTrackAudioLevelMonitor(), yield this.initDeviceManagers(), this.sdkState.isPreviewInProgress = !1, this.analyticsTimer.end(M.PREVIEW);
                        let p = this.store.getRoom();
                        p && t.onPreview(p, h), this.sendPreviewAnalyticsEvent(), n();
                    }), u = (h)=>{
                    var p;
                    this.analyticsTimer.end(M.PREVIEW), h && ((p = this.errorListener) == null || p.onError(h)), this.sendPreviewAnalyticsEvent(h), this.sdkState.isPreviewInProgress = !1, d(h);
                };
                this.eventBus.policyChange.subscribeOnce(l), this.eventBus.leave.subscribeOnce(u), this.transport.preview(e.authToken, e.initEndpoint, this.localPeer.peerId, {
                    name: e.userName,
                    metaData: e.metaData || ""
                }, e.autoVideoSubscribe).then((h)=>{
                    var p;
                    i = !0, clearTimeout(s), h && e.captureNetworkQualityInPreview && this.networkTestManager.start((p = h.config) == null ? void 0 : p.networkHealth).then(()=>{
                        r = !0;
                    });
                }).catch(u);
            });
        });
    }
    join(e, t) {
        return c(this, null, function*() {
            var l, u, h, p, v, f;
            if (li(), di(), this.sdkState.isPreviewInProgress) throw g.GenericErrors.NotReady(m.JOIN, "Preview is in progress, can't join");
            this.analyticsTimer.start(M.JOIN), this.sdkState.isJoinInProgress = !0;
            let { roomId: i , userId: r , role: s  } = It(e.authToken), n = ((u = (l = this.localPeer) == null ? void 0 : l.asRole) == null ? void 0 : u.name) || ((p = (h = this.localPeer) == null ? void 0 : h.role) == null ? void 0 : p.name);
            (v = this.networkTestManager) == null || v.stop(), this.listener = t, this.commonSetup(e, i, t), this.removeDevicesFromConfig(e), this.store.setConfig(e), this.store.createAndSetUserAgent(this.frameworkInfo), pe.resumeContext();
            let d = this.store.getConfig();
            (d == null ? void 0 : d.autoManageWakeLock) && this.wakeLockManager.acquireLock(), this.localPeer ? (this.localPeer.name = e.userName, this.localPeer.role = this.store.getPolicyForRole(s), this.localPeer.customerUserId = r, this.localPeer.metadata = e.metaData, delete this.localPeer.asRole) : this.createAndAddLocalPeerToStore(e, s, r), this.roleChangeManager = new dt(this.store, this.transport, this.getAndPublishTracks.bind(this), this.removeTrack.bind(this), this.listener), this.eventBus.localRoleUpdate.subscribe(this.handleLocalRoleUpdate), o.d(this.TAG, "SDK Store", this.store), o.d(this.TAG, `\u23F3 Joining room ${i}`), o.time(`join-room-${i}`);
            try {
                yield this.transport.join(e.authToken, this.localPeer.peerId, {
                    name: e.userName,
                    metaData: e.metaData
                }, e.initEndpoint, e.autoVideoSubscribe), o.d(this.TAG, `\u2705 Joined room ${i}`), this.analyticsTimer.start(M.PEER_LIST), yield this.notifyJoin(), this.sdkState.isJoinInProgress = !1, yield this.publish(e.settings, n);
            } catch (H) {
                throw this.analyticsTimer.end(M.JOIN), this.sdkState.isJoinInProgress = !1, (f = this.listener) == null || f.onError(H), this.sendJoinAnalyticsEvent(this.sdkState.isPreviewCalled, H), o.e(this.TAG, "Unable to join room", H), H;
            }
            o.timeEnd(`join-room-${i}`);
        });
    }
    stringifyMetadata(e) {
        e.metaData && typeof e.metaData != "string" ? e.metaData = JSON.stringify(e.metaData) : e.metaData || (e.metaData = "");
    }
    cleanUp() {
        var e, t, i;
        this.cleanDeviceManagers(), this.eventBus.analytics.unsubscribe(this.sendAnalyticsEvent), this.analyticsTimer.cleanUp(), Q.cleanup(), this.playlistManager.cleanup(), (e = this.wakeLockManager) == null || e.cleanup(), o.cleanUp(), this.sdkState = S({}, hr), this.localPeer && ((t = this.localPeer.audioTrack) == null || t.cleanup(), this.localPeer.audioTrack = void 0, (i = this.localPeer.videoTrack) == null || i.cleanup(), this.localPeer.videoTrack = void 0), this.store.cleanUp(), this.listener = void 0, this.roleChangeManager && this.eventBus.localRoleUpdate.unsubscribe(this.handleLocalRoleUpdate);
    }
    leave(e) {
        return this.internalLeave(e);
    }
    internalLeave(e = !0, t) {
        return c(this, null, function*() {
            var r, s;
            let i = this.store.getRoom();
            if (i) {
                let n = i.id;
                (r = this.networkTestManager) == null || r.stop(), this.eventBus.leave.publish(t), o.d(this.TAG, `\u23F3 Leaving room ${n}`), yield (s = this.transport) == null ? void 0 : s.leave(e), this.cleanUp(), o.d(this.TAG, `\u2705 Left room ${n}`);
            }
        });
    }
    getAuthTokenByRoomCode(e, t) {
        return c(this, null, function*() {
            let i = (t || {}).endpoint || "https://auth.100ms.live/v2/token";
            this.analyticsTimer.start(M.GET_TOKEN);
            let r = yield ur(i, {
                method: "POST",
                body: JSON.stringify({
                    code: e.roomCode,
                    user_id: e.userId
                })
            }, [
                429,
                500,
                501,
                502,
                503,
                504,
                505,
                506,
                507,
                508,
                509,
                510,
                511
            ]), s = yield r.json();
            if (this.analyticsTimer.end(M.GET_TOKEN), !r.ok) throw g.APIErrors.ServerErrors(s.code, m.GET_TOKEN, s.message, !1);
            let { token: n  } = s;
            if (!n) throw Error(s.message);
            return n;
        });
    }
    getLocalPeer() {
        return this.store.getLocalPeer();
    }
    getPeers() {
        return this.store.getPeers();
    }
    getAudioOutput() {
        return this.audioOutput;
    }
    sendMessage(e, t) {
        this.sendMessageInternal({
            message: t,
            type: e
        });
    }
    sendBroadcastMessage(e, t) {
        return c(this, null, function*() {
            return yield this.sendMessageInternal({
                message: e,
                type: t
            });
        });
    }
    sendGroupMessage(e, t, i) {
        return c(this, null, function*() {
            let r = this.store.getKnownRoles();
            if ((t.filter((n)=>r[n.name]) || []).length === 0) throw g.GenericErrors.ValidationFailed("No valid role is present", t);
            return yield this.sendMessageInternal({
                message: e,
                recipientRoles: t,
                type: i
            });
        });
    }
    sendDirectMessage(e, t, i) {
        return c(this, null, function*() {
            var s;
            if (!this.store.getPeerById(t.peerId)) throw g.GenericErrors.ValidationFailed("Invalid peer - peer not present in the room", t);
            if (((s = this.localPeer) == null ? void 0 : s.peerId) === t.peerId) throw g.GenericErrors.ValidationFailed("Cannot send message to self");
            return yield this.sendMessageInternal({
                message: e,
                recipientPeer: t,
                type: i
            });
        });
    }
    sendMessageInternal(s) {
        return c(this, arguments, function*({ recipientRoles: e , recipientPeer: t , type: i = "chat" , message: r  }) {
            if (r.replace(/\u200b/g, " ").trim() === "") throw o.w(this.TAG, "sendMessage", "Ignoring empty message send"), g.GenericErrors.ValidationFailed("Empty message not allowed");
            let n = new Ae({
                sender: this.localPeer,
                type: i,
                message: r,
                recipientPeer: t,
                recipientRoles: e,
                time: new Date
            });
            o.d(this.TAG, "Sending Message: ", n);
            let d = yield this.transport.sendMessage(n);
            return n.time = new Date(d.timestamp), n;
        });
    }
    startScreenShare(e, t) {
        return c(this, null, function*() {
            var d, l, u;
            let i = this.store.getPublishParams();
            if (!i) return;
            let { allowed: r  } = i;
            if (!(r && r.includes("screen"))) {
                o.e(this.TAG, `Role ${(d = this.localPeer) == null ? void 0 : d.role} cannot share screen`);
                return;
            }
            if ((u = (l = this.localPeer) == null ? void 0 : l.auxiliaryTracks) == null ? void 0 : u.find((h)=>h.source === "screen")) throw Error("Cannot share multiple screens");
            let n = yield this.getScreenshareTracks(e, t);
            if (!this.localPeer) {
                o.d(this.TAG, "Screenshared when not connected"), n.forEach((h)=>{
                    h.cleanup();
                });
                return;
            }
            yield this.transport.publish(n), n.forEach((h)=>{
                var p, v, f;
                h.peerId = (p = this.localPeer) == null ? void 0 : p.peerId, (v = this.localPeer) == null || v.auxiliaryTracks.push(h), (f = this.listener) == null || f.onTrackUpdate(N.TRACK_ADDED, h, this.localPeer);
            });
        });
    }
    stopEndedScreenshare(e) {
        return c(this, null, function*() {
            o.d(this.TAG, "✅ Screenshare ended natively"), yield this.stopScreenShare(), e();
        });
    }
    stopScreenShare() {
        return c(this, null, function*() {
            var t;
            o.d(this.TAG, "✅ Screenshare ended from app");
            let e = (t = this.localPeer) == null ? void 0 : t.auxiliaryTracks.filter((i)=>i.source === "screen");
            if (e) for (let i of e)yield this.removeTrack(i.trackId);
        });
    }
    addTrack(e, t = "regular") {
        return c(this, null, function*() {
            var u, h, p, v;
            if (!e) {
                o.w(this.TAG, "Please pass a valid MediaStreamTrack");
                return;
            }
            if (!this.localPeer) throw g.GenericErrors.NotConnected(m.VALIDATION, "No local peer present, cannot addTrack");
            if (this.localPeer.auxiliaryTracks.find((f)=>f.trackId === e.id)) return;
            let r = e.kind, s = new MediaStream([
                e
            ]), n = new ke(s), d = r === "audio" ? He : ee, l = new d(n, e, t, this.eventBus);
            this.setPlaylistSettings({
                track: e,
                hmsTrack: l,
                source: t
            }), yield (u = this.transport) == null ? void 0 : u.publish([
                l
            ]), l.peerId = (h = this.localPeer) == null ? void 0 : h.peerId, (p = this.localPeer) == null || p.auxiliaryTracks.push(l), (v = this.listener) == null || v.onTrackUpdate(N.TRACK_ADDED, l, this.localPeer);
        });
    }
    removeTrack(e, t = !1) {
        return c(this, null, function*() {
            var r;
            if (!this.localPeer) throw g.GenericErrors.NotConnected(m.VALIDATION, "No local peer present, cannot removeTrack");
            let i = this.localPeer.auxiliaryTracks.findIndex((s)=>s.trackId === e);
            if (i > -1) {
                let s = this.localPeer.auxiliaryTracks[i];
                s.isPublished ? yield this.transport.unpublish([
                    s
                ]) : yield s.cleanup(), t || this.stopPlaylist(s), this.localPeer.auxiliaryTracks.splice(i, 1), (r = this.listener) == null || r.onTrackUpdate(N.TRACK_REMOVED, s, this.localPeer);
            } else o.w(this.TAG, `No track found for ${e}`);
        });
    }
    setAnalyticsLevel(e) {
        this.analyticsEventsService.level = e;
    }
    setLogLevel(e) {
        o.level = e;
    }
    addAudioListener(e) {
        this.audioListener = e, this.notificationManager.setAudioListener(e);
    }
    addConnectionQualityListener(e) {
        this.notificationManager.setConnectionQualityListener(e);
    }
    changeRole(e, t, i = !1) {
        return c(this, null, function*() {
            var r;
            !e.role || e.role.name === t || (yield (r = this.transport) == null ? void 0 : r.changeRoleOfPeer(e, t, i));
        });
    }
    changeRoleOfPeer(e, t, i = !1) {
        return c(this, null, function*() {
            var r;
            !e.role || e.role.name === t || (yield (r = this.transport) == null ? void 0 : r.changeRoleOfPeer(e, t, i));
        });
    }
    changeRoleOfPeersWithRoles(e, t) {
        return c(this, null, function*() {
            var i;
            e.length <= 0 || !t || (yield (i = this.transport) == null ? void 0 : i.changeRoleOfPeersWithRoles(e, t));
        });
    }
    acceptChangeRole(e) {
        return c(this, null, function*() {
            var t;
            yield (t = this.transport) == null ? void 0 : t.acceptRoleChange(e);
        });
    }
    endRoom(e, t) {
        return c(this, null, function*() {
            var i;
            if (!this.localPeer) throw g.GenericErrors.NotConnected(m.VALIDATION, "No local peer present, cannot end room");
            yield (i = this.transport) == null ? void 0 : i.endRoom(e, t), yield this.leave();
        });
    }
    removePeer(e, t) {
        return c(this, null, function*() {
            var i;
            if (!this.localPeer) throw g.GenericErrors.NotConnected(m.VALIDATION, "No local peer present, cannot remove peer");
            if (!this.store.getPeerById(e.peerId)) throw g.GenericErrors.ValidationFailed("Invalid peer, given peer not present in room", e);
            yield (i = this.transport) == null ? void 0 : i.removePeer(e.peerId, t);
        });
    }
    startRTMPOrRecording(e) {
        return c(this, null, function*() {
            var t;
            if (!this.localPeer) throw g.GenericErrors.NotConnected(m.VALIDATION, "No local peer present, cannot start streaming or recording");
            yield (t = this.transport) == null ? void 0 : t.startRTMPOrRecording(e);
        });
    }
    stopRTMPAndRecording() {
        return c(this, null, function*() {
            var e;
            if (!this.localPeer) throw g.GenericErrors.NotConnected(m.VALIDATION, "No local peer present, cannot stop streaming or recording");
            yield (e = this.transport) == null ? void 0 : e.stopRTMPOrRecording();
        });
    }
    startHLSStreaming(e) {
        return c(this, null, function*() {
            var t;
            if (!this.localPeer) throw g.GenericErrors.NotConnected(m.VALIDATION, "No local peer present, cannot start HLS streaming");
            yield (t = this.transport) == null ? void 0 : t.startHLSStreaming(e);
        });
    }
    stopHLSStreaming(e) {
        return c(this, null, function*() {
            var t;
            if (!this.localPeer) throw g.GenericErrors.NotConnected(m.VALIDATION, "No local peer present, cannot stop HLS streaming");
            yield (t = this.transport) == null ? void 0 : t.stopHLSStreaming(e);
        });
    }
    sendHLSTimedMetadata(e) {
        return c(this, null, function*() {
            var t;
            this.validateJoined("sendHLSTimedMetadata"), yield (t = this.transport) == null ? void 0 : t.sendHLSTimedMetadata(e);
        });
    }
    changeName(e) {
        return c(this, null, function*() {
            var t;
            this.validateJoined("changeName"), yield (t = this.transport) == null ? void 0 : t.changeName(e), this.notificationManager.updateLocalPeer({
                name: e
            });
        });
    }
    changeMetadata(e) {
        return c(this, null, function*() {
            var t;
            this.validateJoined("changeMetadata"), yield (t = this.transport) == null ? void 0 : t.changeMetadata(e), this.notificationManager.updateLocalPeer({
                metadata: e
            });
        });
    }
    setSessionMetadata(e) {
        return c(this, null, function*() {
            yield this.transport.setSessionMetadata({
                key: "default",
                data: e
            });
        });
    }
    getSessionMetadata() {
        return c(this, null, function*() {
            return (yield this.transport.getSessionMetadata("default")).data;
        });
    }
    getRoles() {
        return Object.values(this.store.getKnownRoles());
    }
    changeTrackState(e, t) {
        return c(this, null, function*() {
            var r;
            if (e.type === x.VIDEO && e.source !== "regular") {
                o.w(this.TAG, "Muting non-regular video tracks is currently not supported");
                return;
            }
            if (e.enabled === t) {
                o.w(this.TAG, `Aborting change track state, track already has enabled - ${t}`, e);
                return;
            }
            if (!this.store.getTrackById(e.trackId)) throw g.GenericErrors.ValidationFailed("No track found for change track state", e);
            let i = this.store.getPeerByTrackId(e.trackId);
            if (!i) throw g.GenericErrors.ValidationFailed("No peer found for change track state", e);
            yield (r = this.transport) == null ? void 0 : r.changeTrackState({
                requested_for: i.peerId,
                track_id: e.trackId,
                stream_id: e.stream.id,
                mute: !t
            });
        });
    }
    changeMultiTrackState(e) {
        return c(this, null, function*() {
            var n;
            if (typeof e.enabled != "boolean") throw g.GenericErrors.ValidationFailed("Pass a boolean for enabled");
            let { enabled: t , roles: i , type: r , source: s  } = e;
            yield (n = this.transport) == null ? void 0 : n.changeMultiTrackState({
                value: !t,
                type: r,
                source: s,
                roles: i == null ? void 0 : i.map((d)=>d == null ? void 0 : d.name)
            });
        });
    }
    setFrameworkInfo(e) {
        this.frameworkInfo = e;
    }
    attachVideo(e, t) {
        return c(this, null, function*() {
            let i = this.store.getConfig();
            (i == null ? void 0 : i.autoManageVideo) ? e.attach(t) : yield e.addSink(t);
        });
    }
    detachVideo(e, t) {
        return c(this, null, function*() {
            let i = this.store.getConfig();
            (i == null ? void 0 : i.autoManageVideo) ? e.detach(t) : yield e.removeSink(t);
        });
    }
    publish(e, t) {
        return c(this, null, function*() {
            var i, r, s;
            if ([
                this.store.getPublishParams(),
                !this.sdkState.published,
                !Se
            ].every((n)=>!!n)) {
                let n = t && t !== ((r = (i = this.localPeer) == null ? void 0 : i.role) == null ? void 0 : r.name) ? ()=>{
                    var d;
                    return (d = this.roleChangeManager) == null ? void 0 : d.diffRolesAndPublishTracks({
                        oldRole: this.store.getPolicyForRole(t),
                        newRole: this.localPeer.role
                    });
                } : ()=>this.getAndPublishTracks(e);
                yield (s = n == null ? void 0 : n()) == null ? void 0 : s.catch((d)=>{
                    var l;
                    o.e(this.TAG, "Error in publish", d), (l = this.listener) == null || l.onError(d);
                });
            }
        });
    }
    getAndPublishTracks(e) {
        return c(this, null, function*() {
            var i, r;
            let t = yield this.localTrackManager.getTracksToPublish(e);
            yield this.setAndPublishTracks(t), (r = (i = this.localPeer) == null ? void 0 : i.audioTrack) == null || r.initAudioLevelMonitor(), this.sdkState.published = !0;
        });
    }
    setAndPublishTracks(e) {
        return c(this, null, function*() {
            var t;
            for (let i of e)yield this.transport.publish([
                i
            ]), this.setLocalPeerTrack(i), (t = this.listener) == null || t.onTrackUpdate(N.TRACK_ADDED, i, this.localPeer);
            yield this.initDeviceManagers();
        });
    }
    setLocalPeerTrack(e) {
        var t;
        switch(e.peerId = (t = this.localPeer) == null ? void 0 : t.peerId, e.type){
            case x.AUDIO:
                this.localPeer.audioTrack = e;
                break;
            case x.VIDEO:
                this.localPeer.videoTrack = e;
                break;
        }
    }
    initDeviceManagers() {
        return c(this, null, function*() {
            var e, t, i, r, s;
            this.sdkState.deviceManagersInitialised || (this.sdkState.deviceManagersInitialised = !0, yield this.deviceManager.init(), (yield this.deviceManager.updateOutputDevice((t = (e = this.store.getConfig()) == null ? void 0 : e.settings) == null ? void 0 : t.audioOutputDeviceId)) || (yield this.deviceManager.updateOutputDevice((r = (i = Q.getSelection()) == null ? void 0 : i.audioOutput) == null ? void 0 : r.deviceId)), this.audioSinkManager.init((s = this.store.getConfig()) == null ? void 0 : s.audioSinkElementId));
        });
    }
    cleanDeviceManagers() {
        this.eventBus.deviceChange.unsubscribe(this.handleDeviceChange), this.eventBus.audioPluginFailed.unsubscribe(this.handleAudioPluginError), this.eventBus.autoplayError.unsubscribe(this.handleAutoplayError), this.deviceManager.cleanUp(), this.audioSinkManager.cleanUp();
    }
    initPreviewTrackAudioLevelMonitor() {
        var t;
        let e = (t = this.localPeer) == null ? void 0 : t.audioTrack;
        e == null || e.initAudioLevelMonitor(), this.eventBus.trackAudioLevelUpdate.subscribe((i)=>{
            var s;
            let r = i && i.track.trackId === (e == null ? void 0 : e.trackId) ? [
                {
                    audioLevel: i.audioLevel,
                    peer: this.localPeer,
                    track: e
                }
            ] : [];
            this.store.updateSpeakers(r), (s = this.audioListener) == null || s.onAudioLevelUpdate(r);
        }), this.eventBus.localAudioSilence.subscribe(this.sendAudioPresenceFailed);
    }
    notifyJoin() {
        var i;
        let e = this.store.getLocalPeer(), t = this.store.getRoom();
        if (!t) {
            o.w(this.TAG, "notify join - room not present");
            return;
        }
        if (t.joinedAt = new Date, e && (e.joinedAt = t.joinedAt), e == null ? void 0 : e.role) {
            this.analyticsTimer.end(M.JOIN), (i = this.listener) == null || i.onJoin(t);
            return;
        }
        return new Promise((r, s)=>{
            this.eventBus.policyChange.subscribeOnce(()=>{
                var n;
                this.analyticsTimer.end(M.JOIN), (n = this.listener) == null || n.onJoin(t), r();
            }), this.eventBus.leave.subscribeOnce((n)=>{
                s(n);
            });
        });
    }
    setUpPreview(e, t) {
        this.listener = t, this.sdkState.isPreviewCalled = !0, this.sdkState.isPreviewInProgress = !0;
        let { roomId: i , userId: r , role: s  } = It(e.authToken);
        this.commonSetup(e, i, t), this.store.setConfig(e), this.store.createAndSetUserAgent(this.frameworkInfo), this.createAndAddLocalPeerToStore(e, s, r, e.asRole), o.d(this.TAG, "SDK Store", this.store);
    }
    setPlaylistSettings(r) {
        return c(this, arguments, function*({ track: e , hmsTrack: t , source: i  }) {
            if (i === "videoplaylist") {
                let s = {};
                if (e.kind === "audio") s.maxBitrate = 64;
                else {
                    s.maxBitrate = 1e3;
                    let { width: n , height: d  } = e.getSettings();
                    s.width = n, s.height = d;
                }
                yield t.setSettings(s);
            } else i === "audioplaylist" && (yield t.setSettings({
                maxBitrate: 64
            }));
        });
    }
    createAndAddLocalPeerToStore(e, t, i, r) {
        let s = this.store.getPolicyForRole(t), n = r ? this.store.getPolicyForRole(r) : void 0, d = new Je({
            name: e.userName || "",
            customerUserId: i,
            metadata: e.metaData || "",
            role: s,
            asRole: n || s
        });
        this.store.addPeer(d);
    }
    commonSetup(e, t, i) {
        this.stringifyMetadata(e), e.initEndpoint || (e.initEndpoint = "https://prod-init.100ms.live"), this.errorListener = i, this.deviceChangeListener = i, this.initStoreAndManagers(), this.store.setErrorListener(this.errorListener), this.store.getRoom() || this.store.setRoom(new je(t, this.store));
    }
    removeDevicesFromConfig(e) {
        this.store.getConfig() && e.settings && (delete e.settings.audioOutputDeviceId, delete e.settings.videoDeviceId, delete e.settings.audioInputDeviceId);
    }
    getScreenshareTracks(e, t) {
        return c(this, null, function*() {
            let [i, r] = yield this.localTrackManager.getLocalScreen(t), s = ()=>{
                this.stopEndedScreenshare(e);
            }, n = [];
            if (t == null ? void 0 : t.audioOnly) {
                if (i.nativeTrack.stop(), !r) throw g.TracksErrors.NothingToReturn(m.TRACK, "Select share audio when sharing screen", "No audio found");
                n.push(r), r.nativeTrack.onended = s;
            } else n.push(i), i.nativeTrack.onended = s, r && n.push(r);
            return n;
        });
    }
    stopPlaylist(e) {
        e.source === "audioplaylist" ? this.playlistManager.stop(I.audio) : e.source === "videoplaylist" && this.playlistManager.stop(I.video);
    }
};
function hg() {
    return c(this, null, function*() {
        let a = new Y().build(), e = new Z().build();
        try {
            (yield tt(e)).stop();
        } catch (i) {
            if (Yr(i)) throw (yield Li({
                audio: !1,
                video: !0
            })).getTracks().forEach((s)=>s.stop()), i;
        }
        return (yield it(a)).stop(), !1;
    });
}
function Yr(a) {
    return a instanceof T && a.action === m.TRACK;
}
o.i("adapter", `${(0, _webrtcAdapterDefault.default).browserDetails.browser} v${(0, _webrtcAdapterDefault.default).browserDetails.version}`);

},{"d2a8c4373122ab8":"d5jf4","webrtc-adapter":"btsHR","ua-parser-js":"2fabB","uuid":"j4KJi","eventemitter2":"j95ue","sdp-transform":"8vPQN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"btsHR":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _adapterFactoryJs = require("./adapter_factory.js");
"use strict";
const adapter = (0, _adapterFactoryJs.adapterFactory)({
    window: typeof window === "undefined" ? undefined : window
});
exports.default = adapter;

},{"./adapter_factory.js":"3G4vz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3G4vz":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Shimming starts here.
parcelHelpers.export(exports, "adapterFactory", ()=>adapterFactory);
var _utils = require("./utils");
// Browser shims.
var _chromeShim = require("./chrome/chrome_shim");
var _firefoxShim = require("./firefox/firefox_shim");
var _safariShim = require("./safari/safari_shim");
var _commonShim = require("./common_shim");
var _sdp = require("sdp");
function adapterFactory({ window  } = {}, options = {
    shimChrome: true,
    shimFirefox: true,
    shimSafari: true
}) {
    // Utils.
    const logging = _utils.log;
    const browserDetails = _utils.detectBrowser(window);
    const adapter = {
        browserDetails,
        commonShim: _commonShim,
        extractVersion: _utils.extractVersion,
        disableLog: _utils.disableLog,
        disableWarnings: _utils.disableWarnings,
        sdp: // Expose sdp as a convenience. For production apps include directly.
        _sdp
    };
    // Shim browser if found.
    switch(browserDetails.browser){
        case "chrome":
            if (!_chromeShim || !_chromeShim.shimPeerConnection || !options.shimChrome) {
                logging("Chrome shim is not included in this adapter release.");
                return adapter;
            }
            if (browserDetails.version === null) {
                logging("Chrome shim can not determine version, not shimming.");
                return adapter;
            }
            logging("adapter.js shimming chrome.");
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _chromeShim;
            // Must be called before shimPeerConnection.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _commonShim.shimParameterlessSetLocalDescription(window, browserDetails);
            _chromeShim.shimGetUserMedia(window, browserDetails);
            _chromeShim.shimMediaStream(window, browserDetails);
            _chromeShim.shimPeerConnection(window, browserDetails);
            _chromeShim.shimOnTrack(window, browserDetails);
            _chromeShim.shimAddTrackRemoveTrack(window, browserDetails);
            _chromeShim.shimGetSendersWithDtmf(window, browserDetails);
            _chromeShim.shimGetStats(window, browserDetails);
            _chromeShim.shimSenderReceiverGetStats(window, browserDetails);
            _chromeShim.fixNegotiationNeeded(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimRTCIceCandidateRelayProtocol(window, browserDetails);
            _commonShim.shimConnectionState(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            _commonShim.removeExtmapAllowMixed(window, browserDetails);
            break;
        case "firefox":
            if (!_firefoxShim || !_firefoxShim.shimPeerConnection || !options.shimFirefox) {
                logging("Firefox shim is not included in this adapter release.");
                return adapter;
            }
            logging("adapter.js shimming firefox.");
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _firefoxShim;
            // Must be called before shimPeerConnection.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _commonShim.shimParameterlessSetLocalDescription(window, browserDetails);
            _firefoxShim.shimGetUserMedia(window, browserDetails);
            _firefoxShim.shimPeerConnection(window, browserDetails);
            _firefoxShim.shimOnTrack(window, browserDetails);
            _firefoxShim.shimRemoveStream(window, browserDetails);
            _firefoxShim.shimSenderGetStats(window, browserDetails);
            _firefoxShim.shimReceiverGetStats(window, browserDetails);
            _firefoxShim.shimRTCDataChannel(window, browserDetails);
            _firefoxShim.shimAddTransceiver(window, browserDetails);
            _firefoxShim.shimGetParameters(window, browserDetails);
            _firefoxShim.shimCreateOffer(window, browserDetails);
            _firefoxShim.shimCreateAnswer(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimConnectionState(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            break;
        case "safari":
            if (!_safariShim || !options.shimSafari) {
                logging("Safari shim is not included in this adapter release.");
                return adapter;
            }
            logging("adapter.js shimming safari.");
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _safariShim;
            // Must be called before shimCallbackAPI.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _commonShim.shimParameterlessSetLocalDescription(window, browserDetails);
            _safariShim.shimRTCIceServerUrls(window, browserDetails);
            _safariShim.shimCreateOfferLegacy(window, browserDetails);
            _safariShim.shimCallbacksAPI(window, browserDetails);
            _safariShim.shimLocalStreamsAPI(window, browserDetails);
            _safariShim.shimRemoteStreamsAPI(window, browserDetails);
            _safariShim.shimTrackEventTransceiver(window, browserDetails);
            _safariShim.shimGetUserMedia(window, browserDetails);
            _safariShim.shimAudioContext(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimRTCIceCandidateRelayProtocol(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            _commonShim.removeExtmapAllowMixed(window, browserDetails);
            break;
        default:
            logging("Unsupported browser!");
            break;
    }
    return adapter;
}

},{"./utils":"9QTnM","./chrome/chrome_shim":"jGyPS","./firefox/firefox_shim":"4WnAE","./safari/safari_shim":"comwI","./common_shim":"lYiQ9","sdp":"gNtFW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QTnM":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */ parcelHelpers.export(exports, "extractVersion", ()=>extractVersion);
// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
parcelHelpers.export(exports, "wrapPeerConnectionEvent", ()=>wrapPeerConnectionEvent);
parcelHelpers.export(exports, "disableLog", ()=>disableLog);
/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */ parcelHelpers.export(exports, "disableWarnings", ()=>disableWarnings);
parcelHelpers.export(exports, "log", ()=>log);
/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */ parcelHelpers.export(exports, "deprecated", ()=>deprecated);
/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */ parcelHelpers.export(exports, "detectBrowser", ()=>detectBrowser);
/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */ parcelHelpers.export(exports, "compactObject", ()=>compactObject);
/* iterates the stats graph recursively. */ parcelHelpers.export(exports, "walkStats", ()=>walkStats);
/* filter getStats for a sender/receiver track. */ parcelHelpers.export(exports, "filterStats", ()=>filterStats);
"use strict";
let logDisabled_ = true;
let deprecationWarnings_ = true;
function extractVersion(uastring, expr, pos) {
    const match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
}
function wrapPeerConnectionEvent(window1, eventNameToWrap, wrapper) {
    if (!window1.RTCPeerConnection) return;
    const proto = window1.RTCPeerConnection.prototype;
    const nativeAddEventListener = proto.addEventListener;
    proto.addEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap) return nativeAddEventListener.apply(this, arguments);
        const wrappedCallback = (e)=>{
            const modifiedEvent = wrapper(e);
            if (modifiedEvent) {
                if (cb.handleEvent) cb.handleEvent(modifiedEvent);
                else cb(modifiedEvent);
            }
        };
        this._eventMap = this._eventMap || {};
        if (!this._eventMap[eventNameToWrap]) this._eventMap[eventNameToWrap] = new Map();
        this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
        return nativeAddEventListener.apply(this, [
            nativeEventName,
            wrappedCallback
        ]);
    };
    const nativeRemoveEventListener = proto.removeEventListener;
    proto.removeEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) return nativeRemoveEventListener.apply(this, arguments);
        if (!this._eventMap[eventNameToWrap].has(cb)) return nativeRemoveEventListener.apply(this, arguments);
        const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
        this._eventMap[eventNameToWrap].delete(cb);
        if (this._eventMap[eventNameToWrap].size === 0) delete this._eventMap[eventNameToWrap];
        if (Object.keys(this._eventMap).length === 0) delete this._eventMap;
        return nativeRemoveEventListener.apply(this, [
            nativeEventName,
            unwrappedCb
        ]);
    };
    Object.defineProperty(proto, "on" + eventNameToWrap, {
        get () {
            return this["_on" + eventNameToWrap];
        },
        set (cb) {
            if (this["_on" + eventNameToWrap]) {
                this.removeEventListener(eventNameToWrap, this["_on" + eventNameToWrap]);
                delete this["_on" + eventNameToWrap];
            }
            if (cb) this.addEventListener(eventNameToWrap, this["_on" + eventNameToWrap] = cb);
        },
        enumerable: true,
        configurable: true
    });
}
function disableLog(bool) {
    if (typeof bool !== "boolean") return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
    logDisabled_ = bool;
    return bool ? "adapter.js logging disabled" : "adapter.js logging enabled";
}
function disableWarnings(bool) {
    if (typeof bool !== "boolean") return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
    deprecationWarnings_ = !bool;
    return "adapter.js deprecation warnings " + (bool ? "disabled" : "enabled");
}
function log() {
    if (typeof window === "object") {
        if (logDisabled_) return;
        if (typeof console !== "undefined" && typeof console.log === "function") console.log.apply(console, arguments);
    }
}
function deprecated(oldMethod, newMethod) {
    if (!deprecationWarnings_) return;
    console.warn(oldMethod + " is deprecated, please use " + newMethod + " instead.");
}
function detectBrowser(window1) {
    // Returned result object.
    const result = {
        browser: null,
        version: null
    };
    // Fail early if it's not a browser
    if (typeof window1 === "undefined" || !window1.navigator) {
        result.browser = "Not a browser.";
        return result;
    }
    const { navigator  } = window1;
    if (navigator.mozGetUserMedia) {
        result.browser = "firefox";
        result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia || window1.isSecureContext === false && window1.webkitRTCPeerConnection) {
        // Chrome, Chromium, Webview, Opera.
        // Version matches Chrome/WebRTC version.
        // Chrome 74 removed webkitGetUserMedia on http as well so we need the
        // more complicated fallback to webkitRTCPeerConnection.
        result.browser = "chrome";
        result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    } else if (window1.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        result.browser = "safari";
        result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
        result.supportsUnifiedPlan = window1.RTCRtpTransceiver && "currentDirection" in window1.RTCRtpTransceiver.prototype;
    } else {
        result.browser = "Not a supported browser.";
        return result;
    }
    return result;
}
/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */ function isObject(val) {
    return Object.prototype.toString.call(val) === "[object Object]";
}
function compactObject(data) {
    if (!isObject(data)) return data;
    return Object.keys(data).reduce(function(accumulator, key) {
        const isObj = isObject(data[key]);
        const value = isObj ? compactObject(data[key]) : data[key];
        const isEmptyObject = isObj && !Object.keys(value).length;
        if (value === undefined || isEmptyObject) return accumulator;
        return Object.assign(accumulator, {
            [key]: value
        });
    }, {});
}
function walkStats(stats, base, resultSet) {
    if (!base || resultSet.has(base.id)) return;
    resultSet.set(base.id, base);
    Object.keys(base).forEach((name)=>{
        if (name.endsWith("Id")) walkStats(stats, stats.get(base[name]), resultSet);
        else if (name.endsWith("Ids")) base[name].forEach((id)=>{
            walkStats(stats, stats.get(id), resultSet);
        });
    });
}
function filterStats(result, track, outbound) {
    const streamStatsType = outbound ? "outbound-rtp" : "inbound-rtp";
    const filteredResult = new Map();
    if (track === null) return filteredResult;
    const trackStats = [];
    result.forEach((value)=>{
        if (value.type === "track" && value.trackIdentifier === track.id) trackStats.push(value);
    });
    trackStats.forEach((trackStat)=>{
        result.forEach((stats)=>{
            if (stats.type === streamStatsType && stats.trackId === trackStat.id) walkStats(result, stats, filteredResult);
        });
    });
    return filteredResult;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGyPS":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>(0, _getusermedia.shimGetUserMedia));
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>(0, _getdisplaymedia.shimGetDisplayMedia));
parcelHelpers.export(exports, "shimMediaStream", ()=>shimMediaStream);
parcelHelpers.export(exports, "shimOnTrack", ()=>shimOnTrack);
parcelHelpers.export(exports, "shimGetSendersWithDtmf", ()=>shimGetSendersWithDtmf);
parcelHelpers.export(exports, "shimGetStats", ()=>shimGetStats);
parcelHelpers.export(exports, "shimSenderReceiverGetStats", ()=>shimSenderReceiverGetStats);
parcelHelpers.export(exports, "shimAddTrackRemoveTrackWithNative", ()=>shimAddTrackRemoveTrackWithNative);
parcelHelpers.export(exports, "shimAddTrackRemoveTrack", ()=>shimAddTrackRemoveTrack);
parcelHelpers.export(exports, "shimPeerConnection", ()=>shimPeerConnection);
// Attempt to fix ONN in plan-b mode.
parcelHelpers.export(exports, "fixNegotiationNeeded", ()=>fixNegotiationNeeded);
var _utilsJs = require("../utils.js");
var _getusermedia = require("./getusermedia");
var _getdisplaymedia = require("./getdisplaymedia");
"use strict";
function shimMediaStream(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
}
function shimOnTrack(window) {
    if (typeof window === "object" && window.RTCPeerConnection && !("ontrack" in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, "ontrack", {
            get () {
                return this._ontrack;
            },
            set (f) {
                if (this._ontrack) this.removeEventListener("track", this._ontrack);
                this.addEventListener("track", this._ontrack = f);
            },
            enumerable: true,
            configurable: true
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            if (!this._ontrackpoly) {
                this._ontrackpoly = (e)=>{
                    // onaddstream does not fire when a track is added to an existing
                    // stream. But stream.onaddtrack is implemented so we use that.
                    e.stream.addEventListener("addtrack", (te)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) receiver = this.getReceivers().find((r)=>r.track && r.track.id === te.track.id);
                        else receiver = {
                            track: te.track
                        };
                        const event = new Event("track");
                        event.track = te.track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                    e.stream.getTracks().forEach((track)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) receiver = this.getReceivers().find((r)=>r.track && r.track.id === track.id);
                        else receiver = {
                            track
                        };
                        const event = new Event("track");
                        event.track = track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                };
                this.addEventListener("addstream", this._ontrackpoly);
            }
            return origSetRemoteDescription.apply(this, arguments);
        };
    } else // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    _utilsJs.wrapPeerConnectionEvent(window, "track", (e)=>{
        if (!e.transceiver) Object.defineProperty(e, "transceiver", {
            value: {
                receiver: e.receiver
            }
        });
        return e;
    });
}
function shimGetSendersWithDtmf(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === "object" && window.RTCPeerConnection && !("getSenders" in window.RTCPeerConnection.prototype) && "createDTMFSender" in window.RTCPeerConnection.prototype) {
        const shimSenderWithDtmf = function(pc, track) {
            return {
                track,
                get dtmf () {
                    if (this._dtmf === undefined) {
                        if (track.kind === "audio") this._dtmf = pc.createDTMFSender(track);
                        else this._dtmf = null;
                    }
                    return this._dtmf;
                },
                _pc: pc
            };
        };
        // augment addTrack when getSenders is not available.
        if (!window.RTCPeerConnection.prototype.getSenders) {
            window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                this._senders = this._senders || [];
                return this._senders.slice(); // return a copy of the internal state.
            };
            const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
                let sender = origAddTrack.apply(this, arguments);
                if (!sender) {
                    sender = shimSenderWithDtmf(this, track);
                    this._senders.push(sender);
                }
                return sender;
            };
            const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
            window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
                origRemoveTrack.apply(this, arguments);
                const idx = this._senders.indexOf(sender);
                if (idx !== -1) this._senders.splice(idx, 1);
            };
        }
        const origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            this._senders = this._senders || [];
            origAddStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                this._senders.push(shimSenderWithDtmf(this, track));
            });
        };
        const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
            this._senders = this._senders || [];
            origRemoveStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                const sender = this._senders.find((s)=>s.track === track);
                if (sender) this._senders.splice(this._senders.indexOf(sender), 1);
            });
        };
    } else if (typeof window === "object" && window.RTCPeerConnection && "getSenders" in window.RTCPeerConnection.prototype && "createDTMFSender" in window.RTCPeerConnection.prototype && window.RTCRtpSender && !("dtmf" in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        Object.defineProperty(window.RTCRtpSender.prototype, "dtmf", {
            get () {
                if (this._dtmf === undefined) {
                    if (this.track.kind === "audio") this._dtmf = this._pc.createDTMFSender(this.track);
                    else this._dtmf = null;
                }
                return this._dtmf;
            }
        });
    }
}
function shimGetStats(window) {
    if (!window.RTCPeerConnection) return;
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        // If selector is a function then we are in the old style stats so just
        // pass back the original getStats format to avoid breaking old users.
        if (arguments.length > 0 && typeof selector === "function") return origGetStats.apply(this, arguments);
        // When spec-style getStats is supported, return those when called with
        // either no arguments or the selector argument is null.
        if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== "function")) return origGetStats.apply(this, []);
        const fixChromeStats_ = function(response) {
            const standardReport = {};
            const reports = response.result();
            reports.forEach((report)=>{
                const standardStats = {
                    id: report.id,
                    timestamp: report.timestamp,
                    type: {
                        localcandidate: "local-candidate",
                        remotecandidate: "remote-candidate"
                    }[report.type] || report.type
                };
                report.names().forEach((name)=>{
                    standardStats[name] = report.stat(name);
                });
                standardReport[standardStats.id] = standardStats;
            });
            return standardReport;
        };
        // shim getStats with maplike support
        const makeMapStats = function(stats) {
            return new Map(Object.keys(stats).map((key)=>[
                    key,
                    stats[key]
                ]));
        };
        if (arguments.length >= 2) {
            const successCallbackWrapper_ = function(response) {
                onSucc(makeMapStats(fixChromeStats_(response)));
            };
            return origGetStats.apply(this, [
                successCallbackWrapper_,
                selector
            ]);
        }
        // promise-support
        return new Promise((resolve, reject)=>{
            origGetStats.apply(this, [
                function(response) {
                    resolve(makeMapStats(fixChromeStats_(response)));
                },
                reject
            ]);
        }).then(onSucc, onErr);
    };
}
function shimSenderReceiverGetStats(window) {
    if (!(typeof window === "object" && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) return;
    // shim sender stats.
    if (!("getStats" in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        if (origGetSenders) window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        if (origAddTrack) window.RTCPeerConnection.prototype.addTrack = function addTrack() {
            const sender = origAddTrack.apply(this, arguments);
            sender._pc = this;
            return sender;
        };
        window.RTCRtpSender.prototype.getStats = function getStats() {
            const sender = this;
            return this._pc.getStats().then((result)=>/* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */ _utilsJs.filterStats(result, sender.track, true));
        };
    }
    // shim receiver stats.
    if (!("getStats" in window.RTCRtpReceiver.prototype)) {
        const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
        if (origGetReceivers) window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
            const receivers = origGetReceivers.apply(this, []);
            receivers.forEach((receiver)=>receiver._pc = this);
            return receivers;
        };
        _utilsJs.wrapPeerConnectionEvent(window, "track", (e)=>{
            e.receiver._pc = e.srcElement;
            return e;
        });
        window.RTCRtpReceiver.prototype.getStats = function getStats() {
            const receiver = this;
            return this._pc.getStats().then((result)=>_utilsJs.filterStats(result, receiver.track, false));
        };
    }
    if (!("getStats" in window.RTCRtpSender.prototype && "getStats" in window.RTCRtpReceiver.prototype)) return;
    // shim RTCPeerConnection.getStats(track).
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
            const track = arguments[0];
            let sender;
            let receiver;
            let err;
            this.getSenders().forEach((s)=>{
                if (s.track === track) {
                    if (sender) err = true;
                    else sender = s;
                }
            });
            this.getReceivers().forEach((r)=>{
                if (r.track === track) {
                    if (receiver) err = true;
                    else receiver = r;
                }
                return r.track === track;
            });
            if (err || sender && receiver) return Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError"));
            else if (sender) return sender.getStats();
            else if (receiver) return receiver.getStats();
            return Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
        }
        return origGetStats.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrackWithNative(window) {
    // shim addTrack/removeTrack with native variants in order to make
    // the interactions with legacy getLocalStreams behave as in other browsers.
    // Keeps a mapping stream.id => [stream, rtpsenders...]
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        return Object.keys(this._shimmedLocalStreams).map((streamId)=>this._shimmedLocalStreams[streamId][0]);
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (!stream) return origAddTrack.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const sender = origAddTrack.apply(this, arguments);
        if (!this._shimmedLocalStreams[stream.id]) this._shimmedLocalStreams[stream.id] = [
            stream,
            sender
        ];
        else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) this._shimmedLocalStreams[stream.id].push(sender);
        return sender;
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
        });
        const existingSenders = this.getSenders();
        origAddStream.apply(this, arguments);
        const newSenders = this.getSenders().filter((newSender)=>existingSenders.indexOf(newSender) === -1);
        this._shimmedLocalStreams[stream.id] = [
            stream
        ].concat(newSenders);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        delete this._shimmedLocalStreams[stream.id];
        return origRemoveStream.apply(this, arguments);
    };
    const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        if (sender) Object.keys(this._shimmedLocalStreams).forEach((streamId)=>{
            const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
            if (idx !== -1) this._shimmedLocalStreams[streamId].splice(idx, 1);
            if (this._shimmedLocalStreams[streamId].length === 1) delete this._shimmedLocalStreams[streamId];
        });
        return origRemoveTrack.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrack(window, browserDetails) {
    if (!window.RTCPeerConnection) return;
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) return shimAddTrackRemoveTrackWithNative(window);
    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    const origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        const nativeStreams = origGetLocalStreams.apply(this);
        this._reverseStreams = this._reverseStreams || {};
        return nativeStreams.map((stream)=>this._reverseStreams[stream.id]);
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
        });
        // Add identity mapping for consistency with addTrack.
        // Unless this is being used with a stream from addTrack.
        if (!this._reverseStreams[stream.id]) {
            const newStream = new window.MediaStream(stream.getTracks());
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            stream = newStream;
        }
        origAddStream.apply(this, [
            stream
        ]);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        origRemoveStream.apply(this, [
            this._streams[stream.id] || stream
        ]);
        delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
        delete this._streams[stream.id];
    };
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        const streams = [].slice.call(arguments, 1);
        if (streams.length !== 1 || !streams[0].getTracks().find((t)=>t === track)) // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
        const alreadyExists = this.getSenders().find((s)=>s.track === track);
        if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        const oldStream = this._streams[stream.id];
        if (oldStream) {
            // this is using odd Chrome behaviour, use with caution:
            // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
            // Note: we rely on the high-level addTrack/dtmf shim to
            // create the sender with a dtmf sender.
            oldStream.addTrack(track);
            // Trigger ONN async.
            Promise.resolve().then(()=>{
                this.dispatchEvent(new Event("negotiationneeded"));
            });
        } else {
            const newStream = new window.MediaStream([
                track
            ]);
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            this.addStream(newStream);
        }
        return this.getSenders().find((s)=>s.track === track);
    };
    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(internalStream.id, "g"), externalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    function replaceExternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(externalStream.id, "g"), internalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    [
        "createOffer",
        "createAnswer"
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                const args = arguments;
                const isLegacyCall = arguments.length && typeof arguments[0] === "function";
                if (isLegacyCall) return nativeMethod.apply(this, [
                    (description)=>{
                        const desc = replaceInternalStreamId(this, description);
                        args[0].apply(null, [
                            desc
                        ]);
                    },
                    (err)=>{
                        if (args[1]) args[1].apply(null, err);
                    },
                    arguments[2]
                ]);
                return nativeMethod.apply(this, arguments).then((description)=>replaceInternalStreamId(this, description));
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        if (!arguments.length || !arguments[0].type) return origSetLocalDescription.apply(this, arguments);
        arguments[0] = replaceExternalStreamId(this, arguments[0]);
        return origSetLocalDescription.apply(this, arguments);
    };
    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier
    const origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(window.RTCPeerConnection.prototype, "localDescription", {
        get () {
            const description = origLocalDescription.get.apply(this);
            if (description.type === "") return description;
            return replaceInternalStreamId(this, description);
        }
    });
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        // We can not yet check for sender instanceof RTCRtpSender
        // since we shim RTPSender. So we check if sender._pc is set.
        if (!sender._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
        const isLocal = sender._pc === this;
        if (!isLocal) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
        // Search for the native stream the senders track belongs to.
        this._streams = this._streams || {};
        let stream;
        Object.keys(this._streams).forEach((streamid)=>{
            const hasTrack = this._streams[streamid].getTracks().find((track)=>sender.track === track);
            if (hasTrack) stream = this._streams[streamid];
        });
        if (stream) {
            if (stream.getTracks().length === 1) // if this is the last track of the stream, remove the stream. This
            // takes care of any shimmed _senders.
            this.removeStream(this._reverseStreams[stream.id]);
            else // relying on the same odd chrome behaviour as above.
            stream.removeTrack(sender.track);
            this.dispatchEvent(new Event("negotiationneeded"));
        }
    };
}
function shimPeerConnection(window, browserDetails) {
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
    if (!window.RTCPeerConnection) return;
    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    if (browserDetails.version < 53) [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate"
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                arguments[0] = new (method === "addIceCandidate" ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
}
function fixNegotiationNeeded(window, browserDetails) {
    _utilsJs.wrapPeerConnectionEvent(window, "negotiationneeded", (e)=>{
        const pc = e.target;
        if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === "plan-b") {
            if (pc.signalingState !== "stable") return;
        }
        return e;
    });
}

},{"../utils.js":"9QTnM","./getusermedia":"3Feo1","./getdisplaymedia":"kMeXs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Feo1":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
var _utilsJs = require("../utils.js");
"use strict";
const logging = _utilsJs.log;
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    if (!navigator.mediaDevices) return;
    const constraintsToChrome_ = function(c) {
        if (typeof c !== "object" || c.mandatory || c.optional) return c;
        const cc = {};
        Object.keys(c).forEach((key)=>{
            if (key === "require" || key === "advanced" || key === "mediaSource") return;
            const r = typeof c[key] === "object" ? c[key] : {
                ideal: c[key]
            };
            if (r.exact !== undefined && typeof r.exact === "number") r.min = r.max = r.exact;
            const oldname_ = function(prefix, name) {
                if (prefix) return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                return name === "deviceId" ? "sourceId" : name;
            };
            if (r.ideal !== undefined) {
                cc.optional = cc.optional || [];
                let oc = {};
                if (typeof r.ideal === "number") {
                    oc[oldname_("min", key)] = r.ideal;
                    cc.optional.push(oc);
                    oc = {};
                    oc[oldname_("max", key)] = r.ideal;
                    cc.optional.push(oc);
                } else {
                    oc[oldname_("", key)] = r.ideal;
                    cc.optional.push(oc);
                }
            }
            if (r.exact !== undefined && typeof r.exact !== "number") {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_("", key)] = r.exact;
            } else [
                "min",
                "max"
            ].forEach((mix)=>{
                if (r[mix] !== undefined) {
                    cc.mandatory = cc.mandatory || {};
                    cc.mandatory[oldname_(mix, key)] = r[mix];
                }
            });
        });
        if (c.advanced) cc.optional = (cc.optional || []).concat(c.advanced);
        return cc;
    };
    const shimConstraints_ = function(constraints, func) {
        if (browserDetails.version >= 61) return func(constraints);
        constraints = JSON.parse(JSON.stringify(constraints));
        if (constraints && typeof constraints.audio === "object") {
            const remap = function(obj, a, b) {
                if (a in obj && !(b in obj)) {
                    obj[b] = obj[a];
                    delete obj[a];
                }
            };
            constraints = JSON.parse(JSON.stringify(constraints));
            remap(constraints.audio, "autoGainControl", "googAutoGainControl");
            remap(constraints.audio, "noiseSuppression", "googNoiseSuppression");
            constraints.audio = constraintsToChrome_(constraints.audio);
        }
        if (constraints && typeof constraints.video === "object") {
            // Shim facingMode for mobile & surface pro.
            let face = constraints.video.facingMode;
            face = face && (typeof face === "object" ? face : {
                ideal: face
            });
            const getSupportedFacingModeLies = browserDetails.version < 66;
            if (face && (face.exact === "user" || face.exact === "environment" || face.ideal === "user" || face.ideal === "environment") && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
                delete constraints.video.facingMode;
                let matches;
                if (face.exact === "environment" || face.ideal === "environment") matches = [
                    "back",
                    "rear"
                ];
                else if (face.exact === "user" || face.ideal === "user") matches = [
                    "front"
                ];
                if (matches) // Look for matches in label, or use last cam for back (typical).
                return navigator.mediaDevices.enumerateDevices().then((devices)=>{
                    devices = devices.filter((d)=>d.kind === "videoinput");
                    let dev = devices.find((d)=>matches.some((match)=>d.label.toLowerCase().includes(match)));
                    if (!dev && devices.length && matches.includes("back")) dev = devices[devices.length - 1]; // more likely the back cam
                    if (dev) constraints.video.deviceId = face.exact ? {
                        exact: dev.deviceId
                    } : {
                        ideal: dev.deviceId
                    };
                    constraints.video = constraintsToChrome_(constraints.video);
                    logging("chrome: " + JSON.stringify(constraints));
                    return func(constraints);
                });
            }
            constraints.video = constraintsToChrome_(constraints.video);
        }
        logging("chrome: " + JSON.stringify(constraints));
        return func(constraints);
    };
    const shimError_ = function(e) {
        if (browserDetails.version >= 64) return e;
        return {
            name: ({
                PermissionDeniedError: "NotAllowedError",
                PermissionDismissedError: "NotAllowedError",
                InvalidStateError: "NotAllowedError",
                DevicesNotFoundError: "NotFoundError",
                ConstraintNotSatisfiedError: "OverconstrainedError",
                TrackStartError: "NotReadableError",
                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                MediaDeviceKillSwitchOn: "NotAllowedError",
                TabCaptureError: "AbortError",
                ScreenCaptureError: "AbortError",
                DeviceCaptureError: "AbortError"
            })[e.name] || e.name,
            message: e.message,
            constraint: e.constraint || e.constraintName,
            toString () {
                return this.name + (this.message && ": ") + this.message;
            }
        };
    };
    const getUserMedia_ = function(constraints, onSuccess, onError) {
        shimConstraints_(constraints, (c)=>{
            navigator.webkitGetUserMedia(c, onSuccess, (e)=>{
                if (onError) onError(shimError_(e));
            });
        });
    };
    navigator.getUserMedia = getUserMedia_.bind(navigator);
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    if (navigator.mediaDevices.getUserMedia) {
        const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(cs) {
            return shimConstraints_(cs, (c)=>origGetUserMedia(c).then((stream)=>{
                    if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                        stream.getTracks().forEach((track)=>{
                            track.stop();
                        });
                        throw new DOMException("", "NotFoundError");
                    }
                    return stream;
                }, (e)=>Promise.reject(shimError_(e))));
        };
    }
}

},{"../utils.js":"9QTnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kMeXs":[function(require,module,exports) {
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>shimGetDisplayMedia);
"use strict";
function shimGetDisplayMedia(window, getSourceId) {
    if (window.navigator.mediaDevices && "getDisplayMedia" in window.navigator.mediaDevices) return;
    if (!window.navigator.mediaDevices) return;
    // getSourceId is a function that returns a promise resolving with
    // the sourceId of the screen/window/tab to be shared.
    if (typeof getSourceId !== "function") {
        console.error("shimGetDisplayMedia: getSourceId argument is not a function");
        return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        return getSourceId(constraints).then((sourceId)=>{
            const widthSpecified = constraints.video && constraints.video.width;
            const heightSpecified = constraints.video && constraints.video.height;
            const frameRateSpecified = constraints.video && constraints.video.frameRate;
            constraints.video = {
                mandatory: {
                    chromeMediaSource: "desktop",
                    chromeMediaSourceId: sourceId,
                    maxFrameRate: frameRateSpecified || 3
                }
            };
            if (widthSpecified) constraints.video.mandatory.maxWidth = widthSpecified;
            if (heightSpecified) constraints.video.mandatory.maxHeight = heightSpecified;
            return window.navigator.mediaDevices.getUserMedia(constraints);
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WnAE":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>(0, _getusermedia.shimGetUserMedia));
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>(0, _getdisplaymedia.shimGetDisplayMedia));
parcelHelpers.export(exports, "shimOnTrack", ()=>shimOnTrack);
parcelHelpers.export(exports, "shimPeerConnection", ()=>shimPeerConnection);
parcelHelpers.export(exports, "shimSenderGetStats", ()=>shimSenderGetStats);
parcelHelpers.export(exports, "shimReceiverGetStats", ()=>shimReceiverGetStats);
parcelHelpers.export(exports, "shimRemoveStream", ()=>shimRemoveStream);
parcelHelpers.export(exports, "shimRTCDataChannel", ()=>shimRTCDataChannel);
parcelHelpers.export(exports, "shimAddTransceiver", ()=>shimAddTransceiver);
parcelHelpers.export(exports, "shimGetParameters", ()=>shimGetParameters);
parcelHelpers.export(exports, "shimCreateOffer", ()=>shimCreateOffer);
parcelHelpers.export(exports, "shimCreateAnswer", ()=>shimCreateAnswer);
var _utils = require("../utils");
var _getusermedia = require("./getusermedia");
var _getdisplaymedia = require("./getdisplaymedia");
"use strict";
function shimOnTrack(window) {
    if (typeof window === "object" && window.RTCTrackEvent && "receiver" in window.RTCTrackEvent.prototype && !("transceiver" in window.RTCTrackEvent.prototype)) Object.defineProperty(window.RTCTrackEvent.prototype, "transceiver", {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
function shimPeerConnection(window, browserDetails) {
    if (typeof window !== "object" || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) return; // probably media.peerconnection.enabled=false in about:config
    if (!window.RTCPeerConnection && window.mozRTCPeerConnection) // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
    if (browserDetails.version < 53) // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate"
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                arguments[0] = new (method === "addIceCandidate" ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const modernStatsTypes = {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
    };
    const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        return nativeGetStats.apply(this, [
            selector || null
        ]).then((stats)=>{
            if (browserDetails.version < 53 && !onSucc) // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            try {
                stats.forEach((stat)=>{
                    stat.type = modernStatsTypes[stat.type] || stat.type;
                });
            } catch (e) {
                if (e.name !== "TypeError") throw e;
                // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                stats.forEach((stat, i)=>{
                    stats.set(i, Object.assign({}, stat, {
                        type: modernStatsTypes[stat.type] || stat.type
                    }));
                });
            }
            return stats;
        }).then(onSucc, onErr);
    };
}
function shimSenderGetStats(window) {
    if (!(typeof window === "object" && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && "getStats" in window.RTCRtpSender.prototype) return;
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach((sender)=>sender._pc = this);
        return senders;
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
    };
    window.RTCRtpSender.prototype.getStats = function getStats() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
}
function shimReceiverGetStats(window) {
    if (!(typeof window === "object" && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && "getStats" in window.RTCRtpReceiver.prototype) return;
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        const receivers = origGetReceivers.apply(this, []);
        receivers.forEach((receiver)=>receiver._pc = this);
        return receivers;
    };
    _utils.wrapPeerConnectionEvent(window, "track", (e)=>{
        e.receiver._pc = e.srcElement;
        return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
        return this._pc.getStats(this.track);
    };
}
function shimRemoveStream(window) {
    if (!window.RTCPeerConnection || "removeStream" in window.RTCPeerConnection.prototype) return;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        _utils.deprecated("removeStream", "removeTrack");
        this.getSenders().forEach((sender)=>{
            if (sender.track && stream.getTracks().includes(sender.track)) this.removeTrack(sender);
        });
    };
}
function shimRTCDataChannel(window) {
    // rename DataChannel to RTCDataChannel (native fix in FF60):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
    if (window.DataChannel && !window.RTCDataChannel) window.RTCDataChannel = window.DataChannel;
}
function shimAddTransceiver(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === "object" && window.RTCPeerConnection)) return;
    const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
    if (origAddTransceiver) window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
        this.setParametersPromises = [];
        // WebIDL input coercion and validation
        let sendEncodings = arguments[1] && arguments[1].sendEncodings;
        if (sendEncodings === undefined) sendEncodings = [];
        sendEncodings = [
            ...sendEncodings
        ];
        const shouldPerformCheck = sendEncodings.length > 0;
        if (shouldPerformCheck) // If sendEncodings params are provided, validate grammar
        sendEncodings.forEach((encodingParam)=>{
            if ("rid" in encodingParam) {
                const ridRegex = /^[a-z0-9]{0,16}$/i;
                if (!ridRegex.test(encodingParam.rid)) throw new TypeError("Invalid RID value provided.");
            }
            if ("scaleResolutionDownBy" in encodingParam) {
                if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
            }
            if ("maxFramerate" in encodingParam) {
                if (!(parseFloat(encodingParam.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
            }
        });
        const transceiver = origAddTransceiver.apply(this, arguments);
        if (shouldPerformCheck) {
            // Check if the init options were applied. If not we do this in an
            // asynchronous way and save the promise reference in a global object.
            // This is an ugly hack, but at the same time is way more robust than
            // checking the sender parameters before and after the createOffer
            // Also note that after the createoffer we are not 100% sure that
            // the params were asynchronously applied so we might miss the
            // opportunity to recreate offer.
            const { sender  } = transceiver;
            const params = sender.getParameters();
            if (!("encodings" in params) || // Avoid being fooled by patched getParameters() below.
            params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
                params.encodings = sendEncodings;
                sender.sendEncodings = sendEncodings;
                this.setParametersPromises.push(sender.setParameters(params).then(()=>{
                    delete sender.sendEncodings;
                }).catch(()=>{
                    delete sender.sendEncodings;
                }));
            }
        }
        return transceiver;
    };
}
function shimGetParameters(window) {
    if (!(typeof window === "object" && window.RTCRtpSender)) return;
    const origGetParameters = window.RTCRtpSender.prototype.getParameters;
    if (origGetParameters) window.RTCRtpSender.prototype.getParameters = function getParameters() {
        const params = origGetParameters.apply(this, arguments);
        if (!("encodings" in params)) params.encodings = [].concat(this.sendEncodings || [
            {}
        ]);
        return params;
    };
}
function shimCreateOffer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === "object" && window.RTCPeerConnection)) return;
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer() {
        if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(()=>{
            return origCreateOffer.apply(this, arguments);
        }).finally(()=>{
            this.setParametersPromises = [];
        });
        return origCreateOffer.apply(this, arguments);
    };
}
function shimCreateAnswer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === "object" && window.RTCPeerConnection)) return;
    const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
    window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
        if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(()=>{
            return origCreateAnswer.apply(this, arguments);
        }).finally(()=>{
            this.setParametersPromises = [];
        });
        return origCreateAnswer.apply(this, arguments);
    };
}

},{"../utils":"9QTnM","./getusermedia":"2IJ68","./getdisplaymedia":"eBPQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2IJ68":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
var _utils = require("../utils");
"use strict";
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    const MediaStreamTrack = window && window.MediaStreamTrack;
    navigator.getUserMedia = function(constraints, onSuccess, onError) {
        // Replace Firefox 44+'s deprecation warning with unprefixed version.
        _utils.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia");
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    };
    if (!(browserDetails.version > 55 && "autoGainControl" in navigator.mediaDevices.getSupportedConstraints())) {
        const remap = function(obj, a, b) {
            if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
            }
        };
        const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(c) {
            if (typeof c === "object" && typeof c.audio === "object") {
                c = JSON.parse(JSON.stringify(c));
                remap(c.audio, "autoGainControl", "mozAutoGainControl");
                remap(c.audio, "noiseSuppression", "mozNoiseSuppression");
            }
            return nativeGetUserMedia(c);
        };
        if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
            const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
            MediaStreamTrack.prototype.getSettings = function() {
                const obj = nativeGetSettings.apply(this, arguments);
                remap(obj, "mozAutoGainControl", "autoGainControl");
                remap(obj, "mozNoiseSuppression", "noiseSuppression");
                return obj;
            };
        }
        if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
            const nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
            MediaStreamTrack.prototype.applyConstraints = function(c) {
                if (this.kind === "audio" && typeof c === "object") {
                    c = JSON.parse(JSON.stringify(c));
                    remap(c, "autoGainControl", "mozAutoGainControl");
                    remap(c, "noiseSuppression", "mozNoiseSuppression");
                }
                return nativeApplyConstraints.apply(this, [
                    c
                ]);
            };
        }
    }
}

},{"../utils":"9QTnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eBPQV":[function(require,module,exports) {
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>shimGetDisplayMedia);
"use strict";
function shimGetDisplayMedia(window, preferredMediaSource) {
    if (window.navigator.mediaDevices && "getDisplayMedia" in window.navigator.mediaDevices) return;
    if (!window.navigator.mediaDevices) return;
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        if (!(constraints && constraints.video)) {
            const err = new DOMException("getDisplayMedia without video constraints is undefined");
            err.name = "NotFoundError";
            // from https://heycam.github.io/webidl/#idl-DOMException-error-names
            err.code = 8;
            return Promise.reject(err);
        }
        if (constraints.video === true) constraints.video = {
            mediaSource: preferredMediaSource
        };
        else constraints.video.mediaSource = preferredMediaSource;
        return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"comwI":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimLocalStreamsAPI", ()=>shimLocalStreamsAPI);
parcelHelpers.export(exports, "shimRemoteStreamsAPI", ()=>shimRemoteStreamsAPI);
parcelHelpers.export(exports, "shimCallbacksAPI", ()=>shimCallbacksAPI);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
parcelHelpers.export(exports, "shimConstraints", ()=>shimConstraints);
parcelHelpers.export(exports, "shimRTCIceServerUrls", ()=>shimRTCIceServerUrls);
parcelHelpers.export(exports, "shimTrackEventTransceiver", ()=>shimTrackEventTransceiver);
parcelHelpers.export(exports, "shimCreateOfferLegacy", ()=>shimCreateOfferLegacy);
parcelHelpers.export(exports, "shimAudioContext", ()=>shimAudioContext);
var _utils = require("../utils");
"use strict";
function shimLocalStreamsAPI(window) {
    if (typeof window !== "object" || !window.RTCPeerConnection) return;
    if (!("getLocalStreams" in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        if (!this._localStreams) this._localStreams = [];
        return this._localStreams;
    };
    if (!("addStream" in window.RTCPeerConnection.prototype)) {
        const _addTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            if (!this._localStreams) this._localStreams = [];
            if (!this._localStreams.includes(stream)) this._localStreams.push(stream);
            // Try to emulate Chrome's behaviour of adding in audio-video order.
            // Safari orders by track id.
            stream.getAudioTracks().forEach((track)=>_addTrack.call(this, track, stream));
            stream.getVideoTracks().forEach((track)=>_addTrack.call(this, track, stream));
        };
        window.RTCPeerConnection.prototype.addTrack = function addTrack(track, ...streams) {
            if (streams) streams.forEach((stream)=>{
                if (!this._localStreams) this._localStreams = [
                    stream
                ];
                else if (!this._localStreams.includes(stream)) this._localStreams.push(stream);
            });
            return _addTrack.apply(this, arguments);
        };
    }
    if (!("removeStream" in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        if (!this._localStreams) this._localStreams = [];
        const index = this._localStreams.indexOf(stream);
        if (index === -1) return;
        this._localStreams.splice(index, 1);
        const tracks = stream.getTracks();
        this.getSenders().forEach((sender)=>{
            if (tracks.includes(sender.track)) this.removeTrack(sender);
        });
    };
}
function shimRemoteStreamsAPI(window) {
    if (typeof window !== "object" || !window.RTCPeerConnection) return;
    if (!("getRemoteStreams" in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
        return this._remoteStreams ? this._remoteStreams : [];
    };
    if (!("onaddstream" in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, "onaddstream", {
            get () {
                return this._onaddstream;
            },
            set (f) {
                if (this._onaddstream) {
                    this.removeEventListener("addstream", this._onaddstream);
                    this.removeEventListener("track", this._onaddstreampoly);
                }
                this.addEventListener("addstream", this._onaddstream = f);
                this.addEventListener("track", this._onaddstreampoly = (e)=>{
                    e.streams.forEach((stream)=>{
                        if (!this._remoteStreams) this._remoteStreams = [];
                        if (this._remoteStreams.includes(stream)) return;
                        this._remoteStreams.push(stream);
                        const event = new Event("addstream");
                        event.stream = stream;
                        this.dispatchEvent(event);
                    });
                });
            }
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            const pc = this;
            if (!this._onaddstreampoly) this.addEventListener("track", this._onaddstreampoly = function(e) {
                e.streams.forEach((stream)=>{
                    if (!pc._remoteStreams) pc._remoteStreams = [];
                    if (pc._remoteStreams.indexOf(stream) >= 0) return;
                    pc._remoteStreams.push(stream);
                    const event = new Event("addstream");
                    event.stream = stream;
                    pc.dispatchEvent(event);
                });
            });
            return origSetRemoteDescription.apply(pc, arguments);
        };
    }
}
function shimCallbacksAPI(window) {
    if (typeof window !== "object" || !window.RTCPeerConnection) return;
    const prototype = window.RTCPeerConnection.prototype;
    const origCreateOffer = prototype.createOffer;
    const origCreateAnswer = prototype.createAnswer;
    const setLocalDescription = prototype.setLocalDescription;
    const setRemoteDescription = prototype.setRemoteDescription;
    const addIceCandidate = prototype.addIceCandidate;
    prototype.createOffer = function createOffer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateOffer.apply(this, [
            options
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateAnswer.apply(this, [
            options
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    let withCallback = function(description, successCallback, failureCallback) {
        const promise = setLocalDescription.apply(this, [
            description
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;
    withCallback = function(description, successCallback, failureCallback) {
        const promise = setRemoteDescription.apply(this, [
            description
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;
    withCallback = function(candidate, successCallback, failureCallback) {
        const promise = addIceCandidate.apply(this, [
            candidate
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
}
function shimGetUserMedia(window) {
    const navigator = window && window.navigator;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // shim not needed in Safari 12.1
        const mediaDevices = navigator.mediaDevices;
        const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
        navigator.mediaDevices.getUserMedia = (constraints)=>{
            return _getUserMedia(shimConstraints(constraints));
        };
    }
    if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.getUserMedia = (function getUserMedia(constraints, cb, errcb) {
        navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }).bind(navigator);
}
function shimConstraints(constraints) {
    if (constraints && constraints.video !== undefined) return Object.assign({}, constraints, {
        video: _utils.compactObject(constraints.video)
    });
    return constraints;
}
function shimRTCIceServerUrls(window) {
    if (!window.RTCPeerConnection) return;
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    const OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
            const newIceServers = [];
            for(let i = 0; i < pcConfig.iceServers.length; i++){
                let server = pcConfig.iceServers[i];
                if (server.urls === undefined && server.url) {
                    _utils.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                    server = JSON.parse(JSON.stringify(server));
                    server.urls = server.url;
                    delete server.url;
                    newIceServers.push(server);
                } else newIceServers.push(pcConfig.iceServers[i]);
            }
            pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ("generateCertificate" in OrigPeerConnection) Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
        get () {
            return OrigPeerConnection.generateCertificate;
        }
    });
}
function shimTrackEventTransceiver(window) {
    // Add event.transceiver member over deprecated event.receiver
    if (typeof window === "object" && window.RTCTrackEvent && "receiver" in window.RTCTrackEvent.prototype && !("transceiver" in window.RTCTrackEvent.prototype)) Object.defineProperty(window.RTCTrackEvent.prototype, "transceiver", {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
function shimCreateOfferLegacy(window) {
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
        if (offerOptions) {
            if (typeof offerOptions.offerToReceiveAudio !== "undefined") // support bit values
            offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
            const audioTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === "audio");
            if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                if (audioTransceiver.direction === "sendrecv") {
                    if (audioTransceiver.setDirection) audioTransceiver.setDirection("sendonly");
                    else audioTransceiver.direction = "sendonly";
                } else if (audioTransceiver.direction === "recvonly") {
                    if (audioTransceiver.setDirection) audioTransceiver.setDirection("inactive");
                    else audioTransceiver.direction = "inactive";
                }
            } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) this.addTransceiver("audio", {
                direction: "recvonly"
            });
            if (typeof offerOptions.offerToReceiveVideo !== "undefined") // support bit values
            offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
            const videoTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === "video");
            if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                if (videoTransceiver.direction === "sendrecv") {
                    if (videoTransceiver.setDirection) videoTransceiver.setDirection("sendonly");
                    else videoTransceiver.direction = "sendonly";
                } else if (videoTransceiver.direction === "recvonly") {
                    if (videoTransceiver.setDirection) videoTransceiver.setDirection("inactive");
                    else videoTransceiver.direction = "inactive";
                }
            } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) this.addTransceiver("video", {
                direction: "recvonly"
            });
        }
        return origCreateOffer.apply(this, arguments);
    };
}
function shimAudioContext(window) {
    if (typeof window !== "object" || window.AudioContext) return;
    window.AudioContext = window.webkitAudioContext;
}

},{"../utils":"9QTnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYiQ9":[function(require,module,exports) {
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimRTCIceCandidate", ()=>shimRTCIceCandidate);
parcelHelpers.export(exports, "shimRTCIceCandidateRelayProtocol", ()=>shimRTCIceCandidateRelayProtocol);
parcelHelpers.export(exports, "shimMaxMessageSize", ()=>shimMaxMessageSize);
parcelHelpers.export(exports, "shimSendThrowTypeError", ()=>shimSendThrowTypeError);
/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */ parcelHelpers.export(exports, "shimConnectionState", ()=>shimConnectionState);
parcelHelpers.export(exports, "removeExtmapAllowMixed", ()=>removeExtmapAllowMixed);
parcelHelpers.export(exports, "shimAddIceCandidateNullOrEmpty", ()=>shimAddIceCandidateNullOrEmpty);
// Note: Make sure to call this ahead of APIs that modify
// setLocalDescription.length
parcelHelpers.export(exports, "shimParameterlessSetLocalDescription", ()=>shimParameterlessSetLocalDescription);
var _sdp = require("sdp");
var _sdpDefault = parcelHelpers.interopDefault(_sdp);
var _utils = require("./utils");
"use strict";
function shimRTCIceCandidate(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (!window.RTCIceCandidate || window.RTCIceCandidate && "foundation" in window.RTCIceCandidate.prototype) return;
    const NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function RTCIceCandidate(args) {
        // Remove the a= which shouldn't be part of the candidate string.
        if (typeof args === "object" && args.candidate && args.candidate.indexOf("a=") === 0) {
            args = JSON.parse(JSON.stringify(args));
            args.candidate = args.candidate.substring(2);
        }
        if (args.candidate && args.candidate.length) {
            // Augment the native candidate with the parsed fields.
            const nativeCandidate = new NativeRTCIceCandidate(args);
            const parsedCandidate = (0, _sdpDefault.default).parseCandidate(args.candidate);
            for(const key in parsedCandidate)if (!(key in nativeCandidate)) Object.defineProperty(nativeCandidate, key, {
                value: parsedCandidate[key]
            });
            // Override serializer to not serialize the extra attributes.
            nativeCandidate.toJSON = function toJSON() {
                return {
                    candidate: nativeCandidate.candidate,
                    sdpMid: nativeCandidate.sdpMid,
                    sdpMLineIndex: nativeCandidate.sdpMLineIndex,
                    usernameFragment: nativeCandidate.usernameFragment
                };
            };
            return nativeCandidate;
        }
        return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    _utils.wrapPeerConnectionEvent(window, "icecandidate", (e)=>{
        if (e.candidate) Object.defineProperty(e, "candidate", {
            value: new window.RTCIceCandidate(e.candidate),
            writable: "false"
        });
        return e;
    });
}
function shimRTCIceCandidateRelayProtocol(window) {
    if (!window.RTCIceCandidate || window.RTCIceCandidate && "relayProtocol" in window.RTCIceCandidate.prototype) return;
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    _utils.wrapPeerConnectionEvent(window, "icecandidate", (e)=>{
        if (e.candidate) {
            const parsedCandidate = (0, _sdpDefault.default).parseCandidate(e.candidate.candidate);
            if (parsedCandidate.type === "relay") // This is a libwebrtc-specific mapping of local type preference
            // to relayProtocol.
            e.candidate.relayProtocol = ({
                0: "tls",
                1: "tcp",
                2: "udp"
            })[parsedCandidate.priority >> 24];
        }
        return e;
    });
}
function shimMaxMessageSize(window, browserDetails) {
    if (!window.RTCPeerConnection) return;
    if (!("sctp" in window.RTCPeerConnection.prototype)) Object.defineProperty(window.RTCPeerConnection.prototype, "sctp", {
        get () {
            return typeof this._sctp === "undefined" ? null : this._sctp;
        }
    });
    const sctpInDescription = function(description) {
        if (!description || !description.sdp) return false;
        const sections = (0, _sdpDefault.default).splitSections(description.sdp);
        sections.shift();
        return sections.some((mediaSection)=>{
            const mLine = (0, _sdpDefault.default).parseMLine(mediaSection);
            return mLine && mLine.kind === "application" && mLine.protocol.indexOf("SCTP") !== -1;
        });
    };
    const getRemoteFirefoxVersion = function(description) {
        // TODO: Is there a better solution for detecting Firefox?
        const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (match === null || match.length < 2) return -1;
        const version = parseInt(match[1], 10);
        // Test for NaN (yes, this is ugly)
        return version !== version ? -1 : version;
    };
    const getCanSendMaxMessageSize = function(remoteIsFirefox) {
        // Every implementation we know can send at least 64 KiB.
        // Note: Although Chrome is technically able to send up to 256 KiB, the
        //       data does not reach the other peer reliably.
        //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
        let canSendMaxMessageSize = 65536;
        if (browserDetails.browser === "firefox") {
            if (browserDetails.version < 57) {
                if (remoteIsFirefox === -1) // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                // fragmentation.
                canSendMaxMessageSize = 16384;
                else // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                // messages. Thus, supporting ~2 GiB when sending.
                canSendMaxMessageSize = 2147483637;
            } else if (browserDetails.version < 60) // Currently, all FF >= 57 will reset the remote maximum message size
            // to the default value when a data channel is created at a later
            // stage. :(
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
            canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
            else // FF >= 60 supports sending ~2 GiB
            canSendMaxMessageSize = 2147483637;
        }
        return canSendMaxMessageSize;
    };
    const getMaxMessageSize = function(description, remoteIsFirefox) {
        // Note: 65536 bytes is the default value from the SDP spec. Also,
        //       every implementation we know supports receiving 65536 bytes.
        let maxMessageSize = 65536;
        // FF 57 has a slightly incorrect default remote max message size, so
        // we need to adjust it here to avoid a failure when sending.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
        if (browserDetails.browser === "firefox" && browserDetails.version === 57) maxMessageSize = 65535;
        const match = (0, _sdpDefault.default).matchPrefix(description.sdp, "a=max-message-size:");
        if (match.length > 0) maxMessageSize = parseInt(match[0].substring(19), 10);
        else if (browserDetails.browser === "firefox" && remoteIsFirefox !== -1) // If the maximum message size is not present in the remote SDP and
        // both local and remote are Firefox, the remote peer can receive
        // ~2 GiB.
        maxMessageSize = 2147483637;
        return maxMessageSize;
    };
    const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
        this._sctp = null;
        // Chrome decided to not expose .sctp in plan-b mode.
        // As usual, adapter.js has to do an 'ugly worakaround'
        // to cover up the mess.
        if (browserDetails.browser === "chrome" && browserDetails.version >= 76) {
            const { sdpSemantics  } = this.getConfiguration();
            if (sdpSemantics === "plan-b") Object.defineProperty(this, "sctp", {
                get () {
                    return typeof this._sctp === "undefined" ? null : this._sctp;
                },
                enumerable: true,
                configurable: true
            });
        }
        if (sctpInDescription(arguments[0])) {
            // Check if the remote is FF.
            const isFirefox = getRemoteFirefoxVersion(arguments[0]);
            // Get the maximum message size the local peer is capable of sending
            const canSendMMS = getCanSendMaxMessageSize(isFirefox);
            // Get the maximum message size of the remote peer.
            const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
            // Determine final maximum message size
            let maxMessageSize;
            if (canSendMMS === 0 && remoteMMS === 0) maxMessageSize = Number.POSITIVE_INFINITY;
            else if (canSendMMS === 0 || remoteMMS === 0) maxMessageSize = Math.max(canSendMMS, remoteMMS);
            else maxMessageSize = Math.min(canSendMMS, remoteMMS);
            // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
            // attribute.
            const sctp = {};
            Object.defineProperty(sctp, "maxMessageSize", {
                get () {
                    return maxMessageSize;
                }
            });
            this._sctp = sctp;
        }
        return origSetRemoteDescription.apply(this, arguments);
    };
}
function shimSendThrowTypeError(window) {
    if (!(window.RTCPeerConnection && "createDataChannel" in window.RTCPeerConnection.prototype)) return;
    // Note: Although Firefox >= 57 has a native implementation, the maximum
    //       message size can be reset for all data channels at a later stage.
    //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
    function wrapDcSend(dc, pc) {
        const origDataChannelSend = dc.send;
        dc.send = function send() {
            const data = arguments[0];
            const length = data.length || data.size || data.byteLength;
            if (dc.readyState === "open" && pc.sctp && length > pc.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + pc.sctp.maxMessageSize + " bytes)");
            return origDataChannelSend.apply(dc, arguments);
        };
    }
    const origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
        const dataChannel = origCreateDataChannel.apply(this, arguments);
        wrapDcSend(dataChannel, this);
        return dataChannel;
    };
    _utils.wrapPeerConnectionEvent(window, "datachannel", (e)=>{
        wrapDcSend(e.channel, e.target);
        return e;
    });
}
function shimConnectionState(window) {
    if (!window.RTCPeerConnection || "connectionState" in window.RTCPeerConnection.prototype) return;
    const proto = window.RTCPeerConnection.prototype;
    Object.defineProperty(proto, "connectionState", {
        get () {
            return ({
                completed: "connected",
                checking: "connecting"
            })[this.iceConnectionState] || this.iceConnectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(proto, "onconnectionstatechange", {
        get () {
            return this._onconnectionstatechange || null;
        },
        set (cb) {
            if (this._onconnectionstatechange) {
                this.removeEventListener("connectionstatechange", this._onconnectionstatechange);
                delete this._onconnectionstatechange;
            }
            if (cb) this.addEventListener("connectionstatechange", this._onconnectionstatechange = cb);
        },
        enumerable: true,
        configurable: true
    });
    [
        "setLocalDescription",
        "setRemoteDescription"
    ].forEach((method)=>{
        const origMethod = proto[method];
        proto[method] = function() {
            if (!this._connectionstatechangepoly) {
                this._connectionstatechangepoly = (e)=>{
                    const pc = e.target;
                    if (pc._lastConnectionState !== pc.connectionState) {
                        pc._lastConnectionState = pc.connectionState;
                        const newEvent = new Event("connectionstatechange", e);
                        pc.dispatchEvent(newEvent);
                    }
                    return e;
                };
                this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly);
            }
            return origMethod.apply(this, arguments);
        };
    });
}
function removeExtmapAllowMixed(window, browserDetails) {
    /* remove a=extmap-allow-mixed for webrtc.org < M71 */ if (!window.RTCPeerConnection) return;
    if (browserDetails.browser === "chrome" && browserDetails.version >= 71) return;
    if (browserDetails.browser === "safari" && browserDetails.version >= 605) return;
    const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
        if (desc && desc.sdp && desc.sdp.indexOf("\na=extmap-allow-mixed") !== -1) {
            const sdp = desc.sdp.split("\n").filter((line)=>{
                return line.trim() !== "a=extmap-allow-mixed";
            }).join("\n");
            // Safari enforces read-only-ness of RTCSessionDescription fields.
            if (window.RTCSessionDescription && desc instanceof window.RTCSessionDescription) arguments[0] = new window.RTCSessionDescription({
                type: desc.type,
                sdp
            });
            else desc.sdp = sdp;
        }
        return nativeSRD.apply(this, arguments);
    };
}
function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
    // Support for addIceCandidate(null or undefined)
    // as well as addIceCandidate({candidate: "", ...})
    // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
    // Note: must be called before other polyfills which change the signature.
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) return;
    const nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) return;
    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
        if (!arguments[0]) {
            if (arguments[1]) arguments[1].apply(null);
            return Promise.resolve();
        }
        // Firefox 68+ emits and processes {candidate: "", ...}, ignore
        // in older versions.
        // Native support for ignoring exists for Chrome M77+.
        // Safari ignores as well, exact version unknown but works in the same
        // version that also ignores addIceCandidate(null).
        if ((browserDetails.browser === "chrome" && browserDetails.version < 78 || browserDetails.browser === "firefox" && browserDetails.version < 68 || browserDetails.browser === "safari") && arguments[0] && arguments[0].candidate === "") return Promise.resolve();
        return nativeAddIceCandidate.apply(this, arguments);
    };
}
function shimParameterlessSetLocalDescription(window, browserDetails) {
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) return;
    const nativeSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    if (!nativeSetLocalDescription || nativeSetLocalDescription.length === 0) return;
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        let desc = arguments[0] || {};
        if (typeof desc !== "object" || desc.type && desc.sdp) return nativeSetLocalDescription.apply(this, arguments);
        // The remaining steps should technically happen when SLD comes off the
        // RTCPeerConnection's operations chain (not ahead of going on it), but
        // this is too difficult to shim. Instead, this shim only covers the
        // common case where the operations chain is empty. This is imperfect, but
        // should cover many cases. Rationale: Even if we can't reduce the glare
        // window to zero on imperfect implementations, there's value in tapping
        // into the perfect negotiation pattern that several browsers support.
        desc = {
            type: desc.type,
            sdp: desc.sdp
        };
        if (!desc.type) switch(this.signalingState){
            case "stable":
            case "have-local-offer":
            case "have-remote-pranswer":
                desc.type = "offer";
                break;
            default:
                desc.type = "answer";
                break;
        }
        if (desc.sdp || desc.type !== "offer" && desc.type !== "answer") return nativeSetLocalDescription.apply(this, [
            desc
        ]);
        const func = desc.type === "offer" ? this.createOffer : this.createAnswer;
        return func.apply(this).then((d)=>nativeSetLocalDescription.apply(this, [
                d
            ]));
    };
}

},{"sdp":"gNtFW","./utils":"9QTnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gNtFW":[function(require,module,exports) {
/* eslint-env node */ "use strict";
// SDP helpers.
const SDPUtils = {};
// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
    return Math.random().toString(36).substring(2, 12);
};
// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();
// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
    return blob.trim().split("\n").map((line)=>line.trim());
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
    const parts = blob.split("\nm=");
    return parts.map((part, index)=>(index > 0 ? "m=" + part : part).trim() + "\r\n");
};
// Returns the session description.
SDPUtils.getDescription = function(blob) {
    const sections = SDPUtils.splitSections(blob);
    return sections && sections[0];
};
// Returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
    const sections = SDPUtils.splitSections(blob);
    sections.shift();
    return sections;
};
// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
    return SDPUtils.splitLines(blob).filter((line)=>line.indexOf(prefix) === 0);
};
// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
// Input can be prefixed with a=.
SDPUtils.parseCandidate = function(line) {
    let parts;
    // Parse both variants.
    if (line.indexOf("a=candidate:") === 0) parts = line.substring(12).split(" ");
    else parts = line.substring(10).split(" ");
    const candidate = {
        foundation: parts[0],
        component: {
            1: "rtp",
            2: "rtcp"
        }[parts[1]] || parts[1],
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        address: parts[4],
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
    };
    for(let i = 8; i < parts.length; i += 2)switch(parts[i]){
        case "raddr":
            candidate.relatedAddress = parts[i + 1];
            break;
        case "rport":
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
        case "tcptype":
            candidate.tcpType = parts[i + 1];
            break;
        case "ufrag":
            candidate.ufrag = parts[i + 1]; // for backward compatibility.
            candidate.usernameFragment = parts[i + 1];
            break;
        default:
            if (candidate[parts[i]] === undefined) candidate[parts[i]] = parts[i + 1];
            break;
    }
    return candidate;
};
// Translates a candidate object into SDP candidate attribute.
// This does not include the a= prefix!
SDPUtils.writeCandidate = function(candidate) {
    const sdp = [];
    sdp.push(candidate.foundation);
    const component = candidate.component;
    if (component === "rtp") sdp.push(1);
    else if (component === "rtcp") sdp.push(2);
    else sdp.push(component);
    sdp.push(candidate.protocol.toUpperCase());
    sdp.push(candidate.priority);
    sdp.push(candidate.address || candidate.ip);
    sdp.push(candidate.port);
    const type = candidate.type;
    sdp.push("typ");
    sdp.push(type);
    if (type !== "host" && candidate.relatedAddress && candidate.relatedPort) {
        sdp.push("raddr");
        sdp.push(candidate.relatedAddress);
        sdp.push("rport");
        sdp.push(candidate.relatedPort);
    }
    if (candidate.tcpType && candidate.protocol.toLowerCase() === "tcp") {
        sdp.push("tcptype");
        sdp.push(candidate.tcpType);
    }
    if (candidate.usernameFragment || candidate.ufrag) {
        sdp.push("ufrag");
        sdp.push(candidate.usernameFragment || candidate.ufrag);
    }
    return "candidate:" + sdp.join(" ");
};
// Parses an ice-options line, returns an array of option tags.
// Sample input:
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
    return line.substring(14).split(" ");
};
// Parses a rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
    let parts = line.substring(9).split(" ");
    const parsed = {
        payloadType: parseInt(parts.shift(), 10)
    };
    parts = parts[0].split("/");
    parsed.name = parts[0];
    parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
    parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
    // legacy alias, got renamed back to channels in ORTC.
    parsed.numChannels = parsed.channels;
    return parsed;
};
// Generates a rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    const channels = codec.channels || codec.numChannels || 1;
    return "a=rtpmap:" + pt + " " + codec.name + "/" + codec.clockRate + (channels !== 1 ? "/" + channels : "") + "\r\n";
};
// Parses a extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
    const parts = line.substring(9).split(" ");
    return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf("/") > 0 ? parts[0].split("/")[1] : "sendrecv",
        uri: parts[1],
        attributes: parts.slice(2).join(" ")
    };
};
// Generates an extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
    return "a=extmap:" + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== "sendrecv" ? "/" + headerExtension.direction : "") + " " + headerExtension.uri + (headerExtension.attributes ? " " + headerExtension.attributes : "") + "\r\n";
};
// Parses a fmtp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
    const parsed = {};
    let kv;
    const parts = line.substring(line.indexOf(" ") + 1).split(";");
    for(let j = 0; j < parts.length; j++){
        kv = parts[j].trim().split("=");
        parsed[kv[0].trim()] = kv[1];
    }
    return parsed;
};
// Generates a fmtp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
    let line = "";
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    if (codec.parameters && Object.keys(codec.parameters).length) {
        const params = [];
        Object.keys(codec.parameters).forEach((param)=>{
            if (codec.parameters[param] !== undefined) params.push(param + "=" + codec.parameters[param]);
            else params.push(param);
        });
        line += "a=fmtp:" + pt + " " + params.join(";") + "\r\n";
    }
    return line;
};
// Parses a rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
    const parts = line.substring(line.indexOf(" ") + 1).split(" ");
    return {
        type: parts.shift(),
        parameter: parts.join(" ")
    };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
    let lines = "";
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    if (codec.rtcpFeedback && codec.rtcpFeedback.length) // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach((fb)=>{
        lines += "a=rtcp-fb:" + pt + " " + fb.type + (fb.parameter && fb.parameter.length ? " " + fb.parameter : "") + "\r\n";
    });
    return lines;
};
// Parses a RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
    const sp = line.indexOf(" ");
    const parts = {
        ssrc: parseInt(line.substring(7, sp), 10)
    };
    const colon = line.indexOf(":", sp);
    if (colon > -1) {
        parts.attribute = line.substring(sp + 1, colon);
        parts.value = line.substring(colon + 1);
    } else parts.attribute = line.substring(sp + 1);
    return parts;
};
// Parse a ssrc-group line (see RFC 5576). Sample input:
// a=ssrc-group:semantics 12 34
SDPUtils.parseSsrcGroup = function(line) {
    const parts = line.substring(13).split(" ");
    return {
        semantics: parts.shift(),
        ssrcs: parts.map((ssrc)=>parseInt(ssrc, 10))
    };
};
// Extracts the MID (RFC 5888) from a media section.
// Returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
    const mid = SDPUtils.matchPrefix(mediaSection, "a=mid:")[0];
    if (mid) return mid.substring(6);
};
// Parses a fingerprint line for DTLS-SRTP.
SDPUtils.parseFingerprint = function(line) {
    const parts = line.substring(14).split(" ");
    return {
        algorithm: parts[0].toLowerCase(),
        value: parts[1].toUpperCase()
    };
};
// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
    const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=fingerprint:");
    // Note: a=setup line is ignored since we use the 'auto' role in Edge.
    return {
        role: "auto",
        fingerprints: lines.map(SDPUtils.parseFingerprint)
    };
};
// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
    let sdp = "a=setup:" + setupType + "\r\n";
    params.fingerprints.forEach((fp)=>{
        sdp += "a=fingerprint:" + fp.algorithm + " " + fp.value + "\r\n";
    });
    return sdp;
};
// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
    const parts = line.substring(9).split(" ");
    return {
        tag: parseInt(parts[0], 10),
        cryptoSuite: parts[1],
        keyParams: parts[2],
        sessionParams: parts.slice(3)
    };
};
SDPUtils.writeCryptoLine = function(parameters) {
    return "a=crypto:" + parameters.tag + " " + parameters.cryptoSuite + " " + (typeof parameters.keyParams === "object" ? SDPUtils.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? " " + parameters.sessionParams.join(" ") : "") + "\r\n";
};
// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
    if (keyParams.indexOf("inline:") !== 0) return null;
    const parts = keyParams.substring(7).split("|");
    return {
        keyMethod: "inline",
        keySalt: parts[0],
        lifeTime: parts[1],
        mkiValue: parts[2] ? parts[2].split(":")[0] : undefined,
        mkiLength: parts[2] ? parts[2].split(":")[1] : undefined
    };
};
SDPUtils.writeCryptoKeyParams = function(keyParams) {
    return keyParams.keyMethod + ":" + keyParams.keySalt + (keyParams.lifeTime ? "|" + keyParams.lifeTime : "") + (keyParams.mkiValue && keyParams.mkiLength ? "|" + keyParams.mkiValue + ":" + keyParams.mkiLength : "");
};
// Extracts all SDES parameters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
    const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=crypto:");
    return lines.map(SDPUtils.parseCryptoLine);
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
    const ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=ice-ufrag:")[0];
    const pwd = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=ice-pwd:")[0];
    if (!(ufrag && pwd)) return null;
    return {
        usernameFragment: ufrag.substring(12),
        password: pwd.substring(10)
    };
};
// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
    let sdp = "a=ice-ufrag:" + params.usernameFragment + "\r\n" + "a=ice-pwd:" + params.password + "\r\n";
    if (params.iceLite) sdp += "a=ice-lite\r\n";
    return sdp;
};
// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
    const description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
    };
    const lines = SDPUtils.splitLines(mediaSection);
    const mline = lines[0].split(" ");
    description.profile = mline[2];
    for(let i = 3; i < mline.length; i++){
        const pt = mline[i];
        const rtpmapline = SDPUtils.matchPrefix(mediaSection, "a=rtpmap:" + pt + " ")[0];
        if (rtpmapline) {
            const codec = SDPUtils.parseRtpMap(rtpmapline);
            const fmtps = SDPUtils.matchPrefix(mediaSection, "a=fmtp:" + pt + " ");
            // Only the first a=fmtp:<pt> is considered.
            codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
            codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, "a=rtcp-fb:" + pt + " ").map(SDPUtils.parseRtcpFb);
            description.codecs.push(codec);
            // parse FEC mechanisms from rtpmap lines.
            switch(codec.name.toUpperCase()){
                case "RED":
                case "ULPFEC":
                    description.fecMechanisms.push(codec.name.toUpperCase());
                    break;
                default:
                    break;
            }
        }
    }
    SDPUtils.matchPrefix(mediaSection, "a=extmap:").forEach((line)=>{
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
    });
    const wildcardRtcpFb = SDPUtils.matchPrefix(mediaSection, "a=rtcp-fb:* ").map(SDPUtils.parseRtcpFb);
    description.codecs.forEach((codec)=>{
        wildcardRtcpFb.forEach((fb)=>{
            const duplicate = codec.rtcpFeedback.find((existingFeedback)=>{
                return existingFeedback.type === fb.type && existingFeedback.parameter === fb.parameter;
            });
            if (!duplicate) codec.rtcpFeedback.push(fb);
        });
    });
    // FIXME: parse rtcp.
    return description;
};
// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
    let sdp = "";
    // Build the mline.
    sdp += "m=" + kind + " ";
    sdp += caps.codecs.length > 0 ? "9" : "0"; // reject if no codecs.
    sdp += " " + (caps.profile || "UDP/TLS/RTP/SAVPF") + " ";
    sdp += caps.codecs.map((codec)=>{
        if (codec.preferredPayloadType !== undefined) return codec.preferredPayloadType;
        return codec.payloadType;
    }).join(" ") + "\r\n";
    sdp += "c=IN IP4 0.0.0.0\r\n";
    sdp += "a=rtcp:9 IN IP4 0.0.0.0\r\n";
    // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
    caps.codecs.forEach((codec)=>{
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
    });
    let maxptime = 0;
    caps.codecs.forEach((codec)=>{
        if (codec.maxptime > maxptime) maxptime = codec.maxptime;
    });
    if (maxptime > 0) sdp += "a=maxptime:" + maxptime + "\r\n";
    if (caps.headerExtensions) caps.headerExtensions.forEach((extension)=>{
        sdp += SDPUtils.writeExtmap(extension);
    });
    // FIXME: write fecMechanisms.
    return sdp;
};
// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
    const encodingParameters = [];
    const description = SDPUtils.parseRtpParameters(mediaSection);
    const hasRed = description.fecMechanisms.indexOf("RED") !== -1;
    const hasUlpfec = description.fecMechanisms.indexOf("ULPFEC") !== -1;
    // filter a=ssrc:... cname:, ignore PlanB-msid
    const ssrcs = SDPUtils.matchPrefix(mediaSection, "a=ssrc:").map((line)=>SDPUtils.parseSsrcMedia(line)).filter((parts)=>parts.attribute === "cname");
    const primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
    let secondarySsrc;
    const flows = SDPUtils.matchPrefix(mediaSection, "a=ssrc-group:FID").map((line)=>{
        const parts = line.substring(17).split(" ");
        return parts.map((part)=>parseInt(part, 10));
    });
    if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) secondarySsrc = flows[0][1];
    description.codecs.forEach((codec)=>{
        if (codec.name.toUpperCase() === "RTX" && codec.parameters.apt) {
            let encParam = {
                ssrc: primarySsrc,
                codecPayloadType: parseInt(codec.parameters.apt, 10)
            };
            if (primarySsrc && secondarySsrc) encParam.rtx = {
                ssrc: secondarySsrc
            };
            encodingParameters.push(encParam);
            if (hasRed) {
                encParam = JSON.parse(JSON.stringify(encParam));
                encParam.fec = {
                    ssrc: primarySsrc,
                    mechanism: hasUlpfec ? "red+ulpfec" : "red"
                };
                encodingParameters.push(encParam);
            }
        }
    });
    if (encodingParameters.length === 0 && primarySsrc) encodingParameters.push({
        ssrc: primarySsrc
    });
    // we support both b=AS and b=TIAS but interpret AS as TIAS.
    let bandwidth = SDPUtils.matchPrefix(mediaSection, "b=");
    if (bandwidth.length) {
        if (bandwidth[0].indexOf("b=TIAS:") === 0) bandwidth = parseInt(bandwidth[0].substring(7), 10);
        else if (bandwidth[0].indexOf("b=AS:") === 0) // use formula from JSEP to convert b=AS to TIAS value.
        bandwidth = parseInt(bandwidth[0].substring(5), 10) * 950 - 16000;
        else bandwidth = undefined;
        encodingParameters.forEach((params)=>{
            params.maxBitrate = bandwidth;
        });
    }
    return encodingParameters;
};
// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
    const rtcpParameters = {};
    // Gets the first SSRC. Note that with RTX there might be multiple
    // SSRCs.
    const remoteSsrc = SDPUtils.matchPrefix(mediaSection, "a=ssrc:").map((line)=>SDPUtils.parseSsrcMedia(line)).filter((obj)=>obj.attribute === "cname")[0];
    if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
    }
    // Edge uses the compound attribute instead of reducedSize
    // compound is !reducedSize
    const rsize = SDPUtils.matchPrefix(mediaSection, "a=rtcp-rsize");
    rtcpParameters.reducedSize = rsize.length > 0;
    rtcpParameters.compound = rsize.length === 0;
    // parses the rtcp-mux attrіbute.
    // Note that Edge does not support unmuxed RTCP.
    const mux = SDPUtils.matchPrefix(mediaSection, "a=rtcp-mux");
    rtcpParameters.mux = mux.length > 0;
    return rtcpParameters;
};
SDPUtils.writeRtcpParameters = function(rtcpParameters) {
    let sdp = "";
    if (rtcpParameters.reducedSize) sdp += "a=rtcp-rsize\r\n";
    if (rtcpParameters.mux) sdp += "a=rtcp-mux\r\n";
    if (rtcpParameters.ssrc !== undefined && rtcpParameters.cname) sdp += "a=ssrc:" + rtcpParameters.ssrc + " cname:" + rtcpParameters.cname + "\r\n";
    return sdp;
};
// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
    let parts;
    const spec = SDPUtils.matchPrefix(mediaSection, "a=msid:");
    if (spec.length === 1) {
        parts = spec[0].substring(7).split(" ");
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
    const planB = SDPUtils.matchPrefix(mediaSection, "a=ssrc:").map((line)=>SDPUtils.parseSsrcMedia(line)).filter((msidParts)=>msidParts.attribute === "msid");
    if (planB.length > 0) {
        parts = planB[0].value.split(" ");
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
};
// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
    const mline = SDPUtils.parseMLine(mediaSection);
    const maxSizeLine = SDPUtils.matchPrefix(mediaSection, "a=max-message-size:");
    let maxMessageSize;
    if (maxSizeLine.length > 0) maxMessageSize = parseInt(maxSizeLine[0].substring(19), 10);
    if (isNaN(maxMessageSize)) maxMessageSize = 65536;
    const sctpPort = SDPUtils.matchPrefix(mediaSection, "a=sctp-port:");
    if (sctpPort.length > 0) return {
        port: parseInt(sctpPort[0].substring(12), 10),
        protocol: mline.fmt,
        maxMessageSize
    };
    const sctpMapLines = SDPUtils.matchPrefix(mediaSection, "a=sctpmap:");
    if (sctpMapLines.length > 0) {
        const parts = sctpMapLines[0].substring(10).split(" ");
        return {
            port: parseInt(parts[0], 10),
            protocol: parts[1],
            maxMessageSize
        };
    }
};
// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
    let output = [];
    if (media.protocol !== "DTLS/SCTP") output = [
        "m=" + media.kind + " 9 " + media.protocol + " " + sctp.protocol + "\r\n",
        "c=IN IP4 0.0.0.0\r\n",
        "a=sctp-port:" + sctp.port + "\r\n"
    ];
    else output = [
        "m=" + media.kind + " 9 " + media.protocol + " " + sctp.port + "\r\n",
        "c=IN IP4 0.0.0.0\r\n",
        "a=sctpmap:" + sctp.port + " " + sctp.protocol + " 65535\r\n"
    ];
    if (sctp.maxMessageSize !== undefined) output.push("a=max-message-size:" + sctp.maxMessageSize + "\r\n");
    return output.join("");
};
// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
    return Math.random().toString().substr(2, 22);
};
// Write boiler plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
    let sessionId;
    const version = sessVer !== undefined ? sessVer : 2;
    if (sessId) sessionId = sessId;
    else sessionId = SDPUtils.generateSessionId();
    const user = sessUser || "thisisadapterortc";
    // FIXME: sess-id should be an NTP timestamp.
    return "v=0\r\no=" + user + " " + sessionId + " " + version + " IN IP4 127.0.0.1\r\n" + "s=-\r\n" + "t=0 0\r\n";
};
// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
    // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
    const lines = SDPUtils.splitLines(mediaSection);
    for(let i = 0; i < lines.length; i++)switch(lines[i]){
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
            return lines[i].substring(2);
        default:
    }
    if (sessionpart) return SDPUtils.getDirection(sessionpart);
    return "sendrecv";
};
SDPUtils.getKind = function(mediaSection) {
    const lines = SDPUtils.splitLines(mediaSection);
    const mline = lines[0].split(" ");
    return mline[0].substring(2);
};
SDPUtils.isRejected = function(mediaSection) {
    return mediaSection.split(" ", 2)[1] === "0";
};
SDPUtils.parseMLine = function(mediaSection) {
    const lines = SDPUtils.splitLines(mediaSection);
    const parts = lines[0].substring(2).split(" ");
    return {
        kind: parts[0],
        port: parseInt(parts[1], 10),
        protocol: parts[2],
        fmt: parts.slice(3).join(" ")
    };
};
SDPUtils.parseOLine = function(mediaSection) {
    const line = SDPUtils.matchPrefix(mediaSection, "o=")[0];
    const parts = line.substring(2).split(" ");
    return {
        username: parts[0],
        sessionId: parts[1],
        sessionVersion: parseInt(parts[2], 10),
        netType: parts[3],
        addressType: parts[4],
        address: parts[5]
    };
};
// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
    if (typeof blob !== "string" || blob.length === 0) return false;
    const lines = SDPUtils.splitLines(blob);
    for(let i = 0; i < lines.length; i++){
        if (lines[i].length < 2 || lines[i].charAt(1) !== "=") return false;
    // TODO: check the modifier a bit more.
    }
    return true;
};
module.exports = SDPUtils;

},{}],"2fabB":[function(require,module,exports) {
/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.35
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */ /*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */ /////////////////////////////////////////////////////////////////////////////////
(function(window1, undefined) {
    "use strict";
    //////////////
    // Constants
    /////////////
    var LIBVERSION = "1.0.35", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 350;
    var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", VIERA = "Viera", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
    ///////////
    // Helper
    //////////
    var extend = function(regexes, extensions) {
        var mergedRegexes = {};
        for(var i in regexes)if (extensions[i] && extensions[i].length % 2 === 0) mergedRegexes[i] = extensions[i].concat(regexes[i]);
        else mergedRegexes[i] = regexes[i];
        return mergedRegexes;
    }, enumerize = function(arr) {
        var enums = {};
        for(var i = 0; i < arr.length; i++)enums[arr[i].toUpperCase()] = arr[i];
        return enums;
    }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
        return str.toLowerCase();
    }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined;
    }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
    };
    ///////////////
    // Map helper
    //////////////
    var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        // loop through all regexes maps
        while(i < arrays.length && !matches){
            var regex = arrays[i], props = arrays[i + 1]; // odd sequence (1,3,5,..)
            j = k = 0;
            // try matching uastring with regexes
            while(j < regex.length && !matches){
                if (!regex[j]) break;
                matches = regex[j++].exec(ua);
                if (!!matches) for(p = 0; p < props.length; p++){
                    match = matches[++k];
                    q = props[p];
                    // check if given property is actually array
                    if (typeof q === OBJ_TYPE && q.length > 0) {
                        if (q.length === 2) {
                            if (typeof q[1] == FUNC_TYPE) // assign modified match
                            this[q[0]] = q[1].call(this, match);
                            else // assign given value, ignore regex match
                            this[q[0]] = q[1];
                        } else if (q.length === 3) {
                            // check whether function or regex
                            if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) // call function (usually string mapper)
                            this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                            else // sanitize match using given regex
                            this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                        } else if (q.length === 4) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                    } else this[q] = match ? match : undefined;
                }
            }
            i += 2;
        }
    }, strMapper = function(str, map) {
        for(var i in map){
            // check if current value is array
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) for(var j = 0; j < map[i].length; j++){
                if (has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
            }
            else if (has(map[i], str)) return i === UNKNOWN ? undefined : i;
        }
        return str;
    };
    ///////////////
    // String map
    //////////////
    // Safari < 3.0
    var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
    }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": [
            "NT 5.1",
            "NT 5.2"
        ],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": [
            "NT 6.4",
            "NT 10.0"
        ],
        "RT": "ARM"
    };
    //////////////
    // Regex map
    /////////////
    var regexes = {
        browser: [
            [
                /\b(?:crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "Chrome"
                ]
            ],
            [
                /edg(?:e|ios|a)?\/([\w\.]+)/i // Microsoft Edge
            ],
            [
                VERSION,
                [
                    NAME,
                    "Edge"
                ]
            ],
            [
                // Presto based
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i // Opera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /opios[\/ ]+([\w\.]+)/i // Opera mini on iphone >= 8.0
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Mini"
                ]
            ],
            [
                /\bopr\/([\w\.]+)/i // Opera Webkit
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA
                ]
            ],
            [
                // Mixed
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                // Trident based
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i // Weibo
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i // UCBrowser
            ],
            [
                VERSION,
                [
                    NAME,
                    "UC" + BROWSER
                ]
            ],
            [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i
            ],
            [
                VERSION,
                [
                    NAME,
                    "WeChat(Win) Desktop"
                ]
            ],
            [
                /micromessenger\/([\w\.]+)/i // WeChat
            ],
            [
                VERSION,
                [
                    NAME,
                    "WeChat"
                ]
            ],
            [
                /konqueror\/([\w\.]+)/i // Konqueror
            ],
            [
                VERSION,
                [
                    NAME,
                    "Konqueror"
                ]
            ],
            [
                /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i // IE11
            ],
            [
                VERSION,
                [
                    NAME,
                    "IE"
                ]
            ],
            [
                /ya(?:search)?browser\/([\w\.]+)/i // Yandex
            ],
            [
                VERSION,
                [
                    NAME,
                    "Yandex"
                ]
            ],
            [
                /(avast|avg)\/([\w\.]+)/i // Avast/AVG Secure Browser
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 Secure " + BROWSER
                ],
                VERSION
            ],
            [
                /\bfocus\/([\w\.]+)/i // Firefox Focus
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Focus"
                ]
            ],
            [
                /\bopt\/([\w\.]+)/i // Opera Touch
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Touch"
                ]
            ],
            [
                /coc_coc\w+\/([\w\.]+)/i // Coc Coc Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Coc Coc"
                ]
            ],
            [
                /dolfin\/([\w\.]+)/i // Dolphin
            ],
            [
                VERSION,
                [
                    NAME,
                    "Dolphin"
                ]
            ],
            [
                /coast\/([\w\.]+)/i // Opera Coast
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Coast"
                ]
            ],
            [
                /miuibrowser\/([\w\.]+)/i // MIUI Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "MIUI " + BROWSER
                ]
            ],
            [
                /fxios\/([-\w\.]+)/i // Firefox for iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX
                ]
            ],
            [
                /\bqihu|(qi?ho?o?|360)browser/i // 360
            ],
            [
                [
                    NAME,
                    "360 " + BROWSER
                ]
            ],
            [
                /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 " + BROWSER
                ],
                VERSION
            ],
            [
                /(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
            ],
            [
                [
                    NAME,
                    /_/g,
                    " "
                ],
                VERSION
            ],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i // QQBrowser/Baidu App/2345 Browser
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i // LinkedIn App for iOS & Android
            ],
            [
                NAME
            ],
            [
                // WebView
                /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i // Facebook App for iOS & Android
            ],
            [
                [
                    NAME,
                    FACEBOOK
                ],
                VERSION
            ],
            [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i // Chromium/Instagram
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\bgsa\/([\w\.]+) .*safari\//i // Google Search Appliance on iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "GSA"
                ]
            ],
            [
                /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i // TikTok
            ],
            [
                VERSION,
                [
                    NAME,
                    "TikTok"
                ]
            ],
            [
                /headlesschrome(?:\/([\w\.]+)| )/i // Chrome Headless
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + " Headless"
                ]
            ],
            [
                / wv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
            ],
            [
                [
                    NAME,
                    CHROME + " WebView"
                ],
                VERSION
            ],
            [
                /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i // Android Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Android " + BROWSER
                ]
            ],
            [
                /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
            ],
            [
                NAME,
                VERSION
            ],
            [
                /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i // Mobile Safari
            ],
            [
                VERSION,
                [
                    NAME,
                    "Mobile Safari"
                ]
            ],
            [
                /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i // Safari & Safari Mobile
            ],
            [
                VERSION,
                NAME
            ],
            [
                /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    oldSafariMap
                ]
            ],
            [
                /(webkit|khtml)\/([\w\.]+)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                // Gecko based
                /(navigator|netscape\d?)\/([-\w\.]+)/i // Netscape
            ],
            [
                [
                    NAME,
                    "Netscape"
                ],
                VERSION
            ],
            [
                /mobile vr; rv:([\w\.]+)\).+firefox/i // Firefox Reality
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Reality"
                ]
            ],
            [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                // Other
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i // Panasonic Viera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(cobalt)\/([\w\.]+)/i // Cobalt
            ],
            [
                NAME,
                [
                    VERSION,
                    /master.|lts./,
                    ""
                ]
            ]
        ],
        cpu: [
            [
                /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i // AMD64 (x64)
            ],
            [
                [
                    ARCHITECTURE,
                    "amd64"
                ]
            ],
            [
                /(ia32(?=;))/i // IA32 (quicktime)
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ],
            [
                /((?:i[346]|x)86)[;\)]/i // IA32 (x86)
            ],
            [
                [
                    ARCHITECTURE,
                    "ia32"
                ]
            ],
            [
                /\b(aarch64|arm(v?8e?l?|_?64))\b/i // ARM64
            ],
            [
                [
                    ARCHITECTURE,
                    "arm64"
                ]
            ],
            [
                /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i // ARMHF
            ],
            [
                [
                    ARCHITECTURE,
                    "armhf"
                ]
            ],
            [
                // PocketPC mistakenly identified as PowerPC
                /windows (ce|mobile); ppc;/i
            ],
            [
                [
                    ARCHITECTURE,
                    "arm"
                ]
            ],
            [
                /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i // PowerPC
            ],
            [
                [
                    ARCHITECTURE,
                    /ower/,
                    EMPTY,
                    lowerize
                ]
            ],
            [
                /(sun4\w)[;\)]/i // SPARC
            ],
            [
                [
                    ARCHITECTURE,
                    "sparc"
                ]
            ],
            [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ]
        ],
        device: [
            [
                //////////////////////////
                // MOBILES & TABLETS
                /////////////////////////
                // Samsung
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Apple
                /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i // iPod/iPhone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(macintosh);/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ]
            ],
            [
                // Sharp
                /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Huawei
                /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Xiaomi
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i // Mi Pad tablets
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OPPO
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OPPO"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Vivo
                /vivo (\w+)(?: bui|\))/i,
                /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Vivo"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Realme
                /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Realme"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Motorola
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // LG
                /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Lenovo
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Lenovo"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Nokia
                /(?:maemo|nokia).*(n900|lumia \d+)/i,
                /nokia[-_ ]?([-\w\.]*)/i
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    "Nokia"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Google
                /(pixel c)\b/i // Google Pixel C
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i // Google Pixel
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Sony
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /sony tablet [ps]/i,
                /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [
                [
                    MODEL,
                    "Xperia Tablet"
                ],
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OnePlus
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OnePlus"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Amazon
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i // Kindle Fire HD
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i // Fire Phone
            ],
            [
                [
                    MODEL,
                    /(.+)/g,
                    "Fire Phone $1"
                ],
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // BlackBerry
                /(playbook);[-\w\),; ]+(rim)/i // BlackBerry PlayBook
            ],
            [
                MODEL,
                VENDOR,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:bb[a-f]|st[hv])100-\d)/i,
                /\(bb10; (\w+)/i // BlackBerry 10
            ],
            [
                MODEL,
                [
                    VENDOR,
                    BLACKBERRY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Asus
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // HTC
                /(nexus 9)/i // HTC Nexus 9
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "HTC"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                // ZTE
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ],
            [
                VENDOR,
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Acer
                /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Acer"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Meizu
                /droid.+; (m[1-5] note) bui/i,
                /\bmz-([-\w]{2,})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Meizu"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // MIXED
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i // OPPO
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i // Vodafone
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(surface duo)/i // Surface Duo
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid [\d\.]+; (fp\du?)(?: b|\))/i // Fairphone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Fairphone"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(u304aa)/i // AT&T
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "AT&T"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\bsie-(\w*)/i // Siemens
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Siemens"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(rct\w+) b/i // RCA Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "RCA"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(venue[\d ]{2,7}) b/i // Dell Venue Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Dell"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(q(?:mv|ta)\w+) b/i // Verizon Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Verizon"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i // Barnes & Noble Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Barnes & Noble"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(tm\d{3}\w+) b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NuVision"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(k88) b/i // ZTE K Series Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(nx\d{3}j) b/i // ZTE Nubia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(gen\d{3}) b.+49h/i // Swiss GEN Mobile
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(zur\d{3}) b/i // Swiss ZUR Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((zeki)?tb.*\b) b/i // Zeki Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Zeki"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b([yr]\d{2}) b/i,
                /\b(dragon[- ]+touch |dt)(\w{5}) b/i // Dragon Touch Tablet
            ],
            [
                [
                    VENDOR,
                    "Dragon Touch"
                ],
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(ns-?\w{0,9}) b/i // Insignia Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Insignia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((nxa|next)-?\w{0,9}) b/i // NextBook Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NextBook"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i // Voice Xtreme Phones
            ],
            [
                [
                    VENDOR,
                    "Voice"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(lvtel\-)?(v1[12]) b/i // LvTel Phones
            ],
            [
                [
                    VENDOR,
                    "LvTel"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(ph-1) /i // Essential PH-1
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Essential"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(v(100md|700na|7011|917g).*\b) b/i // Envizen Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Envizen"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(trio[-\w\. ]+) b/i // MachSpeed Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "MachSpeed"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\btu_(1491) b/i // Rotor Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Rotor"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(shield[\w ]+) b/i // Nvidia Shield Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(sprint) (\w+)/i // Sprint Phones
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kin\.[onetw]{3})/i // Microsoft Kin
            ],
            [
                [
                    MODEL,
                    /\./g,
                    " "
                ],
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i // Zebra
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                ///////////////////
                // SMARTTVS
                ///////////////////
                /smart-tv.+(samsung)/i // Samsung
            ],
            [
                VENDOR,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /hbbtv.+maple;(\d+)/i
            ],
            [
                [
                    MODEL,
                    /^/,
                    "SmartTV"
                ],
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i // LG SmartTV
            ],
            [
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(apple) ?tv/i // Apple TV
            ],
            [
                VENDOR,
                [
                    MODEL,
                    APPLE + " TV"
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /crkey/i // Google Chromecast
            ],
            [
                [
                    MODEL,
                    CHROME + "cast"
                ],
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /droid.+aft(\w)( bui|\))/i // Fire TV
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\(dtv[\);].+(aquos)/i,
                /(aquos-tv[\w ]+)\)/i // Sharp
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(bravia[\w ]+)( bui|\))/i // Sony
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(mitv-\w{5}) bui/i // Xiaomi
            ],
            [
                MODEL,
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /Hbbtv.*(technisat) (.*);/i // TechniSAT
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i // HbbTV devices
            ],
            [
                [
                    VENDOR,
                    trim
                ],
                [
                    MODEL,
                    trim
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i // SmartTV from Unidentified Vendors
            ],
            [
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                ///////////////////
                // CONSOLES
                ///////////////////
                /(ouya)/i,
                /(nintendo) ([wids3utch]+)/i // Nintendo
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /droid.+; (shield) bui/i // Nvidia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /(playstation [345portablevi]+)/i // Playstation
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /\b(xbox(?: one)?(?!; xbox))[\); ]/i // Microsoft Xbox
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                ///////////////////
                // WEARABLES
                ///////////////////
                /((pebble))app/i // Pebble
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i // Apple Watch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (glass) \d/i // Google Glass
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (wt63?0{2,3})\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(quest( 2| pro)?)/i // Oculus Quest
            ],
            [
                MODEL,
                [
                    VENDOR,
                    FACEBOOK
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                ///////////////////
                // EMBEDDED
                ///////////////////
                /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i // Tesla
            ],
            [
                VENDOR,
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                /(aeobc)\b/i // Echo Dot
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                ////////////////////
                // MIXED (GENERIC)
                ///////////////////
                /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i // Android Phones from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i // Android Tablets from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i // Unidentifiable Tablet
            ],
            [
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i // Unidentifiable Mobile
            ],
            [
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(android[-\w\. ]{0,9});.+buil/i // Generic Android Device
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Generic"
                ]
            ]
        ],
        engine: [
            [
                /windows.+ edge\/([\w\.]+)/i // EdgeHTML
            ],
            [
                VERSION,
                [
                    NAME,
                    EDGE + "HTML"
                ]
            ],
            [
                /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
            ],
            [
                VERSION,
                [
                    NAME,
                    "Blink"
                ]
            ],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                /rv\:([\w\.]{1,9})\b.+(gecko)/i // Gecko
            ],
            [
                VERSION,
                NAME
            ]
        ],
        os: [
            [
                // Windows
                /microsoft (windows) (vista|xp)/i // Windows (iTunes)
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [
                [
                    NAME,
                    "Windows"
                ],
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                // iOS/macOS
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /ios;fbsv\/([\d\.]+)/i,
                /cfnetwork\/.+darwin/i
            ],
            [
                [
                    VERSION,
                    /_/g,
                    "."
                ],
                [
                    NAME,
                    "iOS"
                ]
            ],
            [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i // Mac OS
            ],
            [
                [
                    NAME,
                    MAC_OS
                ],
                [
                    VERSION,
                    /_/g,
                    "."
                ]
            ],
            [
                // Mobile OSes
                /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i // Android-x86/HarmonyOS
            ],
            [
                VERSION,
                NAME
            ],
            [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i // Series 40
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\(bb(10);/i // BlackBerry 10
            ],
            [
                VERSION,
                [
                    NAME,
                    BLACKBERRY
                ]
            ],
            [
                /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i // Symbian
            ],
            [
                VERSION,
                [
                    NAME,
                    "Symbian"
                ]
            ],
            [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " OS"
                ]
            ],
            [
                /web0s;.+rt(tv)/i,
                /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i // WebOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "webOS"
                ]
            ],
            [
                /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i // watchOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "watchOS"
                ]
            ],
            [
                // Google Chromecast
                /crkey\/([\d\.]+)/i // Google Chromecast
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + "cast"
                ]
            ],
            [
                /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i // Chromium OS
            ],
            [
                [
                    NAME,
                    CHROMIUM_OS
                ],
                VERSION
            ],
            [
                // Smart TVs
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                // Console
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                // Other
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i // Haiku
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(sunos) ?([\w\.\d]*)/i // Solaris
            ],
            [
                [
                    NAME,
                    "Solaris"
                ],
                VERSION
            ],
            [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i // UNIX
            ],
            [
                NAME,
                VERSION
            ]
        ]
    };
    /////////////////
    // Constructor
    ////////////////
    var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }
        if (!(this instanceof UAParser)) return new UAParser(ua, extensions).getResult();
        var _navigator = typeof window1 !== UNDEF_TYPE && window1.navigator ? window1.navigator : undefined;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            // Brave-specific detection
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) _browser[NAME] = "Brave";
            return _browser;
        };
        this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) _device[TYPE] = MOBILE;
            // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
            if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
                _device[MODEL] = "iPad";
                _device[TYPE] = TABLET;
            }
            return _device;
        };
        this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform != "Unknown") _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS); // backward compatibility
            return _os;
        };
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        };
        this.getUA = function() {
            return _ua;
        };
        this.setUA = function(ua) {
            _ua = typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = enumerize([
        NAME,
        VERSION,
        MAJOR
    ]);
    UAParser.CPU = enumerize([
        ARCHITECTURE
    ]);
    UAParser.DEVICE = enumerize([
        MODEL,
        VENDOR,
        TYPE,
        CONSOLE,
        MOBILE,
        SMARTTV,
        TABLET,
        WEARABLE,
        EMBEDDED
    ]);
    UAParser.ENGINE = UAParser.OS = enumerize([
        NAME,
        VERSION
    ]);
    ///////////
    // Export
    //////////
    // check js environment
    if (typeof exports !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) exports = module.exports = UAParser;
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof define === FUNC_TYPE && define.amd) define(function() {
            return UAParser;
        });
        else if (typeof window1 !== UNDEF_TYPE) // browser env
        window1.UAParser = UAParser;
    }
    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window1 !== UNDEF_TYPE && (window1.jQuery || window1.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for(var prop in result)$.ua[prop] = result[prop];
        };
    }
})(typeof window === "object" ? window : this);

},{}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"8zJtu","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":"eHPgI","./stringify.js":"5Y9F1","./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJsDefault.default)(rnds);
}
exports.default = v4;

},{"./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2psyE":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}
exports.default = rng;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).substr(1));
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j95ue":[function(require,module,exports) {
var process = require("f2685cfa9f4b33b9");
!function(undefined) {
    var hasOwnProperty = Object.hasOwnProperty;
    var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    var defaultMaxListeners = 10;
    var nextTickSupported = typeof process == "object" && typeof process.nextTick == "function";
    var symbolsSupported = typeof Symbol === "function";
    var reflectSupported = typeof Reflect === "object";
    var setImmediateSupported = typeof setImmediate === "function";
    var _setImmediate = setImmediateSupported ? setImmediate : setTimeout;
    var ownKeys = symbolsSupported ? reflectSupported && typeof Reflect.ownKeys === "function" ? Reflect.ownKeys : function(obj) {
        var arr = Object.getOwnPropertyNames(obj);
        arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
        return arr;
    } : Object.keys;
    function init() {
        this._events = {};
        if (this._conf) configure.call(this, this._conf);
    }
    function configure(conf) {
        if (conf) {
            this._conf = conf;
            conf.delimiter && (this.delimiter = conf.delimiter);
            if (conf.maxListeners !== undefined) this._maxListeners = conf.maxListeners;
            conf.wildcard && (this.wildcard = conf.wildcard);
            conf.newListener && (this._newListener = conf.newListener);
            conf.removeListener && (this._removeListener = conf.removeListener);
            conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
            conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);
            if (this.wildcard) this.listenerTree = {};
        }
    }
    function logPossibleMemoryLeak(count, eventName) {
        var errorMsg = "(node) warning: possible EventEmitter memory leak detected. " + count + " listeners added. " + "Use emitter.setMaxListeners() to increase limit.";
        if (this.verboseMemoryLeak) errorMsg += " Event name: " + eventName + ".";
        if (typeof process !== "undefined" && process.emitWarning) {
            var e = new Error(errorMsg);
            e.name = "MaxListenersExceededWarning";
            e.emitter = this;
            e.count = count;
            process.emitWarning(e);
        } else {
            console.error(errorMsg);
            if (console.trace) console.trace();
        }
    }
    var toArray = function(a, b, c) {
        var n = arguments.length;
        switch(n){
            case 0:
                return [];
            case 1:
                return [
                    a
                ];
            case 2:
                return [
                    a,
                    b
                ];
            case 3:
                return [
                    a,
                    b,
                    c
                ];
            default:
                var arr = new Array(n);
                while(n--)arr[n] = arguments[n];
                return arr;
        }
    };
    function toObject(keys, values) {
        var obj = {};
        var key;
        var len = keys.length;
        var valuesCount = values ? values.length : 0;
        for(var i = 0; i < len; i++){
            key = keys[i];
            obj[key] = i < valuesCount ? values[i] : undefined;
        }
        return obj;
    }
    function TargetObserver(emitter, target, options) {
        this._emitter = emitter;
        this._target = target;
        this._listeners = {};
        this._listenersCount = 0;
        var on, off;
        if (options.on || options.off) {
            on = options.on;
            off = options.off;
        }
        if (target.addEventListener) {
            on = target.addEventListener;
            off = target.removeEventListener;
        } else if (target.addListener) {
            on = target.addListener;
            off = target.removeListener;
        } else if (target.on) {
            on = target.on;
            off = target.off;
        }
        if (!on && !off) throw Error("target does not implement any known event API");
        if (typeof on !== "function") throw TypeError("on method must be a function");
        if (typeof off !== "function") throw TypeError("off method must be a function");
        this._on = on;
        this._off = off;
        var _observers = emitter._observers;
        if (_observers) _observers.push(this);
        else emitter._observers = [
            this
        ];
    }
    Object.assign(TargetObserver.prototype, {
        subscribe: function(event, localEvent, reducer) {
            var observer = this;
            var target = this._target;
            var emitter = this._emitter;
            var listeners = this._listeners;
            var handler = function() {
                var args = toArray.apply(null, arguments);
                var eventObj = {
                    data: args,
                    name: localEvent,
                    original: event
                };
                if (reducer) {
                    var result = reducer.call(target, eventObj);
                    if (result !== false) emitter.emit.apply(emitter, [
                        eventObj.name
                    ].concat(args));
                    return;
                }
                emitter.emit.apply(emitter, [
                    localEvent
                ].concat(args));
            };
            if (listeners[event]) throw Error("Event '" + event + "' is already listening");
            this._listenersCount++;
            if (emitter._newListener && emitter._removeListener && !observer._onNewListener) {
                this._onNewListener = function(_event) {
                    if (_event === localEvent && listeners[event] === null) {
                        listeners[event] = handler;
                        observer._on.call(target, event, handler);
                    }
                };
                emitter.on("newListener", this._onNewListener);
                this._onRemoveListener = function(_event) {
                    if (_event === localEvent && !emitter.hasListeners(_event) && listeners[event]) {
                        listeners[event] = null;
                        observer._off.call(target, event, handler);
                    }
                };
                listeners[event] = null;
                emitter.on("removeListener", this._onRemoveListener);
            } else {
                listeners[event] = handler;
                observer._on.call(target, event, handler);
            }
        },
        unsubscribe: function(event) {
            var observer = this;
            var listeners = this._listeners;
            var emitter = this._emitter;
            var handler;
            var events;
            var off = this._off;
            var target = this._target;
            var i;
            if (event && typeof event !== "string") throw TypeError("event must be a string");
            function clearRefs() {
                if (observer._onNewListener) {
                    emitter.off("newListener", observer._onNewListener);
                    emitter.off("removeListener", observer._onRemoveListener);
                    observer._onNewListener = null;
                    observer._onRemoveListener = null;
                }
                var index = findTargetIndex.call(emitter, observer);
                emitter._observers.splice(index, 1);
            }
            if (event) {
                handler = listeners[event];
                if (!handler) return;
                off.call(target, event, handler);
                delete listeners[event];
                if (!--this._listenersCount) clearRefs();
            } else {
                events = ownKeys(listeners);
                i = events.length;
                while(i-- > 0){
                    event = events[i];
                    off.call(target, event, listeners[event]);
                }
                this._listeners = {};
                this._listenersCount = 0;
                clearRefs();
            }
        }
    });
    function resolveOptions(options, schema, reducers, allowUnknown) {
        var computedOptions = Object.assign({}, schema);
        if (!options) return computedOptions;
        if (typeof options !== "object") throw TypeError("options must be an object");
        var keys = Object.keys(options);
        var length = keys.length;
        var option, value;
        var reducer;
        function reject(reason) {
            throw Error('Invalid "' + option + '" option value' + (reason ? ". Reason: " + reason : ""));
        }
        for(var i = 0; i < length; i++){
            option = keys[i];
            if (!allowUnknown && !hasOwnProperty.call(schema, option)) throw Error('Unknown "' + option + '" option');
            value = options[option];
            if (value !== undefined) {
                reducer = reducers[option];
                computedOptions[option] = reducer ? reducer(value, reject) : value;
            }
        }
        return computedOptions;
    }
    function constructorReducer(value, reject) {
        if (typeof value !== "function" || !value.hasOwnProperty("prototype")) reject("value must be a constructor");
        return value;
    }
    function makeTypeReducer(types) {
        var message = "value must be type of " + types.join("|");
        var len = types.length;
        var firstType = types[0];
        var secondType = types[1];
        if (len === 1) return function(v, reject) {
            if (typeof v === firstType) return v;
            reject(message);
        };
        if (len === 2) return function(v, reject) {
            var kind = typeof v;
            if (kind === firstType || kind === secondType) return v;
            reject(message);
        };
        return function(v, reject) {
            var kind = typeof v;
            var i = len;
            while(i-- > 0){
                if (kind === types[i]) return v;
            }
            reject(message);
        };
    }
    var functionReducer = makeTypeReducer([
        "function"
    ]);
    var objectFunctionReducer = makeTypeReducer([
        "object",
        "function"
    ]);
    function makeCancelablePromise(Promise1, executor, options) {
        var isCancelable;
        var callbacks;
        var timer = 0;
        var subscriptionClosed;
        var promise = new Promise1(function(resolve, reject, onCancel) {
            options = resolveOptions(options, {
                timeout: 0,
                overload: false
            }, {
                timeout: function(value, reject) {
                    value *= 1;
                    if (typeof value !== "number" || value < 0 || !Number.isFinite(value)) reject("timeout must be a positive number");
                    return value;
                }
            });
            isCancelable = !options.overload && typeof Promise1.prototype.cancel === "function" && typeof onCancel === "function";
            function cleanup() {
                if (callbacks) callbacks = null;
                if (timer) {
                    clearTimeout(timer);
                    timer = 0;
                }
            }
            var _resolve = function(value) {
                cleanup();
                resolve(value);
            };
            var _reject = function(err) {
                cleanup();
                reject(err);
            };
            if (isCancelable) executor(_resolve, _reject, onCancel);
            else {
                callbacks = [
                    function(reason) {
                        _reject(reason || Error("canceled"));
                    }
                ];
                executor(_resolve, _reject, function(cb) {
                    if (subscriptionClosed) throw Error("Unable to subscribe on cancel event asynchronously");
                    if (typeof cb !== "function") throw TypeError("onCancel callback must be a function");
                    callbacks.push(cb);
                });
                subscriptionClosed = true;
            }
            if (options.timeout > 0) timer = setTimeout(function() {
                var reason = Error("timeout");
                reason.code = "ETIMEDOUT";
                timer = 0;
                promise.cancel(reason);
                reject(reason);
            }, options.timeout);
        });
        if (!isCancelable) promise.cancel = function(reason) {
            if (!callbacks) return;
            var length = callbacks.length;
            for(var i = 1; i < length; i++)callbacks[i](reason);
            // internal callback to reject the promise
            callbacks[0](reason);
            callbacks = null;
        };
        return promise;
    }
    function findTargetIndex(observer) {
        var observers = this._observers;
        if (!observers) return -1;
        var len = observers.length;
        for(var i = 0; i < len; i++){
            if (observers[i]._target === observer) return i;
        }
        return -1;
    }
    // Attention, function return type now is array, always !
    // It has zero elements if no any matches found and one or more
    // elements (leafs) if there are matches
    //
    function searchListenerTree(handlers, type, tree, i, typeLength) {
        if (!tree) return null;
        if (i === 0) {
            var kind = typeof type;
            if (kind === "string") {
                var ns, n, l = 0, j = 0, delimiter = this.delimiter, dl = delimiter.length;
                if ((n = type.indexOf(delimiter)) !== -1) {
                    ns = new Array(5);
                    do {
                        ns[l++] = type.slice(j, n);
                        j = n + dl;
                    }while ((n = type.indexOf(delimiter, j)) !== -1);
                    ns[l++] = type.slice(j);
                    type = ns;
                    typeLength = l;
                } else {
                    type = [
                        type
                    ];
                    typeLength = 1;
                }
            } else if (kind === "object") typeLength = type.length;
            else {
                type = [
                    type
                ];
                typeLength = 1;
            }
        }
        var listeners = null, branch, xTree, xxTree, isolatedBranch, endReached, currentType = type[i], nextType = type[i + 1], branches, _listeners;
        if (i === typeLength) //
        // If at the end of the event(s) list and the tree has listeners
        // invoke those listeners.
        //
        {
            if (tree._listeners) {
                if (typeof tree._listeners === "function") {
                    handlers && handlers.push(tree._listeners);
                    listeners = [
                        tree
                    ];
                } else {
                    handlers && handlers.push.apply(handlers, tree._listeners);
                    listeners = [
                        tree
                    ];
                }
            }
        } else {
            if (currentType === "*") {
                //
                // If the event emitted is '*' at this part
                // or there is a concrete match at this patch
                //
                branches = ownKeys(tree);
                n = branches.length;
                while(n-- > 0){
                    branch = branches[n];
                    if (branch !== "_listeners") {
                        _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
                        if (_listeners) {
                            if (listeners) listeners.push.apply(listeners, _listeners);
                            else listeners = _listeners;
                        }
                    }
                }
                return listeners;
            } else if (currentType === "**") {
                endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === "*";
                if (endReached && tree._listeners) // The next element has a _listeners, add it to the handlers.
                listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
                branches = ownKeys(tree);
                n = branches.length;
                while(n-- > 0){
                    branch = branches[n];
                    if (branch !== "_listeners") {
                        if (branch === "*" || branch === "**") {
                            if (tree[branch]._listeners && !endReached) {
                                _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
                                if (_listeners) {
                                    if (listeners) listeners.push.apply(listeners, _listeners);
                                    else listeners = _listeners;
                                }
                            }
                            _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                        } else if (branch === nextType) _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
                        else // No match on this one, shift into the tree but not in the type array.
                        _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                        if (_listeners) {
                            if (listeners) listeners.push.apply(listeners, _listeners);
                            else listeners = _listeners;
                        }
                    }
                }
                return listeners;
            } else if (tree[currentType]) listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
        }
        xTree = tree["*"];
        if (xTree) //
        // If the listener tree will allow any match for this part,
        // then recursively explore all branches of the tree
        //
        searchListenerTree(handlers, type, xTree, i + 1, typeLength);
        xxTree = tree["**"];
        if (xxTree) {
            if (i < typeLength) {
                if (xxTree._listeners) // If we have a listener on a '**', it will catch all, so add its handler.
                searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
                // Build arrays of matching next branches and others.
                branches = ownKeys(xxTree);
                n = branches.length;
                while(n-- > 0){
                    branch = branches[n];
                    if (branch !== "_listeners") {
                        if (branch === nextType) // We know the next element will match, so jump twice.
                        searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
                        else if (branch === currentType) // Current node matches, move into the tree.
                        searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
                        else {
                            isolatedBranch = {};
                            isolatedBranch[branch] = xxTree[branch];
                            searchListenerTree(handlers, type, {
                                "**": isolatedBranch
                            }, i + 1, typeLength);
                        }
                    }
                }
            } else if (xxTree._listeners) // We have reached the end and still on a '**'
            searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
            else if (xxTree["*"] && xxTree["*"]._listeners) searchListenerTree(handlers, type, xxTree["*"], typeLength, typeLength);
        }
        return listeners;
    }
    function growListenerTree(type, listener, prepend) {
        var len = 0, j = 0, i, delimiter = this.delimiter, dl = delimiter.length, ns;
        if (typeof type === "string") {
            if ((i = type.indexOf(delimiter)) !== -1) {
                ns = new Array(5);
                do {
                    ns[len++] = type.slice(j, i);
                    j = i + dl;
                }while ((i = type.indexOf(delimiter, j)) !== -1);
                ns[len++] = type.slice(j);
            } else {
                ns = [
                    type
                ];
                len = 1;
            }
        } else {
            ns = type;
            len = type.length;
        }
        //
        // Looks for two consecutive '**', if so, don't add the event at all.
        //
        if (len > 1) for(i = 0; i + 1 < len; i++){
            if (ns[i] === "**" && ns[i + 1] === "**") return;
        }
        var tree = this.listenerTree, name;
        for(i = 0; i < len; i++){
            name = ns[i];
            tree = tree[name] || (tree[name] = {});
            if (i === len - 1) {
                if (!tree._listeners) tree._listeners = listener;
                else {
                    if (typeof tree._listeners === "function") tree._listeners = [
                        tree._listeners
                    ];
                    if (prepend) tree._listeners.unshift(listener);
                    else tree._listeners.push(listener);
                    if (!tree._listeners.warned && this._maxListeners > 0 && tree._listeners.length > this._maxListeners) {
                        tree._listeners.warned = true;
                        logPossibleMemoryLeak.call(this, tree._listeners.length, name);
                    }
                }
                return true;
            }
        }
        return true;
    }
    function collectTreeEvents(tree, events, root, asArray) {
        var branches = ownKeys(tree);
        var i = branches.length;
        var branch, branchName, path;
        var hasListeners = tree["_listeners"];
        var isArrayPath;
        while(i-- > 0){
            branchName = branches[i];
            branch = tree[branchName];
            if (branchName === "_listeners") path = root;
            else path = root ? root.concat(branchName) : [
                branchName
            ];
            isArrayPath = asArray || typeof branchName === "symbol";
            hasListeners && events.push(isArrayPath ? path : path.join(this.delimiter));
            if (typeof branch === "object") collectTreeEvents.call(this, branch, events, path, isArrayPath);
        }
        return events;
    }
    function recursivelyGarbageCollect(root) {
        var keys = ownKeys(root);
        var i = keys.length;
        var obj, key, flag;
        while(i-- > 0){
            key = keys[i];
            obj = root[key];
            if (obj) {
                flag = true;
                if (key !== "_listeners" && !recursivelyGarbageCollect(obj)) delete root[key];
            }
        }
        return flag;
    }
    function Listener(emitter, event, listener) {
        this.emitter = emitter;
        this.event = event;
        this.listener = listener;
    }
    Listener.prototype.off = function() {
        this.emitter.off(this.event, this.listener);
        return this;
    };
    function setupListener(event, listener, options) {
        if (options === true) promisify = true;
        else if (options === false) async = true;
        else {
            if (!options || typeof options !== "object") throw TypeError("options should be an object or true");
            var async = options.async;
            var promisify = options.promisify;
            var nextTick = options.nextTick;
            var objectify = options.objectify;
        }
        if (async || nextTick || promisify) {
            var _listener = listener;
            var _origin = listener._origin || listener;
            if (nextTick && !nextTickSupported) throw Error("process.nextTick is not supported");
            if (promisify === undefined) promisify = listener.constructor.name === "AsyncFunction";
            listener = function() {
                var args = arguments;
                var context = this;
                var event = this.event;
                return promisify ? nextTick ? Promise.resolve() : new Promise(function(resolve) {
                    _setImmediate(resolve);
                }).then(function() {
                    context.event = event;
                    return _listener.apply(context, args);
                }) : (nextTick ? process.nextTick : _setImmediate)(function() {
                    context.event = event;
                    _listener.apply(context, args);
                });
            };
            listener._async = true;
            listener._origin = _origin;
        }
        return [
            listener,
            objectify ? new Listener(this, event, listener) : this
        ];
    }
    function EventEmitter(conf) {
        this._events = {};
        this._newListener = false;
        this._removeListener = false;
        this.verboseMemoryLeak = false;
        configure.call(this, conf);
    }
    EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property
    EventEmitter.prototype.listenTo = function(target, events, options) {
        if (typeof target !== "object") throw TypeError("target musts be an object");
        var emitter = this;
        options = resolveOptions(options, {
            on: undefined,
            off: undefined,
            reducers: undefined
        }, {
            on: functionReducer,
            off: functionReducer,
            reducers: objectFunctionReducer
        });
        function listen(events) {
            if (typeof events !== "object") throw TypeError("events must be an object");
            var reducers = options.reducers;
            var index = findTargetIndex.call(emitter, target);
            var observer;
            if (index === -1) observer = new TargetObserver(emitter, target, options);
            else observer = emitter._observers[index];
            var keys = ownKeys(events);
            var len = keys.length;
            var event;
            var isSingleReducer = typeof reducers === "function";
            for(var i = 0; i < len; i++){
                event = keys[i];
                observer.subscribe(event, events[event] || event, isSingleReducer ? reducers : reducers && reducers[event]);
            }
        }
        isArray(events) ? listen(toObject(events)) : typeof events === "string" ? listen(toObject(events.split(/\s+/))) : listen(events);
        return this;
    };
    EventEmitter.prototype.stopListeningTo = function(target, event) {
        var observers = this._observers;
        if (!observers) return false;
        var i = observers.length;
        var observer;
        var matched = false;
        if (target && typeof target !== "object") throw TypeError("target should be an object");
        while(i-- > 0){
            observer = observers[i];
            if (!target || observer._target === target) {
                observer.unsubscribe(event);
                matched = true;
            }
        }
        return matched;
    };
    // By default EventEmitters will print a warning if more than
    // 10 listeners are added to it. This is a useful default which
    // helps finding memory leaks.
    //
    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.delimiter = ".";
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (n !== undefined) {
            this._maxListeners = n;
            if (!this._conf) this._conf = {};
            this._conf.maxListeners = n;
        }
    };
    EventEmitter.prototype.getMaxListeners = function() {
        return this._maxListeners;
    };
    EventEmitter.prototype.event = "";
    EventEmitter.prototype.once = function(event, fn, options) {
        return this._once(event, fn, false, options);
    };
    EventEmitter.prototype.prependOnceListener = function(event, fn, options) {
        return this._once(event, fn, true, options);
    };
    EventEmitter.prototype._once = function(event, fn, prepend, options) {
        return this._many(event, 1, fn, prepend, options);
    };
    EventEmitter.prototype.many = function(event, ttl, fn, options) {
        return this._many(event, ttl, fn, false, options);
    };
    EventEmitter.prototype.prependMany = function(event, ttl, fn, options) {
        return this._many(event, ttl, fn, true, options);
    };
    EventEmitter.prototype._many = function(event, ttl, fn, prepend, options) {
        var self = this;
        if (typeof fn !== "function") throw new Error("many only accepts instances of Function");
        function listener() {
            if (--ttl === 0) self.off(event, listener);
            return fn.apply(this, arguments);
        }
        listener._origin = fn;
        return this._on(event, listener, prepend, options);
    };
    EventEmitter.prototype.emit = function() {
        if (!this._events && !this._all) return false;
        this._events || init.call(this);
        var type = arguments[0], ns, wildcard = this.wildcard;
        var args, l, i, j, containsSymbol;
        if (type === "newListener" && !this._newListener) {
            if (!this._events.newListener) return false;
        }
        if (wildcard) {
            ns = type;
            if (type !== "newListener" && type !== "removeListener") {
                if (typeof type === "object") {
                    l = type.length;
                    if (symbolsSupported) {
                        for(i = 0; i < l; i++)if (typeof type[i] === "symbol") {
                            containsSymbol = true;
                            break;
                        }
                    }
                    if (!containsSymbol) type = type.join(this.delimiter);
                }
            }
        }
        var al = arguments.length;
        var handler;
        if (this._all && this._all.length) {
            handler = this._all.slice();
            for(i = 0, l = handler.length; i < l; i++){
                this.event = type;
                switch(al){
                    case 1:
                        handler[i].call(this, type);
                        break;
                    case 2:
                        handler[i].call(this, type, arguments[1]);
                        break;
                    case 3:
                        handler[i].call(this, type, arguments[1], arguments[2]);
                        break;
                    default:
                        handler[i].apply(this, arguments);
                }
            }
        }
        if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0, l);
        } else {
            handler = this._events[type];
            if (typeof handler === "function") {
                this.event = type;
                switch(al){
                    case 1:
                        handler.call(this);
                        break;
                    case 2:
                        handler.call(this, arguments[1]);
                        break;
                    case 3:
                        handler.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        args = new Array(al - 1);
                        for(j = 1; j < al; j++)args[j - 1] = arguments[j];
                        handler.apply(this, args);
                }
                return true;
            } else if (handler) // need to make copy of handlers because list can change in the middle
            // of emit call
            handler = handler.slice();
        }
        if (handler && handler.length) {
            if (al > 3) {
                args = new Array(al - 1);
                for(j = 1; j < al; j++)args[j - 1] = arguments[j];
            }
            for(i = 0, l = handler.length; i < l; i++){
                this.event = type;
                switch(al){
                    case 1:
                        handler[i].call(this);
                        break;
                    case 2:
                        handler[i].call(this, arguments[1]);
                        break;
                    case 3:
                        handler[i].call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        handler[i].apply(this, args);
                }
            }
            return true;
        } else if (!this.ignoreErrors && !this._all && type === "error") {
            if (arguments[1] instanceof Error) throw arguments[1]; // Unhandled 'error' event
            else throw new Error("Uncaught, unspecified 'error' event.");
        }
        return !!this._all;
    };
    EventEmitter.prototype.emitAsync = function() {
        if (!this._events && !this._all) return false;
        this._events || init.call(this);
        var type = arguments[0], wildcard = this.wildcard, ns, containsSymbol;
        var args, l, i, j;
        if (type === "newListener" && !this._newListener) {
            if (!this._events.newListener) return Promise.resolve([
                false
            ]);
        }
        if (wildcard) {
            ns = type;
            if (type !== "newListener" && type !== "removeListener") {
                if (typeof type === "object") {
                    l = type.length;
                    if (symbolsSupported) {
                        for(i = 0; i < l; i++)if (typeof type[i] === "symbol") {
                            containsSymbol = true;
                            break;
                        }
                    }
                    if (!containsSymbol) type = type.join(this.delimiter);
                }
            }
        }
        var promises = [];
        var al = arguments.length;
        var handler;
        if (this._all) for(i = 0, l = this._all.length; i < l; i++){
            this.event = type;
            switch(al){
                case 1:
                    promises.push(this._all[i].call(this, type));
                    break;
                case 2:
                    promises.push(this._all[i].call(this, type, arguments[1]));
                    break;
                case 3:
                    promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
                    break;
                default:
                    promises.push(this._all[i].apply(this, arguments));
            }
        }
        if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
        } else handler = this._events[type];
        if (typeof handler === "function") {
            this.event = type;
            switch(al){
                case 1:
                    promises.push(handler.call(this));
                    break;
                case 2:
                    promises.push(handler.call(this, arguments[1]));
                    break;
                case 3:
                    promises.push(handler.call(this, arguments[1], arguments[2]));
                    break;
                default:
                    args = new Array(al - 1);
                    for(j = 1; j < al; j++)args[j - 1] = arguments[j];
                    promises.push(handler.apply(this, args));
            }
        } else if (handler && handler.length) {
            handler = handler.slice();
            if (al > 3) {
                args = new Array(al - 1);
                for(j = 1; j < al; j++)args[j - 1] = arguments[j];
            }
            for(i = 0, l = handler.length; i < l; i++){
                this.event = type;
                switch(al){
                    case 1:
                        promises.push(handler[i].call(this));
                        break;
                    case 2:
                        promises.push(handler[i].call(this, arguments[1]));
                        break;
                    case 3:
                        promises.push(handler[i].call(this, arguments[1], arguments[2]));
                        break;
                    default:
                        promises.push(handler[i].apply(this, args));
                }
            }
        } else if (!this.ignoreErrors && !this._all && type === "error") {
            if (arguments[1] instanceof Error) return Promise.reject(arguments[1]); // Unhandled 'error' event
            else return Promise.reject("Uncaught, unspecified 'error' event.");
        }
        return Promise.all(promises);
    };
    EventEmitter.prototype.on = function(type, listener, options) {
        return this._on(type, listener, false, options);
    };
    EventEmitter.prototype.prependListener = function(type, listener, options) {
        return this._on(type, listener, true, options);
    };
    EventEmitter.prototype.onAny = function(fn) {
        return this._onAny(fn, false);
    };
    EventEmitter.prototype.prependAny = function(fn) {
        return this._onAny(fn, true);
    };
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prototype._onAny = function(fn, prepend) {
        if (typeof fn !== "function") throw new Error("onAny only accepts instances of Function");
        if (!this._all) this._all = [];
        // Add the function to the event listener collection.
        if (prepend) this._all.unshift(fn);
        else this._all.push(fn);
        return this;
    };
    EventEmitter.prototype._on = function(type, listener, prepend, options) {
        if (typeof type === "function") {
            this._onAny(type, listener);
            return this;
        }
        if (typeof listener !== "function") throw new Error("on only accepts instances of Function");
        this._events || init.call(this);
        var returnValue = this, temp;
        if (options !== undefined) {
            temp = setupListener.call(this, type, listener, options);
            listener = temp[0];
            returnValue = temp[1];
        }
        // To avoid recursion in the case that type == "newListeners"! Before
        // adding it to the listeners, first emit "newListeners".
        if (this._newListener) this.emit("newListener", type, listener);
        if (this.wildcard) {
            growListenerTree.call(this, type, listener, prepend);
            return returnValue;
        }
        if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
        this._events[type] = listener;
        else {
            if (typeof this._events[type] === "function") // Change to array.
            this._events[type] = [
                this._events[type]
            ];
            // If we've already got an array, just add
            if (prepend) this._events[type].unshift(listener);
            else this._events[type].push(listener);
            // Check for listener leak
            if (!this._events[type].warned && this._maxListeners > 0 && this._events[type].length > this._maxListeners) {
                this._events[type].warned = true;
                logPossibleMemoryLeak.call(this, this._events[type].length, type);
            }
        }
        return returnValue;
    };
    EventEmitter.prototype.off = function(type, listener) {
        if (typeof listener !== "function") throw new Error("removeListener only takes instances of Function");
        var handlers, leafs = [];
        if (this.wildcard) {
            var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
            leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
            if (!leafs) return this;
        } else {
            // does not use listeners(), so no side effect of creating _events[type]
            if (!this._events[type]) return this;
            handlers = this._events[type];
            leafs.push({
                _listeners: handlers
            });
        }
        for(var iLeaf = 0; iLeaf < leafs.length; iLeaf++){
            var leaf = leafs[iLeaf];
            handlers = leaf._listeners;
            if (isArray(handlers)) {
                var position = -1;
                for(var i = 0, length = handlers.length; i < length; i++)if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
                    position = i;
                    break;
                }
                if (position < 0) continue;
                if (this.wildcard) leaf._listeners.splice(position, 1);
                else this._events[type].splice(position, 1);
                if (handlers.length === 0) {
                    if (this.wildcard) delete leaf._listeners;
                    else delete this._events[type];
                }
                if (this._removeListener) this.emit("removeListener", type, listener);
                return this;
            } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
                if (this.wildcard) delete leaf._listeners;
                else delete this._events[type];
                if (this._removeListener) this.emit("removeListener", type, listener);
            }
        }
        this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        return this;
    };
    EventEmitter.prototype.offAny = function(fn) {
        var i = 0, l = 0, fns;
        if (fn && this._all && this._all.length > 0) {
            fns = this._all;
            for(i = 0, l = fns.length; i < l; i++)if (fn === fns[i]) {
                fns.splice(i, 1);
                if (this._removeListener) this.emit("removeListenerAny", fn);
                return this;
            }
        } else {
            fns = this._all;
            if (this._removeListener) for(i = 0, l = fns.length; i < l; i++)this.emit("removeListenerAny", fns[i]);
            this._all = [];
        }
        return this;
    };
    EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (type === undefined) {
            !this._events || init.call(this);
            return this;
        }
        if (this.wildcard) {
            var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0), leaf, i;
            if (!leafs) return this;
            for(i = 0; i < leafs.length; i++){
                leaf = leafs[i];
                leaf._listeners = null;
            }
            this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        } else if (this._events) this._events[type] = null;
        return this;
    };
    EventEmitter.prototype.listeners = function(type) {
        var _events = this._events;
        var keys, listeners, allListeners;
        var i;
        var listenerTree;
        if (type === undefined) {
            if (this.wildcard) throw Error("event name required for wildcard emitter");
            if (!_events) return [];
            keys = ownKeys(_events);
            i = keys.length;
            allListeners = [];
            while(i-- > 0){
                listeners = _events[keys[i]];
                if (typeof listeners === "function") allListeners.push(listeners);
                else allListeners.push.apply(allListeners, listeners);
            }
            return allListeners;
        } else {
            if (this.wildcard) {
                listenerTree = this.listenerTree;
                if (!listenerTree) return [];
                var handlers = [];
                var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
                searchListenerTree.call(this, handlers, ns, listenerTree, 0);
                return handlers;
            }
            if (!_events) return [];
            listeners = _events[type];
            if (!listeners) return [];
            return typeof listeners === "function" ? [
                listeners
            ] : listeners;
        }
    };
    EventEmitter.prototype.eventNames = function(nsAsArray) {
        var _events = this._events;
        return this.wildcard ? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : _events ? ownKeys(_events) : [];
    };
    EventEmitter.prototype.listenerCount = function(type) {
        return this.listeners(type).length;
    };
    EventEmitter.prototype.hasListeners = function(type) {
        if (this.wildcard) {
            var handlers = [];
            var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
            searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
            return handlers.length > 0;
        }
        var _events = this._events;
        var _all = this._all;
        return !!(_all && _all.length || _events && (type === undefined ? ownKeys(_events).length : _events[type]));
    };
    EventEmitter.prototype.listenersAny = function() {
        if (this._all) return this._all;
        else return [];
    };
    EventEmitter.prototype.waitFor = function(event, options) {
        var self = this;
        var type = typeof options;
        if (type === "number") options = {
            timeout: options
        };
        else if (type === "function") options = {
            filter: options
        };
        options = resolveOptions(options, {
            timeout: 0,
            filter: undefined,
            handleError: false,
            Promise: Promise,
            overload: false
        }, {
            filter: functionReducer,
            Promise: constructorReducer
        });
        return makeCancelablePromise(options.Promise, function(resolve, reject, onCancel) {
            function listener() {
                var filter = options.filter;
                if (filter && !filter.apply(self, arguments)) return;
                self.off(event, listener);
                if (options.handleError) {
                    var err = arguments[0];
                    err ? reject(err) : resolve(toArray.apply(null, arguments).slice(1));
                } else resolve(toArray.apply(null, arguments));
            }
            onCancel(function() {
                self.off(event, listener);
            });
            self._on(event, listener, false);
        }, {
            timeout: options.timeout,
            overload: options.overload
        });
    };
    function once(emitter, name, options) {
        options = resolveOptions(options, {
            Promise: Promise,
            timeout: 0,
            overload: false
        }, {
            Promise: constructorReducer
        });
        var _Promise = options.Promise;
        return makeCancelablePromise(_Promise, function(resolve, reject, onCancel) {
            var handler;
            if (typeof emitter.addEventListener === "function") {
                handler = function() {
                    resolve(toArray.apply(null, arguments));
                };
                onCancel(function() {
                    emitter.removeEventListener(name, handler);
                });
                emitter.addEventListener(name, handler, {
                    once: true
                });
                return;
            }
            var eventListener = function() {
                errorListener && emitter.removeListener("error", errorListener);
                resolve(toArray.apply(null, arguments));
            };
            var errorListener;
            if (name !== "error") {
                errorListener = function(err) {
                    emitter.removeListener(name, eventListener);
                    reject(err);
                };
                emitter.once("error", errorListener);
            }
            onCancel(function() {
                errorListener && emitter.removeListener("error", errorListener);
                emitter.removeListener(name, eventListener);
            });
            emitter.once(name, eventListener);
        }, {
            timeout: options.timeout,
            overload: options.overload
        });
    }
    var prototype = EventEmitter.prototype;
    Object.defineProperties(EventEmitter, {
        defaultMaxListeners: {
            get: function() {
                return prototype._maxListeners;
            },
            set: function(n) {
                if (typeof n !== "number" || n < 0 || Number.isNaN(n)) throw TypeError("n must be a non-negative number");
                prototype._maxListeners = n;
            },
            enumerable: true
        },
        once: {
            value: once,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperties(prototype, {
        _maxListeners: {
            value: defaultMaxListeners,
            writable: true,
            configurable: true
        },
        _observers: {
            value: null,
            writable: true,
            configurable: true
        }
    });
    if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define(function() {
        return EventEmitter;
    });
    else {
        var _global;
        // CommonJS
        module.exports = EventEmitter;
    }
}();

},{"f2685cfa9f4b33b9":"d5jf4"}],"8vPQN":[function(require,module,exports) {
var parser = require("f4c7e5c1054e5bf5");
var writer = require("e9cdeea5894ea754");
exports.write = writer;
exports.parse = parser.parse;
exports.parseParams = parser.parseParams;
exports.parseFmtpConfig = parser.parseFmtpConfig; // Alias of parseParams().
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;

},{"f4c7e5c1054e5bf5":"8uyst","e9cdeea5894ea754":"bGmrK"}],"8uyst":[function(require,module,exports) {
var toIntIfInt = function(v) {
    return String(Number(v)) === v ? Number(v) : v;
};
var attachProperties = function(match, location, names, rawName) {
    if (rawName && !names) location[rawName] = toIntIfInt(match[1]);
    else {
        for(var i = 0; i < names.length; i += 1)if (match[i + 1] != null) location[names[i]] = toIntIfInt(match[i + 1]);
    }
};
var parseReg = function(obj, location, content) {
    var needsBlank = obj.name && obj.names;
    if (obj.push && !location[obj.push]) location[obj.push] = [];
    else if (needsBlank && !location[obj.name]) location[obj.name] = {};
    var keyLocation = obj.push ? {} : needsBlank ? location[obj.name] : location; // otherwise, named location or root
    attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);
    if (obj.push) location[obj.push].push(keyLocation);
};
var grammar = require("53f27a8e7c31ca54");
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
exports.parse = function(sdp) {
    var session = {}, media = [], location = session; // points at where properties go under (one of the above)
    // parse lines we understand
    sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function(l) {
        var type = l[0];
        var content = l.slice(2);
        if (type === "m") {
            media.push({
                rtp: [],
                fmtp: []
            });
            location = media[media.length - 1]; // point at latest media line
        }
        for(var j = 0; j < (grammar[type] || []).length; j += 1){
            var obj = grammar[type][j];
            if (obj.reg.test(content)) return parseReg(obj, location, content);
        }
    });
    session.media = media; // link it up
    return session;
};
var paramReducer = function(acc, expr) {
    var s = expr.split(/=(.+)/, 2);
    if (s.length === 2) acc[s[0]] = toIntIfInt(s[1]);
    else if (s.length === 1 && expr.length > 1) acc[s[0]] = undefined;
    return acc;
};
exports.parseParams = function(str) {
    return str.split(/;\s?/).reduce(paramReducer, {});
};
// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;
exports.parsePayloads = function(str) {
    return str.toString().split(" ").map(Number);
};
exports.parseRemoteCandidates = function(str) {
    var candidates = [];
    var parts = str.split(" ").map(toIntIfInt);
    for(var i = 0; i < parts.length; i += 3)candidates.push({
        component: parts[i],
        ip: parts[i + 1],
        port: parts[i + 2]
    });
    return candidates;
};
exports.parseImageAttributes = function(str) {
    return str.split(" ").map(function(item) {
        return item.substring(1, item.length - 1).split(",").reduce(paramReducer, {});
    });
};
exports.parseSimulcastStreamList = function(str) {
    return str.split(";").map(function(stream) {
        return stream.split(",").map(function(format) {
            var scid, paused = false;
            if (format[0] !== "~") scid = toIntIfInt(format);
            else {
                scid = toIntIfInt(format.substring(1, format.length));
                paused = true;
            }
            return {
                scid: scid,
                paused: paused
            };
        });
    });
};

},{"53f27a8e7c31ca54":"jnvad"}],"jnvad":[function(require,module,exports) {
var grammar = module.exports = {
    v: [
        {
            name: "version",
            reg: /^(\d*)$/
        }
    ],
    o: [
        {
            // o=- 20518 0 IN IP4 203.0.113.1
            // NB: sessionId will be a String in most cases because it is huge
            name: "origin",
            reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
            names: [
                "username",
                "sessionId",
                "sessionVersion",
                "netType",
                "ipVer",
                "address"
            ],
            format: "%s %s %d %s IP%d %s"
        }
    ],
    // default parsing of these only (though some of these feel outdated)
    s: [
        {
            name: "name"
        }
    ],
    i: [
        {
            name: "description"
        }
    ],
    u: [
        {
            name: "uri"
        }
    ],
    e: [
        {
            name: "email"
        }
    ],
    p: [
        {
            name: "phone"
        }
    ],
    z: [
        {
            name: "timezones"
        }
    ],
    r: [
        {
            name: "repeats"
        }
    ],
    // k: [{}], // outdated thing ignored
    t: [
        {
            // t=0 0
            name: "timing",
            reg: /^(\d*) (\d*)/,
            names: [
                "start",
                "stop"
            ],
            format: "%d %d"
        }
    ],
    c: [
        {
            // c=IN IP4 10.47.197.26
            name: "connection",
            reg: /^IN IP(\d) (\S*)/,
            names: [
                "version",
                "ip"
            ],
            format: "IN IP%d %s"
        }
    ],
    b: [
        {
            // b=AS:4000
            push: "bandwidth",
            reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
            names: [
                "type",
                "limit"
            ],
            format: "%s:%s"
        }
    ],
    m: [
        {
            // m=video 51744 RTP/AVP 126 97 98 34 31
            // NB: special - pushes to session
            // TODO: rtp/fmtp should be filtered by the payloads found here?
            reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
            names: [
                "type",
                "port",
                "protocol",
                "payloads"
            ],
            format: "%s %d %s %s"
        }
    ],
    a: [
        {
            // a=rtpmap:110 opus/48000/2
            push: "rtp",
            reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
            names: [
                "payload",
                "codec",
                "rate",
                "encoding"
            ],
            format: function(o) {
                return o.encoding ? "rtpmap:%d %s/%s/%s" : o.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
            }
        },
        {
            // a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
            // a=fmtp:111 minptime=10; useinbandfec=1
            push: "fmtp",
            reg: /^fmtp:(\d*) ([\S| ]*)/,
            names: [
                "payload",
                "config"
            ],
            format: "fmtp:%d %s"
        },
        {
            // a=control:streamid=0
            name: "control",
            reg: /^control:(.*)/,
            format: "control:%s"
        },
        {
            // a=rtcp:65179 IN IP4 193.84.77.194
            name: "rtcp",
            reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
            names: [
                "port",
                "netType",
                "ipVer",
                "address"
            ],
            format: function(o) {
                return o.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
            }
        },
        {
            // a=rtcp-fb:98 trr-int 100
            push: "rtcpFbTrrInt",
            reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
            names: [
                "payload",
                "value"
            ],
            format: "rtcp-fb:%s trr-int %d"
        },
        {
            // a=rtcp-fb:98 nack rpsi
            push: "rtcpFb",
            reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
            names: [
                "payload",
                "type",
                "subtype"
            ],
            format: function(o) {
                return o.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
            }
        },
        {
            // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
            // a=extmap:1/recvonly URI-gps-string
            // a=extmap:3 urn:ietf:params:rtp-hdrext:encrypt urn:ietf:params:rtp-hdrext:smpte-tc 25@600/24
            push: "ext",
            reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
            names: [
                "value",
                "direction",
                "encrypt-uri",
                "uri",
                "config"
            ],
            format: function(o) {
                return "extmap:%d" + (o.direction ? "/%s" : "%v") + (o["encrypt-uri"] ? " %s" : "%v") + " %s" + (o.config ? " %s" : "");
            }
        },
        {
            // a=extmap-allow-mixed
            name: "extmapAllowMixed",
            reg: /^(extmap-allow-mixed)/
        },
        {
            // a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
            push: "crypto",
            reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
            names: [
                "id",
                "suite",
                "config",
                "sessionConfig"
            ],
            format: function(o) {
                return o.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
            }
        },
        {
            // a=setup:actpass
            name: "setup",
            reg: /^setup:(\w*)/,
            format: "setup:%s"
        },
        {
            // a=connection:new
            name: "connectionType",
            reg: /^connection:(new|existing)/,
            format: "connection:%s"
        },
        {
            // a=mid:1
            name: "mid",
            reg: /^mid:([^\s]*)/,
            format: "mid:%s"
        },
        {
            // a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
            name: "msid",
            reg: /^msid:(.*)/,
            format: "msid:%s"
        },
        {
            // a=ptime:20
            name: "ptime",
            reg: /^ptime:(\d*(?:\.\d*)*)/,
            format: "ptime:%d"
        },
        {
            // a=maxptime:60
            name: "maxptime",
            reg: /^maxptime:(\d*(?:\.\d*)*)/,
            format: "maxptime:%d"
        },
        {
            // a=sendrecv
            name: "direction",
            reg: /^(sendrecv|recvonly|sendonly|inactive)/
        },
        {
            // a=ice-lite
            name: "icelite",
            reg: /^(ice-lite)/
        },
        {
            // a=ice-ufrag:F7gI
            name: "iceUfrag",
            reg: /^ice-ufrag:(\S*)/,
            format: "ice-ufrag:%s"
        },
        {
            // a=ice-pwd:x9cml/YzichV2+XlhiMu8g
            name: "icePwd",
            reg: /^ice-pwd:(\S*)/,
            format: "ice-pwd:%s"
        },
        {
            // a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
            name: "fingerprint",
            reg: /^fingerprint:(\S*) (\S*)/,
            names: [
                "type",
                "hash"
            ],
            format: "fingerprint:%s %s"
        },
        {
            // a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
            // a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
            // a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
            // a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
            // a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
            push: "candidates",
            reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
            names: [
                "foundation",
                "component",
                "transport",
                "priority",
                "ip",
                "port",
                "type",
                "raddr",
                "rport",
                "tcptype",
                "generation",
                "network-id",
                "network-cost"
            ],
            format: function(o) {
                var str = "candidate:%s %d %s %d %s %d typ %s";
                str += o.raddr != null ? " raddr %s rport %d" : "%v%v";
                // NB: candidate has three optional chunks, so %void middles one if it's missing
                str += o.tcptype != null ? " tcptype %s" : "%v";
                if (o.generation != null) str += " generation %d";
                str += o["network-id"] != null ? " network-id %d" : "%v";
                str += o["network-cost"] != null ? " network-cost %d" : "%v";
                return str;
            }
        },
        {
            // a=end-of-candidates (keep after the candidates line for readability)
            name: "endOfCandidates",
            reg: /^(end-of-candidates)/
        },
        {
            // a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
            name: "remoteCandidates",
            reg: /^remote-candidates:(.*)/,
            format: "remote-candidates:%s"
        },
        {
            // a=ice-options:google-ice
            name: "iceOptions",
            reg: /^ice-options:(\S*)/,
            format: "ice-options:%s"
        },
        {
            // a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
            push: "ssrcs",
            reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
            names: [
                "id",
                "attribute",
                "value"
            ],
            format: function(o) {
                var str = "ssrc:%d";
                if (o.attribute != null) {
                    str += " %s";
                    if (o.value != null) str += ":%s";
                }
                return str;
            }
        },
        {
            // a=ssrc-group:FEC 1 2
            // a=ssrc-group:FEC-FR 3004364195 1080772241
            push: "ssrcGroups",
            // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
            reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
            names: [
                "semantics",
                "ssrcs"
            ],
            format: "ssrc-group:%s %s"
        },
        {
            // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
            name: "msidSemantic",
            reg: /^msid-semantic:\s?(\w*) (\S*)/,
            names: [
                "semantic",
                "token"
            ],
            format: "msid-semantic: %s %s" // space after ':' is not accidental
        },
        {
            // a=group:BUNDLE audio video
            push: "groups",
            reg: /^group:(\w*) (.*)/,
            names: [
                "type",
                "mids"
            ],
            format: "group:%s %s"
        },
        {
            // a=rtcp-mux
            name: "rtcpMux",
            reg: /^(rtcp-mux)/
        },
        {
            // a=rtcp-rsize
            name: "rtcpRsize",
            reg: /^(rtcp-rsize)/
        },
        {
            // a=sctpmap:5000 webrtc-datachannel 1024
            name: "sctpmap",
            reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
            names: [
                "sctpmapNumber",
                "app",
                "maxMessageSize"
            ],
            format: function(o) {
                return o.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
            }
        },
        {
            // a=x-google-flag:conference
            name: "xGoogleFlag",
            reg: /^x-google-flag:([^\s]*)/,
            format: "x-google-flag:%s"
        },
        {
            // a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
            push: "rids",
            reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
            names: [
                "id",
                "direction",
                "params"
            ],
            format: function(o) {
                return o.params ? "rid:%s %s %s" : "rid:%s %s";
            }
        },
        {
            // a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
            // a=imageattr:* send [x=800,y=640] recv *
            // a=imageattr:100 recv [x=320,y=240]
            push: "imageattrs",
            reg: new RegExp(// a=imageattr:97
            "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
            names: [
                "pt",
                "dir1",
                "attrs1",
                "dir2",
                "attrs2"
            ],
            format: function(o) {
                return "imageattr:%s %s %s" + (o.dir2 ? " %s %s" : "");
            }
        },
        {
            // a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
            // a=simulcast:recv 1;4,5 send 6;7
            name: "simulcast",
            reg: new RegExp(// a=simulcast:
            "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
            names: [
                "dir1",
                "list1",
                "dir2",
                "list2"
            ],
            format: function(o) {
                return "simulcast:%s %s" + (o.dir2 ? " %s %s" : "");
            }
        },
        {
            // old simulcast draft 03 (implemented by Firefox)
            //   https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
            // a=simulcast: recv pt=97;98 send pt=97
            // a=simulcast: send rid=5;6;7 paused=6,7
            name: "simulcast_03",
            reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
            names: [
                "value"
            ],
            format: "simulcast: %s"
        },
        {
            // a=framerate:25
            // a=framerate:29.97
            name: "framerate",
            reg: /^framerate:(\d+(?:$|\.\d+))/,
            format: "framerate:%s"
        },
        {
            // RFC4570
            // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
            name: "sourceFilter",
            reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
            names: [
                "filterMode",
                "netType",
                "addressTypes",
                "destAddress",
                "srcList"
            ],
            format: "source-filter: %s %s %s %s %s"
        },
        {
            // a=bundle-only
            name: "bundleOnly",
            reg: /^(bundle-only)/
        },
        {
            // a=label:1
            name: "label",
            reg: /^label:(.+)/,
            format: "label:%s"
        },
        {
            // RFC version 26 for SCTP over DTLS
            // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
            name: "sctpPort",
            reg: /^sctp-port:(\d+)$/,
            format: "sctp-port:%s"
        },
        {
            // RFC version 26 for SCTP over DTLS
            // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
            name: "maxMessageSize",
            reg: /^max-message-size:(\d+)$/,
            format: "max-message-size:%s"
        },
        {
            // RFC7273
            // a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
            push: "tsRefClocks",
            reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
            names: [
                "clksrc",
                "clksrcExt"
            ],
            format: function(o) {
                return "ts-refclk:%s" + (o.clksrcExt != null ? "=%s" : "");
            }
        },
        {
            // RFC7273
            // a=mediaclk:direct=963214424
            name: "mediaClk",
            reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
            names: [
                "id",
                "mediaClockName",
                "mediaClockValue",
                "rateNumerator",
                "rateDenominator"
            ],
            format: function(o) {
                var str = "mediaclk:";
                str += o.id != null ? "id=%s %s" : "%v%s";
                str += o.mediaClockValue != null ? "=%s" : "";
                str += o.rateNumerator != null ? " rate=%s" : "";
                str += o.rateDenominator != null ? "/%s" : "";
                return str;
            }
        },
        {
            // a=keywds:keywords
            name: "keywords",
            reg: /^keywds:(.+)$/,
            format: "keywds:%s"
        },
        {
            // a=content:main
            name: "content",
            reg: /^content:(.+)/,
            format: "content:%s"
        },
        // BFCP https://tools.ietf.org/html/rfc4583
        {
            // a=floorctrl:c-s
            name: "bfcpFloorCtrl",
            reg: /^floorctrl:(c-only|s-only|c-s)/,
            format: "floorctrl:%s"
        },
        {
            // a=confid:1
            name: "bfcpConfId",
            reg: /^confid:(\d+)/,
            format: "confid:%s"
        },
        {
            // a=userid:1
            name: "bfcpUserId",
            reg: /^userid:(\d+)/,
            format: "userid:%s"
        },
        {
            // a=floorid:1
            name: "bfcpFloorId",
            reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
            names: [
                "id",
                "mStream"
            ],
            format: "floorid:%s mstrm:%s"
        },
        {
            // any a= that we don't understand is kept verbatim on media.invalid
            push: "invalid",
            names: [
                "value"
            ]
        }
    ]
};
// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function(key) {
    var objs = grammar[key];
    objs.forEach(function(obj) {
        if (!obj.reg) obj.reg = /(.*)/;
        if (!obj.format) obj.format = "%s";
    });
});

},{}],"bGmrK":[function(require,module,exports) {
var grammar = require("c81b0191f208b014");
// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function(formatStr) {
    var i = 1;
    var args = arguments;
    var len = args.length;
    return formatStr.replace(formatRegExp, function(x) {
        if (i >= len) return x; // missing argument
        var arg = args[i];
        i += 1;
        switch(x){
            case "%%":
                return "%";
            case "%s":
                return String(arg);
            case "%d":
                return Number(arg);
            case "%v":
                return "";
        }
    });
// NB: we discard excess arguments - they are typically undefined from makeLine
};
var makeLine = function(type, obj, location) {
    var str = obj.format instanceof Function ? obj.format(obj.push ? location : location[obj.name]) : obj.format;
    var args = [
        type + "=" + str
    ];
    if (obj.names) for(var i = 0; i < obj.names.length; i += 1){
        var n = obj.names[i];
        if (obj.name) args.push(location[obj.name][n]);
        else args.push(location[obj.names[i]]);
    }
    else args.push(location[obj.name]);
    return format.apply(null, args);
};
// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
    "v",
    "o",
    "s",
    "i",
    "u",
    "e",
    "p",
    "c",
    "b",
    "t",
    "r",
    "z",
    "a"
];
var defaultInnerOrder = [
    "i",
    "c",
    "b",
    "a"
];
module.exports = function(session, opts) {
    opts = opts || {};
    // ensure certain properties exist
    if (session.version == null) session.version = 0; // 'v=0' must be there (only defined version atm)
    if (session.name == null) session.name = " "; // 's= ' must be there if no meaningful name set
    session.media.forEach(function(mLine) {
        if (mLine.payloads == null) mLine.payloads = "";
    });
    var outerOrder = opts.outerOrder || defaultOuterOrder;
    var innerOrder = opts.innerOrder || defaultInnerOrder;
    var sdp = [];
    // loop through outerOrder for matching properties on session
    outerOrder.forEach(function(type) {
        grammar[type].forEach(function(obj) {
            if (obj.name in session && session[obj.name] != null) sdp.push(makeLine(type, obj, session));
            else if (obj.push in session && session[obj.push] != null) session[obj.push].forEach(function(el) {
                sdp.push(makeLine(type, obj, el));
            });
        });
    });
    // then for each media line, follow the innerOrder
    session.media.forEach(function(mLine) {
        sdp.push(makeLine("m", grammar.m[0], mLine));
        innerOrder.forEach(function(type) {
            grammar[type].forEach(function(obj) {
                if (obj.name in mLine && mLine[obj.name] != null) sdp.push(makeLine(type, obj, mLine));
                else if (obj.push in mLine && mLine[obj.push] != null) mLine[obj.push].forEach(function(el) {
                    sdp.push(makeLine(type, obj, el));
                });
            });
        });
    });
    return sdp.join("\r\n") + "\r\n";
};

},{"c81b0191f208b014":"jnvad"}],"isIsC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultMemoize", ()=>defaultMemoize);
parcelHelpers.export(exports, "createSelectorCreator", ()=>createSelectorCreator);
parcelHelpers.export(exports, "createSelector", ()=>createSelector);
parcelHelpers.export(exports, "createStructuredSelector", ()=>createStructuredSelector);
function defaultEqualityCheck(a, b) {
    return a === b;
}
function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) return false;
    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    var length = prev.length;
    for(var i = 0; i < length; i++){
        if (!equalityCheck(prev[i], next[i])) return false;
    }
    return true;
}
function defaultMemoize(func) {
    var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;
    var lastArgs = null;
    var lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    return function() {
        if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) // apply arguments instead of spreading for performance.
        lastResult = func.apply(null, arguments);
        lastArgs = arguments;
        return lastResult;
    };
}
function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
    if (!dependencies.every(function(dep) {
        return typeof dep === "function";
    })) {
        var dependencyTypes = dependencies.map(function(dep) {
            return typeof dep;
        }).join(", ");
        throw new Error("Selector creators expect all input-selectors to be functions, " + ("instead received the following types: [" + dependencyTypes + "]"));
    }
    return dependencies;
}
function createSelectorCreator(memoize) {
    for(var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)memoizeOptions[_key - 1] = arguments[_key];
    return function() {
        for(var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++)funcs[_key2] = arguments[_key2];
        var recomputations = 0;
        var resultFunc = funcs.pop();
        var dependencies = getDependencies(funcs);
        var memoizedResultFunc = memoize.apply(undefined, [
            function() {
                recomputations++;
                // apply arguments instead of spreading for performance.
                return resultFunc.apply(null, arguments);
            }
        ].concat(memoizeOptions));
        // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
        var selector = memoize(function() {
            var params = [];
            var length = dependencies.length;
            for(var i = 0; i < length; i++)// apply arguments instead of spreading and mutate a local list of params for performance.
            params.push(dependencies[i].apply(null, arguments));
            // apply arguments instead of spreading for performance.
            return memoizedResultFunc.apply(null, params);
        });
        selector.resultFunc = resultFunc;
        selector.dependencies = dependencies;
        selector.recomputations = function() {
            return recomputations;
        };
        selector.resetRecomputations = function() {
            return recomputations = 0;
        };
        return selector;
    };
}
var createSelector = createSelectorCreator(defaultMemoize);
function createStructuredSelector(selectors) {
    var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;
    if (typeof selectors !== "object") throw new Error("createStructuredSelector expects first argument to be an object " + ("where each property is a selector, instead received a " + typeof selectors));
    var objectKeys = Object.keys(selectors);
    return selectorCreator(objectKeys.map(function(key) {
        return selectors[key];
    }), function() {
        for(var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++)values[_key3] = arguments[_key3];
        return values.reduce(function(composition, value, index) {
            composition[objectKeys[index]] = value;
            return composition;
        }, {});
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequirea7c4")

//# sourceMappingURL=index.975ef6c8.js.map
