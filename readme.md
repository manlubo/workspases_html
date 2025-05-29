# Html

### block level
- 자신의 공간을 온전히 차지
> ##### div
> - 영역을 구분하기 위해 사용

### inline level
- 인라인 요소는 한줄로 출력되며, 뷰포트 크기에 맞추어 자동으로 줄 바뀜이 일어남
- 블록레벨 요소를 자식 요소로 포함하지 못함

> ##### EntityCode
> - 특수문자, 공백 등을 사용하기 위해 정해둔 코드
> ##### a 태그
> - href에 경로 작성
> - url링크
> - 메일 링크 (mailto:)
> - 전화번호 링크 (tel:)
> - 내부 위치로 이동
> - 프로토콜 포함 시 절대경로, 불포함 시 상대경로
> - / : root, ./ : current - 생략가능, ../ : parent
> ##### img 태그
> - src 속성은 이미지의 경로지정
> - 사이즈 변경 가능
> - alt 속성은 필수적으로 정의 (대체문자)

### frame
- 현재는 iframe만 사용
- html내부에 다른 창을 띄울 수 있음
- 아이프레임 내부에 name속성을 부여하고, a태그 내부에서 타겟을 해당 name으로 설정하면, iframe 내부에서 해당 링크를 보여줄 수 있다.

### map
- 이미지 하나에 여러 링크를 걸기 위해 사용

### ruby
- 윗각주 표시태그 rt태그로 위에 첨자를 붙일 수 있음

### ul, ol
- li태그로 리스트 생성
- ul : 비순서
- ol : 순서

### table
> - tr : 행의 개수
> - td : 셀의 개수
> - th : 제목 역할
> - thead : 테이블 헤드 영역
> - tbody : 테이블 바디 영역
> - tfoot : 테이블 바닥 영역
> - caption : 표 제목
> - rowspan : 세로 병합
> - colspan : 가로 병합

### form
> - fieldset : 양식 요소 그룹화
> - legend : 그룹의 제목
> ##### input
> - name 속성을 통해 이름을 정의
> - text : 글 입력
> - password : 비밀번호 입력
> - email : 이메일 입력
> - tel : 전화번호 입력
> - radio : 라디오 버튼 - 기본값은 checked
> - checkbox : 체크박스 - 기본값은 checked
> - submit : 전송
> - reset : 초기화
> - button : 버튼
> - image : 이미지 버튼
> - file : 첨부파일 - multiple : 한번에 여러파일 속성 accept : 타입 값 지정 속성
> - required : 필수값
> - range : 범위 지정 - min, max, step 속성을 같이 사용
> - number : 숫자 입력 - - min, max, step 속성을 같이 사용
> - 반드시 label을 함께 쓰는 것이 좋다
> - readonly : 읽기전용
> - disabled : 접근불가
> - autocomplete : 자동완성
> - novalidate : 유효성 검증 무시
> - tabindex : 탭 포커스 순서 조정
> - autofocus : 접속시 자동으로 포커싱
> - autocomplete : 자동완성 on / off로 설정
> - placeholder : 텍스트에 보이는 값
> - pattern : 정규식 적용
> - value : input:text에 기본값 배정
> ##### select
> - optgroup : 옵션 그룹을 설정
> - option : 셀렉트 요소들 작성


### div
- css에서 활용하기 위해 그룹을 묶는데 사용 

### codex
- coder와 decoder를 합성한 말
- coder를 통해 코딩
- decoder를 통해 디코딩


---
# css
### 위치
##### 내부 스타일 시트
- html 내부의 style 태그 내부에 css작성

##### 외부 스타일 시트
- html 외부의 .css파일 내부에 css작성

##### 인라인 스타일
- 속성을 부여할 태그 내부에 css 작성

### 선택자
##### 태그 선택자
- 태그를 직접 작성하여 css 부여 ex) p {color: red;}

##### id 선택자
- 태그에 id를 작성하고 아이디를 선택해 css 부여 ex) #title {color : blue;}

##### class 선택자
- 태그에 class를 작성하고 클래스를 선택해 css 부여 ex) .dtxt {font-size : 3em;}

##### 전체 선택자
- 모든 태그를 선택해 css부여 ex) * {border: 3px solid;}

##### 자식 선택자
- 바로 1뎁스 밑의 태그 선택자 ex) body > p {}

##### 자손 선택자
- 하위 뎁스를 선택 ex) body p {}

