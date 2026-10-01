import { Animated, Platform } from 'react-native';
export const DEFAULT_ANIMATION_CONFIG = {
    type: 'spring',
    friction: 8
};
export function resolveAnimationConfig(config, phase) {
    if (!config) {
        return DEFAULT_ANIMATION_CONFIG;
    }
    if ('type' in config) {
        return config;
    }
    return config[phase] ?? DEFAULT_ANIMATION_CONFIG;
}
/** Creates an animation shared by Toast motion and its independent backdrop fade. */
export function createAnimation(value, toValue, config) {
    const { type, ...resolved } = resolveAnimationConfig(config, toValue === 1 ? 'enter' : 'exit');
    const useNativeDriver = Platform.OS === 'ios';
    if (type === 'timing') {
        return Animated.timing(value, { ...resolved, toValue, useNativeDriver });
    }
    return Animated.spring(value, { ...resolved, toValue, useNativeDriver });
}
