import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";
import { Profile } from "../Menu/types";

interface Props {
  account: string;
  profile?: Profile;
  logout: () => void;
  onDismiss?: () => void;
}

const StyledButton = styled(Button)`
  background: black;
  color: white !important;
  border: 1px solid #eeb825;
`;

const StyledInput = styled(Input)`
  background: black;
  color: white;
  font-size: 14px;
  height: 35px;
  padding-right: 16px;
  padding-left: 16px;
  margin-bottom: 16px;
  border: 2.5px solid #EEB825 !important;
  boxShadow: none;
  ::placeholder {
    color: grey;
    opacity: 0.75; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: grey;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: grey;
  }
`

/*
  const [affiliate, setAffiliate] = useState(() => {
    const stickyValue = window.localStorage.getItem(AFFILIATE_KEY);
    return stickyValue !== null && stickyValue !== 'null'
      ? stickyValue
      : '';
  })
*/

const AccountModal: React.FC<Props> = ({ account, profile, logout, onDismiss = () => null }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);
  const title = profile?.username === undefined ? "Your Wallet" : profile.username;
  const [first, setFirst] = useState(true)
  const [username, setUsername] = useState(
    () => {
      if(profile?.username !== undefined){
        return profile.username;
      } else {
        const stickyValue = window.localStorage.getItem(account);
        return stickyValue !== null && stickyValue !== 'null'
          ? stickyValue
          : '';
      }
    })
  const [affiliate, setAffiliate] = useState(
    () => {
      if(profile?.affiliateAddress !== undefined && profile?.affiliateAddress !== "0x0000000000000000000000000000000000000000"){
        return profile.affiliateAddress;
      } else {
        const stickyValue = window.localStorage.getItem("FOMO_AFFILIATE");
        return stickyValue !== null && stickyValue !== 'null'
          ? stickyValue
          : '';
      }
    })

  const handleUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
    setFirst(false)
  }

  const handleAffiliate = (e: React.FormEvent<HTMLInputElement>) => {
    setAffiliate(e.currentTarget.value)
    setFirst(false)
  }
  
  const usernameLength = username.length > 3 && username.length <= 12;
  const usernameStart = username.substring(0, 2) !== '0x';
  const usernameAlphaNum = username.match(/^[0-9a-zA-Z]+$/);
  const usernameValidation = usernameLength && usernameStart && usernameAlphaNum;
  // (Web3.utils.isAddress(affiliate) && affiliate !== account) || affiliate === '';
  // TODO :: check if username exists
  const affiliateValidation = true;
  let registerText;
  if (first){
    registerText = 'Save';
  } else if (!usernameLength) {
    registerText = 'Username between 4 to 12 characters';
  } else if (!usernameStart) {
    registerText = 'Username cannot start with 0x';
  } else if (!usernameAlphaNum) {
    registerText = 'Username can only be alpha-numeric';
  } else if (!affiliateValidation) { 
    registerText = 'Affiliate address invalid';
  } else {
    registerText = 'Save';
  }

  return (
    <Modal title={title ? title : "Your Wallet"} onDismiss={onDismiss}>
      <Text
        fontSize="14px"
        color="white"
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        Your Address :
      </Text>
      <Text
        fontSize="16px"
        color="tertiary"
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        {account}
      </Text>
      <Flex mb="24px">
        <LinkExternal fontSize="12px" small href={`https://bscscan.com/address/${account}`} mr="16px">
          View on BscScan
        </LinkExternal>
        <CopyToClipboard toCopy={`fomobsc.com?affiliate=${account}`}>Copy Affiliate Link</CopyToClipboard>
      </Flex>
      <Text
        fontSize="14px"
        color="white"
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        Username :
      </Text>
      <StyledInput disabled={profile?.username !== undefined && profile?.username !== ""} value={username} placeholder="Username" onChange={handleUsername}/>
      <Text
        fontSize="14px"
        color="white"
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        Affiliate Address :
      </Text>
      <StyledInput disabled={profile?.affiliateAddress !== undefined && profile?.affiliateAddress !== "0x0000000000000000000000000000000000000000"} value={affiliate} placeholder="Affiliate Address" onChange={handleAffiliate}/>
      { /* profile && profile.affiliateAddress !== undefined && (
        <>
          <Text
            fontSize="14px"
            color="white"
            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
          >
            Affiliate Username :
          </Text>
          <Flex mb="24px">
            <Text
              fontSize="16px"
              color="tertiary"
              style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
            >
              {profile.affiliateName}
            </Text>
          </Flex>
          <Text
            fontSize="14px"
            color="white"
            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
          >
            Affiliate Address :
          </Text>
          <Text
            fontSize="16px"
            color="tertiary"
            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
          >
            {profile.affiliateAddress}
          </Text>
          <Flex mb="32px">
            <LinkExternal fontSize="12px" small href={`https://bscscan.com/address/${profile.affiliateAddress}`} mr="16px">
              View on BscScan
            </LinkExternal>
            <CopyToClipboard toCopy={profile.affiliateAddress ? profile.affiliateAddress : ''}>Copy Address</CopyToClipboard>
          </Flex>
        </>
      ) */ }

      <Flex justifyContent="center" marginBottom="16px">
        <Button
          height="32px"
          width="100%"
          disabled={!usernameValidation || !affiliateValidation}
          variant="tertiary"
          onClick={() => {
            localStorage.setItem(account, username);
            localStorage.setItem("FOMO_AFFILIATE", affiliate);
            onDismiss();
          }}
        >
          {registerText}
        </Button>
      </Flex>
      <Flex justifyContent="center">
        <StyledButton
          height="32px"
          width="100%"
          variant="tertiary"
          onClick={() => {
            logout();
            localStorage.setItem(account, "");
            localStorage.setItem("FOMO_AFFILIATE", "");
            window.localStorage.removeItem(connectorLocalStorageKey);
            onDismiss();
          }}
        >
          Logout
        </StyledButton>
      </Flex>
    </Modal>
  );
};

export default AccountModal;
