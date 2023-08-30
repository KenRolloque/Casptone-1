import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: () => <Ionicons name="scan-circle-outline" size={22} color={"#828282"}/>,
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: 'Gallery',
          tabBarIcon: () =>  <Ionicons name="images-outline" size={22} color={"#828282"}/>,
        }}
      />


    <Tabs.Screen
        name="generate"
        options={{
          title: 'Generate',
          tabBarIcon: () =>  <Ionicons name="add-circle-outline" size={22} color={"#828282"}/>,
        }}
      />

    <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: () =>  <Ionicons name="time-outline" size={22} color={"#828282"}/>,
        }}
      />

    <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: () =>  <Ionicons name="person-outline" size={22} color={"#828282"}/>,
        }}
      />





    </Tabs>

    


  );
}
