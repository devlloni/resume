"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";

export const PrintButton = () => {
  return (
    <>
    <Button
      onClick={() => {window.print()}}
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden"
    >
      <DownloadIcon className="my-6 size-6" />
    </Button>
    </>
  );
};
