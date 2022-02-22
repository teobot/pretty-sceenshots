import { useEffect, useRef, useState } from "react";

import DeviceModel from "../models/DeviceModel";

import Iframe from "./Iframe";

export default function MobileDisplay(props: { device: DeviceModel }) {
  const { url, overlay, scale, zoom } = props.device;

  const imageRef = useRef<any>(null);

  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.offsetHeight && imageRef.current.offsetWidth) {
        setImageHeight(imageRef.current.offsetHeight);
        setImageWidth(imageRef.current.offsetWidth);
      }
    }
  }, [imageRef, scale]);

  return (
    <div
      style={{
        height: 900 * scale,
        width: 425 * scale,
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
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
          pointerEvents: "none",
        }}
        src={require(`../images${overlay.imageSrc}`)}
      />
      <Iframe
        src={url}
        height={imageHeight - overlay.borderHeight * scale}
        width={imageWidth - overlay.borderWidth * scale}
        title="test"
        className=""
        style={{
          overflow: "hidden",
          borderRadius: overlay.borderRadius * scale,
          paddingLeft: overlay?.offset?.left * scale || scale,
          paddingTop: overlay?.offset?.top * scale || scale,
          paddingBottom: overlay?.offset?.bottom * scale || scale,
          paddingRight: overlay?.offset?.right * scale || scale,
          zoom: zoom,
        }}
      />
    </div>
  );
}
