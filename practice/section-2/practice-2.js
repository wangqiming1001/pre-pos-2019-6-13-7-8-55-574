'use strict';

function countSameElements(collection) {
	const map = new Map();
	const result = [];
	collection.forEach((val, index) => {
		let count_ = 1;
		let val_ = val.split('-');
		if(val_.length > 1){
			count_ = parseInt(val_[1]);
			val = val_[0];
		}
		map.set(val, map.get(val) == undefined ? count_ : map.get(val) + count_);
	});
	map.forEach((value, key) => {
		result.push({key: key, count: value});
	});
	return result;
}
