Feature: Coffee

    Scenario Outline: Coffee behave
        When a user registers a coffee with fields "<fields>" and values "<values>"
        Then the status code returned is <statusCode>

    Examples: Happy path
    | fields | values | statusCode |
    | name   | Cosi   | 200        |

    Examples: Duplicated name
    | fields | values | statusCode |
    | name   | Cosi   | 400        |
