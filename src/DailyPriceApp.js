const { render } = wp.element;
import DailyPrice from './component/DailyPrice';

const DailyPriceApp = () => {
	return (
		<div>
			<DailyPrice />
		</div>
	);
};

if ( document.getElementById( 'my-daily-app' ) ) {
	render( <DailyPriceApp />, document.getElementById( 'my-daily-app' ) );
}
