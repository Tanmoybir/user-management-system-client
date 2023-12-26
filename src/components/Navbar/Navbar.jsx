import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = [
        { id: 1, name: 'HOME', link: '/' },
        { id: 2, name: 'LOGIN', link: '/login' },
        { id: 3, name: 'REGISTER', link: '/register' }
    ]
    return (
        <nav>
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="">
                    <h1>User Management system</h1>
                </div>
                {/* Middle */}
                <div className="">
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
        </nav>
    );
};

export default Navbar;