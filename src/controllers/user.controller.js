import octokit from "../utils/config.js"


const userDetail=async(req,res)=>{
  try {
    const {username}=req.body
    if(username===""){
        res.status(400).json({success:false,message:"username is required"})
    }
     const response=await octokit.users.getByUsername({
        username
     })
    res.status(response.status).json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({success:false,message:error.message})
  }
}


const userRepoDetail=async(req,res)=>{
  try {
    const {reponame}=req.params;
    const {username}=req.body;
    if(username===""){
     res.status(400).json({success:false,message:"username is required"})
    }
    const response=await octokit.rest.repos.get({
        owner:username,
        repo:reponame
    })
    res.status(response.status).json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({success:false,message:error.message})
  }
} 


const createIssueInRepo=async(req,res)=>{
  try {
    const {reponame}=req.params;
    const {username,title,body}=req.body;
    const response=await octokit.rest.issues.create({
        owner:username,
        repo:reponame,
        title,
        body
    })
    res.status(response.status).json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({success:false,message:error.message})
  }
}



export {userDetail,userRepoDetail,createIssueInRepo}