import logo from "../assets/lookgreat.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="bg-white antialiased border-b-2 border-black-500">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <Link to="/" title="home" className="">
                  <img className="block w-auto h-8" src={logo} alt="" />
                </Link>
              </div>

              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                <li>
                  <Link
                    to="/"
                    title="Home"
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700"
                  >
                    Home
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    to="/shop"
                    title="shop"
                    className="text-sm font-medium text-gray-900 hover:text-primary-700 "
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center lg:space-x-2">
              <button
                id="myCartDropdownButton1"
                data-dropdown-toggle="myCartDropdown1"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100  text-sm font-medium leading-none text-gray-900 "
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
              </button>

              <div
                id="myCartDropdown1"
                className="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg"
              >
                <div className="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      className="truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                    >
                      Apple iPhone 15
                    </a>
                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      $599
                    </p>
                  </div>

                  <div className="flex items-center justify-end gap-6">
                    <p className="text-sm font-normal leading-none text-gray-500 ">
                      Qty: 1
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem1a"
                      type="button"
                      className="text-red-600 hover:text-red-700 "
                    >
                      <span className="sr-only"> Remove </span>
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem1a"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                    >
                      Remove item
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      className="truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                    >
                      Apple iPad Air
                    </a>
                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      $499
                    </p>
                  </div>

                  <div className="flex items-center justify-end gap-6">
                    <p className="text-sm font-normal leading-none text-gray-500 ">
                      Qty: 1
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem2a"
                      type="button"
                      className="text-red-600 hover:text-red-700 "
                    >
                      <span className="sr-only"> Remove </span>
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem2a"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                    >
                      Remove item
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      className="truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                    >
                      Apple Watch SE
                    </a>
                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      $598
                    </p>
                  </div>

                  <div className="flex items-center justify-end gap-6">
                    <p className="text-sm font-normal leading-none text-gray-500 ">
                      Qty: 2
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem3b"
                      type="button"
                      className="text-red-600 hover:text-red-700 "
                    >
                      <span className="sr-only"> Remove </span>
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem3b"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                    >
                      Remove item
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      className="truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                    >
                      Sony Playstation 5
                    </a>
                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      $799
                    </p>
                  </div>

                  <div className="flex items-center justify-end gap-6">
                    <p className="text-sm font-normal leading-none text-gray-500 ">
                      Qty: 1
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem4b"
                      type="button"
                      className="text-red-600 hover:text-red-700 "
                    >
                      <span className="sr-only"> Remove </span>
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem4b"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                    >
                      Remove item
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      className="truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                    >
                      Apple iMac 20&quot;
                    </a>
                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      $8,997
                    </p>
                  </div>

                  <div className="flex items-center justify-end gap-6">
                    <p className="text-sm font-normal leading-none text-gray-500 ">
                      Qty: 3
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem5b"
                      type="button"
                      className="text-red-600 hover:text-red-700 "
                    >
                      <span className="sr-only"> Remove </span>
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem5b"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                    >
                      Remove item
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  title=""
                  className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
                  role="button"
                >
                  {" "}
                  Proceed to Checkout{" "}
                </a>
              </div>

              <div
                id="userDropdown1"
                className="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow "
              >
                <ul className="p-2 text-start text-sm font-medium text-gray-900 ">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "
                    >
                      {" "}
                      My Account{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "
                    >
                      {" "}
                      My Orders{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "
                    >
                      {" "}
                      Settings{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "
                    >
                      {" "}
                      Favourites{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "
                    >
                      {" "}
                      Delivery Addresses{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "
                    >
                      {" "}
                      Billing Data{" "}
                    </a>
                  </li>
                </ul>

                <div className="p-2 text-sm font-medium text-gray-900 ">
                  <a
                    href="#"
                    title=""
                    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 "
                  >
                    {" "}
                    Sign Out{" "}
                  </a>
                </div>
              </div>

              <button
                type="button"
                data-collapse-toggle="ecommerce-navbar-menu-1"
                aria-controls="ecommerce-navbar-menu-1"
                aria-expanded="false"
                className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md  p-2 text-gray-900 "
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
