import { Photo } from "../features/photos/types";
export interface FavoriteState {
    favorites: Photo[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | undefined;
}
export declare const fetchFavorites: import("@reduxjs/toolkit").AsyncThunk<Photo, void, {}>;
export declare const addFavorite: import("@reduxjs/toolkit").AsyncThunk<Photo, Photo, {}>;
export declare const removeFavorite: import("@reduxjs/toolkit").AsyncThunk<string, string, {}>;
declare const _default: import("redux").Reducer<FavoriteState, import("redux").AnyAction>;
export default _default;
