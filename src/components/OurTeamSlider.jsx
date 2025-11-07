import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const courses = [
    {
        id: 1,
        image: "/images/our-team.png",
        category: "UI/UX Design",
        title: "UI/UX Design for Beginners",
        time: "22hr 30min",
        coursesCount: 34,
        sales: 250,
    },
    {
        id: 2,
        image: "/images/our-team.png",
        category: "UI/UX Design",
        title: "UI/UX Design for Beginners",
        time: "22hr 30min",
        coursesCount: 34,
        sales: 250,
    },
    {
        id: 3,
        image: "/images/our-team.png",
        category: "UI/UX Design",
        title: "UI/UX Design for Beginners",
        time: "22hr 30min",
        coursesCount: 34,
        sales: 250,
    },
    {
        id: 4,
        image: "/images/our-team.png",
        category: "UI/UX Design",
        title: "UI/UX Design for Beginners",
        time: "22hr 30min",
        coursesCount: 34,
        sales: 250,
    },
];

const OurTeamSlider = () => {
    return (
        <section className="">
            <div className="pt-6 md:pt-20 bg-[#F8F8F8] pb-40">
                {/* Header and Description */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 max-md:mb-6 md:gap-8 pb-12 container">
                    <div className="lg:w-1/2 font-sourceSans">
                        <p className="text-orange font-semibold mb-2 text-2xl ">ITTIQ helps you design,</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-lg">
                            Deliver, Manage, and Sustain Talent Development Solutions
                        </h2>
                        <p className="font-semibold text-lg mt-2 max-w-md">for today and the future</p>
                    </div>
                    <div className="lg:w-1/2 text-dark font-light text-sm md:text-base font-sourceSans">
                        Our team of experts brings a wealth of experience and knowledge to every client
                        engagement, ensuring that we understand your unique needs and challenges. We work
                        with you to develop customized talent solutions that align with your business strategy,
                        culture, and goals...<span className="text-orange cursor-pointer">Read More</span>
                    </div>
                </div>

            </div>
            <div className="bg-white py-6">
                <div className="max-w-[1250px] mx-auto -mt-96 pt-48 ">

                    {/* Swiper slider */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{
                            delay: 2500,
                        }}
                        slidesPerView={3}
                        spaceBetween={60}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 60 },
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3, spaceBetween: 40 },
                        }}
                        className="our-team-swiper !px-12 md:!px-10"
                    >
                        {courses.map((course) => (
                            <SwiperSlide key={course.id}>
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col mb-3">
                                    <img src={course.image} alt={course.title} className="w-full h-60 object-cover"
                                    />
                                    <div className="p-3 md:p-5 flex flex-col flex-grow">
                                        <span className="text-gray-400 text-xs mb-1">{course.category}</span>
                                        <h3 className="text-lg font-semibold mb-3">{course.title}</h3>
                                        <div className="flex items-center justify-between text-gray-500 text-xs md:text-sm mb-6">
                                            <div className="flex items-center gap-1">
                                                <img src="/images/time-icon.png" alt="time" className="h-4 w-4" />
                                                <span>{course.time}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <img src="/images/vedio-icon.png" alt="courses" className="h-4 w-5" />
                                                <span>{course.coursesCount} Courses</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <img src="/images/download-icon.png" alt="sales" className="h-4 w-4" />
                                                <span>{course.sales} Sales</span>
                                            </div>
                                        </div>
                                        <button className="mt-auto bg-orange hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OurTeamSlider;
