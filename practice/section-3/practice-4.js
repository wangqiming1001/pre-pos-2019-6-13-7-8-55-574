'use strict';

function createUpdatedCollection(collectionA, objectB) {
	const map = new Map();
	const result = [];
	collectionA.forEach((val, index) => {
		let count_ = 1;
		let count_temp = val.replace(/[^0-9]/ig,"");;
		if(count_temp != ''){
			count_ = parseInt(count_temp);
			val = val[0];
		}
		map.set(val, map.get(val) == undefined ? count_ : map.get(val) + count_);
	});
	map.forEach((value, key) => {
		result.push({key: key, count: value});
	});
	
	result.forEach((val, index) => {
		objectB.value.forEach((val_B, index_B) => {
			if(val.key == val_B){
				val.count = val.count - Math.floor(val.count / 3);
			}
		});
	});
	
	return result;
}
