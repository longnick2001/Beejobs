import { TabBarIcon } from "@/components/navigation/TabBarIcon"
import { Tabs } from "expo-router"

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{ title:'Trang chủ',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name='CV' options={{title:'Hồ sơ',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name='Post' options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name='Message' options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name='Profile' options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
                )
            }} />
        </Tabs>
    )
}