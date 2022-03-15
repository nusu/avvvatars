import * as React from 'react';
import randiman from './lib/random'
import Shape, { ShapeNames } from './shape/Shape'
import { styled, setup } from 'goober'

setup(React.createElement, undefined, undefined, (props: any) => {
  for (let prop in props) {
      if (prop[0] === '$') {
          delete props[prop];
      }
  }
});

const DEFAULT_SIZE = 32;

const BACKGROUND_COLORS = [
  'F7F9FC',
  'EEEDFD',
  'FFEBEE',
  'FDEFE2',
  'E7F9F3',
  'EDEEFD',
  'ECFAFE',
  'F2FFD1',
  'FFF7E0',
  'FDF1F7',
  'EAEFE6',
  'E0E6EB',
  'E4E2F3',
  'E6DFEC',
  'E2F4E8',
  'E6EBEF',
  'EBE6EF',
  'E8DEF6',
  'D8E8F3',
  'ECE1FE'
]

const TEXT_COLORS = [
  '060A23',
  '4409B9',
  'BD0F2C',
  'C56511',
  '216E55',
  '05128A',
  '1F84A3',
  '526E0C',
  '935F10',
  '973562',
  '69785E',
  '2D3A46',
  '280F6D',
  '37364F',
  '363548',
  '4D176E',
  'AB133E',
  '420790',
  '222A54',
  '192251'
]

const SHAPE_COLORS = [
  '060A23',
  '5E36F5',
  'E11234',
  'E87917',
  '3EA884',
  '0618BC',
  '0FBBE6',
  '87B80A',
  'FFC933',
  'EE77AF',
  '69785E',
  '2D3A46',
  '280F6D',
  '37364F',
  '363548',
  '4D176E',
  'AB133E',
  '420790',
  '222A54',
  '192251'
]
interface WrapperProps {
  size: number
  color: string

  $shadow?: boolean

  $border?: boolean
  borderSize?: number
  borderColor?: string
  borderRadius?: number
}

const Wrapper = styled('div')<WrapperProps>`
  width: ${p => p.size || DEFAULT_SIZE}px;
  height: ${p => p.size || DEFAULT_SIZE}px;
  border-radius: ${p => p.borderRadius || p.size || DEFAULT_SIZE}px;
  background-color: #${p => p.color};

  ${ p => p.$border &&
  `border: ${p.borderSize || 2}px solid ${p.borderColor || '#fff'};`
  }

  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover {
    z-index: 3;
  }

  ${p => p.$shadow && `
    box-shadow: 
      0px 3px 8px rgba(18, 18, 18, 0.04),  
      0px 1px 1px rgba(18, 18, 18, 0.02);
  `}
`

// implement size
const Text = styled('p')<{ color: string, size: number }>`
  /* Reset */
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;

  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto;

  font-size: ${p => Math.round(p.size / 100 * 37)}px;
  color: #${p => p.color};
  line-height: 0;
  text-transform: uppercase;
  font-weight: 500;
`

type Style = 'character' | 'shape'
interface Params
{
  displayValue?: string
  // this should be unique to user, it can be email, user id, or full name
  value: string
  size?: number
  shadow?: boolean
  style?: Style

  // toggle border
  border?: boolean
  borderSize?: number
  borderColor?: string
  borderRadius?: number
}

export default function Avvvatars(params: Params)
{
  const { style = "character", displayValue, value, size, shadow = false, border = false, ...rest } = params

  const name = displayValue ? `${displayValue.substring(0, 2)}` : `${value.substring(0, 2)}`;

  let key = randiman({ value, min: 0, max: 19 });
  let shapeKey = randiman({ value, min: 1, max: 60 })

  return (
    <Wrapper borderRadius={params.borderRadius} size={size || DEFAULT_SIZE} color={BACKGROUND_COLORS[key]} $shadow={shadow} $border={border} {...rest}>
      {style === 'character' ?
        <Text color={TEXT_COLORS[key]} size={size || DEFAULT_SIZE}>{name}</Text>
        :
        <Shape name={`Shape${shapeKey}` as ShapeNames} color={SHAPE_COLORS[key]} size={Math.round((size || DEFAULT_SIZE) / 100 * 50)} />
      }
    </Wrapper>
  )
}
