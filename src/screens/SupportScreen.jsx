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
import { supportRequests } from '../data/supportData';

export default function SupportScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* New Request Button */}
        <TouchableOpacity style={styles.newRequestButton}>
          <View style={styles.plusIcon}>
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.newRequestText}>Gửi yêu cầu hỗ trợ mới</Text>
        </TouchableOpacity>

        {/* Request History */}
        <Text style={styles.sectionTitle}>Lịch sử yêu cầu</Text>

        {supportRequests.map((request) => (
          <View key={request.id} style={styles.requestCard}>
            <View style={[styles.requestIcon, { backgroundColor: `${request.iconColor}20` }]}>
              <Ionicons name={request.icon} size={24} color={request.iconColor} />
            </View>
            <View style={styles.requestContent}>
              <View style={styles.requestHeader}>
                <Text style={styles.requestTitle}>{request.title}</Text>
                <View style={[styles.statusBadge, { backgroundColor: request.statusColor }]}>
                  <Text style={styles.statusText}>{request.status}</Text>
                </View>
              </View>
              <Text style={styles.requestTime}>{request.time}</Text>
              <Text style={styles.requestDescription}>{request.description}</Text>
              {request.response && (
                <View style={styles.responseContainer}>
                  <Text style={styles.responseLabel}>Phản hồi:</Text>
                  <Text style={styles.responseText}>{request.response}</Text>
                </View>
              )}
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
  scrollView: {
    flex: 1,
  },
  newRequestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
  },
  plusIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  newRequestText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  requestCard: {
    flexDirection: 'row',
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
  requestIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  requestContent: {
    flex: 1,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  requestTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  requestTime: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 8,
  },
  requestDescription: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 8,
  },
  responseContainer: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  responseLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  responseText: {
    fontSize: 14,
    color: '#757575',
  },
});

