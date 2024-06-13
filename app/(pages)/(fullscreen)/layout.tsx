import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/navigation/footer/footer";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-dvh flex flex-col">
        <Navigation />
        <div className="w-full h-full flex-grow mt-20">
          {children}
        </div>
      </div>
    </>
  );
}
