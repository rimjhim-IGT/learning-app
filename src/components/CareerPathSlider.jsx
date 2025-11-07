import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeadingComp from "./headingComp";

const courses = [
    {
        id: 1,
        image: "/images/course1.jpg",
        title: "Finance fundamentals course",
        author: "Kelly Anderson",
    },
    {
        id: 2,
        image: "/images/course2.jpg",
        title: "Finance fundamentals course",
        author: "Kelly Anderson",
    },
    {
        id: 3,
        image: "/images/course3.jpg",
        title: "Finance fundamentals course",
        author: "Kelly Anderson",
    },
    {
        id: 4,
        image: "/images/course2.jpg",
        title: "Finance fundamentals course",
        author: "Kelly Anderson",
    },
    {
        id: 5,
        image: "/images/course3.jpg",
        title: "Finance fundamentals course",
        author: "Kelly Anderson",
    },
];

const CareerPathSlider = () => {
    return (
        <section className="py-6 md:py-12 bg-white relative">
            <div className="max-md:container max-w-[1250px] mx-auto">
                <div className="absolute w-36 h-36 md:w-[515px] md:h-[515px] top-0 left-0 z-[0]">
                    <img src="/images/circles.png" alt="circle-image" className="h-full w-full" />
                </div>
                <div className="absolute w-36 h-36 md:w-[414px] md:h-[414px] bottom-1 right-[8%] z-[0]">
                    <img src="/images/circles1.png" alt="circle-image" className="h-full w-full " />
                </div>
                <div className="md:after:content-[' '] md:before:content-[' '] after:absolute md:after:w-1/3 after:h-full after:top-0 after:left-0  after:bg-gradient-to-r after:from-white after:to-transparent after:z-[1] before:absolute md:before:w-1/3 before:h-full before:bottom-0 before:right-0  before:bg-gradient-to-l before:from-white before:to-transparent before:z-[1]"></div>
                <HeadingComp title={'Choose  Your Career Path'} description={"Nous nous engageons à fournir une éducation technologique à la prochaine génération de leaders au Bénin, en promouvant l'égalité et l'autonomisation"} />
                <Swiper
                    modules={[Navigation]}
                    navigation
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={60}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 60 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                    className="mySwiper !px-12 md:!px-10 after:content-[' '] after:absolute md:after:w-1/3 after:h-full after:top-0 after:left-0  after:bg-gradient-to-r after:from-white after:to-transparent after:z-[1] relative before:content-[' '] before:absolute md:before:w-1/3 before:h-full before:bottom-0 before:right-0  before:bg-gradient-to-l before:from-white before:to-transparent before:z-[2] !pb-5"
                >
                    {courses.map((course) => (
                        <SwiperSlide
                            key={course.id}
                            className="transition-all duration-300 ease-in-out w-[280px] md:w-[340px] lg:w-[360px] py-8 "
                        >
                            {({ isActive }) => (
                                <div
                                    className={`rounded-2xl overflow-hidden bg-white transform transition-all duration-500  shadow-lg  ${isActive
                                        ? "scale-105 border-2"
                                        : "scale-90 "
                                        }`}
                                >
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-72 object-cover rounded-t-2xl overflow-hidden"
                                    />
                                    <div className="p-2.5 md:px-5 md:py-2.5 text-left">
                                        <h3 className="font-semibold text-xl md:text-2xl  text-black">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-[#A5A6AA] font-light md:mt-2.5 mb-3 md:mb-5">
                                            By {course.author}
                                        </p>
                                        <hr className="w-full absolute left-0 right-0" />

                                        <div className="flex items-center justify-between text-gray-500 text-xs md:text-sm pt-4 pb-5">
                                            <span className="flex items-center gap-2">
                                                <img src="/images/time-icon.png" alt="icon" className="h-4 w-4" />
                                                22hr 30min</span>
                                            <span className="flex items-center gap-2">
                                                <img src="/images/vedio-icon.png" alt="icon" className="h-3 md:h-4 w-auto" />
                                                34 Courses</span>
                                            <span className="flex items-center gap-2"><img src="/images/download-icon.png" alt="icon" className="h-4 w-4" />250 Sales</span>
                                        </div>

                                        <button className="w-full text-sm md:text-base font-openSanse  bg-orange hover:bg-[#d63e3f] text-white py-2 md:py-3.5 font-semibold transition rounded-xl">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="text-sm md:text-base font-openSanse bg-dark hover:bg-black text-white px-11 py-2.5 font-semibold transition rounded-xl mx-auto w-auto block">
                    View All
                </button>
            </div>
        </section>
    );
};

export default CareerPathSlider;
