import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet, Text, TouchableOpacity, ScrollView, Modal, ImageBackground } from 'react-native';
import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from 'react-native-responsive-dimensions';
import DropDownPicker from 'react-native-dropdown-picker';
import { SelectCountry } from 'react-native-element-dropdown';
import { images, local_data, local_price_data } from '../../assets/data/data';



const Home_Tab = () => {
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



  return (

    <ScrollView keyboardShouldPersistTaps="always" style={{ flex: 1, backgroundColor: '#F3F3F3' }} contentContainerStyle={{ alignItems: 'center' }}>
      <View style={{ width: rw(100), height: rh(20) }}>
        <FlatList
          data={images}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          ref={flatListRef}
        />
      </View>

      <ImageBackground
        source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhKo9jjoYpzUHGv_JZLvg1lrXw5CKYnPehw&s' }}
        style={styles.imagebackgriod}
        resizeMode="cover">
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '400', marginLeft: rw(3), flex: 1, marginTop: 5,fontFamily:'Open Sans Condensed',}} >Danh sách nhà cho thuê</Text>

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




    </ScrollView>

  )
};

export default Home_Tab;

const styles = StyleSheet.create({
  dropdown: {
    height: rh(4.7),
    width: rw(28),
    marginLeft: rw(2),
    backgroundColor: 'white',
    borderRadius: 8
  },
  containerStyle: {
    color: 'red'
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

  imagebackgriod:{
    width: rw(98),
    height: rh(11),
    marginLeft: rw(1),
    marginRight: rw(1),
    marginTop: rh(3),
    borderRadius: 8,
    overflow: 'hidden',
    
  }

});








