import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const partners = [
    { name: "Tech Mahindra", logo: "https://static.vecteezy.com/system/resources/previews/018/970/078/non_2x/patanjali-editorial-logo-free-vector.jpg" },
    { name: "Google", logo: "https://vectorseek.com/wp-content/uploads/2023/09/Haldiram-Logo-Vector.svg-.png" },
    { name: "Microsoft", logo: "https://www.hindustantimes.com/ht-img/img/2023/08/19/550x309/caratlane_titan_1692433234063_1692433234267.png" },
    { name: "Amazon", logo: "https://circularrevolution.wales/wp-content/uploads/2023/08/bluestonelogo.png" },
    { name: "IBM", logo: "https://logos-world.net/wp-content/uploads/2020/04/KFC-Logo-1991-1997.png" },
    { name: "Intel", logo: "https://static.wixstatic.com/media/0f4e14_ce3fb10a7de44c639760c9ab2f505bec~mv2.png/v1/fill/w_640,h_360,al_c,usm_0.66_1.00_0.01/0f4e14_ce3fb10a7de44c639760c9ab2f505bec~mv2.png" },
    { name: "Intel", logo: "https://mysandesh.in/wp-content/uploads/2023/11/Samsung_Logo_result-696x387.webp" },
    { name: "Intel", logo: "https://vistatradersnepal.com/wp-content/uploads/2020/08/lord-of-drinks.jpg" },
    { name: "Intel", logo: "https://kedaara.com/wp-content/uploads/2023/03/oliva.jpg" },
    { name: "Intel", logo: "https://globalprimenews.com/wp-content/uploads/2022/09/IMG-20220929-WA0015.jpg" },
    { name: "Intel", logo: "https://retouchingindia.com/wp-content/uploads/2023/12/9.jpg" },
    { name: "Intel", logo: "https://www.shutterstock.com/image-vector/bandhan-bank-india-logo-vector-600nw-2323259185.jpg" },
    { name: "Intel", logo: "https://th.bing.com/th/id/OIP.kx2SM__rGrv4-g-uUYD6awAAAA?rs=1&pid=ImgDetMain" },
    { name: "Intel", logo: "https://www.coolztricks.com/wp-content/uploads/2021/12/photo_2021-12-02-17.04.21.jpeg" },
    { name: "Intel", logo: "https://www.federalbank.co.in/documents/10180/26150941/bb+now+logo.jpg/a88d0791-cfb4-e427-c7f4-c5dc566e04a7?t=1665753949901" },
    { name: "Intel", logo: "https://i.pinimg.com/736x/36/7c/d4/367cd4a3a1510bf52f1acbea26228a57.jpg" },
    { name: "Intel", logo: "https://i0.wp.com/wicormarine.co.uk/wp-content/uploads/2022/10/salt-cafe-logo.png?ssl=1" },
    { name: "Intel", logo: "https://static-content.owner.com/brands/logos/mv6A6UaSgVkO.png?v=1430012101" },
    { name: "Intel", logo: "https://avivdigital.in/wp-content/uploads/2023/05/dice-academy.jpg" },
    { name: "Intel", logo: "https://th.bing.com/th/id/OIP.myX2lM2_sNosNJPo0Puk8QAAAA?rs=1&pid=ImgDetMain" },
    { name: "Intel", logo: "https://gumlet.assettype.com/afaqs/2021-05/1c812f92-ef4b-474d-810e-4eeed3ac046f/cult.jpg?rect=0,116,400,210&w=1200&auto=format,compress&ogImage=true" },
];

export function BrandDeals() {
    return (
        <section className="py-6">
            <div className="container px-4 mx-auto">
                <h2 className="mb-6 text-3xl font-bold text-left">
                    Our <span className="text-primary">Clients</span>
                </h2>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Autoplay,]}
                    className="mySwiper"
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="p-4 transition-all rounded-lg shadow-md hover:shadow-lg">
                                <Image
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={`${partner.name} logo`}
                                    height={80}
                                    width={200}
                                    className="h-auto max-w-full transition-all hover:filter-none"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
