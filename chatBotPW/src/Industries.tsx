import { Button, Widgets } from "./styles";
export const Industries = ({ ...props }) => {
  const options = [
    {
      text: "Startups",
      id: 1,
      handler: props.actionProvider.handleType,
    },
    {
      text: "Telecom",
      id: 2,
      handler: props.actionProvider.handleType,
    },
    {
      text: "Advertising",
      id: 3,
      handler: props.actionProvider.handleType,
    },
    {
      text: "Travel",
      id: 4,
      handler: props.actionProvider.handleType,
    },
    {
      text: "Healthcare",
      id: 5,
      handler: props.actionProvider.handleType,
    },
    {
      text: "Retail",
      id: 6,
      handler: props.actionProvider.handleType,
    },
    {
      text: "Logistics",
      id: 7,
      handler: props.actionProvider.handleType,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <Button
      key={option.id}
      onClick={() => {
        option.handler(option.text);
      }}
    >
      {option.text}
    </Button>
  ));
  return <Widgets>{optionsMarkup}</Widgets>;
};
