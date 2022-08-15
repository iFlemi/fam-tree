# Family tree traversal

Still incomplete

The idea was to:

1) Traverse the example tree and convert it to a local data structure:
    Find the root node
    convert to a local node object
    do the same for all child nodes until there are no children

2) Render the tree
    Take object from 1)
    feed it to a graph drawing library // draw boxes manually and move them around manually based on depth/breadth of node/level

Spent 3 hours getting 1) working and will not have another free block of time this week.  Submitting here. Test coverage is not complete yet, render is not started, tree traversal complete.

To see the object output from 1)

clone repo
npm i
go to personHelper.test.ts
change the line `describe.skip('buildTree', function() {` to `describe.only('buildTree', function() {` (or remove the skip)
npm run test