##### 인접 선택자
- 자신을 제외한 다음에나오는 태그를 선택 ex) td + td {width : 300px;}

##### 가상 클래스 선택자
- link : link일 때
- visited : 방문했을 때
- active : 눌렀을 때
- hover : 마우스 올렸을 때
- focus : 초점이 있었을 때

##### 가상요소 선택자
- nth-child : 자식중 ~번째
- nth-of-type : 타입중 ~번째
- before : content + '내용' 을 사용하여 앞에 내용 추가 가능
- after : content + '내용' 을 사용하여 뒤에 내용 추가 가능

##### 속성 선택자
- 속성 값, 속성유무를 []안에 넣어 선택자로 사용
- ex) p[title] {color: red;}

##### 선택자의 우선순위
- id > class > 가상선택자 > 태그 선택자 > 전체선택자

### shadow
> ##### text-shadow
> - (우측, 하단, 번짐정도, (색상,투명도))로 사용 ex) text-shadow: 4px 4px #000a;

### 문단 스타일
##### text-align
- left : 왼쪽 정렬
- right : 오른쪽 정렬
- center : 가운데 정렬
- justify : 양쪽 정렬

##### vertical-align
- top : 상단에 위치
- middle : 중간에 위치
- bottom : 하단에 위치

##### white-space
- normal : 기본
- nowrap : 박싱을 하지않음
- pre : 작성한 대로 나옴
- pre-wrap : 작성하지만 박스의 사이즈에 따라 개행은 함
- pre-line : 작성한대로 나오지만 공백은 생략

##### display
- block : 요소를 블록으로 변경
- inline : 요소를 인라인으로 변경
- inline-block : 줄바꿈은 일어나지 않지만 block요소만 사용할 수 있는 속성 사용가능
- none : 숨김

##### visibility
- visible : 요소가 보이게 함
- hidden : 공간은 유지한채로 요소가 보이지 않도록 함

### 배경
##### background-color
- 헥스코드, rgb 등 사용가능

##### background-image
- url() : 이미지 경로 작성


##### repeat (반복여부)
- no-repeat : 배경이미지 한개만 배치
- repeat-x : 배경이미지 가로만 반복
- repeat-y : 배경이미지 세로만 반복

##### background-position (요소에 이미지 배치 위치)
- px, %, center, bottom, top, left, top 사용가능
- fixed : 화면에 고정
- scroll : 스크롤시 따라오지 않음(기본값)

##### background-size
- px : 사용가능하지만 찌그러질 수 있음
- auto : 기본 비율, 남는공간은 비움
- contain : 잘리지 않도록 배치, 남는공간 비움
- cover : 빈공간없이 꽉 채우고 나머지 잘림(자주 사용)

##### background-origin(이미지 시작위치), clip(배경 영역지정)
- border-box : 테두리 기준
- padding-box : 패딩 기준
- content-box : 컨텐츠 기준

### gradient
##### linear-gradient
- 선형 그라디언트 (각도, 색상 범위, 색상 범위) ex) background-image: linear-gradient(45deg, white 30%, red 100%);
- repeating-linear-gradient : 범위가 끝나면 처음부터 반복

##### radial-gradient
- closest-side : 가장 가까운 변 까지 퍼짐
- closest-corner : 가장 가까운 꼭짓점 까지 퍼짐
- farthest-side : 가장 먼 변까지 퍼짐
- farthest-corner : 가장 먼 꼭짓점 까지 퍼짐
- repeating-radial-gradient : 범위가 끝나면 처음부터 반복

### box
##### width, height
- max-width : 최대 넓이
- min-width : 최소 넓이
- max-height : 최대 높이
- min-height : 최소 높이

##### padding
- 테두리와 요소사이의 거리
- 값 순서는 위 오른쪽 밑 왼쪽  순서

##### margin
- 테두리와 다음 박스 사이의 여백(요소의 크기값에 포함되지 않음)
- 세로는 마진값 곂침현상(컬렉싱)이 발생
- auto : 자동으로 좌우 최대값 배정(블럭의 중앙배치 위해 사용)

##### border
- style : solid, dashed, double, none 등 사용해 선의 모양 설정
- width : 굵기 설정
- color : 컬러 설정 (기본값은 글자 색)
- border-radius : 둥글기 설정 값은 왼쪽 위 꼭짓점부터 시계방향 순
- 값과 값 사이 / 기호를 넣어 타원 생성 할 수 있음

