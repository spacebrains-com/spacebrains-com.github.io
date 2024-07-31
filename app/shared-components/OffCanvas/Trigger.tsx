import React, { useContext } from 'react'
import { AppContext } from './Context'
import { TriggerProps } from './Props'
import Image from 'next/image'
export function Trigger({
    component = 'button',
    className = 'offcanvas-trigger',
    styles = {},
    children
}: TriggerProps) {
    const { handleOpen, randomId } = useContext(AppContext)

    return (
      
        <button id="navbar-toggle-btn" onClick={handleOpen} className="navbar-toggler w-[32px] h-[32px] xl:hidden absolute right-10" type="button" >
                <img src="./img/mobileHamburgerMenu.png" alt="menu" className="navbar-toggler-icon" />
            </button>
       
    )
}