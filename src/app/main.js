// pages/index.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nick Huemmer - Web Developer</title>
      </Head>

      <div>
        <Canvas width="1090" height="1500" id="starfield" className="your-classes" />

        <Image className="your-classes" src="/img/starfield1.png" alt="starry night" width={500} height={300} />

        <Navigation />

        <GridContainer />

        <Footer />
      </div>
    </>
  );
}

function Canvas({ id, width, height, className }) {
  return (
    <canvas id={id} width={width} height={height} className={className}></canvas>
  );
}

function Navigation() {
  return (
    <nav className="your-classes">
      <Link className="your-classes" href="/experience">
        Experience
      </Link>
      <Link className="your-classes" href="https://portfolio-nickhuemmer.herokuapp.com/">
        Portfolio
      </Link>
      <Link className="your-classes" href="https://www.nickhuemmer.com">
        Blog
      </Link>
    </nav>
  );
}

function GridContainer() {
  return (
    <div className="your-classes">
      <div className="your-classes">
        <div className="your-classes">
          <h1 className="your-classes">Nick Huemmer</h1>
        </div>
      </div>

      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="your-classes">
      <Arrow id="left-arrow" />
      <IntroText />
      <Arrow id="right-arrow" />
    </div>
  );
}

function Arrow({ id }) {
  // You can replace the component content based on how you handle SVGs in your project
  return <svg id={id} className="your-classes"/>;
}

function IntroText() {
  return (
    <div className="your-classes">
      <h2 className="your-classes">Web Developer</h2>
    </div>
  );
}

function Footer() {
  return (
    <div className="your-classes">
      <div className="your-classes">
        <a href="https://twitter.com/NickHuemmer" target="blank" className="your-classes">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}

function TwitterIcon() {
  // You can replace the component content based on how you handle SVGs in your project
  return <svg className="your-classes"/>;
}
