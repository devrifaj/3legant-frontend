"use client";

import { CancelIcon } from "@/icons";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: "top" | "left" | "right";
  children: React.ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  position = "left",
  children,
}: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const overlayClass = `fixed inset-0 z-50 bg-black/50 animate-fade-in`;

  // Position and animation for modal box
  let modalClass = "bg-white shadow-lg relative overflow-auto";

  if (position === "left") {
    modalClass +=
      " top-0 bottom-0 left-0 h-full mr-auto my-auto max-w-[345px] animate-slide-from-left";
  } else if (position === "right") {
    modalClass +=
      " top-0 bottom-0 right-0 h-full ml-auto my-auto lg:max-w-[415px] max-w-[345px] animate-slide-from-right";
  } else {
    modalClass += " top-0 left-0 right-0 w-full  animate-menu-open";
  }

  return createPortal(
    <div className={overlayClass} onClick={onClose}>
      <div className={modalClass} onClick={(e) => e.stopPropagation()}>
        {/* if position in left or right then close button */}
        {position === "left" || position === "right" ? (
          <button onClick={onClose} className="absolute top-6 right-6">
            <CancelIcon className="text-neutral-4" />
          </button>
        ) : null}

        {/* Modal Content */}
        <div className="p-6 h-full">
          {/* if position in top then close button */}
          {position === "top" && (
            <button
              onClick={onClose}
              className="absolute top-0 bottom-0 right-1/12 sm:right-1/6 lg:right-1/4 text-gray-500 hover:text-gray-700 text-xl"
            >
              <CancelIcon className="text-neutral-4" />
            </button>
          )}

          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
