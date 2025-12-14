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
import { currentPayment } from '../data/userData';

export default function PaymentScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Payment Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Chi tiết số tiền tháng</Text>
          <Text style={styles.period}>{currentPayment.period}</Text>
          {currentPayment.receiptNumber && (
            <Text style={styles.receiptNumber}>Mã biên lai: {currentPayment.receiptNumber}</Text>
          )}
          <Text style={styles.totalAmount}>{currentPayment.totalAmount} {currentPayment.currency}</Text>

          <View style={styles.divider} />

          {currentPayment.fees.map((fee, index) => (
            <View key={index} style={styles.feeRow}>
              <Text style={styles.feeLabel}>{fee.label}</Text>
              <Text style={styles.feeValue}>{fee.value}</Text>
            </View>
          ))}

          <TouchableOpacity
            style={styles.payButton}
            onPress={() => navigation.navigate('OnlinePayment')}
          >
            <Ionicons name="card" size={24} color="#FFFFFF" style={styles.payButtonIcon} />
            <Text style={styles.payButtonText}>Thanh toán ngay</Text>
          </TouchableOpacity>
        </View>

        {/* Debt Card */}
        <View style={styles.card}>
          <View style={styles.debtHeader}>
            <Ionicons name="warning" size={24} color="#FF9800" />
            <Text style={styles.debtTitle}>Công nợ</Text>
          </View>
          <Text style={styles.debtAmount}>{currentPayment.debt} {currentPayment.currency}</Text>
          <View style={styles.debtInfo}>
            <Text style={styles.debtPeriod}>Kỳ thu: {currentPayment.period}</Text>
            <Text style={styles.debtStatus}>Chưa thanh toán</Text>
            <Text style={styles.debtValue}>{currentPayment.debt} {currentPayment.currency}</Text>
          </View>
          <TouchableOpacity style={styles.debtButton}>
            <Text style={styles.debtButtonText}>Thanh toán công nợ</Text>
          </TouchableOpacity>
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
  scrollContent: {
    paddingTop: 24,
    paddingBottom: 16,
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
    marginBottom: 8,
  },
  period: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  receiptNumber: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: '500',
    marginBottom: 16,
  },
  totalAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 16,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  feeLabel: {
    fontSize: 16,
    color: '#000000',
  },
  feeValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  payButton: {
    backgroundColor: '#2196F3',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  payButtonIcon: {
    marginRight: 8,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  debtHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  debtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 8,
  },
  debtAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 16,
  },
  debtInfo: {
    marginBottom: 16,
  },
  debtPeriod: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  debtStatus: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 4,
  },
  debtValue: {
    fontSize: 16,
    color: '#FF9800',
    fontWeight: '600',
  },
  debtButton: {
    backgroundColor: '#F44336',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  debtButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

