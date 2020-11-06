import React from "react";
import { Photo } from "../features/photos/types";
interface currentProps {
    currentPhoto: Photo;
    fetchPhotoByDate?: (newDate: string) => void;
}
interface IState {
    currentDate: string;
    today: string;
}
declare class CurrentPhoto extends React.Component<currentProps, IState> {
    constructor(props: currentProps);
    fetchNext(): void;
    fetchPrevious(): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof CurrentPhoto, Pick<React.ClassAttributes<CurrentPhoto> & currentProps, "ref" | "fetchPhotoByDate" | "key">>;
export default _default;
