

import React, { useState } from "react";
import Lightbox from "../LightBox/LightBox";
import './Gallery.scss';

import  imag1  from '../../assets/imgs/web-1.jpg';
import  imag2  from '../../assets/imgs/web-2.jpg';
import  imag3  from '../../assets/imgs/web-3.jpg';
import  imag4  from '../../assets/imgs/web-4.jpg';
import  imag5  from '../../assets/imgs/branding-1.jpg';
import  imag6  from '../../assets/imgs/branding-2.jpg';
import  imag7  from '../../assets/imgs/branding-3.jpg';
import  imag8  from '../../assets/imgs/branding-4.jpg';
import  imag9  from '../../assets/imgs/branding-5.jpg';

import  imag10  from '../../assets/imgs/advertising-1.jpg';
import  imag11  from '../../assets/imgs/advertising-2.jpg';
import  imag12  from '../../assets/imgs/advertising-3.jpg';




const images = [
    imag1,
    imag8,
    imag4,
    imag3, 
    imag2,
    imag5,
    imag7,
    imag6,
    imag9,
    imag10,
    imag11 ,
    imag12

    
];

    const Gallery = () => {

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
    <div className="holder" style={{display:"block"}} >
        <h2  style={{textAlign:"center" , margin:"30px 10px"}}>     Welcome To Our , Gallary </h2>

        <div className="gallery-grid "  >
            {images.map((src, index) => (
                <>
                    <img
                    key={index}
                    src={src}
                    className="gallery-image"
                    alt={`Gallery Image ${index + 1}`}
                    onClick={() => openLightbox(index)}
                    />
                </>


            ))}
            {lightboxOpen && (
                <>
                    <Lightbox
                        images={images}
                        currentIndex={currentImageIndex}
                        closeLightbox={closeLightbox}
                        setCurrentImageIndex={setCurrentImageIndex}
                    />

                    


                </>
                
            )}
        </div>
    </div>
    );
};

export default Gallery;
