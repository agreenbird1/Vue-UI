declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: true;
    };
    message: {
        type: StringConstructor;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: StringConstructor;
        value: string[];
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        value: string[];
        default: string;
    };
    id: {
        type: NumberConstructor;
    };
    onClose: {
        type: FunctionConstructor;
    };
    zIndex: {
        type: NumberConstructor;
    };
}, {
    styles: {
        error: {
            backgroundColor: string;
            border: string;
            boxShadow: string;
        };
        warning: {
            backgroundColor: string;
            border: string;
            boxShadow: string;
        };
        success: {
            backgroundColor: string;
            border: string;
            boxShadow: string;
        };
        info: {
            backgroundColor: string;
            border: string;
            boxShadow: string;
        };
    };
    visible: import("vue").Ref<boolean>;
    close: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: true;
    };
    message: {
        type: StringConstructor;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: StringConstructor;
        value: string[];
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        value: string[];
        default: string;
    };
    id: {
        type: NumberConstructor;
    };
    onClose: {
        type: FunctionConstructor;
    };
    zIndex: {
        type: NumberConstructor;
    };
}>>, {
    type: string;
    duration: number;
    offset: number;
    position: string;
    showClose: boolean;
}>;
export default _default;
