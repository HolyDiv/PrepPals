import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function LoadingWheel() {
    return (
        <View>
            <ActivityIndicator size="large"/>
            <Text> Loading... </Text>
        </View>
    );
}