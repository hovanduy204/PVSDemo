import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { notifications, unreadCount } from '../data/notificationData';

export default function NotificationsScreen() {

  const getIcon = (type) => {
    if (type === 'debt') {
      return <Ionicons name="warning" size={24} color="#FF9800" />;
    }
    return <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.unreadCount}>Bạn có {unreadCount} thông báo chưa đọc</Text>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {notifications.map((notification) => (
          <View
            key={notification.id}
            style={[
              styles.notificationCard,
              notification.unread ? styles.unreadCard : styles.readCard,
            ]}
          >
            {notification.unread && <View style={styles.unreadDot} />}
            <View style={styles.notificationContent}>
              <View style={styles.notificationHeader}>
                {getIcon(notification.type)}
                <View style={styles.notificationText}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationMessage}>{notification.message}</Text>
                </View>
              </View>
              <View style={styles.notificationFooter}>
                <Text style={styles.notificationTime}>{notification.time}</Text>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>{notification.action}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  unreadCount: {
    textAlign: 'center',
    fontSize: 14,
    color: '#757575',
    paddingTop: 40,
    paddingBottom: 12,
  },
  scrollView: {
    flex: 1,
  },
  notificationCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    position: 'relative',
  },
  unreadCard: {
    backgroundColor: '#E3F2FD',
  },
  readCard: {
    backgroundColor: '#FFFFFF',
  },
  unreadDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2196F3',
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  notificationText: {
    flex: 1,
    marginLeft: 12,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
  },
  notificationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationTime: {
    fontSize: 12,
    color: '#757575',
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  actionText: {
    fontSize: 12,
    color: '#000000',
  },
});

