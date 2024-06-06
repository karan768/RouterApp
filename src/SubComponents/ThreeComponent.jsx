import React, { useEffect, useState } from 'react'
import OneComponent from './OneComponent'
import TwoComponent from './TwoComponent'
import WithExtraProp from './WithExtraProp';

function ThreeComponent() {

    const [countNew, setCountNew] = useState(0);

    useEffect(() => {
        console.log('ThreeComponent')
    }, [])

    const WithExtraProps = WithExtraProp(OneComponent)

    return (
        <>
            <div>ThreeComponent</div>
            <button onClick={() => setCountNew(countNew + 1)}>Increase</button>
            <p>{countNew}</p>
            <WithExtraProps  message="Hello, world!" />
            <TwoComponent />
        </>
    )
}

export default ThreeComponent