import { Button, Widgets } from "./styles";
export const Frequency = ({ ...props }) => {
  const options = [
    {
      text: "Monthly",
      id: 1,
      handler: props.actionProvider.handleFreq,
    },
    {
      text: "Quaterly",
      id: 2,
      handler: props.actionProvider.handleFreq,
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
