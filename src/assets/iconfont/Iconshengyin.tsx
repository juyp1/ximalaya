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

const Iconshengyin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 298.666667v426.666666h-85.333333V298.666667h85.333333zM384 298.666667v426.666666H298.666667V298.666667h85.333333z m-170.666667 128v170.666666H128v-170.666666h85.333333z m682.666667 0v170.666666h-85.333333v-170.666666h85.333333z m-341.333333-256v682.666666h-85.333334V170.666667h85.333334z"
        fill={getIconColor(color, 0, '#444444')}
      />
    </Svg>
  );
};

Iconshengyin.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshengyin) : Iconshengyin;
