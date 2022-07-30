import { Fragment, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { SocialMediaCard } from './components';
import { DashboardHeader, DashboardCardNav } from 'components';
import { DataContext } from 'context';

const SocialMedia: React.FC = () => {
  const { socialMedia } = useContext(DataContext);

  const [searchParams] = useSearchParams({ page: '1' });

  const page = Number(searchParams.get('page')) || 1;
  const itemsToRender = socialMedia.slice((page - 1) * 3, page * 3);

  useEffect(() => {
    document.title = 'Social Media';
  }, []);

  return (
    <Fragment>
      <DashboardHeader>სოციალური ბმულები</DashboardHeader>
      <section className='w-3/5 h-70 mt-20 flex flex-col items-center gap-14'>
        {itemsToRender.map((item) => (
          <SocialMediaCard
            key={item._id}
            _id={item._id}
            name={item.name}
            url={item.url}
            iconPath={item.iconPath}
          />
        ))}
      </section>
      {socialMedia.length > 3 && (
        <DashboardCardNav arrayLength={socialMedia.length} />
      )}
      <Link
        to='create'
        state={page}
        className='text-form-go-back-link absolute bottom-9 text-lg font-bold font-nino-mtavruli underline'
        data-testid='link-to-member-create'
      >
        დაამატე ახალი სოციალური ბმული
      </Link>
    </Fragment>
  );
};

export default SocialMedia;
