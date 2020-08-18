using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using VehicleInsuranceProject.Models;

namespace VehicleInsuranceProject.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ClaimsController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/Claims
        public IQueryable<tbl_Claims> Gettbl_Claims()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.tbl_Claims;
        }

        // GET: api/Claims/5
        [ResponseType(typeof(tbl_Claims))]
        public IHttpActionResult Gettbl_Claims(int id)
        {
            tbl_User tbl_User = db.tbl_User.Find(id);
            if (tbl_User == null)
            {
                return NotFound();
            }
            return Ok(db.us_ClaimDetailForUser(id));
           
        }

        // PUT: api/Claims/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_Claims(int id, tbl_Claims tbl_Claims)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_Claims.Id)
            {
                return BadRequest();
            }

            db.Entry(tbl_Claims).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_ClaimsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Claims
        [ResponseType(typeof(tbl_Claims))]
        public IHttpActionResult Posttbl_Claims(tbl_Claims tbl_Claims)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            int? policyId = tbl_Claims.Pol_Id;

            tbl_Policies tbl_Policies = db.tbl_Policies.Find(policyId);
            if(tbl_Policies==null)
            {
                return BadRequest();
            }

            if(tbl_Policies.Policy_Approve_Status=="Deactivated")
            {
                return BadRequest();
            }
            int claimAmount = tbl_Policies.Total_IDV;

            tbl_Claims.Claim_Amount = claimAmount;

            tbl_Claims.Claim_Approved = "Pending";
            tbl_Claims.Date_Of_Claim = DateTime.Now;

          

            int prevClaim = db.tbl_Claims.Where(u => u.Pol_Id == tbl_Claims.Pol_Id && u.Claim_Approved=="Pending").Count();
            

            if (prevClaim >= 1)
            {
                //tbl_User tbl_User1 = db.tbl_User.Find(email);
                 return BadRequest();

            }


            db.tbl_Claims.Add(tbl_Claims);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tbl_Claims.Id }, tbl_Claims.Id);
        }

        // DELETE: api/Claims/5
        [ResponseType(typeof(tbl_Claims))]
        public IHttpActionResult Deletetbl_Claims(int id)
        {
            tbl_Claims tbl_Claims = db.tbl_Claims.Find(id);
            if (tbl_Claims == null)
            {
                return NotFound();
            }

            db.tbl_Claims.Remove(tbl_Claims);
            db.SaveChanges();

            return Ok(tbl_Claims);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_ClaimsExists(int id)
        {
            return db.tbl_Claims.Count(e => e.Id == id) > 0;
        }
    }
}