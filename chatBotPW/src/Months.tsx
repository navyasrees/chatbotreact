import { Button, Widgets } from "./styles";
export const Months = ({ ...props }) => {
  const options = [
    {
      text: "January",
      id: 1,
      handler: props.actionProvider.handleMonth,
    },
    {
      text: "April",
      id: 2,
      handler: props.actionProvider.handleMonth,
    },
    {
      text: "July",
      id: 3,
      handler: props.actionProvider.handleMonth,
    },
    {
      text: "October",
      id: 4,
      handler: props.actionProvider.handleMonth,
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
