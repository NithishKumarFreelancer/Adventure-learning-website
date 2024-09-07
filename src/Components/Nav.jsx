function Nav() {
  return (
    <nav className="sticky -top-0 z-50 border-b  max-1088:bg-white  border-navBorder bg-navbg">
      <div className="container lp:max-w-full tb:max-w-full sm:max-w-full lp:px-10 h-16 flex mx-auto  sm:px-0">
        <div className="flex justify-between items-center flex-1 p-4">
          <div className="flex gap-4">
            <img
              className="menu-btn sm:flex tb:flex max-1088:flex hidden w-6"
              src="menu.svg"
              alt=""
            />
            <img className="w-36" src="adventure-logo.svg" alt="" />
          </div>
          <div className="flex justify-between items-center menu-text  lp:gap-6 gap-16">
            <h className="menuActive menus">Home</h>
            <h className="menus">Courses</h>
            <h className="menus">About us</h>
            <h className="menus">Contact  us</h>
            <h className="menus">Login</h>
            <p className="try-Free-btn">Sign up</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;