import { useContext, createContext, useState } from "react";

import "../css/App.css";

import MobileView from "./MobileView";
import SettingsView from "./SettingsView";

import { Icon } from "semantic-ui-react";

// helpers
import ColoursHelper from "../helpers/ColoursHelper";
import OverlayModel from "../models/OverlayModel";
import DeviceModel from "../models/DeviceModel";
import overlaysModels from "../config/OverlayModels";

type GlobalContextInterface = {
  open: boolean;
  backgroundColor: string;
  devices: DeviceModel[];
  setBackgroundColor: (color: string) => void;
  setOpen: (open: boolean) => void;
  updateDeviceUrl: (device: DeviceModel, url: string) => void;
  addDevice: () => void;
  removeDevice: (id: string) => void;
  changeDeviceOverlay: (id: string, overlay: OverlayModel) => void;
};

const globalContext = createContext({} as GlobalContextInterface);

export const useGlobalContext = () => useContext(globalContext);

export default function App() {
  const [open, setOpen] = useState<boolean>(true);
  const [devices, setDevices] = useState<DeviceModel[]>([
    new DeviceModel(
      "mobile",
      overlaysModels[0],
      "https://theoclapperton-portfolio.netlify.app/"
    ),
  ]);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    `#${ColoursHelper.randomColor()}`
  );

  const updateDeviceUrl = (device: DeviceModel, url: string) => {
    setDevices(
      devices.map((d) => {
        if (d.id === device.id) {
          return { ...d, url };
        }
        return d;
      })
    );
  };

  const addDevice = () => {
    setDevices([
      ...devices,
      new DeviceModel(
        "mobile",
        overlaysModels[0],
        "https://theoclapperton-portfolio.netlify.app/"
      ),
    ]);
  };

  const removeDevice = (id: string) => {
    setDevices(devices.filter((d: DeviceModel) => d.id !== id));
  };

  const changeDeviceOverlay = (id: string, overlay: OverlayModel) => {
    // change the overlay of the device
    setDevices(
      devices.map((d: DeviceModel) => {
        if (d.id === id) {
          return { ...d, overlay };
        }
        return d;
      })
    );
  };

  return (
    <globalContext.Provider
      value={{
        open,
        backgroundColor,
        devices,
        setBackgroundColor,
        setOpen,
        updateDeviceUrl,
        addDevice,
        removeDevice,
        changeDeviceOverlay,
      }}
    >
      <div
        className="App"
        style={{ padding: 25, backgroundColor: backgroundColor }}
      >
        {/* SETTINGS MODEL */}
        <SettingsView />

        {/* MODEL BUTTON */}
        <Icon
          size="large"
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            cursor: "pointer",
            color: ColoursHelper.invertColor(backgroundColor),
          }}
          onClick={() => setOpen(true)}
          name="cog"
          circular
        />

        {/* MOBILE VIEW */}
        <MobileView />
      </div>
    </globalContext.Provider>
  );
}
