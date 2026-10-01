import { Animated } from 'react-native';
import { ToastAnimationConfig, ToastSingleAnimationConfig, ToastSpringAnimationConfig } from '../types';
export declare const DEFAULT_ANIMATION_CONFIG: ToastSpringAnimationConfig;
export declare type AnimationPhase = 'enter' | 'exit';
export declare function resolveAnimationConfig(config: ToastAnimationConfig | undefined, phase: AnimationPhase): ToastSingleAnimationConfig;
/** Creates an animation shared by Toast motion and its independent backdrop fade. */
export declare function createAnimation(value: Animated.Value, toValue: number, config?: ToastAnimationConfig): Animated.CompositeAnimation;
