import * as React from 'react';
import { ComponentType } from 'react'
import { styled } from 'goober'
import * as shapes from './shapes'
import { ShapeProps } from './shapes'

export type ShapeNames = keyof typeof shapes
interface ShapeList {
	[key: string]: ComponentType<ShapeProps>
}

export interface Props {
  name: ShapeNames
  size?: number
  color: string
}

export const ShapeWrapper = styled('span')<Props>`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;

  color: #${p => p.color || 'currentColor'};
`

export const shapeList = Object.keys(shapes)

export default function Shape(props: Props){
  const { name, size = 24 } = props

  const Tag = (shapes as ShapeList)[name]

  if(!Tag) {
    // shape doen't exists
    return null
  }

  return (
    <ShapeWrapper {...props} role="img">
      <Tag
        width={size}
      />
    </ShapeWrapper>
  )
}