import React, { useEffect } from 'react'

function OneComponent({ message, extraProp}) {
    console.log(message, extraProp)
    useEffect(() => {
        console.log("OneComponent");
    })

    return (
        <div>
        <p>{message}</p>
        <p>{extraProp}</p>
        </div>
    )
}

export default React.memo(OneComponent)