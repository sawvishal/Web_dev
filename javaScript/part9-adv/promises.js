function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data!");
      }
    }, 2000);
  });
}

// let response = fetchData();
// console.log(response);

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
