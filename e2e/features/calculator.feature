Feature: Super Calculator

    As a user
    I want to use the calculator to execute operations
    So I can see the resutls

    Background:
        Given The Super calculator app is open
        And the title is 'Super Calculator'

    Scenario Outline: Execute math operations using two numbers
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