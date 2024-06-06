import React, { useEffect } from 'react'

function TwoComponent() {

    useEffect(() => {
        console.log("TwoComponent");
    })

    return (
        <div>TwoComponent</div>
    )
    }

export default React.memo(TwoComponent);