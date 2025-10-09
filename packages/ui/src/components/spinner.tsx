import { Loader2Icon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...(props as React.ComponentProps<typeof Loader2Icon>)}
    />
  )
}

export { Spinner }
