declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    text: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    isModal: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    emits: (event: "closeDialog" | "cancelDialog" | "confirmDialog" | "openDialog" | "update:modelValue", ...args: any[]) => void;
    close: () => void;
    cancel: () => void;
    confirm: () => void;
    MyButton: import("vue").DefineComponent<{}, {}, unknown, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("closeDialog" | "cancelDialog" | "confirmDialog" | "openDialog" | "update:modelValue")[], "closeDialog" | "cancelDialog" | "confirmDialog" | "openDialog" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    text: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    isModal: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onCloseDialog?: (...args: any[]) => any;
    onCancelDialog?: (...args: any[]) => any;
    onConfirmDialog?: (...args: any[]) => any;
    onOpenDialog?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    title: string;
    text: string;
    showClose: boolean;
    isModal: boolean;
}>;
export default _default;
