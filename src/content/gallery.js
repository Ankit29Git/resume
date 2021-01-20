import { imagesDelhi } from '../utilities/utility';

const Gallery = () => {
    return (
        <div className="gallery">
            <h3>Gallery</h3>
            <p className="delhi-caption">Inspired by a video posted on Youtube, I was planning to visit Qutub Minar, the tallest standing brick Minaret in the world. Luckily enough, even in the year of pandemic, the stars conspired to make me reach Delhi to attend one of my cousins wedding. Not only did I visited the magnificent Qutub Minar complex, I got to see the Red Fort too. I have had seen both these places earlier, but that was some 15-16 years ago. Here, glimpses of the tour.</p>
            <div class="masonry-layout">
                {
                    imagesDelhi.map(url =>
                        <div class="masonry-layout__panel">
                            <img src={url} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Gallery;
