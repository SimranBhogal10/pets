import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false
};
export default MillionLint.next({
  rsc: true
})(nextConfig);