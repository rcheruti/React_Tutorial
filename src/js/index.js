
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup ;

var CommentBox = React.createClass({
  getInitialState: function(){
    return { items: [] };
  },
  addItem: function(msg){
    this.state.items.push( msg );
    this.setState({ items: this.state.items });
  },
  removeItem: function(idx){
    this.state.items.splice( idx, 1 );
    this.setState({ items: this.state.items });
  },
  render: function(){
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} >
          <div className="xBtn" 
            onClick={this.removeItem.bind(this, i)}>X</div> 
          {item}
        </div>
      );
    }.bind(this));
    
    return (
      <div className="commentBox">
        <h1>Comentários</h1>
        <CommentList nome="Maria"/>
        <CommentForm onAddItem={this.addItem} />
        <div>
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {items}
          </ReactCSSTransitionGroup>
        </div>
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
    if( this.props.onAddItem ){
      this.props.onAddItem( this.state.msg );
    }
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
