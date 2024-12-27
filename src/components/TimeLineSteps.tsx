export function TimeLineSteps({ step }: { step: number }) {
  const steps = [1, 2, 3];

  return (
    <div className="flex items-center justify-center my-6">
      {steps.map((item, index) => {
        const isActive = step === item;
        const isCompleted = step > item;

        return (
          <div key={item} className="flex items-center">
            {/* Kółko z numerem kroku */}
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2
                ${
                  isCompleted
                    ? // Kroki ukończone - gradient (róż → fiolet) i białe litery
                      "bg-gradient-to-r from-pink-500 to-purple-500 border-transparent text-white"
                    : isActive
                    ? // Krok aktywny - gradient (fiolet → róż) i białe litery
                      "bg-gradient-to-r from-purple-500 to-pink-500 border-transparent text-white font-bold"
                    : // Kroki nieaktywne - jasnoszare tło
                      "bg-gray-200 border-gray-200 text-gray-600"
                }
              `}
            >
              {item}
            </div>
            {/* Kreska pomiędzy kółkami (ostatni krok jej nie ma) */}
            {index < steps.length - 1 && (
              <div
                className={`w-20 h-[2px] ${
                  isCompleted
                    ? // Jeżeli krok ukończony, też ma gradient
                      "bg-gradient-to-r from-pink-500 to-purple-500"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
