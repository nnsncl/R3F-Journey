import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      play: false,
      hasScrolled: false,

      updateStatus: (status) =>
        set((state) => {
          return { [status]: !state[status] };
        }),
    };
  })
);
