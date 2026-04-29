## Part 1

### Question 1 - var declaration
1) Well if add is true, then line 9 will return "values added: 20"
2) Assuming add is truen, line 13 will return "final result: 20"
3) var is not block specific, so though it is defined in the if block, it is still acessbile by the whole function, not just specficially within the block

### Question 2 - var decleration
4) "final result: 20"
5) There would be an error because result is not defined in the scope of line 13, since it only exists within the if-code block


### Question 3 - const decleration
6) Error because you attempt to change the value of constant, which can only assume the value it was orginally defined as, since js ingores errors it would just output "values added: 0"
7) Out-of-scope error since result is defined within the if statement it cannot be acessed outside of it. 


