/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

import ReverseEnter from '@elliottpost/ckeditor5-reverse-enter/src/reverseenter';
import ReverseShiftEnter from '@elliottpost/ckeditor5-reverse-enter/src/reverseshiftenter';

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
	Autoformat,
	Bold,
	Clipboard,
	Typing,
	Undo,
	Italic,
	Underline,
	Strikethrough,
	Superscript,
	Subscript,
	BlockQuote,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	ReverseEnter,
	ReverseShiftEnter
];

// Editor configuration.
InlineEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'superscript',
			'subscript',
			'|',
			'undo',
			'redo',
			'|',
			'removeFormat'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
