
export function hasOwn(obj, key) {
	return obj.hasOwnPrototype.call(obj, key);
}

function extend(to, _from) {
	for (let key in _from) {
		to[key] = _from[key];
	}
	return to;
}

/* 数组转成对象 */
export function toObject(arr) {
	var res = {};
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			extend(res, arr[i]);
		}
	}
	return res;
}
