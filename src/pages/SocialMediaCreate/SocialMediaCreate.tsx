import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Fragment, useContext, useState } from 'react';

import { AuthContext, DataContext } from 'context';
import { SocialMediaFormData } from 'types';
import { addSocialMedia } from 'services';
import {
  DashboardHeader,
  LoadingSpinner,
  SocialMediaUpdateForm,
} from 'components';

const SocialMediaCreate: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { socialMedia, updateSocialMedia } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();
  const { state: page } = useLocation();

  const handleSubmit = async (data: SocialMediaFormData) => {
    setIsLoading(true);

    try {
      const response = await addSocialMedia(data, token);
      setIsLoading(false);

      const { createdSocialMediaItem } = response.data;

      updateSocialMedia([...socialMedia, createdSocialMediaItem]);
      navigate(`../social-media?page=${page}`);
    } catch (err: any) {
      setIsLoading(false);
      const { status } = err.response;

      if (status === 403) {
        navigate('/403');
      } else if (status === 500) {
        navigate('/500');
      }
    }
  };

  return (
    <Fragment>
      <DashboardHeader>დაამატე სოციალური ბმული</DashboardHeader>
      <SocialMediaUpdateForm
        defaultValues={{}}
        submitHandler={handleSubmit}
        action='create'
      />
      <Link
        to={`../social-media?page=${page}`}
        className='text-form-go-back-link mt-5 text-lg font-bold font-nino-mtavruli underline'
      >
        გადი უკან
      </Link>
      {isLoading && (
        <LoadingSpinner className='absolute scale-[2] left-[calc(50%-1rem)] top-[calc(50%-1rem)]' />
      )}
    </Fragment>
  );
};

export default SocialMediaCreate;
