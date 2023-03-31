import * as React from "react";
import { Widgets } from "./styles";
import { createChatBotMessage } from "react-chatbot-kit";
export const Options = ({ ...props }) => {
  const [disbale, setDisable] = React.useState(false);
  const options = [
    {
      text: "Alright",
      id: 1,
      handler: props.actionProvider.handleAlright,
    },
  ];
  const optionsMarkup = options.map((option) => (
    <button
      style={{ marginLeft: "400px" }}
      key={option.id}
      onClick={() => {
        option.handler();
        setDisable(true);
      }}
      disabled={disbale}
    >
      {option.text}
    </button>
  ));
  return <Widgets>{optionsMarkup}</Widgets>;
};
