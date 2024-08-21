import Content from "@/components/Content"
import Header from "@/components/Header"
import LeftSidebar from "@/components/LeftSidebar"
import RightSidebar from "@/components/RightSidebar"

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Content />
            <LeftSidebar />
            <RightSidebar />
        </>
    )
}

export default HomePage