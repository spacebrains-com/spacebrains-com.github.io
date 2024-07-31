"use client"
import React, { useCallback, useContext, useEffect, useState } from 'react'
import scss from './OffCanvas.module.scss'
import { AppContext } from './Context'
import { OffcanvasProps } from './Props'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { headerCopy } from '@/app/copy/header'




export function Offcanvas({

    position = 'right',
    backdrop = true,
    allowClickAway = true,
    allowEsc = true,
    allowScroll = true,
    className = 'simple-offcanvas',
    styles = {},
    children
}: OffcanvasProps) {
    const { handleClose, isOpen, randomId } = useContext(AppContext)
    const router = usePathname();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        if (router) {
            setCurrentPath(router);
        }
    }, [router]);
    const onClickOutside = useCallback(() => {
        if (!allowClickAway) return

        if (isOpen) {
            if (handleClose) handleClose()
        }
    }, [allowClickAway, isOpen, handleClose])

    const onEscKey = useCallback(
        (event: KeyboardEvent) => {
            if (!allowEsc) return

            if (event.key === 'Escape') {
                if (isOpen) {
                    if (handleClose) handleClose()
                }
            }
        },
        [allowEsc, isOpen, handleClose]
    )

    useEffect(() => {
        document.addEventListener('keydown', onEscKey, false)
        return () => document.removeEventListener('keydown', onEscKey)
    }, [onEscKey])



    useEffect(() => {
        if (!allowScroll) {
            if (isOpen) document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen, allowScroll])

    return (
        <>
            <div
                id={`offcanvas_${randomId}`}
                className={`${scss.offcanvas} ${scss[position]} ${isOpen ? scss.show : ''
                    } ${className}  bg-neutral-900`}
                tabIndex={-1}
                style={styles}
                role="dialog"
                aria-labelledby={scss.title}
                aria-modal="true"
                onClick={(event) => event.stopPropagation()}
                aria-hidden="true"
            >
                <div className={scss.header}>

                    <button
                        className={scss.close}
                        onClick={handleClose}
                        type="button"
                        tabIndex={0}
                        aria-label="Close"
                    />
                </div>
                <div className={scss.body}>
                    <ul className=" px-4 list-group">
                        <li className="nav-item my-3 list-group">
                            <Link className={`lg:text-2xl text-lg font-normal leading-6 text-white text-decoration-none ${currentPath === "/" ? 'gradient-text' : ''}`}
                                href="/" target="_self" onClick={handleClose}>Home</Link>
                        </li>
                        {headerCopy.nav.map((link, index) => (
                            <li key={index} className="nav-item my-3 list-group">
                                <Link className={`lg:text-2xl text-lg font-normal leading-6 text-white text-decoration-none ${currentPath === link.url ? 'gradient-text' : ''}`}
                                    href={link.url} target={link.target} onClick={handleClose}>{link.name}</Link>
                            </li>
                        ))
                        }

                    </ul>
                   
                </div>
            </div>
            {backdrop && (
                <div onClick={handleClose} className={`${scss.backdrop} ${isOpen ? scss.show : ''}`} />
            )}
        </>
    )
}