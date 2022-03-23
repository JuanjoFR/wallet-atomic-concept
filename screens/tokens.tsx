import * as React from "react";
import { Alert } from "react-native";
import data from "../features/wallet/data.json";
import WalletBalance from "../style-system/organisms/wallet-balance";
import MainTemplate from "../style-system/templates/main";

function handleDepositPress() {
  Alert.alert("Go to deposit screen");
}

function handleSendPress() {
  Alert.alert("Go to deposit screen");
}

function Tokens(): JSX.Element {
  return (
    <MainTemplate
      body={
        <WalletBalance
          data={data}
          marginHorizontal="m"
          marginVertical="l"
          onDepositPress={handleDepositPress}
          onSendPress={handleSendPress}
        />
      }
    />
  );
}

export default Tokens;
