import React from 'react';
import spinner from '../../src/img/spinner.gif';

const Loading = () => {
	return (
		<div>
			<img
				src={spinner}
				alt="Loading..."
				style={{
					width: '100px',
					margin: 'auto',
					display: 'block',
					position: 'absolute',
					top: '50%',
					right: '50%'
				}}
			/>
		</div>
	);
};

export default Loading;
