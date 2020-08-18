using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using VehicleInsuranceProject.Models;

namespace VehicleInsuranceProject.Controllers
{
    public class PoliciesControllerforRenew : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/PoliciesControllerforRenew
        public IQueryable<tbl_Policies> Gettbl_Policies()
        {
            return db.tbl_Policies;
        }

        // GET: api/PoliciesControllerforRenew/5
        [ResponseType(typeof(tbl_Policies))]
        public IHttpActionResult Gettbl_Policies(int id)
        {
            tbl_Policies tbl_Policies = db.tbl_Policies.Find(id);
            if (tbl_Policies == null)
            {
                return NotFound();
            }

            return Ok(tbl_Policies);
        }

        // PUT: api/PoliciesControllerforRenew/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_Policies(int id, tbl_Policies tbl_Policies)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_Policies.Id)
            {
                return BadRequest();
            }

            db.Entry(tbl_Policies).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_PoliciesExists(id))
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

        // POST: api/PoliciesControllerforRenew
        [ResponseType(typeof(tbl_Policies))]
        public IHttpActionResult Posttbl_Policies(tbl_Policies tbl_Policies)
        {

            int[] paymentDetails = new int[5];
            int? previousPolicyId = tbl_Policies.Prev_Policy;
            tbl_Policies tbl_policy = db.tbl_Policies.Where(m => m.Id == previousPolicyId).First();


            tbl_Policies.Policy_Type = tbl_policy.Policy_Type;
            tbl_Policies.Veh_Id = tbl_policy.Veh_Id;
            tbl_Policies.Policy_Amount = ((tbl_policy.Policy_Amount) - tbl_policy.Policy_Amount * 4 / 100);



            tbl_Policies.Policy_Date = DateTime.Now;
            tbl_Policies.Policy_Purchase_Date = DateTime.Now;
            tbl_Policies.Total_IDV = ((tbl_policy.Total_IDV - tbl_policy.Total_IDV * 5 / 100));
            int duration = tbl_Policies.Duration;

            tbl_Policies.Policy_Expiry_Date = tbl_Policies.Policy_Purchase_Date.AddYears(duration);



            tbl_Policies.Policy_Approve_Status = "Activated";
            tbl_Policies.Approved_By = "Admin";
            tbl_Policies.Policy_Payment_Status = "Not Done";
            tbl_Policies.Cust_Id = tbl_policy.Cust_Id;



            


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tbl_Policies.Add(tbl_Policies);
            db.SaveChanges();

            paymentDetails[0] = tbl_Policies.Id;
            paymentDetails[1] = tbl_Policies.Policy_Amount;
            paymentDetails[2] = tbl_Policies.Total_IDV;
            paymentDetails[3] = tbl_Policies.Veh_Id.Value;
            paymentDetails[4] = tbl_Policies.Cust_Id.Value;


            return CreatedAtRoute("DefaultApi", new { id = tbl_Policies.Id }, paymentDetails);
        }

        // DELETE: api/PoliciesControllerforRenew/5
        [ResponseType(typeof(tbl_Policies))]
        public IHttpActionResult Deletetbl_Policies(int id)
        {
            tbl_Policies tbl_Policies = db.tbl_Policies.Find(id);
            if (tbl_Policies == null)
            {
                return NotFound();
            }

            db.tbl_Policies.Remove(tbl_Policies);
            db.SaveChanges();

            return Ok(tbl_Policies);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_PoliciesExists(int id)
        {
            return db.tbl_Policies.Count(e => e.Id == id) > 0;
        }
    }
}