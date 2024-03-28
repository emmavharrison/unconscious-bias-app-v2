import Robot from "../assets/robot.png";

export function ResultsPageNeutral() {
  return (
    <div className="w-9/12 h-30 bg-cyan-300 rounded-3xl p-5 center">
      <h1 className="text-4xl mt-8">ODYSSEY INTERMEDIATE</h1>
      <div className="flex items-center mr-10 mt-20">
        <img src={Robot} className="float-right m-4 w-80" />
        <div className="text-lg text-wrap ">
          <p>Good stuff, but room for improvement - consider...</p>
          <br />
          <ul className="list-disc">
            <li>
              Taking part in D&I focused networking events - SheCanCode
              hackathons!
            </li>
            <li>Finding a mentor</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
