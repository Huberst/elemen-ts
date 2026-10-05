import type { ElemenTs, IRenderCtx } from './static-el-base.ts'

export const component = (compFn: (rCtx: IRenderCtx) => ElemenTs) => compFn

export * from '../generated/__generated-static-elements.ts'
export * from './control-structures/dynamic.ts'
export * from './control-structures/each.ts'
export * from './control-structures/if.ts'
export { renderToDom } from './dom-renderer/dom-renderer.ts'
export * from './reactive-adapters.ts'
export * from './static-el-base.ts'
export * from './svg-tags.ts'
