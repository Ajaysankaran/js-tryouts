import { ColorScheme, ColorSchemes } from "@/model/core-types"
import { SetStateAction, useEffect, useState, Dispatch } from "react"
import React from "react"

export const ThemeContext = React.createContext({ colorScheme: 'dark', setColorScheme: (mode: ColorSchemes) => {} })

interface ThemeProviderProps {
    children: React.ReactNode
}


const ThemeProvider = (props: ThemeProviderProps) => {

    const [theme, setTheme] = React.useState(ColorSchemes.DARK)


    return (
        <ThemeContext.Provider value={{ colorScheme: theme, setColorScheme: setTheme }} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;