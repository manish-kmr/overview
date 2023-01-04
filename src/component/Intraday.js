import { useEffect, useState } from 'react';
import { get_symbol } from '../OverviewApp';
import Charting from './Charting';

const Intraday = () => {
	const [ prices, setPrices ] = useState( null );

	useEffect( () => {
		async function loadPrices() {
			const symbol = get_symbol();
			if ( symbol ) {
				const response = await fetch(
					'https://fda8-2601-246-4680-19a0-b8f6-b324-c057-55c6.ngrok.io/api/market/intraday/' +
						symbol +
						'/price'
				);
				if ( response.ok ) {
					setPrices( await response.json() );
				}
			}
		}
		loadPrices();
	}, [] );

	if ( prices && prices.length > 0 ) {
		const chartData = prices.map( ( curr ) => [
			new Date( curr.id.recordDate ),
			curr.price,
			curr.volume,
		] );
		return (
			<Charting
				data={ chartData }
				elementId="ipchart"
				axisLabels={ [ 'Time', 'Price', 'Volume' ] }
				secondAxis="Volume"
				title="Intraday Price"
			/>
		);
	}
	return null;
};

export default Intraday;
