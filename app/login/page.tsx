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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { useAppDispatch } from "@/hooks/hooks"
import { loginUser } from "@/lib/actions/user"
import { FcGoogle } from "react-icons/fc" // Google icon for button
import axios from "axios"
export default function LoginPage() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const router = useRouter()
  
  // State for forgot password popup
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)
  const [resetEmail, setResetEmail] = useState("")
  const [resetEmailSent, setResetEmailSent] = useState(false)
  const [resetError, setResetError] = useState("")

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

  const handleForgotPasswordClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setResetEmail(formData.email) // Pre-fill with email from login form if available
    setResetEmailSent(false)
    setResetError("")
    setForgotPasswordOpen(true)
  }

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResetError("")
    
    if (!resetEmail) {
      setResetError("Please enter your email address")
      return
    }
    
    try {
      const response = await axios.post("http://localhost:4000/api/auth/forgot-password", { email: resetEmail })
      setResetEmailSent(true)
      // Reset form is kept open to show success message
    } catch (err) {
      setResetError("Failed to send reset email. Please try again.")
    }
  }

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center p-4 min-h-screen bg-gray-0">
        <Link href="/" className="flex gap-2 items-center mb-8">
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
            <Button onClick={handleGoogleLogin} variant="outline" className="flex gap-2 justify-center items-center w-full">
              <FcGoogle size={20} /> Continue with Google
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <button 
              onClick={handleForgotPasswordClick} 
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </button>
            <Link href="/register" className="text-sm text-primary hover:underline">
              Create an account
            </Link>
          </CardFooter>
        </Card>

        {/* Forgot Password Dialog */}
        <Dialog open={forgotPasswordOpen} onOpenChange={setForgotPasswordOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Reset your password</DialogTitle>
              <DialogDescription>
                Enter your email address and we'll send you a link to reset your password.
              </DialogDescription>
            </DialogHeader>
            
            {resetEmailSent ? (
              <div className="py-4 text-center">
                <p className="mb-2 text-green-600">✓ Reset email sent!</p>
                <p className="text-sm text-gray-600">
                  Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
                </p>
              </div>
            ) : (
              <form onSubmit={handleResetSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reset-email">Email</Label>
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="you@example.com"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                  />
                </div>
                {resetError && <p className="text-sm text-red-500">{resetError}</p>}
                <DialogFooter className="sm:justify-between">
                  <Button type="button" variant="outline" onClick={() => setForgotPasswordOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Send reset link
                  </Button>
                </DialogFooter>
              </form>
            )}
            
            {resetEmailSent && (
              <DialogFooter>
                <Button type="button" onClick={() => setForgotPasswordOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}