import type { IReactiveAdapter, TReactive } from './reactive-adapters.ts'
import {
  ElDescription,
  type ElemenTs,
  type PropertySet,
  type PropertyValue,
  type TCanBeRendered,
  type TClassListEntry,
  type TElementTagName,
  type TStyle,
  type WritablePropertyKey,
} from './static-el-base.ts'

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg'

type ML_CUSTOM_SVGPathElement = SVGPathElement & {
  d: string
}
type ML_CUSTOM_SVGPathElementTagNameMap = SVGElementTagNameMap & {
  path: ML_CUSTOM_SVGPathElement
}

type TSvgTagName = keyof SVGElementTagNameMap
type TSvgElForTag<Tag extends TSvgTagName> =
  ML_CUSTOM_SVGPathElementTagNameMap[Tag]

export type StaticSvgTag<Tag extends TSvgTagName> = {
  new (): {}
  readonly elName: TElementTagName
  readonly namespace: typeof SVG_NAMESPACE
  readonly inst: ElDescription<TSvgElForTag<Tag>>
  _(nested: ElemenTs): ElDescription<TSvgElForTag<Tag>>
  _(...nested: TCanBeRendered[]): ElDescription<TSvgElForTag<Tag>>
  class(args: TClassListEntry[]): ElDescription<TSvgElForTag<Tag>>
  class(...args: TClassListEntry[]): ElDescription<TSvgElForTag<Tag>>
  attr(
    key: string,
    value?: string | TReactive,
  ): ElDescription<TSvgElForTag<Tag>>
  attrSet(
    attributes: Record<string, string | TReactive>,
  ): ElDescription<TSvgElForTag<Tag>>
  prop<K extends WritablePropertyKey<TSvgElForTag<Tag>>>(
    key: K,
    value: PropertyValue<TSvgElForTag<Tag>, K>,
  ): ElDescription<TSvgElForTag<Tag>>
  propSet(
    properties: PropertySet<TSvgElForTag<Tag>>,
  ): ElDescription<TSvgElForTag<Tag>>
  style(
    value: TStyle | IReactiveAdapter<TStyle>,
  ): ElDescription<TSvgElForTag<Tag>>
  setRef(
    setRefCb: (ref: TSvgElForTag<Tag>) => void,
  ): ElDescription<TSvgElForTag<Tag>>
  afterMount(
    fn: Parameters<ElDescription<TSvgElForTag<Tag>>['afterMount']>[0],
  ): ElDescription<TSvgElForTag<Tag>>
  onRemove(
    fn: Parameters<ElDescription<TSvgElForTag<Tag>>['onRemove']>[0],
  ): ElDescription<TSvgElForTag<Tag>>
  event<
    EK extends keyof GlobalEventHandlersEventMap,
    EV extends GlobalEventHandlersEventMap[EK] =
      GlobalEventHandlersEventMap[EK],
  >(eName: EK, cb: (e: EV) => void): ElDescription<TSvgElForTag<Tag>>
}

export function defineStaticSvgTag<Tag extends TSvgTagName>(
  tagName: Tag,
): StaticSvgTag<Tag> {
  type ElT = TSvgElForTag<Tag>

  return class StaticSvgTag {
    static readonly elName: TElementTagName = tagName
    static readonly namespace = SVG_NAMESPACE

    static get inst() {
      return new ElDescription<ElT>(tagName, SVG_NAMESPACE)
    }

    static _(nested: ElemenTs): ElDescription<ElT>
    static _(...nested: TCanBeRendered[]): ElDescription<ElT>
    static _(first?: ElemenTs | TCanBeRendered, ...rest: TCanBeRendered[]) {
      if (rest.length > 0) return this.inst._(first as TCanBeRendered, ...rest)
      return this.inst._(first as ElemenTs)
    }

    static class(args: TClassListEntry[]): ElDescription<ElT>
    static class(...args: TClassListEntry[]): ElDescription<ElT>
    static class(...args: TClassListEntry[] | [TClassListEntry[]]) {
      if (args.length === 1 && Array.isArray(args[0])) {
        return this.inst.class(...args[0])
      }
      return this.inst.class(...(args as TClassListEntry[]))
    }

    static attr(key: string, value?: string | TReactive) {
      return this.inst.attr(key, value)
    }

    static attrSet(attributes: Record<string, string | TReactive>) {
      return this.inst.attrSet(attributes)
    }

    static prop<K extends WritablePropertyKey<ElT>>(
      key: K,
      value: PropertyValue<ElT, K>,
    ) {
      return this.inst.prop(key, value)
    }

    static propSet(properties: PropertySet<ElT>) {
      return this.inst.propSet(properties)
    }

    static style(value: TStyle | IReactiveAdapter<TStyle>) {
      return this.inst.style(value)
    }

    static setRef(setRefCb: (ref: ElT) => void) {
      return this.inst.setRef(setRefCb)
    }

    static afterMount(fn: Parameters<ElDescription<ElT>['afterMount']>[0]) {
      return this.inst.afterMount(fn)
    }

    static onRemove(fn: Parameters<ElDescription<ElT>['onRemove']>[0]) {
      return this.inst.onRemove(fn)
    }

    static event<
      EK extends keyof GlobalEventHandlersEventMap,
      EV extends GlobalEventHandlersEventMap[EK] =
        GlobalEventHandlersEventMap[EK],
    >(eName: EK, cb: (e: EV) => void) {
      return this.inst.event(eName, cb)
    }
  }
}
