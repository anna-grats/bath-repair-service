"use client";
import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Footer from "@/sections/Footer/Footer";
import Section from "@/sections/Section";
import ScrollToTop from "@/components/Top/Top";
import Link from "next/link";
import HeaderG from "./HeaderG";

const images = [
  { after: "/assets/images/works/bath_1_after.png", before: "/assets/images/works/bath_1_before.png" },
  { after: "/assets/images/works/bath_2_after.png", before: "/assets/images/works/bath_2_before.png" },
  { after: "/assets/images/works/bath_3_after.jpg", before: "/assets/images/works/bath_3_before.png" },
  { after: "/assets/images/works/bath_4_after.png", before: "/assets/images/works/bath_4_before.png" },
  { after: "/assets/images/works/bath_5_after.jpg", before: "/assets/images/works/bath_5_before.jpg" },
  { after: "/assets/images/works/bath_6_after.png", before: "/assets/images/works/bath_6_before.png" },
  { after: "/assets/images/works/bath_7_after.png", before: "/assets/images/works/bath_7_before.png" },
  { after: "/assets/images/works/bath_8_after.png", before: "/assets/images/works/bath_8_before.png" },
  { after: "/assets/images/works/bath_9_after.png", before: "/assets/images/works/bath_9_before.png" },
  { after: "/assets/images/works/bath_10_after.png", before: "/assets/images/works/bath_10_before.png" },
  { after: "/assets/images/works/bath_11_after.png", before: "/assets/images/works/bath_11_before.png" },
  { after: "/assets/images/works/bath_12_after.png", before: "/assets/images/works/bath_12_before.png" },
  { after: "/assets/images/works/bath_13_after.png", before: "/assets/images/works/bath_13_before.png" },
  { after: "/assets/images/works/bath_14_after.png", before: "/assets/images/works/bath_14_before.png" },
  { after: "/assets/images/works/bath_15_after.png", before: "/assets/images/works/bath_15_before.png" },
  { after: "/assets/images/works/bath_16_after.png", before: "/assets/images/works/bath_16_before.png" },
  { after: "/assets/images/works/bath_17_after.png", before: "/assets/images/works/bath_17_before.png" },
  { after: "/assets/images/works/bath_18_after.png", before: "/assets/images/works/bath_18_before.png" },
  { after: "/assets/images/works/bath_19_after.png", before: "/assets/images/works/bath_19_before.png" },
  { after: "/assets/images/works/bath_20_after.png", before: "/assets/images/works/bath_20_before.png" },
  { after: "/assets/images/works/bath_21_after.png", before: "/assets/images/works/bath_21_before.png" }
];

interface NavigationProps {
  NAV_ITEMS: {
    href: string;
    label: string;
  }[];
}

const Navigation: React.FC<NavigationProps> = ({ NAV_ITEMS }) => (
  <nav className="hidden md:flex space-x-8">
    {NAV_ITEMS.map(({ href, label }) => (
      <Link
        className="text-gray-700 hover:text-primary text-base lg:text-base md:text-[13px]"
        key={href}
        href={href}
      >
        {label}
      </Link>
    ))}
  </nav>
);

const defaultNavItems = [
  { href: "/#Reviews", label: "Reviews" },
  { href: "/#About", label: "About" },
  { href: "/#Comparison", label: "Comparison" },
  { href: "/#Contact", label: "Contact" },
];

const GalleryPage: React.FC = () => {
  return (
    <Section bg="#F4F7FA">
      <HeaderG header={{ NAV_ITEMS: defaultNavItems }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {images.map(({ before, after }, index) => (
          <div
            key={index}
            className="overflow-hidden p-5 w-full max-w-[350px] h-auto mx-auto"
          >
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src={after} alt="Image After" />
              }
              itemTwo={
                <ReactCompareSliderImage src={before} alt="Image Before" />
              }
              className="w-full h-full rounded-3xl"
            />
          </div>
        ))}
      </div>
      <ScrollToTop />
      <Footer />
    </Section>
  );
};

export default GalleryPage;
