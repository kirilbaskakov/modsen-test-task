import { DESKTOP, TABLET } from '#constants/deviceSizes';

const responsiveValue = <T>(
  width: number,
  valuePhone: T,
  valueTablet: T,
  valueDesktop: T
): T => {
  return width < DESKTOP
    ? width < TABLET
      ? valuePhone
      : valueTablet
    : valueDesktop;
};

export default responsiveValue;
