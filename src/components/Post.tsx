import { cn } from "@/lib/utils"
import AppreciateIcon from "./icons/Appreciate"
import CommentIcon from "./icons/Comment"
import LikeIcon from "./icons/Like"
import ViewIcon from "./icons/View"
import { Avatar, AvatarImage } from "./ui/avatar"
import Box from "./ui/box"
import { Icon } from "./ui/icon"
import Curve from "./icons/Curve"

const Post: React.FC<{
    post: {
        user: {
            name: string
            avatar: string
            job: string
        }
        description: string
        content: {
            type: string
            src: string
            url?: string
            title?: string
            description?: string
        }
        commentsNumber: number
        views: number
        likes: number
        appreciates: number
        comments: {
            user: {
                name: string
                avatar: string
            }
            comment: string
            reactions?: string
            comments?: string
            replies: {
                user: {
                    name: string
                    avatar: string
                }
                comment: string
                reactions?: string
                comments?: string
            }[]
        }[]
    }
}> = ({
    post
}) => {
        const Content = () => {

            switch (post.content.type) {
                case 'image':
                    return (
                        <img src={post.content.src} alt="post" className="w-full object-cover rounded-md" />
                    )
                case 'link-1':
                    return (
                        <div className="w-full flex flex-col semimd:flex-row items-stretch gap-4 rounded-md border-[#d9d9d9] border-[1.5px]">
                            <img src={post.content.src} alt="post" className="w-full semimd:w-[215px] aspect-square object-cover rounded-md" />
                            <div className="flex flex-col gap-2 py-2 pr-2 pl-2 semimd:pl-0">
                                <p className="text-black font-semibold text-[18px] pb-2">{post.content.title}</p>
                                <p className="text-black text-[16px]">{post.content.description}</p>
                                <a href={post.content.url} className="rounded-full font-semibold border-[1.5px] border-[#adadad] w-fit px-4 py-1">see more</a>
                            </div>
                        </div>
                    )
                case 'link-2':
                    return (
                        <div className="w-full flex flex-col semimd:flex-row items-stretch gap-4 rounded-md p-default bg-[#f0f2f5] border-[#d9d9d9] border-[1.5px]">
                            <div className="flex flex-col justify-between gap-2 py-2 pr-2">
                                <p className="text-black font-semibold text-[18px] pb-2">{post.content.title}</p>
                                <p className="text-black text-[16px]">{post.content.description}</p>
                                <p className="text-[#808080] text-[16px]">{post.content.url}</p>
                            </div>
                            <img src={post.content.src} alt="post" className="w-full semimd:w-[215px] aspect-square object-cover rounded-md" />
                        </div>
                    )

            }
        }
        return (
            <Box className="flex flex-col gap-[10px] border border-black/20  p-default">
                <div className="flex items-center gap-[15px]">
                    <div className="flex items-center justify-center">
                        <Avatar className="w-[50px] h-[50px]">
                            <AvatarImage src={post.user.avatar} />
                        </Avatar>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold text-black">{post.user.name}</div>
                            <Icon name="verified" className="text-[20px]" />
                            <div className="text-primary font-semibold pl-0.5 flex gap-1">
                                •
                                <a href="#" className="hover:underline">Follow</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-[14px]">
                            <div className="text-gray-500">{post.user.job}</div>
                            <div className="text-gray-500">•</div>
                            <div className="text-gray-500">5 week</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center self-baseline text-[#414142] gap-2">
                        <Icon name="bookmark" className="text-[24px]" />
                        <Icon name="more_vert" className="text-[24px]" />
                    </div>
                </div>
                <p className="text-black">
                    {post.description}
                </p>
                <Content />
                <div className="flex items-center justify-between gap-4 px-default text-[#414142] text-[14px]">
                    <button className="flex flex-col items-center gap-0.5">
                        <div>
                            <CommentIcon />
                        </div>
                        {post.commentsNumber}K Comment
                    </button>
                    <button className="flex flex-col items-center gap-0.5">
                        <div>
                            <ViewIcon />
                        </div>
                        {post.views}K View
                    </button>
                    <button className="flex flex-col items-center gap-0.5">
                        <div>
                            <LikeIcon />
                        </div>
                        {post.likes}K Like
                    </button>
                    <button className="flex flex-col items-center gap-0.5">
                        <div>
                            <AppreciateIcon />
                        </div>
                        {post.appreciates} Appreciate
                    </button>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <div className="flex items-center gap-[10px] bg-searchBackground rounded-[20px] p-[5px]">
                        <img src="/images/avatar2.png" alt="avatar" className="min-w-[30px] w-[30px] h-[30px] rounded-full border-[0.5] border-[#767676]" />
                        <div className="border-r border-[#808080] h-[30px]"></div>
                        <input type="text" placeholder="Write a comment..." className="bg-transparent flex-1 focus:outline-none" />
                        <div className="flex items-center gap-[5px] text-black leading-3 pr-2">
                            <button className="">
                                <Icon name="sentiment_satisfied" className="text-[20px]" />
                            </button>
                            <button>
                                <Icon name="image" className="text-[20px]" />
                            </button>
                            <button>
                                <Icon name="mic" className="text-[20px]" />
                            </button>
                            <button>
                                <Icon name="send" className="text-[24px]" />
                            </button>
                        </div>
                    </div>
                    {post.comments.map((comment, index) => (
                        <div key={index} className="flex flex-col gap-[15px] relative">
                            <div className="border-r-2 border-[#808080] h-[calc(100%-68px)] absolute left-[18px] top-0" />
                            <div className="flex items-center z-10">
                                <div className="flex gap-[10px] bg-searchBackground p-1 rounded-[20px] -mr-4">
                                    <img src={comment.user.avatar} alt="avatar" className="min-w-[30px] w-[30px] h-[30px] rounded-full border-[0.5] border-[#767676]" />
                                    <div className="flex flex-col w-full mr-10">
                                        <div className="flex items-center gap-1">
                                            <div className="font-semibold text-black">{comment.user.name}</div>
                                        </div>
                                        <p className="text-black text-[15px]">{comment.comment}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <button className="flex items-center gap-1 w-[95px] border-[0.5px] bg-white rounded-full px-2 py-1 text-[12px] text-[#525252]">
                                        <Icon name="thumb_up" className="text-[18px] text-[#434343]" />
                                        {comment.reactions}{" "}
                                        Like
                                    </button>
                                    <button className="flex items-center gap-1 w-[95px] border-[0.5px] bg-white rounded-full px-2 py-1 text-[12px] text-[#525252]">
                                        <Icon name="comment" className="text-[18px] text-[#434343]" />
                                        {comment.comments}{" "}
                                        Reply
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[15px] pl-[40px]">
                                {comment.replies.map((reply, index) => (
                                    <div key={index} className="flex items-center gap-[10px] relative">
                                        <div className="absolute -left-[22px] top-0">
                                            <Curve />
                                        </div>
                                        <div className="flex gap-[10px] bg-searchBackground min-h-[70px] p-1 rounded-[20px] -mr-6">
                                            <img src={reply.user.avatar} alt="avatar" className="min-w-[30px] w-[30px] h-[30px] rounded-full border-[0.5] border-[#767676]" />
                                            <div className="flex flex-col w-full mr-10">
                                                <div className="flex items-center gap-1">
                                                    <div className="font-semibold text-black">{reply.user.name}</div>
                                                </div>
                                                <p className="text-black text-[15px]">{reply.comment}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-0.5">
                                            <button className={cn("flex items-center gap-1 border-[0.5px] bg-white rounded-full px-2 py-1 text-[12px] text-[#525252]", reply.reactions && "w-[95px]")}>
                                                <Icon name="thumb_up" className="text-[18px] text-[#434343]" />
                                                {reply.reactions && `${reply.reactions} Like`}
                                            </button>
                                            <button className={cn("flex items-center gap-1 border-[0.5px] bg-white rounded-full px-2 py-1 text-[12px] text-[#525252]", reply.reactions && "w-[95px]")}>
                                                <Icon name="comment" className="text-[18px] text-[#434343]" />
                                                {reply.comments && `${reply.comments} Reply`}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Box>
        )
    }

export default Post