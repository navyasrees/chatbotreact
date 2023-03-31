import { Button, Widgets } from "./styles";
export const Sizes = ({ ...props }) => {
  const options = [
    {
      text: "1-10",
      id: 1,
      handler: props.actionProvider.handleSize,
    },
    {
      text: "11-50",
      id: 2,
      handler: props.actionProvider.handleSize,
    },
    {
      text: "50-100",
      id: 3,
      handler: props.actionProvider.handleSize,
    },
    {
      text: "101-500",
      id: 4,
      handler: props.actionProvider.handleSize,
    },
    {
      text: "More than 500",
      id: 5,
      handler: props.actionProvider.handleSize,
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
