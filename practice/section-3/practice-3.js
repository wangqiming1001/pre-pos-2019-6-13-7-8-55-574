'use strict';

function createUpdatedCollection(collectionA, objectB) {
	const map = new Map();
	const result = [];
	collectionA.forEach((val, index) => {
		map.set(val, map.get(val) == undefined ? 1 : map.get(val) + 1);
	});
	map.forEach((value_, key_) => {
		result.push({key: key_, count: value_});
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
