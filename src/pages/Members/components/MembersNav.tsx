import { useSearchParams } from 'react-router-dom';

import { MembersNavProps } from 'types';

const MembersNav: React.FC<MembersNavProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';

  const pages = Array.from('_'.repeat(Math.ceil(props.totalMembers / 3)));

  return (
    <div className='w-full mt-28 flex justify-center items-center'>
      {pages.map((_, index) => {
        console.log('gio');
        return (
          <button
            key={index}
            onClick={() => setSearchParams({ page: (index + 1).toString() })}
            className={`w-6 h-6 rounded-full mx-3 ${
              currentPage === (index + 1).toString()
                ? ' bg-primary-gray'
                : 'bg-members-nav-inactive'
            }`}
          />
        );
      })}
    </div>
  );
};

export default MembersNav;
