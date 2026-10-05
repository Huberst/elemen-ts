import type { IReactiveAdapter, TReactive } from './reactive-adapters.ts'
import {
  ElDescription,
  type ElemenTs,
  type ExtendedHtmlElementTagNameMap,
  type PropertySet,
  type PropertyValue,
  type TCanBeRendered,
  type TClassListEntry,
  type TStyle,
  type WritablePropertyKey,
} from './static-el-base.ts'

type THtmlTagName = keyof ExtendedHtmlElementTagNameMap

type THtmlElForTag<Tag extends THtmlTagName> =
  ExtendedHtmlElementTagNameMap[Tag]

export type StaticHtmlTag<Tag extends THtmlTagName> = {
  new (): {}
  readonly elName: Tag
  readonly inst: ElDescription<THtmlElForTag<Tag>>
  _(nested: ElemenTs): ElDescription<THtmlElForTag<Tag>>
  _(...nested: TCanBeRendered[]): ElDescription<THtmlElForTag<Tag>>
  class(args: TClassListEntry[]): ElDescription<THtmlElForTag<Tag>>
  class(...args: TClassListEntry[]): ElDescription<THtmlElForTag<Tag>>
  setRef(
    setRefCb: (ref: THtmlElForTag<Tag>) => void,
  ): ElDescription<THtmlElForTag<Tag>>
  attr(
    key: string,
    value?: string | TReactive,
  ): ElDescription<THtmlElForTag<Tag>>
  attrSet(
    attributes: Record<string, string | TReactive>,
  ): ElDescription<THtmlElForTag<Tag>>
  prop<K extends WritablePropertyKey<THtmlElForTag<Tag>>>(
    key: K,
    value: PropertyValue<THtmlElForTag<Tag>, K>,
  ): ElDescription<THtmlElForTag<Tag>>
  propSet(
    properties: PropertySet<THtmlElForTag<Tag>>,
  ): ElDescription<THtmlElForTag<Tag>>
  style(
    value: TStyle | IReactiveAdapter<TStyle>,
  ): ElDescription<THtmlElForTag<Tag>>
  afterMount(
    fn: Parameters<ElDescription<THtmlElForTag<Tag>>['afterMount']>[0],
  ): ElDescription<THtmlElForTag<Tag>>
  onRemove(
    fn: Parameters<ElDescription<THtmlElForTag<Tag>>['onRemove']>[0],
  ): ElDescription<THtmlElForTag<Tag>>
  event<
    EK extends keyof GlobalEventHandlersEventMap,
    EV extends GlobalEventHandlersEventMap[EK] =
      GlobalEventHandlersEventMap[EK],
  >(
    eName: EK,
    cb: (
      e: EV & {
        readonly target: THtmlElForTag<Tag> extends HTMLElement
          ? THtmlElForTag<Tag>
          : EventTarget | null
      },
    ) => void,
  ): ElDescription<THtmlElForTag<Tag>>
}

export function defineStaticElementTag<Tag extends THtmlTagName>(
  tagName: Tag,
): StaticHtmlTag<Tag> {
  type ElT = THtmlElForTag<Tag>

  return class StaticHtmlTag {
    static readonly elName = tagName

    static get inst() {
      return new ElDescription<ElT>(tagName)
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

    static setRef(setRefCb: (ref: ElT) => void) {
      return this.inst.setRef(setRefCb)
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
    >(
      eName: EK,
      cb: (
        e: EV & {
          readonly target: ElT extends HTMLElement ? ElT : EventTarget | null
        },
      ) => void,
    ) {
      return this.inst.event(eName, cb)
    }
  }
}

const CommentBase: StaticHtmlTag<'comment'> = defineStaticElementTag('comment')
export class comment extends CommentBase {}
const TextBase: StaticHtmlTag<'text'> = defineStaticElementTag('text')
export class text extends TextBase {}
