
export default function HandMadeBarChart({data}:{data:{category: string; total: number}[]}) {
    //TODO: obvi width would have to be responsive, which means... math.
    //And, be a prop or smth.
    const width = 96;

    data = data.sort((a, b) => b.total - a.total);
    const yAxis = (
        <div className="flex flex-col justify-evenly">
            {data.map(item => (
                <p key={item.category}>{item.category}</p>
            ))}
        </div>
    )

    return (
      <div className="flex w-full h-[500px]">
        {yAxis}
        <div className={`w-96 flex flex-col justify-evenly`}>
          {/* make bars */}
          {data.map((item) => (
            <div
              key={item.category}
              className={`w-${
                Math.ceil((item.total / 15000))} h-10 bg-blue-500 text-right rounded-r-md`}
            >
              <p>{item.total}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
