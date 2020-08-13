using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VehicleInsuranceProject.Models;

namespace VehicleInsuranceProject.Controllers
{
    public class UserpageController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/Userpage
       
        //public IHttpActionResult Get(int id)
        //{
        //    List<usp_GetRoleDetails_Result> list = db.usp_GetRoleDetails(id).ToList();
        //    return list;
        //}

        // GET: api/Userpage/5
        //public  usp_GetRoleDetails_Result Get(int id)
        //{
        //    //usp_GetRoleDetails_Result userdashboard = null;
        //    //List<usp_GetRoleDetails_Result> list = db.usp_GetRoleDetails(id).ToList();
            
        //    //return list;

        //}

        // POST: api/Userpage
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Userpage/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Userpage/5
        public void Delete(int id)
        {
        }
    }
}
