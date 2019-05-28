// Naive solution
// Time complexity: nlog(n);
const kClosest = (points, K) => {
  return points.sort((a,b) => getDistance(a) - getDistance(b)).slice(0,K);
};

const getDistance = point => {
  return Math.sqrt(point[0]**2 + point[1]**2);
};