import { cn } from "@/lib/utils"

const Box: React.FC<React.PropsWithChildren<{
    className?: string;
    style?: React.CSSProperties,
    ref?: React.Ref<HTMLDivElement>
}>> = ({ children, className, style, ref }) => {
    return (
        <div className={cn(
            "bg-white w-full shadow-md rounded-lg",
            className
        )} style={style} ref={ref}>
            {children}
        </div>
    )
}
export default Box