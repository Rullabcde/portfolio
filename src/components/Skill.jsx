import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Arrow = () => <div style={{ display: "none" }} />;

const Skill = () => {
  const clientLogos = [
    { id: 1, src: "/html.png", alt: "HTML" },
    { id: 2, src: "/css.png", alt: "CSS" },
    { id: 3, src: "/javascript.png", alt: "JavaScript" },
    { id: 4, src: "/bootstrap.png", alt: "Bootstrap" },
    { id: 5, src: "/tailwind.png", alt: "Tailwind" },
    { id: 6, src: "/react.png", alt: "React" },
    { id: 7, src: "/kotlin.png", alt: "Kotlin" },
    { id: 8, src: "/python.png", alt: "Python" },
    { id: 9, src: "/ubuntu.png", alt: "Ubuntu" },
    { id: 10, src: "/git.png", alt: "Git" },
  ];

  const logosForSlider = [...clientLogos, ...clientLogos];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="skill">
      <div className="mx-auto max-w-6xl pt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Skills.</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-5 -mt-1"></div>
        </div>

        <div className="w-full">
          <Slider {...settings}>
            {logosForSlider.map((logo) => (
              <div key={logo.id} className="px-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-28 w-auto mx-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Skill;
