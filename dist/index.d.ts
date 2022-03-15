/// <reference types="react" />
declare type Style = 'character' | 'shape';
interface Params {
    displayValue?: string;
    value: string;
    size?: number;
    shadow?: boolean;
    style?: Style;
    border?: boolean;
    borderSize?: number;
    borderColor?: string;
    radius?: number;
}
export default function Avvvatars(params: Params): JSX.Element;
export {};
