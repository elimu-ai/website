export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'elimu.ai';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Free personalized learning for every child on Earth ✨🚀';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'elimu.ai\'s mission is to build educational technology that enables out-of-school children to teach themselves basic literacy & numeracy skills.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
