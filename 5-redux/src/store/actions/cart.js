export const remove = (i) => {
	return {
		type: 'CART_REMOVE',
		i
	}
}

export const changeCnt = (i, cnt) => {
	return {
		type: 'CART_CHANGE_CNT',
		i,
		cnt
	}
}