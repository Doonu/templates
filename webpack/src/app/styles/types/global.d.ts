declare module '*.svg' {
  import React, { VFC } from 'react';

  const SVG: VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare const IS_DEV: boolean;
