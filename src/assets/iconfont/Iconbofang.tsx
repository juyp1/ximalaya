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

const Iconbofang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 947.2c-240.128 0-435.2-195.072-435.2-435.2s195.072-435.2 435.2-435.2 435.2 195.072 435.2 435.2-195.072 435.2-435.2 435.2z m0-828.928c-217.088 0-393.728 176.64-393.728 393.728s176.64 393.728 393.728 393.728 393.728-176.64 393.728-393.728-176.64-393.728-393.728-393.728z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M436.736 654.848c-5.632 0-11.264-1.536-16.384-4.608-9.216-5.632-14.848-15.36-14.848-26.624V399.872c0-10.752 5.632-20.48 14.848-26.624 9.216-5.632 20.48-6.144 30.208-1.536l224.256 112.128c10.752 5.12 17.408 15.872 17.408 27.648s-6.656 22.528-17.408 27.648l-224.256 112.64c-4.608 2.048-9.216 3.072-13.824 3.072z m10.24-238.08v190.464l190.464-95.232-190.464-95.232z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconbofang.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconbofang) : Iconbofang;
