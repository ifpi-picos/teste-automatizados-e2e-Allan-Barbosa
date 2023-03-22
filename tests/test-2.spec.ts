import { test, expect } from '@playwright/test';

// Cenário: Pesquisar um recurso que não existe

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://inclua2.ipea.gov.br/recursos');
  await page.getByPlaceholder('Busque por palavra-chave').click();
  await page.getByPlaceholder('Busque por palavra-chave').fill('FASOF');
  await expect(page.getByText('Ops! nenhum resultado encontrado!')).toBeVisible();
});