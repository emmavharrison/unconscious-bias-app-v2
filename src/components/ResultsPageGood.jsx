import Robot from "../assets/robot.png";

export function ResultsPageGood() {
  return (
    <div className="w-9/12 h-30 bg-cyan-300 rounded-3xl p-5 center">
      <h1 className="text-4xl mt-8">ODYSSEY CHAMPION</h1>
      <div className="flex items-center mr-10 mt-20">
        <img src={Robot} className="float-right m-4 w-80" />
        <div className="text-lg text-wrap ">
          <p>You are a fantastic ally! Why don't you...</p>
          <br />
          <ul className="list-disc">
            <li>Introduce & lead a D&I campaign in your workplace</li>
            <li>Mentor others who are starting their journey</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
