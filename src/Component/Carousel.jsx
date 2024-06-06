import React, { useState } from 'react'

const images = [
    'https://tjproduction.imgix.net/files/1003365_401309_Ecomm_Front_M_I_AIR_4INHMK_5.9.24_crop_badge.jpg',
    'https://tjproduction.imgix.net/files/HammockPouchLP_05_PDP_Interior-Copy_b9e3674e-64f8-4dcd-90b5-ab64931fbf56.jpg',
    'https://tjproduction.imgix.net/files/1001858_Dress-Blues-Turbulence-Grey-Black_MLTIPK_M_I_SS_4INBB.jpg'
  ]
function Carousel() {
    const [currIndex, setCurrIndex] = useState(0);

    const goToPrev = () => {
        setCurrIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    const goToNext = () => {
        setCurrIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    };

    return (
        <>
            <div className='carousel-heading'>This is Carousel page</div>
            <div className='carousel-container'>
                <span className='arrow left' onClick={() => goToPrev()}>
                    {'<'}
                </span>
                <img className='carousel-image'  src={images[currIndex]}/>
                <span className='arrow right' onClick={() => goToNext()}>
                    {'>'}
                </span>
            </div>
        </>
    )
}

export default Carousel