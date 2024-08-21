import { cn } from "@/lib/utils";
import { Icon } from "./ui/icon";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const Header: React.FC = () => {
    const menu = [
        {
            name: "timeline",
            icon: "clarify",
        },
        {
            name: "blogs",
            icon: "news",
        },
        {
            name: "videos",
            icon: "subscriptions",
        },
        {
            name: "messaging",
            icon: "forum",
        },
    ];

    const isActive = 0;

    return (
        <header className="flex gap-4 h-[55px] shadow-md bg-white px-default items-center justify-between fixed w-full left-0 top-0 z-40">
            <div>
                <img src="/images/logo.png" alt="Dzneer Logo" className="h-[30px]" />
            </div>
            <div className="fixed h-[55px] left-0 top-0 w-full flex justify-center z-40">
                <div className="max-w-[250px] semimd:min-w-[250px] basis-[250px]" />
                <div className="flex-1 flex justify-center gap-7">
                    <div className="max-w-[350px] min-w-[50px] basis-[350px] hidden lg:block" />
                    <div className="h-full flex justify-end semimd:justify-between max-w-[630px] semimd:min-w-[400px] w-full semilg:w-[630px]">
                        <div className="w-full fixed bg-white border-t bottom-0 left-0 h-[55px] z-40 flex items-center justify-between semimd:relative semimd:border-0">
                            <div className={cn(
                                "relative h-full w-full px-10",
                                "flex justify-around items-center text-foreground",
                            )}>
                                {menu.map((item, index) => (
                                    <button className={
                                        cn("flex flex-col gap-1 uppercase font-normal items-center min-w-14 text-[10px] tracking-wider leading-[10px] transition-all p-1 rounded-xs",
                                            "before:content-[''] before:absolute before:bottom-0 before:w-[60px] before:h-[3px] before:bg-transparent before:rounded-t-[20PX]",
                                            isActive === index ? "text-primary before:bg-primary" : "before:bg-transparent",
                                            isActive !== index && "hover:bg-backgroundHover",

                                        )
                                    }>
                                        <Icon name={item.icon} />
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="aspect-square self-center">
                            <div className="p-1.5 leading-[10px] h-full border-2 border-border rounded-full text-[#9A9A9A] flex items-center flex-col text-[10px] justify-center">
                                <span className="leading-3 text-[14px] text-[#808080] font-medium">99</span>
                                min
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[350px] min-w-[100px] basis-[220px] lg:basis-[350px] hidden semilg:block">
                        <div className="w-full h-full py-2">
                            <div className="relative h-full">
                                <input
                                    type="text"
                                    className={cn("w-full h-full border bg-searchBackground text-searchForeground rounded-full px-2 text-[16px] pl-12")}
                                    placeholder="Search Dzneer"
                                />
                                <Icon name="search" className="absolute top-1/2 left-2 transform -translate-y-1/2 text-searchForeground ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[250px] semimd:min-w-[250px] semimd:basis-[250px]">
                    <div className="flex items-center gap-1 semimd:justify-center justify-end h-full pr-2 semimd:p-0">
                        <Button variant={"ghost"} size={"icon"} className="flex semimd:hidden text-black">
                            <Icon name="search" />
                        </Button>
                        <Button variant={"ghost"} size={"icon"} className="hidden semimd:flex text-black relative">
                            <Icon name="forum" />
                            <div className="absolute top-0 right-0 mt-2 mr-1.5 w-[5px] h-[5px] bg-primary rounded-full" />
                        </Button>
                        <Button variant={"ghost"} size={"icon"} className="text-black relative">
                            <Icon name="notifications" />
                            <div className="absolute top-0 right-0 mt-[7px] mr-[3px] w-[16px] h-[16px] bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white text-[13px] font-semibold">8</span>
                            </div>
                        </Button>
                        <Button variant={"secondary"} className="text-black relative rounded-full flex items-center gap-2 pl-0 p-0 semilg:pr-2">
                            <Avatar>
                                <AvatarImage src="/images/avatar1.png" />
                            </Avatar>
                            <span className="hidden semilg:block">Ibrahim</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="fixed h-[55px] left-1/2 top-0 transform translate-x-[calc(-50%+500px)] w-[150px] md:w-[250px] lg:w-[350px]">

            </div>

        </header>
    );
};

export default Header;