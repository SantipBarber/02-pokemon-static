import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
    initialValue?: number;
    children?: JSX.Element
}

export const Counter: Component<Props> = (props) => {
    const [counter, setCounter] = createSignal(props.initialValue || 0);


    return (
        <>
            {/* <h1 class ="text-4xl font-bold">Counter</h1> */}
            { props.children }
            <h3 class="text-2xl">Value: {counter()}</h3>

            <button
                onClick={() => setCounter( (prev) => ++prev)} 
                class="bg-blue-500 p-2 mr-2 rounded"
                >+1</button>
            <button
                onClick={() => setCounter( (prev) => --prev)} 
                class="bg-blue-500 p-2 mr-2 rounded">-1</button>
        </>
    );
};