import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { transactions } from '../data/transactionData';

export default function TransactionHistoryScreen({ navigation }) {
  const [filter, setFilter] = useState('all'); // 'all' or 'period'

  return (
    <SafeAreaView style={styles.container}>
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
          onPress={() => setFilter('all')}
        >
          <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>
            Tất cả
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'period' && styles.filterButtonActive]}
          onPress={() => setFilter('period')}
        >
          <Text style={[styles.filterText, filter === 'period' && styles.filterTextActive]}>
            Theo kỳ
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionCard}>
            <View style={styles.transactionHeader}>
              <Text style={styles.transactionTitle}>{transaction.title}</Text>
              <View style={[styles.statusBadge, { backgroundColor: transaction.statusColor }]}>
                <Text style={styles.statusText}>{transaction.status}</Text>
              </View>
            </View>
            <Text style={styles.transactionTime}>{transaction.time}</Text>
            <View style={styles.transactionDetails}>
              <Text style={styles.detailText}>Mã đơn hàng: {transaction.orderId}</Text>
              <Text style={styles.detailText}>Kỳ thu: {transaction.period}</Text>
              <Text style={styles.detailText}>Phương thức: {transaction.method}</Text>
              <Text style={styles.amountText}>Số tiền: {transaction.amount}</Text>
            </View>
            {transaction.hasReceipt && (
              <TouchableOpacity style={styles.downloadButton}>
                <Ionicons name="download-outline" size={20} color="#2196F3" />
                <Text style={styles.downloadText}>Tải PDF</Text>
              </TouchableOpacity>
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
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 12,
    gap: 12,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  filterButtonActive: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  filterText: {
    fontSize: 16,
    color: '#757575',
  },
  filterTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  transactionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  transactionTitle: {
    flex: 1,
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
  transactionTime: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 12,
  },
  transactionDetails: {
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 4,
  },
  amountText: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: 'bold',
    marginTop: 4,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  downloadText: {
    color: '#2196F3',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
});

