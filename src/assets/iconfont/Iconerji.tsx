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

const Iconerji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M866.191434 514.846652h-51.124137c-1.907401-172.229676-137.780851-311.737303-304.606223-311.737303s-302.698822 139.507627-304.606223 311.737303h-49.758612c-69.006026 0-125.151542 56.145516-125.151541 125.151542v55.697566c0 68.998801 56.152741 125.151542 125.151541 125.151541h88.19564a39.773654 39.773654 0 0 0 39.289579-33.755225 39.824229 39.824229 0 0 0 1.748451-11.668383v-256.921188c0-130.04287 100.998349-235.831398 225.131165-235.831398 124.140041 0 225.131165 105.795752 225.131165 235.831398v256.921188c0 7.11663 1.892951 13.75641 5.151429 19.529189a39.759204 39.759204 0 0 0 37.237677 25.894419h88.210089c68.991576 0 125.137092-56.145516 125.137092-125.151541v-55.697566c0.007225-69.006026-56.145516-125.151542-125.137092-125.151542z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconerji.defaultProps = {
  size: 18,
};

export default Iconerji;
