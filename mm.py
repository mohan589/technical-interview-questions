import bisect

def MovingMedian(nums):
  k = nums[0]
  nums = nums[1:]

  if k == 0: return []
  length = len(nums)
  
  if k > length:
    k = length
  ans = []

  sum = 0
  for i in range(1, k):
    sum = sum + nums[i - 1]
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
print(MovingMedian([5,2,4,6]))