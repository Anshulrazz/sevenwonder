"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import logo from '../logo.png'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Header } from "@/components/header"
import { useAppDispatch } from "@/hooks/hooks"
import { loginUser } from "@/lib/actions/user"
import { FcGoogle } from "react-icons/fc" // Google icon for button

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password")
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push("/")
      dispatch(loginUser(formData))
    } catch (err) {
      setError("Invalid email or password")
    }
  }

  const handleGoogleLogin = async () => {
    try {
      // Here you would integrate Google authentication logic
      console.log("Continue with Google clicked")
    } catch (err) {
      setError("Google login failed")
    }
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-0">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Image src={logo} alt="Seven Wonders" width={32} height={32} />
          <span className="text-2xl font-semibold">Seven Wonders</span>
        </Link>

        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login to Seven Wonders</CardTitle>
            <CardDescription>Enter your email and password to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-2 text-sm text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <Button onClick={handleGoogleLogin} variant="outline" className="w-full flex items-center justify-center gap-2">
              <FcGoogle size={20} /> Continue with Google
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/forgot-password" className="text-sm text-primary ">
              Forgot password?
            </Link>
            <Link href="/register" className="text-sm text-primary ">
              Create an account
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
