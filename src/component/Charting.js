import Dygraph from 'dygraphs';

function getOptions( props ) {
	const opt = {
		height: 300,
		labels: props.axisLabels,
		labelsKMB: true,
		animatedZooms: true,
		title: props.title,
		pointSize: 4,
	};
	if ( props.secondAxis && props.secondAxis.length > 0 ) {
		opt.series = {
			[ props.secondAxis ]: { axis: 'y2', fillGraph: true },
		};
	}
	return opt;
}

const Charting = ( props ) => {
	new Dygraph(
		document.getElementById( props.elementId ),
		props.data,
		getOptions( props )
	);
	return null;
};

export default Charting;
