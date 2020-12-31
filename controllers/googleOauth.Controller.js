const authCheck = (req,res,next) =>{
  if (!req.user){
    res.redirect('/')
  } else{
    next()
  }
}
async function redirect(req,res){
  res,json(req.user)
  // res.redirect('/user/profile')
}
async function logout(req,res){
  req.logout();
  res.redirect('/user/login')
}
module.exports = {
  redirect,
  authCheck
}