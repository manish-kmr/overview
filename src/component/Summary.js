import { get_symbol } from '../OverviewApp';
import { useEffect, useState } from 'react';

const Summary = () => {
	const [ company, setCompany ] = useState( null );

	useEffect( () => {
		async function loadCompany() {
			const symbol = get_symbol();
			if ( symbol ) {
				const response = await fetch(
					'https://fda8-2601-246-4680-19a0-b8f6-b324-c057-55c6.ngrok.io/api/company?symbol=' +
						symbol
				);
				if ( response.ok ) {
					setCompany( await response.json() );
				}
			}
		}
		loadCompany();
	}, [] );

	if ( company ) {
		let sectorInfo = '';
		let industryInfo = '';
		if ( company.sector ) {
			sectorInfo = 'Sector: ' + company.sector;
		}
		if ( company.industry ) {
			industryInfo = 'Industry: ' + company.industry;
		}
		if ( sectorInfo && industryInfo ) {
			sectorInfo += ' | ';
		}
		return (
			<div>
				<h5>
					{ company.name } ({ company.symbol })
				</h5>
				<h6>
					<label>{ sectorInfo }</label>
					<label>{ industryInfo }</label>
				</h6>
				<h6>
					<a
						href={ company.website }
						target="_blank"
						rel="noreferrer"
					>
						{ company.website }
					</a>
				</h6>
				<div>{ company.description }</div>
			</div>
		);
	}
	return null;
};

export default Summary;
