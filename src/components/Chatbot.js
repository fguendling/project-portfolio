import React from "react";
import "./Chatbot.css";

export default class Chatbot extends React.Component {
  Chat = ({ show, messages }) => (
    <div style={{ visibility: show ? "visible" : "hidden" }}>
      <div className="chat-box">
        <div className="chat-box-header">
          ChatBot
          <span className="chat-box-toggle">
            <div className="material-icons" onClick={this.toggleChat}>
              close
            </div>
          </span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs">
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
        </div>
        <div className="chat-input">
          <form>
            <input
              type="text"
              id="chat-input"
              placeholder="Send a message..."
            />
            <div
              className="chat-submit"
              id="chat-submit"
              onClick={this.submitChat}
            >
              <i className="material-icons">send</i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  Hello = ({ show }) => (
    <div style={{ visibility: show ? "visible" : "hidden" }}>
      <div
        id="chat-circle"
        className="btn btn-raised"
        onClick={this.toggleChat}
      >
        <div id="chat-overlay"></div>
        <i className="material-icons">Hi!</i>
      </div>
    </div>
  );

  state = {
    chatVisible: false,
    messages: [
      "Hello! Please note this Chatbox is work in progress in November 2023.",
    ],
  };

  generate_message = (msg) => {
    this.setState((state) => ({
      messages: [...state.messages, msg],
    }));
  };

  submitChat = () => {
    // To be investigated:
    // There is a severe xss vulnerability in the chatbot, executes any script and html can be manipulated
    let msg = "placeholder";
    this.generate_message(msg);
  };

  toggleChat = () =>
    this.setState((state) => ({
      chatVisible: !state.chatVisible,
    }));

  render() {
    return (
      <div>
        <div id="body">
          <this.Hello show={!this.state.chatVisible} />
          <this.Chat
            show={this.state.chatVisible}
            messages={this.state.messages}
          />
        </div>
      </div>
    );
  }
}
