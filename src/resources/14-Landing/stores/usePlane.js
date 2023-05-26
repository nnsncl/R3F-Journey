import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      variant: "1",
      color: "ivory",

      getVariantName: (id) => {
        if (id === "1") return "Albatros";
        if (id === "2") return "Condor";
        if (id === "3") return "Falcon";
        if (id === "4") return "Owl";
      },
      updateVariant: (id) =>
        set(() => {
          return { variant: id };
        }),
    };
  })
);
