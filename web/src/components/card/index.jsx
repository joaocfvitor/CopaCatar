export const Card = ({ timeA, timeB, match }) => (
  <div className="container max-w-xl p-5">
    <div className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border border-gray-300">
      <div>
        <span className="text-gray-700 items-center font-bold text-sm text-center">
          {match.time}
        </span>
      </div>

      <div className="flex space-x-5 justify-center items-center">
        <span className="uppercase">{timeA.slug}</span>
        <img src={`/img/flags/${timeA.slug}.png`} alt="" />

        <input
          type="number"
          className="bg-red-300/[0.2] text-center text-red-700 font-bold w-[55px] h-[55px]"
        />

        <span className="text-red-500 font-bold">X</span>

        <input
          type="number"
          className="bg-red-300/[0.2] text-center text-red-700 font-bold w-[55px] h-[55px]"
        />

        <img src={`/img/flags/${timeB.slug}.png`} alt="" />
        <span className="uppercase">{timeB.slug}</span>
      </div>
    </div>
  </div>
);
