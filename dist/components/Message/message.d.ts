declare type messageProps = {
    type: string;
    text: string;
};
declare const MessageFn: {
    (payload: messageProps): void;
    success(text: string): void;
    error(text: string): void;
    warning(text: string): void;
};
export default MessageFn;
