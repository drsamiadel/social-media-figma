import Post from "./Post";

const Posts: React.FC = () => {
    const posts = [
        {
            user: {
                name: 'Josephine Fangula',
                avatar: '/images/avatar1.png',
                job: 'Graphic Designer'
            },
            description: 'Taking care of the family is one of the most important things in life.',
            content: {
                type: 'image',
                src: '/images/post1.jpeg',
            },
            commentsNumber: 87.3,
            views: 87.3,
            likes: 87.3,
            appreciates: 871,
            comments: [
                {
                    user: {
                        name: 'Ibrahim Adm',
                        avatar: '/images/avatar1.png'
                    },
                    comment: 'social media poster allows you to schedule and posts to these different social media platforms.',
                    reactions: "87.3K",
                    comments: "873",
                    replies: [
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                        },
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                        },
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                            reactions: "87.3K",
                            comments: "873",
                        },
                    ]
                }
            ]
        },
        {
            user: {
                name: 'Josephine Fangula',
                avatar: '/images/avatar1.png',
                job: 'Graphic Designer'
            },
            description: 'Taking care of the family is one of the most important things in life.',
            content: {
                type: 'image',
                src: '/images/post2.jpeg',
            },
            commentsNumber: 87.3,
            views: 87.3,
            likes: 87.3,
            appreciates: 871,
            comments: [
                {
                    user: {
                        name: 'Ibrahim Adm',
                        avatar: '/images/avatar1.png'
                    },
                    comment: 'social media poster allows you to schedule and posts to these different social media platforms.',
                    reactions: "87.3K",
                    comments: "873",
                    replies: [
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                        },
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                        },
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                            reactions: "87.3K",
                            comments: "873",
                        },
                    ]
                }
            ]
        },
        {
            user: {
                name: 'Josephine Fangula',
                avatar: '/images/avatar1.png',
                job: 'Graphic Designer'
            },
            description: 'Taking care of the family is one of the most important things in life.',
            content: {
                type: 'link-1',
                src: '/images/post3.jpeg',
                url: 'https://www.google.com',
                title: '6 New Social Media Apps Every Business Owner Should Know ',
                description: "In today's world, it can be hard to know which platforms are worth your time. Stay on top of the trending social media apps and incorporate them",
            },
            commentsNumber: 87.3,
            views: 87.3,
            likes: 87.3,
            appreciates: 871,
            comments: [
                {
                    user: {
                        name: 'Ibrahim Adm',
                        avatar: '/images/avatar1.png'
                    },
                    comment: 'social media poster allows you to schedule and posts to these different social media platforms.',
                    reactions: "87.3K",
                    comments: "873",
                    replies: [
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                        },
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                        },
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                            reactions: "87.3K",
                            comments: "873",
                        },
                    ]
                }
            ]
        }, {
            user: {
                name: 'Josephine Fangula',
                avatar: '/images/avatar1.png',
                job: 'Graphic Designer'
            },
            description: 'Taking care of the family is one of the most important things in life.',
            content: {
                type: 'link-2',
                src: '/images/post4.jpeg',
                url: 'https//:www.Visit.the.site',
                title: '6 New Social Media Apps Every Business Owner Should Know ',
                description: "In today's world, it can be hard to know which platforms are worth your time. Stay on top of the trending social media apps and incorporate them",
            },
            commentsNumber: 87.3,
            views: 87.3,
            likes: 87.3,
            appreciates: 871,
            comments: [
                {
                    user: {
                        name: 'Ibrahim Adm',
                        avatar: '/images/avatar1.png'
                    },
                    comment: 'social media poster allows you to schedule and posts to these different social media platforms.',
                    reactions: "87.3K",
                    comments: "873",
                    replies: [
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                        },
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                        },
                        {
                            user: {
                                name: 'Ibrahim Adm',
                                avatar: '/images/avatar2.png'
                            },
                            comment: 'which you can then publish',
                            reactions: "87.3K",
                            comments: "873",
                        },
                    ]
                }
            ]
        }
    ]
    return (
        <div className="flex flex-col items-center gap-[14px]">
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    )
}

export default Posts