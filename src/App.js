import React, { Component } from 'react';
import './App.css';
import Comments from './Comments';
import uuid from 'uuid'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: JSON.parse(localStorage.getItem('comments')) || [],
      newComment: {
        id: 0,
        email: '',
        message: ''
      }
    }

    this.saveComment = this.saveComment.bind(this);
  }

  saveComment(e) {
    e.preventDefault();
    
    let newComment = this.state.newComment;
    let name = this.name.value;
    let email = this.email.value;
    let message = this.message.value;
    let id = uuid.v4();

    this.setState({newComment});

    let comments = this.state.comments;
    comments.push({id: id, email: email, message: message, name: name});
    this.setState({comments: comments});

    localStorage.setItem('comments', JSON.stringify(comments));

    this.name.value = '';
    this.email.value = '';
    this.message.value = '';

    console.log(comments);
  }

  render() {
    return (
      <div className="container">
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
        <Comments listComments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
