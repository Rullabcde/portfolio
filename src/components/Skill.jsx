import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components (Invisible)
const Arrow = () => <div style={{ display: "none" }} />;

const Skill = () => {
  const clientLogos = [
    { id: 1, src: "/public/html.png", alt: "HTML" },
    { id: 2, src: "/public/css.png", alt: "CSS" },
    { id: 3, src: "/public/javascript.png", alt: "JavaScript" },
    { id: 4, src: "/public/bootstrap.png", alt: "Bootstrap" },
    { id: 5, src: "/public/tailwind.png", alt: "Tailwind" },
    { id: 6, src: "/public/react.png", alt: "React" },
    { id: 7, src: "/public/kotlin.png", alt: "Kotlin" },
    { id: 8, src: "/public/python.png", alt: "Python" },
    { id: 9, src: "/public//ubuntu.png", alt: "Ubuntu" },
    { id: 10, src: "/public/git.png", alt: "Git" },
  ];

  // Duplicate logos to create a smoother infinite effect
  const logosForSlider = [...clientLogos, ...clientLogos];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous movement
    cssEase: "linear",
    pauseOnHover: false, // Don't pause on hover for continuous effect
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
