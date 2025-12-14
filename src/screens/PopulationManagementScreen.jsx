import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { pricingTiers, populationInfo } from '../data/populationData';
import { currentPayment } from '../data/userData';

const formatCurrency = (amount) => {
  return amount.toLocaleString('vi-VN');
};

// Tính toán phí giống như trong userData
const calculateFees = (populationCount) => {
  const serviceFeePerPerson = 21000;
  const maintenanceFee = 30000;
  const serviceFee = serviceFeePerPerson * populationCount;
  const subtotal = serviceFee + maintenanceFee;
  const vat = Math.round(subtotal * 0.1);
  const total = subtotal + vat;

  return {
    serviceFee,
    maintenanceFee,
    vat,
    total,
  };
};

export default function PopulationManagementScreen() {
  const fees = calculateFees(populationInfo.total);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Ionicons name="people" size={32} color="#FFFFFF" />
          </View>
          <Text style={styles.summaryLabel}>Tổng số nhân khẩu</Text>
          <Text style={styles.summaryValue}>{populationInfo.total} người</Text>
          <View style={styles.summaryInfo}>
            <Text style={styles.summaryInfoLabel}>Phí dịch vụ:</Text>
            <Text style={styles.summaryInfoValue}>{formatCurrency(fees.serviceFee)} VNĐ</Text>
          </View>
          <View style={styles.summaryInfo}>
            <Text style={styles.summaryInfoLabel}>Phí bảo trì:</Text>
            <Text style={styles.summaryInfoValue}>{formatCurrency(fees.maintenanceFee)} VNĐ</Text>
          </View>
          <View style={styles.summaryInfo}>
            <Text style={styles.summaryInfoLabel}>VAT (10%):</Text>
            <Text style={styles.summaryInfoValue}>{formatCurrency(fees.vat)} VNĐ</Text>
          </View>
          <View style={[styles.summaryInfo, styles.totalRow]}>
            <Text style={styles.summaryInfoLabel}>Tổng tiền:</Text>
            <Text style={styles.summaryInfoValue}>{formatCurrency(fees.total)} VNĐ</Text>
          </View>
        </View>

        {/* Pricing Info */}
        <View style={styles.pricingCard}>
          <View style={styles.pricingHeader}>
            <Ionicons name="pricetag" size={24} color="#2196F3" />
            <Text style={styles.pricingTitle}>Thông tin giá</Text>
          </View>

          <View style={styles.pricingInfo}>
            <View style={styles.pricingInfoRow}>
              <Ionicons name="information-circle" size={20} color="#2196F3" />
              <Text style={styles.pricingInfoText}>
                Phí dịch vụ: <Text style={styles.pricingInfoBold}>21.000 VNĐ / 1 người</Text>
              </Text>
            </View>
            <View style={styles.pricingInfoRow}>
              <Ionicons name="information-circle" size={20} color="#2196F3" />
              <Text style={styles.pricingInfoText}>
                Phí bảo trì: <Text style={styles.pricingInfoBold}>30.000 VNĐ</Text> (cố định)
              </Text>
            </View>
            <View style={styles.pricingInfoRow}>
              <Ionicons name="information-circle" size={20} color="#2196F3" />
              <Text style={styles.pricingInfoText}>
                VAT: <Text style={styles.pricingInfoBold}>10%</Text> trên tổng phí dịch vụ và phí bảo trì
              </Text>
            </View>
          </View>
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
  summaryCard: {
    backgroundColor: '#2196F3',
    margin: 16,
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  summaryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  summaryInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  summaryInfoLabel: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  summaryInfoValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
  },
  pricingCard: {
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
  pricingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pricingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 8,
  },
  pricingInfo: {
    marginTop: 8,
  },
  pricingInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  pricingInfoText: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
    marginLeft: 12,
    lineHeight: 22,
  },
  pricingInfoBold: {
    fontWeight: 'bold',
    color: '#2196F3',
  },
});

