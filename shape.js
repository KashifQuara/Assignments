const shape = prompt('Enter the shape (circle, triangle, square, or rectangle):');
let area;

switch (shape) {
  case 'circle':
    const radius = Number(prompt('Enter the radius:'));
    area = Math.PI * radius ** 2;
    break;
  case 'triangle':
    const base = Number(prompt('Enter the base:'));
    const height = Number(prompt('Enter the height:'));
    area = 0.5 * base * height;
    break;
  case 'square':
    const side = Number(prompt('Enter the side length:'));
    area = side ** 2;
    break;
  case 'rectangle':
    const width = Number(prompt('Enter the width:'));
    const height2 = Number(prompt('Enter the height:'));
    area = width * height2;
    break;
  default:
    area = null;
}

console.log(area ? `The area of the ${shape} is: ${area}` : 'Unsupported shape!');