import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import PageNumber from "../components/PageNumber";
import Blogs from "../components/Blogs";

function CatergoryPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    /* `location.pathname.split("/").at(-1)` is splitting the `pathname` property of
    the `location` object into an array of substrings using the "/" delimiter. It
    then retrieves the last element of the array using the `at(-1)` method. */

    return (
        <div className="category-page">
            <Header />

            <div className="category-page-div">
                <div className="category-page-head">
                    <button onClick={() => navigation(-1)}>
                        Back
                    </button>

                    <h2>
                        Blogs on <span> {category} </span>
                    </h2>
                </div>

                <div className="show-blog-category-tag">
                    <Blogs />
                </div>
            
            </div>

            <PageNumber />
        </div>
    );
}

export default CatergoryPage;