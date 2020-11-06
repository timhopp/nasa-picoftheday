import { Photo } from "../features/photos/types";
interface FavoriteState {
    favorites: Photo[];
}
export declare const addFavorite: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Photo, string>, deleteFavorite: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Photo, string>;
declare const _default: import("redux").Reducer<FavoriteState, import("redux").AnyAction>;
export default _default;
