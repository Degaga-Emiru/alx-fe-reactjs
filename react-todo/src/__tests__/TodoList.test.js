// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

// eslint-disable-next-line no-undef
describe("TodoList Component", () => {
  // eslint-disable-next-line no-undef
  test("renders initial todos", () => {
    render(<TodoList />);
    // eslint-disable-next-line no-undef
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    // eslint-disable-next-line no-undef
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test("toggles a todo", () => {
    render(<TodoList />);
    const todoText = screen.getByText("Learn React");

    fireEvent.click(todoText);
    // eslint-disable-next-line no-undef
    expect(todoText).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoText);
    // eslint-disable-next-line no-undef
    expect(todoText).toHaveStyle("text-decoration: none");
  });

  // eslint-disable-next-line no-undef
  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);
    // eslint-disable-next-line no-undef
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test("clears all todos", () => {
    render(<TodoList />);
    const clearAllButton = screen.getByText("Clear All");

    fireEvent.click(clearAllButton);
    // eslint-disable-next-line no-undef
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test("displays the number of remaining todos", () => {
    render(<TodoList />);
    // eslint-disable-next-line no-undef
    expect(screen.getByText("2 todos remaining")).toBeInTheDocument();

    const todoText = screen.getByText("Learn React");
    fireEvent.click(todoText);
    // eslint-disable-next-line no-undef
    expect(screen.getByText("1 todo remaining")).toBeInTheDocument();
  });
});