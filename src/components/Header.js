import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="header">

                {/*  to={'/'}` is setting the destination of the link to the root path ("/"). This means that when the link is clicked, it will navigate to the root page of the application.*/}

                <Link to={'/'}>
                    <h1> BlogVista </h1>
                </Link>

        </div>
    );
}

export default Header;