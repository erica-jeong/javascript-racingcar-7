import CarRacingManager from './CarRacingManager.js'

class App {
  async run() {
    const carRacingManager = new CarRacingManager();
    await carRacingManager.start();
  }
}

export default App;
