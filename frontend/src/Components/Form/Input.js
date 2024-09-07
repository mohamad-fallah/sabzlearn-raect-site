import React, {useReducer} from "react";

import "./Input.css";

export default function Input(props) {

    const inputReducer = (state , action) => {
        switch(action.type) {
            case "CHANGE": {
                return {
                    ...state,
                    value: action.value,
                    isValid: action.isValid
                }
            }
            default: {
                return state
            }
        }
    }
    
    const [mainInput, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false
    })

    const onChangeHandler = (event) => {
        dispatch({
            type: "CHANGE",
            value: event.target.value,
            isValid: true
        })
    }

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${mainInput.isValid ? 'success' : 'error'}`}
        value={mainInput.value}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${mainInput.isValid ? 'success' : 'error'}`}
        value={mainInput.value}
        onChange={onChangeHandler}
      />
    );

  return <div>{element}</div>;
}
