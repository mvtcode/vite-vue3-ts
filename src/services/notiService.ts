import { ToastType } from '@/constants';
export function setNotifySuccess(message: string) {
  ElNotification({
    title: "Success",
    message: message,
    type: ToastType.SUCCESS,
  });
}

export function setNotifyError(message: string) {
  ElNotification({
    title: "Error",
    message: message,
    type: ToastType.ERROR,
  });
}

export function setNotifyInfo(message: string) {
  ElNotification({
    title: "Info",
    message: message,
    type: ToastType.INFO,
  });
}

export function setNotifyWarning(message: string) {
  ElNotification({
    title: "Warning",
    message: message,
    type: ToastType.WARNING,
  });
}
