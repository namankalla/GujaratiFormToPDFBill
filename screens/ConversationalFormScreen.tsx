import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
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

const questions = [
  {
    id: 'organizationName',
    question: 'સંસ્થાનું નામ શું છે?',
    placeholder: 'ઉત્તર ગુજરાત મનસુરી પિંજારા સમાજ'
  },
  {
    id: 'complexName',
    question: 'સંકુલનું નામ શું છે?',
    placeholder: 'રતનબા સંકુલ'
  },
  {
    id: 'address',
    question: 'સરનામું શું છે?',
    placeholder: 'બીજો માળ, રોયલ કોમ્પ્લેક્ષ, આર.ટી.ઓ સર્કલ, હિંમતનગર'
  },
  {
    id: 'bookingDate',
    question: 'બુકિંગની તારીખ કઈ છે?',
    placeholder: 'દિવસ/મહિનો/વર્ષ'
  },
  {
    id: 'partyName',
    question: 'પાર્ટીનું નામ શું છે?',
    placeholder: 'પાર્ટીનું નામ દાખલ કરો'
  },
  {
    id: 'villageCity',
    question: 'ગામ/શહેર કયું છે?',
    placeholder: 'ગામ અથવા શહેરનું નામ'
  },
  {
    id: 'eventDate',
    question: 'પ્રસંગની તારીખ કઈ છે?',
    placeholder: 'પ્રસંગની તારીખ'
  },
  {
    id: 'contact',
    question: 'સંપર્ક નંબર શું છે?',
    placeholder: 'મોબાઇલ નંબર'
  },
  {
    id: 'depositAmount1',
    question: 'પહેલી જમા રકમ કેટલી છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'depositAmount2',
    question: 'બીજી જમા રકમ કેટલી છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'day1Date',
    question: 'પહેલા દિવસની તારીખ કઈ છે?',
    placeholder: 'તારીખ'
  },
  {
    id: 'day1Day',
    question: 'પહેલો દિવસ કયો છે?',
    placeholder: 'ગુરુ/શુક્ર/શની/રવી'
  },
  {
    id: 'day1HallPackage',
    question: 'પહેલા દિવસનું હોલ પેકેજ કેટલું છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'day1Total',
    question: 'પહેલા દિવસનો કુલ બિલ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'day2Date',
    question: 'બીજા દિવસની તારીખ કઈ છે?',
    placeholder: 'તારીખ'
  },
  {
    id: 'day2Day',
    question: 'બીજો દિવસ કયો છે?',
    placeholder: 'ગુરુ/શુક્ર/શની/રવી'
  },
  {
    id: 'day2HallPackage',
    question: 'બીજા દિવસનું હોલ પેકેજ કેટલું છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'day2Total',
    question: 'બીજા દિવસનો કુલ બિલ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'day3Date',
    question: 'ત્રીજા દિવસની તારીખ કઈ છે?',
    placeholder: 'તારીખ'
  },
  {
    id: 'day3Day',
    question: 'ત્રીજો દિવસ કયો છે?',
    placeholder: 'ગુરુ/શુક્ર/શની/રવી'
  },
  {
    id: 'day3HallPackage',
    question: 'ત્રીજા દિવસનું હોલ પેકેજ કેટલું છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'day3Total',
    question: 'ત્રીજા દિવસનો કુલ બિલ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'day4Date',
    question: 'ચોથા દિવસની તારીખ કઈ છે?',
    placeholder: 'તારીખ'
  },
  {
    id: 'day4Day',
    question: 'ચોથો દિવસ કયો છે?',
    placeholder: 'ગુરુ/શુક્ર/શની/રવી'
  },
  {
    id: 'day4HallPackage',
    question: 'ચોથા દિવસનું હોલ પેકેજ કેટલું છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'day4Total',
    question: 'ચોથા દિવસનો કુલ બિલ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'acService',
    question: 'AC સેવાનો ચાર્જ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'chairService',
    question: 'ખુરશીનો ચાર્જ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'micService',
    question: 'માઇકનો ચાર્જ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'speakerService',
    question: 'સ્પીકરનો ચાર્જ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'utensilBill',
    question: 'વાસણ બિલ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'cleaningCharge',
    question: 'સફાઇ ચાર્જ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'lightBill',
    question: 'લાઇટ બિલ કેટલો છે?',
    placeholder: 'રૂપિયા'
  },
  {
    id: 'grandTotal',
    question: 'કુલ રકમ કેટલી છે?',
    placeholder: 'કુલ રૂપિયા'
  },
  {
    id: 'notes',
    question: 'કોઈ વધારાની નોંધ છે?',
    placeholder: 'નોંધ લખો'
  }
];

const ConversationalFormScreen = ({ navigation }: any) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    complexName: '',
    address: '',
    bookingDate: '',
    partyName: '',
    villageCity: '',
    eventDate: '',
    contact: '',
    depositAmount1: '',
    depositAmount2: '',
    day1Date: '',
    day1Day: '',
    day1HallPackage: '',
    day1Total: '',
    day2Date: '',
    day2Day: '',
    day2HallPackage: '',
    day2Total: '',
    day3Date: '',
    day3Day: '',
    day3HallPackage: '',
    day3Total: '',
    day4Date: '',
    day4Day: '',
    day4HallPackage: '',
    day4Total: '',
    acService: '',
    chairService: '',
    micService: '',
    speakerService: '',
    utensilBill: '',
    cleaningCharge: '',
    lightBill: '',
    grandTotal: '',
    notes: ''
  });

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions completed, navigate to preview
      navigation.navigate('PreviewScreen', { formData });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
        </View>
        <Text style={styles.progressText}>
          પ્રશ્ન {currentQuestionIndex + 1} / {questions.length}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          
          <TextInput
            style={styles.input}
            value={formData[currentQuestion.id as keyof FormData] as string}
            onChangeText={(text) => 
              setFormData({ ...formData, [currentQuestion.id]: text })
            }
            placeholder={currentQuestion.placeholder}
            placeholderTextColor="#999"
          />
        </View>

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          {currentQuestionIndex > 0 && (
            <TouchableOpacity style={styles.previousButton} onPress={handlePrevious}>
              <Text style={styles.previousButtonText}>પાછળ</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>છોડી દો</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex === questions.length - 1 ? 'પૂર્ણ કરો' : 'આગળ'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  progressContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  progressText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  questionContainer: {
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
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
    lineHeight: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  previousButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 80,
  },
  previousButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  skipButton: {
    backgroundColor: '#ffc107',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 80,
  },
  skipButtonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 80,
  },
  nextButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ConversationalFormScreen; 