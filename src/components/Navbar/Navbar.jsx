import { NavLink } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const navLinks = [
        { id: 1, name: 'HOME', link: '/' },
        { id: 2, name: 'LOGIN', link: '/login' },
        { id: 3, name: 'REGISTER', link: '/register' }
    ]
    return (
        <nav className="relative">
            <div className="flex items-center justify-between shadow-lg py-8 container">
                <div className="lg:hidden md:text-3xl" onClick={() => setOpen(!open)}>
                    {
                        open ? <IoMdClose /> : <IoMdMenu />
                    }

                </div>
                {/* Logo */}
                <div className="md:text-3xl">
                    <h1>User Management system</h1>
                </div>
                {/* Middle */}
                <div className=" hidden lg:block">
                    <ul className="flex items-center gap-5">
                        {
                            navLinks.map(data => (
                                <li key={data.id}>
                                    <NavLink
                                        to={data.link}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        {data.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Right */}
                <div className="">
                    <button className="btn btn-ghost">Hi</button>
                </div>
            </div>
            {/* For Small device */}
            <div className={`${open ? "absolute" : "hidden"}`}>
                <ul className="bg-white duration-1000 w-40 px-10 space-y-4 py-2 z-10 drop-shadow-lg">
                    {
                        navLinks.map(data => (
                            <li key={data.id}>
                                <NavLink
                                    to={data.link}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    {data.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;