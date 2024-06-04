import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, Pressable, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios, { AxiosResponse } from 'axios';
import AlertComponent from '@/components/AlertComponent';
import { Redirect, useRouter } from 'expo-router';

export default function LoginScreen() {
    const [username, setAcount] = useState('');
    const [passwd, setPassword] = useState('');
    const [showMissingInfoAlert, setShowMissingInfoAlert] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        router.navigate('/home');

        // if (username.trim() === '' || passwd.trim() === '') {
        //     setShowMissingInfoAlert(true);
        //     return;
        // }

        // try {
        //     console.log('Đăng nhập...',{username, passwd})
        //     let response: AxiosResponse = await axios.post('http://beejobs.io.vn:14307/api/login', {
        //         username,
        //         passwd,
        //     });;

        //     console.log('Đăng nhập thành công:', response.data);
        //     // Chuyển hướng đến màn hình khác sau khi đăng nhập thành công
        //     router.navigate('/home');
        // } catch (error) {
        //     console.error('Lỗi đăng nhập:', error);
        // }
    };


    return (
        <ThemedView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('@/assets/images/registration.png')} style={styles.headerImage} />
                <ThemedText type="title">Login</ThemedText>
            </View>

            <View style={styles.inputContainer}>
                <ThemedText style={styles.label}>Username</ThemedText>
                <View style={styles.inputWithIcon}>
                    <TextInput
                        style={[styles.input, { paddingLeft: 12 }]}
                        placeholder="Enter your username"
                        value={username }
                        onChangeText={setAcount}
                        keyboardType="default"
                    />
                    <Ionicons name="person" size={20} color="#007AFF" style={styles.icon} />
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

            <Pressable onPress={() => {
                router.navigate('RegisterScreen')
            }}>
                <Text>Regist</Text>
            </Pressable>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <ThemedText style={styles.buttonText}>Login</ThemedText>
            </TouchableOpacity>

            <AlertComponent
                message="Bạn nhập thiếu thông tin!"
                visible={showMissingInfoAlert}
                onClose={() => setShowMissingInfoAlert(false)}
            />
        </ThemedView>
    );
}

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
});
