import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const Links = <>
        <div className="flex gap-2">
            <Link href={'/'}>
                <li><button className="btn">Home</button></li>
            </Link>
            <Link href={'/about'}>
                <li><button className="btn">About</button></li>
            </Link>
            <Link href={'/faq'}>
                <li><button className="btn">FAQ</button></li>
            </Link>
        </div>
    </>

    return (
        <div className="bg-green-400">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                Links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Next.Js</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={user ? "/api/auth/logout" : "/api/auth/login"}>
                        <button className="btn  border border-black px-4 py-2 rounded-md">
                            {user ? "Log Out" : "Log In"}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;