import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/navigation/footer/footer";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </>
  );
}
