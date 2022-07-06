let discriminant;
let root1;
let root2;
let a = 1; b = 5; c = 6;
 discriminant = b * b - 4 * a * c;

    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
console.log(`The roots of quadratic equation are ${parseInt(root1)} and ${parseInt(root2)}`)

