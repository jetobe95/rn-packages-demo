import { useState } from "react";

export function useToggleable(initialValue: boolean = false) {
  const [visible, setVisible] = useState<boolean>(initialValue);
  return {
    visible,
    close() {
      setVisible(false);
    },
    open() {
      setVisible(true);
    },
  };
}
