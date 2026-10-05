import { defineStaticElementTag, type StaticHtmlTag } from "../src/define-tag.ts"

export const SUPPORTED_HTML_TAGS = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'search', 'section', 'select', 'slot', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr']
const aBase: StaticHtmlTag<'a'> = defineStaticElementTag('a')
export class a extends aBase {}
const abbrBase: StaticHtmlTag<'abbr'> = defineStaticElementTag('abbr')
export class abbr extends abbrBase {}
const addressBase: StaticHtmlTag<'address'> = defineStaticElementTag('address')
export class address extends addressBase {}
const areaBase: StaticHtmlTag<'area'> = defineStaticElementTag('area')
export class area extends areaBase {}
const articleBase: StaticHtmlTag<'article'> = defineStaticElementTag('article')
export class article extends articleBase {}
const asideBase: StaticHtmlTag<'aside'> = defineStaticElementTag('aside')
export class aside extends asideBase {}
const audioBase: StaticHtmlTag<'audio'> = defineStaticElementTag('audio')
export class audio extends audioBase {}
const bBase: StaticHtmlTag<'b'> = defineStaticElementTag('b')
export class b extends bBase {}
const baseBase: StaticHtmlTag<'base'> = defineStaticElementTag('base')
export class base extends baseBase {}
const bdiBase: StaticHtmlTag<'bdi'> = defineStaticElementTag('bdi')
export class bdi extends bdiBase {}
const bdoBase: StaticHtmlTag<'bdo'> = defineStaticElementTag('bdo')
export class bdo extends bdoBase {}
const blockquoteBase: StaticHtmlTag<'blockquote'> = defineStaticElementTag('blockquote')
export class blockquote extends blockquoteBase {}
const bodyBase: StaticHtmlTag<'body'> = defineStaticElementTag('body')
export class body extends bodyBase {}
const brBase: StaticHtmlTag<'br'> = defineStaticElementTag('br')
export class br extends brBase {}
const buttonBase: StaticHtmlTag<'button'> = defineStaticElementTag('button')
export class button extends buttonBase {}
const canvasBase: StaticHtmlTag<'canvas'> = defineStaticElementTag('canvas')
export class canvas extends canvasBase {}
const captionBase: StaticHtmlTag<'caption'> = defineStaticElementTag('caption')
export class caption extends captionBase {}
const citeBase: StaticHtmlTag<'cite'> = defineStaticElementTag('cite')
export class cite extends citeBase {}
const codeBase: StaticHtmlTag<'code'> = defineStaticElementTag('code')
export class code extends codeBase {}
const colBase: StaticHtmlTag<'col'> = defineStaticElementTag('col')
export class col extends colBase {}
const colgroupBase: StaticHtmlTag<'colgroup'> = defineStaticElementTag('colgroup')
export class colgroup extends colgroupBase {}
const dataBase: StaticHtmlTag<'data'> = defineStaticElementTag('data')
export class data extends dataBase {}
const datalistBase: StaticHtmlTag<'datalist'> = defineStaticElementTag('datalist')
export class datalist extends datalistBase {}
const ddBase: StaticHtmlTag<'dd'> = defineStaticElementTag('dd')
export class dd extends ddBase {}
const delBase: StaticHtmlTag<'del'> = defineStaticElementTag('del')
export class del extends delBase {}
const detailsBase: StaticHtmlTag<'details'> = defineStaticElementTag('details')
export class details extends detailsBase {}
const dfnBase: StaticHtmlTag<'dfn'> = defineStaticElementTag('dfn')
export class dfn extends dfnBase {}
const dialogBase: StaticHtmlTag<'dialog'> = defineStaticElementTag('dialog')
export class dialog extends dialogBase {}
const divBase: StaticHtmlTag<'div'> = defineStaticElementTag('div')
export class div extends divBase {}
const dlBase: StaticHtmlTag<'dl'> = defineStaticElementTag('dl')
export class dl extends dlBase {}
const dtBase: StaticHtmlTag<'dt'> = defineStaticElementTag('dt')
export class dt extends dtBase {}
const emBase: StaticHtmlTag<'em'> = defineStaticElementTag('em')
export class em extends emBase {}
const embedBase: StaticHtmlTag<'embed'> = defineStaticElementTag('embed')
export class embed extends embedBase {}
const fieldsetBase: StaticHtmlTag<'fieldset'> = defineStaticElementTag('fieldset')
export class fieldset extends fieldsetBase {}
const figcaptionBase: StaticHtmlTag<'figcaption'> = defineStaticElementTag('figcaption')
export class figcaption extends figcaptionBase {}
const figureBase: StaticHtmlTag<'figure'> = defineStaticElementTag('figure')
export class figure extends figureBase {}
const footerBase: StaticHtmlTag<'footer'> = defineStaticElementTag('footer')
export class footer extends footerBase {}
const formBase: StaticHtmlTag<'form'> = defineStaticElementTag('form')
export class form extends formBase {}
const h1Base: StaticHtmlTag<'h1'> = defineStaticElementTag('h1')
export class h1 extends h1Base {}
const h2Base: StaticHtmlTag<'h2'> = defineStaticElementTag('h2')
export class h2 extends h2Base {}
const h3Base: StaticHtmlTag<'h3'> = defineStaticElementTag('h3')
export class h3 extends h3Base {}
const h4Base: StaticHtmlTag<'h4'> = defineStaticElementTag('h4')
export class h4 extends h4Base {}
const h5Base: StaticHtmlTag<'h5'> = defineStaticElementTag('h5')
export class h5 extends h5Base {}
const h6Base: StaticHtmlTag<'h6'> = defineStaticElementTag('h6')
export class h6 extends h6Base {}
const headBase: StaticHtmlTag<'head'> = defineStaticElementTag('head')
export class head extends headBase {}
const headerBase: StaticHtmlTag<'header'> = defineStaticElementTag('header')
export class header extends headerBase {}
const hgroupBase: StaticHtmlTag<'hgroup'> = defineStaticElementTag('hgroup')
export class hgroup extends hgroupBase {}
const hrBase: StaticHtmlTag<'hr'> = defineStaticElementTag('hr')
export class hr extends hrBase {}
const htmlBase: StaticHtmlTag<'html'> = defineStaticElementTag('html')
export class html extends htmlBase {}
const iBase: StaticHtmlTag<'i'> = defineStaticElementTag('i')
export class i extends iBase {}
const iframeBase: StaticHtmlTag<'iframe'> = defineStaticElementTag('iframe')
export class iframe extends iframeBase {}
const imgBase: StaticHtmlTag<'img'> = defineStaticElementTag('img')
export class img extends imgBase {}
const inputBase: StaticHtmlTag<'input'> = defineStaticElementTag('input')
export class input extends inputBase {}
const insBase: StaticHtmlTag<'ins'> = defineStaticElementTag('ins')
export class ins extends insBase {}
const kbdBase: StaticHtmlTag<'kbd'> = defineStaticElementTag('kbd')
export class kbd extends kbdBase {}
const labelBase: StaticHtmlTag<'label'> = defineStaticElementTag('label')
export class label extends labelBase {}
const legendBase: StaticHtmlTag<'legend'> = defineStaticElementTag('legend')
export class legend extends legendBase {}
const liBase: StaticHtmlTag<'li'> = defineStaticElementTag('li')
export class li extends liBase {}
const linkBase: StaticHtmlTag<'link'> = defineStaticElementTag('link')
export class link extends linkBase {}
const mainBase: StaticHtmlTag<'main'> = defineStaticElementTag('main')
export class main extends mainBase {}
const mapBase: StaticHtmlTag<'map'> = defineStaticElementTag('map')
export class map extends mapBase {}
const markBase: StaticHtmlTag<'mark'> = defineStaticElementTag('mark')
export class mark extends markBase {}
const menuBase: StaticHtmlTag<'menu'> = defineStaticElementTag('menu')
export class menu extends menuBase {}
const metaBase: StaticHtmlTag<'meta'> = defineStaticElementTag('meta')
export class meta extends metaBase {}
const meterBase: StaticHtmlTag<'meter'> = defineStaticElementTag('meter')
export class meter extends meterBase {}
const navBase: StaticHtmlTag<'nav'> = defineStaticElementTag('nav')
export class nav extends navBase {}
const noscriptBase: StaticHtmlTag<'noscript'> = defineStaticElementTag('noscript')
export class noscript extends noscriptBase {}
const olBase: StaticHtmlTag<'ol'> = defineStaticElementTag('ol')
export class ol extends olBase {}
const optgroupBase: StaticHtmlTag<'optgroup'> = defineStaticElementTag('optgroup')
export class optgroup extends optgroupBase {}
const optionBase: StaticHtmlTag<'option'> = defineStaticElementTag('option')
export class option extends optionBase {}
const outputBase: StaticHtmlTag<'output'> = defineStaticElementTag('output')
export class output extends outputBase {}
const pBase: StaticHtmlTag<'p'> = defineStaticElementTag('p')
export class p extends pBase {}
const pictureBase: StaticHtmlTag<'picture'> = defineStaticElementTag('picture')
export class picture extends pictureBase {}
const preBase: StaticHtmlTag<'pre'> = defineStaticElementTag('pre')
export class pre extends preBase {}
const progressBase: StaticHtmlTag<'progress'> = defineStaticElementTag('progress')
export class progress extends progressBase {}
const qBase: StaticHtmlTag<'q'> = defineStaticElementTag('q')
export class q extends qBase {}
const rpBase: StaticHtmlTag<'rp'> = defineStaticElementTag('rp')
export class rp extends rpBase {}
const rtBase: StaticHtmlTag<'rt'> = defineStaticElementTag('rt')
export class rt extends rtBase {}
const rubyBase: StaticHtmlTag<'ruby'> = defineStaticElementTag('ruby')
export class ruby extends rubyBase {}
const sBase: StaticHtmlTag<'s'> = defineStaticElementTag('s')
export class s extends sBase {}
const sampBase: StaticHtmlTag<'samp'> = defineStaticElementTag('samp')
export class samp extends sampBase {}
const scriptBase: StaticHtmlTag<'script'> = defineStaticElementTag('script')
export class script extends scriptBase {}
const searchBase: StaticHtmlTag<'search'> = defineStaticElementTag('search')
export class search extends searchBase {}
const sectionBase: StaticHtmlTag<'section'> = defineStaticElementTag('section')
export class section extends sectionBase {}
const selectBase: StaticHtmlTag<'select'> = defineStaticElementTag('select')
export class select extends selectBase {}
const slotBase: StaticHtmlTag<'slot'> = defineStaticElementTag('slot')
export class slot extends slotBase {}
const smallBase: StaticHtmlTag<'small'> = defineStaticElementTag('small')
export class small extends smallBase {}
const sourceBase: StaticHtmlTag<'source'> = defineStaticElementTag('source')
export class source extends sourceBase {}
const spanBase: StaticHtmlTag<'span'> = defineStaticElementTag('span')
export class span extends spanBase {}
const strongBase: StaticHtmlTag<'strong'> = defineStaticElementTag('strong')
export class strong extends strongBase {}
const styleBase: StaticHtmlTag<'style'> = defineStaticElementTag('style')
export class style extends styleBase {}
const subBase: StaticHtmlTag<'sub'> = defineStaticElementTag('sub')
export class sub extends subBase {}
const summaryBase: StaticHtmlTag<'summary'> = defineStaticElementTag('summary')
export class summary extends summaryBase {}
const supBase: StaticHtmlTag<'sup'> = defineStaticElementTag('sup')
export class sup extends supBase {}
const tableBase: StaticHtmlTag<'table'> = defineStaticElementTag('table')
export class table extends tableBase {}
const tbodyBase: StaticHtmlTag<'tbody'> = defineStaticElementTag('tbody')
export class tbody extends tbodyBase {}
const tdBase: StaticHtmlTag<'td'> = defineStaticElementTag('td')
export class td extends tdBase {}
const templateBase: StaticHtmlTag<'template'> = defineStaticElementTag('template')
export class template extends templateBase {}
const textareaBase: StaticHtmlTag<'textarea'> = defineStaticElementTag('textarea')
export class textarea extends textareaBase {}
const tfootBase: StaticHtmlTag<'tfoot'> = defineStaticElementTag('tfoot')
export class tfoot extends tfootBase {}
const thBase: StaticHtmlTag<'th'> = defineStaticElementTag('th')
export class th extends thBase {}
const theadBase: StaticHtmlTag<'thead'> = defineStaticElementTag('thead')
export class thead extends theadBase {}
const timeBase: StaticHtmlTag<'time'> = defineStaticElementTag('time')
export class time extends timeBase {}
const titleBase: StaticHtmlTag<'title'> = defineStaticElementTag('title')
export class title extends titleBase {}
const trBase: StaticHtmlTag<'tr'> = defineStaticElementTag('tr')
export class tr extends trBase {}
const trackBase: StaticHtmlTag<'track'> = defineStaticElementTag('track')
export class track extends trackBase {}
const uBase: StaticHtmlTag<'u'> = defineStaticElementTag('u')
export class u extends uBase {}
const ulBase: StaticHtmlTag<'ul'> = defineStaticElementTag('ul')
export class ul extends ulBase {}
const videoBase: StaticHtmlTag<'video'> = defineStaticElementTag('video')
export class video extends videoBase {}
const wbrBase: StaticHtmlTag<'wbr'> = defineStaticElementTag('wbr')
export class wbr extends wbrBase {}
