import Robot from "../assets/robot.png";

export function ResultsPageBad() {
  return (
    <div className="w-9/12 h-30 bg-cyan-300 rounded-3xl p-5 center">
      <h1 className="text-4xl mt-8">ODYSSEY BEGINNER</h1>
      <div className="flex items-center mr-10 mt-20">
        <img src={Robot} className="float-right m-4 w-80" />
        <div className="text-2xl text-left text-wrap ">
          <p text-lg>
            You are right at the beginning of your ally odyssey, what an
            exciting place to be. Your voyage of discovery awaits, here are some
            ways you could get started:
          </p>
          <br />
          <ul className="list-disc text-2xl text-left w-9/12">
            <li>
              Visit the SheCodes website: <a href="https://shecancode.io/"></a>
              https://shecancode.io/
            </li>
            <li>Take part in a Diversity & Inclusion workshop</li>
            <li>
              Join a workplace network and spend some time listening to people s
              experiences
            </li>
            <li>Read this book</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