##### border-image
- url('이미지링크') 
- round : 꼭짓점부분을 제외한 이미지 반복(이미지를 조금씩 늘려서 자연스럽게)
- repeat : 꼭짓점 제외 이미지 반복
- stretch : 꼭짓점 부분을 제외하고 이미지를 늘려버림 

##### outline
- border와 동일하나, 실제 공간을 가지지 않는다.
- outline-offset : border와 outline 사이의 간격을 줄 때 사용

##### box-sizing
- padding, border값까지 개체의 크기에 포함시키기 위해 사용


##### box-shadow
box-shadow: 8px 15px 10px 7px inset #9999;
- 8px : x축
- 15px : y축
- 10px : 그림자의 흐릿함 정도
- 7px : 그림자의 확장 정도
- inset : 이너쉐도우
- #9999 : 그림자의 색상(값을 안주면 글자색이 기본값)

##### resize
- 박스의 모서리를 잡아 크기조정이 가능하게 하는 것
- none (주로 없애기 위해 사용)

##### appearance
- ui 호환성을 맞추기 위해 사용

### transform
##### translate
- 이동시키는 속성

##### rotate
- 회전 시키는 속성

##### scale
- 확대, 축소시키는 속성

### transition
- ease, linear 등 설정된 속성이나, cubic-bezier를 이용해 커스텀된 속성 사용가능
- transition-timing-function을 사용해 딜레이를 설정 가능

### animation
- ex) animation: rotate(keyframe 이름) .5s linear infinite;
##### @keyframes
- 0~100% 의 형태를 정의하거나 to, from으로 형태를 정의함

### layout
##### float
- 요소를 좌측이나 우측에 붙이고 아래 내용이 주변을 흐르게 설정
- left : 좌에서 우로 흐르게
- right : 우에서 좌로 흐르게
- clear : 영향을 받지않아야 하는 시점부터 해당 태그에 적용

##### position
- cpu사용 , translate는 gpu 사용
- static : 기본값
- relative : absolute의 부모역할
- absolute : 원래 위치에서 떼어내서 부모의 기준으로 위치를 지정
- fixed : 요소를 screen 기준으로 지정
- z-index : 값이 클수록 위로 올라감 음수값을 쓰면 가장뒤로감(static은 영향x)
##### flex
- flex-basis : 기본값
- flex-grow : 늘어날때 배율
- flex-shrink : 공간이 부족할 떄 줄어드는 배율
###### flex-wrap
- wrap : 다음줄로 넘어감
- nowrap : 넘어가지 않음

##### grid


### 미디어쿼리
##### @media
- all : 모든 미디어 장치에 사용(기본값)
- print : 프린터
- screen : 화면 ex) @media screen and (min-width:1200px){}
- speech : 스크린리더기 

# JavaScript
- 하나의 실행문이 끝나면 세미콜론(;)을 붙임
- 관련 플러그인 : codeRunner
- 관련 프로그램 : nodejs
- 카멜 표기법 사용

### 데이터 타입
- 타입(변수 or 리터럴)을 사용해 형변환이 가능
- !! 를 변수앞에 붙이면 Boolean타입이 됨
- - 0을 스트링에 붙이면 Number타입이 됨
##### 숫자
- 기본자료형
- 정수, 실수, 지수표기법 사용가능
- 자바의 double과 동일

##### 문자열
- 기본자료형
- "", ''로 표현가능
- ``내부에서는 ${}로 변수, 리터럴등을 호출가능
- 이스케이프 문자 \n, \t, \\, \', \" 사용가능
##### 논리
- 기본자료형
- 자바의 boolean과 비슷
- 숫자가 0일떄 false, 문자나 숫자는 true

##### 객체
- var s = {} 형태로 사용
##### 함수
- 선언적 함수 : function max(a,b) {return a > b ? a : b;}
- 익명 함수 : var min = function(a,b) {return a < b ? a : b;}
- 호이스팅(hoisting) : 본문에 선언한 함수를 실행시 최상단으로 끌어올림 (익명함수는 제외)
- IIFE(즉시 실행 함수) : (function(a) {console.log('파라미터의 값 : ' + a)})();
- arguments : 배열처럼 사용되는 객체 (유사배열)
- arrow function : 익명함수의 대체 es6문법 ex) abs = a => a > 0 ? a : -a;
- scope : 전역변수(global variable), 지역변수(local vartiable)

