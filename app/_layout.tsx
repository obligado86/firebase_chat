import { AuthContextProvider, useAuth } from '@/context/authContext';
import {Slot, useRouter, useSegments} from 'expo-router';
import React, { useEffect } from 'react';
import {View} from "react-native";

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (typeof isAuthenticated == 'undefined') return;
        const inApp = segments[0] == '(app)';
        if (isAuthenticated && !inApp) {
            router.replace('home')
        } else if (isAuthenticated == false) {
            router.replace('signIn')
        }
    }, [isAuthenticated]);

    return <Slot />
}

const _layout = () => {
    return (
        <AuthContextProvider style={{flex: 1}}>
            <MainLayout />
        </AuthContextProvider>
    );
};

export default _layout;