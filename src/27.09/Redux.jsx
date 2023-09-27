import React from 'react'
import { increment, decrement, multiply, reset } from '../store/store'
import { useDispatch, useSelector } from 'react-redux';

const reduxToolkit = [
    { title: '#configureStore', desc: 'функция, предназначенная упростить процесс создания и настройки хранилища;' },
    { title: '#createSlice', desc: 'объединяет в себе функционал createAction и createReducer;' },
    { title: '#createReducer', desc: 'функция, помогающая лаконично и понятно описать и создать редьюсер;' },
    { title: '#createAction', desc: 'возвращает функцию создателя действия для заданной строки типа действия;' },
]

function Redux() {

    // function for send actions to store
    const dispatch = useDispatch()
    // function for get state from store
    const counterValue = useSelector(state => state.counter.value)

    return (
        <>
            <ul>
                {reduxToolkit.map(item => <li key={item.title}> {item.title} - {item.desc}</li>)}
            </ul>
            <p>Count: {counterValue}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(multiply())}>Multiply</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default Redux