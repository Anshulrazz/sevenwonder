import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Pagination({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center items-center gap-2 ${className}`}>
      <Button variant="outline" size="icon">
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button variant="outline" size="sm">
        1
      </Button>
      <Button variant="outline" size="sm">
        2
      </Button>
      <Button variant="outline" size="sm">
        3
      </Button>
      <Button variant="outline" size="sm">
        4
      </Button>
      <Button variant="outline" size="sm">
        5
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )
}

