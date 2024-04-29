function b(x) {
	let one = "(sin(log(e))**(log(e)<<log(e)))+(cos(log(e))**(log(e)<<log(e)))"
	if (x > 13) {
		one = "(sin(log(e))**(0b1<<0b1))+(cos(log(e))**(0b1<<0b1))"
	}
	if (x > 16) {
		one = "(sin(log(e))**0b10)+(cos(log(e))**0b10)"
	}
	if (x > 21) {
		one = "(sin(0b1)**0b10)+(cos(0b1)**0b10)"
	}
	if (x > 25) {
		one = "(sin(1)**0b10)+(cos(1)**0b10)"
	}
	if (x > 28) {
		one = "(sin(0)**1)+(cos(0)**1)"
	}
	if (x > 35) {
		one = "sin(0)+cos(0)"
	}
	if (x > 57) {
		one = "e^(sin(π))"
	}
	if (x > 69) {y
		one = "log(e)"
	}
	if (x > 98) {
		one = "(π/π)"
	}
	if (x > 109) {
		one = "0b1"
	}
	if (x > 141) {
		one = "1"
	}
    
	if (x > 198) return undefined
	
	let two = `${one}<<${one}`
	
    return `(log(${one})${`+log(${two})`.repeat(x)})/log(${two})`
}

