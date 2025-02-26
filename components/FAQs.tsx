import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the hiring process like?",
    answer:
      "Our hiring process typically involves an initial application review, a phone screening, one or more interviews (which may include a skills assessment), and a final decision. The exact steps may vary depending on the position.",
  },
  {
    question: "Do you offer remote work options?",
    answer:
      "Yes, we offer flexible work arrangements, including remote work options for many positions. The specific arrangements depend on the role and team requirements.",
  },
  {
    question: "What benefits do you offer?",
    answer:
      "We offer a comprehensive benefits package that includes health insurance, retirement plans, paid time off, professional development opportunities, and more. Specific benefits may vary based on position and location.",
  },
  {
    question: "How long does the application process usually take?",
    answer:
      "The application process duration can vary depending on the position and the number of applicants. Typically, you can expect to hear back from us within 2-3 weeks after submitting your application.",
  },
  {
    question: "What opportunities are there for career growth?",
    answer:
      "We are committed to the professional development of our employees. We offer various training programs, mentorship opportunities, and encourage internal promotions to support your career growth.",
  },
]

export default function FAQs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

