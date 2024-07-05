import React from "react";
import GalleryPhoto from "../../../components/gallery/GalleryPhoto";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import pic1 from "../../../images/gallery/img1.jpeg";
import pic2 from "../../../images/gallery/img2.jpeg";
import pic3 from "../../../images/gallery/img3.jpeg";
import pic4 from "../../../images/gallery/img4.jpeg";
import pic5 from "../../../images/gallery/img5.jpeg";
import pic6 from "../../../images/gallery/img6.jpg";
import pic7 from "../../../images/gallery/img7.jpg";
import pic8 from "../../../images/gallery/office/IMG20240409124853.jpg";
import pic9 from "../../../images/gallery/office/IMG20240411105725.jpg";
import pic10 from "../../../images/gallery/office/IMG20240412111652.jpg";
import pic11 from "../../../images/gallery/office/IMG20240412111708.jpg";
import pic12 from "../../../images/gallery/office/IMG20240416142118 (1).jpg";
import pic13 from "../../../images/gallery/office/IMG20240416143943.jpg";
import pic14 from "../../../images/gallery/office/IMG20240423141950.jpg";
import GalleryHero from "../../../components/gallery/GalleryHero";

const GalleryPicContent = [
  {
    pic: pic1,
    category: "teamouting",
  },
  {
    pic: pic2,
    category: "teamouting",
  },
  {
    pic: pic3,
    category: "teamouting",
  },
  {
    pic: pic4,
    category: "teamouting",
  },
  {
    pic: pic5,
    category: "teamouting",
  },
  {
    pic: pic6,
    category: "teamouting",
  },
  {
    pic: pic7,
    category: "teamouting",
  },
  {
    pic: pic8,
    category: "f2f",
  },
  {
    pic: pic9,
    category: "f2f",
  },
  {
    pic: pic10,
    category: "f2f",
  },
  {
    pic: pic11,
    category: "f2f",
  },
  {
    pic: pic12,
    category: "f2f",
  },
  {
    pic: pic13,
    category: "f2f",
  },
  {
    pic: pic14,
    category: "f2f",
  },
];

const picButtons = [
  {
    buttonCategory: "F2F",
    buttonOnClick: "f2f",
  },
  {
    buttonCategory: "Team outing",
    buttonOnClick: "teamouting",
  },
  {
    buttonCategory: "All photos",
    buttonOnClick: "all",
  },
];

const Gallery = () => {
  return (
    <>
      <NavBar />
      <GalleryHero />
      <GalleryPhoto
        GalleryPicContent={GalleryPicContent}
        picButtons={picButtons}
      />
      <Footer />
    </>
  );
};

export default Gallery;
