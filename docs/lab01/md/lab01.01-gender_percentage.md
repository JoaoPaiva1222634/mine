# Demonstration #01: Gender Percentage

## Problem

Given the number of boys and girls on a class, return the percentage of boys and girls. 

## Example

Input:

    boys = 6
    girls = 9

Output:

    boys / (boys + girls) = 6 / (6+ 9) = 0.4    

## Pseudocode

### Aproach #01

```pseudocode
START
    ED: 
    boys, girls, total INTEIRO
    boysPercentage, girlsPercentage REAL
    
    READ(boys, girls)
    
    total <- boys + girls
    boysPercentage <- boys / total
    girlsPercentage <- girls / total
    
    DISPLAY(“Boys' percentage = “, boysPercentage
    DISPLAY(“Girl's percentage = “, girlsPercentage
END
```

### Aproach #02

Only returning boys' percentage.

```pseudocode
START (boys, girls)
    ED: 
    boys, girls, total INTEIRO
    boysPercentage REAL
    
    total <- boys + girls
    boysPercentage <- boys / total
    
    RETURN boysPercentage
END
```

### Aproach #03

Only returning girls' percentage.

```pseudocode
START (boys, girls)
    ED: 
    boys, girls, total INTEIRO
    boysPercentage, girlsPercentage REAL
    
    total <- boys + girls
    girlsPercentage <- girls / total
    
    RETURN girlsPercentage
END
```