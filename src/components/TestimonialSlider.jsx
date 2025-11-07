import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const TestimonialSlider = () => {
    const testimonials = [
        { id: 1, image: "/images/user1.png", name: "Dannette P. Cervantes", designation: "Web Design", data: "“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”" },
        { id: 2, image: "/images/user2.png", name: "Clara R. Altman", designation: "UI&UX Design", data: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”" },
        { id: 3, image: "/images/user1.png", name: "Dannette P. Cervantes", designation: "Web Design", data: "“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”" },
        { id: 4, image: "/images/user2.png", name: "Clara R. Altman", designation: "UI&UX Design", data: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”" },
        { id: 5, image: "/images/user1.png", name: "Dannette P. Cervantes", designation: "Web Design", data: "“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”" },
        { id: 6, image: "/images/user2.png", name: "Clara R. Altman", designation: "UI&UX Design", data: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”" },

    ];
    return (
        <section className=" md:pb-14 relative">
            <div className="">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="testimonial max-md:!px-5"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide
                            key={testimonial.id}
                            className="transition-all duration-300 ease-in-out pb-8"
                        >
                            <div className="mb-8 p-6 bg-white shadow-2xl">
                                <p className="text-base font-light font-source h-[100px] text-[#1C1C1C] mb-2">{testimonial.data}</p>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full object-cover overflow-hidden">
                                        <img
                                            src={testimonial.image}
                                            alt={`testimonial ${testimonial.id}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-base font-semibold font-source-sans text-[#353535]">{testimonial.name}</span>
                                        <span className="text-sm font-light font-sourceSans text-[#8E8E8E]">{testimonial.designation}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default TestimonialSlider