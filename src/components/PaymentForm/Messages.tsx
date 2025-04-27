type Message = {
  recipient: string;
  text: string;
};

type MessagesProps = {
  messages: Message[];
  inputID: string;
};
const Messages = ({ messages, inputID }: MessagesProps) => {
  return (
    <ul className="message-list">
      {messages.map((msg, i) => {
        return msg.recipient === inputID ? (
          <li key={i} className="message">
            {msg.text}
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default Messages;
