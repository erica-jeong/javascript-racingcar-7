import InputHandler from "../src/InputHandler.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 이름 입력 기능 테스트", () => {
  test("정상적으로 자동차 이름을 입력받는다", async () => {
    const inputs = ["pobi,woni,java"];
    mockQuestions(inputs);

    const inputHandler = new InputHandler();
    const carNames = await inputHandler.readCarsName();

    expect(carNames).toEqual("pobi,woni,java");  // 예상한 입력값 확인
  });

  //예외 테스트
  test.each([
    ["pobi,javaji"],            // 6자 이상인 경우
    ["pobi, ,java"],            // 공백이 포함된 경우
    ["pobi"],                   // 이름이 하나만 입력된 경우
    [""]                        // 공백만 입력된 경우
  ])("입력 값 '%s'에 대해 예외가 발생한다", async (input) => {
    mockQuestions([input]);

    const inputHandler = new InputHandler();

    await expect(inputHandler.readCarsName()).rejects.toThrow("[ERROR]");
  });
});
