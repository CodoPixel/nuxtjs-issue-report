export default defineNuxtPlugin(nuxtApp => {
  const hello = 1;
  nuxtApp.provide('hello', () => hello);

  addRouteMiddleware('named-test', () => {
      const { $hello } = useNuxtApp();
      console.log("value of $hello =", $hello());
  });
})