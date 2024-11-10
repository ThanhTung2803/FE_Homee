import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from 'react-native-responsive-dimensions';

import Home_Tab from '../Screens/Home_Tab';
import Saved_Tab from '../Screens/Saved_Tab';
import Mess_Tab from '../Screens/Mess_Tab';
import Account_Tab from '../Screens/Account_Tab';
import { SafeAreaView } from 'react-native-safe-area-context';




const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window")

const BottomTabNavigator = () => {

    return (
        <View style={{
            width,
            height,
        }}>
            <Tab.Navigator

                screenOptions={{
                    tabBarShowLabel: false, // ẩn tên tab
                    tabBarStyle: {
                        position: 'absolute',// Đặt phần tử tab bar ở vị trí tuyệt đối trong bố cục, không ảnh hưởng đến các phần tử khác.
                        right: rw(3),
                        left: rw(3),
                        bottom: rh(1),
                        elevation: 5,
                        height: rh(9),
                        borderRadius: 15,
                        ...styles.shadow,
                    },



                }}


            >
                <Tab.Screen
                    name='Home'
                    component={Home_Tab}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../assets/icon/home.png')}
                                    resizeMode="contain"
                                    style={[styles.icon, { tintColor: focused ? '#DB6F16' : '#000000' }]}
                                />
                                <Text style={{ color: focused ? '#DB6F16' : '#000000', fontSize: 12 }}>
                                    Trang chủ
                                </Text>
                            </View>
                        ),
                        headerShown: false,
                    }}
                />

                <Tab.Screen
                    name='Saved'
                    component={Saved_Tab}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../assets/icon/saved.png')}
                                    resizeMode="contain"
                                    style={[styles.icon, { tintColor: focused ? '#DB6F16' : '#000000' }]}
                                />
                                <Text style={{ color: focused ? '#DB6F16' : '#000000', fontSize: 12 }}>
                                    Đã lưu
                                </Text>
                            </View>
                        ),
                        headerShown: false,
                    }} />

                <Tab.Screen
                    name='Message'
                    component={Mess_Tab}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../assets/icon/mess.png')}
                                    resizeMode="contain"
                                    style={[styles.icon, { tintColor: focused ? '#DB6F16' : '#000000' }]}
                                />
                                <Text style={{ color: focused ? '#DB6F16' : '#000000', fontSize: 12 }}>
                                    Tin nhắn
                                </Text>
                            </View>
                        ),
                        headerShown: false,
                    }} />

                <Tab.Screen
                    name='Account'
                    component={Account_Tab}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../assets/icon/account.png')}
                                    resizeMode="contain"
                                    style={[styles.icon, { tintColor: focused ? '#DB6F16' : '#000000' }]}
                                />
                                <Text style={{ color: focused ? '#DB6F16' : '#000000', fontSize: 12 }}>
                                    Tài khoản
                                </Text>
                            </View>
                        ),
                        headerShown: false,
                    }} />
            </Tab.Navigator>


        </View>



    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    icon: {
        width: rw(6.8),
        height: rh(6),
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,

    },

})
// import React, { useState } from 'react'
// import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'

// import Home_Tab from '../Screens/Home_Tab'
// import Saved_Tab from '../Screens/Saved_Tab'
// import Mess_Tab from '../Screens/Mess_Tab'
// import Account_Tab from '../Screens/Account_Tab'

// const Tab = createBottomTabNavigator()
// const { width, height } = Dimensions.get("window")

// export const TabVisibilityContext = React.createContext({
//   showTabs: true,
//   setShowTabs: (show: boolean) => {},
// })

// export default function BottomTabNavigator() {
//   const [showTabs, setShowTabs] = useState(true)

//   return (
//     <TabVisibilityContext.Provider value={{ showTabs, setShowTabs }}>
//       <View style={{ width, height }}>
//         <Tab.Navigator
//           screenOptions={{
//             tabBarShowLabel: false,
//             tabBarStyle: {
//               position: 'absolute',
//               right: rw(3),
//               left: rw(3),
//               bottom: rh(1),
//               elevation: 5,
//               height: rh(9),
//               borderRadius: 15,
//               ...styles.shadow,
//               display: showTabs ? 'flex' : 'none',
//             },
//           }}
//         >
//           <Tab.Screen
//             name='Home'
//             component={Home_Tab}
//             options={{
//               tabBarIcon: ({ focused }) => (
//                 <View style={{ alignItems: 'center' }}>
//                   <Image
//                     source={require('../../assets/icon/home.png')}
//                     resizeMode="contain"
//                     style={[styles.icon, { tintColor: focused ? '#DB6F16' : '#000000' }]}
//                   />
//                   <Text style={{ color: focused ? '#DB6F16' : '#000000', fontSize: 12 }}>
//                     Trang chủ
//                   </Text>
//                 </View>
//               ),
//               headerShown: false,
//             }}
//           />
//           <Tab.Screen
//             name='Saved'
//             component={Saved_Tab}
//             options={{
//               tabBarIcon: ({ focused }) => (
//                 <View style={{ alignItems: 'center' }}>
//                   <Image
//                     source={require('../../assets/icon/saved.png')}
//                     resizeMode="contain"
//                     style={[styles.icon, { tintColor: focused ? '#DB6F16' : '#000000' }]}
//                   />
//                   <Text style={{ color: focused ? '#DB6F16' : '#000000', fontSize: 12 }}>
//                     Đã lưu
//                   </Text>
//                 </View>
//               ),
//               headerShown: false,
//             }}
//           />
//           <Tab.Screen
//             name='Message'
//             component={Mess_Tab}
//             options={{
//               tabBarIcon: ({ focused }) => (
//                 <View style={{ alignItems: 'center' }}>
//                   <Image
//                     source={require('../../assets/icon/mess.png')}
//                     resizeMode="contain"
//                     style={[styles.icon, { tintColor: focused ? '#DB6F16' : '#000000' }]}
//                   />
//                   <Text style={{ color: focused ? '#DB6F16' : '#000000', fontSize: 12 }}>
//                     Tin nhắn
//                   </Text>
//                 </View>
//               ),
//               headerShown: false,
//             }}
//           />
//           <Tab.Screen
//             name='Account'
//             component={Account_Tab}
//             options={{
//               tabBarIcon: ({ focused }) => (
//                 <View style={{ alignItems: 'center' }}>
//                   <Image
//                     source={require('../../assets/icon/account.png')}
//                     resizeMode="contain"
//                     style={[styles.icon, { tintColor: focused ? '#DB6F16' : '#000000' }]}
//                   />
//                   <Text style={{ color: focused ? '#DB6F16' : '#000000', fontSize: 12 }}>
//                     Tài khoản
//                   </Text>
//                 </View>
//               ),
//               headerShown: false,
//             }}
//           />
//         </Tab.Navigator>
//       </View>
//     </TabVisibilityContext.Provider>
//   )
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: rw(6.8),
//     height: rh(6),
//   },
//   shadow: {
//     shadowColor: '#7F5DF0',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//   },
// })
