Feature: Coffee

    Scenario Outline: Criando doação com sucesso
        When I register a coffee with fields "<fields>" and values "<values>"
        Then I verify that status code is <statusCode>

    Examples: Happy path
    | fields | values | statusCode |
    | name   | Cosi   | 200        |

    Examples: Duplicated name
    | fields | values | statusCode |
    | name   | Cosi   | 400        |
