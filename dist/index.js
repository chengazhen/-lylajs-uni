// src/reexports.ts
import { LYLA_ERROR, LylaAbortController } from "@lylajs/core";

// src/instance.ts
import { createLyla as coreCreateLyla } from "@lylajs/core";

// src/adapter.ts
import { headersKeyToLowerCase } from "@lylajs/core";
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
          headers: headersKeyToLowerCase(res.header)
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
var { lyla, isLylaError } = coreCreateLyla(adapter, {
  context: void 0
});
var createLyla = (options, ...overrides) => {
  return coreCreateLyla(adapter, options, ...overrides);
};
export {
  LYLA_ERROR,
  LylaAbortController,
  createLyla,
  isLylaError,
  lyla
};
//# sourceMappingURL=index.js.map