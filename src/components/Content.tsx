import Ads from "./Ads"
import HashtagsCard from "./HashtagsCard"
import PeopleYouMayKnow from "./PeopleYouMayKnow"
import Posts from "./Posts"
import Stories from "./Stories"
import TodoCard from "./TodoCard"
import UserCard from "./UserCard"


const Content: React.FC = () => {
    return (
        <div className="pt-[65px] semimd:pt-[75px] flex justify-center w-full pb-16 semimd:pb-4">
            <div className="max-w-[100px] semimd:min-w-[100px] semimd:basis-[100px]" />
            <div className="flex-1 flex justify-center gap-7 w-full">
                <div className="max-w-[350px] min-w-[350px] basis-[350px] hidden lg:block" />
                <div className="max-w-[630px] w-full">
                    <div className="flex flex-col items-center gap-[14px]">
                        <Stories />
                        <Posts />
                    </div>
                </div>
                <div className="max-w-[350px] min-w-[350px] basis-[350px] hidden semilg:flex flex-col gap-[19px]">
                    <UserCard />
                    <HashtagsCard />
                    <TodoCard />
                    <PeopleYouMayKnow />
                    <div className="flex flex-col gap-[19px] sticky top-[75px]">
                        <HashtagsCard />
                        <Ads />
                    </div>
                </div>
            </div>
            <div className="max-w-[100px] semimd:min-w-[100px] semimd:basis-[100px]" />
        </div>
    )
}

export default Content