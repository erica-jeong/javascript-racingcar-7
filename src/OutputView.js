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

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default OutputView;
