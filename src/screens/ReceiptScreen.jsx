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
import { receipts } from '../data/receiptData';

export default function ReceiptScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {receipts.map((receipt) => (
          <View key={receipt.id} style={styles.receiptCard}>
            <View style={styles.receiptHeader}>
              <Text style={styles.receiptNumber}>Biên lai số: {receipt.receiptNumber}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{receipt.status}</Text>
              </View>
            </View>
            <Text style={styles.period}>Kỳ thu: {receipt.period}</Text>
            <Text style={styles.amount}>{receipt.amount}</Text>

            {receipt.fees.length > 0 && (
              <>
                <Text style={styles.detailsTitle}>Chi tiết</Text>
                {receipt.fees.map((fee, index) => (
                  <View key={index} style={styles.feeRow}>
                    <Text style={styles.feeLabel}>{fee.label}</Text>
                    <Text style={styles.feeValue}>{fee.value}</Text>
                  </View>
                ))}
              </>
            )}

            {receipt.orderId && (
              <>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Mã đơn hàng:</Text>
                  <Text style={styles.infoValue}>{receipt.orderId}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Ngày phát hành:</Text>
                  <Text style={styles.infoValue}>{receipt.issueDate}</Text>
                </View>
              </>
            )}

            {receipt.id === '1' && (
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="eye-outline" size={20} color="#2196F3" />
                  <Text style={styles.actionText}>Xem online</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="download-outline" size={20} color="#2196F3" />
                  <Text style={styles.actionText}>Tải PDF</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="checkmark-circle-outline" size={20} color="#2196F3" />
                  <Text style={styles.actionText}>Kiểm tra</Text>
                </TouchableOpacity>
              </View>
            )}
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
  scrollView: {
    flex: 1,
  },
  receiptCard: {
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
  receiptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  receiptNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  period: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  feeLabel: {
    fontSize: 14,
    color: '#000000',
  },
  feeValue: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#757575',
  },
  infoValue: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 12,
    color: '#2196F3',
    marginTop: 4,
  },
});

