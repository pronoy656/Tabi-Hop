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
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-6"
    >
      <div className="bg-white rounded-2xl p-12 w-[90%] max-w-3xl shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
