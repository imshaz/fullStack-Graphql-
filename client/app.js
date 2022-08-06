const GRAOHQL_URL = "http://localhost:9000/";

async function fetchGreeting() {
  const response = await fetch(GRAOHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query{
                greetings
            }
            `,
    }),
  });
  console.log({ response });
  const { data } = await response.json();
  return data;
}

fetchGreeting().then(({ greetings }) => {
  const title = document.querySelector("h1");
  title.innerHTML = greetings;
});
