import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);

  return (
    <div id="exercises" className="lg:w-28 mt-12 p-5">
      <div className="text-4xl whitespace-nowrap mb-12">
        <h4>Showing Results</h4>
      </div>
      <div className="lg:w-28 sm:w-14 flex flex-row flex-wrap justify-center">
        {exercises.map((exercise, index) => (
          <p>{exercise.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Exercises;
