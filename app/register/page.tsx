"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"
import logo from '../logo.png'
import { useAppDispatch } from "@/hooks/hooks"
import { registerUser } from "@/lib/actions/user"
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";


export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    try {
      // Here you would typically make an API call to register the user
      // For this example, we'll just simulate a successful registration
      await new Promise((resolve) => setTimeout(resolve, 1000))
      dispatch(registerUser(formData))
      router.push("/")
    } catch (err) {
      setError("An error occurred during registration")
    }
  }
  
  const handleGoogleLoginSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);
    if (credentialResponse?.credential) {
      const decoded: any = jwtDecode(credentialResponse.credential);
      console.log(decoded);
      const { name, email } = decoded;
      router.push("/");
    } else {
      setError("Failed to retrieve Google user information.");
    }
  };
  

  const handleGoogleLoginError = () => {
    setError("Google sign-in was unsuccessful. Please try again later.");
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 py-24 bg-gray-0">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Image src={logo} alt="Seven Wonders" width={32} height={32} />
          <span className="text-2xl font-semibold">Seven Wonders</span>
        </Link>

        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your details to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-4 flex flex-col items-center">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginError} />
              </Button>
              <span className="text-gray-600">or</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-primary">
                Login here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
function jwt_decode(credential: any) {
  throw new Error("Function not implemented.")
}

