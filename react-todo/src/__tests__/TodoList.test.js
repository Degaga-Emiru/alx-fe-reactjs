// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

// eslint-disable-next-line no-undef
describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todoText = screen.getByText("Learn React");

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });

  test("displays the number of remaining todos", () => {
    render(<TodoList />);
    expect(screen.getByText("2 todos remaining")).toBeInTheDocument();

    const todoText = screen.getByText("Learn React");
    fireEvent.click(todoText);
    expect(screen.getByText("1 todo remaining")).toBeInTheDocument();
  });
});