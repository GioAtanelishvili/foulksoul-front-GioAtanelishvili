import React, { Fragment, useState } from 'react';

import { PhotoUploadFormProps } from './types';

const PhotoUploadForm: React.FC<PhotoUploadFormProps> = (props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleSettingFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);

      const fileUrl = URL.createObjectURL(e.target.files[0]);
      props.handleSettingFile(fileUrl);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.handleUpload(file as File);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full relative flex flex-col items-center'
    >
      {props.payloadError && (
        <p
          className='text-input-error absolute -top-5 text-center font-medium'
          data-test-id='photo-upload-error-message'
        >
          {props.payloadError}
        </p>
      )}
      {file ? (
        <button
          type='submit'
          className='bg-primary-green text-content-white mt-12 mb-10 pt-3 pb-2 px-10 rounded-[5px] text-center text-lg font-bold font-nino-mtavruli'
          data-test-id='photo-upload-submit-button'
        >
          შეინახე
        </button>
      ) : (
        <Fragment>
          <input
            type='file'
            name={props.inputName}
            id='file-input'
            accept='image/png, image/jpg, image/jpeg'
            onChange={handleSettingFile}
            className='invisible'
            data-test-id='file-input'
          />
          <label
            htmlFor='file-input'
            className='bg-primary-dark-blue text-content-white mt-12 mb-10 pt-3 pb-2 px-10 rounded-[5px] text-center text-lg font-bold font-nino-mtavruli cursor-pointer'
          >
            ატვირთე
          </label>
        </Fragment>
      )}
    </form>
  );
};

export default PhotoUploadForm;
