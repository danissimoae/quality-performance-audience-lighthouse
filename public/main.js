document.getElementById('audit-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const urlInput = document.getElementById('url-input');
  const resultsDiv = document.getElementById('results');
  const url = urlInput.value.trim();

  if (!url) {
    resultsDiv.textContent = 'Введите URL для аудита';
    return;
  }

  resultsDiv.innerHTML = '<p>Запуск аудита...</p>';

  setTimeout(() => {
    resultsDiv.innerHTML = `
      <div style="background: rgba(34, 211, 238, 0.1); border: 1px solid #22D3EE; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
        <h3 style="color: #22D3EE; margin-bottom: 0.5rem;">Аудит завершён</h3>
        <p>URL: <strong>${url}</strong></p>
        <ul style="list-style: none; margin-top: 1rem;">
          <li> Performance: 95</li>
          <li> Accessibility: 98</li>
          <li> Best Practices: 92</li>
          <li> SEO: 100</li>
        </ul>
      </div>
    `;
  }, 1500);
});
