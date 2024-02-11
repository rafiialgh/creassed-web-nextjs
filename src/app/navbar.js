import Image from "next/image";
import Logo from "../../public/images/Logo.svg";
import SearchIcon from "../../public/images/Search.svg";
import ProfileIcon from "../../public/images/User_alt.svg";
import BagIcon from "../../public/images/Bag.svg";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-md">
      <div className="max-w-full px-2 mx-auto sm:px-6 lg:px-8 lg:mx-3">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center justify-center ml-2 sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0 logo">
              <a href="/">
                <Image
                  src={Logo}
                  alt="Creassed Logo"
                  className="block w-auto h-12"
                  width={100}
                  height={100}
                  priority
                />
              </a>
            </div>
            <div className="hidden sm:ml-20 sm:flex">
              <div className="flex items-center gap-10 align-middle">
                <a
                  className="text-sm font-medium text-black uppercase hover:text-gray-500"
                  href="/collections"
                >
                  Collections
                </a>
                <a
                  className="text-sm font-medium text-black uppercase hover:text-gray-500"
                  href="/products"
                >
                  Products
                </a>
                <a
                  className="text-sm font-medium text-black uppercase hover:text-gray-500≠–"
                  href="/about"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center w-auto pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex justify-center w-40 h-auto gap-6">
              <a href="#">
                <Image src={SearchIcon} alt="Search icon" className="w-7" />
              </a>
              <a href="#">
                <Image
                  src={ProfileIcon}
                  alt="Profile icon"
                  className="w-7"
                />
              </a>
              <a href="#">
                  <Image
                    src={BagIcon}
                    alt="Profile icon"
                    className="w-7"
                  />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
