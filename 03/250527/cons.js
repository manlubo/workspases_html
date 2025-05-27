// 생성자 함수
// 학생의 프로퍼티 갯수 : 7
// 총점 평균은 공간 낭비
// 프로토타입을 통한 분리
// 추가로 메서드 두개를 관리

function Student (no, name, kor, eng, mat){
            this.no = no;
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            this.mat = mat;
        }

Student.prototype.total = function() {return this.kor + this.eng + this.mat;}
Student.prototype.avg = function() {return this.total() / 3;}

// 프로토타입: 함수를 통해 생성된 객체(new)의 공용공간
const s = new Student(1, "새똥이", 80, 90, 100);
console.log(s.total());
console.log(s.avg());

Object.prototype.fn = function() {return 10;}
console.log("{}".fn());

const num = 10;
console.log(num.toFixed(2));

// for in