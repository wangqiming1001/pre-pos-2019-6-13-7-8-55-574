'use strict';

function countSameElements(collection) {
	const map = new Map();
	const result = [];
	collection.forEach((val, index) => {
		let count_ = 1;
		let count_temp = val.replace(/[^0-9]/ig,"");;
		if(count_temp != ''){
			count_ = parseInt(count_temp);
			val = val[0];
		}
		map.set(val, map.get(val) == undefined ? count_ : map.get(val) + count_);
	});
	map.forEach((value, key) => {
		result.push({name: key, summary: value});
	});
	return result;
}
