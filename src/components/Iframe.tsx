import React from "react";

export default function Iframe(props: {
  src: any;
  height: any;
  width: any;
  title: any;
  style: any;
  scrolling?: any;
  className: any;
}) {
  const id = `iframe-${Math.random()}`;

  const { src, height, width, title, style } = props;

  const frameRef = React.useRef<any>(null);

  return (
    <iframe
      id={id}
      ref={frameRef}
      className={props.className}
      style={style}
      title={title}
      src={src}
      height={height}
      width={width}
      scrolling="no"
    />
  );
}
