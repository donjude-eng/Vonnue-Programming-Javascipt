///26. LCM of two numbers
const gcd = (a, b) => {
    if (b == 0) {
        return a;
    }

    return gcd(b, a % b);
}

const lcm = (a, b) => {
    return (a * b) / gcd(a, b)
}

let a = 5
let b = 6
console.log('LCM of', a, 'and', b, 'is', lcm(a, b)) 
