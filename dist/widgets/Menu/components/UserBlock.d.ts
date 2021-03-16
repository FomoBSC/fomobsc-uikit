import React from "react";
import { Login } from "../../WalletModal/types";
import { Profile } from "../types";
interface Props {
    profile?: Profile;
    account?: string;
    login: Login;
    logout: () => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
