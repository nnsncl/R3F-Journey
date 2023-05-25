import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      variant: "1",

      updateVariant: (id) =>
        set((state) => {
          console.log(state.variant, id);
          return {};
        }),
    };
  })
);
