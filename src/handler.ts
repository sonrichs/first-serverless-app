import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

export const example = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: "Funciono mirame :)"
    }
}