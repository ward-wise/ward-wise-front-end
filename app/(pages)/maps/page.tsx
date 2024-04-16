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
    <main className="flex flex-col items-center justify-between h-full">
      <div className="z-10 w-full items-center justify-between font-mono text-sm h-full">
        <Map/>
      </div>
    </main>
  );
}
