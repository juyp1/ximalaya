import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {RootStackNavigation} from '../navigator';
import storage from '@/config/storage';
const mapStateToProps = ({category, loading}: RootState) => ({
  categorys: category.categorys,
  mycategory: category.mycategorys,
});
const connector = connect(mapStateToProps); // 映射state中的model
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}
var ScreenWidth = Dimensions.get('window').width;
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {Header} from 'react-native-elements';
class Listen extends React.Component<IProps> {
  render() {
    const {mycategory} = this.props;
    return (
      <View>
        <Header
          placement="center"
         
          centerComponent={{text: '我听', style: {color: '#fff'}}}
          
        />
        <ScrollableTabView
          style={styles.container}
          renderTabBar={() => <ScrollableTabBar />}
          tabBarUnderlineStyle={styles.lineStyle}
          tabBarActiveTextColor="#FF0000">
          <Text style={styles.textStyle} tabLabel="新冠肺炎">
            新冠肺炎
          </Text>
          <Text style={styles.textStyle} tabLabel="娱乐">
            娱乐
          </Text>
          <Text style={styles.textStyle} tabLabel="科技">
            科技
          </Text>
          <Text style={styles.textStyle} tabLabel="军事">
            军事
          </Text>
          <Text style={styles.textStyle} tabLabel="体育">
            体育
          </Text>
          <Text style={styles.textStyle} tabLabel="手机">
            手机
          </Text>
        </ScrollableTabView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#F5FCFF',
  },
  lineStyle: {
    width: ScreenWidth / 4,
    height: 2,
    backgroundColor: 'red',
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
   
    textAlign: 'center',
  },
});
export default connector(Listen);
