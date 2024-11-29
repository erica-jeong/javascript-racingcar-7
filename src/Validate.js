class Validate {
  isEmpty(input) {
    if (!input.trim()) {
      throw new Error('[ERROR] 공백이 입력되었습니다.');
    }
  }

  isNumber(input) {
    const numberInput = Number(input);
    if (Number.isNaN(numberInput)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }

  isInteger(input) {
    if (!Number.isInteger(Number(input))) {
      throw new Error('[ERROR] 정수를 입력해주세요.');
    }
  }

  isPositiveNumber(input) {
    if (input <= 0) {
      throw new Error('[ERROR] 음수가 입력되었습니다.');
    }
  }

  isExceptedCarName(input) {
    const carNames = input.split(',');
    carNames.forEach(name => {
      this.isEmpty(name);
      const cName = name.trim();
      if (cName.length > 5) {
        throw new Error('[ERROR] 자동차 이름이 5자 이하가 아닙니다.');
      }
    })
  }

  isExceptedAttemptCount(input)  {
    this.isNumber(input);
    this.isInteger(input);
    this.isPositiveNumber(input);
  }
}

export default Validate;
