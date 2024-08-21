import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Icon } from "./ui/icon";

const StoryCard = ({ isActive }: { index: number; isActive: boolean; toSlide: (index: number) => void }) => {
    const storyCount = 2
    return (
        <div className={cn("overflow-hidden relative flex gap-4 h-full max-h-[930px] rounded-md flex-col justify-between px-[20px] py-[16px]")}
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,0.6) 100%), url("/images/story-1.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: isActive ? "blur(20px)" : "none"
            }}
        >
            <div className={cn("absolute left-0 top-0 flex flex-col items-center justify-center gap-1 w-full h-full bg-black/40 backdrop-blur-sm",
                isActive ? "hidden" : ""
            )}>
                <Avatar className="w-[50px] h-[50px] aspect-square">
                    <AvatarImage src="/images/avatar2.png" />
                </Avatar>
                <div className="flex items-center gap-2 pt-2">
                    <h2 className="text-white font-semibold text-[14px]">Josephine Fangula</h2>
                    <Icon name="verified" className="text-white text-[20px]" />
                </div>
                <p className="text-[#d9d9d9] pl-1 text-[14px]">32 min</p>
            </div>
            <div className={cn("flex flex-col gap-3", isActive ? "" : "hidden")}>
                <div className="flex items-center gap-2">
                    {Array.from({ length: storyCount }).map((_, i) => (
                        <div key={i} className={cn("h-[2px] bg-[#d9d9d9] rounded-full")}
                            style={{ flex: `1 1 ${100 / storyCount}%` }}
                        ></div>
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar className="w-[32px] h-[32px] aspect-square">
                            <AvatarImage src="/images/avatar2.png" />
                        </Avatar>
                        <h2 className="text-white font-semibold text-[14px]">Josephine Fangula</h2>
                        <Icon name="verified" className="text-white text-[20px]" />
                        <p className="text-[#d9d9d9] pl-1 text-[14px]">32 min</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Icon name="pause" className="text-[#d9d9d9] text-[24px]" />
                        <Icon name="volume_up" className="text-[#d9d9d9] text-[24px]" />
                        <Icon name="more_vert" className="text-[#d9d9d9] text-[24px]" />
                    </div>
                </div>
            </div>
            <div className={cn("flex items-center gap-4", isActive ? "" : "hidden")}>
                <div className="flex-1 relative">
                    <input type="text" placeholder="Replay to Caroline Margolotta" className="w-full h-[40px] bg-transparent border text-white rounded-full px-4" />
                    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white rounded-full w-[40px] aspect-square flex items-center justify-center border">
                        <Icon name="send" className="text-[24px]" />
                    </button>
                </div>
                <button className="flex items-center gap-2 text-white rounded-full w-[40px] aspect-square justify-center border">
                    <Icon name="favorite" className="text-[24px]" />
                </button>
            </div>
        </div>
    )
};

export default StoryCard;