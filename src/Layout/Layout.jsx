import React, { useEffect, useState } from 'react';
import { postCategory } from '../APIRequest/APIRequest';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            let data = await postCategory();
            setCategories(data);
        })();
    }, []);

    return (
        <div style={{ scrollbarWidth: 'none' }}>
            <div className='top-0 z-20 glass backdrop-brightness-100 sticky'>
                {/* Navbar */}
                <div className="navbar  shadow-sm glass backdrop-brightness-0">
                    <div className="flex-1">
                        <NavLink to={'/'} className="btn btn-ghost text-xl no-underline">Blog18t</NavLink>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="glass backdrop-brightness-100 rounded-full shadow-none"
                        />
                        <div className="dropdown dropdown-end relative z-50">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50 absolute"
                                style={{ top: "100px", right: "0px" }}
                            >
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                <li>
                                    <a>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Scrollable Tabs */}
                <div
                    role="tablist"
                    className="tabs tabs-box flex flex-nowrap items-center overflow-x-auto whitespace-nowrap scroll-smooth glass backdrop-brightness-75"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {categories.map((item, index) => (
                        <NavLink
                            to={`/byCategory/${item.id}`}
                            key={index}
                            className={({ isActive }) =>
                                `btn tab px-4 py-2 m-2 whitespace-nowrap glass ${isActive ? 'tab-active backdrop-brightness-50' : ''
                                } no-underline`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Render child pages here */}
            <Outlet />


            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 row">
                <aside>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>
                        Developer18t Ltd.
                        <br />
                        Providing reliable tech since 2024
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.linkedin.com/in/tahin18t/'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18.5H6V10h2.5v8.5zM7.25 8.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.5 18.5H16V14c0-1.1-.02-2.5-1.5-2.5S13 12.9 13 14v4.5h-2.5V10H13v1.2h.04c.35-.7 1.2-1.45 2.46-1.45 2.63 0 3.11 1.73 3.11 3.98v4.75z"/>
                            </svg>
                        </a>
                        <a href='https://github.com/tahin18t'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-2.16c-3.2.7-3.87-1.55-3.87-1.55-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.3-.51-1.5.11-3.13 0 0 .96-.31 3.15 1.17A10.98 10.98 0 0 1 12 5.3c.97.004 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.63 1.63.24 2.83.12 3.13.74.8 1.18 1.82 1.18 3.07 0 4.39-2.69 5.36-5.25 5.64.41.36.78 1.07.78 2.15v3.2c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
                            </svg>
                        </a>
                        <a href='https://www.facebook.com/tahin18t'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Layout;
