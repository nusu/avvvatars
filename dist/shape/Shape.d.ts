/// <reference types="react" />
import * as shapes from './shapes';
export declare type ShapeNames = keyof typeof shapes;
export interface Props {
    name: ShapeNames;
    size?: number;
    color: string;
}
export declare const ShapeWrapper: import("styled-components").StyledComponent<"span", any, Props, never>;
export declare const shapeList: string[];
export default function Shape(props: Props): JSX.Element | null;
