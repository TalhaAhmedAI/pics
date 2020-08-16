import React from "react";
import ImageCard from "./imageCard";
import "./imageList.css";

const ImageList = ({ images }) => {
  const pictures = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{pictures}</div>;
};

export default ImageList;
