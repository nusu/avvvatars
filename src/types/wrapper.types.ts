export interface IWrapperProps {
    size: number
    color: string
    $shadow?: boolean
    $border?: boolean
    $borderSize?: number
    $borderColor?: string
    $radius?: number
}

export type TStyle = 'character' | 'shape'

export interface IParams
{
    displayValue?: string
    value: string
    size?: number
    shadow?: boolean
    style?: TStyle
    border?: boolean
    borderSize?: number
    borderColor?: string
    radius?: number
}