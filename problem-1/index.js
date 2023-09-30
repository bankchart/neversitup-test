function shuffle(str) {
	const kv = {}
	const result = []
	str = str?.trim() || str

	if (!str || typeof str !== 'string') return []
	if (str.length === 1) return [str]
	
	for (let i = 0; i < str.length; i++) {
		const head = str[i]
		const nextShuffleItem = str.substring(0, i).concat(str.substring(i + 1))
		const itemShuffled = shuffle(nextShuffleItem)
		for (let j = 0; j < itemShuffled.length; j++) {
			const subResult = head.concat(itemShuffled[j])
			result.push(subResult)
		}
	}
	result.map((item) => { kv[item] = true })
	return Object.keys(kv);
}

module.exports = shuffle

