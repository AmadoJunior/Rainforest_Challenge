//https://www.letsrevolutionizetesting.com/challenge

function followUrl(startUrl) {
  fetch(startUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data?.follow) followUrl(data?.follow);
    })
    .catch((e) => {
      console.error(e);
    });
}

followUrl("https://www.letsrevolutionizetesting.com/challenge");
