import { useEffect, useState } from 'react';
import { get_symbol } from '../OverviewApp';
import Charting from './Charting';

export const DailyPrice = () => {
	const [ prices, setPrices ] = useState( null );

	useEffect( () => {
		async function loadPrices() {
			const symbol = get_symbol();
			if ( symbol ) {
				const response = await fetch(
					'https://fda8-2601-246-4680-19a0-b8f6-b324-c057-55c6.ngrok.io/api/market/eod/' +
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

	if ( prices ) {
		const chartData = prices.map( ( curr ) => [
			new Date( curr.recordDate ),
			curr.adjClose,
			curr.volume,
		] );
		return (
			<Charting
				data={ chartData }
				elementId="dpchart"
				axisLabels={ [ 'Time', 'Price', 'Volume' ] }
				secondAxis="Volume"
				title="Daily Price"
			/>
		);
	}
	return null;
};

export default DailyPrice;
