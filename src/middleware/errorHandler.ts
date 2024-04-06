import { CustomAPIError } from "../utils/custom-api-error"

export const apiErrorHandlerMiddleWare = (err:any, req:any, res:any, next:Function) => {

    //For custom Errors
    if(err instanceof CustomAPIError){
        console.log('Custom Error..............')
        return res.status(err.statusCode).json({msg:err.message})
    }

    //For Non Customized errors
    return res.status(500).json({msg: "Something went wrong, internal server error"})
}