import { Fragment, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { DashboardHeader, MemberUpdateForm, LoadingSpinner } from 'components';
import { DataContext, AuthContext } from 'context';
import { MembersFormData } from 'types';
import { addMember } from 'services';

const MemberCreate: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { members, updateMembers } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (data: MembersFormData) => {
    setIsLoading(true);

    try {
      const response = await addMember(data, token);
      setIsLoading(false);

      const { createdMember } = response.data;
      console.log(createdMember);

      updateMembers([...members, createdMember]);
      navigate('../members');
    } catch (err: any) {
      setIsLoading(false);
      const { status } = err.response;

      if (status === '403') {
        navigate('/403');
      } else if (status === '500') {
        navigate('/500');
      }
    }
  };

  return (
    <Fragment>
      <DashboardHeader>დაამატე ჯგუფის ახალი წევრი</DashboardHeader>
      <MemberUpdateForm
        defaultValues={{}}
        submitHandler={handleSubmit}
        action='create'
      />
      <Link
        to='../members'
        className='text-form-go-back-link absolute bottom-9 text-lg font-bold font-nino-mtavruli underline'
      >
        გადი უკან
      </Link>
      {isLoading && (
        <LoadingSpinner className='absolute scale-[2] left-[calc(50%-1rem)] top-[calc(50%-1rem)]' />
      )}
    </Fragment>
  );
};

export default MemberCreate;
