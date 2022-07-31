import { OrbitStrokeProps } from 'types';

const OrbitStroke: React.FC<OrbitStrokeProps> = (props) => {
  return (
    <div
      className='absolute'
      style={{
        width: `${props.sizing}%`,
        height: `${props.sizing}%`,
      }}
    >
      <svg
        width='100%'
        height='100%'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='50%'
          cy='50%'
          r='49.7%'
          stroke='#F2C94C'
          strokeWidth='1.02389'
          strokeDasharray='15 5'
        />
      </svg>
    </div>
  );
};

export default OrbitStroke;
