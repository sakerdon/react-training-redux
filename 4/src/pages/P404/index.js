import React from 'react';
import router from '~s/router.js';

export default () => {
	return (

		<div>
			<h1>404</h1>
			<button onClick={() => router.moveTo('cart')}> Back</button>
		</div>

		)
}