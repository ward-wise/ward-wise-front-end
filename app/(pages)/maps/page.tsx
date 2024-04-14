import { Metadata } from "next"
import Map from "./Map";

export const metadata: Metadata = {
  title: 'Maps',
};

export default function Maps() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <Map/>
      </div>
    </main>
  );
}
