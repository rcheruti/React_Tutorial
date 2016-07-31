
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var CommentBox = React.createClass({
  displayName: "CommentBox",

  getInitialState: function () {
    return { items: [] };
  },
  addItem: function (msg) {
    this.state.items.push(msg);
    this.setState({ items: this.state.items });
  },
  removeItem: function (idx) {
    this.state.items.splice(idx, 1);
    this.setState({ items: this.state.items });
  },
  render: function () {
    var items = this.state.items.map(function (item, i) {
      return React.createElement(
        "div",
        { key: item },
        React.createElement(
          "div",
          { className: "xBtn",
            onClick: this.removeItem.bind(this, i) },
          "X"
        ),
        item
      );
    }.bind(this));

    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h1",
        null,
        "Comentários"
      ),
      React.createElement(CommentList, { nome: "Maria" }),
      React.createElement(CommentForm, { onAddItem: this.addItem }),
      React.createElement(
        "div",
        null,
        React.createElement(
          ReactCSSTransitionGroup,
          { transitionName: "example", transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
          items
        )
      )
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
    if (this.props.onAddItem) {
      this.props.onAddItem(this.state.msg);
    }
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
