import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet, Text, TouchableOpacity, ScrollView, Modal, ImageBackground, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from 'react-native-responsive-dimensions';
import DropDownPicker from 'react-native-dropdown-picker';
import { SelectCountry } from 'react-native-element-dropdown';
import { images, local_data, local_price_data,Test } from '../../assets/data/data';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp } from '@react-navigation/native';
import { Item } from '../Model/Item_Type';

interface Props {
  navigation: NavigationProp<any>; //   thuộc tính tên là navigation với kiểu NavigationProp
}
//React.FC<Props> là cách bạn nói với TypeScript: "Dữ liệu (props) của tôi sẽ có những gì và kiểu dữ liệu của chúng là gì."
//props dùng để gửi dữ liệu từ bên ngoài vào component.
const Home_Tab: React.FC<Props> = ({ navigation }) => {


  const [isUserScrolling, setIsUserScrolling] = useState(false); // Flag kiểm tra xem người dùng cuộn thủ công hay không

  const [currentIndex, setCurrentIndex] = useState(0);

  

  const flatListRef = useRef<FlatList<string>>(null);
  // Sử dụng useRef để tạo một tham chiếu đến FlatList
  // Điều này giúp ta có thể truy cập và điều khiển FlatList sau này (như cuộn đến một mục cụ thể,tự động cuộn) mà không cần thay đổi trạng thái của component.
  // Khởi tạo tham chiếu ban đầu là null (vì FlatList chưa được render)

  useEffect(() => {

    // Nếu người dùng đang cuộn thủ công thì không chạy cuộn tự động
    if (isUserScrolling) return;

    //interval là một khái niệm trong JavaScript (và trong các framework như React) dùng để thiết lập một hàm thực thi lặp đi lặp lại sau một khoảng thời gian nhất định
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      // Tính chỉ mục tiếp theo trong danh sách ảnh,
      // % images.length: Đây là toán tử chia lấy dư. Mục đích của toán tử này là đảm bảo rằng chỉ mục luôn quay lại 0 khi đạt đến cuối danh sách
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
      // current là thuộc tính của useRef, nó chứa đối tượng mà flatListRef tham chiếu đến
      //Lưu ý: Để truy cập thuộc tính current của flatListRef, bạn cần đảm bảo rằng FlatList đã được render. Vì thế, dấu ?. sau current là để đảm bảo không gọi scrollToIndex nếu flatListRef.current là null (trong trường hợp FlatList chưa được render hoặc chưa gắn tham chiếu).
      // ?. là toán tử optional chaining trong JavaScript. Toán tử này giúp đảm bảo rằng đoạn mã không gây lỗi nếu flatListRef.current là null hoặc undefined.
      // scrollToIndex là một phương thức của FlatList dùng để cuộn đến một chỉ mục nhất định trong danh sách.

    }, 3000);

    return () => clearInterval(interval); // Hủy interval khi component bị unmount
  }, [currentIndex, isUserScrolling]);

  const renderItem = ({ item }: { item: string }) => (
    <View style={{ width: rw(100), height: rh(20), }}>
      <Image
        source={typeof item === 'string' ? { uri: item } : item} // Nếu item là chuỗi (URL), sử dụng uri, nếu là require, sử dụng trực tiếp
        style={{ width: '100%', height: rh(20) }} resizeMode="cover" />
    </View>
  );

  const [country, setCountry] = useState('')
  const [price, setPrice] = useState('')


  const renderItem2 = ({ item }: { item: Item }) => (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => navigation.navigate('Detail_Screen', { item: item })}

      >
      <Image
        source={{ uri: item.images[0].uri }}
        style={{ width: '100%', height: rh(25) }}
        resizeMode="cover"
      />
      <View style={{ width: '100%', height: rh(5), marginTop: rh(1), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5, color: 'black', marginLeft: rw(2) }}>{item.title}</Text>
        {/* <TouchableOpacity>
          <Image
            source={require('../../assets/icon/daluu.png')}
            style={{ width: rw(6), height: rh(4), marginRight: rw(2) }}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Test}
        renderItem={renderItem2}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <View style={{ width: rw(100), height: rh(32), marginBottom: 10 }}>
            <FlatList
              data={images}
              renderItem={renderItem}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              ref={flatListRef}
            />
            <ImageBackground
              source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/025/373/993/small_2x/a-house-key-on-a-keychain-on-a-blue-background-created-with-generative-ai-technology-free-photo.jpg' }}
              style={styles.imagebackgriod}
              resizeMode="cover">
              <Image
                source={require('../../assets/images/name.png')}
                style={{ width: rw(25), height: rh(4), marginLeft: rw(2) }} resizeMode="contain" />
              <View style={{ width: '100%', height: rh(5), flexDirection: 'row', alignItems: 'center', marginBottom: rh(0.5), flex: 1, }}>
                <SelectCountry
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  imageStyle={styles.imageStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  search
                  maxHeight={200}
                  value={country}
                  data={local_data}
                  valueField="value"
                  labelField="lable"
                  imageField="image"
                  placeholder="Khu vực"
                  searchPlaceholder="Tìm kiếm..."
                  searchPlaceholderTextColor=''
                  onChange={e => {
                    setCountry(prevCountry => (prevCountry === e.value ? '' : e.value));
                  }}

                  activeColor='#CDC9C9'
                  iconColor='black'


                  itemTextStyle={styles.itemTextStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                />

                <View style={{ width: rw(3) }} />

                <SelectCountry
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  imageStyle={styles.imageStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  maxHeight={200}
                  value={price}
                  data={local_price_data}
                  valueField="value"
                  labelField="label"
                  imageField="image"
                  placeholder="Giá"
                  onChange={e => {
                    setPrice(prevPrice => (prevPrice === e.value ? '' : e.value)); {/* Cập nhật giá tiền khi thay đổi */ }
                  }}
                  activeColor='#CDC9C9'
                  iconColor='black'
                  itemTextStyle={styles.itemTextStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                />


              </View>




            </ImageBackground>

          </View>


        }
      />
    </SafeAreaView>


  )
};

export default Home_Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom:rh(9)
  },
  dropdown: {
    height: rh(4.7),
    width: rw(27),
    marginLeft: rw(2),
    backgroundColor: 'white',
    borderRadius: 8
  },
  imageStyle: {
    width: 0,
    height: 0,
  },
  placeholderStyle: {
    fontSize: 15,
    marginLeft: rw(3),
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 14,
    marginLeft: 8,
    color: 'black'
  },
  itemTextStyle: {
    color: 'white',
    fontSize: 30
  },
  iconStyle: {
    width: 23,
    height: 23,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  imagebackgriod: {
    width: rw(98),
    height: rh(11),
    marginLeft: rw(1),
    marginRight: rw(1),
    marginTop: rh(3),
    marginBottom: rh(1),
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor:'#DB6F16'


  },






  item: {
    backgroundColor: 'white',
    width: rw(98),
    height: rh(32),
    marginBottom: rh(1),
    marginTop: rh(3),
    marginLeft: '1%',

    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});











































