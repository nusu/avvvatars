/// <reference types="react" />
declare type Style = 'character' | 'shape' | 'mixed';
interface Params {
    displayValue?: string;
    value: string;
    size?: number;
    shadow?: boolean;
    style?: Style;
}
export default function Avvvatars(params: Params): JSX.Element;
export {};
