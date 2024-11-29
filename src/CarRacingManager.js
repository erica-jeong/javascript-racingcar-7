import InputView from './InputView.js'
import OutputView from './OutputView.js'
import Validate from './Validate.js'
import Car from './Car.js'

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
      // 1. 자동차 이름을 입력 받는 기능
      const carNames = await this.#getCarsName();
      const cars = this.#makeCars(carNames);

      // 2. 시도할 횟수를 입력 받는 기능
      const attemptCount = await this.#getAtemptCount();

      // 3. 각 자동치가 전진인지 정지인지 결정하는 기능
      this.#racingOneRound(cars);

      // 4. 한번 시도 할 떄마다 실행 결과를 출력하는 기능
      this.#outputView.printResultMessage();
      this.#outputView.printOneRoundResult(cars);

      // 5. 시도 횟수만큼 3,4 번을 반복하는 기능
      for (let i = 0; i < attemptCount - 1; i += 1) {
        this.#racingOneRound(cars);
        this.#outputView.printOneRoundResult(cars);
      }

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

  async #getAtemptCount() {
    while (true) {
      try {
        const input = await this.#inputView.readAttemptCount();
        this.#validate.isEmpty(input);
        this.#validate.isExceptedAttemptCount(input);
        return Number(input);
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  #makeCars(carNames) {
    const cars = [];
    carNames.forEach(name => {
      const car = new Car(name);
      cars.push(car);
    });
    return cars;
  }

  #racingOneRound(cars) {
    cars.forEach(car => {
      car.decisionGoStop();
    });
  }
}

export default CarRacingManager;
