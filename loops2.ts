type Ball = {diameter: number};
type Sphere = {diameter: number};
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  
  ball = sphere;  
  sphere = ball; // both have diameter in number so can be equal or both keys are same i.e diameter not value 
console.log(sphere);
console.log(ball);