##### undifined
- 변수 선언 시 값 지정 안하면 나오는 값
##### 심볼(Symbol)

### 연산자
##### 숫자 연산자
- ** : 제곱 연산자
- === : 타입도 동일한지 확인
##### 논리 연산자
- && : 그리고
- || : 또는
- ?? : null이 아니면 true로 인식 0, 빈문자열 인식가능
- ! : 아니면

##### 요소 접근 연산자
- . : ~의로 해석하면 됨

### 변수
##### var
- es5 이전 변수 선언방법
- 함수 범위, 재선언 등 문제가 많음
- 함수블록 내에서만 지역변수가 존재

##### let
- es6 이후 변수 선언방법
- 자바의 변수와 비슷, 재선언 불가, 함수 범위 제한 등

### 상수
##### const
- es6 이후 상수 선언 방법
- 값 재할당 불가능
- 같은 블록에서는 이미 선언한 변수를 중복 선언 불가

### 내장 함수
##### 인코딩/디코딩
- encodeURIComponent() - 영문, 숫자 ()-_.~*!' 을 제외한 문자 인코딩
- decodeURIComponent() - encodeURIComponent()을 디코딩하는 함수
##### 숫자 유무한 값 판별
- isNan() : 숫자인지 아닌지 판별
- isFinite() : 무한인지 아닌지 판별

### 생성자
- function Student() {} : 해당방식으로 사용 생성자 명은 첫글자 대문자
- prototype : 추후 생성될 객체가 가지는 메서드 or 리터럴을 정의 할 수 있는 공간

### 반복문
##### for in
- 내부 리터럴의 이름을 순회하는 속성 (배열에서는 인덱스가 나옴)

##### for of
- 배열 내부의 값을 순회하는 속성


### 클래스
- class Addr {} :  해당 방식으로 사용 클래스명은 첫글자 대문자
- new를 통해서만 객체 생성가능
- 내부 constructor(){}를 통해 생성자를 만들 수 있으며, 자체 내부 함수 생성가능

### map
- set('키',밸류)를 통해 map객체에 추가
- map.keys()를 통해 키값만 확인 가능
- map.values()를 통해 밸류값만 확인 가능
- map.entries()를 통해 키와 밸류 한쌍의 배열들로 만들 수 있음


### 이벤트
##### 마우스 이벤트
- click
- dblclick
- mousemove
- mouseenter
- mouseleave

##### 키 이벤트
- keydown : 키 눌렀을 때
- keyup : 키 떼었을 때
- keypress : 키를 지속해서 누르고 있을 때

##### 폼 이벤트
- focus : 포커스가 적용되었을때
- blur : 포커스 해제되었을때
- change : 값이 변경되었을때
- submit : submit 버튼 눌렀을 때
- reset : reset 눌렀을때

##### 로드, 기타 이벤트
- load : 로딩이 완료되었을때 ex) window.onload
- abort : 이미지 로딩 시 (대체 이미지 사용 시)
- resize : 사이즈가 변경되었을 때
- scroll : 스크롤 했을 때

### window
##### history
- forward : 앞으로가기
- back : 뒤로가기

##### location
- 주소창과 관련된 것들
- reload : 새로고침

##### document
- 바디와 관련된 것

##### screen
- 화면에서 보여주는 것. 넓이 등 픽셀 포함
- 오리엔테이션 개체 : 자이로스코프(방향전환) 등

##### navigator
- 사용자의 위치정보, 블루투스 등

### DOM
##### 요소 선택
[직접선택]
- querySelector() : 괄호안에 요소 선택자 입력해서 선택(첫 하나만 선택)
- querySelectorALL() : 괄호안에 요소 선택자 입력해서 선택(모두 선택)

[상대위치 선택]
- children : 하위요소를 선택
- childNodes : 내부의 요소를 선택
- closest : 가장 가까운 요소를 선택(형제요소는 선택 안됨)

# JQuery
### 선택자
##### 콘텐츠 필터 선택자
- :contains() : 괄호 내부의 문자열을 포함하고 있는 요소
- :empty : 자식 요소가 없는 요소
- :parent : 자식 요소가 있는 요소
- :has() : 괄호의 요소를 하위요소로 가지고 있는 요소

##### 탐색 선택자
- closest() : 가까운 괄호안의 요소 선택