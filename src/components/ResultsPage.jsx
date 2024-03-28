import Robot from "../assets/robot.png";

export function ResultsPage() {
  return (
    <div className="w-9/12 h-30 bg-cyan-300 rounded-3xl p-5 center">
      <h1 className="text-4xl mt-8">Welcome to our Ally Odyssey</h1>
      <div className="flex items-center mr-10 mt-20">
        <img src={Robot} className="float-right m-4 w-80" />
        <p className="text-lg text-wrap ">
          These are your results
          <br />
          <br />
          RESULTS
        </p>
      </div>
    </div>
  );
}
