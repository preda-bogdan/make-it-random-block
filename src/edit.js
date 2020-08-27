import { Placeholder, TextControl } from '@wordpress/components';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import Feed from './componets/feed';


const buildItem = ( item ) => {

	let image = item.thumbnail;

	if ( item.preview && item.preview.images[0].source ) {
		image = item.preview.images[0].source.url;
	}
	let object = {
		title: item.title,
		thumbnail: item.thumbnail,
		url: item.url,
		author: item.author,
		ups: item.ups
	}
	return object;
  };

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { className, attributes, setAttributes, isSelected } ) {

	const onChangeURL = async value => {
		let sanitizedValue = value.toLowerCase();
		setAttributes( { message: sanitizedValue } );
		await getResults(sanitizedValue);
	};
	
	const getResults = async ( source ) => {

		if ( source.length < 4 ) {
			setAttributes( {results: []} );
			return;
		}

		const response = await fetch( `https://www.reddit.com/r/${source}/rising.json`, {
			cache: 'no-cache',
			headers: {
				'Access-Control-Allow-Origin':'*',
				'user-agent': 'MakeItRandomBlock (1.0)',
				'content-type': 'application/json'
				},
			method: 'GET',
			redirect: 'follow', 
			referrer: 'no-referrer', 
		})
		.then(
			returned => {
				if (returned.ok) return returned;
				throw new Error('Network response was not ok.');
			}
		);

		let data = await response.json();
		data = data.data.children;
		
		let results = [];

		for (const child of data) {
			results.push( buildItem( child.data ) );
		}

		setAttributes( {results: results} );
		setAttributes( { message: source } );
	};

	return (
		<div className={ className }>
			{ attributes.message && ! isSelected ? (
				<span>
					<div>posts from: <b>/r/{ attributes.message.toLowerCase() }</b></div>
					<hr/>
					<Feed results={ attributes.results } />
				</span>
            ) : (
				<Placeholder
					label="Add a subrredit category"
					instructions="Example: tech">
						<TextControl
							label={ __( 'Your reddit', 'create-block' ) }
							value={ attributes.message || '' }
							onChange={onChangeURL}
						/>
				</Placeholder>
			) }
		</div>
	);
}
