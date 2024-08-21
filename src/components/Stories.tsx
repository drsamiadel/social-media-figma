import { useEffect, useRef, useState } from "react";
import AddStoryButton from "./AddStoryButton"
import StoryButton from "./StoryButton";
import StoryCard from "./StoryCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Icon } from "./ui/icon";
import { cn } from "@/lib/utils";


const Stories: React.FC = () => {
    const stories = [
        {
            id: 1,
            seen: true,
            user: {
                name: "Josephine Fangula",
                avatar: "/images/avatar2.png"
            },
            storiesCount: 8
        },
        {
            id: 2,
            seen: true,
            user: {
                name: "Josephine Fangula",
                avatar: "/images/avatar3.png"
            },
            storiesCount: 1
        },
        {
            id: 3,
            seen: true,
            user: {
                name: "Josephine Fangula",
                avatar: "/images/avatar4.png"
            },
            storiesCount: 2
        },
        {
            id: 4,
            seen: false,
            user: {
                name: "Josephine Fangula",
                avatar: "/images/avatar5.png"
            },
            storiesCount: 4
        },
        {
            id: 5,
            seen: true,
            user: {
                name: "Josephine Fangula",
                avatar: "/images/avatar6.png"
            },
            storiesCount: 1
        },
        {
            id: 6,
            seen: false,
            user: {
                name: "Josephine Fangula",
                avatar: "/images/avatar7.png"
            },
            storiesCount: 1
        },
        {
            id: 7,
            seen: false,
            user: {
                name: "Josephine Fangula",
                avatar: "/images/avatar2.png"
            },
            storiesCount: 1
        },
    ]

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current !== null) {
            ref.current.addEventListener("wheel", (e) => {
                e.preventDefault()
                if (ref.current) {
                    ref.current.scrollLeft += e.deltaY
                }
            })
            ref.current.addEventListener("mousemove", (e) => {
                if (e.buttons === 1) {
                    if (ref.current) {
                        ref.current.scrollLeft -= e.movementX
                    }
                }
            })
        }

        const currentRef = ref.current;

        return () => {
            if (currentRef) {
                currentRef.removeEventListener("wheel", () => { })
                currentRef.removeEventListener("mousemove", () => { })
            }
        }
    }, [])

    const [active, setActive] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [swiper, setSwiper] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const toSlide = (index: number) => {
        swiper.slideTo(index);
        setActive(index);
    }

    return (
        <div className="bg-white w-full flex gap-[7px] rounded-[20px] p-default overflow-x-auto bg-background/0 shadow-none semimd:shadow-md semimd:bg-white"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
            ref={ref}
        >
            <div className={cn("fixed top-0 left-0 w-full h-full bg-[#1a1a1a] z-50 flex items-center justify-center semimd:px-20 semimd:py-4",
                open ? "" : "hidden"
            )}>
                <button className="absolute top-4 right-4 text-white w-[40px]" onClick={handleClose}>
                    <Icon name="close" className="text-[40px]" />
                </button>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    className="h-full w-full stories-slider"
                    centeredSlides
                    onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                    onSwiper={setSwiper}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <SwiperSlide key={i}>
                            <StoryCard toSlide={toSlide} index={active} isActive={active === i} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <AddStoryButton />
            {stories.map((story) => (
                <StoryButton
                    key={story.id}
                    storiesCount={story.storiesCount}
                    user={story.user}
                    seen={story.seen}
                    onClick={handleOpen}
                />
            ))}
        </div>
    )
}

export default Stories