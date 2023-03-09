import React from 'react';
import './App.css';
import heroImg from "./assets/image/hero.png";
import work1 from "./assets/image/work/1.jpg";
import work2 from "./assets/image/work/2.jpg";
import work3 from "./assets/image/work/3.jpg";
import work5 from "./assets/image/work/5.jpg";
import work6 from "./assets/image/work/6.jpg";
import cn from 'classnames'


function App() {

    return (
        <div className={'wrapper'}>
            <div className={'content'}>
                <div className="App">
                    <header className="hero-section">
                        <img data-speed='.6' className="hero" src={heroImg} alt="alt"/>
                        <div className="container">
                            <div className="main-head">
                                <h1 data-speed='.75' className="main-title">creative scroll</h1>
                            </div>
                        </div>
                    </header>
                    <div className="portfolio">
                        <div className="container">
                            <main className="gallery">
                                <div className="gallery-left" data-speed='.9' data-lag='0.5'>
                                    <img className="gallery-item" src={work1} alt="alt"/>
                                    <img className="gallery-item" src={work2} alt="alt"/>
                                    <div className={cn('text-block', 'gallery-item')}>
                                        <h2 className="text-block-head">Creative floating scroll with amazing parallax
                                            effect</h2>
                                        <p className="text-block-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do</p>
                                    </div>
                                    <img className="gallery-item" src={work6} alt="alt"/>
                                </div>
                                <div className="gallery-right" data-speed='1.1'>
                                    <div className={cn('text-block', 'gallery-item')}>
                                        <h2 className="text-block-head">Creative floating scroll with amazing parallax
                                            effect</h2>
                                        <p className="text-block-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed
                                            do</p>
                                    </div>
                                    <img className="gallery-item" src={work3} alt="alt"/>
                                    <img className="gallery-item" src={work5} alt="alt"/>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
