//
const obj = new Object();
obj.a = 10;
console.log(obj);

const arr = new Array(); // 길이가 0인 빈 배열
console.log(arr);

// List<Student> students;
// student.get(0).getNo();

// JavaScript Object Notation
// JSON
const students = [{no:1},{no:2}];
console.log(students[1].no);

const school = [
    {classname : '우리반'},
    {
        no : 1,
        name : '새똥이',
        score : {
            kor : 90,
            eng : 80
        }
    },
    {
        no : 2,
        name : '개똥이'
    }
]

console.log(school[1].no);

