'use client'
import CustomCard from '@/components/CustomCard';
import Header from '@/components/Header';
import MyButton from '@/components/MyButton';
import ThemeProvider from '@/context/ThemeContext';
import { useEffect, useLayoutEffect, useRef } from 'react';

const colors = ['red', 'yellow', 'cyan', 'blue', 'violet', 'orange']

export default function Home() {

  const content = <>Card content loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum</>
  const ref = useRef()

  useEffect(() => {
    console.log(ref?.current)
    const int = setInterval(() => {
      const index = Math.floor(Math.random() * colors.length);
      ref?.current?.changeColor(`bg-${colors[index]}-900`)
    }, 2000)
    clearInterval(int)
    return () => {
      clearInterval(int)
    }
  }, [ref])
  
  useLayoutEffect(() => {
    console.log("layout started ......")
    for (let i = 0; i < 1000000000; i++) {

    }
    console.log("layout finished.....")
  }, [])

  return (
    <main>
      <ThemeProvider >
        <div className="h-screen bg-rose-950 bg-gradient-to-b from-rose-950 to-black flex-wrap">
          <Header />
          <div className="flex p-6">
            <div className="grid grid-cols-6 gap-4">
              <CustomCard title={<>Card Title</>} content={content} />
              <div>
                <MyButton ref={ref} >Ref Button</MyButton>
              </div>
              <div>
                <CustomCard title={<>Button Contents</>} content={<>{ }</>} />
              </div>
            </div>

          </div>

        </div>
      </ThemeProvider>
    </main>
  )
}


