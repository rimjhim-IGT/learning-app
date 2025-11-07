import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OurPartners = () => {
    const partners = [
        { id: 1, image: "/images/partner1.png", link: "/" },
        { id: 2, image: "/images/partner2.png", link: "/" },
        { id: 3, image: "/images/partner3.png", link: "/" },
        { id: 4, image: "/images/partner4.png", link: "/" },
        { id: 4, image: "/images/partner2.png", link: "/" },
    ];

    return (
        <section className="bg-dark py-6">
            <div className="container">
                <h2 className="text-white font-semibold text-4xl mb-8 text-center font-sourceSans">
                    Our Partners
                </h2>
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
                    className="max-w-[800px]"
                >
                    {partners.map((partner) => (
                        <SwiperSlide
                            key={partner.id}
                            className="transition-all duration-300 ease-in-out w-[280px] md:w-[340px] lg:w-[360px] py-8"
                        >
                            <div className=" mb-8 h-[128px] w-full flex items-center justify-center">
                                <img src={partner.image} alt={`Partner ${partner.id}`} className="h-auto w-auto max-w-[136px] max-h-[128px] mx-auto object-cover rounded-t-2xl overflow-hidden" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurPartners;
