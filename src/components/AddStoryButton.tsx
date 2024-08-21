import { Icon } from "./ui/icon"

const AddStoryButton: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-1 w-[75px] p-1">
            <div className="relative aspect-square p-[3px]">
                <img src="/images/avatar1.png" alt="avatar" className="relative z-20 w-[60px] h-[60px] rounded-full" />
                <div className="absolute bottom-1 right-1 w-[18px] h-[18px] border-white border-2 z-30 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">
                    <Icon name="add" className="text-[15px]" />
                </div>
            </div>
            <span className="text-[12px] text-black truncate w-full">Josephine Fangula</span>
        </div>
    )
}

export default AddStoryButton