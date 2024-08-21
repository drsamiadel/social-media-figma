import { Avatar, AvatarImage } from "./ui/avatar"
import Box from "./ui/box"
import { Icon } from "./ui/icon"

const UserCard: React.FC = () => {
    return (
        <Box className="p-0 h-[200px] overflow-hidden rounded-[20px]">
            <div className="h-1/2"
                style={{
                    backgroundImage: "url('/images/card-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top"
                }}
            />
            <div className="flex flex-col gap-3 p-2">
                <div className="flex gap-3 items-end -mt-[45px]">
                    <Avatar className="border-2 border-white shadow-lg w-[75px] h-[75px]">
                        <AvatarImage src="/images/avatar1.png" />
                    </Avatar>
                    <div className="flex flex-col">
                        <div className="font-semibold text-black flex items-center gap-1">
                            Ibrahim Adm
                            <Icon name="verified" className="text-[20px]" />
                            <Icon name="fiber_new" className="text-[24px] text-[#808080]" />
                        </div>
                        <div className="text-[#808080] text-[14px] leading-3">Graphic Designer</div>
                    </div>
                </div>
                <div className="flex justify-center gap-[45px]">
                    <div className="flex flex-col items-center font-semibold text-black">
                        224
                        <span className="text-[#808080] text-[14px] font-normal leading-3">Posts</span>
                    </div>
                    <div className="flex flex-col items-center font-semibold text-black">
                        10.624
                        <span className="text-[#808080] text-[14px] font-normal leading-3">Followers</span>
                    </div>
                    <div className="flex flex-col items-center font-semibold text-black">
                        1.125
                        <span className="text-[#808080] text-[14px] font-normal leading-3">Following</span>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default UserCard