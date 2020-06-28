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

const Iconyoujiantou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M348.9 868c-7.8 0-15.7-3-21.7-9-12-12-12-31.4 0-43.4l305.5-305.5-305.5-305.5c-12-12-12-31.4 0-43.4s31.4-12 43.4 0l327.2 327.2c12 12 12 31.4 0 43.4L370.6 859c-6 6-13.9 9-21.7 9z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconyoujiantou.defaultProps = {
  size: 18,
};

export default Iconyoujiantou;
