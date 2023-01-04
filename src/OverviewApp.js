const { render } = wp.element;
import Summary from './component/Summary';

export const get_symbol = () => {
	const search = window.location.search;
	const params = new URLSearchParams( search );
	return params.get( 'ppc' );
};

const OverviewApp = () => {
	return (
		<div>
			<Summary />
		</div>
	);
};

if ( document.getElementById( 'my-overview-app' ) ) {
	render( <OverviewApp />, document.getElementById( 'my-overview-app' ) );
}
