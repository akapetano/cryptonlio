export function convertSnakeCaseToCamelCase(
  obj: Record<string, any>
): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const snakeCaseKey = key;
      const camelCaseKey = snakeCaseKey.replace(/_./g, (match) =>
        match.charAt(1).toUpperCase()
      );

      result[camelCaseKey] = obj[key];
    }
  }

  return result;
}

export function convertCamelCaseToSnakeCase(
  obj: Record<string, any>
): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const camelCaseKey = key;
      const snakeCaseKey = camelCaseKey.replace(
        /[A-Z]/g,
        (match) => `_${match.toLowerCase()}`
      );

      result[snakeCaseKey] = obj[key];
    }
  }

  return result;
}
