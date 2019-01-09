const esc = encodeURIComponent;
export const queryUrl = params => Object.keys(params)
		.map(key => `${esc(key)}=${esc(params[key])}`)
		.join('&');

/**
 * Determines whether the object has the specified property.
 * @param  obj to test properties on
 * @param  prop property to test
 *
 * @example
 *  hasOwnProperty({foo: 'bar'}, 'foo') // => true
 *  hasOwnProperty({foo: 'bar'}, 'bar') // => false
 */

/**
 * determines whether `obj` reference is empty (empty array, empty object and/or falsy values)
 * @param obj -  any object or undefined
 * @example
 *  empty(undefined) // => true
 *  empty(null) // => true
 *  empty([]) // => true
 *  empty({}) // => true
 *  empty('') // => false
 *  empty('foo') // => false
 */
export const isEmpty = object => {
	const hasOwnProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

	if (object == null) {
		// Note: non-strict equals. 'undefined == null' is true
		return true;
	}
	for (const n in object) {
		if (hasOwnProperty(object, n) && object[n]) {
			return false;
		}
	}
	return true;
};
