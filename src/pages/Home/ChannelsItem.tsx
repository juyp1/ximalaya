import React from 'react';
import {View, StyleSheet, Image, FlatList, Text} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {IChannel} from '@/models/home';
import Icon from '@/assets/iconfont/';
interface IProps {
  data: IChannel;
}
class ChannelsItem extends React.Component<IProps> {
  render() {
    const {data} = this.props;
    return (
      <View style={styles.itemcontainer}>
        <View>
          <Image source={{uri: data.image}} style={styles.itemImage}></Image>
        </View>
        <View style={styles.itemdesc}>
          <View>
            <Text>{data.title}</Text>
          </View>
          <View style={styles.playeddesc}>
            <Text>{data.remark}</Text>
          </View>
          <View style={styles.playedcontainer}>
            <View style={styles.leftcontainer}>
              <Icon name="iconerji" size={15} color="red" />
              <Text style={styles.titlepostion}>{data.played}</Text>
            </View>
            <View style={styles.rightcontainer}>
              <Icon name="iconziyuanldpi" size={14} color="red" />
              <Text style={styles.titlepostion}>{data.playing}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default ChannelsItem;
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
