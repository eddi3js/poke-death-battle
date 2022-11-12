import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl hidden md:flex"
        >
          Poke Death Battle
        </Link>
        <button className="btn btn-circle bg-base-200/[0.3] focus:bg-base-200/[0.7] border-none text-secondary hover:text-primary flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      <ul className="menu menu-horizontal p-0">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pokemon">Details</Link>
        </li>
        <li>
          <Link href="/results">Vote Results</Link>
        </li>
      </ul>
      <div className="flex-none gap-2 hidden md:flex pr-2 md:pe-0">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                width={80}
                height={80}
                src="https://placeimg.com/80/80/people"
                alt=""
              />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
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
  );
}
