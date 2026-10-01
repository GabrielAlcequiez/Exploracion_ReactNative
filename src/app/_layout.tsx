import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Colors } from '../constants/colors';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
          borderBottomColor: '#F1F5F9',
          borderBottomWidth: 1,
        },
        headerTitleStyle: {
          color: '#0F172A',
          fontWeight: '700',
          fontSize: 17,
        },
        headerTintColor: '#2563EB',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F1F5F9',
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 86 : 62,
          paddingBottom: Platform.OS === 'ios' ? 26 : 8,
          paddingTop: 6,
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sumadora"
        options={{
          title: 'Sumadora',
          tabBarLabel: 'Sumadora',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'calculator' : 'calculator-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="traductor"
        options={{
          title: 'Traductor',
          tabBarLabel: 'Traductor',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'text' : 'text-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tabla"
        options={{
          title: 'Tabla de Multiplicar',
          tabBarLabel: 'Tabla',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'grid' : 'grid-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="experiencia"
        options={{
          title: 'Experiencia',
          tabBarLabel: 'Experiencia',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'play-circle' : 'play-circle-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
