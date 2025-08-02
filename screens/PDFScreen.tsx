import { RouteProp, useRoute } from '@react-navigation/native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

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

const PDFScreen = () => {
  const route = useRoute<RouteProp<{ PDFScreen: RouteParams }, 'PDFScreen'>>();
  const formData = route.params?.formData;
  const [isGenerating, setIsGenerating] = useState(false);

  const generateHTML = (data: FormData) => {
    const currentDate = new Date().toLocaleDateString('gu-IN');
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>હોલ બુકિંગ બિલ</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #007bff;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .organization-name {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
          }
          .complex-name {
            font-size: 20px;
            color: #007bff;
            margin-bottom: 5px;
          }
          .address {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
          }
          .bill-title {
            font-size: 28px;
            font-weight: bold;
            color: #333;
            margin: 20px 0;
          }
          .section {
            margin-bottom: 25px;
          }
          .section-title {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            border-bottom: 2px solid #007bff;
            padding-bottom: 5px;
            margin-bottom: 15px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .info-item {
            margin-bottom: 10px;
          }
          .label {
            font-weight: bold;
            color: #555;
            font-size: 14px;
          }
          .value {
            color: #333;
            font-size: 16px;
            margin-top: 2px;
          }
          .daily-table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
          }
          .daily-table th, .daily-table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
          }
          .daily-table th {
            background-color: #007bff;
            color: white;
            font-weight: bold;
          }
          .daily-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          .services-table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
          }
          .services-table th, .services-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }
          .services-table th {
            background-color: #28a745;
            color: white;
            font-weight: bold;
          }
          .total-section {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .total-amount {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            text-align: center;
          }
          .notes {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="organization-name">${data.organizationName || 'ઉત્તર ગુજરાત મનસુરી પિંજારા સમાજ'}</div>
            <div class="complex-name">${data.complexName || 'રતનબા સંકુલ'}</div>
            <div class="address">${data.address || 'બીજો માળ, રોયલ કોમ્પ્લેક્ષ, આર.ટી.ઓ સર્કલ, હિંમતનગર'}</div>
            <div class="bill-title">હોલ બુકિંગ બિલ</div>
            <div style="font-size: 14px; color: #666;">તારીખ: ${currentDate}</div>
          </div>

          <div class="section">
            <div class="section-title">📋 પાર્ટીની માહિતી</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="label">પાર્ટીનું નામ:</div>
                <div class="value">${data.partyName || 'ખાલી'}</div>
              </div>
              <div class="info-item">
                <div class="label">ગામ/શહેર:</div>
                <div class="value">${data.villageCity || 'ખાલી'}</div>
              </div>
              <div class="info-item">
                <div class="label">પ્રસંગની તારીખ:</div>
                <div class="value">${data.eventDate || 'ખાલી'}</div>
              </div>
              <div class="info-item">
                <div class="label">સંપર્ક નંબર:</div>
                <div class="value">${data.contact || 'ખાલી'}</div>
              </div>
            </div>
          </div>

          ${data.day1Date ? `
          <div class="section">
            <div class="section-title">📅 દૈનિક વિગતો</div>
            <table class="daily-table">
              <thead>
                <tr>
                  <th>દિવસ</th>
                  <th>તારીખ</th>
                  <th>વાર</th>
                  <th>હોલ પેકેજ</th>
                  <th>કુલ</th>
                </tr>
              </thead>
              <tbody>
                ${data.day1Date ? `<tr><td>1</td><td>${data.day1Date}</td><td>${data.day1Day}</td><td>₹${data.day1HallPackage}</td><td>₹${data.day1Total}</td></tr>` : ''}
                ${data.day2Date ? `<tr><td>2</td><td>${data.day2Date}</td><td>${data.day2Day}</td><td>₹${data.day2HallPackage}</td><td>₹${data.day2Total}</td></tr>` : ''}
                ${data.day3Date ? `<tr><td>3</td><td>${data.day3Date}</td><td>${data.day3Day}</td><td>₹${data.day3HallPackage}</td><td>₹${data.day3Total}</td></tr>` : ''}
                ${data.day4Date ? `<tr><td>4</td><td>${data.day4Date}</td><td>${data.day4Day}</td><td>₹${data.day4HallPackage}</td><td>₹${data.day4Total}</td></tr>` : ''}
              </tbody>
            </table>
          </div>
          ` : ''}

          ${(data.acService || data.chairService || data.micService || data.speakerService || data.utensilBill || data.cleaningCharge || data.lightBill) ? `
          <div class="section">
            <div class="section-title">🔧 સેવાઓ અને ચાર્જ</div>
            <table class="services-table">
              <thead>
                <tr>
                  <th>વિગત</th>
                  <th>રકમ</th>
                </tr>
              </thead>
              <tbody>
                ${data.acService ? `<tr><td>AC સેવાનો ચાર્જ</td><td>₹${data.acService}</td></tr>` : ''}
                ${data.chairService ? `<tr><td>ખુરશીનો ચાર્જ</td><td>₹${data.chairService}</td></tr>` : ''}
                ${data.micService ? `<tr><td>માઇકનો ચાર્જ</td><td>₹${data.micService}</td></tr>` : ''}
                ${data.speakerService ? `<tr><td>સ્પીકરનો ચાર્જ</td><td>₹${data.speakerService}</td></tr>` : ''}
                ${data.utensilBill ? `<tr><td>વાસણ બિલ</td><td>₹${data.utensilBill}</td></tr>` : ''}
                ${data.cleaningCharge ? `<tr><td>સફાઇ ચાર્જ</td><td>₹${data.cleaningCharge}</td></tr>` : ''}
                ${data.lightBill ? `<tr><td>લાઇટ બિલ</td><td>₹${data.lightBill}</td></tr>` : ''}
              </tbody>
            </table>
          </div>
          ` : ''}

          ${data.grandTotal ? `
          <div class="total-section">
            <div class="total-amount">કુલ રકમ: ₹${data.grandTotal}</div>
          </div>
          ` : ''}

          ${data.notes ? `
          <div class="notes">
            <strong>નોંધ:</strong><br>
            ${data.notes}
          </div>
          ` : ''}

          <div class="footer">
            <p>આ બિલ ${currentDate} ના રોજ બનાવવામાં આવ્યું છે.</p>
            <p>ધન્યવાદ!</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };

  const handleGeneratePDF = async () => {
    if (!formData) {
      Alert.alert('ભૂલ', 'કોઈ ફોર્મ ડેટા ઉપલબ્ધ નથી');
      return;
    }

    setIsGenerating(true);
    try {
      const html = generateHTML(formData);
      const { uri } = await Print.printToFileAsync({ html });
      
      if (Platform.OS === 'ios') {
        await Sharing.shareAsync(uri);
      } else {
        await Sharing.shareAsync(uri, {
          mimeType: 'application/pdf',
          dialogTitle: 'PDF બિલ શેર કરો'
        });
      }
      
      Alert.alert('સફળ', 'PDF બિલ સફળતાપૂર્વક બનાવવામાં આવ્યું છે!');
    } catch (error) {
      console.error('PDF generation error:', error);
      Alert.alert('ભૂલ', 'PDF બનાવવામાં ભૂલ આવી છે');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📄 PDF બિલ જનરેટર</Text>
        <Text style={styles.subtitle}>તમારા હોલ બુકિંગ માટે પ્રોફેશનલ PDF બિલ બનાવો</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>બિલની વિગતો:</Text>
        <Text style={styles.infoText}>• પાર્ટીનું નામ: {formData?.partyName || 'ખાલી'}</Text>
        <Text style={styles.infoText}>• પ્રસંગની તારીખ: {formData?.eventDate || 'ખાલી'}</Text>
        <Text style={styles.infoText}>• કુલ રકમ: ₹{formData?.grandTotal || 'ખાલી'}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.generateButton, isGenerating && styles.generateButtonDisabled]} 
        onPress={handleGeneratePDF}
        disabled={isGenerating}
      >
        {isGenerating ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="#fff" size="small" />
            <Text style={styles.generateButtonText}>PDF બનાવી રહ્યા છીએ...</Text>
          </View>
        ) : (
          <Text style={styles.generateButtonText}>📄 PDF બિલ બનાવો</Text>
        )}
      </TouchableOpacity>

      <View style={styles.featuresCard}>
        <Text style={styles.featuresTitle}>બિલની વિશેષતાઓ:</Text>
        <Text style={styles.featureItem}>✅ પ્રોફેશનલ લેઆઉટ</Text>
        <Text style={styles.featureItem}>✅ ગુજરાતી ભાષામાં</Text>
        <Text style={styles.featureItem}>✅ સંપૂર્ણ વિગતો સાથે</Text>
        <Text style={styles.featureItem}>✅ શેર કરવા માટે તૈયાર</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  generateButton: {
    backgroundColor: '#28a745',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  generateButtonDisabled: {
    backgroundColor: '#6c757d',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  featuresCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  featureItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
});

export default PDFScreen; 