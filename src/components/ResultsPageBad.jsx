import Robot from "../assets/robot.png";

export function ResultsPageBad() {
  return (
    <div className="w-9/12 h-30 bg-cyan-300 rounded-3xl p-5 center">
      <h1 className="text-4xl mt-8">ODYSSEY BEGINNER</h1>
      <div className="flex items-center mr-10 mt-20">
        <img src={Robot} className="float-right m-4 w-80" />
        <div className="text-lg text-wrap ">
          <p>
            You are at the start of the journey of being an ally. Here are some
            potential suggestions:
          </p>
          <br />
          <ul className="list-disc">
            <li>Take part in a Diversity & Inclusion workshop</li>
            <li>Engage more with people different to yourself</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
