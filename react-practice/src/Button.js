import React, {useState} from 'react'



function Button() {

    const [buttonText, setButtonText] = useState("Click me!") 
    if(buttonText === "Stop clicking me!") {
        setTimeout(() => {
            setButtonText("Click me!")
          }, 3000)
        }
    let number = 0
    return (
        <>
        {/* <button onClick={() => {
            number = number + 1
            console.log(number)
        }}>Button {number}</button> */}
        
        <button onClick={() => {
            if(buttonText === "Click me!") {
                setButtonText("You clicked me!")
            }else if (buttonText === "You clicked me!") {
                setButtonText("Stop clicking me!")
            }
        }}>{buttonText}</button>
        </>
    )
}

export default Button
