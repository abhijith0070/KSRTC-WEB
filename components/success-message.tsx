import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SuccessMessageProps {
  title: string
  message: string
  actionText?: string
  actionLink?: string
}

export default function SuccessMessage({
  title,
  message,
  actionText = "Return to Home",
  actionLink = "/",
}: SuccessMessageProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-green-800 mb-2">{title}</h2>
      <p className="text-green-700 mb-6">{message}</p>
      <Link href={actionLink}>
        <Button>{actionText}</Button>
      </Link>
    </div>
  )
}

