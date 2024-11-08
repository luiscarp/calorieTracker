import { useMemo } from "react";
import { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

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

  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [activities]
  );

  return (
    <>
      <h2 className=" text-4xl font-black text-white text-center">
        Resumen de calorías
      </h2>

      <div className=" flex flex-col items-center md:flex-row md:justify-between gap-5 mt-5">
        <CalorieDisplay
          calories={caloriesConsumed}
          text={"Consumidas"}
        ></CalorieDisplay>
        <CalorieDisplay
          calories={caloriesBurned}
          text={"Quemadas"}
        ></CalorieDisplay>

        <CalorieDisplay
          calories={netCalories}
          text={"Diferencia"}
        ></CalorieDisplay>
      </div>
    </>
  );
}
