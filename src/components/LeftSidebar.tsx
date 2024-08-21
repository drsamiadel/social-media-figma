import { cn } from "@/lib/utils";
import { Icon } from "./ui/icon"

const MenuItem: React.FC<{ item: typeof menuItems[0], className?: string }> = ({ item, className }) => {
    return (
        <div className={cn("relative cursor-pointer leading-3 flex flex-col lg:flex-row lg:px-[20px] px-[10px] text-[12px] lg:text-[16px] text-center lg:py-[12px] py-[6px] hover:bg-[#f0f2f5] lg:font-semibold text-[#434343] lg:rounded-[15px] items-center lg:gap-2",
            item.title === "Trend Hashtags" && "bg-[#f0f2f5]",
            item.title === "Trend Hashtags" && "lg:before:content-[''] lg:before:absolute lg:before:w-[4px] lg:before:h-full lg:before:bg-primary lg:before:left-0 lg:before:top-0 lg:before:rounded-r-2xl lg:before:-translate-x-5",
            item.title === "Trend Hashtags" && "lg:after:content-[''] lg:after:absolute lg:after:w-[4px] lg:after:h-full lg:after:bg-primary lg:after:right-0 lg:after:top-0 lg:after:rounded-l-2xl lg:after:translate-x-5",
            className,
            item.hideSmall && !item.hideLarge && "hidden lg:flex",
            item.hideLarge && "lg:hidden",
        )}>
            <Icon name={item.icon} className="text-[24px] text-inherit lg:text-primary" />
            {item.title}
        </div>
    )
}


const menuItems = [
    {
        title: "News Feed",
        icon: "home",
        hideLarge: false,
        hideSmall: true
    },
    {
        title: "Feed",
        icon: "account_circle",
        hideLarge: true,
        hideSmall: false
    },
    {
        title: "Trend Hashtags",
        icon: "tag",
        hideLarge: false,
        hideSmall: false
    },
    {
        title: "Saved Posts",
        icon: "bookmark",
        hideLarge: false,
        hideSmall: false
    },
    {
        title: "Groups",
        icon: "group",
        hideLarge: false,
        hideSmall: false
    },
    {
        title: "Blogs",
        icon: "news",
        hideLarge: false,
        hideSmall: true
    },
    {
        title: "Events",
        icon: "event",
        hideLarge: false,
        hideSmall: false
    },
    {
        title: "Find friends",
        icon: "person_search",
        hideLarge: false,
        hideSmall: true
    },
    {
        title: "Job Search",
        icon: "work",
        hideLarge: false,
        hideSmall: true
    },
    {
        title: "Donation",
        icon: "volunteer_activism",
        hideLarge: false,
        hideSmall: true
    },
    {
        title: "Create advertisment",
        icon: "ads_click",
        hideLarge: false,
        hideSmall: true
    },
    {
        title: "Upgrade membership",
        icon: "editor_choice",
        hideLarge: false,
        hideSmall: true
    },
    {
        title: "Liked Videos",
        icon: "thumb_up",
        hideLarge: true,
        hideSmall: false
    },
    {
        title: "Upload Video",
        icon: "video_call",
        hideLarge: true,
        hideSmall: false
    },
    {
        title: "Channels",
        icon: "subscriptions",
        hideLarge: true,
        hideSmall: false
    }
];

const LeftSidebar: React.FC = () => {
    return (
        <div className="hidden semimd:flex fixed h-full pt-[80px] py-4 bg-white shadow-md left-0 top-0 items-stretch  lg:w-[280px] w-[80px] px-0 lg:px-[20px] flex-col gap-1">
            {menuItems.map((item) => <MenuItem key={item.title} item={item} />)}
            <MenuItem item={{
                title: "Settings",
                icon: "settings",
                hideLarge: false,
                hideSmall: false
            }} className="mt-auto" />
        </div>
    )
}

export default LeftSidebar