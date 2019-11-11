import bisect

def MovingMedian(nums):
  k = nums[0]
  nums = nums[1:]

  if k == 0: return []
  length = len(nums)
  
  if k > length:
    k = length
  ans = []
  for i in range(1, k):
    sum = 0
    for j in range(0, i):
      sum = sum + nums[j]
    ans.append(str(int(sum / i)))

  window = sorted(nums[0:k])
  for i in range(k, length + 1):
    ans.append(str(int((window[k // 2] + window[(k - 1) // 2]) / 2.0)))
    if i == length: break
    index = bisect.bisect_left(window, nums[i - k])
    window.pop(index)
    bisect.insort_left(window, nums[i])
  res = ','
  return res.join(ans)

# keep this function call here
print(MovingMedian([3, 1, 3, 5, 10, 6, 4, 3, 1]))