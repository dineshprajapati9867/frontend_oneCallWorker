interface PropsI {
  type?: string;
}

export function GreenTickIcon({ type }: PropsI) {
  const renderType = () => {
    if (type === 'small') {
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='24' height='24' rx='12' fill='#27AE60' />
          <path
            d='M17.2807 8.52002L10.0207 15.78L6.7207 12.48'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    }
    if (type === 'skip') {
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='24' height='24' rx='12' fill='#BDBDBD' />
          <path
            d='M17.2797 8.52002L10.0197 15.78L6.71973 12.48'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    }
    return (
      <svg
        width='76'
        height='76'
        viewBox='0 0 76 76'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 38C0 17.0132 17.0132 0 38 0V0C58.9868 0 76 17.0132 76 38V38C76 58.9868 58.9868 76 38 76V76C17.0132 76 0 58.9868 0 38V38Z'
          fill='#03D103'
        />
        <path
          d='M54.7212 26.98L31.7312 49.97L21.2812 39.52'
          stroke='white'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  };
  return renderType();
}

export function GreenTickIconDark() {
  return (
    <svg width={76} height={76} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width={76} height={76} rx={38} fill='#27AE60' />
      <path
        d='M54.72 26.98 31.73 49.97 21.28 39.52'
        stroke='#fff'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
