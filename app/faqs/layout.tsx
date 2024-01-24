export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-screen">
      <div className="p-6 md:mx-32 lg:mx-60">{children}</div>
    </div>
  );
}
