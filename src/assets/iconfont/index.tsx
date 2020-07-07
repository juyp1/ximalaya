/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconsearch from './Iconsearch';
import Iconerji from './Iconerji';
import Iconziyuanldpi from './Iconziyuanldpi';
import Iconhuanyipi from './Iconhuanyipi';
import Iconyoujiantou from './Iconyoujiantou';
import Iconcainixihuan from './Iconcainixihuan';
import Iconwode from './Iconwode';
import Iconfaxian from './Iconfaxian';
import Iconyinle from './Iconyinle';
import IconHome from './IconHome';

export type IconNames = 'iconsearch' | 'iconerji' | 'iconziyuanldpi' | 'iconhuanyipi' | 'iconyoujiantou' | 'iconcainixihuan' | 'iconwode' | 'iconfaxian' | 'iconyinle' | 'iconHome';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconsearch':
      return <Iconsearch key="1" {...rest} />;
    case 'iconerji':
      return <Iconerji key="2" {...rest} />;
    case 'iconziyuanldpi':
      return <Iconziyuanldpi key="3" {...rest} />;
    case 'iconhuanyipi':
      return <Iconhuanyipi key="4" {...rest} />;
    case 'iconyoujiantou':
      return <Iconyoujiantou key="5" {...rest} />;
    case 'iconcainixihuan':
      return <Iconcainixihuan key="6" {...rest} />;
    case 'iconwode':
      return <Iconwode key="7" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="8" {...rest} />;
    case 'iconyinle':
      return <Iconyinle key="9" {...rest} />;
    case 'iconHome':
      return <IconHome key="10" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
