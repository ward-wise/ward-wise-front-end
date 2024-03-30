export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex items-center justify-center flex-col w-screen min-h-80 p-10 bg-gray-100" id="hero">
      <h1 className="font-bold text-5xl flex flex-col justify-around m-1">Ward Wise
        <span className="font-medium text-xl leading-5 pl-2"> Keeping the government accountable</span>
      </h1>
      </section>
        <article className="flex flex-wrap items-center justify-center my-5 py-10 px-5 shadow-lg rounded-lg bg-slate-100">
          <h2 className="font-bold text-lg w-5/12 leading-5">What Is A Ward?</h2>
          <p className="w-7/12 text-sm leading-4 tracking-tight indent-3">The City of Chicago is divided into fifty legislative districts or wards. Each district is represented by an alderperson who is elected by their constituency to serve a four year term.</p>
        </article>
    </main>
  );
}
