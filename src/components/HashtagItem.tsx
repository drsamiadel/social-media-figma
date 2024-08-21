import { Icon } from "./ui/icon"

const HashtagItem: React.FC<{
    item:
    {
        id: number,
        type: string,
        title?: string,
        count?: string
    }
}> = ({ item }) => {
    return (
        <div className="flex items-center gap-2">
            {item.type === "en" ? (
                <span className="text-[#000] text-[14px] font-semibold">EN</span>
            ) : (
                <Icon name={
                    item.type === "global" ? "language" : "flag"
                } className="text-[20px]" />
            )}
            <span className="flex-1">#{item.title}</span>
            <span className="bg-[#f0f2f5] text-[12px] rounded-[24px] py-[2px] px-[12px]">{item.count}</span>
        </div>
    )
}

export default HashtagItem