/// <reference types="react" />
import { ToastConfig, ToastData, ToastHideParams, ToastOptions, ToastProps, ToastShowParams } from './types';
export declare type ToastUIProps = {
    isVisible: boolean;
    options: Required<ToastOptions>;
    data: ToastData;
    show: (params: ToastShowParams) => void;
    hide: (params: ToastHideParams) => void;
    config?: ToastConfig;
    renderBackdrop?: ToastProps['renderBackdrop'];
};
export declare function ToastUI(props: ToastUIProps): JSX.Element;
