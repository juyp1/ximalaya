import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {RootStackNavigation} from '../../navigator';
import storage from '@/config/storage';
import _, {isEmpty} from 'lodash';
import {ScrollView} from 'react-native-gesture-handler';
import {ICategory} from '@/models/catgory';
import {Button} from 'react-native-elements';
import Toast from 'react-native-root-toast';
import HeaderRightBtn from './HeaderRightBtn';
import {DragSortableView} from 'react-native-drag-sort';
const mapStateToProps = ({category, loading}: RootState) => ({
  categorys: category.categorys,
  mycategory: category.mycategorys,
  isEdit: category.isEdit,
});
const connector = connect(mapStateToProps); // 映射state中的model
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Index extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    props.navigation.setOptions({
      headerRight: () => <HeaderRightBtn />,
    });
  }
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
  handlemyitem = (e: ICategory) => {
    const {dispatch, isEdit} = this.props;
    if (isEdit) {
      dispatch({
        type: 'category/asyncDelMyCategory',
        payload: {
          myselect: e,
        },
      });
      this.feact();
    }
  };
  rendermycategory = () => {
    const {mycategory, isEdit} = this.props;
    return mycategory.map((item, index) => {
      return (
        <View style={styles.categortitem}>
          <View key={item.id}>
            <Button
              type="clear"
              titleStyle={styles.btntitleStyle}
              title={item.name}
              onPress={this.handlemyitem.bind(this, item)}></Button>
            {isEdit ? (
              <View style={styles.icon}>
                <Text style={styles.iconText}>{isEdit ? '-' : '-'}</Text>
              </View>
            ) : (
              <View></View>
            )}
          </View>
        </View>
      );
    });
  };
  rendercategory = () => {
    const {categorys, navigation} = this.props;

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
  handleadd = (e: ICategory) => {
    const {isEdit} = this.props;
    if (isEdit) {
      const {dispatch} = this.props;

      Toast.show('添加成功', {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onShow: function () {
          dispatch({
            type: 'category/asyncAddMyCategory',
            payload: {
              myselect: e,
            },
          });
        },
      });
      // this.feact();
    }
    // const {dispatch}=this.props

    // dispatch({
    //   type: 'category/asyncToggle',
    //     payload: {
    //     isEdit: true,
    //   },
    // });
  };
  render() {
    const {categorys, navigation, isEdit, mycategory} = this.props;
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

                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                  {classfiygroup[classfiy].map((item, index) => {
                    return (
                      // <CategoryItem
                      //   data={item}
                      //   isedit={isEdit}
                      //   naivgation={navigation}
                      // />
                      <View style={styles.categortitem}>
                        <View key={item.id}>
                          <Button
                            type="clear"
                            titleStyle={styles.btntitleStyle}
                            title={item.name}
                            onPress={this.handleadd.bind(this, item)}></Button>
                          {isEdit ? (
                            <View style={styles.icon}>
                              <Text style={styles.iconText}>
                                {isEdit ? '+' : '-'}
                              </Text>
                            </View>
                          ) : (
                            <View></View>
                          )}
                        </View>
                      </View>
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
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'category/asyncToggle',
      payload: {
        isEdit: false,
      },
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
  icon: {
    position: 'absolute',
    top: -17,
    right: -27,
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f86442',
    borderRadius: 8,
  },
  iconText: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  btntitleStyle: {
    color: '#333333',
    fontSize: 13,
  },
});
export default connector(Index);
