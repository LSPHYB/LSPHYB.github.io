var posts=["2024/11/06/html基本骨架/","2024/11/01/第一份博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };