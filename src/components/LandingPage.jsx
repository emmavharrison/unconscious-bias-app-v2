import Robot from "../assets/robot.png";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="w-9/12 h-30 bg-cyan-300 rounded-3xl p-5 center">
      <h1 className="text-4xl mt-8">Welcome to our Ally Odyssey</h1>
      <div className="flex items-center mr-10 mt-20">
        <img src={Robot} className="float-right m-4 w-80" />
        <p className="text-lg text-wrap ">
          Hello and welcome to OpenMind Odyssey. Do you have a cultural bias
          you're unaware of? Research shows 90% of us do and the statistics
          suggest there is still a ton of work to do in order to value each
          other equally.
          <br />
          <br />
          We want to live in a world where we are not afraid to get things
          wrong, can acknowledge our mistakes without shame and work to unlearn
          our damaging behaviours. Learning to unlearn should be fun so lighten
          up, don't be scared and be ready with an open mind. Are you racist,
          ableist, sexist without realising?
        </p>
      </div>
      <Link
        to="/quiz"
        className="button-class bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 text-xl rounded-lg focus:outline-none focus:shadow-outline mt-20"
      >
        Start my Ally Odyssey!
      </Link>
    </div>
  );
}
