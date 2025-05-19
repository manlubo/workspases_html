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
> - radio : 라디오 버튼
> - checkbox : 체크박스
> - submit : 전송
> - reset : 초기화
> - button : 버튼
> - image : 이미지 버튼
> - file : 첨부파일
> - required : 필수값
