import React from "react";
import "react-datepicker/dist/react-datepicker.css";
interface DateProps {
    startDate?: Date;
}
export default class DateSelector extends React.Component<{}, DateProps> {
    constructor(props: DateProps);
    handleChange(date: Date): void;
    render(): JSX.Element;
}
export {};
