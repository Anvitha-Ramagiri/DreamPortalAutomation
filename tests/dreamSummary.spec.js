const { test, expect } = require('@playwright/test');

test('Verify Summary Page', async ({ page }) => {

    await page.goto(
      'https://arjitnigam.github.io/myDreams/dreams-total.html'
    );

    const body = await page.textContent('body');

    expect(body).toContain('Good Dreams');
    expect(body).toContain('6');

    expect(body).toContain('Bad Dreams');
    expect(body).toContain('4');

    expect(body).toContain('Total Dreams');
    expect(body).toContain('10');

    expect(body).toContain('Recurring Dreams');
    expect(body).toContain('2');

});