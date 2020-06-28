/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconerji from './Iconerji';
import Iconziyuanldpi from './Iconziyuanldpi';
import Iconhuanyipi from './Iconhuanyipi';
import Iconyoujiantou from './Iconyoujiantou';
import Iconcainixihuan from './Iconcainixihuan';
import Iconwode from './Iconwode';
import Iconfaxian from './Iconfaxian';
import Iconyinle from './Iconyinle';
import IconHome from './IconHome';

export type IconNames = 'iconerji' | 'iconziyuanldpi' | 'iconhuanyipi' | 'iconyoujiantou' | 'iconcainixihuan' | 'iconwode' | 'iconfaxian' | 'iconyinle' | 'iconHome';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconerji':
      return <Iconerji {...rest} />;
    case 'iconziyuanldpi':
      return <Iconziyuanldpi {...rest} />;
    case 'iconhuanyipi':
      return <Iconhuanyipi {...rest} />;
    case 'iconyoujiantou':
      return <Iconyoujiantou {...rest} />;
    case 'iconcainixihuan':
      return <Iconcainixihuan {...rest} />;
    case 'iconwode':
      return <Iconwode {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian {...rest} />;
    case 'iconyinle':
      return <Iconyinle {...rest} />;
    case 'iconHome':
      return <IconHome {...rest} />;
  }

  return null;
};

export default IconFont;
