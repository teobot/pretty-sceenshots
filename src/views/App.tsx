import { useReducer, useContext, createContext } from "react";

import "../css/App.css";

import MobileView from "./MobileView";
import SettingsView from "./SettingsView";

import { Icon } from "semantic-ui-react";

// helpers
import ColoursHelper from "../helpers/ColoursHelper";

type GlobalContext = {
  open: boolean;
  setOpen: (value: boolean) => void;
  backgroundColor: string;
  setBackgroundColor: (value: string) => void;
};

const globalContext = createContext({} as GlobalContext);

const reducer = (state: any, action: { type: any; name: any; value: any }) => {
  switch (action.type) {
    case "set":
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export const useGlobalContext = () => useContext(globalContext);

export default function App() {
  const [settings, dispatch] = useReducer(reducer, {
    open: false,
    setOpen: (value: boolean) => dispatch({ type: "set", name: "open", value }),
    backgroundColor: ColoursHelper.randomColor(),
    setBackgroundColor: (value: string) =>
      dispatch({ type: "set", name: "backgroundColor", value }),
  });

  return (
    <globalContext.Provider value={settings}>
      <div
        className="App"
        style={{ padding: 25, backgroundColor: settings.backgroundColor }}
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
            color: ColoursHelper.invertColor(settings.backgroundColor),
          }}
          onClick={() => settings.setOpen(true)}
          name="cog"
          circular
        />

        {/* MOBILE VIEW */}
        <MobileView />
      </div>
    </globalContext.Provider>
  );
}
