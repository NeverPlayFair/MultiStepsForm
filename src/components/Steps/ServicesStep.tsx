import { useFormContext } from "react-hook-form";
import { TimeLineSteps } from "../TimeLineSteps";
import {
  ComputerDesktopIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export function ServicesStep() {
  const { watch, setValue } = useFormContext();
  const selectedService = watch("service");

  const services = [
    {
      id: "website-design",
      title: "Website Design",
      icon: ComputerDesktopIcon,
    },
    {
      id: "ui-design",
      title: "UI Design",
      icon: PencilSquareIcon,
    },
    {
      id: "development",
      title: "Web Development",
      icon: CodeBracketIcon,
    },
    {
      id: "support",
      title: "Support",
      icon: LifebuoyIcon,
    },
  ];

  return (
    <div className="flex flex-col text-center gap-4 w-full">
      <TimeLineSteps step={1} />


      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedService === service.id;

          return (
            <div
              key={service.id}
              onClick={() => setValue("service", service.id)}
              className={`cursor-pointer w-40 h-40 border rounded-lg flex flex-col justify-center items-center p-4 shadow-sm transition-all 
                ${
                  isSelected
                    ? "border-purple-500 bg-purple-50 scale-105"
                    : "border-gray-200 bg-white hover:scale-105 hover:shadow-md"
                }
              `}
            >
              <Icon
                className={`mb-2 ${isSelected ? "text-purple-600" : "text-gray-600"}`}
                width={36}
                height={36}
                aria-hidden="true"
              />
              <span className="text-sm text-gray-800 font-medium">
                {service.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
