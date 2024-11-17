import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Giả lập dữ liệu collections
const collections = [
  {
    id: '1',
    title: 'cv fe',
    privacy: 'Chỉ mình tôi',
    image: 'https://cdn1.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/15/one-piece-egg-head-arc-anime-key-art-1728982505821164134226.jpg',
  },
  {
    id: '2',
    title: 'nhà thuê vin',
    privacy: 'Chỉ mình tôi',
    image: 'https://cdn1.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/15/one-piece-egg-head-arc-anime-key-art-1728982505821164134226.jpg',
  },
  {
    id: '3',
    title: 'ăn vin',
    privacy: 'Chỉ mình tôi',
    image: 'https://cdn1.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/15/one-piece-egg-head-arc-anime-key-art-1728982505821164134226.jpg',
  },
  {
    id: '4',
    title: 'archy',
    privacy: 'Chỉ mình tôi',
    image: 'https://cdn1.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/15/one-piece-egg-head-arc-anime-key-art-1728982505821164134226.jpg',
  },
  {
    id: '5',
    title: 'an dan phuong',
    privacy: 'Chỉ mình tôi',
    image: 'https://cdn1.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/15/one-piece-egg-head-arc-anime-key-art-1728982505821164134226.jpg',
  },
  {
    id: '6',
    title: 'lam dep',
    privacy: 'Chỉ mình tôi',
    image: 'https://cdn1.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/15/one-piece-egg-head-arc-anime-key-art-1728982505821164134226.jpg',
  },
  {
    id: '7',
    title: 'cv của huyen',
    privacy: 'Chỉ mình tôi',
    image: 'https://cdn1.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/15/one-piece-egg-head-arc-anime-key-art-1728982505821164134226.jpg',
  },
  {
    id: '8',
    title: 'học',
    privacy: 'Chỉ mình tôi',
    image: 'https://cdn1.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/15/one-piece-egg-head-arc-anime-key-art-1728982505821164134226.jpg',
  },
  {
    id: '9',
    title: 'học',
    privacy: 'Chỉ mình tôi',
    image: 'https://cdn1.tuoitre.vn/thumb_w/1200/471584752817336320/2024/10/15/one-piece-egg-head-arc-anime-key-art-1728982505821164134226.jpg',
  },
];

const { width } = Dimensions.get('window');
const COLUMN_GAP = 12;
const NUM_COLUMNS = 2;
const ITEM_WIDTH = (width - (NUM_COLUMNS + 1) * COLUMN_GAP) / NUM_COLUMNS;

export default function Test() {
  const navigation = useNavigation();

  

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/256/5467/5467935.png?semt=ais_hybrid' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bộ sưu tập</Text>
        <View>
          <Text style={styles.createButton}></Text>
        </View>
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
                <Text style={styles.itemPrivacy}>{item.privacy}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backIcon: {
    width: 24,
    height: 24,
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