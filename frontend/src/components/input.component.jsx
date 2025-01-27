import React, {useState} from 'react';

const InputBox = ({name, type, id, value, placeholder, icon}) => {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="relative mb-4 w-[100%]">
            <input 
            type={type == "password" ? showPassword ? "text" :"password" : type} 
            id={id} 
            name={name} 
            defaultValue={value} 
            placeholder={placeholder} 
            className="input-box"/>
            <i className={`fi ${icon} input-icon`}></i>
            {
                type == "password" ? 
                <i className={"fi fi-rr-eye" + (!showPassword ? "-crossed" : "" ) + " input-icon left-[auto] right-4 cursor-pointer"}
                onClick={() => setShowPassword(!showPassword)}
                ></i> : ""
            }
        </div>
    )
}

export default InputBox;