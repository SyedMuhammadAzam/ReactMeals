import React from 'react'

const MyContext = React.createContext(
    {
        items : [],
        totalAmount : 0 ,
        addItem :(item)=>{} ,
        removeItem : (id)=>{} ,
    }
)
export default MyContext;