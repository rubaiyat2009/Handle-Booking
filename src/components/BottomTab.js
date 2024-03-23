import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CreateBooking from '../../screens/CreateBooking';
import UserProfile from '../../screens/UserProfile';
import AllBookings from '../../screens/AllBookings';
import UserBookings from '../../screens/UserBookings';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="All Bookings" component={AllBookings}
                options={{
                    tabBarLabel: 'All Bookings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="User Bookings" component={UserBookings} options={{
                tabBarLabel: 'Your Bookings',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="calendar-o" color={color} size={26} />
                ),
            }} />

            <Tab.Screen name="Create Bookings" component={CreateBooking} options={{
                tabBarLabel: 'Create',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="calendar-plus-o" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="User Profile" component={UserProfile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="user-o" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    );
}