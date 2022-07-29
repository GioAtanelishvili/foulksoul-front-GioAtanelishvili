import { useState } from 'react';
import { ColorInputProps } from 'types';

const ColorInput: React.FC<ColorInputProps> = (props) => {
  const [color, setColor] = useState(props.defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    props.setFormValue(e.target.value);
    if (
      !/^#(([0-9a-f]){6}$|([0-9A-F]){6}$)/.test(e.target.value) &&
      props.isSubmitted
    ) {
      props.setFormError({
        type: 'custom',
        message: 'უნდა ემთხვეოდეს HEX ფორმატს!',
      });
    } else {
      props.clearFormError();
    }
  };

  return (
    <div className='w-40 h-14 py-3 pl-2 flex items-center justify-between gap-1 text-center relative text-sm border border-primary-dark-blue rounded-[5px] bg-content-white'>
      <input
        id='text-color'
        type='text'
        placeholder='ფერი'
        value={color}
        onChange={handleChange}
        name={props.register.name}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
        className='w-3/4 text-center outline-none autofill:bg-content-white text-primary-dark-blue placeholder:text-update-form-placeholder shadow-color-input'
      />
      <label
        id='color-label'
        htmlFor='color'
        className='w-8 h-8 cursor-pointer border rounded-full'
        style={{ backgroundColor: color }}
      />
      <input
        id='color'
        type='color'
        onChange={handleChange}
        className='invisible w-0 h-0'
      />
      {props.error && (
        <p className='text-login-input-error absolute top-14 font-medium'>
          {props.error.message}
        </p>
      )}
    </div>
  );
};

export default ColorInput;