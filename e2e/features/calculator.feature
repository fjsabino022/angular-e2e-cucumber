Feature: Super Calculator

    As a user
    I want to use the calculator to execute operations
    So I can see the resutls

    Background:
        Given The Super calculator app is open
        And the title is 'Super Calculator'

    Scenario Outline: Execute math operation using two numbers
        Given I have "<first>" as the first number
        And I have "<operation>" as the operation
        And I have "<second>" as the second number
        When I execute the operation
        Then The result should be "<result>"

        Examples:
            | first | operation | second | result |
            | 1     | +         | 2      | 3      |
            | -1    | +         | 1      | 0      |
            | 1     | -         | 1      | 0      |
            | 2     | *         | 4      | 8      |
            | 56    | /         | 7      | 8      |
            | 5     | %         | 5      | 0      |

    Scenario: Execute more than one operations
        Given I have "1" as the first number
        And I have "+" as the operation
        And I have "1" as the second number
        When I execute the operation
        Then The result should be "2"
        Given I have "2" as the first number
        And I have "-" as the operation
        And I have "3" as the second number
        When I execute the operation
        Then The result should be "-1"
        And Table of results should have 3 columns
        And Table of results should have 2 rows
        And Table of results in "first" row "first" column should have the real time 
        And Table of results in "first" row "second" column should have "2 - 3"
        And Table of results in "first" row "third" column should have "-1"
        And Table of results in "second" row "first" column should have the real time
        And Table of results in "second" row "second" column should have "1 + 1" 
        And Table of results in "second" row "third" column should have "2"