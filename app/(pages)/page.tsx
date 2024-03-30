export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex items-center justify-center flex-col w-screen min-h-80 p-10 bg-blue-50" id="hero">
      <h1 className="font-bold text-5xl flex flex-col justify-around m-1">Ward Wise
        <span className="font-medium text-xl leading-5 pl-2"> Keeping the government accountable</span>
      </h1>
      </section>
        <article className="flex items-center justify-center my-5 py-10 px-5 shadow-lg rounded-lg gap-4">
          <h2 className=" text-center font-bold text-lg w-6/12 leading-5">What Is A Ward?</h2>
          <p className=" flex-wrap w-7/12 text-sm leading-4 tracking-tight indent-3">The City of Chicago is divided into fifty legislative districts or wards. Each district is represented by an alderperson who is elected by their constituency to serve a four year term.</p>
        </article>
        <section className="flex flex-wrap flex- items-center justify-center my-5 py-10 px-5 shadow-lg rounded-l">
          <p className="text-lg w-5/12"> $1.5 Million</p>
          <h2 className=" text-center font-bold text-lg w-7/12 leading-5">How Much Funding Does My Ward Get?</h2>
        </section>
    </main>
  );
}
