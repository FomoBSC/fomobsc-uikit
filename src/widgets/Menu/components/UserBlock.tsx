import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { Profile } from "../types";

interface Props {
  profile?: Profile;
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ profile, account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, profile);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const profileEllipsis = profile && profile.username !== undefined ? `${profile.username.substring(0, 8)}...` : accountEllipsis;
  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {profile ? profileEllipsis : accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.profile === nextProps.profile && prevProps.account === nextProps.account);
