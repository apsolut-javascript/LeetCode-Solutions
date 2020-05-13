package com.peter._2020._30.days.trail.may._13_Remove_K_Digits;

public class Solution {
    public static void main(String[] args) {
        var s = new Solution();
        assert s.removeKdigits("1432219", 3).equals("1219");
        assert s.removeKdigits("10200", 1).equals("200");
        assert s.removeKdigits("10211", 2).equals("11");
        assert s.removeKdigits("10", 2).equals("0");
        assert s.removeKdigits("1112", 1).equals("111");
        assert s.removeKdigits("11122", 2).equals("111");
    }

    public String removeKdigits(String num, int k) {
        if (k == num.length()) return "0";

        var sb = new StringBuilder(num);

        outer:
        while (k > 0) {
            var zeroIndex = -1;
            for (int i = 0; i < k; i++) {
                if (sb.charAt(i) == '0') {
                    zeroIndex = i;
                    break;
                }
            }
            if (zeroIndex != -1) {
                sb.delete(0, zeroIndex + 1);
                k -= zeroIndex;
            } else {
                for (int i = 1; i < sb.length(); i++) {
                    if (sb.charAt(i) < sb.charAt(i - 1)) {
                        sb.deleteCharAt(i - 1);
                        k--;
                        continue outer;
                    }
                }

                sb.deleteCharAt(sb.length() - 1);
                k--;
            }
        }

        while (sb.length() > 0 && sb.charAt(0) == '0') {
            sb.deleteCharAt(0);
        }

        if (sb.length() == 0) return "0";

        return sb.toString();
    }
}
