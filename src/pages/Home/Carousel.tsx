import React from 'react';
import SnapCarousel, {
  AdditionalParallaxProps,
  ParallaxImage,
  Pagination,
} from 'react-native-snap-carousel';
import {viewportWidth, wp, hp} from '@/util/index';

import {StyleSheet, View} from 'react-native';
import {ICarouser} from '@/models/home';

const sliderWidth = viewportWidth;
const itemWidth = wp(90) + wp(2) * 2;
const slidewidth = wp(90);
const sildeHeight = hp(26);
// const horizontalMargin = 20;
// const slideWidth = 280;
// const itemWidth = slideWidth + horizontalMargin * 2;
// const sildeHeight = 200;
interface IProps {
  data: ICarouser[];
}
class Carousel extends React.Component<IProps> {
  
  state = {
    activeSlide: 0,
  };
  onSnapToItem = (index: number) => {
    this.setState({
      activeSlide: index,
    });
  };
  renderItem = (
    {item}: {item: ICarouser},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item.image}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        {...parallaxProps}
        showSpinner
        spinnerColor="rgba(0,0,0,0.25)"

        //  parallaxFactor={0.8}    //时差时间
      />
      //  <Image source={{uri:item}} style={styles.image}></Image>
    );
  };
  get pagination() {
    const {activeSlide} = this.state;
    const {data} = this.props;
    return (
      <View style={styles.paginationwarrper}>
        <Pagination
          inactiveDotScale={0.9}
          containerStyle={styles.paginationContainer}
          activeDotIndex={activeSlide}
          dotStyle={styles.dotStyleConatainer}
          inactiveDotOpacity={0.6}
          dotsLength={data.length}
        />
      </View>
    );
  }
  render() {
    const {data} = this.props;
    return (
      <View>
        <SnapCarousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          onSnapToItem={this.onSnapToItem}
          hasParallaxImages
          loop
          autoplay
          itemWidth={itemWidth}
          removeClippedSubviews={false}
        />
        {this.pagination}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  imageContainer: {
    width: itemWidth,
    height: sildeHeight,
  },
  paginationwarrper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    // backgroundColor:'red',
    paddingHorizontal: 3,
    paddingVertical: 3,
  },
  slide: {
    borderRadius: 10,
    backgroundColor: '#992211',
  },
  dotStyleConatainer: {
    marginHorizontal: 6,
    backgroundColor: '#ffffff',
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
export default Carousel;
