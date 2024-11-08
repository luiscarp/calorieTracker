import { useReducer, useEffect, useMemo } from "react";
import { activityReducer } from "./reducers/activity-reducer";
import { initialState } from "./reducers/activity-reducer";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(()=>
  localStorage.setItem("activities", JSON.stringify(state.activities))
  ,[state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length , [state.activities] )

  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className=" max-w-4xl mx-auto flex justify-between">
          <h1 className=" text-center text-lg font-bold text-white uppercase">
            contador de calorias
          </h1>

          <button 
          className=" bg-gray-800 hover:bg-gray-900 font-bold uppercase text-white cursor-pointer rounded-lg text-sm p-2 disabled:opacity-10"
          disabled = {!canRestartApp()}
          onClick={() => dispatch({type:"restart-app"})}
          >
            Reiniciar app
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className=" max-w-4xl mx-auto">
          <Form 
          dispatch={dispatch}
          state = {state}
          ></Form>
        </div>
      </section>

      <section className=" p-10 mx-auto max-w-4xl">
        <ActivityList 
        activities = {state.activities}
        dispatch = {dispatch}
        
        ></ActivityList>
      </section>
    </>
  );
}

export default App;
