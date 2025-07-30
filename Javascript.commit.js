
(async () => {
  try {
    const avx = await import('https://cdn.jsdelivr.net/gh/abd477/avx-userMethod@main/UserMethod.js');
    avx.default();
    avx.myFunction();
  } catch (e) {
    console.error('Failed to import module:', e);
  }
});
