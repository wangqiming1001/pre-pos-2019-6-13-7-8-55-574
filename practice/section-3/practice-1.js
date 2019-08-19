'use strict';

function createUpdatedCollection(collectionA, objectB) {
	collectionA.forEach((val, index) => {
		objectB.value.forEach((val_B, index_B) => {
			if(val.key == val_B){
				val.count--;
			}
		});
	});
	return collectionA;
}
