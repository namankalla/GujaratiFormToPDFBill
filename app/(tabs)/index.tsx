import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  const handleStartForm = () => {
    router.push('/ConversationalFormScreen');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">હોલ બુકિંગ એપ</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">🎉 સ્વાગત છે!</ThemedText>
        <ThemedText>
          આ એપ તમને હોલ બુકિંગ માટેનો પ્રોફેશનલ બિલ બનાવવામાં મદદ કરશે.
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">📋 કેવી રીતે કામ કરે છે:</ThemedText>
        <ThemedText>
          • પ્રશ્નોના જવાબ આપો{'\n'}
          • તમારી માહિતી જોઈએ{'\n'}
          • PDF બિલ બનાવો અને શેર કરો
        </ThemedText>
      </ThemedView>
      
      <TouchableOpacity style={styles.startButton} onPress={handleStartForm}>
        <ThemedText style={styles.startButtonText}>🚀 હોલ બુકિંગ શરૂ કરો</ThemedText>
      </TouchableOpacity>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">✨ વિશેષતાઓ:</ThemedText>
        <ThemedText>
          • ગુજરાતી ભાષામાં પ્રશ્નો{'\n'}
          • સરળ અને સમજવામાં સરળ{'\n'}
          • પ્રોફેશનલ PDF બિલ{'\n'}
          • તમામ જરૂરી વિગતો સાથે
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  startButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
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
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
