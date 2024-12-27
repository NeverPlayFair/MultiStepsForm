import { useFormContext } from "react-hook-form";
import { TimeLineSteps } from "../TimeLineSteps";

export function AddressInformationStep() {
  const { register } = useFormContext();

  return (
    <div className="w-full flex flex-col text-center gap-4">
      <TimeLineSteps step={3} />
      <h2 className="text-xl font-semibold">Address Information</h2>
      <p className="text-sm text-zinc-600">
        We need some information to contact you and prepare a quote. 
      </p>

      <div className="flex flex-col gap-4 px-6 mt-3">
        <label className="flex flex-col gap-2 text-left">
          <span className="text-xs text-zinc-600">Country:</span>
          <input
            {...register("country", { required: true })}
            type="text"
            placeholder="Country"
            className="px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </label>

        <label className="flex flex-col gap-2 text-left">
          <span className="text-xs text-zinc-600">City:</span>
          <input
            {...register("city", { required: true })}
            type="text"
            placeholder="City"
            className="px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </label>

        <label className="flex flex-col gap-2 text-left">
          <span className="text-xs text-zinc-600">Address:</span>
          <input
            {...register("address", { required: true })}
            type="text"
            placeholder="Address"
            className="px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </label>

        {/* Additional Notes (opcjonalne) */}
        <label className="flex flex-col gap-1 text-left">
          <span className="text-xs text-gray-600">Additional Notes:</span>
          <textarea
            {...register("notes")}
            placeholder="Write any notes, questions, or requests here..."
            className="px-3 py-2 text-sm border rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       h-32 resize-none"
          />
          </label>
      </div>
    </div>
  );
}
