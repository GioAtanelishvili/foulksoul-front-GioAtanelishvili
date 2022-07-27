const TVLogo: React.FC = () => {
  return (
    <div className='absolute bottom-13 left-5 z-10'>
      <svg
        width='40'
        height='30'
        viewBox='0 0 40 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='8' y='2' width='24' height='24' rx='12' fill='#F2C94C' />
        <g filter='url(#filter0_d_26_68)'>
          <path
            d='M20.015 6.91995L20.015 13.1316L29.2738 15.4487L20.015 6.91995Z'
            fill='#2A566F'
          />
          <path
            d='M20.0151 6.91995L20.0151 8.68229L29.21 15.4236L20.0151 6.91995Z'
            fill='#49738B'
          />
          <path
            d='M10.1602 15.4236L20.015 13.1316L20.015 6.91995L10.1602 15.4236Z'
            fill='#EB5757'
          />
          <path
            d='M20.0067 8.69265L10.1602 15.4236L20.0067 6.93423L20.0067 8.69265Z'
            fill='#FB8383'
          />
        </g>
        <ellipse
          cx='17.0903'
          cy='15.11'
          rx='0.75'
          ry='0.630003'
          fill='#3A7DA3'
        />
        <ellipse
          cx='22.79'
          cy='15.11'
          rx='0.750001'
          ry='0.630003'
          fill='#EB5757'
        />
        <path
          d='M14.2402 17.3379C17.2802 19.7579 23.9242 23.1279 26.1802 17.2479'
          stroke='url(#paint0_linear_26_68)'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <defs>
          <filter
            id='filter0_d_26_68'
            x='0.160156'
            y='0.919952'
            width='39.1138'
            height='28.5287'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='5' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_26_68'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_26_68'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_26_68'
            x1='16.1002'
            y1='20.6679'
            x2='26.0602'
            y2='20.8479'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0469732' stopColor='#EB5757' />
            <stop offset='1' stopColor='#143B52' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TVLogo;
