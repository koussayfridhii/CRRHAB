import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { useSelector } from "react-redux";
import ProfileCard from "../cards/profileCard/Card";
import { chakra } from "@chakra-ui/react";
export default function Slider3D() {
  const language = useSelector((state) => state.language.language);
  const Cvs = [
    {
      name: {
        fr: "Olfa AYARI",
        en: "Olfa AYARI",
        ar: "ألفة عياري",
      },
      grade: {
        fr: "Docteur",
        en: "Doctor",
        ar: "دكتورة",
      },
      description: {
        fr: `maître assistante en Biologie Végétale à l'Institut Supérieur de Biotechnologie de Monastir.`,
        en: `Assistant Professor in Plant Biology at the Higher Institute of Biotechnology of Monastir.`,
        ar: `أستاذة مساعدة في علم الأحياء النباتية في المعهد العالي للتكنولوجيا الحيوية بالمنستير. (BVV)" ومسؤولة عن مجموعة تدريس علم الأحياء النباتية.`,
      },
      socialMedia: "https://www.linkedin.com/in/olfa-ayari-2bb76b208/",
      profilePic:
        "https://media.licdn.com/dms/image/C5603AQFjeSGmsCyadQ/profile-displayphoto-shrink_800_800/0/1614810607828?e=1721260800&v=beta&t=jnpPQmXDUcJWqb2LpSDlKba7jnVBqyYe15MWRwwa5WA",
    },
    {
      name: {
        fr: "Olfa AYARI",
        en: "Olfa AYARI",
        ar: "ألفة عياري",
      },
      grade: {
        fr: "Docteur",
        en: "Doctor",
        ar: "دكتورة",
      },
      description: {
        fr: `maître assistante en Biologie Végétale à l'Institut Supérieur de Biotechnologie de Monastir.`,
        en: `Assistant Professor in Plant Biology at the Higher Institute of Biotechnology of Monastir.`,
        ar: `أستاذة مساعدة في علم الأحياء النباتية في المعهد العالي للتكنولوجيا الحيوية بالمنستير. (BVV)" ومسؤولة عن مجموعة تدريس علم الأحياء النباتية.`,
      },
      socialMedia: "https://www.linkedin.com/in/olfa-ayari-2bb76b208/",
      profilePic:
        "https://media.licdn.com/dms/image/C5603AQFjeSGmsCyadQ/profile-displayphoto-shrink_800_800/0/1614810607828?e=1721260800&v=beta&t=jnpPQmXDUcJWqb2LpSDlKba7jnVBqyYe15MWRwwa5WA",
    },
    {
      name: {
        fr: "Olfa AYARI",
        en: "Olfa AYARI",
        ar: "ألفة عياري",
      },
      grade: {
        fr: "Docteur",
        en: "Doctor",
        ar: "دكتورة",
      },
      description: {
        fr: `maître assistante en Biologie Végétale à l'Institut Supérieur de Biotechnologie de Monastir.`,
        en: `Assistant Professor in Plant Biology at the Higher Institute of Biotechnology of Monastir.`,
        ar: `أستاذة مساعدة في علم الأحياء النباتية في المعهد العالي للتكنولوجيا الحيوية بالمنستير. (BVV)" ومسؤولة عن مجموعة تدريس علم الأحياء النباتية.`,
      },
      socialMedia: "https://www.linkedin.com/in/olfa-ayari-2bb76b208/",
      profilePic:
        "https://media.licdn.com/dms/image/C5603AQFjeSGmsCyadQ/profile-displayphoto-shrink_800_800/0/1614810607828?e=1721260800&v=beta&t=jnpPQmXDUcJWqb2LpSDlKba7jnVBqyYe15MWRwwa5WA",
    },
  ];
  return (
    <>
      <chakra.h2 fontSize={"xxxl"} color={"primary"} fontWeight={"bold"} my={5}>
        {language === "en"
          ? "CV AND PUBLICATIONS"
          : language === "fr"
          ? "CV ET PUBLICATIONS"
          : "السيرة الذاتية والمنشورات"}
      </chakra.h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Cvs?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ProfileCard data={item} language={language} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
