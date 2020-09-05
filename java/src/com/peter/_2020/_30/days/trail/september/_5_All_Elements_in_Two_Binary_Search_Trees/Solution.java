package com.peter._2020._30.days.trail.september._5_All_Elements_in_Two_Binary_Search_Trees;

import com.peter.utils.TreeNode;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {
    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
        ArrayList<Integer> list = new ArrayList<>();
        traverseTree(root1, list);
        traverseTree(root2, list);
        Collections.sort(list);
        return list;
    }

    private void traverseTree(TreeNode node, List<Integer> list){
        if (node == null) {
            return;
        }

        list.add(node.val);
        traverseTree(node.left,list);
        traverseTree(node.right,list);
    }
}
