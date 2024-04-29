function simplify_shifts(input) {
	const matches = Array.from(input.matchAll(/(<<1(\)|\|)?)+/g));

	if (!matches)
		return input;

	let result = ""
	let startIndex = 0;
	for (let found of matches) {
		const totalRepeats = found[0].match(/1/g).length

		let before = input.slice(startIndex, found.index)
		let str = "<<" + totalRepeats + (found[2] ?? "")
		
		result += before + str
		startIndex = found.index + found[0].length
	}
	
	result += input.slice(startIndex)

	return ("(".repeat(result.match(/\)/g)?.length) + result.replaceAll("(","")).replaceAll("(1)","1");
}

function generate_number(num, simplify = true) {
	num = num.toString(2)
	let result = ""
	
	for (let digit of num) {
		if (result == "") {
			result = "1"
			continue
		}
		
		result = `(${result})<<1`
		
		if (digit == "1")
			result += "|1"
	}
	
	return simplify ? simplify_shifts(result) : result
}

let test_output = ""
for (let i=1;i<=1000;i++) {
	let worked = new Function("return " + generate_number(i))()
	if (worked != i)
		console.log(`Failed at number {i}.`)
}