import { ClassNameProps } from 'types';
import { Spinner } from './svgs';

const LoadingSpinner: React.FC<ClassNameProps> = (props) => {
  return (
    <div
      role='status'
      className={`flex justify-center items-center ${props.className}`}
      data-testid='loading-spinner'
    >
      <Spinner />
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
