class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split(' ')
        rev = []
        for word in words:
            rev.append(word[::-1])
        return ' '.join(rev)

sol = Solution()

print(sol.reverseWords("I love to code."))