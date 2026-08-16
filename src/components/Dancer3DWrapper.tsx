"use client";

import dynamic from "next/dynamic";

const Dancer3D = dynamic(() => import("./Dancer3D"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div className="w-12 h-12 rounded-full border-4 border-rose/30 border-t-rose animate-spin" />
    </div>
  ),
});

export default function Dancer3DWrapper() {
  return <Dancer3D />;
}
