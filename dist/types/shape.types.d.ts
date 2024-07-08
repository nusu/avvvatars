import type { ComponentType } from 'react';
import type { IShapeModelsProps } from '.';
import * as shapes from '../ShapeModels';
export declare type TShapeNames = keyof typeof shapes;
export interface IShapeProps {
    name: TShapeNames;
    size?: number;
    color: string;
}
export interface IShapeList {
    [key: string]: ComponentType<IShapeModelsProps>;
}
