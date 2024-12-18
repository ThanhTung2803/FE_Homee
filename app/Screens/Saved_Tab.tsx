import React from 'react';
import {View,Text,Image,TouchableOpacity,ScrollView,SafeAreaView,StyleSheet,Dimensions,Platform,StatusBar,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from 'react-native-responsive-dimensions';

// Giả lập dữ liệu collections
const collections = [
  {
    id: '1',
    title: 'cv fe',
    image: 'https://everon.com/upload/upload-images/trang-tri-phong-ngu-homestay-5.jpg',
  },
  {
    id: '2',
    title: 'nhà thuê vin',
    image: 'https://donggia.vn/wp-content/uploads/2019/11/thiet-ke-noi-that-phong-khach-chung-cu-dep-2020-12.jpg',
  },
  {
    id: '3',
    title: 'ăn vin',
    image: 'https://www.lanha.vn/wp-content/uploads/2023/06/thiet-ke-phong-khach-chung-cu-13.jpg.webp',
  },
  {
    id: '4',
    title: 'archy',
    image: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/462542419_1190157268717356_4286741082016937685_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Zuypi1gZrrMQ7kNvgEWLcYH&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&oh=03_Q7cD1QEK-jMNvhM5pv69bjdQAvZSH9lFYITsthnkM5kcxb2oDw&oe=6761764B',
  },
  {
    id: '5',
    title: 'an dan phuong',
    image: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/462551291_523445957278707_4030586852048686196_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EUS0Or0VfyAQ7kNvgH6hGNQ&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&oh=03_Q7cD1QGTqYG6LQs_nb3NXAbXBeHgCw_nRvKvNyrRnWPWkmdfsA&oe=67616D99',
  },
 
];

const { width } = Dimensions.get('window');
const COLUMN_GAP = 12;
const NUM_COLUMNS = 2;
const ITEM_WIDTH = (width - (NUM_COLUMNS + 1) * COLUMN_GAP) / NUM_COLUMNS;

const Saved_Tab = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bộ sưu tập</Text>  
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bộ sưu tập của bạn</Text>
      </View>

      {/* Collections Grid */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {collections.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.gridItem,
                index % 2 === 0 && { marginRight: COLUMN_GAP },
              ]}
            >
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                {/* <Text style={styles.itemPrivacy}>{item.privacy}</Text> */}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

     
    </SafeAreaView>
  );
  
}

export default Saved_Tab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom:rh(9)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  createButton: {
    color: '#1877f2',
    fontSize: 16,
    fontWeight: '500',
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: COLUMN_GAP,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: ITEM_WIDTH,
    marginBottom: COLUMN_GAP,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  itemImage: {
    width: '100%',
    height: ITEM_WIDTH * 0.75,
    backgroundColor: '#f0f0f0',
  },
  itemContent: {
    padding: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  itemPrivacy: {
    fontSize: 14,
    color: '#65676b',
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabIconContainer: {
    position: 'relative',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#65676b',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#e41e3f',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});