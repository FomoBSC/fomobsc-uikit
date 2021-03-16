import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";
import { Profile } from "../Menu/types"

interface Props {
  account: string;
  profile?: Profile;
  logout: () => void;
  onDismiss?: () => void;
}

const StyledButton = styled(Button)`
  background: black;
  color: white !important;
  border: 1px solid #EEB825;
`;

const AccountModal: React.FC<Props> = ({ account, profile, logout, onDismiss = () => null }) => {

  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);
  const title = !profile ? 'Your Wallet' : profile.username
  return (
    <Modal title={title ? title : 'Your Wallet'} onDismiss={onDismiss}>
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
      { profile && profile.affiliateAddress != '0x0000000000000000000000000000000000000000' && 
        <>
          <Text
            fontSize="14px"
            color="white"
            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
          >
            Affiliate Username :
          </Text>
          <Flex mb="32px">
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
            <LinkExternal fontSize="12px" small href={`https://bscscan.com/address/${account}`} mr="16px">
              View on BscScan
            </LinkExternal>
            <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
          </Flex>
        </>
      }
      <Flex mb="16px" justifyContent="center">
        <Button
          height="32px"
          width="100%"
          variant="tertiary"
          onClick={() => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText("fomobsc.com?affiliate=" + account);
              setIsTooltipDisplayed(true);
              setTimeout(() => {
                setIsTooltipDisplayed(false);
              }, 1000);
            }
          }}
        >
          { isTooltipDisplayed ? 'Copied!' : 'Copy Affiliate Link' }
        </Button>
      </Flex>
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
  )
};

export default AccountModal;
