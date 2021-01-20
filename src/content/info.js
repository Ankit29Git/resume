import LazyLoadImages from './ImageLoaderCompo/loadImage';
import Gallery from './gallery';
// import meface from '../content/images/meface.jpg';
const Info = () => {
    // console.log('meface :', meface);
    return (
        <div>
            <div className='info-container'>
                <LazyLoadImages imgSrc='https://res.cloudinary.com/dgcxsgxi8/image/upload/v1611057894/IMG_1653_md8e0l.jpg' />
                <div className='content'>
                    <article>
                        <p> In the beginning of my professional career, I stumbled upon a project on <mark>React.Js</mark> and since then its been with me (or, is it the other way!). React has been evolving since. Class based components, Functional components, Life cycle events etc. just make it very easy to understand and use. I have been working with React.JS, Redux, HTML, CSS, Javascript for nearly 4 yrs now. I have also engaged with SCSS, Antd and MaterialUI while working on different projects. </p>
                    </article>
                </div>
            </div>

            <Gallery />
        </div>



    );
}

export default Info;