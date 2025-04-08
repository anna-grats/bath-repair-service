import React from "react";
import Section from "../Section";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const images = [
  {
    after: "/assets/images/works/bath_1_after.png",
    before: "/assets/images/works/bath_1_before.png",
  },
  {
    after: "/assets/images/works/bath_2_after.png",
    before: "/assets/images/works/bath_2_before.png",
  },
  {
    after: "/assets/images/works/bath_3_after.jpg",
    before: "/assets/images/works/bath_3_before.png",
  },
  {
    after: "/assets/images/works/bath_4_after.png",
    before: "/assets/images/works/bath_4_before.png",
  },
  {
    after: "/assets/images/works/bath_5_after.jpg",
    before: "/assets/images/works/bath_5_before.jpg",
  },
  {
    after: "/assets/images/works/bath_6_after.png",
    before: "/assets/images/works/bath_6_before.png",
  },
];

interface WorksProps {
  works: {
    title: string;
    titleColorful: string;
    moreButton: string;
  };
}

const Works: React.FC<WorksProps> = ({ works }) => {
  return (
    <Section py={12} id="Before&After" bg="#F4F7FA">
      <div className="max-w-[1096px] mx-auto text-center mb-8 ">
        <h2 className="text-[40px] font-semibold leading-[48px] text-center text-gray-900 mb-4">
          {works.title}{" "}
          <span className="text-primary">{works.titleColorful}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {images.map(({ before, after }, index) => (
          <div
            key={index}
            className="overflow-hidden p-[20px] w-full max-w-[350px] h-auto mx-auto"
          >
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src={after}
                  srcSet={after}
                  alt="Image After"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={before}
                  srcSet={before}
                  alt="Image Before"
                />
              }
              className="w-full h-full rounded-3xl"
            />
          </div>
        ))}
      </div>
      <Link
        href="/gallery"
        target="blank"
        className="flex flex-col items-center justify-center mt-8"
      >
       <button className="bg-primary text-center text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
  {works.moreButton}
</button>

      </Link>
    </Section>
  );
};

export default Works;
