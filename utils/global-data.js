export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'elimu.ai';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Free personalized learning for every child ✨🚀';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'The purpose of elimu.ai is to provide disadvantaged children with access to quality basic education.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
