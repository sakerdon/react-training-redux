export const change = (name, value) => {
	return {
		type: 'ORDER_FORM_DATA_CHANGE',
		name,
		value
	}
}

export const changeOrderCache = (name, totalPrice) => {
	return {
		type: 'ORDER_CACHE_CHANGE',
		lastOrderCache: {
			name,
			totalPrice
		}
	}
}