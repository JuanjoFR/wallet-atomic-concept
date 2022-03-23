import * as React from "react";
import Box from "../atoms/box";
import Button from "../atoms/button";

type Props = {
  onDepositPress: () => void;
  onSendPress: () => void;
};

function Rates({ onDepositPress, onSendPress }: Props) {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="center">
      <Button text="Deposit" marginRight="s" onPress={onDepositPress} />
      <Button text="Send" marginLeft="s" onPress={onSendPress} />
    </Box>
  );
}

export default Rates;
