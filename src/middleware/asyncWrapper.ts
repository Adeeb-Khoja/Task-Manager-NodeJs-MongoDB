import { Express } from "express"
export function asyncWrapper(fn: Function){
    return async (req : Express.Request, res: Express.Response, next:Function) => {
        try {
        await fn(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}

