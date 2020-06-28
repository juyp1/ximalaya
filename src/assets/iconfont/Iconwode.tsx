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

const Iconwode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M753.9 629.5c-33.3-33.3-73.4-59.6-118.1-76.9 63.7-40.4 106-111.6 106-192.6 0-125.9-102.1-228-228-228s-228 102.1-228 228c0 81 42.3 152.2 106 192.6-44.7 17.2-84.8 43.6-118.1 76.9-61.5 61.5-99.5 146.4-99.5 240.2 0 18.7 15.2 33.8 33.8 33.8 18.7 0 33.8-15.2 33.8-33.8 0-72.6 28.3-140.9 79.6-192.3 51.4-51.4 119.6-79.6 192.3-79.6 72.6 0 140.9 28.3 192.3 79.6 51.4 51.4 79.6 119.7 79.6 192.3 0 18.7 15.2 33.8 33.8 33.8 18.7 0 33.8-15.2 33.8-33.8C853.4 775.9 815.4 690.9 753.9 629.5zM345.8 360c0-92.6 75.4-168 168-168s168 75.4 168 168c0 92.6-75.4 168-168 168S345.8 452.6 345.8 360z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconwode.defaultProps = {
  size: 18,
};

export default Iconwode;
