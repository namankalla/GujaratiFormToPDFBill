import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const FormScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    village: '',
    taluka: '',
    district: '',
    pincode: '',
    itemName: '',
    itemRate: '',
    itemQty: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Form Submitted', JSON.stringify(formData, null, 2));
    // Later: Generate PDF here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>નામ:</Text>
      <TextInput style={styles.input} onChangeText={(text) => handleChange('name', text)} value={formData.name} />

      <Text style={styles.label}>સરનામું:</Text>
      <TextInput style={styles.input} onChangeText={(text) => handleChange('address', text)} value={formData.address} />

      <Text style={styles.label}>ગામ:</Text>
      <TextInput style={styles.input} onChangeText={(text) => handleChange('village', text)} value={formData.village} />

      <Text style={styles.label}>તાલુકો:</Text>
      <TextInput style={styles.input} onChangeText={(text) => handleChange('taluka', text)} value={formData.taluka} />

      <Text style={styles.label}>જિલ્લો:</Text>
      <TextInput style={styles.input} onChangeText={(text) => handleChange('district', text)} value={formData.district} />

      <Text style={styles.label}>પિન કોડ:</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(text) => handleChange('pincode', text)} value={formData.pincode} />

      <Text style={styles.label}>વસ્તુનું નામ:</Text>
      <TextInput style={styles.input} onChangeText={(text) => handleChange('itemName', text)} value={formData.itemName} />

      <Text style={styles.label}>દર:</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(text) => handleChange('itemRate', text)} value={formData.itemRate} />

      <Text style={styles.label}>જથ્થો:</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(text) => handleChange('itemQty', text)} value={formData.itemQty} />

      <View style={styles.buttonContainer}>
        <Button title="Generate Bill" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default FormScreen;
