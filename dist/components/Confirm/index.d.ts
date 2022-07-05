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
    pcancel: {
        type: FunctionConstructor;
        required: true;
    };
    pconfirm: {
        type: FunctionConstructor;
        required: true;
    };
}, {
    props: {
        title: string;
        text: string;
        pcancel: () => void;
        pconfirm: () => void;
    };
    visible: import("vue").Ref<boolean>;
    cancel: () => void;
    confirm: () => void;
    MyButton: import("vue").DefineComponent<{}, {}, unknown, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    pcancel: {
        type: FunctionConstructor;
        required: true;
    };
    pconfirm: {
        type: FunctionConstructor;
        required: true;
    };
}>>, {
    title: string;
    text: string;
}>;
export default _default;
