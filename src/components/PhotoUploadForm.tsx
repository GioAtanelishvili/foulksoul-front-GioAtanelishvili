import React, { Fragment, useState } from 'react';

import { PhotoUploadFormProps } from './types';

const PhotoUploadForm: React.FC<PhotoUploadFormProps> = (props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleSettingFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = () => props.handleSettingFile(fileReader.result);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.handleUpload(file as File);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
      {file ? (
        <button
          type='submit'
          className='bg-primary-green text-content-white mt-12 mb-10 pt-3 pb-2 px-10 rounded-[5px] text-center text-lg font-bold font-nino-mtavruli'
          data-testid='photo-upload-submit-button'
        >
          შეინახე
        </button>
      ) : (
        <Fragment>
          <label
            htmlFor='file-input'
            className='bg-primary-dark-blue text-content-white mt-12 mb-10 pt-3 pb-2 px-10 rounded-[5px] text-center text-lg font-bold font-nino-mtavruli cursor-pointer'
          >
            ატვირთე
          </label>
          <input
            type='file'
            name={props.inputName}
            id='file-input'
            accept='image/png, image/jpg, image/jpeg'
            onChange={handleSettingFile}
            className='invisible'
            data-testid='file-input'
          />
        </Fragment>
      )}
    </form>
  );
};

export default PhotoUploadForm;
