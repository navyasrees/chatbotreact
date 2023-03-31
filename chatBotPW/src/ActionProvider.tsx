let messages = ["hi", "start"];
type UserResponses = {
  orgName?: "";
  type?: "";
  size?: "";
  tenantName?: "";
  domains?: "";
  startMonth?: "";
  frequency?: "";
  pivotMail?: "";
};
let responses: UserResponses = {};
class ActionProvider {
  createChatBotMessage: any;
  setState: any;
  createClientMessage: any;
  stateRef: any;
  createCustomMessage: any;
  messageHistory: any;
  constructor(
    createChatBotMessage: any,
    setStateFunc: any,
    createClientMessage: any,
    stateRef: any,
    createCustomMessage: any,
    ...rest: any
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
    this.messageHistory = [];
  }
  handleAlright = (e: any) => {
    const message = this.createChatBotMessage(
      "What is the name of your organization?"
    );
    messages.push("orgName");
    console.log(messages);
    this.updateChatbotState(message);
  };

  handleInput = (mes: any) => {
    if (messages[messages.length - 1] == "orgName") {
      const message = this.createChatBotMessage(
        "This answer length must be min 4"
      );
      this.updateChatbotState(message);
    }
    if (messages[messages.length - 1] === "tenant name") {
      this.handleTenant(mes);
    } else if (messages[messages.length - 1] === "email domains") {
      this.handleDomain(mes);
    } else if (messages[messages.length - 1] === "pivot mail") {
      this.handlePivotMail(mes);
    }
  };
  handleOrganization = (mes: any) => {
    if (messages[messages.length - 1] == "orgName") {
      const message = this.createChatBotMessage(
        "What industry does your organization work in?",
        {
          widget: "Industries",
        }
      );
      responses.orgName = mes;
      messages.push("type");
      this.updateChatbotState(message);
      console.log(messages);
      console.log(responses);
    }
    if (messages[messages.length - 1] === "tenant name") {
      this.handleTenant(mes);
    } else if (messages[messages.length - 1] === "email domains") {
      this.handleDomain(mes);
    } else if (messages[messages.length - 1] === "pivot mail") {
      this.handlePivotMail(mes);
    }
  };
  handleType = (key: any) => {
    if (messages[messages.length - 1] === "type") {
      const message = this.createChatBotMessage(
        "What is the size of your company?",
        {
          widget: "Sizes",
        }
      );
      this.updateChatbotState(message);
      messages.push("size");
    }

    responses.type = key;
    console.log(responses);
    console.log(messages);
  };
  handleSize = (key: any) => {
    if (messages[messages.length - 1] === "size") {
      const message = this.createChatBotMessage(
        <div>
          A preferred tenant name ? Note: A tenant name will be the name given
          to your PMS portal. For example, PossibleWorks Pvt Ltd could pick up
          “possibleworks” as the tenant name
        </div>
      );
      this.updateChatbotState(message);
      messages.push("tenant name");
    }
    responses.size = key;
    console.log(messages);
    console.log(responses);
  };
  handleTenant = (mes: any) => {
    const message = this.createChatBotMessage(
      <div>
        Which non-generic email domains of your organisation will be allowed to
        login? ex: possibleworks.com, possibleworks.in, possible.works Use comma
        seperated values. You have logged in with this domain 'gmail.com'. This
        domain is already added by default.
      </div>
    );
    this.updateChatbotState(message);
    responses.tenantName = mes;
    messages.push("email domains");
    console.log(messages);
    console.log(responses);
  };
  handleDomain = (mes: any) => {
    const message = this.createChatBotMessage(
      "Which month does your performance year start?",
      { widget: "Months" }
    );
    this.updateChatbotState(message);
    messages.push("start month");
    responses.domains = mes;
    console.log(messages);
    console.log(responses);
  };
  handleMonth = (mes: any) => {
    const message = this.createChatBotMessage(
      "Selected Goal Period frequency.",
      {
        widget: "Frequency",
      }
    );
    this.updateChatbotState(message);
    messages.push("goal frequency");
    responses.startMonth = mes;
    console.log(messages);
    console.log(responses);
  };
  handleFreq = (mes: any) => {
    const message1 = this.createChatBotMessage(
      <div>
        Let us start by setting up the Pivot Id. Note: A Pivot is a senior
        organizational leader such as CEO, who is responsible for driving the
        organizational vision & mission, and define the Annual Key Results.
      </div>
    );
    const message2 = this.createChatBotMessage(
      "Please provide pivot email address?"
    );
    this.updateChatbotState(message1);
    this.updateChatbotState(message2);
    messages.push("pivot mail");
    responses.frequency = mes;
    console.log(messages);
    console.log(responses);
  };
  handlePivotMail = (mes: any) => {
    const mail = mes;
    const domains = responses.domains?.split(",");
    let isValid = false;
    domains?.forEach((domain) => {
      if (mail.slice(-1 * domain.length) === domain) {
        isValid = true;
      }
    });
    if (isValid) {
      const message1 = this.createChatBotMessage(
        `All set, we have invited ${mes} to join as the Pivot Id for your firm`
      );
      const message2 = this.createChatBotMessage(
        "Do you wish to submit this data ?",
        {
          widget: "Submit",
        }
      );
      this.updateChatbotState(message1);
      this.updateChatbotState(message2);
      messages.push("submit");
      responses.pivotMail = mes;
      console.log(messages);
      console.log(responses);
    } else {
      this.handleInvalid(mes);
    }
  };
  handleInvalid = (mes: any) => {
    const message1 = this.createChatBotMessage("Invalid email format");
    this.updateChatbotState(message1);
  };
  handleSubmit = (mes: any) => {
    const message = this.createChatBotMessage(
      "Please wait while we create your tenant. The process usually takes 1-2 minutes."
    );
    this.updateChatbotState(message);
  };
  updateChatbotState(message: any) {
    this.setState((prevState: any) => {
      this.messageHistory = [
        ...this.messageHistory,
        ...prevState.messages,
        message,
      ];
      return {
        messages: [...prevState.messages, message],
      };
    });
  }

  getHistory = () => {
    const prev = this.messageHistory;
    return prev;
  };
}

export default ActionProvider;
// import React, { useState, useEffect } from "react";
// import { Industries } from "./Industries";
// interface Props {
//   createChatBotMessage: any;
//   createClientMessage: any;
//   createCustomMessage: any;
//   children: any;
//   setState: any;
// }

// const ActionProvider: React.FC<Props> = ({
//   createChatBotMessage,
//   setState,
//   children,
// }) => {
//   const [messageHistory, setMessageHistory] = useState<any[]>([]);

//   const handleAlright = (e: any) => {
//     const message = createChatBotMessage(
//       "What is the name of your organization?"
//     );
//     setState((prev: { messages: any }) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   const handleInput = () => {
//     const message = createChatBotMessage("This answer length must be min 4");
//     setState((prev: { messages: any }) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   const handleOrganization = () => {
//     const message = createChatBotMessage(
//       "What industry does your organization work in?",
//       {
//         widget: "Industries",
//       }
//     );
//     setState((prev: { messages: any }) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   const handleType = () => {
//     console.log("type of industry");
//   };
//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           actions: {
//             handleAlright,
//             handleInput,
//             handleOrganization,
//             handleType,
//           },
//         });
//       })}
//     </div>
//   ); // replace with your component's
// };
// export default ActionProvider;
