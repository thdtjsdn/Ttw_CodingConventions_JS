//----------------------------------------------------------------------------------------------------;
[] - array access - a0 등과 같은 지정된 요소를 사용하여 새 배열 또는 다차원 배열을 초기화하거나 배열의 요소에 액세스합니다.

, - comma - expression1, expression2 등의 순서대로 평가합니다.

?: - conditional - expression1을 평가하여 expression1의 값이 true이면 결과는 expression2의 값이고, 그렇지 않으면 결과는 expression3의 값입니다.

delete - reference에 지정된 객체 속성을 삭제한 후 속성이 존재하지 않으면 결과가 true이고, 그렇지 않으면 false입니다.

. - dot - 클래스 변수 및 메서드에 액세스하고, 객체 속성을 가져오고 설정하며, 가져온 패키지 또는 클래스를 구분합니다.

in - 속성이 특정 객체에 속하는지 여부를 평가합니다.

instanceof - 표현식의 프로토타입 체인에 function에 대한 프로토타입 객체가 포함되어 있는지 여부를 평가합니다.

:: - name qualifier - 속성, 메서드, XML 속성 또는 XML 특성의 네임스페이스를 식별합니다.

new - 클래스 인스턴스를 인스턴스화합니다.

{} - object initializer - 지정된 name 및 value 속성 쌍으로 새 객체를 만들거나 초기화합니다.

() - parentheses - 하나 이상의 매개 변수에 대해 그룹화 연산을 수행하고, 표현식을 연속적으로 평가하거나, 하나 이상의 매개 변수를 묶은 다음 괄호 앞의 함수에 인수로 전달합니다.

/ - RegExp delimiter - 문자의 앞/뒤에 사용하면 해당 문자에 리터럴 값이 있으므로 이 문자를 변수, 문자열 또는 다른 ActionScript 요소가 아니라 일반 표현식(RegExp)으로 간주해야 함을 나타냅니다.

typeof - expression을 평가하고 표현식의 데이터 유형을 지정하는 문자열을 반환합니다.
//----------------------------------------------------------------------------------------------------;

[ 1, 2, 3, ... ]

[
	1
	, 2
	, 3
	, ...
]

{ a : 1, b : 2, c : 3, ... }

{
	a : 1
	, b : 2
	, c : 3
	, ...
}

( a, b, c )

(function(){

})();