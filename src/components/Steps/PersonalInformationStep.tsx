import { useFormContext } from "react-hook-form";
import { TimeLineSteps } from "../TimeLineSteps";

export function PersonalInformationStep() {
  const { register } = useFormContext();

  return (
    <div className="w-full flex flex-col text-center gap-4">
      <TimeLineSteps step={2} />
      <h2 className="text-xl font-semibold">Personal Information</h2>
      <p className="text-sm text-zinc-600">
        We need some information to contact you. Please fill in the fields
        below.
      </p>

      <div className="flex flex-col gap-4 px-6 mt-3">
        <label className="flex flex-col gap-2 text-left">
          <span className="text-xs text-zinc-600">Name:</span>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Full Name"
            className="px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </label>

        <label className="flex flex-col gap-2 text-left">
          <span className="text-xs text-zinc-600">Email:</span>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </label>

        <label className="flex flex-col gap-2 text-left">
          <span className="text-xs text-zinc-600">Phone:</span>
          <input
            {...register("phone", { required: true })}
            type="text"
            placeholder="Phone Number"
            className="px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </label>
      </div>
    </div>
  );
}
