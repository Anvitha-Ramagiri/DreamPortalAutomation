const { test, expect } = require('@playwright/test');

test('Verify Dream Diary Table', async ({ page }) => {

    await page.goto(
        'https://arjitnigam.github.io/myDreams/dreams-diary.html'
    );

    const rows = page.locator('table tbody tr');

    // Verify total rows
    await expect(rows).toHaveCount(10);

    for (let i = 0; i < 10; i++) {

        const cols = rows.nth(i).locator('td');

        const dreamName =
            await cols.nth(0).textContent();

        const daysAgo =
            await cols.nth(1).textContent();

        const dreamType =
            await cols.nth(2).textContent();

        expect(dreamName.trim()).not.toBe('');
        expect(daysAgo.trim()).not.toBe('');

        expect(
            ['Good', 'Bad']
            .includes(dreamType.trim())
        ).toBeTruthy();
    }

    await page.screenshot({
        path: 'dreamDiary.png'
    });
});