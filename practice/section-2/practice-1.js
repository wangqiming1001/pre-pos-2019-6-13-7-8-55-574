'use strict';

function countSameElements(collection) {
	const map = new Map();
	const result = [];
	collection.forEach((val, index) => {
		map.set(val, map.get(val) == undefined ? 1 : map.get(val) + 1);
	});
	map.forEach((value_, key_) => {
		result.push({key: key_, count: value_});
	});
	return result;
}
