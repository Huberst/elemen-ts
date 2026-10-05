import type { IReactiveAdapter, TReactive } from './reactive-adapters.ts'

export interface IRenderCtx {
  render(toRender: ElemenTs, name?: string): IElementEntity
  onCleanup(fn: () => void): void
}

export type ExtendedHtmlElementTagNameMap = HTMLElementTagNameMap & {
  text: Text
  comment: Comment
}

export type TElementTagName =
  | keyof ExtendedHtmlElementTagNameMap
  | keyof SVGElementTagNameMap

type TRenderFn = (renderCtx: IRenderCtx) => ElemenTs

type TOptionalArray<T> = T | T[]

type TBasicRenderable = string | number | ElDescription<any>

export type TCanBeRendered = TOptionalArray<
  | TBasicRenderable
  | TRenderFn
  | IReactiveAdapter<string | number | null | undefined>
>
export type ElemenTs = TOptionalArray<TCanBeRendered>

export interface IElementEntity {
  appendTo(parent: IElementEntity): void
  placeAfterSelf(targetElEntity: IElementEntity): void
  remove: () => void
}

export type TReactiveClassListEntry = IReactiveAdapter<
  string | null | undefined
>

type TRenderLifecycleFn = (elE: IElementEntity, rCtx: IRenderCtx) => void

type SameType<A, B> = (<T>() => T extends A ? 1 : 2) extends
  <T>() => T extends B ? 1 : 2 ? true
  : false

export type WritablePropertyKey<T> = {
  [K in keyof T]-?: T[K] extends (...args: any[]) => unknown ? never
    : SameType<Pick<T, K>, { -readonly [P in K]: T[P] }> extends true ? K
    : never
}[keyof T]

export type PropertyValue<T, K extends keyof T> =
  | T[K]
  | IReactiveAdapter<T[K]>

export type PropertySet<T> = {
  [K in WritablePropertyKey<T>]?: PropertyValue<T, K>
}

export type TStyle =
  & {
    -readonly [
      K in keyof CSSStyleDeclaration as K extends string
        ? CSSStyleDeclaration[K] extends string ? K : never
        : never
    ]?: string
  }
  & { [K in `--${string}`]?: string }

/**
 * El Description Class.
 * Used to store everything that got passed to an StaticElWrapperBase extending class.
 * Passed attributes, css classes, nested elements.
 * Just store stuff. Keep Logic to a minimum.
 */
export class ElDescription<
  ConHTMLElType extends HTMLElement | unknown = unknown,
> {
  public lc: {
    onMount: Set<TRenderLifecycleFn>
    onRemove: Set<TRenderLifecycleFn>
    setRef: Set<(ref: ConHTMLElType) => void>
  } = {
    onMount: new Set<TRenderLifecycleFn>(),
    onRemove: new Set<TRenderLifecycleFn>(),
    setRef: new Set<(ref: ConHTMLElType) => void>(),
  }

  public ref = {} as ConHTMLElType

  public elName: TElementTagName

  public namespace?: string

  public eventHandlers: Map<string, (event: any) => void> = new Map()

  public attributes: Map<string, string | TReactive | undefined> = new Map()

  public properties: Map<WritablePropertyKey<ConHTMLElType>, unknown> =
    new Map()

  public styles?: TStyle | IReactiveAdapter<TStyle>

  public classes: (TReactiveClassListEntry | string)[] = []

  public nested: TCanBeRendered[] = []

  constructor(elName: TElementTagName, namespace?: string) {
    this.elName = elName
    this.namespace = namespace
  }

  public _(stuffToNest: ElemenTs): typeof this
  public _(...stuffToNest: TCanBeRendered[]): typeof this
  public _(
    first?: ElemenTs | TCanBeRendered,
    ...rest: TCanBeRendered[]
  ): typeof this {
    if (rest.length > 0) {
      this.nested = [first as TCanBeRendered, ...rest]
    } else if (first !== undefined) {
      this.nested = Array.isArray(first)
        ? (first as TCanBeRendered[])
        : [first as TCanBeRendered]
    }
    return this
  }

  public event<
    EK extends keyof GlobalEventHandlersEventMap,
    EV extends GlobalEventHandlersEventMap[EK] =
      GlobalEventHandlersEventMap[EK],
  >(
    eName: EK,
    cb: (
      e: EV & {
        readonly target: ConHTMLElType extends HTMLElement ? ConHTMLElType
          : EventTarget | null
      },
    ) => void,
  ): this {
    this.eventHandlers.set(eName, cb as (e: EV) => void)
    return this
  }

  public attr(key: string, value?: string | TReactive): this {
    this.attributes.set(key, value)
    return this
  }

  public attrSet(attributes: Record<string, string | TReactive>): this {
    for (const [key, value] of Object.entries(attributes)) {
      this.attr(key, value)
    }
    return this
  }

  public dataAttr(key: string, value?: string | TReactive): this {
    return this.attr(`data-${key}`, value)
  }

  public prop<K extends WritablePropertyKey<ConHTMLElType>>(
    key: K,
    value: PropertyValue<ConHTMLElType, K>,
  ): this {
    this.properties.set(key, value)
    return this
  }

  public propSet(properties: PropertySet<ConHTMLElType>): this {
    for (const [key, value] of Object.entries(properties)) {
      this.properties.set(key as WritablePropertyKey<ConHTMLElType>, value)
    }
    return this
  }

  public style(value: TStyle | IReactiveAdapter<TStyle>): this {
    this.styles = value
    return this
  }

  public setRef(setRefCb: (ref: ConHTMLElType) => void): this {
    this.lc.setRef.add(setRefCb)
    return this
  }

  public class(args: TClassListEntry[]): typeof this
  public class(...args: TClassListEntry[]): typeof this
  public class(...args: TClassListEntry[] | [TClassListEntry[]]) {
    if (args.length === 1 && Array.isArray(args[0])) {
      this.class(...(args[0] as TClassListEntry[]))
    } else {
      this.classes.push(...(args as TClassListEntry[]))
    }
    return this
  }

  public afterMount(fn: TRenderLifecycleFn): this {
    this.lc.onMount.add(fn)
    return this
  }

  public onRemove(fn: TRenderLifecycleFn): this {
    this.lc.onRemove.add(fn)
    return this
  }
}

export type TClassListEntry =
  | IReactiveAdapter<string | null | undefined>
  | string
