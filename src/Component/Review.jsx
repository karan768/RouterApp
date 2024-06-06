import React, { useState } from 'react'

function Review() {
    const [rating, setRating] = useState(0);
    const [hoverStar, setHoverStar] = useState(rating)

    const handleClick = (i) => {
        setRating(i+1);
    }

    return (
        <>
            <div className='review-heading'>Review page</div>
            <div className='review-container'>
                {
                    [...Array(5)].map((_, i) => {
                        return (
                            <span
                                key={i}
                                onClick={() => handleClick(i)}
                                className={`${i+1 <= ((rating && hoverStar) || hoverStar) ? 'selected' : ''} review-star`}
                                onMouseEnter={() => {
                                    setHoverStar(i+1)
                                }}
                                onMouseLeave={() => {
                                    setHoverStar(rating)
                                }}>
                            &#9733;</span>
                        )
                    })
                }
            </div>
            <div className='review-count'>
                <span>Rating : {rating}</span>
            </div>
        </>
    )
}

export default Review