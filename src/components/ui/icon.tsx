import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iconVariants = cva(
    "inline-block",
    {
        variants: {
            size: {
                default: "text-[24px]",
                sm: "text-sm",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

export interface IconProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof iconVariants> { name: string }

const Icon = React.forwardRef<HTMLElement, IconProps>(
    ({ className, size = "default", name, ...props }, ref) => {
        return (
            <span
                className={cn(
                    "material-symbols-rounded",
                    iconVariants({ size, className }))}
                ref={ref}
                {...props}
            >
                {name}
            </span>
        )
    }
)
Icon.displayName = "Icon"

export { Icon, iconVariants }
