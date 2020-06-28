import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Icon from '@/assets/iconfont/';
import TouchableOpacity from '@/component/Touchable';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {ILike} from '@/models/home';

const mapStateToProps = ({home}: RootState) => {
  return {
    likes: home.likes,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
class Gruess extends React.Component<ModelState> {
  componentDidMount() {
    this.feact();
  }
  feact = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncLikes',
    });
  };
  handledetail = () => {
    //alert('点击');
  };
  renderItem = ({item}: {item: ILike}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={this.handledetail}>
        <Image source={{uri: item.image}} style={styles.itemImg}></Image>
        <Text style={styles.itemtitle} numberOfLines={2}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  keyexiractor=(item:ILike)=>{
    return item.id
  }
  render() {
    const {likes} = this.props;
    return (
      <View style={styles.container}>
        {/* <Text>猜你喜欢</Text>
      <Text>{JSON.stringify(likes)}</Text> */}
        <View style={styles.header}>
          <View style={styles.headerright}>
            <Icon name="iconcainixihuan" />
            <Text style={styles.headertitle}>猜你喜欢</Text>
          </View>
          <View style={styles.headerleft}>
            <Text style={styles.headermoretitle}>更多</Text>
            <Icon name="iconyoujiantou" />
          </View>
        </View>
        <FlatList
        keyExtractor={this.keyexiractor}
        style={styles.flatlist}
          data={likes}
          renderItem={this.renderItem}
          numColumns={3}></FlatList>
          <TouchableOpacity onPress={this.feact}>
           <View style={styles.huanyp}>
           <Icon name="iconhuanyipi" color="red"/>
            <Text style={styles.huanyptitle}>换一批</Text>
           </View>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    margin: 16,
  },
  item: {
    flex: 1,
    marginHorizontal: 11,
    marginVertical: 6,
  },
  itemImg: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemtitle: {},
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerright: {
    flexDirection: 'row',
    alignItems:'center'
  },
  headertitle: {
    marginTop:2,
    marginLeft: 5,
    color: '#333333',
  },
  headerleft:{
    flexDirection: 'row',
    alignItems:'center'
  },
  headermoretitle:{
    marginTop:2,
    marginLeft: 5,
    color: '#222222'
  },
  flatlist:{
    padding:10
  },
  huanyp:{
    padding:10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  huanypicon:{
    color:'red'
  },
  huanyptitle:{
    marginLeft:5
  }
});
export default connector(Gruess);
