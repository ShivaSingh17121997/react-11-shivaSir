import { useRef } from 'react';

export default function Fragments() {
    let ref = useRef(0);
    console.log(ref) //

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
        console.log(ref.current
        )
    }

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}
