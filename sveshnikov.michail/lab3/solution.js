export function sortByFrequency(arr) {
  const set = [];
  const counts = [];
  for (let i = 0; i < arr.length; i++) {
    let perm = true;
    for (let j = 0; j < set.length; j++) {
      if (set[j] === arr[i]) {
        perm = false;
        counts[j] += 1;
        break;
      }
    }
    if (perm) {
      set.push(arr[i]);
      counts.push(1);
    }
  }

  for (let i = 1; i < counts.length; i++) {
    for (let j = 0; j < i; j++) {
      if (counts[i] > counts[j]) {
        const count = counts[i];
        counts[i] = counts[j];
        counts[j] = count;

        const elem = set[i];
        set[i] = set[j];
        set[j] = elem;
      }
    }
  }

  const result = [];
  for (let i = 0; i < set.length; i++) {
    for (let j = 0; j < counts[i]; j++) {
      result.push(set[i]);
    }
  }
  return result;
}
