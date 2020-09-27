import React from 'react';
import ReactPlayer from 'react-player';
export default function videos() {
	return (
		<React.Fragment>
			<div className="App" style={{ width: '72%', height: '100%', position: 'absolute' }}>
				<ReactPlayer
					url={
						'https://splayseven.s3.us-east-2.amazonaws.com/video/Mi+Opini%C3%B3n+sobre+la+Caravana+de+centro+Am%C3%A9rica.mp4'
					}
					width="100%"
					height="100%"
					controls
					muted
					loop
				/>
			</div>
			<h1>Los videos los podremos aqui de demo</h1>
		</React.Fragment>
	);
}
