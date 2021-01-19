import { useState, useEffect } from 'react';

const LazyLoadImages = ({imgSrc}) => {
    const [loaded, loadSrc] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.onload = () =>loadSrc(true);
        img.src = imgSrc;
    },[imgSrc]);
    
    return (
        <div className={loaded ? 'image-container' : 'no-class'}>
            <div className='note-on-img'>*This is a candid picture. Nothing as serious as it looks.</div>
        </div>
    );
}

export default LazyLoadImages;