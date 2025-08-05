import { useForm } from "react-hook-form";
import ModalLayout from "../../ModalLayout";
import ModalHeader from "../../ModalHeader";


const AddBudgetModal = ({ isOpen, onClose, onSave }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newBudget = {
      name: data.name,
      from: parseFloat(data.from),
      to: parseFloat(data.to),
    };

    onSave(newBudget);
    reset();
    onClose();
  };

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <ModalHeader
        title="Add New Budget"
        subTitle="Define a new budget allocation for your plan"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#FDF0FC] p-4 rounded-lg space-y-4">
        <div>
          <label className="label-class">Budget Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="e.g. Lunch Budget"
            className="form-input"
          />
        </div>

        <div>
          <label className="label-class">Starting Budget ($)</label>
          <input
            {...register("from", { required: true })}
            type="number"
            placeholder="e.g. 10"
            className="form-input"
          />
        </div>

        <div>
          <label className="label-class">Highest Budget ($)</label>
          <input
            {...register("to", { required: true })}
            type="number"
            placeholder="e.g. 50"
            className="form-input"
          />
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-[#4796B5] rounded-lg text-white text-sm font-semibold"
          >
            Save Budget
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default AddBudgetModal;
