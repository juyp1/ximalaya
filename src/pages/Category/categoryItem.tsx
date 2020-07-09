import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ICategory} from '@/models/catgory';
import {RootStackNavigation} from '@/navigator/index';
import HeaderRightBtn from './HeaderRightBtn';
 
interface IProps {
  data: ICategory;
  naivgation: RootStackNavigation;
  isedit: boolean;
}
class CategoryItem extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    props.naivgation.setOptions({
      headerRight: () => <HeaderRightBtn />,
    });
  }
  
  render() {
    const {data, isedit} = this.props;
    return (
      <View style={styles.categortitem}>
        <View key={data.id}>
          <Text>{data.name}</Text>
          {isedit ? (
            <View style={styles.icon}>
              <Text style={styles.iconText}>{isedit ? '+' : '-'}</Text>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  categortitem: {
    minWidth: 77,
    paddingLeft: 16,
    paddingRight: 16,
    lineHeight: 40,
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
    right: -25,
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
    lineHeight: 15,
  },
});
export default CategoryItem;
