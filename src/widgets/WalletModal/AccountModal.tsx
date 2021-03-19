import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
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

const AccountModal: React.FC<Props> = ({ account, profile, logout, onDismiss = () => null }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);
  const title = !profile ? "Your Wallet" : profile.username;
  
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
      <Flex mb="32px">
        <LinkExternal fontSize="12px" small href={`https://bscscan.com/address/${account}`} mr="16px">
          View on BscScan
        </LinkExternal>
        <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
      </Flex>
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
      ) */}
      { profile && profile.username !== undefined ?
        <Flex mb="16px" justifyContent="center">
          <Button
            height="32px"
            width="100%"
            variant="tertiary"
            onClick={() => {
              var input = document.createElement('input');
              input.setAttribute('value', "fomobsc.com?affiliate=" + account);
              document.body.appendChild(input);
              input.select();
              var result = document.execCommand('copy');
              document.body.removeChild(input);
              if(result){
                setIsTooltipDisplayed(true);
                setTimeout(() => {
                  setIsTooltipDisplayed(false);
                }, 1000);
              }
            }}
          >
            {isTooltipDisplayed ? "Copied!" : "Copy Affiliate Link"}
          </Button>
        </Flex>
        :
        <Flex mb="16px" justifyContent="center">
          <Button
            height="32px"
            width="100%"
            disabled={true}
            variant="tertiary"
          >
            Register for Affiliate Link
          </Button>
        </Flex>
      }
      <Flex justifyContent="center">
        <StyledButton
          height="32px"
          width="100%"
          onClick={() => {
            logout();
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
