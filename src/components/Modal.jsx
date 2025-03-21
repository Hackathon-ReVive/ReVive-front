import React from "react";
import Button from "./Button";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-white/30 z-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[400px] max-w-2xl relative">
        <div className="absolute top-4 right-4">
          <Button text="Cerrar" onClick={onClose} className="bg-red-500 hover:bg-red-700" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;