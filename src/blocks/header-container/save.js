import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {
	const blockprops = useBlockProps.save({
		className: 'header',
	});
	const innerBlocksProps = useInnerBlocksProps.save({
		className: "header-container"
	})
	return (
		<div {...blockprops}>
			<div {...innerBlocksProps}></div>
		</div>
	);
}
