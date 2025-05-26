const num = 10;

console.log(num);

const obj = {a:10, b:20};
obj.c = 30;
console.log(obj);

const students = [];
const student1 = {no:1, name: '새똥이', score:80};
const student2 = {no:2, name: '개똥이', score:70};
const student3 = {no:3, name: '소똥이', score:90};
students.push(student1);
students.push(student2);
students.push(student3);
students.splice(1,1); // 1번 인덱스부터 1개 삭제

console.log(students);

{
    const v = 10;
    console.log(v);
}

{
    const v = 20;
    console.log(v);
}