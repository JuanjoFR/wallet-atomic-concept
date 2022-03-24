import * as React from "react";
import { Alert } from "react-native";
import data from "../features/wallet/data.json";
import TokensList from "../style-system/organisms/tokens-list";
import WalletBalance from "../style-system/organisms/wallet-balance";
import MainTemplate from "../style-system/templates/main";

function handleDepositPress() {
  Alert.alert("Go to deposit screen");
}

function handleSendPress() {
  Alert.alert("Go to deposit screen");
}

function handleTokenPress(id: string) {
  Alert.alert(`Go to token ${id} screen`);
}

function Tokens() {
  return (
    <MainTemplate
      body={
        <React.Fragment>
          <WalletBalance
            data={data}
            marginHorizontal="m"
            marginVertical="l"
            onDepositPress={handleDepositPress}
            onSendPress={handleSendPress}
          />
          <TokensList
            data={data.tokens}
            marginHorizontal="m"
            marginBottom="l"
            onTokenPress={handleTokenPress}
          />
        </React.Fragment>
      }
    />
  );
}

export default Tokens;
