import _ from "lodash";

export default function capitalize(name: string) {
  return _.replace(name, /\b(\w)/g, (s: any) => s.toUpperCase());
}
