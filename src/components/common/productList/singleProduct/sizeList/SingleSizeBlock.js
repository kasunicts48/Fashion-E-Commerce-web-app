import React from 'react'

export default function SingleSizeBlock({ sizeValue, flag }) {
    return (
        <div style={{
            border: `2px solid ${flag ? "#9C27B0" : "#BDBDBD"}`,
            color: flag ? "#9C27B0" : "#BDBDBD",
            background: flag ? "#E1BEE7" : "white",
        }}>
           {sizeValue} 
        </div>
    )
}
