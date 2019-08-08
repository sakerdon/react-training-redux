export const remove = (i) => {
	return {
		type: 'CART_REMOVE',
		i
	}
}

export const add = (i) => {
	return {
		type: 'CART_ADD',
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
export const deleteCart = () => {
	return {
		type: 'CART_DELETE'
	}
}