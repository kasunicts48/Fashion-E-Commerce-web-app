import React from 'react'
import SingleCartItemLayout from './cartItem/SingleCartItemLayout'

export default function CartItem({itemList}) {
  return (
    <div>
        {itemList.map((val,key) => {
            return <SingleCartItemLayout key={key} cartItem={val} location={key} />
        })}
    </div>
  )
}
