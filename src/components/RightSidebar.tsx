import { Icon } from "./ui/icon"

const users = [
    {
        avatar: "/images/avatar2.png",
        online: true
    }, {
        avatar: "/images/avatar3.png",
        online: true
    }, {
        avatar: "/images/avatar4.png",
        online: false
    }, {
        avatar: "/images/avatar5.png",
        online: false
    }, {
        avatar: "/images/avatar6.png",
        online: false
    }, {
        avatar: "/images/avatar7.png",
        online: false
    }
]

const RightSidebar: React.FC = () => {
    return (
        <div className="hidden semimd:flex fixed h-full pt-[80px] py-4 bg-white shadow-md right-0 top-0 w-[80px] px-[15px] flex-col items-center gap-[15px]">
            <button className="text-black bg-searchBackground w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <Icon name="reviews" className="text-[24px]" />
            </button>
            <button className="text-black bg-searchBackground w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <Icon name="group_add" className="text-[24px]" />
            </button>
            <div className="border-b border-[#e4e6eb] w-full"></div>
            {users.map((user) => (
                <button className="relative">
                    <img src={user.avatar} className="w-[50px] h-[50px] rounded-full border-[0.5px] border-[#767676]" />
                    {user.online && <div className="w-[12px] h-[12px] bg-[#00cd00] rounded-full absolute bottom-0 right-0 border-2 border-white"></div>}
                </button>
            ))}
            <button className="mt-auto text-black bg-searchBackground w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <Icon name="person_search" className="text-[24px]" />
            </button>
            <button className="fixed bottom-4 right-[100px] text-white bg-primary w-[50px] h-[50px] rounded-full hidden semimd:flex items-center justify-center">
                <Icon name="add" className="text-[40px]" />
            </button>
        </div>
    )
}

export default RightSidebar