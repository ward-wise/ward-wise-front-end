import { Metadata } from "next"
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Maps',
};

// SSR must be disabled explicity or webpack throws a reference error
const Map = dynamic(() => import('./Map'), {
  ssr: false,
})

export default function Maps() {
  return (
    <main className="flex flex-grow flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <Map/>
      </div>
    </main>
  );
}
