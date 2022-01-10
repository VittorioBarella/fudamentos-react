import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // É QUANDO O COMPONENTE ACABA DE SER MONTADO.
  componentDidMount() {}

  // QUANDO SAI DA TELA ELE É DESMONTADO.
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1> Hello, World !</h1>
        <h2> It is {this.state.date.toLocaleDateString()}.</h2>
      </div>
    );
  }
}
export default Clock;
