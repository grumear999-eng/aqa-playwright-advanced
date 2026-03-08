import { test, expect } from '@playwright/test';
import { TodoPage } from '../../pages/TodoPage';

test.describe('TodoMVC UI Tests', () => {
    let todoPage: TodoPage;

    test.beforeEach(async ({ page }) => {
        todoPage = new TodoPage(page);
        await todoPage.open();
    });

    test('should add a new todo item', async () => {
        await todoPage.addTodo('Learn Playwright');
        await expect(todoPage.todoItems).toHaveCount(1);
        await expect(todoPage.todoItems).toHaveText(['Learn Playwright']);
        await expect(todoPage.todoCount).toHaveText('1 item left');
    });

    test('should complete a todo item', async () => {
        await todoPage.addTodo('Write automation tests');
        await todoPage.completeTodo('Write automation tests');
        const completedItem = todoPage.todoItems.first();
        await expect(completedItem).toHaveClass(/completed/);
        await expect(todoPage.todoCount).toHaveText('0 items left');
    });
});
