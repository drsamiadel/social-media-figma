import Box from "./ui/box"
import { cn } from "@/lib/utils";
import { Icon } from "./ui/icon";

const Item: React.FC<{
    user: {
        id: number;
        name: string;
        avatar: string;
        subtitle: string;
        verified: boolean;
        followed: boolean;
    };
}> = ({ user }) => {
    return (
        <div className={cn("flex items-center gap-2")}>
            <img src={user.avatar} alt={user.name} className="w-[50px] h-[50px] rounded-full border-[0.5px] border-[#767676]" />
            <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-1 font-semibold">
                    {user.name}
                    {user.verified && <Icon name="verified" className="text-[20px]" />}
                </div>
                <p className="text-[#808080] text-[12px] leading-3">{user.subtitle}</p>
            </div>
            <button className={cn("flex items-center justify-center font-semibold border-2 px-[17px] py-[4px] rounded-[15px] w-[80px] h-[30px]", user.followed ? "border-[#AEAEAE]" : "border-primary")}>
                Follow
            </button>
        </div>
    )
}

const users = [
    {
        id: 1,
        name: "Caroline Margolotta",
        avatar: "/images/avatar2.png",
        subtitle: "Followed by Random",
        verified: true,
        followed: false,
    },
    {
        id: 2,
        name: "Blanche Walker",
        avatar: "/images/avatar3.png",
        subtitle: "Followed by Random + 3 more",
        verified: true,
        followed: false,
    },
    {
        id: 3,
        name: "Josephine Fangula",
        avatar: "/images/avatar4.png",
        subtitle: "Followed by Random",
        verified: false,
        followed: true,
    },
    {
        id: 4,
        name: "Dr Louise Sails",
        avatar: "/images/avatar5.png",
        subtitle: "Followed by Random + 3 more",
        verified: true,
        followed: false,
    },
];

const PeopleYouMayKnow: React.FC = () => {
    return (
        <Box className="p-default rounded-[20px] text-ce">
            <h2 className="text-black font-bold">
                People you may know
            </h2>
            <div className="flex flex-col gap-[20px] text-black pt-3">
                {users.map((user) => (
                    <Item key={user.id} user={user} />
                ))}
            </div>
        </Box>
    )
}

export default PeopleYouMayKnow

