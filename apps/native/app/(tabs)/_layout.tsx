import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { View, useColorScheme, Text} from 'react-native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function Header(){
return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 80,
      width: "100%",
      padding: 10
    }}
    >
      <Text> <FontAwesome size={28} name='user' /> </Text>
      <Text> <FontAwesome size={28} name='bell' /> </Text>
    </View>
  )
}

// TODO: Check if this any good else remove it from below
function TabBarBg(){
  return (
    <View style={{
    backgroundColor: 'white',
    }}>

    </View>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        header: Header,
        tabBarBackground:TabBarBg,
        tabBarItemStyle: {
          padding: 10,
          height: 60,
          marginVertical: 10
        },
        tabBarStyle : {
          width: "90%",
          height: 80,
          marginHorizontal: "5%",
          marginBottom: 10,
          borderRadius: 10,
        }
      }}
      initialRouteName='home'
    >
      <Tabs.Screen
        name="movies"
        options={{
          title: 'Movies',
          tabBarIcon: ({ color }) => <TabBarIcon name="film" color={color} />,
        }}
      />
      <Tabs.Screen
        name="series"
        options={{
          title: 'Series',
          tabBarIcon: ({ color }) => <TabBarIcon name="tv" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Find',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
