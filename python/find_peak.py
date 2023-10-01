#!/usr/bin/env python
""" Module for finding peaks in a 1D array. """


def find_peak(nums):
    """ Function to find a peak in a list of integers. """
    left, right = 0, len(nums)
    
    while left < right:
        mid = (left + right) >> 1
        
        if (mid == 0 or nums[mid] >= nums[mid -1])\
            and (mid == len(nums) or nums[mid] >= nums[mid + 1]):
                return mid
        
        if mid > 0 and nums[mid] < nums[mid - 1]:
            right = mid - 1
        else:
            left = mid + 1
    return left

print(find_peak([1,2,1,3,5,6,4]))