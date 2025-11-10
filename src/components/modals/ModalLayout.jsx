import { X } from 'lucide-react'; // You can use "X" instead of "Cross" for clarity
import { useEffect } from 'react';

const ModalLayout = ({ children, isOpen, onClose, onEdit }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
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
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 md:p-6 p-3 "
    >
      <div className="relative bg-white rounded-2xl p-6 md:p-12 w-[90%] max-w-3xl shadow-xl max-h-[90vh] noscrollbar overflow-y-auto">
        <div className="absolute top-5 right-5 flex gap-3">
          <button
            onClick={onEdit}
            className="text-gray-600 hover:text-[#6E67D5] transition"
            title="Edit"
            style={{ display: onEdit ? 'block' : 'none' }}
          >
            <img src="/edit-pencil.png" className="w-6 h-6" alt="Edit" />
          </button>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 transition"
            title="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
