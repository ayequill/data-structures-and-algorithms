class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for x in range(len(nums)):
            for y in range(len(nums)):
                if   nums[x] + nums[y] == target and x!=y:
                    return [x,y]


n = -2 
print(-12 == 12/-1)
