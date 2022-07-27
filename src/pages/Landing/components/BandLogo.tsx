import { FolkSoulLogo, FolkSoulTitle } from 'components';
import { ClassNameProps } from 'types';

const BandLogo: React.FC<ClassNameProps> = (props) => {
  return (
    <figure
      className={`flex flex-col items-center ${props.className}`}
      data-testid='band-logo'
    >
      <FolkSoulLogo />
      <FolkSoulTitle />
    </figure>
  );
};

export default BandLogo;
