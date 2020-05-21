package com.peter.utils;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;

    public TreeNode() {
    }

    public TreeNode(int val) {
        this.val = val;
    }

    public TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    public static TreeNode createTree(String val) {
        String s = val.replace("[", "").replace("]", "");
        var nodes = Arrays.stream(s.split(",")).map(a -> {
            if (a.equals("null")) return null;

            return new TreeNode(Integer.parseInt(a));
        }).collect(Collectors.toList());
        return connectNodes(nodes);
    }

    private static TreeNode connectNodes(List<TreeNode> nodes) {
        for (int i = nodes.size() - 1; i >= 1; i--) {
            var cur = nodes.get(i);
            if (cur == null) continue;
            var n = i % 2 == 0 ? i - 1 : i;
            var parent = nodes.get(n >> 1);
            if (i % 2 == 0) {
                parent.right = cur;
            } else {
                parent.left = cur;
            }
        }
        return nodes.get(0);
    }
}