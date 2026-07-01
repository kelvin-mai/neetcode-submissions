// Brute Force
function bruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nusm[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

// Sorting
function sorting(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
}

// Hash Set
function hashSet(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

// Hash Set Length
function hashSetLength(nums) {
  return new Set(nums).size < nums.length;
}
