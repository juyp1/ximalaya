import React from 'react';
import {View, StyleSheet, Image, FlatList, Text} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {IChannel} from '@/models/home';
import Icon from '@/assets/iconfont/';
import TouchableOpacity from '@/component/Touchable';
const mapStateToProps = ({home}: RootState) => {
  return {
    channels: home.channgels,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
class ChanngelsList extends React.Component<ModelState> {
  componentDidMount() {
    this.feact();
  }
  feact = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncChannels',
    });
  };
  renderItem = ({item}: {item: IChannel}) => {
    return (
      <TouchableOpacity onPress={this.handledetail.bind(this, item)}>
        <View style={styles.itemcontainer}>
          <View>
            <Image source={{uri: item.image}} style={styles.itemImage}></Image>
          </View>
          <View style={styles.itemdesc}>
            <View>
              <Text>{item.title}</Text>
            </View>
            <View style={styles.playeddesc}>
              <Text>{item.remark}</Text>
            </View>
            <View style={styles.playedcontainer}>
              <View style={styles.leftcontainer}>
                <Icon name="iconerji" size={15} color="red" />
                <Text style={styles.titlepostion}>{item.played}</Text>
              </View>
              <View style={styles.rightcontainer}>
                <Icon name="iconziyuanldpi" size={14} color="red" />
                <Text style={styles.titlepostion}>{item.playing}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  handledetail = (item: IChannel) => {
    console.log(item.title);
  };
  keyexiractor = (item: IChannel) => {
    return item.id;
  };

  // 加载更多
  onEndReached=()=>{
    console.log('---加载更多----')
  }
  render() {
    const {channels} = this.props;
    return (
      <View>
        <FlatList
        onEndReached={this.onEndReached}
          data={channels}
          renderItem={this.renderItem}
          keyExtractor={this.keyexiractor}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemcontainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#ccc',
  },
  itemImage: {
    width: 90,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemdesc: {
    marginLeft: 20,
  },
  playeddesc: {
    marginTop: 10,
    backgroundColor: '#efefef',
  },
  playedcontainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },

  leftcontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightcontainer: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  righticon: {
    fontSize: 12,
  },
  titlepostion: {
    marginLeft: 6,
  },
});
export default connector(ChanngelsList);
