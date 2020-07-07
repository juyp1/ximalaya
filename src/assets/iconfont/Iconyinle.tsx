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

const Iconyinle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.3 1006.8c-82.7 0-160.5-19.5-233.5-58.4-34.6-18.4-66.3-40.9-95.6-66.9-41.6-37-76-79.8-103.1-128.4-27.7-49.6-46.5-102.5-55.8-158.7-5.5-33.2-7.8-66.6-6.5-100.2 2.5-66.4 17.5-129.8 45.5-190.2 18.2-39.3 41.2-75.6 69-108.9 41.3-49.5 90.4-89.5 147.3-119.9 42.3-22.6 87-38.8 134-48.3 25.3-5.1 50.9-8.1 76.8-9.3 25.3-1.2 50.4-0.1 75.5 2.2 18.1 1.7 28.2 14 30.7 25.8 4.4 21.4-12.1 40.8-33.8 39.1-20-1.6-39.9-2.8-60-2.4-53 1.2-104.2 11.4-153.3 31.7-43.4 17.9-83.1 42-118.5 73-69.7 61.1-115.7 136.8-137.2 227-5.5 22.9-8.5 46.2-10.1 69.7-1.4 20.5-1.3 41 0.3 61.4 4 51.7 16.7 101.3 38.8 148.3 16.7 35.4 37.5 68 62.9 97.7 32.8 38.3 71.1 70 115.1 94.8 39.9 22.6 82.3 38.7 127.3 47.4 22.9 4.4 46 7 69.3 7.9 51.9 1.8 102.5-5.2 151.7-21.7C700 902 747 875.6 788.8 840.1c46.4-39.3 83-86.4 109.6-141 19.9-40.9 32.9-83.9 38.8-129.1 2.7-20.8 4.4-41.8 4-62.8-0.7-43.9-7.3-86.9-21.1-128.8-6.5-19.7 4.3-39 23.9-43.3 16.3-3.5 32.3 5.9 37.8 22.4 8.9 26.9 15.3 54.3 19.3 82.3 4.3 29.8 6 59.8 4.9 89.9-2.4 62.4-15.7 122.3-40.8 179.6-17.8 40.7-40.6 78.4-68.5 113-38.9 48.3-85.3 87.9-139 118.8-40.7 23.4-84 40.7-129.7 51.8-26 6.3-52.3 10.4-78.9 12.3-12.4 1.1-25.1 1.6-37.8 1.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M332.3 550.7c0.6-42.6 14.2-81 38.3-115.8 24.6-35.6 56.1-63.2 95.2-82 22.7-10.9 46.6-17.6 71.9-19.5 32.8-2.4 63.4 4 91.4 21.5 2.8 1.7 3.2 1.1 3.4-1.9 1.4-25 2.9-50.1 4.3-75.1 1.4-24.3 2.9-48.6 4.3-72.9l5.1-86.7c0.8-13.7 1.2-27.5 2.8-41.1 2.4-20.9 24.2-33.6 43.8-25.9 43.9 17.4 84.6 40.5 122 69.5 16.9 13.1 32.9 27.2 48 42.4 21.6 21.8 41.1 45.4 58.4 70.8 14.4 21.2 3.2 48-21.9 51.6-13.5 1.9-24.2-3.6-31.9-14.9-16.2-23.9-34.6-45.9-55.2-66-29-28.3-61.4-52.2-97.1-71.4-3.9-2.1-4.1-2.1-4.4 2.4-0.9 14.1-1.8 28.2-2.7 42.2-1.2 19.6-2.4 39.2-3.5 58.9-0.8 13.2-1.5 26.5-2.3 39.7-1.2 19.6-2.4 39.2-3.5 58.9-0.8 13.4-1.5 26.7-2.3 40.1l-4.2 70.8c-0.5 9-1.4 18.1-1.5 27.1-0.5 39-12.2 74.5-32.7 107.3-23.9 38.1-55.9 67.5-95.9 88.1-23.3 12-48 19.4-74.2 21.7-27 2.3-53.1-1-77.7-12.5-36.7-17.1-60.4-45.5-71.8-84.3-4.2-14.1-6.2-28.4-6.1-43z m219-152.6c-23.7-0.2-44.1 6.3-63.3 16.5-31.4 16.7-55.8 40.8-72.9 72-13.4 24.5-20.7 50.6-16.5 79 2.7 18.3 10.7 33.7 25.3 45.2 14 11 30.4 15 47.7 15.2 20.3 0.3 39.4-5 57.5-13.8 34.2-16.6 60.4-41.8 78.6-75 13.4-24.5 20.6-50.7 16.4-79-2.8-19.1-11.3-35-27.2-46.5-14-10.2-30.1-13.8-45.6-13.6zM505.5 120.6c8.6-0.4 16.9 0.6 24.2 5.6 11.3 7.8 16.7 21.8 13.3 35-3.4 13.3-14.3 22.7-27.9 24.3-8.9 1-17.8 0.5-26.7 1.1-35.3 2.5-69.3 10.5-102 24-33.5 13.9-63.8 32.9-90.9 57.1-13 11.6-25.1 24-36.1 37.5s-26.6 17.5-40.6 10.7c-18.4-8.9-24.5-31-12.8-47.8 6.4-9.2 14.2-17.4 21.9-25.5 32.4-34.1 69.8-61.6 112-82.3 38-18.7 78.1-30.5 120-36.2 15-2.1 30.3-3 45.6-3.5zM511.2 903.2c-5.3-0.2-10.3 0.3-15.2-0.7-16.1-3.2-27.3-18.2-25.8-34.8 1.5-16.6 15.1-29.3 31.6-29.5 34-0.3 67.3-5.2 99.7-15.4 39.1-12.4 74.5-31.7 106.4-57.4 17.3-14 32.9-29.7 47.1-46.9 12-14.5 29.2-17.8 43.9-8.6 16.5 10.3 20.4 32.6 8 48-27.3 33.8-59.4 62.2-96.1 85.4-42.6 26.9-88.7 44.6-138.1 53.7-20.6 3.7-41.2 5.8-61.5 6.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconyinle.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconyinle) : Iconyinle;
