import { h, Component } from "preact";
import { Greeting } from '../app/components/greeting';

interface AppProps {

}

interface AppState {
    greeting: string
}

export class App extends Component {
  greeting: Greeting
  constructor(props: AppProps) {
    super(props);
    this.greeting = new Greeting();
    this.state = {
        greeting: this.greeting.say()
    };
  }
  render(props: AppProps, state: AppState) {
    return (
    <div>{state.greeting}</div>
    );
  }
}
