import MobileDisplay from "../components/MobileDisplay";

import { useGlobalContext } from "./App";

export default function MobileView() {
  const { devices } = useGlobalContext();
  return (
    <div
      style={{
        height: "100%",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {devices.map((device, index) => {
        const { id, type, overlay, url } = device;
        return (
          <MobileDisplay
            key={id + "_device_view"}
            overlayImage={overlay}
            srcUrl={url}
          />
        );
      })}
    </div>
  );
}
