import { WrapperInputStyle } from './style';

const InputForm = (props) => {
  const { placeholder = 'Enter text', ...rests } = props;

  const handleOnchangeInput = (e) => {
    // Safely call handleOnchange if it's passed as a prop
    if (props.handleOnchange) {
      props.onChange(e.target.value);
    }
  };

  return (
    <WrapperInputStyle
      placeholder={placeholder}// Make sure to pass the 'value' prop instead of 'valueInput'
      value = {props.value}
      {...rests}
      onChange={handleOnchangeInput}
    />
  );
};

export default InputForm;
