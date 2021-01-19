import LazyLoadImages from './ImageLoaderCompo/loadImage';
// import meface from '../content/images/meface.jpg';
const Info = () => {
    // console.log('meface :', meface);
    return (
        <div className='info-container'>
            <LazyLoadImages imgSrc='https://lh3.googleusercontent.com/JxwmAvmsLIibIEySGtm_ckJN30IH2_6lw4pFxXd6Gh1Lpra2w71RmY_kMFnzqKDCt3t-7eXa7tc4qVGKDsazf5ytAVf-d63qxkdw1GTF5s2CCRZSIsOO1X8GJaTuwu_AQwpa4YXVItPzm7ZjP_iancaTBa_QJUgaw4-n1qll4TgX_IgJtUUbmoXV6ruJ5AxF8283h_FAYJPG0596z0qTZiyQvwr91A3v5GfSRhnBd_fQE5B7z_tmZn9GFbptVCeSfb7omqb_gZKjPHHH5hBlODCOpTql9OY5E9ePsCuP2LM0QMF3TxZnpcJ6DGsZNfNEs5XTAr0hNGhdu8q6EVtOe8R_jRG9yZLWybwFxxCcu6piPDMXSsKUQGD6hC0FF33-YBCDjY0qj5PdqaHuO1oXjaI5jgIcwEZ4_AqXjDS2kpcZJIpdWofI7Di6H9_iKyLPR51UHJvEEU5eE1KW9LvzUKAjCwNhxOgpL6kuvIbu1MdQruHDuQuJd3A9NUWsqceYgGKA4SoisWM5HAwMxL-52NrClobFsvalQuBYjyRl7IP3jZM0kRu2H4_VxgjBdkmaRGjjK-WbCxYrpv7X6-MpAPwQZXQJms-jO-leO6u7iKgU6jeDsMjqlmUcN1wEwNyhzlwxeueM7f55jMwcQ0ZC6sgdKJE_PF5bay2cyMndgiEpil5hDzp46WQr2MrmAA=w1204-h903-no?authuser=1' />
            {/* <div className='image-container'>
                <div className='note-on-img'>*This is a candid picture. Nothing as serious as it looks.</div>
            </div> */}
            <div className='content'>
                <article>
                    <p> In the beginning of my professional career, I stumbled upon a project on <mark>React.Js</mark> and since then its been with me (or, is it the other way!). React has been evolving since. Class based components, Functional components, Life cycle events etc. just make it very easy to understand and use. I have been working with React.JS, Redux, HTML, CSS, Javascript for nearly 4 yrs now. I have also engaged with SCSS, Antd and MaterialUI while working on different projects. </p>
                    {/* <br />
                    <p> Along with React, I have been trying to go better with the other part of React universe i.e <ins>React Native</ins>. To learn using Node, Express and Mongo is also on cards and I do try to catch up with these whenever possible.</p> */}
                </article>
            </div>
        </div>
    );
}

export default Info;