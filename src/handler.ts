import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { test_example_env } from '../src/common/config/config'

export const example = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    
    const myEnvVariable = test_example_env
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: `${myEnvVariable} Funciono mirame :)`
        })
    }
}