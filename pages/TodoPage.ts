import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TodoPage extends BasePage {
    readonly newTodoInput: Locator;
    readonly todoItems: Locator;
    readonly todoCount: Locator;

    constructor(page: Page) {
        super(page, './');
        this.newTodoInput = page.getByPlaceholder('What needs to be done?');
        this.todoItems = page.getByTestId('todo-item');
        this.todoCount = page.getByTestId('todo-count');
    }

    async addTodo(text: string) {
        await this.newTodoInput.fill(text);
        await this.newTodoInput.press('Enter');
    }

    async completeTodo(text: string) {
        const todo = this.todoItems.filter({ hasText: text });
        await todo.getByRole('checkbox').check();
    }
}
