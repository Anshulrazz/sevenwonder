import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">About Seven Wonders</h3>
            <p className="mb-4 text-sm text-gray-600">
              Seven Wonders is India's largest marketplace for coworking spaces, serviced offices, and virtual offices. Find and
              book the best workspace for your needs.
            </p>
            <div className="flex space-x-4">
              <Link href="" className="text-gray-600 hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="" className="text-gray-600 hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="" className="text-gray-600 hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="" className="text-gray-600 hover:text-primary">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Coworking Spaces
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Serviced Offices
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Virtual Offices
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                  Meeting Rooms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <p className="mb-2 text-sm text-gray-600"><b>Regd. off.</b>G-20, 3rd Floor, Preet Vihar, Vikas Marg, New Delhi-110092 </p>
            <p className="mb-2 text-sm text-gray-600"><b>Corp. off.</b>Plot No. A-61, Sector-16, Noida Gautam Buddha Nagar (UP)-201301</p>
            <p className="mb-2 text-sm text-gray-600">Phone: +91 90156 51565</p>
            <p className="text-sm text-gray-600">Email: sales@sevenwonder.in</p>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Seven Wonders Promoters & Developers Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

