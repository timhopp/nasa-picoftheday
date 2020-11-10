import { Photo } from "../../features/photos/types"

export const SET_CURRENT = "SET_CURRENT"
export const SET_NEWCURRENT = "SET_NEWCURRENT"

interface setCurrentAction {
  type: typeof SET_CURRENT
  payload: Photo
}

interface setNewCurrentAction {
  type: typeof SET_NEWCURRENT
  payload: Photo
}

export type currentPhotoTypes = setCurrentAction | setNewCurrentAction