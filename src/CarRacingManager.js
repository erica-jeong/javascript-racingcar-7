import InputView from './InputView.js'
import OutputView from './OutputView.js'
import Validate from './Validate.js'

class CarRacingManager {
  #inputView
  #outputView
  #validate

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validate = new Validate();
  }

  async start() {
    try {
      const carNames = await this.#getCarsName();
      console.log(carNames)
    } catch (error) {
      throw error;
    }
  }

  async #getCarsName() {
    while (true) {
      try {
        const input = await this.#inputView.readCarsName();
        this.#validate.isEmpty(input);
        this.#validate.isExceptedCarName(input);
        return input.split(',');
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
}

export default CarRacingManager;
