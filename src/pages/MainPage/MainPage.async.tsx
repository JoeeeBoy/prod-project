import { lazy, useCallback } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((res) => {
      //@ts-ignore
      setTimeout(() => res(import("./MainPage")), 1500);
    })
);
