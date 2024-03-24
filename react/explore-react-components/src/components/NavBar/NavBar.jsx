import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/products", name: "Products" },
        { id: 5, path: "/contact", name: "Contact" }
    ];

    return (
        <nav className="p-5">
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross2 /> : <HiMenuAlt1 />
                }
            </div>
            <ul className={`md:flex gap-5 px-5 py-2 shadow-lg md:shadow-none bg-white duration-1000 absolute md:static ${open ? 'top-12' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;