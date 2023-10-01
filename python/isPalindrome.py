class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # num_str = str(x)
        # test_str  = num_str[len(num_str)-1::-1]
        # if test_str == num_str:
        #     return True 
        # return False
        return True if str(x) == str(x)[::-1] else False


pali  = Solution()
print(pali.isPalindrome(121))
print(pali.isPalindrome(10))
print(pali.isPalindrome(1221))