import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Fragment, useContext, useState } from 'react';

import { DashboardHeader, MemberUpdateForm, LoadingSpinner } from 'components';
import { DataContext, AuthContext } from 'context';
import { Member, MembersFormData } from 'types';
import { editMember } from 'services';

const MembersEdit: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { members, updateMembers } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const { state } = useLocation();

  const { _id, name, instrument, orbitRadius, color, biography } =
    state as Member;

  const { page } = state as any;

  const handleSubmit = async (data: MembersFormData) => {
    setIsLoading(true);

    try {
      await editMember(data, _id, token);
      setIsLoading(false);

      const updatedMembers = members.map((member) => {
        if (member._id === _id) {
          return { ...member, ...data };
        }

        return member;
      });

      updateMembers(updatedMembers);
      navigate(`/band/members?page=${page}`);
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
      <DashboardHeader>შეცვალე ჯგუფის წევრი</DashboardHeader>
      <MemberUpdateForm
        defaultValues={{ name, instrument, orbitRadius, color, biography }}
        submitHandler={handleSubmit}
        action='edit'
      />
      <Link
        to={`/band/members?page=${page}`}
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

export default MembersEdit;
