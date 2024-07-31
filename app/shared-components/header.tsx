"use client"
import { headerCopy } from "../copy/header"
import { OffcanvasProvider } from "./OffCanvas/Context";
import { Offcanvas } from "./OffCanvas/OffCanvas";
import { Trigger } from "./OffCanvas/Trigger";


export default function Header() {
    const handleOpen = () => console.log("");
    const handleClose = () => console.log("");
    return (
        <header className="w-full absolute mx-auto">
            <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 pt-5  ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <div className="flex items-center lg:order-2">

                    <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                        <Trigger />
                        <Offcanvas />
                    </OffcanvasProvider>
                    </div>
                    <div className="hidden justify-center items-center w-full xl:flex lg:w-full lg:order-1 mx-auto " id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-40 lg:mt-0">
                            {headerCopy.nav.map((item, index) =>
                            (
                                <li key={index}>
                                    <a href={item.url}
                                        target={item.target}
                                        className="block text-base uppercase  py-2 pr-4 pl-3 font-light text-Helvetica">
                                        {item.name}
                                    </a>
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}