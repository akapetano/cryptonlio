export function convertSnakeCaseToCamelCase(
  obj: Record<string, any>
): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      let value = obj[key];

      if (
        typeof value === "object" &&
        !Array.isArray(value) &&
        value !== null
      ) {
        value = convertSnakeCaseToCamelCase(value);
      }

      const snakeCaseKey = key;
      const camelCaseKey = snakeCaseKey.replace(/_./g, (match) =>
        match.charAt(1).toUpperCase()
      );

      result[camelCaseKey] = value;
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
      let value = obj[key];

      if (typeof value === "object" && value !== null) {
        value = convertCamelCaseToSnakeCase(value);
      }

      const camelCaseKey = key;
      const snakeCaseKey = camelCaseKey.replace(
        /[A-Z]/g,
        (match) => `_${match.toLowerCase()}`
      );

      result[snakeCaseKey] = value;
    }
  }

  return result;
}
