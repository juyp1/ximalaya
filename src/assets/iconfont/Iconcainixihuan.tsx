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

const Iconcainixihuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M294.144 568.864a13.6 13.6 0 0 0 1.344 1.664l154.56 164.928c33.952 39.968 90.72 39.968 125.12-0.48l153.6-164.864a140.16 140.16 0 0 0 3.776-4.032l2.272-2.432a13.536 13.536 0 0 0 1.792-2.368c20.48-25.6 31.392-57.696 31.392-92.832a148.448 148.448 0 0 0-256-102.304 148.448 148.448 0 0 0-256 102.304c0 37.12 14.08 73.408 38.144 100.416zM512 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcainixihuan.defaultProps = {
  size: 18,
};

export default Iconcainixihuan;
