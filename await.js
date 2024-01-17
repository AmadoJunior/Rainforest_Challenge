//https://www.letsrevolutionizetesting.com/challenge

async function followUrl(startUrl) {
  try {
    const res = await fetch(startUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data?.follow) followUrl(data.follow);
  } catch (e) {
    console.error(e);
  }
}

followUrl("https://www.letsrevolutionizetesting.com/challenge");
