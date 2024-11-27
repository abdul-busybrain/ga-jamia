import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
import Logo from "../ui/Logo";
import BecomeInstructor from "./BecomeInstructor";
import Search from "./Search";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

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

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    doSignOut().then(() => {
      navigate("/login");
    });
  };

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
                {userLoggedIn ? (
                  <Button onClick={handleLogout}>Logout</Button>
                ) : (
                  <>
                    <Button onClick={() => handleNavigation("/login")}>
                      Login
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleNavigation("/register")}
                    >
                      Register
                    </Button>
                  </>
                )}
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
