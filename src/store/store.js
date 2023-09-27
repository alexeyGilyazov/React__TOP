//В этом файле мы создаем срез состояния и Redux-хранилище
import { createSlice, configureStore } from "@reduxjs/toolkit";

//создаем "срез"(состав хранилища) состояния
//указываем название объекта, за которым будем следить, определяем его начальное состояние.
//при получении действий(в нашем случае, increment и decrement) выполняем методы по изменению состояния нашего объекта
const counterSlice = createSlice({
    //название объекта
    name: "counter",
    //его начальное состояние
    initialState: {
        value: 0
    },
    //фукция/-и, которая получает действие и в соответствии с ним изменяет состояние объекта
    reducers: {
        //increment - название действия, которое будет обрабатываться
        increment: (state) => { state.value += 1 },
        //decrement - название действия, которое будет обрабатываться
        decrement: (state) => { state.value -= 1 },
        reset: (state) => { state.value = 0 },
        multiply: (state) => { state.value *= 2 }
    }
});

//создаем хранилище на основе среза
export const store = configureStore({
    //в хранилище указываем конкретный объект, за состоянием которого будем следить
    reducer: {
        //свойство reducer определяет обработчики действий данного объекта
        counter: counterSlice.reducer
    }
});

//экспорт действий из среза
//действия группируются в срезе в свойстве actions
export const { increment, decrement, reset, multiply } = counterSlice.actions;
