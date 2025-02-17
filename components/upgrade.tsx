'use client'

export default function Upgrade() {
const steps = [
    { number: "01", title: "Search For a Space" },
    { number: "02", title: "Arrange a Viewing" },
    { number: "03", title: "Finalize Your Space" },
    { number: "04", title: "Move In" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-3xl font-bold text-center">
          Upgrade your office space in <span className="text-primary">4</span> simple steps
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Dotted connection lines */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-px">
            <div className="relative h-full">
              {steps.map(
                (_, index) =>
                  index < steps.length - 1 && (
                    <div
                      key={index}
                      className="absolute -translate-y-1/2 top-1/2"
                      style={{
                        left: `${(index * 100) / (steps.length - 1)}%`,
                        width: `${100 / (steps.length - 1)}%`,
                      }}
                    >
                      <svg
                        className="w-full h-8 text-gray-300"
                        viewBox="0 0 200 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 22C40 22 60 2 100 2C140 2 160 22 198 22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </div>
                  ),
              )}
            </div>
          </div>

          {/* Steps */}
          <div className="relative grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-4 text-lg font-semibold text-white bg-black rounded-full w-14 h-14">
                  {step.number}
                </div>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

