import React from 'react';
import { GoogleMap } from 'react-google-maps';

export default (props) => {
	const GettingStartedGoogleMap = withGoogleMap(props => (
	  <GoogleMap
	    defaultZoom={12}
	    defaultCenter={{lat: props.lat, lng: props.lon}} />
	));

	return (
		<GettingStartedGoogleMap 
			containerElement={
				<div style={{ height: `100%`}}></div>
			}
			mapElement={
				<div style={{ height: `100%`}}></div>
			}
		/>
		
	);
};