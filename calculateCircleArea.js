const radiusValues = 5;


function calculateCircleArea(radius) {
    const pi = 3.14159;
    return pi * radius * radius;
}


console.log(`Radius: ${radiusValues}, Area: ${calculateCircleArea(radiusValues)}`);
