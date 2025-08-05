import ModalLayout from "../ModalLayout";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, title }) => {
  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <div className="bg-[#FDF0FC] p-6 rounded-lg space-y-4 text-center">
        <h2 className="text-xl font-bold text-[#1F4F53]">
          Confirm Delete
        </h2>
        <p className="text-sm text-gray-600">
          Are you sure you want to delete <strong>{title}</strong>?
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-500 text-white text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ConfirmDeleteModal;
