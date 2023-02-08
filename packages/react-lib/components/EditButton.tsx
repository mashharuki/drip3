'use client'
import { Edit3 } from 'lucide-react'
import { cn } from '@drip3/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@drip3/react-lib/components/ui/Dialog'

type Props = {
  title?: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export default function EditButton({
  title,
  description,
  className,
  children,
  ...props
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            'bg-primary rounded-full text-semiwhite text-sm flex items-center h-7 w-7 justify-center shadow-md hover:opacity-90',
            className
          )}
          {...props}
        >
          <Edit3 size={16} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter className="px-4">
          <button
            className="bg-primary rounded-full py-3 w-full text-semiwhite"
            type="submit"
          >
            Save
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
