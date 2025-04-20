function fetchuserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://www.chaicode.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log(`Fetching user data...`);

    const userData = await fetchuserData();
    console.log(`User data fetched successfully!`);
    console.log("user data", userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
getUserData();
