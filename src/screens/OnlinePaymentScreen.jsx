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
import { paymentInfo, paymentMethods } from '../data/paymentData';
import { userInfo, currentPayment } from '../data/userData';

export default function OnlinePaymentScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Payment Information Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Thông tin thanh toán</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Mã hộ:</Text>
            <Text style={styles.infoValue}>{userInfo.householdCode}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Mã đơn hàng:</Text>
            <Text style={styles.infoValue}>{paymentInfo.orderId}</Text>
          </View>
          {currentPayment.receiptNumber && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Mã biên lai:</Text>
              <Text style={styles.infoValue}>{currentPayment.receiptNumber}</Text>
            </View>
          )}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Số tiền:</Text>
            <Text style={styles.amountValue}>{currentPayment.totalAmount} {currentPayment.currency}</Text>
          </View>
        </View>

        {/* Payment Methods Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Chọn phương thức thanh toán</Text>
          
          {paymentMethods.map((method) => (
            <TouchableOpacity key={method.id} style={styles.paymentMethod}>
              <View style={styles.paymentMethodIcon}>
                <Ionicons name={method.icon} size={24} color={method.iconColor} />
              </View>
              <Text style={styles.paymentMethodText}>{method.name}</Text>
              <Ionicons name="chevron-forward" size={20} color="#757575" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    color: '#757575',
  },
  infoValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  amountValue: {
    fontSize: 18,
    color: '#2196F3',
    fontWeight: 'bold',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  paymentMethodIcon: {
    marginRight: 12,
  },
  paymentMethodText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
});

