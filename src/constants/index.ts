export enum HttpCode {
  CODE_200 = 200,
  CODE_404 = 404,
  CODE_400 = 400,
  CODE_403 = 403,
  CODE_401 = 401,
  CODE_500 = 500
}

export const {
  CODE_200: HTTP_CODE_200,
  CODE_404: HTTP_CODE_404,
  CODE_400: HTTP_CODE_400,
  CODE_403: HTTP_CODE_403,
  CODE_401: HTTP_CODE_401,
  CODE_500: HTTP_CODE_500,
} = HttpCode;

// enum key for local storage
export enum LocalStorageKey {
  TOKEN = 'token',
  ENDPOINT = 'endpoint'
}

export const {
  TOKEN: TOKEN,
  ENDPOINT: ENDPOINT,
} = LocalStorageKey;

export const TIME_REQUEST_TIMEOUT = 60000

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}


