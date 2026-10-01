/// <reference types="react" />
import { ReactChildren, ToastAnimationConfig, ToastPosition } from '../types';
declare type BackdropProps = {
    children: ReactChildren;
    isVisible: boolean;
    position: ToastPosition;
    height: number;
    offset: number;
    animationConfig: ToastAnimationConfig | undefined;
};
export declare function Backdrop({ children, isVisible, position, height, offset, animationConfig }: BackdropProps): JSX.Element;
export {};
