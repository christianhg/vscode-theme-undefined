const color = require('color')
const jsonfile = require('jsonfile')

const name = 'undefined'
const type = 'dark'

// https://color.hailpixel.com/#1E2127,282C34,5C6370,ABB2BF,E06C75,98C379,D19A66,61AFEF,C678DD,56B6C2
const black = color('#1E2127')
const darkGrey = color('#282C34')
const grey = color('#5C6370')
const lightGrey = color('#ABB2BF')
const green = color('#98C379')
const red = color('#E06C75')
const yellow = color('#D19A66')
const blue = color('#61AFEF')
const magenta = color('#C678DD')
const cyan = color('#56B6C2')

const nonEssentials = [
  'cast.expr',
  'keyword.control.as',
  'keyword.control.at-rule.import',
  'meta.tag.metadata.doctype.html',
  'punctuation.section.property-list.begin.bracket.curly',
  'punctuation.section.property-list.end.bracket.curly',
  'punctuation.terminator.rule',
  'keyword.operator.type',
  'keyword.control.as',
  'keyword.control.export',
  'meta.import',
  'meta.return.type',
  'meta.type.annotation',
  'meta.type.parameters',
  'punctuation.accessor',
  'punctuation.section.embedded',
  'punctuation.separator',
  'punctuation.terminator.statement',
  'punctuation.definition.binding-pattern',
  'support.type',
  'punctuation.support.type.property-name.begin',
  'punctuation.support.type.property-name.end',
]

const literals = [
  'constant.language',
  'constant.numeric',
  'string.quoted',
  'string.regexp',
  'string.template',
]

const operators = [
  'keyword.operator.arithmetic',
  'keyword.operator.assignment',
  'keyword.operator.comparison',
  'keyword.operator.decrement',
  'keyword.operator.expression',
  'keyword.operator.increment',
  'keyword.operator.list',
  'keyword.operator.logical',
  'keyword.operator.pipe',
  'keyword.operator.relational',
  'keyword.operator.spread',
  'keyword.operator.ternary',
]

const functions = ['meta.function-call', 'new.expr', 'punctuation.decorator']

const attentionSeekers = [
  'comment',
  'keyword.other.debugger',
  'keyword.other.important',
  'variable.language.this',
  'variable.other.jsdoc',
  'storage.type.class.jsdoc',
]

/**
 * Tokens that somehow have been overridden by other settings and therefore
 * need to reset.
 */
const defaults = [
  'keyword.operator.new',
  'meta.brace.round',
  'punctuation.definition.template-expression',
  'support.class',
  'constant.language.import-export-all',
  'meta.array.literal',
  'meta.arrow',
  'meta.definition.property',
  'meta.objectliteral',
  'support.type.property-name',
  'variable.object.property',
  'variable.other',
]

const tokenColor = color => token => ({
  scope: token,
  settings: {
    foreground: color.hex(),
  },
})

const theme = {
  name,
  type,
  colors: {
    /**
     * Scrollbar:
     */
    'scrollbarSlider.background': darkGrey.darken(0.4).hex(),
    'scrollbarSlider.activeBackground': darkGrey.darken(0.4).hex(),
    'scrollbarSlider.hoverBackground': darkGrey.darken(0.4).hex(),

    /**
     * Editor:
     */
    'editor.background': darkGrey.hex(),
    'editor.foreground': lightGrey.hex(),
    'editorLineNumber.foreground': grey.hex(),

    /**
     * Selections:
     */
    'editorCursor.foreground': lightGrey.hex(),
    'editor.findMatchBackground': magenta.darken(0.2).hex(),
    'editor.findMatchHighlightBackground': magenta.darken(0.2).hex(),
    'editor.lineHighlightBackground': darkGrey.lighten(0.2).hex(),
    'editor.selectionBackground': darkGrey.lighten(0.2).hex(),
    'editor.selectionHighlightBackground': darkGrey.lighten(0.2).hex(),

    /**
     * Input fields:
     */
    'input.background': darkGrey.darken(0.4).hex(),
    'input.border': darkGrey.darken(0.4).hex(),
    focusBorder: darkGrey.darken(0.4).hex(),

    /**
     * Left-side menu:
     */
    'activityBar.background': darkGrey.darken(0.4).hex(),
    'activityBar.foreground': lightGrey.hex(),
    /**
     * Left-side bar:
     */
    'sideBar.background': darkGrey.darken(0.2).hex(),
    'sideBarSectionHeader.background': darkGrey.darken(0.4).hex(),

    /**
     * Bottom bar:
     */
    'statusBar.background': darkGrey.darken(0.4).hex(),
    'statusBar.foreground': lightGrey.hex(),
    'statusBarItem.hoverBackground': darkGrey.darken(0.2).hex(),

    /**
     * Top bar:
     */
    'titleBar.activeBackground': darkGrey.darken(0.4).hex(),
    'titleBar.activeForeground': lightGrey.hex(),
    'titleBar.inactiveBackground': darkGrey.darken(0.4).hex(),
    'titleBar.inactiveForeground': lightGrey.hex(),

    /**
     * Tab bar:
     */
    'editorGroupHeader.tabsBorder': darkGrey.darken(0.2).hex(),
    'editorGroupHeader.tabsBackground': darkGrey.darken(0.2).hex(),
    'tab.border': darkGrey.darken(0.2).hex(),
    'tab.activeBackground': darkGrey.hex(),
    'tab.inactiveBackground': darkGrey.darken(0.2).hex(),
  },
  tokenColors: [
    ...nonEssentials.map(tokenColor(grey)),
    ...literals.map(tokenColor(green)),
    ...attentionSeekers.map(tokenColor(red)),
    ...operators.map(tokenColor(yellow)),
    ...functions.map(tokenColor(cyan)),
    ...defaults.map(tokenColor(lightGrey)),
  ],
}

const file = './themes/undefined-color-theme.json'

jsonfile.writeFile(file, theme, { spaces: 2 }, err => {
  console.error(err)
})
