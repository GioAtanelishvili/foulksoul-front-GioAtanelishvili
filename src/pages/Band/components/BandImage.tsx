import { BandImageProps } from 'types';

const BandImage: React.FC<BandImageProps> = (props) => {
  const imageUrl = `${process.env.REACT_APP_API_BASE_URL}/${props.path}`;
  console.log(imageUrl);

  return (
    <figure className='w-52 h-52 m-auto flex justify-center items-center border-[6.3px] border-band-image-frame rounded-full drop-shadow-band-image overflow-hidden'>
      {props.path && (
        <img src={imageUrl} className='max-w-full max-h-full' alt='Band' />
      )}
    </figure>
  );
};

export default BandImage;
