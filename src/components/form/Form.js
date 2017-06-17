import React, { Component } from 'react';
import './Form.css'
import uuid from 'uuid'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: JSON.parse(localStorage.getItem('comments')) || []
    }

    this.saveComment = this.saveComment.bind(this);
  }

  saveComment(e) {
    e.preventDefault();

    const id = uuid.v4();
    const email = this.email.value;
    const name = this.name.value;
    const message = this.message.value;
    const createdAt = new Date();
    const comments = this.state.comments;

    comments.push({
      id: id, 
      email: email,
      name: name,
      message: message,
      createdAt: createdAt
    });

    this.setState({comments: comments});
    this.props.updateComments(comments);

    localStorage.setItem('comments', JSON.stringify(comments));

    this.email.value = '';
    this.name.value = '';
    this.message.value = '';
  }

  render() {
    return (
      <div className="row">
          <h1 className="header center indigo-text text-darken-3">Deja un Comentario </h1>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input type="email"
                        ref={(input) => {this.email = input;}} 
                         id="email" 
                        className="validate Input"/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s6">
                <input type="text"
                        ref={(input) => {this.name= input;}} 
                         id="name" 
                        className="validate Input"/>
                <label htmlFor="name">Nombre</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" 
                          className="materialize-textarea Input"
                          ref={(input) => {this.message = input;}}
                          >
                </textarea>
                <label htmlFor="textarea1">Comentario</label>
              </div>
              <div className="input-field col s12 center">
                <button className="btn waves-effect waves-light" type="submit" onClick={this.saveComment}>
                  Agregar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
    )
  }
}

export default Form
