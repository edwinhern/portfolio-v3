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
		rotate: index * 2 - 10,
		y: 100 + index * 10,
		x: getXPosition(index),
		opacity: 0,
	}),
	animate: {
		y: 0,
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
		},
	},
	flipped: {
		scale: 1.05,
		rotateY: 180,
		rotateX: 0,
	},
};
