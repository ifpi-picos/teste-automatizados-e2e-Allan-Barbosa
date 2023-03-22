import { test, expect } from '@playwright/test';

// Cenário: pesquisar um recurso existente

test('test', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/recursos');
  await page.getByPlaceholder('Busque por palavra-chave').click();
  await page.getByPlaceholder('Busque por palavra-chave').fill('indicador de desigualdades e aprendizagens (idea)');
  await page.locator('.container-search-click').click();
  await expect(page.locator('div').filter({ hasText: 'Indicador de Desigualdades e Aprendizagens (IDeA)' }).nth(2)).toBeVisible
});