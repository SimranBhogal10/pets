import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ["pixabay.com"]
  },
  reactStrictMode: false
};
export default MillionLint.next({
  rsc: true
})(nextConfig);