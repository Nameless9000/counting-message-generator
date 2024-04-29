let ones = ["1","log(e)","0b1","0x1","0o1","(π/π)","e^(sin(π))","sin(0)+cos(0)","cos(0)","(sin(0)**1)+(cos(0)**1)","(sin(1)**0b10)+(cos(1)**0b10)","(sin(1)**2)+(cos(1)**2)","(sin(log(e))**0b10)+(cos(log(e))**0b10)"]

function gen_one() {
	return ones[Math.random() * ones.length | 0]
}

function r(num) {
	num = num.toString(2)
	let result = ""
	
	for (let digit of num) {
		if (result == "") {
			result = gen_one()
			continue
		}
		
		result = `(${result})<<${gen_one()}`
		
		if (digit == "1")
			result += `|${gen_one()}`
	}
	
	return result
}