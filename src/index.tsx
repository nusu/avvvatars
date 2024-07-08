import React from 'react';
import randiman from './lib/random'
import { BACKGROUND_COLORS, TEXT_COLORS, SHAPE_COLORS } from './lib/colors'
import Shape from './Shape'
import { styled, setup } from 'goober'
import type { IParams, IWrapperProps, TShapeNames } from './types'

// initialize goober
setup(React.createElement, undefined, undefined, (props: any) => {
  for (let prop in props) {
      if (prop.startsWith('$')) {
          delete props[prop];
      }
  }
});

const DEFAULTS = {
  style: "character",
  size: 32,
  shadow: false,
  border: false,
  borderSize: 2,
  borderColor: "#fff"
}

const Wrapper = styled('div')<IWrapperProps>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: ${p => p.$radius ?? p.size}px;
  background-color: #${p => p.color};

  ${ p => p.$border &&
  `border: ${p.$borderSize}px solid ${p.$borderColor};`
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

const Text = styled('p')<{ color: string, size: number }>`
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
  font-size: ${p => Math.round(p.size / 100 * 37)}px;
  color: #${p => p.color};
  line-height: 0;
  text-transform: uppercase;
  font-weight: 500;
`

export default function Avvvatars(params: Readonly<IParams>)
{
  const { 
    style = DEFAULTS.style,
    displayValue, 
    value, 
    radius,
    size = DEFAULTS.size, 
    shadow = DEFAULTS.shadow, 
    border = DEFAULTS.border, 
    borderSize = DEFAULTS.borderSize,
    borderColor = DEFAULTS.borderColor
  } = params

  // get first two letters
  const name = String(displayValue ?? value).substring(0, 2);

  // generate unique random for given value
  // there is 20 colors in array so generate between 0 and 19
  const key = randiman({ value, min: 0, max: 19 });
  // there is 60 shapes so generate between 1 and 60
  const shapeKey = randiman({ value, min: 1, max: 60 })

  const isCharacter = style === 'character'
  const isShape = style === 'shape'

  return (
    <Wrapper 
      size={size} 
      color={BACKGROUND_COLORS[key]} 
      $shadow={shadow} 
      $border={border} 
      $borderSize={borderSize}
      $borderColor={borderColor}
      $radius={radius}
    >
      {isCharacter && 
        <Text color={TEXT_COLORS[key]} size={size}>
          {name}
        </Text>
      }

      {isShape && 
        <Shape 
          name={`Shape${shapeKey}` as TShapeNames}
          color={SHAPE_COLORS[key]}
          size={Math.round((size) / 100 * 50)}
        />
      }
    </Wrapper>
  )
}
