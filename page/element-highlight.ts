import { SUPPORTED_HTML_TAGS } from '../generated/__generated-static-elements.ts'

// VS Code Dark Modern semantic class color — Shiki only provides syntax tokens.
const excludedTags = ['body', 'map', 'style', 'q']
const elemenTsElements = new Set(
  SUPPORTED_HTML_TAGS.filter((tag) => excludedTags.includes(tag) === false),
)

export const isElemenTsElement = (token: string) =>
  elemenTsElements.has(token.trim())

export const ELEMEN_TS_ELEMENT_COLOR = '#4EC9B0'
