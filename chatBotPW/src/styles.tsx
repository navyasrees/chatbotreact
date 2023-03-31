import React from "react";
import styled from "styled-components";
export const ChatBotContainer = styled.div`
  background-color: #add8e6;
  width: 700px;
  height: 800px;
`;
export const BotMessage = styled.div`
  background-color: #dbdee;
  height: 20px;
  width: 500px;
  margin: 10px;
  border-radius: 5px;
  padding: 2px;
  color: white;
`;
export const Button = styled.button`
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.098);
  color: #4285f4;
  background-color: white;
`;

export const Widgets = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 200px;
  align-items: left;
  justify-content: flex-end;
`;
export const ChatbotHeader = styled.div`
  height: 64px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.098);
  width: 5000px;
`;
