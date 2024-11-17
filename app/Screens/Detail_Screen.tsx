// import { RouteProp } from '@react-navigation/native';

// import React from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList,Dimensions } from 'react-native';
// import { Item } from '../Model/Item_Type';


// interface DetailScreenProps {
//   route: RouteProp<{ params: { item: Item } }, 'params'>;
// }


// const Detail_Screen: React.FC<DetailScreenProps> = ({ route }) => {

//   const { width } = Dimensions.get('window');
//   return (
//     <ScrollView style={styles.container}>


//       <FlatList
//         data={route.params.item.images}
//         renderItem={({ item }) => (
//           <Image source={{ uri: item.uri }} style={{ width: width, height: 200 }} />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         snapToInterval={width} // Mỗi lần vuốt sẽ "snap" vào đúng một item
//         decelerationRate='fast'      // Giảm tốc độ cuộn nhanh chóng để dừng lại ngay sau khi vuốt
//         snapToAlignment="start"      // Căn chỉnh bắt đầu ở mỗi ảnh
//       />


//       <View style={styles.header}>
//         <Text style={styles.title}>{route.params.item.title}</Text>

//         <View style={styles.userInfo}>
//           <Image
//             source={{ uri: 'https://via.placeholder.com/40x40' }}
//             style={styles.avatar}
//           />
//           <Text style={styles.userName}>Trần Khánh Huyền</Text>
//         </View>
//       </View>

//       {/* Property Details Grid */}
//       <View style={styles.detailsGrid}>
//         <View style={styles.detailItem}>
//           <Text style={styles.icon}>🏠</Text>
//           <Text style={styles.detailLabel}>{route.params.item.category}</Text>
//         </View>
//         <View style={styles.detailItem}>
//           <Text style={styles.icon}>👥</Text>
//           <Text style={styles.detailLabel}>{route.params.item.maxOccupants} người</Text>
//         </View>
//         <View style={styles.detailItem}>
//           <Text style={styles.icon}>📐</Text>
//           <Text style={styles.detailLabel}>{route.params.item.acreage} m²</Text>
//         </View>
//         <View style={styles.detailItem}>
//           <Text style={styles.icon}>🛏️</Text>
//           <Text style={styles.detailLabel}>{route.params.item.bedRoom} Phòng ngủ</Text>
//         </View>
//         <View style={styles.detailItem}>
//           <Text style={styles.icon}>🍳</Text>
//           <Text style={styles.detailLabel}>{route.params.item.kitchen} Phòng bếp</Text>
//         </View>
//         <View style={styles.detailItem}>
//           <Text style={styles.icon}>🚗</Text>
//           <Text style={styles.detailLabel}>{route.params.item.parking}</Text>
//         </View>
//       </View>

//       {/* Additional Info */}
//       <View style={styles.additionalInfo}>
//         <Text style={styles.sectionTitle}>Thông tin mô tả</Text>
//         <View style={styles.infoList}>
//            <Text style={styles.infoItem}>{route.params.item.description}</Text>
//         </View>
//       </View>

//       {/* Price and Contact Button */}
//       <View style={styles.footer}>
//         <Text style={styles.price}>{route.params.item.price} đ</Text>
//         <TouchableOpacity style={styles.contactButton}>
//           <Text style={styles.contactButtonText}>Liên hệ</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   )


// }

// export default Detail_Screen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   mainImage: {
//     width: '100%',
//     height: 250,
//     resizeMode: 'cover',
//   },
//   header: {
//     padding: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 8,
//   },
//   userName: {
//     fontSize: 16,
//     color: '#666',
//   },
//   detailsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 16,
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//   },
//   detailItem: {
//     width: '33.33%',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   icon: {
//     fontSize: 24,
//     marginBottom: 4,
//   },
//   detailLabel: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
//   additionalInfo: {
//     padding: 16,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   infoList: {
//     gap: 8,
//   },
//   infoItem: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 20,
//   },
//   footer: {
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderColor: '#eee',

