var posts=["2024/11/06/html基本骨架/","2024/11/14/关于VMWARE无法拖拽文件以及复制粘贴问题的解决方法/","2024/11/01/第一份博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };