import Box from "./ui/box"

const Ad: React.FC<{
    ad: {
        id: number;
        title: string;
        image: string;
        url: string;
        description: string;
    }
}> = ({ ad }) => {
    return (
        <div className="flex bg-searchBackground rounded-[15px] overflow-hidden">
            <img src={ad.image} alt={ad.title} className="w-[160px] h-[160px] rounded-[15px]" />
            <div className="flex-1 p-2 flex flex-col items-center justify-center text-center text-black gap-1">
                <p className="text-[14px] leading-3">{ad.title}</p>
                <p className="text-[12px] text-[#767676] leading-3">{ad.url}</p>
                <p className="text-[16px]">{ad.description}</p>
                <button className=" bg-[#808080] text-white px-[10px] py-[5px] rounded-[30px]">Buy Now</button>
            </div>
        </div>
    )
}

const ads = [
    {
        id: 1,
        title: "Ford Motor Company",
        image: "/images/ford.png",
        url: "https://www.ford.com/usa",
        description: "manufacturer headquartered in Dearborn,"
    },
    {
        id: 2,
        title: "Ford Motor Company",
        image: "/images/ford2.png",
        url: "https://www.ford.com/usa",
        description: "manufacturer headquartered in Dearborn,"
    },
];

const Ads: React.FC = () => {
    return (
        <Box className="p-[10px] rounded-[20px] flex flex-col gap-[10px]">
            {ads.map((ad) => (
                <Ad key={ad.id} ad={ad} />
            ))}
        </Box>
    )
}

export default Ads