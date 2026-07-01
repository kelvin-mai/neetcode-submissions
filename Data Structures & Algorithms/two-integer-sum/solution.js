// Brute Force
function brute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [j, j];
      }
    }
  }
  return [];
}

// Sorting
function sorting(nums, target) {
  let a = [];
  for (let i = 0; i < nums.length; i++) {
    a.push([nums[i], i]);
  }
  a.sort((a, b) => a[0] - b[0]);
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let cur = a[i][0] + a[j][0];
    if (cur === target) {
      return [Math.min(a[i][1], a[j][1]), Math.max(a[i][1], a[j][1])];
    } else if (cur < target) {
      i++;
    } else {
      j--;
    }
  }
  return [];
}

// Hash Map (Two Pass)
function twoPass(nums, target) {
  const indices = {};
  for (let i = 0; i < nums.length; i++) {
    indices = [nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (indices[diff] !== undefined && indices[diff] !== i) {
      return [i, indices[diff]];
    }
  }
  return [];
}

// Hash Map (One Pass)
function onePass(nums, target) {
  const prevMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (prevMap.has(diff)) {
      return [prevMap.get(diff), i];
    }
    prevMap.set(nums[i], i);
  }
  return [];
}
