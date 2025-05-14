interface LoadingSpinnerProps {
  size?: "small" | "default" | "large"
  text?: string
}

export default function LoadingSpinner({ size = "default", text = "Loading..." }: LoadingSpinnerProps) {
  const sizeClasses = {
    small: "h-4 w-4 border-2",
    default: "h-8 w-8 border-3",
    large: "h-12 w-12 border-4",
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizeClasses[size]} rounded-full border-primary border-t-transparent animate-spin`}
        role="status"
        aria-label="Loading"
      ></div>
      {text && <p className="text-muted-foreground animate-pulse">{text}</p>}
    </div>
  )
}

