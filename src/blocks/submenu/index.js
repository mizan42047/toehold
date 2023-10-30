/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	icon: {
		src: <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M2 3C.9 3 0 3.9 0 5v2c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 1h21c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H2c-.563 0-1-.437-1-1V5c0-.563.437-1 1-1zm0 17.5v2c0 .262.238.5.5.5h6.813l-1.157 1.125c-.48.497.28 1.157.688.72l2-2c.193-.187.193-.534 0-.72l-2-2c-.397-.397-1.14.268-.688.72L9.312 23H3v-1.5c0-.665-1-.644-1 0zm14-.5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1h12c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H16c-.563 0-1-.437-1-1v-2c0-.563.437-1 1-1zM2 12c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1h21c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H2c-.563 0-1-.437-1-1v-2c0-.563.437-1 1-1z"/></svg>
	},

	/**
	 * @see ./save.js
	 */
	save,
});
