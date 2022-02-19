import MobileDisplay from "../components/MobileDisplay";
import DeviceModel from "../models/DeviceModel";

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
      {devices.map((device: DeviceModel, index: number) => {
        const { id } = device;
        return <MobileDisplay key={id + "_device_view"} device={device} />;
      })}
    </div>
  );
}
