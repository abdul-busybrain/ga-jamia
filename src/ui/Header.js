import Logo from "../ui/Logo";
import BecomeInstructor from "./BecomeInstructor";
import Search from "./Search";
import Button from "./Button";
import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(function () {
    const handleScroll = () => {
      const header = document.getElementById("main-header");
      const sticky = header.offsetTop;
      setIsSticky(window.pageYOffset > sticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="main-header"
        className={`bg-white ${
          isSticky ? "fixed top-0 left-0 right-0 shadow-md" : ""
        } z-50`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          <Logo />

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center">
              <BecomeInstructor />
            </div>

            <div className="flex items-center gap-4">
              <Search />
              <HiShoppingCart className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />

              <div className="flex items-center gap-2">
                <Button>Login </Button>
                <Button variant="secondary">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isSticky && <div className="h-16" />}
    </>
  );
}

export default Header;
