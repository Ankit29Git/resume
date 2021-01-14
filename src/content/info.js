const Info = () => {
    return (
        <div className='info-container'>
            <div className='image-container'>
                <div className='note-on-img'>*This is a candid picture. Nothing as serious as it looks.</div>
            </div>
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