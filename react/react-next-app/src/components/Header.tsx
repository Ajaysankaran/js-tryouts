import { ThemeContext } from '@/context/ThemeContext'
import { ColorScheme, ColorSchemes } from '@/model/core-types'
import { DarkMode, LightMode } from '@mui/icons-material'
import Link from 'next/link'
import React, { useContext } from 'react'

interface IHeaderProps {

}

const Header = (props: IHeaderProps) => {

    const themeContext = useContext(ThemeContext)

    return (
        <nav className="flex basis-full justify-between p-3	h-1/6 ">
            <div>
                Demo App
                <ul className='inline pl-4'>
                    <li className='inline pl-2'><Link href={"home"}>Home</Link></li>
                    <li className='inline pl-2' ><Link href={'deferred'}>useDeferredValue</Link></li>
                    <li className='inline pl-2' ><Link href={'suspense'}>{"<Suspense/>"}</Link></li>
                </ul>
            </div>
            <div>
                <ul className='inline'>
                    <li className='inline pr-5'>
                        <button onClick={() => themeContext.setColorScheme(ColorSchemes.LIGHT)}><LightMode /></button>
                        <button onClick={() => themeContext.setColorScheme(ColorSchemes.DARK)}><DarkMode /></button>
                    </li>
                    <li className='inline'>
                        <Link href={"login"}>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header