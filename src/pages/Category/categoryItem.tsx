import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { ICategory } from '@/models/catgory';
import { RootStackNavigation } from '@/navigator/index';
import HeaderRightBtn from './HeaderRightBtn'

interface IProps{
   data:ICategory,
   naivgation:RootStackNavigation
 }
class CategoryItem extends React.Component<IProps>{
  constructor(props:IProps) {
    super(props)
    props.naivgation.setOptions({
      headerRight:()=><HeaderRightBtn />
    })
  
  }
  render() {
    const {data}= this.props
    return (
      <View style={styles.categortitem}>
        <View key={data.id}>
          <Text>{data.name}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  categortitem: {
    width: '20%',
    backgroundColor: '#ffffff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 4,
  },
})
export default CategoryItem
