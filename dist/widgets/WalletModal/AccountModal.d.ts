import React from "react";
import { Profile } from "../Menu/types";
interface Props {
    account: string;
    profile?: Profile;
    logout: () => void;
    onDismiss?: () => void;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
