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
          <form onSubmit={this.submitChat}>
            <input
              name="msg"
              type="text"
              id="chat-input"
              placeholder="Send a message..."
              value={this.state.chatInput}
              onChange={(e) => this.setChatInput(e.target.value)}
            />
            <button
              value="Submit"
              type="submit"
              class="chat-submit"
              id="chat-submit"
            >
              <i class="material-icons">send</i>
            </button>
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
    chatInput: "",
    messages: [
      "Hello! Please note this Chatbox is work in progress in November 2023.",
    ],
  };

  setChatInput = (input) => {
    this.setState(() => ({
      chatInput: input,
    }));
  };

  generate_message = (msg) => {
    this.setState((state) => ({
      messages: [...state.messages, msg],
    }));
  };

  submitChat = (event) => {
    // To be investigated:
    // There is (was) a severe xss vulnerability in the (original jquery version of the) chatbot,
    // executes any script and html can be manipulated

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    this.generate_message(formJson.msg);
    this.setChatInput("");
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
