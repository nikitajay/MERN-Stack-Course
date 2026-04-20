//get all dashboard counters to show on dashboard

const getDashboardcount = async(req,res)=>{
    try {
res.status(200).json({ message: "get Dashboard data successful" })
    

        
    } catch (error) {
        console.log(error)
    }
}
module.exports = {getDashboardcount}