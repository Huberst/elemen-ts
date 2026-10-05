import type { IReactiveAdapter } from '../reactive-adapters.ts'
import { isReactiveAdapter } from '../reactive-adapters.ts'
import type { ElemenTs } from '../static-el-base.ts'
import { _DYNAMIC } from './dynamic.ts'

type TAllowedToBoolean = boolean | string | number | null | undefined
type TAsReactiveAdapterAllowed = IReactiveAdapter<TAllowedToBoolean>

type TConditionFnParam = ElemenTs | (() => ElemenTs)

const EMPTY: ElemenTs = []
const EMPTY_FN = () => EMPTY

export function _IF(
  condOrReactive: TAllowedToBoolean | TAsReactiveAdapterAllowed,
) {
  let thenFn: () => ElemenTs = EMPTY_FN
  let elseFn: () => ElemenTs = EMPTY_FN

  const dynAdapter: IReactiveAdapter<() => ElemenTs> = {
    subscribe: (subFn) => {
      if (isReactiveAdapter(condOrReactive)) {
        return condOrReactive.subscribe((val) => subFn(val ? thenFn : elseFn))
      }
      subFn(condOrReactive ? thenFn : elseFn)
      return { unsubscribe: () => {} }
    },
  }

  const dynamic = _DYNAMIC(dynAdapter, '_IF')

  const elseReuse = (forElse: TConditionFnParam) => {
    elseFn = () => forElse
    return dynamic
  }

  return {
    THEN: (forThen: TConditionFnParam) => {
      thenFn = () => forThen
      // Assign ELSE for optional chaining
      return Object.assign(dynamic, { ELSE: elseReuse })
    },
    ELSE: elseReuse,
  }
}
