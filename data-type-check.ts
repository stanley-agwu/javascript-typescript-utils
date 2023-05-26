export const isStringType = (val: any) => typeof val === 'string' && !!String(val).length;

export const isObjectType = (val: any) =>
  typeof val === 'object' && !Array.isArray(val) && val !== null && Boolean(Object?.keys(val).length);

export const isArrayType = (val: any) =>
  typeof val === 'object' && Array.isArray(val) && Boolean(val?.length);