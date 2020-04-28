export class Greeting {
  constructor() {
  }
  async say() {
    const resp = await fetch('http://localhost:3000/hello');
    const json = await resp.json();
    return json && json.greeting;
  }
}
