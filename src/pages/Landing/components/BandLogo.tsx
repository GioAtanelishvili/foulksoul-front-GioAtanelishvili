import { FolkSoulLogo, FolkSoulTitle } from './svgs';
import { ClassNameProps } from 'types';

const BandLogo: React.FC<ClassNameProps> = (props) => {
  return (
    <figure
      className={`flex flex-col items-center ${props.className}`}
      data-test-id='band-logo'
    >
      <FolkSoulLogo />
      <FolkSoulTitle />
    </figure>
  );
};

export default BandLogo;
