import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Poke Death Battle
        </Link>
      </div>
      <ul className="menu menu-horizontal p-0">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pokemon">Details</Link>
        </li>
        <li>
          <Link href="/">Vote Results</Link>
        </li>
      </ul>
      <div className="flex-none gap-2">
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
