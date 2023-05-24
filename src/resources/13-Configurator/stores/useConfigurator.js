import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      colors: {
        eyes: "#FAFAFA",
        pupils: "#000000",
        beak: "#f9b032",
        body: "#fa631d",
        wings: "#fa631d",
        legs: "#f9b032",
        crown: "#c2b8a4",
      },

      updateColor: (name, value) =>
        set((state) => {
          if (name && value)
            return {
              colors: {
                ...state.colors,
                [name]: value,
              },
            };
        }),
    };
  })
);
