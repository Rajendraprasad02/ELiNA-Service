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

//adding all images to react
const importAllEvent = (r, event) => {
  console.log(r);
  let imagesEvent = [];
  r.keys().forEach((item, index) => {
    imagesEvent.push({ pic: r(item), category: event });
  });
  return imagesEvent;
};

const imagesEvent1 = importAllEvent(
  require.context(
    "../../../images/gallery/event1",
    false,
    /gallery \(\d+\)\.(jpg|jpeg|png)$/
  ),
  "event1"
);

const imagesEvent2 = importAllEvent(
  require.context(
    "../../../images/gallery/event2",
    false,
    /gallery \(\d+\)\.(jpg|jpeg|png)$/
  ),
  "event2"
);

const imagesEvent3 = importAllEvent(
  require.context(
    "../../../images/gallery/event3",
    false,
    /gallery\d+\.(jpg|jpeg|png)$/
  ),
  "event3"
);

const GalleryObj = GalleryPicContent.concat(imagesEvent1)
  .concat(imagesEvent2)
  .concat(imagesEvent3);

const picButtons = [
  {
    key: 1,
    buttonCategory: "F2F",
    buttonOnClick: "f2f",
  },
  {
    key: 2,
    buttonCategory: "Team outing",
    buttonOnClick: "teamouting",
  },
  {
    key: 3,
    buttonCategory: "Event1",
    buttonOnClick: "event1",
  },
  { key: 4, buttonCategory: "Event2", buttonOnClick: "event2" },
  { key: 5, buttonCategory: "Event3", buttonOnClick: "event3" },
  { key: 6, buttonCategory: "Event4", buttonOnClick: "event4" },
  { key: 7, buttonCategory: "Event5", buttonOnClick: "event5" },
  { key: 8, buttonCategory: "Event6", buttonOnClick: "event6" },
];

const Gallery = () => {
  return (
    <>
      <GalleryHero />
      <GalleryPhoto GalleryPicContent={GalleryObj} picButtons={picButtons} />
    </>
  );
};

export default Gallery;
