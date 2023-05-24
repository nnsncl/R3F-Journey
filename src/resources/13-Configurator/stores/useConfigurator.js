import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      colors: {
        eyes: "#FAFAFA",
        pupils: "#0E0E0E",
        beak: "#fab41d",
        body: "#dddddd",
        wings: "#FAFAFA",
        legs: "#ff7979",
        crown: "#fab41d",
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
