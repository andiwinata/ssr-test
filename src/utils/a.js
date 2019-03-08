export const callImport = async () => {
  const { logSomething } = await import('./b');
  logSomething();
}