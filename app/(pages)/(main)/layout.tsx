import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/navigation/footer/footer";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="py-6 px-6 md:px-32 flex-grow">
        {children}
      </div>
      <Footer />
    </>
  );
}
