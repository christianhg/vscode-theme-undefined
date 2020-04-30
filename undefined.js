const color = require('color');
const jsonfile = require('jsonfile');

const name = 'undefined';
const type = 'dark';

// https://color.hailpixel.com/#1E2127,282C34,5C6370,ABB2BF,E06C75,98C379,D19A66,61AFEF,C678DD,56B6C2
const black = color('#1E2127');
const darkGrey = color('#282C34');
const grey = color('#5C6370');
const lightGrey = color('#ABB2BF');
const green = color('#98C379');
const red = color('#E06C75');
const yellow = color('#D19A66');
const blue = color('#61AFEF');
const magenta = color('#C678DD');
const cyan = color('#56B6C2');

const css = {
  attentionSeekers: ['meta.function.variable.css', 'variable.css'],
  functions: ['support.function.misc.css'],
  defaults: [
    'punctuation.section.function.begin.bracket.round.css',
    'punctuation.section.function.end.bracket.round.css',
    'support.type.vendored.property-name.css',
  ],
  nonEssentials: ['punctuation.definition.entity.css'],
};

const html = {
  doctype: ['meta.tag.metadata.doctype.html'],
};

const scss = {
  import: ['keyword.control.at-rule.import'],
};

const yaml = {
  nonEssentials: [
    'punctuation.definition.block.sequence.item.yaml',
    'punctuation.definition.sequence.begin.yaml',
    'punctuation.definition.sequence.end.yaml',
    'punctuation.definition.mapping.begin.yaml',
    'punctuation.definition.mapping.end.yaml',
    'keyword.control.flow.block-scalar.folded.yaml',
    'keyword.control.flow.block-scalar.literal.yaml',
    'entity.other.document.begin.yaml',
  ],
  literals: [
    'constant.other.timestamp.yaml',
    'string.unquoted.block.yaml',
    'string.unquoted.plain.in.yaml',
    'string.unquoted.plain.out.yaml',
  ],
  attentionSeekers: [
    'punctuation.definition.anchor.yaml',
    'entity.name.type.anchor.yaml',
    'punctuation.definition.alias.yaml',
    'variable.other.alias.yaml',
  ],
  defaults: ['entity.name.tag.yaml'],
};

const jsts = {
  annotations: [
    'cast.expr',
    'keyword.operator.type',
    'meta.return.type',
    'meta.type.annotation',
    'meta.type.parameters',
    'support.type',
  ],
  importexport: ['keyword.control.as', 'keyword.control.export', 'meta.import'],
};

const nonEssentials = [
  'punctuation.section.property-list.begin.bracket.curly',
  'punctuation.section.property-list.end.bracket.curly',
  'punctuation.terminator.rule',
  'punctuation.accessor',
  'punctuation.section.embedded',
  'punctuation.separator',
  'punctuation.terminator.statement',
  'punctuation.definition.binding-pattern',
  'punctuation.support.type.property-name.begin',
  'punctuation.support.type.property-name.end',

  ...css.nonEssentials,
  ...html.doctype,
  ...jsts.annotations,
  ...jsts.importexport,
  ...scss.import,
  ...yaml.nonEssentials,
];

const literals = [
  'constant.language',
  'constant.numeric',
  'string.quoted',
  'string.regexp',
  'string.template',

  ...yaml.literals,
];

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
];

const functions = [
  'meta.function-call',
  'new.expr',
  'punctuation.decorator',
  'support.function',

  ...css.functions,
];

const attentionSeekers = [
  'comment',
  'keyword.other.debugger',
  'keyword.other.important',
  'variable.language.super',
  'variable.language.this',
  'variable.other.jsdoc',
  'storage.type.class.jsdoc',

  ...css.attentionSeekers,
  ...yaml.attentionSeekers,
];

/**
 * Tokens that somehow have been overridden by other settings and therefore
 * need to reset.
 */
const defaults = [
  'entity.name.type.module',
  'keyword.control.flow',
  'keyword.operator.new',
  'meta.brace.round',
  'punctuation.definition.template-expression',
  'support.class',
  'constant.language.import-export-all',
  'meta.array.literal',
  'meta.arrow',
  'meta.definition.property',
  'meta.objectliteral',
  'support.constant',
  'support.type.property-name',
  'variable.object.property',
  'variable.other',

  ...css.defaults,
  ...yaml.defaults,
];

const tokenColor = (name, tokens, color) => ({
  name,
  scope: tokens,
  settings: {
    foreground: color.hex(),
  },
});

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
    tokenColor('Non-essentials', nonEssentials, grey),
    tokenColor('Literals', literals, green),
    tokenColor('Attention seekers', attentionSeekers, red),
    tokenColor('Operators', operators, yellow),
    tokenColor('Function calls', functions, cyan),
    tokenColor('Defaults', defaults, lightGrey),
  ],
};

const file = './themes/undefined-color-theme.json';

jsonfile.writeFile(file, theme, { spaces: 2 }, err => {
  console.error(err);
});
