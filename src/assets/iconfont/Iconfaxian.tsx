/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconfaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M755.2 235.52c-10.24 2.56-240.64 94.72-335.36 186.88-92.16 92.16-181.76 325.12-186.88 335.36-2.56 10.24-2.56 20.48 5.12 28.16 5.12 5.12 10.24 7.68 17.92 7.68 2.56 0 5.12 0 10.24-2.56 10.24-2.56 240.64-94.72 335.36-186.88 92.16-92.16 181.76-325.12 186.88-335.36 2.56-10.24 2.56-20.48-5.12-28.16-7.68-7.68-17.92-10.24-28.16-5.12z m-189.44 330.24c-58.88 58.88-186.88 120.32-261.12 151.04 33.28-74.24 92.16-202.24 151.04-261.12 58.88-58.88 186.88-120.32 261.12-151.04-30.72 74.24-92.16 202.24-151.04 261.12z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 512m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512c107.52 0 209.92-33.28 296.96-94.72 10.24-7.68 15.36-23.04 5.12-35.84-7.68-10.24-23.04-15.36-35.84-5.12-76.8 53.76-168.96 84.48-266.24 84.48-253.44 0-460.8-207.36-460.8-460.8S258.56 51.2 512 51.2s460.8 207.36 460.8 460.8c0 97.28-30.72 189.44-87.04 268.8-7.68 10.24-5.12 28.16 5.12 35.84 10.24 7.68 28.16 5.12 35.84-5.12C990.72 721.92 1024 619.52 1024 512 1024 230.4 793.6 0 512 0z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Iconfaxian.defaultProps = {
  size: 18,
};

export default Iconfaxian;
