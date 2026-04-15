export function loadBlogPostPage() {
  return import("./BlogPost");
}

export function loadMarkdownContent() {
  return import("../components/MarkdownContent");
}

export function preloadBlogPostRoute() {
  void Promise.all([loadBlogPostPage(), loadMarkdownContent()]);
}
