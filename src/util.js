const getContext = (el) => {
	const scrollPos = window.scrollY || document.documentElement.scrollTop;
	const rect = el.getBoundingClientRect();
	const absPosY = scrollPos + rect.top;
	// calculate how much of the element is revealed
	let amountRevealed = scrollPos + window.innerHeight - absPosY;
	// no negative values
	if (amountRevealed < 0) amountScrolledInView = 0;
	// return context
	return {
		rect,
		amountRevealed
	}
};

export {
	getContext
};