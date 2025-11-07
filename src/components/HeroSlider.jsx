import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        id: 1,
        image: "/images/hero1.png",
       
    },
    {
        id: 2,
        image: "/images/hero1.png",
       
    },
    {
        id: 3,
        image: "/images/hero1.png",
     
    },
];

const HeroSlider = () => {
    return (
        <section className="relative w-full h-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={false}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-[520px]  md:h-full ">
                            <img
                                src={slide.image}
                                alt="Slide background"
                                className="w-full h-full object-cover brightness-50"
                            />

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20 text-white z-10">
                                <h1 className="text-3xl md:text-5xl font-bold leading-tight font-sourceSans">
                                    Améliorez <span className="text-orange">Vos</span> <br />
                                    <span className="text-orange">Compétences</span> Pour Faire <br />
                                    Progresser Votre <span className="text-orange">Carrière</span>
                                </h1>

                                <p className="mt-7 text-sm md:text-base text-white font-light leading-relaxed max-w-xl font-sourceSans">
                                    Nous nous engageons à fournir une éducation technologique à la prochaine génération <br/>
                                    de leaders au Bénin, en promouvant l'égalité et l'autonomisation.
                                </p>

                                <div className="mt-8 flex gap-4 md:gap-7">
                                    <button className="px-4 md:px-10 py-2 md:py-3.5 border border-whiete text-white font-onenSans font-semibold rounded-lg md:rounded-xl shadow hover:bg-white hover:text-orange transition">
                                        Apply Now
                                    </button>
                                    <button className="px-4 md:px-10 py-2 md:py-3.5 bg-orange text-white font-onenSans font-semibold rounded-lg md:rounded-xl shadow hover:bg-white hover:text-orange transition">
                                        Browse Courses
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSlider;
