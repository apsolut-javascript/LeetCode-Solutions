package com.peter._2020._30.days.trail.june._16_Validate_IP_Address;

public class Solution {

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("(solution.validIPAddress(\"256.256.256.256\")) = " + (solution.validIPAddress("256.256" +
                ".256.256")));
        System.out.println("(solution.validIPAddress(\"172.16.254.1\")) = " + (solution.validIPAddress("172.16.254.1")));
        System.out.println("(solution.validIPAddress(\"172.16.254.01\")) = " + (solution.validIPAddress("172.16.254" +
                ".01")));
        System.out.println("(solution.validIPAddress(\"1e1.4.5.6\")) = " + (solution.validIPAddress("1e1.4.5.6")));
        System.out.println("solution.validIPAddress(\"1.1.1.1\") = " + solution.validIPAddress("1.1.1.1"));
        System.out.println("solution.validIPAddress(\"1.1.1.1.\") = " + solution.validIPAddress("1.1.1.1."));
        System.out.println("solution.validIPAddress(\"12..33.4\") = " + solution.validIPAddress("12..33.4"));
        System.out.println("solution.validIPAddress(\"20EE:FGb8:85a3:0:0:8A2E:0370:7334\") = " + solution.validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"));
        System.out.println("(solution.validIPAddress(\"2001:0db8:85a3:0000:0000:8a2e:0370:7334\")) = " + (solution.validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334")));
        System.out.println("(solution.validIPAddress(\"2001:0db8:85a3:0:0:8A2E:0370:7334:\")) = " + (solution.validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334:")));
        System.out.println("(solution.validIPAddress(\":2001:0db8:85a3:0:0:8A2E:0370:7334\")) = " + (solution.validIPAddress(":2001:0db8:85a3:0:0:8A2E:0370:7334")));
        System.out.println("solution.validIPAddress(\"20EE:Fb8:85a3:0:0:8A2E:0370:7334\") = " + solution.validIPAddress("20EE:Fb8:85a3:0:0:8A2E:0370:7334"));
        System.out.println("solution.validIPAddress(\"1081:db8:85a3:01:-0:8A2E:0370:7334\") = " + solution.validIPAddress("1081:db8:85a3:01:-0:8A2E:0370:7334"));
        System.out.println("solution.validIPAddress(\"15.16.-0.1\") = " + solution.validIPAddress("15.16.-0.1"));
        System.out.println("solution.validIPAddress(\"192.0.0.1\") = " + solution.validIPAddress("192.0.0.1"));
    }

    private static String FAIL = "Neither";

    public String validIPAddress(String IP) {
        IP = IP.toLowerCase();
        if (IP.matches(".*-.*")) return FAIL;
        if (IP.contains(".")) return testV4(IP);
        return testV6(IP);
    }

    private static String testV4(String ip) {
        if (ip.endsWith(".")) return FAIL;
        if (ip.matches(".*[a-z].*")) return FAIL;
        String[] arr = ip.split("\\.");
        if (arr.length != 4) return FAIL;
        for (String s : arr) {
            if (s.length() == 0 || s.length() > 3) return FAIL;
            if (s.charAt(0) == '0' && s.length() > 1) return FAIL;
            int val = Integer.parseInt(s);
            if (val > 255 || val < 0) return FAIL;
        }

        return "IPv4";
    }

    private static String testV6(String ip) {
        if (ip.endsWith(":")) return FAIL;
        if (ip.matches(".*[g-z].*")) return FAIL;
        String[] arr = ip.split(":");
        if (arr.length != 8) return FAIL;
        for (String s : arr) {
            if (s.length() > 4 || s.length() == 0) return FAIL;
        }
        return "IPv6";
    }
}
