const { render } = wp.element;
import LastPrice from './component/LastPrice';
import Intraday from './component/Intraday';

const IntradayApp = () => {
	return (
		<div>
			<Intraday />
			<LastPrice />
		</div>
	);
};

if ( document.getElementById( 'my-intraday-app' ) ) {
	render( <IntradayApp />, document.getElementById( 'my-intraday-app' ) );
}
