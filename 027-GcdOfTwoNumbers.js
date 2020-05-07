//27. GCD of two numbers
const gcd = (a, b) => {
    if (b == 0)
        return a;
    else
        return gcd(b, (a % b));
}

let a = 50
let b = 10
console.log('Gcd of', a, 'and', b, 'is', gcd(a, b))
