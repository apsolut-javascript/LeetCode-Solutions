package com.peter._2020._30.days.trail.june._2_Delete_Node_in_a_Linked_List;

import com.peter.utils.ListNode;

public class Solution {
    public void deleteNode(ListNode node) {
        while (node.next != null) {
            node.val = node.next.val;
            if (node.next.next == null) {
                node.next = null;
            } else {
                node = node.next;
            }
        }
    }
}
