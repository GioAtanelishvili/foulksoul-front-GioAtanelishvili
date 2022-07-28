import { Fragment, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DashboardHeader, LoadingSpinner } from 'components';
import { MemberCard, MembersNav } from './components';
import { DataContext } from 'context';

const Members: React.FC = () => {
  const { members, isLoading } = useContext(DataContext);

  const [searchParams] = useSearchParams({ page: '1' });

  const page = Number(searchParams.get('page')) || 1;
  const membersToRender = members.slice((page - 1) * 3, page * 3);

  return (
    <Fragment>
      <DashboardHeader>ჯგუფის წევრები</DashboardHeader>
      <section className='w-3/5 min-h-[17.5rem] mt-20 flex justify-center items-center'>
        {isLoading ? (
          <LoadingSpinner className='scale-150' />
        ) : (
          membersToRender.map((member, index) => (
            <MemberCard
              key={member._id}
              _id={member._id}
              name={member.name}
              instrument={member.instrument}
              orbitRadius={member.orbitRadius}
              color={member.color}
              avatarPath={member.avatarPath}
              biography={member.biography}
              index={index}
            />
          ))
        )}
      </section>
      <MembersNav totalMembers={members.length} />
    </Fragment>
  );
};

export default Members;
