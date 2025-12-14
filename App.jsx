import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import OnlinePaymentScreen from './src/screens/OnlinePaymentScreen';
import TransactionHistoryScreen from './src/screens/TransactionHistoryScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import PersonalInfoScreen from './src/screens/PersonalInfoScreen';
import SupportScreen from './src/screens/SupportScreen';
import ReceiptScreen from './src/screens/ReceiptScreen';
import PopulationManagementScreen from './src/screens/PopulationManagementScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for Home tab
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen 
        name="OnlinePayment" 
        component={OnlinePaymentScreen}
        options={{ 
          headerShown: true, 
          title: 'Thanh toán online',
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#FFFFFF',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen 
        name="Support" 
        component={SupportScreen}
        options={{ 
          headerShown: true, 
          title: 'Hỗ trợ',
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#FFFFFF',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen 
        name="Receipt" 
        component={ReceiptScreen}
        options={{ 
          headerShown: true, 
          title: 'Biên lai/Hóa đơn',
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#FFFFFF',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

// Stack Navigator for Payment tab
function PaymentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PaymentMain" component={PaymentScreen} />
      <Stack.Screen 
        name="OnlinePayment" 
        component={OnlinePaymentScreen}
        options={{ 
          headerShown: true, 
          title: 'Thanh toán online',
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#FFFFFF',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

// Stack Navigator for Profile tab
function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={PersonalInfoScreen} />
      <Stack.Screen 
        name="PopulationManagement" 
        component={PopulationManagementScreen}
        options={{ 
          headerShown: true, 
          title: 'Quản lý nhân khẩu',
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#FFFFFF',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'PaymentTab') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'HistoryTab') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          } else if (route.name === 'NotificationsTab') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#757575',
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStack}
        options={{ tabBarLabel: 'Trang chủ' }}
      />
      <Tab.Screen 
        name="PaymentTab" 
        component={PaymentStack}
        options={{ tabBarLabel: 'Thanh toán' }}
      />
      <Tab.Screen 
        name="HistoryTab" 
        component={TransactionHistoryScreen}
        options={{ tabBarLabel: 'Lịch sử gia...' }}
      />
      <Tab.Screen 
        name="NotificationsTab" 
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Thông báo' }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileStack}
        options={{ tabBarLabel: 'Thông tin c...' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

