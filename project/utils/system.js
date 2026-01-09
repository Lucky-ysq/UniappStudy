const statusHeight = uni.getSystemInfoSync();
export const getStatusHeightValue = () => statusHeight.statusBarHeight || 15;


export const getMenuButtonValue = () => {
	// #ifdef MP
		const {
			top,
			height
		} = uni.getMenuButtonBoundingClientRect();
		return height + ((top - getStatusHeightValue()) * 2);
	// #endif

	// #ifndef MP
		return 40;
	// #endif
}

export const getNavbar = () => getStatusHeightValue() + getMenuButtonValue();