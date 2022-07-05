declare type confirmProps = {
    title: string;
    text: string;
};
declare const confirm: (payload: confirmProps) => Promise<void>;
export default confirm;
