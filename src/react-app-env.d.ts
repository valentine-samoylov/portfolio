// declare module "*.svg" {
//   const src: string;
//   export default src;
// }
declare module "*.svg" {
  import React = require("react");
  const src: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}
