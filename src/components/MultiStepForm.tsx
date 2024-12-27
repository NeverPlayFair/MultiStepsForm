import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ServicesStep } from "./Steps/ServicesStep";
import { PersonalInformationStep } from "./Steps/PersonalInformationStep";
import { AddressInformationStep } from "./Steps/AddressInformationStep";

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [sendSuccess, setSendSuccess] = useState(false);

  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      service: "website-design",
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      notes: "",
    },
  });

  const steps = [
    <ServicesStep />,
    <PersonalInformationStep />,
    <AddressInformationStep />,
  ];


  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };


  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    setSendSuccess(true);
  };


  if (sendSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="max-w-lg w-full bg-white p-6 rounded shadow-md text-center">
          <h1 className="text-2xl font-bold text-pink-500 mb-3">
            Form Submitted Successfully
          </h1>
          <p className="text-gray-600">
            Thank you for your submission. We will get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-50 to-purple-50 flex justify-center items-start pt-8 pb-16">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        <h1 className="text-3xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        What service do you need?
        </h1>
        <h4 className="text-3x10 font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Tell us what you need! Briefly describe the service or assistance you're looking for below.
        </h4>
        

        <div className="bg-white rounded shadow-md p-6 sm:p-8">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div>{steps[currentStep - 1]}</div>

 
              <div className="flex items-center justify-center gap-4 mt-4">
        
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-5 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-full
                               hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                )}
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-5 py-2 text-sm font-medium rounded-full text-white
                               bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-5 py-2 text-sm font-medium rounded-full text-white
                               bg-pink-500 hover:bg-pink-600 transition-colors"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
