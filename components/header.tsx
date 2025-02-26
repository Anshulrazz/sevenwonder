"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import logo from '../app/logo.png'
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { useRouter } from "next/navigation"
import { getContacts, getRequirment, loadUser } from "@/lib/actions/user"
import { dropdown } from "@heroui/react"

const navItems = [
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Rent/Sell Property", href: "/rent-sell/property" },
      { name: "Commercial Sales/Leasing", href: "/commercial-sales-leasing" },
      { name: "Residential Sales/Leasing", href: "/residential-sales-leasing" },
      { name: "Co-working / Business Centre", href: "/co-working-business-centre" },
      { name: "Property Management", href: "/p-management" },
      { name: "Property Valuations", href: "/p-valuation" },
      { name: "Investment Advisory", href: "/investment-advisory" },
      { name: "Home Loan", href: "/home-loan" },
      { name: "Mortgage", href: "/mortgage" }
    ]
  },
  {
    name: "Buy",
    href: "#",
    dropdown: [
      { name: "Commercial Properties", href: "/buy/commercial" },
      { name: "Residential Properties", href: "/buy/residential" }
    ]
  },
  {
    name: "Rent",
    href: "#",
    dropdown: [
      { name: "Commercial Properties", href: "/rent/commercial" },
      { name: "Residential Properties", href: "/rent/residential" }
    ]
  },
  {
    name: "Projects/Off-Plan",
    href: "#",
    dropdown: [
      { name: "Residential Projects", href: "/projects/residential" },
      { name: "Commercial Projects", href: "/projects/commercial" }
    ]
  },
  {
    name: "Media",
    href: "#",
    dropdown: [
      { name: "News & Insights", href: "/news" },
      { name: "Articles & Blogs", href: "/blog" },
      { name: "Guides", href: "/guides" },
      { name: "Market Reports", href: "/market-report" },
      { name: "Images/Videos Gallery", href: "/gallary" }
    ]
  },
  {
    name: "About Us",
    href: "#",
    dropdown: [
      { name: "Our Story", href: "/our-story" },
      { name: "Why Choose Us", href: "/about" },
      { name: "Our Team", href: "/our-team" },
      { name: "Careers", href: "/careers" }
    ]
  },
  {
    name: "Contact Us",
    href: "#",
    dropdown: [
      { name: "General Enquiry", href: "/contact" },
      { name: "List a Property", href: "/addworkspace" },
      { name: "Share Your Requirement", href: "/share-requirement" },
      { name: "Careers/Send Us Your CV", href: "/careers-cv" },
      { name: "Leave a Suggestion", href: "/leave-suggestion" }
    ]
  }
];


export function Header() {
  const { isAuthenticated, } = useAppSelector((state) => state.user);// Manage authentication state
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getContacts());
    dispatch(getRequirment());
  }, [dispatch]);
  const handleLogout = () => {
    fetch("http://localhost:4000/api/auth/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful logout
          router.push("/login");
          //refresh 
          window.location.reload();
        } else {
          // Handle error
          console.error("Logout failed");
        }
      })
      .catch((error) => {
        console.error("An error occurred during logout:", error);
      });
  }

  const handleLogin = () => {
    router.push("/login")
  }

  return (
    <header className="fixed z-50 w-full border-b bg-white/80 backdrop-blur-sm">

      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Seven Wonders" width={32} height={32} />
          <span className="text-xl font-semibold">Seven Wonders</span>
        </Link>

        <nav className="items-center hidden gap-4 lg:flex">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link href={item.href} className="py-2">
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="absolute left-0 invisible w-48 mt-2 transition-all duration-300 ease-in-out bg-white rounded-md shadow-lg opacity-0 ring-1 ring-black ring-opacity-5 group-hover:opacity-100 group-hover:visible">
                  <div className="py-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

        </nav>

        <div className="items-center hidden gap-4 lg:flex">
          <Link href="tel:+919015651565" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91-90-1565-1565</span>
          </Link>
          {isAuthenticated ? (
            <Button variant="outline" onClick={handleLogout}>
              LOGOUT
            </Button>
          ) : (
            <Button variant="outline" onClick={handleLogin}>
              LOGIN
            </Button>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link href={item.href} className="text-lg font-semibold">
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="flex flex-col gap-2 mt-2 ml-4">
                      {item.dropdown.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} className="text-sm text-gray-600">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-8">
              <Link href="tel:+91 90156 51565" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 90156 51565</span>
              </Link>
              {isAuthenticated ? (
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  LOGOUT
                </Button>
              ) : (
                <Button variant="outline" className="w-full" onClick={handleLogin}>
                  LOGIN
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
