import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printResultMessage() {
    Console.print('실행 결과');
  }

  printOneRoundResult(cars) {
    cars.forEach(car => {
      Console.print(`${car.name} : ${'-'.repeat(car.goCount)}`);
    });
    Console.print('');
  }
}

export default OutputView;
