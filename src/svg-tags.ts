import { defineStaticSvgTag, type StaticSvgTag } from './define-svg-tag.ts'

const svgBase: StaticSvgTag<'svg'> = defineStaticSvgTag('svg')
export class svg extends svgBase {}
const circleBase: StaticSvgTag<'circle'> = defineStaticSvgTag('circle')
export class circle extends circleBase {}
const ellipseBase: StaticSvgTag<'ellipse'> = defineStaticSvgTag('ellipse')
export class ellipse extends ellipseBase {}
const rectBase: StaticSvgTag<'rect'> = defineStaticSvgTag('rect')
export class rect extends rectBase {}
const lineBase: StaticSvgTag<'line'> = defineStaticSvgTag('line')
export class line extends lineBase {}
const polylineBase: StaticSvgTag<'polyline'> = defineStaticSvgTag('polyline')
export class polyline extends polylineBase {}
const polygonBase: StaticSvgTag<'polygon'> = defineStaticSvgTag('polygon')
export class polygon extends polygonBase {}
const pathBase: StaticSvgTag<'path'> = defineStaticSvgTag('path')
export class path extends pathBase {}
const gBase: StaticSvgTag<'g'> = defineStaticSvgTag('g')
export class g extends gBase {}
const useBase: StaticSvgTag<'use'> = defineStaticSvgTag('use')
export class use extends useBase {}
const defsBase: StaticSvgTag<'defs'> = defineStaticSvgTag('defs')
export class defs extends defsBase {}
const svgSymbolBase: StaticSvgTag<'symbol'> = defineStaticSvgTag('symbol')
export class svgSymbol extends svgSymbolBase {}
const textBase: StaticSvgTag<'text'> = defineStaticSvgTag('text')
export class text extends textBase {}
const tspanBase: StaticSvgTag<'tspan'> = defineStaticSvgTag('tspan')
export class tspan extends tspanBase {}
const imageBase: StaticSvgTag<'image'> = defineStaticSvgTag('image')
export class image extends imageBase {}
const linearGradientBase: StaticSvgTag<'linearGradient'> = defineStaticSvgTag(
  'linearGradient',
)
export class linearGradient extends linearGradientBase {}
const radialGradientBase: StaticSvgTag<'radialGradient'> = defineStaticSvgTag(
  'radialGradient',
)
export class radialGradient extends radialGradientBase {}
const stopBase: StaticSvgTag<'stop'> = defineStaticSvgTag('stop')
export class stop extends stopBase {}
const clipPathBase: StaticSvgTag<'clipPath'> = defineStaticSvgTag('clipPath')
export class clipPath extends clipPathBase {}
const maskBase: StaticSvgTag<'mask'> = defineStaticSvgTag('mask')
export class mask extends maskBase {}
const markerBase: StaticSvgTag<'marker'> = defineStaticSvgTag('marker')
export class marker extends markerBase {}
const filterBase: StaticSvgTag<'filter'> = defineStaticSvgTag('filter')
export class filter extends filterBase {}
const foreignObjectBase: StaticSvgTag<'foreignObject'> = defineStaticSvgTag(
  'foreignObject',
)
export class foreignObject extends foreignObjectBase {}
