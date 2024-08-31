import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brandGreen: {
        green0: string;
        green50: string;
        green100: string;
        green200: string;
        green300: string;
        green400: string;
        green500: string;
        green600: string;
        primary: string;
        green800: string;
        green900: string;
        green950: string;
      };
      brandOrange: {
        orange50: string;
        orange100: string;
        orange200: string;
        orange300: string;
        primary: string;
        orange500: string;
        orange600: string;
        orange700: string;
        orange800: string;
        orange900: string;
        orange950: string;
      };
      base: {
        base0: string;
        base50: string;
        base100: string;
        base200: string;
        base300: string;
        base400: string;
        base500: string;
        base600: string;
        base700: string;
        base800: string;
        primary: string;
        base950: string;
        base1000: string;
      };
      redErrors: {
        redErrors50: string;
        redErrors100: string;
        redErrors200: string;
        redErrors300: string;
        redErrors400: string;
        redErrors500: string;
        redErrors600: string;
        primary: string;
        redErrors800: string;
        redErrors900: string;
      };
    };
    borderRadius: {
      roundedNon: string;
      roundedXS: string;
      roundedS: string;
      roundedM: string;
      roundedL: string;
      roundedXL: string;
      roundedFull: string;
    };
    shadow: {
      base: string;
      active: string;
    };
    breakpoints: {
      maxMobile: string;
      maxTablets: string;
      maxLaptops: string;
      maxOldDesktops: string;
      maxDesktops: string;
    };
  }
}
