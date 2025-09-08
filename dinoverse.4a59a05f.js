// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
    }
  }
})({"5DuvQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8ad96e854a59a05f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"7dWZ8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _modelJs = require("./model.js");
var _flashcardViewJs = require("./views/flashcardView.js");
var _flashcardViewJsDefault = parcelHelpers.interopDefault(_flashcardViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addFlashcardViewJs = require("./views/addFlashcardView.js");
var _addFlashcardViewJsDefault = parcelHelpers.interopDefault(_addFlashcardViewJs);
var _configJs = require("./config.js");
var _runtime = require("regenerator-runtime/runtime");
//////////////////////
if (module.hot) module.hot.accept();
const controlFlashcard = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _flashcardViewJsDefault.default).renderSpinner();
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        //1) loading flashcard
        await _modelJs.loadFlashcard(id);
        //2) rendering flashcard
        (0, _flashcardViewJsDefault.default).render(_modelJs.state.flashcard);
    } catch (err) {
        (0, _flashcardViewJsDefault.default).renderError();
    }
};
const controlSearchResults = async function() {
    try {
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        (0, _resultsViewJsDefault.default).renderSpinner();
        //1) loading search results
        await _modelJs.loadSearchResults(query);
        //2) rendering results
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(1));
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlAddBookmark = function() {
    if (!_modelJs.state.flashcard.bookmarked) _modelJs.addBookmark(_modelJs.state.flashcard);
    else _modelJs.deleteBookmark(_modelJs.state.flashcard.id);
    (0, _flashcardViewJsDefault.default).update(_modelJs.state.flashcard);
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlAddFlashcard = async function(newFlashcard) {
    try {
        (0, _addFlashcardViewJsDefault.default).renderSpinner();
        await _modelJs.uploadFlashcard(newFlashcard);
        (0, _flashcardViewJsDefault.default).render(_modelJs.state.flashcard);
        (0, _addFlashcardViewJsDefault.default).renderMessage();
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        window.history.pushState(null, "", `#${_modelJs.state.flashcard.id}`);
        setTimeout(function() {
            (0, _addFlashcardViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (err) {
        (0, _addFlashcardViewJsDefault.default).renderError(err);
    }
};
const init = function() {
    (0, _bookmarksViewJsDefault.default).addHandlerRender(controlBookmarks);
    (0, _flashcardViewJsDefault.default).addHandlerRender(controlFlashcard);
    (0, _flashcardViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addhandlerClick(controlPagination);
    (0, _addFlashcardViewJsDefault.default).addHanderUpload(controlAddFlashcard);
};
init();

},{"core-js/modules/web.immediate.js":"bzsBv","regenerator-runtime/runtime":"f6ot0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./views/flashcardView.js":"bPRDD","./model.js":"3QBkH","./views/searchView.js":"kbE4Z","./views/resultsView.js":"kBQ4r","./views/paginationView.js":"7NIiB","./views/bookmarksView.js":"1qGeA","./views/addFlashcardView.js":"4oHrW","./config.js":"2hPh4"}],"bzsBv":[function(require,module,exports,__globalThis) {
'use strict';
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("52e9b3eefbbce1ed");
require("292fa64716f5b39e");

},{"52e9b3eefbbce1ed":"6n7Wj","292fa64716f5b39e":"cpv3g"}],"6n7Wj":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("79389288a80b279c");
var globalThis = require("e4d64249a0133d14");
var clearImmediate = require("84ba5ca62b8b14c9").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"79389288a80b279c":"7Vckd","e4d64249a0133d14":"6xMjU","84ba5ca62b8b14c9":"9fjiV"}],"7Vckd":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("23dea28abc8414d1");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var defineBuiltIn = require("50460aa43dd4048a");
var defineGlobalProperty = require("581238c99f8c2c30");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = globalThis;
    else if (STATIC) target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
    else target = globalThis[TARGET] && globalThis[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"23dea28abc8414d1":"6xMjU","2ec751f39e500b85":"dqLxA","b4567636b28a3b3a":"i7bgu","50460aa43dd4048a":"es56c","581238c99f8c2c30":"48kcX","566a383894c688bc":"i7gI0","f0e2e697f04e8ad9":"3rvW8"}],"6xMjU":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || check(typeof this == 'object' && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function('return this')();

},{}],"dqLxA":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("c04e6fb248689dba");
var call = require("553ec943aa2a4554");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPropertyKey = require("8ab18ff766aa2ab9");
var hasOwn = require("3761c5d34b7aa48f");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"c04e6fb248689dba":"5AxuF","553ec943aa2a4554":"3v9g9","bbc5e69071aa2fbd":"U03h7","1d2ffbfd99e01f41":"dOb5l","c4ea69a78a643d87":"58zOi","8ab18ff766aa2ab9":"lGuA3","3761c5d34b7aa48f":"9CekL","c4dfcc26308f1b4a":"kwjpQ"}],"5AxuF":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("735b783268fd06c0");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"735b783268fd06c0":"7Gv5z"}],"7Gv5z":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"3v9g9":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("44e025d030d66023");
var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"44e025d030d66023":"5U5xz"}],"5U5xz":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("2642aa7619056f20");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"2642aa7619056f20":"7Gv5z"}],"U03h7":[function(require,module,exports,__globalThis) {
'use strict';
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"dOb5l":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"58zOi":[function(require,module,exports,__globalThis) {
'use strict';
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"gXe04","f7224aed72953ac4":"7cHwm"}],"gXe04":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("7ba7e65983d7b662");
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var $Object = Object;
var split = uncurryThis(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

},{"7ba7e65983d7b662":"aAate","df551e12a7c872dd":"7Gv5z","1d34ea813cebff9c":"fKrQp"}],"aAate":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("829dd7a4e960cf9e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"829dd7a4e960cf9e":"5U5xz"}],"fKrQp":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("1c71c3f6daac476c");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c71c3f6daac476c":"aAate"}],"7cHwm":[function(require,module,exports,__globalThis) {
'use strict';
var isNullOrUndefined = require("74607922ed30019f");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"74607922ed30019f":"gHvvU"}],"gHvvU":[function(require,module,exports,__globalThis) {
'use strict';
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"lGuA3":[function(require,module,exports,__globalThis) {
'use strict';
var toPrimitive = require("53a3a67ac381c4e8");
var isSymbol = require("b992ca9cdcf7937b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
};

},{"53a3a67ac381c4e8":"hyNfR","b992ca9cdcf7937b":"8EQ8A"}],"hyNfR":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("70235907dc93b4b0");
var isObject = require("46fb53dace408c8e");
var isSymbol = require("677bdc4d74d2f983");
var getMethod = require("80395bcde336a28b");
var ordinaryToPrimitive = require("49552a7324952190");
var wellKnownSymbol = require("aea01c71276624bf");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
};

},{"70235907dc93b4b0":"3v9g9","46fb53dace408c8e":"5rTge","677bdc4d74d2f983":"8EQ8A","80395bcde336a28b":"9TreM","49552a7324952190":"cUIZh","aea01c71276624bf":"lzelE"}],"5rTge":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("f87cee1cb79cbcca");
module.exports = function(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"f87cee1cb79cbcca":"2KfBB"}],"2KfBB":[function(require,module,exports,__globalThis) {
'use strict';
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function(argument) {
    return typeof argument == 'function' || argument === documentAll;
} : function(argument) {
    return typeof argument == 'function';
};

},{}],"8EQ8A":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("6b6c481cdfb7df35");
var isCallable = require("2af44fcbdbf14c83");
var isPrototypeOf = require("76e903e830c40e7c");
var USE_SYMBOL_AS_UID = require("7e2fe930b3598e22");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"6b6c481cdfb7df35":"h2CMt","2af44fcbdbf14c83":"2KfBB","76e903e830c40e7c":"jkNHH","7e2fe930b3598e22":"fSbH5"}],"h2CMt":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("e057fc33d60763c1");
var isCallable = require("f1d62079325906cb");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};

},{"e057fc33d60763c1":"6xMjU","f1d62079325906cb":"2KfBB"}],"jkNHH":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("83f14842ef67e16a");
module.exports = uncurryThis({}.isPrototypeOf);

},{"83f14842ef67e16a":"aAate"}],"fSbH5":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("da4a972af0214ea0");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"da4a972af0214ea0":"2fu84"}],"2fu84":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("53b951dfb9de4d22");
var fails = require("b37df495bcdc1d99");
var globalThis = require("e5929e9affd2affc");
var $String = globalThis.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"53b951dfb9de4d22":"cePh9","b37df495bcdc1d99":"7Gv5z","e5929e9affd2affc":"6xMjU"}],"cePh9":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("d049c1c2aa0eee5b");
var userAgent = require("4eb5796bbafe334d");
var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"d049c1c2aa0eee5b":"6xMjU","4eb5796bbafe334d":"qxRHs"}],"qxRHs":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("888bcb4c75dc4ad");
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : '';

},{"888bcb4c75dc4ad":"6xMjU"}],"9TreM":[function(require,module,exports,__globalThis) {
'use strict';
var aCallable = require("bbfed17b24e215f4");
var isNullOrUndefined = require("492a86e2970f6a26");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"bbfed17b24e215f4":"dxhWU","492a86e2970f6a26":"gHvvU"}],"dxhWU":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("4094667126ecac05");
var tryToString = require("fce2a7573db493fa");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + ' is not a function');
};

},{"4094667126ecac05":"2KfBB","fce2a7573db493fa":"fPD2p"}],"fPD2p":[function(require,module,exports,__globalThis) {
'use strict';
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return 'Object';
    }
};

},{}],"cUIZh":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("abe9ca006f56626e");
var isCallable = require("c96b3a89fec6248a");
var isObject = require("551615fda0214f1b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"abe9ca006f56626e":"3v9g9","c96b3a89fec6248a":"2KfBB","551615fda0214f1b":"5rTge"}],"lzelE":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("ad5ef4474219c101");
var shared = require("6a2cda01df6b4c79");
var hasOwn = require("dccc28ffa5beeb54");
var uid = require("48d6af1225853d44");
var NATIVE_SYMBOL = require("9f762329148684");
var USE_SYMBOL_AS_UID = require("1ce268781e409df2");
var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
    return WellKnownSymbolsStore[name];
};

},{"ad5ef4474219c101":"6xMjU","6a2cda01df6b4c79":"6SeRV","dccc28ffa5beeb54":"9CekL","48d6af1225853d44":"dePDt","9f762329148684":"2fu84","1ce268781e409df2":"fSbH5"}],"6SeRV":[function(require,module,exports,__globalThis) {
'use strict';
var store = require("84eeed9891aafe14");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"84eeed9891aafe14":"29eKX"}],"29eKX":[function(require,module,exports,__globalThis) {
'use strict';
var IS_PURE = require("7b43004672b1879f");
var globalThis = require("bc8329e77dc2c1cc");
var defineGlobalProperty = require("dfb72a1d809f7b02");
var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: '3.45.1',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: "\xa9 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: 'https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
});

},{"7b43004672b1879f":"cpju0","bc8329e77dc2c1cc":"6xMjU","dfb72a1d809f7b02":"48kcX"}],"cpju0":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = false;

},{}],"48kcX":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("2d1c29655635b9ea");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(globalThis, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        globalThis[key] = value;
    }
    return value;
};

},{"2d1c29655635b9ea":"6xMjU"}],"9CekL":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("f5dcaa60a713971f");
var toObject = require("ab17c4f45fcf0841");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f5dcaa60a713971f":"aAate","ab17c4f45fcf0841":"fTIhz"}],"fTIhz":[function(require,module,exports,__globalThis) {
'use strict';
var requireObjectCoercible = require("f45a7b5dcdc4a410");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f45a7b5dcdc4a410":"7cHwm"}],"dePDt":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("5da0fe4507da20a3");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);
module.exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"5da0fe4507da20a3":"aAate"}],"kwjpQ":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"9b4278b13c076bf":"5AxuF","8aee5d88a5f9b6b5":"7Gv5z","1db4d60148afcf21":"eF8HX"}],"eF8HX":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("845bcece0e6d354");
var isObject = require("824df78b2e007250");
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"845bcece0e6d354":"6xMjU","824df78b2e007250":"5rTge"}],"i7bgu":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"5AxuF","189ab650b8f71085":"aBGsi","1168c8162aa30435":"dOb5l"}],"aBGsi":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var V8_PROTOTYPE_DEFINE_BUG = require("b6ad7537efb06f4b");
var anObject = require("16365a73399e7fe7");
var toPropertyKey = require("fab1d366c47796d9");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"5AxuF","d482f9e5478795e8":"kwjpQ","b6ad7537efb06f4b":"8Gm1h","16365a73399e7fe7":"jFjFb","fab1d366c47796d9":"lGuA3"}],"8Gm1h":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("b22a5a2de93e3ad2");
var fails = require("249a5b857c2dfccd");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, 'prototype', {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"b22a5a2de93e3ad2":"5AxuF","249a5b857c2dfccd":"7Gv5z"}],"jFjFb":[function(require,module,exports,__globalThis) {
'use strict';
var isObject = require("2b6c6258a0a6082f");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + ' is not an object');
};

},{"2b6c6258a0a6082f":"5rTge"}],"es56c":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("99ee13632b3fa68");
var definePropertyModule = require("9ebb3e3004fccc0a");
var makeBuiltIn = require("f10cc812a3094053");
var defineGlobalProperty = require("d354802d852d9c2b");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"99ee13632b3fa68":"2KfBB","9ebb3e3004fccc0a":"aBGsi","f10cc812a3094053":"6JWCA","d354802d852d9c2b":"48kcX"}],"6JWCA":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("ca84677f1ebd1804");
var fails = require("13360f2842eba261");
var isCallable = require("103e488c0928755a");
var hasOwn = require("cbf9b0e0779cc368");
var DESCRIPTORS = require("3f2eb7efeae2f72b");
var CONFIGURABLE_FUNCTION_NAME = require("548b10f284264c72").CONFIGURABLE;
var inspectSource = require("358f00f3103bd55b");
var InternalStateModule = require("9b2ce14119fd2412");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, 'length', {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, 'name', {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) defineProperty(value, 'length', {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, 'constructor') && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, 'prototype', {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

},{"ca84677f1ebd1804":"aAate","13360f2842eba261":"7Gv5z","103e488c0928755a":"2KfBB","cbf9b0e0779cc368":"9CekL","3f2eb7efeae2f72b":"5AxuF","548b10f284264c72":"d1uzf","358f00f3103bd55b":"aXOzF","9b2ce14119fd2412":"hbwRd"}],"d1uzf":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("8ad2bacb0e20b95c");
var hasOwn = require("4eabfd8f83afc9d5");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"8ad2bacb0e20b95c":"5AxuF","4eabfd8f83afc9d5":"9CekL"}],"aXOzF":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("26e26db98367212e");
var isCallable = require("40ed9a4f6ae66648");
var store = require("485d48d6f4c6739e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"26e26db98367212e":"aAate","40ed9a4f6ae66648":"2KfBB","485d48d6f4c6739e":"29eKX"}],"hbwRd":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_WEAK_MAP = require("d3f0c9f3327b2fd6");
var globalThis = require("28c3574d0c39fe7e");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var hasOwn = require("6dea7358344877bb");
var shared = require("3e035a1241da2f0");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"d3f0c9f3327b2fd6":"6z7Mo","28c3574d0c39fe7e":"6xMjU","f82e6cc0ac249fa5":"5rTge","c0ae163eea4ef97":"i7bgu","6dea7358344877bb":"9CekL","3e035a1241da2f0":"29eKX","88d6ccc27e779e5a":"fDnL8","d40b9b3abdbb956e":"2sYlt"}],"6z7Mo":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("8b1a8c1dbfd18eb5");
var isCallable = require("aa77fff8d5ef0565");
var WeakMap = globalThis.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"8b1a8c1dbfd18eb5":"6xMjU","aa77fff8d5ef0565":"2KfBB"}],"fDnL8":[function(require,module,exports,__globalThis) {
'use strict';
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"6SeRV","90b4ffb58508a6e5":"dePDt"}],"2sYlt":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = {};

},{}],"i7gI0":[function(require,module,exports,__globalThis) {
'use strict';
var hasOwn = require("d91d786cc71453ce");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"d91d786cc71453ce":"9CekL","88cb809f98beddc6":"dDsbC","10ea642aad5f7c21":"dqLxA","39ff598ce822187e":"aBGsi"}],"dDsbC":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("3cc1e4329d869e34");
var uncurryThis = require("2b8e77cbdbe3db7a");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"h2CMt","2b8e77cbdbe3db7a":"aAate","d703bcb62fcda216":"kdCGz","157674bad2772c6d":"5fq5o","a09e060b9cae3c6c":"jFjFb"}],"kdCGz":[function(require,module,exports,__globalThis) {
'use strict';
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"gRwJ4","2c933f93dd98f385":"6IITF"}],"gRwJ4":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("363ee0e6bb4f46a7");
var hasOwn = require("3183fe0b0bf6f6ac");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"363ee0e6bb4f46a7":"aAate","3183fe0b0bf6f6ac":"9CekL","28192ac12e934672":"58zOi","a5f9c5d8e993ccd6":"kvmnR","57775908f1581bc6":"2sYlt"}],"kvmnR":[function(require,module,exports,__globalThis) {
'use strict';
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toAbsoluteIndex = require("212b13aecfa48226");
var lengthOfArrayLike = require("e5a8b3e1da4c5637");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"58zOi","212b13aecfa48226":"hMPua","e5a8b3e1da4c5637":"132UY"}],"hMPua":[function(require,module,exports,__globalThis) {
'use strict';
var toIntegerOrInfinity = require("72fe0a53ad43912c");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"72fe0a53ad43912c":"hfRnH"}],"hfRnH":[function(require,module,exports,__globalThis) {
'use strict';
var trunc = require("3403cba02b5f61d8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"3403cba02b5f61d8":"bZw4A"}],"bZw4A":[function(require,module,exports,__globalThis) {
'use strict';
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"132UY":[function(require,module,exports,__globalThis) {
'use strict';
var toLength = require("23d9716c54a2ab90");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"23d9716c54a2ab90":"8PIfI"}],"8PIfI":[function(require,module,exports,__globalThis) {
'use strict';
var toIntegerOrInfinity = require("c48d3a8b8ac52b0b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"c48d3a8b8ac52b0b":"hfRnH"}],"6IITF":[function(require,module,exports,__globalThis) {
'use strict';
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"5fq5o":[function(require,module,exports,__globalThis) {
'use strict';
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"3rvW8":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("10299561ea0c7870");
var isCallable = require("8b1ecdaf59f07210");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"10299561ea0c7870":"7Gv5z","8b1ecdaf59f07210":"2KfBB"}],"9fjiV":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("629a4d99f4fe5b2e");
var apply = require("e574be68c288c7c8");
var bind = require("df212787338802d3");
var isCallable = require("afdf018c2d01bbc6");
var hasOwn = require("35a3e849940fd612");
var fails = require("b8bf5434d2248ca7");
var html = require("731f9370cc21fc3b");
var arraySlice = require("ec358060964e4bde");
var createElement = require("907adb6d219da7a3");
var validateArgumentsLength = require("f398561ebd49a798");
var IS_IOS = require("8a8e342aaad83bb");
var IS_NODE = require("6eef8b4e43dd6731");
var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = globalThis.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== 'file:' && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        globalThis.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"629a4d99f4fe5b2e":"6xMjU","e574be68c288c7c8":"9A5Vw","df212787338802d3":"l8jub","afdf018c2d01bbc6":"2KfBB","35a3e849940fd612":"9CekL","b8bf5434d2248ca7":"7Gv5z","731f9370cc21fc3b":"2ac6V","ec358060964e4bde":"kGYHC","907adb6d219da7a3":"eF8HX","f398561ebd49a798":"elQJL","8a8e342aaad83bb":"9HLc7","6eef8b4e43dd6731":"3ENS9"}],"9A5Vw":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("d07466971ded2aca");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d07466971ded2aca":"5U5xz"}],"l8jub":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("92f6f475baa85665");
var aCallable = require("547ee4f9dab0cc76");
var NATIVE_BIND = require("5acd31cba656d393");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"92f6f475baa85665":"1401W","547ee4f9dab0cc76":"dxhWU","5acd31cba656d393":"5U5xz"}],"1401W":[function(require,module,exports,__globalThis) {
'use strict';
var classofRaw = require("8e77093015e1e67f");
var uncurryThis = require("9daa4dbbca634c9e");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

},{"8e77093015e1e67f":"fKrQp","9daa4dbbca634c9e":"aAate"}],"2ac6V":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn('document', 'documentElement');

},{"14cb391fa4a0dda8":"h2CMt"}],"kGYHC":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("5250b5c9324ccbe");
module.exports = uncurryThis([].slice);

},{"5250b5c9324ccbe":"aAate"}],"elQJL":[function(require,module,exports,__globalThis) {
'use strict';
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError('Not enough arguments');
    return passed;
};

},{}],"9HLc7":[function(require,module,exports,__globalThis) {
'use strict';
var userAgent = require("88313d0d5d3e28c");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"88313d0d5d3e28c":"qxRHs"}],"3ENS9":[function(require,module,exports,__globalThis) {
'use strict';
var ENVIRONMENT = require("5fac34e3c4c0e043");
module.exports = ENVIRONMENT === 'NODE';

},{"5fac34e3c4c0e043":"k2Sud"}],"k2Sud":[function(require,module,exports,__globalThis) {
'use strict';
/* global Bun, Deno -- detection */ var globalThis = require("7dc361f46ecde901");
var userAgent = require("9f6e24ecbba66a9e");
var classof = require("a008a59fdc341842");
var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
};
module.exports = function() {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof(globalThis.process) === 'process') return 'NODE';
    if (globalThis.window && globalThis.document) return 'BROWSER';
    return 'REST';
}();

},{"7dc361f46ecde901":"6xMjU","9f6e24ecbba66a9e":"qxRHs","a008a59fdc341842":"fKrQp"}],"cpv3g":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("33581c362196ed1f");
var globalThis = require("503bb555249cad41");
var setTask = require("4219ce460223bd08").set;
var schedulersFix = require("738dc378e6a94c64");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = globalThis.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"33581c362196ed1f":"7Vckd","503bb555249cad41":"6xMjU","4219ce460223bd08":"9fjiV","738dc378e6a94c64":"fRRu2"}],"fRRu2":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("aa6765693e58a0fe");
var apply = require("a68ecfcbf29c46f6");
var isCallable = require("7087588d33667af2");
var ENVIRONMENT = require("864edee099e8affb");
var USER_AGENT = require("3a3a5a2cfab86f21");
var arraySlice = require("cff2c830bdea4f24");
var validateArgumentsLength = require("58a74f00cee1ac64");
var Function = globalThis.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && function() {
    var version = globalThis.Bun.version.split('.');
    return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"aa6765693e58a0fe":"6xMjU","a68ecfcbf29c46f6":"9A5Vw","7087588d33667af2":"2KfBB","864edee099e8affb":"k2Sud","3a3a5a2cfab86f21":"qxRHs","cff2c830bdea4f24":"kGYHC","58a74f00cee1ac64":"elQJL"}],"f6ot0":[function(require,module,exports,__globalThis) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"bPRDD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class FlashcardView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".flashcard");
    _errorMessage = "We could not find that flashcard. Please try another one!";
    _successMessage = "";
    addHandlerRender(handler) {
        [
            "load",
            "hashchange"
        ].forEach((e)=>{
            window.addEventListener(e, handler);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn_bookmark");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
        <figure>
          <img
            src="${this._data.image}"
            alt="${this._data.title}"
            class="w-full h-[15rem] object-cover @2xl:h-[17rem] @8xl:h-[37rem]"
          />
          <h1 class="flex items-center justify-center">
            <span
              class="text-white bg-blue-green-gradient px-[1rem] py-[0.5rem] font-bold text-[15px] skew-y-[-6deg] translate-y-[-50%] @2xl:text-[18px] @5xl:text-[21px] @8xl:text-[30px] hover:scale-105 duration-500 ease-in-out"
              >${this._data.title}</span
            >
          </h1>
        </figure>
        <div
          class="flex justify-between items-center p-[0.5rem] @2xl:p-[1.5rem] @5xl:px-[2rem] @8xl:px-[2.5rem] @8xl:py-[2rem]"
        >
          <div
            class="flex w-[16rem] justify-start gap-[3px] @2xl:gap-[1rem] @2xl:w-[22rem] @5xl:w-[30rem] @8xl:w-[50rem] @8xl:gap-[2rem]"
          >
            <div class="flex gap-[3px] items-center">
              <svg
                class="w-[1.5rem] h-[1.5rem] text-light-blue fill-current @8xl:w-[2rem] @8xl:h-[2rem]"
              >
                <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
              </svg>
              <span
                class="text-xs @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]"
                >${this._data.period}</span
              >
            </div>
            <div class="flex gap-[3px] items-center">
              <svg
                class="w-[1.5rem] h-[1.5rem] text-light-blue fill-current @8xl:w-[2rem] @8xl:h-[2rem]"
              >
                <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
              </svg>
              <span
                class="text-xs @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]"
                >${this._data.socialBehavior}</span
              >
            </div>
          </div>
          <div class="flex gap-2 items-center justify-center @8xl:gap-[1.5rem]">
            <div class="${this._data.key ? "" : "hidden"} flex items-center justify-center">
              <svg
                class="w-[2rem] h-[2rem] text-light-blue bg-grey-3 fill-current rounded-full p-[3px] @8xl:p-[5px] @8xl:w-[3rem] @8xl:h-[3rem]"
              >
                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
            <button class="btn_bookmark">
              <svg
                class="w-[2.5rem] h-[2.5rem] text-white bg-blue-green-gradient px-[0.5rem] fill-current rounded-full @8xl:w-[3.5rem] @8xl:h-[3.5rem]"
              >
                <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}">
                </use>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="bg-grey-3 w-full flex flex-col items-center px-[1rem] py-[1rem] gap-[1rem] shadow-sm @5xl:gap-[1.3rem] @8xl:py-[2rem] @8xl:shadow-lg"
        >
          <h2
            class="font-bold text-regal-blue text-[1rem] @2xl:text-[1.2rem] @5xl:text-[1.5rem] @8xl:text-[2rem]"
          >
            SPECIFICATIONS
          </h2>
          <ul class="w-full grid grid-cols-2 gap-[1rem]">
          ${this._data.characteristics.map(this._generatedMarkupCharacteristics).join("")}

          </ul>
        </div>

        <div
          class="w-full flex flex-col items-center px-[1rem] py-[1rem] gap-[1rem] @8xl:py-[2rem]"
        >
          <h2
            class="font-bold text-regal-blue text-[1rem] @2xl:text-[1.2rem] @5xl:text-[1.5rem] @8xl:text-[2rem]"
          >
            DESCRIPTION
          </h2>
          <p class="text-sm @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]">
            ${this._data.description}
          </p>
        </div>
    `;
    }
    _generatedMarkupCharacteristics(chr) {
        return `
            <li class="flex gap-[2px] justify-start">
              <svg
                class="w-[1.5rem] h-[1.5rem] text-regal-blue fill-current @8xl:w-[2rem] @8xl:h-[2rem]"
              >
                <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
              </svg>
              <div>
                <span
                  class="text-sm @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]"
                  >${chr.feature}: ${chr.value}</span
                >
              </div>
            </li>
            `;
    }
}
exports.default = new FlashcardView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","url:../../img/icons.svg":"fd0vu","./View":"jSw21"}],"fd0vu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("icons.0809ef97.svg") + "?" + Date.now();

},{}],"jSw21":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>{
                curEl.setAttribute(attr.name, attr.value);
            });
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `
          <div class="flex justify-center pt-[7rem]">
            <svg
              class="text-light-blue fill-current animate-spin w-[2.5rem] h-[2.5rem] @2xl:w-[4.5rem] @2xl:h-[4.5rem]"
            >
              <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
            </svg>
          </div>;`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._successMessage) {
        const markup = `
                  <div class="flex gap-[2px] justify-center items-start px-[3px] py-[5rem] @5xl:px-[5px] @8xl:gap-[1rem]">
                    <div >
                      <svg
                        class="w-[1.3rem] h-[1.3rem] text-light-blue fill-current @5xl:w-[2rem] @5xl:h-[2rem] "
                      >
                        <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
                      </svg>
                    </div>
                    <p class="text-[10px] @5xl:text-[12px] @8xl:text-[15px]">
                      ${message}
                    </p>
                  </div>
      `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
                  <div class="flex gap-[2px] justify-center items-start px-[3px] py-[5rem] @5xl:px-[5px] @8xl:gap-[1rem]">
                    <div >
                      <svg
                        class="w-[1.3rem] h-[1.3rem] text-light-blue fill-current @5xl:w-[2rem] @5xl:h-[2rem] "
                      >
                        <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                      </svg>
                    </div>
                    <p class="text-[10px] @5xl:text-[12px] @8xl:text-[15px]">
                      ${message}
                    </p>
                  </div>
      `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3QBkH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadFlashcard", ()=>loadFlashcard);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadFlashcard", ()=>uploadFlashcard);
var _postcss = require("postcss");
var _config = require("./config");
var _helpers = require("./helpers");
const state = {
    flashcard: {},
    search: {
        results: [],
        query: "",
        page: 1,
        resultsPerPage: (0, _config.RES_PER_PAGE)
    },
    bookmarks: []
};
const createFlashcardObject = function(flashcard) {
    return {
        id: flashcard.id,
        title: flashcard.title,
        publisher: flashcard.publisher,
        image: flashcard.image_url,
        period: flashcard.period,
        socialBehavior: flashcard.social_behavior,
        characteristics: flashcard.characteristics,
        description: flashcard.description,
        ...flashcard.key && {
            key: flashcard.key
        }
    };
};
const loadFlashcard = async function(id) {
    try {
        const flashcard = await (0, _helpers.AJAX)(`${(0, _config.API_URL)}/${id}`);
        state.flashcard = createFlashcardObject(flashcard);
        if (state.bookmarks.some((bookmark)=>String(bookmark.id) === id)) state.flashcard.bookmarked = true;
        else state.flashcard.bookmarked = false;
    } catch (err) {
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await (0, _helpers.AJAX)(`${(0, _config.API_URL)}?q=${query}&_select=id&_select=title&_select=image_url&_select=publisher`);
        state.search.results = data.map((res)=>{
            return {
                id: res.id,
                title: res.title,
                image: res.image_url,
                publisher: res.publisher,
                ...res.key && {
                    key: res.key
                }
            };
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};
const persistBookmarks = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const addBookmark = function(flashcard) {
    state.bookmarks.push(flashcard);
    if (flashcard.id === state.flashcard.id) state.flashcard.bookmarked = true;
    persistBookmarks();
};
const deleteBookmark = function(id) {
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    if (id === state.flashcard.id) state.flashcard.bookmarked = false;
    persistBookmarks();
};
const init = function() {
    const storage = localStorage.getItem("bookmarks");
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
const uploadFlashcard = async function(newFlashcard) {
    try {
        const characteristics = Object.entries(newFlashcard).filter((entry)=>entry[0].startsWith("characteristic") && entry[1] !== "").map((ch)=>{
            const chArr = ch[1].split(",");
            if (chArr.length !== 2) throw new Error("please use the correct format for characteristics !");
            const [feature, value] = chArr;
            return {
                feature,
                value
            };
        });
        const flashcard = {
            title: newFlashcard.title,
            publisher: newFlashcard.publisher,
            image_url: newFlashcard.image,
            period: newFlashcard.period,
            social_behavior: newFlashcard.socialBehavior,
            characteristics,
            description: newFlashcard.description,
            key: "user-flashcard"
        };
        const data = await (0, _helpers.AJAX)((0, _config.API_URL), flashcard);
        state.flashcard = createFlashcardObject(data);
        addBookmark(state.flashcard);
    } catch (err) {
        throw err;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./config":"2hPh4","./helpers":"7nL9P","postcss":"1JLtC"}],"2hPh4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = "https://dinoverse-db.onrender.com/dinosaurs";
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7nL9P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./config":"2hPh4"}],"1JLtC":[function(require,module,exports,__globalThis) {
'use strict';
let AtRule = require("3d45f8dbf6f865b3");
let Comment = require("a80a0398f4ef418a");
let Container = require("53e8dbf4303f6b2");
let CssSyntaxError = require("b94c122da89285cf");
let Declaration = require("58b9b695b5cdec4f");
let Document = require("6d045fa42be054c3");
let fromJSON = require("265270fe03ed0453");
let Input = require("88cc225cd57b2cfd");
let LazyResult = require("28800b7f609eacb4");
let list = require("b9cbb1c1f8b97b6d");
let Node = require("f911e43317d4d41c");
let parse = require("d869a996a852aa7b");
let Processor = require("74e2939a62033b88");
let Result = require("7861cd83b55ece93");
let Root = require("4e735dfb84c57321");
let Rule = require("885ac03c34871ebd");
let stringify = require("423052f41b6923a8");
let Warning = require("5e8938f8ea2bde5c");
function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) plugins = plugins[0];
    return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        // eslint-disable-next-line no-console
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            // eslint-disable-next-line no-console
            console.warn(name + ': postcss.plugin was deprecated. Migration guide:\n' + 'https://evilmartians.com/chronicles/postcss-8-plugin-migration');
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, 'postcss', {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults)=>new Comment(defaults);
postcss.atRule = (defaults)=>new AtRule(defaults);
postcss.decl = (defaults)=>new Declaration(defaults);
postcss.rule = (defaults)=>new Rule(defaults);
postcss.root = (defaults)=>new Root(defaults);
postcss.document = (defaults)=>new Document(defaults);
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
module.exports = postcss;
postcss.default = postcss;

},{"3d45f8dbf6f865b3":"3SRR8","a80a0398f4ef418a":"hNyhS","53e8dbf4303f6b2":"i6jNZ","b94c122da89285cf":"3JUzX","58b9b695b5cdec4f":"e7WEv","6d045fa42be054c3":"GgWiE","265270fe03ed0453":"fUlWo","88cc225cd57b2cfd":"1GhTH","28800b7f609eacb4":"gFIGr","b9cbb1c1f8b97b6d":"gkQqY","f911e43317d4d41c":"bKkT0","d869a996a852aa7b":"iPHqN","74e2939a62033b88":"4xswO","7861cd83b55ece93":"g4XI7","4e735dfb84c57321":"iXIGo","885ac03c34871ebd":"ezKzj","423052f41b6923a8":"3BuX9","5e8938f8ea2bde5c":"45qiX"}],"3SRR8":[function(require,module,exports,__globalThis) {
'use strict';
let Container = require("70faab7fa86a1d67");
class AtRule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'atrule';
    }
    append(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.append(...children);
    }
    prepend(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.prepend(...children);
    }
}
module.exports = AtRule;
AtRule.default = AtRule;
Container.registerAtRule(AtRule);

},{"70faab7fa86a1d67":"i6jNZ"}],"i6jNZ":[function(require,module,exports,__globalThis) {
'use strict';
let Comment = require("7b441fc27c320a2c");
let Declaration = require("612b113f57da6436");
let Node = require("f2754be16c7a4192");
let { isClean, my } = require("fe19f7ecb9c04826");
let AtRule, parse, Root, Rule;
function cleanSource(nodes) {
    return nodes.map((i)=>{
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}
function markTreeDirty(node) {
    node[isClean] = false;
    if (node.proxyOf.nodes) for (let i of node.proxyOf.nodes)markTreeDirty(i);
}
class Container extends Node {
    get first() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[0];
    }
    get last() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...children) {
        for (let child of children){
            let nodes = this.normalize(child, this.last);
            for (let node of nodes)this.proxyOf.nodes.push(node);
        }
        this.markDirty();
        return this;
    }
    cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) for (let node of this.nodes)node.cleanRaws(keepBetween);
    }
    each(callback) {
        if (!this.proxyOf.nodes) return undefined;
        let iterator = this.getIterator();
        let index, result;
        while(this.indexes[iterator] < this.proxyOf.nodes.length){
            index = this.indexes[iterator];
            result = callback(this.proxyOf.nodes[index], index);
            if (result === false) break;
            this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result;
    }
    every(condition) {
        return this.nodes.every(condition);
    }
    getIterator() {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
    }
    getProxyProcessor() {
        return {
            get (node, prop) {
                if (prop === 'proxyOf') return node;
                else if (!node[prop]) return node[prop];
                else if (prop === 'each' || typeof prop === 'string' && prop.startsWith('walk')) return (...args)=>{
                    return node[prop](...args.map((i)=>{
                        if (typeof i === 'function') return (child, index)=>i(child.toProxy(), index);
                        else return i;
                    }));
                };
                else if (prop === 'every' || prop === 'some') return (cb)=>{
                    return node[prop]((child, ...other)=>cb(child.toProxy(), ...other));
                };
                else if (prop === 'root') return ()=>node.root().toProxy();
                else if (prop === 'nodes') return node.nodes.map((i)=>i.toProxy());
                else if (prop === 'first' || prop === 'last') return node[prop].toProxy();
                else return node[prop];
            },
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === 'name' || prop === 'params' || prop === 'selector') node.markDirty();
                return true;
            }
        };
    }
    index(child) {
        if (typeof child === 'number') return child;
        if (child.proxyOf) child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
    }
    insertAfter(exist, add) {
        let existIndex = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex + 1, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex < index) this.indexes[id] = index + nodes.length;
        }
        this.markDirty();
        return this;
    }
    insertBefore(exist, add) {
        let existIndex = this.index(exist);
        let type = existIndex === 0 ? 'prepend' : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex <= index) this.indexes[id] = index + nodes.length;
        }
        this.markDirty();
        return this;
    }
    normalize(nodes, sample) {
        if (typeof nodes === 'string') nodes = cleanSource(parse(nodes).nodes);
        else if (typeof nodes === 'undefined') nodes = [];
        else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i of nodes)if (i.parent) i.parent.removeChild(i, 'ignore');
        } else if (nodes.type === 'root' && this.type !== 'document') {
            nodes = nodes.nodes.slice(0);
            for (let i of nodes)if (i.parent) i.parent.removeChild(i, 'ignore');
        } else if (nodes.type) nodes = [
            nodes
        ];
        else if (nodes.prop) {
            if (typeof nodes.value === 'undefined') throw new Error('Value field is missed in node creation');
            else if (typeof nodes.value !== 'string') nodes.value = String(nodes.value);
            nodes = [
                new Declaration(nodes)
            ];
        } else if (nodes.selector || nodes.selectors) nodes = [
            new Rule(nodes)
        ];
        else if (nodes.name) nodes = [
            new AtRule(nodes)
        ];
        else if (nodes.text) nodes = [
            new Comment(nodes)
        ];
        else throw new Error('Unknown node type in node creation');
        let processed = nodes.map((i)=>{
            /* c8 ignore next */ if (!i[my]) Container.rebuild(i);
            i = i.proxyOf;
            if (i.parent) i.parent.removeChild(i);
            if (i[isClean]) markTreeDirty(i);
            if (!i.raws) i.raws = {};
            if (typeof i.raws.before === 'undefined') {
                if (sample && typeof sample.raws.before !== 'undefined') i.raws.before = sample.raws.before.replace(/\S/g, '');
            }
            i.parent = this.proxyOf;
            return i;
        });
        return processed;
    }
    prepend(...children) {
        children = children.reverse();
        for (let child of children){
            let nodes = this.normalize(child, this.first, 'prepend').reverse();
            for (let node of nodes)this.proxyOf.nodes.unshift(node);
            for(let id in this.indexes)this.indexes[id] = this.indexes[id] + nodes.length;
        }
        this.markDirty();
        return this;
    }
    push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
    }
    removeAll() {
        for (let node of this.proxyOf.nodes)node.parent = undefined;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
    }
    removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = undefined;
        this.proxyOf.nodes.splice(child, 1);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (index >= child) this.indexes[id] = index - 1;
        }
        this.markDirty();
        return this;
    }
    replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }
        this.walkDecls((decl)=>{
            if (opts.props && !opts.props.includes(decl.prop)) return;
            if (opts.fast && !decl.value.includes(opts.fast)) return;
            decl.value = decl.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
    }
    some(condition) {
        return this.nodes.some(condition);
    }
    walk(callback) {
        return this.each((child, i)=>{
            let result;
            try {
                result = callback(child, i);
            } catch (e) {
                throw child.addToError(e);
            }
            if (result !== false && child.walk) result = child.walk(callback);
            return result;
        });
    }
    walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk((child, i)=>{
                if (child.type === 'atrule') return callback(child, i);
            });
        }
        if (name instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === 'atrule' && name.test(child.name)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === 'atrule' && child.name === name) return callback(child, i);
        });
    }
    walkComments(callback) {
        return this.walk((child, i)=>{
            if (child.type === 'comment') return callback(child, i);
        });
    }
    walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk((child, i)=>{
                if (child.type === 'decl') return callback(child, i);
            });
        }
        if (prop instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === 'decl' && prop.test(child.prop)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === 'decl' && child.prop === prop) return callback(child, i);
        });
    }
    walkRules(selector, callback) {
        if (!callback) {
            callback = selector;
            return this.walk((child, i)=>{
                if (child.type === 'rule') return callback(child, i);
            });
        }
        if (selector instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === 'rule' && selector.test(child.selector)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === 'rule' && child.selector === selector) return callback(child, i);
        });
    }
}
Container.registerParse = (dependant)=>{
    parse = dependant;
};
Container.registerRule = (dependant)=>{
    Rule = dependant;
};
Container.registerAtRule = (dependant)=>{
    AtRule = dependant;
};
Container.registerRoot = (dependant)=>{
    Root = dependant;
};
module.exports = Container;
Container.default = Container;
/* c8 ignore start */ Container.rebuild = (node)=>{
    if (node.type === 'atrule') Object.setPrototypeOf(node, AtRule.prototype);
    else if (node.type === 'rule') Object.setPrototypeOf(node, Rule.prototype);
    else if (node.type === 'decl') Object.setPrototypeOf(node, Declaration.prototype);
    else if (node.type === 'comment') Object.setPrototypeOf(node, Comment.prototype);
    else if (node.type === 'root') Object.setPrototypeOf(node, Root.prototype);
    node[my] = true;
    if (node.nodes) node.nodes.forEach((child)=>{
        Container.rebuild(child);
    });
} /* c8 ignore stop */ ;

},{"7b441fc27c320a2c":"hNyhS","612b113f57da6436":"e7WEv","f2754be16c7a4192":"bKkT0","fe19f7ecb9c04826":"aP1H3"}],"hNyhS":[function(require,module,exports,__globalThis) {
'use strict';
let Node = require("7f4ce483d6e184ba");
class Comment extends Node {
    constructor(defaults){
        super(defaults);
        this.type = 'comment';
    }
}
module.exports = Comment;
Comment.default = Comment;

},{"7f4ce483d6e184ba":"bKkT0"}],"bKkT0":[function(require,module,exports,__globalThis) {
'use strict';
let CssSyntaxError = require("c1e82465b8844d24");
let Stringifier = require("b3be92e0a68c8c98");
let stringify = require("5a353b155add93c7");
let { isClean, my } = require("2a4266f65f480cdb");
function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for(let i in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        if (i === 'proxyCache') continue;
        let value = obj[i];
        let type = typeof value;
        if (i === 'parent' && type === 'object') {
            if (parent) cloned[i] = parent;
        } else if (i === 'source') cloned[i] = value;
        else if (Array.isArray(value)) cloned[i] = value.map((j)=>cloneNode(j, cloned));
        else {
            if (type === 'object' && value !== null) value = cloneNode(value);
            cloned[i] = value;
        }
    }
    return cloned;
}
function sourceOffset(inputCSS, position) {
    // Not all custom syntaxes support `offset` in `source.start` and `source.end`
    if (position && typeof position.offset !== 'undefined') return position.offset;
    let column = 1;
    let line = 1;
    let offset = 0;
    for(let i = 0; i < inputCSS.length; i++){
        if (line === position.line && column === position.column) {
            offset = i;
            break;
        }
        if (inputCSS[i] === '\n') {
            column = 1;
            line += 1;
        } else column += 1;
    }
    return offset;
}
class Node {
    get proxyOf() {
        return this;
    }
    constructor(defaults = {}){
        this.raws = {};
        this[isClean] = false;
        this[my] = true;
        for(let name in defaults)if (name === 'nodes') {
            this.nodes = [];
            for (let node of defaults[name])if (typeof node.clone === 'function') this.append(node.clone());
            else this.append(node);
        } else this[name] = defaults[name];
    }
    addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
        }
        return error;
    }
    after(add) {
        this.parent.insertAfter(this, add);
        return this;
    }
    assign(overrides = {}) {
        for(let name in overrides)this[name] = overrides[name];
        return this;
    }
    before(add) {
        this.parent.insertBefore(this, add);
        return this;
    }
    cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
    }
    clone(overrides = {}) {
        let cloned = cloneNode(this);
        for(let name in overrides)cloned[name] = overrides[name];
        return cloned;
    }
    cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
    }
    cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
    }
    error(message, opts = {}) {
        if (this.source) {
            let { end, start } = this.rangeBy(opts);
            return this.source.input.error(message, {
                column: start.column,
                line: start.line
            }, {
                column: end.column,
                line: end.line
            }, opts);
        }
        return new CssSyntaxError(message);
    }
    getProxyProcessor() {
        return {
            get (node, prop) {
                if (prop === 'proxyOf') return node;
                else if (prop === 'root') return ()=>node.root().toProxy();
                else return node[prop];
            },
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === 'prop' || prop === 'value' || prop === 'name' || prop === 'params' || prop === 'important' || /* c8 ignore next */ prop === 'text') node.markDirty();
                return true;
            }
        };
    }
    /* c8 ignore next 3 */ markClean() {
        this[isClean] = true;
    }
    markDirty() {
        if (this[isClean]) {
            this[isClean] = false;
            let next = this;
            while(next = next.parent)next[isClean] = false;
        }
    }
    next() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index + 1];
    }
    positionBy(opts = {}) {
        let pos = this.source.start;
        if (opts.index) pos = this.positionInside(opts.index);
        else if (opts.word) {
            let inputString = 'document' in this.source.input ? this.source.input.document : this.source.input.css;
            let stringRepresentation = inputString.slice(sourceOffset(inputString, this.source.start), sourceOffset(inputString, this.source.end));
            let index = stringRepresentation.indexOf(opts.word);
            if (index !== -1) pos = this.positionInside(index);
        }
        return pos;
    }
    positionInside(index) {
        let column = this.source.start.column;
        let line = this.source.start.line;
        let inputString = 'document' in this.source.input ? this.source.input.document : this.source.input.css;
        let offset = sourceOffset(inputString, this.source.start);
        let end = offset + index;
        for(let i = offset; i < end; i++)if (inputString[i] === '\n') {
            column = 1;
            line += 1;
        } else column += 1;
        return {
            column,
            line,
            offset: end
        };
    }
    prev() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index - 1];
    }
    rangeBy(opts = {}) {
        let inputString = 'document' in this.source.input ? this.source.input.document : this.source.input.css;
        let start = {
            column: this.source.start.column,
            line: this.source.start.line,
            offset: sourceOffset(inputString, this.source.start)
        };
        let end = this.source.end ? {
            column: this.source.end.column + 1,
            line: this.source.end.line,
            offset: typeof this.source.end.offset === 'number' ? this.source.end.offset : // the `sourceOffset(... , this.source.end)` returns an inclusive offset.
            // So, we add 1 to convert it to exclusive.
            sourceOffset(inputString, this.source.end) + 1
        } : {
            column: start.column + 1,
            line: start.line,
            offset: start.offset + 1
        };
        if (opts.word) {
            let stringRepresentation = inputString.slice(sourceOffset(inputString, this.source.start), sourceOffset(inputString, this.source.end));
            let index = stringRepresentation.indexOf(opts.word);
            if (index !== -1) {
                start = this.positionInside(index);
                end = this.positionInside(index + opts.word.length);
            }
        } else {
            if (opts.start) start = {
                column: opts.start.column,
                line: opts.start.line,
                offset: sourceOffset(inputString, opts.start)
            };
            else if (opts.index) start = this.positionInside(opts.index);
            if (opts.end) end = {
                column: opts.end.column,
                line: opts.end.line,
                offset: sourceOffset(inputString, opts.end)
            };
            else if (typeof opts.endIndex === 'number') end = this.positionInside(opts.endIndex);
            else if (opts.index) end = this.positionInside(opts.index + 1);
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) end = {
            column: start.column + 1,
            line: start.line,
            offset: start.offset + 1
        };
        return {
            end,
            start
        };
    }
    raw(prop, defaultType) {
        let str = new Stringifier();
        return str.raw(this, prop, defaultType);
    }
    remove() {
        if (this.parent) this.parent.removeChild(this);
        this.parent = undefined;
        return this;
    }
    replaceWith(...nodes) {
        if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node of nodes){
                if (node === this) foundSelf = true;
                else if (foundSelf) {
                    this.parent.insertAfter(bookmark, node);
                    bookmark = node;
                } else this.parent.insertBefore(bookmark, node);
            }
            if (!foundSelf) this.remove();
        }
        return this;
    }
    root() {
        let result = this;
        while(result.parent && result.parent.type !== 'document')result = result.parent;
        return result;
    }
    toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || new Map();
        let inputsNextIndex = 0;
        for(let name in this){
            if (!Object.prototype.hasOwnProperty.call(this, name)) continue;
            if (name === 'parent' || name === 'proxyCache') continue;
            let value = this[name];
            if (Array.isArray(value)) fixed[name] = value.map((i)=>{
                if (typeof i === 'object' && i.toJSON) return i.toJSON(null, inputs);
                else return i;
            });
            else if (typeof value === 'object' && value.toJSON) fixed[name] = value.toJSON(null, inputs);
            else if (name === 'source') {
                if (value == null) continue;
                let inputId = inputs.get(value.input);
                if (inputId == null) {
                    inputId = inputsNextIndex;
                    inputs.set(value.input, inputsNextIndex);
                    inputsNextIndex++;
                }
                fixed[name] = {
                    end: value.end,
                    inputId,
                    start: value.start
                };
            } else fixed[name] = value;
        }
        if (emitInputs) fixed.inputs = [
            ...inputs.keys()
        ].map((input)=>input.toJSON());
        return fixed;
    }
    toProxy() {
        if (!this.proxyCache) this.proxyCache = new Proxy(this, this.getProxyProcessor());
        return this.proxyCache;
    }
    toString(stringifier = stringify) {
        if (stringifier.stringify) stringifier = stringifier.stringify;
        let result = '';
        stringifier(this, (i)=>{
            result += i;
        });
        return result;
    }
    warn(result, text, opts = {}) {
        let data = {
            node: this
        };
        for(let i in opts)data[i] = opts[i];
        return result.warn(text, data);
    }
}
module.exports = Node;
Node.default = Node;

},{"c1e82465b8844d24":"3JUzX","b3be92e0a68c8c98":"a0Soo","5a353b155add93c7":"3BuX9","2a4266f65f480cdb":"aP1H3"}],"3JUzX":[function(require,module,exports,__globalThis) {
'use strict';
let pico = require("9ad9103a933bde56");
let terminalHighlight = require("76818616dc2728aa");
class CssSyntaxError extends Error {
    constructor(message, line, column, source, file, plugin){
        super(message);
        this.name = 'CssSyntaxError';
        this.reason = message;
        if (file) this.file = file;
        if (source) this.source = source;
        if (plugin) this.plugin = plugin;
        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
            if (typeof line === 'number') {
                this.line = line;
                this.column = column;
            } else {
                this.line = line.line;
                this.column = line.column;
                this.endLine = column.line;
                this.endColumn = column.column;
            }
        }
        this.setMessage();
        if (Error.captureStackTrace) Error.captureStackTrace(this, CssSyntaxError);
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ': ' : '';
        this.message += this.file ? this.file : '<css input>';
        if (typeof this.line !== 'undefined') this.message += ':' + this.line + ':' + this.column;
        this.message += ': ' + this.reason;
    }
    showSourceCode(color) {
        if (!this.source) return '';
        let css = this.source;
        if (color == null) color = pico.isColorSupported;
        let aside = (text)=>text;
        let mark = (text)=>text;
        let highlight = (text)=>text;
        if (color) {
            let { bold, gray, red } = pico.createColors(true);
            mark = (text)=>bold(red(text));
            aside = (text)=>gray(text);
            if (terminalHighlight) highlight = (text)=>terminalHighlight(text);
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        return lines.slice(start, end).map((line, index)=>{
            let number = start + 1 + index;
            let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';
            if (number === this.line) {
                if (line.length > 160) {
                    let padding = 20;
                    let subLineStart = Math.max(0, this.column - padding);
                    let subLineEnd = Math.max(this.column + padding, this.endColumn + padding);
                    let subLine = line.slice(subLineStart, subLineEnd);
                    let spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, Math.min(this.column - 1, padding - 1)).replace(/[^\t]/g, ' ');
                    return mark('>') + aside(gutter) + highlight(subLine) + '\n ' + spacing + mark('^');
                }
                let spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, this.column - 1).replace(/[^\t]/g, ' ');
                return mark('>') + aside(gutter) + highlight(line) + '\n ' + spacing + mark('^');
            }
            return ' ' + aside(gutter) + highlight(line);
        }).join('\n');
    }
    toString() {
        let code = this.showSourceCode();
        if (code) code = '\n\n' + code + '\n';
        return this.name + ': ' + this.message + code;
    }
}
module.exports = CssSyntaxError;
CssSyntaxError.default = CssSyntaxError;

},{"9ad9103a933bde56":"luNbx","76818616dc2728aa":"eoH60"}],"luNbx":[function(require,module,exports,__globalThis) {
var x = String;
var create = function() {
    return {
        isColorSupported: false,
        reset: x,
        bold: x,
        dim: x,
        italic: x,
        underline: x,
        inverse: x,
        hidden: x,
        strikethrough: x,
        black: x,
        red: x,
        green: x,
        yellow: x,
        blue: x,
        magenta: x,
        cyan: x,
        white: x,
        gray: x,
        bgBlack: x,
        bgRed: x,
        bgGreen: x,
        bgYellow: x,
        bgBlue: x,
        bgMagenta: x,
        bgCyan: x,
        bgWhite: x,
        blackBright: x,
        redBright: x,
        greenBright: x,
        yellowBright: x,
        blueBright: x,
        magentaBright: x,
        cyanBright: x,
        whiteBright: x,
        bgBlackBright: x,
        bgRedBright: x,
        bgGreenBright: x,
        bgYellowBright: x,
        bgBlueBright: x,
        bgMagentaBright: x,
        bgCyanBright: x,
        bgWhiteBright: x
    };
};
module.exports = create();
module.exports.createColors = create;

},{}],"eoH60":[function(require,module,exports,__globalThis) {
"use strict";

},{}],"a0Soo":[function(require,module,exports,__globalThis) {
'use strict';
const DEFAULT_RAW = {
    after: '\n',
    beforeClose: '\n',
    beforeComment: '\n',
    beforeDecl: '\n',
    beforeOpen: ' ',
    beforeRule: '\n',
    colon: ': ',
    commentLeft: ' ',
    commentRight: ' ',
    emptyBody: '',
    indent: '    ',
    semicolon: false
};
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
class Stringifier {
    constructor(builder){
        this.builder = builder;
    }
    atrule(node, semicolon) {
        let name = '@' + node.name;
        let params = node.params ? this.rawValue(node, 'params') : '';
        if (typeof node.raws.afterName !== 'undefined') name += node.raws.afterName;
        else if (params) name += ' ';
        if (node.nodes) this.block(node, name + params);
        else {
            let end = (node.raws.between || '') + (semicolon ? ';' : '');
            this.builder(name + params + end, node);
        }
    }
    beforeAfter(node, detect) {
        let value;
        if (node.type === 'decl') value = this.raw(node, null, 'beforeDecl');
        else if (node.type === 'comment') value = this.raw(node, null, 'beforeComment');
        else if (detect === 'before') value = this.raw(node, null, 'beforeRule');
        else value = this.raw(node, null, 'beforeClose');
        let buf = node.parent;
        let depth = 0;
        while(buf && buf.type !== 'root'){
            depth += 1;
            buf = buf.parent;
        }
        if (value.includes('\n')) {
            let indent = this.raw(node, null, 'indent');
            if (indent.length) for(let step = 0; step < depth; step++)value += indent;
        }
        return value;
    }
    block(node, start) {
        let between = this.raw(node, 'between', 'beforeOpen');
        this.builder(start + between + '{', node, 'start');
        let after;
        if (node.nodes && node.nodes.length) {
            this.body(node);
            after = this.raw(node, 'after');
        } else after = this.raw(node, 'after', 'emptyBody');
        if (after) this.builder(after);
        this.builder('}', node, 'end');
    }
    body(node) {
        let last = node.nodes.length - 1;
        while(last > 0){
            if (node.nodes[last].type !== 'comment') break;
            last -= 1;
        }
        let semicolon = this.raw(node, 'semicolon');
        for(let i = 0; i < node.nodes.length; i++){
            let child = node.nodes[i];
            let before = this.raw(child, 'before');
            if (before) this.builder(before);
            this.stringify(child, last !== i || semicolon);
        }
    }
    comment(node) {
        let left = this.raw(node, 'left', 'commentLeft');
        let right = this.raw(node, 'right', 'commentRight');
        this.builder('/*' + left + node.text + right + '*/', node);
    }
    decl(node, semicolon) {
        let between = this.raw(node, 'between', 'colon');
        let string = node.prop + between + this.rawValue(node, 'value');
        if (node.important) string += node.raws.important || ' !important';
        if (semicolon) string += ';';
        this.builder(string, node);
    }
    document(node) {
        this.body(node);
    }
    raw(node, own, detect) {
        let value;
        if (!detect) detect = own;
        // Already had
        if (own) {
            value = node.raws[own];
            if (typeof value !== 'undefined') return value;
        }
        let parent = node.parent;
        if (detect === 'before') {
            // Hack for first rule in CSS
            if (!parent || parent.type === 'root' && parent.first === node) return '';
            // `root` nodes in `document` should use only their own raws
            if (parent && parent.type === 'document') return '';
        }
        // Floating child without parent
        if (!parent) return DEFAULT_RAW[detect];
        // Detect style by other nodes
        let root = node.root();
        if (!root.rawCache) root.rawCache = {};
        if (typeof root.rawCache[detect] !== 'undefined') return root.rawCache[detect];
        if (detect === 'before' || detect === 'after') return this.beforeAfter(node, detect);
        else {
            let method = 'raw' + capitalize(detect);
            if (this[method]) value = this[method](root, node);
            else root.walk((i)=>{
                value = i.raws[own];
                if (typeof value !== 'undefined') return false;
            });
        }
        if (typeof value === 'undefined') value = DEFAULT_RAW[detect];
        root.rawCache[detect] = value;
        return value;
    }
    rawBeforeClose(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length > 0) {
                if (typeof i.raws.after !== 'undefined') {
                    value = i.raws.after;
                    if (value.includes('\n')) value = value.replace(/[^\n]+$/, '');
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeComment(root, node) {
        let value;
        root.walkComments((i)=>{
            if (typeof i.raws.before !== 'undefined') {
                value = i.raws.before;
                if (value.includes('\n')) value = value.replace(/[^\n]+$/, '');
                return false;
            }
        });
        if (typeof value === 'undefined') value = this.raw(node, null, 'beforeDecl');
        else if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeDecl(root, node) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.before !== 'undefined') {
                value = i.raws.before;
                if (value.includes('\n')) value = value.replace(/[^\n]+$/, '');
                return false;
            }
        });
        if (typeof value === 'undefined') value = this.raw(node, null, 'beforeRule');
        else if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeOpen(root) {
        let value;
        root.walk((i)=>{
            if (i.type !== 'decl') {
                value = i.raws.between;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawBeforeRule(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && (i.parent !== root || root.first !== i)) {
                if (typeof i.raws.before !== 'undefined') {
                    value = i.raws.before;
                    if (value.includes('\n')) value = value.replace(/[^\n]+$/, '');
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawColon(root) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.between !== 'undefined') {
                value = i.raws.between.replace(/[^\s:]/g, '');
                return false;
            }
        });
        return value;
    }
    rawEmptyBody(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length === 0) {
                value = i.raws.after;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawIndent(root) {
        if (root.raws.indent) return root.raws.indent;
        let value;
        root.walk((i)=>{
            let p = i.parent;
            if (p && p !== root && p.parent && p.parent === root) {
                if (typeof i.raws.before !== 'undefined') {
                    let parts = i.raws.before.split('\n');
                    value = parts[parts.length - 1];
                    value = value.replace(/\S/g, '');
                    return false;
                }
            }
        });
        return value;
    }
    rawSemicolon(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length && i.last.type === 'decl') {
                value = i.raws.semicolon;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawValue(node, prop) {
        let value = node[prop];
        let raw = node.raws[prop];
        if (raw && raw.value === value) return raw.raw;
        return value;
    }
    root(node) {
        this.body(node);
        if (node.raws.after) this.builder(node.raws.after);
    }
    rule(node) {
        this.block(node, this.rawValue(node, 'selector'));
        if (node.raws.ownSemicolon) this.builder(node.raws.ownSemicolon, node, 'end');
    }
    stringify(node, semicolon) {
        /* c8 ignore start */ if (!this[node.type]) throw new Error('Unknown AST node type ' + node.type + '. ' + 'Maybe you need to change PostCSS stringifier.');
        /* c8 ignore stop */ this[node.type](node, semicolon);
    }
}
module.exports = Stringifier;
Stringifier.default = Stringifier;

},{}],"3BuX9":[function(require,module,exports,__globalThis) {
'use strict';
let Stringifier = require("f7559227119e51ac");
function stringify(node, builder) {
    let str = new Stringifier(builder);
    str.stringify(node);
}
module.exports = stringify;
stringify.default = stringify;

},{"f7559227119e51ac":"a0Soo"}],"aP1H3":[function(require,module,exports,__globalThis) {
'use strict';
module.exports.isClean = Symbol('isClean');
module.exports.my = Symbol('my');

},{}],"e7WEv":[function(require,module,exports,__globalThis) {
'use strict';
let Node = require("943ca4e816e55fa8");
class Declaration extends Node {
    get variable() {
        return this.prop.startsWith('--') || this.prop[0] === '$';
    }
    constructor(defaults){
        if (defaults && typeof defaults.value !== 'undefined' && typeof defaults.value !== 'string') defaults = {
            ...defaults,
            value: String(defaults.value)
        };
        super(defaults);
        this.type = 'decl';
    }
}
module.exports = Declaration;
Declaration.default = Declaration;

},{"943ca4e816e55fa8":"bKkT0"}],"GgWiE":[function(require,module,exports,__globalThis) {
'use strict';
let Container = require("4ddefed8be3a5f1");
let LazyResult, Processor;
class Document extends Container {
    constructor(defaults){
        // type needs to be passed to super, otherwise child roots won't be normalized correctly
        super({
            type: 'document',
            ...defaults
        });
        if (!this.nodes) this.nodes = [];
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Document.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Document.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Document;
Document.default = Document;

},{"4ddefed8be3a5f1":"i6jNZ"}],"fUlWo":[function(require,module,exports,__globalThis) {
'use strict';
let AtRule = require("3cdc0b706b482706");
let Comment = require("accf7cbbccc760da");
let Declaration = require("4b43ae4fd3737621");
let Input = require("58554d265ddb6611");
let PreviousMap = require("60700dde8b5be836");
let Root = require("c11a715055f82a3b");
let Rule = require("e55fa67de2c8e0eb");
function fromJSON(json, inputs) {
    if (Array.isArray(json)) return json.map((n)=>fromJSON(n));
    let { inputs: ownInputs, ...defaults } = json;
    if (ownInputs) {
        inputs = [];
        for (let input of ownInputs){
            let inputHydrated = {
                ...input,
                __proto__: Input.prototype
            };
            if (inputHydrated.map) inputHydrated.map = {
                ...inputHydrated.map,
                __proto__: PreviousMap.prototype
            };
            inputs.push(inputHydrated);
        }
    }
    if (defaults.nodes) defaults.nodes = json.nodes.map((n)=>fromJSON(n, inputs));
    if (defaults.source) {
        let { inputId, ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) defaults.source.input = inputs[inputId];
    }
    if (defaults.type === 'root') return new Root(defaults);
    else if (defaults.type === 'decl') return new Declaration(defaults);
    else if (defaults.type === 'rule') return new Rule(defaults);
    else if (defaults.type === 'comment') return new Comment(defaults);
    else if (defaults.type === 'atrule') return new AtRule(defaults);
    else throw new Error('Unknown node type: ' + json.type);
}
module.exports = fromJSON;
fromJSON.default = fromJSON;

},{"3cdc0b706b482706":"3SRR8","accf7cbbccc760da":"hNyhS","4b43ae4fd3737621":"e7WEv","58554d265ddb6611":"1GhTH","60700dde8b5be836":"ik0gv","c11a715055f82a3b":"iXIGo","e55fa67de2c8e0eb":"ezKzj"}],"1GhTH":[function(require,module,exports,__globalThis) {
'use strict';
let { nanoid } = require("1dfe3269871ea6b2");
let { isAbsolute, resolve } = require("f14874183395e1da");
let { SourceMapConsumer, SourceMapGenerator } = require("308bf4f109b473bc");
let { fileURLToPath, pathToFileURL } = require("fa4f50e6e68066fb");
let CssSyntaxError = require("fdd5724c326bf7ae");
let PreviousMap = require("2fce709b45ddf48f");
let terminalHighlight = require("d3580bd2efb2d622");
let lineToIndexCache = Symbol('lineToIndexCache');
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(resolve && isAbsolute);
function getLineToIndex(input) {
    if (input[lineToIndexCache]) return input[lineToIndexCache];
    let lines = input.css.split('\n');
    let lineToIndex = new Array(lines.length);
    let prevIndex = 0;
    for(let i = 0, l = lines.length; i < l; i++){
        lineToIndex[i] = prevIndex;
        prevIndex += lines[i].length + 1;
    }
    input[lineToIndexCache] = lineToIndex;
    return lineToIndex;
}
class Input {
    get from() {
        return this.file || this.id;
    }
    constructor(css, opts = {}){
        if (css === null || typeof css === 'undefined' || typeof css === 'object' && !css.toString) throw new Error(`PostCSS received ${css} instead of CSS string`);
        this.css = css.toString();
        if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
            this.hasBOM = true;
            this.css = this.css.slice(1);
        } else this.hasBOM = false;
        this.document = this.css;
        if (opts.document) this.document = opts.document.toString();
        if (opts.from) {
            if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) this.file = opts.from;
            else this.file = resolve(opts.from);
        }
        if (pathAvailable && sourceMapAvailable) {
            let map = new PreviousMap(this.css, opts);
            if (map.text) {
                this.map = map;
                let file = map.consumer().file;
                if (!this.file && file) this.file = this.mapResolve(file);
            }
        }
        if (!this.file) this.id = '<input css ' + nanoid(6) + '>';
        if (this.map) this.map.file = this.from;
    }
    error(message, line, column, opts = {}) {
        let endColumn, endLine, endOffset, offset, result;
        if (line && typeof line === 'object') {
            let start = line;
            let end = column;
            if (typeof start.offset === 'number') {
                offset = start.offset;
                let pos = this.fromOffset(offset);
                line = pos.line;
                column = pos.col;
            } else {
                line = start.line;
                column = start.column;
                offset = this.fromLineAndColumn(line, column);
            }
            if (typeof end.offset === 'number') {
                endOffset = end.offset;
                let pos = this.fromOffset(endOffset);
                endLine = pos.line;
                endColumn = pos.col;
            } else {
                endLine = end.line;
                endColumn = end.column;
                endOffset = this.fromLineAndColumn(end.line, end.column);
            }
        } else if (!column) {
            offset = line;
            let pos = this.fromOffset(offset);
            line = pos.line;
            column = pos.col;
        } else offset = this.fromLineAndColumn(line, column);
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) result = new CssSyntaxError(message, origin.endLine === undefined ? origin.line : {
            column: origin.column,
            line: origin.line
        }, origin.endLine === undefined ? origin.column : {
            column: origin.endColumn,
            line: origin.endLine
        }, origin.source, origin.file, opts.plugin);
        else result = new CssSyntaxError(message, endLine === undefined ? line : {
            column,
            line
        }, endLine === undefined ? column : {
            column: endColumn,
            line: endLine
        }, this.css, this.file, opts.plugin);
        result.input = {
            column,
            endColumn,
            endLine,
            endOffset,
            line,
            offset,
            source: this.css
        };
        if (this.file) {
            if (pathToFileURL) result.input.url = pathToFileURL(this.file).toString();
            result.input.file = this.file;
        }
        return result;
    }
    fromLineAndColumn(line, column) {
        let lineToIndex = getLineToIndex(this);
        let index = lineToIndex[line - 1];
        return index + column - 1;
    }
    fromOffset(offset) {
        let lineToIndex = getLineToIndex(this);
        let lastLine = lineToIndex[lineToIndex.length - 1];
        let min = 0;
        if (offset >= lastLine) min = lineToIndex.length - 1;
        else {
            let max = lineToIndex.length - 2;
            let mid;
            while(min < max){
                mid = min + (max - min >> 1);
                if (offset < lineToIndex[mid]) max = mid - 1;
                else if (offset >= lineToIndex[mid + 1]) min = mid + 1;
                else {
                    min = mid;
                    break;
                }
            }
        }
        return {
            col: offset - lineToIndex[min] + 1,
            line: min + 1
        };
    }
    mapResolve(file) {
        if (/^\w+:\/\//.test(file)) return file;
        return resolve(this.map.consumer().sourceRoot || this.map.root || '.', file);
    }
    origin(line, column, endLine, endColumn) {
        if (!this.map) return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({
            column,
            line
        });
        if (!from.source) return false;
        let to;
        if (typeof endLine === 'number') to = consumer.originalPositionFor({
            column: endColumn,
            line: endLine
        });
        let fromUrl;
        if (isAbsolute(from.source)) fromUrl = pathToFileURL(from.source);
        else fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
        let result = {
            column: from.column,
            endColumn: to && to.column,
            endLine: to && to.line,
            line: from.line,
            url: fromUrl.toString()
        };
        if (fromUrl.protocol === 'file:') {
            if (fileURLToPath) result.file = fileURLToPath(fromUrl);
            else /* c8 ignore next 2 */ throw new Error(`file: protocol is not available in this PostCSS build`);
        }
        let source = consumer.sourceContentFor(from.source);
        if (source) result.source = source;
        return result;
    }
    toJSON() {
        let json = {};
        for (let name of [
            'hasBOM',
            'css',
            'file',
            'id'
        ])if (this[name] != null) json[name] = this[name];
        if (this.map) {
            json.map = {
                ...this.map
            };
            if (json.map.consumerCache) json.map.consumerCache = undefined;
        }
        return json;
    }
}
module.exports = Input;
Input.default = Input;
if (terminalHighlight && terminalHighlight.registerInput) terminalHighlight.registerInput(Input);

},{"1dfe3269871ea6b2":"kwZLQ","f14874183395e1da":"eoH60","308bf4f109b473bc":"eoH60","fa4f50e6e68066fb":"eoH60","fdd5724c326bf7ae":"3JUzX","2fce709b45ddf48f":"ik0gv","d3580bd2efb2d622":"eoH60"}],"kwZLQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = '';
        let i = size | 0;
        while(i--)id += alphabet[Math.random() * alphabet.length | 0];
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = '';
    let i = size | 0;
    while(i--)id += urlAlphabet[Math.random() * 64 | 0];
    return id;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ik0gv":[function(require,module,exports,__globalThis) {
var Buffer = require("9942fa10d1030c5e").Buffer;
'use strict';
let { existsSync, readFileSync } = require("8be0c628120271f3");
let { dirname, join } = require("d1a375d7fefead4e");
let { SourceMapConsumer, SourceMapGenerator } = require("a9cf17802fe70727");
function fromBase64(str) {
    if (Buffer) return Buffer.from(str, 'base64').toString();
    else /* c8 ignore next 2 */ return window.atob(str);
}
class PreviousMap {
    constructor(css, opts){
        if (opts.map === false) return;
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, 'data:');
        let prev = opts.map ? opts.map.prev : undefined;
        let text = this.loadMap(opts.from, prev);
        if (!this.mapFile && opts.from) this.mapFile = opts.from;
        if (this.mapFile) this.root = dirname(this.mapFile);
        if (text) this.text = text;
    }
    consumer() {
        if (!this.consumerCache) this.consumerCache = new SourceMapConsumer(this.text);
        return this.consumerCache;
    }
    decodeInline(text) {
        let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
        let baseUri = /^data:application\/json;base64,/;
        let charsetUri = /^data:application\/json;charset=utf-?8,/;
        let uri = /^data:application\/json,/;
        let uriMatch = text.match(charsetUri) || text.match(uri);
        if (uriMatch) return decodeURIComponent(text.substr(uriMatch[0].length));
        let baseUriMatch = text.match(baseCharsetUri) || text.match(baseUri);
        if (baseUriMatch) return fromBase64(text.substr(baseUriMatch[0].length));
        let encoding = text.match(/data:application\/json;([^,]+),/)[1];
        throw new Error('Unsupported source map encoding ' + encoding);
    }
    getAnnotationURL(sourceMapString) {
        return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, '').trim();
    }
    isMap(map) {
        if (typeof map !== 'object') return false;
        return typeof map.mappings === 'string' || typeof map._mappings === 'string' || Array.isArray(map.sections);
    }
    loadAnnotation(css) {
        let comments = css.match(/\/\*\s*# sourceMappingURL=/g);
        if (!comments) return;
        // sourceMappingURLs from comments, strings, etc.
        let start = css.lastIndexOf(comments.pop());
        let end = css.indexOf('*/', start);
        if (start > -1 && end > -1) // Locate the last sourceMappingURL to avoid pickin
        this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
    loadFile(path) {
        this.root = dirname(path);
        if (existsSync(path)) {
            this.mapFile = path;
            return readFileSync(path, 'utf-8').toString().trim();
        }
    }
    loadMap(file, prev) {
        if (prev === false) return false;
        if (prev) {
            if (typeof prev === 'string') return prev;
            else if (typeof prev === 'function') {
                let prevPath = prev(file);
                if (prevPath) {
                    let map = this.loadFile(prevPath);
                    if (!map) throw new Error('Unable to load previous source map: ' + prevPath.toString());
                    return map;
                }
            } else if (prev instanceof SourceMapConsumer) return SourceMapGenerator.fromSourceMap(prev).toString();
            else if (prev instanceof SourceMapGenerator) return prev.toString();
            else if (this.isMap(prev)) return JSON.stringify(prev);
            else throw new Error('Unsupported previous source map format: ' + prev.toString());
        } else if (this.inline) return this.decodeInline(this.annotation);
        else if (this.annotation) {
            let map = this.annotation;
            if (file) map = join(dirname(file), map);
            return this.loadFile(map);
        }
    }
    startWith(string, start) {
        if (!string) return false;
        return string.substr(0, start.length) === start;
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
}
module.exports = PreviousMap;
PreviousMap.default = PreviousMap;

},{"9942fa10d1030c5e":"bCaf4","8be0c628120271f3":"eoH60","d1a375d7fefead4e":"eoH60","a9cf17802fe70727":"eoH60"}],"bCaf4":[function(require,module,exports,__globalThis) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"9c62938f1dccc73c":"9I2RJ","aceacb6a4531a9d2":"geXY6"}],"9I2RJ":[function(require,module,exports,__globalThis) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

},{}],"geXY6":[function(require,module,exports,__globalThis) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"iXIGo":[function(require,module,exports,__globalThis) {
'use strict';
let Container = require("560b8aa33e20ea3e");
let LazyResult, Processor;
class Root extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'root';
        if (!this.nodes) this.nodes = [];
    }
    normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
            if (type === 'prepend') {
                if (this.nodes.length > 1) sample.raws.before = this.nodes[1].raws.before;
                else delete sample.raws.before;
            } else if (this.first !== sample) for (let node of nodes)node.raws.before = sample.raws.before;
        }
        return nodes;
    }
    removeChild(child, ignore) {
        let index = this.index(child);
        if (!ignore && index === 0 && this.nodes.length > 1) this.nodes[1].raws.before = this.nodes[index].raws.before;
        return super.removeChild(child);
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Root.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Root.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Root;
Root.default = Root;
Container.registerRoot(Root);

},{"560b8aa33e20ea3e":"i6jNZ"}],"ezKzj":[function(require,module,exports,__globalThis) {
'use strict';
let Container = require("d5e0f5e0b325cedb");
let list = require("221e506798aa56d3");
class Rule extends Container {
    get selectors() {
        return list.comma(this.selector);
    }
    set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
        this.selector = values.join(sep);
    }
    constructor(defaults){
        super(defaults);
        this.type = 'rule';
        if (!this.nodes) this.nodes = [];
    }
}
module.exports = Rule;
Rule.default = Rule;
Container.registerRule(Rule);

},{"d5e0f5e0b325cedb":"i6jNZ","221e506798aa56d3":"gkQqY"}],"gkQqY":[function(require,module,exports,__globalThis) {
'use strict';
let list = {
    comma (string) {
        return list.split(string, [
            ','
        ], true);
    },
    space (string) {
        let spaces = [
            ' ',
            '\n',
            '\t'
        ];
        return list.split(string, spaces);
    },
    split (string, separators, last) {
        let array = [];
        let current = '';
        let split = false;
        let func = 0;
        let inQuote = false;
        let prevQuote = '';
        let escape = false;
        for (let letter of string){
            if (escape) escape = false;
            else if (letter === '\\') escape = true;
            else if (inQuote) {
                if (letter === prevQuote) inQuote = false;
            } else if (letter === '"' || letter === "'") {
                inQuote = true;
                prevQuote = letter;
            } else if (letter === '(') func += 1;
            else if (letter === ')') {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.includes(letter)) split = true;
            }
            if (split) {
                if (current !== '') array.push(current.trim());
                current = '';
                split = false;
            } else current += letter;
        }
        if (last || current !== '') array.push(current.trim());
        return array;
    }
};
module.exports = list;
list.default = list;

},{}],"gFIGr":[function(require,module,exports,__globalThis) {
'use strict';
let Container = require("cde52f575286bb6");
let Document = require("681b63fe9d05e426");
let MapGenerator = require("66ac869ca9d5e2f0");
let parse = require("4ddbb908fc5050d1");
let Result = require("9fd200a8479a5908");
let Root = require("b7ad0485699a64e0");
let stringify = require("d3d5a028585e9913");
let { isClean, my } = require("784df17aa24f7eff");
let warnOnce = require("139c0704f6de1f4e");
const TYPE_TO_CLASS_NAME = {
    atrule: 'AtRule',
    comment: 'Comment',
    decl: 'Declaration',
    document: 'Document',
    root: 'Root',
    rule: 'Rule'
};
const PLUGIN_PROPS = {
    AtRule: true,
    AtRuleExit: true,
    Comment: true,
    CommentExit: true,
    Declaration: true,
    DeclarationExit: true,
    Document: true,
    DocumentExit: true,
    Once: true,
    OnceExit: true,
    postcssPlugin: true,
    prepare: true,
    Root: true,
    RootExit: true,
    Rule: true,
    RuleExit: true
};
const NOT_VISITORS = {
    Once: true,
    postcssPlugin: true,
    prepare: true
};
const CHILDREN = 0;
function isPromise(obj) {
    return typeof obj === 'object' && typeof obj.then === 'function';
}
function getEvents(node) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME[node.type];
    if (node.type === 'decl') key = node.prop.toLowerCase();
    else if (node.type === 'atrule') key = node.name.toLowerCase();
    if (key && node.append) return [
        type,
        type + '-' + key,
        CHILDREN,
        type + 'Exit',
        type + 'Exit-' + key
    ];
    else if (key) return [
        type,
        type + '-' + key,
        type + 'Exit',
        type + 'Exit-' + key
    ];
    else if (node.append) return [
        type,
        CHILDREN,
        type + 'Exit'
    ];
    else return [
        type,
        type + 'Exit'
    ];
}
function toStack(node) {
    let events;
    if (node.type === 'document') events = [
        'Document',
        CHILDREN,
        'DocumentExit'
    ];
    else if (node.type === 'root') events = [
        'Root',
        CHILDREN,
        'RootExit'
    ];
    else events = getEvents(node);
    return {
        eventIndex: 0,
        events,
        iterator: 0,
        node,
        visitorIndex: 0,
        visitors: []
    };
}
function cleanMarks(node) {
    node[isClean] = false;
    if (node.nodes) node.nodes.forEach((i)=>cleanMarks(i));
    return node;
}
let postcss = {};
class LazyResult {
    get content() {
        return this.stringify().content;
    }
    get css() {
        return this.stringify().css;
    }
    get map() {
        return this.stringify().map;
    }
    get messages() {
        return this.sync().messages;
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        return this.sync().root;
    }
    get [Symbol.toStringTag]() {
        return 'LazyResult';
    }
    constructor(processor, css, opts){
        this.stringified = false;
        this.processed = false;
        let root;
        if (typeof css === 'object' && css !== null && (css.type === 'root' || css.type === 'document')) root = cleanMarks(css);
        else if (css instanceof LazyResult || css instanceof Result) {
            root = cleanMarks(css.root);
            if (css.map) {
                if (typeof opts.map === 'undefined') opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            let parser = parse;
            if (opts.syntax) parser = opts.syntax.parse;
            if (opts.parser) parser = opts.parser;
            if (parser.parse) parser = parser.parse;
            try {
                root = parser(css, opts);
            } catch (error) {
                this.processed = true;
                this.error = error;
            }
            if (root && !root[my]) /* c8 ignore next 2 */ Container.rebuild(root);
        }
        this.result = new Result(processor, root, opts);
        this.helpers = {
            ...postcss,
            postcss,
            result: this.result
        };
        this.plugins = this.processor.plugins.map((plugin)=>{
            if (typeof plugin === 'object' && plugin.prepare) return {
                ...plugin,
                ...plugin.prepare(this.result)
            };
            else return plugin;
        });
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        if (this.processed) return Promise.resolve(this.result);
        if (!this.processing) this.processing = this.runAsync();
        return this.processing;
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    getAsyncError() {
        throw new Error('Use process(css).then(cb) to work with async plugins');
    }
    handleError(error, node) {
        let plugin = this.result.lastPlugin;
        try {
            if (node) node.addToError(error);
            this.error = error;
            if (error.name === 'CssSyntaxError' && !error.plugin) {
                error.plugin = plugin.postcssPlugin;
                error.setMessage();
            } else if (plugin.postcssVersion) {
                let pluginName = plugin.postcssPlugin;
                let pluginVer = plugin.postcssVersion;
                let runtimeVer = this.result.processor.version;
                let a = pluginVer.split('.');
                let b = runtimeVer.split('.');
                if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) // eslint-disable-next-line no-console
                console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ', but ' + pluginName + ' uses ' + pluginVer + '. Perhaps this is the source of the error below.');
            }
        } catch (err) {
            /* c8 ignore next 3 */ // eslint-disable-next-line no-console
            if (console && console.error) console.error(err);
        }
        return error;
    }
    prepareVisitors() {
        this.listeners = {};
        let add = (plugin, type, cb)=>{
            if (!this.listeners[type]) this.listeners[type] = [];
            this.listeners[type].push([
                plugin,
                cb
            ]);
        };
        for (let plugin of this.plugins){
            if (typeof plugin === 'object') for(let event in plugin){
                if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) throw new Error(`Unknown event ${event} in ${plugin.postcssPlugin}. ` + `Try to update PostCSS (${this.processor.version} now).`);
                if (!NOT_VISITORS[event]) {
                    if (typeof plugin[event] === 'object') {
                        for(let filter in plugin[event])if (filter === '*') add(plugin, event, plugin[event][filter]);
                        else add(plugin, event + '-' + filter.toLowerCase(), plugin[event][filter]);
                    } else if (typeof plugin[event] === 'function') add(plugin, event, plugin[event]);
                }
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
        this.plugin = 0;
        for(let i = 0; i < this.plugins.length; i++){
            let plugin = this.plugins[i];
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) try {
                await promise;
            } catch (error) {
                throw this.handleError(error);
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                let stack = [
                    toStack(root)
                ];
                while(stack.length > 0){
                    let promise = this.visitTick(stack);
                    if (isPromise(promise)) try {
                        await promise;
                    } catch (e) {
                        let node = stack[stack.length - 1].node;
                        throw this.handleError(e, node);
                    }
                }
            }
            if (this.listeners.OnceExit) for (let [plugin, visitor] of this.listeners.OnceExit){
                this.result.lastPlugin = plugin;
                try {
                    if (root.type === 'document') {
                        let roots = root.nodes.map((subRoot)=>visitor(subRoot, this.helpers));
                        await Promise.all(roots);
                    } else await visitor(root, this.helpers);
                } catch (e) {
                    throw this.handleError(e);
                }
            }
        }
        this.processed = true;
        return this.stringify();
    }
    runOnRoot(plugin) {
        this.result.lastPlugin = plugin;
        try {
            if (typeof plugin === 'object' && plugin.Once) {
                if (this.result.root.type === 'document') {
                    let roots = this.result.root.nodes.map((root)=>plugin.Once(root, this.helpers));
                    if (isPromise(roots[0])) return Promise.all(roots);
                    return roots;
                }
                return plugin.Once(this.result.root, this.helpers);
            } else if (typeof plugin === 'function') return plugin(this.result.root, this.result);
        } catch (error) {
            throw this.handleError(error);
        }
    }
    stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify;
        if (opts.syntax) str = opts.syntax.stringify;
        if (opts.stringifier) str = opts.stringifier;
        if (str.stringify) str = str.stringify;
        let map = new MapGenerator(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
    }
    sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        this.processed = true;
        if (this.processing) throw this.getAsyncError();
        for (let plugin of this.plugins){
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) throw this.getAsyncError();
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                this.walkSync(root);
            }
            if (this.listeners.OnceExit) {
                if (root.type === 'document') for (let subRoot of root.nodes)this.visitSync(this.listeners.OnceExit, subRoot);
                else this.visitSync(this.listeners.OnceExit, root);
            }
        }
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if (!('from' in this.opts)) warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this.css;
    }
    visitSync(visitors, node) {
        for (let [plugin, visitor] of visitors){
            this.result.lastPlugin = plugin;
            let promise;
            try {
                promise = visitor(node, this.helpers);
            } catch (e) {
                throw this.handleError(e, node.proxyOf);
            }
            if (node.type !== 'root' && node.type !== 'document' && !node.parent) return true;
            if (isPromise(promise)) throw this.getAsyncError();
        }
    }
    visitTick(stack) {
        let visit = stack[stack.length - 1];
        let { node, visitors } = visit;
        if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
            stack.pop();
            return;
        }
        if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
            let [plugin, visitor] = visitors[visit.visitorIndex];
            visit.visitorIndex += 1;
            if (visit.visitorIndex === visitors.length) {
                visit.visitors = [];
                visit.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin;
            try {
                return visitor(node.toProxy(), this.helpers);
            } catch (e) {
                throw this.handleError(e, node);
            }
        }
        if (visit.iterator !== 0) {
            let iterator = visit.iterator;
            let child;
            while(child = node.nodes[node.indexes[iterator]]){
                node.indexes[iterator] += 1;
                if (!child[isClean]) {
                    child[isClean] = true;
                    stack.push(toStack(child));
                    return;
                }
            }
            visit.iterator = 0;
            delete node.indexes[iterator];
        }
        let events = visit.events;
        while(visit.eventIndex < events.length){
            let event = events[visit.eventIndex];
            visit.eventIndex += 1;
            if (event === CHILDREN) {
                if (node.nodes && node.nodes.length) {
                    node[isClean] = true;
                    visit.iterator = node.getIterator();
                }
                return;
            } else if (this.listeners[event]) {
                visit.visitors = this.listeners[event];
                return;
            }
        }
        stack.pop();
    }
    walkSync(node) {
        node[isClean] = true;
        let events = getEvents(node);
        for (let event of events){
            if (event === CHILDREN) {
                if (node.nodes) node.each((child)=>{
                    if (!child[isClean]) this.walkSync(child);
                });
            } else {
                let visitors = this.listeners[event];
                if (visitors) {
                    if (this.visitSync(visitors, node.toProxy())) return;
                }
            }
        }
    }
    warnings() {
        return this.sync().warnings();
    }
}
LazyResult.registerPostcss = (dependant)=>{
    postcss = dependant;
};
module.exports = LazyResult;
LazyResult.default = LazyResult;
Root.registerLazyResult(LazyResult);
Document.registerLazyResult(LazyResult);

},{"cde52f575286bb6":"i6jNZ","681b63fe9d05e426":"GgWiE","66ac869ca9d5e2f0":"6bJvQ","4ddbb908fc5050d1":"iPHqN","9fd200a8479a5908":"g4XI7","b7ad0485699a64e0":"iXIGo","d3d5a028585e9913":"3BuX9","784df17aa24f7eff":"aP1H3","139c0704f6de1f4e":"4CPDt"}],"6bJvQ":[function(require,module,exports,__globalThis) {
var Buffer = require("91ad75e9856644d").Buffer;
'use strict';
let { dirname, relative, resolve, sep } = require("4b1599d5a5511897");
let { SourceMapConsumer, SourceMapGenerator } = require("d7d3f4b3c85e89c0");
let { pathToFileURL } = require("b3f2b26b354a6135");
let Input = require("376c58899937cbfc");
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
class MapGenerator {
    constructor(stringify, root, opts, cssString){
        this.stringify = stringify;
        this.mapOpts = opts.map || {};
        this.root = root;
        this.opts = opts;
        this.css = cssString;
        this.originalCSS = cssString;
        this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
        this.memoizedFileURLs = new Map();
        this.memoizedPaths = new Map();
        this.memoizedURLs = new Map();
    }
    addAnnotation() {
        let content;
        if (this.isInline()) content = 'data:application/json;base64,' + this.toBase64(this.map.toString());
        else if (typeof this.mapOpts.annotation === 'string') content = this.mapOpts.annotation;
        else if (typeof this.mapOpts.annotation === 'function') content = this.mapOpts.annotation(this.opts.to, this.root);
        else content = this.outputFile() + '.map';
        let eol = '\n';
        if (this.css.includes('\r\n')) eol = '\r\n';
        this.css += eol + '/*# sourceMappingURL=' + content + ' */';
    }
    applyPrevMaps() {
        for (let prev of this.previous()){
            let from = this.toUrl(this.path(prev.file));
            let root = prev.root || dirname(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
                map = new SourceMapConsumer(prev.text);
                if (map.sourcesContent) map.sourcesContent = null;
            } else map = prev.consumer();
            this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
        }
    }
    clearAnnotation() {
        if (this.mapOpts.annotation === false) return;
        if (this.root) {
            let node;
            for(let i = this.root.nodes.length - 1; i >= 0; i--){
                node = this.root.nodes[i];
                if (node.type !== 'comment') continue;
                if (node.text.startsWith('# sourceMappingURL=')) this.root.removeChild(i);
            }
        } else if (this.css) this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, '');
    }
    generate() {
        this.clearAnnotation();
        if (pathAvailable && sourceMapAvailable && this.isMap()) return this.generateMap();
        else {
            let result = '';
            this.stringify(this.root, (i)=>{
                result += i;
            });
            return [
                result
            ];
        }
    }
    generateMap() {
        if (this.root) this.generateString();
        else if (this.previous().length === 1) {
            let prev = this.previous()[0].consumer();
            prev.file = this.outputFile();
            this.map = SourceMapGenerator.fromSourceMap(prev, {
                ignoreInvalidMapping: true
            });
        } else {
            this.map = new SourceMapGenerator({
                file: this.outputFile(),
                ignoreInvalidMapping: true
            });
            this.map.addMapping({
                generated: {
                    column: 0,
                    line: 1
                },
                original: {
                    column: 0,
                    line: 1
                },
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : '<no source>'
            });
        }
        if (this.isSourcesContent()) this.setSourcesContent();
        if (this.root && this.previous().length > 0) this.applyPrevMaps();
        if (this.isAnnotation()) this.addAnnotation();
        if (this.isInline()) return [
            this.css
        ];
        else return [
            this.css,
            this.map
        ];
    }
    generateString() {
        this.css = '';
        this.map = new SourceMapGenerator({
            file: this.outputFile(),
            ignoreInvalidMapping: true
        });
        let line = 1;
        let column = 1;
        let noSource = '<no source>';
        let mapping = {
            generated: {
                column: 0,
                line: 0
            },
            original: {
                column: 0,
                line: 0
            },
            source: ''
        };
        let last, lines;
        this.stringify(this.root, (str, node, type)=>{
            this.css += str;
            if (node && type !== 'end') {
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                if (node.source && node.source.start) {
                    mapping.source = this.sourcePath(node);
                    mapping.original.line = node.source.start.line;
                    mapping.original.column = node.source.start.column - 1;
                    this.map.addMapping(mapping);
                } else {
                    mapping.source = noSource;
                    mapping.original.line = 1;
                    mapping.original.column = 0;
                    this.map.addMapping(mapping);
                }
            }
            lines = str.match(/\n/g);
            if (lines) {
                line += lines.length;
                last = str.lastIndexOf('\n');
                column = str.length - last;
            } else column += str.length;
            if (node && type !== 'start') {
                let p = node.parent || {
                    raws: {}
                };
                let childless = node.type === 'decl' || node.type === 'atrule' && !node.nodes;
                if (!childless || node !== p.last || p.raws.semicolon) {
                    if (node.source && node.source.end) {
                        mapping.source = this.sourcePath(node);
                        mapping.original.line = node.source.end.line;
                        mapping.original.column = node.source.end.column - 1;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 2;
                        this.map.addMapping(mapping);
                    } else {
                        mapping.source = noSource;
                        mapping.original.line = 1;
                        mapping.original.column = 0;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 1;
                        this.map.addMapping(mapping);
                    }
                }
            }
        });
    }
    isAnnotation() {
        if (this.isInline()) return true;
        if (typeof this.mapOpts.annotation !== 'undefined') return this.mapOpts.annotation;
        if (this.previous().length) return this.previous().some((i)=>i.annotation);
        return true;
    }
    isInline() {
        if (typeof this.mapOpts.inline !== 'undefined') return this.mapOpts.inline;
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== 'undefined' && annotation !== true) return false;
        if (this.previous().length) return this.previous().some((i)=>i.inline);
        return true;
    }
    isMap() {
        if (typeof this.opts.map !== 'undefined') return !!this.opts.map;
        return this.previous().length > 0;
    }
    isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== 'undefined') return this.mapOpts.sourcesContent;
        if (this.previous().length) return this.previous().some((i)=>i.withContent());
        return true;
    }
    outputFile() {
        if (this.opts.to) return this.path(this.opts.to);
        else if (this.opts.from) return this.path(this.opts.from);
        else return 'to.css';
    }
    path(file) {
        if (this.mapOpts.absolute) return file;
        if (file.charCodeAt(0) === 60 /* `<` */ ) return file;
        if (/^\w+:\/\//.test(file)) return file;
        let cached = this.memoizedPaths.get(file);
        if (cached) return cached;
        let from = this.opts.to ? dirname(this.opts.to) : '.';
        if (typeof this.mapOpts.annotation === 'string') from = dirname(resolve(from, this.mapOpts.annotation));
        let path = relative(from, file);
        this.memoizedPaths.set(file, path);
        return path;
    }
    previous() {
        if (!this.previousMaps) {
            this.previousMaps = [];
            if (this.root) this.root.walk((node)=>{
                if (node.source && node.source.input.map) {
                    let map = node.source.input.map;
                    if (!this.previousMaps.includes(map)) this.previousMaps.push(map);
                }
            });
            else {
                let input = new Input(this.originalCSS, this.opts);
                if (input.map) this.previousMaps.push(input.map);
            }
        }
        return this.previousMaps;
    }
    setSourcesContent() {
        let already = {};
        if (this.root) this.root.walk((node)=>{
            if (node.source) {
                let from = node.source.input.from;
                if (from && !already[from]) {
                    already[from] = true;
                    let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                    this.map.setSourceContent(fromUrl, node.source.input.css);
                }
            }
        });
        else if (this.css) {
            let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : '<no source>';
            this.map.setSourceContent(from, this.css);
        }
    }
    sourcePath(node) {
        if (this.mapOpts.from) return this.toUrl(this.mapOpts.from);
        else if (this.usesFileUrls) return this.toFileUrl(node.source.input.from);
        else return this.toUrl(this.path(node.source.input.from));
    }
    toBase64(str) {
        if (Buffer) return Buffer.from(str).toString('base64');
        else return window.btoa(unescape(encodeURIComponent(str)));
    }
    toFileUrl(path) {
        let cached = this.memoizedFileURLs.get(path);
        if (cached) return cached;
        if (pathToFileURL) {
            let fileURL = pathToFileURL(path).toString();
            this.memoizedFileURLs.set(path, fileURL);
            return fileURL;
        } else throw new Error('`map.absolute` option is not available in this PostCSS build');
    }
    toUrl(path) {
        let cached = this.memoizedURLs.get(path);
        if (cached) return cached;
        if (sep === '\\') path = path.replace(/\\/g, '/');
        let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
        this.memoizedURLs.set(path, url);
        return url;
    }
}
module.exports = MapGenerator;

},{"91ad75e9856644d":"bCaf4","4b1599d5a5511897":"eoH60","d7d3f4b3c85e89c0":"eoH60","b3f2b26b354a6135":"eoH60","376c58899937cbfc":"1GhTH"}],"iPHqN":[function(require,module,exports,__globalThis) {
'use strict';
let Container = require("6494fda586fb17a1");
let Input = require("b776f2c6c62c9360");
let Parser = require("61509346b7c32406");
function parse(css, opts) {
    let input = new Input(css, opts);
    let parser = new Parser(input);
    try {
        parser.parse();
    } catch (e) {
        if (e.name === 'CssSyntaxError' && opts && opts.from) {
            if (/\.scss$/i.test(opts.from)) e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
            else if (/\.sass/i.test(opts.from)) e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
            else if (/\.less$/i.test(opts.from)) e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
        }
        throw e;
    }
    return parser.root;
}
module.exports = parse;
parse.default = parse;
Container.registerParse(parse);

},{"6494fda586fb17a1":"i6jNZ","b776f2c6c62c9360":"1GhTH","61509346b7c32406":"3BqCk"}],"3BqCk":[function(require,module,exports,__globalThis) {
'use strict';
let AtRule = require("53d9a3501469ebf8");
let Comment = require("149094ae0d56f3fb");
let Declaration = require("47ad52a08a7a676e");
let Root = require("df12142db9f2ac4");
let Rule = require("fca2d5ee75ced31e");
let tokenizer = require("4a9961ca361e4099");
const SAFE_COMMENT_NEIGHBOR = {
    empty: true,
    space: true
};
function findLastWithPosition(tokens) {
    for(let i = tokens.length - 1; i >= 0; i--){
        let token = tokens[i];
        let pos = token[3] || token[2];
        if (pos) return pos;
    }
}
class Parser {
    constructor(input){
        this.input = input;
        this.root = new Root();
        this.current = this.root;
        this.spaces = '';
        this.semicolon = false;
        this.createTokenizer();
        this.root.source = {
            input,
            start: {
                column: 1,
                line: 1,
                offset: 0
            }
        };
    }
    atrule(token) {
        let node = new AtRule();
        node.name = token[1].slice(1);
        if (node.name === '') this.unnamedAtrule(node, token);
        this.init(node, token[2]);
        let type;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === '(' || type === '[') brackets.push(type === '(' ? ')' : ']');
            else if (type === '{' && brackets.length > 0) brackets.push('}');
            else if (type === brackets[brackets.length - 1]) brackets.pop();
            if (brackets.length === 0) {
                if (type === ';') {
                    node.source.end = this.getPosition(token[2]);
                    node.source.end.offset++;
                    this.semicolon = true;
                    break;
                } else if (type === '{') {
                    open = true;
                    break;
                } else if (type === '}') {
                    if (params.length > 0) {
                        shift = params.length - 1;
                        prev = params[shift];
                        while(prev && prev[0] === 'space')prev = params[--shift];
                        if (prev) {
                            node.source.end = this.getPosition(prev[3] || prev[2]);
                            node.source.end.offset++;
                        }
                    }
                    this.end(token);
                    break;
                } else params.push(token);
            } else params.push(token);
            if (this.tokenizer.endOfFile()) {
                last = true;
                break;
            }
        }
        node.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
            node.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node, 'params', params);
            if (last) {
                token = params[params.length - 1];
                node.source.end = this.getPosition(token[3] || token[2]);
                node.source.end.offset++;
                this.spaces = node.raws.between;
                node.raws.between = '';
            }
        } else {
            node.raws.afterName = '';
            node.params = '';
        }
        if (open) {
            node.nodes = [];
            this.current = node;
        }
    }
    checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false) return;
        let founded = 0;
        let token;
        for(let j = colon - 1; j >= 0; j--){
            token = tokens[j];
            if (token[0] !== 'space') {
                founded += 1;
                if (founded === 2) break;
            }
        }
        // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
        // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
        // And because we need it after that one we do +1 to get the next one.
        throw this.input.error('Missed semicolon', token[0] === 'word' ? token[3] + 1 : token[2]);
    }
    colon(tokens) {
        let brackets = 0;
        let prev, token, type;
        for (let [i, element] of tokens.entries()){
            token = element;
            type = token[0];
            if (type === '(') brackets += 1;
            if (type === ')') brackets -= 1;
            if (brackets === 0 && type === ':') {
                if (!prev) this.doubleColon(token);
                else if (prev[0] === 'word' && prev[1] === 'progid') continue;
                else return i;
            }
            prev = token;
        }
        return false;
    }
    comment(token) {
        let node = new Comment();
        this.init(node, token[2]);
        node.source.end = this.getPosition(token[3] || token[2]);
        node.source.end.offset++;
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
            node.text = '';
            node.raws.left = text;
            node.raws.right = '';
        } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node.text = match[2];
            node.raws.left = match[1];
            node.raws.right = match[3];
        }
    }
    createTokenizer() {
        this.tokenizer = tokenizer(this.input);
    }
    decl(tokens, customProperty) {
        let node = new Declaration();
        this.init(node, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ';') {
            this.semicolon = true;
            tokens.pop();
        }
        node.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
        node.source.end.offset++;
        while(tokens[0][0] !== 'word'){
            if (tokens.length === 1) this.unknownWord(tokens);
            node.raws.before += tokens.shift()[1];
        }
        node.source.start = this.getPosition(tokens[0][2]);
        node.prop = '';
        while(tokens.length){
            let type = tokens[0][0];
            if (type === ':' || type === 'space' || type === 'comment') break;
            node.prop += tokens.shift()[1];
        }
        node.raws.between = '';
        let token;
        while(tokens.length){
            token = tokens.shift();
            if (token[0] === ':') {
                node.raws.between += token[1];
                break;
            } else {
                if (token[0] === 'word' && /\w/.test(token[1])) this.unknownWord([
                    token
                ]);
                node.raws.between += token[1];
            }
        }
        if (node.prop[0] === '_' || node.prop[0] === '*') {
            node.raws.before += node.prop[0];
            node.prop = node.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while(tokens.length){
            next = tokens[0][0];
            if (next !== 'space' && next !== 'comment') break;
            firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for(let i = tokens.length - 1; i >= 0; i--){
            token = tokens[i];
            if (token[1].toLowerCase() === '!important') {
                node.important = true;
                let string = this.stringFrom(tokens, i);
                string = this.spacesFromEnd(tokens) + string;
                if (string !== ' !important') node.raws.important = string;
                break;
            } else if (token[1].toLowerCase() === 'important') {
                let cache = tokens.slice(0);
                let str = '';
                for(let j = i; j > 0; j--){
                    let type = cache[j][0];
                    if (str.trim().startsWith('!') && type !== 'space') break;
                    str = cache.pop()[1] + str;
                }
                if (str.trim().startsWith('!')) {
                    node.important = true;
                    node.raws.important = str;
                    tokens = cache;
                }
            }
            if (token[0] !== 'space' && token[0] !== 'comment') break;
        }
        let hasWord = tokens.some((i)=>i[0] !== 'space' && i[0] !== 'comment');
        if (hasWord) {
            node.raws.between += firstSpaces.map((i)=>i[1]).join('');
            firstSpaces = [];
        }
        this.raw(node, 'value', firstSpaces.concat(tokens), customProperty);
        if (node.value.includes(':') && !customProperty) this.checkMissedSemicolon(tokens);
    }
    doubleColon(token) {
        throw this.input.error('Double colon', {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    emptyRule(token) {
        let node = new Rule();
        this.init(node, token[2]);
        node.selector = '';
        node.raws.between = '';
        this.current = node;
    }
    end(token) {
        if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || '') + this.spaces;
        this.spaces = '';
        if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current.source.end.offset++;
            this.current = this.current.parent;
        } else this.unexpectedClose(token);
    }
    endFile() {
        if (this.current.parent) this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
        this.current.raws.after = (this.current.raws.after || '') + this.spaces;
        this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
                prev.raws.ownSemicolon = this.spaces;
                this.spaces = '';
                prev.source.end = this.getPosition(token[2]);
                prev.source.end.offset += prev.raws.ownSemicolon.length;
            }
        }
    }
    // Helpers
    getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
            column: pos.col,
            line: pos.line,
            offset
        };
    }
    init(node, offset) {
        this.current.push(node);
        node.source = {
            input: this.input,
            start: this.getPosition(offset)
        };
        node.raws.before = this.spaces;
        this.spaces = '';
        if (node.type !== 'comment') this.semicolon = false;
    }
    other(start) {
        let end = false;
        let type = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith('--');
        let tokens = [];
        let token = start;
        while(token){
            type = token[0];
            tokens.push(token);
            if (type === '(' || type === '[') {
                if (!bracket) bracket = token;
                brackets.push(type === '(' ? ')' : ']');
            } else if (customProperty && colon && type === '{') {
                if (!bracket) bracket = token;
                brackets.push('}');
            } else if (brackets.length === 0) {
                if (type === ';') {
                    if (colon) {
                        this.decl(tokens, customProperty);
                        return;
                    } else break;
                } else if (type === '{') {
                    this.rule(tokens);
                    return;
                } else if (type === '}') {
                    this.tokenizer.back(tokens.pop());
                    end = true;
                    break;
                } else if (type === ':') colon = true;
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
                if (brackets.length === 0) bracket = null;
            }
            token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile()) end = true;
        if (brackets.length > 0) this.unclosedBracket(bracket);
        if (end && colon) {
            if (!customProperty) while(tokens.length){
                token = tokens[tokens.length - 1][0];
                if (token !== 'space' && token !== 'comment') break;
                this.tokenizer.back(tokens.pop());
            }
            this.decl(tokens, customProperty);
        } else this.unknownWord(tokens);
    }
    parse() {
        let token;
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            switch(token[0]){
                case 'space':
                    this.spaces += token[1];
                    break;
                case ';':
                    this.freeSemicolon(token);
                    break;
                case '}':
                    this.end(token);
                    break;
                case 'comment':
                    this.comment(token);
                    break;
                case 'at-word':
                    this.atrule(token);
                    break;
                case '{':
                    this.emptyRule(token);
                    break;
                default:
                    this.other(token);
                    break;
            }
        }
        this.endFile();
    }
    precheckMissedSemicolon() {
    // Hook for Safe Parser
    }
    raw(node, prop, tokens, customProperty) {
        let token, type;
        let length = tokens.length;
        let value = '';
        let clean = true;
        let next, prev;
        for(let i = 0; i < length; i += 1){
            token = tokens[i];
            type = token[0];
            if (type === 'space' && i === length - 1 && !customProperty) clean = false;
            else if (type === 'comment') {
                prev = tokens[i - 1] ? tokens[i - 1][0] : 'empty';
                next = tokens[i + 1] ? tokens[i + 1][0] : 'empty';
                if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
                    if (value.slice(-1) === ',') clean = false;
                    else value += token[1];
                } else clean = false;
            } else value += token[1];
        }
        if (!clean) {
            let raw = tokens.reduce((all, i)=>all + i[1], '');
            node.raws[prop] = {
                raw,
                value
            };
        }
        node[prop] = value;
    }
    rule(tokens) {
        tokens.pop();
        let node = new Rule();
        this.init(node, tokens[0][2]);
        node.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node, 'selector', tokens);
        this.current = node;
    }
    spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = '';
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    // Errors
    spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = '';
        while(tokens.length){
            next = tokens[0][0];
            if (next !== 'space' && next !== 'comment') break;
            spaces += tokens.shift()[1];
        }
        return spaces;
    }
    spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = '';
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== 'space') break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    stringFrom(tokens, from) {
        let result = '';
        for(let i = from; i < tokens.length; i++)result += tokens[i][1];
        tokens.splice(from, tokens.length - from);
        return result;
    }
    unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error('Unclosed block', pos.line, pos.column);
    }
    unclosedBracket(bracket) {
        throw this.input.error('Unclosed bracket', {
            offset: bracket[2]
        }, {
            offset: bracket[2] + 1
        });
    }
    unexpectedClose(token) {
        throw this.input.error('Unexpected }', {
            offset: token[2]
        }, {
            offset: token[2] + 1
        });
    }
    unknownWord(tokens) {
        throw this.input.error('Unknown word ' + tokens[0][1], {
            offset: tokens[0][2]
        }, {
            offset: tokens[0][2] + tokens[0][1].length
        });
    }
    unnamedAtrule(node, token) {
        throw this.input.error('At-rule without name', {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
}
module.exports = Parser;

},{"53d9a3501469ebf8":"3SRR8","149094ae0d56f3fb":"hNyhS","47ad52a08a7a676e":"e7WEv","df12142db9f2ac4":"iXIGo","fca2d5ee75ced31e":"ezKzj","4a9961ca361e4099":"2RkfB"}],"2RkfB":[function(require,module,exports,__globalThis) {
'use strict';
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = '\\'.charCodeAt(0);
const SLASH = '/'.charCodeAt(0);
const NEWLINE = '\n'.charCodeAt(0);
const SPACE = ' '.charCodeAt(0);
const FEED = '\f'.charCodeAt(0);
const TAB = '\t'.charCodeAt(0);
const CR = '\r'.charCodeAt(0);
const OPEN_SQUARE = '['.charCodeAt(0);
const CLOSE_SQUARE = ']'.charCodeAt(0);
const OPEN_PARENTHESES = '('.charCodeAt(0);
const CLOSE_PARENTHESES = ')'.charCodeAt(0);
const OPEN_CURLY = '{'.charCodeAt(0);
const CLOSE_CURLY = '}'.charCodeAt(0);
const SEMICOLON = ';'.charCodeAt(0);
const ASTERISK = '*'.charCodeAt(0);
const COLON = ':'.charCodeAt(0);
const AT = '@'.charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
module.exports = function tokenizer(input, options = {}) {
    let css = input.css.valueOf();
    let ignore = options.ignoreErrors;
    let code, content, escape, next, quote;
    let currentToken, escaped, escapePos, n, prev;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
        return pos;
    }
    function unclosed(what) {
        throw input.error('Unclosed ' + what, pos);
    }
    function endOfFile() {
        return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
        if (returned.length) return returned.pop();
        if (pos >= length) return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch(code){
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED:
                next = pos;
                do {
                    next += 1;
                    code = css.charCodeAt(next);
                }while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
                currentToken = [
                    'space',
                    css.slice(pos, next)
                ];
                pos = next - 1;
                break;
            case OPEN_SQUARE:
            case CLOSE_SQUARE:
            case OPEN_CURLY:
            case CLOSE_CURLY:
            case COLON:
            case SEMICOLON:
            case CLOSE_PARENTHESES:
                {
                    let controlChar = String.fromCharCode(code);
                    currentToken = [
                        controlChar,
                        controlChar,
                        pos
                    ];
                    break;
                }
            case OPEN_PARENTHESES:
                prev = buffer.length ? buffer.pop()[1] : '';
                n = css.charCodeAt(pos + 1);
                if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(')', next + 1);
                        if (next === -1) {
                            if (ignore || ignoreUnclosed) {
                                next = pos;
                                break;
                            } else unclosed('bracket');
                        }
                        escapePos = next;
                        while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    }while (escaped);
                    currentToken = [
                        'brackets',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                } else {
                    next = css.indexOf(')', pos + 1);
                    content = css.slice(pos, next + 1);
                    if (next === -1 || RE_BAD_BRACKET.test(content)) currentToken = [
                        '(',
                        '(',
                        pos
                    ];
                    else {
                        currentToken = [
                            'brackets',
                            content,
                            pos,
                            next
                        ];
                        pos = next;
                    }
                }
                break;
            case SINGLE_QUOTE:
            case DOUBLE_QUOTE:
                quote = code === SINGLE_QUOTE ? "'" : '"';
                next = pos;
                do {
                    escaped = false;
                    next = css.indexOf(quote, next + 1);
                    if (next === -1) {
                        if (ignore || ignoreUnclosed) {
                            next = pos + 1;
                            break;
                        } else unclosed('string');
                    }
                    escapePos = next;
                    while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                        escapePos -= 1;
                        escaped = !escaped;
                    }
                }while (escaped);
                currentToken = [
                    'string',
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            case AT:
                RE_AT_END.lastIndex = pos + 1;
                RE_AT_END.test(css);
                if (RE_AT_END.lastIndex === 0) next = css.length - 1;
                else next = RE_AT_END.lastIndex - 2;
                currentToken = [
                    'at-word',
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            case BACKSLASH:
                next = pos;
                escape = true;
                while(css.charCodeAt(next + 1) === BACKSLASH){
                    next += 1;
                    escape = !escape;
                }
                code = css.charCodeAt(next + 1);
                if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                    next += 1;
                    if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                        while(RE_HEX_ESCAPE.test(css.charAt(next + 1)))next += 1;
                        if (css.charCodeAt(next + 1) === SPACE) next += 1;
                    }
                }
                currentToken = [
                    'word',
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            default:
                if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                    next = css.indexOf('*/', pos + 2) + 1;
                    if (next === 0) {
                        if (ignore || ignoreUnclosed) next = css.length;
                        else unclosed('comment');
                    }
                    currentToken = [
                        'comment',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                } else {
                    RE_WORD_END.lastIndex = pos + 1;
                    RE_WORD_END.test(css);
                    if (RE_WORD_END.lastIndex === 0) next = css.length - 1;
                    else next = RE_WORD_END.lastIndex - 2;
                    currentToken = [
                        'word',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    buffer.push(currentToken);
                    pos = next;
                }
                break;
        }
        pos++;
        return currentToken;
    }
    function back(token) {
        returned.push(token);
    }
    return {
        back,
        endOfFile,
        nextToken,
        position
    };
};

},{}],"g4XI7":[function(require,module,exports,__globalThis) {
'use strict';
let Warning = require("733eab9114813576");
class Result {
    get content() {
        return this.css;
    }
    constructor(processor, root, opts){
        this.processor = processor;
        this.messages = [];
        this.root = root;
        this.opts = opts;
        this.css = '';
        this.map = undefined;
    }
    toString() {
        return this.css;
    }
    warn(text, opts = {}) {
        if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) opts.plugin = this.lastPlugin.postcssPlugin;
        }
        let warning = new Warning(text, opts);
        this.messages.push(warning);
        return warning;
    }
    warnings() {
        return this.messages.filter((i)=>i.type === 'warning');
    }
}
module.exports = Result;
Result.default = Result;

},{"733eab9114813576":"45qiX"}],"45qiX":[function(require,module,exports,__globalThis) {
'use strict';
class Warning {
    constructor(text, opts = {}){
        this.type = 'warning';
        this.text = text;
        if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
        }
        for(let opt in opts)this[opt] = opts[opt];
    }
    toString() {
        if (this.node) return this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
        }).message;
        if (this.plugin) return this.plugin + ': ' + this.text;
        return this.text;
    }
}
module.exports = Warning;
Warning.default = Warning;

},{}],"4CPDt":[function(require,module,exports,__globalThis) {
/* eslint-disable no-console */ 'use strict';
let printed = {};
module.exports = function warnOnce(message) {
    if (printed[message]) return;
    printed[message] = true;
    if (typeof console !== 'undefined' && console.warn) console.warn(message);
};

},{}],"4xswO":[function(require,module,exports,__globalThis) {
'use strict';
let Document = require("6f637386b6c47461");
let LazyResult = require("9231cbb213c02603");
let NoWorkResult = require("b4049d0a3e372cb2");
let Root = require("1b2885e293f24ac6");
class Processor {
    constructor(plugins = []){
        this.version = '8.5.6';
        this.plugins = this.normalize(plugins);
    }
    normalize(plugins) {
        let normalized = [];
        for (let i of plugins){
            if (i.postcss === true) i = i();
            else if (i.postcss) i = i.postcss;
            if (typeof i === 'object' && Array.isArray(i.plugins)) normalized = normalized.concat(i.plugins);
            else if (typeof i === 'object' && i.postcssPlugin) normalized.push(i);
            else if (typeof i === 'function') normalized.push(i);
            else if (typeof i === 'object' && (i.parse || i.stringify)) throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
            else throw new Error(i + ' is not a PostCSS plugin');
        }
        return normalized;
    }
    process(css, opts = {}) {
        if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) return new NoWorkResult(this, css, opts);
        else return new LazyResult(this, css, opts);
    }
    use(plugin) {
        this.plugins = this.plugins.concat(this.normalize([
            plugin
        ]));
        return this;
    }
}
module.exports = Processor;
Processor.default = Processor;
Root.registerProcessor(Processor);
Document.registerProcessor(Processor);

},{"6f637386b6c47461":"GgWiE","9231cbb213c02603":"gFIGr","b4049d0a3e372cb2":"gCry2","1b2885e293f24ac6":"iXIGo"}],"gCry2":[function(require,module,exports,__globalThis) {
'use strict';
let MapGenerator = require("cac8a030679fbad6");
let parse = require("910fc79234e1506a");
const Result = require("96a14b02aaa17183");
let stringify = require("9be69d36458d582b");
let warnOnce = require("791f97720f0dd0ae");
class NoWorkResult {
    get content() {
        return this.result.css;
    }
    get css() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get messages() {
        return [];
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        if (this._root) return this._root;
        let root;
        let parser = parse;
        try {
            root = parser(this._css, this._opts);
        } catch (error) {
            this.error = error;
        }
        if (this.error) throw this.error;
        else {
            this._root = root;
            return root;
        }
    }
    get [Symbol.toStringTag]() {
        return 'NoWorkResult';
    }
    constructor(processor, css, opts){
        css = css.toString();
        this.stringified = false;
        this._processor = processor;
        this._css = css;
        this._opts = opts;
        this._map = undefined;
        let root;
        let str = stringify;
        this.result = new Result(this._processor, root, this._opts);
        this.result.css = css;
        let self = this;
        Object.defineProperty(this.result, 'root', {
            get () {
                return self.root;
            }
        });
        let map = new MapGenerator(str, root, this._opts, css);
        if (map.isMap()) {
            let [generatedCSS, generatedMap] = map.generate();
            if (generatedCSS) this.result.css = generatedCSS;
            if (generatedMap) this.result.map = generatedMap;
        } else {
            map.clearAnnotation();
            this.result.css = map.css;
        }
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        return Promise.resolve(this.result);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if (!('from' in this._opts)) warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this._css;
    }
    warnings() {
        return [];
    }
}
module.exports = NoWorkResult;
NoWorkResult.default = NoWorkResult;

},{"cac8a030679fbad6":"6bJvQ","910fc79234e1506a":"iPHqN","96a14b02aaa17183":"g4XI7","9be69d36458d582b":"3BuX9","791f97720f0dd0ae":"4CPDt"}],"kbE4Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector(".search");
    getQuery() {
        const query = this._parentEl.querySelector(".search_input").value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector(".search_input").value = "";
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kBQ4r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class ResultsView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No flashcard found for you. please try again!";
    _successMessage = "";
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewDefault.default).render(result, false)).join("");
    }
}
exports.default = new ResultsView();

},{"./View":"jSw21","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./previewView":"6tKHS"}],"6tKHS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewView extends (0, _viewDefault.default) {
    _parentElement = "";
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
      
          <li
            class=" ${String(this._data.id) == id ? "bg-grey-1/30" : ""}  list-none  hover:bg-grey-1/30 hover:scale-105 duration-500 ease-in-out"
          >
            <a href="#${this._data.id}" class="flex flex-row w-full h-full items-center px-[1rem] py-[0.75rem] @2xl:py-[1.5rem] @5xl:px-[2rem] @8xl:py-[2rem]">
              <figure class="flex-shrink-0">
                <img
                  src="${this._data.image}"
                  alt="${this._data.title}"
                  class="rounded-full object-cover w-[2.5rem] h-[2.5rem] @2xl:w-[3.5rem] @2xl:h-[3.5rem] @5xl:w-[4.5rem] @5xl:h-[4.5rem] @8xl:w-[6rem] @8xl:h-[6rem]"
                />
              </figure>
              <div class="flex flex-col pl-[1rem] @8xl:gap-[5px] relative w-full">
                <h4
                  class="text-red-700 text-sm @2xl:text-xl @5xl:text-2xl @8xl:text-4xl"
                >
                  ${this._data.title}
                </h4>
                <p class="text-xs @2xl:text-lg @5xl:text-xl @8xl:text-2xl">
                  ${this._data.publisher}
                </p>
                <div class="${this._data.key ? "" : "hidden"}  absolute right-0 bottom-0">
                <svg
                  class="w-[0.85rem] h-[0.85rem] text-regal-blue fill-current bg-grey-2 rounded-full p-[2px] @2xl:w-[1.2rem] @2xl:h-[1.2rem] @5xl:w-[1.5rem] @5xl:h-[1.5rem] @8xl:w-[2.2rem] @8xl:h-[2.2rem] @8xl:p-[5px] @8xl:translate-1"
                >
                  <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                </svg>
              </div>
              </div>
            </a>
          </li>
      `;
    }
}
exports.default = new PreviewView();

},{"./View":"jSw21","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","url:../../img/icons.svg":"fd0vu"}],"7NIiB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class PaginationView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".pagination");
    addhandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        const curPage = this._data.page;
        if (curPage === 1 && numPages > 1) return this._generateMarkupBtnNext(curPage);
        if (curPage < numPages) return `${this._generateMarkupBtnPrev(curPage)} ${this._generateMarkupBtnNext(curPage)}`;
        if (curPage === numPages && numPages > 1) return this._generateMarkupBtnPrev(curPage);
        return "";
    }
    _generateMarkupBtnPrev(currentPageNum) {
        return `
          <button data-goto=${currentPageNum - 1} class="btn--inline flex items-center justify-center bg-turquoise px-[5px] py-[2px] rounded-full text-regal-blue font-bold @5xl:px-[1rem] @5xl:py-[5px] @8xl:px-[2rem] @8xl:py-[1rem] hover:scale-105 duration-500 ease-in-out">
            <svg class="w-[1rem] h-[1rem] fill-current  @5xl:w-[1.5rem] @5xl:h-[1.5rem] @8xl:w-[2rem] @8xl:h-[2rem]">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span class="text-sm @5xl:text-lg @8xl:text-2xl">page ${currentPageNum - 1}</span>
          </button>
    `;
    }
    _generateMarkupBtnNext(currentPageNum) {
        return `
          <button data-goto=${currentPageNum + 1} class="btn--inline flex items-center justify-center bg-turquoise px-[5px] py-[2px] rounded-full text-regal-blue font-bold @5xl:px-[1rem] @5xl:py-[5px] @8xl:px-[2rem] @8xl:py-[1rem] hover:scale-105 duration-500 ease-in-out">
              <span class="text-sm @5xl:text-lg @8xl:text-2xl">page ${currentPageNum + 1}</span>
            <svg class="w-[1rem] h-[1rem] fill-current  @5xl:w-[1.5rem] @5xl:h-[1.5rem] @8xl:w-[2rem] @8xl:h-[2rem]">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </button>
    `;
    }
}
exports.default = new PaginationView();

},{"url:../../img/icons.svg":"fd0vu","./View":"jSw21","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1qGeA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class BookmarksView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".bookmarks_list");
    _errorMessage = "No bookmarks yet! find a nice flashcard and bookmark it :)";
    _successMessage = "";
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>(0, _previewViewDefault.default).render(bookmark, false)).join("");
    }
}
exports.default = new BookmarksView();

},{"./View":"jSw21","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./previewView":"6tKHS"}],"4oHrW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AddFlashcardView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".upload-form");
    _successMessage = "Flashcard was successfully uploaded :)";
    _window = document.querySelector(".add-flashcard-window");
    _overlay = document.querySelector(".overlay");
    _btnOpen = document.querySelector(".add-card-btn");
    _btnClose = document.querySelector(".close-btn");
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHanderUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    _generateMarkup() {
        return ``;
    }
}
exports.default = new AddFlashcardView();

},{"url:../../img/icons.svg":"fd0vu","./View":"jSw21","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5DuvQ","7dWZ8"], "7dWZ8", "parcelRequire442e", {}, "./", "/")

//# sourceMappingURL=dinoverse.4a59a05f.js.map
