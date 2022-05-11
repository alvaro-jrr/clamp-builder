// find the slope `m` from y/x axis between fontSize and width
function slope(fontSize, width) {
	return (fontSize.max - fontSize.min) / (width.max - width.min);
}

function yAxisIntersection(fontSize, width) {
	return -width.min * slope(fontSize, width) + fontSize.min;
}

// find preferred value for clamp
function preferredValue(fontSize, width) {
	const relativeSize = yAxisIntersection(fontSize, width).toFixed(3);
	const fluidSize = (slope(fontSize, width) * 100).toFixed(3);

	return `${relativeSize}rem + ${fluidSize}vw`;
}

// convert px size to rem
function pxToRem(px) {
	return px / 16;
}

// return the clamp function
function clamp(fontSize, width) {
	for (let prop in fontSize) {
		fontSize[prop] = pxToRem(fontSize[prop]);
	}

	for (let prop in width) {
		width[prop] = pxToRem(width[prop]);
	}

	return `clamp(${fontSize.min}rem, ${preferredValue(fontSize, width)}, ${
		fontSize.max
	}rem);`;
}

export { clamp };
