import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image, Dimensions,StyleSheet } from 'react-native';
import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from 'react-native-responsive-dimensions';

const images = [
  require('../../assets/images/banner.png'),
  'https://ketoananpha.vn/uploads/images/post/333-moi/cho-thue-nha-mat-bang-co-phai-dang-ky-kinh-doanh-01.jpg',
  'https://res.cloudinary.com/dligpgeta/image/upload/v1728437810/Property_1_image_3_bnge2s.png',
  'https://res.cloudinary.com/dligpgeta/image/upload/v1728437864/Property_1_image_1_ewcare.png',
];



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
    <View style={{ width: rw(100),height: rh(20),  }}>
      <Image
        source={typeof item === 'string' ? { uri: item } : item} // Nếu item là chuỗi (URL), sử dụng uri, nếu là require, sử dụng trực tiếp
        style={{ width: '100%', height: rh(20) }} resizeMode="cover" />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled // mỗi lần cuộn sẽ chỉ chuyển đến một phần tử (một ảnh) mà không thể cuộn qua nhiều phần tử cùng lúc
        showsHorizontalScrollIndicator={false} // không có thanh cuộn ngang sẽ hiển thị trong FlatList
        keyExtractor={(_, index) => index.toString()}
        ref={flatListRef} // Tạo một tham chiếu để có thể truy cập và điều khiển FlatList
      />
    </View>


  );
};

export default Home_Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#FFFFFF', 
    justifyContent: 'center',
    alignItems: 'center',
  }
});





