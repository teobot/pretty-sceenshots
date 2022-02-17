import { Modal } from "semantic-ui-react";

import { useGlobalContext } from "../views/App";

import { SketchPicker } from "react-color";

export default function SettingsView() {
  const { open, setOpen, backgroundColor, setBackgroundColor } =
    useGlobalContext();

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Settings</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
          <SketchPicker
            color={backgroundColor}
            onChangeComplete={(color: any) => setBackgroundColor(color.hex)}
          />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
