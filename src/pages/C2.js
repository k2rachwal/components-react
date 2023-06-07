// import Button from '../components/Button';
// import { useState } from 'react';
// import Panel from '../components/Panel';

// function CounterPage2({ initialCount }) {
//     const [count, setCount] = useState(0);
//     const [valueToAdd, setValueToAdd] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//       };

//       const decrement = () => {
//         setCount(count - 1);
//       };
//       const handleChange = (e) => {
//         const value = parseInt(e.target.value) || 0;
       
//         setValueToAdd(value);
//         console.log(value);
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         setCount(count + valueToAdd);
//         setValueToAdd(0);
//       };

//   return (
//     <Panel>
//       <h1>Count is {count}</h1>
//       <Button onClick={increment}>Increment</Button>
//       <Button onClick={decrement}>decrement</Button>
//       <form onSubmit={handleSubmit}>
//         <label>Add more</label>
//         <input 
//         value={valueToAdd || ''} 
//         onChange={handleChange}
//         type='number' className='bg-gray-50 border'/>
//         <Button>ADD</Button>
//       </form>
      
//     </Panel>
//   );
// }

// export default CounterPage2;











////////////////////



import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state, action) => {

  switch (action.type) {
    case 'increment':
      return {
              ...state,
              count: state.count + 2,
            };

      case 'decrement':
      return {
              ...state,
              count: state.count - 1,
            };

    case 'change-value-to-add':
      return {
        ...state,
        valueToAdd: action.payload,
      };

      case 'add':
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0

        };

      default:
        return state;
  };

//   if(action.type === "increment"){
//     return {
//       ...state,
//       count: state.count + 2,
//     };
//   };

//   if(action.type === 'change-value-to-add') {
//     return {
//       ...state,
//       valueToAdd: action.payload
//     };
//   }
//  return state;
};

function CounterPage2({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state1, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state1);

  const increment = () => {
    dispatch({
      type: "increment"
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement"
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: 'change-value-to-add',
      payload: value
    })
    // setValueToAdd(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'add'
    })
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state1.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input 
          value={state1.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage2;
