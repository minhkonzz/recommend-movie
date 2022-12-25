export function groupByProperty(objectArray, property, endpoint) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ? acc[key] : [];
    return { ...acc, [key]: [...curGroup, obj[endpoint]] };
  }, {});
}

export function isSubArr(parrentArr, subArr) {
  return new Set([...parrentArr, ...subArr]).size === parrentArr.length; 
}

export const convertTime = (hourMinutes) => {
  const { h, m } = hourMinutes; 
  return h * 60 + m; 
}