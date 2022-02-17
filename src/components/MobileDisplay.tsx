import { useEffect, useRef, useState } from "react";

import Iframe from "./Iframe";

export default function MobileDisplay(props: {
  srcUrl: any;
  overlayImage: any;
}) {
  const imageRef = useRef<any>(null);

  const { srcUrl, overlayImage } = props;

  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.offsetHeight && imageRef.current.offsetWidth) {
        setImageHeight(imageRef.current.offsetHeight);
        setImageWidth(imageRef.current.offsetWidth);
      }
    }
  }, [imageRef]);

  return (
    <div
      style={{
        height: 800,
        width: 400,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        alt="mobile"
        ref={imageRef}
        style={{
          zIndex: 1000,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
          pointerEvents: "none",
        }}
        src={require(`../images${overlayImage.imageSrc}`)}
      />
      <Iframe
        src={srcUrl}
        height={imageHeight - overlayImage.imageHeightReduction}
        width={imageWidth - overlayImage.imageWidthReduction}
        title="test"
        style={{
          overflow: "hidden",
          borderRadius: overlayImage.imageBorderRadius,
          padding: 5,
        }}
      />
    </div>
  );
}
