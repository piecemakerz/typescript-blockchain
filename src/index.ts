interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "piecemakerz",
  gender: "male",
  age: 24,
};

const sayHi = ({ name, age, gender }: Human): void => {
  console.log(`Hi, I'm ${name} and age of ${age}, whose gender is ${gender}`);
};

sayHi(person);
export {};
