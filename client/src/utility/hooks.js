import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value});
    }

    const onSubmit = (event) => {
        event.preventDefault();
        callback()
        setTimeout(function() {
            window.location.reload();
        }, 2000);
    }

    return {
        onChange,
        onSubmit,
        values
    }

}