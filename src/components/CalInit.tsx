"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalInit() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "diagnostique" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return null;
}
