import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import tw from 'tailwind-styled-components'

interface ICustomCardProps {
    title: React.ReactNode
    content: React.ReactNode
}

const CustomCard = (props: ICustomCardProps) => {
    const context = useContext(ThemeContext)

    console.log("Rendering CustomCard")

    return (
        <div className='bg-yellow-950 p-4 rounded-lg'>
            <div className="text-2xl font-bold basis-full">
                {props.title}
            </div>
            <div className="m-3">
                {props.content}
            </div>
            <div className="mt-3 text-xs">
                The value from context is 
                <span className='text-2xl pl-3'>{context.colorScheme === 'dark' ? `🌚` : `🌝` }</span>
            </div>
        </div>
    )
}

const card = tw.div`
    flex🌝
    bg
`

export default CustomCard