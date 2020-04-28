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
  }
  state = {
    greeting: ""
  }
  async componentDidMount() {
    const greeting = await this.greeting.say();
    this.setState({
      greeting: greeting
    });
  }
  render(props: AppProps, state: AppState) {
    return (
    <div>{state.greeting}</div>
    );
  }
}
