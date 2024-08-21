import Box from "./ui/box"
import { cn } from "@/lib/utils";
import { Icon } from "./ui/icon";

const Item: React.FC<{
    item: {
        id: number;
        content: string;
        checked: boolean;
    };
}> = ({ item }) => {
    return (
        <div className={cn("flex items-center gap-2 rounded-md px-[10px] py-[5px] cursor-pointer",
            item.checked ? "bg-[#ECECEC]" : "bg-[#5E60FF26]"
        )}>
            <p className={cn("text-black flex-1 text-[15px]",
                item.content.length > 50 ? "line-clamp-2" : "",
                item.checked ? "text-[#808080] line-through" : "text-black"
            )}>{item.content}</p>
            {item.checked ? <Icon name="select_check_box" className="text-[20px]" /> : <Icon name="check_box_outline_blank" className="text-[20px]" />}
        </div>
    )
}

const items = [
    {
        id: 1,
        content: "Read pages 20 from marketing book",
        checked: false
    },
    {
        id: 2,
        content: "important task to get done today",
        checked: true
    },
    {
        id: 3,
        content: "Here is an example of putting long tasks that skip the first line",
        checked: false
    },
];


const TodoCard: React.FC = () => {

    return (
        <Box className="p-default rounded-[20px] text-ce">
            <h2 className="text-black font-bold">
                3 Important Things To get done today
            </h2>
            <div className="flex flex-col gap-[10px] text-black pt-3">
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
            <div className="text-center pt-3 font-semibold text-[14px]">
                <a href="#" className="text-primary underline">
                    View the calendar
                </a>
            </div>
        </Box>
    )
}

export default TodoCard