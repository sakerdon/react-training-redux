export const change = (name, value) => {
	return {
		type: 'ORDER_FORM_DATA_CHANGE',
		name,
		value
	}
}