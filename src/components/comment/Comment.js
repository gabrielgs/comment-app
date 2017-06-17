import React, { Component } from 'react'
import './Comment.css'
class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      comment: {},
      listComments: []
    }

    this.edit = this.edit.bind(this);
    this.fillModal = this.fillModal.bind(this);

  }

  remove(comment) {
    const newState = this.props.listComments;
    if(newState.indexOf(comment) > -1) {
      newState.splice(newState.indexOf(comment), 1);
      //this.setState({comments: newState})
      this.props.updateComments(newState)
      localStorage.comments = JSON.stringify(newState);
    }

    console.log(comment)
  }

  edit() {
    const message = document.getElementById('js-editComment').value;
    const comment = this.state.comment;

    let newState = this.props.listComments;

    

    const foundIndexComment = newState.findIndex(x => x.id === comment.id);
    newState[foundIndexComment].message = message;

    //this.setState({comments: newState});
    this.props.updateComments(newState);

    localStorage.comments = JSON.stringify(newState);

  }

  fillModal(comment) {
    let inputModal = document.getElementById('js-editComment');
    inputModal.value = comment.message;

    this.setState({comment: comment});
    this.setState({listComments: this.props.listComments})

  }

  displayComments() {
    let resultArray = [];

    this.props.listComments.map( comment => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second:'numeric' };
      let createdAt = new Date(comment.createdAt).toLocaleDateString('es-MX', options);

      resultArray.push(
        <li key={comment.id} className="collection-item avatar Comment-item">
          <img className="circle" src="https://image.flaticon.com/icons/png/128/168/168875.png" alt=""/>
          <a href="#!" className="title Comment-title blue-text text-darken-3" >{comment.name}</a>
          <div className="Comment-container">
            <p id="js-message" className="Comment-message" >{comment.message}</p>
            <a href="#modal1" className="material-icons Btn-edit" onClick={this.fillModal.bind(this, comment)}>edit</a>
          </div>
          <span>{createdAt.toString()}</span>
          <i className="material-icons Btn-delete" onClick={this.remove.bind(this, comment)}>delete</i>
        </li>
      );
    });
    return resultArray;
  }

  render() {
    window.$(document).ready(function() {
      window.$('.modal').modal();
    });

    return(
      <div className="row">
        <ul className="collection">
          {this.displayComments()}
        </ul>
        <div id='modal1' className='modal'>
          <div className='modal-content'>
            <h4>Editar Comentario</h4>
            <input id="js-editComment" type="text"/>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.edit}>Guardar</a>
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancelar</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;