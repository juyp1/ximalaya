import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {RootStackNavigation} from '../../navigator';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import Carousel from './Carousel';
import Gruess from './Gruess';
import ChanngelsList from './ChanngelsList';
import ChannelsItem from './ChannelsItem';
import {IChannel} from '@/models/home';
import TouchableOpacity from '@/component/Touchable';
const mapStateToProps = ({home, loading}: RootState) => ({
  loading: loading.effects['home/asyncChannels'], // dev loading effects
  carousels: home.carousels,
  channgels: home.channgels,
  hasMore: home.pagination.hasMore,
});
const connector = connect(mapStateToProps); // 映射state中的model
type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}
// interface IState {
//   refreshing: boolean;
// }
// 控制下拉刷新是否展示
class Home extends React.Component<IProps> {
  // 下拉展示 松开释放
  state = {
    refreshing: false,
  };
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncCarousels',
    });
    this.feact();
  }

  handledetails = () => {};

  feact = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncChannels',
    });
  };
  renderItem = ({item}: {item: IChannel}) => {
    return (
      <TouchableOpacity onPress={this.handledetails.bind(this, item)}>
        <ChannelsItem data={item} />
      </TouchableOpacity>
    );
  };
  // 优化循环Key
  keyexiractor = (item: IChannel) => {
    return item.id;
  };
  onEndReached = () => {
    const {dispatch, loading, hasMore} = this.props;
    if (loading || !hasMore) return;
    dispatch({
      type: 'home/asyncChannels',
      payload: {
        loadMore: true,
      },
    });
  };
  // 下拉刷新
  onRefresh = () => {
    // 设置刷新为真
    this.setState({
      refreshing: true,
    });
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncChannels',
      callback: () => {
        // 请求完毕拿到数据改为假
        this.setState({
          refreshing: false,
        });
      },
    });
  };
  // 滚动
  onScroll = (e: any) => {
    // console.log(e.nativeEvent.contentOffset.y); // 获取高度
    let offsetY = e.nativeEvent.contentOffset.y;
    const {dispatch} = this.props;
    if (offsetY > 300) {
      
      dispatch({
        type: 'home/visblecarousels',
        payload: {
          carouselvisble: true,
        },
      });
    }else {
      dispatch({
        type: 'home/visblecarousels',
        payload: {
          carouselvisble: false,
        },
      });
    }
  };
  // 属性形式 get
  get header() {
    return (
      <View>
        <Carousel />
        <View style={styles.bkgruess}>
        <Gruess />
        </View>
      </View>
    );
  }
  // 属性形式 get
  get footer() {
    const {loading, hasMore, channgels} = this.props;
    if (!hasMore) {
      return (
        <View style={styles.end}>
          <Text>--我是有底线的--</Text>
        </View>
      );
    }
    if (loading && hasMore && channgels.length > 0) {
      return (
        <View style={styles.end}>
          <Text>正在加载中..</Text>
        </View>
      );
    }
  }
  get empty() {
    const {loading, channgels} = this.props;
    if (loading) return;
    if (channgels.length > 0) return;
    return (
      <View style={styles.empty}>
        <Text>暂无数据</Text>
      </View>
    );
  }

  render() {
    const {channgels} = this.props;
    const {refreshing} = this.state;
    return (
      <View>
        <FlatList
          onScroll={this.onScroll}
          ListEmptyComponent={this.empty}
          ListHeaderComponent={this.header}
          ListFooterComponent={this.footer}
          keyExtractor={this.keyexiractor}
          renderItem={this.renderItem}
          data={channgels}
          onEndReached={this.onEndReached}
          onRefresh={this.onRefresh}
          refreshing={refreshing}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  end: {
    alignItems: 'center',
    display: 'flex',
  },
  empty: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  bkgruess:{
    backgroundColor:'#ffffff'
  }
});
export default connector(Home);
