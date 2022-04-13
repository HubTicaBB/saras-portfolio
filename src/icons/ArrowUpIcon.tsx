import { colorPalette } from '../theme/colorPalette';

type Props = {
  color?: string;
};

export const ArrowUpIcon = ({ color }: Props) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 4V20M12 4L18 10M12 4L6 10'
      stroke={color || colorPalette.default.dark}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
