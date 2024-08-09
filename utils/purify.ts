import DOMPurify from "isomorphic-dompurify";

export const purify = (str: string) => DOMPurify.sanitize(str);
