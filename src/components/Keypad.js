// Code Keypad Component Here

import React from 'react'

function Keypad (){

    function enterPw(){
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" onChange={enterPw}></input>
        </div>
    )
}

export default Keypad;