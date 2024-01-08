var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  LYLA_ERROR: () => import_core.LYLA_ERROR,
  LylaAbortController: () => import_core.LylaAbortController,
  createLyla: () => createLyla,
  isLylaError: () => isLylaError,
  lyla: () => lyla
});
module.exports = __toCommonJS(src_exports);

// src/reexports.ts
var import_core = require("@lylajs/core");

// src/instance.ts
var import_core3 = require("@lylajs/core");

// src/adapter.ts
var import_core2 = require("@lylajs/core");
var adapter = ({
  url,
  method,
  headers,
  body,
  responseType,
  onResponse,
  onNetworkError
  // Not used, just leave it here
  // json,
  // withCredentials,
  // onDownloadProgress,
  // onUploadProgress,
}) => {
  const requestTask = uni.request({
    url,
    method,
    header: headers,
    //@ts-ignore
    data: isJSON(body) ? JSON.parse(body) : body,
    responseType,
    // https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
    // Docs said if it's not json, response data won't be transformed to json.
    dataType: "json",
    fail(res) {
      onNetworkError(res);
    },
    success(res) {
      onResponse(
        {
          body: res.data,
          status: res.statusCode,
          headers: (0, import_core2.headersKeyToLowerCase)(res.header)
        },
        res
      );
    }
  });
  return {
    abort() {
      requestTask.abort();
    }
  };
};
function isJSON(str) {
  if (typeof str === "string" && str) {
    if (Object.prototype.toString.call(JSON.parse(str)) === "[object Object]") {
      return true;
    }
    return false;
  }
  return false;
}

// src/instance.ts
var { lyla, isLylaError } = (0, import_core3.createLyla)(adapter, {
  context: void 0
});
var createLyla = (options, ...overrides) => {
  return (0, import_core3.createLyla)(adapter, options, ...overrides);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LYLA_ERROR,
  LylaAbortController,
  createLyla,
  isLylaError,
  lyla
});
//# sourceMappingURL=index.cjs.map