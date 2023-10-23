export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'elimu.ai';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Free open source learning software for out-of-school children ✨🚀';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'elimu.ai\'s mission is to build innovative learning software that empowers out-of-school children to teach themselves basic reading, writing and arithmetic within 6 months.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
