import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useEffect, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()
  const toastRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (toastRef.current) {
      toastRef.current.focus()
    }
  }, [toasts])

  return (
    <ToastProvider duration={5400000}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} tabIndex={-1}>
            <div className="w-full">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
