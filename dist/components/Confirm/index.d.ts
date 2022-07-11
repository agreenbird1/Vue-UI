declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    text: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    pcancel: {
        type: FunctionConstructor;
        required: false;
    };
    pconfirm: {
        type: FunctionConstructor;
        required: false;
    };
}, {
    props: {
        title: string;
        text: string;
        pcancel?: () => void;
        pconfirm?: () => void;
    };
    visible: import("vue").Ref<boolean>;
    cancel: () => void;
    confirm: () => void;
    MyButton: import("vue").DefineComponent<{}, {}, unknown, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    text: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    pcancel: {
        type: FunctionConstructor;
        required: false;
    };
    pconfirm: {
        type: FunctionConstructor;
        required: false;
    };
}>>, {
    title: string;
    text: string;
}>;
export default _default;
