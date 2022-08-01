import { useContext } from 'react';

import { DataContext } from 'context';
import { capitalize } from 'helpers';

const SocialMediaFooter: React.FC = () => {
  const { socialMedia } = useContext(DataContext);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  return (
    <footer className='w-full mt-6 flex justify-center items-center gap-9'>
      {socialMedia.map((item) => {
        if (item.iconPath) {
          return (
            <a
              key={item._id}
              href={item.url}
              target='_blank'
              rel='noreferrer'
              title={capitalize(item.name)}
              className='flex items-center transition-transform hover:scale-125'
              data-testid={item.name}
            >
              <img
                src={`${baseUrl}/${item.iconPath}`}
                className='max-h-[2.5rem]'
                alt='Social media logo'
              />
            </a>
          );
        }
        return null;
      })}
    </footer>
  );
};

export default SocialMediaFooter;
