import React, { Component } from "react";
import NewBookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./context/BookContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookContextProvider>
          <Navbar />
          <BookList />
          <NewBookForm />
        </BookContextProvider>
      </div>
    );
  }
}

export default App;
