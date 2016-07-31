
var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h1",
        null,
        "Comentários"
      ),
      React.createElement(CommentList, { nome: "Maria" }),
      React.createElement(CommentForm, null)
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentList" },
      "Oi! Eu sou um CommentList para ",
      this.props.nome
    );
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",

  getInitialState: function () {
    return { msg: '', comm: 'Comentando' };
  },
  componentDidMount: function () {
    var that = this;
    console.log('componentDidMount');
  },
  inpChng: function (ev) {
    this.setState({ msg: ev.target.value });
  },
  click: function (ev) {
    ev.preventDefault();
    this.setState({ msg: '' });
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "commentForm" },
      "Oi! Eu sou um CommentForm, ",
      this.state.comm,
      React.createElement("br", null),
      React.createElement("input", { value: this.state.msg, onChange: this.inpChng,
        placeholder: "Mensagem..." }),
      React.createElement("br", null),
      React.createElement(
        "button",
        { onClick: this.click },
        "Enviar"
      )
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, null), document.querySelector('.conteudo'));