//   },
//   price: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   contactButton: {
//     backgroundColor: '#ff5722',
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   contactButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal } from 'react-native';
import { Item } from '../Model/Item_Type';
import ImageViewer from 'react-native-image-zoom-viewer';

interface DetailScreenProps {
  route: RouteProp<{ params: { item: Item } }, 'params'>;
}

const Detail_Screen: React.FC<DetailScreenProps> = ({ route }) => {
  const { width } = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState(false);  // Trạng thái mở/đóng Modal
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  // Lưu chỉ số ảnh được chọn
  const images = route.params.item.images.map((item) => ({
    url: item.uri,
  }));
  const openImageModal = (index:number) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };


  return (
    <View style={styles.container}>
      {/* Nội dung cuộn trong ScrollView */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* <FlatList
          data={route.params.item.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={{ width: width, height: 200 }} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width} // Mỗi lần vuốt sẽ "snap" vào đúng một item
          decelerationRate="fast" // Giảm tốc độ cuộn nhanh chóng để dừng lại ngay sau khi vuốt
          snapToAlignment="start" // Căn chỉnh bắt đầu ở mỗi ảnh
        /> */}

<FlatList
        data={route.params.item.images}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => openImageModal(index)}>
            <Image source={{ uri: item.uri }} style={{ width: width, height: 200 }} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width} // Mỗi lần vuốt sẽ "snap" vào đúng một item
        decelerationRate="fast" // Giảm tốc độ cuộn nhanh chóng để dừng lại ngay sau khi vuốt
        snapToAlignment="start" // Căn chỉnh bắt đầu ở mỗi ảnh
      />

        <View style={styles.header}>
          <Text style={styles.title}>{route.params.item.title}</Text>

          <View style={styles.userInfo}>
            <Image
              source={{ uri: 'https://via.placeholder.com/40x40' }}
              style={styles.avatar}
            />
            <Text style={styles.userName}>Trần Khánh Huyền</Text>
          </View>
        </View>

        {/* Property Details Grid */}
        <View style={styles.detailsGrid}>
          <View style={styles.detailItem}>
            <Text style={styles.icon}>🏠</Text>
            <Text style={styles.detailLabel}>{route.params.item.category}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.icon}>👥</Text>
            <Text style={styles.detailLabel}>{route.params.item.maxOccupants} người</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.icon}>📐</Text>
            <Text style={styles.detailLabel}>{route.params.item.acreage} m²</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.icon}>🛏️</Text>
            <Text style={styles.detailLabel}>{route.params.item.bedRoom} Phòng ngủ</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.icon}>🍳</Text>
            <Text style={styles.detailLabel}>{route.params.item.kitchen} Phòng bếp</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.icon}>🚗</Text>
            <Text style={styles.detailLabel}>{route.params.item.parking}</Text>
          </View>
        </View>

        {/* Additional Info */}
        <View style={styles.additionalInfo}>
          <Text style={styles.sectionTitle}>Thông tin mô tả</Text>
          <View style={styles.infoList}>
            <Text style={styles.infoItem}>{route.params.item.description}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.price}>{route.params.item.price} đ</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Liên hệ</Text>
        </TouchableOpacity>
      </View>

      {/* Modal hiển thị ảnh lớn */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}  // Đóng modal khi bấm nút back trên Android
      >
        <View style={styles.modalContainer}>
          <ImageViewer
            imageUrls={images}
            index={selectedImageIndex} // Chỉ số ảnh được chọn
            onSwipeDown={() => setModalVisible(false)} // Đóng modal khi vuốt xuống
            enableSwipeDown
          />
        </View>
      </Modal>
    </View>
  );
};

export default Detail_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1, // Đảm bảo nội dung chiếm phần còn lại của không gian
  },
  scrollContent: {
    paddingBottom: 80, // Đảm bảo không gian cho footer khi cuộn
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    color: '#666',
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  detailItem: {
    width: '33.33%',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  additionalInfo: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoList: {
    gap: 8,
  },
  infoItem: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff', // Đảm bảo footer có nền
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  contactButton: {
    backgroundColor: '#ff5722',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',  // Màu nền tối để làm nổi bật ảnh
  },
});

