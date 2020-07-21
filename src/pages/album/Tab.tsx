import React from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {RootState} from '@/models/index';
import {ConnectedProps, connect} from 'react-redux';

import IntroductionPage from './introduction';
import {FlatList} from 'react-native-gesture-handler';
import {Ilist} from '@/models/album';
import Touchable from '@/component/Touchable';
import Icon from '@/assets/iconfont/';
// 创建 map
const mapStateToProps = ({album}: RootState) => {
  return {
    list: album.list,
  };
};
const connector = connect(mapStateToProps); // 映射state中的model

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  id: Number;
}

class Tab extends React.Component<IProps> {
  state = {
    activeIndex: 1,
  };
  componentDidMount() {
    this.fect();
  }
  fect = () => {
    const {dispatch, id} = this.props;
    dispatch({
      type: 'album/asyncinitDetail',
      payload: {
        id,
      },
    });
  };
  get empty() {
    const {list} = this.props;
    if (list.length > 0) return;
    return (
      <View style={styles.empty}>
        <Text>暂无数据</Text>
      </View>
    );
  }
  handledetails() {}
  // renderItem = ({item}: {item: IChannel}) => {
  //   return (
  //     <TouchableOpacity onPress={this.handledetails.bind(this, item)}>
  //       <ChannelsItem data={item} />
  //     </TouchableOpacity>
  //   );
  // };
  renderItem = ({item,index}: {item: Ilist,index:number}) => {
    return (
      <Touchable onPress={this.handledetails.bind(this, item)}>
        <View style={styles.conatiner}>
          <View style={styles.itemnumcontainer}>
           <View>
           <Text style={styles.itemnum}>{index+1}</Text>
           </View>
            <View style={[styles.itemflex,styles.itemtitlecontainer]}>
            <View>
              <Text style={styles.itemtitle}>{item.titile}</Text>
            </View>
            <View style={[styles.flexWapper,styles.iconcontiner]}>
              <View style={[styles.flexWapper,styles.lefticons]}>
                <Icon name="iconerji" size={18} color="#A9A9A9" />
                <Text style={styles.playvolume}>{item.playVolume}</Text>
              </View>
              <View style={styles.flexWapper}>
                <Icon name="iconshengyin" size={18} color="#A9A9A9" />
                <Text style={styles.playvolume}>{item.duration}</Text>
              </View>
            </View>
           
          </View>
          </View>
          
          <View><Text>{item.date}</Text></View>
        </View>
      </Touchable>
    );
  };
  handleactive = (e: any) => {};
  keyexiractor = (item: Ilist) => {
    return item.id;
  };
  // tabBarActiveTextColor='#FF0000' // 选中时的颜色
  //         tabBarUnderlineStyle={styles.lineStyle} // 线条颜色
  render() {
    const {list} = this.props;

    return (
      <View style={{height: 600}}>
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar />}
          tabBarBackgroundColor="#fff"
          tabBarActiveTextColor="#b4282d"
          tabBarInactiveTextColor="#333"
          tabBarUnderlineStyle={styles.tabBarUnderline}
          onChangeTab={this.handleactive}>
          <View tabLabel="简介" onPress={this.handleactive.bind(this, 1)}>
            <Animated.View>
              <View>
                <IntroductionPage />
              </View>
            </Animated.View>
          </View>
          <Animated.View
            tabLabel="节目"
            onPress={this.handleactive.bind(this, 2)}>
            <FlatList
              ListEmptyComponent={this.empty}
              keyExtractor={this.keyexiractor}
              renderItem={this.renderItem}
              data={list}
              onEndReachedThreshold={0.1}
            />
          </Animated.View>
        </ScrollableTabView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabBarUnderline: {
    backgroundColor: '#b4282d',
    height: 2,
  },
  empty: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  conatiner: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    height: 70,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cccccc',
    alignItems: 'center',
  },
  itemnumcontainer: {
    paddingRight: 10,
    flexDirection:'row',
  
    alignItems:'center'
  },
  itemnum: {
    fontSize: 16,
    fontWeight: '500',
    color:'#808080',
  },
  itemtitle: {
    fontWeight: '500',
    fontSize: 16,
  },
  flexWapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemflex:{
     
    justifyContent:'space-between'
  },
  itemtitlecontainer:{
    marginLeft:10
  },
  iconcontiner:{
    marginTop:10
  },
  lefticons:{
    marginRight:10
  },
  playvolume:{
    color:'#A9A9A9',
     marginLeft:6
  }
});
export default connector(Tab);
