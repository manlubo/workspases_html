// 생성자 함수와 클래스함수는 첫글자 대문자

//  this : 미래에 생성될 객체의 주소값


function Student(no, name ="소똥이", score=60) {
    this.no = no;
    this.name = name;
    this.score = score;
}

const student = new Student(1, "새똥이", 90);
console.log(student);
console.log(student.name);

const students = [];
students.push(new Student(2, '개똥이', 80));
students.push(new Student(3));
students.push(new Student(4, undefined ,70));
console.log(students);