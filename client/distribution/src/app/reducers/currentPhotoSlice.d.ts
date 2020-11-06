import { Photo } from "../features/photos/types";
interface PhotoState {
    photo: Photo[];
    date: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    updated: boolean;
    error: string | null | undefined;
}
export declare const fetchCurrentPhoto: import("@reduxjs/toolkit").AsyncThunk<Photo, void, {}>;
export declare const fetchPhotoByDate: import("@reduxjs/toolkit").AsyncThunk<Photo, string, {}>;
export declare const setDate: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, string>;
declare const _default: import("redux").Reducer<PhotoState, import("redux").AnyAction>;
export default _default;
