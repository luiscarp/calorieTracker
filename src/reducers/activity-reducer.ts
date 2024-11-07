import { Activity } from "../types"

export type AcivityActions = {

}

type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState= {
    activities: [],
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: AcivityActions
) =>{
    
}