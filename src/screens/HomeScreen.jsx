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
import { userInfo, currentPayment } from '../data/userData';
import { unreadCount } from '../data/notificationData';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={20} color="#2196F3" />
            </View>
          <View style={styles.userTextContainer}>
            <Text style={styles.greeting}>Xin chào</Text>
            <Text style={styles.userName}>{userInfo.name}</Text>
          </View>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.getParent()?.navigate('NotificationsTab')}
          style={styles.notificationButton}
        >
          <Ionicons name="notifications" size={22} color="#FFFFFF" />
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Payment Card với design đẹp hơn */}
        <View style={styles.paymentCard}>
          <View style={styles.paymentCardGradient}>
            <View style={styles.paymentHeader}>
              <View style={styles.walletIconContainer}>
                <View style={styles.walletIcon}>
                  <Ionicons name="wallet" size={28} color="#FFFFFF" />
                </View>
              </View>
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentLabel}>Số tiền phải đóng</Text>
                <Text style={styles.paymentPeriod}>Kỳ thu: {currentPayment.period}</Text>
              </View>
              <TouchableOpacity 
                onPress={() => navigation.getParent()?.navigate('PaymentTab')}
                activeOpacity={0.7}
              >
                <View style={styles.arrowButton}>
                  <Ionicons name="chevron-forward" size={22} color="#2196F3" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{currentPayment.totalAmount}</Text>
              <Text style={styles.currency}>{currentPayment.currency}</Text>
            </View>
            <View style={styles.debtWarning}>
              <Ionicons name="warning" size={22} color="#FF9800" />
              <Text style={styles.debtText}>Công nợ: {currentPayment.debt} {currentPayment.currency}</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions với design đẹp hơn */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Thao tác nhanh</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.getParent()?.navigate('PaymentTab')}
              activeOpacity={0.7}
            >
              <View style={[styles.actionIcon, styles.actionIconBlue]}>
                <Ionicons name="card" size={36} color="#2196F3" />
              </View>
              <Text style={styles.actionLabel}>Thanh toán</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.getParent()?.navigate('HistoryTab')}
              activeOpacity={0.7}
            >
              <View style={[styles.actionIcon, styles.actionIconPurple]}>
                <Ionicons name="receipt" size={36} color="#9C27B0" />
              </View>
              <Text style={styles.actionLabel}>Lịch sử</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('Receipt')}
              activeOpacity={0.7}
            >
              <View style={[styles.actionIcon, styles.actionIconOrange]}>
                <Ionicons name="document-text" size={36} color="#FF9800" />
              </View>
              <Text style={styles.actionLabel}>Biên lai</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('Support')}
              activeOpacity={0.7}
            >
              <View style={[styles.actionIcon, styles.actionIconGreen]}>
                <Ionicons name="help-circle" size={36} color="#4CAF50" />
              </View>
              <Text style={styles.actionLabel}>Hỗ trợ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userTextContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 13,
    color: '#E3F2FD',
    marginBottom: 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#F44336',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  paymentCard: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  paymentCardGradient: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E3F2FD',
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  walletIconContainer: {
    marginRight: 14,
  },
  walletIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentLabel: {
    fontSize: 15,
    color: '#757575',
    marginBottom: 4,
    fontWeight: '500',
  },
  paymentPeriod: {
    fontSize: 13,
    color: '#9E9E9E',
  },
  arrowButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountContainer: {
    marginBottom: 20,
  },
  amount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  currency: {
    fontSize: 17,
    color: '#9E9E9E',
    fontWeight: '500',
  },
  debtWarning: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FF9800',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#FFF8E1',
  },
  debtText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#FF9800',
    fontWeight: '600',
  },
  sectionContainer: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionIcon: {
    width: 88,
    height: 88,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionIconBlue: {
    backgroundColor: '#E3F2FD',
  },
  actionIconPurple: {
    backgroundColor: '#F3E5F5',
  },
  actionIconOrange: {
    backgroundColor: '#FFF3E0',
  },
  actionIconGreen: {
    backgroundColor: '#E8F5E9',
  },
  actionLabel: {
    fontSize: 15,
    color: '#212121',
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

