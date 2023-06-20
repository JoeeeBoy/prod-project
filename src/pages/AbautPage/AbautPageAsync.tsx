import { lazy } from "react";

// export const AbautPageAsync = lazy(() => import("./AbautPage"));

export const AboutPageAsync = lazy(
  () =>
    new Promise((res) => {
      //@ts-ignore
      setTimeout(() => res(import("./AboutPage")), 1500);
    })
);
