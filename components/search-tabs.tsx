"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import { useState } from "react"

const WORKSPACE_TYPES = ["Coworking Spaces", "Serviced Offices", "Virtual Offices", "Meeting Rooms", "Training Rooms"]

export function SearchTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Card className="max-w-3xl w-full bg-white/95 backdrop-blur">
      <div className="flex flex-wrap gap-2 p-4 border-b">
        {WORKSPACE_TYPES.map((type, index) => (
          <Button
            key={type}
            variant={activeTab === index ? "default" : "ghost"}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "bg-primary text-white" : ""}
          >
            {type}
          </Button>
        ))}
      </div>
      <div className="p-4 flex gap-4">
        <select className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
          <option>Select Location</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
        <Button className="bg-primary hover:bg-primary/90">
          <Search className="mr-2 h-4 w-4" />
          Show Workspaces
        </Button>
      </div>
    </Card>
  )
}

