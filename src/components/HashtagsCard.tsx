import HashtagItem from "./HashtagItem";
import Box from "./ui/box";

const HashtagsCard: React.FC = () => {

    const items = [
        {
            id: 1,
            type: "global",
            title: "New_Social_media",
            count: "10M Post"
        },
        {
            id: 2,
            type: "global",
            title: "video_Games",
            count: "500K Post"
        },
        {
            id: 3,
            type: "global",
            title: "social_platform",
            count: "145K Post"
        },
        {
            id: 9,
            type: "divider"
        },
        {
            id: 4,
            type: "en",
            title: "one_ummah",
            count: "125K Post"
        },
        {
            id: 5,
            type: "en",
            title: "new_social_platform",
            count: "123K Post"
        },
        {
            id: 6,
            type: "en",
            title: "new_social_platform",
            count: "120K Post"
        },
        {
            id: 9,
            type: "divider"
        },
        {
            id: 7,
            type: "flag",
            title: "Trend_Hashtag_in_ABCDE",
            count: "105K Post"
        },
        {
            id: 8,
            type: "flag",
            title: "new_social_platform",
            count: "25K Post"
        },
        {
            id: 9,
            type: "flag",
            title: "new_social_platform",
            count: "15K Post"
        }
    ];

    return (
        <Box className="p-default rounded-[20px]">
            <h2 className="text-black font-bold">Trending Hashtages</h2>
            <div className="flex flex-col gap-[20px] text-black pt-3">
                {items.map((item) => item.type === "divider" ? (
                    <div key={item.id} className="border-b-2 border-[#BBBBBB]" />
                ) : (
                    <HashtagItem key={item.id} item={item} />
                ))}
            </div>
        </Box>
    )
};

export default HashtagsCard;