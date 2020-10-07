const sayHi = (name: string, age: number, gender?: string): void => {
  console.log(`Hi, I'm ${name} and age of ${age}, whose gender is ${gender}`);
};

sayHi("piecemakerz", 24, "male");
export {};
