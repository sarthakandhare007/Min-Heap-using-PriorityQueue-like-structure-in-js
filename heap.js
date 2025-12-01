var mergeKLists = function(lists) {
    let arr = [];

    // Extract all values from all lists
    for (let node of lists) {
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
    }

    // If empty, return null
    if (arr.length === 0) return null;

    // Sort all values
    arr.sort((a, b) => a - b);

    // Build final linked list
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};
