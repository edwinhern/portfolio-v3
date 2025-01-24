const getXPosition = (index: number): number => {
	switch (index) {
		case 1:
			return -60;
		case 2:
			return -30;
		case 3:
			return 30;
		default:
			return 60;
	}
};

export const photoVariants = {
	initial: (index: number) => ({
		width: "100%",
		height: "100%",
		rotate: index * 5 - 20,
		y: 200 + index * 20,
		x: getXPosition(index),
		opacity: 0,
	}),
	animate: {
		y: 0,
		opacity: 1,
		x: 0,
	},
	flipped: {
		scale: 1.1,
		rotateY: 180,
		rotateX: 5,
	},
};
