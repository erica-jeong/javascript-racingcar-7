import { Random } from "@woowacourse/mission-utils";

class Car {
  // #name;
  // #goCount;

  constructor(name) {
    this.name = name;
    this.goCount = 0;
  }

  decisionGoStop() {
    const number = Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      this.goCount += 1;
    }
  }
}

export default Car;
