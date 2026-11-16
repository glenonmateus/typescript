type MapStringsCallback = (item: string) => string;

function mapStrings(
	array: Array<string>,
	callbackfn: MapStringsCallback,
): Array<string> {
	const newArray: Array<string> = [];

	for (let index = 0; index < array.length; index++) {
		const item: string = array[index] as string;
		newArray.push(callbackfn(item));
	}

	return newArray;
}

const abc: string[] = ["a", "b", "c"];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMapped);
