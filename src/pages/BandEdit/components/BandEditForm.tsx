import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { DataContext, AuthContext } from 'context';
import { BandEditCard } from '../components';
import { LoadingSpinner } from 'components';
import { editBandInfo } from 'services';

const BandEditForm: React.FC = () => {
  const { token } = useContext(AuthContext);
  const { bandDetails, updateBandDetails, isLoading } = useContext(DataContext);
  const { info } = bandDetails;

  const [isLoadingLocal, setIsLoadingLocal] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      info: { value: string };
    };
    const { value } = target.info;
    const data = { info: value };

    setIsLoadingLocal(true);

    try {
      await editBandInfo(data, token);
      setIsLoadingLocal(false);

      updateBandDetails({ ...bandDetails, info: value });
    } catch (err: any) {
      setIsLoadingLocal(false);
      const { status } = err.response;

      if (status === 403) {
        navigate('/403');
      } else if (status === 500) {
        navigate('/500');
      }
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className='w-3/4 h-140 mt-10 mx-40 flex flex-col items-center'
    >
      <BandEditCard>
        {isLoading ? (
          <LoadingSpinner className='mt-56 scale-150' />
        ) : (
          <textarea
            id='band-edit-textarea'
            name='info'
            className='text-primary-dark-blue w-full h-full pr-14 py-1 bg-transparent font-arial outline-none resize-none overflow-auto'
            defaultValue={info}
          />
        )}
      </BandEditCard>
      {isLoadingLocal && (
        <LoadingSpinner className='absolute top-76 scale-[2]' />
      )}
      <button className='bg-primary-green mt-8 pt-2 pb-1 px-10 text-content-white text-lg font-nino-mtavruli rounded-[5px]'>
        შეინახე
      </button>
    </form>
  );
};

export default BandEditForm;
