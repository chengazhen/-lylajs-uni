import * as _lylajs_core from '@lylajs/core';
import { LylaAdapterMeta as LylaAdapterMeta$1, Lyla as Lyla$1, LylaRequestOptions as LylaRequestOptions$1, LylaResponse as LylaResponse$1, LylaResponseError as LylaResponseError$1, LylaNonResponseError as LylaNonResponseError$1, LylaError as LylaError$1, LylaProgress as LylaProgress$1, LylaRequestOptionsWithContext as LylaRequestOptionsWithContext$1 } from '@lylajs/core';
export { LYLA_ERROR, LylaAbortController } from '@lylajs/core';

type ResponseDetail = {
    statusCode: number;
    header: Record<string, string>;
    data: string | object | ArrayBuffer;
    cookies: string[];
    profile?: {
        redirectStart: number;
        redirectEnd: number;
        fetchStart: number;
        domainLookupStart: number;
        domainLookupEnd: number;
        connectStart: number;
        connectEnd: number;
        SSLconnectionStart: number;
        SSLconnectionEnd: number;
        requestStart: number;
        requestEnd: number;
        responseStart: number;
        responseEnd: number;
        rtt: number;
        estimate_nettype: number;
        httpRttEstimate: number;
        transportRttEstimate: number;
        downstreamThroughputKbpsEstimate: number;
        throughputKbps: number;
        peerIP: string;
        port: number;
        socketReused: boolean;
        sendBytesCount: number;
        receivedBytedCount: number;
        protocol: string;
    };
};
type NetworkErrorDetail = {
    errno: number;
    errMsg: string;
};
type UniRequestMethod = 'GET' | 'POST' | 'PUT' | 'OPTIONS' | 'HEAD' | 'DELETE' | 'TRACE' | 'CONNECT' | 'get' | 'post' | 'put' | 'options' | 'head' | 'delete' | 'trace' | 'connect';

interface LylaAdapterMeta extends LylaAdapterMeta$1 {
    method: UniRequestMethod;
    networkErrorDetail: NetworkErrorDetail;
    responseDetail: ResponseDetail;
    responseType: 'arraybuffer' | 'text';
    requestBody: string | ArrayBuffer | Record<string, unknown>;
    progressDetail: never;
    originalRequest: never;
}

type Lyla<C = undefined> = Lyla$1<C, LylaAdapterMeta>;
type LylaRequestOptions<C = undefined> = LylaRequestOptions$1<C, LylaAdapterMeta>;
type LylaRequestOptionsWithContext<C = undefined> = LylaRequestOptionsWithContext$1<C, LylaAdapterMeta>;
type LylaResponse<T = any, C = undefined> = LylaResponse$1<T, C, LylaAdapterMeta>;
type LylaResponseError<C = undefined> = LylaResponseError$1<C, LylaAdapterMeta>;
type LylaNonResponseError<C = undefined> = LylaNonResponseError$1<C, LylaAdapterMeta>;
type LylaError<C = undefined> = LylaError$1<C, LylaAdapterMeta>;
type LylaProgress = LylaProgress$1<LylaAdapterMeta>;

declare const lyla: _lylajs_core.Lyla<any, LylaAdapterMeta>;
declare const isLylaError: (e: unknown) => e is _lylajs_core.LylaError<any, LylaAdapterMeta>;
declare const createLyla: <C>(options: LylaRequestOptionsWithContext<C>, ...overrides: LylaRequestOptions<C>[]) => {
    isLylaError(e: unknown): e is _lylajs_core.LylaError<C, LylaAdapterMeta>;
    lyla: _lylajs_core.Lyla<C, LylaAdapterMeta>;
};

export { type Lyla, type LylaAdapterMeta, type LylaError, type LylaNonResponseError, type LylaProgress, type LylaRequestOptions, type LylaResponse, type LylaResponseError, createLyla, isLylaError, lyla };
