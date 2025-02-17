import React from 'react'
import { Button } from './ui/button'

export default function Investwihus() {
  return (
    <div className="container flex flex-col items-center justify-between py-12 mx-auto bg-gray-100 rounded md:flex-row">
      <div className="w-full mb-6 md:w-1/2 md:mb-0">
        <h1 className="mb-4 text-4xl font-bold text-center md:text-left">Invest in your future with Seven Wonder</h1>
        <p className="mb-4 text-lg text-center md:text-left">Discover exclusive property opportunities and expert guidance with Seven Wonder</p>
      </div>
      <div className="w-full text-center md:w-1/2 md:text-right">
        <p className="mb-2 text-2xl font-semibold">Call Us on: +91-9015651565</p>
        <p className="mb-4 text-lg">Get in touch for a personal consultation</p>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}
