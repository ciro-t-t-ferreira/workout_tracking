import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutReducer = (state, action) => {
    switch (action.type){
        case "SET_WORKOUTS":
            return {
                workouts: action.payload
            }

        case "CREATE_WORKOUTS":
            return {
                workouts: [action.payload, ...state.workouts]
            }
        default:
            return state
    }
}

export function WorkoutsContextProvider ({ children }) { //children represents the nested components the will be inside this component
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })   

    // ***we could, in principle, put the array of workouts inside the value of the 
    //WorkoutContext.Provider, but this would change all the time, is better to use a dinamic state value
    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}