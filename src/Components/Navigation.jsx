const Navigation = () => {
  return (
    <>
      <nav className="navbar shadow-sm md:px-20 px-4 py-4 items-center">
        <div className="flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case p-0 text-base font-bold sm:text-2xl">
            CS — Ticket System
          </a>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="btn bg-gradient-to-br active:bg-gradient-to-tl active:from-custom-purple-light active:bg-custom-purple-dark from-custom-purple-dark to-custom-purple-light text-white btn-sm">
            + New Ticket
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
