
var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="commentBox">
        <h1>Comentários</h1>
        <CommentList nome="Maria"/>
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    return (
      <div className="commentList">
        Oi! Eu sou um CommentList para {this.props.nome}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function(){
    return { msg: '', comm:'Comentando' };
  },
  componentDidMount: function(){
    var that = this;
    console.log('componentDidMount');
  },
  inpChng: function(ev){
    this.setState({ msg: ev.target.value });
  },
  click: function(ev){
    ev.preventDefault();
    this.setState({ msg: '' });
  },
  render: function(){
    return (
      <div className="commentForm">
        Oi! Eu sou um CommentForm, {this.state.comm}
        <br />
        <input value={this.state.msg} onChange={this.inpChng} 
          placeholder="Mensagem..."/>
        <br />
        <button onClick={this.click}>Enviar</button>
      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox />,
  document.querySelector('.conteudo')
);
