import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HowToApply() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How to Apply</h2>
        <div className="max-w-2xl mx-auto">
          <ol className="list-decimal list-inside mb-8 space-y-4">
            <li>Review our open positions and find the role that matches your skills and interests.</li>
            <li>Click the "Apply Now" button on the job listing to start your application.</li>
            <li>Fill out the application form, including your personal information and work experience.</li>
            <li>Upload your resume and any additional required documents.</li>
            <li>Submit your application and wait for our HR team to review it.</li>
            <li>If your profile matches our requirements, we'll contact you for an interview.</li>
          </ol>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md" id="apply">
            <h3 className="text-xl font-semibold mb-4">Submit Your CV for Future Opportunities</h3>
            <form className="space-y-4">
              <Input type="text" placeholder="Full Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" />
              <Textarea placeholder="Brief introduction or cover letter" rows={4} />
              <Input type="file" accept=".pdf,.doc,.docx" required />
              <Button type="submit">Submit CV</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

