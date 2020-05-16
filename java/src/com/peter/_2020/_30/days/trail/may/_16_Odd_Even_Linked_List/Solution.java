package com.peter._2020._30.days.trail.may._16_Odd_Even_Linked_List;

import com.peter.utils.ListNode;

public class Solution {
    public ListNode oddEvenList(ListNode head) {
        if (head == null || head.next == null || head.next.next == null) return head;
        var cur = head.next;
        var evenHead = cur;
        var even = evenHead;
        cur = cur.next;
        var oddHead = cur;
        var odd = oddHead;
        while (cur != null) {
            if (cur.next == null) break;
            cur = cur.next;
            even.next = cur;
            even = even.next;
            if (cur.next == null) break;
            cur = cur.next;
            odd.next = cur;
            odd = odd.next;
        }

        odd.next = evenHead;
        even.next = null;
        head.next = oddHead;
        return head;
    }
}
