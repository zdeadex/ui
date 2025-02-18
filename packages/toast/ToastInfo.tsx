import { toast, ToastOptions, ToastContent } from 'react-toastify'
import { TOASTS_INFO_OPTIONS } from './toastsDefaultOptions'

export function ToastInfo(content: ToastContent, options?: ToastOptions) {
  return toast.info(content, { ...TOASTS_INFO_OPTIONS, ...(options || {}) })
}
