import { X } from "lucide-react"; // You can use "X" instead of "Cross" for clarity
import { useEffect } from "react";

const ModalLayout = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 md:p-6 p-3"
    >
      <div className="relative bg-white rounded-2xl p-6 md:p-12 w-[90%] max-w-3xl shadow-xl">
      
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-red-500 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {children}
      </div>
    </div>
  );
};

export default ModalLayout;

