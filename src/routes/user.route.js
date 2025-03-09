import { Router } from "express"
import { createIssueInRepo, userDetail, userRepoDetail } from "../controllers/user.controller.js"

const gitRouter=Router()

gitRouter.get("/",userDetail)
gitRouter.get("/:reponame",userRepoDetail)
gitRouter.post("/:reponame/create-issue",createIssueInRepo)

export default gitRouter;