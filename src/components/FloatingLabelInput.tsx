import { useEffect, useState } from "react";
interface FloatingLabelInputProps {
    type: string;
    name: string;
    placeholder: string;
    inputProps: { // Пропсы для input, которые получим от register
        ref: (instance: HTMLInputElement | null) => void;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    };
    errorMessage?: any;
}
const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ type, name, placeholder, inputProps, errorMessage }) => {    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(value !== '');

    useEffect(() => {
        setIsFocused(value !== '');
    }, [value]);
    // console.log(register)
    return (
        <div className="relative">
            <input
                type={type}
                {...inputProps} // Используем полученные пропсы
                className={`w-full border border-gray-300 rounded-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${isFocused || value ? 'pt-6' : ''}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setValue(e.target.value)}
            />
            <label
                className={`absolute left-4 top-3 text-gray-500 transition-all ${isFocused || value ? 'text-xs top-1' : ''}`}
                style={{pointerEvents: 'none'}}>
                {placeholder}
            </label>
            {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
    );
};
export default FloatingLabelInput;