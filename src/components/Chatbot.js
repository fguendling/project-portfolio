import React from "react";
import "./Chatbot.css";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";

export default class Chatbot extends React.Component {
  Chat = ({ show, messages }) => (
    <div style={{ visibility: show ? "visible" : "hidden" }}>
      <div className="chat-box">
        <div className="chat-box-header">
          ChatBot
          <span className="chat-box-toggle">
            <CloseIcon onClick={this.toggleChat}></CloseIcon>
          </span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs" id="chat-logs">
            {messages.map((message, index) =>
              index % 2 === 0 ? (
                <div className="chat-msg self">
                  <div className="cm-msg-text" key={index}>
                    {message}
                  </div>
                </div>
              ) : (
                <div className="chat-msg user">
                  <div className="cm-msg-text" key={index}>
                    {message}
                  </div>
                </div>
              ),
            )}
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
              <SendIcon></SendIcon>
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
        <ChatIcon></ChatIcon>
      </div>
    </div>
  );

  state = {
    chatVisible: false,
    chatInput: "",
    messages: ["Hello! Please note this Chatbot is work in progress."],
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
    setTimeout(() => {
      let chatLogs = document.getElementById("chat-logs");
      chatLogs.scrollTop += 10000;
    }, 1);
  };

  submitChat = (event) => {
    // To be investigated:
    // There is (was) a severe xss vulnerability in the (original jquery version of the) chatbot,
    // executes any script and html can be manipulated

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    if (formJson.msg === "") {
      return;
    }
    this.generate_message(formJson.msg);
    setTimeout(() => {
      this.generate_message("There is no backend connected currently.");
    }, 1000);
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
