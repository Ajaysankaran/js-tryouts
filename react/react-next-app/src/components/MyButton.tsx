import React, { Reference, forwardRef, useImperativeHandle, useState } from 'react'

const MyButton = forwardRef((props: any, ref: any) => {
  const [color, setColor] = useState('bg-red-900')

  console.log("MyButton::Render")

  useImperativeHandle(ref, () => {
    return {
      changeColor(c: string) {
        console.log('changeColorTriggered', c)
        setColor(c)
      }
    }
  }, [])

  return (
    <button className={`p-2 rounded-md ${color}`} >{props.children}</button>
  )
})

export default MyButton