import { test, expect } from '@playwright/test';

// Cenário: Clicar no índice da página anterior ao agrupamento de índices

test('test', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/recursos');
  await page.getByText('7').click();
  await page.getByText('10').click();
  await page.getByText('13').click();
  await page.getByText('16').click();
  await page.getByText('19', { exact: true }).click();
  await page.getByText('20', { exact: true }).click();
  await page.getByText('17').click();

  // bug funcionalidade navegação de páginas ID 2

  await expect(page.getByText('24').first()).toBeHidden;
});