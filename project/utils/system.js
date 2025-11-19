const statusHeight = uni.getSystemInfoSync();
export const getStatusHeightValue = () => statusHeight.statusBarHeight;


export const getMenuButtonValue = () => {
	if (uni.getMenuButtonBoundingClientRect()) {
		const {
			top,
			height
		} = uni.getMenuButtonBoundingClientRect();
		return height + ((top - getStatusHeightValue()) * 2);
	} else {
		return 40;
	}
}

export const getNavbar = () => getStatusHeightValue() + getMenuButtonValue();