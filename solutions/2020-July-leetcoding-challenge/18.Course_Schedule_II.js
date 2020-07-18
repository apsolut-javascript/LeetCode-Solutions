/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const courses = prerequisites.reduce((p, c) => {
    const [course, pre] = c;
    if (!p[course]) {
      p[course] = [];
    }
    p[course].push(pre);

    return p;
  }, {});

  const result = [];
  const resultSet = new Set();
  const remains = Array.from({ length: numCourses }, (v, i) => i);
  let found = null;
  let foundIndex = -1;
  while (remains.length > 0) {
    for (let i = 0; i < remains.length; i++) {
      const course = remains[i];
      const pre = courses[course];
      if (!pre || pre.every(a => resultSet.has(a))) {
        found = course;
        foundIndex = i;
        break;
      }
    }

    if (found == null) {
      return [];
    } else {
      result.push(found);
      resultSet.add(found);
      remains.splice(foundIndex, 1);
      found = null;
    }
  }

  return result;
};

module.exports = findOrder;
