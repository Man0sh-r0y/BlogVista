import Blogs from "../components/Blogs"
import Header from "../components/Header"
import PageNumber from "../components/PageNumber"

function Home() {
    return (
        <div>
            <Header />
            <div className="show-blog-home-page">
                <Blogs />
            </div>
            <PageNumber />
        </div>
    );
}

export default Home;