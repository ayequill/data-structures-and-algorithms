def check(n,lists):
    if n == 0 and lists[n] ==9:
        lists[0] = 1
        lists.append(0) 
        return lists

    elif  lists[n] != 9  :
        value = lists[n]
      
        lists[n]  = value + 1 

        return lists


    elif lists[n] == 9  and n !=0:
        lists[n],n = 0, n-1

        return check(n , lists)
   

class Solution:
    def plusOne(self, digits):
      n  = len(digits)-1 
      
      return check(n,digits)


plusOne = Solution()

print(plusOne.plusOne([9,9]))
print(plusOne.plusOne([9,9,9]))
print(plusOne.plusOne([9,9,2,6,9,3,5,2,7,8,6]))
