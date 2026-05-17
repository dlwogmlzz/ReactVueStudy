// rfc단축키 사용.
import React, { useEffect} from 'react'

export default function Counter(props) {
	// JS
	const { number, setNumber } = props
	// local state : 컴포넌트 안에서 관리되는 state. 컴포넌트가 사라지면 같이 사라지는 state. useState로 관리한다.

	// useEffect를 사용해서 lifeCycle
	// Mount : 컴포넌트가 렌더링된 시점.
	useEffect(() => {	// ()는 함수를 넣어라.
		console.log('Mounted!')
	}, []) // DEPS [] : 의존성이 있으면 넣어라.. DEPS가 비어있으면 Mount시점에만 실행됨. lifeCycle을 조절하기 위함.

	// Update : 컴포넌트가 업데이트된 시점.
	useEffect(() => {
		console.log('Updated!')
		// if (number < 0) { setNumber(0) }
		if (number < 0) { 
			setNumber(0)
			alert('카트가 비어있어요.')
		}
	}, [number, setNumber]) // DEPS [number] : number가 업데이트될 때마다 실행됨. number가 바뀔 때마다 업데이트 시점이 된다.

	// Unmount : 컴포넌트가 사라진 시점.
	useEffect(() => {
		// return 안에 있는 놈이 실행됨.
		return () => {
			console.log('Unmounted!')
		}
	}, []) // DEPS가 비어있는데, return안에 함수가 있으면, 그 함수를 Unmount 시점에만 실행됨.

	const increase = () => setNumber(number + 1)
	const decrease = () => setNumber(number - 1)

	// XML
	return (
		<>
			<div className="App">
				{ number }
				<button onClick={increase}>+</button>
				<button onClick={decrease}>-</button>
			</div>
			<div></div>
		</>
	);
}
// export default App;
