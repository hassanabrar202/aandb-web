import {AiOutlineDashboard} from "react-icons/ai";

export const GStateItem = ({
  value,
  label,
}) => {
  return (
    <div className="w-full p-4 rounded-xl border flex items-center gap-6">
      <div className="p-4 rounded-xl w-max">
        <AiOutlineDashboard className="font-bold" />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <p className="text-secondary text-base font-medium">{label}</p>
        <p className="text-xl text-brandPrimary font-bold">
            {value}
        </p>
      </div>
    </div>
  );
};
