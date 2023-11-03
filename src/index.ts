import { checkVersion as selfCheckVersion } from "./util/npm";

export const checkVersion = async () => {
  await selfCheckVersion();
};
