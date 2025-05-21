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