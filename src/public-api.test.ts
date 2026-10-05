import {
  _DYNAMIC,
  _EACH,
  _IF,
  circle,
  div,
  ElDescription,
  input,
  path,
  svg,
} from './index.ts'

Deno.test('static tags preserve typed fluent APIs and create fresh descriptions', () => {
  const field = input.prop('value', 'hello').propSet({ checked: true })
    .setRef((ref: HTMLInputElement) => {
      ref.value = 'updated'
    })
  input.event('click', (event) => {
    const target: HTMLInputElement = event.target
    target.focus()
  })
  // @ts-expect-error DOM property values remain element-specific.
  input.prop('checked', 'not a boolean')
  // @ts-expect-error Read-only DOM properties cannot be assigned.
  input.prop('tagName', 'INPUT')
  path.prop('d', 'M0 0').setRef((ref: SVGPathElement) => {
    ref.getTotalLength()
  })

  const tree = div._(field, svg._(circle.attr('r', '10')))
  if (!(tree instanceof ElDescription)) throw new Error('invalid description')
  if (div.inst === div.inst) throw new Error('descriptions must be fresh')
  if (input.elName !== 'input') throw new Error('incorrect HTML tag')
  if (svg.inst.namespace !== 'http://www.w3.org/2000/svg') {
    throw new Error('incorrect SVG namespace')
  }
  if (!(new div() instanceof div)) throw new Error('tag must remain a class')
})

Deno.test('control structures preserve their fluent return types', () => {
  const dynamic: ElDescription<Comment> = _DYNAMIC({
    subscribe(fn) {
      fn(() => div._('dynamic'))
      return { unsubscribe() {} }
    },
  })
  const each: ElDescription<Comment> = _EACH([1, 2]).DO((value) => div._(value))
  const conditional: ElDescription<Comment> = _IF(true)
    .THEN(div._('then')).ELSE(div._('else'))
  const elseOnly: ElDescription<Comment> = _IF(false).ELSE(div._('else'))
  for (const description of [dynamic, each, conditional, elseOnly]) {
    if (!(description instanceof ElDescription)) {
      throw new Error('invalid control structure')
    }
  }
})
