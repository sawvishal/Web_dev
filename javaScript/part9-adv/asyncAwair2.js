function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post DATA FETCHED");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment DATA FETCHED");
    }, 3000);
  });
}

async function fetchBlogData() {
  try {
    console.log(`Fetching blog data...`);
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(`Blog data fetched successfully!`);
  } catch (error) {
    console.error("Error fetching comment data:", error);
  }
}

fetchBlogData();
