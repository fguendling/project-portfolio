import React from "react";
import "./Chatbot.css";

/*
function handle_chat() {
  var INDEX = 0;

  // the following code should be executed when the #chat-submit button is clicked.
  var msg = ""; //$("#chat-input").val();
  if (msg.trim() == "") {
    return false;
  }

  generate_message(msg, "self");
  var buttons = [
    {
      name: "Existing User",
      value: "existing",
    },
    {
      name: "New User",
      value: "new",
    },
  ];

  setTimeout(function () {
    generate_message(msg, "user");
  }, 1000);

  function generate_message(msg, type) {
    INDEX++;
    var str = "";
    str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + '">';
    str += '          <span class="msg-avatar">';
    str +=
      '            <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745">';
    str += "          </span>";
    str += '          <div class="cm-msg-text">';
    str += msg;
    str += "          </div>";
    str += "        </div>";
    // $(".chat-logs").append(str);
    // $("#cm-msg-" + INDEX)
    //   .hide()
    //   .fadeIn(300);
    // if (type == "self") {
    //   $("#chat-input").val("");
    // }
    // $(".chat-logs")
    //   .stop()
    //   .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
  }

  function generate_button_message(msg, buttons) {
    INDEX++;
    var btn_obj = buttons
      .map(function (button) {
        return (
          '              <li class="button"><a href="javascript:;" class="btn btn-primary chat-btn" chat-value="' +
          button.value +
          '">' +
          button.name +
          "</a></li>"
        );
      })
      .join("");
    var str = "";
    str += "<div id='cm-msg-" + INDEX + '\' class="chat-msg user">';
    str += '          <span class="msg-avatar">';
    str +=
      '            <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745">';
    str += "          </span>";
    str += '          <div class="cm-msg-text">';
    str += msg;
    str += "          </div>";
    str += '          <div class="cm-msg-button">';
    str += "            <ul>";
    str += btn_obj;
    str += "            </ul>";
    str += "          </div>";
    str += "        </div>";
    //$(".chat-logs").append(str);
    //$("#cm-msg-" + INDEX).hide().fadeIn(300);
    //$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    //$("#chat-input").attr("disabled", true);
  }

  // $(document).delegate(".chat-btn", "click", function () {
  //   var value = $(this).attr("chat-value");
  //   var name = $(this).html();
  //   $("#chat-input").attr("disabled", false);
  //   generate_message(name, "self");
  // });

}
*/

const Chat = ({ show }) => (
  <div style={{ visibility: show ? "visible" : "hidden" }}>
    <div className="chat-box">
      <div className="chat-box-header">
        ChatBot (work in progress)
        <span className="chat-box-toggle">
          <i className="material-icons">close</i>
        </span>
      </div>
      <div className="chat-box-body">
        <div className="chat-box-overlay"></div>
        <div className="chat-logs"></div>
      </div>
      <div className="chat-input">
        <form>
          <input type="text" id="chat-input" placeholder="Send a message..." />
          <button type="submit" className="chat-submit" id="chat-submit">
            <i className="material-icons">send</i>
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default class Chatbot extends React.Component {
  state = {
    chatVisible: false,
  };

  toggleChat = () =>
    this.setState((state) => ({
      chatVisible: !state.chatVisible,
    }));

  render() {
    return (
      <div>
        <div id="body">
          <div
            id="chat-circle"
            className="btn btn-raised"
            onClick={this.toggleChat}
          >
            <div id="chat-overlay"></div>
            <i className="material-icons">Hi!</i>
          </div>
          <Chat show={this.state.chatVisible} />
        </div>
      </div>
    );
  }
}
