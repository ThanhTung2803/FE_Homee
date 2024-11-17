import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Định nghĩa kiểu cho dữ liệu chat
interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
}

const chatData: ChatItem[] = [
  { id: '1', name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', avatar: 'https://i.pravatar.cc/100?img=1' },
  { id: '2', name: 'Jane Smith', lastMessage: 'See you tomorrow!', time: 'Yesterday', avatar: 'https://i.pravatar.cc/100?img=2' },
  { id: '3', name: 'Mike Johnson', lastMessage: 'Thanks for your help!', time: 'Monday', avatar: 'https://i.pravatar.cc/100?img=3' },
];

// Định nghĩa kiểu tham số cho navigation
// type RootStackParamList = {
//   ChatList: undefined;
//   ChatDetail: { chatId: string; name: string };
// };

const ChatListScreen = () => {
  const navigation = useNavigation<any>(); // Đặt kiểu cho navigation nếu bạn chưa cài đặt rõ ràng

  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatDetail', { chatId: item.id, name: item.name })} // Tham số phải khớp với kiểu đã định nghĩa
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <View style={styles.nameTimeContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
      </View>
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  chatList: {
    padding: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatInfo: {
    flex: 1,
  },
  nameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  lastMessage: {
    fontSize: 14,
    color: '#555',
  },
});

export default ChatListScreen;
