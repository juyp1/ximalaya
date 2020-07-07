import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {RootStackNavigation} from '../../navigator';
import storage from '@/config/storage';
import _, {isEmpty} from 'lodash';
import {ScrollView} from 'react-native-gesture-handler';
 
// 组件 每一项
import CategoryItem from './categoryItem'
const mapStateToProps = ({category, loading}: RootState) => ({
  categorys: category.categorys,
  mycategory: category.mycategorys,
});
const connector = connect(mapStateToProps); // 映射state中的model
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Index extends React.Component<IProps> {
  feact = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'category/asyncCategory',
    });
  };
  handlegetstore = () => {
    storage
      .load({
        key: 'mycategorys',
      })
      .then((res) => {
        console.log('缓存中的数据---', res);
      });
  };
  rendermycategory = () => {
    const {mycategory} = this.props;

    return mycategory.map((item, index) => {
      return (
        <View style={styles.categortitem}>
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>
        </View>
      );
    });
  };
  rendercategory = () => {
    const {categorys,navigation} = this.props;

    return categorys.map((item, index) => {
      return (
        <View style={styles.categortitem}>
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>
        </View>
      );
    });
  };
  render() {
    const {categorys,navigation} = this.props;
    const classfiygroup = _.groupBy(categorys, (item) => item.classify);

    return (
      <ScrollView style={styles.container}>
        {/* <Text>{JSON.stringify(mycategory)}</Text>
        <Button title='获取数据' onPress={this.handlegetstore}/> */}
        <View>
          <Text style={styles.classifyName}>我的分类</Text>

          <View style={styles.categorycontainer}>
            {this.rendermycategory()}
          </View>
        </View>
        <View>
          {Object.keys(classfiygroup).map((classfiy) => {
            return (
              <View key={classfiy}>
                <Text style={styles.classifyName}>{classfiy}</Text>
                <View style={styles.categorycontainer}>
                  {classfiygroup[classfiy].map((item, index) => {
                    return (
                      // <View style={styles.categortitem}>
                      //   <View key={item.id}>
                      //     <Text>{item.name}</Text>
                      //   </View>
                      // </View>
                      <CategoryItem data={item} naivgation={navigation}/>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
  componentDidMount() {
    const {mycategory} = this.props;
    this.feact();
    storage.save({
      key: 'mycategorys',
      data: mycategory,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f6',
  },
  classifyName: {
    fontSize: 18,
    marginTop: 14,
    marginBottom: 8,
    marginLeft: 20,
  },
  categorycontainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  categortitem: {
    width: '20%',
    backgroundColor: '#ffffff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 4,
  },
});
export default connector(Index);
