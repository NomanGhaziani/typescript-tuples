 // let studentInfo : [string,number,boolean]= ["Noman",4100,true]
//console.log(studentInfo);
// person.ts
export interface Person {
    name: string;
    age: number;
}

export const greet = (person: Person): string => {
    return `Hello, ${person.name}!`;
}
