"use client";
import { useEffect, useState } from "react";

export default function useToast() {
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const ToastMessage = () => {
    if (!open || !!!message.length) {
      return null;
    }
    return (
      <div className="toast toast-top toast-center" style={{ minWidth: 220 }}>
        <div className="alert alert-info">
          <div>
            <span>{message}</span>
          </div>
        </div>
      </div>
    );
  };

  return {
    fireMessage: (message: string) => {
      setMessage(message);
      setOpen(true);
    },
    ToastMessage,
  };
}
