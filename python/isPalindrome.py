class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        num_str = str(x)
        test_str  = num_str[len(num_str)-1::-1]
        if test_str == num_str:
            return True 
        return False