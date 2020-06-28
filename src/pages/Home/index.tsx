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

class Home extends React.Component<IProps> {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncCarousels',
    });
    this.feact();
  }
  handledetail = () => {
    this.props.navigation.push('Detail', {id: 100});
  };
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
  // 属性形式 get
  get header() {
    const {carousels} = this.props;
    return (
      <View>
        <Carousel data={carousels} />
        <Gruess />
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
    const {loading,channgels} = this.props;
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
    return (
      <View>
        <FlatList
          ListEmptyComponent={this.empty}
          ListHeaderComponent={this.header}
          ListFooterComponent={this.footer}
          keyExtractor={this.keyexiractor}
          renderItem={this.renderItem}
          data={channgels}
          onEndReached={this.onEndReached}
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
});
export default connector(Home);
