// Interface는 컴파일 결과로 자바스크립트 코드에 추가되지 않는다.
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// Typescript에서 클래스는 코드를 컨트롤 할 수 있게 해준다.
class Human {
  public name: string;
  public age: number;
  // private age: number; => 클래스 밖에서 접근할 수 없게 해준다.
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const hyukwon = new Human("piecemakerz", 24, "male");

const sayHi = ({ name, age, gender }: Human): void => {
  console.log(`Hi, I'm ${name} and age of ${age}, whose gender is ${gender}`);
};

sayHi(hyukwon);
export {};
