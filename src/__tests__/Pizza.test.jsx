import { cleanup, render } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt test renders on image", () => {
  const name = "My Favourite Pizza";
  const src = "https://picsum.photos/200";
  const description = "Super cool pizza";

  const screen = render(
    <Pizza name={name} description={description} image={src} />,
  );
  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have a default image if none is provided", () => {
  const screen = render(
    <Pizza name="pizza name" description="some cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img).not.toBe("");
});
