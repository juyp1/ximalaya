import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import {RootState} from '@/models/index';
import {ConnectedProps, connect} from 'react-redux';
// 导入本地图片
import coverRight from '@/assets/img/cover-right.png';
import Icon from '@/assets/iconfont/';
import Navigator, {
  RootStackNavigation,
  RootStackParamList,
} from '@/navigator/index';
import {RouteProp} from '@react-navigation/native';
import {Header, Button} from 'react-native-elements';
import Touchable from '@/component/Touchable';
import {BlurView} from '@react-native-community/blur'
const mapStateToProps = ({album}: RootState) => {
  return {
    title: album.title,
    thumbnailUrl: album.thumbnailUrl,
    summary: album.summary,
    author: album.author,
  };
};
const connector = connect(mapStateToProps); // 映射state中的model
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  navigation: RootStackNavigation;
  route: RouteProp<RootStackParamList, 'Album'>;
}
class Album extends React.Component<IProps> {
  componentDidMount() {
    const {navigation, title} = this.props;
    navigation.setOptions({
      headerTitle: this.props.route.params.title,
    });

    this.fect();
  }
  fect = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'album/asyncinitDetail',
    });
  };
  handlepop = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };
  get leftMenu() {
    return (
      <Button
        buttonStyle={{backgroundColor: 'transparent'}}
        icon={
          <Icon
            name="iconfanhui"
            size={26}
            color="#ffffff"
            style={styles.icons}
          />
        }
        title=""
        onPress={this.handlepop}
      />
    );
  }
  render() {
    const {title, thumbnailUrl, summary, author} = this.props;
    return (
      <View>
        <View>
          {/* <Header
 
            centerComponent={{
               text: this.props.route.params.title, 
              style: {color: '#ffffff', fontSize: 16},
            }}
          /> */}
        </View>
        <View style={{position:'absolute',top:36,left:10,zIndex:9999}}>
        {this.leftMenu}
          </View>
        <View style={styles.header}>
      
          <Image source={{uri: thumbnailUrl}} style={styles.backgroundtimg} />
          <BlurView blurType="light" style={StyleSheet.absoluteFillObject} blurAmount={5}/>
        
          <View style={styles.leftView}>
            
            <Image source={{uri: thumbnailUrl}} style={styles.thumbnailimg} />
            {/* <Image source={{uri:coverRight}} style={styles.coverRight} /> */}
          </View>
          <View style={styles.RightView}>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.summary}>
              <Text numberOfLines={1}  style={styles.summarytext}>{summary}</Text>
            </View>
            <View style={styles.author}>
              <Image source={{uri: author.avatar}} style={styles.avatar} />
              <Text style={styles.avatarname}>{author.name}</Text>
            </View>
          </View>
        </View>
        {/* <Text>{title}</Text>
        <Text>频道页面</Text> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 280,
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems:'center'
  
  },
  leftView: {},
  RightView: {
    flex: 1,
    marginLeft: 10,
  },
  icons: {
    marginLeft: -10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  thumbnailimg: {
    width: 98,
    height: 98,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    // backgroundColor:'#ffffff'
  },
  coverRight: {
    height: 98,
    position: 'absolute',
    right: -25,
  },
  summary: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
  },
  author: {
    flexDirection: 'row',
  },
  avatarname: {
    marginTop: 6,
    marginLeft: 6,
    color:"#ffffff"
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
  },
  backgroundtimg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eeeeee',
  },
  summarytext:{
    color:"#ffffff",
    fontSize:14
  }
});
export default connector(Album);
