import React from 'react'
import NeedToLearn from "./footer/NeedToLearn";

export default function Footer() {
    return (
        <div style={{
            position: 'fixed',
            bottom: '0px',
            width: '100%',
            background: '#CE93D8',
            padding: '10px'
        }}>
            <small style={{color: 'white'}}>&copy; Copyright {new Date().getFullYear()}, Janith Ukwattage</small>
            <div style={{
                display: 'inline',
                float: 'right'
            }}>
                <NeedToLearn />
                {/* <Button variant="contained" style={{
                    color: 'teal',
                    fontWeight: 'bold',
                    background: 'white'
                }}>Learn React</Button> */}
            </div>
        </div>
    )
}
