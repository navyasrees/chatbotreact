import { createChatBotMessage } from "react-chatbot-kit";
import { Options } from "./Options";
import { Industries } from "./Industries";
import { Sizes } from "./Sizes";
import { Months } from "./Months";
import { Frequency } from "./Frequency";
import ActionProvider from "./ActionProvider";
import { Submit } from "./Submit";
const config = {
  botName: "",
  initialMessages: [
    createChatBotMessage(
      `Hi ! I am ALTR. I will be guiding you for this setup`,
      {}
    ),
    createChatBotMessage(`Let us start with knowing about your organization`, {
      widget: "Options",
    }),
  ],
  customComponents: {
    botAvatar: () => {},
    userAvatar: () => {},
    // botChatMessage: () => <BotChatMessage />,
    // userChatMessage: (props: JSX.IntrinsicAttributes) => (
    //   <BotChatMessage {...props} />
    // ),
  },
  widgets: [
    {
      widgetName: "Options",
      widgetFunc: ({ ...props }) => <Options {...props} />,
      props: {
        actionProvider: ActionProvider,
      },
    },
    {
      widgetName: "Industries",
      widgetFunc: (props: JSX.IntrinsicAttributes & { [x: string]: any }) => {
        return <Industries {...props} />;
      },
    },
    {
      widgetName: "Sizes",
      widgetFunc: (props: JSX.IntrinsicAttributes & { [x: string]: any }) => {
        return <Sizes {...props} />;
      },
    },
    {
      widgetName: "Months",
      widgetFunc: (props: JSX.IntrinsicAttributes & { [x: string]: any }) => {
        return <Months {...props} />;
      },
    },
    {
      widgetName: "Frequency",
      widgetFunc: (props: JSX.IntrinsicAttributes & { [x: string]: any }) => {
        return <Frequency {...props} />;
      },
    },
    {
      widgetName: "Submit",
      widgetFunc: (props: JSX.IntrinsicAttributes & { [x: string]: any }) => {
        return <Submit {...props} />;
      },
    },
  ],
};

export default config;
