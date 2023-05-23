import { create } from "zustand";

export default create((set) => {
  return {
    blocksCount: 0,
    phase: "ready",

    /**
     * Phases
     */
    start: () =>
      set((state) => {
        if (!state.phase === "playing") return { phase: "playing" };

        return {};
      }),

    restart: () =>
      set((state) => {
        if (state.phase === "playing" || state.phase === "playing")
          return { phase: "ready" };

        return {};
      }),

    end: () =>
      set((state) => {
        if (state.phase === "playing") return { phase: "ended" };

        return {};
      }),
  };
});
