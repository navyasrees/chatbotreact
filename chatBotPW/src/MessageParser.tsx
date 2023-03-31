class MessageParser {
  actionProvider: any;
  setState: any;
  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
  }

  parse(message: any) {
    const lowerCaseMessage = message.toLowerCase();
    if (message.length < 4) {
      this.actionProvider.handleInput(message);
    }
    if (message.length >= 4) {
      this.actionProvider.handleOrganization(message);
    }
  }
}

export default MessageParser;
// import React, { useEffect } from "react";

// interface MessageParserProps {
//   actions: any;
//   children: any;
// }

// const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
//   const parse = (message: string) => {
//     const lowerCaseMessage = message.toLowerCase();
//     console.log("parse");
//     console.log(message.length, "length");
//     if (lowerCaseMessage === "alright") {
//       actions.handleAlright();
//     }
//     if (message.length < 4) {
//       actions.handleInput();
//     }
//     if (message.length >= 4) {
//       console.log("org");
//       actions.handleOrganization();
//     }
//   };

//   return (
//     <>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions: {},
//         });
//       })}
//       ;
//     </>
//   );
// };

// export default MessageParser;
