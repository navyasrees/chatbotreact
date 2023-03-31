import { Button } from "./styles";
export const Submit = ({ ...props }) => {
  const options = [
    {
      text: "Submit",
      id: 1,
      handler: props.actionProvider.handleSubmit,
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
  return <div>{optionsMarkup}</div>;
};
