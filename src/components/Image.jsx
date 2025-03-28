import React from "react";
import { IKImage } from "imagekitio-react";

const Image = ({ src, className, alt, width, height }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      //   src="https://ik.imagekit.io/hegltgozp/logo.png"
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
