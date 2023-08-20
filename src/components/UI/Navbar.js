import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Categoris</a>
                <ul className="p-2">
                  <li>
                    <Link href="/category/processor">CPU / Processor</Link>
                  </li>
                  <li>
                    <Link href="/category/motherboard">Motherboard</Link>
                  </li>
                  <li>
                    <Link href="/category/ram">RAM</Link>
                  </li>
                  <li>
                    <Link href="/category/supply">Power Supply Unit</Link>
                  </li>
                  <li>
                    <Link href="/category/storage">Storage Device</Link>
                  </li>
                  <li>
                    <Link href="/category/monitor">Monitor</Link>
                  </li>
                  <li>
                    <Link href="/category/others">Others</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/pcbuilder" className="btn btn-sm btn-primary ml-5">
                  PC Builder
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            PC-CLOUD
          </Link>
        </div>

        <div className="dropdown dropdown-hover hidden lg:block">
          <label tabIndex={0} className=" m-1">
            <div className="flex items-center cursor-pointer">
              <p>Categoris</p>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/category/processor">CPU / Processor</Link>
            </li>
            <li>
              <Link href="/category/motherboard">Motherboard</Link>
            </li>
            <li>
              <Link href="/category/ram">RAM</Link>
            </li>
            <li>
              <Link href="/category/supply">Power Supply Unit</Link>
            </li>
            <li>
              <Link href="/category/storage">Storage Device</Link>
            </li>
            <li>
              <Link href="/category/monitor">Monitor</Link>
            </li>
            <li>
              <Link href="/category/others">Others</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/pcbuilder" className="btn btn-sm btn-primary ml-5">
                PC Builder
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center gap-5">
            {session?.user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <div className="text-xl h-full text-white bg-primary flex justify-center items-center">
                      {session?.user?.name?.substring(0, 1)}
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href="/profile" className="justify-between">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <button onClick={() => signOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link href="/login">
                <button className="btn btn-sm btn-success">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
