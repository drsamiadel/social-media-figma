import { cn } from "@/lib/utils"

const StoryButton: React.FC<{
    storiesCount: number
    user: {
        name: string
        avatar: string
    }
    seen: boolean
    onClick?: () => void
}> = ({
    storiesCount,
    user,
    seen,
    onClick
}) => {
        return (
            <div className="flex flex-col items-center gap-1 w-[75px] p-1 cursor-pointer" onClick={onClick}>
                <div className="relative aspect-square p-[3px] overflow-hidden rounded-full">
                    <img src={user.avatar} alt="avatar" className="relative z-20 w-[60px] h-[60px] rounded-full border-[3px] border-white" />
                    <div className={cn(
                        "w-full h-full absolute left-0 top-0 rounded-full z-10",
                        seen ? "bg-[#808080]" : "bg-primary"
                    )}>
                        {storiesCount > 1 && Array.from({ length: storiesCount }).map((_, index) => (
                            <div key={index} className={cn(
                                "w-1 bg-white h-[36px] absolute left-1/2",

                            )}
                                style={{
                                    transform: `rotate(${index * 360 / storiesCount}deg) translate(-1px, -2px)`,
                                    transformOrigin: "25% 100%"
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
                <span className="text-[12px] text-black truncate w-full">{user.name}</span>
            </div>
        )
    }

export default StoryButton