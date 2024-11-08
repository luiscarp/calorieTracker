import { useMemo } from "react";
import { Activity } from "../types";

type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  // contadores
  // calorias consumidas son con la categoria numero 1
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  return (
    <>
      <h2 className=" text-4xl font-black text-white text-center">
        Resumen de calorías
      </h2>

      <div className=" flex flex-col items-center md:flex-row md:justify-between gap-5 mt-5">
        <p className=" text-white font-bold rounded-full grid grid-cols gap-3 text-center">
          <span className=" font-black text-6xl text-orange">
            {caloriesConsumed}
          </span>
          consumidas
        </p>
        <p className=" text-white font-bold rounded-full grid grid-cols gap-3 text-center">
          <span className=" font-black text-6xl text-orange">
            {caloriesBurned}
          </span>
          Quemadas
        </p>
      </div>
    </>
  );
}
