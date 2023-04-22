"use client";
import React from "react";
import { useRouter } from "next/navigation";

function DetailLink() {
  return (
    <button
      onClick={() => {
        router.push("");
      }}
    >
      버튼
    </button>
  );
}

export default DetailLink;
