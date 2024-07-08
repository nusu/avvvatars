import React from 'react';
import { styled } from 'goober'
import * as shapes from '../ShapeModels'
import type { IShapeProps, IShapeList } from '../types'


export const ShapeWrapper = styled('span')<IShapeProps>`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  color: #${p => p.color || 'currentColor'};
`

export const shapeList = Object.keys(shapes)

export default function Shape(props: Readonly<IShapeProps>){
  const { name, size = 24 } = props

  const Tag = (shapes as IShapeList)[name]

  if(!Tag) {
    return null
  }

  return (
    <ShapeWrapper {...props}>
      <Tag
        width={size}
      />
    </ShapeWrapper>
  )
}