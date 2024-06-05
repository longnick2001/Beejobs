import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, ScrollView, Text, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios, { AxiosResponse } from 'axios';
import AlertComponent from '@/components/AlertComponent';

const RegisterScreen = () => {
    const [accout_name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPassword] = useState('');
    const [showMissingInfoAlert, setShowMissingInfoAlert] = useState(false);

    const types = ['Worker', 'Company'];
    const [typeSelected, setTypeSelected] = useState('Worker')

    const handleRegister = async () => {
        const type = typeSelected === 'Worker' ? 'NLD' : 'DN';

        if (accout_name.trim() === '' || email.trim() === '' || passwd.trim() === '') {
            setShowMissingInfoAlert(true);
            return;
        }

        try {
            const response: AxiosResponse = await axios.post('http://beejobs.io.vn:14307/api/signup', {
                accout_name,
                email,
                passwd,
                type
            });
            console.log('Đăng ký thành công:', response.data);
        } catch (error) {
            console.error('Lỗi đăng ký:', error);
        }
    };

    return (
        <ScrollView>
            <ThemedView style={styles.container}>

                <View style={styles.headerContainer}>
                    <Image source={require('@/assets/images/registration.png')} style={styles.headerImage} />
                    <ThemedText type="title">Registration</ThemedText>
                </View>

                <View style={styles.types}>
                    {types.map((type) => (
                        <Pressable
                            key={type}
                            onPress={() => { setTypeSelected(type) }}
                            style={[styles.type,
                            { backgroundColor: typeSelected === type ? '#007AFF' : 'white' }]}>
                            <Text style={[styles.typeText,
                            { color: typeSelected === type ? 'white' : 'black' }]}>{type}</Text>
                        </Pressable>

                    ))}
                </View>

                <View style={styles.inputContainer}>
                    <ThemedText style={styles.label}>Username</ThemedText>
                    <View style={styles.inputWithIcon}>
                        <TextInput
                            style={[styles.input, { paddingLeft: 12 }]}
                            placeholder="Enter your username"
                            value={accout_name}
                            onChangeText={setUsername}
                        />
                        <Ionicons name="person" size={20} color="#007AFF" style={styles.icon} />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <ThemedText style={styles.label}>Email</ThemedText>
                    <View style={styles.inputWithIcon}>
                        <TextInput
                            style={[styles.input, { paddingLeft: 12 }]}
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                        <Ionicons name="mail" size={20} color="#007AFF" style={styles.icon} />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <ThemedText style={styles.label}>Password</ThemedText>
                    <View style={styles.inputWithIcon}>
                        <TextInput
                            style={[styles.input, { paddingLeft: 12 }]}
                            placeholder="Enter your password"
                            value={passwd}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <Ionicons name="lock-closed" size={20} color="#007AFF" style={styles.icon} />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <ThemedText style={styles.buttonText}>Submit</ThemedText>
                </TouchableOpacity>

                <AlertComponent
                    color='#FF4F4F'
                    message="Bạn nhập thiếu thông tin!"
                    visible={showMissingInfoAlert}
                    onClose={() => setShowMissingInfoAlert(false)}
                />

            </ThemedView>
        </ScrollView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerImage: {
        width: 270,
        height: 150,
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%',
        marginVertical: 10,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        borderColor: '#007AFF',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
    },
    button: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginTop: 20,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: 'light'
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        right: 12,
    },
    types: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    type: {
        backgroundColor: '#007AFF',
        width: 'auto',
        borderRadius: 10,
        padding: 10
    },
    typeText: {
        fontSize: 20,
        fontWeight: '500',
    }
});
