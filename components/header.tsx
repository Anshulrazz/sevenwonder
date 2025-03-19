"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Phone, Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import logo from '../app/logo.png'
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { useRouter } from "next/navigation"
import { getContacts, getRequirment, loadUser } from "@/lib/actions/user"

const navItems = [
  {
    name: "About Us",
    href: "#",
    dropdown: [
      { name: "Our Story", href: "/our-story" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" }
    ]
  },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Rent/Sell Property", href: "/rent-sell/property" },
      { name: "Commercial Sales/Leasing", href: "/commercail-salse-lease" },
      { name: "Residential Sales/Leasing", href: "/residential-salse-lease" },
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
      { name: "Commercial Properties", href: "/buy-commercial" },
      { name: "Residential Properties", href: "/buy-residential" }
    ]
  },
  {
    name: "Rent",
    href: "#",
    dropdown: [
      { name: "Commercial Properties", href: "/rent-commercial" },
      { name: "Residential Properties", href: "/rent-residential" }
    ]
  },
  {
    name: "Projects",
    href: "#",
    dropdown: [
      { name: "Residential Projects", href: "/projects-residential" },
      { name: "Commercial Projects", href: "/projects-commercial" }
    ]
  },
  {
    name: "Media",
    href: "#",
    dropdown: [
      { name: "News & Insights", href: "/news" },
      { name: "Articles & Blogs", href: "/blog" },
      { name: "Market Reports", href: "/market-report" },
      { name: "Images/Videos Gallery", href: "/gallary" }
    ]
  },
  {
    name: "Contact Us",
    href: "#",
    dropdown: [
      { name: "General Enquiry", href: "/contact" },
      { name: "List a Property", href: "/add-workspace" },
      { name: "Share Your Requirement", href: "/share-requirment" },
      { name: "Careers/Send Us Your CV", href: "/careers-cv" },
    ]
  }
];

export function Header() {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [openItems, setOpenItems] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getContacts());
    dispatch(getRequirment());
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const handleLogout = () => {
    fetch("https://api.sevenwonder.in/api/auth/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          router.push("/login");
          window.location.reload();
        } else {
          console.error("Logout failed");
        }
      })
      .catch((error) => {
        console.error("An error occurred during logout:", error);
      });
  }

  const handleLogin = () => {
    router.push("/login");
  }

  const toggleDropdown = (itemName) => {
    setOpenItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  }

  return (
    <header className={`fixed z-50 w-full border-b transition-all duration-300 ${
      isScrolled ? "shadow-sm backdrop-blur-md bg-white/90" : "backdrop-blur-sm bg-white/80"
    }`}>
      <div className="container flex justify-between items-center px-4 mx-auto h-16">
        <Link href="/" className="flex gap-2 items-center">
          <Image src={logo} alt="Seven Wonders" width={32} height={32} className="object-contain" />
          <span className="text-lg font-semibold md:text-xl">Seven Wonders</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-4 items-center lg:flex">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link 
                href={item.href} 
                className="flex gap-1 items-center px-1 py-2 text-gray-700 transition-colors hover:text-black"
              >
                {item.name}
                <ChevronDown className="w-4 h-4 opacity-60 transition-opacity group-hover:opacity-100" />
              </Link>
              {item.dropdown && (
                <div className="absolute left-0 invisible z-50 mt-2 w-56 bg-white rounded-md ring-1 shadow-lg opacity-0 transition-all duration-200 ease-in-out ring-black/5 group-hover:opacity-100 group-hover:visible">
                  <div className="overflow-hidden py-1 rounded-md">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
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

        {/* Desktop Call/Login */}
        <div className="hidden gap-4 items-center lg:flex">
          <Link href="tel:+919015651565" className="flex gap-2 items-center text-gray-700 transition-colors hover:text-black">
            <Phone className="w-4 h-4" />
            <span>+91-90-1565-1565</span>
          </Link>
          {isAuthenticated ? (
            <Button variant="outline" onClick={handleLogout} className="hover:bg-gray-100">
              LOGOUT
            </Button>
          ) : (
            <Button variant="outline" onClick={handleLogin} className="hover:bg-gray-100">
              LOGIN
            </Button>
          )}
        </div>

        {/* Mobile Login Button */}
        <div className="flex gap-2 items-center lg:hidden">
          <Link href="tel:+919015651565" className="flex justify-center items-center w-8 h-8 text-gray-700">
            <Phone className="w-5 h-5" />
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex gap-2 items-center">
                  <Image src={logo} alt="Seven Wonders" width={24} height={24} />
                  <span>Seven Wonders</span>
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col gap-1 mt-6">
                {navItems.map((item) => (
                  <div key={item.name} className="py-1 border-b border-gray-100">
                    <div 
                      className="flex justify-between items-center py-2 cursor-pointer"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.dropdown && (
                        openItems[item.name] ? 
                          <ChevronDown className="w-4 h-4" /> : 
                          <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                    
                    {item.dropdown && openItems[item.name] && (
                      <div className="flex flex-col gap-1 pl-2 mt-1 mb-2 ml-4 border-l border-gray-100">
                        {item.dropdown.map((subItem) => (
                          <Link 
                            key={subItem.name} 
                            href={subItem.href} 
                            className="py-2 text-sm text-gray-600 hover:text-black"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="flex flex-col gap-4 mt-8">
                <Link href="tel:+919015651565" className="flex gap-2 justify-center items-center py-2 rounded-md border">
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
      </div>
    </header>
  )
}