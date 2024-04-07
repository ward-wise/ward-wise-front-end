import { Metadata } from "next"
import dynamic from 'next/dynamic';
export const metadata: Metadata = {
  title: 'Maps',
};

const MapWithNoSSR = dynamic(() => import("./Map"), {
  ssr: false,
});

export default function Maps() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1>This is the Maps page</h1>
        <MapWithNoSSR/>
      </div>
    </main>
  );
}
