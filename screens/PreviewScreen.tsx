import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FormData {
  // Header Information
  organizationName: string;
  complexName: string;
  address: string;
  bookingDate: string;
  
  // Party Details
  partyName: string;
  villageCity: string;
  eventDate: string;
  contact: string;
  
  // Deposit Amounts
  depositAmount1: string;
  depositAmount2: string;
  
  // Daily Booking Details
  day1Date: string;
  day1Day: string;
  day1HallPackage: string;
  day1Total: string;
  
  day2Date: string;
  day2Day: string;
  day2HallPackage: string;
  day2Total: string;
  
  day3Date: string;
  day3Day: string;
  day3HallPackage: string;
  day3Total: string;
  
  day4Date: string;
  day4Day: string;
  day4HallPackage: string;
  day4Total: string;
  
  // Service Details
  acService: string;
  chairService: string;
  micService: string;
  speakerService: string;
  utensilBill: string;
  cleaningCharge: string;
  lightBill: string;
  
  // Total
  grandTotal: string;
  
  // Notes
  notes: string;
}

type RouteParams = {
  formData?: FormData;
};

type RootStackParamList = {
  PDFScreen: { formData: FormData };
};

const PreviewScreen = () => {
  const route = useRoute<RouteProp<{ PreviewScreen: RouteParams }, 'PreviewScreen'>>();
  const navigation = useNavigation<any>();
  const formData = route.params?.formData;

  const handleGeneratePDF = () => {
    // You can implement PDF generation logic here and pass formData
    navigation.navigate('PDFScreen', { formData });
  };

  const getFieldLabel = (key: string): string => {
    const labels: Record<string, string> = {
      organizationName: 'સંસ્થાનું નામ',
      complexName: 'સંકુલનું નામ',
      address: 'સરનામું',
      bookingDate: 'બુકિંગની તારીખ',
      partyName: 'પાર્ટીનું નામ',
      villageCity: 'ગામ/શહેર',
      eventDate: 'પ્રસંગની તારીખ',
      contact: 'સંપર્ક નંબર',
      depositAmount1: 'પહેલી જમા રકમ',
      depositAmount2: 'બીજી જમા રકમ',
      day1Date: 'પહેલા દિવસની તારીખ',
      day1Day: 'પહેલો દિવસ',
      day1HallPackage: 'પહેલા દિવસનું હોલ પેકેજ',
      day1Total: 'પહેલા દિવસનો કુલ બિલ',
      day2Date: 'બીજા દિવસની તારીખ',
      day2Day: 'બીજો દિવસ',
      day2HallPackage: 'બીજા દિવસનું હોલ પેકેજ',
      day2Total: 'બીજા દિવસનો કુલ બિલ',
      day3Date: 'ત્રીજા દિવસની તારીખ',
      day3Day: 'ત્રીજો દિવસ',
      day3HallPackage: 'ત્રીજા દિવસનું હોલ પેકેજ',
      day3Total: 'ત્રીજા દિવસનો કુલ બિલ',
      day4Date: 'ચોથા દિવસની તારીખ',
      day4Day: 'ચોથો દિવસ',
      day4HallPackage: 'ચોથા દિવસનું હોલ પેકેજ',
      day4Total: 'ચોથા દિવસનો કુલ બિલ',
      acService: 'AC સેવાનો ચાર્જ',
      chairService: 'ખુરશીનો ચાર્જ',
      micService: 'માઇકનો ચાર્જ',
      speakerService: 'સ્પીકરનો ચાર્જ',
      utensilBill: 'વાસણ બિલ',
      cleaningCharge: 'સફાઇ ચાર્જ',
      lightBill: 'લાઇટ બિલ',
      grandTotal: 'કુલ રકમ',
      notes: 'નોંધ'
    };
    return labels[key] || key;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📋 હોલ બુકિંગ પૂર્વદર્શન</Text>
      {formData ? (
        <>
          {/* Header Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📋 માહિતી</Text>
            <View style={styles.item}>
              <Text style={styles.label}>{getFieldLabel('organizationName')}:</Text>
              <Text style={styles.value}>{formData.organizationName || 'ખાલી'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>{getFieldLabel('complexName')}:</Text>
              <Text style={styles.value}>{formData.complexName || 'ખાલી'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>{getFieldLabel('address')}:</Text>
              <Text style={styles.value}>{formData.address || 'ખાલી'}</Text>
            </View>
          </View>

          {/* Party Details Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>👥 પાર્ટીની માહિતી</Text>
            <View style={styles.item}>
              <Text style={styles.label}>{getFieldLabel('partyName')}:</Text>
              <Text style={styles.value}>{formData.partyName || 'ખાલી'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>{getFieldLabel('villageCity')}:</Text>
              <Text style={styles.value}>{formData.villageCity || 'ખાલી'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>{getFieldLabel('eventDate')}:</Text>
              <Text style={styles.value}>{formData.eventDate || 'ખાલી'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>{getFieldLabel('contact')}:</Text>
              <Text style={styles.value}>{formData.contact || 'ખાલી'}</Text>
            </View>
          </View>

          {/* Daily Details Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📅 દૈનિક વિગતો</Text>
            {formData.day1Date && (
              <View style={styles.item}>
                <Text style={styles.label}>દિવસ 1 ({formData.day1Day}):</Text>
                <Text style={styles.value}>તારીખ: {formData.day1Date}, હોલ: ₹{formData.day1HallPackage}, કુલ: ₹{formData.day1Total}</Text>
              </View>
            )}
            {formData.day2Date && (
              <View style={styles.item}>
                <Text style={styles.label}>દિવસ 2 ({formData.day2Day}):</Text>
                <Text style={styles.value}>તારીખ: {formData.day2Date}, હોલ: ₹{formData.day2HallPackage}, કુલ: ₹{formData.day2Total}</Text>
              </View>
            )}
            {formData.day3Date && (
              <View style={styles.item}>
                <Text style={styles.label}>દિવસ 3 ({formData.day3Day}):</Text>
                <Text style={styles.value}>તારીખ: {formData.day3Date}, હોલ: ₹{formData.day3HallPackage}, કુલ: ₹{formData.day3Total}</Text>
              </View>
            )}
            {formData.day4Date && (
              <View style={styles.item}>
                <Text style={styles.label}>દિવસ 4 ({formData.day4Day}):</Text>
                <Text style={styles.value}>તારીખ: {formData.day4Date}, હોલ: ₹{formData.day4HallPackage}, કુલ: ₹{formData.day4Total}</Text>
              </View>
            )}
          </View>

          {/* Services Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🔧 સેવાઓ</Text>
            {formData.acService && (
              <View style={styles.item}>
                <Text style={styles.label}>{getFieldLabel('acService')}:</Text>
                <Text style={styles.value}>₹{formData.acService}</Text>
              </View>
            )}
            {formData.chairService && (
              <View style={styles.item}>
                <Text style={styles.label}>{getFieldLabel('chairService')}:</Text>
                <Text style={styles.value}>₹{formData.chairService}</Text>
              </View>
            )}
            {formData.micService && (
              <View style={styles.item}>
                <Text style={styles.label}>{getFieldLabel('micService')}:</Text>
                <Text style={styles.value}>₹{formData.micService}</Text>
              </View>
            )}
            {formData.speakerService && (
              <View style={styles.item}>
                <Text style={styles.label}>{getFieldLabel('speakerService')}:</Text>
                <Text style={styles.value}>₹{formData.speakerService}</Text>
              </View>
            )}
            {formData.utensilBill && (
              <View style={styles.item}>
                <Text style={styles.label}>{getFieldLabel('utensilBill')}:</Text>
                <Text style={styles.value}>₹{formData.utensilBill}</Text>
              </View>
            )}
            {formData.cleaningCharge && (
              <View style={styles.item}>
                <Text style={styles.label}>{getFieldLabel('cleaningCharge')}:</Text>
                <Text style={styles.value}>₹{formData.cleaningCharge}</Text>
              </View>
            )}
            {formData.lightBill && (
              <View style={styles.item}>
                <Text style={styles.label}>{getFieldLabel('lightBill')}:</Text>
                <Text style={styles.value}>₹{formData.lightBill}</Text>
              </View>
            )}
          </View>

          {/* Total Section */}
          {formData.grandTotal && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>💰 કુલ રકમ</Text>
              <View style={styles.item}>
                <Text style={styles.label}>{getFieldLabel('grandTotal')}:</Text>
                <Text style={[styles.value, styles.totalAmount]}>₹{formData.grandTotal}</Text>
              </View>
            </View>
          )}

          {/* Notes Section */}
          {formData.notes && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>📝 નોંધ</Text>
              <View style={styles.item}>
                <Text style={styles.value}>{formData.notes}</Text>
              </View>
            </View>
          )}
        </>
      ) : (
        <Text style={styles.noData}>કોઈ માહિતી ઉપલબ્ધ નથી</Text>
      )}
      
      <TouchableOpacity style={styles.generateButton} onPress={handleGeneratePDF}>
        <Text style={styles.generateButtonText}>📄 PDF બિલ બનાવો</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  item: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#000',
    marginTop: 4,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  noData: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },
  generateButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PreviewScreen;
