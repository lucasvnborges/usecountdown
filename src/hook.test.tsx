import { renderHook } from "@testing-library/react-hooks";
import useCountdown from "./";

describe("App holds a continuous timer tick", () => {
  test("if after a second has passed, the interval has increased", async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      useCountdown(new Date())
    );

    expect(result.current.seconds).toBe("00");

    await waitForValueToChange(() => result.current.seconds);

    expect(result.current.seconds).toBe("01");
  });
});
