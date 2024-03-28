import Robot from "../assets/robot.png";

export function ResultsPageNeutral() {
  return (
    <div className="w-9/12 h-30 bg-cyan-300 rounded-3xl p-5 center">
      <h1 className="text-4xl mt-8">ODYSSEY INTERMEDIATE</h1>
      <div className="flex items-center mr-10 mt-20">
        <img src={Robot} className="float-right m-4 w-80" />
        <div className="text-2xl text-left text-wrap ">
          <p>
            You are well on your way and doing a great job. While there's still
            room for improvement, you should be pleased with your journey so
            far. Here are some steps you could take:
          </p>
          <br />
          <ul className="list-disc text-2xl text-left">
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
