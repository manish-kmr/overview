import { useEffect, useState } from 'react';
import { get_symbol } from '../OverviewApp';

const LastPrice = () => {
	const [ lastPrice, setLastPrice ] = useState( null );

	useEffect( () => {
		async function loadLastPrice() {
			const symbol = get_symbol();
			if ( symbol ) {
				const response = await fetch(
					'https://fda8-2601-246-4680-19a0-b8f6-b324-c057-55c6.ngrok.io/api/market/price?symbols=' +
						symbol
				);
				if ( response.ok ) {
					setLastPrice( ( await response.json() )[ 0 ] );
				}
			}
		}
		loadLastPrice();
	}, [] );

	if ( lastPrice ) {
		return (
			<div>
				<div className="same-line">
					<h5 className="same-line">Change:</h5>
					<label className="small-left-margin">
						{ lastPrice.priceChange }%
					</label>
				</div>
				<div className="same-line large-left-margin">
					<h5 className="same-line">Last Price:</h5>
					<label className="small-left-margin">
						{ lastPrice.price }
					</label>
				</div>
				<div className="same-line large-left-margin">
					<h5 className="same-line">Day High:</h5>
					<label className="small-left-margin">
						{ lastPrice.high }
					</label>
				</div>
				<div className="same-line large-left-margin">
					<h5 className="same-line">Day Low:</h5>
					<label className="small-left-margin">
						{ lastPrice.low }
					</label>
				</div>
			</div>
		);
	}
	return null;
};

export default LastPrice;
