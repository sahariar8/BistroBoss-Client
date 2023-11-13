import { Parallax, Background } from 'react-parallax';

const Cover = ({img,title,desc}) => {
    return (

        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
     <div className="hero h-[600px] bg-cover">
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:max-w-4xl bg-black bg-opacity-60 px-10 py-10">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{desc}</p>
          </div>
        </div>
      </div>
    </Parallax>
       
    );
};

export default Cover;